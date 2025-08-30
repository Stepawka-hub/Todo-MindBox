import { TTask, TTaskFilter } from '@types'
import { TaskFilterProps } from '@components';

export type TTaskControls = TaskFilterProps & {
  tasks: TTask[];
  filter: TTaskFilter;
  onClearCompleted: () => void;
}