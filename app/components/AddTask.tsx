"use client";
import React, { FormEventHandler, useState } from "react";
import { AiOutlinePlus } from "react-icons/ai";
import Modal from "./Modal";
import { AddTodo } from "@/api";
import { useRouter } from "next/navigation";
import { v4 as uuidv4 } from 'uuid';
const AddTask = () => {
    const router = useRouter()
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [newTasksValue, setNewTasks] = useState<string>('');
  const submitHandler: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
  
    await AddTodo({
        id : uuidv4() , 
        text : newTasksValue
    })
    setModalOpen(false)
    router.refresh()
  };
  return (
    <div>
      <button
        className=" btn btn-primary  w-full"
        onClick={() => setModalOpen(true)}
      >
        Add Task <AiOutlinePlus className="ml-2 " />
      </button>
      <Modal modalOpen={modalOpen} setModalOpen={setModalOpen}>
        <form onSubmit={submitHandler}>
          <h3 className=" font-bold text-lg">add new Task</h3>
          <div className="modal-action">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
              onChange={(e) => setNewTasks(e.target.value)}
            />
            <button type="submit" className="btn">
              {" "}
              submit
            </button>
          </div>
        </form>
      </Modal>
    </div>
  );
};
export default AddTask;
