import React from 'react'

export default function Footer() {
  return (
   <footer>
    <p>&copy; univel {(new Date('01-01-2015').getFullYear())} - {(new Date().getFullYear())}</p>
   </footer>
  )
}
