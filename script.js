function otpless(otplessUser) {
    let data = JSON.stringify(otplessUser);
    console.log(data);
     show(data);
   }
    
  function show(data) {
      console.log(data);
      if (data !== "") {
        localStorage.setItem("otplessUser", data);
        window.location.href = "./user.html";
     }
  }