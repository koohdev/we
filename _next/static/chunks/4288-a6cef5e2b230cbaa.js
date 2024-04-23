"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4288],{65010:function(e,r,o){o.d(r,{Z:function(){return B}});var t=o(64090),n=/^\[(.+)\]$/;function i(e,r){var o=e;return r.split("-").forEach(function(e){o.nextPart.has(e)||o.nextPart.set(e,{nextPart:new Map,validators:[]}),o=o.nextPart.get(e)}),o}var a=/\s+/;function l(){for(var e,r,o=0,t="";o<arguments.length;)(e=arguments[o++])&&(r=function e(r){if("string"==typeof r)return r;for(var o,t="",n=0;n<r.length;n++)r[n]&&(o=e(r[n]))&&(t&&(t+=" "),t+=o);return t}(e))&&(t&&(t+=" "),t+=r);return t}function s(e){var r=function(r){return r[e]||[]};return r.isThemeGetter=!0,r}var c=/^\[(?:([a-z-]+):)?(.+)\]$/i,d=/^\d+\/\d+$/,u=new Set(["px","full","screen"]),p=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,f=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,b=/^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/;function m(e){return w(e)||u.has(e)||d.test(e)||g(e)}function g(e){return P(e,"length",I)}function h(e){return P(e,"size",M)}function v(e){return P(e,"position",M)}function y(e){return P(e,"url",O)}function x(e){return P(e,"number",w)}function w(e){return!Number.isNaN(Number(e))}function k(e){return e.endsWith("%")&&w(e.slice(0,-1))}function z(e){return E(e)||P(e,"number",E)}function j(e){return c.test(e)}function C(){return!0}function G(e){return p.test(e)}function N(e){return P(e,"",S)}function P(e,r,o){var t=c.exec(e);return!!t&&(t[1]?t[1]===r:o(t[2]))}function I(e){return f.test(e)}function M(){return!1}function O(e){return e.startsWith("url(")}function E(e){return Number.isInteger(Number(e))}function S(e){return b.test(e)}var $=function(){for(var e,r,o,t=arguments.length,s=Array(t),c=0;c<t;c++)s[c]=arguments[c];var d=function(t){var a=s[0];return r=(e=function(e){var r,o,t,a,l,s,c,d,u,p,f;return{cache:function(e){if(e<1)return{get:function(){},set:function(){}};var r=0,o=new Map,t=new Map;function n(n,i){o.set(n,i),++r>e&&(r=0,t=o,o=new Map)}return{get:function(e){var r=o.get(e);return void 0!==r?r:void 0!==(r=t.get(e))?(n(e,r),r):void 0},set:function(e,r){o.has(e)?o.set(e,r):n(e,r)}}}(e.cacheSize),splitModifiers:(o=1===(r=e.separator||":").length,t=r[0],a=r.length,function(e){for(var n,i=[],l=0,s=0,c=0;c<e.length;c++){var d=e[c];if(0===l){if(d===t&&(o||e.slice(c,c+a)===r)){i.push(e.slice(s,c)),s=c+a;continue}if("/"===d){n=c;continue}}"["===d?l++:"]"===d&&l--}var u=0===i.length?e:e.substring(s),p=u.startsWith("!"),f=p?u.substring(1):u;return{modifiers:i,hasImportantModifier:p,baseClassName:f,maybePostfixModifierPosition:n&&n>s?n-s:void 0}}),...(d=e.theme,u=e.prefix,p={nextPart:new Map,validators:[]},(f=Object.entries(e.classGroups),u?f.map(function(e){return[e[0],e[1].map(function(e){return"string"==typeof e?u+e:"object"==typeof e?Object.fromEntries(Object.entries(e).map(function(e){return[u+e[0],e[1]]})):e})]}):f).forEach(function(e){var r=e[0];(function e(r,o,t,n){r.forEach(function(r){if("string"==typeof r){(""===r?o:i(o,r)).classGroupId=t;return}if("function"==typeof r){if(r.isThemeGetter){e(r(n),o,t,n);return}o.validators.push({validator:r,classGroupId:t});return}Object.entries(r).forEach(function(r){var a=r[0];e(r[1],i(o,a),t,n)})})})(e[1],p,r,d)}),l=e.conflictingClassGroups,c=void 0===(s=e.conflictingClassGroupModifiers)?{}:s,{getClassGroupId:function(e){var r=e.split("-");return""===r[0]&&1!==r.length&&r.shift(),function e(r,o){if(0===r.length)return o.classGroupId;var t,n=r[0],i=o.nextPart.get(n),a=i?e(r.slice(1),i):void 0;if(a)return a;if(0!==o.validators.length){var l=r.join("-");return null===(t=o.validators.find(function(e){return(0,e.validator)(l)}))||void 0===t?void 0:t.classGroupId}}(r,p)||function(e){if(n.test(e)){var r=n.exec(e)[1],o=null==r?void 0:r.substring(0,r.indexOf(":"));if(o)return"arbitrary.."+o}}(e)},getConflictingClassGroupIds:function(e,r){var o=l[e]||[];return r&&c[e]?[].concat(o,c[e]):o}})}}(s.slice(1).reduce(function(e,r){return r(e)},a()))).cache.get,o=e.cache.set,d=u,u(t)};function u(t){var n,i,l,s,c,d=r(t);if(d)return d;var u=(i=(n=e).splitModifiers,l=n.getClassGroupId,s=n.getConflictingClassGroupIds,c=new Set,t.trim().split(a).map(function(e){var r=i(e),o=r.modifiers,t=r.hasImportantModifier,n=r.baseClassName,a=r.maybePostfixModifierPosition,s=l(a?n.substring(0,a):n),c=!!a;if(!s){if(!a||!(s=l(n)))return{isTailwindClass:!1,originalClassName:e};c=!1}var d=(function(e){if(e.length<=1)return e;var r=[],o=[];return e.forEach(function(e){"["===e[0]?(r.push.apply(r,o.sort().concat([e])),o=[]):o.push(e)}),r.push.apply(r,o.sort()),r})(o).join(":");return{isTailwindClass:!0,modifierId:t?d+"!":d,classGroupId:s,originalClassName:e,hasPostfixModifier:c}}).reverse().filter(function(e){if(!e.isTailwindClass)return!0;var r=e.modifierId,o=e.classGroupId,t=e.hasPostfixModifier,n=r+o;return!c.has(n)&&(c.add(n),s(o,t).forEach(function(e){return c.add(r+e)}),!0)}).reverse().map(function(e){return e.originalClassName}).join(" "));return o(t,u),u}return function(){return d(l.apply(null,arguments))}}(function(){var e=s("colors"),r=s("spacing"),o=s("blur"),t=s("brightness"),n=s("borderColor"),i=s("borderRadius"),a=s("borderSpacing"),l=s("borderWidth"),c=s("contrast"),d=s("grayscale"),u=s("hueRotate"),p=s("invert"),f=s("gap"),b=s("gradientColorStops"),P=s("gradientColorStopPositions"),I=s("inset"),M=s("margin"),O=s("opacity"),E=s("padding"),S=s("saturate"),$=s("scale"),T=s("sepia"),_=s("skew"),R=s("space"),W=s("translate"),q=function(){return["auto","contain","none"]},A=function(){return["auto","hidden","clip","visible","scroll"]},Z=function(){return["auto",j,r]},B=function(){return[j,r]},D=function(){return["",m]},F=function(){return["auto",w,j]},H=function(){return["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"]},J=function(){return["solid","dashed","dotted","double","none"]},K=function(){return["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity","plus-lighter"]},L=function(){return["start","end","center","between","around","evenly","stretch"]},Q=function(){return["","0",j]},U=function(){return["auto","avoid","all","avoid-page","page","left","right","column"]},V=function(){return[w,x]},X=function(){return[w,j]};return{cacheSize:500,theme:{colors:[C],spacing:[m],blur:["none","",G,j],brightness:V(),borderColor:[e],borderRadius:["none","","full",G,j],borderSpacing:B(),borderWidth:D(),contrast:V(),grayscale:Q(),hueRotate:X(),invert:Q(),gap:B(),gradientColorStops:[e],gradientColorStopPositions:[k,g],inset:Z(),margin:Z(),opacity:V(),padding:B(),saturate:V(),scale:V(),sepia:Q(),skew:X(),space:B(),translate:B()},classGroups:{aspect:[{aspect:["auto","square","video",j]}],container:["container"],columns:[{columns:[G]}],"break-after":[{"break-after":U()}],"break-before":[{"break-before":U()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none"]}],clear:[{clear:["left","right","both","none"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[].concat(H(),[j])}],overflow:[{overflow:A()}],"overflow-x":[{"overflow-x":A()}],"overflow-y":[{"overflow-y":A()}],overscroll:[{overscroll:q()}],"overscroll-x":[{"overscroll-x":q()}],"overscroll-y":[{"overscroll-y":q()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[I]}],"inset-x":[{"inset-x":[I]}],"inset-y":[{"inset-y":[I]}],start:[{start:[I]}],end:[{end:[I]}],top:[{top:[I]}],right:[{right:[I]}],bottom:[{bottom:[I]}],left:[{left:[I]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",z]}],basis:[{basis:Z()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",j]}],grow:[{grow:Q()}],shrink:[{shrink:Q()}],order:[{order:["first","last","none",z]}],"grid-cols":[{"grid-cols":[C]}],"col-start-end":[{col:["auto",{span:["full",z]},j]}],"col-start":[{"col-start":F()}],"col-end":[{"col-end":F()}],"grid-rows":[{"grid-rows":[C]}],"row-start-end":[{row:["auto",{span:[z]},j]}],"row-start":[{"row-start":F()}],"row-end":[{"row-end":F()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",j]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",j]}],gap:[{gap:[f]}],"gap-x":[{"gap-x":[f]}],"gap-y":[{"gap-y":[f]}],"justify-content":[{justify:["normal"].concat(L())}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal"].concat(L(),["baseline"])}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[].concat(L(),["baseline"])}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[E]}],px:[{px:[E]}],py:[{py:[E]}],ps:[{ps:[E]}],pe:[{pe:[E]}],pt:[{pt:[E]}],pr:[{pr:[E]}],pb:[{pb:[E]}],pl:[{pl:[E]}],m:[{m:[M]}],mx:[{mx:[M]}],my:[{my:[M]}],ms:[{ms:[M]}],me:[{me:[M]}],mt:[{mt:[M]}],mr:[{mr:[M]}],mb:[{mb:[M]}],ml:[{ml:[M]}],"space-x":[{"space-x":[R]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[R]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit",j,r]}],"min-w":[{"min-w":["min","max","fit",j,m]}],"max-w":[{"max-w":["0","none","full","min","max","fit","prose",{screen:[G]},G,j]}],h:[{h:[j,r,"auto","min","max","fit"]}],"min-h":[{"min-h":["min","max","fit",j,m]}],"max-h":[{"max-h":[j,r,"min","max","fit"]}],"font-size":[{text:["base",G,g]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",x]}],"font-family":[{font:[C]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractons"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",j]}],"line-clamp":[{"line-clamp":["none",w,x]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",j,m]}],"list-image":[{"list-image":["none",j]}],"list-style-type":[{list:["none","disc","decimal",j]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[e]}],"placeholder-opacity":[{"placeholder-opacity":[O]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[e]}],"text-opacity":[{"text-opacity":[O]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[].concat(J(),["wavy"])}],"text-decoration-thickness":[{decoration:["auto","from-font",m]}],"underline-offset":[{"underline-offset":["auto",j,m]}],"text-decoration-color":[{decoration:[e]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],indent:[{indent:B()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",j]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",j]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[O]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[].concat(H(),[v])}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",h]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},y]}],"bg-color":[{bg:[e]}],"gradient-from-pos":[{from:[P]}],"gradient-via-pos":[{via:[P]}],"gradient-to-pos":[{to:[P]}],"gradient-from":[{from:[b]}],"gradient-via":[{via:[b]}],"gradient-to":[{to:[b]}],rounded:[{rounded:[i]}],"rounded-s":[{"rounded-s":[i]}],"rounded-e":[{"rounded-e":[i]}],"rounded-t":[{"rounded-t":[i]}],"rounded-r":[{"rounded-r":[i]}],"rounded-b":[{"rounded-b":[i]}],"rounded-l":[{"rounded-l":[i]}],"rounded-ss":[{"rounded-ss":[i]}],"rounded-se":[{"rounded-se":[i]}],"rounded-ee":[{"rounded-ee":[i]}],"rounded-es":[{"rounded-es":[i]}],"rounded-tl":[{"rounded-tl":[i]}],"rounded-tr":[{"rounded-tr":[i]}],"rounded-br":[{"rounded-br":[i]}],"rounded-bl":[{"rounded-bl":[i]}],"border-w":[{border:[l]}],"border-w-x":[{"border-x":[l]}],"border-w-y":[{"border-y":[l]}],"border-w-s":[{"border-s":[l]}],"border-w-e":[{"border-e":[l]}],"border-w-t":[{"border-t":[l]}],"border-w-r":[{"border-r":[l]}],"border-w-b":[{"border-b":[l]}],"border-w-l":[{"border-l":[l]}],"border-opacity":[{"border-opacity":[O]}],"border-style":[{border:[].concat(J(),["hidden"])}],"divide-x":[{"divide-x":[l]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[l]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[O]}],"divide-style":[{divide:J()}],"border-color":[{border:[n]}],"border-color-x":[{"border-x":[n]}],"border-color-y":[{"border-y":[n]}],"border-color-t":[{"border-t":[n]}],"border-color-r":[{"border-r":[n]}],"border-color-b":[{"border-b":[n]}],"border-color-l":[{"border-l":[n]}],"divide-color":[{divide:[n]}],"outline-style":[{outline:[""].concat(J())}],"outline-offset":[{"outline-offset":[j,m]}],"outline-w":[{outline:[m]}],"outline-color":[{outline:[e]}],"ring-w":[{ring:D()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[e]}],"ring-opacity":[{"ring-opacity":[O]}],"ring-offset-w":[{"ring-offset":[m]}],"ring-offset-color":[{"ring-offset":[e]}],shadow:[{shadow:["","inner","none",G,N]}],"shadow-color":[{shadow:[C]}],opacity:[{opacity:[O]}],"mix-blend":[{"mix-blend":K()}],"bg-blend":[{"bg-blend":K()}],filter:[{filter:["","none"]}],blur:[{blur:[o]}],brightness:[{brightness:[t]}],contrast:[{contrast:[c]}],"drop-shadow":[{"drop-shadow":["","none",G,j]}],grayscale:[{grayscale:[d]}],"hue-rotate":[{"hue-rotate":[u]}],invert:[{invert:[p]}],saturate:[{saturate:[S]}],sepia:[{sepia:[T]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[o]}],"backdrop-brightness":[{"backdrop-brightness":[t]}],"backdrop-contrast":[{"backdrop-contrast":[c]}],"backdrop-grayscale":[{"backdrop-grayscale":[d]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[u]}],"backdrop-invert":[{"backdrop-invert":[p]}],"backdrop-opacity":[{"backdrop-opacity":[O]}],"backdrop-saturate":[{"backdrop-saturate":[S]}],"backdrop-sepia":[{"backdrop-sepia":[T]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[a]}],"border-spacing-x":[{"border-spacing-x":[a]}],"border-spacing-y":[{"border-spacing-y":[a]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",j]}],duration:[{duration:X()}],ease:[{ease:["linear","in","out","in-out",j]}],delay:[{delay:X()}],animate:[{animate:["none","spin","ping","pulse","bounce",j]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[$]}],"scale-x":[{"scale-x":[$]}],"scale-y":[{"scale-y":[$]}],rotate:[{rotate:[z,j]}],"translate-x":[{"translate-x":[W]}],"translate-y":[{"translate-y":[W]}],"skew-x":[{"skew-x":[_]}],"skew-y":[{"skew-y":[_]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",j]}],accent:[{accent:["auto",e]}],appearance:["appearance-none"],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",j]}],"caret-color":[{caret:[e]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":B()}],"scroll-mx":[{"scroll-mx":B()}],"scroll-my":[{"scroll-my":B()}],"scroll-ms":[{"scroll-ms":B()}],"scroll-me":[{"scroll-me":B()}],"scroll-mt":[{"scroll-mt":B()}],"scroll-mr":[{"scroll-mr":B()}],"scroll-mb":[{"scroll-mb":B()}],"scroll-ml":[{"scroll-ml":B()}],"scroll-p":[{"scroll-p":B()}],"scroll-px":[{"scroll-px":B()}],"scroll-py":[{"scroll-py":B()}],"scroll-ps":[{"scroll-ps":B()}],"scroll-pe":[{"scroll-pe":B()}],"scroll-pt":[{"scroll-pt":B()}],"scroll-pr":[{"scroll-pr":B()}],"scroll-pb":[{"scroll-pb":B()}],"scroll-pl":[{"scroll-pl":B()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","pinch-zoom","manipulation",{pan:["x","left","right","y","up","down"]}]}],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",j]}],fill:[{fill:[e,"none"]}],"stroke-w":[{stroke:[m,x]}],stroke:[{stroke:[e,"none"]}],sr:["sr-only","not-sr-only"]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}}),T=Symbol("isTwElement?"),_=(e,r)=>e.reduce((e,o,t)=>e.concat(o||[],r[t]||[]),[]),R=function(e){let r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",o=e.join(" ").trim().replace(/\n/g," ").replace(/\s{2,}/g," ").split(" ").filter(e=>","!==e),t=r?r.split(" "):[];return $(...o.concat(t).filter(e=>" "!==e))},W=e=>{let[r]=e;return"$"!==r.charAt(0)},q=e=>!0===e[T],A=e=>function(r){for(var o=arguments.length,n=Array(o>1?o-1:0),i=1;i<o;i++)n[i-1]=arguments[i];let a=function(){let o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],i=t.forwardRef((i,a)=>{let{$as:l=e,style:s={},...c}=i,d=q(e)?e:l,u=o?o.reduce((e,r)=>Object.assign(e,"function"==typeof r?r(i):r),{}):{},p=q(d)?c:Object.fromEntries(Object.entries(c).filter(W));return t.createElement(d,{...p,style:{...u,...s},ref:a,className:R(_(r,n.map(e=>e({...c,$as:l}))),c.className),...q(e)?{$as:l}:{}})});return i[T]=!0,"string"!=typeof e?i.displayName=e.displayName||e.name||"tw.Component":i.displayName="tw."+e,i.withStyle=e=>a(o.concat(e)),i};return a()},Z=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"].reduce((e,r)=>({...e,[r]:A(r)}),{}),B=Object.assign(A,Z)},56093:function(e,r,o){o.d(r,{_:function(){return t}});function t(e,r){return r||(r=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(r)}}))}}}]);