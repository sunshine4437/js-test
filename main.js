window.onload = function(){
    function loadScript (url, callback) {
        var script = document.createElement('script');
        script.type = 'text/javascript';
      
        if (script.readyState) { // IE < 11
          script.onreadystatechange = function() {
            if (
              script.readyState === 'loaded' ||
              script.readyState === 'complete'
              ) {
                script.onreadystatechange = null;
                callback();
              }
          }
        } else { // Others
          script.onload = function () {
            callback();
          }
        }
      
        script.src = url;
        document.head.appendChild(script);
      }

      loadScript('./root.js', function(){
          loadScript('./test.js', function(){
              console.log("finish");
          });
      });
}