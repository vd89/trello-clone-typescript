import React, { PropsWithChildren, createContext, useContext } from "react";
import { AppContextProps, AppState } from "../types";

const AppContext = createContext<AppContextProps>({} as AppContextProps)

const appReducer = (state: AppState, action: any ): AppState => state

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
  return(
      <AppContext.Provider value={{ state: appData }}>
        {children}
      </AppContext.Provider>
      )
 }


export const useAppState = () => {
  return useContext(AppContext)
}