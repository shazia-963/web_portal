import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import web from './Images/web.png';
import axios from 'axios';
import "./search.css";

function Search() {
    const [data, setData] = useState(null)
    const navigate = useNavigate()
    const [value, setValue] = useState("")
    const option = ["id", "title", "description"]
    const [sort, setSort] = useState("")
    useEffect(() => {
        fetch("https://web-project-api.onrender.com/Portal")
        // fetch("http://localhost:3006/Portal")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })

    }, [])
    const DeleteData = (id) => {
        if (window.confirm("Do you want to delete it ?")) {
            fetch("https://web-project-api.onrender.com/Portal/" + id, {
            // fetch("http://localhost:3006/Portal/" + id, {
                method: "DELETE"
            })
                .then((s) => {
                    alert("Deleted successfully")
                    window.location.reload()
                })
                .catch((err) => {
                    console.log(err)
                })
        }
    }
    const EditData = (id) => {
        navigate("/portaledit/" + id)
    }
    const DetailsData = (id) => {
        navigate("/portaldetails/" + id)
    }
    const updateUser = (e) => {
        console.log(e.target.value)
        setValue(e.target.value)
    }
    const showData = (data) => {
        console.log(data)
    }
    // axios
    const searchData = async (e) => {
        e.preventDefault()
        return await axios.get(`https://web-project-api.onrender.com/Portal?q=${value}`)
        // return await axios.get(`http://localhost:3006/Portal?q=${value}`)
            .then((res) => {
                console.log(res)
                setData(res.data)
                setValue("https://web-project-api.onrender.com/Portal")
                // setValue("http://localhost:3006/Portal")
            })
    }
    const loadData = (e) => {
        e.preventDefault()
        fetch("https://web-project-api.onrender.com/Portal")
        // fetch("http://localhost:3006/Portal")
            .then((res) => {
                return res.json()
            })
            .then((resp) => {
                console.log(resp)
                setData(resp)
            })
    }

    const sortData = async (e) => {
        let value = e.target.value
        console.log(value)
        setSort(value)
    }
    return (
        <section>
            <div className="containerPortal">
                <div className="close"><Link to="/" className="">
                    <button type="button" className="btn-close" color="red" aria-label="Close"></button></Link></div>
                {/* start of heading */}

                <div className="card1">
                    <div className="card-title">
                        <h3>Search your Portals</h3>
                    </div>
                    <div className="card-body">
                        {/* <Link to="/empform" className="btn btn-success">Add New(+)</Link> */}

                        <form onSubmit={searchData}>
                            <input value={value} type="text" placeholder="search for portals" onChange={updateUser} className="form-control" id="exampleInputPassword1" />
                            <button className="btn btn-primary" type="submit">Search<i class="fa-solid fa-magnifying-glass"></i></button>
                            <button onClick={loadData} className="btn btn-danger">Reset</button>
                            <Link to="/portalform" className="btn btn-primary">Add Portals</Link>
                            {/* <button onClick={portalform} className="btn btn-primary">Add Portals</button> */}
                        </form>
                        <select value={sort} onChange={sortData}>
                            <option>--choose--</option>
                            {option.map((data) => (
                                <option>{data}</option>
                            ))}
                        </select>

                        <table className="table table-bordered">
                            <thead >
                                <tr className="table-dark text-white">
                                    
                                    <th>Id</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {data?.map((item) => (
                                    <tr>
                                        <td>
                                            <input type="checkbox" onClick={() => { showData(item) }} width="10px" />
                                            {item.id} </td>
                                        
                                        <td>{item.name}</td>
                                        <td>{item.description}</td>
                                        <td>
                                            <button onClick={() => { DeleteData(item.id) }} className="btn btn-danger">delete</button>
                                            {/* <button onClick={()=>{EditData(item.id)}}className="btn btn-primary">EditData</button> */}
                                            <button onClick={() => { DetailsData(item.id) }} className="btn btn-secondary">ShowData</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                </div>
                <div className="Port-Img">
                    <div >
                        <img src={web} alt="web" className="responsive1"  ></img>
                    </div>

                </div>

                <div class="bottom-container">
                    <a class="footer-link" href="https://instagram.com/home"><i class="fa-brands fa-instagram"></i></a>
                    <a class="footer-link" href="https://twitter.com/home"><i class="fa-brands fa-x-twitter"></i></a>
                    <a class="footer-link" href="https://www.facebook.com/profile.php?id=100089459079414"><i class="fa-brands fa-facebook"></i></a>
                    <a class="footer-link" href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BNCG43wlDReW18Zbv48vlRQ%3D%3D"><i class="fa-brands fa-linkedin-in"></i></a>
                    <p class="copyright">© S B Shazia Sulthana </p>
                </div>
            </div>
        </section>

    )
}

export default Search;
