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
5. typeRoots 只引入非 module 的 dts，对于 module，仍要手动 import（typeRoots 无需特别配置）
6. typeRoots 只对指定目录的第二级目录有效

    ```
    "typeRoots": ["./types"]

    ./types/index.d.ts无效
    ./types/test/index.d.ts有效
    ```

## typescript配置错误提示
### eslint错误提示
Parsing error: "parserOptions.project" has been set for @typescript-eslint/parser.  
The file does not match your project config: .eslintrc.js.  
The file must be included in at least one of the projects provided.  

Solution:  
1. 在tsconfig.json中添加
```json
"include": [
    ".eslintrc.js",
    // ...
]
```
2. 或新增单独的tsconfig.eslint.json文件
```json
{
    "include": [
        ".eslintrc.js"
    ]
}
```
然后在eslintrc.js中添加
```js
parserOptions: {
    project: [
        resolve(__dirname, './tsconfig.json'),
        resolve(__dirname, './tsconfig.eslint.json'),
    ],
}
```






