const fetch = require('node-fetch')

// Libraries
module.exports = async (params, url, method, token) => {
    try {
        if (method === 'GET') {
            const response = await fetch(`http://api.cup2022.ir/api/v1/${url}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                },
                // body: JSON.stringify(params),
            })
            const response_json = await response.json()
            return response_json
    
        } else if (method === 'POST') {
            const response = await fetch(`http://api.cup2022.ir/api/v1/${url}`, {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `${token}`
                },
                body: JSON.stringify(params),
            })
            const response_json = await response.json()
            return response_json
    
        }
    } catch (e) {
        throw new Error(e.message)
    }

}
