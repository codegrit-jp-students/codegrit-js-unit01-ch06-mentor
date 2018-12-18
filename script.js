
let score = 0;

function showScore(){
  if(score==3){
    document.getElementById("score-message").innerHTML="正解数は"+score+"です。合格！";
  }else if(score==2){
    document.getElementById("score-message").innerHTML="正解数は"+score+"です。惜しい！";
  }else if(score==1){
    document.getElementById("score-message").innerHTML="正解数は"+score+"です。まあまあ！";
  }else {
    document.getElementById("score-message").innerHTML="正解数は"+score+"です。残念！";
  }
}

function answerQuiz1(){
    const quiz_1 = document.getElementById( "quiz-1" ) ;
    switch (quiz_1.answer.value) {
      case "a":
        console.log("1問目の"+quiz_1.answer.value+"を選択しました");
        console.log("不正解です");
        break;
        case "b":
        score++;
        console.log("1問目の"+quiz_1.answer.value+"を選択しました");
        console.log("正解です");
        break;
        case "c":
        console.log("1問目の"+quiz_1.answer.value+"を選択しました");
        console.log("不正解です");
        break;
      default:
      alert("1問目の答えを入力してください");
    }
    console.log("現在のトータルスコア："+score);
}

function answerQuiz2(){
    const quiz_2 = document.getElementById( "quiz-2" ) ;
    switch (quiz_2.answer.value) {
      case "a":
        console.log("2問目の"+quiz_2.answer.value+"を選択しました");
        console.log("正解です");
        score++;
        break;
        case "b":
        console.log("2問目の"+quiz_2.answer.value+"を選択しました");
        console.log("不正解です");
        break;
        case "c":
        console.log("2問目の"+quiz_2.answer.value+"を選択しました");
        console.log("不正解です");
        break;
      default:
      alert("2問目の答えを入力してください");
    }
    console.log("現在のトータルスコア："+score);
}

function answerQuiz3(){
    const quiz_3 = document.getElementById( "quiz-3" ) ;
    switch (quiz_3.answer.value) {
      case "a":
        console.log("3問目の"+quiz_3.answer.value+"を選択しました");
        console.log("不正解です");
        break;
        case "b":
        console.log("3問目の"+quiz_3.answer.value+"を選択しました");
        console.log("不正解です");
        break;
        case "c":
        score++;
        console.log("3問目の"+quiz_3.answer.value+"を選択しました");
        console.log("正解です");
        break;
      default:
      alert("3問目の答えを入力してください");
    }
    console.log("現在のトータルスコア："+score);
}
