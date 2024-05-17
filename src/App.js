// import logo from './logo.svg';
import { Provider, useDispatch, useSelector } from 'react-redux';
import './App.css';
// import FunctionComp from './functionComp';
// import FunctionComp from './tabledisplay';
import { addValue, addValueAsync, decrement, increment } from './store/counter/counterSlice';
import { useState } from 'react';
// import Test from './test';
// import {data} from './data';
// import User from './callapi';
// import Userdetail from './apiDynamicCall';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './store/counter/home/home';
import { store } from './store';


function App() {
  // const dispatch = useDispatch()
  // const count = useSelector((state) => state.counter.value)
  // const disable = useSelector((state) => state.counter.disable)
  // const [numberval, setNumberVal] = useState(0)

  return (
    <>
    {/* <FunctionComp /> */}
       {/* <Test />
      <FunctionComp /> */}
    <Provider store = {store}>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/product/:productId' element={<h1>product detail</h1>} />
                <Route path='*' element={<h1>404 Not Found</h1>} />
            </Routes>
        </BrowserRouter>
    </Provider>
    
      {/* <div className="btn">
          <button onClick={() => dispatch(decrement())} disabled={disable}>Minus (-)</button>
          <h1> {count} </h1>
          <button onClick={() => dispatch(increment())} disabled={disable}>Plus (+)</button>
          <div>
              <input type='number' name='value' value={numberval} onChange={ (e) => setNumberVal(e.target.value)} disabled={disable}/>
          </div>

          <button onClick={() => {
            let nVal = Number(numberval)
            dispatch(addValue(nVal))
          }} disabled={disable}>Submit</button>

          <button onClick={() => {
            let nVal = Number(numberval)
            dispatch(addValueAsync(nVal))
          }}disabled={disable}>Submit Async</button>
      </div>  */}
    </>
  );

}

export default App;
