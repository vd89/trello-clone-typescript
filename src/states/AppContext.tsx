import React, { PropsWithChildren, createContext, useContext, useReducer } from "react";
import { Action, AppContextProps, AppState } from "../types";
import { nanoid } from "nanoid";
import { findItemIndexById } from "../utils/useFocus";

const AppContext = createContext<AppContextProps>({} as AppContextProps)

const appReducer = (state: AppState, action: Action ): AppState => {
  switch (action.type) {
    case "ADD_LIST":
      return {
        ...state,
        lists:[
          ...state.lists,
          {id:nanoid(),text:action.payload,tasks:[]}
        ]
      }
      case "ADD_TASK": {
        const targetLaneIndex = findItemIndexById(
          state.lists,
          action.payload.listId
        )
        state.lists[targetLaneIndex].tasks.push({
          id: nanoid(),
          text: action.payload.text
        })

        return {
          ...state
        }
      }

      default:
      return state
  }
}

const appData: AppState = {
  lists:[
    {
      id:"0",
      text:"To Do",
      tasks:[{
        id:"c0",
        text: "Generate App scaffold"
      }]
    },
    {
      id:"1",
      text:"In Progress",
      tasks:[{
        id:"c2",
        text: "Learn Typescript"
      }]
    },
    {
      id:"2",
      text:"Done",
      tasks:[{
        id:"c3",
        text: "Begin To Use static typing"
      }]
    }
  ]
}

export const AppProvider = ({children}: PropsWithChildren<{}> ) => {
  const [state, dispatch] = useReducer(appReducer, appData)
  return(
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
      )
 }


export const useAppState = () => {
  return useContext(AppContext)
}