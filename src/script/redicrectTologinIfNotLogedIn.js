

checkAndRedirect = (cookieName, targetPage) => {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${cookieName}=`))
        ?.split('=')[1];

    if (cookieValue !== undefined) {
        // Redirect to the specified page
        window.location.href = targetPage;
        //console.log(cookieValue)
    }
    else if (cookieValue == undefined) {
      window.location.href = 'src/loginAndInscription/login.html';
    }
};


ckechifLogedIn = (cookieName) => {
    const cookieValue = document.cookie
        .split('; ')
        .find(row => row.startsWith(`${cookieName}=`))
        ?.split('=')[1];

    if (cookieValue !== undefined) {
        //return true;
        document.getElementById('person').innerHTML = 'LoggedIn';
        console.log(cookieValue);
        // Redirect to the specified page
        //window.location.href = targetPage;
        //console.log(cookieValue)
    }
    else if (cookieValue == undefined) {
        document.getElementById('person').innerHTML = 'logIn';

    }
};

window.open = ckechifLogedIn('key');