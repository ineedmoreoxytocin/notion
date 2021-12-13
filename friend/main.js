
// Create an object:
var doriosty = {
  normal: "https://github.com/ineedmoreoxytocin/notion/blob/main/friend/cat-normal.png?raw=true",
  happy: "https://github.com/ineedmoreoxytocin/notion/blob/main/friend/cat-happy.png?raw=true",
  sad: "https://github.com/ineedmoreoxytocin/notion/blob/main/friend/cat-sad.png?raw=true",
  angry: "https://github.com/ineedmoreoxytocin/notion/blob/main/friend/cat-angry.png?raw=true",
  noexp: "https://github.com/ineedmoreoxytocin/notion/blob/main/friend/cat-sleep.png?raw=true",
  plead: "https://github.com/ineedmoreoxytocin/notion/blob/main/friend/cat-plead.png?raw=true"
};


// greetings
function callmenu() {
  var popup = document.getElementById("menu");
  popup.classList.toggle("show");
  var greeting;
  var time = new Date().getHours();
if (time < 5) {
    greeting = "夜安，英格瑞特。";
  } else if (time < 10) {
    greeting = "早安，英格瑞特。";
  } else if (time < 20) {
    greeting = "日安，英格瑞特。";
  } else {
    greeting = "夜安，英格瑞特。";
  }
  document.getElementById("greet").innerHTML = greeting;
  document.getElementById("doriosty").src=doriosty.normal;
 }

// random talk
var talk = setInterval(calltalk, 30000);
function calltalk() {
  var stoptalk = setTimeout(closetalk, 5000);
  var popup = document.getElementById("talk");
  popup.classList.toggle("show");
  var face = Math.random();
  if (face < 0.3) {
  var words = [
"今天的任务进行的如何了？",
"偶尔也要放松一下~",
"星光不负赶路人……",
"我相信你一定可以的~",
"你会有如今的成就，全部是因为你的努力！",
"请相信自己！",
"请不要放弃~",
"请继续努力！",
"今天英格瑞特也要元气满满地努力学习~",
"请坚持下去！"
];
document.getElementById("doriosty").src=doriosty.happy;
document.getElementById("words").innerHTML = words[Math.floor(Math.random() * 9)];
} else  if (face < 0.4) {
 var words = [
"今天不学习…………明天火葬场！",
"你看看都几点了！",
"你今天学够八个小时了？",
"请不要让明天的自己讨厌今天的自己，好吗？",
"去学习，我没在跟你商量。",
"你会为拖延付出代价的……"
];
document.getElementById("doriosty").src=doriosty.angry;
document.getElementById("words").innerHTML = words[Math.floor(Math.random() * 5)];
} else  if (face < 0.5) {
 var words = [
"请去学习！",
"求求你再去学习一会嘛……",
"你不学习的话……我…我就会哭！",
"你看我可爱吗？可爱的话就再陪我学一会嘛~",
"英格瑞特再努力一会好不好？马上就可以休息了！", 
"再坚持一会~！"
];
document.getElementById("doriosty").src=doriosty.plead;
document.getElementById("words").innerHTML = words[Math.floor(Math.random() * 5)];
}
else  if (face < 0.6) {
 var words = [
"可以更努力一点吗？",   
"昨天晚上做了一个好可怕的梦……梦到英格瑞特一整天都没有学习！",
"我哭了，除非你学习。"
];
document.getElementById("doriosty").src=doriosty.sad;
document.getElementById("words").innerHTML = words[Math.floor(Math.random() * 2)];
}
else  if (face < 0.7) {
 var words = [
"啊啊……你再不学习…杀了你哦。",
"英格瑞特不肯学习的日子十分无趣。",
"看看这个小垃圾，在这里浪费时间。",
"看着懒惰的英格瑞特，我只觉得心累。",
"明天的英格瑞特会想要杀了你。"
];
document.getElementById("doriosty").src=doriosty.noexp;
document.getElementById("words").innerHTML = words[Math.floor(Math.random() * 4)];
}
else {
   var words = [
"别着急，在为你自己未来踏踏实实的努力时，那些你感觉从来不会看到的景色，那些你觉得终身不会遇到的人却一步步向你走来。",
"别慌，月亮也正在大海某处迷茫。",
"没有谁的生活会一直完美，但无论什么时候，都要看着前方，满怀希望就会所向披靡。",
"来路无可眷恋，值得期待的只有前方。",
"要以星星为目标，那样的话，即使掉下来，你还能落到树梢上。",
"生命中的不期而遇，都是你努力中的惊喜。",
"躲起来的星星也在努力发光 你也要加油。",
"宇宙山河浪漫 人间点滴温暖都值得你前进。",
"希望你以后不要再被黑夜困扰。不要再被伤害打倒，勇敢地去接受这个充满感情的宇宙。",
"生活很容易一团漆黑，如果要变成一束光的话还需要走很远很远的路，真怕路途遥远，也怕路途孤苦。",
"正是因为没有看到答案，所以才值得走下去，而我们就是最好的答案。",
"你要有强大的内心。要有任凭时间流逝，不会磨折和屈服的信念。",
"不是因为在象牙塔中，才说出我爱世界这样的话。是知道外面的黑，脏，丑陋之后，还要说出这样的话。",
"我要你相信温暖，美好，信任，尊严，坚强。我不要你颓废，空虚，迷茫，糟践自己，伤害别人。"
];
document.getElementById("doriosty").src=doriosty.normal;
document.getElementById("words").innerHTML = words[Math.floor(Math.random() * 14)];
   }
 }
