import { User } from '@/models/user.model';
import { create } from 'zustand';
import { UserService } from '@/services/user.service';

type UserState = {
    user: User | null;
    getUserById: (id: string) => Promise<void>;
};

export const useUserStore = create<UserState>((set) => ({
    user: null,
    getUserById: async (id: string) => {
        const user = await UserService.getUser(id);
        set({ user });
    },
}));
