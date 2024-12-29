# 🎯 习惯追踪应用

这是一个基于Next.js构建的习惯追踪应用，帮助用户培养良好习惯，跟踪每日任务完成情况，并获得成就奖励。

## 🛠️ 技术栈

- **框架**: Next.js 15.1.3
- **UI库**: React 19
- **样式**: TailwindCSS 3.4.1
- **动画**: Framer Motion 11.15.0
- **图表**: Chart.js 4.4.7
- **日期处理**: date-fns 4.1.0
- **数据同步**: WebDAV

## ✨ 功能特性

- ✅ 每日任务管理
- 📊 任务完成状态跟踪
- 📈 任务完成率可视化
- 🏆 成就系统
- 🌙 暗黑模式支持
- 💾 本地数据存储与同步

## 🖼️ 应用截图

![今日任务页面](docs/today.png)

## 🚀 安装与运行

1. 克隆仓库
   ```bash
   git clone https://github.com/your-repo/habit-tracker-app-nextjs.git
   cd habit-tracker-app-nextjs
   ```

2. 安装依赖
   ```bash
   pnpm install
   ```

3. 运行开发服务器
   ```bash
   pnpm dev
   ```

4. 打开浏览器访问 [http://localhost:3000](http://localhost:3000)

## 📂 项目结构

```
habit-tracker-app-nextjs/
├── public/            # 静态资源
├── src/
│   ├── app/           # 页面路由
│   ├── components/    # 可复用组件
│   ├── config/        # 应用配置
│   ├── hooks/         # 自定义Hooks
│   ├── providers/     # Context Providers
│   ├── store/         # 状态管理
│   ├── types/         # TypeScript类型定义
├── tailwind.config.ts # Tailwind配置
├── next.config.ts     # Next.js配置
├── package.json       # 项目依赖
```

## 🤝 贡献指南

欢迎贡献代码！请遵循以下步骤：

1. Fork项目
2. 创建新分支 (`git checkout -b feature/YourFeatureName`)
3. 提交更改 (`git commit -m 'Add some feature'`)
4. 推送分支 (`git push origin feature/YourFeatureName`)
5. 创建Pull Request

## 📜 许可证

MIT License
