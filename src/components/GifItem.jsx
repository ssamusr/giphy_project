import PropTypes from "prop-types"
import styled from "styled-components"


export const GifItem = ({ id, title, embed_url, url: link, images: { original: { url }} }) => {
    
  return (
    <GiffStyled>
        <div className="gif">
            <img src={ url } alt={ title } />
            <div className="love">
                <i className="fa-solid fa-heart"></i>
            </div>
        </div>
    </GiffStyled>
  )
}

const GiffStyled = styled.div`
    .gif {
        position: relative;
        img {
            width: 100%;
            border-radius: 5px;
        }
        .love {
            position: absolute;
            top: 1rem;
            right: 1rem;
            cursor: pointer;
            
            i {
                font-size: 1.8rem;
                background: linear-gradient(to right, 
                    ${(props) => props.theme.colorYellow},    
                    ${(props) => props.theme.colorGreen2}
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                transition: all .3s ease-in-out;
            }
            &:hover {
                transform: scale(1.17);
                transition: all .3s ease-in-out;
            }
        }
    }


`

GifItem.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    embed_url: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired
}