import React,{useState} from 'react'
import useInterval from '../hooks/useInterval'

function Clock(){
    let time = new Date().toLocaleTimeString()
    const [ctime,setCtime] = useState(time)
    useInterval(() => {
        time = new Date().toLocaleTimeString()
        setCtime(time)
      }, 1000);

    return(
        <div>
            <h1>{ctime}</h1>
        </div>
    );
}
export default Clock;