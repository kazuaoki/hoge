// js�t�@�C��������ɓǂݍ��܂�邱�Ƃ��m�F���邽�߂ɗp�ӂ������\�b�h
function test() {
	alert("test alert");
}

// index.html�Œ�`���Ă��������̂�js�t�@�C���Ɉړ���������
function about() {
    info = document.getElementById('about-content');
    if (window.XMLHttpRequest)
      { xhr = new XMLHttpRequest(); }
    else
      { xhr = new ActiveXObject("Microsoft.XMLHTTP"); }
    xhr.open("GET","rails/info/properties",false);
    xhr.send("");
    info.innerHTML = xhr.responseText;
    info.style.display = 'block'
}