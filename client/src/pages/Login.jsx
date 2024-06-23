import React ,{useState, useEffect} from 'react'
import {Link, useLocation, useNavigate} from 'react-router-dom'
import axios from 'axios'
import { LOGIN_API } from '../api/route'
import { toast } from 'react-toastify'
import { useDispatch } from 'react-redux'
import {setCredentials} from '../redux/features/authSlice'
import { useSelector } from 'react-redux';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {userInfo} = useSelector(state => state.auth)

  // For redirecting
  const {search} = useLocation()
  const sp = new URLSearchParams(search)
  const redirect = sp.get('redirect') || '/'

  useEffect(()=>{
    if(userInfo){
      navigate(redirect);
    }
  }, [navigate, redirect, userInfo])


  const submitHandler = async (e) => {
    e.preventDefault();
    try{
      const {data} = await axios.post(LOGIN_API,{email,password})
      console.log(data);
      if(data.msg === "Login Successfully"){
        toast.success(data.msg)
        console.log(data)
        localStorage.setItem('userInfo', JSON.stringify(data))
        dispatch(setCredentials(data));
        navigate(redirect)
      }
    } catch(error){
      toast.error(error?.response?.data?.message || error?.data?.message || error.message)
    }
  }
  return (
    <div>
        <section className="w-[100vw] h-[80vh] px-5">
          <div className="mt-[5rem] sm:ml-[20rem]">
            <h1 className="text-3xl font-semibold mb-4">Login</h1>
            <form onSubmit={submitHandler} className='container w-[90vw] h-64 sm:w-[50vw]'>
              {/* Email address */}
              <div className="my-[2rem]">
                <label htmlFor="" className="block text-sm font-medium text-black">
                  Email address</label>

                <input type="email" id="email" className='mt-1 p-2 border rounded w-full' value={email} onChange={e=> setEmail(e.target.value)} />
              </div>

              {/* Password */}
              <div className="my-[2rem]">
                <label htmlFor="" className="block text-sm font-medium text-black">
                  Password</label>
                <input type="password" id="password" className='mt-1 p-2 border rounded w-full' value={password} onChange={e=> setPassword(e.target.value)} />
              </div>

              {/* Submit */}
              {/* <button disabled={isLoading} type="submit" className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer my-[1rem]">{isLoading ? 'Signing In...' : 'Sign In'}
              </button> */}
              <button type='submit' className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer mb-[1rem] float-right">Log In</button>

            {/* { isLoading && <Loader /> } */}
            </form>

            <div className="mt-4">
              <p className="text-black">
                New User ? {" "}
                <Link to={redirect ? `/register?redirect-${redirect}` : '/register'} className='text-blue-500 hover:underline'>
                  Register here
                </Link>
              </p>
            </div>

          </div>
        </section>
    </div>
  )
}

export default Login