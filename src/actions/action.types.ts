const authState = {
  token: "",
  error: "",
};

enum ActionType {
  LOGIN_SUCCESS = "LOGIN_SUCCESS",
  LOGIN_FAILED = "LOGIN_FAILED"
}

export default interface IUser {
  id?: any | null,
  email?: string,
  password?: string | number
}

interface actionLoginSuccess {
  type: ActionType.LOGIN_SUCCESS;
  payload: string[] | number[];
}

interface actionLogindFailed {
  type: ActionType.LOGIN_FAILED;
  payload: [];
}

type Action = actionLoginSuccess | actionLogindFailed;

export function authReducer(state = authState, action: Action) {
  switch (action.type) {
    case ActionType.LOGIN_SUCCESS:
      return { ...state, token: action.payload };
    case ActionType.LOGIN_FAILED:
      return { ...state, error: action.payload };
    default:
      return state;
  }
}