import { useState, useEffect } from 'react'

import siteService from '../services/sites'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

const FindSpot = () => {
  const [sites, setSites] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    siteService.getAll().then((initialSites) => setSites(initialSites))
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredSites = sites.filter((site) =>
    site.address.toLowerCase().includes(search)
  )

  return (
    <div>
      <h4>Find A Spot</h4>
      <SearchBar search={search} handleSearchChange={handleSearchChange} />
      <SearchResults sites={filteredSites} />
    </div>
  )
}

export default FindSpot
