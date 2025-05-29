import { useState } from 'react';
import { TryNowForm } from './TryNowForm';

export const Footer = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);

  return (
    <section className="w-full  px-14 py-4 min-h-[70vh] bg-[#1f1d1a]   ">
      <div className="h-40 flex flex-col md:flex-row items-center justify-between  gap-4">
        <h1 className="md:text-4xl text-neutral-200 text-2xl mt-8 font-serif font-medium">Unlock professional class AI for you firm</h1>
        <button 
          onClick={() => setIsFormOpen(true)}
          className="bg-white text-black rounded-sm md:px-4 md:py-3 md:mt-8 text-sm  md:text-md px-2 py-2 hover:bg-transparent hover:text-white hover:border border-neutral-400 transition"
        >
          Request a Demo
        </button>
      </div>
      <div className="border-t-2  border-neutral-700  flex flex-col-reverse  pt-15 mt-6 md:mt-0  justify-between md:flex-row ">
        <div className="h-full flex flex-row md:flex-col items-start gap-30  justify-between w-full md:w-1/2 mt-12 md:mt-0">
          <p className="text-neutral-500 md:text-sm text-xs font-medium">Copyright &copy; 2025 Counsel AI Corporation. <br /> All rights reserved. <br /> Trackway</p>
        </div>
        <div className="grid grid-cols-2 items-center justify-center md:grid-cols-4  w-full md:w-1/3  gap-6">
          <ul className="flex flex-col  text-left  justify-between gap-4  text-sm font-medium">
            <li className="ext-white cursor-pointer text-neutral-500">Product</li>
            <li className="text-white cursor-pointer">Assistant</li>
            <li className="text-white cursor-pointer">Vault</li>
            <li className="text-white cursor-pointer">Knowledge</li>
            <li className="text-white cursor-pointer">Workflows</li>
          </ul>

          <ul className="flex flex-col  text-left justify-between gap-4 text-neutral-500 text-sm font-medium">
            <li className="hover:text-white cursor-pointer">Product</li>
            <li className="hover:text-white cursor-pointer">Assistant</li>
            <li className="hover:text-white cursor-pointer">Vault</li>
            <li className="hover:text-white cursor-pointer">Knowledge</li>
            <li className="hover:text-white cursor-pointer">Workflows</li>
          </ul>

          <ul className="flex flex-col  text-left justify-between gap-4 text-neutral-500 text-sm font-medium">
            <li className="hover:text-white cursor-pointer">Product</li>
            <li className="hover:text-white cursor-pointer">Assistant</li>
            <li className="hover:text-white cursor-pointer">Vault</li>
            <li className="hover:text-white cursor-pointer">Knowledge</li>
            <li className="hover:text-white cursor-pointer">Workflows</li>
          </ul>

          <ul className="flex flex-col  text-left justify-between gap-4 text-neutral-500 text-sm font-medium">
            <li className="hover:text-white cursor-pointer">Product</li>
            <li className="hover:text-white cursor-pointer">Assistant</li>
            <li className="hover:text-white cursor-pointer">Vault</li>
            <li className="hover:text-white cursor-pointer">Knowledge</li>
            <li className="hover:text-white cursor-pointer">Workflows</li>
          </ul>
        </div>
      </div>

      <TryNowForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </section>
  )
}
