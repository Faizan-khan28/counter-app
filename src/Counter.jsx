import Button from '@mui/material/Button';
import { CiRedo } from "react-icons/ci";
import { useState } from 'react';

export default function Counter () {

   let [count , setCount] = useState(0);

   let increaseCount = () => {
     setCount( (prevCount) => prevCount + 1);
   }

   let decreaseCount = () => {
    setCount( (prevCount) => prevCount - 1);
   }

   let reset = () => {
     setCount( (prevCount) => prevCount = 0);
   }

    return (
        <div className=' flex justify-center items-center h-[100vh]'>
           <div className=' border-[2px] rounded-md border-black w-96 h-56 text-center pt-3 bg-red-400'>
             <div className=' flex justify-end text-[30px] font-medium pr-4 items-center pt-2  cursor-pointer '><span className='text-[18px] pr-1'>Reset</span> <CiRedo onClick={reset} /></div>
             <h1 className='text-[30px] font-medium'>Counter App</h1>
             <h3 className='text-[18px] mb-4'>Count = {count}</h3>
             <div className="flex gap-3 justify-center">
             <Button onClick={increaseCount} variant="contained">Increase</Button>
             <Button onClick={decreaseCount} variant="contained">Decrease</Button>
             </div>
          </div> 
        </div>
    )
}