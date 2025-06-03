import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate } from 'react-router-dom'

function Bottom() {
  const {user} = useContext(AppContext)
  const {setShowLoginDialog} = useContext(AppContext)
  const navigate = useNavigate()

  const onClickHandler = () => {
    if(user){
      navigate('/result')
    }
    else {
      setShowLoginDialog(true)
    }
  }

  return (
    <div className='m-10 pb-15 flex flex-col justify-center items-center gap-10'>
      <h1 className='font-bold text-4xl sm:text-5xl'>See the magic. Try now</h1>
      <button onClick={onClickHandler} className="flex py-2 px-4 sm:py-4 sm:px-6 sm:gap-4 gap-2 text-white bg-red-950 rounded-full text-lg sm:text-xl justify-center items-center transition-all duration-500 cursor-pointer">
        Generate images <img src="magic.png" className="w-6 invert animate-bounce" />
      </button>
    </div>
  )
}

export default Bottom