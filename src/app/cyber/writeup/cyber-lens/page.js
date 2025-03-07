import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';
import Head from 'next/head';

const CyberLens = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/cyber-lens.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/cyber-lens.json'></SidebarRight>
        </div>
    );
}
 
export default CyberLens;