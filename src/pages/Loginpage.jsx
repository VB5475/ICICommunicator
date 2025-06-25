import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Logo from '../assets/images/logo.PNG'
import { da, id } from 'date-fns/locale'

const Loginpage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [data,setData]=useState({
        id:'',
        password:'',
    });
    
    const [array,setArray]=useState([])

    const SaveData = () =>{
        console.log(data)
        array.push(data)
        setData({
            id:'',
            password:''
        })
    }

    const ResetData = () =>{
         setData({
            id:'',
            password:''
        })
    }

  return (
    <>
        <div className='h-100vh w-screen '>
            {/* Header Section */}
            <div className='h-15 w-full bg-blue-500 flex items-center justify-around'>
                <div className="flex justify-center items-center gap-5">
                    <img src={Logo} alt="logo" className='h-15 w-15' />
                    <span className='text-3xl text-white font-bold'>Indian Chemical Industries </span>
                </div>
                <div>
                    <span className='text-2xl text-white font-bold'>Communicator</span>
                </div>
            </div>

            <div className='h-160 w-full flex justify-around items-center'>
                <div>
                    <div className='flex justify-center items-center'>
                        <img src={Logo} alt="not working" className='h-35 w-25'/>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-3xl font-bold'>INDIAN CHEMICAL INDUSTERIES</span>
                        <span className='text-2xl'>Daring to be Different to win </span>
                    </div>
                </div>
                {/* Login Card */}
                <div className=' bg-slate-300 shadow-2xl shadow-black rounded-3xl'>
                    <form action="#" onSubmit={SaveData}>
                        <Card className="backdrop-blur-sm bg-white/70 border-2 border-slate-300 shadow-2xl rounded-2xl">
                            <CardHeader>
                                <CardTitle>Login Form </CardTitle>
                            </CardHeader>
                                <CardContent className='flex flex-col justify-center items-center gap-4'>
                                    <div className="w-full">
                                        <Label htmlFor="userId">User ID</Label>
                                        <Input id="userId" placeholder="Enter your ID" value={data.id} onChange={(e) => setData({ ...data,id: e.target.value })}/>
                                    </div>
                                    <div className="w-full">
                                        <Label htmlFor="password">Password</Label>
                                        <Input type={showPassword ? "text" : "password"} id="password" placeholder="Enter your password" value={data.password} onChange={(e) => setData({ ...data,password: e.target.value })} />
                                        <div className='mt-4 w-full flex justify-start items-center'>
                                            <Checkbox className='border-2 border-black'
                                            id="show-password"
                                            checked={showPassword}
                                            onCheckedChange={() => setShowPassword(!showPassword)}
                                            />
                                            <Label htmlFor="" className='ml-4'>Show Password</Label>
                                        </div>
                                    </div>
                                    
                                    <div className='w-full flex gap-4'>
                                        <Button className="w-1/2" type="submit">
                                            Log In
                                        </Button>
                                        <Button className='w-1/2' type='reset' onClick={ResetData}>
                                            cancel
                                        </Button>
                                    </div>
                                </CardContent>
                        </Card>
                    </form>
                </div>
            </div>
        </div>    
    </>
  )
}

export default Loginpage