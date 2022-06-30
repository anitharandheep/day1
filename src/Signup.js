import './Signup.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
function Signup() {
    const navigate = useNavigate();
    
    const handleprofileClick = (a) => {
        a.preventDefault();
        const url = "http://localhost:8000/register";
        const data = {
          
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
    //const profile = (a) => { navigate("/Profile") };

    return (
        <div>
            <div className='box'>

                <div className='row1'><label>Login</label><button>x</button></div>
                <div className='row2'><label>Matrimony Id/Mobile No./E-mail</label><input type="Text" /></div>
                <div className='row3'><label>Password</label><input type="Password" /></div>
                <div className='row4'><input type="checkbox" /><label>"Keep me logged in"</label></div>
                <div className='row5'><button onClick={(a) => { handleprofileClick(a); }}>LOGIN</button></div>
                <div className='row6'>
                    <div className='buttonleft'><button>Forgot Password?</button></div>
                    <div className='buttonright'><button>Log in via OPT</button></div>
                </div>
            </div>

        </div>
    )
}
export default Signup;