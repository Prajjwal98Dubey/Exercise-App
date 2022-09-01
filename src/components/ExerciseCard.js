import React from 'react'

const ExerciseCard = ({fit}) => {
  return (
    <>
    <div className="exercise-card-2">
        <img className='img-exercise' src={fit.gifUrl} alt="loading" />
        <h4 className="title">{fit.name}</h4>
        <h5 className='equipment'>Equipment: {fit.equipment}</h5>
        <h5 className='target-muscle'>Target Muscle: {fit.target}</h5>
    </div>
    </>
  )
}

export default ExerciseCard