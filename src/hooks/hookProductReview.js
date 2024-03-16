import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import moment from 'moment';
import { BASE_URL } from '@env';




const hookProductReview = () => {
    const [responsePreivew, setResponsepreview] = useState("")
    // const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');

    const [loading, setLoding] = useState(false)
    const showPreivew = async (product_id) => {
        setLoding(true)
        try {
            const response = await axios.get(`${BASE_URL}/step_lto/${product_id}`)
            setResponsepreview(response.data)
        } catch (error) {
            console.log("showPreivew Error", error)
        }
        setLoding(false)
    }

    return {
        responsePreivew,
        showPreivew,
        loading
    };

};


export default hookProductReview;
