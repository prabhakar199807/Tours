import React,{ useState } from 'react'

const TourItem = (props) => {
  const [readmore, setReadmore] = useState(false);
  const {id, image, info, name,price} = props

  const toggle =() => {
    setReadmore(!readmore);
  }
  return (
    <div className="col-md-4 mt-3 mb-2">
      <div className='card'>
        <img src={image} alt={name} className="card-img-top"/>
        <div className='card-header'>
          <h5 className='text-center text-secondary'>{name}</h5>
        </div>
        <div className='card-body'>
            <p className='text-justify'>
               {
                readmore ? info :`${info.substring(0,200)}...`
               }
               <button className='float-end btn btn-link' onClick ={(e) => toggle (e)}>
                  {readmore ? 'Show less ' : 'Read more'}
               </button>


            </p>

          <div className='card-footer'>
             <h5 className='text-success float-end'>Price :{price}</h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TourItem
