import React from 'react'
import qaclogo from "../../public/images/qaclogo.png"

const Quickaction = () => {

  const qacLogoStyle = {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    textAlign:'center'

  };


  return (
    <div className='quickaction'>
      <div className="qacinfo">
        <div className="qaclogo" style={qacLogoStyle}><img src={qaclogo} alt="skilllogo" /> </div>
        <div className="qacdetails">
          <h1 className="qactitle title"> Hypertext Markup Language</h1>
          <p className="qacdesc subtitle">Questions: 08 | Duration: 15 mins | Submitted on 5 June 2021</p>

        </div>

      </div>
      <div className="qacbtn">
        <button type='submit' className='updatebtn btn'>Update</button>
      </div>
    </div>
  )
}

export default Quickaction
