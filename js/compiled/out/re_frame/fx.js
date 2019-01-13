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
var _STAR_current_trace_STAR_21573 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__21574 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21575 = null;
var count__21576 = (0);
var i__21577 = (0);
while(true){
if((i__21577 < count__21576)){
var vec__21578 = cljs.core._nth.call(null,chunk__21575,i__21577);
var effect_key = cljs.core.nth.call(null,vec__21578,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21578,(1),null);
var temp__4655__auto___21594 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___21594)){
var effect_fn_21595 = temp__4655__auto___21594;
effect_fn_21595.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21596 = seq__21574;
var G__21597 = chunk__21575;
var G__21598 = count__21576;
var G__21599 = (i__21577 + (1));
seq__21574 = G__21596;
chunk__21575 = G__21597;
count__21576 = G__21598;
i__21577 = G__21599;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21574);
if(temp__4657__auto__){
var seq__21574__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21574__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21574__$1);
var G__21600 = cljs.core.chunk_rest.call(null,seq__21574__$1);
var G__21601 = c__4319__auto__;
var G__21602 = cljs.core.count.call(null,c__4319__auto__);
var G__21603 = (0);
seq__21574 = G__21600;
chunk__21575 = G__21601;
count__21576 = G__21602;
i__21577 = G__21603;
continue;
} else {
var vec__21581 = cljs.core.first.call(null,seq__21574__$1);
var effect_key = cljs.core.nth.call(null,vec__21581,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21581,(1),null);
var temp__4655__auto___21604 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___21604)){
var effect_fn_21605 = temp__4655__auto___21604;
effect_fn_21605.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21606 = cljs.core.next.call(null,seq__21574__$1);
var G__21607 = null;
var G__21608 = (0);
var G__21609 = (0);
seq__21574 = G__21606;
chunk__21575 = G__21607;
count__21576 = G__21608;
i__21577 = G__21609;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__21316__auto___21610 = re_frame.interop.now.call(null);
var duration__21317__auto___21611 = (end__21316__auto___21610 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__21317__auto___21611,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__21316__auto___21610);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_21573;
}} else {
var seq__21584 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__21585 = null;
var count__21586 = (0);
var i__21587 = (0);
while(true){
if((i__21587 < count__21586)){
var vec__21588 = cljs.core._nth.call(null,chunk__21585,i__21587);
var effect_key = cljs.core.nth.call(null,vec__21588,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21588,(1),null);
var temp__4655__auto___21612 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___21612)){
var effect_fn_21613 = temp__4655__auto___21612;
effect_fn_21613.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21614 = seq__21584;
var G__21615 = chunk__21585;
var G__21616 = count__21586;
var G__21617 = (i__21587 + (1));
seq__21584 = G__21614;
chunk__21585 = G__21615;
count__21586 = G__21616;
i__21587 = G__21617;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21584);
if(temp__4657__auto__){
var seq__21584__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21584__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21584__$1);
var G__21618 = cljs.core.chunk_rest.call(null,seq__21584__$1);
var G__21619 = c__4319__auto__;
var G__21620 = cljs.core.count.call(null,c__4319__auto__);
var G__21621 = (0);
seq__21584 = G__21618;
chunk__21585 = G__21619;
count__21586 = G__21620;
i__21587 = G__21621;
continue;
} else {
var vec__21591 = cljs.core.first.call(null,seq__21584__$1);
var effect_key = cljs.core.nth.call(null,vec__21591,(0),null);
var effect_value = cljs.core.nth.call(null,vec__21591,(1),null);
var temp__4655__auto___21622 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___21622)){
var effect_fn_21623 = temp__4655__auto___21622;
effect_fn_21623.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__21624 = cljs.core.next.call(null,seq__21584__$1);
var G__21625 = null;
var G__21626 = (0);
var G__21627 = (0);
seq__21584 = G__21624;
chunk__21585 = G__21625;
count__21586 = G__21626;
i__21587 = G__21627;
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
var seq__21628 = cljs.core.seq.call(null,value);
var chunk__21629 = null;
var count__21630 = (0);
var i__21631 = (0);
while(true){
if((i__21631 < count__21630)){
var map__21632 = cljs.core._nth.call(null,chunk__21629,i__21631);
var map__21632__$1 = ((((!((map__21632 == null)))?(((((map__21632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21632):map__21632);
var effect = map__21632__$1;
var ms = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21632__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21628,chunk__21629,count__21630,i__21631,map__21632,map__21632__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21628,chunk__21629,count__21630,i__21631,map__21632,map__21632__$1,effect,ms,dispatch))
,ms);
}


var G__21636 = seq__21628;
var G__21637 = chunk__21629;
var G__21638 = count__21630;
var G__21639 = (i__21631 + (1));
seq__21628 = G__21636;
chunk__21629 = G__21637;
count__21630 = G__21638;
i__21631 = G__21639;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21628);
if(temp__4657__auto__){
var seq__21628__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21628__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21628__$1);
var G__21640 = cljs.core.chunk_rest.call(null,seq__21628__$1);
var G__21641 = c__4319__auto__;
var G__21642 = cljs.core.count.call(null,c__4319__auto__);
var G__21643 = (0);
seq__21628 = G__21640;
chunk__21629 = G__21641;
count__21630 = G__21642;
i__21631 = G__21643;
continue;
} else {
var map__21634 = cljs.core.first.call(null,seq__21628__$1);
var map__21634__$1 = ((((!((map__21634 == null)))?(((((map__21634.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21634.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21634):map__21634);
var effect = map__21634__$1;
var ms = cljs.core.get.call(null,map__21634__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__21634__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__21628,chunk__21629,count__21630,i__21631,map__21634,map__21634__$1,effect,ms,dispatch,seq__21628__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__21628,chunk__21629,count__21630,i__21631,map__21634,map__21634__$1,effect,ms,dispatch,seq__21628__$1,temp__4657__auto__))
,ms);
}


var G__21644 = cljs.core.next.call(null,seq__21628__$1);
var G__21645 = null;
var G__21646 = (0);
var G__21647 = (0);
seq__21628 = G__21644;
chunk__21629 = G__21645;
count__21630 = G__21646;
i__21631 = G__21647;
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
var seq__21648 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__21649 = null;
var count__21650 = (0);
var i__21651 = (0);
while(true){
if((i__21651 < count__21650)){
var event = cljs.core._nth.call(null,chunk__21649,i__21651);
re_frame.router.dispatch.call(null,event);


var G__21652 = seq__21648;
var G__21653 = chunk__21649;
var G__21654 = count__21650;
var G__21655 = (i__21651 + (1));
seq__21648 = G__21652;
chunk__21649 = G__21653;
count__21650 = G__21654;
i__21651 = G__21655;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21648);
if(temp__4657__auto__){
var seq__21648__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21648__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21648__$1);
var G__21656 = cljs.core.chunk_rest.call(null,seq__21648__$1);
var G__21657 = c__4319__auto__;
var G__21658 = cljs.core.count.call(null,c__4319__auto__);
var G__21659 = (0);
seq__21648 = G__21656;
chunk__21649 = G__21657;
count__21650 = G__21658;
i__21651 = G__21659;
continue;
} else {
var event = cljs.core.first.call(null,seq__21648__$1);
re_frame.router.dispatch.call(null,event);


var G__21660 = cljs.core.next.call(null,seq__21648__$1);
var G__21661 = null;
var G__21662 = (0);
var G__21663 = (0);
seq__21648 = G__21660;
chunk__21649 = G__21661;
count__21650 = G__21662;
i__21651 = G__21663;
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
var seq__21664 = cljs.core.seq.call(null,value);
var chunk__21665 = null;
var count__21666 = (0);
var i__21667 = (0);
while(true){
if((i__21667 < count__21666)){
var event = cljs.core._nth.call(null,chunk__21665,i__21667);
clear_event.call(null,event);


var G__21668 = seq__21664;
var G__21669 = chunk__21665;
var G__21670 = count__21666;
var G__21671 = (i__21667 + (1));
seq__21664 = G__21668;
chunk__21665 = G__21669;
count__21666 = G__21670;
i__21667 = G__21671;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__21664);
if(temp__4657__auto__){
var seq__21664__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21664__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21664__$1);
var G__21672 = cljs.core.chunk_rest.call(null,seq__21664__$1);
var G__21673 = c__4319__auto__;
var G__21674 = cljs.core.count.call(null,c__4319__auto__);
var G__21675 = (0);
seq__21664 = G__21672;
chunk__21665 = G__21673;
count__21666 = G__21674;
i__21667 = G__21675;
continue;
} else {
var event = cljs.core.first.call(null,seq__21664__$1);
clear_event.call(null,event);


var G__21676 = cljs.core.next.call(null,seq__21664__$1);
var G__21677 = null;
var G__21678 = (0);
var G__21679 = (0);
seq__21664 = G__21676;
chunk__21665 = G__21677;
count__21666 = G__21678;
i__21667 = G__21679;
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

//# sourceMappingURL=fx.js.map?rel=1547389510951
