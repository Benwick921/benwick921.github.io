"use client";
import React, { useState } from 'react';
import writeupIndex from '../database/writeupdb/index.json';
import blogIndex from '../database/blogdb/index.json';
import Link from "next/link";

const LiveSearch = () => {
    const [query, setQuery] = useState("");
    const [showWriteups, setShowWriteups] = useState(true);
    const [showBlogs, setShowBlogs] = useState(false);

    const handleInputChange = (e) => {
        setQuery(e.target.value);
    };

    // Collect all descriptions from writeups if `showWriteups` is checked
    let allSearchDescriptions = [];
    if (showWriteups) {
        writeupIndex.files.forEach(writeupPath => {
            const writeup = require(`../database/${writeupPath}`);
            const writeupName = writeup.title;
            const path = writeup.path;
            writeup.search.forEach(searchDescription => {
                allSearchDescriptions.push([writeupName, searchDescription, path]);
            });
        });
    }

    // Collect all descriptions from blogs if `showBlogs` is checked
    if (showBlogs) {
        blogIndex.files.forEach(blogPath => {
            const blog = require(`../database/${blogPath}`);
            const blogName = blog.title;
            blog.search.forEach(searchDescription => {
                allSearchDescriptions.push([blogName, searchDescription]);
            });
        });
    }

function highlightText(description, queryWords) {
    // Process description directly from JSON (raw content)
    let processedDescription = description;
    // Define colors for highlights
    const uniqueColors = [
        "#ffff7a", // Yellow (Traditional Highlighter Yellow)
        "#ffccdd", // Light Pink
        "#b5ffb8", // Light Green
        "#a3d6ff", // Light Blue
        "#ffc6b5", // Coral Orange
        "#f6bfff", // Medium Purple
        "#d6d6d6", // Grey (used for subtle highlights)
    ];

    // First, search for the words and apply placeholders to mark them
    queryWords.forEach((word, index) => {
        
        // Avoid conflicts by using a more unique placeholder
        const regex = new RegExp(`(${word})`, "gi"); // Match each query word case-insensitively
        //const color = uniqueColors[index % uniqueColors.length]; // Assign a unique color
        processedDescription = processedDescription.replace(
            regex,
            `<!---${index}-->$1<!--/-${index}-->`
        );
    });

    // Now, replace the placeholders with the final HTML for background color highlights
    queryWords.forEach((_, index) => {
        const color = uniqueColors[index % uniqueColors.length];
        const highlightTag = `<span style="background: ${color};">`;

        // Replace the placeholder markers with the actual highlight HTML tag
        processedDescription = processedDescription
            .replace(new RegExp(`<!---${index}-->`, "g"), highlightTag)
            .replace(new RegExp(`<!--/-${index}-->`, "g"), `</span>`);
    });

    return processedDescription;
    }

    // Filter descriptions that match query
    //console.log(">>>",allSearchDescriptions)
    const filteredResults = allSearchDescriptions.filter(item => {
        if (!query) return false;
        const description = item[1].description.toLowerCase();  
        var searchWords = query.toLowerCase().split(" ");
        searchWords = searchWords.filter(element => element !== "");
        return searchWords.every(word => description.includes(word));
    });
    var cont=0;
    var color0 = '#fafafa'
    return (
        <div className='search'>
            <h1 style={{fontSize: '50px', fontFamily: "arial"}}><span style={{ color:'#da1953', fontFamily: "arial" }}>BEN</span>WICK</h1><a href="https://x.com/benwick921">twitter</a> - <a href=".benwick">discord</a> - <a href="#">linkedin</a> - <a href="mailto:benwick921@gmail.com">email</a><br></br><hr></hr>
            
            <div className="tagfilteroption">
                <p>
                    <input type="checkbox" name="Show Blog Posts" checked={showBlogs} onChange={() => setShowBlogs(!showBlogs)}/>
                    <label> Show Blog Posts </label>&nbsp;
                    <input type="checkbox" name="Show Writeups" checked={showWriteups} onChange={() => setShowWriteups(!showWriteups)} />
                    <label> Show Writeups</label><br></br>
                    <label style={{fontSize:"14px", color:"#979797"}}>{filteredResults.length} results were found</label>
                </p>
                
                <input type="text" value={query} onChange={handleInputChange} style={{backgroundColor:"#FFFFFF"}} placeholder="ENTER SEARCH TERM" ></input>
                </div>
                
            

            <div className='searchresult'>
                {filteredResults.length > 0 ? (
                    filteredResults.map((item, index) => {
                        //console.log(item)
                        const description = item[1].description;
                        var searchWords = query.toLowerCase().split(" ");
                        searchWords = searchWords.filter(element => element !== "");
                        
                        const highlightedDescription = highlightText(description, searchWords);
                        //console.log(cont);
                        cont++;
                        return (
                            <div className="result" key={index}>
                                <div className='searchlinktopost' style={{backgroundColor:cont%2 === 0 ? 'white' : color0}}><Link href={"cyber/writeup/"+item[2]+"#"+`${item[1]?.section ? item[1].section.replaceAll(" ", "-") : ""}`} section={`${item[1]?.section ? item[1].section.replaceAll(" ", "-") : ""}`}>{item[0]}</Link></div><div className='resultdescription'style={{backgroundColor:cont%2 === 0 ? 'white' : color0}}><span dangerouslySetInnerHTML={{__html: highlightedDescription}} /></div>
                            </div>
                        );
                    })
                ) : (
                    query && <p>No results found</p>
                )}
            </div>
        </div>
    );
};

export default LiveSearch;
