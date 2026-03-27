import {useState} from "react";
export default function Counter() {
    const [count, setCount] = useState(0);
    const [age, setAge] = useState(18);   // 👈 new state
    function handleIncrement() {
        setCount(prev => prev + 1);
    }
    function handleDecrement() {
        setCount(prev => prev - 1);
    }
    function increaseAge() {
        setAge(prev => prev + 1);
    }
    function decreaseAge() {
        setAge(prev => prev - 1);
    }
    return (
        <>
            <h1>Counter App</h1>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <hr />
            <h3>Age : {age}</h3>
            <button onClick={increaseAge}>Increase Age</button>
            <button onClick={decreaseAge}>Decrease Age</button>
        </>
    );
}