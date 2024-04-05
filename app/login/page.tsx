import Image from "next/image"

const Login = () => {
    return (
        <div className="flex h-full justify-center items-center flex-row bg-gray-700">
            <div className="w-2/4 flex justify-center items-center flex-row bg-red-500">
                Login
            </div>
            <div className="w-2/4 flex m-16 ">
                <Image src="/image-login.jpg" alt="Login image" width={500} height={500} layout="responsive"/>
            </div>
        </div>
    )
}

export default Login