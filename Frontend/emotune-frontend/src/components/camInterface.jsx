import React from 'react'
import WebcamCapture from '../components/webCamCapture';

const CamInterface = () => {
  return (
    //parent div
    <div className='flex w-[450px] h-[400px] border-2 border-white rounded-lg bg-gray-500'>
        <div className='items-center justify-center flex flex-col w-full h-full'>
            <WebcamCapture/>
        </div>
    </div>
  )
}

export default CamInterface
