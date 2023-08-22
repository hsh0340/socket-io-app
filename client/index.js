// socket io client 이용
const socket = io('ws://localhost:8080');

// server 로 부터 message 왔을 때 이벤트
socket.on('message', text => {
  const element = document.createElement('li');
  element.innerHTML = text;
  document.querySelector('ul').appendChild(element);
})

// send 버튼 눌렀을 때 event
document.querySelector('button').onclick = () => {
  const text = document.querySelector('input').value;
  console.log(text);
  // server로 message 보냄
  socket.emit('message', text);
}