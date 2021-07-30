// import herSectionPic from '../../../../public/assets/hero-section-blur-1-min.png'
import herSectionPic from '../../../../public/assets/hero-section-main-new-small.png'
import herSectionPieceOne from '../../../../public/assets/hero-section-piece-1-min.png'
import herSectionPieceTwo from '../../../../public/assets/hero-section-piece-2-min.png'
import herSectionPieceThree from '../../../../public/assets/hero-section-piece-3-min.png';
import { v1 } from "uuid";


export const getFileName = (filename) => {

    const extension = filename.split('.').pop();

    const newFileName = v1() + Date.now() + '.' + extension;

    return newFileName;
}


export const getWindowSizeInteger = windowWidth => {
    let widthInteger;
    if (windowWidth > 0 && windowWidth < 600) widthInteger = 1; //mobile
    if (windowWidth >= 600 && windowWidth < 1200) widthInteger = 2; //tablet
    if (windowWidth >= 1200 && windowWidth < 2560) widthInteger = 3; //desktop 1080
    if (windowWidth >= 2560 && windowWidth < 3840) widthInteger = 4; //2k
    if (windowWidth >= 3840) widthInteger = 5; //4k
    return widthInteger;
};

const heroSectionButtonBaseStyle = {
    position: 'absolute',
    bottom: 300,
    right: 200,
    background: 'rgb(255,255,255,0.9)',
    padding: 10,
    fontFamily: 'Mulish',
    color: 'rgb(216,161,114)',
    borderRadius: '50px',
    border: 'none',
    margin: '0 10px',
    width: 120,
    zIndex: 10,
    height: 50,
    fontSize: '1.1em',
    fontWeight: 'bold',
    pointer: 'cursor',
}

export const getHeroSectionButtonOneStyle = (windowWidth,windowHeight) => {
    let isLargeMobileLandscape = false;
    if(windowWidth === 2 && windowHeight < 420){
        isLargeMobileLandscape = true
    }
    let isTabletVertical = false;
    if(windowWidth === 2 && windowHeight > 1000){
        isTabletVertical = true
    }
    let right, bottom,fontSize,height,width;
    if (windowWidth === 1) {
        right = 200;
        bottom = 265;
    }
    if (windowWidth === 2) {
        right = 400;
        bottom = 370;
    }
    if (windowWidth > 2) {
        right = 800;
        bottom = 470;
        fontSize = '1.4em';
        width = 180;
        height = 80;
    }
    if(isLargeMobileLandscape){
        right = 470;
        bottom = 250;
    }
    if(isTabletVertical){
        right = 545;
        bottom = 500;
        fontSize = '1.4em';
        width = 180;
        height = 80;
    }
    // if (windowWidth === 4) {
    //     width = 450;
    //     top = 0;
    // }
    // if (windowWidth === 5) {
    //     width = 450;
    //     top = 0;
    // }
    return { ...heroSectionButtonBaseStyle,fontSize,width,height, bottom, right };
}

export const getHeroSectionButtonTwoStyle = (windowWidth,windowHeight) => {
    let isLargeMobileLandscape = false;
    if(windowWidth === 2 && windowHeight < 420){
        isLargeMobileLandscape = true
    }
    let isTabletVertical = false;
    if(windowWidth === 2 && windowHeight > 1000){
        isTabletVertical = true
    }
    let right, bottom,fontSize,height,width;
    if (windowWidth === 1) {
        right = 30;
        bottom = 180;
    }
    if (windowWidth === 2) {
        right = 120;
        bottom = 100;
    }
    if (windowWidth > 2) {
        right = 270;
        bottom = 300;
        fontSize = '1.4em';
        width = 180;
        height = 80;
    }
    if(isLargeMobileLandscape){
        right = 160;
        bottom = 210;
    }
    if(isLargeMobileLandscape){
        right = 160;
        bottom = 210;
    }
    if(isTabletVertical){
        right = 290;
        bottom = 270;
        fontSize = '1.4em';
        width = 180;
        height = 80;
    }
    // }
    // if (windowWidth === 4) {
    //     width = 450;
    //     bottom = 0;
    // }
    // if (windowWidth === 5) {
    //     width = 450;
    //     bottom = 0;
    // }
    return { ...heroSectionButtonBaseStyle,fontSize,width,height, bottom, right };
}

