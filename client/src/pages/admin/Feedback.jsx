import React from 'react'
import { AiOutlineLeft } from 'react-icons/ai';
import { useParams, Link } from 'react-router-dom'

const Feedback = () => {

  [
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
    
  const {id} = useParams();
  
  return (
    <div>
      <Link to='/admin/dashboard'><AiOutlineLeft className='inline-block'/> <u>Go back</u></Link>
      <p>Form No. {id}</p>
      <hr />
      <h2>- by {}</h2>
    </div>
  )
}

export default Feedback