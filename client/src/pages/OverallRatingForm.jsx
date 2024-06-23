import React, { useEffect, useState } from "react";
import { thankyou } from "../assets";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineClose } from "react-icons/md";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { ADD_SITE_RATING, GET_USER_DATA } from "../api/route";
import { setCredentials } from "../redux/features/authSlice";

const OverallRatingForm = () => {
  const [rateValue, setRateValue] = useState(0);
  const [isSubmit, setIsSubmit] = useState(false);
  const { userInfo } = useSelector((state) => state.auth);
  const dispatch = useDispatch()
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (rateValue) {
      try {
        const token = userInfo?.token;
        if (!token) {
          navigate("/login");
        }
        if (token) {
          const { data } = await axios.post(
            ADD_SITE_RATING,
            { rating: rateValue },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (data.success) {
            toast.success(data.msg);
			setIsSubmit(true)
          }
        }
      } catch (error) {
        toast.error(
          error?.response?.data?.message ||
            error?.data?.message ||
            error.message
        );
      }
    }
  };

  const getUserInfo = async () => {
	const token = userInfo?.token;
	const { data } = await axios.get(GET_USER_DATA, {
	  headers: {
		Authorization: `Bearer ${token}`,
	  },
	});
	if (data.msg === "User Fetched Successfully") {
	//   localStorage.setItem("userInfo", JSON.stringify(data.data));
	  dispatch(setCredentials(data));
	}
  };

  useEffect(() => {
	getUserInfo()
	if(userInfo?.rating){
		setRateValue(userInfo?.rating)
		setIsSubmit(true)
	}
  }, [userInfo,rateValue,isSubmit]);

  return (
    <>
      <div className=" h-screen flex justify-center items-center">
        <div className="w-96  whitespace-nowrap overflow-hidden transition-all">
          <div
            className="inline-block break-words align-top whitespace-normal transition-all h-96 w-96"
            style={{
              transform: isSubmit ? "translateX(-100%)" : "translateX(0%)",
            }}
          >
            <div
              className="w-96  p-5 rounded-3xl text-white flex flex-col gap-8"
              style={{
                background: "#222731",
              }}
            >
              <div>
                <Link to="/forms" className="absolute top-5 right-5">
                  <MdOutlineClose size={32} />
                </Link>
              </div>
              <h1 className="text-2xl font-bold">How did we do?</h1>
              <p className="text-gray-400 text-sm">
                Please rate your overall experience with our service. Your
                feedback helps us improve and provide better service in the
                future.
              </p>
              <div className="grid grid-cols-5 gap-5">
                {[1, 2, 3, 4, 5].map((value) => {
                  return (
                    <div
                      key={value}
                      className={`grid place-content-center  h-12 w-12 rounded-full cursor-pointer  transition-all ${
                        value === rateValue
                          ? "bg-orange-500  text-white"
                          : "text-gray-400 hover:bg-white hover:text-secondary  bg-zinc-900"
                      }`}
                      onClick={() => setRateValue(value)}
                    >
                      {value}
                    </div>
                  );
                })}
              </div>
              <button
                className="w-full font-medium bg-secondary text-white transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px] rounded-3xl py-3 hover:bg-white hover:text-secondary"
                onClick={handleSubmit}
              >
                Submit
              </button>
            </div>
          </div>
          <div
            className="inline-block whitespace-normal transition-all  w-96"
            style={{
              transform: isSubmit ? "translateX(-100%)" : "translateX(0%)",
            }}
          >
            <div
              className="w-96 p-5 rounded-3xl text-white flex flex-col items-center gap-8"
              style={{
                background: "#222731",
              }}
            >
              <div>
                <Link to="/forms" className="absolute top-5 right-5">
                  <MdOutlineClose size={32} />
                </Link>
              </div>
              <img
                src={thankyou}
                alt="Thank you"
                className="mx-auto object-center object-cover"
                width={150}
                height={150}
              />
              <span className="text-center bg-zinc-900  px-5 py-2 rounded-3xl text-tertiary">
                You select {rateValue} out of 5
              </span>

              <h1 className="text-2xl font-bold text-center">Thank you!</h1>
              <p className="text-sm text-gray-400 mb-10 text-center h-full">
                Thank you for taking the time to provide your feedback. Your
                input is valuable to us and helps us improve our services. We
                appreciate your support and look forward to serving you better
                in the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OverallRatingForm;