export const getMapPosition = (windowWidth,windowHeight) => {
    let isLargeMobileLandscape = false;
    if(windowWidth === 2 && windowHeight < 420){
        isLargeMobileLandscape = true
    }
    let isTabletVertical = false;
    if(windowWidth === 2 && windowHeight > 1000){
        isTabletVertical = true
    }
    let width, top;
    if (windowWidth === 1) {
        width = 450;
        top = 0;
    }
    if (windowWidth === 2) {
        width = 220;
        top = 75;
    }
    if (windowWidth === 3) {
        width = 104;
        top = 0;
    }
    if (windowWidth === 4) {
        width = 450;
        top = 0;
    }
    if (windowWidth === 5) {
        width = 450;
        top = 0;
    }
    if(isLargeMobileLandscape){
        width = 220;
        top = 0;
    }
    if(isTabletVertical){
        width = 260;
        top = 0;
    }
    return { width, top };
}

export const getSearchInputStyle = (windowWidth) => {
    let top = 20;
    if (windowWidth === 1) {
        top = 20;
    }
    // if (windowWidth === 2) {
    //     top = ;
    //     left = -390;
    //     width = 1000;
    // }
    // if (windowWidth === 3) {
    //     top = "calc(100vh - 350px)";
    //     left = -710;
    //     width = 1800;
    // }
    // if (windowWidth === 4) {
    //     top = "calc(100vh - 600px)";
    //     left = -1020;
    //     width = 2800;
    // }
    // if (windowWidth === 5) {
    //     top = "calc(100vh - 1700px)";
    //     left = -1000;
    //     width = 2900;
    // }
    return { top }
}

export const getHeroSectionPicStyle = (windowWidth,windowHeight) => {
    let top, right, width, height;
    let isLargeMobileLandscape = false;
    let isTabletVertical = false;
    if(windowWidth === 2 && windowHeight < 420){
        isLargeMobileLandscape = true
    }
    if(windowWidth === 2 && windowHeight > 1000){
        isTabletVertical = true
    }
    if (windowWidth === 1) {
        top = "calc(100vh - 825px)";
        right = -500;
        width = 1360;
        height = "calc(100vh + 200px)";
    }
    if (windowWidth === 2) {
        top = "calc(100vh - 1020px)";
        right = -460;
        width = 1650;
        height = "calc(100vh + 400px)";
    }
    if (windowWidth === 3) {
        top = "calc(100vh - 1260px)";
        right = -400;
        width = 2100;
        height = "calc(100vh + 700px)";
    }
    if (windowWidth === 4) {
        top = "calc(100vh - 1959px)";
        right = -200;
        width = 3000;
        height = "calc(100vh + 700px)";
    }
    if (windowWidth === 5) {
        top = "calc(100vh - 2344px)";
        right = -200;
        width = 3900;
        height = "calc(100vh + 300px)";
    }
    if(isLargeMobileLandscape){
        top = "calc(100vh - 765px)";
        right = -250;
        width = 1360;
        height = "calc(100vh + 200px)";
    }
    if(isTabletVertical){
        top = "calc(100vh - 1440px)";
        right = -910;
        width = 2560;
        height = "calc(100vh + 200px)";
    }
    return {
        background: `url('${herSectionPic}')`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        backgroundPosition: "top center",
        height: 4000,
        right,
        top,
        width,
        zIndex: -1,
        // transform: `translateX(${5000 * scroll}px)`,
        // transition: "transform 1s ease-out",
    };
};

