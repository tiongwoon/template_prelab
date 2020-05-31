import React from 'react'

//this is a text component. Pass a prop with text = "text to display here" into the component
//Alternatively, you can just copy the example code from the Drag Lab and edit the text directly there.

export default function Text(props) {
    return (
        <div className="textArea">
          <div className="secondaryHeader">
            ME2 Fluid Mechanics - Drag Lab Preparation
          </div>
          <article>
            <p>
            {props.text}
            </p>
            <br></br>
            {/*  use br tag if you need a line break. if new paragraph, use p tag. */}
          </article>
        </div>
    )
}
