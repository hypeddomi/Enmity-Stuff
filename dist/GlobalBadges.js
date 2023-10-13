var $="GlobalBadges",U="1.2.6",H="Adds global badges from other client mods",A=[{name:"HypedDomi",id:"354191516979429376"}],O="#E54B4B",j="https://raw.githubusercontent.com/domi-btnr/Enmity-Stuff/main/dist/GlobalBadges.js",V="https://github.com/domi-btnr/Enmity-Stuff/tree/main/GlobalBadges",k=["Fixed Badges not appearing on Profiles"],R="f58735ee1ceb91d1b56a62fbc66d783e89365bdb",v={name:$,version:U,description:H,authors:A,color:O,rawUrl:j,sourceUrl:V,changelog:k,hash:R};function T(e,o,i){window.enmity.settings.set(e,o,i)}function E(e,o,i){return window.enmity.settings.get(e,o,i)}const{components:t}=window.enmity;t.Alert,t.Button,t.FlatList;const Y=t.Image;t.ImageBackground,t.KeyboardAvoidingView,t.Modal,t.Pressable,t.RefreshControl;const z=t.ScrollView;t.SectionList,t.StatusBar,t.StyleSheet,t.Switch;const h=t.Text;t.TextInput,t.TouchableHighlight;const G=t.TouchableOpacity;t.TouchableWithoutFeedback,t.Touchable;const u=t.View;t.VirtualizedList,t.Form,t.FormArrow,t.FormCTA,t.FormCTAButton,t.FormCardSection,t.FormCheckbox,t.FormDivider,t.FormHint,t.FormIcon,t.FormInput,t.FormLabel,t.FormRadio;const c=t.FormRow,B=t.FormSection;t.FormSelect,t.FormSubLabel;const _=t.FormSwitch;t.FormTernaryCheckBox,t.FormText,t.FormTextColors,t.FormTextSizes;function W(e){window.enmity.plugins.registerPlugin(e)}function K(...e){return window.enmity.modules.getByProps(...e)}function X(...e){return window.enmity.modules.getByName(...e)}window.enmity.modules.common;const g=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const J=window.enmity.modules.common.Toasts,x=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const q=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const Q=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function Z(e){return window.enmity.patcher.create(e)}const{native:S}=window.enmity;function ee(){S.reload()}S.version,S.build,S.device,S.version;const D={name:"",version:"",rawUrl:"",changelog:[""],hash:"",remoteHash:null,remoteVersion:null,remoteChangelog:[""],create({name:e,version:o,rawUrl:i,changelog:s,hash:a}){if(!e||!o||!i||!s||!a)return console.error(`[${e||__filename}] Missing parameters in constructor`);this.name=e,this.version=o,this.rawUrl=i,this.changelog=s,this.hash=a,E(e,"_didUpdate",!1)||(E(e,"_changelog",o)!==o&&this.showChangelog(),E(e,"autoUpdateCheck",!0)&&this.hash!=="DEBUG"&&this.checkForUpdates()),T(e,"_didUpdate",!1)},showChangelog(){!this.changelog||x.show({title:`${this.name} - v${this.version}`,body:`- ${this.changelog.join(`
- `)}`,confirmText:"OK",onConfirm:()=>T(this.name,"_changelog",this.version)})},async checkForUpdates(e=!1){var o,i,s,a,w,l;const d=await(await fetch(`${this.rawUrl}?${Math.random()}`)).text(),p=(o=d.match(/hash:(\w+)/))==null?void 0:o[1],m=(i=d.match(new RegExp(`${p}="([^,"]+)"`)))==null?void 0:i[1];m?this.remoteHash=m!=null?m:"0AB1C2":console.warn(`[${this.name}] Failed to fetch remote hash`);const r=(s=d.match(/version:(\w+)/))==null?void 0:s[1],f=(a=d.match(new RegExp(`${r}="([^,"]+)"`)))==null?void 0:a[1];f?this.remoteVersion=f:console.warn(`[${this.name}] Failed to fetch remote version`);const C=(w=d.match(/changelog:(\w+)/))==null?void 0:w[1],b=(l=d.match(new RegExp(`${C}=\\[(.*?)\\]`)))==null?void 0:l[0];if(b?this.remoteChangelog=JSON.parse(b.replace(`${C}=`,"")):console.warn(`[${this.name}] Failed to fetch remote changelog`),this.remoteHash&&this.remoteVersion){const F=this.version.split(".").map(Number),P=this.remoteVersion.split(".").map(Number);for(let y=0;y<F.length;y++){if(P[y]>F[y])return this.showUpdateDialog({version:this.remoteVersion,changelog:this.remoteChangelog});if(P[y]<F[y])return console.log(`[${this.name}] Remote version is older than local version`)}if(this.remoteHash!==this.hash)return this.showUpdateDialog({hash:this.remoteHash})}!e||x.show({title:"Plugin Updater",body:`No update available for ${this.name}`,confirmText:"OK"})},showUpdateDialog({version:e,hash:o,changelog:i}){if(!e&&!o)return console.error(`[${this.name}] Missing parameters in showUpdateDialog()`);let s="";e?s=`New Version for ${this.name} is available!`:s=`New Build for ${this.name} is available!`,s+=`
Would you like to update now?`,i&&(s+=`

Changelog:
- ${i.join(`
- `)}`),x.show({title:"Plugin Updater",body:s,confirmText:"Update",cancelText:"No",onConfirm:()=>{T(this.name,"_didUpdate",!0),this.installPlugin(!!o)}})},installPlugin(e=!1){var o;const i=e?"updated Build":"updated Version",s=e?`\`${(o=this.remoteHash)==null?void 0:o.slice(0,7)}\``:this.remoteVersion;window.enmity.plugins.installPlugin(`${this.rawUrl}?${Math.random()}`,({data:a})=>{a==="installed_plugin"||a==="overridden_plugin"?x.show({title:`Installed ${this.name} v${this.remoteVersion}`,body:`Successfully ${i} to **${s}**.
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:ee}):console.error(`[${this.name}] Failed to install v${s}`)})}},M=K("transitionToGuild","openURL");D.create(v);var te=({settings:e})=>{const o=Q.createThemedStyleSheet({item:{color:g.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:g.ThemeColorMap.HEADER_PRIMARY,fontFamily:g.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:g.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[i,s]=n.useState(),[a,w]=n.useState();return n.createElement(n.Fragment,null,n.createElement(z,{onTouchStart:l=>{s(l.nativeEvent.pageX),w(l.nativeEvent.pageY)},onTouchEnd:l=>{i-l.nativeEvent.pageX<-100&&a-l.nativeEvent.pageY<40&&a-l.nativeEvent.pageY>-40&&q.pop()}},n.createElement(u,null,n.createElement(u,{style:o.text_container},n.createElement(h,{style:[o.main_text,o.header]},$),n.createElement(u,{style:{flexDirection:"row"}},n.createElement(h,{style:[o.main_text,o.sub_header]},"Author:"),n.createElement(h,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},` ${A.map(l=>l.name).join(", ")}`)),n.createElement(u,{style:{flexDirection:"row"}},n.createElement(h,{style:[o.main_text,o.sub_header]},"Version:"),n.createElement(h,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},` ${U}`)),n.createElement(u,{style:{flexDirection:"row"}},n.createElement(h,{style:[o.main_text,o.sub_header]},"Hash:"),n.createElement(h,{style:[o.main_text,o.sub_header,{paddingLeft:4,fontFamily:g.Fonts.DISPLAY_BOLD}]},` ${R.slice(0,7)}`)))),n.createElement(B,{title:"Badges"},n.createElement(c,{label:"Prefix",subLabel:"Shows the Mod as Prefix",trailing:n.createElement(_,{value:e.getBoolean("showPrefix",!0),onValueChange:()=>e.toggle("showPrefix",!0)})}),n.createElement(c,{label:"Custom Badges",subLabel:"Show Custom Badges",trailing:n.createElement(_,{value:e.getBoolean("showCustom",!0),onValueChange:()=>e.toggle("showCustom",!0)})})),n.createElement(B,{title:"Updates"},n.createElement(c,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:n.createElement(_,{value:e.getBoolean("autoUpdateCheck",!0),onValueChange:()=>e.toggle("autoUpdateCheck",!0)})}),n.createElement(c,{label:"Check for Updates",trailing:c.Arrow,onPress:()=>D.checkForUpdates(!0)}),n.createElement(c,{label:"Show Changelog",subLabel:`Shows the changelog for v${U}`,trailing:c.Arrow,onPress:()=>D.showChangelog(),disabled:!k.length})),n.createElement(B,{title:"Source"},n.createElement(c,{label:"Source",subLabel:`See the Source Code for ${$}`,trailing:c.Arrow,onPress:()=>M==null?void 0:M.openURL(V)}))))};const N="https://clientmodbadges-api.herokuapp.com/",L=new Map,oe=1e3*60*15,ne=e=>{const o=L.get(e);if(!L.has(e)||o&&o.expires<Date.now())fetch(`${N}users/${e}`).then(i=>i.json()).then(i=>(L.set(e,{badges:i,expires:Date.now()+oe}),i));else if(o)return o.badges},ie=({name:e,img:o})=>{const i={wrapper:{alignItems:"center",flexDirection:"row",justifyContent:"flex-end"},image:{width:24,height:24,resizeMode:"contain",marginHorizontal:2}};return n.createElement(u,{style:i.wrapper},n.createElement(G,{onPress:()=>J.open({content:e,source:{uri:o}})},n.createElement(Y,{style:i.image,source:{uri:o}})))},I=Z(v.name),ae={...v,onStart(){const e=X("ProfileBadges",{default:!1});I.after(e,"default",(o,[{user:{id:i},style:s}],a)=>{const w=a;a||(a=n.createElement(u,{style:[s,{flexDirection:"row",flexWrap:"wrap",alignItems:"flex-end",justifyContent:"flex-end",paddingVertical:2}],accessibilityRole:"list",accessibilityLabel:"User Badges"}),a.props.children=[]);const[l,d]=n.useState({});n.useEffect(()=>{var m;return d((m=ne(i))!=null?m:{})},[]);const p=[];if(!l||(Object.keys(l).forEach(m=>{m.toLowerCase()!=="enmity"&&l[m].forEach(r=>{if(typeof r=="string"){const b={hunter:"Bug Hunter",early:"Early User"};r={name:b[r]?b[r]:r,badge:`${N}badges/${m}/${r.replace(m,"").trim().split(" ")[0]}`}}else typeof r=="object"&&(r.custom=!0);if(!E(v.name,"showCustom",!0)&&r.custom)return;const f=r.name.replace(m,"").trim(),C=E(v.name,"showPrefix",!0)?m:"";r.custom||(r.name=`${C} ${f.charAt(0).toUpperCase()+f.slice(1)}`),p.push(n.createElement(ie,{name:r.name,img:r.badge}))})}),!p.length)||(a.props.badges?a.props.badges.push(...p):a.props.children.push(...p),!w))return a})},onStop(){I.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(te,{settings:e})}};W(ae);
