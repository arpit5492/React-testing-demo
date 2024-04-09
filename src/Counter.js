import { useState } from "react";

const Counter = () => {
    const [cnt, setCnter] = useState(0);
    return (
        <div>
            <h2>{cnt}</h2>
            <button onClick={() => setCnter(cnt+1)}>Increment</button>
        </div>
    )
}

export default Counter;