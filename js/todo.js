function get_todos() { //以前入れたリストの呼びだし？
    var todos = new Array; //「todos」は複数のデータを含む配列
    var todos_str = localStorage.getItem('todo'); //「todos_str」にローカルストレージから「todo」を入れる
    if (todos_str !== null) { //もしtodos_strが空じゃなかったら
        todos = JSON.parse(todos_str); //todos_strに入っているであろう文字列を解析したものをtodosに入れる？
    }
    return todos;　//返します
}

function get_finished(){ //終えた数の呼び出し
    var finished 
    var finished_str = localStorage.getItem('fini');
    finished = JSON.parse(finished_str);
    return finished;
}

function add() { //リストの追加
    var task = document.getElementById('task').value; //「task」にid task内のvalue属性の値を取得
    //「getElementById」は、任意のHTMLタグで指定したIDにマッチするドキュメント要素を取得するメソッド
 
    var todos = get_todos();
    todos.push(task); //todosにtaskを入れる？
    localStorage.setItem('todo', JSON.stringify(todos)); //ローカルに("名称","値")を追加
 
    show();
 
    return false;　
}
 
function remove() { //消す
    var id = this.getAttribute('id'); //取得したい値を持ったidの値をidに？
    var todos = get_todos();　
    todos.splice(id, 1); //idを一つ消す？
    //配列名.splice() …… 配列から要素を削除・追加して組み替える
    localStorage.setItem('todo', JSON.stringify(todos));

    var finished = get_finished();
    finished ++;
    localStorage.setItem('fini', JSON.stringify(finished));
    console.log(finished);
 
    show();
 
    return false;
}
 
function show() {
    var todos = get_todos();
 
    var html = '<ul>';　
    for(var i=0; i<todos.length; i++) { //iがtodosの数より小さいときに実行、終わったたら１足す
        //html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">×</button></li>';
        html += '<li><button style="font-size:100%" class="remove" id="i">　</button>' + todos[i] + '</li>';
    };
    html += '</ul>';
    document.getElementById('todos').innerHTML = html; //上の文をhtmlにぶち込みます
 
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++){
        buttons[i].addEventListener('click', remove);
    };
    
}

//リセットのやつ
window.onload = function(){
    document.getElementById("reset").addEventListener("click", function(){ //resetIDのあるところをクリックしたら起こります
      finished = get_finished(); 
      finished =0; //０代入してリセット
      localStorage.setItem('fini', JSON.stringify(finished)); //リセットしたことをローカルストレージに教える
      console.log(finished);
      //カウントのためのコーど
    })
}

var finished = get_finished();
var count = document.getElementById("count_text");

var todos = get_todos();
console.log(todos.length);
console.log(todos);


//document.getElementById('add').addEventListener('click', add);
//show();



