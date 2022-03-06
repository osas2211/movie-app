import { useState, useEffect } from "react";

export const Header = ()=>{
    return (
        <header className="d-flex py-3 px-4 px-md-5 justify-content-between py-2 align-items-center ">
            <div className="logo">
                <h5>MovieGeeks</h5>
            </div>
            <nav className="nav"><a href="#" className="btn-custom-1">Search Movies</a></nav>
        </header>
    )
}