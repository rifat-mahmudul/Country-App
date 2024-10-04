import { useEffect, useState } from "react";
import Country from "../Country/Country";

const Countries = () => {

    const [Countries, setCountries] = useState([]);

    useEffect(() => {

        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))

    }, [])

    return (
        <div>
            
            <h3>Countries : {Countries.length}</h3>
            {
                Countries.map((country, index) => <Country key={index} country={country}></Country>)
            }

        </div>
    )
}

export default Countries;
