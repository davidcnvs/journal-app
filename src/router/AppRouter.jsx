import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Link } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { FirebaseApp, FirebaseAuth } from '../firebase/config';
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth);

  useEffect( () => {
    onAuthStateChanged(FirebaseAuth);
  }, [])
    
  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>
        {/* Login y Registro */}
        <Route path="/auth/*" element={<AuthRouter />} />

        {/* JornalApp */}
        <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}


