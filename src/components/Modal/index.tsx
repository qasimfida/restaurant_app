import React from 'react';

interface ModalProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Modal = ({ isOpen, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center w-full h-full bg-gray-700 bg-opacity-75 rounded-lg">
          <div className="z-20 w-full max-w-sm sm:max-w-sm md:max-w-3xl p-10 mx-auto bg-dark rounded-md shadow-lg">
            {children}
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
