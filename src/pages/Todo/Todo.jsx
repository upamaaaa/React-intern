import { useDispatch, useSelector } from "react-redux";
import {
  fetchTodos,
  deleteTodoAsync,
  editTodoAsync,
} from "@/redux/slice/todo";
import { useState, useEffect } from "react";
import Modal from "@/components/modal/Modal";
import Button from "@/components/Button/Button";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Todo() {
  const dispatch = useDispatch();
  const [editingTodoId, setEditingTodoId] = useState(null);
  const [editTitle, setEditTitle] = useState("");

  const todoState = useSelector((state) => state.todo);

  const { isLoading, data } = todoState;

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  const handleEditClick = (todo) => {
    setEditingTodoId(todo.id);
    setEditTitle(todo.title);
  };

  const handleCancelEdit = () => {
    setEditingTodoId(null);
    setEditTitle("");
  };

  const handleSaveEdit = (todo) => {
    if (editTitle.trim() === "") return;

    dispatch(
      editTodoAsync({
        id: todo.id,
        updatedData: { ...todo, title: editTitle.trim() },
      }),
    );

    handleCancelEdit();
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4">Todo App P</h2>

        <div className="d-flex justify-content-end mb-3">
          <Button
            text="Add Todo"
            style={{ backgroundColor: "#001f2e", color: "#fff" }}
            data-bs-toggle="modal"
            data-bs-target="#todoModal"
          />
        </div>

        <Modal />

        <ul className="list-group">
          {data && data.length === 0 ? (
            <li className="list-group-item text-center">No todos added</li>
          ) : (
            data?.map((todo) => (
              <li
                key={todo.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center flex-grow-1">
                  <input
                    type="checkbox"
                    className="form-check-input me-2"
                    checked={todo.completed}
                    readOnly
                  />

                  {editingTodoId === todo.id ? (
                    <input
                      type="text"
                      className="form-control"
                      value={editTitle}
                      onChange={(e) => setEditTitle(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") handleSaveEdit(todo);
                        if (e.key === "Escape") handleCancelEdit();
                      }}
                      autoFocus
                    />
                  ) : (
                    <span
                      style={{
                        textDecoration: todo.completed
                          ? "line-through"
                          : "none",
                      }}
                    >
                      {todo.title}
                    </span>
                  )}
                </div>

                {editingTodoId === todo.id ? (
                  <>
                    <Button
                      text="Save"
                      style={{ backgroundColor: "#0f6b2f", color: "#fff" }}
                      onClick={() => handleSaveEdit(todo)}
                    />

                    <Button
                      text="Cancel"
                      style={{ backgroundColor: "#555", color: "#fff" }}
                      onClick={handleCancelEdit}
                    />
                  </>
                ) : (
                  <>
                    <Button
                      text="Delete"
                      style={{ backgroundColor: "#860404", color: "#fff" }}
                      onClick={() => dispatch(deleteTodoAsync(todo.id))}
                    />

                    <Button
                      text="Edit"
                      style={{ backgroundColor: "#001f2e", color: "#fff" }}
                      onClick={() => handleEditClick(todo)}
                    />
                  </>
                )}
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  );
}

export default Todo;
