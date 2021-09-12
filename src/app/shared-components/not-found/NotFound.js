import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NotFound = ({className}) => <div className={className}>Not Found, <Link to="/">GO HOME</Link></div>


export default styled(NotFound)`
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
    border: 5px solid #888;
    padding: 10px;
    border-radius:6px;
`;