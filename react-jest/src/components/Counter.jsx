import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const handleIncrement = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <p data-testid="counter">count:{count}</p>
            <button onClick={handleIncrement}>Increment</button>
        </div>
    )
}

export default Counter