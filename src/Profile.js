import './Profile.css'
import six from "./image/logonew.svg";
import profile from "./image/profile.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Profile() {
    const navigate = useNavigate();
    //const Profile=(a)=>{navigate("/Profilelist")};
    
    const handleProfileClick = (b) => {
        b.preventDefault();
        const url = "http://localhost:8000/profile";
        const data = {
          name: "AAAA",
          password: "a"
    
        };
        const header = {};
        console.log("url==>" + url)
        axios.post(url, data, header).then((res) => {
          console.log(res.data)
          alert(res.data.insertId)
          navigate("/home");
        }).catch((err) => {
          console.log(err)
        });
      };
    return (
        <div className='box1'>
            <div className='box2' >
                <div className='image'><img src={six} /></div>
                <ul>
                    <li><label>MY HOME</label></li>
                    <li><label>SEARCH</label></li>
                    <li><label>MATCHES</label></li>
                    <li><label>MAILBOX</label></li>
                    <li><label>UPGRADE NOW</label></li>


                </ul>

            </div>
            <div className='box3'>
                <input type="text" />
                <button>SEARCH</button>
            </div>
            <div className='row1_1'>
                <div className='profile'><button onClick={(b) => { handleProfileClick(b);
            }}><img src={profile} width="250" height="300" /></button></div>
                <div className='detail1'><h1>NAME</h1>
                    <p>Age</p>
                    <p>Place</p>
                    <p>Religion</p>
                    <p>Ocuppation</p>
                    <p>Status</p>
                </div>
            </div>

            


        </div>

    );
} export default Profile;