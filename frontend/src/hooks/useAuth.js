import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
// En este archivo se exporta 'useAuth' a cualquier archivo que necesite el hook de autenticación
