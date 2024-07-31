type ActionType = {
    type: string
}

export const toggle_closed = 'Toggle collapsed'

export type StateType = {
    closed: boolean
}

export const reducer = (state: StateType, action: ActionType): StateType => {

    switch (action.type) {
        case toggle_closed:
            return {
                ...state,
                closed: !state.closed
            }
        default:
            throw new Error('Bad action type')
    }
    return state;
}