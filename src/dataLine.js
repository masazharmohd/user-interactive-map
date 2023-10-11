import React from 'react';
import "./styles.css";

const DataLine = ({ data }) => {

  const darkBlueWidth = 36;
  const lightBlueWidth = 24;
  const moreLightBlueWidth = 20;
  const extraLightBlueWidth = 20;

  const darkBlueColor = '#0000ff'
  const lightBlueColor = '#4d4dff'
  const moreLightBlueColor = '#8080ff'
  const extraLightBlueColor = '#b3b3ff'

  return (
    <div className="line-container">
      <div
        className="line-segment dark-blue"
        style={{ width: `${darkBlueWidth}%`, backgroundColor: `${darkBlueColor}`}}
      >
        <br/>
        36%
      </div>
      <div
        className="line-segment light-blue"
        style={{ width: `${lightBlueWidth}%`, backgroundColor: `${lightBlueColor}` }}
      >
        <br/>
        24%
      </div>
      <div
        className="line-segment more-light-blue"
        style={{ width: `${moreLightBlueWidth}%` , backgroundColor: `${moreLightBlueColor}`}}
      >
        <br/>
        20%
      </div>
      <div
        className="line-segment extra-light-blue"
        style={{ width: `${extraLightBlueWidth}%`, backgroundColor: `${extraLightBlueColor}`}}
      >
        <br/>
        20%
      </div>
    </div>
  );
};

export default DataLine;
