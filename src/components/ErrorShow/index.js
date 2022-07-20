// src/components/ErrorShow/index.js

import React from 'react'
import { ErrorBox, ErrorTitle, ErrorMessage, ErrorDetail } from './style'

export const ERROR_API = 'Error leyendo el API'
export const ERROR_GRAPHQL = 'Error leyendo GraphQL'
export const ERROR_ROW_NOT_FOUND = 'Item no encontrado'

export const ErrorShow = ({ errorTitle, errorMessage = '', errorDetail = '' }) => (
  <ErrorBox>
    <ErrorTitle>{errorTitle}</ErrorTitle>
    {errorMessage && (<ErrorMessage>{errorMessage.toString()}</ErrorMessage>)}
    {errorDetail && (<ErrorDetail>{errorDetail.toString()}</ErrorDetail>)}
  </ErrorBox>
)
