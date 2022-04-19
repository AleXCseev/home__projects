export const selectAllPositiions = (state) => state.positions

export const selectVisiblePositions = (state, filters = []) => {
    if( filters.length === 0 ) {
        return state.positions
    }

    return state.positions.filter(position => {
        const posFilters = [].concat(position.role, position.level, ...position.lenguages, ...position.tools);

        return filters.every(filter => posFilters.includes(filter))
    })
}