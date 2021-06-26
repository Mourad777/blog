import React from 'react'
import { StyledSvgPath, StyledPath, StyledCircle } from './StyledComponents'
import {
    lineLargeDevice,
    lineSmallDevice,
} from "./svgs";

const MapPath = ({ winSize,
    // pathLength, pathPosition, pointAtLength, 
    // lineRef 
}) => (
    <svg
        id="mySVG"
        viewBox="0 0 60 55"
        preserveAspectRatio="xMidYMin slice"
        // windowWidth={winSize}
        style={{
            width: '6%',
            paddingBottom: '42%',
            height: 1,
            overflow: 'visible',
            zIndex: -2,
            position: 'fixed',
            top: winSize === 1 ? '11px' : '0px',
            marginLeft: winSize === 1 ? '-32px' : '0px',
        }}
    >
        <defs>
            <mask id="dash-mask">
                <path
                    style={{ stroke: "white", strokeWidth: 7 }}
                    className="st0 mask-style"
                    strokeDasharray="15,9"
                    strokeLinecap="round"
                    d={
                        winSize === 1
                            ? lineSmallDevice
                            : lineLargeDevice
                    }
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
            strokeWidth: winSize === 1 ? 2 : 6,
            strokeMiterlimit: 10,
            strokeDasharray: 3255,
            zIndex: -2,
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