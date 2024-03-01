
import { useParams, Link } from "react-router-dom"
import "./portaldetails.css"
import { useState, useEffect } from "react"
function Portaldetails() {
    const [data, setData] = useState(null)
    const {portid} = useParams()
    console.log(portid);
    useEffect(() => {
        fetch("https://web-project-api.onrender.com/Portal/"+portid)
        // fetch("http://localhost:3006/Portal/"+portid)
           .then((res) => {
                return res.json()
            }, [])
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    },)
    return (
        <div className="portalCards">
            <div className="container-fluid">
                <div className="card" style={{ width: "18rem" }}>
                    {data &&
                        <div className="card-body">
                            <h5 className="card-title">Portal Id: {data.id} </h5>
                            <h6 className="card-subtitle mb-2 text-body-secondary">Name: {data.name}</h6>
                            <p className="card-text">Description: {data.description}</p>
                           <Link to="/search" className="btn btn-danger">Back</Link>
                        </div>
                    }
                </div>
            </div>
        </div>

    )
}
export default Portaldetails;