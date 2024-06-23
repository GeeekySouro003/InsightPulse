import React from 'react'
import { useSelector } from 'react-redux'

const Profile = () => {
    const {userInfo} = useSelector(state => state.auth)
  return (
    <div className='max-w-sm min-h-[24rem] my-8 mx-auto rounded overflow-hidden shadow-lg p-4 text-lg flex flex-col justify-between'>
        <h2 className='text-2xl text-center'><span className='font-bold'>{userInfo.name}</span>'s profile</h2>
        <hr />
        <p>Username: {userInfo.name}</p>
        <p>Email: {userInfo.email}</p>
        <p>Type: {userInfo.isAdmin?'Admin':'User'}</p>
        {/* <p>Total feedbacks: {user.totalFeedbacks}</p> */}
    </div>
  )
}

export default Profile