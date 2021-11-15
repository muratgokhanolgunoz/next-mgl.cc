import axios from "axios";

const getSchedule = async () => {
    return await axios.get(process.env.NEXT_PUBLIC_MIDAS_API_URL + "getCurrentConsoles");
};

export default getSchedule;
