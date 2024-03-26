/**
このコードは、localStorageの代わりにsessionStorageを使用する点を除けば、前回のlocalStorageを使った例と同様の動作をします。

1. `getQueryParam`関数で、URLのクエリパラメータから`data`の値を取得します。
2. `saveDataToSessionStorage`関数で、取得したデータをsessionStorageに保存します。
3. `main`関数内で、`getQueryParam('data')`を実行し、dataパラメータが存在する場合はsessionStorageに保存します。
4. `window.addEventListener('load', main)`により、ページ読み込み時に`main`関数が実行されます。

実際の動作例は以下のようになります。

URLが `https://example.com?data=hello` の場合:
- `getQueryParam('data')`で `'hello'` が取得されます。
- `saveDataToSessionStorage('hello')`が実行され、sessionStorageに `'hello'` が保存されます。
- コンソールに `データ「hello」をsessionStorageに保存しました。` と出力されます。

URLに `data` パラメータがない場合:
- `getQueryParam('data')`で `null` が取得されます。
- sessionStorageへの保存は行われません。
- コンソールに `dataクエリパラメータが存在しません。` と出力されます。

sessionStorageは、ブラウザのタブ/ウィンドウが閉じられるまでのみデータが保持される一時的なストレージです。必要に応じて、localStorageやCookieなど、他のストレージ方式を選択することができます。
*/

// URLからクエリパラメータを取得する関数
function getQueryParam(name) {
  const url = new URL(window.location.href);
  return url.searchParams.get(name);
}

// データをsessionStorageに保存する関数
function saveDataToSessionStorage(data) {
  sessionStorage.setItem('data', data);
}

// データをsessionStorageから取得する関数
function getDataFromSessionStorage(name) {
  return sessionStorage.getItem(name);
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
  let data = getDataFromSessionStorage('data');

  if (data) {
    console.log(`sessionStorageからデータ「${data}」を取得しました。`);
    setTextToElement('test-session-data', data);
  } else {
    console.log('sessionStorageにデータが存在しません。');
  }

  data = getQueryParam('data');
  if (data) {
    saveDataToSessionStorage(data);
    console.log(`データ「${data}」をsessionStorageに保存しました。`);
  } else {
    console.log('dataクエリパラメータが存在しません。');
  }
}

// ページ読み込み時に実行
window.addEventListener('load', main);
