import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const Ignite = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/ignite.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/ignite.json'></SidebarRight>
        </div>
    );
}
 
export default Ignite;