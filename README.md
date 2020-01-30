# 时间账本: 记录点滴，沉迷数据 :)

## 介绍

本项目想法是基于自己的实际需求而产生的。

一直有写日记的习惯（使用[OneNote](https://products.office.com/en-us/onenote/digital-note-taking-app)），其中有一项就像`today.txt`类似格式的记录方式，然后一个星期，一个月总结统计一次自己特别在意的方面的时长，比如学习。其中存在的问题就是，人工成本还是很大的，而且统计的数据不直观。很早就有写这个项目的冲动，奈何是个前端渣*(:з」∠)*（完善这个项目是我继续学习的动力

曾经也使用过时间管理方面的软件，比如须臾、种树、番茄 TODO、时间块（坚持使用最久）等。各有优劣，其中最大的缺点就是只能手机使用；而我现在比较常用的是电脑，我认为打开便签打字时间段，比解锁手机打开软件选中滑动滑块要方便的多；还可以定制自己特殊的需求，比如日历总览，对于我回顾一个星期一个月的所作还是很有必要的。

数据本地化，无需搭建后端，待日后搭建`GitHub Pages`，迁移使用。

## 技术栈

- 全面拥抱`TypeScript`、`React Hooks`
- 使用`react-create-app`脚手架初始化项目
- `react`、`redux`、`react-router` 全家桶
- 使用 `styled-components` 构建页面组件样式
- 使用`redux-saga`抽离异步操作流程

## 使用说明

1. 克隆 [Daily Ledger Frontend 项目](https://github.com/KiyonamiYu/daily-ledger-frontend) 和 [Daily Ledger Tool 项目](https://github.com/KiyonamiYu/daily-ledger-tool)，放置在同一目录。

```
git clone https://github.com/KiyonamiYu/daily-ledger-frontend.git
git clone https://github.com/KiyonamiYu/daily-ledger-tool.git
```

2. 下载依赖，启动项目

```
cd daily-ledger-frontend
yarn
yarn start
```

## 更新日志

### [Unreleased] - ????-??-??

#### Added

- 一周数据可视化图表分析

### [0.1.1] - 2020-01-30

#### Changed

- 使用`TypeScript`完全重构项目
- 创建 [Daily Ledger Tool 项目](https://github.com/KiyonamiYu/daily-ledger-tool)，分离分析`today.txt`小工具
- 手动构建日历组件，高度定制化

#### Removed

- 决定不使用`Ant Design`依赖

### [0.0.1] - 2019-09-16

#### Added

- 添加分析`today.txt`小工具
- 实现日历的基本功能---查看当天主要事件

## 界面展示

### [0.1.1] 版本

![daily-ledger-v000101](https://raw.githubusercontent.com/514723273/.md-Pictures/master/daily-ledger-v000101.png)
