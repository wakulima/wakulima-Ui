import React from 'react'
import REceiuverText from '../components/REceiuverText'
import SenderText from '../components/SenderText'
import UserContactComponent from '../components/UserContactComponent'

function ChatPage() {
  return (
    <div>
      
      <div className="container mx-auto shadow-lg rounded-lg">
    
    <div className="px-5 py-5 flex justify-between items-center bg-white border-b-2">
      <div className="font-semibold text-2xl">GoingChat</div>
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
        className="h-12 w-12 p-2 bg-yellow-500 rounded-full text-white font-semibold flex items-center justify-center"
      >
        RA
      </div>
    </div>


    <div className="flex flex-row justify-between bg-white">
     
      <div className="flex flex-col w-2/5 border-r-2 overflow-y-auto">
        <UserContactComponent/>
        <UserContactComponent/>
        <UserContactComponent/>
      </div>
  
      <div className="w-full px-5 flex flex-col justify-between">
        <div className="flex flex-col mt-5">
            <SenderText/>
            <REceiuverText/>
            <SenderText/>
            <REceiuverText/>
        </div>
        <div className="py-5">
          <input
            className="w-full bg-gray-300 py-5 px-3 rounded-xl"
            type="text"
            placeholder="type your message here..."
          />
        </div>
      </div>
     
      <div className="w-2/5 border-l-2 px-5">
        <div className="flex flex-col">
          <div className="font-semibold text-xl py-4">Mern Stack Group</div>
          <img
            src="https://source.unsplash.com/L2cxSuKWbpo/600x600"
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
