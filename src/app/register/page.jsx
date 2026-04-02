"use client";

export default function RegisterPage() {
  return (
    <div className="bg-blue-950 py-10 px-50 items-center justify-center">
      
      <div className="bg-gray-200 p-8 rounded-xl shadow-xl text-center">
        
        <h1 className="text-3xl font-semibold mb-4">Register Page</h1>

        <div className="space-y-4 text-left text-xl">
          <label htmlFor="">Full Name</label>
          <input type="text" placeholder="" className="w-full p-3 bg-gray-300 rounded-md" />

          <label htmlFor="">Email</label>
          <input type="email" placeholder="" className="w-full p-3 bg-gray-300 rounded-md" />

          <label htmlFor="">Phone</label>
          <input type="number" placeholder="" className="w-full p-3 bg-gray-300 rounded-md" />

          <label htmlFor="">Address</label>
          <input type="text" placeholder="" className="w-full p-3 bg-gray-300 rounded-md" />

          <label htmlFor="">Password</label>
          <input type="password" placeholder="" className="w-full p-3 bg-gray-300 rounded-md" />

          <label htmlFor="">Confirm Password</label>
          <input type="password" placeholder="" className="w-full p-3 bg-gray-300 rounded-md" />

          <button
           onClick={() => router.push("/register")}
           className="w-full bg-green-700 text-white py-3 rounded-md cursor-pointer">
            REGISTER
          </button>
        </div>

      </div>
    </div>
  );
}