import { MenuItem } from 'prosemirror-menu';
import { buildMenuItems } from 'prosemirror-example-setup';
import { dinos, insertDino } from '../modules/dino/index';
import { editorSchema } from '../store';

export const menu = buildMenuItems(editorSchema);
dinos.forEach((name) =>
  menu.insertMenu.content.push(
    new MenuItem({
      title: 'Insert ' + name,
      label: name.charAt(0).toUpperCase() + name.slice(1),
      enable(state) {
        return insertDino(editorSchema.nodes.dino, name)(state);
      },
      run: insertDino(editorSchema.nodes.dino, name),
    })
  )
);
