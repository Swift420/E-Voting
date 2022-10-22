import React from 'react'
import { Link } from 'react-router-dom'

function VoteCategory() {
  return (
   <div class="w-full min-h-screen p-6">

        <h1 class="font-bold text-xl text-center md:text-3xl md:mt-12 mb-4">Always vote for principle, though you may vote alone, and you may cherish the sweetest reflection that you vote is never <span class="text-red-500">Lost.</span></h1>

        <div class="flex flex-wrap justify-center">

            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/database-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">President</h2>  
                
                <Link to="/voteCategory/president" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/email-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">Vice President</h2>  
                
                <Link to="/voteCategory/vice" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/chat-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">Secretary General</h2>  
                
                <Link to="/voteCategory/secretary" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



            
            

        </div>
        <div class="flex flex-wrap justify-center">

            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/database-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">Finance</h2>  
                
                <Link to="/voteCategory/finance" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/email-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">Internal Affairs</h2>  
                
                <Link to="/voteCategory/internal" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/chat-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">Accommodation</h2>  
                
                <Link to="/voteCategory/accommodation" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



           
            

        </div>

        <div class="flex flex-wrap justify-center">

            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/database-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">External Affairs</h2>  
                
                <Link to="/voteCategory/external" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/email-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">Info and Publicity</h2>  
                
                <Link to="/voteCategory/info" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



            <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/chat-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">Sports</h2>  
                
                <Link to="/voteCategory/sport" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</Link>

            </div>



           
            

        </div>

    </div>
  )
}

export default VoteCategory