import logo from './logo.svg';
import './App.css';
import ClassBasedComps from './components/classBasedComps';
import FunctionalBasedComp from './components/functionalBasedComps';
import StateClass from './states/statesInClasses';
import DemoComp from './components/demoComp';
import EventHandler from './states/stateEvents';
import APIClass from './states/apiKeyRender';
import APIKeyRender from './states/apiKeyRender';
import UseStateHook from './hooks/useStateHook';
import UseEffectHook from './hooks/useEffectHook';

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
        {/* <APIKeyRender/> */}
        {/* <UseStateHook/> */}
        <UseEffectHook/>
    </div>
  );
}

export default App;
