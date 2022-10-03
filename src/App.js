import "./styles.css";
import Encoder from "./components/encoder.component";
import Decoder from "./components/decoder.component";

export default function App() {
  return (
    <div className="App light-font">
        <h1>Numero code App</h1>
        <hr/>
      <div className="row mt-2">
      
      <Encoder/>
      <Decoder/>
      </div>
    </div>
  );
}
