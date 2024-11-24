import React from "react"

type inputProps ={
    value: string
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
    // Write funtion here 
}
import { useState } from "react"

// it's a props so check in app.tsx
const Input = (props: inputProps) => {
    const [input, setInput] = useState("")
  return (
    <div>
        <input type="text" 
        className=" border border-gray-600 text-black "
        value={props.value}
        onChange={props.handleChange}
        placeholder="Search"
        />
        {/* to get the value in input filed you have to store  */}
    </div>
  )
}

export default Input