import React from 'react'

const TopUserslist = () => {
    // Dummy data for top users with feedback entries
  const topUsers = [
    { id: 1, name: 'John Doe', email: 'johndoe@example.com', feedbackCount: 15 },
    { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', feedbackCount: 12 },
    { id: 3, name: 'Alice Johnson', email: 'alicejohnson@example.com', feedbackCount: 10 },
    { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com', feedbackCount: 8 },
    { id: 5, name: 'Emma White', email: 'emmawhite@example.com', feedbackCount: 6 },
  ];

  return (
    <div>
        <h2 className='text-xl sm:text-2xl text-sky-800 text-center mb-4'>Top Feedback Contributors</h2>
        <table className="table-fixed w-[100%]">
        <thead>
          <tr className='text-xs'>
            <th className='w-1/3 font-thin'>Name</th>
            <th className='w-1/3 font-thin'>Email</th>
            <th className='w-1/3 font-thin'>Feedback Count</th>
          </tr>
        </thead>
        <tbody>
          {
            topUsers.map((user) => (
              <tr key={user.id} className='text-center text-base h-12 border-b-2'>
                <td>{user.name}</td>
                <td className='line-clamp-1'>{user.email}</td>
                <td>{user.feedbackCount}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default TopUserslist