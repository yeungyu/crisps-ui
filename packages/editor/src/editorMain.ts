import { DOMParser } from 'prosemirror-model';
import { EditorState } from 'prosemirror-state';
import { EditorView } from 'prosemirror-view';
import { exampleSetup } from 'prosemirror-example-setup';
import { editorSchema } from './store';
import { menu } from './plugins/menu';

export default () => {
  const content: HTMLDivElement = document.querySelector('#content')!;
  const startDoc = DOMParser.fromSchema(editorSchema).parse(content);

  new EditorView(document.querySelector('#editor'), {
    state: EditorState.create({
      doc: startDoc,
      plugins: exampleSetup({
        schema: editorSchema,
        menuContent: menu.fullMenu,
      }),
    }),
  });
};
