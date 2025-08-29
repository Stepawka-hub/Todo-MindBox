import { TTask } from '@types'

export type TTaskControls = {
  tasks: TTask[];
  onClearCompleted: () => void;
}