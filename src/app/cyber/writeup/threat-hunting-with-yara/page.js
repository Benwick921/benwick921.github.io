import Post from '../../../../cyber/components/Post';
import SidebarRight from '@/cyber/components/SidebarRight';
import SidebarLeft from '@/cyber/components/SidebarLeft';

const ThreatHuntingWithYara = () => {
    return (  
        <div className='Wrapper'>
            <SidebarLeft />
            <div className="content">    
                <div className="Post">
                    <Post postname="writeupdb/threat-hunting-with-yara.json"/>
                </div>
            </div>
            <SidebarRight postname='writeupdb/threat-hunting-with-yara.json'></SidebarRight>
        </div>
    );
}
 
export default ThreatHuntingWithYara;