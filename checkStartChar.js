function checkStartChar(inputText, index) {
  let count = 0;

  // Markdown에서 #은 제목을 표현할 때 사용
  if (inputText[index] === "#") {
    count++;
    for (let j = 1; j < 6; j++) {
      if (inputText[index] !== inputText[index + j]) break;
      count++;
    }
    $("#outputHTML").value += `<h${count}>`;
    grammarCheck[count - 1] = 1; // 태그 활성화 체크
  }
  return count;
}
