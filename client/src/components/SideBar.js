import React from 'react';

import { 
    SideBarWrapper, 
    ErrorWrapper,
    InputWrapper,
    CheckboxWrapper,
    Button,
    Spinner
} from './styles';

export default props => {
    const {
        formData, 
        clearForm,
        handleChange,
        handleSubmit,
        loading,
        errors
    } = props;

    return (
        <SideBarWrapper>
            <ErrorWrapper>
                {Object.values(errors).map(error => {
                    return error ? <p key={error}>{error}</p> : null
                })}
            </ErrorWrapper>
            <InputWrapper>
                <label>Starting Location</label>
                <input
                    name='startingLocation'
                    value={formData.startingLocation}
                    onChange={handleChange}
                />
            </InputWrapper>
            <InputWrapper>
                <label>Desired Stop</label>
                <input
                    name='desiredStopOne'
                    value={formData.desiredStopOne}
                    onChange={handleChange}
                />
            </InputWrapper>
            <InputWrapper>
                <label>Desired Stop</label>
                <input
                    name='desiredStopTwo'
                    value={formData.desiredStopTwo}
                    onChange={handleChange}
                />
            </InputWrapper>
            <InputWrapper>
                <label>Desired Stop</label>
                <input
                    name='desiredStopThree'
                    value={formData.desiredStopThree}
                    onChange={handleChange}
                />
            </InputWrapper>
            <InputWrapper>
                <label>Desired Stop</label>
                <input
                    name='desiredStopFour'
                    value={formData.desiredStopFour}
                    onChange={handleChange}
                />
            </InputWrapper>
            <InputWrapper>
                <label>Desired Stop</label>
                <input
                    name='desiredStopFive'
                    value={formData.desiredStopFive}
                    onChange={handleChange}
                />
            </InputWrapper>
            <InputWrapper>
                <label>Desired Stop</label>
                <input
                    name='desiredStopSix'
                    value={formData.desiredStopSix}
                    onChange={handleChange}
                />
            </InputWrapper>
            <InputWrapper>
                <label>End Location</label>
                <input
                    name='endLocation'
                    value={formData.endLocation}
                    onChange={handleChange}
                />
            </InputWrapper>
            <CheckboxWrapper>
                <input
                    type='checkbox'
                    name='sameStartAndEnd'
                    checked={formData.sameStartAndEnd}
                    onChange={handleChange}
                />
                <label>Use the same starting and end location</label>
            </CheckboxWrapper>
            <div style={{ marginTop: '20px', width: '100%' }}>
                <Button onClick={clearForm}>
                    Clear Form
                </Button>
                <Button onClick={handleSubmit}>
                    Plan my route!
                    {loading && <Spinner/>}                
                </Button>
            </div>
            
        </SideBarWrapper>
    );
}