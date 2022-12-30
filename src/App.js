import logo from './logo.svg';
import './App.css';
import ClassBasedComps from './components/classBasedComps';
import FunctionalBasedComp from './components/functionalBasedComps';
import StateClass from './states/statesInClasses';

function App() {
  return (
    <div className="App">
      {/* - this is what my browser sees. 
          - Here, I import the components I want in the browser. */}
        {/* <ClassBasedComps/>  */}
        {/* <FunctionalBasedComp/> */}
        <StateClass/>
    </div>
  );
}

export default App;
