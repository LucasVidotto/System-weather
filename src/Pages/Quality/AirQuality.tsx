import { BiLeaf } from "react-icons/bi";

export function AirQuality(){
    return(
        <div className='w-[277px] h-60 bg-gradient-to-t from-[#d167ec5e] via-[#6D67D0] to-[#6D67D0] rounded-xl flex items-center justify-center ml-8'>
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-row mb-8">
                    <BiLeaf size="20px" color="white"/>
                    <span className='text-white ml-2'>  Qualidade do ar </span>
                </div>
                <span className='text-[#87EBCD] text-xl mb-1'> Boa </span>
                <span className='text-white text-4xl font-bold mb-8'> 21 </span>
                <span className='text-white'> 21 </span>
            </div>
        </div>
    )
}