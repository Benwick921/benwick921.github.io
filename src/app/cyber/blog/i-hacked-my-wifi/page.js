import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const IHackedMyWifi = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">
                <div className="Post">
                    <Post postname="blogdb/i-hacked-my-wifi.json"/>
                </div>
            </div>
            <SidebarRight postname='blogdb/i-hacked-my-wifi.json'/>
        </div>
    );
}
 
export default IHackedMyWifi;