import React from 'react'
import { HoverEffect } from '../design/CardHoverEffect'
import { AddFeature, AppRatings, BugReport, CustomerPraise, CustomerSurvey, ProductReview } from '../assets';
import BackButton from '../design/DrawOutlineButton';
import { Link } from 'react-router-dom';
import { FaFire } from "react-icons/fa";

export const FeedBackForms = () => {
  return (
    <>
    <Link to="/">
      <BackButton/>
    </Link>
    <div className='max-w-5xl mx-auto mb-32'>
      <h1 className='ml-96 font-code font-bold text-3xl'>Feedback Forms</h1>
      <p className='ml-40 mt-5 font-1xl font-medium font-sans'>Explore and submit your feedback effortlessly with our user-friendly feedback forms.</p>
      <HoverEffect items={projects}/>
    </div>
    </>
  )
}

export const projects = [
  
  {
    title: "App/Site rating",
    image: AppRatings,
    link: "/app-ratings",
  },
  {
    title: "Add Feature Feedback",
    image: AddFeature,
    link: "/add-feature",
  },
  {
    title: "Bug Report",
    image: BugReport,
    link: "/report-bug",
  },
  {
    title: "Customer Survey",
    image: CustomerSurvey,
    link: "/customer-survey",
  },
];