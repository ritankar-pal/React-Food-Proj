import { useRouteError } from "react-router-dom";

const Error = () =>{

    const error = useRouteError();
    console.log(error);

    return(
        <div>
            <h1 style={{color: "blue"}}>Oops! Something Went Wrong</h1>
            <h2 style={{color: "red"}}>{error.error.message}</h2>
        </div>
    )
}

export default Error;