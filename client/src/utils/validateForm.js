const validate = state => {
    return state ? true: false;
}

const validateStops = state => {
    for(const value of Object.values(state)){
        if(value){
            return true;
        }
    }
    return false;
}

const validateUniqueStops = state => {
    const {startingLocation, endLocation, ...stops} = state;

    const foundStops = {
        [startingLocation]: true,
        [endLocation]: true
    };

    for(const value of Object.values(stops)){
        if(value !== '' && value in foundStops){
            return false;
        } else {
            foundStops[value] = true;
        }
    }
    return true;
}

export const validateForm = async (formData, handleErrors) => {
    const { startingLocation, endLocation, ...stops } = formData;
    let hasError = false;

    const validStartingLocation = validate(startingLocation);
    const validEndLocation = validate(endLocation);
    const validStops = validateStops(stops);
    const validUniqueStops = validateUniqueStops({startingLocation, endLocation, ...stops});

    if(!validStartingLocation){
        handleErrors('start', 'Starting location is required.');
        hasError = true;
    }
    if(!validEndLocation){
        handleErrors('end', 'End location is required.');
        hasError = true;
    }
    if(!validStops){
        handleErrors('stops', 'At least one desired stop is required.');
        hasError = true;
    }
    if(!validUniqueStops && validStops){
        handleErrors('stops', 'Desired stops must be unique');
        hasError = true;
    }

    return !hasError;
}