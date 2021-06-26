import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import { dummyPosts } from './dummyPosts';
import _ from 'lodash';


const Country = ({ }) => {

    const [center, setCenter] = useState([0, 0]);

    const params = useParams();
    const post = (dummyPosts || []).filter(p => p._id.toString() === params.id);
    const selectedCountry = params.country;

    // if (!selectedCountry) return null;
    const posts = dummyPosts.filter(p => p.country === selectedCountry);
    // const geo = Geographies.find(g=>g.NAME.toLowerCase() === selectedCountry)


    return (
        <div style={{height:'100%',width:'100%',background:'orange'}}>
            {/* <StyledBackdrop onClick={(e) => { history.push('/') }} /> */}

            {/* <h1 style={{ textAlign: 'center', paddingTop: 30 }}>  {selectedCountry.slice(0, 1).toUpperCase() + selectedCountry.slice(1, selectedCountry.length)} </h1> */}

            {/* <svg  viewBox="0 0 750 750">
                    <path  d={countryShape} />
                </svg> */}

            {/* {posts.map(p => (<h5 key={p.title} >
                {p.title}
            </h5>))} */}

        </div>
    )
}

export default Country;