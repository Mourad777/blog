import React from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";
import { StyledWorldMapTitle } from '../../../../pages/blog/StyledComponents'
import { useHistory } from 'react-router-dom';
import geo from "../../../../pages/blog/geo.json"
import { gsap } from 'gsap/all';

const highlighted = [
    "MEX",
    "GTM",
    "HND",
    "NIC",
    "CRI",
    "PAN",
    "COL",
    "SWE",
    "DZA",
    "BLR"
];

const geoUrl =
    "https://raw.githubusercontent.com/zcreat";

const WorldMap = ({ winSize, setSelectedSection, reference, postsFromDB=[] }) => {
    const history = useHistory();
    const handleClick = (geo) => () => {
        const highlightedCountries = postsFromDB.map(p=>p.country);
        if ( highlightedCountries.includes(geo.ISO_A2) ) {
            history.push(`/destination/${geo.NAME.toLowerCase()}`)
            setSelectedSection('destination');
            // gsap.to(window, { duration: 1, scrollTo: reference.current });

        }

    }
    return (
        <div style={{ paddingTop: 50, background: '#ece7e2', height: '100vh', width: '100%' }} ref={reference}>
            <p style={{ fontFamily: 'Mulish', fontSize: '4em', color: '#daad86', textAlign: 'center' }}>Pick a destination!</p>
            <ComposableMap
                style={
                    winSize !== 1
                        ? { width: "60%", display: "block", margin: "auto" }
                        : {}
                }
            >
                <Geographies geography={geo}>
                    {({ geographies }) =>
                        geographies.map(geo => {
                            const isHighlighted = postsFromDB.findIndex(p => p.country === geo.properties.ISO_A2) > -1;

                            return (
                                <Geography

                                    key={geo.rsmKey}
                                    geography={geo}
                                    // fill={isHighlighted ? "rgb(155, 111, 72)" : "rgb(218, 173, 134)"}
                                    fill={
                                        isHighlighted
                                            ? "#840404"
                                            : "rgb(218, 173, 134)"
                                    }

                                    onClick={handleClick(geo.properties)}
                                // stroke="#840404"
                                />
                            );
                        })
                    }
                </Geographies>
            </ComposableMap>
        </div>
    );
};

export default WorldMap;
