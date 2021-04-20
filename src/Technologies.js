import React from 'react';
import { data } from "./TechnologiesConfig";
import './Technologies.css';

export default function TechnologyComponent() {
  const renderTab = (data) => {
    return data.map((dat) => (
      <div className="grid-tile">
        <div className="title tech-title">{dat.title}</div>
        <div className="description">{dat.description}</div>
      </div>
    ));
  };

  return (
    <div className="width">
      <div className='technologies'>
        {Object.keys(data).map((title) => (
          <div className="main">
            <div className="main-title">{title}</div>
            <div className="grid">{renderTab(data[title])}</div>
          </div>
        ))}
      </div>
    </div>
  );
}


/* 
const renderTab = (data) => {
    return data.map((dat) => (
      <div className="">
        <div className="">{dat.title}</div>
        <div className="">{dat.description}</div>
      </div>
    ));
  };

  return (
    <div className="Technologies">
      {Object.keys(data).map((title) => (
        <div className="">
          <div className="">{title}</div>
          <div className="">{renderTab(data[title])}</div>
        </div>
      ))}
    </div>
  );
*/