import { PropsWithChildren } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles/appStyles'
import { ColumnProps } from '../types'
import AddNewItem from './AddNewItem'
import { useAppState } from '../states/AppContext'
import Card from './Card'

const Column = ({text, index}: PropsWithChildren<ColumnProps>) => {
  const{state} = useAppState()
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {state.lists[index].tasks.map(task => (
        <Card text={task.text} key={task.id}/>
      ))}
      <AddNewItem toggleButtonText='+ Add another Task ' onAdd={console.log} dark/>
    </ColumnContainer>

  )
}

export default Column