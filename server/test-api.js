const http = require('http');

// 测试API端点
const testEndpoints = [
  '/api/health',
  '/api/info',
  '/api/users',
  '/api/products',
  '/api/articles',
  '/api/settings',
  '/api/data'
];

console.log('🧪 开始测试Express服务器API...\n');

let testsPassed = 0;
let testsFailed = 0;

function testEndpoint(endpoint) {
  return new Promise((resolve) => {
    const options = {
      hostname: 'localhost',
      port: 3002,
      path: endpoint,
      method: 'GET',
      timeout: 5000
    };

    const req = http.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });

      res.on('end', () => {
        try {
          const result = JSON.parse(data);
          if (result.success) {
            console.log(`✅ ${endpoint} - 成功 (状态码: ${res.statusCode})`);
            testsPassed++;
          } else {
            console.log(`❌ ${endpoint} - 失败: ${result.message}`);
            testsFailed++;
          }
        } catch (error) {
          console.log(`❌ ${endpoint} - 解析响应失败: ${error.message}`);
          testsFailed++;
        }
        resolve();
      });
    });

    req.on('error', (error) => {
      console.log(`❌ ${endpoint} - 请求失败: ${error.message}`);
      testsFailed++;
      resolve();
    });

    req.on('timeout', () => {
      console.log(`❌ ${endpoint} - 请求超时`);
      testsFailed++;
      req.destroy();
      resolve();
    });

    req.end();
  });
}

async function runTests() {
  for (const endpoint of testEndpoints) {
    await testEndpoint(endpoint);
    await new Promise(resolve => setTimeout(resolve, 100)); // 短暂延迟
  }

  console.log('\n📊 测试结果:');
  console.log(`✅ 通过: ${testsPassed}`);
  console.log(`❌ 失败: ${testsFailed}`);
  console.log(`📈 总计: ${testEndpoints.length}`);
  
  if (testsFailed === 0) {
    console.log('🎉 所有测试通过！Express服务器运行正常。');
  } else {
    console.log('⚠️  部分测试失败，请检查服务器状态。');
  }
}

runTests();