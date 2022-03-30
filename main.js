window.onload = function(){
  new Vue({
     
    //   methods:{
    //     test1(){
    //         document.querySelector('#app').innerHTML='<button id="testbtn">dddd</button>';
    //         // app.innerHTML = '<button @click="test2">dfdf</button>'
    //         // app.
    //         document.querySelector('#testbtn').addEventListener("click", function(e) {
    //             document.querySelector('#testbtn').innerHTML += "test";
    //         })
    //     },
    //     test2(){
    //         console.log("11111111");
    //         // test();
    //     }
    //   },
      created: function(){
          var js1 = document.createElement('script');
          js1.setAttribute('src', './test.js');
          var js2 = document.createElement('script');
          js2.setAttribute('src', './test2.js');
          document.head.appendChild(js1);
          document.head.appendChild(js2);
        //   this.test1();

      }
  })
}

