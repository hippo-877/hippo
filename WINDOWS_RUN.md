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
   - 安装依赖 `npm install --no-fund --no-audit`
   - 启动开发服务并固定地址：`http://127.0.0.1:5173`
4. 脚本会自动尝试打开浏览器；如果没自动打开，请手动访问：
   - `http://127.0.0.1:5173`

> 这个脚本会在结束前 `pause`，不会“秒退”，你可以看清具体报错。

---

## 如果卡在 Node/NPM 版本后面

这通常表示正在执行依赖安装（首次运行可能较慢）。

请改用 CMD/PowerShell 手工执行，便于看完整日志：

```bat
npm install --no-fund --no-audit
npm run dev -- --host 127.0.0.1 --port 5173 --strictPort
```

然后浏览器打开：`http://127.0.0.1:5173`

---

## 常见问题

- **双击 `index.html` 空白**：这是 React+Vite 工程，必须通过开发服务器运行，不能直接双击 HTML。
- **窗口秒退/看不到报错**：请在 CMD 或 PowerShell 中执行 `scripts\\start_windows.bat`，可完整查看日志。
- **端口被占用**：脚本使用 `--strictPort`，如 5173 被占用会明确报错。请关闭占用进程后重试。
- **依赖安装失败**：检查网络/代理，或切换 npm 源后重试。
