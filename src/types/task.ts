export interface Task {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  reward: number;
  type: 'daily' | 'weekly';
  days?: number[];
}
