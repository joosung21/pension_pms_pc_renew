var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))

// 기본라우팅
app.get('/', function (req, res){res.render('hotel/reservations')})

// 로그인
app.get('/login', function (req, res){res.render('login')})

// 예약목록
app.get('/reservations', function (req, res){res.render('reservations')})

// 객실목록
app.get('/calendar', function (req, res){res.render('calendar')})

// 방막기
app.get('/close', function (req, res){res.render('close')})

// 정산목록
app.get('/transaction', function (req, res){res.render('transaction')})

// 판매 환경설정
app.get('/setting/rooms', function (req, res){res.render('setting/rooms')})
app.get('/setting/rooms/edit', function (req, res){res.render('setting/room-edit')})
app.get('/setting/rooms/create', function (req, res){res.render('setting/room-create')})
app.get('/setting/services', function (req, res){res.render('setting/services')})
app.get('/setting/rateplan', function (req, res){res.render('setting/rateplan')})
app.get('/setting/extra', function (req, res){res.render('setting/extra')})

// 업체 환경설정
app.get('/setting/business', function (req, res){res.render('setting/business')})
app.get('/setting/plugin', function (req, res){res.render('setting/plugin')})
app.get('/setting/sms', function (req, res){res.render('setting/sms')})


//------------ TMON HOTEL EXTRANET ------------------------//

// 호텔 기본 라우팅
app.get('/hotel', function (req, res){res.render('hotel/reservations')})

// 예약목록
app.get('/hotel/reservations', function (req, res){res.render('hotel/reservations')})

// 요굼/재고관리
app.get('/hotel/chart', function (req, res){res.render('hotel/chart')})

// 설정
app.get('/hotel/setting/hotel', function (req, res){res.render('hotel/setting/hotel')})
app.get('/hotel/setting/rooms', function (req, res){res.render('hotel/setting/rooms')})
app.get('/hotel/setting/rooms/edit', function (req, res){res.render('hotel/setting/room-edit')})
app.get('/hotel/setting/price', function (req, res){res.render('hotel/setting/price')})
app.get('/hotel/setting/package', function (req, res){res.render('hotel/setting/package')})
app.get('/hotel/setting/package/create', function (req, res){res.render('hotel/setting/package-create')})
app.get('/hotel/setting/policy', function (req, res){res.render('hotel/setting/policy')})
app.get('/hotel/setting/history', function (req, res){res.render('hotel/setting/history')})






// Temporary ONDA website draft
app.get('/onda1', function (req, res){res.render('onda1')})
app.get('/onda2', function (req, res){res.render('onda2')})


app.listen(3000, function () {
  console.log('App listening on port 3000!')
})