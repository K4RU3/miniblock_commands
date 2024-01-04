import getMiniblockCommands from "./miniblock.js"
document.querySelector(".generateButton").addEventListener("click", ()=>{
    const scale = parseInt(document.querySelector(".scale").value, 10)
    if(scale <= 0 || isNaN(scale)) return
    const commands = getMiniblockCommands(scale)
    console.log(commands)

    const commandsOutput = document.querySelector(".commands")
    commandsOutput.innerHTML = ""
    commands.forEach((val, i)=>{
        commandsOutput.innerHTML += `<p>${i+1}: <button class="copyButton">${val}</button></p>`
    })

    document.querySelectorAll(".copyButton").forEach((val)=>{
        val.addEventListener("click", ()=>{
            navigator.clipboard.writeText(val.innerHTML)
            document.querySelectorAll(".copied").forEach(val=>val.classList.remove("copied"))
            val.parentElement.classList.add("copied")
        })
    })
})

document.querySelector(".copy-in-order").addEventListener("click", (e)=>{
    const copied = document.querySelector(".copied")
    if(copied){
        const next = copied.nextElementSibling
        next.classList.add("copied")
        copied.classList.remove("copied")
        navigator.clipboard.writeText(next.querySelector("button").innerHTML)
        return
    }
    const first = document.querySelector(".commands :first-child")
    first.classList.add("copied")
    navigator.clipboard.writeText(first.querySelector("button").innerHTML)
})