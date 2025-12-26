import { useEffect, useState } from "react"

type progreebarProps = {
  progress:number
}
const App = () => {
  const bars = [0, 15, 30, 45, 60, 75, 90, 100]
  return (
    <div>
      <h1 className="text-xl font-semibold text-center p-2">Progress Bars</h1>
      <div className="flex flex-col gap-3">
        {bars.map((item)=><Progressbar key={item} progress ={item}/>)}
      </div>
    </div>
  )
}

const Progressbar = ({progress} : progreebarProps) =>{

  const [animatedProgress, setAnimatedProgress] = useState(0)
 

  useEffect(()=>{
    setTimeout(()=> setAnimatedProgress(progress), 300)
  }, [progress])

  return(
    <div className="border-2 overflow-hidden rounded-full">
      <div role="progressbar" aria-valuenow={animatedProgress} aria-valuemax={100} aria-valuemin={0}  className="bg-green-500 duration-300 ease-in-out " 
      style={{
        // width:`${progress}%`,
        transform:`translateX(${animatedProgress - 100}%)`,
       color: `${animatedProgress > 5 ? "white" :"black"}`}}>{animatedProgress}%</div>
    </div>
  )
}

export default App