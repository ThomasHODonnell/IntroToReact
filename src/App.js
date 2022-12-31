import logo from './logo.svg';
import './App.css';
import ClassBasedComps from './components/classBasedComps';
import FunctionalBasedComp from './components/functionalBasedComps';
import StateClass from './states/statesInClasses';
import DemoComp from './components/demoComp';
import EventHandler from './states/stateEvents';
import APIClass from './components/apiClass';

function App() {
  return (
    <div className="App">
      {/* - this is what my browser sees. 
          - Here, I import the components I want in the browser. */}
        {/* <ClassBasedComps/>  */}
        {/* <FunctionalBasedComp/> */}
        {/* <StateClass/> */}
        {/* <DemoComp/> */}
        {/* <EventHandler/> */}
        <APIClass/>
    </div>
  );
}

export default App;
