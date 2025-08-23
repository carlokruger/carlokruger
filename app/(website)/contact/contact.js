"use client";

import Container from "@/components/container";
import Navbar from "@/components/navbar";
import { useState } from "react";
import { useForm } from "react-hook-form";
import useWeb3Forms from "@web3forms/react";
import {
  MapPinIcon,
  EnvelopeIcon,
  PhoneIcon
} from "@heroicons/react/24/outline";
export default function Contact({ settings }) {
  return (
    <div>
      <Navbar {...settings} />
      <iframe src="/img/iframe.html" title="Embedded Content" width="100%" height="700px"></iframe>
      
      <div>
        
        
      </div>
    </div>
  );
}
