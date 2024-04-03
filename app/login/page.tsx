import Image from "next/image"

const Login = () => {
    return (
        <div className="flex justify-center items-center flex-row">
            <div className="w-2/4 flex justify-center items-center flex-row">
                Login
            </div>
            <div className="w-2/4 flex m-16 ">
                <Image src="/image-login.jpg" alt="Login image" width={500} height={500}/>
            </div>
        </div>
    )
}

export default Login