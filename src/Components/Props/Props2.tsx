


type nameProps ={
  name: {
    // 3. wrote props of that variable and because that vriable was object so wrote in
    // object manner
    first: string
    last: string
  } 
  count?: number
  // for making optional prop
}
const Props2 = (props:nameProps) => {
  return (
    <div>
      <h1>{props.name.first}</h1>
      <h1>{props.count}</h1>
      {/* props then variable then got object key */}
    </div>
  )
}

export default Props2