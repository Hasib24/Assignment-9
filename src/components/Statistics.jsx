import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

  const data = [
    {
      name: 'Starting',
      obtained: 0,
    },
    {
      name: 'Assignment 1',
      obtained: 60,
    },
    {
      name: 'Assignment 2',
      obtained: 60,
    },
    {
      name: 'Assignment 3',
      obtained: 60,
    },
    {
      name: 'Assignment 4',
      obtained: 56,
    },
    {
      name: 'Assignment 5',
      obtained: 60,
    },
    {
      name: 'Assignment 6',
      obtained: 60,
    },
    {
      name: 'Assignment 7',
      obtained: 60,
    },
    {
      name: 'Assignment 8',
      obtained: 60,
    },
  ];
  
const Statistics = () => {
  return (
    <div className='container mx-auto'>
      <div className='my-10'>
        <AreaChart width={1250} height={400} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Area type="monotone" dataKey="obtained" stackId="1" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <h1 className='font-bold text-center text-xl mt-5'>Assignment mark and position in AreaChart</h1>
      </div>
    </div>
  )
}

export default Statistics;