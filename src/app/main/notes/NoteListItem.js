import { useHistory } from "react-router"
import {StyledItem, StyledContent} from "./styles";

const NoteListItem = ({data, handleRemove}) => {
    const history = useHistory();

    return (
        <StyledItem>
            <span onClick={() => handleRemove(data.id)}>delete</span> <br /> 
            <StyledContent onClick={() => history.push('/notes/' + data.id)}>
                {data.content}
            </StyledContent>
        </StyledItem>
    )
}

export default NoteListItem;