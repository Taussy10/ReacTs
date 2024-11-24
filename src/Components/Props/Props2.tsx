


type nameProps ={
  name: {
    // 3. wrote props of that variable and because that vriable was object so wrote in
    // object manner
    first: string
    last: string
  } 
}
const Props2 = (props:nameProps) => {
  return (
    <div>
      <h1>{props.name.first}</h1>
      {/* props then variable then object */}
    </div>
  )
}

export default Props2