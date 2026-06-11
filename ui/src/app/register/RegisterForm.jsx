"use client";

import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import Label from "../../components/ui/forms/Label";
import Input from "../../components/ui/forms/Input";
import FormError from "../../components/ui/forms/FormError";
import Link from "next/link";

const schema = z
  .object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.email("Invalid email address"),
    password: z.string().min(5, "Password must be at least 5 characters"),
    confirmPassword: z.string().min(5, "Please confirm your password"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
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
    mode: "onChange",
  });

  async function submitRegister(formData) {
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(formData),
      });

      const text = await response.text();
      let data;
      try {
        data = JSON.parse(text);
      } catch {
        data = { error: text };
      }
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

        <form onSubmit={handleSubmit(submitRegister)}>
          <div>
            <Label htmlFor="name" required>
              Name
            </Label>
            <Input id="name" {...register("name")} />
            <FormError message={errors.name?.message} />
          </div>

          <div>
            <Label htmlFor="email" required>
              Email
            </Label>
            <Input id="email" type="email" {...register("email")} />
            <FormError message={errors.email?.message} />
          </div>

          <div>
            <Label htmlFor="password" required>
              Password
            </Label>
            <Input id="password" type="password" {...register("password")} />
            <FormError message={errors.password?.message} />
          </div>

          <div>
            <Label htmlFor="confirmPassword" required>
              Confirm Password
            </Label>
            <Input
              id="confirmPassword"
              type="password"
              {...register("confirmPassword")}
            />
            <FormError message={errors.confirmPassword?.message} />
          </div>

          <div className="flex justify-between gap-5 py-2">
            {/* FIXED BUTTON */}
            <button
              type="button"
              onClick={() => reset()}
              className="border p-1 px-4 rounded-md"
            >
              Cancel
            </button>

            <button
              type="submit"
              disabled={!isValid}
              className={`bg-blue-500 text-white px-6 py-1 rounded cursor-pointer ${
                !isValid && "opacity-50"
              }`}
            >
              REGISTER
            </button>
          </div>
          <div className="p-1 text-center text-sm">
            <Link
              href="/login"
              className="text-indigo-500 hover:text-indigo-700"
            >
              Don&apos;t have an account? Login here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
