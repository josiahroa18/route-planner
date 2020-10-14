import { useState } from 'react';

export const useForm = () => {
    const initialData = {
        startingLocation: '',
        desiredStopOne: '',
        desiredStopTwo: '',
        desiredStopThree: '',
        desiredStopFour: '',
        desiredStopFive: '',
        desiredStopSix: '',
        endLocation: ''
    }

    const [formData, setFormData] = useState(initialData);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        setFormData(initialData);
    }

    return {
        formData, 
        handleChange,
        handleSubmit
    };
}

