import React,{ useEffect, useState } from 'react'
import Loading from './Loading'
import TourItem from './TourItem';

const URL = "http://localhost:4100";

const Tour = () => {
 const[tour,setTour] = useState([]);
 const [loading, setLoading] = useState(false);
  const getData = async() =>{
    try {
      await fetch(`${URL}/tours`)
      .then(res =>res.json())
      .then(data =>{
        console.log( 'data = ', data);
        setTour(data);
      })
      .catch(err => console.log(err.message));
    } catch (err) {
        console.log(err.message)
    }
  };
  useEffect(() =>{
     getData();
  },[])
  if(loading){
    return (
      <div className ="container">
        <div className='row'>
          <div className='col-md-12 text-center'>
            <Loading/>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className ="container">
      <div className='row'>
        {
          tour.map((item,key) =>{
            return <TourItem key={key} {...item}/>
          })
        }
      </div>
    </div>
  )
  
};

 
export default Tour
