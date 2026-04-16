# Maa Support

## 针对 MaaFramework/MaaAssistantArknights 项目, 提供下列功能:

> 控制面板在左侧类似设置图标的面板中
>
> 功能均基于 `interface.json` 配置
>
> 插件根据打开文件夹的根目录是否有 `src/MaaCore` 文件夹来判定是否是 MaaAssistantArknights 项目

- 语义化资源分析
  - 查询任务定义
  - 查询任务引用
  - 补全任务
  - 补全图像路径
  - 校验任务
  - 校验图像路径
  - 多路径资源支持
- MaaPiCli功能 (仅MaaFramework项目)
  - 选择控制器
  - 选择资源
  - 添加并管理任务
  - 执行任务
- 截取图片 (依赖控制器提供截图能力)
- 裁剪图片

## For MaaFramework/MaaAssistantArknights project, providing following features:

> Control Panel stays at left, with an icon similar to settings.
>
> All features are based on `interface.json`
>
> Extension will check if `src/MaaCore` exists, to decide if it is MaaAssistantArknights project.

- Semantic resource analyze
  - Query task definition
  - Query task reference
  - Task autocompletion
  - Image path autocompletion
  - Task diagnostic
  - Image path diagnostic
  - Multiple paths of resource support
- Ability of MaaPiCli (MaaFramework project only)
  - Select controller
  - Select resource
  - Add and manipulate tasks
  - Run tasks
- Take screenshots (Relying on controllers for screenshot ability)
- Crop images

## MaaFramework/MaaAssistantArknights 프로젝트를 위한 기능:

> 컨트롤 패널은 왼쪽 사이드바의 설정 아이콘과 유사한 패널에 있습니다.
>
> 모든 기능은 `interface.json` 설정을 기반으로 합니다.
>
> 익스텐션은 열린 폴더의 루트에 `src/MaaCore` 폴더가 있는지 확인하여 MaaAssistantArknights 프로젝트인지 판단합니다.

- 시맨틱 리소스 분석
  - 작업 정의 조회
  - 작업 참조 조회
  - 작업 자동 완성
  - 이미지 경로 자동 완성
  - 작업 진단
  - 이미지 경로 진단
  - 다중 경로 리소스 지원
- MaaPiCli 기능 (MaaFramework 프로젝트 전용)
  - 컨트롤러 선택
  - 리소스 선택
  - 작업 추가 및 관리
  - 작업 실행
- 스크린샷 캡처 (컨트롤러의 스크린샷 기능에 의존)
- 이미지 자르기

## 提供的vscode命令

使用 Ctrl Shift P (MacOS下 Command Shift P) 打开命令面板后搜索使用

- Maa: 打开Maa日志
  - 打开MaaFramework的日志.
- Maa: 打开插件日志
  - 打开插件的日志.
- Maa: 跳转到任务
  - 搜索并跳转到指定任务.
- Maa: 执行任务
  - 基于interface配置创建实例, 然后执行指定任务.
- Maa: 执行interface
  - 基于interface配置创建实例, 然后执行所有配置任务.
- Maa: 打开截图工具
  - 打开 进行截图裁剪 的 Webview.
- Maa: 展示控制面板
  - 展示并聚焦 控制面板.
- Maa: 选择 MaaFramework 版本
  - 下载并切换插件自身使用的 MaaFramework.
- Maa: 选择下载源
  - 选择下载插件自身使用的 MaaFramework 的镜像源.

## Provided vscode commands

Use Ctrl Shift P (Command Shift P for MacOS) to open command panel and search

- Maa: open maa log
  - Open the log of MaaFramework.
- Maa: open extension log
  - Open the log of extension.
- Maa: goto task
  - Search and navigate to certain task.
- Maa: launch task
  - Create instance based on interface, and launch the specified task.
- Maa: launch interface
  - Create instance based on interface, and launch all configured tasks.
- Maa: open crop tool
  - Open webview for taking screenshots and cropping images.
- Maa: reveal control panel
  - Reveal and focus control panel.
- Maa: select MaaFramework version
  - Download and change the version of MaaFramework used by extension.
- Maa: select fetch registry
  - Select the mirrors to download MaaFramework used by extension.

## 제공되는 vscode 명령어

Ctrl Shift P (MacOS에서는 Command Shift P)로 명령 팔레트를 열고 검색하여 사용

- Maa: Maa 로그 열기
  - MaaFramework의 로그를 엽니다.
- Maa: 플러그인 로그 열기
  - 익스텐션의 로그를 엽니다.
- Maa: 작업으로 이동
  - 특정 작업을 검색하고 이동합니다.
- Maa: 작업 실행
  - interface 설정을 기반으로 인스턴스를 생성하고 지정된 작업을 실행합니다.
- Maa: interface 실행
  - interface 설정을 기반으로 인스턴스를 생성하고 설정된 모든 작업을 실행합니다.
- Maa: 스크린샷 도구 열기
  - 스크린샷 및 이미지 자르기를 위한 Webview를 엽니다.
- Maa: 컨트롤 패널 표시
  - 컨트롤 패널을 표시하고 포커스합니다.
- Maa: MaaFramework 버전 선택
  - 익스텐션에서 사용하는 MaaFramework를 다운로드하고 버전을 변경합니다.
- Maa: 다운로드 소스 선택
  - 익스텐션에서 사용하는 MaaFramework를 다운로드할 미러 소스를 선택합니다.

