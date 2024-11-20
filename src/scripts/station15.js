function displayList() {
  // <div id="fruits"> を取得
  const fruitsDiv = document.getElementById("fruits");

  // <div id="fruits"> 内の <p> 要素を取得してリストデータを生成
  const fruits = Array.from(fruitsDiv.getElementsByTagName("p")).map(
    (p) => p.textContent
  );

  // リスト要素 (<ul>) を作成
  const ul = document.createElement("ul");

  // 各フルーツを <li> に変換して <ul> に追加
  fruits.forEach((fruit) => {
    const li = document.createElement("li");
    li.textContent = fruit;
    ul.appendChild(li);
  });

  // <div id="fruits"> の内容を置き換え
  fruitsDiv.innerHTML = ""; // 現在の内容をクリア
  fruitsDiv.appendChild(ul); // 作成したリストを追加
}
