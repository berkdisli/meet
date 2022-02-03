
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';

const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
const colors = ['#d0427f', '#f8a01f', '#528272', '#f15f4b', '#116181'];

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    const getData = () => {
        let data = genres.map((genre) => {
            const value = events.filter((event) =>
                event.summary.split(" ").includes(genre)
            ).length;

            return { name: genre, value };
        });
        data = data.filter((data) => data.value);
        return data;
    };


    useEffect(() => {
        setData(() => getData());
    }, // eslint-disable-next-line
        [events]);

    return (
        <ResponsiveContainer width={'99%'} height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(1)}%`}
                    outerRadius={80}
                    innerRadius={60}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={colors[index % colors.length]} name={entry.name} />
                    ))}
                </Pie>
                <Legend layout="horizontal" verticalAlign="bottom" align="center" height={45} />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenre;
