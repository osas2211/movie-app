import styled from "styled-components";

export const StyledTopThree = styled.div`
    position: absolute;
    top: 8rem;
    right: 0;
    z-index: 8;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    color: #fff;
    font-size: 0.8rem;

    .favourite-rating{
        span{
            font-size: 0.7rem;
        }
    }

    .small{
        opacity: 0.7;
        font-size: 1rem;
    }

    .top-3-movie-img{
        width: 9rem;
        height: 13rem;
        overflow: hidden;
        box-shadow: 2px 8px 15px rgba(6, 6, 19, 0.721);
    }

    .top-3-movie-img img{
        width: 100%;
        height: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        animation: fadeIn;
        animation-duration: 2s;
    }

    .top-3-movie{
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        z-index: 100;
    }
    
    .top-3-movie-title{
        padding: 1rem 2rem;
        width: 22rem;
        height: 10rem;
        position: relative;
        animation: translateLeft;
        animation-duration: 2s;
    }
    
    .top-3-movie-title::before{
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(6, 6, 19, 0.521);
        transition: 1s ease-in-out;
        z-index: -1;
    }
    
    .top-3-movie-title img {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -5;
        opacity: 0.3;
    }

    i{
        color: var(--yellow);
    }
    
    
    
    @media (max-width: 700px) {
        position: relative;
        display: none;
        top: 0;
        left: 0;
        padding-top: 2rem;
        align-items: center;
        background-color: var(--main-color);
    
        .top-3-movie-title{
            padding: 1rem 1rem;
            width: 18rem;
        }
    }
`