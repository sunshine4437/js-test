var test = function(){
    console.log("testststst");
    new Vue({
        el:'#app',
        // template:'<button @click="btnClicked">btn</button>',
        methods:{
            btnClicked: function(){
                console.log("ddddddddddd");
                test2();
            }
        },
        mounted:function(){
            // document.querySelector('#testBtn').addEventListener('click', function(e){
            //     console.log("ddddddddddd");
            // });
        },
        created:function(){
            console.log("created1");
            document.querySelector('#app').innerHTML = '<button @click="btnClicked">asdf</button>';
         
        }
    })
}