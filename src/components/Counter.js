import {useState} from "react"

const Counter = () => {
    const [count, setCount] = useState(0);

    const increaser = () => {
        setCount(count + 1);
    }

    return (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increaser}>Increase</button>
        </div>
    );
}
export default Counter;