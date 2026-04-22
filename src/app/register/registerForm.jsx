"use client";

import { useForm } from "react-hook-form";
import Input from "@/components/ui/forms/Input";
import Label from "@/components/ui/forms/Label";
import FormError from "@/components/ui/forms/FormError";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

const schema = z.object({
  name: z.string().min(5, "Name must be at least 5 characters long"),
  email: z.string().email("Invalid email address"),
  password: z
    .string()
    .min(5, "Password must be at least 5 characters long")
    .max(100),
  confirmPassword: z
    .string()
    .min(5, "Please confirm your password")
    .refine((value) => {
      const password = schema.shape.password.safeParse("");
      return password.success && value === password.data;
    }, "Passwords do not match"),
});

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
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
        // Clear form fields after successful registration
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
            <FormError error={errors.name?.message} />
          </div>

          <div>
            <Label htmlFor="email" required>
              Email
            </Label>
            <Input
              id="email"
              type="email"
              className="w-full p-1 px-3 bg-gray-100 rounded-md"
              placeholder="Enter your Email "
              {...register("email")}
            />
            <FormError error={errors.email?.message} />
          </div>

          <div>
            <Label htmlFor="password" required>
              Password
            </Label>
            <Input
              id="password"
              type="password"
              placeholder="Enter your Password"
              value={password}
              className="w-full p-1 px-3 bg-gray-100 rounded-md"
              {...register("password")}
            />
            <FormError error={errors.password?.message} />
          </div>

          <div>
            <Label htmlFor="confirmPassword" required>
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              placeholder="Password again"
              className="w-full p-1 px-3 bg-gray-100 rounded-md"
              {...register("confirmPassword")}
            />
            <FormError error={errors.confirmPassword?.message} />
          </div>

          <div className="flex justify-between items-center gap-5">
            <button
              type="button"
              className="border border-gray-200 p-1 px-4 rounded-md hover:bg-gray-300 transition duration-300 cursor-pointer"
              onClick={() => {
                setName("");
                setEmail("");
                setPassword("");
                setConfirmPassword("");
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isValid}
              className={`px-8 py-1 rounded-md text-white
                ${
                  password !== confirmPassword
                    ? "bg-gray-400 cursor-not-allowed"
                    : "bg-green-700 cursor-pointer hover:bg-green-800"
                }
            `}
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
