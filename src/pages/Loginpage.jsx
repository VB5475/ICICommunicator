import React, { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import Logo from '../assets/images/logo.PNG'
import TypedText from '@/components/TypedText'


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
        <div className='h-100vh w-screen flex '>

            <div className='h-screen w-3/5 '>
                {/* Logo  */}
                <div className='w-full h-[10%] flex ml-5 justify-start items-center'>
                    <img src={Logo} alt="logo" className='h-19 w-15' />
                    <span className='text-4xl text-blue-400 font-bold'>Communicator</span>
                </div>
                {/* writeing section */}
                <div className='flex flex-col h-[90%] w-full justify-center items-center'>
                    <div>
                        <img src={Logo} alt="logo" className='h-20 w-15' />
                    </div>
                    <div className='flex justify-center items-center'>
                        <span className='font-bold text-3xl text-blue-500'> Indian Chemical Industries </span>
                    </div>
                    <div>
                        <TypedText />
                    </div>
                </div>
            </div>

            <div className='h-screen w-2/5 flex justify-center items-center'>
                 {/* Login Card */}
                <form action="#" onSubmit={SaveData}>
                    <Card className="backdrop-blur-sm bg-gray-200 border-2 border-slate-300 shadow-2xl shadow-black rounded-xl">
                        <CardHeader>
                            <CardTitle>Login Form </CardTitle>
                        </CardHeader>
                            <CardContent className='flex flex-col justify-center items-center gap-6'>
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
                                    <Button className="w-1/2 bg-blue-600 hover:bg-blue-800" type="submit">
                                        Log In
                                    </Button>
                                    <Button className='w-1/2 bg-blue-600 hover:bg-blue-800' type='reset' onClick={ResetData}>
                                        cancel
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

// /Diccarde part

{/* <div>
                    <div className='flex justify-center items-center'>
                        <img src={Logo} alt="not working" className='h-35 w-25'/>
                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <span className='text-3xl font-bold'>INDIAN CHEMICAL INDUSTERIES</span>
                        <span className='text-2xl'>Daring to be Different to win </span>
                    </div>
                </div> */}


  {/* Header Section */}
            {/* <div className='h-20 w-full bg-blue-500 flex items-center gap-10'>
                <div className="ml-10 flex justify-center items-center gap-5">
                    
                </div>
                <div className='flex flex-col'>
                    <span className='text-3xl text-white font-bold'> </span>
                    <span className='text-2xl text-white font-bold'>Communicator</span>
                </div>
            </div> */}
            {/* logo part */}