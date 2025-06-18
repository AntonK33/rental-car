import css from "./Catalog.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrl} from "../../redux/catalog/operations.js";
import { fetchBrands } from "../../redux/brands/operations.js";
import { useNavigate } from "react-router-dom";
import options from "../Select/options.json"
import SelectCustom from "../Select/SelectCustom.js";
const rentPrice = [
  "$10","$20","$30","$40","$50","$60","$70","$80","$90","$100",
]
export default function Catalog() {
 const navigate = useNavigate()

  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [selectedMileageFrom, setSelectedMileageFrom] = useState('');
  const [selectedMileageTo, setSelectedMileageTo] = useState('');
  const [callFilter, setCallFilter] = useState(false);
  const dispatch = useDispatch();
  

  // console.log("what comes in to cars",selectedMileageFrom)
  //  console.log("what comes in to brands",selectedMileageTo)
  // const brand = selectedBrand;
  console.log("What comes in hte selectedBrand",selectedBrand)

  const cars = useSelector(state => state.catalog.items);
  const brandsArr = useSelector(state => state.brands.items);
  // console.log("what comes in to cars",cars)
  // console.log("what comes in to brands",brandsArr)

  const { page, totalPages, isLoading } = useSelector(state => state.catalog);
  const loading = useSelector(state => state.catalog.isLoading);
  const error = useSelector(state => state.catalog.error);
  //const brands = [...new Set(brandsArr.map(car => car.brand))];
  const brands = brandsArr.map(brand => brand);

  // console.log("what comes in to cars",cars)
   //console.log("what comes in to brands",brands)
  const detailedCarDescription = (car) => {
    //console.log("what comes in to cars",car)
    navigate("/carInfo",{ state: {car} })
  }
   
  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);
  
useEffect(() => {
  dispatch(fetchUrl(page));
}, [dispatch, page]);


  
  useEffect(() => {
 
  if ((callFilter && selectedBrand) || (callFilter && selectedPrice)
    || (callFilter && selectedMileageFrom) || (callFilter && selectedMileageTo))
  {
    const actualBrand = selectedBrand === "Choose a brand" ? "" : selectedBrand;
    const actualPrice = selectedPrice === "Choose a price" ? "" : selectedPrice;
    dispatch(fetchUrl({
      page: 1,
      brand: actualBrand,
      rentalPrice: actualPrice,
      minMileage: selectedMileageFrom,
      maxMileage: selectedMileageTo,
    }));
    setCallFilter(false); // сбрасываем флаг
  }
  
}, [callFilter, selectedBrand,
    selectedPrice, selectedMileageFrom,
    selectedMileageTo, dispatch]);

const handleSubmit = (e) => {
  e.preventDefault();
  setCallFilter(true); 
};
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
  
    return (
      <div className={css.filterContainer}>

        
        
            <form className={css.filterPanel} onSubmit={handleSubmit}>
            <label>
            <p className={css.carBrendStyle}>Car brand</p>
            <div className={css.selectCustom} >
              <SelectCustom
                onChange={(e) => setSelectedBrand(e.target.value)}
                value={selectedBrand}
              />
            </div>
            
            {/* <select className={css.selectStyle}
              value={selectedBrand}
              onChange={(e)=>setSelectedBrand(e.target.value)}
            >
              
    <option className={css.optionStyle}>Choose a brand</option>
    {brands.map(brand => (
      <option key={brand} value={brand} className={css.optionStyle}>
        {brand}
       
      </option>
    ))}
  </select> */}
</label>

  <label>
    <p className={css.carBrendStyle}>Price / 1 hour</p>
            <select className={css.selectStyle}
                value={selectedPrice}
              // onChange={(e)=>setSelectedPrice(e.target.value)}
              onChange={(e) => setSelectedPrice(e.target.value)}

            >
      <option>Choose a price</option>
      {rentPrice.map(rent => (
  <option key={rent} value={rent.slice(1)}>
    {rent}
  </option>
     ))}
    </select>
  </label>

  <label>
   <p className={css.carBrendStyle}>Car mileage / km</p> 
    <div className="rangeBox">
              <input
                type="number"
                placeholder="From"
                className={css.inputKmFrom}
                value={selectedMileageFrom}
                onChange={(e)=> setSelectedMileageFrom(e.target.value)}
              />
              <input type="number"
                placeholder="To"
                className={css.inputKmTo}
                value={selectedMileageTo}
                onChange={(e)=> setSelectedMileageTo(e.target.value)}
              />
    </div>
  </label>
          <div className={css.buttonPosition}>
          <button type="submit" className={css.button}>Search</button>
      </div>
 
</form>

        
        <div className={css.gallery}>
  {cars.map(car => (
    <div className={css.carCard} key={car.id}>
      <div className={css.carImageWrapper}>
        <img src={car.img} alt={`${car.brand} ${car.model}`} className={css.carImage }  />
        {/* <button className={css.favoriteBtn}>💙</button> */}
      </div>

      <div className={css.carTitleRow}>
        <h2 className={css.carTitle}>
          {car.brand} <span className={css.model}>{car.model},</span>{car.year}
        </h2>
        <span className={css.carPrice}>${car.rentalPrice}</span>
      </div>

      <p className={css.carInfoText}>
         {car.address.split(',')[1]} |
        {car.rentalCompany} | {car.type} | {car.mileage.toLocaleString()} km
      </p>

      <button
        className={css.readMoreBtn}
        type="button"
        onClick={()=> detailedCarDescription(car)}
      >
        Read more
      </button>
    </div>
  ))}
</div>

<div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCallFilter(true)}
            disabled={page === i + 1}
            style={{ padding: '8px 12px', background: page === i + 1 ? '#347cfb' : '#eee' }}
          >
            {i + 1}
          </button>
        ))}
        </div>
        

      </div>
     
      
    );
  }