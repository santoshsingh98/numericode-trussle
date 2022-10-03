import "./styles.css";
import Encoder from "./components/encoder.component";
import Decoder from "./components/decoder.component";
import React , {useReducer} from 'react';
import { AppState } from "./state-management/state"

export default function App() {

  const [state,dispatch] = useReducer(AppState,"");

  return (
    <div className="App light-font">
        <h1>Numero code App</h1>
        <hr/>
      <div className="row mt-2">
      
      <Encoder onStateChange={dispatch}/>
      <Decoder state={state}/>
      </div>
    </div>
  );
}
