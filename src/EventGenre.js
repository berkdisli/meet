import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const EventGenre = ({ events }) => {
    const [data, setData] = useState([]);

    const genres = ["React", "JavaScript", "Node", "jQuery", "Angular JS"];
    const COLORS = ["#CD853F", "#F5FFFA", "#afc5eb", "#c0e7c6", "#efd4de"];

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
        <ResponsiveContainer height={400}>
            <PieChart width={400} height={400}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} name={entry.name} />
                    ))}
                </Pie>
                <Legend
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                    height={45}
                />
            </PieChart>
        </ResponsiveContainer>
    );
};

export default EventGenre;