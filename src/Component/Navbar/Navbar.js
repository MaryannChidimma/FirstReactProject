

import './Navbar.css'
import RegisterBtn from "../Button/Btn"

function Navbar() {
  return (
    <div className="navbar">

      <h1 className='container1'> Foodie</h1>

      <ul className="container2">
        <li>Home</li>
        <li>Restaurant</li>
        <li>Food</li>
        <li>Offer</li>
        <li>Services</li>
        <li className="fal fa-shopping-cart"></li>
      </ul>

      <RegisterBtn className="btn" name="Register Now"></RegisterBtn>


    </div>
  );
}

export default Navbar;