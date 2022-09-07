import { Plugin, PluginKey } from 'prosemirror-state';

class NewPlugin extends Plugin {
  constructor() {
    super({
      key: new PluginKey('newPlugin'),
    });
  }
}

export default NewPlugin;
