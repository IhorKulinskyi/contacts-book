"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[496],{7496:function(n,e,t){t.r(e),t.d(e,{default:function(){return P}});var r,a,i,o=t(9439),u=t(2791),s=t(168),c=t(6088),l=c.Z.form(r||(r=(0,s.Z)(["\n  margin-left: 24px;\n  display: inline-flex;\n  flex-direction: column;\n  align-items: flex-end;\n  gap: 8px;\n  padding: 16px;\n  border: 1px dashed rgb(64, 92, 245);\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),p=c.Z.input(a||(a=(0,s.Z)(["\n  margin-left: 8px;\n  padding: 4px;\n  border-radius: 10px;\n"]))),d=c.Z.button(i||(i=(0,s.Z)(["\n  appearance: button;\n  backface-visibility: hidden;\n  background-color: #405cf5;\n  border-radius: 6px;\n  border-width: 0;\n  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue',\n    Ubuntu, sans-serif;\n  font-size: 100%;\n  height: 44px;\n  line-height: 1.15;\n  margin: 12px 0 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0 25px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transform: translateZ(0);\n  transition: all 0.2s, box-shadow 0.08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  width: 100%;\n\n  :disabled {\n    cursor: default;\n  }\n\n  :focus,\n  :hover {\n    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,\n      rgba(50, 151, 211, 0.3) 0 0 0 4px;\n  }\n"]))),f=t(9434),x=t(3634),b="NOT_FOUND";var h=function(n,e){return n===e};function g(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,a=void 0===r?h:r,i=t.maxSize,o=void 0===i?1:i,u=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,a=0;a<r;a++)if(!n(e[a],t[a]))return!1;return!0}}(a),c=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:b},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var a=t[r];return r>0&&(t.splice(r,1),t.unshift(a)),a.value}return b}return{get:r,put:function(e,a){r(e)===b&&(t.unshift({key:e,value:a}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,s);function l(){var e=c.get(arguments);if(e===b){if(e=n.apply(null,arguments),u){var t=c.getEntries(),r=t.find((function(n){return u(n.value,e)}));r&&(e=r.value)}c.put(arguments,e)}return e}return l.clearCache=function(){return c.clear()},l}function m(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function v(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var a=function(){for(var e=arguments.length,r=new Array(e),a=0;a<e;a++)r[a]=arguments[a];var i,o=0,u={memoizeOptions:void 0},s=r.pop();if("object"===typeof s&&(u=s,s=r.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var c=u,l=c.memoizeOptions,p=void 0===l?t:l,d=Array.isArray(p)?p:[p],f=m(r),x=n.apply(void 0,[function(){return o++,s.apply(null,arguments)}].concat(d)),b=n((function(){for(var n=[],e=f.length,t=0;t<e;t++)n.push(f[t].apply(null,arguments));return i=x.apply(null,n)}));return Object.assign(b,{resultFunc:s,memoizedResultFunc:x,dependencies:f,lastResult:function(){return i},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),b};return a}var y,w,j,Z,k,C=v(g),z=function(n){return n.contacts.items},A=function(n){return n.contacts.isLoading},S=function(n){return n.contacts.error},E=function(n){return n.filter},I=C([z,E],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),N=t(184),F=function(){var n=(0,u.useState)(""),e=(0,o.Z)(n,2),t=e[0],r=e[1],a=(0,u.useState)(""),i=(0,o.Z)(a,2),s=i[0],c=i[1],b=(0,f.v9)(z),h=(0,f.I0)(),g=function(n){var e=n.target,t=e.name,a=e.value;switch(t){case"name":r(a);break;case"number":c(a);break;default:return}},m=function(){r(""),c("")};return(0,N.jsxs)(l,{onSubmit:function(n){var e;n.preventDefault(),e={name:t,number:s},b.find((function(n){return n.name===e.name}))?alert("".concat(e.name," is already in contacts")):h((0,x.uK)(e)),m()},children:[(0,N.jsxs)("label",{children:["Name",(0,N.jsx)(p,{value:t,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan",required:!0,onChange:g})]}),(0,N.jsxs)("label",{children:["Number",(0,N.jsx)(p,{value:s,type:"tel",name:"number",pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +",required:!0,onChange:g})]}),(0,N.jsx)(d,{type:"submit",children:"Add contact"})]})},q=c.Z.label(y||(y=(0,s.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 8px;\n  padding: 24px;\n  margin-left: 24px;\n  border: 1px dashed rgb(64, 92, 245);\n  border-radius: 25px;\n  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;\n"]))),O=c.Z.input(w||(w=(0,s.Z)(["\n  margin-left: 8px;\n  padding: 4px;\n  border-radius: 10px;\n"]))),R=t(1634),U=function(){var n=(0,f.v9)(E),e=(0,f.I0)();return(0,N.jsxs)(q,{children:["Find contacts by name",(0,N.jsx)(O,{type:"text",value:n,onChange:function(n){e((0,R.hL)(n.target.value))}})]})},_=c.Z.ul(j||(j=(0,s.Z)(["\n  margin: 16px 24px;\n  padding: 0;\n  list-style: none;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n  width: fit-content;\n"]))),L=c.Z.li(Z||(Z=(0,s.Z)(["\n  display: inline-flex;\n  align-items: center;\n  justify-content: space-between;\n"]))),D=c.Z.button(k||(k=(0,s.Z)(["\n  appearance: button;\n  backface-visibility: hidden;\n  background-color: #405cf5;\n  border-radius: 6px;\n  border-width: 0;\n  box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n    rgba(50, 50, 93, 0.1) 0 2px 5px 0, rgba(0, 0, 0, 0.07) 0 1px 1px 0;\n  box-sizing: border-box;\n  color: #fff;\n  cursor: pointer;\n  font-family: -apple-system, system-ui, 'Segoe UI', Roboto, 'Helvetica Neue',\n    Ubuntu, sans-serif;\n  font-size: 100%;\n  height: 44px;\n  line-height: 1.15;\n  margin: 12px 0 0;\n  outline: none;\n  overflow: hidden;\n  padding: 0 8px;\n  position: relative;\n  text-align: center;\n  text-transform: none;\n  transform: translateZ(0);\n  transition: all 0.2s, box-shadow 0.08s ease-in;\n  user-select: none;\n  -webkit-user-select: none;\n  touch-action: manipulation;\n  margin-left: 8px;\n\n  :disabled {\n    cursor: default;\n  }\n\n  :focus,\n  :hover {\n    box-shadow: rgba(50, 50, 93, 0.1) 0 0 0 1px inset,\n      rgba(50, 50, 93, 0.2) 0 6px 15px 0, rgba(0, 0, 0, 0.1) 0 2px 2px 0,\n      rgba(50, 151, 211, 0.3) 0 0 0 4px;\n  }\n"]))),H=function(){var n=(0,f.v9)(A),e=(0,f.v9)(S),t=(0,f.v9)(I),r=(0,f.I0)();(0,u.useEffect)((function(){r((0,x.yF)())}),[r]);var a=function(n){r((0,x.GK)(n.target.id))};return(0,N.jsxs)(_,{children:[n&&(0,N.jsx)("div",{children:"Is loading..."}),e&&(0,N.jsx)("div",{children:e}),t.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,N.jsxs)(L,{children:[t,": ",r,(0,N.jsx)(D,{type:"button",id:e,onClick:a,children:"Delete"})]},e)}))]})},K=t(3627),P=function(){return(0,N.jsxs)(K.Z,{children:[(0,N.jsxs)(K.Z,{children:[(0,N.jsx)("h1",{children:"Phonebook"}),(0,N.jsx)(F,{})]}),(0,N.jsx)("h2",{children:"Contacts"}),(0,N.jsx)(U,{}),(0,N.jsx)(H,{})]})}}}]);
//# sourceMappingURL=496.7a1cc3c4.chunk.js.map