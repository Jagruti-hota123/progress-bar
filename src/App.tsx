import { useEffect, useState } from "react"

type progressProps  = {
  progress:number
}
const App = () => {
  const bars = [0, 15, 30, 45, 60, 75, 90, 100]
  return (
    <div className="bg-black h-screen">
      <h1 className="text-white text-center text-xl font-semibold p-2">Progress Bar</h1>
      <div>{bars.map((item)=><ProgressBar progress={item} key ={item}/>)}
      </div>
    </div>
  )
}

const ProgressBar = ({progress}:progressProps) =>{
 const [animatedProgress, setAnimtedProgress] = useState(0)
useEffect(()=>{
  setTimeout(()=>setAnimtedProgress(progress), 300)
}, [progress])

 return (
   <div className="border m-3 rounded-full overflow-hidden">
    <div className="text-white bg-green-400 text-right transition-all duration-200 ease-in"  role="progressbar" aria-valuemax={100} aria-valuemin={0} aria-valuenow={animatedProgress}
    style={{
      color :`${animatedProgress > 5 ? "white" : "black"}`,
      transform:`translateX(${animatedProgress - 100}%)`
      }}>{animatedProgress}%</div>
  </div>
 )}
export default App