import temperatureBack from '../assets/TemperatureNow.svg';
import { CiLocationOn } from "react-icons/ci";
import cloudBack from '../assets/path36.svg';
import cloudFront from '../assets/path38.svg';
import axios from 'axios';
import { useState } from 'react';
import { Statistics } from './Temp/Statistics';
//axios(`http://api.weatherapi.com/v1/current.json?key=44dd3efbd8664c689b0143027231503&q=${city}&lang=pt&day=3`)
export function TemperatureNow(){
    const [waether, setWeather] = useState(null);
    const [city,setCity] = useState('Araraquara')
    const [type,setType] = useState(false);
    function hanlerTesteT( ){
        setType(!type)
        axios(`http://api.weatherapi.com/v1/forecast.json?key=44dd3efbd8664c689b0143027231503&q=${city}`)
        .then((response:any) =>{
            if(response.status === 200){
                return response
            } 
        }).then((data) =>{
            setWeather(data)
            console.log('weather  ===> ',waether.data.forecast.forecastday)
        });
    }   
    return(
        <div >
            <img 
            src={cloudFront} 
            alt="imagem nuvem"  
            className="absolute top-[17%] left-[14%] z-10"/>
            <img 
            src={cloudBack} 
            alt="imagem nuvem"  
            className="absolute top-[16%] left-[17%] -z-0"/>
            <div  className=' w-480 h-480 bg-[url(../assets/TemperatureNow.svg)]'>
                <div className='flex flex-col justify-end items-end'>
                    <div className='flex flex-row justify-end '>
                        <CiLocationOn size="16px" color="white" className='mt-6'/>
                        {type ? 
                        <span  className='text-white ml-4 mr-8 mt-6'>{city}</span>
                        : 
                        <div className='flex w-40 h-5 ml-4 mr-8 mt-6  bg-transparent border-b-2 border-b-solid border-r-2 border-r-solid rounded-xl'>
                            <input 
                            type="text" 
                            onChange={(event)=>setCity(event.target.value)}
                            placeholder="Digite uma cidade"
                            className='text-center w-36 h-5 mb-2 bg-transparent focus:outline-none '/>
                        </div>
                        }
                            
                    </div>
                        {!type ? 
                            <button 
                                type='button'
                                className='border-b mr-8 rounded-xl p-1 text-xs'
                                onClick={hanlerTesteT}>Confirmar
                            </button>  
                            : <button 
                                    type='button'
                                    className='border-b mr-8 rounded-xl p-1 text-xs'
                                    onClick={()=> setType(!type)}>Alterar
                                </button>   
                         }
                </div>
                <div className='flex flex-row w-full justify-center mt-14'>
                    {waether ? (

                        <span className='text-8xl text-white font-bold'> {waether.data.current.temp_c}</span>

                        ): 
                        <span className='text-8xl text-white font-bold'> 18</span>
                    }
                    <span className=' mt-3 text-2xl text-white'>°C</span>
                </div>
                <Statistics />
            </div>
        </div>
    )
}