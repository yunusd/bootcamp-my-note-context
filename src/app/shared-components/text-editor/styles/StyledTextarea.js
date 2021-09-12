import styled from 'styled-components';

const StyledTextarea = styled.textarea`
    border: none !important;
    border-radius: 6px;
    width: 1100px;
    padding: 50px;
    overflow: auto;
    outline: none;

    -webkit-box-shadow: none;
    -moz-box-shadow: none;
    box-shadow: none;

    resize: none; /*remove the resize handle on the bottom right*/

    &:focus {
        outline: none !important;
        box-shadow: 0 0 10px #888;
    }
`

export default StyledTextarea;