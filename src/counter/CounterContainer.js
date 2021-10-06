import {useState} from 'react';

const CounterContainer = () => {
    const [counter, setCounter] = useState(null)
    const add = ()=> setCounter(counter + 1)
    return (
        <div>
            <h2>Counter: {counter}</h2>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default CounterContainer
