import { RouterProvider } from "react-router-dom"
import rounting from "./Routing"

function App() {
  return (
    <div>
      <RouterProvider router={rounting}/>
    </div>
  )
}

export default App