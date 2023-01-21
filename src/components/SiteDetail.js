import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image'

const SiteDetail = () => {
  const { siteId } = useParams()
  return (
    <div className="row">
      <div className="col col-10 col-md-4">
        <Image
          style={{ border: 'solid' }}
          src={'/generic' + siteId + '.jpg'}
          fluid
          rounded
        />
      </div>
      <div className="col col-12 col-md-8">Description ...</div>
    </div>
  )
}

export default SiteDetail
