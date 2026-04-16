# Maa Support Extension

[文档 | Document | 문서](./release/README.md)

## 开发 | Development | 개발

```shell
pnpm i
npm run dev   # dev模式启动前端, 可热重载, 使用Run Extension进行调试
npm run watch # build模式启动前端, 不可热重载, 使用Run Extension As Release进行调试
```

### pkgs/extension

插件后端 | backend of extension | 익스텐션 백엔드

### pkgs/webview

插件前端 | frontend of extension | 익스텐션 프론트엔드

### pkgs/types

前后端公用类型 | common types for both the frontend and backend | 프론트엔드/백엔드 공용 타입

### pkgs/utils

后端工具 | backend tools | 백엔드 유틸리티

### pkgs/locale

国际化文案 | Localization texts | 현지화 텍스트

### pkgs/maa-server

MaaFw 独立服务进程 | MaaFw standalone service process | MaaFw 독립 서비스 프로세스

### pkgs/maa-server-proto

MaaFw 服务协议 | MaaFw service protocol | MaaFw 서비스 프로토콜

### pkgs/pipeline-manager

索引服务 | index service | 인덱스 서비스

### pkgs/maa-tasker

Maa 任务解析计算库 | Maa task parser & evaluator | Maa 작업 파서 및 평가기

### pkgs/maa-checker

@nekosu/maa-checker

### pkgs/simple-parser

simple LL(*) parser
