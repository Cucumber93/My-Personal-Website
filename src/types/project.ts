export interface Project {
  id: number;
  userId: number;
  projectName: string;
  image: string | null;
  description: string | null;
  createdAt: Date;
  updatedAt: Date;
}

