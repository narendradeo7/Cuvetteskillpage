import React from 'react'


const Quickstat = () => {
    return (
        <div className='quickstat'>
            <div className="title"> Quick Statistics</div>
            <div className="qstatsdet">
                <div className="qrank  qstat">

                    <div className="secicons"> 🏆</div>

                    <div className="qstatfigures">

                        <div className=" title qstatnum">12,890</div>
                        <div className=" subtitle qstatlbl">YOUR RANK</div>

                    </div>

                </div>

                <div className="qperc qstat">

                    <div className="secicons">📋 </div>

                    <div className="qstatfigures">

                        <div className=" title qstatnum">37%</div>
                        <div className=" subtitle qstatlbl">PERCENTILE</div>

                    </div>



                </div>


                <div className="qcorans qstat">

                    <div className="secicons">✅ </div>

                    <div className="qstatfigures">

                        <div className=" title qstatnum"><span>07</span>/15</div>
                        <div className=" subtitle qstatlbl">CORRECT ANSWERS</div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default Quickstat
