import React from 'react';
import './App.css';
import IdCard from './components/Idcard'
import LikeButton from './components/LikeButton'

function App() {
  return (
    <div>

      <IdCard
        lastName='Doe'
        firstName='John'
        gender='male'
        height={178}
        
        picture="https://randomuser.me/api/portraits/men/44.jpg"
      />

      <IdCard
        lastName='Delores '
        firstName='Obrien'
        gender='female'
        height={172}
        
        picture="https://randomuser.me/api/portraits/women/44.jpg"
      />

      <LikeButton />
      

    </div>

  
  );
}

export default App;
