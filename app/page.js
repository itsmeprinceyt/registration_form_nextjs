"use client";
import { useForm } from 'react-hook-form';
import { useState } from "react";
import Image from 'next/image';

export default function RegistrationForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [passwordMatch, setPasswordMatch] = useState(true);

  const onSubmit = (data) => {
    if (data.password === data.confirmpassword) {
      setPasswordMatch(true);
      console.log(data);
    } else {
      setPasswordMatch(false);
    }
  };

  return (
    <div className="rounded-md bg-gradient-to-r from-stone-800 to-stone-900 flex flex-col justify-center gap-2 p-2 mt-5 mb-5 items-center w-4/5 h-[700px] shadow-2xl shadow-yellow-800/30 sm:flex-row sm:w-3/5 sm:h-[500px]">
      <div className="relative rounded-md  w-full h-full sm:1/3">
        <Image
          className="rounded-md object-center"
          src="/sunset.jpg"
          fill={true}
          objectFit='cover'
          alt="Side-Image"
        />
      </div>
      <div className="border-2 border-yellow-500 shadow-md shadow-yellow-300/10 rounded-md flex flex-col w-full h-full p-2">
        {/*<div class=" p-2 flex justify-center items-center text-xl font-bold text-white text-shadow-yellow" >Registration Form</div>*/}
        <h1
          class="font-extrabold text-transparent py-2 flex justify-center items-center text-xl bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-400 text-shadow-yellow "
        >
          Registration Form
        </h1>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-2 gap-2 h-full p-1">

          {/*Entering Full Name*/}
          <div className="relative  flex flex-col justify-center items-start gap-1">
            <p className="text-xs text-yellow-500 text-shadow-yellow">Enter your Full Name</p>
            <input
              className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="text"
              {...register('fullname', { required: true, maxLength: 25 })}
              placeholder="Name"
            />
            {errors.fullname && <p className="text-red-600 text-xs">You need to fill this!</p>}
          </div>

          {/*Entering username*/}
          <div className="relative  flex flex-col justify-center items-start gap-1">
            <p className="text-xs text-yellow-500 text-shadow-yellow">Enter your Username</p>
            <input
              className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="text"
              {...register('username', { required: true, maxLength: 25 })}
              placeholder="Username"
            />
            {errors.username && <p className="text-red-600 text-xs">Choose a username!</p>}
          </div>

          {/*Entering Email Address*/}
          <div className="relative  flex flex-col justify-center items-start gap-1 col-span-2">
            <p className="text-xs text-yellow-500 text-shadow-yellow">Enter your Email</p>
            <input
              className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="email"
              {...register('email', { required: true })}
              placeholder="Email"
            />
            {errors.email && <p className="text-red-600 text-xs">Email is required!</p>}
          </div>

          {/*Entering Date Of Birth*/}
          <div className="grid grid-cols-3 gap-1 justify-center items-center col-span-2">

            {/*DATE*/}
            <div className="relative  flex flex-col justify-center items-center gap-1">
              <p className="text-xs text-yellow-500 text-shadow-yellow">DATE</p>
              <input
                className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
                type="number"
                {...register("dob.date", { required: true, min: 1, max: 31, maxLength: 2 })}
                placeholder="DD"
              />
              {errors.dob && <p className="text-red-600 text-xs">Invalid Date!</p>}
            </div>

            {/*MONTH*/}
            <div className="relative  flex flex-col justify-center items-center gap-1">
              <p className="text-xs text-yellow-500 text-shadow-yellow">MONTH</p>
              <input
                className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
                type="number"
                {...register("dob.month", { required: true, min: 1, max: 12, maxLength: 2 })}
                placeholder="MM"
              />
              {errors.dob && <p className="text-red-600 text-xs">Invalid Month!</p>}
            </div>

            {/*YEAR*/}
            <div className="relative  flex flex-col justify-center items-center gap-1">
              <p className="text-xs text-yellow-500 text-shadow-yellow">YEAR</p>
              <input
                className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
                type="number"
                {...register("dob.year", { required: true, min: 4, maxLength: 4 })}
                placeholder="YYYY"
              />
              {errors.dob && <p className="text-red-600 text-xs">Invalid Year!</p>}
            </div>
          </div>

          {/*Password*/}
          <div className="relative  flex flex-col justify-center items-start gap-1">
            <p className="text-xs text-yellow-500 text-shadow-yellow">Create Password</p>
            <input
              className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="password"
              {...register("password", {
                required: "Create the password!",
                minLength: {
                  value: 8,
                  message: "Minimum Length:8",
                },
                maxLength: {
                  value: 18,
                  message: "Maximum Length:18",
                },
              })}
              placeholder="Password"
            />
            {errors.password && <p className="text-red-600 text-xs">{errors.password.message}</p>}
            {!passwordMatch && <p className="text-red-600 text-xs">Passwords do not match!</p>}
          </div>

          {/*Confirm Password*/}
          <div className="relative  flex flex-col justify-center items-start gap-1">
            <p className="text-xs text-yellow-500 text-shadow-yellow">Confirm Password</p>
            <input
              className="w-full rounded-sm py-2 text-xs placeholder:text-xs px-2 outline-none"
              type="password"
              {...register("confirmpassword", {
                required: "Confirm your password!",
                minLength: {
                  value: 8,
                  message: "Minimum Length:8",
                },
                maxLength: {
                  value: 18,
                  message: "Confirm your password!",
                },
              })}
              placeholder="Confirm Password"
            />
            {errors.confirmpassword && <p className="text-red-600 text-xs">{errors.confirmpassword.message}</p>}
            {!passwordMatch && <p className="text-red-600 text-xs">Passwords do not match!</p>}
          </div>
          <div className="flex justify-center items col-span-2 mt-3">
            <button type="submit" class=" brightness-150 group hover:shadow-lg hover:shadow-yellow-700/60 transition ease-in-out rounded-md custom-padding bg-gradient-to-br from-yellow-800 via-yellow-600 to-yellow-800 hover:from-yellow-700/40 hover:via-yellow-800 hover:to-yellow-600">
              <div class="py-1 px-8 backdrop-blur-xl bg-stone-950 rounded-md font-semibold w-full h-full flex justify-center items-center">
                <div class=" group-hover:text-yellow-700 text-yellow-600">
                  Register Now
                </div>
              </div>
            </button>
          </div>
        </form>
        <div className="h-[150px] p-2 flex items-center text-[9px] text-center text-white">
          By accessing the Site, you agree to our Terms and Conditions. If you do not agree, please discontinue use immediately.
        </div>
      </div>
    </div>
  );
}
