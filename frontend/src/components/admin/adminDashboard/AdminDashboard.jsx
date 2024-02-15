import React from 'react'
import { Link } from 'react-router-dom'

const AdminDashboard = () => {
  return ( <>
  

  <div>AdminDashboard</div>
 <Link to="/add/admin/product">
  add product
 </Link>

 <Link to="/admin/dashboard">
  dashboard
 </Link>

 <Link to="/admin/product">
  viewproduct
 </Link>

      
  </>
  )
}

export default AdminDashboard