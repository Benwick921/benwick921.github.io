import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const Tomcat = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/tomcat.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/tomcat.json'></SidebarRight>
        </div>
    );
}
 
export default Tomcat;