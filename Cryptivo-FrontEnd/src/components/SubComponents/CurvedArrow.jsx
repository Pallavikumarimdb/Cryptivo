import React from 'react';
import line1 from '../../../src/assets/line1.png'

const CurvedArrow = () => {
    return (
        <div className="inline-block content-center items-center" >
            {/* <svg width="150" height="100" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M140,30 Q100,70 60,90" // Adjusted control points for the right-to-left downward curve
                    stroke="#FEC868" // Line color
                    strokeWidth="2" // Line thickness
                    fill="none"
                    markerEnd="url(#arrowhead)" // Attach arrowhead
                />
                <defs>
                    <marker
                        id="arrowhead"
                        markerWidth="10"
                        markerHeight="10"
                        refX="8"
                        refY="3"
                        orient="auto"
                    >
                        <path d="M0,0 L0,6 L9,3 Z" fill="#FEC868" />
                    </marker>
                </defs>
            </svg> */}
            <img className="line-2-sec{" src={line1} alt="" />
        </div>
    );
};

export default CurvedArrow;
