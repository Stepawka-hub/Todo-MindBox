import { TTaskFilter } from '@types';

export type TaskFilterProps = {
  filter: TTaskFilter;
  handleFilterChange: (v: TTaskFilter) => void;
}