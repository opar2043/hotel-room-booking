

import { useQuery } from '@tanstack/react-query';
import useAxios from './useAxios';

const useUser = () => {


  const axiosSecure = useAxios();
  const {data : userdata = [] , isLoading , refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async ()=> {
      const res =await axiosSecure.get('/users');
      console.log(res.data);
      return res.data ;
    }
  })

  return [userdata , isLoading , refetch ]
}

export default useUser