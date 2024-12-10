import React, { useContext } from 'react'
import { TestContext, useTestContext } from './Context'

// Components can read context 
// by passing it to useContext():
// 1. to consume use useContext and put context in that


const ButtonContext = () => {
 const contextValue = useContext(TestContext)
//  get the context by providing context to useContext
  return (
    <div>{contextValue}</div>
  )
}

export default ButtonContext