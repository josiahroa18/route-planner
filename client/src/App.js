import React from 'react';

import { useForm } from './hooks/useForm';

import { AppWrapper, ResultWrapper } from './components/styles';
import SideBar from './components/SideBar';
import Result from './components/Result';

function App() {
  const {
    formData, 
    clearForm,
    handleChange,
    handleSubmit,
    loading,
    route,
    errors
  } = useForm();

  const sideBarProps = {
    formData,
    clearForm,
    handleChange,
    handleSubmit,
    loading,
    errors
  }

  return (
    <AppWrapper>
      <SideBar {...sideBarProps}/>
      <ResultWrapper>
        <Result route={route}/>
      </ResultWrapper>
    </AppWrapper>
  );
}

export default App;
