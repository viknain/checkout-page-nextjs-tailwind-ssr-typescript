import Image from 'next/image'
import * as React from 'react'

import styles from './header.module.scss'

const Header: React.FC<any> = () => {
  return (
    <header className={`${styles.header}`}>
      <div className="container mx-auto">
        <Image src="/logo.svg" width={170} height={37} alt=""/>
      </div>
    </header>
  )
}

export default Header
