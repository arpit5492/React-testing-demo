import { useState } from "react";

const Counter = () => {
    const [cnt, setCnter] = useState(0);
    const [inp, setInp] = useState("");
    return (
        <div>
            <h2 data-testid = "cnt">{cnt}</h2>
            <button 
                data-testid = "btn"
                onClick={() => setCnter(cnt+1)}>Increment
            </button>
            <hr />
            <h3>{inp}</h3>
            <br />
            <input type="text"
                data-testid = "inp" 
                onChange={(e) => setInp(e.target.value)}
            />
        </div>
    )
}

export default Counter;