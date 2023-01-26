import './App.css';
import MyDiv1 from './01/MyDiv1';
import MyDiv2 from './01/MyDiv2';
import MyClock from './01/MyClock';

const App = () => {              
  
  return ( 
    <div className = "App-header">
      <MyDiv1 />
      <MyDiv2 />
      <MyClock />
    </div>
  );
}

export default App;               //반드시 export default 해야 외부에서 쓸수 있음
