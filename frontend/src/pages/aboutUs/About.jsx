
// import { Link, Outlet } from "react-router-dom"
import AboutImg from "../../assest/image.png"
import CommonPage from "../commonPages/CommonPage"
import MoreCompany from "./MoreCompany"

const About = () => {
  return (
   <>
   <CommonPage title="Pizza Bazar"
            subtitle="About"
            desc=" Welcome to PizzaBazar, your one-stop shop for the best shopping experience on the web. We are a small but passionate team of 69 people who are committed to providing our customers with the best possible shopping experience.
            We started PizzaBazar in 2023 because we believe that everyone should have access to high-quality products at a fair price. We source our products from all over the world, and we only work with suppliers who share our commitment to quality.
            We are proud to offer a wide variety of products, including fresh produce. We are constantly adding new products to our inventory, so be sure to check back often.
    "

            desc1=" We offer free shipping on orders over Rs.3000 within the Kathmandu Valley. We also offer a 30-day return policy on valid products, so you can be sure that you are making a purchase that you are happy with.
            We believe that customer service is our top priority. If you have any questions or concerns, please do not hesitate to contact us. We are here to help you make the most of your PizzaBazar experience.
            Thank you for shopping with PizzaBazar!"
            btnAbout="Learn more"
            imgAbout={AboutImg}
            visit="/more-info"
   
   />
   <MoreCompany  title="Company"
            subtitle=" Learn More About"
            imgAbout={AboutImg}
            desc=" Welcome to PizzaBazar, your one-stop shop for the best shopping experience on the web. We are a small but passionate team of 69 people who are committed to providing our customers with the best possible shopping experience.
            We started PizzaBazar in 2023 because we believe that everyone should have access to high-quality products at a fair price. We source our products from all over the world, and we only work with suppliers who share our commitment to quality.
            We are proud to offer a wide variety of products, including fresh produce. We are constantly adding new products to our inventory, so be sure to check back often."

            desc1=" We offer free shipping on orders over Rs.3000 within the Kathmandu Valley. We also offer a 30-day return policy on valid products, so you can be sure that you are making a purchase that you are happy with.
            We believe that customer service is our top priority. If you have any questions or concerns, please do not hesitate to contact us. We are here to help you make the most of your PizzaBazar experience.
            Thank you for shopping with PizzaBazar!"
            btnAbout="Company Details"
            visit=""
            />
{/*  parent vitra child route diyar (nested routing)
   <div className=" text-center px-2 space-x-7 ">
    <Link to="company" className="hover:text-orange-400 no-underline">Company</Link>
    <Link to="changee"className="hover:text-orange-400 no-underline">Change</Link>
    <Link className="hover:text-orange-400 no-underline">Help</Link>
    <Outlet />
   </div> */}
   </>
  )
}

export default About
