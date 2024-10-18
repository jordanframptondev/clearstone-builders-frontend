"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const centered = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "200px",
    padding: "40px 20px",
    backgroundColor: "transparent",
};

const menuItems = [
    { id: "fd9j", label: "Home", path: "/" },
    { id: "lsf0", label: "Focus", path: "/focus" },
    { id: "aa8f", label: "Portfolio", path: "/portfolio" },
    { id: "bddn", label: "Contact", path: "/contact" },
];

export function Header() {
    const [open, setOpen] = useState(false);
    const router = useRouter();
    const divRef = useRef(null);

    const handleClickOutside = (event) => {
        event.preventDefault();
        if (event.target.tagName === "A") {
            router.push(event.target.pathname);
        }
        setOpen(false);
    };

    useEffect(() => {
        // Add event listener for clicks
        document.addEventListener("mousedown", handleClickOutside);

        // Cleanup the event listener when the component unmounts
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button className="absolute z-50 text-6xl text-gray-800 left-[50px] top-[50px]" onClick={() => setOpen(!open)}>CB</button>
            <div
                style={{ opacity: open ? "1" : "0", zIndex: open ? 999 : -1 }}
                className="bg-[#56524d] fixed top-0 left-0 w-screen h-screen duration-500 ease-in-out"
                ref={divRef}
            >
                <div style={centered}>
                    <div className="flex flex-col text-center">
                        {menuItems.map((item) => (
                            <Link
                                key={item.id}
                                href={item.path}
                                className="my-2 text-white text-2xl uppercase"
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
