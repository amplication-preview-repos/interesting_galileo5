import { SortOrder } from "../../util/SortOrder";

export type MeetingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  description?: SortOrder;
  startTime?: SortOrder;
  title?: SortOrder;
  endTime?: SortOrder;
  googleMeetLink?: SortOrder;
  userId?: SortOrder;
};
