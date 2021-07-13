import React from 'react'
import { StyledSvgPath, StyledPath, StyledCircle } from '../StyledComponents'
import {
    lineLargeDevice,
    lineSmallDevice,
} from "../svgs";

const MapPath = ({ winSize,
    // pathLength, pathPosition, pointAtLength, 
    // lineRef 
}) => (
    <svg
        id="mySVG"
        viewBox={winSize === 1 ? "0 0 2000 2000" : "0 0 1000 1000"}
        preserveAspectRatio="xMidYMin slice"
        // windowWidth={winSize}
        style={{
            width: 1000,
            // paddingBottom: '42%',
            height: 10,
            overflow: 'visible',
            zIndex: -5,
            position: 'fixed',
            top: winSize === 1 ? 78 : '60px',
            left: winSize === 1 ? 0 : 45,
        }}
    >
        <defs>
            <mask id="dash-mask">
                <path
                    style={{ stroke: "white", strokeWidth: 7 }}
                    className="st0 mask-style"
                    strokeDasharray="15,9"
                    strokeLinecap="round"
                    d={lineLargeDevice}
                />
            </mask>
        </defs>
        {/* <StyledCircle
            id="circle"
            cx={pointAtLength.x}
            cy={pointAtLength.y}
            r="10"
            style={{ fill: "#840404" }}
        /> */}
        {/* <StyledPath
            style={{ strokeDashoffset: 0 }}
            windowWidth={winSize}
            //  pathLength={pathLength} pathPosition={pathPosition}
            id="myline"
            // ref={lineRef}
            strokeLinecap="round"
            className="st0"
            mask="url(#dash-mask)"
            d={lineLargeDevice}
        /> */}
        <path style={{
            fill: 'none',
            strokeDashoffset: 3255,
            stroke: 'rgb(132, 4, 4, 0.6)',
            strokeWidth: winSize === 1 ? 4 : 5,
            strokeMiterlimit: 10,
            strokeDasharray: 3255,
            zIndex: -5,
            // transition:'all 0.05s ease-in'
        }}
            // windowWidth={winSize}
            //  pathLength={pathLength} pathPosition={pathPosition}
            id="myline"
            // ref={lineRef}
            strokeLinecap="round"
            className="st0"
            mask="url(#dash-mask)"
            d={lineLargeDevice}
        />
    </svg >
)

export default MapPath;