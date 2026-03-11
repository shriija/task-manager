function TaskItem({ task, deleteTask, toggleTask }) {

  return (
    <div className="flex justify-between items-center border p-3 rounded">

      <div>
        <h3 className={`font-semibold ${task.completed ? "line-through text-gray-400" : ""}`}>
          {task.title}
        </h3>

        <p className="text-sm text-gray-500">
          Priority: {task.priority}
        </p>
      </div>

      <div className="flex gap-2">

        <button
          onClick={() => toggleTask(task.id)}
          className="bg-green-500 text-white px-2 py-1 rounded text-sm"
        >
          {task.completed ? "Undo" : "Done"}
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="bg-red-500 text-white px-2 py-1 rounded text-sm"
        >
          Delete
        </button>

      </div>

    </div>
  )
}

export default TaskItem