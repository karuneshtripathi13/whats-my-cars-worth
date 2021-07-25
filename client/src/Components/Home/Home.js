import "./Home.css";
import React,{useState} from "react";

const Home = () => {
const brand=['--Select Brand--','Maruti', 'Hyundai', 'Ford', 'Renault', 'Toyota', 'Volkswagen',
'Honda', 'Mahindra', 'Datsun', 'Tata', 'Kia', 'MG', 'Isuzu',
'Skoda', 'Nissan', 'Jeep']
const models=['--Select Model--','Alto', 'Grand', 'i20', 'Ecosport', 'Wagon R', 'i10', 'Venue',
'Swift', 'Verna', 'Duster', 'Ciaz', 'Innova', 'Baleno',
'Swift Dzire', 'Vento', 'Creta', 'City', 'Bolero', 'KWID', 'Amaze',
'Santro', 'XUV500', 'KUV100', 'Ignis', 'RediGO', 'Scorpio',
'Marazzo', 'Aspire', 'Figo', 'Vitara', 'Tiago', 'Polo', 'Seltos',
'Celerio', 'GO', 'KUV', 'Jazz', 'Tigor', 'Ertiga', 'Safari',
'Thar', 'Eeco', 'Hector', 'Civic', 'D-Max', 'Rapid', 'Freestyle',
'Nexon', 'XUV300', 'Dzire VXI', 'WR-V', 'XL6', 'Triber', 'Elantra',
'Yaris', 'S-Presso', 'Dzire LXI', 'Kicks', 'Harrier', 'Compass',
'redi-GO', 'Glanza', 'Dzire ZXI', 'Altroz', 'Tucson']
const sellertype=['--Select Seller Type--','Individual', 'Dealer', 'Trustmark Dealer']
const fueltype=['--Select Fuel Type--','Petrol', 'Diesel', 'CNG', 'LPG', 'Electric']
const transmissiontype=['--Select Transmission Type--','Manual', 'Automatic']
const [brandv, setBrandv] = useState("")
const [modelv, setModelv] = useState("")
const [sellertypev, setSellertypev] = useState("")
const [fueltypev, setfueltypev] = useState("")
const [transmissiontypev, setTransmissionv] = useState("")
const [kms_drivenv, setKms_drivenv] = useState("")
const [mileagev, setMileagev] = useState("")
const [yearv, setYearv] = useState("")
const [seatsv, setSeatsv] = useState("")
const [enginev, setEnginev] = useState("")
const [max_powerv, setMax_powerv] = useState("")
const [newcarprice, setNewcarprice] = useState("")
const [result,setResult] = useState("")

const handleSubmit=(e)=>{
    e.preventDefault()
    const data={year:yearv,seller_type:sellertypev,kms_driven:kms_drivenv,New_Car_Price:newcarprice,fuel_type:fueltypev,transmission_type:transmissiontypev,mileage:mileagev,engine:enginev,max_power:max_powerv,seats:seatsv,brand:brandv,model:modelv}
    console.log(data)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
  };
  fetch('/getpred', requestOptions)
      .then(response => response.json())
      .then(data => setResult(data.result));
}
  return (
    <div className='background'>
      <form>
        <div className="wrapper">
        <div className="dropmenus">
      <select required name="brand" onChange={(e)=>{setBrandv(e.target.value)}} className='item' id="brand">
      {brand.map((data) => (
        <option value={data}>
        {data}
        </option>
      ))}
      </select>
        <select required onChange={(e)=>{setModelv(e.target.value)}} name="models" className='item' id="models">
        {models.map((data) => (
        <option value={data}>
        {data}
        </option>
      ))}
        </select>
        <select required onChange={(e)=>{setSellertypev(e.target.value)}} name="seller_type" className='item' id="seller_type">
        {sellertype.map((data) => (
        <option value={data}>
        {data}
        </option>
      ))}
        </select>
        <select required onChange={(e)=>{setfueltypev(e.target.value)}} name="fuel_type" className='item' id="fuel_type">
        {fueltype.map((data) => (
        <option value={data}>
        {data}
        </option>
      ))}
        </select>
        <select required onChange={(e)=>{setTransmissionv(e.target.value)}}  name="transmission_type" className='item' id="transmission_type">
        {transmissiontype.map((data) => (
        <option value={data}>
        {data}
        </option>
      ))}
        </select>
        <input type="submit" className='submitbtn' name="submit"  value="Get Price" onClick={(e)=>handleSubmit(e)} disabled={(modelv===''||brandv===''||sellertypev===''||fueltypev===''||newcarprice===''||transmissiontypev===''||kms_drivenv===''||mileagev===''||seatsv===''||enginev===''||max_powerv==='')?true:false}/>
        </div>
        <div className="numerical">
          <input type="text" required onChange={(e)=>{setKms_drivenv(e.target.value)}}  name="km_driven" className="item" placeholder="kms Driven"/>
          <input type="text" required onChange={(e)=>{setYearv(e.target.value)}}  name="year" className="item" placeholder="Age of Vehicle (in years)"/>
          <input type="text" required onChange={(e)=>{setMileagev(e.target.value)}} name="mileage" className="item" placeholder="Mileage (in km/L)"/>
          <input type="text" required onChange={(e)=>{setSeatsv(e.target.value)}} name="seats" className="item" placeholder="No. of Seats"/>
          <input type="text" required onChange={(e)=>{setEnginev(e.target.value)}} name="engine" className="item" placeholder="Engine Capacity (in CC)"/>
          <input type="text" required onChange={(e)=>{setMax_powerv(e.target.value)}} name="max_power" className="item" placeholder="Power (in Horse Power)"/>
          <input type="text" required onChange={(e)=>{setNewcarprice(e.target.value)}} name="New_Car_Price" className="item" placeholder="New Car Price (in Lakhs)"/>
        </div>
        </div>
      </form>
      <div className={(result==='')?"hidden":"show"}>{result}</div>
    </div>
  );
};

export default Home;
