  var Body = {
    setColor:function (color){
      //document.querySelector('body').style.color = color;
      $('body').css('color',color);
    },
    setBackgroundColor:function (color){
      //document.querySelector('body').style.backgroundColor = color;
      $('body').css('backgroundColor',color);
    }
  }
  var Links = {
    setColor:function (color){
    //  var alist = document.querySelectorAll('a');
    //  var i = 0;
    //  while(i < alist.length){
    //    alist[i].style.color = color;
    //    i = i + 1;
    //  }
    $('a').css('color',color);
    }
  }
  function nightDayHandler(self){
    if(self.value === 'night'){
      self.value = 'day';
      Body.setBackgroundColor('black');
      Body.setColor('white');
      Links.setColor('white');
    } else {
      self.value = 'night';
      Body.setBackgroundColor('white');
      Body.setColor('black');
      Links.setColor('black');
    }
  }
