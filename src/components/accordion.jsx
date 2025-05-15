import React, { useState } from 'react'
import { accordionData } from '../data/data'

export default function Accordion() {
    let [activeTab, setActiveTab] = useState(1)
  return (
    <div className="accordion">
        {
            accordionData.map((item, index) => {
                return(
                    <div className="accordion-item rounded mt-2" key={index}>
                        <h2 className="accordion-header">
                            <button className={`accordion-button border-0 bg-light ${activeTab === item.id ? '' : 'collapsed'}`} onClick={()=>setActiveTab(item.id)}>
                                {item.title}
                            </button>
                        </h2>
                        <div className={` accordion-collapse border-0 collapse ${activeTab === item.id ? 'show' :''}`}>
                            <div className="accordion-body text-muted bg-white">
                                {item.desc}
                            </div>
                        </div>
                    </div>
                )
            })
        }
    </div>
  )
}
