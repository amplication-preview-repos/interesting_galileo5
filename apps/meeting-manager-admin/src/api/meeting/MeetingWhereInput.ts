import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type MeetingWhereInput = {
  id?: StringFilter;
  description?: StringNullableFilter;
  startTime?: DateTimeNullableFilter;
  title?: StringNullableFilter;
  endTime?: DateTimeNullableFilter;
  googleMeetLink?: StringNullableFilter;
  user?: UserWhereUniqueInput;
};
