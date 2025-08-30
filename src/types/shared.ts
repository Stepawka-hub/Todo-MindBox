import { TTask } from "./entity";

export type TTaskUpdate = Partial<Omit<TTask, "id">>;
export type TTaskUpdateHandler = (id: string, updates: TTaskUpdate) => void;

export type TTaskFilter = "all" | "completed" | "active";
export type TTaskFilterMap = Record<TTaskFilter, (task: TTask) => boolean>;
