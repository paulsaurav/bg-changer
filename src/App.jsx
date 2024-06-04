import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style = {{backgroundColor: color}}
    >

      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-2 py-2 rounded-xl">
          <button className="outline-none px-4 rounded-xl shadow-lg text-white" onClick={() => setColor("red")}
          style = {{backgroundColor: "red "}}>Red</button>
          <button className="outline-none px-4 rounded-xl shadow-lg text-white" onClick={() => setColor("blue")}
          style = {{backgroundColor: "blue "}}>Blue</button>
          <button className="outline-none px-4 rounded-xl shadow-lg text-white" onClick={() => setColor("black")}
          style = {{backgroundColor: "black "}}>Black</button>
          <button className="outline-none px-4 rounded-xl shadow-lg text_black" onClick={() => setColor("white")}
          style = {{backgroundColor: "white "}}>White</button>
          <button className="outline-none px-4 rounded-xl shadow-lg text-white" onClick={() => setColor("green")}
          style = {{backgroundColor: "green "}}>Green</button>
          <button className="outline-none px-4 rounded-xl shadow-lg text-white" onClick={() => setColor("olive")}
          style = {{backgroundColor: "olive "}}>Reset</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
