const button=document.getElementById('btn')
const bg=document.getElementById('wrap')
const cc=document.getElementById('colorcode')
const hex=[0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F']
button.addEventListener('click',changebg)

function changebg(){
    let hexcode='#'
    for(let i=1;i<=6;i++){
        hexcode+=hexvalgen()
    }
    bg.style.backgroundColor=hexcode
    cc.innerHTML=hexcode
}

function hexvalgen(){
    const hexval=Math.floor(Math.random()*16)
    return hex[hexval]
}