import { useState, useEffect } from "react";

// 5  - Post refactor

// 4 - Custom Hook

export const useCustomFetch = (url) => {
    const [data, setData] = useState(null)

    // 5 - post refactor
    const [config, setConfig] = useState(null)
    const [method, setMethod] = useState(null)
    const [callFetch, setCallFetch] = useState(false)

    //6 - loading
    const [loading , setLoading] = useState(false);

    const httpConfig = (data, method) => {
        if(method === "POST"){
            setConfig({
                method,
                headers: {
                    "Content-Type":"application/json",
                },
                body: JSON.stringify(data),
            })
            setMethod(method)
        }
    }

    useEffect(
        () => {
            //6 loading
            setLoading(true)

            const fetchData = async () => {

                const res = await fetch(url)

                const json = await res.json()

                setData(json)

                setLoading(false)
            }

            fetchData();

        }, [url, callFetch]);

    //5 - post refactor

    useEffect(() => {

        const httpRequest = async () => {
            if (method === "POST") {
                let fetchOptions = [url, config]

                const res = await fetch(...fetchOptions);
                const json = await res.json();

                setCallFetch(json)
            }
        }

        httpRequest()
    }, [config, method, url]);

    return { data, httpConfig, loading };
};