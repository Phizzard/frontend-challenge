import { Routes, Route } from "react-router-dom";
import Root from "routes/Root";
import MoreInfo from "routes/MoreInfo";
import Confirmation from "routes/Confirmation";
import Success from "routes/Success";
import Error from "routes/Error";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Root />} />
        <Route path="/more-info" element={<MoreInfo />} />
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/success" element={<Success />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </div>
  );
}
