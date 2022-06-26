const categories = [
    {
        "id": 1,
        "name": 'GPU',
    },
    {
        "id": 2,
        "name": 'motherboard',
    },
    {
        "id": 3,
        "name": 'CPU',
    },
    {
        "id": 4,
        "name": 'Memory',
    }
]

const products = [
    {
        id: 1,
        name: 'i7',
        price: 499,
        categoryId: 3
    },
    {
        id: 2,
        name: 'i9',
        price: 1000,
        categoryId: 3
    },
    {
        id: 3,
        name: 'NVIDIA',
        price: 1000,
        categoryId: 1
    },
    {
        id: 4,
        name: 'AMD',
        price: 899,
        categoryId: 1
    },
    {
        id: 5,
        name: 'Kingston',
        price: 300,
        categoryId: 4
    },
    {
        id: 6,
        name: 'Sundisck',
        price: 499,
        categoryId: 4
    },
    {
        id: 7,
        name: 'Samsung',
        price: 299,
        categoryId: 2
    },
    {
        id: 8,
        name: 'Asus Prime H270 Plus',
        price: 199,
        categoryId: 2
    },
]

module.exports = {
    categories,
    products

}