import { BsFillSunFill } from "react-icons/bs";
import {useEffect, useState} from 'react';
import clsx from 'clsx';
export function SunTime(){
    const [tempo, setTempo] = useState([
        {
            horario : 12,
            minuto: 30,
        }
    ]);
    var dateNow = new Date();
    var horas = dateNow.getHours();
    var minutos = dateNow.getMinutes();

    function handlerTeste(){
        let tempos = [...tempo]
        tempos[0].horario = horas
        tempos[0].minuto = minutos
        setTempo(tempos)
        console.log(tempo)
    }  
    return(
        <div className='w-[277px] h-60 bg-gradient-to-tl from-[#d167ec94] via-[#6D67D0] to-[#6D67D0] rounded-xl flex items-center justify-center ml-6'>
            <div className="flex flex-col"> 
                <div className="flex flex-row mb-10 justify-center">
                    <BsFillSunFill color="white" size="20px"/>
                    <span className='text-white ml-2'> Horário do sol</span>
                </div>
                <div className="w-[212px] h-[106px] bg-transparent border-4 border-dashed border-yellow-400 rounded-tr-[150px] rounded-tl-[150px]  flex justify-start items-start">
                    <div className={clsx(" mt-[2px] flex justify-center items-center  ml-1 p-0 rounded-tl-[150px] rounded-tr-[60px]",{
                        'w-40 h-[100px] bg-gradient-to-t from-[#6D67D0] via-[#6D67D0] to-yellow-500/40' : tempo[0].horario >= 18,
                        'w-36 h-[100px] bg-gradient-to-t from-[#6D67D0] via-[#6D67D0]  to-yellow-300' : tempo[0].horario < 18 && tempo[0].horario >= 15,
                        'w-32 h-[100px] bg-gradient-to-t from-[#6D67D0]   via-[#6D67D0] to-yellow-200' : tempo[0].horario  < 15 && tempo[0].horario >= 10,
                    })}>
                        <span className="text-white">{tempo[0].horario +' : '+ tempo[0].minuto}</span>
                    </div>
                </div>
                <div className="flex flex-row mt-2">
                    <span className="text-white">06:00</span>
                    <span className="ml-36 text-white">22:00</span>
                </div>
            </div>
            
        </div>
    )
}


