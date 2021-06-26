import React from "react";

function stripHtml(html){
    // Create a new div element
    let temporalDivElement = document.createElement("div");
    // Set the HTML content with the providen
    temporalDivElement.innerHTML = html;
    // Retrieve the text property of the element (cross-browser support)
    return temporalDivElement.textContent || temporalDivElement.innerText || "";
}

const PostText = ({post,isMobile}) => {
    const myRegexp = /<p>(.*)/;
    const match = myRegexp.exec(post.content);
    let sampleContent;
    if(match){
        sampleContent = match[1];
    } else {
        sampleContent = post.content
    }
    return (
        <div
            className="col-12 col-sm-6"
            style={{ display: "flex", padding: 0 }}
        >
            <div
                style={{
                    width: "100%",
                    background: "rgba(218, 173, 134,0.8)",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    minHeight:isMobile ? 'calc(100vh - 335px)' : 200,
                }}
            >
                <div
                    style={{
                        color: "white",
                        width: "80%",
                        padding: 5,
                        zIndex: 2,
                        fontSize:16,
                        background:'transparent !important'
                    }}

                >
                    {post.content ? stripHtml(post.content).slice(0, 100) + "..." : ""}
                </div>
               
            </div>
        </div>
    );
};

export default PostText;
