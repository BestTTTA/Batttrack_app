import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { BASE_URL } from '@env';
import moment from 'moment';

const hookProductReview = (product_id, user_id, username, initialRender) => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isHolding, setIsHolding] = useState(false);
    const [stage, setStage] = useState(0);
    const [endtime, setEndtime] = useState("");
    const [holdingResponse, setHoldingResponse] = useState("");
    const currentDateTimeThailand = moment().format('DD-MM-YYYY HH:mm:ss');

    const fetchData = useCallback(async () => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${BASE_URL}/get_product_id/${product_id}`);
            setProduct(response.data);
            setStage(response.data.current_stage);
            setEndtime(response.data.end_time);
            setHoldingResponse(response.data.holding_time);
            setIsHolding(response.data.holding_time === "holding");
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    }, [product_id]);

    useEffect(() => {
        fetchData();
    }, [fetchData, initialRender]);

    const updateStage = async () => {
        setIsLoading(true);
        try {
            await axios.put(`${BASE_URL}/${product_id}/current_stage`, {
                current_stage: stage + 1
            });
            await fetchData();
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    };

    const endStage = async () => {
        setIsLoading(true);
        try {
            await axios.put(`${BASE_URL}/${product_id}/end_time`, {
                end_time: currentDateTimeThailand
            });
            await fetchData();
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    };

    const endStageEmployee = async () => {
        setIsLoading(true);
        try {
            await axios.put(`${BASE_URL}/${product_id}/employee_end_time`, {
                user_id: user_id,
                end_time: currentDateTimeThailand
            });
            await fetchData();
        } catch (error) {

        } finally {
            setIsLoading(false);
        }
    };

    const handlePress = async () => {
        setIsLoading(true);
        try {
            await axios.put(`${BASE_URL}/${product_id}/holding_time`, {
                holding_time: isHolding ? "stop" : "holding"
            });
            await fetchData();
        } catch (error) {
        } finally {
            setIsLoading(false);
        }
    };

    return {
        product,
        isLoading,
        stage,
        endtime,
        isHolding,
        holdingResponse,
        updateStage,
        endStage,
        endStageEmployee,
        handlePress
    };
};

export default hookProductReview;
