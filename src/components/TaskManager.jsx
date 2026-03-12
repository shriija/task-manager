import { useState } from "react"
import AddTaskForm from "./AddTaskForm"
import TaskList from "./TaskList"

function TaskManager() {

  const [tasks, setTasks] = useState([])

  const addTask = (title, priority) => {
    const newTask = {
      id: Date.now(),
      title,
      priority,
      completed: false
    }

    setTasks([...tasks, newTask])
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const toggleTask = (id) => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  const completedCount = tasks.filter(t => t.completed).length

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg w-500px">

      <h1 className="text-2xl font-bold mb-4">Task Manager</h1>

      <p className="mb-4 text-gray-600">
        Total Tasks: {tasks.length} | Completed: {completedCount}
      </p>

      <AddTaskForm addTask={addTask} />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        toggleTask={toggleTask}
      />

    </div>
  )
}

export default TaskManager