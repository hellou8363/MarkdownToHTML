function checkEndChar() {
  // 배열 중 1(시작 태그 활성화 체크)인 인덱스 체크 후 끝 맺음 태그 처리
  // 제목 태그 체크 : <h1></h1> ~ <h6></h6>
  if (grammarCheck.indexOf(1) > -1 && grammarCheck.indexOf(1) < 6) {
    const number = grammarCheck.indexOf(1);
    $("#outputHTML").value += `</h${number + 1}>\n`;
    grammarCheck[number] = 0;
  }
}
