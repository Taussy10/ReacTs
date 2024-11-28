// import React, { FC, ReactElement } from 'react'
import ButtonContext from './Components/Context/ButtonContext'
import Events01 from './Components/Events/Button'
import Input from './Components/Events/Input'
import Index from './Components/ExportingTypes/Index'
import TsProps from './Components/Props/Props1'
import Props2 from './Components/Props/Props2'
// Don't write if you don't use 
import { useState } from 'react'

// import creat contxt from React
import { createContext } from 'react'


const App = () => {
// By default return type of a functional component is JSX.Element or ReactElement

// What is FC ?
//  You can convert you component in Functional Component by which you get additional props such as children
// but don't use it let it normal functional component 
// Don't use it: https://react-typescript-cheatsheet.netlify.app/docs/basic/getting-started/function_components



// 1. We defined an object
const personName ={
  first: "Bruce",
  last: "Wayne",
}
const [input, setInput] = useState("")

const demoContext = createContext("Hello")

  return (

    // How to work with props 

    <div>
      {/* Hello */}

<TsProps name= {"Hey I'm props"} isLogged={true} num = {41} />
{/* 2. Passed that object */}
<Props2 name={personName} />

<Events01 handleClick={(e) => console.log("hello" ,e.target) } 
  // handle click props having a function
  />
  <Input  handleChange={(event) => setInput(event.target.value) 
  //  you will get valu only in input 
   }
  //  How to get value in input 
  // 1. Get input value by event.target.value
  // 2. store it in usestatate
  // 3. put value in value
  value={input} />

{/*for string you can use it without curly but with others you can't just a syntax rule   */}
{/* If you define props then you have to use it otherwise face intrinsic Attribute error  */}

<Index />
<ButtonContext />
    </div>
   
  
  )
}

export default App