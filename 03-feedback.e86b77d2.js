!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in a){var l=a[e];delete a[e];var n={id:e,exports:{}};return t[e]=n,l.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){a[e]=t},e.parcelRequired7c6=l);var n=l("1WSnx"),r=document.querySelector(".feedback-form"),o="feedback-form-state",s=localStorage.getItem(o);if(s){var i=JSON.parse(s),m=i.email,u=i.message;r.elements.email.value=m||"",r.elements.message.value=u||""}r.addEventListener("input",(0,n.throttle)((function(){var e=r.elements.email.value,t=r.elements.message.value,a={email:e,message:t};localStorage.setItem(o,JSON.stringify(a))}),500)),r.addEventListener("submit",(function(e){e.preventDefault();var t={email:r.elements.email.value,message:r.elements.message.value};console.log(t),localStorage.removeItem(o),r.reset()}))}();
//# sourceMappingURL=03-feedback.e86b77d2.js.map
