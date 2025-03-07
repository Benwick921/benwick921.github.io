"use client";
import { useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

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


const Post = (postName) => { 
    var {section} = useParams();
    var sectionRefs = useRef({}); // Create a ref to hold section references
    let json = require(`../database/${postName.postname}`);
    const currentSection = useRef(null); // Track the current section
    const [pageLoaded, setPageLoaded] = useState(false);

     /**
     * Function to check if all media elements are fully loaded.
     * Once all elements are loaded, it invokes the callback.
     */
     const checkAllMediaLoaded = (callback, maxRetries = 3, retryDelay = 1000) => {
        const mediaElements = document.querySelectorAll('img, video, audio');
        let loadedMediaCount = 0;
        let retries = {};
    
        const checkLoadingStatus = () => {
            if (loadedMediaCount === mediaElements.length) {
                console.log("All media fully loaded.");
                callback(); // Trigger callback when all media is loaded
                setPageLoaded(true)
            }
        };
    
        const retryLoading = (element, attempt) => {
            if (attempt > maxRetries) {
                console.warn(`Failed to load media after ${maxRetries} attempts: ${element.src}`);
                checkLoadingStatus();
                return;
            }
    
            // Retry loading the media
            setTimeout(() => {
                console.log(`Retrying to load: ${element.src} (Attempt ${attempt + 1})`);
                if (element.tagName === "IMG") {
                    element.src = element.src; // Reset the src to trigger reload
                } else if (element.tagName === "VIDEO" || element.tagName === "AUDIO") {
                    element.load();
                }
    
                // Re-attach event listeners
                element.addEventListener("load", () => {
                    loadedMediaCount++;
                    console.log(`Successfully loaded on retry: ${element.src}`);
                    checkLoadingStatus();
                });
    
                element.addEventListener("error", () => {
                    retryLoading(element, attempt + 1);
                });
            }, retryDelay);
        };
    
        mediaElements.forEach((element) => {
            if (element.complete || element.readyState === 4) {
                loadedMediaCount++;
            } else {
                element.addEventListener("load", () => {
                    loadedMediaCount++;
                    console.log(`Loaded: ${element.src}`);
                    checkLoadingStatus();
                });
    
                element.addEventListener("error", () => {
                    retries[element.src] = (retries[element.src] || 0) + 1;
                    retryLoading(element, retries[element.src]);
                });
            }
        });
    
        if (mediaElements.length === 0) {
            console.log("No media found on the page.");
            callback();
        } else {
            checkLoadingStatus();
        }
    };

    /**
     * Function to scroll to a section once all media elements are loaded.
     */
    const scrollToSectionAfterMediaLoad = () => {
        checkAllMediaLoaded(() => {
            if (section && sectionRefs.current[section]) {
                console.log(`Scrolling to section: ${section}`);
                sectionRefs.current[section].scrollIntoView({ behavior: 'smooth' });
                currentSection.current = section;
            } else {
                console.warn(`Section "${section}" not found.`);
            }
        });
    };

    // Trigger the scroll function when the section changes
    useEffect(() => {
        scrollToSectionAfterMediaLoad();
    }, [section]);


    







    const GetSections = (newSection) => {
        if (!newSection || !Array.isArray(newSection.body)) return null;

        return newSection.body.map((element, index) => {
            // Render string elements directly
            if (typeof element === 'string') {
                //console.log(newSection.id.replaceAll(" ","-"), index)
                return (
                    <div key={`${newSection.id.replaceAll(" ","-")}-${index}`} dangerouslySetInnerHTML={{ __html: element }} />
                );
            }

            // Render object elements recursively
            if (typeof element === 'object' && element.body) {
                return (
                    <div key={element.id.replaceAll(" ","-") || index} id={element.id.replaceAll(" ","-")} ref={(el) => {if (el) sectionRefs.current[element.id.replaceAll(" ","-")] = el;}}>
                        {/* Render title if it exists */}
                        {element.title && (<div dangerouslySetInnerHTML={{ __html: element.title }} />)}

                        {/* Recursively render the nested body */}
                        {GetSections(element)}
                    </div>
                );
            }
            return null; // Handle unexpected data
        });
    };

    // useEffect(() => {
    // if (section && sectionRefs.current[section]) {
    //     sectionRefs.current[section].scrollIntoView({ behavior: 'smooth' });
    // }
    // }, [isPageRendered, section]);

    useEffect(() => {
        if (pageLoaded) {
            const hash = window.location.hash; // Get the hash (e.g., #section1)
            if (hash) {
                const sectionId = hash.substring(1); // Remove '#'
                const section = document.getElementById(sectionId);

                if (section) {
                    setTimeout(() => {
                        section.scrollIntoView({ behavior: "smooth" });
                    }, 100); // Small delay to ensure elements are rendered
                }
            }
        }
    }, [pageLoaded]);


    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top
    }, []);

    return (
        <div>
            {GetSections(json)} {/* Render the sections directly */}
        </div>
    );
};

export default Post;
