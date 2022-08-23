import styled from 'styled-components';

export const Container = styled.section`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  max-height: 900px;
  max-width: 600px;
  width: 100%;
`

export const BoxImage = styled.div`
  align-items: center;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1rem;
  width: 80%;

  img {
    max-width: 50%
  }
`

export const BoxIntro = styled.div`
  align-items: center;
  border-radius: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-betwen;
  margin-top: 3rem;
  margin: 1rem;
  max-width: 80%;
  padding: 2rem;
  min-height: 200px;
`

export const TextIntro = styled.p`
  @import url('https://fonts.googleapis.com/css2?family=Fascinate+Inline&family=Oxygen:wght@300;400;700&display=swap');
  font-family: 'Oxygen', sans-serif;
  font-size: 1.5rem;
  height: 100%;
`

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`

export const Button = styled.button`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
  /* background-color: #01a101; */
  background-color: #4DE649;
  border-radius: 0.5rem;
  border: 0.1rem outset;
  /* color: #f0f8ff; */
  color: #141a29;
  letter-spacing: 0.15em;
  font-family: 'Poppins', sans-serif;
  font-weight: 900;
  font-size: 1em;
  height: 3rem;
  margin: 1rem;
  padding: 0.5rem 1rem;
  transition-duration: 1s;
  transition-property: border-top, border-left, border-bottom, border-right, box-shadow;
  width: 7.5rem;
  &:hover {
    box-shadow: #01a101 0.25rem 0.25rem, #01a101aa 0.5rem 0.5rem, #01a10155 0.75rem 0.75rem;
  }
`
