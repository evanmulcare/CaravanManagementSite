import React,{useState} from 'react'
import { Header } from '../components';
import entrance from '../components/partials/assets/entrance.png'
import Map from '../components/partials/assets/Map.png'
import pic2 from '../components/partials/assets/pic2.png'
import pic3 from '../components/partials/assets/pic3.png'
import pic4 from '../components/partials/assets/pic4.png'
import pic5 from '../components/partials/assets/pic5.png'
import {AiOutlineClose} from 'react-icons/ai'

const Photos = () => {
  let data = [
    {
      id: 1,
      imgSrc: entrance,
    },
    {
      id: 2,
      imgSrc: pic2,
    },
    {
      id: 3,
      imgSrc: Map,
    },
    {
      id: 4,
      imgSrc: pic3,
    },
    {
      id: 5,
      imgSrc: pic4,
    },
    {
      id: 6,
      imgSrc: pic5,
    },
  ]
  const [model, setModel] = useState(false);
  const[tempimgSrc, setTempImgSrc] = useState('');
  const getImg = (imgSrc) => {
    setTempImgSrc(imgSrc);
    setModel(true);


  }
  return (
    <div className='bg-white dark:text-gray-200  h-44 rounded-xl w-full lg:w-full p-8 pt-9 m-3'>
    <Header category="Pages" title="Photos"/>
    <div className={model ?  "model open" : "model"}>
          <img src={tempimgSrc}/>
          <AiOutlineClose onClick={() => setModel(false)}/>
    </div>
    <div className='gallery'>
        {data.map((item, index) => {
          return(
            <div className='photos' key={index} onClick={() => getImg(item.imgSrc)}>
                 <img src={item.imgSrc}/>
            </div>
          )
        })}
    </div>
    </div>
  )
}

export default Photos