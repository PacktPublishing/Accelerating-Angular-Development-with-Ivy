export interface ICourse {
  id: string;
  title: string;
  hashtag: string;
  school: ISchool;
  description?: string;
  videos: IVideo[];
}

export interface IVideo {
  externalId: string; // YouTube ID
  title: string;
  description?: string;
  date?: Date;
}

export interface ISchool {
  id: string;
  courseId: string;
  name: string;
  longitude: number;
  latitude: number;
  courses: ICourse[];
}
