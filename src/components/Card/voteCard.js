import React from 'react'

function voteCard(props) {
  return (
    
  <div class="flex flex-col bg-white rounded-lg shadow-md w-full m-6 overflow-hidden sm:w-52">

                <img src="images/database-icon.svg" alt="" class="h-20 m-6" />

                <h2 class="text-center px-2 pb-5">{props.category}</h2>  
                
                <a href="#" class="bg-blue-500 text-white p-3 text-center hover:bg-blue-800 transition-all duration-500">Explore</a>

            </div>
  )
}

export default voteCard