// import React, { FC, ReactElement } from 'react'
import Events01 from './Components/Events/Button'
import TsProps from './Components/Props/Props1'
import Props2 from './Components/Props/Props2'
// Don't write if you don't use 


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

{/*for string you can use it without curly but with others you can't just a syntax rule   */}
{/* If you define props then you have to use it otherwise face intrinsic Attribute error  */}
    </div>
   
  )
}

export default App