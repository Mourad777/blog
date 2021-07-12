// import herSectionPic from '../../../../public/assets/hero-section-blur-1-min.png'
import herSectionPic from '../../../../public/assets/hero-section-main-new-small.png'
import herSectionPieceOne from '../../../../public/assets/hero-section-piece-1-min.png'
import herSectionPieceTwo from '../../../../public/assets/hero-section-piece-2-min.png'
import herSectionPieceThree from '../../../../public/assets/hero-section-piece-3-min.png';


export const getWindowSizeInteger = windowWidth => {
    let widthInteger;
    if (windowWidth > 0 && windowWidth < 600) widthInteger = 1; //mobile
    if (windowWidth >= 600 && windowWidth < 1200) widthInteger = 2; //tablet
    if (windowWidth >= 1200 && windowWidth < 2560) widthInteger = 3; //desktop 1080
    if (windowWidth >= 2560 && windowWidth < 3840) widthInteger = 4; //2k
    if (windowWidth >= 3840) widthInteger = 5; //4k
    return widthInteger;
};

export const getHeroSectionPicStyle = (windowWidth) => {
    let top, right, width, height;
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
    return {
        background: `url('${herSectionPic}')`,
        backgroundSize: "100%",
        backgroundRepeat: "no-repeat",
        position: "fixed",
        backgroundPosition: "top center",
        height:4000,
        right,
        top,
        width,
        zIndex: -4,
        // transform: `translateX(${5000 * scroll}px)`,
        // transition: "transform 1s ease-out",
    };
};

export const getHeroSectionPicPiecesStyle = (windowWidth, piece, scroll) => {
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
        zIndex: -4,
    };
};

export const getHeroSectionNameStyle = (windowWidth) => {
    let top, right, height, width;
    if (windowWidth === 1) {
        top = "calc(100vh - 590px)";
        right = -660;
        width = 1000;
    }
    if (windowWidth === 2) {
        top = "calc(100vh - 220px)";
        right = -390;
        width = 1000;
    }
    if (windowWidth === 3) {
        top = "calc(100vh - 350px)";
        right = -710;
        width = 1800;
    }
    if (windowWidth === 4) {
        top = "calc(100vh - 600px)";
        right = -1020;
        width = 2800;
    }
    if (windowWidth === 5) {
        top = "calc(100vh - 1700px)";
        right = -1000;
        width = 2900;
    }

    return {
        position: "fixed",
        strokeDasharray: 180,
        strokeDashoffset: 180,
        zIndex: -4,
        fill: "none",
        // stroke: "rgb(0 146 228)",
        stroke: "white",
        strokeWidth: 1,
        strokeMiterlimit: 10,
        top,
        right,
        width,
    };
};

export const getHeroSectionTextStyle = (windowWidth) => {
    let top, right, fontSize, width;
    if (windowWidth === 1) {
        top = "calc(100vh - 470px)";
        right = 25;
        fontSize = "1em";
        width = 300;
    }
    if (windowWidth === 2) {
        top = "calc(100vh - 114px)";
        right = 220;
        fontSize = "1.1em";
        width = 380;
    }
    if (windowWidth === 3) {
        top = "calc(100vh - 155px)";
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
    return {
        fontFamily: "Mulish",
        position: "fixed",
        color: "white",
        minWidth: 309,
        top,
        right,
        fontSize,
        width,
        zIndex: -4,

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