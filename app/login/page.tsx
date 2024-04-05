import Image from "next/image"

const Login = () => {
    return (
        <div className="flex h-screen justify-center items-center flex-row ">
            <div className="w-2/4 flex justify-center items-center flex-row ">
                <nav>
                    <Image src="/login.png" alt="Logo" width={50} height={50}/>
                    <p>Jardim Saúde</p>
                </nav>
            </div>
            <div className="w-2/4 flex m-16 ">
            </div>
        </div>
    )
}

export default Login