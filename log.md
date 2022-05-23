## workspace pnpm i

1. 创建 pnpm-workspace.yaml
2. pnpm i

## 运行 workspace 命令

1. pnpm -F editor dev

## prosemirror 类型

1. pnpm -F editor add @types/prosemirror-view
2. @types/prosemirror-view 的类型不能直接用
    > When file has top-level import or export statement it is considered as a module. All its' content (types, interfaces, etc.) you are interested in needs to be exported explicitly in that file and imported in those files that need the types.
3. 方法一：在用到的地方 import type
4. 方法二：建一个 dts，定义`type ProsemirrorView = import('prosemirror-view').EditorView;`，然后就可以全局使用了
