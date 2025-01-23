import styled from 'styled-components';

const HomePage = () => {
  const Title = styled.h1`
    display: flex;
    justify-content: center;
    margin-top: 50px;
  `;

  return (
    <div>
      <Title>Welcome to Phonebook ⭐️</Title>
    </div>
  );
};

export default HomePage;
