import React from "react";
import { FaArrowLeft } from "react-icons/fa";

const BackButton = () => {
    return (
        <div className="ml-8 place-content-center">
            <DrawOutlineButton>
                <FaArrowLeft size={24}/>
            </DrawOutlineButton>
        </div>
    );
};

const DrawOutlineButton = ({ children, ...rest }) => {
    return (
        <button
        {...rest}
        className="group relative px-4 py-2 font-medium text-text transition-colors duration-[400ms] hover:text-tertiary"
        >
            <span>{children}</span>

            {/* TOP */}
            <span className="absolute left-0 top-0 h-[2px] w-0 bg-secondary transition-all duration-100 group-hover:w-full" />

            {/* RIGHT */}
            <span className="absolute right-0 top-0 h-0 w-[2px] bg-secondary transition-all delay-100 duration-100 group-hover:h-full" />

            {/* BOTTOM */}
            <span className="absolute bottom-0 right-0 h-[2px] w-0 bg-secondary transition-all delay-200 duration-100 group-hover:w-full" />

            {/* LEFT */}
            <span className="absolute bottom-0 left-0 h-0 w-[2px] bg-secondary transition-all delay-300 duration-100 group-hover:h-full" />
        </button>
    );
};

export default BackButton;