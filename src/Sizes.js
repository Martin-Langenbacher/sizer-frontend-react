import {useEffect} from "react";

function Sizes() {











    return (
        <div>
            <h1 style={{color: "#ff0000"}}>Markus Größen</h1>
            <table style={{width: "100%"}}>
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

