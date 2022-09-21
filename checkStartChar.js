function checkStartChar(inputText, index) {
  let count = 0;

  // Markdown(#~######) -> HTML(<h1>~<h6>)
  if (inputText[index] === "#") {
    count++;
    for (let i = 1; i < 6; i++) {
      if (inputText[index + i] !== "#") break;
      count++;
    }
    $("#outputHTML").value += `<h${count}>`;
    grammarCheck[count - 1] = 1; // 태그 활성화 체크
  }

  // Markdown(---) -> HTML(<hr/>)
  if (inputText[index] === "-") {
    if (inputText[index + 1] === "-" && inputText[index + 2] === "-") {
      $("#outputHTML").value += `<hr/>`;
      count = 3;
    }
  }

  return count;
}
