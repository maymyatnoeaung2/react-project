import React from 'react'
import CategoryButton from './CategoryButton';
import Container from './Container';
import useCategoryStore from '../store/useCategoryStore';
import useCardStore from '../store/useCardStore';

const CategorySection = () => {
    const title = "Product Categories";
const {categories} = useCategoryStore()
const {cards} = useCardStore()

  return (
    <section id="category-section" className="p-5">
       <Container>
       <p className="text-sm text-stone-600 mb-2">{title}</p>
        <div className=" text-nowrap overflow-scroll category-button-group">
          {/* <CategoryButton categoryName="All" current={true}/> */}
          {categories.map((category) => (
           <CategoryButton  key={category.id} category={category} />
          ))}
        </div>
       </Container>
      </section>
  )
}
 
export default CategorySection