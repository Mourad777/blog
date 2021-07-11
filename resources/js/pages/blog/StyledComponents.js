import styled from "styled-components";
// import map  from '../../../../public/assets/map-2-black-min.jpg'
import map from '../../../../public/assets/map-3-black.jpg'
import mapLowRes from '../../../../public/assets/map-low-res-3-black.jpg'
//Styledpath StyledDestinationsSection
//styledmapover
//430px
//StyledLatestPostsTitle
//StyledLatestPostsSection
export const StyledPostRow = styled.div`
border: rgba(218, 173, 134) solid;
border-width: ${props => props.index === 0 ? "40" : "20"
    }px 20px ${props => props.index === 2 ? "40" : "20"
    }px 20px;
position: relative;
margin-left: 0;
padding-left: ${props => props.index % 2 === 0 && !(props.winSize === 1) ? '50px' : 0};
margin-right: ${props => props.index % 2 === 0 && !(props.winSize === 1) ? '-50px' : 0};
`;

export const StyledHeroSection = styled.section`
height:100vh;
position:relative;
`;

export const StyledSpacerSectionOne = styled.section`
    height:100vh;
    background:transparent;
    position:relative;
    
`;

export const StyledHeroSectionTextContainer = styled.div`
height:100vh;
`;

export const StyledLatestPostsSection = styled.section`
    overflow:hidden !important;
    z-index:2 !important;
    height:100vh !important;
    position:relative !important;
    
`;

export const StyledLatestPostsTopLayer = styled.div`
width: "100%";
background-color: rgb(218, 173, 134);
height: 80px;
position:relative;
`;

export const StyledSeeAllPostsText = styled.p`
    font-family: Mulish;
    font-size: 1.3em;
    color: rgb(255, 255, 255);
    text-align: center;
    position: absolute;
    z-index: 1;
    transform: translate(-50%, -50%);
    top: 176%;
    left: 50%;
    cursor:pointer;
    border:1px solid #fff;
    border-radius:5px;
    padding:5px;
`;

export const StyledLatestPostsOuterWrapper = styled.div`
display:flex;
`;

export const StyledLatestPostsInnerWrapper = styled.div`
margin: "auto";
flex-grow: 1;
max-width: 600px;
`;

export const StyledDestinationsSection = styled.section`
height: 100vh;
background: rgba(236, 231, 226);
flex-direction: column;
justify-content: space-around;
display: flex;
box-sizing: border-box;
`;

export const StyledContactSection = styled.section`
    height:100vh;
    background-color:black;
    position:relative;
    
`;

export const StyledMap = styled.div`
&:before {
content:'';
background-image: url('${props => props.lowRes ? mapLowRes : map}');
height: 2000px;
width: 100%;
background-repeat: no-repeat;
position: fixed;
background-position: ${props => props.windowWidth === 1 ? 'left -100px top -290px' : 'left -160px top -680px'};
background-size: ${props => props.windowWidth === 1 ? '150em' : '300em'};
z-index: ${props => props.layer === 'top' ? -3 : -10};
will-change: transform;
  }
`;

export const StyledMapOverlay = styled.div`
background: rgba(236, 231, 226,0.8);
height: 4000px;
width: 100%;
background-repeat: no-repeat;
background-position: ${props => props.windowWidth === 1 ? 'left -160px top -480px' : 'left -160px top -680px'};
background-size: ${props => props.windowWidth === 1 ? 'auto' : '300em'};
position: absolute;
z-index: -9;
`;

export const StyledSvgPath = styled.svg`
width: 6%;
padding-bottom: 42%;
height: 1px;
overflow: visible;
z-index: -2;
position: fixed;
top: ${props => props.windowWidth === 1 ? '11px' : '95px'};
margin-left: ${props => props.windowWidth === 1 ? '-32px' : '56px'}
`;

export const StyledPath = styled.path`
fill: none;
stroke-dashoffset: 3255;
stroke: rgb(132, 4, 4, 0.6);
stroke-width: ${props => props.windowWidth === 1 ? 2 : 6};
stroke-miterlimit: 10;
stroke-dasharray: 3255;

z-index-2;
`;

export const StyledCircle = styled.circle`
transition: all 0.15s ease-in;
fill: #840404;
transition-delay: .05s;
z-index:-2;
`;
// transform:
//    ${props => props.winSize === 1
//         ? `translate(-33%,${(props => props.scroll < 0.18) ? (1 - (props.scroll) * 5) * 10 : 0
//         }%)`
//         : `translate(-33%,${(props => props.scroll < 0.18) ? (1 - (props.scroll) * 5) * 6 : 0
//         }%)`};
export const StyledLatestPostsTitle = styled.svg`
z-index:0;
position: absolute;
top:
    ${props => props.winSize === 1
        ? 'calc(100vh - 120px)'
        : 'calc(100vh - 230px)'};
left: ${props => props.winSize === 1 ? '48%' : '50%'};
width: ${props => props.winSize === 1 ? '500px' : '900px'};
transform:translateX(-33%);
fill: white;
`;