function closetalk() {
  var popup = document.getElementById("talk");
  popup.classList.toggle("hide");
  document.getElementById("doriosty").src=doriosty.normal;
  clearTimeout(stoptalk);
}

setTimeout(function(){ 
var popup = document.getElementById("talk");
  popup.classList.toggle("show");
var time = new Date().getHours();
  if (time < 3) {
    text = "这么晚还不睡觉，明天起的来嘛？";
  } else if (time < 9) {
    text = "早安一日之计在于晨，美好的一天就要开始了。";
  } else if (time < 11) {
    text = "日安，学习顺利吗？不要久坐，多起来走动走动~";
  } else if (time < 13) {
    text = "中午了，学习了一个上午，现在是午餐时间！";
  } else if (time < 17) {
    text = "午后很容易犯困呢，今天的学习目标完成了吗？";
  } else if (time < 19) {
    text = "窗外夕阳的景色很美丽呢~";
  } else if (time < 21) {
    text = "夜安，今天过得怎么样？";
  } else if (time < 23) {
    text = "已经这么晚了呀，早点休息吧，晚安～";
  } else {
    text = "你好，很高兴见到你~";
  }
  document.getElementById("doriosty").src=doriosty.happy;
   document.getElementById("words").innerHTML = text;
   }, 3000);

setTimeout(function(){ 
  var popup = document.getElementById("talk");
  popup.classList.toggle("show");
  document.getElementById("doriosty").src=doriosty.normal; }, 6000);

setInterval(function () {
    fnDate();
}, 1000);
function fnDate() {
    var oDiv = document.getElementById("currentTime");
    var date = new Date();
    var year = date.getFullYear();
    var month = date.getMonth();
    var data = date.getDate();
    var hours = date.getHours();
    var minute = date.getMinutes();
    var time = year + "-" + fnW((month + 1)) + "-" + fnW(data) + " " + fnW(hours) + ":" + fnW(minute);
    var a = new Array("日", "一", "二", "三", "四", "五", "六");
    var week = new Date().getDay();
    var str = "星期" + a[week];
    oDiv.innerHTML = time + "　" + str;
}
function fnW(str){return str > 9 ? str : "0"+str;}
