import { Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"

const Job = ({ data }) => {
  const dispatch = useDispatch()

  const icona = useSelector((state) =>
    state.favourites.content.some((lavoro) => lavoro._id === data._id),
  )

  return (
    <Row
      className="mx-0 mt-3 p-3"
      style={{ border: "1px solid #00000033", borderRadius: 4 }}
    >
      <Col xs={3}>
        <Link to={`/${data.company_name}`}>{data.company_name}</Link>
      </Col>
      <Col xs={8}>
        <a href={data.url} target="_blank" rel="noreferrer">
          {data.title}
        </a>
      </Col>
      <Col xs={1} className="text-end">
        <i
          className={
            icona ? "bi bi-bookmark-check-fill fs-4" : "bi bi-bookmark fs-4"
          }
          onClick={() => {
            dispatch({
              type: "ADD_TO_FAVOURITES",
              payload: data,
            })
          }}
        ></i>
      </Col>
    </Row>
  )
}

export default Job
