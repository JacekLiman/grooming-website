import { useState } from "react";
import { bundleData } from "../data";
import CategoryItem from "./CategoryItem";
import SelectedCategory from "./SelectedCategory";

const Category = () => {

  const [category,setCategory] = useState(bundleData[0].name)

  const filteredBundleData = bundleData.filter((item)=>item.name === category)

  const services = filteredBundleData[0].services

  console.log(services)

  return (
    <section>
      <div className="container mx-auto bg-orange-quaternary">
        <div className="py-10">
          <div className="text-center space-y-3">
            <h3 className="text-orange font-medium">Our Prices</h3>
            <h2 className="text-4xl font-semibold">How Big Your Dog is?</h2>
            <p>Choose your dog category</p>
          </div>
          <div className="py-20 grid grid-cols-1 md:grid-cols-4 gap-10">
            {bundleData.map((item,idx)=>{
              const{image,name,dogCategory}=item
              return <CategoryItem key={idx} category={category} setCategory={setCategory} image={image.type} name={name} dogCategory={dogCategory}/>
            })}
          </div>
          <div className="py-20 grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {services.map((item,idx)=>{
                const {name,price,list} = item

                return <SelectedCategory key={idx} name={name} price={price} list={list}/>
              })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Category;
