import TaskItem from "./TaskItem"

function TaskList({ tasks, deleteTask, toggleTask }) {

  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks yet</p>
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
        />
      ))}
    </div>
  )
}

export default TaskList