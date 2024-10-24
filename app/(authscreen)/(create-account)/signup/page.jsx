'use client';
import { Button } from '@nextui-org/button';
import { Input } from '@nextui-org/input';
import React from 'react';

const page = () => {
  return (
    <>
      <div className="self-start mt-12 text-6xl uppercase max-md:mt-10 max-md:max-w-full max-md:text-4xl font-heading mb-8">
        Create an account
      </div>
      <Input
        size="lg"
        variant="bordered"
        label="Full Name"
        type="name"
        radius="sm"
        className="mb-5"
        classNames={{
          inputWrapper: 'border border-brand-dark'
        }}
      />
      <Input
        size="lg"
        variant="bordered"
        label="Email"
        type="email"
        radius="sm"
        className="mb-5"
        classNames={{
          inputWrapper: 'border border-brand-dark'
        }}
      />
      <Input
        size="lg"
        variant="bordered"
        label="Password"
        type="password"
        radius="sm"
        className="mb-10"
        classNames={{
          inputWrapper: 'border border-brand-dark'
        }}
      />
      <Button
        size="lg"
        className="bg-brand-lemon-yellow py-7 border border-brand-dark w-full font-bold"
        variant="solid"
      >
        Submit
      </Button>

      <div className="flex gap-1.5 items-center my-6 whitespace-nowrap">
        <div className="shrink-0 self-stretch my-auto w-2 grow h-px border border-solid border-zinc-800" />
        <p className="self-stretch">Or</p>
        <div className="shrink-0 self-stretch my-auto w-2 grow h-px border border-solid border-zinc-800" />
      </div>

      <Button
        size="lg"
        className="bg-white py-7 border border-brand-dark w-full font-bold"
        variant="solid"
      >
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/4afcf1048ae3f4852061b80f8ea5990ac5796d08b00ed5201f740025245bf9e8?placeholderIfAbsent=true&apiKey=766be46e9945400fb0d82367510acded"
          className="object-contain w-5 aspect-square"
          alt="lazy"
        />
        Continue with Google
      </Button>
      <div className="flex gap-1 self-center mt-12 max-w-full justify-center text-dark">
        <div className="opacity-70">Already have an account? </div>
        <div>Sign In</div>
      </div>
    </>
  );
};

export default page;
