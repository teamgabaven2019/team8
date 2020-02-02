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
		html += '<li><button style="font-size:100%" class="remove" id="i">◻︎</button>' + todos[i] + '</li>';
		//html += '<input type="checkbox" name="check" value="apple">'+ todos[i];
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

document.getElementById('add').addEventListener('click', add);
show();
  

/********************************************************************************

	SYNCER 〜 知識、感動をみんなと同期(Sync)するブログ

	* 配布場所
	https://syncer.jp/jquery-modal-window

	* 最終更新日時
	2015/08/17 15:55

	* 作者
	あらゆ

	** 連絡先
	Twitter: https://twitter.com/arayutw
	Facebook: https://www.facebook.com/arayutw
	Google+: https://plus.google.com/114918692417332410369/
	E-mail: info@syncer.jp

	※ バグ、不具合の報告、提案、ご要望など、お待ちしております。
	※ 申し訳ありませんが、ご利用者様、個々の環境における問題はサポートしていません。

********************************************************************************/


var modal_content = "#modal-content-0"+finished;
console.log(modal_content);

$(function(){

	//モーダルウィンドウを出現させるクリックイベント
	$("#i.remove").click( function(){
	
		//キーボード操作などにより、オーバーレイが多重起動するのを防止する
		$( this ).blur() ;	//ボタンからフォーカスを外す
		if( $( "#modal-overlay" )[0] ) return false ;		//新しくモーダルウィンドウを起動しない (防止策1)
		//if($("#modal-overlay")[0]) $("#modal-overlay").remove() ;		//現在のモーダルウィンドウを削除して新しく起動する (防止策2)
	
		//オーバーレイを出現させる
		//$( "body" ).append( '<div id="modal-overlay"></div>' ) ;
		//$( "#modal-overlay" ).fadeIn( "fast" ) ;
	
		//コンテンツをセンタリングする
		centeringModalSyncer() ;
	
		//コンテンツをフェードインする
		$( modal_content ).fadeIn( "fast" ) ;
	
		//[#modal-overlay]、または[#modal-close]をクリックしたら…
		$( "#modal-overlay,#modal-close" ).unbind().click( function(){

			//[#modal-content]と[#modal-overlay]をフェードアウトした後に…
			$( modal_content ).fadeOut( "slow" , function(){
	
				//[#modal-overlay]を削除する
				//$('#modal-overlay').remove() ;
	
			} ) ;
	
		} ) ;
	
	} ) ;
	
	//リサイズされたら、センタリングをする関数[centeringModalSyncer()]を実行する
	$( window ).resize( centeringModalSyncer ) ;
	
		//センタリングを実行する関数
		function centeringModalSyncer() {
	
			//画面(ウィンドウ)の幅、高さを取得
			var w = $( window ).width() ;
			var h = $( window ).height() ;
	
			// コンテンツ(#modal-content)の幅、高さを取得
			// jQueryのバージョンによっては、引数[{margin:true}]を指定した時、不具合を起こします。
	//		var cw = $( "#modal-content" ).outerWidth( {margin:true} );
	//		var ch = $( "#modal-content" ).outerHeight( {margin:true} );
			var cw = $( modal_content ).outerWidth();
			var ch = $( modal_content ).outerHeight();
	
			//センタリングを実行する
			$( modal_content ).css( {"left": ((w - cw)/2) + "px","top": ((h - ch)/2) + "px"} ) ;
	
		}
	
    } ) ;

