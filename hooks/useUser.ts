import useSWR from "swr";
import fetcher from "@/libs/fetcher";

const useUsers = (userId: string) => {
    const { data, error, isLoading, mutate } = useSWR(userId ? `/api/users/${userId}` : null, fetcher);
    return {
        data,
        isLoading,
        error,
        mutate
    };
};
export default useUsers;