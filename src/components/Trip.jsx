import React from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../node_modules/bootstrap/dist/js/bootstrap";
import './Trip.css';

const Trip = () => {
    return (
        <section className='s3 bg-sky-200'>
               <div className="head">
                <h1 className='text-center'>Explore the Beauty of India</h1>
            <p className='text-center'>Discover the rich culture, stunning landscapes, and vibrant traditions of India. From the majestic Himalayas to the serene backwaters of Kerala, embark on a journey that will leave you mesmerized.</p>
               </div>
             <div className='d-flex justify-content-around flex-wrap'>
                  <div className="card" style={{ width: "20rem" ,height: "25rem"}}>
                <img src={`${import.meta.env.BASE_URL} indian-temple.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text"> <span style={{color:"blue"}}>Prem Mandir, Vrindavan:</span> It is a significant Hindu temple dedicated to Lord Krishna and Radha located in Vrindavan.</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
            <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={`${import.meta.env.BASE_URL}Radha-Rani-Mandir-Barsana-Timings.webp`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:"blue"}}>Radha Rani Temple, Barsana:</span>The temple is believed to be the birthplace and the place where Radha Rani was raised. </p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
            <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={`${import.meta.env.BASE_URL}Krishna_Janmabhoomi_Temple_Mathura.jpg`} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:"blue"}}>Janmbhoomi, Mathura:</span>The temple is sacred site for Hindus, representing the place where Lord Krishna was born. </p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
             <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={`${import.meta.env.BASE_URL}temple-courtyard.jpg`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:"blue"}}>Isckon, Mathura:</span>Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
           <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={`${import.meta.env.BASE_URL}hawa-mahal-6973938_1920.jpg`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"> <span style={{color:"blue"}}>Hawa Mahal:</span> is a five-story building located in Jaipur, India. Built in 1799 by Maharaja Sawai Pratap Singh.</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
             <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={`${import.meta.env.BASE_URL}kishangarh-6511349_1920.jpg`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:"blue"}}>Kishangarh's marble industry:</span>  The accumulated slurry creates a landscape is often compared to a "budget Ladakh". </p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
             <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={`${import.meta.env.BASE_URL}four-seasons-2083680_1280.jpg`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:"blue"}}>The Maldives:</span> are an archipelagic nation in the Indian Ocean, south-southwest of India and Sri Lanka</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
             <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={`${import.meta.env.BASE_URL}desert-6041013_1920.jpg`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:'blue'}}>Leh, located in the Ladakh India:</span>is a cold desert characterized by high altitude, low rainfall, and extreme temperatures</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
             <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={`${import.meta.env.BASE_URL}tungnath-6103961_1920.jpg`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:'blue'}}>Tungnath Temple:</span> is dedicated to Lord Shiva, situated in the Rudraprayag district of Uttarakhand, India.</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
              <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={  `${import.meta.env.BASE_URL}majuli-4203237_1280.jpg`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:"blue"}}>Majuli Island:</span> is the largest river island in Assam, a state in northeastern India</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
              <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={  `${import.meta.env.BASE_URL}unnamed.webp`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:'blue'}}>Sabarmati Riverfront:</span> is a waterfront being developed along the banks of Sabarmati river in Ahmedabad, India</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>
              <div className="card" style={{ width: "22rem", height: "25rem" }}>
                <img src={ `${import.meta.env.BASE_URL}milky-way-8153503_1920.jpg`} className="card-img-top hello" alt="..." />
                    <div className="card-body">
                        <p className="card-text"><span style={{color:'blue'}}>Nubra Valley:</span> The best time to see it from May to August, viewing between 10 PM and 3 AM on moonless nights in ladakh</p>
                       <a href="#" class="btn btn-primary">Visit Here </a>
                    </div>
            </div>

             </div>
        </section>
    )
}
export default Trip;