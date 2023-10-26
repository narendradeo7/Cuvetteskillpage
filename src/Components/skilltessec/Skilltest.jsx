import React from 'react'
import '../../public/css/basics.css'
import '../../public/css/skilltest.css'
import Headsec from '../Headsec'
import Quickaction from './Quickaction'
import Syllabanal from './Syllabanal'
import Quickstat from './Quickstat'
import QuesAnal from './QuesAnal'

const Skilltest = () => {
    return (
        <div className='sec'>

            <div className="mainsec">
                <Headsec content='Skill Test' />
                <Quickaction />
                <Quickstat/>
            </div>


            <div className="subsec">
              <Syllabanal/>
              <QuesAnal/>
            </div>

        </div>
    )
}

export default Skilltest