export const getHeroSectionPicPiecesStyle = (windowWidth, piece, windowHeight) => {
    let isLargeMobileLandscape = false;
    if(windowWidth === 2 && windowHeight < 420){
        isLargeMobileLandscape = true
    }
    let isTabletVertical = false;
    if(windowWidth === 2 && windowHeight > 1000){
        isTabletVertical = true
    }
    let top, right, width, height;
    if (windowWidth === 1) {
        top = "calc(100vh - 760px)";
        right = piece === 1 ? 155 : piece === 2 ? 65 : -25;
        height = 1000;
        width = 160;
    }
    if (windowWidth === 2) {
        // top = "calc(100vh - 1020px)";
        top = "calc(100vh - 815px)";
        right = piece === 1 ? 305 : piece === 2 ? 170 : 35;
        height = 1000;
        width = 240;
    }
    if (windowWidth === 3) {
        // top = "calc(100vh - 1090px)";
        top = "calc(100vh - 885px)";
        right = piece === 1 ? 640 : piece === 2 ? 425 : 210;
        height = 1000;
        width = 380;
    }
    if (windowWidth === 4) {
        top = "calc(100vh - 1394px)";
        right = piece === 1 ? 1255 : piece === 2 ? 960 : 665;
        height = 1000;
        width = 530;
    }
    if (windowWidth === 5) {
        top = "calc(100vh - 1400px)";
        right = piece === 1 ? 1740 : piece === 2 ? 1355 : 970;
        height = 1000;
        width = 680;
    }
    if(isLargeMobileLandscape){
        top = "calc(100vh - 700px)";
        right = piece === 1 ? 405 : piece === 2 ? 315 : 225;
        height = 1000;
        width = 160;
    }
    if(isTabletVertical){
        top = "calc(100vh - 885px)";
        right = piece === 1 ? 330 : piece === 2 ? 70 : -190;
        height = 1000;
        width = 451;
    }
    let image;
    if (piece === 1) image = herSectionPieceOne;
    if (piece === 2) image = herSectionPieceTwo;
    if (piece === 3) image = herSectionPieceThree;

    return {
        background: `url('${image}')`,
        position: "fixed",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100%",
        top,
        right,
        height,
        width,
        zIndex: -1,
    };
};

export const getHeroSectionNameStyle = (windowWidth,windowHeight) => {
    let isLargeMobileLandscape = false;
    if(windowWidth === 2 && windowHeight < 420){
        isLargeMobileLandscape = true
    }
    let isTabletVertical = false;
    if(windowWidth === 2 && windowHeight > 1000){
        isTabletVertical = true
    }
    let top, right, height, width;
    if (windowWidth === 1) {
        top = "calc(100vh - 550px)";
        right = -660;
        width = 300;
    }
    if (windowWidth === 2) {
        top = "calc(100vh - 360px)";
        right = -390;
        width = 350;
    }
    if (windowWidth === 3) {
        top = "calc(100vh - 460px)";
        right = -710;
        width = 565;
    }
    if (windowWidth === 4) {
        top = "calc(100vh - 600px)";
        right = -1020;
        width = 1000;
    }
    if (windowWidth === 5) {
        top = "calc(100vh - 1785px)";
        right = -1000;
        width = 1200;
    }
    if (isLargeMobileLandscape) {
        top = "calc(100vh - 260px)";
        right = -390;
        width = 300;
    }
    if (isTabletVertical) {
        top = "calc(100vh - 1000px)";
        right = -390;
        width = 500;
    }
    
    return {
        position: "fixed",
        strokeDasharray: 180,
        strokeDashoffset: 180,
        zIndex: -1,
        fill: "none",
        // stroke: "rgb(0 146 228)",
        stroke: "white",
        strokeWidth: -1,
        strokeMiterlimit: 10,
        top,
        // right,
        width,
        left: '50%',
        transform: 'translateX(-50%)',
    };
};

