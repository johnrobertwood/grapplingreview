!function(){function e(e,t){for(var a=0;a<t.length;a++){var i=t[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{GWfx:function(t,a,i){"use strict";i.r(a),i.d(a,"amplify_federated_sign_in",function(){return c});var n=i("hKmi"),o=i("Nt7R"),d=i("s1tr"),s=i("v4IS"),r=i("/vcS"),f=new o.a("amplify-federated-sign-in"),c=function(){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),Object(n.k)(this,e),this.authState=d.a.SignIn,this.federated={}}var a,i,o;return a=t,(i=[{key:"componentWillLoad",value:function(){if(!s.a||"function"!=typeof s.a.configure)throw new Error(r.d);var e=s.a.configure().oauth,t=void 0===e?{}:e;t.domain?this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t):t.awsCognito&&(this.federated.oauth_config=Object.assign(Object.assign({},this.federated.oauth_config),t.awsCognito)),t.auth0&&(this.federated.auth0=Object.assign(Object.assign({},this.federated.auth0),t.auth0))}},{key:"render",value:function(){return this.federated?Object.values(d.a).includes(this.authState)?(f.debug("federated Config is",this.federated),Object(n.i)("amplify-form-section",{"data-test":"federated-sign-in-section"},Object(n.i)("amplify-section",{"data-test":"federated-sign-in-body-section"},Object(n.i)("amplify-federated-buttons",{authState:this.authState,"data-test":"federated-sign-in-buttons",federated:this.federated})))):null:(f.debug("federated prop is empty. show nothing"),f.debug("federated={google_client_id: , facebook_app_id: , amazon_client_id}"),null)}}])&&e(a.prototype,i),o&&e(a,o),t}()}}])}();