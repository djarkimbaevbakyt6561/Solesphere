"use strict";(self.webpackChunkairbnb2=self.webpackChunkairbnb2||[]).push([[991],{9991:(e,a,n)=>{n.r(a),n.d(a,{default:()=>d});var r=n(4848),t=n(4164),s=n(4976),i=n(9785),l=n(6423);var o=function(){return o=Object.assign||function(e){for(var a,n=1,r=arguments.length;n<r;n++)for(var t in a=arguments[n])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e},o.apply(this,arguments)},c=function(){var e=(0,i.mN)({mode:"onChange",defaultValues:{name:"",email:"",password:"",confirmPassword:""}});return(0,r.jsx)(i.Op,o({},e,{children:(0,r.jsxs)("form",{onSubmit:e.handleSubmit((function(e){console.log(e)})),className:"Se3VMGD0",children:[(0,r.jsx)(l.XX,{name:"name",validation:{required:"Field is required",validate:{length:function(e){return e.length>1||"Minimum length: 2 characters"}}},type:"text",label:"Name",placeholder:"Enter your name"}),(0,r.jsx)(l.XX,{name:"email",validation:{required:"Field is required",validate:{symbolInclude:function(e){return!/[^\w\-@.]/gi.test(e)||"Email can contain letters, numbers, hyphens, underscores"},format:function(e){return/\S+@\S+\.\S{2,}/.test(e)||"Valid email format: test@test.com"}}},type:"email",label:"Email",placeholder:"Enter email"}),(0,r.jsx)(l.XX,{name:"password",validation:{required:"Field is required",validate:{length:function(e){return e.length>8||"Password must be longer than 8 characters"},uppercase:function(e){return/[A-Z]/.test(e)||"Password must contain at least one uppercase letter"},lowercase:function(e){return/[a-z]/.test(e)||"Password must contain at least one lowercase letter"},digit:function(e){return/\d/.test(e)||"Password must contain at least one digit"}}},label:"Password",type:"password",placeholder:"Enter password"}),(0,r.jsx)(l.XX,{name:"confirmPassword",validation:{required:"Field is required",validate:function(a){return a===e.watch("password")||"Passwords do not match"}},label:"Confirm Password",type:"password",placeholder:"Confirm password"}),(0,r.jsx)(l.$n,{className:"Ozib6Sk7",children:"Sign Up"})]})}))};const d=function(e){var a=e.className;return(0,r.jsxs)("div",{className:(0,t.A)("lMcqUQaC","_container",a),children:[(0,r.jsx)("p",{className:"o3r0zOYc",children:"Sign Up"}),(0,r.jsx)(c,{}),(0,r.jsxs)("p",{className:"mDwZWUTC",children:["Already have an account? ",(0,r.jsx)(s.N_,{to:"/sign-in",children:"Sign In"})]})]})}}}]);