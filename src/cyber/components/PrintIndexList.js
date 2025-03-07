import Link from "next/link";
import CalculateReadTime from "./CalculateReadTime";
const PrintIndexList = (lst) => {
    return(
        <div>
        <p style={{fontSize:"14px", color:"#979797"}}>{lst.lst.length} elements</p>
        {lst.lst.map((post, index) => 
            <Link key={index} href={"/cyber/"+post.type+"/"+post.path}>
                <div className="my-single-menu">
                    <img style={{border: '0px'}} src={"/cyber/"+post.banner} alt=""></img><div className="indextitle">{post.title}</div>{<post-date><CalculateReadTime postname={post}></CalculateReadTime></post-date>}{/*<post-date>Date: {post.date}</post-date>*/}
                    </div><br></br><br></br>
            </Link>
        )}
        </div>
    )
}
export default PrintIndexList;