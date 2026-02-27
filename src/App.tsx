import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Home from "./pages/Home";
import CityPage from "./pages/CityPage";

function CityRoute() {
  const { cidade } = useParams();
  return <CityPage cidade={cidade ?? "São Paulo"} />;
}

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:cidade" element={<CityRoute />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
