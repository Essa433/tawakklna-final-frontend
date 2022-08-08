import { IPost, initialPosts } from './data/post/postdata';
import { cloneDeep } from 'lodash';
import { useSelector } from 'react-redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import { createStore } from 'redux';

interface AppState {
	userId: string | null;
	posts: IPost[];
}
interface IAction<X> {
	type: 'ADD_POST' | 'DELETE_POST' | 'UPDATE_POST' | 'USER_MOVED';
	payload: X;
}
const initialState: AppState = {
	userId: '123',
	posts: initialPosts,
};

function stateReducer(oldState: AppState = initialState, action: IAction<any>): AppState {
	const newState = cloneDeep(oldState);

	switch (action.type) {
		case 'ADD_POST':
			newState.posts.push(action.payload);
			return newState;
		case 'DELETE_POST':
			newState.posts = newState.posts.filter((p) => p.id !== action.payload.id);
			return newState;
		case 'UPDATE_POST':
			const index = oldState.posts.findIndex((p) => p.id === action.payload.id);
			if (index === -1) return oldState;
			newState.posts[index] = action.payload;
			return newState;
		default:
			return oldState;
	}
}

export function addPost(post: IPost): IAction<IPost> {
	return {
		type: 'ADD_POST',
		payload: post,
	};
}
export function deletePost(post: IPost): IAction<IPost> {
	return {
		type: 'DELETE_POST',
		payload: post,
	};
}
export function updatePost(post: IPost): IAction<IPost> {
	return {
		type: 'UPDATE_POST',
		payload: post,
	};
}

/// Selector
export function usePosts(): IPost[] {
	const posts = useSelector<AppState, IPost[]>((state) => state.posts);
	return posts;
}

export function useUserId(): string | null {
	const userId = useSelector<AppState, string | null>((state) => state.userId);
	return userId;
}

/// Store

export const store = createStore(stateReducer, composeWithDevTools());
