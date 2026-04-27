"use client";

import Input from "@/components/ui/forms/Input";
import Label from "@/components/ui/forms/Label";
import { useForm } from "react-hook-form";
import FormError from "@/components/ui/forms/FormError";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";

const schema = z.object({
  email: z.email("Invalid email address"), 
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export default function LoginForm() {
  const { login } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: "onChange",    // important for isValid
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const response = await fetch('/api/login', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json', 
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const loginData = await response.json();

      if (response.ok) {
        login(loginData.user); // user must come from backend

        // alert(loginData.message || "Login successful");

        router.push("/dashboard"); // redirect
      } else {
        alert(loginData.error || "Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      alert("Failed to login user");
    }
  };

  return (
    <form className="space-y-2" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          placeholder="Enter your Email"
          {...register("email")}
        />
        <FormError message={errors.email?.message} />
      </div>

      <div>
        <Label htmlFor="password">Password</Label>
        <Input
          id="password"
          type="password"
          placeholder="Enter your Password"
          {...register("password")}
        />
        <FormError message={errors.password?.message} />
      </div>

      <div className="text-right">
        <a href="#" className="text-red-400 hover:text-red-600 text-sm">
          Forgot Password?
        </a>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className={`w-full py-2 rounded-md text-white font-semibold duration-300
        ${
          isValid
            ? "bg-blue-500 hover:bg-blue-700 cursor-pointer"
            : "bg-blue-500 opacity-50 cursor-not-allowed"
        }`}
      >
        LOG IN
      </button>

      <div className="p-1 text-center text-sm">
        <a href="/register" className="text-indigo-500 hover:text-indigo-700">
          Don&apos;t have an account? Register here
        </a>
      </div>
    </form>
  );
}