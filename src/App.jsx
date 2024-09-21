import { useState , useCallback ,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)

  const [NumberAllowed , setNumber] = useState(false);

const [character , setCharcter]  =useState(false);

const [Password , setPassword] = useState("")

const passWordJenerator = useCallback(() => {

let pass ="";
let str ="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

if(NumberAllowed) str +="01234567890";

if(character) str +="$#^&*()_+~<?";

for(let i=0; i<parseInt(length); i++){
 let char = Math.floor(Math.random() *str.length+1)

 pass +=str.charAt(char)

}

setPassword(pass)




} ,
   [length , NumberAllowed , character , setPassword])

   
useEffect(() =>passWordJenerator() ,[length ,NumberAllowed , character , passWordJenerator])





  return (
    
  <div  className="w-full max-w-md mx-auto shadow-md  rounded-lg   px-4 py-3  my-8 text-orange-500 bg-gray-700">
  

<h1 className="rounded-sm text-white  text-center">passWordJenerator</h1>

<div className='flex shadow rounded-lg overflow-hidden mb-4'>
<input className="outline-none w-full py-1 px-3" type="text"  value={Password} placeholder='PAssword' readOnly/>
<button className="outline-none bg-blue-700 text-white px-3 py-1 shrink-0">Copy</button>
     
  </div>
<div className='flex text-sm gap-x-2'>
<div className='flex items-center gap-x-1'>
  <input type="range" min={6}  max={100} value={length} className='cursor-pointer'  onChange={(e) =>{setLength(e.target.value)}}/>
 <label htmlFor="">length:{length} </label>
</div>
<div className='flex items-center gap-x-1'>
  <input type="checkbox"
  
  defaultChecked={NumberAllowed}
  onChange={
    ()=>{
      setNumber((prev) =>!prev);
    }
  } />
  <label htmlFor="numbeInput"> Numbers</label>
</div>

<div className='flex items-center gap-x-1'>
  <input type="checkbox"
  
  defaultChecked={NumberAllowed}
  onChange={
    ()=>{
      setCharcter((prev) =>!prev);
    }
  } />
  <label htmlFor="CharacterInput">Character</label>
</div>



</div>


  </div>
    
  
  )
}

export default App
