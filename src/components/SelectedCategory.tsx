import { FiCheck } from "react-icons/fi";

type SelectedCategoryProps = {
  name: string;
  price: number;
  list: string[];
};

const SelectedCategory = ({ name, price, list }: SelectedCategoryProps) => {
  return (
    <div className="px-14 py-10 bg-white rounded-3xl">
      <h3 className="text-center text-5xl font-semibold">${price}</h3>
      <p className="text-center capitalize mt-4 mb-8 font-semibold">{name}</p>
      <ul className="space-y-3">
        {list.map((item, idx) => (
          <li className="flex items-center gap-4 capitalize text-sm" key={idx}>
            <div className="p-1 bg-orange rounded-full text-white">
              <FiCheck />
            </div>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SelectedCategory;
