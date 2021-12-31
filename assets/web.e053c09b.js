import{W as p,C as l,a as d,b as o}from"./index.5528923c.js";import"./vendor.2acc62b5.js";class u extends p{async getPhoto(e){return new Promise(async(t,a)=>{if(e.webUseInput||e.source===l.Photos)this.fileInputExperience(e,t);else if(e.source===l.Prompt){let r=document.querySelector("pwa-action-sheet");r||(r=document.createElement("pwa-action-sheet"),document.body.appendChild(r)),r.header=e.promptLabelHeader||"Photo",r.cancelable=!1,r.options=[{title:e.promptLabelPhoto||"From Photos"},{title:e.promptLabelPicture||"Take Picture"}],r.addEventListener("onSelection",async n=>{n.detail===0?this.fileInputExperience(e,t):this.cameraExperience(e,t,a)})}else this.cameraExperience(e,t,a)})}async pickImages(e){return new Promise(async t=>{this.multipleFileInputExperience(t)})}async cameraExperience(e,t,a){if(customElements.get("pwa-camera-modal")){const r=document.createElement("pwa-camera-modal");document.body.appendChild(r);try{await r.componentOnReady(),r.addEventListener("onPhoto",async n=>{const i=n.detail;i===null?a(new d("User cancelled photos app")):i instanceof Error?a(i):t(await this._getCameraPhoto(i,e)),r.dismiss(),document.body.removeChild(r)}),r.present()}catch{this.fileInputExperience(e,t)}}else console.error("Unable to load PWA Element 'pwa-camera-modal'. See the docs: https://capacitorjs.com/docs/pwa-elements."),this.fileInputExperience(e,t)}fileInputExperience(e,t){let a=document.querySelector("#_capacitor-camera-input");const r=()=>{var n;(n=a.parentNode)===null||n===void 0||n.removeChild(a)};a||(a=document.createElement("input"),a.id="_capacitor-camera-input",a.type="file",a.hidden=!0,document.body.appendChild(a),a.addEventListener("change",n=>{const i=a.files[0];let c="jpeg";if(i.type==="image/png"?c="png":i.type==="image/gif"&&(c="gif"),e.resultType==="dataUrl"||e.resultType==="base64"){const s=new FileReader;s.addEventListener("load",()=>{if(e.resultType==="dataUrl")t({dataUrl:s.result,format:c});else if(e.resultType==="base64"){const m=s.result.split(",")[1];t({base64String:m,format:c})}r()}),s.readAsDataURL(i)}else t({webPath:URL.createObjectURL(i),format:c}),r()})),a.accept="image/*",a.capture=!0,e.source===l.Photos||e.source===l.Prompt?a.removeAttribute("capture"):e.direction===o.Front?a.capture="user":e.direction===o.Rear&&(a.capture="environment"),a.click()}multipleFileInputExperience(e){let t=document.querySelector("#_capacitor-camera-input-multiple");const a=()=>{var r;(r=t.parentNode)===null||r===void 0||r.removeChild(t)};t||(t=document.createElement("input"),t.id="_capacitor-camera-input-multiple",t.type="file",t.hidden=!0,t.multiple=!0,document.body.appendChild(t),t.addEventListener("change",r=>{const n=[];for(let i=0;i<t.files.length;i++){const c=t.files[i];let s="jpeg";c.type==="image/png"?s="png":c.type==="image/gif"&&(s="gif"),n.push({webPath:URL.createObjectURL(c),format:s})}e({photos:n}),a()})),t.accept="image/*",t.click()}_getCameraPhoto(e,t){return new Promise((a,r)=>{const n=new FileReader,i=e.type.split("/")[1];t.resultType==="uri"?a({webPath:URL.createObjectURL(e),format:i,saved:!1}):(n.readAsDataURL(e),n.onloadend=()=>{const c=n.result;t.resultType==="dataUrl"?a({dataUrl:c,format:i,saved:!1}):a({base64String:c.split(",")[1],format:i,saved:!1})},n.onerror=c=>{r(c)})})}async checkPermissions(){if(typeof navigator=="undefined"||!navigator.permissions)throw this.unavailable("Permissions API not available in this browser");try{return{camera:(await window.navigator.permissions.query({name:"camera"})).state,photos:"granted"}}catch{throw this.unavailable("Camera permissions are not available in this browser")}}async requestPermissions(){throw this.unimplemented("Not implemented on web.")}}const b=new u;export{b as Camera,u as CameraWeb};
