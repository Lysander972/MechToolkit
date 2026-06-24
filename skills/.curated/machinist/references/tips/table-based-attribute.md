# 读表管理属性

## 本篇范围

这份说明面向 **TS 视图**：讲清楚“表格文件怎么放、脚本里怎么读、常见读法长什么样”。示例代码均节选自测试工程的 TS 视图。

## 不包含

- 本地化语言表的组织方式（见"localization-implementation"）
- 调色板表格的组织方式（见"palette-table-usage"）

## 0) 概览

- **基本做法**：配置数据用 Excel 表格管理，地图初始化时读取并保存到全局变量，游戏运行中直接使用这份已读取的数据。
- **应用场景**：单位属性表（怪物、弹幕玩家、武器）、掉落表、关卡配置、技能配置。
- **数据验证**：读表后要检查字段存在性、类型一致性、数值范围；缺失或错误需给出提示日志让问题暴露。
- **注意事项**：表格文件纳入版本控制；改表不改代码；路径用相对路径；文件编码建议 UTF-8；避免复杂空格与特殊符号命名。
- **改表方式**：如果要在对话里直接修改 `.xlsx`，优先用已安装的 Excel 相关 MCP；如果没有，提醒先安装再继续改表，可参考 `https://github.com/haris-musa/excel-mcp-server`。

## 1) 用途

- 用 Excel 管理配置/规则/数值/文本等“数据”，脚本只做读取与使用，方便策划迭代。

## 2) 放置位置与命名（推荐约定）

- 在工程根目录放一个 `表格/` 目录，所有 `.xlsx` 统一放进去。
- 脚本里传入的 `Excel_File` 一般使用“文件名去掉 `.xlsx` 的部分”，保持完全一致。
  - 例：`表格/GM名单.xlsx` → `BeString.fromBeConst("GM名单")`
  - 例：`表格/碰撞层级设置.xlsx` → `BeString.fromBeConst("碰撞层级设置")`
- 文件名可以用中文（示例工程就是中文），但不要夹杂空格/奇怪符号，避免后续引用时难排错。

## 3) 表格格式规范（必须严格遵守）

- 只识别 `Sheet1`，其他 sheet 不会被读取。绝对禁止把其他Sheet作为主体的假设!
- 前三行和第一列格式固定
  - 第 1 行是列名
  - 第 2 行是注释，不会读取
  - 第 3 行是类型，必须是 `float` `bool` `long` `vector` `color` `string` 之一，必须小写
  - 第 4 行起是数据
- 第 1 列必须是 `id` 列
  - 列名必须是 `id`
  - 第 3 行类型必须是 `long` / `float` / `string` 之一；这三类可转纯数字，禁止写 `vector` / `color` / `bool`
  - 第 4 行起的 ID 值必须是纯数字整数，且不能重复
- 数据行从第 4 行开始必须每行都有 `id`，中间禁止空行
- 支持表达式，读取以表达式计算结果为准(可以跨表格)
- 颜色必须用 `255;255;255;255` 这样的格式
- 向量必须用 `0;1;2` 这样的格式
- 表格就是 Excel(`.xlsx`)文件,不是 json,也不是 Markdown;绝对禁止把表格说成或写成 json,禁止用 json 对象/键值对去表达或“还原”表格内容,禁止往 Excel 上强行套用 Markdown 格式的污染
- 建议参考真实工程案例中的excel文件作为参考

## 4) 表结构的最小理解（脚本读取视角）

- 每一行对应一个行 ID，脚本读取时按列名拿值
- 如果需要用字符串主键，例如 name，通常做法是把它放在某一列里，然后用 `findExcel2` 先找行 ID，再用 `readExcel2` 读其它列

## 5) 常用读表 API（TS 视图写法）

- `G.readExcel2<...>(ID, alias, Excel_File)`：按"行 ID + 列名 + 表名"读取单元格（支持 `BeLong/BeFloat/BeBool/BeString/BeColor/BeVector3` 等类型）。
- `G.findExcel2<...>(key, value, Excel_File)`：在某一列里查找 value，返回匹配行的 ID；找不到时会返回负数（见示例）。
  - **重要**：key 必须是普通列名（如 `"name"`），**禁止用 `"id"`**。该 API 返回的就是行 ID，用 id 列搜索属于逻辑错误，可能触发底层异常。
- `G.map.excelGetIDList2(Excel_File)`：取出该表的所有行 ID 列表（用于遍历）。

## 6) 示例：先按 name 查行，再读文字/整数（`findExcel2` + `readExcel2`）

```ts
public 读取文字规则 = BeScript({ name: "读取文字规则", retVar: "r" })((n: BeString) => {
  var r: BeString
  var ID: BeLong
  var 文字: BeString
  var s: BeString
  ID = G.findExcel2<BeString>(BeString.fromBeConst("name"), n, BeString.fromBeConst("规则"));
  if (G.long.lt(ID, BeLong.fromBeConst("0"))) {
    文字 = G.create.string(BeString.fromBeConst("表格中找不到"));
    文字 = G.string.translate(文字);
    s = G.string.add(文字, n);
    G.debug.print(s, BeColor.fromBeConst("255,0,0,255"), BeBool.fromBeConst("0"));
  }
  r = G.readExcel2<BeString>(ID, BeString.fromBeConst("文字"), BeString.fromBeConst("规则"));
  return r;
});
```

