import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const ManualUnpackingUPXandMPRESS = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">            
                <div className="Post">
                    <Post postname="blogdb/manual-unpacking-upx-and-mpress.json"/>
                </div>
            </div>
            <SidebarRight postname='blogdb/manual-unpacking-upx-and-mpress.json'/>
        </div>
    );
}
 
export default ManualUnpackingUPXandMPRESS ;