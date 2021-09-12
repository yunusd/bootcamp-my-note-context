import styled from 'styled-components';

const StyledLoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    
    & > div {
        display:flex;
        flex-direction:column;
        background-color: #d3d3d3;
        padding:20px;
        width: 500px;
        border-radius: 6px;
    }
`;

export default StyledLoginWrapper;