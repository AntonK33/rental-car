
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import React from "react";
import styles from "./CarDetails.module.css";
import Q from "../../assets/check-circle.svg"
import Location from "../../assets/Group.svg";


   
  


export const CarDetails = () => {
  
   
  const { state } = useLocation();
  console.log(state);
  const {
    img,
    model,
    brand,
    year,
    rentalPrice,
    address,
    description,  
    fuelConsumption,
    engineSize,
    rentalConditions,
    accessories,
    mileage } = state?.car;

  return (
    <div className={styles.wrapper}>
      <div className={styles.linksBar}>
         {/* Image */}
      <div className={styles.imgWrapper}>
        <img
          src={img}
          alt="Buick Enclave"
          className={styles.image}
        />
      </div>

     
      {/* Form */}
      <div className="md:col-span-2 mt-8">
        <div className={styles.formWrapper}>
          <h3 className="text-lg font-semibold mb-2">Book your car now</h3>
          <p className={`${styles.textGray} text-sm mb-4`}>Stay connected! We are always ready to help you.</p>
          <form>
            <input type="text" placeholder="Name*" className={styles.input} />
            <input type="email" placeholder="Email*" className={styles.input} />
            <input type="date" placeholder="Booking date" className={styles.input} />
            <textarea placeholder="Comment" className={`${styles.textarea} h-24`} />
            <button type="submit" className={styles.button}>Send</button>
          </form>
        </div>
      </div>
      </div>
     





       {/* Info */}
      <div>
        <div>
        <h2 className={`${styles.title} text-2xl mb-1`}>{brand} {model}, {year}</h2>
        <p className={`${styles.locationDescription} text-sm mb-2`}>
          <span><img src={Location } alt="location"/></span>
          {address.split(',')[1]},{address.split(',')[2]} • Mileage: {mileage} km</p>
        <p className={`${styles.textBlue} text-xl mb-4`}>${rentalPrice}</p>
        <p className={`${styles.textGray} mb-6`}>
       { description}

        </p>
        </div>
       
          
        <div className={styles.section}>
          <h3 className={styles.bold}>Rental Conditions:</h3>
          <ul className={styles.list}>
            <li className={styles.checkItem}>
              <span className={styles.check}>
              <img src={Q} alt="check"  className={styles.imgCheck}/>
            </span> {rentalConditions[0]}</li>
            <li className={styles.checkItem}>
              <span className={styles.check}>
              <img src={Q} alt="check" className={styles.imgCheck} />
            </span>{rentalConditions[1]}</li>
            <li className={styles.checkItem}>
              <span className={styles.check}>
              <img src={Q} alt="check" className={styles.imgCheck} />
            </span>{rentalConditions[2]}</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.bold}>Car Specifications:</h3>
          <ul className={styles.textGray}>
            <li>Year: {year}</li>
            <li>Type: SUV</li>
            <li>Fuel Consumption:{ fuelConsumption}</li>
            <li>Engine Size: {engineSize}</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.bold}>Accessories and functionalities:</h3>
          
          <ul className={styles.textGray}>
  {accessories.map((item, index) => (
    <li key={index}>{item}</li>
  ))}
</ul>
       
        </div>
      </div>

    </div>
  );
};

