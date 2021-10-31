import { useState, useEffect } from 'react';
import { urlSearch, apiKey } from "../keys"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {

        getGifs(urlSearch, apiKey, category)
            .then(imgs => {

                setState({
                    data: imgs,
                    loading: false
                })

            })

    }, [category]);

    return state
}

