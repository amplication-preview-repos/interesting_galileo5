import { InputJsonValue } from "../../types";
import { MeetingCreateNestedManyWithoutUsersInput } from "./MeetingCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  meetings?: MeetingCreateNestedManyWithoutUsersInput;
};
