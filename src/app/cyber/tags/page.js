"use client";
import PrintIndexList from "../../../cyber/components/PrintIndexList";
import { useState } from "react";
import SidebarLeft from "../../../cyber/components/SidebarLeft";
import Allfilter from "../../../cyber/components/AllFilters";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from 'react'
/*
Not sure why it called TagFilter when it just print the list of blogs nicely.
Used by Sidebar Right

I started to understand what it should do, given a tag it shoul print tle list of post containing such tag but at the moment
it prints all the post and di not check the tags
*/ 

const TagFilterContent = () => {
    //Cosa succede se accedo la pagina direttamente? sevo settare useState([]); altrimenti settare con il paramentro tag ce non riesco a ricevere
    var tag = useSearchParams(); // get eventua l paramenter when the funtion is called from other file)
    var postfiles = require("../../../cyber/database/blogdb/index.json").files; // Open file file containing all list of posts
    var writeupfiles = require("../../../cyber/database/writeupdb/index.json").files;
    var postLst = [];
    var writeupLst = [];
    if(tag.size)
        var [filterLst, setFilterLst] = useState([tag.get("searchTag")]); // al posto di box dovrei ricevere il parametro dai vari post
    else
    var [filterLst, setFilterLst] = useState([]);
    
    // Independent checkbox states
    const [showPosts, setShowPosts] = useState(true);
    const [showWriteups, setShowWriteups] = useState(true);

    const removeFilter = (e) =>{
        var tag =  e.target.innerText.slice(0, -1).trim(); // remove the last character (x sign)
        filterLst = filterLst.filter(str => str !== tag )
        setFilterLst([...filterLst]); // This triggers a re-render
    }

    const testFunction = (param) => {
        if(!filterLst.includes(param) && param)
            filterLst.push(param);
        setFilterLst([...filterLst]); // This triggers a re-render
    };

    // var mystyle = {}

    // if(/TagFilter*/.test(useLocation().pathname))
    //     {
    //         mystyle={
                
    //             width:'600px',
    //         }
    //     }
    var mystyle={}
    
    // find blog post filetered by tag
    postfiles.forEach((element) =>         
    {
        var post = require("../../../cyber/database/" + element); // To check what is post variable and what does it contains, single value or a list of items?
        var pass = 1;
        filterLst.forEach( (filtertag) => 
        {
            if(!post.tags.includes(filtertag))
                pass = 0;
        })
        if(pass)
            postLst.push(post);
        
    });

    // find writeups filetered by tag
    writeupfiles.forEach((element) =>         
    {
        var writeup = require("../../../cyber/database/" + element); // To check what is post variable and what does it contains, single value or a list of items?
        var pass = 1;
        filterLst.forEach( (filtertag) => 
        {
            if(!writeup.tags.includes(filtertag))
                pass = 0;
        })
        if(pass)
            writeupLst.push(writeup);
    });

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, []);
    
    // TODO Change styleand add bfilter post/writeup
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">
                <div className="Post" style={mystyle ? mystyle : {}}>
                    <h2><span style={{ color:'#da1953' }}>Ind</span>ex</h2><br></br>
                    <div className="tagfilteroption">
                        <p>
                            <input type="checkbox" name="Show Blog Posts" checked={showPosts} onChange={() => setShowPosts(!showPosts)}/><label> Show Blog Posts </label>&nbsp;
                            <input type="checkbox" name="Show Writeups" checked={showWriteups} onChange={() => setShowWriteups(!showWriteups)}/><label> Show Writeups</label>
                        </p>
                        <p style={{fontSize:"14px", color:"#979797"}}> <i>{"Click a filter to remove it."}</i><br></br>{"Searching for tag(s): "}</p>
                    
                        {filterLst.map((tag) => <button key={tag} onClick={removeFilter}><my-tag>{tag}<sup>x</sup></my-tag></button>)}
                        
                    </div>
                    <br></br><br></br>
                    {showPosts && <PrintIndexList lst={postLst}/>}
                    {showWriteups && <PrintIndexList lst={writeupLst}/>}
                </div> 
                <Allfilter onTest={testFunction}/>
            </div>
            
        </div>
    );
}

const TagFilter = () => {
    return (
        <Suspense>
            <TagFilterContent />
        </Suspense>
    );
};

export default TagFilter