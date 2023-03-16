import { BsFillSunFill } from "react-icons/bs";
import {useState} from 'react';
export function SunTime(){
const [tempo, setTempo] = useState([
{
horario : '16:30',
}
]);
return(
<div className='w-[277px] h-60 bg-gradient-to-t from-[#d167ec5e] via-[#6D67D0] to-[#6D67D0] rounded-xl flex items-center justify-center ml-6'>
<div className="flex flex-col">
<div className="flex flex-row mb-6 justify-center">
<BsFillSunFill color="white" size="20px"/>
<span className='text-white ml-2'> Horário do sol</span>
</div>
<div className="w-[212px] h-[106px] bg-transparent border-2 border-dashed border-bg-black rounded-t-[50%]  flex justify-start items-start">
<div className="w-44 h-[100px] mt-[1px] flex justify-center items-center bg-gradient-to-t from-[#6D67D0] via-[#6D67D0] to-yellow-500/40    m-0 p-0 rounded-tl-[50%] rounded-tr-[25%]">
<span className="text-white">{tempo[0].horario}</span>
</div>
</div>  
 </div>
</div>
)
}
