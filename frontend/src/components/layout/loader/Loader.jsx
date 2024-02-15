
import Spinner from "react-bootstrap/Spinner";


const Loader = () => {
  return (
        <div className='d-flex justify-content-center align-items-center' style={{ height: "85vh" }}>
              <Spinner animation="border" variant="primary" />
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="primary" />

            </div>
  )
}

export default Loader