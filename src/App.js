
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import image from './assets/image.svg'
import Btn from "./Component/Button/Btn"




function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="contentWrapper">

        <div className="box1">
          <h1>OUR FAST FOOD</h1>
          <div className='TextWrapper'>
            <p >Delivery</p>
            <p>Service</p>
          </div>
          <div className='paragraphHolder'>
            <p>Enter your location to get your nearest
              restaurants
              <p>or get delivered foods and enjoy. Happy foodie life</p>
            </p>
          </div>
          <form className='formStyle'>
            <input placeholder='Portharcourt, Nigeria' />
            <Btn className="foodbtn" name="Find Now"></Btn>
          </form>
        </div>

        <div className='imageContainer'>
          <div className='imageWrapper'>
            <img className="imageStyle" alt="" src={image}></img>
          </div>
        </div>

      </div>
    </div>

  );
}

export default App;
