import './Signup2.css'
import six from "./image/logonew.svg";
function Signup2() {
  return (
    <div className='bgm'>
      <div className="firstrow_col1">
        <img src={six} />
        <div className="firstrow_col1_col1">
          <label className='font'>
            ChristianMatrimony.com
          </label>
          <label>From Matrimony.com Group</label>
        </div>
      </div>
      <div className='a2'><label className='complete'>Great! You have completed 20%</label></div>
      <div className='a1'>
        <div className='first_colm'>Trusted by Christians across the world!</div>
        <div className='second_colm'><h2>Please provide us with your basic details</h2>
          <p> Date of birth <input type="number" /></p>
          <p>Denomination<input type="text"></input></p>
          <p>Division<input type="text"></input></p>
          <p>Subcaste(optional)<input type="text"></input></p>
          <p>Mother Tongue<input type="text"></input></p>
          <p>Email ID<input type="email" /></p>
          <p>Password<input type="password"></input></p>
          <button>Continue</button>
        </div>
      </div>

    </div>



  )

}
export default Signup2;