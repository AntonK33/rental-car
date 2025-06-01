import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useLocation, useParams } from "react-router-dom";
import React from "react";
import styles from "./CarDetails.module.css";



   
  


export const CarDetails = () => {
  
    const dispatch = useDispatch
    const { state } = useLocation();
  const { id, img, } = state?.car;

  return (
    <div className={styles.wrapper}>
      {/* Image */}
      <div>
        <img
          src={img}
          alt="Buick Enclave"
          className={styles.image}
        />
      </div>

      {/* Info */}
      <div>
        <h2 className={`${styles.bold} text-2xl mb-1`}>Buick Enclave, 2008</h2>
        <p className={`${styles.textGray} text-sm mb-2`}>Kyiv, Ukraine • Mileage: 5 858 km • ID: 9582</p>
        <p className={`${styles.textBlue} text-xl mb-4`}>$40</p>
        <p className={`${styles.textGray} mb-6`}>
          The Buick Enclave is a stylish and spacious SUV known for its comfortable ride and luxurious features.
        </p>

        <div className={styles.section}>
          <h3 className={styles.bold}>Rental Conditions:</h3>
          <ul className={styles.list}>
            <li>Minimum age: 25</li>
            <li>Security deposit required</li>
            <li>Valid driver's license</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.bold}>Car Specifications:</h3>
          <ul className={styles.textGray}>
            <li>Year: 2008</li>
            <li>Type: SUV</li>
            <li>Fuel Consumption: 10.5</li>
            <li>Engine Size: 3.6L V6</li>
          </ul>
        </div>

        <div className={styles.section}>
          <h3 className={styles.bold}>Accessories and functionalities:</h3>
          <ul className={styles.textGray}>
            <li>Leather seats</li>
            <li>Panoramic sunroof</li>
            <li>Remote start</li>
            <li>Blind-spot monitoring</li>
            <li>Power liftgate</li>
            <li>Premium audio system</li>
          </ul>
        </div>
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
  );
};

