import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <>
            <div className="header">
                <nav>
                    {/* <h2 className='heading'><a href="/">FMS</a></h2> */}
                    <a href="/"><img src={require('./fms icon.png')} alt="fms img" /></a>
                    <ul>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/about">ABOUT</a></li>
                        <li><a href="/details">DETAILS</a></li>
                        {/* <li><div class="dropdown">
                            <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Choose Sem
                            </button>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="#">Semester 1</a></li>
                                <li><a class="dropdown-item" href="#">Semester 2</a></li>
                                <li><a class="dropdown-item" href="#">Semester 3</a></li>
                                <li><a class="dropdown-item" href="#">Semester 4</a></li>
                                <li><a class="dropdown-item" href="#">Semester 5</a></li>
                                <li><a class="dropdown-item" href="#">Semester 6</a></li>
                                <li><a class="dropdown-item" href="#">Semester 7</a></li>
                                <li><a class="dropdown-item" href="#">Semester 8</a></li>
                            </ul>

                        </div>
                        </li> */}
                        <li><a href="/receipt">HELP</a></li>
                    </ul>
                    <div>
                        {/* <button className='bg-[#fff] px-3 py-0' onClick={Contact}>Contact Me!</button> */}
                        <button className='bg-[#ff7070] px-3 py-0'><a href="/contact">PAYMENT</a></button>
                    </div>
                </nav>
            </div>
        </>
    )
}