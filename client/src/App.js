import React from 'react';

// Import custom styled components
import { 
  AppWrapper, 
  InputCard, 
  InputWrapper,
  CheckboxWrapper,
  Button 
} from './components/styles';

// Import all relevent state and event handlers for the form
import { useForm } from './utils/useForm';

function App() {
  const {
    formData, 
    handleChange,
    handleSubmit
  } = useForm();

  return (
    <AppWrapper>
      <InputCard>
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
        <Button onClick={handleSubmit}>Plan my route!</Button>
      </InputCard>
    </AppWrapper>
  );
}

export default App;
