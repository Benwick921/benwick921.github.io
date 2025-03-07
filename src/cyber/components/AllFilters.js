"use client";
const Allfilter = ({ onTest }) =>{
    var postfiles = require("../database/blogdb/index.json").files; // Open file file containing all list of posts
    var writeupfiles = require("../database/writeupdb/index.json").files;
    var postTags = [];
    var writeupTags = [];

    const handleButtonClick = (e) => {
        const buttonText = e.target.innerText.slice(0, -1).trim(); // remove the last character (+ sign)
        if (onTest) onTest(buttonText);  // Pass the button text as a parameter
    };

    // find all tags in all posts and writeups with no dup
    postfiles.forEach((post) =>         
        {
            var tags = require("../database/"+post).tags;
            postTags = postTags.concat(tags)
            
        });
    var postTags = Array.from(new Set(postTags));
    
    // find writeups filetered by tag
    writeupfiles.forEach((writeup) =>         
        {
            var tags = require("../database/" + writeup).tags;
            writeupTags = writeupTags.concat(tags);
        });
    var tags = Array.from(new Set(writeupTags.concat(postTags)));
    tags.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase())); // sort arrays ignoring case sensitivity (e.g A b c D E f g)
    return(

        <div className="allfilter">
            <div className="allfilterchild">
        <h2>Add Filter Tags</h2>
            <div className="tags">
                {/*tags.map(tag => <Link to={`/TagFilter/${ tag }`} style={{ marginTop:10 }}><my-tag>{tag}</my-tag></Link>)*/}
                {tags.map(tag => <button key={tag} onClick={handleButtonClick}><my-tag>{tag}<sup>+</sup></my-tag></button>)}
            </div>
            </div>
        </div>
    )
}

export default Allfilter