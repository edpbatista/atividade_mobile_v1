import React, { createContext, useState } from 'react'

export const DataContext = createContext()

export default function DataProvider({ children }) {
  const [todoList, setTodoList] = useState([]);
  return (
    <DataContext.Provider value={{ todoList, setTodoList}}>
      {children}
    </DataContext.Provider>
  )
}
