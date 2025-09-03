

import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useBookings = () => {


  const axiosSecure = useAxios();
  const {data : bookings = [] , isLoading , refetch } = useQuery({
    queryKey: ["bookings"],
    queryFn: async ()=> {
      const res =await axiosSecure.get('/bookings');
      console.log(res.data);
      return res.data ;
    }
  })

  return [bookings , isLoading , refetch ]
}

export default useBookings