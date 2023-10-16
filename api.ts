import { Itask } from "./types/tasks";

const baseUrl = "http://localhost:3001";
export const getAllTodos = async (): Promise<Itask[]> => {
  const res = await fetch(`${baseUrl}/tasks` , {cache : 'no-store'});
  const todos = await res.json();
  return todos;
};
export const AddTodo = async (todo : Itask): Promise<Itask[]> => {
    const res = await fetch(`${baseUrl}/tasks` , {
        method : 'POST' ,  
        headers : {
            'Content-Type' : 'application/json'
        } ,
        body : JSON.stringify(todo)
    });
    const newTodo = await res.json()
    return newTodo
}
export const editTodo = async (todo : Itask): Promise<Itask[]> => {
    const res = await fetch(`${baseUrl}/tasks/${todo.id}` , {
        method : 'PUT' ,  
        headers : {
            'Content-Type' : 'application/json'
        } ,
        body : JSON.stringify(todo)
    });
    const UPdatedTodo = await res.json()
    return UPdatedTodo
}
export const DeleteTodo = async (id : string): Promise<void> => {
     await fetch(`${baseUrl}/tasks/${id}` , {
        method : 'DELETE' 
    });
}