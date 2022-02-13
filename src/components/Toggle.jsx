import { Switch } from "@headlessui/react";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import classNames from "classnames";

export const Toggle = ({ enabled, onChange, startLabel, endLabel }) => {
  return (
    <Switch.Group as="div" className="flex items-center">
      {startLabel && (
        <Switch.Label as="span" className="mr-3">
          <span className="text-sm font-medium text-gray-900">{startLabel}</span>
        </Switch.Label>
      )}
      <Switch
        checked={enabled}
        onChange={onChange}
        className={classNames(
          enabled ? "bg-cyan-600" : "bg-gray-200",
          "relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
        )}
      >
        <span
          aria-hidden="true"
          className={classNames(
            enabled ? "translate-x-5" : "translate-x-0",
            "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200"
          )}
        >
          <span
            className={classNames(
              enabled ? "opacity-0 ease-out duration-100" : "opacity-100 ease-in duration-200",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <SunIcon className="text-yellow-300" />
          </span>
          <span
            className={classNames(
              enabled ? "opacity-100 ease-in duration-200" : "opacity-0 ease-out duration-100",
              "absolute inset-0 h-full w-full flex items-center justify-center transition-opacity"
            )}
            aria-hidden="true"
          >
            <MoonIcon className="text-yellow-300" />
          </span>
        </span>
      </Switch>
      {endLabel && (
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-gray-900">{endLabel}</span>
        </Switch.Label>
      )}
    </Switch.Group>
  );
};
