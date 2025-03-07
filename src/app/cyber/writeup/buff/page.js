import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';
import Head from "next/head";

const Buff = () => {
    return (  
        <>
        <Head>
                <title>My Awesome Page</title>
                <meta name="description" content="This is an awesome page description." />
                <meta name="keywords" content="nextjs, seo, react, helmet" />
                <meta name="author" content="Your Name" />
                <meta property="og:title" content="My Awesome Page" />
                <meta property="og:description" content="This is an awesome page description." />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="/images/preview.jpg" />
                <link rel="canonical" href="https://example.com/mypage" />
        </Head>
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/buff.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/buff.json'></SidebarRight>
        </div>
        </>
    );
}
 
export default Buff;