import React, { Fragment, useEffect } from 'react'
import { useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import _ from 'lodash';
import Gallery from "react-photo-gallery";

const Country = ({ postsFromDB }) => {

    const params = useParams();
    const selectedCountry = params.country;

    // if (!selectedCountry) return null;
    // const geo = Geographies.find(g=>g.NAME.toLowerCase() === selectedCountry)
    const posts = [{ title: 'Couchsurfing in Colombia' }, { title: 'Hitchhiking across Mexico' }, { title: 'Scuba diving in Honduras' }]

    return (
        <div style={{ height: '100%', width: '100%', background: '#ece7e2' }}>
            <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '4em', fontFamily: 'Mulish', paddingTop: 30 }}>{selectedCountry}</p>
            <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '3em', fontFamily: 'Mulish' }}>Posts</p>
            <div style={{ display: 'flex', justifyContent: 'space-around', padding: '0 20px' }}>
                {posts.map(p => <div style={{ background: '#fff', height: '50vh', width: '28%'}}>
                    <div style={{ height: '15%',padding:10  }}><p style={{
                        fontFamily: 'Mulish',
                        fontWeight: 600,
                        color: '#daad86',
                        textAlign: 'center',
                    }}>{p.title}</p></div>
                    <div style={{ height: '40%', background: 'blue' }}>

                    </div>
                    <span style={{padding:10}}>February 10, 2021</span>
                    <div style={{padding:10}}>
                        <p>Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem </p>
                    </div>
                </div>)}
            </div>
            <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '3em', fontFamily: 'Mulish', paddingTop: 30 }}>Videos</p>
            <Gallery photos={[...posts, ...posts]} renderImage={(props) => (
                <div style={{ height: 200, width: 150, background: '#fff', border: 'red 1px solid' }} />
            )} />
            <p style={{ textAlign: 'center', color: 'rgb(218, 173, 134)', fontSize: '3em', fontFamily: 'Mulish', paddingTop: 30 }}>Photos</p>
            <Gallery photos={[...posts, ...posts]} renderImage={(props) => (
                <div style={{ height: 200, width: 150, background: '#fff', border: 'red 1px solid' }} />
            )} />
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