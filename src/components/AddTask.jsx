import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addtache } from '../redux/TodoSlice'

export default function AddTask() {

    const dispatch = useDispatch()
    const [tache, setTache] = useState()
  return (
    <div>
        <input type="text" name="tache" id="tache" value={tache} onChange={(e) => setTache(e.target.value)} />
        <button onClick={() => dispatch(addtache(tache))}>Add</button>
    </div>
  )
}
