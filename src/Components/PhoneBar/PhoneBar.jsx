import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { Bar, BarChart, XAxis, YAxis } from 'recharts';

const PhoneBar = () => {
    const [phones,setPhones]=useState([])
    useEffect(()=>{
        // fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
        // .then(res=>res.json())
        // .then(data=>setPhones(data))
    axios.get('https://openapi.programming-hero.com/api/phones?search=iphone')
    .then(data=>{ 
        const loadData=data.data.data;
        console.log(loadData);
        const phoneData=loadData.map(phone=>{
            const parts=phone.slug.split('-')
            const price=parseInt(parts[1])
            const phoneInfo={
                name:phone.phone_name,
                price:price

            }
            return phoneInfo
            
        })
        // console.log(phoneInfo)
            setPhones(phoneData)
    })
    },[])
    return (
        <div>
            
            <BarChart width={1000} height={500} data={phones}>
            <Bar dataKey="price" fill="#8884d8"/>
            <XAxis dataKey='name'></XAxis>
            <YAxis dataKey='price'></YAxis>
            </BarChart>
        </div>
    );
};

export default PhoneBar;