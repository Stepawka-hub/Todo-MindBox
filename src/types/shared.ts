import { TTask } from "./entity";

export type TTaskUpdate = Partial<Omit<TTask, 'id'>>;
export type TTaskUpdateHandler = (id: string, updates: TTaskUpdate) => void;
