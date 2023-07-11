export interface State {
    count: number
}

export interface Action {
    type: 'INCREMENT' | 'DECREMENT' | 'RESET'
}