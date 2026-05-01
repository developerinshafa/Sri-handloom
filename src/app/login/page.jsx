import LoginForm from "./LoginForm";


export default function LoginPage() {
  return (
    <div className=" flex items-center justify-center bg-gray-200 p-5">
      {/* Card */}
      <div className="bg-white rounded-lg shadow-md px-8 py-5 w-full max-w-md">
        {/* Title */}
        <h1 className="text-3xl font-semibold text-center py-5">
          Login to Your Account
        </h1>
        
       <LoginForm/>

      </div>
    </div>
  );
}
