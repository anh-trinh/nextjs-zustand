import { User } from '@/modals/user.model';
import axiosApi from '@/services/axios-api';

const getUser = async (id: string) => {
    const response = await axiosApi.get(`/users/${id}`);
    return {} as User;
};

export const UserService = {
    getUser
}
