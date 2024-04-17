"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Menu from "./Menu";
import ButtonMobile from "./ButtonMobile";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <header>
      <nav className="mt-3 flex h-12 w-full items-center justify-between px-2 sm:px-12">
        <a href="/" className="z-10 text-xl font-bold uppercase">
          Temporal files
        </a>

        <ButtonMobile open={open} onClick={toggleMenu} />

        <Menu className="hidden gap-5 sm:flex" />

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: -600 }}
              animate={{ x: 0 }}
              exit={{ x: -600 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex items-center justify-center bg-black opacity-90"
              key="menu-mobile"
            >
              <Menu className="flex flex-col" />
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
};

export default Header;
