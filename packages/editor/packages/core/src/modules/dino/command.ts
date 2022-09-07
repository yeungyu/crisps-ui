export function insertDino(dinoType, type) {
  return function (state: ProsemirrorState, dispatch?: Dispatch): boolean {
    const { $from }: ProsemirrorSelection = state.selection;
    const index: number = $from.index();
    if (!$from.parent.canReplaceWith(index, index, dinoType)) return false;
    if (dispatch)
      dispatch(state.tr.replaceSelectionWith(dinoType.create({ type })));
    return true;
  };
}
