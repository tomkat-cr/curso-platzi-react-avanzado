// src/components/PhotoCardContent/index.js

import React from 'react'
import { MdArrowBack } from 'react-icons/md'
import {
  Link, User, Category, ImageWrapper, Img,
  Description, Button, Column
} from './styles'

// Hook para mostrar la categoria de cada foto
export const PhotoCardContentCategory = ({ emoji, name, path, cover }) => (
  <Column>
    <Category>{emoji} {name}</Category>
    <ImageWrapper small='1'>
      <Link to={path}>
        <Img src={cover} small='1' />
      </Link>
    </ImageWrapper>
  </Column>
)

// Hook para mostrar el usuario de cada foto
export const PhotoCardContentUser = ({ name, avatar }) => (
  <Column>
    <User>{name}</User>
    <ImageWrapper small='1'>
      <Img src={avatar} small='1' />
    </ImageWrapper>
  </Column>
)

// Hook para mostrar la descripcion de cada foto
export const PhotoCardContentDesc = ({ description = '' }) => (
  <>
    <Description>{description}</Description>
    <Link to='/'>
      <Button><MdArrowBack size='30px' /></Button>
    </Link>
  </>
)
