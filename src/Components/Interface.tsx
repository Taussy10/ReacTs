

// Use interface for defining object shapes:
interface User {
  id: number;
  name: string;
}

// Use type for everything else:
type ID = number | string;
type Point = [number, number];
type Callback = (value: string) => void;

// Both pros and cons 
// in interface you can extend it but in types you can't 

// Use types 
const Interface = () => {
  return (
    <div>
      
      Interface</div>
  )
}

export default Interface