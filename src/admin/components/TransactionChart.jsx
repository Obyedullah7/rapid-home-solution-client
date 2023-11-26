import React from 'react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'
import { useState, useEffect } from 'react'
import { getAllOrders } from '../../apiCalls/orders'





const RADIAN = Math.PI / 180
const COLORS = ['#00C49F', '#FFBB28']

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent }) => {
	const radius = innerRadius + (outerRadius - innerRadius) * 0.5
	const x = cx + radius * Math.cos(-midAngle * RADIAN)
	const y = cy + radius * Math.sin(-midAngle * RADIAN)

	return (
		<text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
			{`${(percent * 100).toFixed(0)}%`}
		</text>
	)
}

export default function BuyerProfilePieChart() {
  const [data, setData] = useState([]);

  const getAllOrderdata = async () => {
    const data = await getAllOrders();
    setData(data.orders)
  }

  const totalOrders = data.length;
  const totalServiced = data.filter((order) => order.status === "serviced").length;

  
  const setDataForPieChart = () => {
    const data = [
      {
        name: "Total Orders",
        value: totalOrders
      },
      {
        name: "Total Serviced",
        value: totalServiced
      }
    ]
    return data;
  }


  useEffect(() => {
    getAllOrderdata();
  }, [])
  



   
  

	return (
		<div className="bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
			<strong className="text-gray-700 font-medium">Pie Chart</strong>
			<div className="w-full flex-1 text-xs">
				<ResponsiveContainer width="100%" height={250}>
					<PieChart>
						<Pie
							data={setDataForPieChart()}
							cx="50%"
							cy="45%"
							labelLine={false}
							label={renderCustomizedLabel}
							outerRadius={105}
							fill="#8884d8"
							dataKey="value"
						>
							{data.map((_, index) => (
								<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
							))}
						</Pie>
						<Legend />
					</PieChart>
				</ResponsiveContainer>
			</div>
		</div>
	)
}
