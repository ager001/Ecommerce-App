 import React, { useEffect, useState, useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(true);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);

const toggleCategory = (e) =>{
  if(category.includes(e.target.value)){
       setCategory(prev=> prev.filter(item=> item !== e.target.value))
  }
  else{
    setCategory(prev=> [...prev, e.target.value])
  }
}

const toggleSubCategory = (e) =>{
  if(subCategory.includes(e.target.value)) {
    setSubCategory(prev=> prev.filter(item=> item !== e.target.value))
  }
  else{
    setSubCategory(prev=> [...prev, e.target.value])
  }
}

const applyFilter = ()=>{
  let productsCopy= products.slice();

  if (category.length > 0) {
      productsCopy = productsCopy.filter(item=>category.includes(item.category));
  }

  if(subCategory.length > 0){
    productsCopy = productsCopy.filter(item=>subCategory.includes(item.subCategory))
  }
  setFilterProducts(productsCopy);
}

useEffect(()=>{
      applyFilter()
},[category, subCategory])

  return (
    <div className="flex flex-col lg:flex-row gap-6 pt-10 border-t px-4 sm:px-6 lg:px-10">
      {/* Filter Sidebar */}
      <div className="lg:min-w-[240px]">
        <p
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img
            className={`h-3 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}
            src={assets.dropdown_icon}
            alt="Toggle Filters"
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 px-4 py-3 mt-4 rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {['Men', 'Women', 'Kids'].map((category) => (
              <label key={category} className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3" value={category} onChange={toggleCategory} />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Type Filter */}
        <div className={`border border-gray-300 px-4 py-3 mt-5 rounded-md ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm text-gray-700">
            {[
              'Adidas', 'Nike', 'Jordans', 'Travis Scott x Jordan', 'Puma',
              'Asics', 'Vans', 'Official Wear', 'Designer Slides'
            ].map((type) => (
              <label key={type} className="flex items-center gap-2">
                <input type="checkbox" className="w-3 h-3" value={type} onChange={toggleSubCategory} />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex-1">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
          <Title text1="ALL" text2="COLLECTIONS" />
          <select className="border border-gray-300 text-sm px-3 py-1 rounded-md">
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={item._id || index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;