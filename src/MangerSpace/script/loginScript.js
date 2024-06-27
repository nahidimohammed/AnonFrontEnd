
async function validateForm () {

    usersEmail = document.getElementById('username').value;
      usersPassword  = document.getElementById('password').value;

      //console.log(usersEmail);

      if (usersEmail == '' || usersPassword == ''){
        alert('please fill all the required text boxes');
        return ;
      }

      if (await login(usersEmail , usersPassword) == true){
        window.location.href = 'profile.html';
        
      }
      else{
        alert('your Email or your password is wrong');
      }
  }



    async function login (usersEmail, usersPassword) {
      const url = 'http://127.0.0.1:3001/manager/login';
      const data = [{ email: usersEmail, password: usersPassword }];
    
      try {

        const response = await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        });

        if (response.status === 200) {

          const key =await response.json();
          CookieManager.setCookie('keyManager',key[0].key,{expires: 7});
          //alert(key[0].key);
          return true;

        }
        else if (response.status === 401){
          alert('Email or password are wrong');
        }
         else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error1:',error);
      //console.log(this.depart , this.destignation);

      }
      return false;
    }
