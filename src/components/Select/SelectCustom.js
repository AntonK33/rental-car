import { useState } from 'react';
import { useSelector } from 'react-redux';
//import options from "./options.json";
import Select from './Select';



const SelectCustom = () => {
  const [brand, setBrand] = useState('');
  const options = useSelector(state => state.brands.items);
  console.log('what comes to options',options
)
  const handleMonthSelect = (value) => {
    setBrand(value);
    console.log(value)
  };

  const selectedMonth = options.find((car) => car === brand);
console.log("selected brand",selectedMonth)
  return (
    <div >
      <div>
        <Select
          mode='cells'
          options={options}
          selected={selectedMonth || null}
          onChange={handleMonthSelect}
          placeholder='Choose a brand'
        />
      </div>
    </div>
  );
};

export default SelectCustom;