export const StyledHorizontalScrollOuterContainer = styled.section`
position: relative;
width: 100%;
min-height: 100vh;
`;

export const StyledWorldMapTitle = styled.h3`
font-family: Mulish;
text-align: center;
color: black;
`;

export const StyledContactFormContainer = styled.form`
width:100%;
max-width: 500px;
position: absolute;
left: 50%;
top: 50%;
padding:0 40px 0 40px;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`;

export const StyledContactTitle = styled.svg`
z-index:1;
position: absolute;
left: 50%;
top:120px;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
width: ${props => props.winSize === 1 ? '300px' : '435px'};
fill: white;
`;

export const StyledInputGroup = styled.div`
display:flex;
flex-direction:column;
margin-top:35px;
`;
export const StyledInputLabel = styled.span`
color: white;
`;

export const StyledTextInput = styled.input`
height:30px;
color:black;
`;

export const StyledTextareaInput = styled.textarea`
color:black;
`;

export const StyledContactFormSubmitButton = styled.button`
    width: 100%;
    margin-top: 35px;
    height: 40px;
    border: none;
    background: white;
`;

export const StyledBackdrop = styled.div`
position:fixed;
left: 50%;
top: 50%;
padding:0 40px 0 40px;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
height:100vh;
width:100%;
background:rgba(178, 178, 178,0.7);
z-index:3;
`;


export const StyledPostContainer = styled.div`
position:fixed;
left: 50%;
top: 50%;
padding:0 40px 0 40px;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
height:80vh;
width:90%;
max-width:700px;
background:white;
z-index:4;
overflow-y:scroll;
`;

export const StyledCountryContainer = styled.div`
position:fixed;
left: 50%;
top: 50%;
padding:0 40px 0 40px;
-webkit-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
height:80vh;
width:90%;
background:white;
z-index:4;
overflow-y:scroll;
`;



export const StyledFormTextInput = styled.input`
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0;
    outline: 0;
    -webkit-appearance: none;
    tap-highlight-color: rgba(255,255,255,0);
    line-height: 1.21428571em;
    padding: .67857143em 1em;
    font-size: 1em;
    background: #fff;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: .28571429rem;
    box-shadow: 0 0 0 0 transparent inset;
    transition: color .1s ease,border-color .1s ease;
    width:100%;
    &:focus {
        color: rgba(0,0,0,.95);
        border-color: #85b7d9;
        border-radius: .28571429rem;
        background: #fff;
        box-shadow: 0 0 0 0 rgb(34 36 38 / 35%) inset;
    }
`

export const StyledCheckbox = styled.input`
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0;
    outline: 0;
    -webkit-appearance: none;
    tap-highlight-color: rgba(255,255,255,0);
    line-height: 1.21428571em;
    padding: .67857143em 1em;
    font-size: 1em;
    background: #fff;
    border: 1px solid rgba(34,36,38,.15);
    color: rgba(0,0,0,.87);
    border-radius: .28571429rem;
    box-shadow: 0 0 0 0 transparent inset;
    transition: color .1s ease,border-color .1s ease;
    width:100%;
    &:focus {
        color: rgba(0,0,0,.95);
        border-color: #85b7d9;
        border-radius: .28571429rem;
        background: #fff;
        box-shadow: 0 0 0 0 rgb(34 36 38 / 35%) inset;
    }
`

export const StyledBlueButton = styled.button`
    background-color: #2185d0;
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em .78571429em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    font-size: 1rem;
    color: #fff;
    &:hover {
        background-color: #1678c2;
        color: #fff;
        text-shadow: none;
    }
`

export const StyledRedButton = styled.button`
    background-color: #c62828;
    cursor: pointer;
    display: inline-block;
    min-height: 0.8em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em .78571429em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    font-size: 1rem;
    color: #fff;
    &:hover {
        background-color: #b71c1c;
        color: #fff;
        text-shadow: none;
    }
`

export const StyledSubmitButton = styled.button`
    width:100%;
    background-color: #2185d0;
    cursor: pointer;
    display: inline-block;
    min-height: 1.5em;
    outline: 0;
    border: none;
    vertical-align: baseline;
    font-family: Lato,'Helvetica Neue',Arial,Helvetica,sans-serif;
    margin: 0 .25em 0 0;
    padding: .78571429em 1.5em .78571429em;
    text-transform: none;
    text-shadow: none;
    font-weight: 700;
    line-height: 1em;
    font-style: normal;
    text-align: center;
    text-decoration: none;
    border-radius: .28571429rem;
    font-size: 1rem;
    color: #fff;
    background-color: #21ba45;
    &:hover {
        background-color: #16ab39;
        color: #fff;
        text-shadow: none;
    }
`

export const StyledThumbnailPreview = styled.div`
height:${props => props.small ? '70px' : '250px'};
background-color:#e2e2e2;
background-image:${props => props.file ? `url("${props.file}")` : '#e2e2e2'}; 
width: ${props => props.small ? '100px' : '350px'};
margin-bottom: 20px; 
border-radius: 10px;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`