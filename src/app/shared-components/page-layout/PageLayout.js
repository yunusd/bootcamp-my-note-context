import { StyledContainer, StyledHeader, StyledContent } from "./styles"

const PageLayout = ({ header, content }) => {
    return (
        <StyledContainer>
            <StyledHeader>{header}</StyledHeader>
            <StyledContent>{content}</StyledContent>
        </StyledContainer>
    )
}

export default PageLayout;