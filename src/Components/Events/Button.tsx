import React from "react"

type ButtonProps = {
    // e is React's mouse event working on HTML button
    handleClick: (e: React.MouseEvent<HTMLButtonElement>) => void
    // not returning anything so void
}
// in types we give types for variable 



// here we are working with props (see app.tsx)
 const Events01 = (props:ButtonProps) => {
  return (
    <div>
      <button onClick={props.handleClick } >
        Click
      </button>
    </div>
  )
}

export default Events01
// Basic js topic 
// When to use this onClick={handleClick} and () => console.log("hello")
// 1st: when you defined the funtion and just give refrence and it will work cand be reuse just by passing refrence

// 2nd: when you want to define funtion at one point and it will work on that point only


