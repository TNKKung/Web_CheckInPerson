import React from 'react'
import Navbar from '../components/Navbar'
import Clock from '../components/Clock'


function Home(){
    return(
        <div className="h-screen bg-gradient-to-r from-purple-400 to-red-500">
            <Navbar />
            <div class="mt-40 font-mono font-black text-9xl text-center "> 
                <Clock />
            </div>      
        </div>
    )
}
export default Home;