import React from 'react'
import CategoryInfos  from './CategoryInfo'
import CategoryCard  from "./CategoryCard"
import "./Category.css"
function Category() {
  return (
    <section className='category_container'>
      {CategoryInfos.map((info) => (
        <CategoryCard data={info} />
      ))}
    </section>
  )
}

export default Category
