import { useState } from "react";

function ToDoList(){

    const[tasks,setTasks] = useState(['buy food','pay rent','take medicines'])
    const [newTask,setNewTask] = useState()

    const handleInputChange = (e)=>{
        setNewTask(e.target.value)
    }

    const addTask=()=>{
        if(newTask.trim().length===0) return
        setTasks([...tasks,newTask])
        setNewTask('')
    }
    const deleteTask=(index)=>{
        setTasks(tasks.filter((_,i)=>i!==index))
    }
    const moveTaskUp = (index)=>{
        if(index===0)return
        const currPos=tasks[index]
        const prevPos=tasks[index-1]
        const res=[]
        
        for(let x=0;x<tasks.length;x++){
            if(x==index){
                res.push(prevPos)
            } else if(x==index-1){
                res.push(currPos)
            }else{
                res.push(tasks[x])
            }
        }
        setTasks(res)
    }
    const moveTaskDown =(index)=>{
        if(index===tasks.length-1)return
        const[currPos,nextPos,res]=[tasks[index],tasks[index+1],[]]
        for(let x =0;x<tasks.length;x++){
            if(x===index){
                res.push(nextPos)
            }else if(x===index+1){
                res.push(currPos)
            }else{
                res.push(tasks[x])
            }
        }
        setTasks(res)
    }

    return(
        <div>
            <h2 className="todo-head">TO DO LIST</h2>
            <input type="text" className="task-input" value ={newTask} onChange={handleInputChange}/>
            <button onClick={addTask} className="add-btn" >Add Task</button>
            <ul >
                {tasks.map((e,i)=> {
             return <li key={i} className="task-list"><span className="text">{e}</span>
                    <button className="delete-task" onClick={()=>deleteTask(i)} >❌</ button>
                    <button className="move-task" onClick={()=>moveTaskUp(i)}>⬆</     button>
                    <button className="move-task" onClick={()=>moveTaskDown(i)}>⬇</   button>
                    </li>   
})}
            </ul>

        </div>
    )
}
export default ToDoList