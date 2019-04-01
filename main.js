!function(){
    function writeCode(prefix,code,fn){
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let id = setInterval(()=>{
             n+=1
             container.innerHTML = code.substring(0,n)
             styleTag.innerHTML = code.substring(0,n)
             container.scrollTop = container.scrollHeight
             if(n >=code.length){
                 window.clearInterval(id)
                 fn && fn.call()
             }
        },20)
    }
    let code = `/*
    * 预先准备好了一张酷炫的背景图片
*/
    .batman {
        width: 350px;
        height: 200px;
        background-color: #111;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -100px 0 0 -175px;
    }
    .inner1 {
        width: 320px;
        height: 174px;
        background-color: #edc233;
        border-radius: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: -87px 0 0 -160px;
    }
    .inner2 {
        width: 296px;
        height: 150px;
        background-color: #111;
        position: absolute;
        top: 50%;
        left: 50%;
        border-radius: 50%;
        margin: -75px 0 0 -148px;
    }
    .cut-lf {
        width: 54px;
        height: 54px;
        background-color: #edc233;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin: 0 0 0 -72px;
    }
    .cut-rt {
        width: 54px;
        height: 54px;
        background-color: #edc233;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        margin: 0 0 0 18px;
    }
    .cut-hd {
        width: 110px;
        height: 34px;
        background-color: #edc233;
        position: absolute;
        left: 50%;
        margin: 0 0 0 -55px;
    }
    .body {
        width: 38px;
        height: 56px;
        background-color: #111;
        position: absolute;
        left: 50%;
        top: 50%;
        margin: -53px 0 0 -19px;
    }
    .er-lf {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 22px 0 0 12px;
        border-color: transparent transparent transparent #111;
        position: absolute;
        left: 50%;
        margin: 0 0 0 -19px;
    }
    .er-rt {
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 22px 12px;
        border-color: transparent transparent #111 transparent;
        position: absolute;
        left: 50%;
        margin: 0 0 0 7px;
    }
    .cut-ftl {
        width: 78px;
        height: 44px;
        background-color: #edc233;
        border-radius: 50%;
        position: absolute;
        right: 50%;
        bottom: 50%;
        transform: rotate(45deg);
        margin: 0 20px -74px 0;
    }
    .cut-ftr {
        width: 78px;
        height: 44px;
        background-color: #edc233;
        border-radius: 50%;
        position: absolute;
        left: 50%;
        bottom: 50%;
        transform: rotate(-45deg);
        margin: 0 0 -74px 20px;
    }
    .cut-lft {
        width: 70px;
        height: 32px;
        background-color: #edc233;
        position: absolute;
        border-radius: 205px/106px;
        right: 50%;
        bottom: 50%;
        margin: 0 -14px -70px 0;
        transform: rotate(65deg);
    }
    .cut-rft {
        width: 70px;
        height: 32px;
        background-color: #edc233;
        position: absolute;
        border-radius: 205px/106px;
        left: 50%;
        bottom: 50%;
        margin: 0 0 -70px -14px;
        transform: rotate(-65deg);
    }
    `
    writeCode('',code)
}.call()