import { CardProps } from './types'
import { CardContainer } from '../styles/appStyles'

const Card = ({text}: CardProps) => {
  return (
   <CardContainer>{text}</CardContainer>
  )
}

export default Card