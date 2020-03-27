import React, {useState} from 'react';
import TheoryQuizBox from './elements/TheoryQuizBox';
import ProgressButton from './elements/ProgressButton';
import Header from './elements/Header';
import Sidebar from './Sidebar';

export default function Theory(props) {

    const [completeTheorySection, setcompleteTheorySection] = useState(localStorage.getItem('completeTheorySection') || true);

    function turnOffTheoryButton() {
        setcompleteTheorySection(false);
        localStorage.setItem('completeTheorySection', completeTheorySection)
    }

    return (
        <div>
            <Header name="Theory" />
           
            <TheoryQuizBox />
            <Sidebar />
            {completeTheorySection ? <ProgressButton progress={props.progress} toggle={turnOffTheoryButton} name="theory"/> : 
                <div className="sectionCompletedContainer">
                    <div className="sectionCompleted">You have completed this section. Move on to your next section of choice</div>
                </div> }
        </div>
    )
}
