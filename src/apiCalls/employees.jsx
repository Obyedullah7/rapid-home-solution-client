const getAllEmployees = async () => {

    const response =await  fetch(`http://localhost:4000/api/employees/get-all-employees`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        // body: JSON.stringify(obj)

    })

    const data =await  response.json();
    return data;

}

export { getAllEmployees };

const getEmployeeById = async (id) => {
    
        const response =await  fetch(`http://localhost:4000/api/employees/get-employee-by-id/${id}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                // 'authorization': `Bearer ${localStorage.getItem("token")}`
            },
            // body: JSON.stringify(obj)
    
        })
    
        const data =await  response.json();
        return data;
    
    }

    export { getEmployeeById };

const addEmployee = async (obj) => {

    const response =await  fetch(`http://localhost:4000/api/employees/add-employee`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(obj)

    })

    const data =await  response.json();
    return data;

}

export { addEmployee };

const updateEmployee = async (obj) => {

    const response =await  fetch(`http://localhost:4000/api/employees/update-employee`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        body: JSON.stringify(obj)

    })

    const data =await  response.json();
    return data;

}

export { updateEmployee };

const deleteEmployee = async (id) => {

    const response =await  fetch(`http://localhost:4000/api/employees/delete-employee/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            // 'authorization': `Bearer ${localStorage.getItem("token")}`
        },
        // body: JSON.stringify(obj)

    })

    const data =await  response.json();
    return data;

}

export { deleteEmployee };




