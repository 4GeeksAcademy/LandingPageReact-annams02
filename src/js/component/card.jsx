import React from 'react'
import reactDom  from 'react-dom'
const Card = function MyCard(){
    return(
    <div className="card">
    <img src="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg" className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
    </div>
    <div className="card-footer">
        <a href="#" className="btn btn-primary">Go somewhere</a>
    </div>
  </div>)
}
export default Card;
