
export interface ColumnProps {
  text: string,
  index: number
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


export interface Task {
  id: string,
  text: string
}

export interface List {
  id: string,
  text: string,
  tasks: Task[]
}

export interface AppState {
  lists: List[]
}
export interface AppContextProps {
  state: AppState
}