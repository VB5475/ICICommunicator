import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Logo from '../assets/images/logo.PNG'
import TypedText from '@/components/TypedText'
import '../App.css'
import { User } from 'lucide-react'

const Loginpage = ({ setShowHome }) => {
    const [showPassword, setShowPassword] = useState(false)
    const [data, setData] = useState({
        id: '',
        password: '',
    });

    const [array, setArray] = useState([])




    const SaveData = () => {
        console.log(data)
        console.log(data.id === "devenshah" && data.password === "d123456")
        if (data.id.trim() === "devenshah" && data.password === "d123456") {
            console.log("i came here:")
            localStorage.setItem("loginData", JSON.stringify(data))
            setShowHome(true)
        }
    }

    return (
        <>
            <div className='h-screen md:w-screen flex-row md:flex ' >

                <div className='sm:h-[50%] md:h-full sm:w-1/5 md:w-3/5 lg:w-3/5  '>
                    {/* Logo  */}
                    <div className='w-full h-[10%] flex ml-5 justify-start items-center mb-2 md:mb-[-70px] lg:mb-[-40px]'>
                        <img src={Logo} alt="logo" className='h-20 w-15' />
                        <span className='text-4xl text-blue-500 font-bold'>Communicator</span>
                    </div>
                    {/* writeing section */}
                    <div className='flex flex-col h-[90%] w-full justify-center items-center mb-10 md:mb-0  '>
                        <div>
                            <img src={Logo} alt="logo" className='h-25 w-20 ' />
                        </div>
                        <div className='flex justify-center items-center'>
                            <span className='font-bold text-3xl text-blue-500'> Indian Chemical Industries </span>
                        </div>
                        <div>
                            <TypedText />
                        </div>
                    </div>
                </div>

                <div className='sm:h-[70%] sm-w-[100%] md:h-full  sm:w-4/5 md:w-2/5 lg:w-2/5 flex justify-center items-center sm:mt-50 md:mt-0 '>
                    {/* Login Card */}
                    <form action="#" onSubmit={SaveData}>
                        <Card className=" w-90 md:w-70 lg:w-70 py-0 md:py-[15px] h-100  md:h-100 flex justify-center backdrop-blur-sm bg-slate-100 border-2 border-white shadow-lg shadow-gray-400 rounded-md ml-4 md:ml-[-8px] lg:pr-0">
                            <CardHeader>
                                <CardTitle className='text-blue-500 text-lg md:text-xl'>Login Form </CardTitle>
                            </CardHeader>
                            <CardContent className='flex flex-col justify-center items-center gap-6'>
                                <div className="w-full">
                                    <Label htmlFor="userId" className="flex justify-start items-center gap-2 mb-2 text-md md:text-lg">
                                        <User size={20} className='text-blue-500' /> User ID
                                    </Label>
                                    <Input id="userId" className='text-base' placeholder="Enter your ID" value={data.id} onChange={(e) => setData({ ...data, id: e.target.value })} />
                                </div>
                                <div className="w-full">
                                    <Label htmlFor="password" className="flex justify-start items-center gap-2 mb-2 text-md md:text-lg">
                                        <span> 🔒</span> Password
                                    </Label>
                                    <Input type={showPassword ? "text" : "password"} id="password" className='text-base' placeholder="Enter your password" value={data.password} onChange={(e) => setData({ ...data, password: e.target.value })} />
                                    <div className='mt-4 w-full flex justify-start items-center'>
                                        <Checkbox className='border-2 border-black'
                                            id="show-password"
                                            checked={showPassword}
                                            onCheckedChange={() => setShowPassword(!showPassword)}
                                        />
                                        <Label htmlFor="" className='ml-3 text-md'>Show Password</Label>
                                    </div>
                                </div>

                                <div className='w-full flex gap-4'>
                                    <Button className="w-full bg-blue-600 hover:bg-blue-70 text-lg " type="submit">
                                        Log In
                                    </Button>

                                </div>
                            </CardContent>
                        </Card>
                    </form>
                </div>


            </div>
        </>
    )
}

export default Loginpage

