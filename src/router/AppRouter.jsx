import { Routes, Route, Navigate } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { useCheckAuth } from '../hooks';
import { JournalRoutes } from "../journal/routes/JournalRoutes";
import { CheckingAuth } from "../ui/";

export const AppRouter = () => {

  const status = useCheckAuth();
    
  if(status === 'checking') {
    return <CheckingAuth />
  }

  return (
    <Routes>

        {
          (status === 'authenticated')
          ? <Route path="/*" element={<JournalRoutes />} />
          : <Route path="/auth/*" element={<AuthRouter />} />
        }

        <Route path="/*" element={<Navigate to={'/auth/login'} />} />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={<AuthRouter />} /> */}

        {/* JornalApp */}
        {/* <Route path="/*" element={<JournalRoutes />} /> */}
    </Routes>
  )
}


