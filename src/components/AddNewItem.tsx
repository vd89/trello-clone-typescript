import React, { useState } from 'react'
import { AddNewItemProps } from './types'
import { AddItemButton } from '../styles/appStyles'
import NewItemForm from './NewItemForm'

const AddNewItem = (props: AddNewItemProps) => {
  const [showForm, setShowForm] = useState(false)
  const {dark,toggleButtonText,onAdd} = props

  if (showForm) {
      return(
        <NewItemForm onAdd={text => {
          onAdd(text);
          setShowForm(false);
        }}/>
      )
  }
  return (
    <AddItemButton dark={dark} onClick={() => setShowForm(true)}>
      {toggleButtonText}
    </AddItemButton>
  )
}

export default AddNewItem