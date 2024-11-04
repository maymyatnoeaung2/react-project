import React from 'react'
import useCategoryStore from '../store/useCategoryStore'

const CategoryButton = ({category:{id,name,isActive}}) => {
  const {activeCategory} = useCategoryStore()

  const handleActiveBtn = () => {
    activeCategory(id)
  }

  return (
       <button onClick={handleActiveBtn} className={` ${isActive && "bg-black text-white"} border border-black py-2 px-4 me-3`}>
              {name}
            </button>
    
  )
}

export default CategoryButton