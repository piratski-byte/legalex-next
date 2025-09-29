import React, { Fragment, ReactNode } from "react";
import { X } from "lucide-react";
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import clsx from "clsx";
import { IModal } from "./data/types";

const Modal = ({ children, isSize, isOpen, setIsOpen }: IModal) => {
  console.log(children);

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-[100] select-none"
          onClose={closeModal}
        >
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/50 backdrop-blur-[5px]" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel
                  className={clsx(
                    isSize ? "max-w-4xl" : "max-w-3xl",
                    "w-full  transform overflow-hidden rounded-lg bg-blue_dark/60 px-6 pb-6 text-left align-middle text-white shadow-xl transition-all"
                  )}
                >
                  <DialogTitle className="flex justify-end pb-3 pt-4">
                    <button
                      className="h-8 w-8 select-none opacity-75 hover:cursor-pointer hover:opacity-100 focus-visible:outline-none"
                      onClick={closeModal}
                    >
                      <X />
                    </button>
                  </DialogTitle>
                  {children}
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
