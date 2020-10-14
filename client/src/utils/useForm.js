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
        endLocation: '',
        sameStartAndEnd: true
    }

    const [formData, setFormData] = useState(initialData);

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
        console.log(formData);
        setFormData(initialData);
    }

    return {
        formData, 
        handleChange,
        handleSubmit
    };
}

