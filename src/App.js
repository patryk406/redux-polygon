import { createStore } from "redux";
import CounterContainer from "./counter/CounterContainer";
import Posts from "./posts/containers/Posts";
import Users from "./users/containers/Users";
import reducer,{inc,dec,reset} from './counter/redux'
import React,{ Component } from "react";

const store = createStore(reducer)

store.subscribe(()=>console.log(store.getState()))

store.dispatch(inc())
store.dispatch(inc())
store.dispatch(dec())
store.dispatch(reset())
const App = ()=>{
  return (
    <div className="App">
        <CounterContainer />
        <Posts />
        <Users />
    </div>
  );
}

export default App;
