import {reducer, StateType, toggle_closed} from "./reducer";

test('closed should be true', () => {

    const state: StateType = {
        closed: false
    }

    const newState = reducer(state, {type: toggle_closed})


    expect(newState.closed).toBe(true)
})

test('closed should be false', () => {

    const state: StateType = {
        closed: false
    }

    const newState = reducer(state, {type: toggle_closed})


    expect(newState.closed).toBe(true)
})

test('reducer should throw error because action type is incorrect', () => {

    const state: StateType = {
        closed: false
    }

    expect(()=> {
        reducer(state, {type: 'fake_type'})
    }).toThrowError()

})