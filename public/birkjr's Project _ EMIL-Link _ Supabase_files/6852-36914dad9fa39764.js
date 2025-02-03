!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},t=(new e.Error).stack;t&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[t]="df18bade-a3cb-4348-b06a-785b75da902b",e._sentryDebugIdIdentifier="sentry-dbid-df18bade-a3cb-4348-b06a-785b75da902b")}catch(e){}}(),(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6852],{57402:function(e,t,i){"use strict";var n,s,r,o,a,c,h,l,u,d,f,p,v,g,m,y,b,k,_;i.d(t,{VH:function(){return Z}});let w={"X-Client-Info":"realtime-js/2.11.3"};(f=n||(n={}))[f.connecting=0]="connecting",f[f.open=1]="open",f[f.closing=2]="closing",f[f.closed=3]="closed",(p=s||(s={})).closed="closed",p.errored="errored",p.joined="joined",p.joining="joining",p.leaving="leaving",(v=r||(r={})).close="phx_close",v.error="phx_error",v.join="phx_join",v.reply="phx_reply",v.leave="phx_leave",v.access_token="access_token",(o||(o={})).websocket="websocket",(g=a||(a={})).Connecting="connecting",g.Open="open",g.Closing="closing",g.Closed="closed";class E{constructor(){this.HEADER_LENGTH=1}decode(e,t){return e.constructor===ArrayBuffer?t(this._binaryDecode(e)):"string"==typeof e?t(JSON.parse(e)):t({})}_binaryDecode(e){let t=new DataView(e),i=new TextDecoder;return this._decodeBroadcast(e,t,i)}_decodeBroadcast(e,t,i){let n=t.getUint8(1),s=t.getUint8(2),r=this.HEADER_LENGTH+2,o=i.decode(e.slice(r,r+n));r+=n;let a=i.decode(e.slice(r,r+s));return r+=s,{ref:null,topic:o,event:a,payload:JSON.parse(i.decode(e.slice(r,e.byteLength)))}}}class j{constructor(e,t){this.callback=e,this.timerCalc=t,this.timer=void 0,this.tries=0,this.callback=e,this.timerCalc=t}reset(){this.tries=0,clearTimeout(this.timer)}scheduleTimeout(){clearTimeout(this.timer),this.timer=setTimeout(()=>{this.tries=this.tries+1,this.callback()},this.timerCalc(this.tries+1))}}(m=c||(c={})).abstime="abstime",m.bool="bool",m.date="date",m.daterange="daterange",m.float4="float4",m.float8="float8",m.int2="int2",m.int4="int4",m.int4range="int4range",m.int8="int8",m.int8range="int8range",m.json="json",m.jsonb="jsonb",m.money="money",m.numeric="numeric",m.oid="oid",m.reltime="reltime",m.text="text",m.time="time",m.timestamp="timestamp",m.timestamptz="timestamptz",m.timetz="timetz",m.tsrange="tsrange",m.tstzrange="tstzrange";let T=(e,t,i={})=>{var n;let s=null!==(n=i.skipTypes)&&void 0!==n?n:[];return Object.keys(t).reduce((i,n)=>(i[n]=C(n,e,t,s),i),{})},C=(e,t,i,n)=>{let s=t.find(t=>t.name===e),r=null==s?void 0:s.type,o=i[e];return r&&!n.includes(r)?R(r,o):O(o)},R=(e,t)=>{if("_"===e.charAt(0))return M(t,e.slice(1,e.length));switch(e){case c.bool:return S(t);case c.float4:case c.float8:case c.int2:case c.int4:case c.int8:case c.numeric:case c.oid:return L(t);case c.json:case c.jsonb:return P(t);case c.timestamp:return D(t);case c.abstime:case c.date:case c.daterange:case c.int4range:case c.int8range:case c.money:case c.reltime:case c.text:case c.time:case c.timestamptz:case c.timetz:case c.tsrange:case c.tstzrange:default:return O(t)}},O=e=>e,S=e=>{switch(e){case"t":return!0;case"f":return!1;default:return e}},L=e=>{if("string"==typeof e){let t=parseFloat(e);if(!Number.isNaN(t))return t}return e},P=e=>{if("string"==typeof e)try{return JSON.parse(e)}catch(e){console.log(`JSON parse error: ${e}`)}return e},M=(e,t)=>{if("string"!=typeof e)return e;let i=e.length-1,n=e[i];if("{"===e[0]&&"}"===n){let n;let s=e.slice(1,i);try{n=JSON.parse("["+s+"]")}catch(e){n=s?s.split(","):[]}return n.map(e=>R(t,e))}return e},D=e=>"string"==typeof e?e.replace(" ","T"):e,x=e=>{let t=e;return(t=(t=t.replace(/^ws/i,"http")).replace(/(\/socket\/websocket|\/socket|\/websocket)\/?$/i,"")).replace(/\/+$/,"")};class N{constructor(e,t,i={},n=1e4){this.channel=e,this.event=t,this.payload=i,this.timeout=n,this.sent=!1,this.timeoutTimer=void 0,this.ref="",this.receivedResp=null,this.recHooks=[],this.refEvent=null}resend(e){this.timeout=e,this._cancelRefEvent(),this.ref="",this.refEvent=null,this.receivedResp=null,this.sent=!1,this.send()}send(){this._hasReceived("timeout")||(this.startTimeout(),this.sent=!0,this.channel.socket.push({topic:this.channel.topic,event:this.event,payload:this.payload,ref:this.ref,join_ref:this.channel._joinRef()}))}updatePayload(e){this.payload=Object.assign(Object.assign({},this.payload),e)}receive(e,t){var i;return this._hasReceived(e)&&t(null===(i=this.receivedResp)||void 0===i?void 0:i.response),this.recHooks.push({status:e,callback:t}),this}startTimeout(){this.timeoutTimer||(this.ref=this.channel.socket._makeRef(),this.refEvent=this.channel._replyEventName(this.ref),this.channel._on(this.refEvent,{},e=>{this._cancelRefEvent(),this._cancelTimeout(),this.receivedResp=e,this._matchReceive(e)}),this.timeoutTimer=setTimeout(()=>{this.trigger("timeout",{})},this.timeout))}trigger(e,t){this.refEvent&&this.channel._trigger(this.refEvent,{status:e,response:t})}destroy(){this._cancelRefEvent(),this._cancelTimeout()}_cancelRefEvent(){this.refEvent&&this.channel._off(this.refEvent,{})}_cancelTimeout(){clearTimeout(this.timeoutTimer),this.timeoutTimer=void 0}_matchReceive({status:e,response:t}){this.recHooks.filter(t=>t.status===e).forEach(e=>e.callback(t))}_hasReceived(e){return this.receivedResp&&this.receivedResp.status===e}}(y=h||(h={})).SYNC="sync",y.JOIN="join",y.LEAVE="leave";class U{constructor(e,t){this.channel=e,this.state={},this.pendingDiffs=[],this.joinRef=null,this.caller={onJoin:()=>{},onLeave:()=>{},onSync:()=>{}};let i=(null==t?void 0:t.events)||{state:"presence_state",diff:"presence_diff"};this.channel._on(i.state,{},e=>{let{onJoin:t,onLeave:i,onSync:n}=this.caller;this.joinRef=this.channel._joinRef(),this.state=U.syncState(this.state,e,t,i),this.pendingDiffs.forEach(e=>{this.state=U.syncDiff(this.state,e,t,i)}),this.pendingDiffs=[],n()}),this.channel._on(i.diff,{},e=>{let{onJoin:t,onLeave:i,onSync:n}=this.caller;this.inPendingSyncState()?this.pendingDiffs.push(e):(this.state=U.syncDiff(this.state,e,t,i),n())}),this.onJoin((e,t,i)=>{this.channel._trigger("presence",{event:"join",key:e,currentPresences:t,newPresences:i})}),this.onLeave((e,t,i)=>{this.channel._trigger("presence",{event:"leave",key:e,currentPresences:t,leftPresences:i})}),this.onSync(()=>{this.channel._trigger("presence",{event:"sync"})})}static syncState(e,t,i,n){let s=this.cloneDeep(e),r=this.transformState(t),o={},a={};return this.map(s,(e,t)=>{r[e]||(a[e]=t)}),this.map(r,(e,t)=>{let i=s[e];if(i){let n=t.map(e=>e.presence_ref),s=i.map(e=>e.presence_ref),r=t.filter(e=>0>s.indexOf(e.presence_ref)),c=i.filter(e=>0>n.indexOf(e.presence_ref));r.length>0&&(o[e]=r),c.length>0&&(a[e]=c)}else o[e]=t}),this.syncDiff(s,{joins:o,leaves:a},i,n)}static syncDiff(e,t,i,n){let{joins:s,leaves:r}={joins:this.transformState(t.joins),leaves:this.transformState(t.leaves)};return i||(i=()=>{}),n||(n=()=>{}),this.map(s,(t,n)=>{var s;let r=null!==(s=e[t])&&void 0!==s?s:[];if(e[t]=this.cloneDeep(n),r.length>0){let i=e[t].map(e=>e.presence_ref),n=r.filter(e=>0>i.indexOf(e.presence_ref));e[t].unshift(...n)}i(t,r,n)}),this.map(r,(t,i)=>{let s=e[t];if(!s)return;let r=i.map(e=>e.presence_ref);s=s.filter(e=>0>r.indexOf(e.presence_ref)),e[t]=s,n(t,s,i),0===s.length&&delete e[t]}),e}static map(e,t){return Object.getOwnPropertyNames(e).map(i=>t(i,e[i]))}static transformState(e){return Object.getOwnPropertyNames(e=this.cloneDeep(e)).reduce((t,i)=>{let n=e[i];return"metas"in n?t[i]=n.metas.map(e=>(e.presence_ref=e.phx_ref,delete e.phx_ref,delete e.phx_ref_prev,e)):t[i]=n,t},{})}static cloneDeep(e){return JSON.parse(JSON.stringify(e))}onJoin(e){this.caller.onJoin=e}onLeave(e){this.caller.onLeave=e}onSync(e){this.caller.onSync=e}inPendingSyncState(){return!this.joinRef||this.joinRef!==this.channel._joinRef()}}(b=l||(l={})).ALL="*",b.INSERT="INSERT",b.UPDATE="UPDATE",b.DELETE="DELETE",(k=u||(u={})).BROADCAST="broadcast",k.PRESENCE="presence",k.POSTGRES_CHANGES="postgres_changes",k.SYSTEM="system",(_=d||(d={})).SUBSCRIBED="SUBSCRIBED",_.TIMED_OUT="TIMED_OUT",_.CLOSED="CLOSED",_.CHANNEL_ERROR="CHANNEL_ERROR";class A{constructor(e,t={config:{}},i){this.topic=e,this.params=t,this.socket=i,this.bindings={},this.state=s.closed,this.joinedOnce=!1,this.pushBuffer=[],this.subTopic=e.replace(/^realtime:/i,""),this.params.config=Object.assign({broadcast:{ack:!1,self:!1},presence:{key:""},private:!1},t.config),this.timeout=this.socket.timeout,this.joinPush=new N(this,r.join,this.params,this.timeout),this.rejoinTimer=new j(()=>this._rejoinUntilConnected(),this.socket.reconnectAfterMs),this.joinPush.receive("ok",()=>{this.state=s.joined,this.rejoinTimer.reset(),this.pushBuffer.forEach(e=>e.send()),this.pushBuffer=[]}),this._onClose(()=>{this.rejoinTimer.reset(),this.socket.log("channel",`close ${this.topic} ${this._joinRef()}`),this.state=s.closed,this.socket._remove(this)}),this._onError(e=>{this._isLeaving()||this._isClosed()||(this.socket.log("channel",`error ${this.topic}`,e),this.state=s.errored,this.rejoinTimer.scheduleTimeout())}),this.joinPush.receive("timeout",()=>{this._isJoining()&&(this.socket.log("channel",`timeout ${this.topic}`,this.joinPush.timeout),this.state=s.errored,this.rejoinTimer.scheduleTimeout())}),this._on(r.reply,{},(e,t)=>{this._trigger(this._replyEventName(t),e)}),this.presence=new U(this),this.broadcastEndpointURL=x(this.socket.endPoint)+"/api/broadcast",this.private=this.params.config.private||!1}subscribe(e,t=this.timeout){var i,n;if(this.socket.isConnected()||this.socket.connect(),this.joinedOnce)throw"tried to subscribe multiple times. 'subscribe' can only be called a single time per channel instance";{let{config:{broadcast:s,presence:r,private:o}}=this.params;this._onError(t=>null==e?void 0:e(d.CHANNEL_ERROR,t)),this._onClose(()=>null==e?void 0:e(d.CLOSED));let a={},c={broadcast:s,presence:r,postgres_changes:null!==(n=null===(i=this.bindings.postgres_changes)||void 0===i?void 0:i.map(e=>e.filter))&&void 0!==n?n:[],private:o};this.socket.accessTokenValue&&(a.access_token=this.socket.accessTokenValue),this.updateJoinPayload(Object.assign({config:c},a)),this.joinedOnce=!0,this._rejoin(t),this.joinPush.receive("ok",async({postgres_changes:t})=>{var i;if(this.socket.setAuth(),void 0===t){null==e||e(d.SUBSCRIBED);return}{let n=this.bindings.postgres_changes,s=null!==(i=null==n?void 0:n.length)&&void 0!==i?i:0,r=[];for(let i=0;i<s;i++){let s=n[i],{filter:{event:o,schema:a,table:c,filter:h}}=s,l=t&&t[i];if(l&&l.event===o&&l.schema===a&&l.table===c&&l.filter===h)r.push(Object.assign(Object.assign({},s),{id:l.id}));else{this.unsubscribe(),null==e||e(d.CHANNEL_ERROR,Error("mismatch between server and client bindings for postgres changes"));return}}this.bindings.postgres_changes=r,e&&e(d.SUBSCRIBED);return}}).receive("error",t=>{null==e||e(d.CHANNEL_ERROR,Error(JSON.stringify(Object.values(t).join(", ")||"error")))}).receive("timeout",()=>{null==e||e(d.TIMED_OUT)})}return this}presenceState(){return this.presence.state}async track(e,t={}){return await this.send({type:"presence",event:"track",payload:e},t.timeout||this.timeout)}async untrack(e={}){return await this.send({type:"presence",event:"untrack"},e)}on(e,t,i){return this._on(e,t,i)}async send(e,t={}){var i,n;if(this._canPush()||"broadcast"!==e.type)return new Promise(i=>{var n,s,r;let o=this._push(e.type,e,t.timeout||this.timeout);"broadcast"!==e.type||(null===(r=null===(s=null===(n=this.params)||void 0===n?void 0:n.config)||void 0===s?void 0:s.broadcast)||void 0===r?void 0:r.ack)||i("ok"),o.receive("ok",()=>i("ok")),o.receive("error",()=>i("error")),o.receive("timeout",()=>i("timed out"))});{let{event:s,payload:r}=e,o={method:"POST",headers:{Authorization:this.socket.accessTokenValue?`Bearer ${this.socket.accessTokenValue}`:"",apikey:this.socket.apiKey?this.socket.apiKey:"","Content-Type":"application/json"},body:JSON.stringify({messages:[{topic:this.subTopic,event:s,payload:r,private:this.private}]})};try{let e=await this._fetchWithTimeout(this.broadcastEndpointURL,o,null!==(i=t.timeout)&&void 0!==i?i:this.timeout);return await (null===(n=e.body)||void 0===n?void 0:n.cancel()),e.ok?"ok":"error"}catch(e){if("AbortError"===e.name)return"timed out";return"error"}}}updateJoinPayload(e){this.joinPush.updatePayload(e)}unsubscribe(e=this.timeout){this.state=s.leaving;let t=()=>{this.socket.log("channel",`leave ${this.topic}`),this._trigger(r.close,"leave",this._joinRef())};return this.rejoinTimer.reset(),this.joinPush.destroy(),new Promise(i=>{let n=new N(this,r.leave,{},e);n.receive("ok",()=>{t(),i("ok")}).receive("timeout",()=>{t(),i("timed out")}).receive("error",()=>{i("error")}),n.send(),this._canPush()||n.trigger("ok",{})})}async _fetchWithTimeout(e,t,i){let n=new AbortController,s=setTimeout(()=>n.abort(),i),r=await this.socket.fetch(e,Object.assign(Object.assign({},t),{signal:n.signal}));return clearTimeout(s),r}_push(e,t,i=this.timeout){if(!this.joinedOnce)throw`tried to push '${e}' to '${this.topic}' before joining. Use channel.subscribe() before pushing events`;let n=new N(this,e,t,i);return this._canPush()?n.send():(n.startTimeout(),this.pushBuffer.push(n)),n}_onMessage(e,t,i){return t}_isMember(e){return this.topic===e}_joinRef(){return this.joinPush.ref}_trigger(e,t,i){var n,s;let o=e.toLocaleLowerCase(),{close:a,error:c,leave:h,join:l}=r;if(i&&[a,c,h,l].indexOf(o)>=0&&i!==this._joinRef())return;let u=this._onMessage(o,t,i);if(t&&!u)throw"channel onMessage callbacks must return the payload, modified or unmodified";["insert","update","delete"].includes(o)?null===(n=this.bindings.postgres_changes)||void 0===n||n.filter(e=>{var t,i,n;return(null===(t=e.filter)||void 0===t?void 0:t.event)==="*"||(null===(n=null===(i=e.filter)||void 0===i?void 0:i.event)||void 0===n?void 0:n.toLocaleLowerCase())===o}).map(e=>e.callback(u,i)):null===(s=this.bindings[o])||void 0===s||s.filter(e=>{var i,n,s,r,a,c;if(!["broadcast","presence","postgres_changes"].includes(o))return e.type.toLocaleLowerCase()===o;if("id"in e){let r=e.id,o=null===(i=e.filter)||void 0===i?void 0:i.event;return r&&(null===(n=t.ids)||void 0===n?void 0:n.includes(r))&&("*"===o||(null==o?void 0:o.toLocaleLowerCase())===(null===(s=t.data)||void 0===s?void 0:s.type.toLocaleLowerCase()))}{let i=null===(a=null===(r=null==e?void 0:e.filter)||void 0===r?void 0:r.event)||void 0===a?void 0:a.toLocaleLowerCase();return"*"===i||i===(null===(c=null==t?void 0:t.event)||void 0===c?void 0:c.toLocaleLowerCase())}}).map(e=>{if("object"==typeof u&&"ids"in u){let e=u.data,{schema:t,table:i,commit_timestamp:n,type:s,errors:r}=e;u=Object.assign(Object.assign({},{schema:t,table:i,commit_timestamp:n,eventType:s,new:{},old:{},errors:r}),this._getPayloadRecords(e))}e.callback(u,i)})}_isClosed(){return this.state===s.closed}_isJoined(){return this.state===s.joined}_isJoining(){return this.state===s.joining}_isLeaving(){return this.state===s.leaving}_replyEventName(e){return`chan_reply_${e}`}_on(e,t,i){let n=e.toLocaleLowerCase(),s={type:n,filter:t,callback:i};return this.bindings[n]?this.bindings[n].push(s):this.bindings[n]=[s],this}_off(e,t){let i=e.toLocaleLowerCase();return this.bindings[i]=this.bindings[i].filter(e=>{var n;return!((null===(n=e.type)||void 0===n?void 0:n.toLocaleLowerCase())===i&&A.isEqual(e.filter,t))}),this}static isEqual(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let i in e)if(e[i]!==t[i])return!1;return!0}_rejoinUntilConnected(){this.rejoinTimer.scheduleTimeout(),this.socket.isConnected()&&this._rejoin()}_onClose(e){this._on(r.close,{},e)}_onError(e){this._on(r.error,{},t=>e(t))}_canPush(){return this.socket.isConnected()&&this._isJoined()}_rejoin(e=this.timeout){this._isLeaving()||(this.socket._leaveOpenTopic(this.topic),this.state=s.joining,this.joinPush.resend(e))}_getPayloadRecords(e){let t={new:{},old:{}};return("INSERT"===e.type||"UPDATE"===e.type)&&(t.new=T(e.columns,e.record)),("UPDATE"===e.type||"DELETE"===e.type)&&(t.old=T(e.columns,e.old_record)),t}}let I=()=>{},$="undefined"!=typeof WebSocket,J=`
  addEventListener("message", (e) => {
    if (e.data.event === "start") {
      setInterval(() => postMessage({ event: "keepAlive" }), e.data.interval);
    }
  });`;class Z{constructor(e,t){var n;this.accessTokenValue=null,this.apiKey=null,this.channels=[],this.endPoint="",this.httpEndpoint="",this.headers=w,this.params={},this.timeout=1e4,this.heartbeatIntervalMs=3e4,this.heartbeatTimer=void 0,this.pendingHeartbeatRef=null,this.ref=0,this.logger=I,this.conn=null,this.sendBuffer=[],this.serializer=new E,this.stateChangeCallbacks={open:[],close:[],error:[],message:[]},this.accessToken=null,this._resolveFetch=e=>{let t;return e?t=e:"undefined"==typeof fetch?t=(...e)=>Promise.resolve().then(i.bind(i,75855)).then(({default:t})=>t(...e)):t=fetch,(...e)=>t(...e)},this.endPoint=`${e}/${o.websocket}`,this.httpEndpoint=x(e),(null==t?void 0:t.transport)?this.transport=t.transport:this.transport=null,(null==t?void 0:t.params)&&(this.params=t.params),(null==t?void 0:t.headers)&&(this.headers=Object.assign(Object.assign({},this.headers),t.headers)),(null==t?void 0:t.timeout)&&(this.timeout=t.timeout),(null==t?void 0:t.logger)&&(this.logger=t.logger),(null==t?void 0:t.heartbeatIntervalMs)&&(this.heartbeatIntervalMs=t.heartbeatIntervalMs);let s=null===(n=null==t?void 0:t.params)||void 0===n?void 0:n.apikey;if(s&&(this.accessTokenValue=s,this.apiKey=s),this.reconnectAfterMs=(null==t?void 0:t.reconnectAfterMs)?t.reconnectAfterMs:e=>[1e3,2e3,5e3,1e4][e-1]||1e4,this.encode=(null==t?void 0:t.encode)?t.encode:(e,t)=>t(JSON.stringify(e)),this.decode=(null==t?void 0:t.decode)?t.decode:this.serializer.decode.bind(this.serializer),this.reconnectTimer=new j(async()=>{this.disconnect(),this.connect()},this.reconnectAfterMs),this.fetch=this._resolveFetch(null==t?void 0:t.fetch),null==t?void 0:t.worker){if("undefined"!=typeof window&&!window.Worker)throw Error("Web Worker is not supported");this.worker=(null==t?void 0:t.worker)||!1,this.workerUrl=null==t?void 0:t.workerUrl}this.accessToken=(null==t?void 0:t.accessToken)||null}connect(){if(!this.conn){if(this.transport){this.conn=new this.transport(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection();return}if($){this.conn=new WebSocket(this.endpointURL()),this.setupConnection();return}this.conn=new H(this.endpointURL(),void 0,{close:()=>{this.conn=null}}),i.e(8016).then(i.t.bind(i,28016,23)).then(({default:e})=>{this.conn=new e(this.endpointURL(),void 0,{headers:this.headers}),this.setupConnection()})}}endpointURL(){return this._appendParams(this.endPoint,Object.assign({},this.params,{vsn:"1.0.0"}))}disconnect(e,t){this.conn&&(this.conn.onclose=function(){},e?this.conn.close(e,null!=t?t:""):this.conn.close(),this.conn=null,this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.reset())}getChannels(){return this.channels}async removeChannel(e){let t=await e.unsubscribe();return 0===this.channels.length&&this.disconnect(),t}async removeAllChannels(){let e=await Promise.all(this.channels.map(e=>e.unsubscribe()));return this.disconnect(),e}log(e,t,i){this.logger(e,t,i)}connectionState(){switch(this.conn&&this.conn.readyState){case n.connecting:return a.Connecting;case n.open:return a.Open;case n.closing:return a.Closing;default:return a.Closed}}isConnected(){return this.connectionState()===a.Open}channel(e,t={config:{}}){let i=new A(`realtime:${e}`,t,this);return this.channels.push(i),i}push(e){let{topic:t,event:i,payload:n,ref:s}=e,r=()=>{this.encode(e,e=>{var t;null===(t=this.conn)||void 0===t||t.send(e)})};this.log("push",`${t} ${i} (${s})`,n),this.isConnected()?r():this.sendBuffer.push(r)}async setAuth(e=null){let t=e||this.accessToken&&await this.accessToken()||this.accessTokenValue;if(t){let e=null;try{e=JSON.parse(atob(t.split(".")[1]))}catch(e){}if(e&&e.exp&&!(Math.floor(Date.now()/1e3)-e.exp<0))return this.log("auth",`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${e.exp}`),Promise.reject(`InvalidJWTToken: Invalid value for JWT claim "exp" with value ${e.exp}`);this.accessTokenValue=t,this.channels.forEach(e=>{t&&e.updateJoinPayload({access_token:t}),e.joinedOnce&&e._isJoined()&&e._push(r.access_token,{access_token:t})})}}async sendHeartbeat(){var e;if(this.isConnected()){if(this.pendingHeartbeatRef){this.pendingHeartbeatRef=null,this.log("transport","heartbeat timeout. Attempting to re-establish connection"),null===(e=this.conn)||void 0===e||e.close(1e3,"hearbeat timeout");return}this.pendingHeartbeatRef=this._makeRef(),this.push({topic:"phoenix",event:"heartbeat",payload:{},ref:this.pendingHeartbeatRef}),this.setAuth()}}flushSendBuffer(){this.isConnected()&&this.sendBuffer.length>0&&(this.sendBuffer.forEach(e=>e()),this.sendBuffer=[])}_makeRef(){let e=this.ref+1;return e===this.ref?this.ref=0:this.ref=e,this.ref.toString()}_leaveOpenTopic(e){let t=this.channels.find(t=>t.topic===e&&(t._isJoined()||t._isJoining()));t&&(this.log("transport",`leaving duplicate topic "${e}"`),t.unsubscribe())}_remove(e){this.channels=this.channels.filter(t=>t._joinRef()!==e._joinRef())}setupConnection(){this.conn&&(this.conn.binaryType="arraybuffer",this.conn.onopen=()=>this._onConnOpen(),this.conn.onerror=e=>this._onConnError(e),this.conn.onmessage=e=>this._onConnMessage(e),this.conn.onclose=e=>this._onConnClose(e))}_onConnMessage(e){this.decode(e.data,e=>{let{topic:t,event:i,payload:n,ref:s}=e;s&&s===this.pendingHeartbeatRef&&(this.pendingHeartbeatRef=null),this.log("receive",`${n.status||""} ${t} ${i} ${s&&"("+s+")"||""}`,n),this.channels.filter(e=>e._isMember(t)).forEach(e=>e._trigger(i,n,s)),this.stateChangeCallbacks.message.forEach(t=>t(e))})}async _onConnOpen(){if(this.log("transport",`connected to ${this.endpointURL()}`),this.flushSendBuffer(),this.reconnectTimer.reset(),this.worker){this.workerUrl?this.log("worker",`starting worker for from ${this.workerUrl}`):this.log("worker","starting default worker");let e=this._workerObjectUrl(this.workerUrl);this.workerRef=new Worker(e),this.workerRef.onerror=e=>{this.log("worker","worker error",e.message),this.workerRef.terminate()},this.workerRef.onmessage=e=>{"keepAlive"===e.data.event&&this.sendHeartbeat()},this.workerRef.postMessage({event:"start",interval:this.heartbeatIntervalMs})}else this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.heartbeatTimer=setInterval(()=>this.sendHeartbeat(),this.heartbeatIntervalMs);this.stateChangeCallbacks.open.forEach(e=>e())}_onConnClose(e){this.log("transport","close",e),this._triggerChanError(),this.heartbeatTimer&&clearInterval(this.heartbeatTimer),this.reconnectTimer.scheduleTimeout(),this.stateChangeCallbacks.close.forEach(t=>t(e))}_onConnError(e){this.log("transport",e.message),this._triggerChanError(),this.stateChangeCallbacks.error.forEach(t=>t(e))}_triggerChanError(){this.channels.forEach(e=>e._trigger(r.error))}_appendParams(e,t){if(0===Object.keys(t).length)return e;let i=e.match(/\?/)?"&":"?",n=new URLSearchParams(t);return`${e}${i}${n}`}_workerObjectUrl(e){let t;if(e)t=e;else{let e=new Blob([J],{type:"application/javascript"});t=URL.createObjectURL(e)}return t}}class H{constructor(e,t,i){this.binaryType="arraybuffer",this.onclose=()=>{},this.onerror=()=>{},this.onmessage=()=>{},this.onopen=()=>{},this.readyState=n.connecting,this.send=()=>{},this.url=null,this.url=e,this.close=i.close}}},96205:function(e,t,i){"use strict";t.fw=t.SU=t.QN=void 0;let n=i(94612),s="";"undefined"!=typeof Deno?s="deno":"undefined"!=typeof document?s="web":"undefined"!=typeof navigator&&"ReactNative"===navigator.product?s="react-native":s="node",t.QN={"X-Client-Info":`supabase-js-${s}/${n.version}`},t.SU={headers:t.QN},t.fw={}},94612:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.version=void 0,t.version="2.47.14"},12832:function(e,t,i){"use strict";i.d(t,{Z:function(){return c}});var n=i(97335),s=i.n(n),r=function(){return(r=Object.assign||function(e){for(var t,i=1,n=arguments.length;i<n;i++)for(var s in t=arguments[i])Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s]);return e}).apply(this,arguments)},o={key:function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return null},onlyResolvesLast:!0},a=function(){function e(e){this.config=e,this.debounceSingleton=null,this.debounceCache={}}return e.prototype._createDebouncedFunction=function(){var e,t,i=s()(this.config.func,this.config.wait,this.config.options);return this.config.options.onlyResolvesLast&&(e=i,t=null,i=function(){for(var i,n,s,r,o=[],a=0;a<arguments.length;a++)o[a]=arguments[a];t&&t();var c=(i=e.apply(void 0,o),n=null,s=null,r=new Promise(function(e,t){n=e,s=t}),i&&i.then(function(e){n&&n(e)},function(e){s&&s(e)}),{promise:r,resolve:function(e){n&&n(e)},reject:function(e){s&&s(e)},cancel:function(){n=null,s=null}}),h=c.promise;return t=c.cancel,h}),{func:i}},e.prototype.getDebouncedFunction=function(e){var t,i=(t=this.config.options).key.apply(t,e);return null==i?(this.debounceSingleton||(this.debounceSingleton=this._createDebouncedFunction()),this.debounceSingleton):(this.debounceCache[i]||(this.debounceCache[i]=this._createDebouncedFunction()),this.debounceCache[i])},e}(),c=function(e,t,i){var n=new a({func:e,wait:t,options:r({},o,i)});return function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];return n.getDebouncedFunction(e).func.apply(void 0,e)}}},97335:function(e){"use strict";e.exports=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=void 0,s=void 0,r=void 0,o=[];return function(){var c,h="function"==typeof t?t():t,l=new Date().getTime(),u=!n||l-n>h;n=l;for(var d=arguments.length,f=Array(d),p=0;p<d;p++)f[p]=arguments[p];if(u&&i.leading)return i.accumulate?Promise.resolve(e.call(this,[f])).then(function(e){return e[0]}):Promise.resolve(e.call.apply(e,[this].concat(f)));if(s?clearTimeout(r):((c={}).promise=new Promise(function(e,t){c.resolve=e,c.reject=t}),s=c),o.push(f),r=setTimeout(a.bind(this),h),i.accumulate){var v=o.length-1;return s.promise.then(function(e){return e[v]})}return s.promise};function a(){var t=s;clearTimeout(r),Promise.resolve(i.accumulate?e.call(this,o):e.apply(this,o[o.length-1])).then(t.resolve,t.reject),o=[],s=null}}},89022:function(e,t,i){var n=i(77379),s=i(96843);e.exports=function(e,t,i){return e&&e.length?n(e,0,(t=i||void 0===t?1:s(t))<0?0:t):[]}},90829:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("ArrowDownWideNarrow",[["path",{d:"m3 16 4 4 4-4",key:"1co6wj"}],["path",{d:"M7 20V4",key:"1yoxec"}],["path",{d:"M11 4h10",key:"1w87gc"}],["path",{d:"M11 8h7",key:"djye34"}],["path",{d:"M11 12h4",key:"q8tih4"}]])},68297:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("ArrowUpNarrowWide",[["path",{d:"m3 8 4-4 4 4",key:"11wl7u"}],["path",{d:"M7 4v16",key:"1glfcx"}],["path",{d:"M11 12h4",key:"q8tih4"}],["path",{d:"M11 16h7",key:"uosisv"}],["path",{d:"M11 20h10",key:"jvxblo"}]])},38273:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("ArrowUp",[["path",{d:"m5 12 7-7 7 7",key:"hav0vg"}],["path",{d:"M12 19V5",key:"x0mq9r"}]])},99847:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("Ban",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m4.9 4.9 14.2 14.2",key:"1m5liu"}]])},77700:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("CirclePlay",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polygon",{points:"10 8 16 12 10 16 10 8",key:"1cimsy"}]])},74828:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("CirclePlus",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M8 12h8",key:"1wcyev"}],["path",{d:"M12 8v8",key:"napkw2"}]])},68769:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("CircleStop",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["rect",{width:"6",height:"6",x:"9",y:"9",key:"1wrtvo"}]])},11024:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]])},94791:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]])},5211:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]])},33319:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("ShieldOff",[["path",{d:"m2 2 20 20",key:"1ooewy"}],["path",{d:"M5 5a1 1 0 0 0-1 1v7c0 5 3.5 7.5 7.67 8.94a1 1 0 0 0 .67.01c2.35-.82 4.48-1.97 5.9-3.71",key:"1jlk70"}],["path",{d:"M9.309 3.652A12.252 12.252 0 0 0 11.24 2.28a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1v7a9.784 9.784 0 0 1-.08 1.264",key:"18rp1v"}]])},14346:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("UserPlus",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["line",{x1:"19",x2:"19",y1:"8",y2:"14",key:"1bvyxn"}],["line",{x1:"22",x2:"16",y1:"11",y2:"11",key:"1shjgl"}]])},29285:function(e,t,i){"use strict";i.d(t,{Z:function(){return n}});let n=(0,i(98266).Z)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])},56384:function(e,t,i){"use strict";i.d(t,{bU:function(){return w},fC:function(){return _}});var n=i(83573),s=i(52983),r=i(12527),o=i(61031),a=i(95831),c=i(29650),h=i(87178),l=i(56807),u=i(36986);let d="Switch",[f,p]=(0,a.b)(d),[v,g]=f(d),m=(0,s.forwardRef)((e,t)=>{let{__scopeSwitch:i,name:a,checked:h,defaultChecked:l,required:d,disabled:f,value:p="on",onCheckedChange:g,...m}=e,[y,_]=(0,s.useState)(null),w=(0,o.e)(t,e=>_(e)),E=(0,s.useRef)(!1),j=!y||!!y.closest("form"),[T=!1,C]=(0,c.T)({prop:h,defaultProp:l,onChange:g});return(0,s.createElement)(v,{scope:i,checked:T,disabled:f},(0,s.createElement)(u.WV.button,(0,n.Z)({type:"button",role:"switch","aria-checked":T,"aria-required":d,"data-state":k(T),"data-disabled":f?"":void 0,disabled:f,value:p},m,{ref:w,onClick:(0,r.M)(e.onClick,e=>{C(e=>!e),j&&(E.current=e.isPropagationStopped(),E.current||e.stopPropagation())})})),j&&(0,s.createElement)(b,{control:y,bubbles:!E.current,name:a,value:p,checked:T,required:d,disabled:f,style:{transform:"translateX(-100%)"}}))}),y=(0,s.forwardRef)((e,t)=>{let{__scopeSwitch:i,...r}=e,o=g("SwitchThumb",i);return(0,s.createElement)(u.WV.span,(0,n.Z)({"data-state":k(o.checked),"data-disabled":o.disabled?"":void 0},r,{ref:t}))}),b=e=>{let{control:t,checked:i,bubbles:r=!0,...o}=e,a=(0,s.useRef)(null),c=(0,h.D)(i),u=(0,l.t)(t);return(0,s.useEffect)(()=>{let e=a.current,t=Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype,"checked").set;if(c!==i&&t){let n=new Event("click",{bubbles:r});t.call(e,i),e.dispatchEvent(n)}},[c,i,r]),(0,s.createElement)("input",(0,n.Z)({type:"checkbox","aria-hidden":!0,defaultChecked:i},o,{tabIndex:-1,ref:a,style:{...e.style,...u,position:"absolute",pointerEvents:"none",opacity:0,margin:0}}))};function k(e){return e?"checked":"unchecked"}let _=m,w=y}}]);