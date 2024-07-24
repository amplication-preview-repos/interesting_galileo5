import { User } from "../user/User";

export type Meeting = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  description: string | null;
  startTime: Date | null;
  title: string | null;
  endTime: Date | null;
  googleMeetLink: string | null;
  user?: User | null;
};
