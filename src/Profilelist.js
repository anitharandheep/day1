import './Profilelist.css'
import six from "./image/logonew.svg";
import profile from "./image/profile.webp";
function Profilelist() {
  return (
    <div><div className='header' >
                <div className='image1'><img src={six} /></div>
                <div className='ul'><ul>
                    <li><label>MY HOME</label></li>
                    <li><label>SEARCH</label></li>
                    <li><label>MATCHES</label></li>
                    <li><label>MAILBOX</label></li>
                    <li><label>UPGRADE NOW</label></li>


                </ul></div>

            </div>
    <div className='profilebox'>
      <div className='image'><img src={profile} width="250" height="300" /></div>
      <div className='label'><label><h2>Aswathy AB</h2>E5939741 | Profile created by Self | Active - 1 week ago</label>
        <ul className='details'>
          <li>27 years and 9 months,4'7"</li>
          <li>Mother Tongue is Malayalam</li>
          <li>24 Manai Telugu Chettiyar</li>
          <li>Lives in Rangat</li>
          <li>Studied in B.A. Degree</li>
          <li>Not working</li>
        </ul>
      </div>
    </div >
    </div>
  );
} export default Profilelist;