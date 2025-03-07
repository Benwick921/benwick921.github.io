import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';
const Thompson = () => {
    return (  
        <div className='Wrapper'>

            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/thompson.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/thompson.json'></SidebarRight>
        </div>
    );
}
 
export default Thompson;