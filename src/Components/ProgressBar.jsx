import React ,{useState} from 'react'
import '../public/css/progressbar.css'

const ProgressBar = (props) => {
    const [progress,setProgress]=useState(0)

    setTimeout(() => {
        setProgress(props.percent)
    },1000);

  return (
    <div className='progressbar-container'>
    <div className="progressbar-title">{props.title}</div>
    <div className="prgbar">

    <div className="progress-bar" style={{}}>
        <div className="progress-bar-fill" style={{backgroundColor:props.fillclr,width:`${progress}%`}}></div>
    </div>
    <div className="title progress-label" style={{color:props.fillclr}}>{progress}%</div>


    </div>
    
      
    </div>
  )
}

export default ProgressBar
