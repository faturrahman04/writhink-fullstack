import * as Icon from "react-feather";
import { useState, useEffect } from "react";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime)

const Todos = () => {
  const [todos, setTodos] = useState([]);
  // const [loading, setLoading] = useState(false);

    async function getTodosData() {
      try {
        // setLoading(true)
        const data = await fetch('http://localhost:3000/todos', {
          method: 'GET',
          headers : {
            Authorization: `Bearer ${localStorage.getItem('token')}`
          }
        })
        const result = await data.json();
        const userTodos = result.result
        setTodos(userTodos)
      } catch (err) {
        if (err) throw err;
      } finally {
        // setLoading(false);
      }
    }

    useEffect(() => {
      getTodosData();
    }, [todos])

  function handleTrash(){
    return confirm('Yakin ingin menghapus tugas ini?');
  }

  async function handleTodos(i) {
    const todo = todos.find(t => t.id === i)
    try {
      const data = await fetch('http://localhost:3000/todos', {
        method: 'PATCH',
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify({
          id_task: todo.id,
          is_done: !todo.is_done ? 1 : 0
        })
      });

      const response = await data.json();
      console.log(response);
    } catch (err) {
      if (err) throw err;
    }

    setTodos(todos.map(data => {
      return data.id === i ? {...data, is_done: !data.is_done} : data
    }));
  }

  return (
    <div className="flex flex-col gap-4 overflow-auto">
      {todos.map((todo) => (
        <div onClick={() => handleTodos(todo.id)} key={todo.id} className="flex justify-between items-center px-6 2xl:px-8 py-6 2xl:py-6 bg-white shadow-md hover:shadow-blue-400 rounded-md shadow-slate-200 duration-75 hover:border-2 hover:border-blue-400 cursor-default">
          <div className="flex gap-4 text-slate-400">
            <button onClick={handleTrash} className="p-2 hover:bg-red-500/10 duration-100 rounded-md cursor-pointer">
              <Icon.Trash2 className="w-5 h-5" />
            </button>
            <p className={`font-semibold mt-1 text-black text-lg 2xl:text-xl ${todo.is_done ? 'line-through' : 'no-underline'}`}>{todo.task}</p>
          </div>
          <p>{dayjs(todo.created_at).fromNow()}</p>
        </div>
      ))}
    </div>

  )
}

export default Todos