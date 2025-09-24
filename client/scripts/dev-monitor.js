#!/usr/bin/env node

const { spawn } = require('child_process');
const chalk = require('chalk');

console.log(chalk.blue('🚀 启动开发服务器监控...'));

// 启动Next.js开发服务器
const devProcess = spawn('npm', ['run', 'dev'], {
  stdio: 'pipe',
  shell: true,
  env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=4096' }
});

// 监听输出
devProcess.stdout.on('data', (data) => {
  const output = data.toString();
  
  // 检测热更新事件
  if (output.includes('Compiled')) {
    const match = output.match(/Compiled(?:.*in\s+(\d+)ms)?/);
    if (match && match[1]) {
      const compileTime = parseInt(match[1]);
      const color = compileTime < 100 ? chalk.green : compileTime < 500 ? chalk.yellow : chalk.red;
      console.log(color(`⚡ 热更新完成: ${compileTime}ms`));
    }
  }
  
  // 显示服务器状态
  if (output.includes('ready')) {
    console.log(chalk.green('✅ 开发服务器已启动'));
    console.log(chalk.cyan('🌐 访问: http://localhost:3000'));
  }
  
  process.stdout.write(output);
});

// 错误处理
devProcess.stderr.on('data', (data) => {
  process.stderr.write(chalk.red(data.toString()));
});

// 进程退出处理
devProcess.on('close', (code) => {
  console.log(chalk.yellow(`开发服务器退出，代码: ${code}`));
});

// 优雅退出
process.on('SIGINT', () => {
  console.log(chalk.yellow('\n🛑 正在停止开发服务器...'));
  devProcess.kill('SIGINT');
  process.exit(0);
});