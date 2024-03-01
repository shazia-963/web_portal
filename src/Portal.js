import React, { useState } from "react";
import "./Application.css";
import "./form.css";
 
function Portal(){
    const [cards] = useState([
        {
            title:'B2B',
            text:'The best self-service portals enable users to complete tasks most important to them, such as reordering items, updating their account and requesting support. Personalized portals also hide any information irrelevant to the customer based on their user profile',
        },
        {
            title:'B2C',
            text:'The best self-service portals enable users to complete tasks most important to them, such as reordering items, updating their account and requesting support. Portals also hide any information irrelevant to the customer based on their user profile.',
        },
        {
            title:'Community',
            text:'A community web portal is defined as an online tool that is created to manage an online community. This community can either be an extension of an offline community or a stand-alone online community. This helps in entire Organisation.',
        },
        {
            title:'Partner Portal',
            text:'A partner portal is usually a password-protected site that employs a simple and familiar look consistent with the brand it represents. It is a business site, not a marketing property meant for the outside world, and access is often available only from a company main website.',
        },
        {
            title:'Learning Portal',
            text:'A learning portal is a single place where employees can access learning. A key feature of a learning portal is that it is learner-centred and often organised around the current and future capability  of the organisation. A learning portal is often a perfect place for curated content.',
        },
        {
            title:'Banking Portal',
            text:'A Banking portal is a single place where customer can access their Accounts. A key feature of a Banking portal is that it is secured and often organised around the current and future capability needs of the Account Systems. This Portal is often a perfect place for customers.',
        },
    ])
    return (
        <div className="appc">
            <div className='mt-5 d-flex justify-content-left'>
                <div className="heading">
                    <h3>Applications of Employees</h3>
                    <table className="dept">
                        <th>S.no</th>
                        <th>Emp-Name</th>
                        <th>Designation</th>
                        <th>Dept-ID</th>
                        <th>Grade</th>
                        <tr>
                            <td>1.</td>
                            <td>Ansar Basha</td>
                            <td>Chief Manager</td>
                            <td>23042</td>
                            <td>6</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Shazia</td>
                            <td>Developer</td>
                            <td>23043</td>
                            <td>2</td>
                        </tr>
                    </table>
                </div>
            </div>
            <br />

  <section>
    <div className="container">
        <h1>Responsive cards</h1>
        <div className="cards">
        {
         cards.map((card,i)=>(
         
         <div key={i} className="card">
            <h3>{card.title}</h3>
            <p>{card.text}</p>
            <button className="btn btn-primary">Explore</button>
        </div>
     ))
     }
      </div>
    </div>
  </section>

</div>
 )
}
export default Portal;

