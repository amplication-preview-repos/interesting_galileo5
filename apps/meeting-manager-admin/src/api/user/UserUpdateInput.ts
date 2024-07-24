import { InputJsonValue } from "../../types";
import { MeetingUpdateManyWithoutUsersInput } from "./MeetingUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  meetings?: MeetingUpdateManyWithoutUsersInput;
};
