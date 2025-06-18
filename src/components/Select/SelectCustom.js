import { useState } from 'react';
import { useSelector } from 'react-redux';
//import options from "./options.json";
import Select from './Select';



const SelectCustom = () => {
  const [brand, setBrand] = useState('');
  const options = useSelector(state => state.brands.items);
  // console.log('what comes to options', options);
  const handleBrandSelect = (value) => {
    setBrand(value);
    console.log(value)
  };

  const selectedBrand = options.find((car) => car === brand);

  return (
   
      <div>
        <Select
          mode='cells'
        options={options}
        kay={brand}
        value={brand}
          selected={selectedBrand || null}
          onChange={handleBrandSelect}
          placeholder='Choose a brand'
        />
      </div>
    
  );
};

export default SelectCustom;