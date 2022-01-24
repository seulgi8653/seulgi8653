// node_modules의 express 패키지를 가져온다.
//서버를 매우 쉽게 짤 수 있게 도와주는 라이브러리입니다. 덕분에 코드 두줄 쓰면 서버 생성 끝임
var express = require('express')

//app이라는 변수에 express 함수의 변환 값을 저장한다.
var app = express()

//라우터 모듈인 main.js 를 불러와서 app 에 전달해줍니다.
var router = require('./routes/main')(app);

//서버가 읽을 수 있도록 HTML 의 위치를 정의해줍니다.
app.set('views', __dirname + '/views');

//서버가 HTML 렌더링을 할 때, EJS 엔진을 사용하도록 설정합니다.
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

var server = app.listen(3000, function(){
    console.log("Express server has started on port 3000")
});

//정적파일 제공(CSS,js,html등)
//public' 이라는 디렉터리 밑에 있는 데이터들은 웹브라우저의 요청에 따라 서비스를 제공
app.use(express.static('public'));

//환경변수에서 port를 가져온다. 환경변수가 없을시 5050포트를 지정한다.
// var port = app.listen(process.env.PORT || 5050);

//REST API의 한가지 종류인 GET 리퀘스트를 정의하는 부분입니다.
//app.get이라고 작성했기 때문에 get 요청으로 정의가 되고
//app.post로 작성할 경우 post 요청으로 정의가 됩니다.
//REST API의 종류 (get, post, update, delete 등등)을 사용하여 End Point를 작성하실 수 있습니다.
// app.get('/', function(req, res) {
//     res.send("<h1>Express server Start</h1>")
// })

// express 서버를 실행할 때 필요한 포트 정의 및 실행 시 callback 함수를 받습니다
// app.listen(port, function() {
//     console.log('start! express server');
// })