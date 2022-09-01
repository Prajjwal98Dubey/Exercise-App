import back from './Images/back.jpg'
import cardio from './Images/cardio.jpg'
import chest from './Images/chest.png'
import lowerarms from './Images/lowerarms.jpg'
import lowerlegs from './Images/lowerlegs.jpg'
import neck from './Images/neck.jpg'
import shoulder from './Images/shoulder.jpg'
import upperarms from './Images/upperarms.jpg'
import upperlegs from './Images/upperlegs.jpg'
import waist from './Images/waist.jpg'
import './App.css';
import axios from 'axios'
import { useState } from 'react'
import ExerciseCard from './components/ExerciseCard'

function App() {
  const[fitness,setFitness]=useState([])
  const[term,setTerm]=useState('');
  const[isloading,setIsLoading]=useState(true)
  const getExercise =(searched)=>{
const options = {
  method: 'GET',
  url: `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${searched}`,
  headers: {
    'X-RapidAPI-Key': 'db8c939ae4msh9c79f95158affd8p12aac1jsn22c44837d4b4',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
  setFitness(response.data);
  setIsLoading(false)
}).catch(function (error) {
	console.error(error);
});
  }
  return (
    <> 
     <div className="heads">
      <h2>Want to Have a Good and healthy life??</h2>
      <h4>Work On these 10 Body Parts to achieve this.</h4></div>
      <div className="search-box">
      <input className="form-control mr-sm-2" type="search"  value={term} onChange={(e)=>setTerm(e.target.value)}  placeholder="Search Exercise for the body part" aria-label="Search"/>
      <span><button id="search-btn" onClick={()=>getExercise(term)} className="btn btn-outline-success" type="submit">Search</button></span>
      </div>
      {isloading ? (
    <div className="main">
      <div className="grid">
        <div className="exercise-card">
          <img className="original-img"  src= {back} alt="loading" />
          <h3>Back</h3>
        </div> 
        <div className="exercise-card">
          <img className="original-img"  src={cardio} alt="loading" />
          <h3>Cardio</h3>
        </div>
        <div className="exercise-card">
          <img className="original-img"  src={chest}  alt="loading" />
          <h3>Chest</h3>
        </div>
        <div className="exercise-card">
          <img className="original-img"  src={lowerarms} alt="loading" />
          <h3>Lower Arms</h3>
        </div>
        <div className="exercise-card">
          <img className="original-img"  src={lowerlegs} alt="loading" />
          <h3>Lower Legs</h3>
        </div>
        <div className="exercise-card">
          <img className="original-img"  src={neck} alt="loading" />
          <h3>Neck</h3>
        </div>
        <div className="exercise-card">
          <img className="original-img"  src={shoulder} alt="loading" />
          <h3>Shoulder</h3>
        </div>
         <div className="exercise-card">
          <img className="original-img"  src={upperarms} alt="loading" />
          <h3>Upper Arms</h3>
        </div>
        <div className="exercise-card">
          <img className="original-img"  src={upperlegs} alt="loading" />
          <h3>Upper Legs</h3>
        </div>
        <div className="exercise-card">
          <img  className="original-img" src={waist} alt="loading" />
          <h3>Waist</h3>
        </div>
      </div>
    </div>) : (
    <div className="main-2">
      <div className="grid-2">
       {fitness.map(fit=>(
        <ExerciseCard key={fit.id} fit={fit}/>
       ))}
      </div>
    </div>
) }
    </>
  );
}

export default App;
