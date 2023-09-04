function Change(id, src){
    const element = document.getElementById(id)
    if(!element) return console.log("%c Video Element Not Found", "color:red;font-size:30px;")
    element.src = src
    }
function series(){
    iframe.style.display = "block"
    document.getElementById("back").style.display = "block"
    document.getElementById("main").style.display = "none"
    let paths = [
        "https://short.ink/RKMZbsbVq",
        "https://short.ink/-T8PJ0bBb",
        "https://short.ink/WyNcrkC-KC",
        "https://short.ink/BcwAlVTRp",
        "https://short.ink/ebu_A_Ehv"
    ]
    document.getElementById("ep1").style.display = ""
    document.getElementById("ep2").style.display = ""
    document.getElementById("ep3").style.display = ""
    document.getElementById("ep4").style.display = ""
    document.getElementById("ep5").style.display = ""
    document.getElementById("ep1").disabled = true
    Change("iframe", paths[0])
    document.getElementById("ep1").onclick = ()=>{
    Change("iframe", paths[0])
    document.getElementById("ep1").disabled = true
    document.getElementById("ep2").disabled = false
    document.getElementById("ep3").disabled = false
    document.getElementById("ep4").disabled = false
    document.getElementById("ep5").disabled = false
    }
    document.getElementById("ep2").onclick = ()=>{
    Change("videoplayer", paths[1])
    document.getElementById("ep1").disabled = false
    document.getElementById("ep2").disabled = true
    document.getElementById("ep3").disabled = false
    document.getElementById("ep4").disabled = false
    document.getElementById("ep5").disabled = false
    }
    document.getElementById("ep3").onclick = ()=>{
    Change("iframe", paths[2])
    document.getElementById("ep1").disabled = false
    document.getElementById("ep2").disabled = false
    document.getElementById("ep3").disabled = true
    document.getElementById("ep4").disabled = false
    document.getElementById("ep5").disabled = false
    }
    document.getElementById("ep4").onclick = ()=>{
    Change("iframe", paths[3])
    document.getElementById("ep1").disabled = false
    document.getElementById("ep2").disabled = false
    document.getElementById("ep3").disabled = false
    document.getElementById("ep4").disabled = true
    document.getElementById("ep5").disabled = false
    }
    document.getElementById("ep5").onclick = ()=>{
    Change("iframe", paths[4])
    document.getElementById("ep1").disabled = false
    document.getElementById("ep2").disabled = false
    document.getElementById("ep3").disabled = false
    document.getElementById("ep4").disabled = false
    document.getElementById("ep5").disabled = true
    }
}
