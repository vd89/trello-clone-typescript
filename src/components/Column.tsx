import { PropsWithChildren } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles/appStyles'
import { ColumnProps } from '../types'
import AddNewItem from './AddNewItem'
import { useAppState } from '../states/AppContext'
import Card from './Card'

const Column = ({text, index,id}: PropsWithChildren<ColumnProps>) => {
  const{state, dispatch} = useAppState()

  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id}/>
      ))}
      <AddNewItem toggleButtonText='+ Add another Task ' onAdd={text => dispatch({type:"ADD_TASK", payload:{text, listId:id}})} dark/>
    </ColumnContainer>

  )
}

export default Column