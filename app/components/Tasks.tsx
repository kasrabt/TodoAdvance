"use client";
import { Itask } from "@/types/tasks";
import React, { FormEventHandler, MouseEventHandler, useState } from "react";
import Modal from "./Modal";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { useRouter } from "next/navigation";
import { DeleteTodo, editTodo } from "@/api";
type myTask = {
  task: Itask;
};
const Tasks: React.FC<myTask> = ({ task }) => {
  const router = useRouter();
  const [modalEdit, setmodalEdit] = useState<boolean>(false);
  const [modalDelete, setmodalDelete] = useState<boolean>(false);
  const [taskEdit, setTaskedit] = useState<string>(task.text);
  const handleSubmitEdit: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();

    await editTodo({
      id: task.id,
      text: taskEdit,
    });
    setmodalEdit(false);
    router.refresh();
  };
  const handleDeleteSubmit = async (id : string) => {

    await DeleteTodo(id);
    setmodalDelete(false);
    router.refresh();
  };
  return (
    <tr>
      <td className="w-full">{task.text}</td>
      <td className="flex gap-5">
        <FiEdit cursor="pointer" onClick={() => setmodalEdit(true)} />
        <Modal modalOpen={modalEdit} setModalOpen={setmodalEdit}>
          <form onSubmit={handleSubmitEdit}>
            <h3 className=" font-bold text-lg">edit your task </h3>
            <div className="modal-action">
              <input
                value={taskEdit}
                type="text"
                placeholder="Type here"
                className="input input-bordered w-full "
                onChange={(e) => setTaskedit(e.target.value)}
              />
              <button type="submit" className="btn">
                submit
              </button>
            </div>
          </form>
        </Modal>
        <FiTrash2 cursor="pointer" onClick={() => setmodalDelete(true)} />
        <Modal modalOpen={modalDelete} setModalOpen={setmodalDelete}>
          <div className=" justify-center flex flex-col items-center">
            <h3 className=" font-bold text-lg">
              are you sure you want delete this ?{" "}
            </h3>
            <div className="modal-action justify-center flex">
              <button type="submit" className="btn" onClick={()=> handleDeleteSubmit(task.id)}>
                yes delete that !
              </button>
            </div>
          </div>
        </Modal>
      </td>
    </tr>
  );
};
export default Tasks;
