import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const UniCTF = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">               
                <div className="Post">
                    <Post postname="writeupdb/uni-ctf.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/uni-ctf.json'/>
        </div>
    );
}
 
export default UniCTF;