export const getHeroSectionTextStyle = (windowWidth,windowHeight) => {
    let isLargeMobileLandscape = false;
    if(windowWidth === 2 && windowHeight < 420){
        isLargeMobileLandscape = true
    }
    let isTabletVertical = false;
    if(windowWidth === 2 && windowHeight > 1000){
        isTabletVertical = true
    }
    let top, right, fontSize, width;
    if (windowWidth === 1) {
        top = "calc(100vh - 440px)";
        right = 25;
        fontSize = "1em";
        width = 300;
    }
    if (windowWidth === 2) {
        top = "calc(100vh - 230px)";
        right = 220;
        fontSize = "1.1em";
        width = 380;
    }
    if (windowWidth === 3) {
        top = "calc(100vh - 250px)";
        right = 350;
        fontSize = "1.6em";
        width = 720;
    }
    if (windowWidth === 4) {
        top = "calc(100vh - 300px)";
        right = 700;
        fontSize = "2.8em";
        width = 1050;
    }
    if (windowWidth === 5) {
        top = "calc(100vh - 1370px)";
        right = 715;
        fontSize = "3.8em";
        width = 1150;
    }
    if (isLargeMobileLandscape) {
        top = "calc(100vh - 154px)";
        right = 220;
        fontSize = "1.1em";
        width = 380;
    }
    if (isTabletVertical) {
        top = "calc(100vh - 820px)";
        right = 220;
        fontSize = "1.6em";
        width = 480;
    }
    return {
        fontFamily: "Mulish",
        position: "fixed",
        color: "white",
        minWidth: 309,
        top,
        // right,
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize,
        width,
        zIndex: -1,

    };
};

export const getCompassStyle = windowWidth => {
    let top, left, width;
    if (windowWidth === 1) {
        top = "calc(100vh + 80px)";
        left = 40;
        width = 60;
    }
    if (windowWidth === 2) {
        top = "calc(100vh + 170px)";
        left = 220;
        width = 100;
    }
    if (windowWidth === 3) {
        top = "calc(100vh + 150px)";
        left = 615;
        width = 100;
    }
    if (windowWidth === 4) {
        top = "calc(100vh + 100px)";
        left = 715;
        width = 200;
    }
    if (windowWidth === 5) {
        top = "calc(100vh + 80px)";
        left = 2715;
        width = 200;
    }
    return {
        position: "absolute",
        fill: "#840404",
        top,
        left,
        width,
    };
};

export const getFeetStyle = windowWidth => {
    let top, left, width;
    if (windowWidth === 1) {
        top = "calc(100vh + 600px)";
        left = 240;
        width = 60;
    }
    if (windowWidth === 2) {
        top = "calc(100vh + 800px)";
        left = 100;

        width = 100;
    }
    if (windowWidth === 3) {
        top = "calc(100vh + 820px)";
        left = 500;
        width = 100;
    }
    if (windowWidth === 4) {
        top = "calc(100vh + 400px)";
        left = 2000;
        width = 200;
    }
    if (windowWidth === 5) {
        top = "calc(100vh + 370px)";
        left = 1515;
        width = 200;
    }
    return {
        position: "absolute",
        fill: "#840404",
        top,
        left,
        width,
    };
};

export const getPlaneStyle = windowWidth => {
    let top, left, width;
    if (windowWidth === 1) {
        top = "calc(100vh + 980px)";
        left = 50;
        width = 60;
    }
    if (windowWidth === 2) {
        top = "calc(100vh + 720px)";
        left = 520;

        width = 100;
    }
    if (windowWidth === 3) {
        top = "calc(100vh + 500px)";
        left = 1060;
        width = 100;
    }
    if (windowWidth === 4) {
        top = "calc(100vh + 815px)";
        left = 820;

        width = 200;
    }
    if (windowWidth === 5) {
        top = "calc(100vh + 820px)";
        left = 1620;

        width = 200;
    }
    return {
        position: "absolute",
        fill: "#840404",
        top,
        left,
        width,

    };
};
export let AppUrl = 'http://stormy-forest-71570.herokuapp.com/';
if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
    AppUrl = 'http://localhost:8000/';
}