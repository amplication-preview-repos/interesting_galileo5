import { JsonValue } from "type-fest";
import { Meeting } from "../meeting/Meeting";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  meetings?: Array<Meeting>;
};
