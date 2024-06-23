import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Link } from 'react-router-dom'
import { cn } from "../lib/utils";

export const HoverEffect = ({
    items,
    className,
}) => {

    let [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div
        className={cn(
        "grid grid-cols-1 md:grid-cols-2  lg:grid-cols-2  py-10",
        className
        )}
        >
        {items.map((item, idx) => (
            <Link
            to={item?.link}
            key={item?.link}
            className="relative group  block p-2 h-full w-full"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
            >
                <AnimatePresence>
                    {hoveredIndex === idx && (
                        <motion.span
                        className="absolute inset-0 h-full w-full bg-tertiary block rounded-3xl"
                        layoutId="hoverBackground"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: 1,
                            transition: { duration: 0.15 },
                        }}
                        exit={{
                            opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                        }}
                        />
                    )}
                </AnimatePresence>
                <Card>
                    <img src={item.image} className="h-72 w-96"/>
                    <CardTitle>{item.title}</CardTitle>
                </Card>
            </Link>
        ))}
        </div>
    );
};

export const Card = ({
    className,
    children,
}) => {
    return (
        <div
        className={cn(
        "rounded-2xl h-full w-full p-4 overflow-hidden bg-background border border-text  relative z-20",
        className
        )}
        >
            <div className="relative z-50">
                <div className="p-4">{children}</div>
            </div>
        </div>
    );
};

export const CardTitle = ({
    className,
    children,
}) => {
    return (
        <h4 className={cn("text-text font-bold font-code tracking-wide mt-4", className)}>
            {children}
        </h4>
    );
};
export const CardDescription = ({
    className,
    children,
}) => {
    return (
        <p
        className={cn(
        "mt-8 text-gray-600 font-sans tracking-wide leading-relaxed text-sm",
        className
        )}
        >
            {children}
        </p>
    );
};