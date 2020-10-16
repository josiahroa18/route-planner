import { useState } from 'react';
import axios from 'axios';

export const useForm = () => {
    const initialData = {
        startingLocation: '19163 Cottonwood Dr, Parker, CO',
        desiredStopOne: '11603 Hotsprings Dr, Parker, CO',
        desiredStopTwo: 'Boulder, CO',
        desiredStopThree: 'Denver, CO',
        desiredStopFour: 'Golden, CO',
        // desiredStopFive: '',
        // desiredStopSix: '',
        endLocation: '19163 Cottonwood Dr, Parker, CO',
        sameStartAndEnd: true
    }

    const SERVER_URL = 'http://localhost:5000';

    const [ formData, setFormData ] = useState(initialData);
    const [ loading, setLoading ] = useState(false);

    const handleChange = (e) => {
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

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        const { sameStartAndEnd, endLocation, ...rest } = formData;
        axios.post(`${SERVER_URL}/create-route`, rest)
        .then(res => {
            console.log(res.data);
            setLoading(false);
        })
        .catch(err => {
            console.log(err);
            setLoading(false);
        })

        // setFormData(initialData);
    }

    return {
        formData, 
        handleChange,
        handleSubmit,
        loading
    };
}

