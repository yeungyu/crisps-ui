export function insertDino(dinoType, type) {
    return function (state, dispatch) {
        let { $from } = state.selection,
            index = $from.index();
        if (!$from.parent.canReplaceWith(index, index, dinoType)) return false;
        if (dispatch)
            dispatch(state.tr.replaceSelectionWith(dinoType.create({ type })));
        return true;
    };
}
