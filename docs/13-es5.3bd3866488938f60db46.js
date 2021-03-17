!function(){function t(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{Nt7R:function(t,e,i){"use strict";i.d(e,"a",function(){return a});var n=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,o,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(l){o={error:l}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return a},o=function(){for(var t=[],e=0;e<arguments.length;e++)t=t.concat(n(arguments[e]));return t},r={VERBOSE:1,DEBUG:2,INFO:3,WARN:4,ERROR:5},a=function(){function t(t,e){void 0===e&&(e="WARN"),this.name=t,this.level=e}return t.prototype._padding=function(t){return t<10?"0"+t:""+t},t.prototype._ts=function(){var t=new Date;return[this._padding(t.getMinutes()),this._padding(t.getSeconds())].join(":")+"."+t.getMilliseconds()},t.prototype._log=function(e){for(var i=[],n=1;n<arguments.length;n++)i[n-1]=arguments[n];var o=this.level;t.LOG_LEVEL&&(o=t.LOG_LEVEL),"undefined"!=typeof window&&window.LOG_LEVEL&&(o=window.LOG_LEVEL);var a=r[o],l=r[e];if(l>=a){var c=console.log.bind(console);"ERROR"===e&&console.error&&(c=console.error.bind(console)),"WARN"===e&&console.warn&&(c=console.warn.bind(console));var s="["+e+"] "+this._ts()+" "+this.name;if(1===i.length&&"string"==typeof i[0])c(s+" - "+i[0]);else if(1===i.length)c(s,i[0]);else if("string"==typeof i[0]){var h=i.slice(1);1===h.length&&(h=h[0]),c(s+" - "+i[0],h)}else c(s,i)}},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,o(["INFO"],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,o(["INFO"],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,o(["WARN"],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,o(["ERROR"],t))},t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,o(["DEBUG"],t))},t.prototype.verbose=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._log.apply(this,o(["VERBOSE"],t))},t.LOG_LEVEL=null,t}()},YKz8:function(t,e,i){"use strict";i.d(e,"a",function(){return n});var n=function(t){return t.DEFAULT_MSG="Authentication Error",t.EMPTY_USERNAME="Username cannot be empty",t.INVALID_USERNAME="The username should either be a string or one of the sign in types",t.EMPTY_PASSWORD="Password cannot be empty",t.EMPTY_CODE="Confirmation code cannot be empty",t.SIGN_UP_ERROR="Error creating account",t.NO_MFA="No valid MFA method provided",t.INVALID_MFA="Invalid MFA type",t.EMPTY_CHALLENGE="Challenge response cannot be empty",t.NO_USER_SESSION="Failed to get the session because the user is empty",t}({})},fEjz:function(e,i,n){"use strict";n.r(i),n.d(i,"amplify_photo_picker",function(){return l});var o=n("hKmi"),r=n("JIIv"),a=n("sPRy"),l=function(){function e(t){var i=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),Object(o.k)(this,t),this.headerTitle=a.a.PHOTO_PICKER_TITLE,this.headerHint=a.a.PHOTO_PICKER_HINT,this.placeholderHint=a.a.PHOTO_PICKER_PLACEHOLDER_HINT,this.buttonText=a.a.PHOTO_PICKER_BUTTON_TEXT,this.handleClick=function(){},this.handleInput=function(t){i.file=t.target.files[0];var e=new FileReader;e.onload=function(t){i.previewState=e.result},e.readAsDataURL(i.file)}}var i,n,l;return i=e,(n=[{key:"componentWillLoad",value:function(){this.previewState=this.previewSrc}},{key:"render",value:function(){var t=this;return Object(o.i)("div",{class:"photo-picker-container"},Object(o.i)("amplify-section",null,Object(o.i)("div",{class:"header"},r.a.get(this.headerTitle)),Object(o.i)("div",{class:"header-hint"},r.a.get(this.headerHint)),Object(o.i)("amplify-picker",{acceptValue:"image/*",inputHandler:this.handleInput},Object(o.i)("div",{class:"picker-body",slot:"picker"},this.previewState?Object(o.i)("img",{src:""+this.previewState}):Object(o.i)("amplify-icon",{name:"photoPlaceholder"}))),Object(o.i)("div",{class:"placeholder-hint"},r.a.get(this.placeholderHint)),Object(o.i)("amplify-button",{handleButtonClick:function(){return t.handleClick(t.file)}},r.a.get(this.buttonText))))}}])&&t(i.prototype,n),l&&t(i,l),e}();l.style=":host{--object-fit:cover;--hint-color:var(--amplify-grey);--header-color:var(--amplify-secondary-color);--header-size:var(--amplify-text-lg);--header-hint-size:var(--amplify-text-md);--placeholder-hint-size:var(--amplify-text-sm);--placeholder-border-color:var(--amplify-grey)}.photo-picker-container{max-width:50rem}img{-o-object-fit:var(--object-fit);object-fit:var(--object-fit);width:100%;height:100%}input[type=file]{width:100%;height:100%;display:inline-block;position:absolute;left:0;top:0;opacity:0;cursor:pointer}.header{color:var(--header-color);font-size:var(--header-size);font-weight:bold;margin-bottom:24px}.header-hint{color:var(--hint-color);font-size:var(--header-hint-size);word-break:break-word;margin-bottom:24px}.picker-body{position:relative;width:25rem;height:16rem;border:2px dotted var(--placeholder-border-color);padding:10px;margin-bottom:8px;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;overflow:hidden}.placeholder-hint{color:var(--hint-color);font-family:Helvetica;font-style:italic;font-size:var(--placeholder-hint-size);word-break:break-word;margin-bottom:30px}"},fQM2:function(t,e,i){"use strict";i.d(e,"a",function(){return r});var n=i("Nt7R"),o=new n.a("Amplify"),r=new(function(){function t(){this._components=[],this._config={},this._modules={},this.Auth=null,this.Analytics=null,this.API=null,this.Credentials=null,this.Storage=null,this.I18n=null,this.Cache=null,this.PubSub=null,this.Interactions=null,this.Pushnotification=null,this.UI=null,this.XR=null,this.Predictions=null,this.DataStore=null,this.Logger=n.a,this.ServiceWorker=null}return t.prototype.register=function(t){o.debug("component registered in amplify",t),this._components.push(t),"function"==typeof t.getModuleName?(this._modules[t.getModuleName()]=t,this[t.getModuleName()]=t):o.debug("no getModuleName method for component",t),t.configure(this._config)},t.prototype.configure=function(t){var e=this;return t?(this._config=Object.assign(this._config,t),o.debug("amplify config",this._config),Object.entries(this._modules).forEach(function(t){var i=function(t,e){var i="function"==typeof Symbol&&t[Symbol.iterator];if(!i)return t;var n,o,r=i.call(t),a=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)a.push(n.value)}catch(l){o={error:l}}finally{try{n&&!n.done&&(i=r.return)&&i.call(r)}finally{if(o)throw o.error}}return a}(t,2)[1];Object.keys(i).forEach(function(t){e._modules[t]&&(i[t]=e._modules[t])})}),this._components.map(function(t){t.configure(e._config)}),this._config):this._config},t.prototype.addPluggable=function(t){t&&t.getCategory&&"function"==typeof t.getCategory&&this._components.map(function(e){e.addPluggable&&"function"==typeof e.addPluggable&&e.addPluggable(t)})},t}())}}])}();