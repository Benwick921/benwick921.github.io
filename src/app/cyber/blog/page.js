"use client";
import { useEffect } from "react";
import SidebarLeft from '@/cyber/components/SidebarLeft';
import PrintIndexList from "@/cyber/components/PrintIndexList";

const BlogIndex = () => {
    var files = require("../../../cyber/database/blogdb/index.json").files; 
    var blog = [];
    files.forEach((element) =>         
    {
        var blogPost = require("../../../cyber/database/" + element);
        if(blogPost.type === "blog"){blog.push(blogPost);}
    });
    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, []);

    return (  
        <div className="App">
        
            <div className='Wrapper'>
            <SidebarLeft />
                <div className="content">
                    <div className="Post">
                        <h2><span style={{ color:'#da1953' }}>Blo</span>g Index</h2>
                        <PrintIndexList lst={blog}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
 
export default BlogIndex;

