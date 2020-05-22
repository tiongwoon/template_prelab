import React from 'react'

export default function Feedback() {
    return (
        <a href="https://forms.gle/yJ2911K3issdbQKS9" target="blank">
            <div className="feedbackBox">
            <img style={{ inlineSize: "2.3em", }} src={require("../assets/feedback.svg")} alt="feedback Box" />
                <div>Please drop a feedback here!</div>

            </div>
        </a>
    )
}


