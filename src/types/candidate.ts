export interface Candidate {
  id: number;
  date: string;
  file: string;
  link: string;
  name: string;
  email: string;
  phone: string;
  skype: string;
  tagId: number;
  avatar: string;
  resume: string;
  salary: number;
  status: string;
  comment: string;
  linkedin: string;
  education: string;
  recruterId: number;
  experience: string;
  platforms: number[];
  seniorityId: number;
  vacancies: number[] | null;
  dateFollowUp: string | null;
  language: string;
}
