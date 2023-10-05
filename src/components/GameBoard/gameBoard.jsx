import React, { useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addPositivePoint } from '../../redux/actions';
import Quiz from "../Questions/Quiz"
import { Link } from "react-router-dom"

import {usersData} from "../BDD/usersData"
import { setUser } from '../../redux/actions';

const GameBoard = () => {
  const users = useSelector((state) => state.usuarios);
  const dispatch = useDispatch();

  useEffect(() => {
    usersData.forEach(user => {
      console.log('Enviando usuario:', user.name);
      dispatch(setUser(user.name, user.id, user.img))
    })
  }, [dispatch])
  
  const [blueSquarePosition, setBlueSquarePosition] = useState(0);
  const [greenSquarePosition, setGreenSquarePosition] = useState(0);

  const handleBlueButtonClick = () => {
    setBlueSquarePosition((prevPosition) => prevPosition + 1);
    dispatch(addPositivePoint(users[0].id));
  };

  const handleGreenButtonClick = () => {
    setGreenSquarePosition((prevPosition) => prevPosition + 1);
    dispatch(addPositivePoint(users[1].id));
  };


  

  return (
    <div className="bg-gray-900 min-h-screen  text-white">
      <div className='flex flex-col justify-center items-center'>
      <h1 className="text-4xl font-bold mb-8 mt-4">¡Bienvenido a 2WHEELS Quiz!</h1>
      
      <div className="flex flex-col md:flex-row mb-4">
        <div className="bg-blue-500 m-2 p-2 rounded-md font-bold flex items-center">
          <p className="mr-2">{`Puntuación de ${users[0]?.name}: `}</p>
          <span id='score'>{`${users[0]?.points}`}</span>
        </div>
        <div className="bg-green-500 m-2 p-2 rounded-md font-bold flex items-center">
          <p className="mr-2">{`Puntuación de ${users[1]?.name}: `}</p>
          <span id='score'>{`${users[1]?.points}`}</span>
        </div>
      </div>
  
      <Quiz
        handleBlueButtonClick={handleBlueButtonClick}
        handleGreenButtonClick={handleGreenButtonClick}
      />
</div>
  <div className="ml-[10%]">
        <div className="w-16 h-16 bg-blue-500 rounded-md mb-4" style={{
          marginLeft: `${blueSquarePosition * 100}px`,
          backgroundImage: `url(${users[0]?.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
        <div className="w-16 h-16 bg-green-500 rounded-md" style={{
          marginLeft: `${greenSquarePosition * 100}px`,
          backgroundImage: `url(${users[1]?.img})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}></div>
      </div>
      <Link to="/">
              <button className='relative flex items-center justify-center overflow-hidden ml-[50%] py-2 mx-2 px-2 rounded-md mt-3 bg-red-800'>VOLVER AL INICIO</button>
            </Link>
    </div>
  );
  
};

export default GameBoard;
