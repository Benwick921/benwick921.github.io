"use client";
import Link from "next/link";
/* 
    I started to understand...
    This bar print the tags in a way that it is a link function, upon clicking the link
    it calls the function TagFilter which should filter all the posts and render a list
    of post with the given tag
*/

/*
Attenzione per index di index di index!!!!!!!
Quanti livelli di index voglio creare al max?
Index ricorsivi??????????

In genere ho solo 2 livelli di index ma potrei scrivere il codice dinamico per qualsiasi livello di profondita
*/

const Index = (postname) => {
    var post = require("../database/"+postname.postname);
    var sections = post.body;
    var path = post.path;
    var postType = post.type; //blog vs writeup
    var sectionsID = []; // Array fatto da Index, lvl dove il livello indica la profondita del index
    
    const updateIndexDepth = () => {
        if (typeof window === "undefined") return;
        const width = window.innerWidth; // Get the current window width
        // Check the screen size and set indexDepth accordingly
        if (width <= 1280)
            return 1;
        return 2; // default value
    }
    var indexDepth = updateIndexDepth(); // How Indepth the indext should be?

    // sections is an array of section of the post and they can be recusive n depth
    // Utility fuction to retrieve all index and depth level
    const FindIndexesInDepth = (sections, lv) =>{
        if(sections.body !== undefined)return;
        sections.forEach(section => {
            if(typeof(section.id) !== 'undefined' && lv>0 && lv<= indexDepth && section.id !== 'banner') // avoid printing banners information
                sectionsID.push([section.id, lv]);
            if(typeof(section.body)=="object")
                FindIndexesInDepth(section.body, lv+1)
        });           
    }
    FindIndexesInDepth(sections, 0);
    return (
        <div>   
            {sectionsID.map((index, i) => <Link key={i} style={{ fontSize: 16-(index[1]-1)*2+"px", marginLeft: (index[1]-1)*20+"px"}} href={"/cyber/"+postType+"/"+path+"#"+index[0].replaceAll(" ","-")}>{index[0]}<br></br></Link>)}
        </div>
    );
}


const SidebarRight = (parameters) => {
    var mystyle=parameters.mystyle;
    var index = Index(parameters);
    var tags = require("../database/"+parameters.postname).tags.sort();
    // var isTagFilter = (/TagFilter*/.test(useLocation().pathname));
    // if(/TagFilter*/.test(useLocation().pathname))
    // {
    //     mystyle={
    //         width:'500px',
    //         position:'fixed'
    //     }
    // }
    return(
    //<div className="sidebarRight" style={mystyle ? mystyle : {}}>
    <div className="sidebarRight">
        <div className="sidebarRightChild">
            <h2>Index</h2>
            {index}<br></br>
            <h2>Tags</h2>
            <div className="tags">
                
                {tags.map((tag, index) => <Link key={index} href={{pathname:"/cyber/tags/",query:{searchTag:tag }}}  style={{ marginTop:10 }}><my-tag>{tag}</my-tag></Link>)}
            </div>
        </div>
    </div>
    );
}
 
export default SidebarRight;