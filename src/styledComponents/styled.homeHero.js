import styled from "styled-components";

export const StyledHomeHero = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    color: white;
    overflow: hidden;

    .hero-details{
        z-index: 8;
    }
      
    .hero-img{
        position: absolute;
        z-index: -3;
        width: 100%;
        height: 100%;
        transition: 1s ease-in-out;
        animation-name: scaleObjectDown;
        animation-duration: 4s;
    }
    
    &::before{
        content: "";
        position: absolute;
        z-index: -1;
        width: 100%;
        height: 100%;
        background-color: rgba(6, 6, 19, 0.65);
        transition: 1s ease-in-out;
    }

    .favourite-movie{
        margin-top: 12rem;

        small{
            opacity: 0.6;
        }

        .favourite-rating{
            span{
                font-size: 0.9rem;
            }
        }

        .favourite-description{
            font-size: 0.9rem;
            width: 50%;
        }

        i{
            color: var(--yellow);
            padding-right: 0.3rem;
        }
    }

    .favourite-details{
        overflow: hidden;

        .favourite-info{
            animation-name: translateRight;
            animation-duration: 2s;
        }
    }
    
    
    @media (max-width: 700px) {
        height: 80vh;
        .favourite-movie{
            margin-top: 14rem;
            .favourite-description{
                width: 100%;
                display: none;
            }
        }

    }
      
`