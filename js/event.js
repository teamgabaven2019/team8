var products = {

    a:[
  
      '1月',
  
      '2月',
  
    ],
  
    b:[
  
      '1月',
  
      '2月',
  
    ],
  
    c:[
  
      '1月',
  
      '2月',
  
      '3月',
  
    ],
  
  };
  
  
  
  var noValue = $('#child').html(); //#childの最初の状態を保存
  
  
  
  $('#parent').on('change', function(){
  
    var cat = $(this).val(); //選択された項目のvalueを取得
  
    if(cat){ //valueに何か値が入っていた場合
  
      var item = products[cat]; //リストからカテゴリに登録された製品の配列を取得
  
      $('#child').html('');
  
      var option;
  
      for(var i = 0; i < item.length; i++){
  
        option = '<option value="' + item[i] + '">' + item[i] + '</option>';
  
        $('#child').append(option);
  
      }
  
    }else{ //valueに何も値が入っていない場合
  
      $('#child').html(noValue); //保存された最初の状態に戻す
  
    }
  