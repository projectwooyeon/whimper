/* build.py로 생성: src/remote.js */
(function(){
/* ============================================================
 * 실제 사이트용 서버 연결부 (예매 규칙은 전부 서버에 있고, 여기는 요청만 보냄)
 * ============================================================ */
function makeApi(url) {
  return {
    demo: false,
    call: function (action, payload) {
      if (!url) return Promise.resolve({ ok: false, error: '서버 주소(API_URL)가 설정되지 않았습니다.' });
      var body = JSON.stringify(Object.assign({ action: action }, payload || {}));
      return fetch(url, { method: 'POST', headers: { 'Content-Type': 'text/plain;charset=utf-8' }, body: body })
        .then(function (r) { return r.json(); });
    },
  };
}
window.makeApi = makeApi;

})();
