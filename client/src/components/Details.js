import React from 'react'
import Navbar from './Navbar'

export default function Details() {
  return (
    <>
      <Navbar />
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
          Choose Semester
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
    </>
  )
}
