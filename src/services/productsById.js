import axios from "axios";

async function getProductId (id) {
    return axios.get(`https://dummyjson.com/products/${id}`);
}

export default getProductId;