import {useEffect} from "react"
import axios from "axios"


const Home = () => {

    useEffect(() => {
        axios.get("http://ec2-54-147-59-92.compute-1.amazonaws.com/api/items")
        .then((response) => {
            console.log(response);
        })
        .catch((error) => console.log(error));

    }, [])

    return(
        <div>
            <h1>All fine!</h1>
        </div>
    )
};


export default Home;

