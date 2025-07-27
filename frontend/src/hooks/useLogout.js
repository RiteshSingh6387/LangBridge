import { useQueryClient , useMutation} from "@tanstack/react-query";
import {logout} from "../lib/api";

const useLogout = () => {
    const queryClient =  useQueryClient();
    const {
        mutate,
        isPending,
        error} = useMutation({
        mutationFn: logout,
        retry: false,
        onSuccess: () => queryClient.invalidateQueries({queryKey : ["authUser"]})
    });
    return {logoutMutation:mutate, isPending, error};
// LogoutMutation
}
export default useLogout



// const useLogin = () =>{
//     const queryClient = useQueryClient();
//     const {
//         mutate,
//         isPending,
//         error} = useMutation({
//         mutationFn: login,
//         onSuccess: () => queryClient.invalidateQueries({queryKey: ["authUser"]}),
//     });
//     return {error, isPending, loginMutation:mutate};
// }
