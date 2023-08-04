
export interface ColumnProps {
  text: string
}

export interface AddNewItemProps {
  dark?: boolean,
  toggleButtonText: string,
  onAdd (text: string): void
}

export interface NewItemFormProps {
  onAdd (text: string): void
}
export interface AddItemButtonProps {
  dark?: boolean
}

export interface CardProps {
  text: string
}