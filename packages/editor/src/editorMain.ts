import { DOMParser } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { exampleSetup } from 'prosemirror-example-setup';
import { editorSchema } from './store';
import { menu } from './plugins/menu';

export default class Editor extends EditorView {
  constructor({ mountDOM, doc }) {
    super(mountDOM, {
      state: EditorState.create({
        doc:
          doc instanceof HTMLElement
            ? DOMParser.fromSchema(editorSchema).parse(doc)
            : doc,
        plugins: exampleSetup({
          schema: editorSchema,
          menuContent: menu.fullMenu,
        }),
      }),
    });
  }
}
