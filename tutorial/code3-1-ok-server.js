const http = require('http');
const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html'); // 응답 헤더 설정
  res.end('OK'); // OK 응답하고 종료
});

server.listen('3000', () => console.log('OK 서버 시작!')); // 서버 접속 대기
