import React from 'react'
import { Link } from 'react-router-dom';
import { AiFillDelete, AiOutlineDelete, AiOutlineHistory, AiOutlineLeft, AiOutlineSortDescending } from "react-icons/ai";



const Feedslist = () => {
  // dummy data of recent feedbacks from users
  const feedbacks = [
    {
      "UserId": "user1",
      "UserEmail": "user1@example.com",
      "companyName": "Tech Innovators Inc.",
      "message": "Great service and support. Really appreciated the quick response time.",
      "rating": 5,
      "date": "2024-05-20T08:00:00Z"
    },
    {
      "UserId": "user2",
      "UserEmail": "user2@example.com",
      "companyName": "Creative Solutions LLC",
      "message": "The platform is user-friendly and efficient. Had a minor issue with the interface.",
      "rating": 4,
      "date": "2024-05-19T10:30:00Z"
    },
    {
      "UserId": "user3",
      "UserEmail": "user3@example.com",
      "companyName": "Business Insights Co.",
      "message": "Satisfied with the overall experience. The customer service can be improved.",
      "rating": 3,
      "date": "2024-05-18T14:45:00Z"
    },
    {
      "UserId": "user4",
      "UserEmail": "user4@example.com",
      "companyName": "Market Leaders Ltd.",
      "message": "Excellent tools and features, but had some issues with the initial setup.",
      "rating": 4,
      "date": "2024-05-17T09:15:00Z"
    },
    {
      "UserId": "user5",
      "UserEmail": "user5@example.com",
      "companyName": "NextGen Tech",
      "message": "Highly recommend for its innovative solutions and great customer support.",
      "rating": 5,
      "date": "2024-05-16T13:20:00Z"
    },
    {
      "UserId": "user6",
      "UserEmail": "user6@example.com",
      "companyName": "Startup Hub",
      "message": "The services provided were decent, but there's room for improvement in the documentation.",
      "rating": 3,
      "date": "2024-05-15T11:05:00Z"
    }
  ];

  return (
    <main className='px-4 sm:px-28 py-2' id='formlist'>
        
      <div className='flex justify-between text-xl my-4'>
        <div>
          <p className='inline-block'>Recent feedbacks</p>
          <AiOutlineHistory color='grey' className='inline-block mx-2' />
        </div>
        <button className='text-sm sm:text-base'>Sort <AiOutlineSortDescending color='blue' className='inline-block mx-2' /></button>
      </div>

      <table className="table-fixed w-[100%]">
        <thead>
          <tr className='text-xs sm:text-base'>
            <th className='w-1/4'>Email</th>
            <th className='w-1/4'>Company</th>
            <th className='w-1/4'>Date</th>
            <th className='w-1/4'><button>Delete all <AiFillDelete color='red' className='inline-block'/></button></th>
          </tr>
        </thead>
        <tbody>
          {
            works.map((feedbacks, i) => (
              <tr key={i} className='text-center text-xs sm:text-base h-12 border-b-2'>
                <td>
                  <Link to={`/admin/feedback/${i}`}>{feedbacks.UserEmail}</Link>
                </td>
                <td>{feedbacks.companyName}</td>
                <td>{feedbacks.date}</td>
                <td><button> <AiOutlineDelete color='red' /> </button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </main>
  )
}

export default Feedslist