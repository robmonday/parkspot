import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Image from 'react-bootstrap/Image'
import siteService from '../services/sites'

const SiteDetail = () => {
  const { siteId } = useParams()
  const [detailData, setDetailData] = useState([])

  useEffect(() => {
    siteService.getOne(siteId).then((data) => setDetailData(data))
  }, [])

  return (
    <div className="row">
      <div className="col col-10 col-md-4">
        <Image
          style={{ border: 'solid' }}
          src={'/generic' + (siteId % 5) + '.jpg'}
          fluid
          rounded
        />
      </div>
      <div className="col col-12 col-md-8">Description ...</div>
      <div>Latitude: {detailData.lat}</div>
      <div>Longitude: {detailData.long}</div>
    </div>
  )
}

export default SiteDetail
