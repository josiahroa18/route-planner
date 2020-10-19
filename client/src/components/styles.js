import styled, { keyframes } from 'styled-components';

const theme = {
    colors: {
        black: '#0b132b',
        green: '#4fedc4',
        lightGreen: '#5ff6cf',
        midBlue: '#1282a2',
        errorRed: '#fa8a82'
    }
}

export const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.black};
    display: flex;
`;

export const ResultWrapper = styled.div`
    padding-left: 350px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const SideBarWrapper = styled.div`
    width: 350px;
    height: calc(100% - 30px);
    padding: 0 30px;
    padding-top: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(47,160,193);
    background: linear-gradient(180deg, rgba(47,160,193,1) 0%, rgba(18,130,162,1) 100%);
    color: white;
    position: absolute;
`;

export const ErrorWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    background-color: white;
    color: ${theme.colors.errorRed};
    margin-bottom: 20px;
    p {
        margin: 10px;
    }
`;

export const InputWrapper = styled.div`
    margin: 10px 0;
    width: 100%;
    input {
        width: 100%;
        height: 30px;
        margin-top: 5px;
        font-size: 18px;
        box-sizing: border-box;
        outline: none;
        border: none;
        &:focus{
            box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
        }
    }
`;

export const CheckboxWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    
`;

export const Result = styled.div`
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
    min-width: 600px;
`;

export const LocationNode = styled.div`
    display: flex;
    align-items: center;
    margin: 3px 0;
    .col {
        width: 100px;
    }
`

export const Button = styled.div`
    margin: 20px 0;
    width: 100%;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    background-color: ${theme.colors.green};
    transition: .5s ease;
    color: ${theme.colors.midBlue};
    &:hover{
        background-color: ${theme.colors.lightGreen};
        transition: .5s ease;
    }
`;

const spin = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

export const Spinner = styled.div`
    border: 2px solid #f3f3f3;
    border-top: 2px solid ${theme.colors.midBlue};
    border-radius: 50%;
    width: 20px;
    height: 20px;
    animation: ${spin} 2s linear infinite;
    margin-left: 10px;
`;

