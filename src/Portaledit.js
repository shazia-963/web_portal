import { useEffect, useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
function Portaledit(){
  const [id, setId] = useState("")
  const [title, setname] = useState("")
  const [description, setdescription] = useState("")
  const navigate = useNavigate()
  const {portid}=useParams()

  useEffect(()=>{
    fetch("https://web-project-api.onrender.com/Portal"+portid)
    // fetch("http://localhost:3006/Portal"+portid)
    .then((res)=>{
        return res.json()
    })
    .then((resp)=>{
        setId(resp.id)
        setname(resp.name)
        setdescription(resp.description)
     })
},)
const sendData=(e)=>{
    e.preventDefault()
    const data = {id,title,description}
       fetch("https://web-project-api.onrender.com/Portal"+portid,{
      // fetch("http://localhost:3006/Portal"+portid,{
      method: "PUT",
      headers: {"Content-type": "application/json"},
      body: JSON.stringify(data)
    })
      .then(() => {
        alert("Data saved..!")
        navigate("/")
      })
      .catch((err) => {
        alert("error" + err)
      })
  }
  return (
    <div className="container">
      <h2>Edit Portal DATA</h2>
      <form onSubmit={sendData}>
        <div className="mb-3" style={{ width: "400px" }}>
          <label className="form-label">Id</label>
          <input value={id} type="text" onChange={e => setId(e.target.value)}  className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label className="form-label">Title</label>
          <input value={title} type="text" onChange={e => setname(e.target.value)} className="form-control" id="exampleInputPassword1"/>
        </div>
        <div className="mb-3">
          <label className="form-label">Description</label>
          <input value={description}
            type="text" onChange={e => setdescription(e.target.value)} className="form-control" id="exampleInputPassword1" />
        </div>
     

        <button type="submit" className="btn btn-primary">Submit</button>
        <Link to="/search" className="btn btn-danger">Back</Link>

      </form>
    </div>
  )
}
export default Portaledit;