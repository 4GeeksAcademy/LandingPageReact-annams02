import React from 'react'
import reactDom  from 'react-dom'
const Card = function MyCard(){
    return(
    <div className="card">
      <img src="https://i.pinimg.com/564x/e6/c3/4a/e6c34afdf235e76c31344d6a933cae27.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title d-flex justify-content-center">Card title</h5>
        <p className="card-text d-flex justify-content-center">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" className="btn btn-primary d-flex justify-content-center">Go somewhere</a>
      </div>
    </div>
  );
};
export default Card;
