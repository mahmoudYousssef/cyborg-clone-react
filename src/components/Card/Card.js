import './Card.css'
// import {Fastar , FaDownload } from 'react-icons/fa'


const Card = (props) => {
  return (

<>

<div className="most-popular-item">
            <div className="card-wrapper">
              <img
                className="most-popular-item-image"
                src={props.image}
                alt="p1"
              />
              <div className="most-popular-item-content">
                <h4 className="most-popular-item-title">
                  {" "}
                  {props.title} <br /> <span> {props.category}</span>{" "}
                </h4>
                <ul>
                  <li>
                     {/* <Fastar/> */}
                    <span>{props.rate}</span>
                  </li>

                  <li> 
                    {/* <FaDownload/> */}
                    <span>{props.download}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

</>
  )
}

export default Card