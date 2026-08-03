# 内联Canvas示例

摘录自示例工程的 TS 视图片段，展示"内联 Canvas"的写法。

```ts
$itemUI = G.create.canvas(BeCanvas.fromBase64Const(
`
<BeCanvas>
  <BeUIRect name="panel" Pos="110,850,0" size="450,145,1" color="rgba(1,1,1,0.78767)" BorderWidth="-1" Radius="10" slicedPicGuid="9ea2db5b6ad641d19815c9fe093eaa08" slicedBorderLB="58.5,75,0" slicedBorderRT="149.5,75,0" slicedRectLB="0,0,0" slicedRectRT="457,150,0">
    <BeUILabel name="label" Pos="-180,10,0" parentAnchor="8" anchor="8" widthExtend="2" size="40,75,1" color="rgba(1,1,1,1)" outlineColor="rgba(0,0.25497746,1,1)" outlineDistance="1,-1,0" text="?" FontSize="25" lineSpacing="0.79999995" />
    <BeUIRect name="mask" Pos="-16.5,0,0" parentAnchor="5" anchor="5" size="115.5,115.5,1" color="rgba(0.17842488,0.17842488,0.17842488,1)" BorderWidth="-1" Radius="143.99997" mask="1">
      <BeUIRawImage name="AvatarIcon" Pos="0,0,0" parentAnchor="4" anchor="4" size="130,130,1" color="rgba(1,1,1,1)" />
    </BeUIRect>
    <BeUIRawImage name="无名3" Pos="-100,12,0" parentAnchor="8" anchor="8" size="85,48,1" color="rgba(1,1,1,1)" fileGuid="a2130e381f3a4563b552daa74877696a" />
    <BeUILabel name="name" Pos="-150,80,0" parentAnchor="8" anchor="8" widthExtend="2" size="50,50,1" color="rgba(1,1,1,1)" outlineColor="rgba(0,0,0,1)" outlineDistance="3,-3,0" text="?" FontSize="34" lineSpacing="0.79999995" />
  </BeUIRect>
</BeCanvas>
`
))
```

要点：
- 反引号内容是 Canvas 的 HTML 视图文本
- 不要用模板字符串 `${...}` 拼接
- 修改布局时按 Canvas/HTML 视图的方式修改
