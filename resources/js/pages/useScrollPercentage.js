import _ from "lodash";
import { useRef, 
    // useState, useEffect 
} from "react";


// const getScrollPosition = () => {
//     const winScroll =
//         document.body.scrollTop || document.documentElement.scrollTop

//     const height =
//         document.documentElement.scrollHeight -
//         document.documentElement.clientHeight

//     return winScroll / height
// }

export default function useScroll() {
    const lineRef = useRef(null);

    // const [pathPosition, setPathPosition] = useState(0);
    // const [pointAtLength, setPointAtLength] = useState(
    //     window.innerWidth < 600 ? { x: 72.4, y: 121.9 } : { x: 92.9, y: 46.9 }
    // );

    // const [pathLength, setPathLength] = useState(0);
    // const [scrollPerc, setScrollPerc] = useState(0);

    // const reportScroll = () => {
    //     const myline = lineRef.current
    //     if (!myline) return;
        
    //     const position = pathLength * 4 * scrollPerc;
    //     const length = myline.getTotalLength();
    //     setPathLength(length);


    //     setPathPosition(position);

    //     setPointAtLength(
    //         myline.getPointAtLength(position)
    //     );
    // };

    // const handleScrollPosition = () => {
    //     const scrollPosition = getScrollPosition();
    
    //     setScrollPerc(scrollPosition)
    // }

    // useEffect(()=>{

    //     reportScroll()

    // },[scrollPerc]);

    //disable scroll event listener for mobile devices

    // useEffect(
    //     () => {

    //        window.addEventListener('scroll',_.debounce(handleScrollPosition,100,{leading:true,trailing:true,}),{passive:true});

    //        return () => {
    //         window.removeEventListener('scroll',handleScrollPosition)
    //        }
    //     },
    //     []
    // );

    return [
        lineRef,
        // Number.isNaN(scrollPerc) ? 0 : scrollPerc,
        // pathPosition,
        // pointAtLength,
        // pathLength,
    ];
}