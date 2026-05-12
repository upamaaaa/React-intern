import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodoAsync } from "@/redux/slice/todo";
import Button from "@/components/Button/Button";

function Modal() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");
  

  const [completed, setCompleted] = useState(false);

  const handleAddTodo = () => {
    console.log("text");
    if (task.trim() === "") return;
    dispatch(addTodoAsync({ title: task, completed: completed }));
    setTask("");
    // setCompleted(false);
  };

  return (
    <div
      className="modal"
      id="todoModal"
      tabIndex="-1"
      aria-hidden="true"
      style={{ pointerEvents: "none" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Todo</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          <div className="modal-body">
            <div className="mb-3">
              <label className="form-label">Task</label>

              <input
                type="text"
                className="form-control"
                placeholder="Enter task..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
              />
            </div>
          </div>
          <Button
            text={`close Todo`}
            // className="btn btn-secondary"
            style={{ backgroundColor: "#d400fa", color: "#fff" }}
            data-bs-dismiss="modal"
          />

          <Button
            text={`Add Todo`}
            onClick={handleAddTodo}
            style={{ backgroundColor: "#ed0808", color: "#fff" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Modal;
