import { dinos } from './index';

const dinoNodeSpec = {
    attrs: { type: { default: 'brontosaurus' } },
    inline: true,
    group: 'inline',
    draggable: true,

    toDOM: (node) => [
        'img',
        {
            'dino-type': node.attrs.type,
            'src': `https://prosemirror.net/img/dino/${node.attrs.type}.png`,
            'title': node.attrs.type,
            'class': 'dinosaur',
        },
    ],
    parseDOM: [
        {
            tag: 'img[dino-type]',
            getAttrs: (dom) => {
                let type = dom.getAttribute('dino-type');
                return dinos.indexOf(type) > -1 ? { type } : false;
            },
        },
    ],
};
export default dinoNodeSpec;
