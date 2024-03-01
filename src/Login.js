import { useState } from "react";
import { initializeApp } from "firebase/app";
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";



function Login() {
    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")
    const navigate = useNavigate()

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

        let obj = {
            a: email,
            b: pswd
        }
        signInWithEmailAndPassword(auth, obj.a, obj.b)

            .then(() => {
                alert("Logged in")
                navigate("/Welcome")
            })
            .catch((err) => {
                alert(err)
            })
    }

    return (
        <div>
            <h2 style={{background:"lightblue",textAlign:"center"}}>Login</h2>

            <form onSubmit={store} className="card p-3 m-3" style={{ width: "98%", backgroundColor: "cadetblue", fontSize: "15px" }}>

                <div className="mb-3">
                    <label className="form-label">Email</label>
                    <input value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" id="exampleInputPassword1" style={{height:"25px"}}/>
                    <p>We'll never share your email with anyone else</p>

               </div>
                <div className="mb-3">
                    <label className="form-label">Password</label>
                    <input value={pswd} onChange={e => setPswd(e.target.value)} type="password" className="form-control" id="exampleInputPassword1"style={{height:"25px"}} />
                    Don't have Account?<Link to="/Register"style={{color:"black"}}>Register Here  </Link> 
                </div>
                <button type="submit" style={{ marginLeft:"25%",height:"30px",fontSize:"18px",backgroundColor:"lightblue",width:"50%",borderRadius:"15px"}}>Login</button>

            </form>

        </div>
    )
}
export default Login;
