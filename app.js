let express=require('express')
let app=express()
app.get('/*',express.static('./dist'))
app.listen(8000)