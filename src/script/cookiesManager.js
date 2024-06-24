var CookieManager = {
    // Set a cookie with a given name, value, and optional options
    setCookie: function(name, value, options = {}) {
      var expires = "";
      if (options.expires) {
        var date = new Date();
        date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
      }
      var path = options.path ? "; path=" + options.path : "; path=/";
      document.cookie = name + "=" + (value || "") + expires + path;
    },
  
    // Get the value of a cookie by its name
    getCookie: function(name) {
      var nameEQ = name + "=";
      var ca = document.cookie.split(';');
      for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
      }
      return null;
    },
  
    // Remove a cookie by its name
    removeCookie: function(name) {
      document.cookie = name + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    },
  
    // Check if a cookie exists
    cookieExist: function(name) {
      return this.getCookie(name) !== null;
    }
  };
  
  // Example usage:
  // CookieManager.setCookie('username', 'JohnDoe', { expires: 7 });
  // var username = CookieManager.getCookie('username');
  // CookieManager.removeCookie('username');
  