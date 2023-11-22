import React from 'react'
import { useSelector } from 'react-redux'

export default function StatsTasks() {

    const taches = useSelector(state => state.todo.tasks)

  return (
    <div>
        Nombre taches : {taches.length} -
        Nombre Terminès : {taches.filter(t => t.completed).length} -
        Nombre Non Terminés : {taches.filter(t => !t.completed).length} 
    </div>
  )
}
