# 项目说明
此插件基于jquery，主要用途
1. 操作光标在文本中的位置（textarea和input）
2. 在制定位置插入文字，选中制定的文字片段

# 使用方法
## 1. 安装
```
bower install jquery --save
bower install jquery-cursor --save
```

## 2. 引入
```
<script src="jquery.js"><script>
<script src="jquery-cursor.js"><script>
```
## 3. 使用
### 3.1 基本用法
```
$('#textAreaId').cursor({
  "text":"这是插入的一些文字，哪些位置被选中由下面两个参数决定",
  "beginPos":2,  // 开头从0开始计数
  "endPos":5    // 如果省略，则从beginPos一直选中到text的结尾
);
```
//todo
1. 添加IE兼容性
2. 添加tab切换在多个位置跳转选中