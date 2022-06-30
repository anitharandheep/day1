import React, { useState } from 'react';
import './App.css'
import one from "./image/1.webp";
import two from "./image/2.webp";
import three from "./image/3.webp";
import four from "./image/4.webp";
import five from "./image/5.webp";
import six from "./image/logonew.svg";
import bg from "./image/nbg.webp";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function App() {
 
  //const login=(a)=>{navigate("/Signup")};
  //const register=(r)=>{navigate("/Signup2")};
  const [statevarname,setStatename]= useState("");
    const[statevarnumber,setStatenumber]=useState("");
    const navigate = useNavigate();

  const handleloginClick = (a) => {
    a.preventDefault();
    const url = "http://localhost:8000/login";
    const data = {
      name: "abc",
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

  const handleRegisterClick = (r) => {
    r.preventDefault();
    const url = "http://localhost:8000/signup";
    const data = {
      profilefor: "Friend",
      name: statevarname,
      mobileno: statevarnumber
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
  const handlenameChange=(e)=>{
    e.preventDefault();
    setStatename(e.target.value)
  }
  const handlenumberChange= (c)=>{
    c.preventDefault()};
    setStatenumber(c.target.value)
  
  return (

    <>
      <div className="home_firstrow">
        <div className="home_firstrow_col1">
          <img src={six} />
          <div className="home_firstrow_col1_col1">
            <label className="home_firstrow_col1_col1_label1">
              ChristianMatrimony.com
            </label>
            <label>From Matrimony.com Group</label>
          </div>
        </div>
        <div className="home_firstrow_col2">
          <label>Already a member?</label>
          <div>
            <button onClick={(a) => {
              handleloginClick(a);
            }}>Log In</button>
          </div>
        </div>
      </div>
      <div className="home_secondrow" style={{ backgroundImage: `url(${bg})` }}>
        <div className="home_secondrow_inner">
          <label className="home_secondrow_inner_title">
            No. 1 and official matrimony service exclusively for Christians
          </label>
          <label className="home_secondrow_inner_second">Meet your Christian soulmate here!</label>
          <div className="home_secondrow_inner_main">
            <div className="home_secondrow_inner_main_col1">
              <label>Matrimony Profile For</label>
              <select>
                <option>SELECT</option>
                <option>SELECT</option>
                <option>SELECT</option>
                <option>SELECT</option>
              </select>
            </div>
            <div className="home_secondrow_inner_main_col2">
              <label>Name</label>
              <input type={"text"} value={statevarname}onChange={(e)=>{handlenameChange(e)}} placeholder="Name" />
            </div>
            <div className="home_secondrow_inner_main_col3">
              {" "}
              <label>Mobile number</label>
              <input type={"text"} value={statevarnumber}onChange={(c)=>{handlenumberChange(c)}} placeholder="Mobile number" />
            </div>
            <button onClick={(r) => {
              handleRegisterClick(r);
            }}>Register Free</button>
          </div>
          <label className="home_secondrow_inner_four">
            By clicking on Register Free, you agree toTerms &
            ConditionsandPrivacy Policy
          </label>
        </div>
      </div>
      <div className="home_thirdrow">
        <ul>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={one} /></div>
            <label>
              10+ years of service in helping Christians cherish the meaning of
              Happy marriage
            </label>
          </li>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={two} /></div>
            <label>
              2 Lakh+ people have found their life partner using our services
            </label>
          </li>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={three} /></div>
            <label>
              2020's winner of 'India's Growth Champions Award' by The Economic
              Times
            </label>
          </li>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={four} /></div>
            <label>
              1 Lakh+ genuine profiles with 100% verified phone numbers
            </label>
          </li>
          <li>
            <div className="home_thirdrow_imgdiv"><img src={five} /></div>
            <label>130+ branches across India to serve you better</label>
          </li>
        </ul>
      </div>
    </>
  );
};



export default App;