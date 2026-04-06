"use client";

import { useRouter } from "next/navigation"

export default function DashboardPage(){
const router = useRouter();

const back = () => {
    router.push('/admin');
}

    return(
        <div className="bg-gray-200 py-10 px-10">
           <div className=" bg-white p-4 space-y-5">
             <h1 className="text-xl font-bold ">
                Welcome to Dashboard Page
            </h1>
            <button
            onClick={back}
             className="bg-black rounded text-white px-4 py-2">Back</button>
            <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et harum earum praesentium quas amet deserunt temporibus repellat voluptate quos quo, deleniti aperiam sint illum consequatur tempore? Qui nostrum sit iure.</p>
            </div>
           </div>
        </div>
    )
}