
import { browserName } from "react-device-detect";

function App() {


  return (
    <>

      <h1 style={{textAlign:"center"}}>Your using <u>{browserName}</u> Browser</h1>

    </>
  )
}

export default App
