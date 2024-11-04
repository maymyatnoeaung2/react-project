import React from 'react'

const CategoryButton = ({categoryName,current}) => {
  return (
       <button className={` ${current && "bg-black text-white"} border border-black py-2 px-4 me-3`}>
              {categoryName}
            </button>
    
  )
}

export default CategoryButton