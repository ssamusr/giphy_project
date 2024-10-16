import styled from "styled-components"
import { useTheme } from "./context/themeContext";
import { Button, Header, Trending } from "./components";
import { useState } from "react";


function App() {
  const theme = useTheme()

  const [rendered, setRendered] = useState('trending')

  const content = () => {
    switch(rendered) {
      case 'liked': 
      return <Trending />

      case 'trending':
        return <Trending />
      
      case 'random': 
        return <Trending />
      
      case 'search':
        return <Trending />

      default:
        return <Trending />
    }
  }

  return (
    <AppStyled theme={theme}>
      <Header />
      <div className="fetch-btns">
        <Button 
          name={'Liked'}
          icon={<i className="fa-solid fa-heart"></i>}
          onClick={() => {setRendered('liked')}}
        />
        <Button 
          name={'Trending Gifs'}
          icon={<i className="fa-solid fa-arrow-trend-up"></i>}
          onClick={() => {setRendered('trending')}}
        />
        <Button 
          name={'Random Gif'}
          icon={<i className="fa-solid fa-shuffle"></i>}
          onClick={() => {setRendered('random')}}
        />
      </div>
      <main>
        {
          content()
        }
      </main>
    </AppStyled>
  )
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${props => props.theme.colorBg1};

  .fetch-btns {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-top: 4rem;
    margin-bottom: 2rem;
  }

  main {
    padding: 2rem 8rem;
  }
`;

export default App
