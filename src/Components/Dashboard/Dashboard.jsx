import React from 'react';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Dashboard = () => {
    const marksArray=[
        {
          "id": 101,
          "name": "John",
          "physics": 90,
          "chemistry": 85,
          "math": 95
        },
        {
          "id": 102,
          "name": "Sarah",
          "physics": 80,
          "chemistry": 75,
          "math": 85
        },
        {
          "id": 103,
          "name": "Mike",
          "physics": 95,
          "chemistry": 90,
          "math": 85
        },
        {
          "id": 104,
          "name": "Emily",
          "physics": 70,
          "chemistry": 80,
          "math": 75
        },
        {
          "id": 105,
          "name": "David",
          "physics": 85,
          "chemistry": 90,
          "math": 80
        },
        {
          "id": 106,
          "name": "Rachel",
          "physics": 95,
          "chemistry": 95,
          "math": 90
        },
        {
          "id": 107,
          "name": "Tom",
          "physics": 75,
          "chemistry": 70,
          "math": 80
        },
        {
          "id": 108,
          "name": "Kate",
          "physics": 80,
          "chemistry": 85,
          "math": 75
        },
        {
          "id": 109,
          "name": "Alex",
          "physics": 90,
          "chemistry": 95,
          "math": 85
        },
        {
          "id": 110,
          "name": "Olivia",
          "physics": 85,
          "chemistry": 80,
          "math": 90
        }
      ]
    return (
        <div>
            <LineChart width={500}
                height={300}
                data={marksArray}>
                <Line type="monotone" dataKey="math" stroke="#82ca9d" />
                <Line type="monotone" dataKey="chemistry" stroke="#be123c" />
                <Line type="monotone" dataKey="physics" stroke="#047857" />
                <XAxis dataKey="name" />
                <YAxis></YAxis>
                <Tooltip></Tooltip>
            </LineChart>
        </div>
    );
};

export default Dashboard;