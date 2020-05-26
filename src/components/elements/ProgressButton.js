import React from "react";
import { navigate } from "@reach/router";

export default function ProgressButton(props) {
  // for the logic of the page navigation so that user will be redirected to an incomplete section when clicked
  //initialise the array, each element will be deleted when the button is clicked at their page
  

  //const [nextSection, setNextSection] = useState(indices);

  //testing out the custom hooks
  /**
   *   function usePersistedState(key, defaultValue) {
    const [state, setState] = React.useState(
      JSON.parse(localStorage.getItem(key)) || defaultValue
    );
    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(state));
    }, [key, state]);
    return [state, setState];
  }

   * 
   * 
   */

  // const { array, getNextSection } = useContext(GlobalContext);


  //const [arrayI, setArray] = usePersistedState('array', indices)
  //to filter out
  //const newArray = nextSection.filter(name => name != props.sectionName);
  
 /** 
  function indexF (index) {
    if (index >= 4) {
        return index = 0
    } else {return index +1 }
 }
 */

 function goTo() {

    const indices = ["motivation", "theory", "lab", "dragbalance", "safety" ];
    const index = indices.indexOf(props.sectionName);

     if (props.counter <= 3) {
         if (index >= 4) {
             navigate(`/${indices[0]}`)
         } else {
             navigate(`/${indices[index + 1]}`)
         }
     } else {
         navigate('/#tasks')
     }
 }
 
  /** 
  function removePageFromArray() {
    const newArray = arrayI.filter(name => name != props.sectionName);
    setArray(newArray);
    console.log(arrayI);
  }
  */ 

  function clickHandler() {
    props.progress();
    props.toggle();
    //this deletes the first element in the array and shift elements forwards
    goTo();
  }

  return (
    <div style={bottomBar}>
        <button className="completeSectionButton" onClick={clickHandler} type="button">
          Complete and Proceed
        </button>

    </div>
  );
}

const bottomBar = {
  height: "10vh",
  marginTop: "20vh",
  position: "relative",
  zIndex: "999",
};