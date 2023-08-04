import { PropsWithChildren } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles/appStyles'
import { ColumnProps } from '../types'
import AddNewItem from './AddNewItem'

const Column = ({text, children}: PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem toggleButtonText='+ Add another Task ' onAdd={console.log} dark/>
    </ColumnContainer>

  )
}

export default Column