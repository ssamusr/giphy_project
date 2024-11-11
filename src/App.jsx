import styled from "styled-components"
import { useTheme } from "./context/themeContext";
import { Button, Favourites, Header, Random, Search, Trending } from "./components";
import { useState } from "react";
import { useGlobal } from "./context/global";

function App() {

  const { getRandomGiff } = useGlobal()

  const theme = useTheme()

  const [rendered, setRendered] = useState('trending')

  const content = () => {
    switch(rendered) {
      case 'liked': 
      return <Favourites rendered={rendered} />

      case 'trending':
        return <Trending />
      
      case 'random': 
        return <Random />
      
      case 'search':
        return <Search />

      default:
        return <Trending />
    }
  }

  return (
    <AppStyled theme={theme}>
      <Header setRendered={setRendered} />
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
          onClick={() => {
            setRendered('random')
            getRandomGiff()
          }}
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
