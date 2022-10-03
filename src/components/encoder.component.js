import {useState} from "react"
import {onInputChange} from "./../state-management/actions"

export default function encoder() {

    const [val, onChange] = useState("")
    
    function handleInputChange(val) {
        console.log(val)
        onChange(val)
    } 

    return (<div className="col-md-5 border-box m-auto">
    <h2>Encoded</h2>
    <div className="mt-2">
        <textarea cols="25"  placeholder="Enter your decoded string"
       rows="10" 
 className="height-100p input-container" value={val} onChange={(val) => handleInputChange(val.target.value)} />
    </div>
  </div> )}