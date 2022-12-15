import { useEffect, useState } from "react";

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    useEffect(()=>{
        fetch(url)
        .then((response) => {
            if (!response.ok) {
                throw new Error(
                    `Error HTTP: Status ${response.data}`
                )
            };
            return (response.json())
        })
        .then((actualdata) => setData(actualdata
            .sort((a, b) => a.name.localeCompare(b.name))))
        .catch((err) => setError(err.message))
        .finally(() => setLoading(false))
    },[url]);
    return [data,loading,error];
};