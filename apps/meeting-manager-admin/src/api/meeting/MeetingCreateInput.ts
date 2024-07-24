import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeetingCreateInput = {
  description?: string | null;
  startTime?: Date | null;
  title?: string | null;
  endTime?: Date | null;
  googleMeetLink?: string | null;
  user?: UserWhereUniqueInput | null;
};
