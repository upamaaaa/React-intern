import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const fetchTodos = createAsyncThunk("fetchTodos", async () => {
  const response = await fetch("http://localhost:3000/todo");
  return response.json();
});

export const addTodoAsync = createAsyncThunk("addTodo", async (todo) => {
  const response = await axios.post("http://localhost:3000/todo", todo);
  console.log(response.data);
  return response.data;
});

export const deleteTodoAsync = createAsyncThunk("deleteTodo", async (id) => {
  await fetch(`http://localhost:3000/todo/${id}`, {
    method: "DELETE",
  });

  return id;
});

export const editTodoAsync = createAsyncThunk("editTodo", async ({ id, updatedData }) => {
  const response = await axios.put(`http://localhost:3000/todo/${id}`, updatedData);
  return response.data;
});


//made reducers 
const todoSlice = createSlice({
  name: "todo",

  initialState: {
    isLoading: false,
    data: [],
    isError: false,
  },
//extra reducers for async actions
  extraReducers: (builder) => {
   
    builder.addCase(fetchTodos.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });

    builder.addCase(fetchTodos.rejected, (state) => {
      state.isLoading = false;
      state.isError = true;
    });


    // ADD TODO
    builder.addCase(addTodoAsync.fulfilled, (state, action) => {
      // state.data.
      state.data.push(action.payload);
    });


    // DELETE TODO
    builder.addCase(deleteTodoAsync.fulfilled, (state, action) => {
      state.data = state.data.filter(
        (todo) => todo.id !== action.payload
      );
    });

    //edit todo
    builder.addCase(editTodoAsync.fulfilled, (state, action) => {
      const index = state.data.findIndex((todo) => todo.id === action.payload.id);
      if (index !== -1) {
        state.data[index] = action.payload;
      }
    });

  },
});

export default todoSlice.reducer;