import React, { useState } from 'react';
import moment from 'moment';
import { useEffect } from 'react';
import { getOrders, updateRating } from '../../apiCalls/orders';

const OrderTable = () => {
    const [orders, setOrders] = useState([])

    const handleRatingChange = async (orderId, rate) => {
        const data = await updateRating({ orderId, rate });

        getAllOrders();

    };




    const getAllOrders = async () => {
        const data = await getOrders("652cc4f5f3c3167a19f8ec15");
        setOrders(data.orders);

    }


    useEffect(() => {

        getAllOrders();
    }, [])



    return (
        <div>

            {
                orders.length > 0 ?
                    <div className='container mx-auto my-10 shadow-2xl border '>
                        <div className="overflow-x-auto">
                            <table className="table">
                                {/* head */}
                                <thead className='bg-red-100'>
                                    <tr>
                                        <th>Service</th>
                                        <th>Name</th>
                                        <th>Order Id</th>
                                        <th>Payment Id</th>
                                        <th>Date</th>
                                        <th>Status</th>
                                        <th>Rating</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {orders.length > 0 &&
                                        orders.map((element, index) => (
                                            <tr key={element._id}>
                                                <td><img className='h-10 w-14 rounded' src={element.serviceId.image[0].secure_url} alt="" /></td>

                                                <td>{element.serviceId.title}</td>
                                                <td>{element._id}</td>
                                                <td>{element.paymentId}</td>

                                                <td><p>Ordered: {moment(element.createdAt).format('DD/MM/YY, h:mm A')}</p>
                                                    {
                                                        element.servicedAt ?
                                                            <p>Serviced: {moment(element.servicedAt).format('DD/MM/YY, h:mm A')}</p>
                                                            :
                                                            <p>Estimate: {moment(element.createdAt).add(4, 'day').format('DD/MM/YY')}</p>
                                                    }
                                                </td>

                                                <td ><span
                                                    className={`inline-block font-bold rounded capitalize w-24  ${element.status === 'reviewing' ? 'text-pink-700' : element.status === 'confirmed' ? 'text-blue-700' : element.status === 'on the way' ? 'text-yellow-700' : element.status === 'serviced' ? 'text-green-700' : element.status === 'canceled' ? 'text-gray-600 italic' : element.status === 'failed' ? 'text-red-600' : 'text-gray-700'}`}

                                                >
                                                    {element.status}
                                                </span></td>
                                                <td>
                                                    {
                                                        element.rate >= 0 ?
                                                            <div>
                                                                {[1, 2, 3, 4, 5].map((star) => (
                                                                    <button
                                                                        key={star}
                                                                        onClick={() => handleRatingChange(element._id, star)}
                                                                        className={`lg:text-xl ${star <= orders[index].rate ? 'text-orange-500' : 'text-gray-500'}`}
                                                                    >
                                                                        ★

                                                                    </button>
                                                                ))}

                                                            </div>

                                                            :

                                                            <div className='text-xl font-bold'>
                                                                <h2>-</h2>
                                                            </div>
                                                    }
                                                </td>
                                            </tr>
                                        ))
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                    :

                    <div>
                        <h2>Empty List!</h2>
                    </div>
            }

        </div>
    );
};

export default OrderTable;