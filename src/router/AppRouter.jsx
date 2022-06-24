import { Routes, Route, Link } from "react-router-dom";
import { AuthRouter } from "../auth/routes/AuthRouter";
import { JournalRoutes } from "../journal/routes/JournalRoutes";

export const AppRouter = () => {
  return (
    <Routes>
        {/* Login y Registro */}
        <Route path="/auth/*" element={<AuthRouter />} />

        {/* JornalApp */}
        <Route path="/*" element={<JournalRoutes />} />
    </Routes>
  )
}


