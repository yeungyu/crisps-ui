type ResolvedPos = import('prosemirror-model').ResolvedPos;

type ProsemirrorState = import('prosemirror-state').EditorState;
type ProsemirrorSelection = import('prosemirror-state').Selection;

type ProsemirrorView = import('prosemirror-view').EditorView;
type Dispatch = (tr: any) => void;
