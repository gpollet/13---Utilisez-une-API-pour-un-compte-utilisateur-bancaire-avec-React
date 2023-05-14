import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import store from "./store/store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export interface Credentials {
	email: string;
	password: string;
}

export interface UserInfos {
	email: string;
	firstName: string;
	lastName: string;
	createdAt: string;
	updatedAt: string;
	id: string;
}

export interface NewUserInfos {
	firstname: HTMLInputElement | string | null,
	lastname: HTMLInputElement | string | null
}