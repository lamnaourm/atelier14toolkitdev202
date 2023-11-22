import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

export default function ListTask() {

    const taches = useSelector(state => state.todo.tasks)
  return (
    <div>
        {
            taches.map(t => <Task key={t.id} tache={t} />)
        }
    </div>
  )
}
