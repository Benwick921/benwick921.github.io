"use client";
import React, { useState } from 'react';
import Link from "next/link";
// Import styles
import '../../css/index.css';
import '../../css/mobile-1280px.css';
import '../../css/mobile-800px.css';
import '../../css/mobile-768px.css';
import '../../css/python-code.css';
import '../../css/sql.css';
import '../../css/powershell.css';
import '../../css/bash.css';
import '../../css/visual-basic.css';
import '../../css/yara.css';
import '../../css/http-request.css';

const SidebarLeft = () => {
    const [isOpen, setIsOpen] = useState(false); // State to control menu visibility

    const toggleMenu = () => {
        setIsOpen(!isOpen); // Toggle the isOpen state between true and false
    };

    return (
        <div>
            {/* Burger menu button visible on small screens */}
            <div className="burger-menu" onClick={toggleMenu}>
                &#9776; {/* Burger icon */}            </div>

            {/* Sidebar with conditional class for mobile view */}
            <div className={`sidebarLeft ${isOpen ? 'open' : ''}`}>
                <div className="avatar">
                    <img src="/avatar.jpg" alt="Avatar"/>
                </div>
                <ul>
                    {/*color 5555 is for disabled link color it will eventually be remove*/}
                    {/*<Link to="/"><li>Home</li></Link>*/}
                    <Link href="/"><li>Search</li></Link>
                    <Link href="/cyber/writeup/"><li>Writeups</li></Link>
                    <Link href="/cyber/blog/"><li>Blog</li></Link>
                    <Link href="/cyber/tags/"><li>Tags</li></Link>
                    
                    <Link href=""><li style={{ color: "#555555" }}>Resources</li></Link>
                    <Link href=""><li style={{ color: "#555555" }}><s>Contact</s></li></Link>
                </ul>
            </div>
        </div>
    );
}

export default SidebarLeft;
