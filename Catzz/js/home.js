// home.js

//添加事件监听器
document.addEventListener('DOMContentLoaded', function() {
    // 获取显示逐字输入文本的元素
    const textElement = document.getElementById('typing-text');
    // 要逐字显示的文本内容
    const textContent = '会动了好耶，原来是CSS的问题';
    console.log('Hello World')
    // 初始化索引
    let index = 0;
  
    // 逐字显示函数
    function typeNextChar() {
      // 将下一个字符添加到文本元素，+= 是追加赋值运算符，它将右侧的值追加到左侧的值上
      //textContent是 textElement 元素的属性
      textElement.textContent += textContent[index];
      // 更新索引
      index++;
  
      // 如果未显示完所有字符，继续下一个字符的逐字显示
      if (index < textContent.length) {
        setTimeout(typeNextChar, 100);
      }
    }
  
    // 开始逐字显示
    typeNextChar();
  });
  