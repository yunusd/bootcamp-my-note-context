import styled from 'styled-components';

const StyledFormWrapper = styled.form`
    display:flex;
    flex-direction:column;

    & > input {
        padding:10px;
        margin: 10px 0;
        border-radius: 6px;
        border:none;
        background-image:none;
        outline:none;

        &:focus {
            border: 1px solid #888 !important;
            border-radius: 6px;
        }
    }
`;

export default StyledFormWrapper;