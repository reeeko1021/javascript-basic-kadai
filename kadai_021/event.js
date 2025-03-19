//各HTML要素を作成し、定数に代入
const btn = document.getElementById('btn');
const text =document.getElementById('text');

//クリックしたら2秒後にイベント処理を実行
btn.addEventListener('click', () => {
    setTimeout(() => {
        text.textContent = 'ボタンをクリックしました';
       },2000);
    });
