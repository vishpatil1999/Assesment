import React, { useCallback, useState ,useEffect} from 'react'
import ClassComponent from './classComponent';

interface FunctionProps {
    firstName: string;
    lastName?: string;
}
function FunctionalComponent({ firstName, lastName }: FunctionProps) {
    const [message, setMessage] = useState(''); // usestate hook
    const [count, setCount] = useState(0);
    const [calculation, setCalculation] = useState(0); 

    useEffect(() => { 
        setCalculation(() => count * 2); 
      }, [count]); 
    const incrementCounter = useCallback(() => {
        setCount(count + 1)
      }, [count])
      
      const decrementCounter = useCallback(() => {
        setCount(count - 1)
      }, [count])
    //   When counter is updated all 2 functions will recreated . to solve this problem we used useCallback
    return (
        <div className="Main-Class">
            <header className="Class-header">
                My name is {firstName} {lastName}
            </header>
            <div> Count: {count}</div>  {/* count  */}
            <button onClick={incrementCounter}>
                Increase counter
            </button>
            <button onClick={decrementCounter}>
                Decrease Counter
            </button>
            <input
                type="text"
                value={message}
                placeholder="Enter a message"
                onChange={e => setMessage(e.target.value)}
            />
            <ClassComponent message={message} /> {/* Importing class compoment into another component and passing the props */}
            <p>Calculation: {calculation}</p> 
        </div>
    )
}
export default FunctionalComponent