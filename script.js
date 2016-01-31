window.requestAnimFrame = (function() {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame || function(callback) {
        window.setTimeout(callback, 1000 / 60);
    };
})();
var canvas = document.getElementById("c");
var ctx = canvas.getContext("2d");

//window.setInterval(tick, 1);

var lines = [];
var lineOffsets = [];

canvas.style.position = "absolute";
canvas.style.left = document.body.clientWidth / 2 - 250 + "px";
canvas.style.top = window.innerHeight / 2 - 250 + "px";

for (var i = 0; i < 10; i++) {
    lines[i] = i / 10;
    lineOffsets[i] = Math.random();
}

function tick() {
    var grd = ctx.createRadialGradient(250, 250, 50, 250, 250, 100);
    grd.addColorStop(0, "purple");
    grd.addColorStop(1, "orange");
    ctx.strokeStyle = grd;

    ctx.clearRect(0, 0, 500, 500);
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(250, 250, 245, 0, 2 * Math.PI);
    ctx.stroke();
    ctx.beginPath();
    ctx.lineWidth = 10;
    ctx.arc(250, 250, 45, 0, 2 * Math.PI);
    ctx.stroke();

    for (var i = 0; i < lines.length; i++) {
        ctx.beginPath();
        ctx.lineWidth = 10;
        ctx.moveTo(250 + Math.cos(2 * Math.PI * lines[i]) * 45, 250 + Math.sin(2 * Math.PI * lines[i]) * 45);
        ctx.quadraticCurveTo(250 + Math.cos(2 * Math.PI * lines[i] + (lineOffsets[i] - 0.5) / 2) * 200, 250 + Math.sin(2 * Math.PI * lines[i] + (lineOffsets[i] - 0.5) / 2) * 200, 250 + Math.cos(2 * Math.PI * lines[i]) * 245, 250 + Math.sin(2 * Math.PI * lines[i]) * 245);
        //ctx.lineTo(250+Math.cos(2 * Math.PI*lines[i])*245,250+Math.sin(2 * Math.PI*lines[i])*245);
        ctx.stroke();
        lines[i] += (Math.random() - 0.5) * 0.01;
        lines[i] = lines[i] % 1;
        for (var j = 0; j < lines.length; j++) {
            if (j != i) {
                if (Math.abs(lines[i] - lines[j]) > 0.7 || Math.abs(lines[i] - lines[j]) < 0.3) {
                   
                }
            }
        }
        lines[i] = lines[i] % 1;
    }
}
(function animloop() {
    requestAnimFrame(animloop);
    tick();
})();