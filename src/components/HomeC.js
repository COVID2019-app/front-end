import React,{useState,useEffect} from 'react'
import {axiosWithAuth} from '../utils/axiosWithAuth'

//TODO fix cors issues
const  HomeC =()=> {
    const [data,setData] = useState({})
    useEffect(()=>{
    axiosWithAuth().get('/country')
    .then(response => {
      let setS = response.data
      setData(setS)
     return console.log(data)
    })
    .catch(err =>console.log(err))
    },[data])


  return (
      <div>{console.log(data)}</div>
  )
}

export default HomeC