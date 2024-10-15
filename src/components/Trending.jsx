import styled from "styled-components"
import { useGlobal } from "../context/global"
import { GifItem } from "./GifItem"

const trend = <i className="fa-solid fa-arrow-trend-up"></i>

export const Trending = () => {

    const { trending } = useGlobal()
    console.log(trending)

  return (
    <TrendingStyled>
        {
            trending.map(( giff ) => (
                <GifItem key={ giff.id } { ...giff } gifItem={ giff } />
            ))
        }
    </TrendingStyled>
  )
}

const TrendingStyled = styled.article`
    

`
