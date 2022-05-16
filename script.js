$("#Form").validate({
    rules:{
      email:{
        email: true
      },
      message:{
        minlength: 5
      }
    },
    messages:{
      email:{
        email: "Harus memasukkan email yang valid"
      },
      message:{
        minlength: "Harus lebih dari 5 huruf"
      }
    },
    submitHandler: function(form) {
      form.submit();
    }
});