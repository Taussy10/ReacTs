

type propType ={
  name: string 
  // variable that are you using 
  isLogged: boolean;
  num: number
}
// After getting the props define it types 




const TsProps = (props: propType) => {
  // There are two ways two get props 
  // 1. Method which I'm using
  // 2. Destructure it: const TsProps = ({name}) => 
  // and use it <h1>{name}</h1>
  return (
    // <div>{props.name}</div>
    <div>
      {
        // here is how we use conditional statements 
        props.isLogged ?  <h1>{props.name} {props.num} </h1>: "Bhag jaa"

      }
 
    </div>
  
  )
}

export default TsProps

