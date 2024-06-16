
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { geocode } from 'react-geocode'
import WeatherApp from './Component/WeatherApp'
import { useState } from 'react'

const  App=()=> {

 const [mode, setmode] = useState(false)

 const handleMode=()=>{
  setmode(!mode)
 }


  return (
    <div className={`min-h-[100vh] ${mode ? "bg-white-900": "bg-red-900"}  border-2 border-blue-950 flex flex-col items-center pt-[30px]`}>

      <div className='flex w-[90%] border-2 justify-between'>
        <h1 className=' text-center font-bold text-black text-2xl'>---HOW'S WEATHER ---</h1>
        <button onClick={handleMode} className='rounded-[5px] bg-slate-600 h-[30px] w-[110px]'>{`${mode ? "Dark": "Light"}` }</button>

      </div>
      
     
      <WeatherApp mode={mode}/>
      
     
      
    </div>
  )
}

export default App
