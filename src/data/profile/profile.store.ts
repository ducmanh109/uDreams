import {persist} from 'zustand/middleware';
import create from 'zustand';
import SessionMMKVStore from '../session/SessionStore';

export const profileStore = create(
  persist(
    set => ({
      userInfo: null,
      getUserInfo: (userInfo: object) => {
        set({userInfo: userInfo});
      },
      clearUser: () => {
        set({userInfo: null});
      },
    }),
    {
      name: 'profile-store',
      getStorage: () => SessionMMKVStore,
      partialize: (state: any) => ({
        userInfo: state.userInfo,
      }),
    },
  ),
);
