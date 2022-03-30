var test2 = function(){
    new Vue({
        created:function(){
            console.log("created");
        },
        mounted:function(){
            console.log("mounted");
        }
    })
}
test2();