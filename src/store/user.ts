// src/store/user.ts
import { CustomUser } from '@/types/customUser';
import { User } from '@supabase/supabase-js';
import { atom } from 'jotai';

// ユーザー情報を保持するためのAtomを定義
export const userAtom = atom<CustomUser | null>(null);

// ユーザー情報を更新するためのAtomを定義
export const updateUserAtom = atom(
  null, // 読み取り用のAtomは不要なのでnullを設定
  (get, set, newUser: User | null) => {
    set(userAtom, (prevUser) => {
      if (!prevUser) return null;
      return {
        ...prevUser,
        ...newUser,
      };
    });
  }
);
