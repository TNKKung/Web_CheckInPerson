import React from 'react'
import Navbar from '../components/Navbar'
import Clock from '../components/Clock'


function Home(){
    return(
        <div className="h-screen bg-gradient-to-r from-purple-400 to-red-500">
            <Navbar />
            <div class="mt-20 font-mono font-black text-7xl text-center "> 
                <Clock />
            </div>      
        </div>
    )
}
export default Home;