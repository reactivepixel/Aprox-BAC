import React from 'react'

const drinkIcon = (type) => {
  let src = "";

    switch (type) {
      case 'wine':
        src = '../assets/images/wine.svg';
      case 'beer':
        src = '../assets/images/beer.svg';
      case 'shot':
        src = '../assets/images/shot.svg';
      case 'cocktail':
        src = '../assets/images/cocktail.svg';
    }

  return (
    <img src={src} width="100%" />
  )
}

export default drinkIcon
