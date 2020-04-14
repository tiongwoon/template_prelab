import React, {useState, useEffect} from 'react';
import TheoryQuizBox from './elements/TheoryQuizBox';
import ProgressButton from './elements/ProgressButton';
import Header from './elements/Header';
import Sidebar from './Sidebar';

export default function Theory(props) {

    const [completeTheorySection, setcompleteTheorySection] = useState(localStorage.getItem('completeTheorySection') || 'notdone');

    function turnOffTheoryButton() {
        setcompleteTheorySection('done');
    }

    useEffect(() => {
        localStorage.setItem('completeTheorySection', completeTheorySection)
    }, [completeTheorySection]);

    return (
        <div>
            <Header name="Theory" />
           
            <TheoryQuizBox />
            <Sidebar />
            {completeTheorySection === 'notdone' ? <ProgressButton progress={props.progress} toggle={turnOffTheoryButton} name="theory"/> : 
                <div className="sectionCompletedContainer">
                    <div className="sectionCompleted">You have completed this section. Move on to your next section of choice</div>
                </div> }
        </div>
    )
}
