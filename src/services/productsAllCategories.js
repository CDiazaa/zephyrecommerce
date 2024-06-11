import axios from "axios";

async function getAllCategories () {
    return axios.get('https://dummyjson.com/products/categories');
}

export default getAllCategories;