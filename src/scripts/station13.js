function changeBackgroundColor(e) {
  // テキスト要素を取得
  const textElement = document.getElementById("text");

  // トグルボタンの状態をチェック
  if (e.target.checked) {
    // トグルボタンがオンのとき
    textElement.style.backgroundColor = "red"; // 背景色を赤色に変更
  } else {
    // トグルボタンがオフのとき
    textElement.style.backgroundColor = "white"; // 背景色を白色に変更
  }
}
