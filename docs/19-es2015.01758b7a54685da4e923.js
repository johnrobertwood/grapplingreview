(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{Kukj:function(t,e,r){"use strict";r.r(e),r.d(e,"amplify_s3_text",function(){return d});var o=r("hKmi"),a=r("Nt7R"),n=r("JIIv"),i=r("H8iN"),c=r("sPRy"),s=(r("/vcS"),r("l1VB"),r("Y0ez"));const l=new a.a("S3Text"),d=class{constructor(t){Object(o.k)(this,t),this.contentType="text/*",this.level=i.a.Public,this.fallbackText=c.a.TEXT_FALLBACK_CONTENT}async watchHandler(){await this.load()}async componentWillLoad(){await this.load()}async load(){const{path:t,textKey:e,body:r,contentType:o,level:a,track:n,identityId:i}=this;if(!e&&!t)return void l.debug("empty textKey and path");const c=e||t;l.debug("loading "+c+"..."),r&&await Object(s.e)(e,r,a,n,o,l);try{this.src=await Object(s.a)(c,a,n,i,l)}catch(d){throw l.debug(d),new Error(d)}}render(){return Object(o.i)("div",null,Object(o.i)("div",{class:"text-container"},this.src?Object(o.i)("pre",null,this.src):Object(o.i)("pre",null,n.a.get(this.fallbackText))))}static get watchers(){return{textKey:["watchHandler"],body:["watchHandler"]}}};d.style=":host{--container-color:var(--amplify-smoke-white);--border-color:var(--amplify-light-grey);--font-size:var(--amplify-text-md);--text-color:var(--amplify-secondary-color)}.text-container{background-color:var(--container-color);border:1px solid var(--border-color);border-radius:5px;margin-bottom:10px}pre{display:block;margin:0.5rem 0;padding:0.5rem;line-height:1rem;max-height:50rem;font-size:var(--font-size);color:var(--text-color);word-break:break-all;overflow-y:scroll;overflow-x:auto}"},YKz8:function(t,e,r){"use strict";r.d(e,"a",function(){return o});var o=function(t){return t.DEFAULT_MSG="Authentication Error",t.EMPTY_USERNAME="Username cannot be empty",t.INVALID_USERNAME="The username should either be a string or one of the sign in types",t.EMPTY_PASSWORD="Password cannot be empty",t.EMPTY_CODE="Confirmation code cannot be empty",t.SIGN_UP_ERROR="Error creating account",t.NO_MFA="No valid MFA method provided",t.INVALID_MFA="Invalid MFA type",t.EMPTY_CHALLENGE="Challenge response cannot be empty",t.NO_USER_SESSION="Failed to get the session because the user is empty",t}({})}}]);