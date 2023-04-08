import { useState } from 'react';

export default function ClickCounter(props) {

    const [clickCount, setClickCount] = useState(props.start || 0);

    function clickHandler(e, msg) {  // 'e' is current event object
        //console.log(e);  // will display the entire event object in console

        //setClickCount(clickCount + 1);  // unsafe way to do it
        //console.log("Count incremented to: ", clickCount + 1);

        console.log(msg)
        // Best way to handle it it's to set the Previous Value and then increase it
        setClickCount((prevValue) => prevValue + 1)  //we're passing a new function and as a parameter we're passing a prevValue
                //updating value by increasing
    }

    return(
        <>
        <h1>ClickCounter by using <strong>useState</strong></h1>
            <button onClick={(e) => {clickHandler(e, `: times user has Clicked`)}}>Clicked: {clickCount}</button>
        </>
    );
}

ClickCounter.defaultProps = {
    start: 0
}