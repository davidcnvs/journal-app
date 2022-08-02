import { onAuthStateChanged } from 'firebase/auth';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route, Link } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { FirebaseApp, FirebaseAuth } from '../firebase/config';
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { login, logout } from '../store/auth';
import { CheckingAuth } from "../ui/";

export const AppRouter = () => {

  const {status} = useSelector(state => state.auth);
  const dispatch = useDispatch();

  useEffect( () => {
    onAuthStateChanged(FirebaseAuth, async(user) => {
      if(!user) return dispatch(logout());
      const {uid, email, displayName, photoURL} = user;
      dispatch(login({uid, email, displayName, photoURL}));
    });
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


