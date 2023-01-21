import Button from 'react-bootstrap/Button'

const SearchBar = ({
  search,
  handleSearchChange,
  mapDisplay,
  handleMapToggle,
}) => {
  return (
    <div class="row">
      <div className="col ">
        <h4 className="">
          Find<span className="d-none d-md-inline"> A Spot</span>
        </h4>
      </div>
      <div className="col col-8 col-sm-7 col-md-6 col-lg-5 col-xl-4">
        {!mapDisplay && (
          <input
            className="d-inline form-control"
            value={search}
            onChange={handleSearchChange}
            placeholder=" Start typing to filter..."
          />
        )}
      </div>
      <div className="col d-flex justify-content-end">
        {!mapDisplay ? (
          <Button variant="primary" onClick={handleMapToggle}>
            <span className="d-none d-sm-inline">Map &nbsp;</span>
            <i className="bi bi-map"></i>
          </Button>
        ) : (
          <Button variant="primary" onClick={handleMapToggle}>
            <span className="d-none d-sm-inline">Grid &nbsp;</span>
            <i class="bi bi-grid"></i>
          </Button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
