import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/outline";
import { XIcon } from "@heroicons/react/solid";

export function Notification({ show, as = Fragment, title, text, icon, onClose, className, ...props }) {
  return (
    <Transition
      show={show}
      as={as}
      enter="transform ease-out duration-300 transition"
      enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
      enterTo="translate-y-0 opacity-100 sm:translate-x-0"
      leave="transition ease-in duration-100"
      leaveFrom="opacity-100"
      leaveTo="opacity-0"
      {...props}
    >
      <div
        className={`border-l-[6px] border-l-indigo-500 max-w-sm w-full bg-white shadow-lg rounded-lg pointer-events-auto ring-1 ring-black ring-opacity-5 overflow-hidden ${className}`}
      >
        <div className="p-4">
          <div className="flex items-center">
            {icon && <div className="flex-shrink-0">{icon}</div>}

            <div className="ml-3 w-0 flex-1 pt-0.5">
              {title && <p className="text-base font-medium text-gray-900">{title}</p>}
              {text && <p className="mt-1 text-base text-gray-500">{text}</p>}
            </div>
            {onClose && (
              <div className="ml-4 flex-shrink-0 flex">
                <button
                  className="bg-white rounded-md inline-flex text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  onClick={onClose}
                >
                  <span className="sr-only">Close</span>
                  <XIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </Transition>
  );
}
