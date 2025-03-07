import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const CyberSecurityInTheSea = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">            
                <div className="Post">
                    <Post postname="blogdb/cybersecurity-in-the-sea.json"/>
                </div>
            </div>
            <SidebarRight postname='blogdb/cybersecurity-in-the-sea.json'/>
        </div>
    );
}
 
export default CyberSecurityInTheSea ;