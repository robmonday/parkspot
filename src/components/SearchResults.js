import SearchResult from './SearchResult'

const SearchResults = ({ sites }) => {
  return (
    <div className="row">
      {sites.map((site) => (
        <SearchResult site={site} key={site.id.toString()} />
      ))}
    </div>
  )
}

export default SearchResults
