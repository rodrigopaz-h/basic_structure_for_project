import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const UserPage = () => {
  return (
    <div>
      <Header />
      <main>
        <h2>Usuarios</h2>
      </main>
      <Footer />
    </div>
  );
};

export default UserPage;
// En este archivo se exporta 'UserPage' al archivo 'App.js' en la carpeta 'src'
