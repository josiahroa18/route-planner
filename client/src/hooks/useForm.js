import { useState } from 'react';
import axios from 'axios';

import { validateForm } from '../utils/validateForm';

const initialFormData = {
    startingLocation: '',
    desiredStopOne: '',
    desiredStopTwo: '',
    desiredStopThree: '',
    desiredStopFour: '',
    desiredStopFive: '',
    desiredStopSix: '',
    endLocation: '',
    sameStartAndEnd: true
}

const initialErrors = {
    start: '',
    end: '',
    stops: '',
    server: ''
}

export const useForm = () => {
    const [ formData, setFormData ] = useState(initialFormData);
    const [ loading, setLoading] = useState(false);
    const [ route, setRoute ] = useState([]);
    const [ errors, setErrors ] = useState(initialErrors);

    const SERVER_URL = 'http://localhost:5000';

    const clearForm = () => {
        setFormData(initialFormData);
    }

    const handleErrors = async (key, errorMessage) => {
        setErrors(prevErrors => ({
            ...prevErrors,
            [key]: errorMessage
        }));
    }

    const handleChange = (e) => {
        // Reset errors
        setErrors(initialErrors);

        // If the user has decided to use the same starting end ending location, update both accordingly
        if(formData.sameStartAndEnd && (e.target.name === 'startingLocation' || e.target.name === 'endLocation')){
            setFormData({
                ...formData,
                startingLocation: e.target.value,
                endLocation: e.target.value
            })
        } else {
            setFormData({
                ...formData,
                [e.target.name]: e.target.type === 'checkbox' ? e.target.checked: e.target.value
            });
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Error handling
        const { sameStartAndEnd, ...locations } = formData;
        const valid = await validateForm(locations, handleErrors);

        if(!loading && valid){            
            setLoading(true);
            const { sameStartAndEnd, endLocation, ...rest } = formData;

            axios.post(`${SERVER_URL}/create-route`, rest)
            .then(res => {
                // Structure route array
                if(formData.sameStartAndEnd){
                    setRoute([...res.data, res.data[0]]);
                } else {
                    setRoute(res.data);
                }
                setErrors(initialErrors);
                setLoading(false);
            })
            .catch(err => {
                setErrors(prevErrors => ({
                    ...prevErrors,
                    server: err.message
                }))
                setLoading(false);
            })  
        } 
    }

    return {
        formData, 
        clearForm,
        handleChange,
        handleSubmit,
        loading,
        route,
        errors
    };
}

