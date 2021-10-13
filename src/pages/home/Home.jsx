import {useEffect} from "react"
import axios from "axios"


const Home = () => {

    useEffect(() => {
        let url1 = "https://jsonplaceholder.typicode.com/photos"
        // let url2 = "http://ec2-54-147-59-92.compute-1.amazonaws.com/api/items/" 

        axios.get(url1).then(response => {
            console.log(response.data)
        })
        .catch(error => console.log(error))
    }, [])

    return(
        <div>
            <h1>All fine!</h1>
        </div>
    )
};


export default Home;

