import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const VBPasswordBypass = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">
                <div className="Post">
                    <Post postname="blogdb/vb-password-bypass.json"/>
                </div>
            </div>
            <SidebarRight postname='blogdb/vb-password-bypass.json'/>
        </div>
    );
}
 
export default VBPasswordBypass ;