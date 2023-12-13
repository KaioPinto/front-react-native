const port = '3000'
const server = `http://10.5.1.171:${port}`

const httpService = {
    createUser: (user: any) => {
        return fetch(`${server}/user/create`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })


    },
    loginUser: (user: any) => {
        return fetch(`${server}/user/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)

        })

    },
    getHome: (user: any) => {
        return fetch(`${server}/iten`, {
            method: "GET",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            },
        });
    },

    addCart: (user: any, _id: any) => {
        return fetch(`${server}/user/adicionar`, {
            method: "POST",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(_id)
        })
    },

    getCart: (user: any) => {
        return fetch(`${server}/user/cart`, {
            method: "GET",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            }
        })
    },
    getHistoric: (user: any) => {
        return fetch(`${server}/user/historic`, {
            method: "GET",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            }
        })
    },

    getUser: (user: any) => {
        return fetch(`${server}/user/userById`, {
            method: "GET",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            }

        })


    },

    finishBuy: (user: any) => {
        return fetch(`${server}/user/buy`, {
            method: "GET",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            }

        })
    },
    deleteIten: (user: any, _id: any) => {
        return fetch(`${server}/user/removeProduct`, {
            method: "DELETE",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"

            },
            body: JSON.stringify(_id)
        })

    },
    sendImage: (user: any, img: any) => {
        return fetch(`${server}/user/send`, {
            method: "POST",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            },
            body: JSON.stringify(img)

        })
    },
    getFavoritos: (user: any) => {
        return fetch(`${server}/user/favorites`, {
            method: "GET",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            }

        })
    },
    favorites: (user: any, _id: any) => {
        return fetch(`${server}/user/Addfavorites`, {
            method: "POST",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({_id:_id})
        })
    },
    removeFavorites: (user: any, _id: any) => {
        return fetch(`${server}/user/removeFavorites`, {
            method: "DELETE",
            headers: {
                "Authorization": user,
                "Content-Type": "application/json"
            },
            body: JSON.stringify({_id: _id})
        })
    }
}



export default httpService