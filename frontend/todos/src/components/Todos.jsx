import * as Icon from "react-feather"
import { useState } from "react";

const todoList = [
  {
    id: 1,
    task: 'Belajar Frontend Developer',
    time: '2 Hari lalu',
    isDone: true
  },
  {
    id: 2,
    task: 'Lari Pagi',
    time: '3 Hari lalu',
    isDone: false
  }
]

const Todos = () => {
  const [todos, setTodos] = useState(todoList);

  function handleTrash(){
    return confirm('Yakin ingin menghapus tugas ini?');
  }

  function handleTodos(i) {
    setTodos(todos.map(data => {
      return data.id === i ? {...data, isDone: !data.isDone} : data
    }));
  }

  return (
    <div className="flex flex-col gap-4">
      {todos.map((todo) => (
        <div onClick={() => handleTodos(todo.id)} key={todo.id} className="flex justify-between items-center px-6 2xl:px-8 py-6 2xl:py-6 bg-white shadow-md hover:shadow-blue-400 rounded-md shadow-slate-200 duration-75 hover:border-2 hover:border-blue-400 cursor-default">
          <div className="flex gap-4 text-slate-400">
            <button onClick={handleTrash} className="p-2 hover:bg-red-500/10 duration-100 rounded-md cursor-pointer">
              <Icon.Trash2 className="w-5 h-5" />
            </button>
            <p className={`font-semibold mt-1 text-black text-lg 2xl:text-xl ${todo.isDone ? 'line-through' : 'no-underline'}`}>{todo.task}</p>
          </div>
          <p>{todo.time}</p>
        </div>
      ))}
    </div>

  )
}

export default Todos