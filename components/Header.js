"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import AnimatedHamburger from "./AnimatedHamburger";

const centered = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    padding: "40px 20px",
    backgroundColor: "transparent",
};

const menuItems = [
    { label: "Home", path: "/" },
    { label: "Focus", path: "/focus" },
    { label: "Portfolio", path: "/portfolio" },
    { label: "Contact", path: "/contact" },
];

export function Header() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const divRef = useRef(null);
    const iconRef = useRef(null);

    const handleClickOutside = (event) => {
        console.log(event.target);
        if (iconRef.current && !iconRef.current.contains(event.target)) {
            setOpen(false);
        }
    };

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const toggleMenu = () => {
        setOpen(!open);
    };

    return (
        <div>
            <div
                id="icon"
                ref={iconRef}
                onClick={toggleMenu}
                className={`absolute left-1/2 -translate-x-full sm:left-[250px] top-[50px] flex flex-col items-center z-10 cursor-pointer`}
            >
                <Image
                    src="/Clearstone_Builders_Primary.png"
                    alt="CB Logo"
                    width={200}
                    height={100}
                    className={"w-[200px]"}
                />
                <AnimatedHamburger open={open} />
            </div>
            <div
                style={{ opacity: open ? "1" : "0", zIndex: open ? 9 : -1 }}
                className="bg-[#4a504df0] fixed top-0 left-0 w-screen h-screen duration-1000 ease-in-out"
                ref={divRef}
            >
                <div style={centered}>
                    <div className="flex flex-col text-center">
                        {menuItems.map((item, i) => (
                            <Link
                                key={i}
                                href={item.path}
                                className="my-4 text-2xl uppercase text-[#b6b4b1] font-thin hover:text-[#eae8e2]"
                                onClick={() => setOpen(false)}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}