import React from "react";

const dummyPhotos = [
    "assets/dummy-photos/coffee-shop.jpg",
    "assets/dummy-photos/sandra-hitching.jpg",
    "assets/dummy-photos/helicopter.jpg"
];

export default ({reference}) => (
    <div style={{ padding: 50,height:'100vh',background:'rgb(236, 231, 226)',width:'100%' }} ref={reference}>
        <p style={{ fontFamily: 'Mulish', fontSize: '4em', color: '#daad86', textAlign: 'center' }}>Videos</p>
        <div className="row" style={{ justifyContent: 'center' }}>
            {dummyPhotos.map((photo, i) => (
                <div key={photo} className="col-12 col-sm-4 col-md-4 col-lg-4">
                    <div
                        style={{
                            border: "3px solid white",
                            height: 200,
                            background: `url('${photo}')`,
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            backgroundPosition: "center"
                        }}
                    />
                </div>
            ))}
        </div>
    </div>
);
