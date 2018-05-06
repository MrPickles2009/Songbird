(function () {
      
      const remote = require('electron').remote; 
      
      function init() { 
        document.getElementById("min-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.minimize(); 
        });
        
        document.getElementById("max-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          if (!window.isMaximized()) {
            window.maximize();
          } else {
            window.unmaximize();
          }	 
        });
        
        document.getElementById("close-btn").addEventListener("click", function (e) {
          const window = remote.getCurrentWindow();
          window.close();
        });

        document.getElementById("settings-btn").addEventListener("click", function(e) {
          window.open("../pages/settings.html", "", "width=600,height=450");
        });
      }; 
      
      document.onreadystatechange = function () {
        if (document.readyState == "complete") {
          init(); 
        }
      };
})();