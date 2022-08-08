import styled, {keyframes} from 'styled-components';

const Wrapper = styled.div`
    display: flex;
`;

const RotateAnimation = keyframes`
    0% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
    50% {
        transform: rotate(360deg);
        border-radius: 100px;
    }
    100% {
        transform: rotate(0deg);
        border-radius: 0px;
    }
`;

const Box = styled.div`
    height: 200px;
    width: 200px;
    align-items: center;
    background-color: aliceblue;
    animation: ${RotateAnimation} 5s linear infinite;
    justify-content: center;
    span {
        font-size: 30px;
        &:hover {
            font-size: 45px;
        }
    }
`;

function App() {
    return (
        <Wrapper as="header">
            <Box>
                <span>😊</span>
            </Box>
        </Wrapper>
    );
}

export default App;