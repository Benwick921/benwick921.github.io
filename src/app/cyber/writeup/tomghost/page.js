import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const Tomghost = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/tomghost.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/tomghost.json'></SidebarRight>
        </div>
    );
}
 
export default Tomghost;