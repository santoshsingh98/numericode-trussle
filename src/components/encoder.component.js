import { useState } from "react";
import { actionTypes } from "./../state-management/reducer.types"

export default function encoder({onStateChange}) {

    const [val, onChange] = useState("")

    function handleInputChange(val) {
        onChange(val);
    }

    function doSubmit(){
        onStateChange({type : actionTypes.ENCODE, value: val});
    }
    

    return (<div className="col-md-5 border-box m-auto">
        <h2>Encoded</h2>
        <div className="mt-2">
            <textarea cols="25" placeholder="Enter your encoded string"
                rows="10"
                className="height-100p input-container" value={val} onChange={(val) => handleInputChange(val.target.value)} />
        </div>
        <div>
            <button onClick={() => doSubmit()} >Click to decode</button>
        </div>
    </div>)
}