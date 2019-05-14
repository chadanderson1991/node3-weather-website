const request = require('request')

const forecast = (latitude, longitude, callback) => {

    const url = 'https://api.darksky.net/forecast/20563de2743da6d3287602b82534aed9/'+latitude+','+longitude
    
    request({url, json: true}, (error, {body}) => {
    if(error)
    {
        callback('unable to connect to weather service!')
    }else if(body.error){
        callback('unable to find location')
    }else{
        callback(undefined,body.daily.data[0].summary + ' It is currently ' + body.currently.temperature + ' degrees out. There is a ' + body.currently.precipProbability + '% chance of rain')
    }
    })
}

module.exports = forecast