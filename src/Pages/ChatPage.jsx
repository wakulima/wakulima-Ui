import React from 'react'
import REceiuverText from '../components/REceiuverText'
import SenderText from '../components/SenderText'
import UserContactComponent from '../components/UserContactComponent'

function ChatPage() {
  return (
    <div className='font-Poppins'>
      
      <div className="h-screen container shadow-black/50 mx-auto shadow-2xl rounded-lg">
    
    <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div className="font-semibold text-2xl">Farmers chat</div>
      <div className="w-1/2">
        <input
          type="text"
          name=""
          id=""
          placeholder="search IRL"
          className="rounded-2xl bg-gray-100 py-3 px-5 w-full"
        />
      </div>
      <div
        className="h-16 w-16 p-2 rounded-full text-white font-semibold flex items-center justify-center"
      >
            
      <img
        src="https://parrotprint.com/wp/wp-content/uploads/2017/04/pexels-photo-27411.jpg"
        className="object-cover h-full w-full rounded-full"
        alt=""
      />
      </div>
    </div>


    <div className="flex h-[90vh]   flex-row justify-between">
     
      <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
        <UserContactComponent/>
        <UserContactComponent/>
        <UserContactComponent/>
      </div>
  
      <div className=" lg:min-w-[900px] h-full px-5 flex flex-col justify-between">
        <div className="flex flex-col mt-5 overflow-scroll">
            <SenderText/>
            <REceiuverText/>
            <SenderText/>
            <REceiuverText/>
            <SenderText/>
            <REceiuverText/>
            <SenderText/>
            <REceiuverText/>
            <SenderText/>
            <REceiuverText/>
            <SenderText/>
            <SenderText/>
            <REceiuverText/>
        </div>
        <div className="py-5 sticky b-0 ">
          <input
            className="w-full bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
          />
        </div>
      </div>
     
      <div className="w-2/5 border-l-2 px-5">
        <div className="flex flex-col">
          <div className="font-semibold text-xl py-4">Beef farmers Group</div>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2uKOUbqYeg5xajCA_Fn9lqh-zfQhJoget0pXxzg1pVSGuqSPsaQ8C_mBt8yRdoKClqCY&usqp=CAU"
            className="object-cover rounded-xl h-64"
            alt=""
          />
          <div className="font-semibold py-4">Created 22 Sep 2021</div>
          <div className="font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
            perspiciatis!
          </div>
          </div>
        </div>
      </div>
    </div>
</div>

  )
}

export default ChatPage
