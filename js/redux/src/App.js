import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  reset,
  logIn,
  logOut,
} from "./actions";

function App({ title }) {
  const counter = useSelector((state) => state.counter);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
      <div className="App">
        <h1>
            {title}
        </h1>
        <h3>Counter</h3>
        <h3>{counter}</h3>
        <button onClick={() => dispatch(increment())}>Increase</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(decrement())}>Decrease</button>

      </div>
  );
}

export default App;
