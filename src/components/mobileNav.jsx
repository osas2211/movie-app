import { createPortal } from "react-dom"

export const MobileNav = ()=>{

    return createPortal(
        <div className="mobile-nav d-md-none">
            <a href="#top-rated">Trending</a>  
            <a href="#nowshowing">now showing</a>   
            <a href="#upcoming">upcoming</a>
            <a href="#" className="btn-custom-1 text-uppercase">Search Movies</a>
        </div>, document.body
    )
}