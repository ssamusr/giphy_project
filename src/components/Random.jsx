import styled from "styled-components"
import { useGlobal } from "../context/global"
import { Loader } from "./Loader"
import { GifItem } from "./GifItem"


export const Random = () => {

    const { loading, random } = useGlobal()

  return (
    <RandomStyled>
        {
            loading ? <Loader /> : <GifItem {...random} />
        }
    </RandomStyled>
  )
}

const RandomStyled = styled.article`
    padding: 2rem;
    background-color: ${(props) => props.theme.colorBg2};
    border-radius: 1rem;
    width: 50%;
    margin: 0 auto;
`
