var express = require('express')
var app = express()
var pug = require('pug')
app.set('views', './views')
app.set('view engine', 'pug')

app.use('/', express.static('public'))
app.use('/assets/', express.static('assets'))

// 기본라우팅
app.get('/', function (req, res){res.render('reservations')})

// 예약목록
app.get('/reservations', function (req, res){res.render('reservations')})

// 객실목록
app.get('/calendar', function (req, res){res.render('calendar')})

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

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})