import { useState, useEffect } from 'react'

import siteService from '../services/sites'
import MapResults from './MapResults'

import SearchBar from './SearchBar'
import SearchResults from './SearchResults'

const FindSpot = () => {
  const [sites, setSites] = useState([])
  const [search, setSearch] = useState('')
  const [mapDisplay, setMapDisplay] = useState(false)

  useEffect(() => {
    siteService.getAll().then((initialSites) => setSites(initialSites))
  }, [])

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }

  const filteredSites = sites.filter((site) =>
    site.address.toLowerCase().includes(search)
  )

  const handleMapToggle = () => {
    setMapDisplay(!mapDisplay)
  }

  return (
    <div>
      <SearchBar
        search={search}
        handleSearchChange={handleSearchChange}
        mapDisplay={mapDisplay}
        handleMapToggle={handleMapToggle}
      />
      {mapDisplay ? (
        <MapResults sites={filteredSites} />
      ) : (
        <SearchResults sites={filteredSites} />
      )}
    </div>
  )
}

export default FindSpot
