import styled from "styled-components"
import { useGlobal } from "../context/global"
import { GifItem } from "./GifItem"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import { Loader } from "./Loader"


const trend = <i className="fa-solid fa-arrow-trend-up"></i>

export const Favourites = ({ rendered }) => {

    const { favourites, loading } = useGlobal()
    console.log(favourites)

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    }

  return (
    <FavouritesStyled>
      <h2>{trend} Favourites</h2>

      {
        loading && <Loader />
      }

      <ResponsiveMasonry columnsCountBreakPoints={breakpointColumnsObj}>
        <Masonry
          gutter=".7rem"
        >
          {
              favourites.map(( giff ) => (
                  <GifItem key={ giff.id } rendered={rendered} { ...giff } gifItem={ giff } />
              ))
          }
        </Masonry>
      </ResponsiveMasonry>
    </FavouritesStyled>
  )
}

const FavouritesStyled = styled.article`
    padding: 2rem;
    background-color: ${( props ) => props.theme.colorBg2};
    border-radius: 1rem;
    h2 {
      font-size: 2rem;
      margin-bottom: 1.5rem;
      color: ${( props ) => props.theme.colorWhite};
      display: flex;
      align-items: center;
      gap: 1rem;
      i{
        background: linear-gradient(to right, 
            ${(props) => props.theme.colorBlue2}, 
            ${(props) => props.theme.colorGreen2}
        );
        background-clip: text;
        -webkit-text-fill-color: transparent;
      }
    }

`
