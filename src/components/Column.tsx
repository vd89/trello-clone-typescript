import { PropsWithChildren } from 'react'
import { ColumnContainer, ColumnTitle } from '../styles/appStyles'
import { ColumnProps } from './types'

const Column = ({text, children}: PropsWithChildren<ColumnProps>) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
    </ColumnContainer>

  )
}

export default Column