import React from 'react'
import loader from '..//../assets/others/loader.gif'

export const Animation = () => {
  console.log("Loader...")
  return (
    <div className="min-h-screen flex items-center justify-center">
    <img src={loader}/>
    <img src={loader}/>
    <img src={loader}/>
    </div>
  )
}
