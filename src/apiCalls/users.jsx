const userRegister = async (user) => {

    const response = await fetch(`http://localhost:4000/api/user/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    });

    const data = await response.json();
    return data;

}


const userLogin = async (user) => {

    const response = await fetch(`http://localhost:4000/api/user/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)

    })

    const data = await response.json();
    return data;

}



const getUser = async () => {
    const response = await fetch(`http://localhost:4000/api/user/get-user`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        // body: JSON.stringify(user)

    })

    const data = await response.json();
    return data;

}

const getAllUsers = async () => {
    const response = await fetch(`http://localhost:4000/api/user/get-all-users`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'authorization': `Bearer ${localStorage.getItem('token')}`
        },
        // body: JSON.stringify(user)

    })

    const data = await response.json();
    return data;

}





const updateUser = async (obj) => {

    const response = await fetch(`http://localhost:4000/api/user/update-user`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)

    })

    const data = await response.json();
    return data;

}


const trackingIp = async () => {
    const request = await fetch("https://ipinfo.io/json?token=5bcac1461564b5")
    const jsonResponse = await request.json()

    return jsonResponse;
}


export { userRegister, userLogin, getUser, getAllUsers, updateUser, trackingIp };
