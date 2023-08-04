import React, { KeyboardEvent, useState } from 'react'
import { NewItemFormProps } from '../types'
import { NewItemButton, NewItemFromContainer, NewItemInput } from '../styles/appStyles'
import { useFocus } from '../utils/useFocus'

const NewItemForm = ({onAdd}: NewItemFormProps) => {
  const [text, setText] = useState('')
  const inputRef = useFocus()
  const handleAddText = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      onAdd(text)
    }
   }
  return (
    <NewItemFromContainer>
      <NewItemInput ref={inputRef} value={text} onChange={e=> setText(e.target.value)} onKeyPress={handleAddText}/>
      <NewItemButton onClick={()=> onAdd(text)}>Create</NewItemButton>
    </NewItemFromContainer>
  )
}

export default NewItemForm