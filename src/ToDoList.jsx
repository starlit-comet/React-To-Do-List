// import { useState } from "react";

// function ToDoList(){

//     const[tasks,setTasks] = useState(['buy food','pay rent','take medicines'])
//     const [newTask,setNewTask] = useState()

//     const handleInputChange = (e)=>{
//         setNewTask(e.target.value)
//     }

//     const addTask=()=>{
//         if(newTask.trim().length===0) return
//         setTasks([...tasks,newTask])
//         setNewTask('')
//     }
//     const deleteTask=(index)=>{
//         setTasks(tasks.filter((_,i)=>i!==index))
//     }
//     const moveTaskUp = (index)=>{
//         if(index===0)return
//         const currPos=tasks[index]
//         const prevPos=tasks[index-1]
//         const res=[]

//         for(let x=0;x<tasks.length;x++){
//             if(x==index){
//                 res.push(prevPos)
//             } else if(x==index-1){
//                 res.push(currPos)
//             }else{
//                 res.push(tasks[x])
//             }
//         }
//         setTasks(res)
//     }
//     const moveTaskDown =(index)=>{
//         if(index===tasks.length-1)return
//         const[currPos,nextPos,res]=[tasks[index],tasks[index+1],[]]
//         for(let x =0;x<tasks.length;x++){
//             if(x===index){
//                 res.push(nextPos)
//             }else if(x===index+1){
//                 res.push(currPos)
//             }else{
//                 res.push(tasks[x])
//             }
//         }
//         setTasks(res)
//     }

//     return(
//         <div>
//             <h2 className="todo-head">TO DO LIST</h2>
//             <input type="text" className="task-input" value ={newTask} onChange={handleInputChange}/>
//             <button onClick={addTask} className="add-btn" >Add Task</button>
//             <ul >
//                 {tasks.map((e,i)=> {
//              return <li key={i} className="task-list"><span className="text">{e}</span>
//                     <button className="delete-task" onClick={()=>deleteTask(i)} >❌</ button>
//                     <button className="move-task" onClick={()=>moveTaskUp(i)}>⬆</     button>
//                     <button className="move-task" onClick={()=>moveTaskDown(i)}>⬇</   button>
//                     </li>
// })}
//             </ul>

//         </div>
//     )
// }
// export default ToDoList

// added local storage

// import { useEffect, useState } from "react";

// function ToDoList() {
//   const [tasks, setTasks] = useState(() => {
//     const saved = localStorage.getItem("todo-tasks");
//     return saved ? JSON.parse(saved) : [];
//   });

//   const [newTask, setNewTask] = useState("");

//   useEffect(() => {
//     localStorage.setItem("todo-tasks", JSON.stringify(tasks));
//   }, [tasks]);

//   const handleInputChange = (e) => {
//     setNewTask(e.target.value);
//   };

//   const addTask = () => {
//     if (newTask.trim().length === 0) return;
//     setTasks((prev) => [...prev, newTask]);
//     setNewTask("");
//   };

//   const deleteTask = (index) => {
//     setTasks(tasks.filter((_, i) => i !== index));
//   };

//   const moveTaskUp = (index) => {
//     if (index === 0) return;
//     const updated = [...tasks];
//     [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
//     setTasks(updated);
//   };

//   const moveTaskDown = (index) => {
//     if (index === tasks.length - 1) return;
//     const updated = [...tasks];
//     [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
//     setTasks(updated);
//   };

//   return (
//     <div>
//       <h2 className="todo-head">TO DO LIST</h2>
//       <input
//         type="text"
//         className="task-input"
//         value={newTask}
//         onChange={handleInputChange}
//       />
//       <button onClick={addTask} className="add-btn">
//         Add Task
//       </button>
//       <ul>
//         {tasks.map((task, i) => (
//           <li key={i} className="task-list">
//             <span className="text">{task}</span>
//             <button className="delete-task" onClick={() => deleteTask(i)}>
//               ❌
//             </button>
//             <button className="move-task" onClick={() => moveTaskUp(i)}>
//               ⬆
//             </button>
//             <button className="move-task" onClick={() => moveTaskDown(i)}>
//               ⬇
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default ToDoList;

// class task{
//   constructor(val){
//     this.item= val
//     this.isCompleted = false

//   }

//   editTast(newValue){
//     this.item=val
//   }
//   makeTaskCompleted(){
//     this.isCompleted=true
//   }
//   makeTaskNotCompleted(){
//     this.isCompleted=false
//   }
// }

import { useEffect, useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("todo-tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [newTask, setNewTask] = useState({
    taskContent: "",
    isTaskCompleted: false,
  });

  useEffect(() => {
    localStorage.setItem("todo-tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleInputChange = (e) => {
    setNewTask({ taskContent: e.target.value, isTaskCompleted: false });
  };

  const addTask = () => {
    if (newTask === null) return;
    if (newTask?.taskContent.trim().length === 0) return;
    setTasks((prev) => [...prev, newTask]);
    setNewTask({ taskContent: "", isTaskCompleted: false });
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index === 0) return;
    const updated = [...tasks];
    [updated[index - 1], updated[index]] = [updated[index], updated[index - 1]];
    setTasks(updated);
  };

  const moveTaskDown = (index) => {
    if (index === tasks.length - 1) return;
    const updated = [...tasks];
    [updated[index + 1], updated[index]] = [updated[index], updated[index + 1]];
    setTasks(updated);
  };

  function toggleTask(index) {
    console.log("toggle called");
    const arr = [...tasks];
    arr[index].isTaskCompleted = !arr[index].isTaskCompleted;
    setTasks(arr);
  }

  return (
    <div className="todo-head">
      <h2 className="todo-head">TO DO LIST</h2>
      <input
        type="text"
        className="task-input"
        value={newTask?.taskContent}
        onChange={handleInputChange}
        placeholder="Add a new Task"
      />
      <button onClick={addTask} className="add-btn">
        Add Task
      </button>
      <ul className="task-ul">
        {tasks.map((task, i) => (
          <li key={i} className="task-list">
            <label className="task-label">
              <input
                type="checkbox"
                className="task-checkbox"
                checked={task.isTaskCompleted}
                onChange={() => toggleTask(i)}
              />
              <span className={`task-text  ${task.isTaskCompleted ? "completed-task" : "" }` } >

              {task.taskContent}
              </span>
              
            </label>
            <div className="task-actions" >
            <button className="delete-task" onClick={() => deleteTask(i)}>
              ❌
            </button>
            <button className="move-task" onClick={() => moveTaskUp(i)}>
              ⬆
            </button>
            <button className="move-task" onClick={() => moveTaskDown(i)}>
              ⬇
            </button></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
