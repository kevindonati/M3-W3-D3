import { Container, Row, Col } from "react-bootstrap"
import { useSelector, useDispatch } from "react-redux"
import { Link } from "react-router-dom"

const Favourites = () => {
  const preferiti = useSelector((lavoriPreferiti) => {
    return lavoriPreferiti.favourites.content
  })

  const dispatch = useDispatch()

  return (
    <Container>
      <Row>
        <Col xs={10} className="mx-auto my-3">
          <h1 className="display-1">Favourites Jobs</h1>
        </Col>
        <Col xs={10} className="mx-auto mb-5">
          {preferiti.map((lavoro) => {
            return (
              <Row
                className="mx-0 mt-3 p-3"
                style={{ border: "1px solid #00000033", borderRadius: 4 }}
                key={lavoro._id}
              >
                <Col xs={3}>
                  <Link to={`/${lavoro.company_name}`}>
                    {lavoro.company_name}
                  </Link>
                </Col>
                <Col xs={8}>
                  <a href={lavoro.url} target="_blank" rel="noreferrer">
                    {lavoro.title}
                  </a>
                </Col>
                <Col xs={1} className="text-end">
                  <i
                    className="bi bi-trash fs-4 text-danger"
                    onClick={() => {
                      dispatch({
                        type: "REMOVE_FROM_FAVOURITES",
                        payload: lavoro._id,
                      })
                    }}
                  ></i>
                </Col>
              </Row>
            )
          })}
        </Col>
      </Row>
    </Container>
  )
}

export default Favourites
