function test(){
  console.log("test");
}

window.test = test();

function window_test(){
  window.open("./window_function_opener.html","", "width=450,height=450", "__blank")
}

window_test();