"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const variants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 50 },
};

const FAQsection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const FAQs = [
    {
      question: "¿Qué es un archivo temporal?",
      answer:
        "Un archivo temporal es un archivo que se sube a un servidor y se elimina automáticamente después de un tiempo determinado. En nuestro caso, los archivos se eliminan después de 24 horas de haberse subido.",
    },
    {
      question: "¿Qué tipo de archivos puedo subir?",
      answer:
        "Puedes subir cualquier tipo de archivo, desde imágenes, videos, documentos, etc. Siempre y cuando el archivo no exceda los 100MB de tamaño.",
    },
    {
      question: "¿Cómo puedo subir un archivo?",
      answer:
        "Para subir un archivo, simplemente haz click en el botón de &quot;Subir archivo&quot; en la página principal. Luego selecciona el archivo que deseas subir y listo.",
    },
    {
      question: "¿Cómo puedo descargar un archivo?",
      answer:
        "Para descargar un archivo, simplemente haz click en el enlace que te fue proporcionado. Luego, el archivo se descargará automáticamente a tu dispositivo.",
    },
    {
      question: "¿Cómo puedo eliminar un archivo?",
      answer:
        "Para eliminar un archivo, simplemente haz click en el botón de &quot;Eliminar archivo&quot; en la página principal. Luego, introduce el código de eliminación que te fue proporcionado al subir el archivo y listo.",
    },
  ];

  return (
    <AnimatePresence>
      <div className="mx-auto mt-16 max-w-3xl">
        <div className="w-full py-6">
          {FAQs.map((faq, index) => (
            <div key={index} className="">
              <button
                className="flex w-full items-center justify-between  px-4 py-2 focus:outline-none"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="text-md my-3 font-medium text-white sm:text-lg">
                  {faq.question}
                </span>
                <svg
                  className={`h-4 w-4 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                >
                  <path fill="none" d="M0 0h24v24H0z" />
                  <path
                    fill="currentColor"
                    d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <motion.div
                  variants={variants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  transition={{ duration: 0.2 }}
                  key="text"
                  className="my-2 px-5 text-white sm:px-8"
                >
                  <p className="text-md sm:text-lg">{faq.answer}</p>
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default FAQsection;
