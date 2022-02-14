import { Routes, Route } from "react-router-dom";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
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
      <div className="flex justify-end p-4">
        <Toggle
          enabled={isDark}
          onChange={toggleTheme}
          enabledIcon={<MoonIcon className="text-yellow-300" />}
          disabledIcon={<SunIcon className="text-yellow-300" />}
        />
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
