import { useSelector } from "react-redux";
const Counter = () => {
    const count = useSelector((state)=>state)
    return (
        <div>
            <h1>{count}</h1>
        </div>
    );
}

export default Counter;
