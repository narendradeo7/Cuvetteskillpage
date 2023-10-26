import React from 'react';
import '../public/css/progressbar.css';

const CircularProgressBar = (props) => {
  const circleWidth = 200;
  const circleHeight = 200;
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = (1 - props.percentage / 100) * circumference;

  return (
    <div className='circlprgbar'>
      <svg width={circleWidth} height={circleHeight} viewBox='0 0 200 200'>
        <circle
          cx={circleWidth / 2}
          cy={circleHeight / 2}
          strokeWidth="15"
          r={radius}
          className='circlebck'
        />

        <circle
          cx={circleWidth / 2}
          cy={circleHeight / 2}
          strokeWidth="15"
          r={radius}
          className='circle-prog'
          style={{
            strokeDasharray: circumference,
            strokeDashoffset: dashOffset,
          }}
          transform={`rotate(-90deg ${circleWidth / 2}${circleHeight / 2})`}
        />

       {/* text for the middle  */}

       <text 
       x='50%'
       y='50%'
       dy='0.3em'
       textAnchor='middle'
       className='circle-text'
       
       >🎯</text>

      </svg>
    </div>
  );
}

export default CircularProgressBar;
