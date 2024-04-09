import { useState } from "react";

const Counter = () => {
    const [cnt, setCnter] = useState(0);
    return (
        <div>
            <h2 data-testid = "cnt">{cnt}</h2>
            <button 
                data-testid = "btn"
                onClick={() => setCnter(cnt+1)}>Increment
            </button>
        </div>
    )
}

export default Counter;