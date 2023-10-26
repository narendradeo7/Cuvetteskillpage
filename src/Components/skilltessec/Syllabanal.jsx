import React from 'react'
import ProgressBar from '../ProgressBar'


const Syllabanal = () => {
    return (
        <div className="syllabusanal">
            <div className="title">Syllabus wise Analysis</div>

            <ProgressBar title='HTML Tools, Forms, History' percent='80' fillclr='#438AF6'  />
            <ProgressBar title='Tags & References in HTML' percent='60' fillclr='#FF9142'  />
            <ProgressBar title='Tables & CSS Basics' percent='24' fillclr='#FB5E5E'  />
            <ProgressBar title='Tables & CSS Basics' percent='96' fillclr='#2EC971'  />



        </div>
    )
}

export default Syllabanal
