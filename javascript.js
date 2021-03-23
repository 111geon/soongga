let Body = {
  changeColor: function(color) {
    var target = document.querySelector('body').style;
    target.color = color;
  },
  changeBackgroundColor: function(color) {
    var target = document.querySelector('body').style;
    target.backgroundColor = color;
  }
}

let Links = {
  changeColor: function(color) {
    var alist = document.querySelectorAll('a');
    for(var i=0; i < alist.length; i++) {
      alist[i].style.color = color;
    }
  }
}

function pushNightMode(self) {
  if (self.id === 'night-mode-off') {
    Body.changeColor('white')
    Body.changeBackgroundColor('black')
    self.id = 'night-mode-on';
    Links.changeColor('powderblue')
  } else {
    Body.changeColor('black')
    Body.changeBackgroundColor('white')
    self.id = 'night-mode-off';
    Links.changeColor('blue')
  }
}
