const $ = (selector) => document.querySelector(selector);
// HTML 문법 체크를 위한 배열
const grammarCheck = [0, 0, 0, 0, 0, 0]; // 현재 h1 ~ h6까지만 체크 가능

$("#btn_convert").addEventListener("click", changeText);

function changeText() {
  // convert하는 문장이 중복 출력되지 않도록 초기화
  $("#outputHTML").value = "";
  const inputText = $("#inputMarkdown").value;

  for (let i = 0; i < inputText.length; i++) {
    // 문장 첫 글자 체크
    const count = checkStartChar(inputText, i);

    // 첫 글자 체크에서 이미 체크된 문자는 패스
    if (count > 0) {
      i += count;
      continue;
    }

    if (inputText[i] === "\n") {
      // 문장이 끝날 때마다 끝 맺음 태그가 필요한지 여부 체크
      checkEndChar();
      continue;
    }

    $("#outputHTML").value += inputText[i];
  }
}
