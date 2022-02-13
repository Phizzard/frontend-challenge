import { Routes, Route } from "react-router-dom";
import Root from "routes/Root";
import MoreInfo from "routes/MoreInfo";
import Confirmation from "routes/Confirmation";
import Success from "routes/Success";
import Error from "routes/Error";
import { Toggle } from "components/Toggle";
import { useDarkMode } from "hooks/useDarkMode";

export default function App() {
  document.body.className = "dark:bg-slate-900";

  const { isDark, toggleTheme } = useDarkMode();

  return (
    <div>
      <div className="absolute top-3 right-3">
        <Toggle enabled={isDark} onChange={toggleTheme} />
      </div>
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
