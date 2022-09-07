import { Schema } from 'prosemirror-model';
import { schema } from 'prosemirror-schema-basic';
import { dinoSchema } from './modules/dino';

export const editorSchema = new Schema({
  nodes: schema.spec.nodes.addBefore('image', 'dino', dinoSchema),
  marks: schema.spec.marks,
});
