import { useEffect, useState } from "react"

export default function ClickCounterBySecond(props) {

    const [clickCount, setClickCount] = useState(props.start || 0);

    function clickHandler(e, msg) {
        setClickCount(() => prevValue = prevValue + 1);
        console.log(msg)
    }
    
    useEffect(() => {
        setInterval(() => {
            // setClickCount(clickCount + 1);  // this will load 1 second and will stop
            setClickCount(prevValue => prevValue + 1);  // this way will count the seconds but, 
                                                        //you need to turn "false" the restrictionMood in next.config.js
        }, 1000);
    }, []);

    return (
        <>
        <h1>ClickCounter By Second</h1>
        <h4>If you wanted to count by each second, turn "false" restrictionMood in next.config.js</h4>
            <button onClick={(e) => {clickHandler(e, "Time will tick and click on each second")}}>Clicked: {clickCount}</button>
        </>
    )
}