import React from 'react'
import Navigation from '../../components/Navigation/Navigation'
import BusinessList from '../../components/BusinessCard/BusinessCard'
import SearchBar from '../../components/SearchMenu/SearchBar'

export default function SearchAccreditedPage() {
  return (
    <>
    <Navigation />
    <SearchBar />
    <BusinessList />
    </>
  )
}
