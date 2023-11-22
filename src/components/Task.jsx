import React from 'react'
import { useDispatch } from 'react-redux'
import { deletetache, updatetache } from '../redux/TodoSlice'

export default function Task({tache}) {

    const dispatch = useDispatch()
  return (
    <div className='tache'>
        <span className={tache.completed? 'barre':undefined}>{tache.task}</span>
        <div>
            <button onClick={() => dispatch(updatetache(tache.id))}>Modifier</button>
            <button onClick={() => dispatch(deletetache(tache.id))}>Supprimer</button>
        </div>
    </div>
  )
}
