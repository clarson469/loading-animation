function createElements() {
  var wrapper = document.createElement('div'),
      body = document.body || document.getElementsByTagName('body')[0];
  wrapper.id = 'loading-wrapper';
  for (var i = 0; i < 2; i++) {
    var fill = document.createElement('div'),
        center = document.createElement('div');
    fill.className='loading-fill';
    center.className='loading-center';
    if (i === 0) {
      fill.id = 'loading-fill';
      center.id = 'loading-center';
    } else {
      fill.id = 'loading-alt-fill';
      center.id = 'loading-alt-center';
    }
    wrapper.appendChild(center);
    wrapper.appendChild(fill);
  }
  body.insertBefore(wrapper, document.getElementById('header-dummie'));
}

function styleElements() {
  var head = document.head || document.getElementsByTagName('head')[0];
      css = '#loading-alt-fill,#loading-center::after,#loading-center::before,#loading-wrapper{background:#ebebeb}#loading-alt-center::after,#loading-alt-center::before,#loading-fill{background:#383838}#loading-wrapper{position:relative;width:100vw;height:100vh;z-index:100;overflow:hidden}.loading-center,.loading-fill{position:absolute;border-radius:100%}@keyframes expand-fill{0%{border-width:10px;top:calc((100vh / 2) - 10px);left:calc((100vw / 2) - 10px);z-index:150}18.75%,49.9999%{border-width:60vw;top:calc((100vh / 2) - 60vw);left:calc((100vw / 2) - 60vw);z-index:150}100%,50%{border-width:60vw;top:calc((100vh / 2) - 60vw);left:calc((100vw / 2) - 60vw);z-index:100}}@keyframes move-before{0%,8.75%{left:calc((100vw / -2) + 25px)}100%,40%,49.9999%,50%{left:20px}}@keyframes move-after{0%,8.75%{right:calc((100vw / -2) + 25px)}100%,40%,49.9999%,50%{right:20px}}@keyframes orbit{0%,18.75%{transform:rotate(0);z-index:200}40%,49.9999%{transform:rotate(1600deg);z-index:200}100%,50%{transform:rotate(1600deg);z-index:100}}.loading-fill{top:calc((100vh / 2) - 10px);left:calc((100vw / 2) - 10px);height:0;width:0;border-width:10px;border-style:solid}#loading-fill{border-color:#383838;animation:expand-fill 8s infinite}#loading-alt-fill{border-color:#ebebeb;animation:expand-fill 8s infinite 4s}.loading-center{width:50px;height:50px;top:calc((100vh / 2) - 25px);left:calc((100vw / 2) - 25px)}#loading-center{z-index:200;animation:orbit 8s ease-in infinite}#loading-alt-center{z-index:100;animation:orbit 8s ease-in infinite 4s}.loading-center::after,.loading-center::before{content:"";position:absolute;display:inline-block;height:10px;width:10px;border-radius:100%;top:20px}.loading-center::before{left:calc((100vw / -2) + 25px)}#loading-center::before{animation:move-before 8s ease-out infinite}#loading-alt-center::before{animation:move-before 8s ease-out infinite 4s}.loading-center::after{right:calc((100vw / -2) + 25px)}#loading-center::after{animation:move-after 8s ease-out infinite}#loading-alt-center::after{animation:move-after 8s ease-out infinite 4s}';
      style = document.createElement('style');
  style.setAttribute('name', 'loadingCss');
  style.type = 'text/css';
  if (style.styleSheets) style.styleSheets.cssText = css;
  else style.appendChild(document.createTextNode(css));
  head.appendChild(style);
}

function deleteElements(all) {
  var wrapper = document.getElementById('loading-wrapper');
  if (all) {
    var style = document.querySelectorAll('style[name="loadingCss"]')[0],
        head = document.head || document.getElementsByTagName('head')[0],
        body = document.body || document.getElementsByTagName('body')[0];
    body.removeChild(wrapper);
    head.removeChild(style);
    return;
  }
  var elements = document.querySelectorAll('div[class^="loading-"]');
  for (var el of elements) {
    wrapper.removeChild(el);
  }
}

function animateWapper() {
  var head = document.head || document.getElementsByTagName('head')[0],
      css = '.post-load-wrapper{animation:post-load 4s forwards}@keyframes post-load{0%{margin-top:0;height:100vh;opacity:1;box-shadow:0 -4px 5px 0 rgba(0,0,0,.75)}60%{margin-top:90px;height:calc(100vh-90px);opacity:1;box-shadow:0 -4px 5px 0 rgba(0,0,0,.75)}100%{margin-top:90px;height:calc(100vh-90px);opacity:0;box-shadow:0 -4px 5px 0 rgba(0,0,0,.75)}}',
      style = document.createElement('style'),
      wrapper = document.getElementById('loading-wrapper');
  style.setAttribute('name', 'loadingCss');
  style.type = 'text/css';
  if (style.styleSheets) style.styleSheets.cssText = css;
  else style.appendChild(document.createTextNode(css));
  head.appendChild(style);
  wrapper.className = 'post-load-wrapper';
}

function main() {
  createElements();
  styleElements();
  var wait = setTimeout(completeLoad,12000);
}

/* ###    for production use    ###

function main() {
  createElements();
  styleElements();
  var loop = setInterval(function() {
    if (### INSERT CHECK HERE ###) {
      clearTimeout(loop);
      completeLoad();
    }
  },4000);
}

*/

main();

function completeLoad() {
  deleteElements(false);
  animateWapper();
  var secondWait = setTimeout(function() {
    deleteElements(true);
  },6000);
}
