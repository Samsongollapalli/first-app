import logo from './logo.svg';
import './App.css';

import Custombutton from './Components/button/button';
import Heading1, {Heading2} from './Components/heading/heading';
import Orderedlist from './Components/lists/orderlist';
import Unorderedlist from './Components/lists/unorderedlist';
import Profilecomponents from './profilecomponents/profile';
import Tabledata from './tables/table';
import Cardsinfomation from './cards/cards';
function App() {
  return (
  <div>
   <Profilecomponents/>
   <Tabledata />
   <Cardsinfomation />
  </div>
  )
}

export default App;
