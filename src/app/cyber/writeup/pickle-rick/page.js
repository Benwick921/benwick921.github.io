import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const PickleRick = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/picklerick.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/picklerick.json'></SidebarRight>
        </div>
    );
}
 
export default PickleRick;