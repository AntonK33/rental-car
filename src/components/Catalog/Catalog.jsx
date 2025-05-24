import css from "./Catalog.module.css"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUrl} from "../../redux/catalog/operations.js";
import { fetchBrands } from "../../redux/brands/operations.js";

const rentPrice = [
  "$10","$20","$30","$40","$50","$60","$70","$80","$90","$100",
]
export default function Catalog() {
  const [selectedBrand, setSelectedBrand] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [callFilter, setCallFilter] = useState(false);
  const dispatch = useDispatch();
  
  // const brand = selectedBrand;
 // console.log("What comes in hte selectedBrand",selectedBrand)

  const cars = useSelector(state => state.catalog.items);
  const brandsArr = useSelector(state => state.brands.items)
  // console.log("what comes in to cars",cars)
  // console.log("what comes in to brands",brandsArr)

  const { page, totalPages, isLoading } = useSelector(state => state.catalog);
  const loading = useSelector(state => state.catalog.isLoading);
  const error = useSelector(state => state.catalog.error);
  //const brands = [...new Set(brandsArr.map(car => car.brand))];
  const brands = brandsArr.map(brand => brand);

  // console.log("what comes in to cars",cars)
   //console.log("what comes in to brands",brands)

   
  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);
  
useEffect(() => {
  dispatch(fetchUrl(page));
}, [dispatch, page]);


  
useEffect(() => {
  if (callFilter && selectedBrand) {
    dispatch(fetchUrl({ page: 1, brand: selectedBrand, rentalPrice: selectedPrice }));
    setCallFilter(false); // сбрасываем флаг
  }
}, [callFilter, selectedBrand, selectedPrice, dispatch]);

const handleSubmit = (e) => {
  e.preventDefault();
  setCallFilter(true); // запускаем второй useEffect
};
if (loading) return <p>Loading...</p>;
if (error) return <p>Error: {error}</p>;
  
    return (
        <div className={css.filterContainer}>
            <form className={css.filterPanel} onSubmit={handleSubmit}>
            <label>
  <p className={css.carBrendStyle}>Car brand</p>
            <select className={css.selectStyle}
              value={selectedBrand}
              onChange={(e)=>setSelectedBrand(e.target.value)}
            >
    <option>Choose a brand</option>
    {brands.map(brand => (
      <option key={brand} value={brand}>
        {brand}
       
      </option>
    ))}
  </select>
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
              <input type="number" placeholder="From" className={css.inputKmFrom} />
      <input type="number" placeholder="To" className={css.inputKmTo}/>
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

      <button className={css.readMoreBtn}>Read more</button>
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