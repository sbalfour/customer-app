import { Actions } from "../actions/actions.model";

export type Customer = {
  createdAt?: string;
  avatar?: string;
  firstName?: string;
  lastName?: string;
  telephone?: string;
  email?: string;
  actions: Actions[],
  id?: string;
}
