import Child from "./child";
import { useState } from "react";
function Parent()
{
    let[state,setState]=useState("");
    const passDataToChild=(event=>{
      setState(event.target.value);
    })
    return(
        <div style={{
            boxShadow:"0 0 10px black",
            textAlign:"center",
            padding:"30px",
            margin:"100px auto",
            width:"500px",
        }}>
        <h2>PARENT COMPONENT</h2>
        <input type="text" placeholder="Enter The Text" onChange={passDataToChild}></input>
        <Child data={state}/>
        </div>
    );
}
export default Parent;