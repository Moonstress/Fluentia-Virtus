import { useState, useEffect } from "react"

export const useFetch = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(url)
            .then(res = resp.json)
            .then(jsonData => setData(jsonData))
            .catch(error => console.log(error))


    }, [url])

    return data;

}