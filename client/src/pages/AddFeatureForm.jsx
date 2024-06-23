import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { MdOutlineClose } from "react-icons/md";
import { stars } from "../assets";
import { useSelector } from "react-redux";
import axios from 'axios'
import { ADD_SITE_FEEDBACK } from "../api/route";

const AddFeatureForm = () => {
  const [ title, setTitle ] = useState("");
  const [ description, setDescription ] = useState("");
  const { userInfo } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault()
   if(!title || !description){
    return toast.error('All Fields are Neccessary')
  }
   else{
    try {
      const token = userInfo?.token;
      if (!token) {
        navigate("/login");
      }
      if (token) {
        const { data } = await axios.post(
          ADD_SITE_FEEDBACK,
          { title, description },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (data.success) {
          toast.success(data.msg, {
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || error?.data?.message || error.message
      );
    }
   }
  };

  return (
    <div className="max-w-[300px] sm:max-w-md mx-auto p-6 border rounded-md shadow-lg mt-20 bg-tertiary">
      <div className="relative ">
        {/* Cross button for navigation */}
        <Link to="/feedback-forms" className="absolute top-0 right-0 ">
          <MdOutlineClose size={32} />
        </Link>

        {/* Form title */}
        <h2 className="text-xl font-semibold mb-4">Request a Feature</h2>

        {/* Bug report form */}
        <form onSubmit={onSubmit}>
          {/* Title input */}
          <div className="mb-4">
            <label
              htmlFor="title"
              className="block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e)=>setTitle(e.target.value)}
              className="block w-full mt-1 p-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
            />
            {/* {errors.title && <p className="text-red-500">Title is required</p>} */}
          </div>

          {/* Description textarea */}
          <div className="mb-4">
            <label
              htmlFor="description"
              className="block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e)=>setDescription(e.target.value)}
              className="block w-full mt-1 p-2 border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
              rows="4"
            ></textarea>
            {/* {errors.description && (
              <p className="text-red-500">Description is required</p>
            )} */}
          </div>

          {/* Submit button */}
          <button
            type="submit"
            className="px-6 py-2 font-medium bg-secondary text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]"
          >
            Submit
          </button>
        </form>
      </div>

      <div className="absolute top-1/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={stars}
          className="w-full"
          width={950}
          height={400}
          alt="Stars"
        />
      </div>

      <div className="absolute top-3/2 left-1/2 w-[60rem] -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <img
          src={stars}
          className="w-full"
          width={950}
          height={400}
          alt="Stars"
        />
      </div>
    </div>
  );
};

export default AddFeatureForm;