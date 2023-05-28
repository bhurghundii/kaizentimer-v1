"use client";

import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { RocketLaunchIcon } from "@heroicons/react/24/outline";

export default function EditTimerModal( { id, editTimer } : {id : number, editTimer : any}) {
  const [open, setOpen] = useState(false);
  const cancelButtonRef = useRef(null);

  const [timerName, setNewTimerName] = useState<string>("My new timer");
  const [timerDuration, setNewTimerDuration] = useState<number>(0);

  function editTimerById(id : number) {
    editTimer(id, timerName, timerDuration)
    setOpen(false);
  };

  function handleNameChange (event: { target: { value: any } }) {
    setNewTimerName(event.target.value);
  };

  function handleDurationChange (event: { target: { value: any } }) {
    setNewTimerDuration(event.target.value);
  };

  return (
    <div>
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          initialFocus={cancelButtonRef}
          onClose={setOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          <div className="fixed inset-0 z-10 ">
            <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                    <div>
                      <div className="sm:flex sm:items-start">
                        <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                          <RocketLaunchIcon
                            className="h-6 w-6 text-red-600"
                            aria-hidden="true"
                          />
                        </div>
                        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                          <Dialog.Title
                            as="h3"
                            className="text-base font-semibold leading-6 text-gray-900"
                          >
                            Edit a timer
                          </Dialog.Title>
                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              What do you want to call this timer
                            </p>
                            <div>
                              <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                  type="text"
                                  name="price"
                                  id="price"
                                  onChange={handleNameChange}
                                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="My new timer ✨"
                                />
                              </div>
                            </div>
                          </div>

                          <div className="mt-2">
                            <p className="text-sm text-gray-500">
                              How long should timer run for
                            </p>
                            <div>
                              <div className="relative mt-2 rounded-md shadow-sm">
                                <input
                                  type="text"
                                  name="price"
                                  id="price"
                                  onChange={handleDurationChange}
                                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  placeholder="25"
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                  <button
                      type="button"
                      className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                      onClick={() => editTimerById(id)}
                    >
                      Edit!
                    </button>

                    <br />

                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => setOpen(false)}
                      ref={cancelButtonRef}
                    >
                      Cancel
                    </button>

                    <button
                      type="button"
                      className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-red-900 shadow-sm ring-1 ring-inset ring-red-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                      onClick={() => editTimerById(id)}
                    >
                     Delete ⚠️
                    </button>

                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>

      {!open && (
        <div className="rounded-full bg-white h-8 flex items-center">
          <button
            onClick={() => setOpen(true)}
            className="ml-auto bg-red-500 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <RocketLaunchIcon
              className="h-6 w-6 white-red-600 mr-3"
              aria-hidden="true"
            />
            <span className="mr-3"> &nbsp; &nbsp; Edit! </span>
          </button>
        </div>
      )}
    </div>
  );
}
