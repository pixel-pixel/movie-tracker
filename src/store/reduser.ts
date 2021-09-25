export interface State {
  user: any
  userData: any
  findText: string | null
}

const initialState: State = {
  user: null,
  userData: null,
  findText: null
}

type Action = {
  type: "SET_FIND_TEXT",
  payload: any
}

export const reduser = (state = initialState, action: Action): State => {
  switch(action.type) {
    case "SET_FIND_TEXT" : {
      return {...state, findText: action.payload}
    } default: {
      return state
    }
  }  
}
