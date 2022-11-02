import {useState, useEffect} from 'react'
import {methods} from 'utils'

function useFetch(url, data, method='') {
    const {POST, GET, PUT, DELETE} = methods;
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Validates data is not empty
        if ([POST, PUT, DELETE].includes(method)) {
            if(data === null || data === undefined || data?.lenth < 0) {
                setError(new Error('empty data'))
            }
        }

        setIsLoading(true)
        fetch(url, {
            method: method,
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            }
        })
            .then(res => res.json())
            .then(res => setData(res))
            .catch(err => setError(err))
            .finally(() => setIsLoading(false))
    }, [url])

    return { data, isLoading, error }
}

export { useFetch }