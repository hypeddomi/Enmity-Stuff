function N(e){return window.enmity.assets.getIDByName(e)}const{components:o}=window.enmity;o.Alert,o.Button,o.FlatList,o.Image,o.ImageBackground,o.KeyboardAvoidingView,o.Modal,o.Pressable,o.RefreshControl;const O=o.ScrollView;o.SectionList,o.StatusBar,o.StyleSheet,o.Switch;const w=o.Text;o.TextInput,o.TouchableHighlight,o.TouchableOpacity,o.TouchableWithoutFeedback,o.Touchable;const S=o.View;o.VirtualizedList,o.Form,o.FormArrow,o.FormCTA,o.FormCTAButton,o.FormCardSection,o.FormCheckbox,o.FormDivider,o.FormHint,o.FormIcon,o.FormInput,o.FormLabel,o.FormRadio;const d=o.FormRow,k=o.FormSection;o.FormSelect,o.FormSubLabel;const Y=o.FormSwitch;o.FormTernaryCheckBox,o.FormText,o.FormTextColors,o.FormTextSizes;function G(e){window.enmity.plugins.registerPlugin(e)}const g={byProps:(...e)=>window.enmity.modules.filters.byProps(...e),byName:(e,t)=>window.enmity.modules.filters.byName(e,t),byTypeName:(e,t)=>window.enmity.modules.filters.byTypeName(e,t),byDisplayName:(e,t)=>window.enmity.modules.filters.byDisplayName(e,t)};function K(...e){return window.enmity.modules.bulk(...e)}function z(...e){return window.enmity.modules.getByProps(...e)}window.enmity.modules.common;const h=window.enmity.modules.common.Constants;window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const n=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage,window.enmity.modules.common.Toasts;const F=window.enmity.modules.common.Dialog;window.enmity.modules.common.Token;const j=window.enmity.modules.common.REST;window.enmity.modules.common.Settings,window.enmity.modules.common.Users;const W=window.enmity.modules.common.Navigation;window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking;const X=window.enmity.modules.common.StyleSheet;window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes,window.enmity.modules.common.Moment;function J(e){return window.enmity.patcher.create(e)}function R(e,t,s){return window.enmity.utilities.findInReactTree(e,t,s)}var _="UnsuppressEmbeds",x="1.0.0",q="Allows you to Suppress/Unsuppress Embeds",B=[{name:"HypedDomi",id:"354191516979429376"}],Q="#E54B4B",Z="https://raw.githubusercontent.com/HypedDomi/Enmity-Stuff/main/dist/UnsuppressEmbeds.js",M="https://github.com/HypedDomi/Enmity-Stuff/tree/main/UnsuppressEmbeds",V=[],I="f1aa9a96a3da47d26b8cd4fb88c4a5f1c08a922b",U={name:_,version:x,description:q,authors:B,color:Q,rawUrl:Z,sourceUrl:M,changelog:V,hash:I};const{native:E}=window.enmity;function ee(){E.reload()}E.version,E.build,E.device,E.version;function D(e,t,s){window.enmity.settings.set(e,t,s)}function $(e,t,s){return window.enmity.settings.get(e,t,s)}const P={name:"",version:"",rawUrl:"",changelog:[""],hash:"",remoteHash:null,remoteVersion:null,remoteChangelog:[""],create({name:e,version:t,rawUrl:s,changelog:i,hash:a}){if(!e||!t||!s||!i||!a)return console.error(`[${e||__filename}] Missing parameters in constructor`);this.name=e,this.version=t,this.rawUrl=s,this.changelog=i,this.hash=a,$(e,"_didUpdate",!1)||($(e,"_changelog",t)!==t&&this.showChangelog(),$(e,"autoUpdateCheck",!0)&&this.hash!=="DEBUG"&&this.checkForUpdates()),D(e,"_didUpdate",!1)},showChangelog(){!this.changelog||F.show({title:`${this.name} - v${this.version}`,body:`- ${this.changelog.join(`
- `)}`,confirmText:"OK",onConfirm:()=>D(this.name,"_changelog",this.version)})},async checkForUpdates(e=!1){var t,s,i,a,l,r;const c=await(await fetch(`${this.rawUrl}?${Math.random()}`)).text(),f=(t=c.match(/hash:(\w+)/))==null?void 0:t[1],v=(s=c.match(new RegExp(`${f}="([^,"]+)"`)))==null?void 0:s[1];v?this.remoteHash=v!=null?v:"0AB1C2":console.warn(`[${this.name}] Failed to fetch remote hash`);const T=(i=c.match(/version:(\w+)/))==null?void 0:i[1],p=(a=c.match(new RegExp(`${T}="([^,"]+)"`)))==null?void 0:a[1];p?this.remoteVersion=p:console.warn(`[${this.name}] Failed to fetch remote version`);const C=(l=c.match(/changelog:(\w+)/))==null?void 0:l[1],u=(r=c.match(new RegExp(`${C}=\\[(.*?)\\]`)))==null?void 0:r[0];if(u?this.remoteChangelog=JSON.parse(u.replace(`${C}=`,"")):console.warn(`[${this.name}] Failed to fetch remote changelog`),this.remoteHash&&this.remoteVersion){const m=this.version.split(".").map(Number),b=this.remoteVersion.split(".").map(Number);for(let y=0;y<m.length;y++){if(b[y]>m[y])return this.showUpdateDialog({version:this.remoteVersion,changelog:this.remoteChangelog});if(b[y]<m[y])return console.log(`[${this.name}] Remote version is older than local version`)}if(this.remoteHash!==this.hash)return this.showUpdateDialog({hash:this.remoteHash})}!e||F.show({title:"Plugin Updater",body:`No update available for ${this.name}`,confirmText:"OK"})},showUpdateDialog({version:e,hash:t,changelog:s}){if(!e&&!t)return console.error(`[${this.name}] Missing parameters in showUpdateDialog()`);let i="";e?i=`New Version for ${this.name} is available!`:i=`New Build for ${this.name} is available!`,i+=`
Would you like to update now?`,s&&(i+=`

Changelog:
- ${s.join(`
- `)}`),F.show({title:"Plugin Updater",body:i,confirmText:"Update",cancelText:"No",onConfirm:()=>{D(this.name,"_didUpdate",!0),this.installPlugin(!!t)}})},installPlugin(e=!1){var t;const s=e?"updated Build":"updated Version",i=e?`\`${(t=this.remoteHash)==null?void 0:t.slice(0,7)}\``:this.remoteVersion;window.enmity.plugins.installPlugin(`${this.rawUrl}?${Math.random()}`,({data:a})=>{a==="installed_plugin"||a==="overridden_plugin"?F.show({title:`Installed ${this.name} v${this.remoteVersion}`,body:`Successfully ${s} to **${i}**.
Would you like to reload Discord now?`,confirmText:"Reload",cancelText:"Later",onConfirm:ee}):console.error(`[${this.name}] Failed to install v${i}`)})}},H=z("transitionToGuild","openURL");P.create(U);var oe=({settings:e})=>{const t=X.createThemedStyleSheet({item:{color:h.ThemeColorMap.TEXT_MUTED},text_container:{paddingLeft:15,paddingTop:5,flexDirection:"column",flexWrap:"wrap"},main_text:{opacity:.975,letterSpacing:.25},header:{color:h.ThemeColorMap.HEADER_PRIMARY,fontFamily:h.Fonts.DISPLAY_BOLD,fontSize:25,letterSpacing:.25},sub_header:{color:h.ThemeColorMap.HEADER_SECONDARY,opacity:.975,fontSize:12.75}}),[s,i]=n.useState(),[a,l]=n.useState();return n.createElement(n.Fragment,null,n.createElement(O,{onTouchStart:r=>{i(r.nativeEvent.pageX),l(r.nativeEvent.pageY)},onTouchEnd:r=>{s-r.nativeEvent.pageX<-100&&a-r.nativeEvent.pageY<40&&a-r.nativeEvent.pageY>-40&&W.pop()}},n.createElement(S,null,n.createElement(S,{style:t.text_container},n.createElement(w,{style:[t.main_text,t.header]},_),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(w,{style:[t.main_text,t.sub_header]},"Author:"),n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},` ${B.map(r=>r.name).join(", ")}`)),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(w,{style:[t.main_text,t.sub_header]},"Version:"),n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},` ${x}`)),n.createElement(S,{style:{flexDirection:"row"}},n.createElement(w,{style:[t.main_text,t.sub_header]},"Hash:"),n.createElement(w,{style:[t.main_text,t.sub_header,{paddingLeft:4,fontFamily:h.Fonts.DISPLAY_BOLD}]},` ${I.slice(0,7)}`)))),n.createElement(k,{title:"Updates"},n.createElement(d,{label:"Check for Updates on startup",subLabel:"Checks automatically for updates when starting the Plugin",trailing:n.createElement(Y,{value:e.getBoolean("autoUpdateCheck",!0),onValueChange:()=>e.toggle("autoUpdateCheck",!0)})}),n.createElement(d,{label:"Check for Updates",trailing:d.Arrow,onPress:()=>P.checkForUpdates(!0)}),n.createElement(d,{label:"Show Changelog",subLabel:`Shows the changelog for v${x}`,trailing:d.Arrow,onPress:()=>P.showChangelog(),disabled:!V.length})),n.createElement(k,{title:"Source"},n.createElement(d,{label:"Source",subLabel:`See the Source Code for ${_}`,trailing:d.Arrow,onPress:()=>H==null?void 0:H.openURL(M)}))))};const A=1<<2,[te,ne,ie,se,ae,re,le]=K(g.byName("ActionSheet",!1),g.byProps("getChannel"),g.byProps("Messages"),g.byName("Icon"),g.byProps("openLazy","hideActionSheet"),g.byProps("getChannelPermissions"),g.byProps("getCurrentUser","getUser")),L=J(U.name),me={...U,onStart(){L.after(te,"default",(e,t,s)=>{const i=R(s,a=>a.sheetKey);(i==null?void 0:i.sheetKey)&&i.sheetKey!=="MessageLongPressActionSheet"||L.after(i==null?void 0:i.content,"type",(a,[{message:l}],r)=>{const c=ne.getChannel(l.channel_id),f=!!(l.flags&A),v=!!(re.getChannelPermissions({id:l.channel_id})&h.Permissions.MANAGE_MESSAGES),T=l.author.id===le.getCurrentUser().id&&(c.isDM()||c.isGroupDM());if(!v&&!T)return;const p=R(r,u=>Array.isArray(u)&&u.find(m=>{var b;return typeof(m==null?void 0:m.key)=="string"&&typeof((b=m==null?void 0:m.props)==null?void 0:b.message)=="string"})),C=p==null?void 0:p.findIndex(u=>{var m;return((m=u.props)==null?void 0:m.message)===ie.Messages.DELETE_MESSAGE});p.splice(C,0,n.createElement(d,{key:U.name,label:f?"Unsuppress Embeds":"Suppress Embeds",leading:n.createElement(se,{source:N(f?"ic_message_retry":"ic_close_16px")}),onPress:()=>{j.patch({url:`/channels/${c.id}/messages/${l.id}`,body:{flags:f?l.flags&~A:l.flags|A}}),ae.hideActionSheet()}}))})})},onStop(){L.unpatchAll()},getSettingsPanel({settings:e}){return n.createElement(oe,{settings:e})}};G(me);
