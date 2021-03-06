import styled from 'styled-components';

const Father = styled.div`
    display: flex;
`;

const Input = styled.input.attrs({required: true, maxLength: 5})`
    color: white;
    background-color: tomato;
    border: 0;
    border-radius: 15px;
`;


function App() {
    return (
        <Father as="header">
            <Input />
        </Father>
    );
}

export default App;