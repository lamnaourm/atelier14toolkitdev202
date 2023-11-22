import React from 'react'
import { useDispatch } from 'react-redux'
import { deleteall, deletenotermines, deletetermines } from '../redux/TodoSlice'

export default function Operations() {


    const dispatch = useDispatch()
  return (
    <div>
        <button onClick={() => dispatch(deleteall())}>Sup. Tous</button>
        <button onClick={() => dispatch(deletetermines())}>Sup. Terminès</button>
        <button onClick={() => dispatch(deletenotermines())}>Sup. Non Terminés</button>
    </div>
  )
}
