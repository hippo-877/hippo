# Windows 启动说明

## 方式一：一键脚本（推荐）

1. 安装 Node.js LTS（18+，建议 20）。
2. 双击运行：`scripts\\start_windows.bat`
   - 或在 CMD/PowerShell 中执行：
   ```bat
   scripts\start_windows.bat
   ```
3. 脚本会自动执行：
   - 检查 Node / npm
   - 安装依赖 `npm install`
   - 启动开发服务 `npm run dev`
4. 终端出现 Vite 地址后，用浏览器打开（通常是 `http://localhost:5173`）。

> 这个脚本现在会在结束前 `pause`，不会“秒退”，你可以看清具体报错。

---

## 方式二：手工命令（便于排错）

在项目根目录执行：

```bat
npm install
npm run dev
```

---

## 常见问题

- **双击 `index.html` 空白**：这是 React+Vite 工程，必须通过开发服务器运行，不能直接双击 HTML。
- **窗口秒退/看不到报错**：请在 CMD 或 PowerShell 中执行 `scripts\\start_windows.bat`，可完整查看日志。
- **端口被占用**：Vite 会提示可用新端口，按提示地址访问即可。
- **依赖安装失败**：检查网络/代理，或切换 npm 源后重试。
