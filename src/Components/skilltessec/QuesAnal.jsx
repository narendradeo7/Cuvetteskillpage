import React from 'react'
import CircularProgressBar from '../CircularProgressBar'

const QuesAnal = () => {

const percentage=( 7 / 15) *100;

  return (
    <div className='quesanal'>

     <div className="sechead">  
     <div className="title">Question Analysis</div>
     <div className="qanalscr title" style={{color:'lightblue'}}> <span className="corans">07</span>/15</div>
     </div>
     <div className="qanadesc subtitle">
      <span style={{fontWeight:'700'}}> You scored <span className="scr">7</span> question correct out of 15 .</span>However it still needs some improvements

     </div>
      <CircularProgressBar percentage={percentage}/>
    </div>
  )
}

export default QuesAnal
