import React from 'react'
import { Link } from 'react-router-dom'

const Notfound = () => {
  return (
    <div className='flex flex-col items-center py-24'>
        <h2 className='m-16 text-8xl font-bold'>404</h2>
        <p className='m-4 text-2xl'>That page appears to be missing !</p>
        <p className='m-4 text-2xl'>Take a ride back 
          <Link to='/' className='text-cyan-600 font-semibold'> Home</Link>
        </p>
    </div>
  )
}

export default Notfound