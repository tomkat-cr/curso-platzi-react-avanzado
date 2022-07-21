// src/containers/PhotoCardContentWithQuery.js

import React from 'react'
import { useQuery } from '@apollo/client'

import { PhotoCardContentUser, PhotoCardContentCategory, PhotoCardContentDesc } from '../components/PhotoCardContent'
import { Article } from '../components/PhotoCardContent/styles'
import { getCategory } from '../hoc/getCategory'
import { getUser } from '../hoc/getUser'
import { WaitAnimation } from '../components/WaitAnimation'
// import { ErrorShow, ERROR_GRAPHQL, ERROR_ROW_NOT_FOUND } from '../components/ErrorShow'
import { ErrorShow, ERROR_GRAPHQL } from '../components/ErrorShow'

const UserData = ({ id }) => {
  const { loading, error, data } = useQuery(getUser, { variables: { id } })
  if (loading) {
    return (<WaitAnimation />)
  }
  if (error) {
    return <ErrorShow errorTitle={ERROR_GRAPHQL} errorMessage={error} errorDetail='[getUser]' />
  }
  // console.log('PhotoCardContentWithQuery - loading1, error1, data1', loading, error, data)
  const { user = {} } = data
  return (
    <>
      <PhotoCardContentUser
        {...user}
      />
    </>
  )
}

const CategoryData = ({ id }) => {
  const { loading, error, data } = useQuery(getCategory, { variables: { id } })
  if (loading) {
    return (<WaitAnimation />)
  }
  if (error) {
    return <ErrorShow errorTitle={ERROR_GRAPHQL} errorMessage={error} errorDetail='[getCategory]' />
  }
  // console.log('PhotoCardContentWithQuery - loading, error, data', loading, error, data)
  // if (typeof data === 'undefined' || !('category' in data)) {
  //   return <ErrorShow errorTitle={ERROR_GRAPHQL} errorMessage={ERROR_ROW_NOT_FOUND} errorDetail='[getCategory]' />
  // }
  const { category = {} } = data
  return (
    <>
      <PhotoCardContentCategory
        {...category} path={`/pet/${category.id}`}
      />
    </>
  )
}

export const PhotoCardContentWithQuery = ({ id, categoryId, userId, description = '' }) => {
  // console.log('PhotoCardContentWithQuery(', 'id:', id, 'categoryId:', categoryId, 'userId:', userId, 'description:', description, ')')
  return (
    <>
      <Article>
        <CategoryData id={categoryId} />
        <UserData id={userId} />
      </Article>
      <PhotoCardContentDesc
        description={description}
      />
    </>
  )
}
