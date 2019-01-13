// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_35881 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__35882 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35883 = null;
var count__35884 = (0);
var i__35885 = (0);
while(true){
if((i__35885 < count__35884)){
var vec__35886 = cljs.core._nth.call(null,chunk__35883,i__35885);
var effect_key = cljs.core.nth.call(null,vec__35886,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35886,(1),null);
var temp__4655__auto___35902 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35902)){
var effect_fn_35903 = temp__4655__auto___35902;
effect_fn_35903.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__35904 = seq__35882;
var G__35905 = chunk__35883;
var G__35906 = count__35884;
var G__35907 = (i__35885 + (1));
seq__35882 = G__35904;
chunk__35883 = G__35905;
count__35884 = G__35906;
i__35885 = G__35907;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35882);
if(temp__4657__auto__){
var seq__35882__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35882__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35882__$1);
var G__35908 = cljs.core.chunk_rest.call(null,seq__35882__$1);
var G__35909 = c__4319__auto__;
var G__35910 = cljs.core.count.call(null,c__4319__auto__);
var G__35911 = (0);
seq__35882 = G__35908;
chunk__35883 = G__35909;
count__35884 = G__35910;
i__35885 = G__35911;
continue;
} else {
var vec__35889 = cljs.core.first.call(null,seq__35882__$1);
var effect_key = cljs.core.nth.call(null,vec__35889,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35889,(1),null);
var temp__4655__auto___35912 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35912)){
var effect_fn_35913 = temp__4655__auto___35912;
effect_fn_35913.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__35914 = cljs.core.next.call(null,seq__35882__$1);
var G__35915 = null;
var G__35916 = (0);
var G__35917 = (0);
seq__35882 = G__35914;
chunk__35883 = G__35915;
count__35884 = G__35916;
i__35885 = G__35917;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21316__auto___35918 = re_frame.interop.now.call(null);
var duration__21317__auto___35919 = (end__21316__auto___35918 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21317__auto___35919,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21316__auto___35918);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_35881;
}} else {
var seq__35892 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__35893 = null;
var count__35894 = (0);
var i__35895 = (0);
while(true){
if((i__35895 < count__35894)){
var vec__35896 = cljs.core._nth.call(null,chunk__35893,i__35895);
var effect_key = cljs.core.nth.call(null,vec__35896,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35896,(1),null);
var temp__4655__auto___35920 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35920)){
var effect_fn_35921 = temp__4655__auto___35920;
effect_fn_35921.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__35922 = seq__35892;
var G__35923 = chunk__35893;
var G__35924 = count__35894;
var G__35925 = (i__35895 + (1));
seq__35892 = G__35922;
chunk__35893 = G__35923;
count__35894 = G__35924;
i__35895 = G__35925;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35892);
if(temp__4657__auto__){
var seq__35892__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35892__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35892__$1);
var G__35926 = cljs.core.chunk_rest.call(null,seq__35892__$1);
var G__35927 = c__4319__auto__;
var G__35928 = cljs.core.count.call(null,c__4319__auto__);
var G__35929 = (0);
seq__35892 = G__35926;
chunk__35893 = G__35927;
count__35894 = G__35928;
i__35895 = G__35929;
continue;
} else {
var vec__35899 = cljs.core.first.call(null,seq__35892__$1);
var effect_key = cljs.core.nth.call(null,vec__35899,(0),null);
var effect_value = cljs.core.nth.call(null,vec__35899,(1),null);
var temp__4655__auto___35930 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___35930)){
var effect_fn_35931 = temp__4655__auto___35930;
effect_fn_35931.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__35932 = cljs.core.next.call(null,seq__35892__$1);
var G__35933 = null;
var G__35934 = (0);
var G__35935 = (0);
seq__35892 = G__35932;
chunk__35893 = G__35933;
count__35894 = G__35934;
i__35895 = G__35935;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__35936 = cljs.core.seq.call(null,value);
var chunk__35937 = null;
var count__35938 = (0);
var i__35939 = (0);
while(true){
if((i__35939 < count__35938)){
var map__35940 = cljs.core._nth.call(null,chunk__35937,i__35939);
var map__35940__$1 = ((((!((map__35940 == null)))?(((((map__35940.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35940.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35940):map__35940);
var effect = map__35940__$1;
var ms = cljs.core.get.call(null,map__35940__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35940__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35936,chunk__35937,count__35938,i__35939,map__35940,map__35940__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35936,chunk__35937,count__35938,i__35939,map__35940,map__35940__$1,effect,ms,dispatch))
,ms);
}


var G__35944 = seq__35936;
var G__35945 = chunk__35937;
var G__35946 = count__35938;
var G__35947 = (i__35939 + (1));
seq__35936 = G__35944;
chunk__35937 = G__35945;
count__35938 = G__35946;
i__35939 = G__35947;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35936);
if(temp__4657__auto__){
var seq__35936__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35936__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35936__$1);
var G__35948 = cljs.core.chunk_rest.call(null,seq__35936__$1);
var G__35949 = c__4319__auto__;
var G__35950 = cljs.core.count.call(null,c__4319__auto__);
var G__35951 = (0);
seq__35936 = G__35948;
chunk__35937 = G__35949;
count__35938 = G__35950;
i__35939 = G__35951;
continue;
} else {
var map__35942 = cljs.core.first.call(null,seq__35936__$1);
var map__35942__$1 = ((((!((map__35942 == null)))?(((((map__35942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35942):map__35942);
var effect = map__35942__$1;
var ms = cljs.core.get.call(null,map__35942__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__35942__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__35936,chunk__35937,count__35938,i__35939,map__35942,map__35942__$1,effect,ms,dispatch,seq__35936__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__35936,chunk__35937,count__35938,i__35939,map__35942,map__35942__$1,effect,ms,dispatch,seq__35936__$1,temp__4657__auto__))
,ms);
}


var G__35952 = cljs.core.next.call(null,seq__35936__$1);
var G__35953 = null;
var G__35954 = (0);
var G__35955 = (0);
seq__35936 = G__35952;
chunk__35937 = G__35953;
count__35938 = G__35954;
i__35939 = G__35955;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__35956 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__35957 = null;
var count__35958 = (0);
var i__35959 = (0);
while(true){
if((i__35959 < count__35958)){
var event = cljs.core._nth.call(null,chunk__35957,i__35959);
re_frame.router.dispatch.call(null,event);


var G__35960 = seq__35956;
var G__35961 = chunk__35957;
var G__35962 = count__35958;
var G__35963 = (i__35959 + (1));
seq__35956 = G__35960;
chunk__35957 = G__35961;
count__35958 = G__35962;
i__35959 = G__35963;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35956);
if(temp__4657__auto__){
var seq__35956__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35956__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35956__$1);
var G__35964 = cljs.core.chunk_rest.call(null,seq__35956__$1);
var G__35965 = c__4319__auto__;
var G__35966 = cljs.core.count.call(null,c__4319__auto__);
var G__35967 = (0);
seq__35956 = G__35964;
chunk__35957 = G__35965;
count__35958 = G__35966;
i__35959 = G__35967;
continue;
} else {
var event = cljs.core.first.call(null,seq__35956__$1);
re_frame.router.dispatch.call(null,event);


var G__35968 = cljs.core.next.call(null,seq__35956__$1);
var G__35969 = null;
var G__35970 = (0);
var G__35971 = (0);
seq__35956 = G__35968;
chunk__35957 = G__35969;
count__35958 = G__35970;
i__35959 = G__35971;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__35972 = cljs.core.seq.call(null,value);
var chunk__35973 = null;
var count__35974 = (0);
var i__35975 = (0);
while(true){
if((i__35975 < count__35974)){
var event = cljs.core._nth.call(null,chunk__35973,i__35975);
clear_event.call(null,event);


var G__35976 = seq__35972;
var G__35977 = chunk__35973;
var G__35978 = count__35974;
var G__35979 = (i__35975 + (1));
seq__35972 = G__35976;
chunk__35973 = G__35977;
count__35974 = G__35978;
i__35975 = G__35979;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__35972);
if(temp__4657__auto__){
var seq__35972__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35972__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__35972__$1);
var G__35980 = cljs.core.chunk_rest.call(null,seq__35972__$1);
var G__35981 = c__4319__auto__;
var G__35982 = cljs.core.count.call(null,c__4319__auto__);
var G__35983 = (0);
seq__35972 = G__35980;
chunk__35973 = G__35981;
count__35974 = G__35982;
i__35975 = G__35983;
continue;
} else {
var event = cljs.core.first.call(null,seq__35972__$1);
clear_event.call(null,event);


var G__35984 = cljs.core.next.call(null,seq__35972__$1);
var G__35985 = null;
var G__35986 = (0);
var G__35987 = (0);
seq__35972 = G__35984;
chunk__35973 = G__35985;
count__35974 = G__35986;
i__35975 = G__35987;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1547392803183
