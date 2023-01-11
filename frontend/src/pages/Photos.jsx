import React,{useState} from 'react'
import { Header } from '../components';
import terminal from '../components/partials/assets/terminal.png'
import {AiOutlineClose} from 'react-icons/ai'

const Photos = () => {
  let data = [
    {
      id: 1,
      imgSrc: terminal,
    },
    {
      id: 2,
      imgSrc: terminal,
    },
    {
      id: 3,
      imgSrc: terminal,
    },
    {
      id: 4,
      imgSrc: terminal,
    },
    {
      id: 5,
      imgSrc: terminal,
    },
    {
      id: 6,
      imgSrc: terminal,
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