"use client";

import { useForm } from "react-hook-form";
import Input from "@/components/ui/forms/Input";
import Label from "@/components/ui/forms/Label";
import FormError from "@/components/ui/forms/FormError";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  name: z.string().min(3, "Name must be at least 3 characters "),
  email: z.email("Invalid email address"),
  password: z.string().min(5, "Password must be at least 5 characters"),
  confirmPassword: z.string().min(5, "Please confirm your password"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    resolver: zodResolver(schema),
  });

  async function submitLogin(fromData) {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fromData),
      });

      const data = await response.json();
      alert(data.message || data.error);

      if (response.ok) {
        reset();
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  }

  return (
    <div className="bg-gray-200 p-4">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-lg mx-auto">
        <h1 className="text-2xl text-center font-semibold mb-4">
          Register for an Account
        </h1>
        <form onSubmit={handleSubmit(submitLogin)}>
          <div>
            <Label htmlFor="name" required>
              Name
            </Label>
            <Input
              id="name"
              type="text"
              placeholder="Enter your Name"
              {...register("name")}
            />
            <FormError message={errors.name?.message} />
          </div>

          <div>
            <Label htmlFor="email" required>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              placeholder="Enter your Email "
              {...register("email")}
            />
            <FormError message={errors.email?.message} />
          </div>

          <div>
            <Label htmlFor="password" required>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your Password"
              {...register("password")}
            />
            <FormError message={errors.password?.message} />
          </div>

          <div>
            <Label htmlFor="confirmPassword" required>
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Password again"
              {...register("confirmPassword")}
            />
            <FormError message={errors.confirmPassword?.message} />
          </div>

          <div className="flex justify-between items-center gap-5 py-2">
            <button
              type="submit"
              className="border border-gray-200 p-1 px-4 rounded-md hover:bg-gray-300 transition duration-300 cursor-pointer"
              onClick={() => {
                reset();
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              className={
              ` bg-blue-500 hover:bg-blue-600 text-white font-medium px-8 py-1 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer` +
              (isValid ? "" : " opacity-50 cursor-not-allowed")
            }
            
              disabled={!isValid}
            >
              REGISTER
            </button>
          </div>
          {/* Register */}
          <div className="text-center text-sm">
            <a href="/login" className="text-indigo-500 hover:text-indigo-700 ">
              Don&apos;t have an account? Login here
            </a>
          </div>
        </form>
      </div>
    </div>
  );
}
