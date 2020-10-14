import styled from 'styled-components';

const theme = {
    colors: {
        black: '#0b132b',
        green: '#4fedc4',
        lightGreen: '#5ff6cf',
        midBlue: '#1282a2'
    }
}

export const AppWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-color: ${theme.colors.black};
    display: flex;
`;

export const InputCard = styled.div`
    width: 350px;
    height: 100%;
    padding: 0 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background: rgb(47,160,193);
    background: linear-gradient(180deg, rgba(47,160,193,1) 0%, rgba(18,130,162,1) 100%);
    color: white;
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

export const OutputCard = styled.div`

`;

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
    &:hover{
        background-color: ${theme.colors.lightGreen};
        transition: .5s ease;
    }
`;