import React from 'react'
import { Button } from '@chakra-ui/core'

export default function Feedback() {
    return (
        <a href="https://forms.gle/yJ2911K3issdbQKS9" target="blank">
            <div className="feedbackBox">
            <img style={{ inlineSize: "2.3em", }} src={require("../assets/feedback.svg")} />
                <div>Please drop a feedback here!</div>

            </div>
        </a>
    )
}


