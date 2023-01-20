const btn = document.getElementById('btn')
btn.onclick =function (){
    alert('bbbtttnnn...')
    /* 用的时候才导入 */
    import('./hello.js').then(module=>{
        console.log(module);
        module.hello()
    })
    
}