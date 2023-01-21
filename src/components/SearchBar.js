import Button from 'react-bootstrap/Button'

const SearchBar = ({ search, handleSearchChange }) => {
  return (
    <div class="row">
      <div className="col col-9 col-sm-8 col-md-6 col-lg-5 col-xl-4">
        <input
          className="form-control"
          value={search}
          onChange={handleSearchChange}
          placeholder=" Start typing to filter..."
        />
      </div>
      <div className="col d-flex justify-content-end">
        <Button variant="primary">
          Map &nbsp;<i className="bi bi-map"></i>
        </Button>
      </div>
    </div>
  )
}

export default SearchBar
