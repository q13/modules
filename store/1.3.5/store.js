define("#store/1.3.5/store",[],function(e,t,n){(function(){function a(){try{return i in t&&t[i]}catch(e){return!1}}function f(){try{return s in t&&t[s]&&t[s][t.location.hostname]}catch(e){return!1}}var e={},t=window,r=t.document,i="localStorage",s="globalStorage",o="__storejs__",u;e.disabled=!1,e.set=function(e,t){},e.get=function(e){},e.remove=function(e){},e.clear=function(){},e.transact=function(t,n,r){var i=e.get(t);r==null&&(r=n,n=null),typeof i=="undefined"&&(i=n||{}),r(i),e.set(t,i)},e.getAll=function(){},e.serialize=function(e){return JSON.stringify(e)},e.deserialize=function(e){if(typeof e!="string")return undefined;try{return JSON.parse(e)}catch(t){return e||undefined}};if(a())u=t[i],e.set=function(t,n){return n===undefined?e.remove(t):(u.setItem(t,e.serialize(n)),n)},e.get=function(t){return e.deserialize(u.getItem(t))},e.remove=function(e){u.removeItem(e)},e.clear=function(){u.clear()},e.getAll=function(){var t={};for(var n=0;n<u.length;++n){var r=u.key(n);t[r]=e.get(r)}return t};else if(f())u=t[s][t.location.hostname],e.set=function(t,n){return n===undefined?e.remove(t):(u[t]=e.serialize(n),n)},e.get=function(t){return e.deserialize(u[t]&&u[t].value)},e.remove=function(e){delete u[e]},e.clear=function(){for(var e in u)delete u[e]},e.getAll=function(){var t={};for(var n=0;n<u.length;++n){var r=u.key(n);t[r]=e.get(r)}return t};else if(r.documentElement.addBehavior){var l,c;try{c=new ActiveXObject("htmlfile"),c.open(),c.write('<script>document.w=window</script><iframe src="/favicon.ico"></frame>'),c.close(),l=c.w.frames[0].document,u=l.createElement("div")}catch(h){u=r.createElement("div"),l=r.body}function p(t){return function(){var n=Array.prototype.slice.call(arguments,0);n.unshift(u),l.appendChild(u),u.addBehavior("#default#userData"),u.load(i);var r=t.apply(e,n);return l.removeChild(u),r}}var d=new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]","g");function v(e){return e.replace(d,"___")}e.set=p(function(t,n,r){return n=v(n),r===undefined?e.remove(n):(t.setAttribute(n,e.serialize(r)),t.save(i),r)}),e.get=p(function(t,n){return n=v(n),e.deserialize(t.getAttribute(n))}),e.remove=p(function(e,t){t=v(t),e.removeAttribute(t),e.save(i)}),e.clear=p(function(e){var t=e.XMLDocument.documentElement.attributes;e.load(i);for(var n=0,r;r=t[n];n++)e.removeAttribute(r.name);e.save(i)}),e.getAll=p(function(t){var n=t.XMLDocument.documentElement.attributes;t.load(i);var r={};for(var s=0,o;o=n[s];++s)r[o]=e.get(o);return r})}try{e.set(o,o),e.get(o)!=o&&(e.disabled=!0),e.remove(o)}catch(h){e.disabled=!0}e.enabled=!e.disabled,typeof n!="undefined"&&typeof n!="function"?n.exports=e:typeof define=="function"&&define.amd?define(e):this.store=e})()});