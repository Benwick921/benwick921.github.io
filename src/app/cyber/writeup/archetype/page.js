import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const Archetype = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/archetype.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/archetype.json'></SidebarRight>
        </div>
    );
}
 
export default Archetype;