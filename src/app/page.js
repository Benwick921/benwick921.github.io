
import Link from "next/link";
import SidebarLeft from "@/cyber/components/SidebarLeft";
import LiveSearch from "@/cyber/components/LiveSearch";
import Head from 'next/head';
// Import styles
import '../css/index.css';
import '../css/mobile-1280px.css';
import '../css/mobile-800px.css';
import '../css/mobile-768px.css';
import '../css/python-code.css';
import '../css/sql.css';
import '../css/powershell.css';
import '../css/bash.css';
import '../css/visual-basic.css';
import '../css/yara.css';
import '../css/http-request.css';


export const metadata = {
  title: "Benwick's CyberSec Writeups – CTFs, THM, HTB & Security Research",
  description:
    "Explore high-quality CTF writeups for TryHackMe (THM) & Hack The Box (HTB) by Benwick. Learn detailed exploit techniques, vulnerability research, and cybersecurity insights, including CISSP domains.",
  keywords: [
    "CTF writeups",
    "TryHackMe writeups",
    "Hack The Box writeups",
    "THM writeups",
    "HTB writeups",
    "penetration testing",
    "ethical hacking",
    "cybersecurity research",
    "exploit development",
    "Benwick",
    "CISSP domains",
    "web security",
    "binary exploitation",
    "reversing",
    "cyber threats",
    "security vulnerabilities",
  ],
  authors: [{ name: "Benwick", url: "https://benwick.github.io" }],
  openGraph: {
    title: "Benwick's CyberSec Writeups – CTFs, THM, HTB & Security Research",
    description:
      "Master CTF challenges with in-depth writeups covering THM, HTB, exploit techniques, and cybersecurity research. Learn from real-world vulnerabilities.",
    url: "https://benwick.github.io",
    siteName: "Benwick's CyberSec Writeups",
    images: [
      {
        url: "https://benwick.github.io/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Benwick's CyberSec Blog – CTF Writeups & Security Research",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benwick's CyberSec Writeups – CTFs, THM, HTB & Security Research",
    description:
      "CTF writeups, exploit techniques, and cybersecurity research. Explore THM & HTB challenges with detailed security insights.",
    creator: "@yourTwitterHandle",
    images: ["https://benwick.github.io/og-image.jpg"],
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://benwick.github.io",
  },
};



export default function Home() {
  return (
      <div className="App">     
        <div className='Wrapper'>
          3
          <SidebarLeft />
          <div className="content" style = {{paddingTop:'30px'}}>
            <LiveSearch/><br></br><br></br>
          </div>
        </div>  
      </div>   
  );
}
