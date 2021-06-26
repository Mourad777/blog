import React, { Fragment, useEffect, useRef, useState } from "react";

const HorizontalScroll = ({
    isDisabled = true,
    isCollapsed,
    ComponentOne,
    ComponentTwo,
    postsFromDB,
    winSize,
    reference,
    secondReference,
    containerRef,
    panelOneRef,
    panelTwoRef,
    setSelectedSection,
    selectedSection,
    selectedPost,
    containerWidth,
    setContainerWidth,
    refPosts,
}) => {
    // const panelOneRef = useRef(null);
    // const panelTwoRef = useRef(null);



    useEffect(() => {
        const panelsContainer = containerRef.current;
        if (panelsContainer) {
            setContainerWidth(panelsContainer.offsetWidth);
        }


        const handleResize = () => {
            const panelsContainer = containerRef.current;
            if (panelsContainer) {
                setContainerWidth(panelsContainer.offsetWidth);
            }

        }

        window.addEventListener('resize', handleResize)

    }, []);

    const basicPanelStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
    }

    const containerStyle = {
        height: '100vh',
        display: 'flex',
        flexWrap: 'nowrap',
        padding: 0,
        overflow: 'hidden',
        position: 'relative',
    }

    const offsetSecondPlaceholder = containerWidth / 2 - innerHeight;
    console.log('offsetSecondPlaceholder', offsetSecondPlaceholder)
    let scrollbarWidth;
    if (containerRef.current) {
        scrollbarWidth = innerWidth * 2 - containerRef.current.offsetWidth;

    }
    console.log('scrollbarWidth', scrollbarWidth)
    return (
        <div style={{background:'white'}}>
            <div style={{ position: 'relative' }}>
                <div
                    ref={reference}
                    className="placeholder-1"
                    style={{
                        // border: '3px solid orange',
                        width: '100%',
                        height: isDisabled ? '100vh' : containerWidth / 2,
                        position: 'absolute',
                        zIndex: -20,

                    }}
                />


                <div
                    ref={secondReference}
                    className="placeholder-2"
                    style={{
                        // border: '3px solid red', width: '100%',
                        height: '100vh',
                        // height:containerWidth / 2,
                        top: containerWidth / 2 - scrollbarWidth / 2,
                        position: 'absolute',
                        zIndex: -20,
                    }}
                />

            </div>
            {isDisabled ?
                <Fragment>
                    <div style={{ display: 'block', height: '100vh' }}>
                        <ComponentOne setSelectedSection={setSelectedSection} selectedSection={selectedSection} winSize={winSize} refB={secondReference} postsFromDB={postsFromDB} />
                    </div>
                    {!isCollapsed && <div style={{ display: 'block', height: '100vh', background: '#fff' }}>
                        <ComponentTwo selectedPost={selectedPost} winSize={winSize} postsFromDB={postsFromDB} refPosts={refPosts}/>
                    </div>}
                </Fragment>
                :
                <section>
                    <div ref={containerRef} style={{ ...containerStyle, width: isCollapsed ? '100%' : '200%' }}>

                        {/* <div style={{ height: '100vh', position: 'absolute' }} /> */}
                        {!isCollapsed && (<div style={{ height: '100vh', position: 'absolute' }} />)}
                        <div ref={panelOneRef} style={{ ...basicPanelStyle }} >
                            <ComponentOne setSelectedSection={setSelectedSection} selectedSection={selectedSection} refB={secondReference} winSize={winSize} postsFromDB={postsFromDB} />
                        </div>

                        {!isCollapsed && (
                            <div ref={panelTwoRef} style={{ ...basicPanelStyle, height: '100vh', overflowY: 'scroll', background: '#fff' }} >
                               <ComponentTwo selectedPost={selectedPost} winSize={winSize} postsFromDB={postsFromDB} refPosts={refPosts} />
                            </div>
                        )}


                    </div>
                </section>
            }
        </div>
    )
}

export default HorizontalScroll