function fazPost (url, body){
    let request = new XMLHttpRequest()
    request.open("POST", url,true)
    request.setRequestHeader("Content-type", "application/json")
    request.send(body)

}

function cadastraFoto(){
    preventDefault()
    let url="http//:localhost:8080/foto"
    let id = document.getElementById("id").value
    let foto = document.getElementsById("foto").value
    console.log(id)
    console.log(foto)

    body = {
        "id": id,
        "foto": foto
    }

    fazPost(url,body)
}