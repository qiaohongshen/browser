最近频繁遇到Chrome崩溃的问题，从前段时间推出的 Google Chrome 78.0.x版 和近期推出的 Google Chrome 79.0.x版 类似问题时有发生。 
出现类似问题的浏览器及版本：
Google Chrome 78.0.x（2019年10月）
Google Chrome 79.0.x（2019年12月）
Microsoft Edge 78.0.x
Microsoft Edge 79.0.x

## 主要原因：
引发此类问题的真凶，就是 Chrome 78版本 之后引入的‘渲染器代码完整性保护’（Renderer Code Integrity Protection）方案。 
Chrome 团队已经承认了用户提交的标签页崩溃报告，并希望大家在帮助论坛中分享相关信息，以便更好地修复 Chrome 新引入的安全功能可能引发第三方安全软件的误伤问题。。

> 这种情况在赛门铁克 SEP（14.0.3929.1200 和更早版本）上尤其严重，因此谷歌建议受影响用户尽快更新到 14.2+ 版本。
此外，谷歌建议其它用户在必要时禁用 Chrome 78 的“渲染器代码完整性保护”（Renderer Code Integrity）功能。

解决方案：
1. 禁用渲染器代码完整性保护（Renderer Code Integrity）功能 ，
- 右键点击桌面上的 Chrome 快捷方式，然后选择‘属性’。
- 在目标字段尾部添加如下命令行 `--disable-features=RendererCodeIntegrity`
- 点击‘应用’并重新启动 Chrome。

2. 我们通过测试发现启用沙盒模式也能正常使用，在Chrome属性里面把目标改为 `--test-type --no-sandbox`

3.将该浏览器的可执行文件，从如下路径的“Chrome.exe”换成“Chrom.exe”,并在图标属性里面的目标也修改为chrom.exe。

`C:\Program Files (x86)\Google\Chrome\Application`
