

import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useRoom = () => {


  const axiosSecure = useAxios();
  const {data : roomdata = [] , isLoading , refetch } = useQuery({
    queryKey: ["rooms"],
    queryFn: async ()=> {
      const res =await axiosSecure.get('/rooms');
      console.log(res.data);
      return res.data ;
    }
  })

  return [roomdata , isLoading , refetch ]
}

export default useRoom