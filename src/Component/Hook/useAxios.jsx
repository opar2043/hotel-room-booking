import axios from "axios"

const axiosInstance = axios.create({
    // baseURL: 'https://hotek-book-server.vercel.app/', 
    baseURL: 'https://hotel-book-server-l4so.onrender.com/', 
  });

const useAxios = () => {

   return axiosInstance;
}

export default useAxios



// const uri = `mongodb+srv://${process.env.DB_User}:${process.env.DB_Pass}@cluster0.xfvkq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
