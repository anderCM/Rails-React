import axios from "axios";

const getGreeting = async () => {
    try {
        const response = await axios.get('/api/greetings/random');
        return response.data;
    } catch (error) {
        throw new Error(error.message);
    }
}

export default getGreeting