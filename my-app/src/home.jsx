import { useState } from "react";

const Home = () => {

    // let name = "mario";
    const [ name, setName] = useState('mario');
    const [ age, setAge] = useState(50)

    const handleClick = () => {
        setName('luigi');
        setAge(29);
    }

    return (
        <div className="home">
            <p>{ name } is { age } years old</p>
            <h2>Homepage</h2>
            <button onClick={handleClick}>Click me!</button>
        </div>
    );
}
 
export default Home;