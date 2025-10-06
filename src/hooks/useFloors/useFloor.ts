import { useQuery } from "@tanstack/react-query";
import { getFloor } from "./request";
import { useEffect, useState } from "react";
import type { IResFloor } from "./IResFloor";

export const useFloors = () => {
  const [data, setData] = useState<IResFloor | undefined>();
  const [page, setPage] = useState(1);
  const queryFloors = useQuery({
    queryKey: ["get-floors", page],
    queryFn: () => getFloor(page),
  });

  useEffect(() => {
    if (queryFloors.data) {
      setData(queryFloors.data);
    } else {
      setData(undefined);
    }
  }, [queryFloors.data]);

  const goNextPage = ()=>{
    if(data?.hasNext) setPage((prev) =>prev +1)
  }

   const goPrevPage = () => {
    if (data?.hasPrev) setPage((prev) => Math.max(prev - 1, 1));
  };

  return {
    data,
    queryFloors,
     page,
    setPage,
    goNextPage,
    goPrevPage,
    isLoading: queryFloors.isLoading,
    isFetching: queryFloors.isFetching,
    isError: queryFloors.isError,
  };
};
