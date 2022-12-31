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
import UseContextHook from './hooks/useContextHook';
import { createContext } from 'react';
import UseReducerHook from './hooks/useReducerHook';
import UseRefAndDOM from './hooks/useRef-DOM';

//creating a context for UseContextHook
export const context = createContext('light'); 
console.log(context);


function App() {
  return (
    //in order to provide value to UseContextHook ...
    //enter a color in the string
    <context.Provider value = 'blue'>
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
        {/* <UseEffectHook/> */}
        {/* <UseContextHook/> */}
        {/* <UseReducerHook/> */}
        <UseRefAndDOM/>
    </div>
    </context.Provider>

  );
}

export default App;
