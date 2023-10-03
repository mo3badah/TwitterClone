import { useState } from 'react'
import Left from './componets/left'
import Middle from "./componets/middle.jsx";
import Right from './componets/right';

function App() {
  const [count, setCount] = useState(0)

  return (
<>
  <div className="container mx-auto h-screen xl:max-w-[1200px] flex">
    <Left />
    <Middle />
    <Right />
  </div>
</>
  )
}

export default App
