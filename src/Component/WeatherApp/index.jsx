import React, { useEffect, useRef, useState } from 'react'
import WeatherItems from '../WeatherItems'

const  WeatherApp=({mode})=> {
    const [InitialCity, setInitialCity] = useState("")
    const [InitialArray, setInitialArray] = useState([])
    const inputRef = useRef()
    const getLatLong=async (enteredCity)=>{
        if(enteredCity===""){
            alert("Enter City Name")
            return
        }
        try {
            const response= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${enteredCity}&units=metric&appid=${`aa9ee9b79bd6f246bd9d581c80528bc8`}`)
      const data=await response.json()
      console.log(data)
      const newCity={
        name:data.name,
        country:data.sys.country,
        temperature:Math.floor(data.main.temp),
        humidity:data.main.humidity,
        speed:data.wind.speed,
        weatherType:data.weather[0].description,
        iconImage:data.weather[0].icon

      }
      setInitialCity(newCity)

    
            
        } catch (error) {
            console.log(error.message)
        }
      
  }
  
   useEffect(() => {
    getLatLong("Saharanpur")
     return () => {
       console.log("Component Removed")
     }
   }, [])
   
   
   const handleSubmit=(event)=>{
    event.preventDefault()
    getLatLong(inputRef.current.value)
   }

   const handleClick=()=>{
          setInitialArray((prevState)=>{
        return [...prevState,InitialCity]
      })
   }

   console.log("state",InitialCity)
   console.log("Initial Array",InitialArray)
  
    return (
      <div className={`${mode ? "bg-yellow-400":"bg-[#1a1818]"} w-[90%] min-h-[80vh] rounded-[8px] border-2 border-[#070706]  flex flex-col justify-between items-center`}>
        
        
        <form className={`${mode ? "border-[#653780] bg-violet-400":"border-[#19424e] bg-[#1f172b]"} p-[10px] w-[60%] mt-[20px]   x rounded-[8px] border-2 `}  onSubmit={handleSubmit}>
        <label className="">
          <p className={`${mode ? "text-black-300": "text-[#ffffff]"} text-[18px]  mb-1 font-semibold`}>
            Enter City Name :
          </p>
          <input
            ref={inputRef}
            type="search"
            placeholder="City..."
            className="h-[40px] rounded-[0.5rem] placeholder-gray-400 border-2 border-[#9c3587] text-gray-800 outline-none  w-full p-[12px]"
          />
        </label>
        <div className='flex justify-between items-centers px-10px'>

        <button className={`${mode ? "bg-[#9c3587] text-black-50 ": "bg-[#251414] text-[#ffffff]"} rounded-[8px] font-medium  px-[12px] py-[8px] mt-6`} type="submit">Search</button>

        <button onClick={handleClick} className={`${mode ? "bg-[#9c3587] text-black-50 ": "bg-[#251414] text-[#ffffff]"} w-[70px]  rounded-[8px] font-medium  px-[12px] py-[8px] mt-6`} type="button">Add</button>
        </div>
        </form>

        <WeatherItems mode={mode}  data={InitialCity}/>

        {InitialArray.length>0 &&
        
        <ul className='w-[100%] flex flex-wrap'>{
            InitialArray.map((each)=>{
                return <WeatherItems mode={mode}  key={each.name} data={each}/>
                
            })
            }

        </ul>
        }
        
        {/*  */}
        
     
       
        
      </div>
    )
  }
  
  export default WeatherApp