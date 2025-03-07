const CalculateReadTime = (postname) => {
    
    var fullText = "";
    var numberOfImages = 0
    const GetFullText = (post) => {
        if(typeof post === 'string')
        {
            fullText += post+" ";
            return;
        }

        post.body.forEach( element => { // element is an array of text lines or another dictionaty {}       
             
            if(typeof element === 'string')
                GetFullText(element);
            else
                element.body.forEach( innerelement => {
                    if(!(typeof innerelement === 'undefined'))
                        GetFullText(innerelement);
                })
        })
    }
    GetFullText(postname.postname);
    // not used yet... use the number of images and use 10sec for each image numberofimage*10 sec
    var numberOfImages = !(fullText.match(/<img\b[^>]*>/gi) === undefined) && !(fullText.match(/<img\b[^>]*>/gi) === null)  ? fullText.match(/<img\b[^>]*>/gi).length : 0;
    var counter = fullText.split(' ').length;
    return ( 
        <div className="readingtime">
            Reading: <i>{parseInt((counter+numberOfImages*35)/180)}min {Math.floor(((((counter+numberOfImages*35)/200)%1)*0.60)*100)}sec </i>
        </div>
    
    );
}
 
export default CalculateReadTime;
