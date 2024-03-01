import { useState } from "react";
import firebase from 'firebase/app';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";


function Register() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [pswd, setPswd] = useState("")
  const [cpswd, setCpswd] = useState("")
  const navigate = useNavigate()
  useNavigate("/login")

  const firebaseConfig = {
    apiKey: "AIzaSyDi5Cr9eXtS3BcFP3uioQybQweWUIbquC8",
    authDomain: "techno-5bcfc.firebaseapp.com",
    projectId: "techno-5bcfc",
    storageBucket: "techno-5bcfc.appspot.com",
    messagingSenderId: "131032529452",
    appId: "1:131032529452:web:d35ce8e8a9ac9f1ce0af89",
    measurementId: "G-WEBPQFQGFT"

  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();

  const store = (e) => {
    e.preventDefault()
    if (name === "" || email === "" || pswd === "" || cpswd === "") {
      alert("All Fields Are Mandatory")
    }
    else if (pswd !== cpswd) {
      alert("Password Does Not Match")
    }
   

    let obj = {
      a: email,
      b: pswd
    }

    createUserWithEmailAndPassword(auth, obj.a, obj.b).then((authData) => {
      alert("Register Successfully");
      navigate("/login");
    }).catch((_error) => {
      alert(_error);
    })

  }

  return (
    <div className="layoutR" style={{alignContent:"center"}}>
      <h2 style={{textAlign:"center",backgroundColor: "black",color:"white"}}>Registration Form</h2>
      <form onSubmit={store} className="card p-3 m-3" style={{width:"50%",color:"white",backgroundColor:"black",fontSize:"15px",marginLeft:"200px"}}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input value={name} onChange={e => setName(e.target.value)} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"style={{height:"20px"}} />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputPassword1" style={{height:"20px"}}/>
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input value={pswd} onChange={e => setPswd(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" style={{height:"20px"}}/>
        </div>
        <div className="mb-3">
          <label className="form-label"> Confirm Password</label>
          <input value={cpswd} onChange={e => setCpswd(e.target.value)} type="password" className="form-control" id="exampleInputPassword1" style={{height:"20px"}}/>
        </div>
        <button type="submit" className="" style={{marginLeft:"35%",height:"30px",fontSize:"18px",backgroundColor:"black",width:"30%",borderRadius:"15px",color:"white"}}>Register</button>

 <div class="A">
          <p>Already have an account <Link to="/login"><h6 style={{fontSize:"18px"}} >Login here</h6></Link></p>
        </div>

      </form>
    </div>

  )
}

export default Register;
