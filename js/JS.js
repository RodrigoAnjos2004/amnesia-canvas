      window.onresize = function() {
         canvas.width = window.innerWidth
         canvas.height = window.innerHeight
         var ctx = canvas.getContext('2d')
         ctx.lineWidth = 6
         ctx.lineCap = 'round'
         

   for (var x = 0; x < canvas.width; x += 25) {
      for (var y = 0; y < canvas.height; y += 25) {
         var direction = Math.random() > 0.5 ? -1 : 1
         ctx.strokeStyle = `hsla(${Math.floor(270 + x/canvas.width * 50)}, 60%, 50%, 1)`
         ctx.beginPath()
         ctx.moveTo(x + 25/2 * direction, y)
         ctx.lineTo(x - 25/2 * direction, y + 25)
         ctx.stroke()
      }   
   }
}

   window.onload = window.onresize
   window.onclick = window.onresize