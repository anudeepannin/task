 
 import react, { useEffect, useState } from "react";
 
 
 export const Fun=()=> {
      const[count, setcount]=useState(0);
      useEffect(()=> console.log(count),[count]);
    return (
   <div>
        hello form function
        <p> cliked{count}times  </p>
          <br/>
        <button onClick={()=>setcount(count+1)}  >clik me</button>
    </div>
     );
}

export default Fun;