  import React, { useState } from 'react'
import axios from 'axios'
const App = () => {
  var [data , setData ] = useState([])

    const getData = async () =>{
        const responce = await axios.get('https://picsum.photos/v2/list')
        // const data = responce
        // console.log(data.data)
        setData(responce.data)
        console.log(data)

    }
  return (
    <div className='p-10 '>
        <div>
      <button onClick={getData} className='bg-teal-600 font-semibold text-white text-xl px-6 py-3 rounded-2xl m-3 active:scale-90 '>GET DATA</button>
    </div>
    <div className='p-5 bg-gray-950 mt-5'> 
        {data.map(function(elem,idx){
            return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-full px-7 rounded-3xl mb-3'>
         <img className='h-80 p-10' src={elem.download_url} alt="" />
     <h1>{idx+1}.{elem.author}</h1>

                
            </div>
        })}
        
         </div>
    </div>
  )
}

export default App