```ts
public 读取整数规则 = BeScript({ name: "读取整数规则", retVar: "ret" })((n: BeString) => {
  var ret: BeLong
  var ID: BeLong
  var 文字: BeString
  var s: BeString
  ID = G.findExcel2<BeString>(BeString.fromBeConst("name"), n, BeString.fromBeConst("规则"));
  if (G.long.lt(ID, BeLong.fromBeConst("0"))) {
    文字 = G.create.string(BeString.fromBeConst("表格中找不到"));
    文字 = G.string.translate(文字);
    s = G.string.Format(BeString.fromBeConst("%1 %2"), 文字, n);
    G.debug.print(s, BeColor.fromBeConst("255,50,50,205"), BeBool.fromBeConst("0"));
  }
  ret = G.readExcel2<BeLong>(ID, BeString.fromBeConst("整数值"), BeString.fromBeConst("规则"));
  return ret;
});
```

## 7) 示例：遍历 ID 列表，读一个“二维开关表”（碰撞层级）

```ts
private clientStart = EventGroup<[$mapIndex: BeFloat, $rule: BeString], void>({
  碰撞层关系设定: BeScript({ name: "碰撞层关系设定", color: [255, 222, 0] })(($mapIndex: BeFloat, $rule: BeString) => {
    var ID数据列表: BeList
    var 循环次数_纵: BeFloat
    var 列表编号_纵: BeFloat
    var 对象层序号_整数: BeLong
    var 列表编号_横: BeFloat
    var 循环次数_横: BeFloat
    var 对象层序号ID: BeLong
    var 列名: BeString
    var 布尔_碰撞开关: BeBool
    ID数据列表 = G.map.excelGetIDList2(BeString.fromBeConst("碰撞层级设置"));
    循环次数_纵 = ID数据列表.count();
    列表编号_纵 = G.create.float(BeFloat.fromBeConst("0"));
    while (G.float.lt(列表编号_纵, 循环次数_纵)) {
      对象层序号_整数 = ID数据列表.read<BeLong>(列表编号_纵);
      列表编号_横 = G.create.float(BeFloat.fromBeConst("0"));
      循环次数_横 = G.float.add(列表编号_纵, BeFloat.fromBeConst("1"));
      while (G.float.lt(列表编号_横, 循环次数_横)) {
        对象层序号ID = 列表编号_横.toLong();
        列名 = G.create.string(对象层序号ID);
        布尔_碰撞开关 = G.readExcel2<BeBool>(对象层序号_整数, 列名, BeString.fromBeConst("碰撞层级设置"));
        G.layer.enableCollide(列表编号_纵, 列表编号_横, 布尔_碰撞开关);
        列表编号_横 = G.float.add(列表编号_横, BeFloat.fromBeConst("1"));
      }
      列表编号_纵 = G.float.add(列表编号_纵, BeFloat.fromBeConst("1"));
    }
    return;
  }),
});
```

## 8) 示例：GM 名单（遍历行，按列名读 Long）

```ts
private clientStart = EventGroup<[$mapIndex: BeFloat, $rule: BeString], void>({
  GM判断: BeScript({ name: "GM判断", color: [255, 255, 255] })(($mapIndex: BeFloat, $rule: BeString) => {
    var playerObj: BePlayer
    var playerID: BeLong
    var GMlist: BeList
    var totalF: BeFloat
    var totalL: BeLong
    var index: BeLong
    var userID: BeLong
    var key: BeBool
    playerObj = G.getCurrentPlayer();
    playerID = playerObj.id();
    GMlist = G.map.excelGetIDList2(BeString.fromBeConst("GM名单"));
    totalF = GMlist.count();
    totalL = totalF.toLong();
    index = G.create.long(BeLong.fromBeConst("0"));
    while (G.long.lt(index, totalL)) {
      userID = G.readExcel2<BeLong>(index, BeString.fromBeConst("用户编号"), BeString.fromBeConst("GM名单"));
      if (G.long.equal(playerID, userID)) {
        this.是GM = G.create.bool(BeBool.fromBeConst("1"));
        break;
      }
      index = G.long.add(index, BeLong.fromBeConst("1"));
    }
    key = G.keyboard.keyHeld2(BeEnum.fromBeConst<KeyCode>(KeyCode.H));
    if (G.create.bool(key)) {
      this.是GM = G.create.bool(BeBool.fromBeConst("1"));
    }
    if (G.create.bool(this.是GM)) {
      Act.byName<Device_参数调节模块_255>("参数调节模块").初始化快捷调试面板();
    }
    return;
  }),
});
```

## 9) 示例：用"等级"当行 ID，按列名读多种类型

下面示例见：`../../assets/unit/attribute-read-calc.md`

## 10) 常见坑（按“症状”排查）

- `Excel_File` 写错：文件名/表名不一致（最常见），先对照 `表格/` 下的文件名。
- `alias` 写错：列名必须和表头一致；改了表头就要同步改脚本。
- `findExcel2` 找不到：返回负数；不要把负数当作正常行 ID 继续参与复杂逻辑（示例里至少会打红字提示）。
- 类型对不上：同一列不要混填“数字/文本/布尔”，否则读出来的结果很难预期。

## 相关文档

- `../concepts/test-debug-log.md`
- `../concepts/unit-player-streamer-monster.md`
- `localization-implementation.md`
- `palette-table-usage.md`
