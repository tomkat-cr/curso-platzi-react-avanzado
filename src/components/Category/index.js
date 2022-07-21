// src/components/Category/index.js

import React from 'react'

import { Image, Emoji, Link } from './styles'

const DEFAULT_IMAGE = 'https://i.imgur.com/dJa0Hpl.jpg'

export const Category = ({ cover = DEFAULT_IMAGE, path, emoji = '?' }) => (
  <Link to={path}>
    <Image src={cover} />
    <Emoji>{emoji}</Emoji>
  </Link>
)
