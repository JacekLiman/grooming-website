type CategoryItemProps = {
  image: string;
  name: string;
  dogCategory: string;
  category:string;
  setCategory:(arg:string)=>void;
};

import Triangle from '../assets/img/triangle.svg'

const CategoryItem = ({ image, name, dogCategory,setCategory,category }: CategoryItemProps) => {
  
  return (
    <div
      onClick={() => setCategory(name)}
      className={` ${
        name === category ? "border-slate-200" : "border-transparent "
      } group p-4 flex flex-col items-center gap-2 cursor-pointer border hover:border-slate-200 rounded-xl`}
    >
      <div className="mb-4">
        <img className="group-hover:scale-105 w-full max-w-[250px] mx-auto" src={image} alt="" />
      </div>
      <h3 className="capitalize text-center text-lg font-semibold">{name}</h3>
      <p className="relative text-center text-sm px-10 py-2 border-b-orange border-b-2">
        <img
          className={`${
            name === category ? "block" : "hidden"
          } absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-full`}
          src={Triangle}
          alt=""
        />
        {dogCategory}
      </p>
    </div>
  );
};

export default CategoryItem;
