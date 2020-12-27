import React from 'react'
import css from './Header.module.css'
const Header = () => {
   return (
      <div className={css.header}>
         <h3 className={css.headerText}>React Recipe App</h3>
      </div>
   )
}

export default Header
