import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const Lookup = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/lookup.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/lookup.json'></SidebarRight>
        </div>
    );
}
 
export default Lookup;