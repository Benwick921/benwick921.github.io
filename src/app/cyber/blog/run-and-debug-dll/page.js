import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const RunAndDebugDll = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">
                <div className="Post">
                    <Post postname="blogdb/run-and-debug-dll.json"/>
                </div>
            </div>
            <SidebarRight postname='blogdb/run-and-debug-dll.json'/>
        </div>
    );
}
 
export default RunAndDebugDll ;