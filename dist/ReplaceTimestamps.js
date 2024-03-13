var F="ReplaceTimestamps",E="1.2.9",B="Replaces plaintext 24 hour timestamps into Discord's timestamps",L=[{name:"HypedDomi",id:"354191516979429376"}],N="#E54B4B",I="https://raw.githubusercontent.com/domi-btnr/Enmity-Stuff/main/dist/ReplaceTimestamps.js",A="https://github.com/domi-btnr/Enmity-Stuff/tree/main/ReplaceTimestamps",R=["Fixed timestamps not being replaced in some cases"],P="249052181555b002894e3d1ec5c9129d040feb96",$={name:F,version:E,description:B,authors:L,color:N,rawUrl:I,sourceUrl:A,changelog:R,hash:P};function H(o){window.enmity.plugins.registerPlugin(o)}const d=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets;const O=window.enmity.modules.common.Messages;window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const f=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const Y=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme;const j=window.enmity.modules.common.Linking,z=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function W(o){return window.enmity.patcher.create(o)}const{native:y}=window.enmity;function K(){y.reload()}y.version,y.build,y.device,y.version;function C(o,t,a){window.enmity.settings.set(o,t,a)}function T(o,t,a){return window.enmity.settings.get(o,t,a)}const x={name:"",version:"",rawUrl:"",changelog:[""],hash:"",remoteHash:null,remoteVersion:null,remoteChangelog:[""],create({name:o,version:t,rawUrl:a,changelog:i,hash:r}){if(!o||!t||!a||!i||!r)return console.error(`[${o||__filename}] Missing parameters in constructor`);this.name=o,this.version=t,this.rawUrl=a,this.changelog=i,this.hash=r,T(o,"_didUpdate",!1)||(T(o,"_changelog",t)!==t&&this.showChangelog(),T(o,"autoUpdateCheck",!0)&&this.hash!=="DEBUG"&&this.checkForUpdates()),C(o,"_didUpdate",!1)},showChangelog(){!this.changelog||f.show({title:`${this.name} - v${this.version}`,body:`- ${this.changelog.join(`
- `)}`,confirmText:"OK",onConfirm:()=>C(this.name,"_changelog",this.version)})},async checkForUpdates(o=!1){var t,a,i,r,m,s;const w=await fetch(`${this.rawUrl}?${Math.random()}`);if(!w.ok)return console.error(`[${this.name}] Failed to fetch remote version`);const l=await w.text(),g=(t=l.match(/hash:(\w+)/))==null?void 0:t[1],c=(a=l.match(new RegExp(`${g}="([^,"]+)"`)))==null?void 0:a[1];c?this.remoteHash=c!=null?c:"0AB1C2":console.warn(`[${this.name}] Failed to fetch remote hash`);const V=(i=l.match(/version:(\w+)/))==null?void 0:i[1],S=(r=l.match(new RegExp(`${V}="([^,"]+)"`)))==null?void 0:r[1];S?this.remoteVersion=S!=null?S:"0.0.0":console.warn(`[${this.name}] Failed to fetch remote version`);const U=(m=l.match(/changelog:(\w+)/))==null?void 0:m[1],_=(s=l.match(new RegExp(`${U}=\\["(.*?)"\\]`)))==null?void 0:s[0];if(_?this.remoteChangelog=JSON.parse(_.replace(`${U}=`,"")):console.warn(`[${this.name}] Failed to fetch remote changelog`),this.remoteHash&&this.remoteVersion){const b=this.version.split(".").map(Number),D=this.remoteVersion.split(".").map(Number);for(let p=0;p<b.length;p++){if(D[p]>b[p])return this.showUpdateDialog({version:this.remoteVersion,changelog:this.remoteChangelog});if(D[p]<b[p])return console.log(`[${this.name}] Remote version is older than local version`)}if(this.remoteHash!==this.hash)return this.showUpdateDialog({hash:this.remoteHash})}!o||f.show({title:"Plugin Updater",body:`No update available for ${this.name}`,confirmText:"OK"})},showUpdateDialog({version:o,hash:t,changelog:a}){if(!o&&!t)return console.error(`[${this.name}] Missing parameters in showUpdateDialog()`);let i="";o?i=`New Version for ${this.name} is available!`:i=`New Build for ${this.name} is available!`,i+=`
Would you like to update now?`,a&&(i+=`

Changelog:
- ${a.join(`
- `)}`),f.show({title:"Plugin Updater",body:i,confirmText:"Update",cancelText:"No",onConfirm:()=>{C(this.name,"_didUpdate",!0),this.installPlugin(!!t)}})},installPlugin(o=!1){var t;const a=o?"updated Build":"updated Version",i=o?`\`${(t=this.remoteHash)==null?void 0:t.slice(0,7)}\``:this.remoteVersion;window.enmity.plugins.installPlugin(`${this.rawUrl}?${Math.random()}`,({data:r})=>{r==="installed_plugin"||r==="overridden_plugin"?f.show({title:`Installed ${this.name} v${this.remoteVersion}`,body:`Successfully ${a} to **${i}**.
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:K}):console.error(`[${this.name}] Failed to install v${i}`)})}},{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const X=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch;const h=e.Text;e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable;const v=e.View;e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const u=e.FormRow,k=e.FormSection;e.FormSelect,e.FormSubLabel;const G=e.FormSwitch;e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes,x.create($);var J=({settings:o})=>{const t=z.createThemedStyleSheet({item:{color:d.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:d.ThemeColorMap.HEADER_PRIMARY,fontFamily:d.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:d.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[a,i]=n.useState(),[r,m]=n.useState();return n.createElement(n.Fragment,null,n.createElement(X,{onTouchStart:s=>{i(s.nativeEvent.pageX),m(s.nativeEvent.pageY)},onTouchEnd:s=>{a-s.nativeEvent.pageX<-100&&r-s.nativeEvent.pageY<40&&r-s.nativeEvent.pageY>-40&&Y.pop()}},n.createElement(v,null,n.createElement(v,{style:t.text_container},n.createElement(h,{style:[t.main_text,t.header]},F),n.createElement(v,{style:{flexDirection:"row"}},n.createElement(h,{style:[t.main_text,t.sub_header]},"Author:"),n.createElement(h,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},` ${L.map(s=>s.name).join(", ")}`)),n.createElement(v,{style:{flexDirection:"row"}},n.createElement(h,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(h,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},` ${E}`)),n.createElement(v,{style:{flexDirection:"row"}},n.createElement(h,{style:[t.main_text,t.sub_header]},"Hash:"),n.createElement(h,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:d.Fonts.DISPLAY_BOLD}]},` ${P.slice(0,7)}`)))),n.createElement(k,{title:"Updates"},n.createElement(u,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:n.createElement(G,{value:o.getBoolean("autoUpdateCheck",!0),onValueChange:()=>o.toggle("autoUpdateCheck",!0)})}),n.createElement(u,{label:"Check for Updates",trailing:u.Arrow,onPress:()=>x.checkForUpdates(!0)}),n.createElement(u,{label:"Show Changelog",subLabel:`Shows the changelog for v${E}`,trailing:u.Arrow,onPress:()=>x.showChangelog(),disabled:!R.length})),n.createElement(k,{title:"Source"},n.createElement(u,{label:"Source",subLabel:`See the Source Code for ${F}`,trailing:u.Arrow,onPress:()=>j.openURL(A)}))))};const M=W($.name),q={...$,onStart(){const o=t=>{const a=new Date().toISOString().replace(/T/," ").replace(/\..+/,"").replace(/\d?\d:\d\d/,t),i=Math.round(new Date(a).getTime()/1e3);return isNaN(i)?t:` <t:${i}:t> `};M.before(O,"sendMessage",(t,[,a])=>{const i=/\b(0?[0-9]|1[0-9]|2[0-4]):([0-5][0-9])( ?[ap]m)?\b/gi;a.content.search(i)!==-1&&(a.content=a.content.replace(i,r=>{let m,s,w;[,m,s,w]=i.exec(r).map((g,c)=>{if(g===void 0)return g;if(c===1||c===2)return parseInt(g);if(c===3)return g.trim().toUpperCase()});let l=`${m}:${s}`;return w==="PM"&&m<12&&m!==0?(m+=12,s=s.toString().padStart(2,"0"),l=`${m}:${s}`):(w==="AM"&&m===12||m===24)&&(l=`00:${s}`),o(l)}))})},onStop(){M.unpatchAll()},getSettingsPanel({settings:o}){return n.createElement(J,{settings:o})}};H(q);
