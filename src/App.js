import logo from './logo.svg';
import './App.css';
import Images from './compoents/image/image';
import Heading from './compoents/heading/heading';
import Accordionexample from './compoents/Bootstrap/accordtion/accordion';
import ProgressBar1 from './compoents/Bootstrap/accordtion/progess/progress';
import Spinnersample from './compoents/Bootstrap/spinner.js/spinner';

function App() {

  const Calculatepercentage=(input)=>{
    const base = 1000
    let percentage=(input/base)*100
    
    return percentage
    
  }


  <p></p>


  return (
    <div>
{/* <Accordionexample/>
<ProgressBar1   scale={Calculatepercentage(product.price)}/> */}
<Spinnersample/>
    </div>
    
  );
}

export default App;