import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';


const Lightroom = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/lightroom.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/lightroom.json'></SidebarRight>
        </div>
    );
}
 
export default Lightroom;