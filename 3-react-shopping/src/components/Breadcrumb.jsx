import React from 'react'
import { Link } from "react-router-dom";


const Breadcrumb = ({currentPageTitle}) => {
  return (
<>
<div className='w-full flex gap-3 mb-5'>
    <Link to = {"/"} className='text-gray-500 hover:text-blue-400'>Home</Link>
    <span> / </span>
    <p >{currentPageTitle}</p>
</div>
</>
  )
}

export default Breadcrumb