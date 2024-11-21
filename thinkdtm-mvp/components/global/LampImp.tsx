"use client";
import React from "react";
import { motion } from "framer-motion";
import { LampContainer } from "../ui/lamp";
import { RegisterForm } from "./consult-us";

export function LampDemo() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-96 bg-gradient-to-br from-slate-300 to-slate-500 py-4 bg-clip-text  text-2xl font-medium tracking-tight text-transparent md:text-5xl"
      >
        <div>
            <div className="text-center">
            Contact Us for Consultation <br />
            it's Free!

            </div>
            <RegisterForm />
        </div>
       
       

      </motion.h1>
    </LampContainer>
  );
}
