import Card from 'react-bootstrap/Card'

const SearchResult = ({ site }) => {
  return (
    <div className="col col-12 col-sm-10 col-md-6 col-lg-4 col-xl-3 mt-3">
      <a
        style={{ textDecoration: 'none', color: 'black' }}
        href={'site/' + site.id}
      >
        <Card>
          <Card.Img
            variant="top"
            style={{ maxHeight: '200px' }}
            src={site.imgPath}
          />
          <Card.Body>
            <Card.Title>{site.address}</Card.Title>
            <Card.Text>Available: Daily & Monthly Available</Card.Text>
          </Card.Body>
        </Card>
      </a>
    </div>
  )
}

export default SearchResult
