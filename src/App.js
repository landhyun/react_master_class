import styled from "styled-components";

const Father = styled.div`
    display: flex;
`;

const Input = styled.input.attrs({required: true, maxLength: 3})`
    background-color: color;
`;

function App() {
    return (
        <Father as="main">
            <Input />
            <Input />
            <Input />
            <Input />
        </Father>
    );
}

export default App;
