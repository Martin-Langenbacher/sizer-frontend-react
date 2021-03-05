import {useEffect} from "react";

function Sizes() {

    /*
    useEffect(() => {
        fetch("http://localhost:8080/api/v1/users")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setUsers(result);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])



*/



    return (
        <div>
        <h1 style={{color:"#ff0000"}}>Markus Größen</h1>
        <table style={{width:"100%"}}>
            <tr>
                <th>Eigenschaft</th>
                <th>Wert</th>
            </tr>
            <tr>
                <td>Kopfumfang</td>
                <td>43</td>
            </tr>
            <tr>
                <td>Halsumfang</td>
                <td>22</td>
            </tr>
            <tr>
                <td>Schulterbreite</td>
                <td>100</td>
            </tr>
        </table>
        </div>
);
}

export default Sizes;

