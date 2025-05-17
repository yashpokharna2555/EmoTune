import React, { useRef, useState } from 'react';

const WebcamCapture = () => {
  const videoRef = useRef(null);
  const [stream, setStream] = useState(null); // store the stream

  const startWebcam = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = mediaStream;
      setStream(mediaStream);
    } catch (err) {
      console.error("Webcam access denied:", err);
      alert("Could not access webcam.");
    }
  };

const stopWebcam = () => {
    if (stream) {
        stream.getTracks().forEach(track => track.stop());
    }

    if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.srcObject = null;
    }
    setStream(null);
    };

  return (
    <div className="flex flex-col items-center text-center justify-center w-[400px] h-[380px] gap-2">
      <div className="mt-4">
        <video
          ref={videoRef}
          autoPlay
          width="400"
          height="300"
          className="border rounded"
        />
      </div>
      <div className='flex flex-row items-center justify-center gap-2'>
        <button
          onClick={startWebcam}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Start Webcam
        </button>
        <button
          onClick={stopWebcam}
          className="bg-red-600 text-white px-4 py-2 rounded"
        >
          Stop Webcam
        </button>
      </div>
    </div>
  );
};

export default WebcamCapture;
