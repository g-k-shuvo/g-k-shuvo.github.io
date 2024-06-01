"use client";
import { ContactDataDocument, ContactProps } from "@/types/types";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { Image } from "next-sanity/image";

const Contact: React.FC<ContactProps> = ({ contactData }) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formValues.name) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
    }

    if (!formValues.email || !/\S+@\S+\.\S+/.test(formValues.email)) {
      setErrors((prev) => ({
        ...prev,
        email: "Email is required and must be valid",
      }));
    }

    if (!formValues.message) {
      setErrors((prev) => ({ ...prev, message: "Message is required" }));
    }

    if (formValues.name && formValues.email && formValues.message) {
      emailjs
        .send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID as string,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID as string,
          formValues,
          {
            publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
          }
        )
        .then(
          () => {
            window.alert("SUCCESS!");
            setFormValues({ name: "", email: "", message: "" });
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    }
  };

  return (
    <div className='w-9/10 mx-auto lg:w-[1024px]' id='contact'>
      <h3 className='text-lg md:text-xl font-bold text-left mt-12'>
        Get in Touch
      </h3>

      <div className=' w-[90%] mx-auto py-[140px]'>
        <div className='mb-[70px] sm:[120px] flex flex-col items-center gap-12 md:flex-row  justify-between'>
          <div className='flex gap-3 items-center'>
            <Image
              src={
                contactData.filter((data) => data.name === "Address")[0].icon
              }
              alt={
                contactData.filter((data) => data.name === "Address")[0].name
              }
              width={24}
              height={24}
            />
            <p className='m-0 text-sm sm:text-base'>
              {contactData.filter((data) => data.name === "Address")[0].value}{" "}
            </p>
          </div>
          <div className='block w-[60px] h-[2px] md:w-[2px] md:h-[32px] bg-secondaryColor'></div>
          <div className='flex gap-8'>
            {contactData
              .filter(
                (data: ContactDataDocument) =>
                  data.name !== "Address" && data.name !== "Email"
              )
              .map((data: ContactDataDocument, index: number) => (
                <a
                  key={index}
                  href={data.value}
                  target='_blank'
                  className='cursor-pointer'
                >
                  <Image
                    src={data.icon}
                    alt={data.name}
                    width={32}
                    height={32}
                    className='hover:filter hover:brightness-200 transition-all'
                  />
                </a>
              ))}
          </div>
        </div>

        <form onSubmit={sendEmail}>
          <div className='mb-[32px] flex flex-col md:flex-row md:justify-between gap-[24px] md:gap-[60px]'>
            <div className='w-full'>
              <input
                type='text'
                id='name'
                placeholder='Enter your name'
                name='name'
                value={formValues.name}
                onChange={handleInputChange}
                autoComplete='off'
                className='w-full p-3 bg-transparent text-sm md:text-base border-b border-b-secondaryColor focus:outline-0 focus:bg-transparent focus:border-teal-400 transition-border-color duration-300'
              />
              {errors.name && (
                <p className='mt-2 text-sm text-red-600'>{errors.name}</p>
              )}
            </div>

            <div className='w-full'>
              <input
                type='email'
                id='email'
                className='w-full p-3 bg-transparent  text-sm md:text-base border-b border-b-secondaryColor focus:outline-0 focus:border-teal-400 transition-border-color duration-300'
                placeholder='Enter your email'
                name='email'
                autoComplete='off'
                value={formValues.email}
                onChange={handleInputChange}
              />
              {errors.email && (
                <p className='mt-2 text-sm text-red-600'>{errors.email}</p>
              )}
            </div>
          </div>

          <div className='mb-[32px]'>
            <textarea
              id='message'
              placeholder='Enter your message...'
              name='message'
              value={formValues.message}
              onChange={handleInputChange}
              rows={4}
              className='w-full p-3 bg-transparent text-sm md:text-base border-b border-b-secondaryColor focus:outline-0 focus:border-teal-400 transition-border-color duration-300'
            />
            {errors.message && (
              <p className='mt-2 text-sm text-red-600'>{errors.message}</p>
            )}
          </div>
          <input
            className='inline-block px-6 py-3  text-sm md:text-base cursor-pointer border border-secondaryColor hover:bg-secondaryColor transition-all duration-300'
            type='submit'
            value='Send'
          />
        </form>
      </div>
    </div>
  );
};

export default Contact;
