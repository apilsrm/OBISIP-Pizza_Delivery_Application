
import pageNotFound from "../../assest/PageNotFound.png"
// import { useSelector } from "react-redux"
import Spinner from "react-bootstrap/esm/Spinner"
import { Link } from "react-router-dom"
const PageNotFound = () => {
  // const { loading, error } = useSelector((state) => state.auth);
  return (
    <div className=" grid place-content-center text-center text-black ">

      <img className="items-center " src={pageNotFound} alt="PageNotFound"/>
      {`OOP's`} <span>page not found</span>
      <span>Please check url and try again</span>
      <Link to="/">
      <button
              type="submit"
              className="py-2 px-4 bg-yellow-600 text-white rounded-md hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-yellow-500"
            >
              {/* {loading && <Spinner animation="border" size="sm" />}Home */}
              Home
            </button>
      </Link>
    </div>
  )
}

export default PageNotFound

