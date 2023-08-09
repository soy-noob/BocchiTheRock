var screenWidth;
var screenHeight;
var bochiBox = document.getElementById("bochiColorBox");
var loadCharName = true;
var charText = document.getElementById("charText");
var charMainImg = document.getElementById('image');
var charImg = document.getElementById('charImg');
var changeBtn = document.getElementById('changeBtn');
var charColorLine = document.getElementById('colorLine');
var charIntro;
var profileShadow = document.getElementById('profileShadow');
var charName = document.getElementById('charName');
var charProfile = document.getElementById('profile');
var charBg = document.getElementById('charBg');
var charCatchcopy = document.getElementById('charCatchcopy');
var ikuyoText = "明るく人望もある高校一年生。結束バンドのギターボーカル担当。人と関わることが好きで初対面でも臆することなく笑顔で話しかけられる陽キャ。リョウに対して憧れを抱いており、その感情が行き過ぎることも。イソスタに写真をよくあげる。";
var ryoText = "クールで孤高な高校二年生。結束バンドのベース担当。虹夏の親友。趣味などが浮世離れしており、変わり者と言われると喜ぶ。裕福な家庭で暮らしているが楽器に対してお金遣いが荒く常に金欠。たまに雑草を食べて空腹を紛らわす。";
var nijikaText = "元気いっぱいの明るい高校二年生。結束バンドのドラム担当。結束バンドに加入したひとりにいろいろ世話を焼いてくれるバンドのまとめ役。ライブハウス「STARRY」の店長である星歌を姉に持ち、ライブハウスに特別な思いを持っている。";
var bochiText = "極度の人見知りで陰キャな高校一年生。結束バンドのリードギター担当。陰キャでも輝けそうなバンド活動に憧れギターを始める。腕前は本物だが、バンドや人前でうまく発揮することができない。会話の頭に必ず「あっ」って付けちゃう。";

var rollNames = document.getElementsByClassName('rollName');
var rollNameImgs = document.getElementsByClassName('rollNameImg');
var rollNameImg = document.getElementById('rollingNameImg');
var rollNameWidth = rollNameImg.width;

var onpu_1 = document.getElementById('onpu_1');
var onpu_2 = document.getElementById('onpu_2');
var onpu_time = 0;

var btnLeft = document.getElementById('btn-left');
var btnRight = document.getElementById('btn-right');

console.log(rollNameWidth);
//console.log(rollNames);

//#region 字幕滚动
for (i = 0; i < rollNames.length; i++) {
    rollNames[i].style.left = (rollNameWidth * i + 'px');
}

var nameRoller = setInterval(() => {
    for (i = 0; i < rollNames.length; i++) {
        rollNames[i].style.left = (rollNames[i].style.left.replace('px', '') - 1 + 'px');
        if (rollNames[i].style.left.replace('px', '') < -rollNameWidth) {
            rollNames[i].style.left = '1720px';
        }

    }
}, 30);
//#endregion

//#region 背景音符旋转模糊
setInterval(() => {
    onpu_time++;
    if (onpu_time > 1) {
        onpu_time = 0;
    }
    if (onpu_time == 0) {
        onpu_1.style.opacity = '0.5';
        onpu_1.style.transform = 'rotate(-5deg)';
        onpu_2.style.opacity = '1';
        onpu_2.style.transform = 'rotate(5deg)';
    }
    if (onpu_time == 1) {
        onpu_1.style.opacity = '1';
        onpu_1.style.transform = 'rotate(0deg)';
        onpu_2.style.opacity = '0.5';
        onpu_2.style.transform = 'rotate(0deg)';
    }
}, 1800);
//#endregion
var index = parseInt(localStorage.getItem('charImgIndex'));
if (Number.isNaN(index)) {
    localStorage.setItem('charImgIndex', '0');
    index = 0;
}
console.log(index);
charImg.style.bottom = "10%";
charImg.style.opacity = "100%";
charColorLine.style.width = '100%';
profileShadow.style.width = '0';
onpu_1.style.opacity = '0.5';
onpu_1.style.transform = 'rotate(-5deg)';

setTimeout(function () {
    for (i = 0; i < rollNameImgs.length; i++) {
        rollNameImgs[i].style.opacity = '1';
    }
    charCatchcopy.style.opacity = '1';
    if (index == 3) {
        charBg.style.bottom = "60px";
    }
    else {
        charBg.style.bottom = "0px";
    }
    charBg.style.opacity = '1';
}, '800');

switch (index) {
    case 0:
        for (i = 0; i < rollNameImgs.length; i++) {
            rollNameImgs[i].src = './img/BochiName.svg';
        }
        charCatchcopy.src = './img/BochiCatchcopy.svg';
        charBg.src = './img/BochiBg.png';
        charProfile.src = './img/BochiProfile.svg'
        charName.src = './img/BochiNameJP.svg';
        charIntro = bochiText;
        charMainImg.src = "./img/Bochi.png";
        charColorLine.style.backgroundColor = "#FF2291";
        break;
    case 1:
        for (i = 0; i < rollNameImgs.length; i++) {
            rollNameImgs[i].src = './img/RyoName.svg';
        }
        charCatchcopy.src = './img/RyoCatchcopy.svg';
        charBg.src = './img/RyoBg.png';
        charProfile.src = './img/RyoProfile.svg'
        charProfile.src = './img/RyoProfile.svg';
        charName.src = './img/RyoNameJP.svg';
        charIntro = ryoText;
        charMainImg.src = "./img/Ryo.png";
        charColorLine.style.backgroundColor = "#02D1E0";
        break;
    case 2:
        for (i = 0; i < rollNameImgs.length; i++) {
            rollNameImgs[i].src = './img/IkuyoName.svg';
        }
        charCatchcopy.src = './img/IkuyoCatchcopy.svg';
        charBg.src = './img/IkuyoBg.png';
        charProfile.src = './img/IkuyoProfile.svg';
        charName.src = './img/IkuyoNameJP.svg';
        charName.style.bottom = "-10%";
        charName.style.scale = "0.45";
        charName.style.right = "25%";
        charIntro = ikuyoText;
        charMainImg.src = "./img/Ikuyo.png";
        charColorLine.style.backgroundColor = "#FF4637";
        break;
    case 3:
        for (i = 0; i < rollNameImgs.length; i++) {
            rollNameImgs[i].src = './img/NijikaName.svg';
        }
        charCatchcopy.src = './img/NijikaCatchcopy.svg';
        charBg.src = './img/NijikaBg.png';
        charProfile.src = './img/NijikaProfile.svg';
        charName.src = './img/NijikaNameJP.svg';
        charIntro = nijikaText;
        charMainImg.src = "./img/Nijika.png";
        charColorLine.style.backgroundColor = "#FFB400";
        break;
}





var textTimer = 0;
//#region 打字机
var texttyper = setInterval(() => {
    console.log(textTimer);
    charText.innerHTML = charText.innerHTML + charIntro[textTimer];
    textTimer++;
    if (textTimer >= charIntro.length) {
        clearInterval(texttyper);
    }
}, 30);
//#endregion

//#region 切换按钮
btnLeft.addEventListener('click', function () {
    index--;
    if (index < 0) {
        index = 3;
    }
    localStorage.setItem('charImgIndex', index.toString());
    location.reload();
});

btnRight.addEventListener('click', function () {
    index++;
    if (index > 3) {
        index = 0;
    }
    localStorage.setItem('charImgIndex', index.toString());
    location.reload();
});

//#endregion