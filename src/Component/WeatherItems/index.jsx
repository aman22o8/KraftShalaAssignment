import React from 'react'

const WeatherItems = (props) => {
    const {data,mode}=props
    const {name,temperature,humidity,country,speed,weatherType,iconImage}=data
    // const {country}=sys
    // const {description,icon}=weather[0]
    // const {temp,humidity}=main
    // const {speed}=wind
    console.log(temperature,name,humidity,country,speed,weatherType,iconImage)
    console.log("mu mode",mode)
  return (
    <li className={` ${mode ? "bg-yellow-200 ":"bg-[#466443] "}m-[10px] py-[10px] w-[210px] flex h-[250px] flex-col justify-between  items-center  rounded-[6px]`}>
        <h1 className={`${mode ? "text-[#000000] ":"text-[#ffffff] "} font-bold`}>{`${name},${country}`}</h1>
        <p className={`${mode ? "text-[#000000] ":"text-[#ffffff] "} `}>{`Temperature : ${temperature} ${'\u00b0'}C`}</p>
        <p className={`${mode ? "text-[#000000] ":"text-[#ffffff] "} `}>{`Humidity : ${humidity} %`}</p>
        <p className={`${mode ? "text-[#000000] ":"text-[#ffffff] "} `}>{`Speed : ${speed} Km/hr`}</p>
        <p className={`${mode ? "text-[#000000] ":"text-[#ffffff] "} `}>{`Weather Type : ${weatherType}`}</p>
        


    </li>
  )
}

export default WeatherItems