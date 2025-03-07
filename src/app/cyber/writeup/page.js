"use client";
import SidebarLeft from "../../../cyber/components/SidebarLeft";
import PrintIndexList from "../../../cyber/components/PrintIndexList";
import { useEffect } from "react";

const WriteupIndex = () => {
    var files = require("../../../cyber/database/writeupdb/index.json").files;
    var writeup = [];
    files.forEach((element) =>         
    {
        var writeupPost = require("../../../cyber/database/" + element);
        if(writeupPost.type === "writeup"){writeup.push(writeupPost);}
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
                        <h2><span style={{ color:'#da1953' }}>Wri</span>teup Index</h2>
                        <PrintIndexList lst={writeup}/>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WriteupIndex;