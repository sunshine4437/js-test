var test2 = function(){
    new Vue({
        el:'#app',
        // template:'<button>test</button>',
        methods:{
            sample:function(){
                console.log("sample");
                // document.querySelector('#app').innerHTML += '<button @click="sample">sample</button>'
                fetch('https://httpbin.org/get')
                .then(function(res){
                    return res.json();
                })
                .then(function(json){
                    console.log(json);
                })
            }
        },
        mounted:function(){
            console.log("mounted2");
        },
        created:function(){
            console.log("created2");
            document.querySelector('#app').innerHTML += '<button @click="sample">ffff</button>'
        },
    })
}
test();
// test2();
// test();