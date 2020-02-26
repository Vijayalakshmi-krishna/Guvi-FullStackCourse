var request=new XMLHttpRequest()
request.open('GET','https://restcountries.eu/rest/v2/all',true)
request.onload=function(){
  var jsondata=JSON.parse(this.response)
  console.log(jsondata)
  for (var i in jsondata){
  console.log(jsondata[i].name+":"+jsondata[i].capital)
}
}
request.send()