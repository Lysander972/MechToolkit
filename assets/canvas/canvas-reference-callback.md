# UI引用与回调

摘录自示例工程的 TS 视图片段，用于对照"UI引用获取与回调设置"的写法。

## 从 Canvas 读取 UI 组件

```ts
参数调节界面 = G.findCanvas(BeString.fromBeConst("HDT_参数调节界面"))
界面底板 = 参数调节界面.read<"BeUIRect">(BeString.fromBeConst("界面底板"))
按钮_呼出调参面板 = 参数调节界面.read<"BeUIButton">(BeString.fromBeConst("按钮_呼出调参面板"))
按钮_呼出调参面板.active(按钮显示)
界面底板.active(开启界面)
```

## 存储 UI 引用

```ts
this.参数列表底板 = 参数调节界面.read<"BeUIRect">(BeString.fromBeConst("界面底板/参数列表底板"))
```

## 设置按钮回调

```ts
布尔_真 = G.create.bool(BeBool.fromBeConst("1"))
按钮_呼出调参面板.clickCB(BeString.fromBeConst("开关调参面板"), 布尔_真)
```

## 传递多个参数到回调

```ts
panel = ui.read<"BeUIRect">(BeString.fromBeConst("panel"))
b = ui.read<"BeUIButton">(BeString.fromBeConst("panel/okButton"))
b.clickCB(BeString.fromBeConst("按钮点击'补偿玩家"), ui)
b.clickCB(BeString.fromBeConst("按钮点击'关闭UI"), panel)
```

## 挂载子节点

```ts
子节点 = $parent.sonNum()
if (G.float.gt(子节点, BeFloat.fromBeConst("1"))) {
  $parent.delSon(BeFloat.fromBeConst("0"))
}
$parent.addSon($panel)
```

## 销毁 UI

```ts
if ($panel.exist()) {
  $panel.del(BeFloat.fromBeConst("0"))
}
```

要点：
- 路径用 `/` 表示层级
- 跨帧使用的 UI 引用存到 `this.*`
- 删除前先检查 `exist()`
