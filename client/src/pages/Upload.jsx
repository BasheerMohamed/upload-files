import React, { useState } from 'react';
import axios from 'axios';

const Upload = () => {
  const [imageName, setImageName] = useState('');
  const [videoName, setVideoName] = useState('');

  // Handle image file selection
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
    }
  };

  // Handle video file selection
  const handleVideoChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setVideoName(file.name);
    }
  };

  const uploadFile = async (type) => {
    const data = new FormData();
    data.append('file', type === 'image' ? imageName : videoName);
    data.append('upload_preset', type === 'image' ? 'images_preset' : 'videos_preset');

    try {
      const cloudName = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME
      const resource_name = type === 'image' ? 'image' : 'video';
      const api = `https://api.cloudinary.com/v1_1/${cloudName}/${resource_name}/upload`;

      const res = await axios.post(api, data);
      const {secure_url} = res.data;
      console.log(secure_url);

      return secure_url;

    } catch (error) {
      console.error(error)
    }
  }

  const handleUpload = async (e) => {
    try {

      e.preventDefault();

      //Upload image file
      const imgUrl = await uploadFile('image');

      //Upload image file
      const videoUrl = await uploadFile('video');

      //Send backend api request
      // await axios.post(`${process.env.REACT_APP_BACKEND_BASEURL}/api/video`, {imgUrl, videoUrl});

      setImageName(null);
      setVideoName(null);

      console.log('Files uploaded successfully');
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <div className='lg:mt-48 flex flex-col items-center justify-center'>
        <h2 className='text-center text-4xl font-medium'>Unauthenticate Upload</h2>
        <div className='flex flex-wrap justify-center items-start mt-10 gap-10'>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='text-xl'>Image Upload</h2>         
            <div className="min-w-96 flex items-center justify-center w-full">
                <label htmlFor="dropzone-file-image" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-gray-400">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold text-pink-500">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file-image" type="file" className="hidden" onChange={handleImageChange} />
                </label>
            </div> 
            {imageName && (
              <p className="mt-2 text-gray-500 w-96 overflow-x-hidden max-w-full whitespace-nowrap text-ellipsis">
                Selected File: {imageName}
              </p>
            )}
          </div>
          <div className='flex flex-col justify-center items-center gap-4'>
            <h2 className='text-xl'>Video Upload</h2>
            <div className="min-w-96 flex items-center justify-center w-full">
                <label htmlFor="dropzone-file-video" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 hover:border-gray-400">
                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                        <svg className="w-8 h-8 mb-4 text-pink-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"/>
                        </svg>
                        <p className="mb-2 text-sm text-gray-500"><span className="font-semibold text-pink-500">Click to upload</span> or drag and drop</p>
                        <p className="text-xs text-gray-500">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                    </div>
                    <input id="dropzone-file-video" type="file" className="hidden" onChange={handleVideoChange} />
                </label>
            </div> 
            {videoName && (
              <p className="mt-2 text-gray-500 w-96 overflow-x-hidden max-w-full whitespace-nowrap text-ellipsis">
                Selected File: {videoName}
              </p>
            )}
          </div>
        </div>
        <button onClick={handleUpload} className='text-white mt-10 w-52 bg-pink-500 px-10 py-3 rounded'>Upload</button>
    </div>
  );
}

export default Upload;