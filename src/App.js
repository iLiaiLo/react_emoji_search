import React from "react";
import data from "./data";


function App() {
  const [value,SetValue]=React.useState("");
  const [disp,Setdisp]=React.useState('block');

  React.useEffect(()=>{
    if(value){
      Setdisp("block");
    }
    else{
      Setdisp("none")
    }
  },[value])

  const [massage,Setmassage]=React.useState("");  
  const [content,setContent]=React.useState([]);

  function addcontent(){
    setContent(prew=>[...prew,{text:massage}])
  }

  return (
    <div style={{display:"flex",gap:"10px",justifyContent:"center"}}>
    <div className="emojiSearch">
      <div className="emojiInput">
    <input type="text" placeholder="search emoji" aria-label="search-emoji" value={value} onChange={(e)=>SetValue(e.target.value)}/>
    </div>

    <div className="emojis">
      {
      data.map((emoji,index)=>(
        emoji.name.includes(value.toUpperCase()) &&
        <div className="emojiParent" style={{display:disp}}>
        <div key={index} className="emoji" style={{display:disp,backgroundColor:"lightblue",borderRadius:"10px",textIndent:"5px"}} onClick={()=>Setmassage(p=>p+emoji.unicode)}>
        {emoji.name}:{emoji.unicode}
       </div>
       </div>
      ))
     }
     </div>
      
    </div>

    <div className="massageContainer">
      <div className="writeSend">
    <input type="text" placeholder="massage" value={massage} onChange={e=>Setmassage(e.target.value)} />
    <button type="button" onClick={addcontent}>send</button>
    </div>

    <div /*massageText*/  >
      {content.map((item,index)=>{
        return <div key={index} className="massage">{item.text}</div>
      })}
    </div>
    </div>

  </div>

  );
}

export default App;
