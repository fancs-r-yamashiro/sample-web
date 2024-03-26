/**
このコードでは、以下の処理が行われています。

1. `getQueryParam`関数で、URLのクエリパラメータから`data`の値を取得します。
2. `saveDataToLocalStorage`関数で、取得したデータをlocalStorageに保存します。
3. `main`関数内で、`getQueryParam('data')`を実行し、dataパラメータが存在する場合はlocalStorageに保存します。
4. `window.addEventListener('load', main)`により、ページ読み込み時に`main`関数が実行されます。

実際の動作例は以下のようになります。

URLが `https://example.com?data=hello` の場合:
- `getQueryParam('data')`で `'hello'` が取得されます。
- `saveDataToLocalStorage('hello')`が実行され、localStorageに `'hello'` が保存されます。
- コンソールに `データ「hello」をlocalStorageに保存しました。` と出力されます。

URLに `data` パラメータがない場合:
- `getQueryParam('data')`で `null` が取得されます。
- localStorageへの保存は行われません。
- コンソールに `dataクエリパラメータが存在しません。` と出力されます。

このコードでは、URLからクエリパラメータを取得する処理と、localStorageへの保存処理をそれぞれ関数として切り分けています。必要に応じて、エラーハンドリングや追加の処理を組み込むことができます。
*/

// URLからクエリパラメータを取得する関数
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// データをlocalStorageに保存する関数
function saveDataToLocalStorage(data) {
  localStorage.setItem('data', data);
}

// データをlocalStorageから取得する関数
function getDataFromLocalStorage(name) {
  return localStorage.getItem(name);
}

// 指定されたid要素にテキストを表示する関数
function setTextToElement(id, text) {
  const element = document.getElementById(id);
  if (element) {
    element.textContent = text;
  }
}

// メイン処理
function main() {
  let data = getDataFromLocalStorage('data');
  if (data) {
    console.log(`localStorageからデータ「${data}」を取得しました。`);
    setTextToElement('test-local-data', data);
  } else {
    console.log('localStorageにデータが存在しません。');
  }

  data = getQueryParam('data');
  if (data) {
    saveDataToLocalStorage(data);
    console.log(`データ「${data}」をlocalStorageに保存しました。`);
  } else {
    console.log('dataクエリパラメータが存在しません。');
  }
}

// ページ読み込み時に実行
window.addEventListener('load', main);
