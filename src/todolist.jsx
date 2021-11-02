import React from "react";

const TodoList=({todolist,delete1})=>{

    return(

        <div>

              {todolist.map((outputs,index)=>

               <div key={index}>

                   <h5>{outputs}&nbsp;&nbsp;<button onClick={()=>delete1(index)}>deletebtn</button></h5>

               </div>)}

        </div>

    )

}

export default TodoList;