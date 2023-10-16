import { Itask } from "@/types/tasks";
import React from "react";
import Tasks from "./Tasks";

type todoList = {
         tasks : Itask[]
}
const TodoList: React.FC<todoList > =({tasks}) => {
  return (
    <div>
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Tasks</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
        
            {tasks.map(task => (
                  <Tasks key={task.id} task={task}/>
            
            ))}
            
         
        </tbody>
      </table>
    </div>
  );
}
export default TodoList