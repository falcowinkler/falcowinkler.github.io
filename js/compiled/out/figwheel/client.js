// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e42529){if((e42529 instanceof Error)){
var e = e42529;
return "Error: Unable to stringify";
} else {
throw e42529;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__42532 = arguments.length;
switch (G__42532) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__42530_SHARP_){
if(typeof p1__42530_SHARP_ === 'string'){
return p1__42530_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__42530_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42535 = arguments.length;
var i__4500__auto___42536 = (0);
while(true){
if((i__4500__auto___42536 < len__4499__auto___42535)){
args__4502__auto__.push((arguments[i__4500__auto___42536]));

var G__42537 = (i__4500__auto___42536 + (1));
i__4500__auto___42536 = G__42537;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq42534){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42534));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___42539 = arguments.length;
var i__4500__auto___42540 = (0);
while(true){
if((i__4500__auto___42540 < len__4499__auto___42539)){
args__4502__auto__.push((arguments[i__4500__auto___42540]));

var G__42541 = (i__4500__auto___42540 + (1));
i__4500__auto___42540 = G__42541;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq42538){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42538));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__42542){
var map__42543 = p__42542;
var map__42543__$1 = ((((!((map__42543 == null)))?(((((map__42543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42543):map__42543);
var message = cljs.core.get.call(null,map__42543__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__42543__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__26017__auto___42622 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___42622,ch){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___42622,ch){
return (function (state_42594){
var state_val_42595 = (state_42594[(1)]);
if((state_val_42595 === (7))){
var inst_42590 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
var statearr_42596_42623 = state_42594__$1;
(statearr_42596_42623[(2)] = inst_42590);

(statearr_42596_42623[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (1))){
var state_42594__$1 = state_42594;
var statearr_42597_42624 = state_42594__$1;
(statearr_42597_42624[(2)] = null);

(statearr_42597_42624[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (4))){
var inst_42547 = (state_42594[(7)]);
var inst_42547__$1 = (state_42594[(2)]);
var state_42594__$1 = (function (){var statearr_42598 = state_42594;
(statearr_42598[(7)] = inst_42547__$1);

return statearr_42598;
})();
if(cljs.core.truth_(inst_42547__$1)){
var statearr_42599_42625 = state_42594__$1;
(statearr_42599_42625[(1)] = (5));

} else {
var statearr_42600_42626 = state_42594__$1;
(statearr_42600_42626[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (15))){
var inst_42554 = (state_42594[(8)]);
var inst_42569 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42554);
var inst_42570 = cljs.core.first.call(null,inst_42569);
var inst_42571 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_42570);
var inst_42572 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42571)].join('');
var inst_42573 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_42572);
var state_42594__$1 = state_42594;
var statearr_42601_42627 = state_42594__$1;
(statearr_42601_42627[(2)] = inst_42573);

(statearr_42601_42627[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (13))){
var inst_42578 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
var statearr_42602_42628 = state_42594__$1;
(statearr_42602_42628[(2)] = inst_42578);

(statearr_42602_42628[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (6))){
var state_42594__$1 = state_42594;
var statearr_42603_42629 = state_42594__$1;
(statearr_42603_42629[(2)] = null);

(statearr_42603_42629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (17))){
var inst_42576 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
var statearr_42604_42630 = state_42594__$1;
(statearr_42604_42630[(2)] = inst_42576);

(statearr_42604_42630[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (3))){
var inst_42592 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42594__$1,inst_42592);
} else {
if((state_val_42595 === (12))){
var inst_42553 = (state_42594[(9)]);
var inst_42567 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_42553,opts);
var state_42594__$1 = state_42594;
if(cljs.core.truth_(inst_42567)){
var statearr_42605_42631 = state_42594__$1;
(statearr_42605_42631[(1)] = (15));

} else {
var statearr_42606_42632 = state_42594__$1;
(statearr_42606_42632[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (2))){
var state_42594__$1 = state_42594;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42594__$1,(4),ch);
} else {
if((state_val_42595 === (11))){
var inst_42554 = (state_42594[(8)]);
var inst_42559 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_42560 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_42554);
var inst_42561 = cljs.core.async.timeout.call(null,(1000));
var inst_42562 = [inst_42560,inst_42561];
var inst_42563 = (new cljs.core.PersistentVector(null,2,(5),inst_42559,inst_42562,null));
var state_42594__$1 = state_42594;
return cljs.core.async.ioc_alts_BANG_.call(null,state_42594__$1,(14),inst_42563);
} else {
if((state_val_42595 === (9))){
var inst_42554 = (state_42594[(8)]);
var inst_42580 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_42581 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_42554);
var inst_42582 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_42581);
var inst_42583 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_42582)].join('');
var inst_42584 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_42583);
var state_42594__$1 = (function (){var statearr_42607 = state_42594;
(statearr_42607[(10)] = inst_42580);

return statearr_42607;
})();
var statearr_42608_42633 = state_42594__$1;
(statearr_42608_42633[(2)] = inst_42584);

(statearr_42608_42633[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (5))){
var inst_42547 = (state_42594[(7)]);
var inst_42549 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_42550 = (new cljs.core.PersistentArrayMap(null,2,inst_42549,null));
var inst_42551 = (new cljs.core.PersistentHashSet(null,inst_42550,null));
var inst_42552 = figwheel.client.focus_msgs.call(null,inst_42551,inst_42547);
var inst_42553 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_42552);
var inst_42554 = cljs.core.first.call(null,inst_42552);
var inst_42555 = figwheel.client.autoload_QMARK_.call(null);
var state_42594__$1 = (function (){var statearr_42609 = state_42594;
(statearr_42609[(8)] = inst_42554);

(statearr_42609[(9)] = inst_42553);

return statearr_42609;
})();
if(cljs.core.truth_(inst_42555)){
var statearr_42610_42634 = state_42594__$1;
(statearr_42610_42634[(1)] = (8));

} else {
var statearr_42611_42635 = state_42594__$1;
(statearr_42611_42635[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (14))){
var inst_42565 = (state_42594[(2)]);
var state_42594__$1 = state_42594;
var statearr_42612_42636 = state_42594__$1;
(statearr_42612_42636[(2)] = inst_42565);

(statearr_42612_42636[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (16))){
var state_42594__$1 = state_42594;
var statearr_42613_42637 = state_42594__$1;
(statearr_42613_42637[(2)] = null);

(statearr_42613_42637[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (10))){
var inst_42586 = (state_42594[(2)]);
var state_42594__$1 = (function (){var statearr_42614 = state_42594;
(statearr_42614[(11)] = inst_42586);

return statearr_42614;
})();
var statearr_42615_42638 = state_42594__$1;
(statearr_42615_42638[(2)] = null);

(statearr_42615_42638[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42595 === (8))){
var inst_42553 = (state_42594[(9)]);
var inst_42557 = figwheel.client.reload_file_state_QMARK_.call(null,inst_42553,opts);
var state_42594__$1 = state_42594;
if(cljs.core.truth_(inst_42557)){
var statearr_42616_42639 = state_42594__$1;
(statearr_42616_42639[(1)] = (11));

} else {
var statearr_42617_42640 = state_42594__$1;
(statearr_42617_42640[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26017__auto___42622,ch))
;
return ((function (switch__25929__auto__,c__26017__auto___42622,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____0 = (function (){
var statearr_42618 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42618[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__);

(statearr_42618[(1)] = (1));

return statearr_42618;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____1 = (function (state_42594){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_42594);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e42619){if((e42619 instanceof Object)){
var ex__25933__auto__ = e42619;
var statearr_42620_42641 = state_42594;
(statearr_42620_42641[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42594);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42619;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42642 = state_42594;
state_42594 = G__42642;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__ = function(state_42594){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____1.call(this,state_42594);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___42622,ch))
})();
var state__26019__auto__ = (function (){var statearr_42621 = f__26018__auto__.call(null);
(statearr_42621[(6)] = c__26017__auto___42622);

return statearr_42621;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___42622,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__42643_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__42643_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_42647 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_42647){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_42645 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_42646 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_42645,_STAR_print_fn_STAR_42646,sb,base_path_42647){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_42645,_STAR_print_fn_STAR_42646,sb,base_path_42647))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_42646;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_42645;
}}catch (e42644){if((e42644 instanceof Error)){
var e = e42644;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_42647], null));
} else {
var e = e42644;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_42647))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__42648){
var map__42649 = p__42648;
var map__42649__$1 = ((((!((map__42649 == null)))?(((((map__42649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42649):map__42649);
var opts = map__42649__$1;
var build_id = cljs.core.get.call(null,map__42649__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__42649,map__42649__$1,opts,build_id){
return (function (p__42651){
var vec__42652 = p__42651;
var seq__42653 = cljs.core.seq.call(null,vec__42652);
var first__42654 = cljs.core.first.call(null,seq__42653);
var seq__42653__$1 = cljs.core.next.call(null,seq__42653);
var map__42655 = first__42654;
var map__42655__$1 = ((((!((map__42655 == null)))?(((((map__42655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42655):map__42655);
var msg = map__42655__$1;
var msg_name = cljs.core.get.call(null,map__42655__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42653__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__42652,seq__42653,first__42654,seq__42653__$1,map__42655,map__42655__$1,msg,msg_name,_,map__42649,map__42649__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__42652,seq__42653,first__42654,seq__42653__$1,map__42655,map__42655__$1,msg,msg_name,_,map__42649,map__42649__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__42649,map__42649__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__42657){
var vec__42658 = p__42657;
var seq__42659 = cljs.core.seq.call(null,vec__42658);
var first__42660 = cljs.core.first.call(null,seq__42659);
var seq__42659__$1 = cljs.core.next.call(null,seq__42659);
var map__42661 = first__42660;
var map__42661__$1 = ((((!((map__42661 == null)))?(((((map__42661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42661):map__42661);
var msg = map__42661__$1;
var msg_name = cljs.core.get.call(null,map__42661__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42659__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__42663){
var map__42664 = p__42663;
var map__42664__$1 = ((((!((map__42664 == null)))?(((((map__42664.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42664.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42664):map__42664);
var on_compile_warning = cljs.core.get.call(null,map__42664__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__42664__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__42664,map__42664__$1,on_compile_warning,on_compile_fail){
return (function (p__42666){
var vec__42667 = p__42666;
var seq__42668 = cljs.core.seq.call(null,vec__42667);
var first__42669 = cljs.core.first.call(null,seq__42668);
var seq__42668__$1 = cljs.core.next.call(null,seq__42668);
var map__42670 = first__42669;
var map__42670__$1 = ((((!((map__42670 == null)))?(((((map__42670.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42670.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42670):map__42670);
var msg = map__42670__$1;
var msg_name = cljs.core.get.call(null,map__42670__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__42668__$1;
var pred__42672 = cljs.core._EQ_;
var expr__42673 = msg_name;
if(cljs.core.truth_(pred__42672.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__42673))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__42672.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__42673))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__42664,map__42664__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__,msg_hist,msg_names,msg){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__,msg_hist,msg_names,msg){
return (function (state_42762){
var state_val_42763 = (state_42762[(1)]);
if((state_val_42763 === (7))){
var inst_42682 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
if(cljs.core.truth_(inst_42682)){
var statearr_42764_42811 = state_42762__$1;
(statearr_42764_42811[(1)] = (8));

} else {
var statearr_42765_42812 = state_42762__$1;
(statearr_42765_42812[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (20))){
var inst_42756 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42766_42813 = state_42762__$1;
(statearr_42766_42813[(2)] = inst_42756);

(statearr_42766_42813[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (27))){
var inst_42752 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42767_42814 = state_42762__$1;
(statearr_42767_42814[(2)] = inst_42752);

(statearr_42767_42814[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (1))){
var inst_42675 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_42762__$1 = state_42762;
if(cljs.core.truth_(inst_42675)){
var statearr_42768_42815 = state_42762__$1;
(statearr_42768_42815[(1)] = (2));

} else {
var statearr_42769_42816 = state_42762__$1;
(statearr_42769_42816[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (24))){
var inst_42754 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42770_42817 = state_42762__$1;
(statearr_42770_42817[(2)] = inst_42754);

(statearr_42770_42817[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (4))){
var inst_42760 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42762__$1,inst_42760);
} else {
if((state_val_42763 === (15))){
var inst_42758 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42771_42818 = state_42762__$1;
(statearr_42771_42818[(2)] = inst_42758);

(statearr_42771_42818[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (21))){
var inst_42711 = (state_42762[(2)]);
var inst_42712 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42713 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42712);
var state_42762__$1 = (function (){var statearr_42772 = state_42762;
(statearr_42772[(7)] = inst_42711);

return statearr_42772;
})();
var statearr_42773_42819 = state_42762__$1;
(statearr_42773_42819[(2)] = inst_42713);

(statearr_42773_42819[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (31))){
var inst_42741 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_42762__$1 = state_42762;
if(cljs.core.truth_(inst_42741)){
var statearr_42774_42820 = state_42762__$1;
(statearr_42774_42820[(1)] = (34));

} else {
var statearr_42775_42821 = state_42762__$1;
(statearr_42775_42821[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (32))){
var inst_42750 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42776_42822 = state_42762__$1;
(statearr_42776_42822[(2)] = inst_42750);

(statearr_42776_42822[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (33))){
var inst_42737 = (state_42762[(2)]);
var inst_42738 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42739 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42738);
var state_42762__$1 = (function (){var statearr_42777 = state_42762;
(statearr_42777[(8)] = inst_42737);

return statearr_42777;
})();
var statearr_42778_42823 = state_42762__$1;
(statearr_42778_42823[(2)] = inst_42739);

(statearr_42778_42823[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (13))){
var inst_42696 = figwheel.client.heads_up.clear.call(null);
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(16),inst_42696);
} else {
if((state_val_42763 === (22))){
var inst_42717 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42718 = figwheel.client.heads_up.append_warning_message.call(null,inst_42717);
var state_42762__$1 = state_42762;
var statearr_42779_42824 = state_42762__$1;
(statearr_42779_42824[(2)] = inst_42718);

(statearr_42779_42824[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (36))){
var inst_42748 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42780_42825 = state_42762__$1;
(statearr_42780_42825[(2)] = inst_42748);

(statearr_42780_42825[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (29))){
var inst_42728 = (state_42762[(2)]);
var inst_42729 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42730 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42729);
var state_42762__$1 = (function (){var statearr_42781 = state_42762;
(statearr_42781[(9)] = inst_42728);

return statearr_42781;
})();
var statearr_42782_42826 = state_42762__$1;
(statearr_42782_42826[(2)] = inst_42730);

(statearr_42782_42826[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (6))){
var inst_42677 = (state_42762[(10)]);
var state_42762__$1 = state_42762;
var statearr_42783_42827 = state_42762__$1;
(statearr_42783_42827[(2)] = inst_42677);

(statearr_42783_42827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (28))){
var inst_42724 = (state_42762[(2)]);
var inst_42725 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42726 = figwheel.client.heads_up.display_warning.call(null,inst_42725);
var state_42762__$1 = (function (){var statearr_42784 = state_42762;
(statearr_42784[(11)] = inst_42724);

return statearr_42784;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(29),inst_42726);
} else {
if((state_val_42763 === (25))){
var inst_42722 = figwheel.client.heads_up.clear.call(null);
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(28),inst_42722);
} else {
if((state_val_42763 === (34))){
var inst_42743 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(37),inst_42743);
} else {
if((state_val_42763 === (17))){
var inst_42702 = (state_42762[(2)]);
var inst_42703 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42704 = figwheel.client.auto_jump_to_error.call(null,opts,inst_42703);
var state_42762__$1 = (function (){var statearr_42785 = state_42762;
(statearr_42785[(12)] = inst_42702);

return statearr_42785;
})();
var statearr_42786_42828 = state_42762__$1;
(statearr_42786_42828[(2)] = inst_42704);

(statearr_42786_42828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (3))){
var inst_42694 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_42762__$1 = state_42762;
if(cljs.core.truth_(inst_42694)){
var statearr_42787_42829 = state_42762__$1;
(statearr_42787_42829[(1)] = (13));

} else {
var statearr_42788_42830 = state_42762__$1;
(statearr_42788_42830[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (12))){
var inst_42690 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42789_42831 = state_42762__$1;
(statearr_42789_42831[(2)] = inst_42690);

(statearr_42789_42831[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (2))){
var inst_42677 = (state_42762[(10)]);
var inst_42677__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_42762__$1 = (function (){var statearr_42790 = state_42762;
(statearr_42790[(10)] = inst_42677__$1);

return statearr_42790;
})();
if(cljs.core.truth_(inst_42677__$1)){
var statearr_42791_42832 = state_42762__$1;
(statearr_42791_42832[(1)] = (5));

} else {
var statearr_42792_42833 = state_42762__$1;
(statearr_42792_42833[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (23))){
var inst_42720 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_42762__$1 = state_42762;
if(cljs.core.truth_(inst_42720)){
var statearr_42793_42834 = state_42762__$1;
(statearr_42793_42834[(1)] = (25));

} else {
var statearr_42794_42835 = state_42762__$1;
(statearr_42794_42835[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (35))){
var state_42762__$1 = state_42762;
var statearr_42795_42836 = state_42762__$1;
(statearr_42795_42836[(2)] = null);

(statearr_42795_42836[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (19))){
var inst_42715 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_42762__$1 = state_42762;
if(cljs.core.truth_(inst_42715)){
var statearr_42796_42837 = state_42762__$1;
(statearr_42796_42837[(1)] = (22));

} else {
var statearr_42797_42838 = state_42762__$1;
(statearr_42797_42838[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (11))){
var inst_42686 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42798_42839 = state_42762__$1;
(statearr_42798_42839[(2)] = inst_42686);

(statearr_42798_42839[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (9))){
var inst_42688 = figwheel.client.heads_up.clear.call(null);
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(12),inst_42688);
} else {
if((state_val_42763 === (5))){
var inst_42679 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_42762__$1 = state_42762;
var statearr_42799_42840 = state_42762__$1;
(statearr_42799_42840[(2)] = inst_42679);

(statearr_42799_42840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (14))){
var inst_42706 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_42762__$1 = state_42762;
if(cljs.core.truth_(inst_42706)){
var statearr_42800_42841 = state_42762__$1;
(statearr_42800_42841[(1)] = (18));

} else {
var statearr_42801_42842 = state_42762__$1;
(statearr_42801_42842[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (26))){
var inst_42732 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_42762__$1 = state_42762;
if(cljs.core.truth_(inst_42732)){
var statearr_42802_42843 = state_42762__$1;
(statearr_42802_42843[(1)] = (30));

} else {
var statearr_42803_42844 = state_42762__$1;
(statearr_42803_42844[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (16))){
var inst_42698 = (state_42762[(2)]);
var inst_42699 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42700 = figwheel.client.heads_up.display_exception.call(null,inst_42699);
var state_42762__$1 = (function (){var statearr_42804 = state_42762;
(statearr_42804[(13)] = inst_42698);

return statearr_42804;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(17),inst_42700);
} else {
if((state_val_42763 === (30))){
var inst_42734 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42735 = figwheel.client.heads_up.display_warning.call(null,inst_42734);
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(33),inst_42735);
} else {
if((state_val_42763 === (10))){
var inst_42692 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42805_42845 = state_42762__$1;
(statearr_42805_42845[(2)] = inst_42692);

(statearr_42805_42845[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (18))){
var inst_42708 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_42709 = figwheel.client.heads_up.display_exception.call(null,inst_42708);
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(21),inst_42709);
} else {
if((state_val_42763 === (37))){
var inst_42745 = (state_42762[(2)]);
var state_42762__$1 = state_42762;
var statearr_42806_42846 = state_42762__$1;
(statearr_42806_42846[(2)] = inst_42745);

(statearr_42806_42846[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42763 === (8))){
var inst_42684 = figwheel.client.heads_up.flash_loaded.call(null);
var state_42762__$1 = state_42762;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42762__$1,(11),inst_42684);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__26017__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__25929__auto__,c__26017__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____0 = (function (){
var statearr_42807 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_42807[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__);

(statearr_42807[(1)] = (1));

return statearr_42807;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____1 = (function (state_42762){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_42762);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e42808){if((e42808 instanceof Object)){
var ex__25933__auto__ = e42808;
var statearr_42809_42847 = state_42762;
(statearr_42809_42847[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42762);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42848 = state_42762;
state_42762 = G__42848;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__ = function(state_42762){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____1.call(this,state_42762);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,msg_hist,msg_names,msg))
})();
var state__26019__auto__ = (function (){var statearr_42810 = f__26018__auto__.call(null);
(statearr_42810[(6)] = c__26017__auto__);

return statearr_42810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__,msg_hist,msg_names,msg))
);

return c__26017__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26017__auto___42877 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___42877,ch){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___42877,ch){
return (function (state_42863){
var state_val_42864 = (state_42863[(1)]);
if((state_val_42864 === (1))){
var state_42863__$1 = state_42863;
var statearr_42865_42878 = state_42863__$1;
(statearr_42865_42878[(2)] = null);

(statearr_42865_42878[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42864 === (2))){
var state_42863__$1 = state_42863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42863__$1,(4),ch);
} else {
if((state_val_42864 === (3))){
var inst_42861 = (state_42863[(2)]);
var state_42863__$1 = state_42863;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42863__$1,inst_42861);
} else {
if((state_val_42864 === (4))){
var inst_42851 = (state_42863[(7)]);
var inst_42851__$1 = (state_42863[(2)]);
var state_42863__$1 = (function (){var statearr_42866 = state_42863;
(statearr_42866[(7)] = inst_42851__$1);

return statearr_42866;
})();
if(cljs.core.truth_(inst_42851__$1)){
var statearr_42867_42879 = state_42863__$1;
(statearr_42867_42879[(1)] = (5));

} else {
var statearr_42868_42880 = state_42863__$1;
(statearr_42868_42880[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42864 === (5))){
var inst_42851 = (state_42863[(7)]);
var inst_42853 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_42851);
var state_42863__$1 = state_42863;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42863__$1,(8),inst_42853);
} else {
if((state_val_42864 === (6))){
var state_42863__$1 = state_42863;
var statearr_42869_42881 = state_42863__$1;
(statearr_42869_42881[(2)] = null);

(statearr_42869_42881[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42864 === (7))){
var inst_42859 = (state_42863[(2)]);
var state_42863__$1 = state_42863;
var statearr_42870_42882 = state_42863__$1;
(statearr_42870_42882[(2)] = inst_42859);

(statearr_42870_42882[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42864 === (8))){
var inst_42855 = (state_42863[(2)]);
var state_42863__$1 = (function (){var statearr_42871 = state_42863;
(statearr_42871[(8)] = inst_42855);

return statearr_42871;
})();
var statearr_42872_42883 = state_42863__$1;
(statearr_42872_42883[(2)] = null);

(statearr_42872_42883[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__26017__auto___42877,ch))
;
return ((function (switch__25929__auto__,c__26017__auto___42877,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25930__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25930__auto____0 = (function (){
var statearr_42873 = [null,null,null,null,null,null,null,null,null];
(statearr_42873[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25930__auto__);

(statearr_42873[(1)] = (1));

return statearr_42873;
});
var figwheel$client$heads_up_plugin_$_state_machine__25930__auto____1 = (function (state_42863){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_42863);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e42874){if((e42874 instanceof Object)){
var ex__25933__auto__ = e42874;
var statearr_42875_42884 = state_42863;
(statearr_42875_42884[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42863);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42874;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42885 = state_42863;
state_42863 = G__42885;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25930__auto__ = function(state_42863){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25930__auto____1.call(this,state_42863);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25930__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25930__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___42877,ch))
})();
var state__26019__auto__ = (function (){var statearr_42876 = f__26018__auto__.call(null);
(statearr_42876[(6)] = c__26017__auto___42877);

return statearr_42876;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___42877,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__){
return (function (state_42891){
var state_val_42892 = (state_42891[(1)]);
if((state_val_42892 === (1))){
var inst_42886 = cljs.core.async.timeout.call(null,(3000));
var state_42891__$1 = state_42891;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42891__$1,(2),inst_42886);
} else {
if((state_val_42892 === (2))){
var inst_42888 = (state_42891[(2)]);
var inst_42889 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_42891__$1 = (function (){var statearr_42893 = state_42891;
(statearr_42893[(7)] = inst_42888);

return statearr_42893;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42891__$1,inst_42889);
} else {
return null;
}
}
});})(c__26017__auto__))
;
return ((function (switch__25929__auto__,c__26017__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____0 = (function (){
var statearr_42894 = [null,null,null,null,null,null,null,null];
(statearr_42894[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__);

(statearr_42894[(1)] = (1));

return statearr_42894;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____1 = (function (state_42891){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_42891);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e42895){if((e42895 instanceof Object)){
var ex__25933__auto__ = e42895;
var statearr_42896_42898 = state_42891;
(statearr_42896_42898[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42891);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42895;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42899 = state_42891;
state_42891 = G__42899;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__ = function(state_42891){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____1.call(this,state_42891);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_42897 = f__26018__auto__.call(null);
(statearr_42897[(6)] = c__26017__auto__);

return statearr_42897;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__))
);

return c__26017__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__,figwheel_version,temp__4657__auto__){
return (function (state_42906){
var state_val_42907 = (state_42906[(1)]);
if((state_val_42907 === (1))){
var inst_42900 = cljs.core.async.timeout.call(null,(2000));
var state_42906__$1 = state_42906;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_42906__$1,(2),inst_42900);
} else {
if((state_val_42907 === (2))){
var inst_42902 = (state_42906[(2)]);
var inst_42903 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_42904 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_42903);
var state_42906__$1 = (function (){var statearr_42908 = state_42906;
(statearr_42908[(7)] = inst_42902);

return statearr_42908;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_42906__$1,inst_42904);
} else {
return null;
}
}
});})(c__26017__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__25929__auto__,c__26017__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____0 = (function (){
var statearr_42909 = [null,null,null,null,null,null,null,null];
(statearr_42909[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__);

(statearr_42909[(1)] = (1));

return statearr_42909;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____1 = (function (state_42906){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_42906);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e42910){if((e42910 instanceof Object)){
var ex__25933__auto__ = e42910;
var statearr_42911_42913 = state_42906;
(statearr_42911_42913[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_42906);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42910;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42914 = state_42906;
state_42906 = G__42914;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__ = function(state_42906){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____1.call(this,state_42906);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26019__auto__ = (function (){var statearr_42912 = f__26018__auto__.call(null);
(statearr_42912[(6)] = c__26017__auto__);

return statearr_42912;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__,figwheel_version,temp__4657__auto__))
);

return c__26017__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__42915){
var map__42916 = p__42915;
var map__42916__$1 = ((((!((map__42916 == null)))?(((((map__42916.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42916.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42916):map__42916);
var file = cljs.core.get.call(null,map__42916__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__42916__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__42916__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__42918 = "";
var G__42918__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42918),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__42918);
var G__42918__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42918__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__42918__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__42918__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__42918__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__42919){
var map__42920 = p__42919;
var map__42920__$1 = ((((!((map__42920 == null)))?(((((map__42920.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42920.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42920):map__42920);
var ed = map__42920__$1;
var formatted_exception = cljs.core.get.call(null,map__42920__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__42920__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__42920__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__42922_42926 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__42923_42927 = null;
var count__42924_42928 = (0);
var i__42925_42929 = (0);
while(true){
if((i__42925_42929 < count__42924_42928)){
var msg_42930 = cljs.core._nth.call(null,chunk__42923_42927,i__42925_42929);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42930);


var G__42931 = seq__42922_42926;
var G__42932 = chunk__42923_42927;
var G__42933 = count__42924_42928;
var G__42934 = (i__42925_42929 + (1));
seq__42922_42926 = G__42931;
chunk__42923_42927 = G__42932;
count__42924_42928 = G__42933;
i__42925_42929 = G__42934;
continue;
} else {
var temp__4657__auto___42935 = cljs.core.seq.call(null,seq__42922_42926);
if(temp__4657__auto___42935){
var seq__42922_42936__$1 = temp__4657__auto___42935;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42922_42936__$1)){
var c__4319__auto___42937 = cljs.core.chunk_first.call(null,seq__42922_42936__$1);
var G__42938 = cljs.core.chunk_rest.call(null,seq__42922_42936__$1);
var G__42939 = c__4319__auto___42937;
var G__42940 = cljs.core.count.call(null,c__4319__auto___42937);
var G__42941 = (0);
seq__42922_42926 = G__42938;
chunk__42923_42927 = G__42939;
count__42924_42928 = G__42940;
i__42925_42929 = G__42941;
continue;
} else {
var msg_42942 = cljs.core.first.call(null,seq__42922_42936__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_42942);


var G__42943 = cljs.core.next.call(null,seq__42922_42936__$1);
var G__42944 = null;
var G__42945 = (0);
var G__42946 = (0);
seq__42922_42926 = G__42943;
chunk__42923_42927 = G__42944;
count__42924_42928 = G__42945;
i__42925_42929 = G__42946;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__42947){
var map__42948 = p__42947;
var map__42948__$1 = ((((!((map__42948 == null)))?(((((map__42948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42948.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42948):map__42948);
var w = map__42948__$1;
var message = cljs.core.get.call(null,map__42948__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__42950 = cljs.core.seq.call(null,plugins);
var chunk__42951 = null;
var count__42952 = (0);
var i__42953 = (0);
while(true){
if((i__42953 < count__42952)){
var vec__42954 = cljs.core._nth.call(null,chunk__42951,i__42953);
var k = cljs.core.nth.call(null,vec__42954,(0),null);
var plugin = cljs.core.nth.call(null,vec__42954,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42960 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42950,chunk__42951,count__42952,i__42953,pl_42960,vec__42954,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_42960.call(null,msg_hist);
});})(seq__42950,chunk__42951,count__42952,i__42953,pl_42960,vec__42954,k,plugin))
);
} else {
}


var G__42961 = seq__42950;
var G__42962 = chunk__42951;
var G__42963 = count__42952;
var G__42964 = (i__42953 + (1));
seq__42950 = G__42961;
chunk__42951 = G__42962;
count__42952 = G__42963;
i__42953 = G__42964;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__42950);
if(temp__4657__auto__){
var seq__42950__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42950__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__42950__$1);
var G__42965 = cljs.core.chunk_rest.call(null,seq__42950__$1);
var G__42966 = c__4319__auto__;
var G__42967 = cljs.core.count.call(null,c__4319__auto__);
var G__42968 = (0);
seq__42950 = G__42965;
chunk__42951 = G__42966;
count__42952 = G__42967;
i__42953 = G__42968;
continue;
} else {
var vec__42957 = cljs.core.first.call(null,seq__42950__$1);
var k = cljs.core.nth.call(null,vec__42957,(0),null);
var plugin = cljs.core.nth.call(null,vec__42957,(1),null);
if(cljs.core.truth_(plugin)){
var pl_42969 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__42950,chunk__42951,count__42952,i__42953,pl_42969,vec__42957,k,plugin,seq__42950__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_42969.call(null,msg_hist);
});})(seq__42950,chunk__42951,count__42952,i__42953,pl_42969,vec__42957,k,plugin,seq__42950__$1,temp__4657__auto__))
);
} else {
}


var G__42970 = cljs.core.next.call(null,seq__42950__$1);
var G__42971 = null;
var G__42972 = (0);
var G__42973 = (0);
seq__42950 = G__42970;
chunk__42951 = G__42971;
count__42952 = G__42972;
i__42953 = G__42973;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__42975 = arguments.length;
switch (G__42975) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__42976_42981 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__42977_42982 = null;
var count__42978_42983 = (0);
var i__42979_42984 = (0);
while(true){
if((i__42979_42984 < count__42978_42983)){
var msg_42985 = cljs.core._nth.call(null,chunk__42977_42982,i__42979_42984);
figwheel.client.socket.handle_incoming_message.call(null,msg_42985);


var G__42986 = seq__42976_42981;
var G__42987 = chunk__42977_42982;
var G__42988 = count__42978_42983;
var G__42989 = (i__42979_42984 + (1));
seq__42976_42981 = G__42986;
chunk__42977_42982 = G__42987;
count__42978_42983 = G__42988;
i__42979_42984 = G__42989;
continue;
} else {
var temp__4657__auto___42990 = cljs.core.seq.call(null,seq__42976_42981);
if(temp__4657__auto___42990){
var seq__42976_42991__$1 = temp__4657__auto___42990;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42976_42991__$1)){
var c__4319__auto___42992 = cljs.core.chunk_first.call(null,seq__42976_42991__$1);
var G__42993 = cljs.core.chunk_rest.call(null,seq__42976_42991__$1);
var G__42994 = c__4319__auto___42992;
var G__42995 = cljs.core.count.call(null,c__4319__auto___42992);
var G__42996 = (0);
seq__42976_42981 = G__42993;
chunk__42977_42982 = G__42994;
count__42978_42983 = G__42995;
i__42979_42984 = G__42996;
continue;
} else {
var msg_42997 = cljs.core.first.call(null,seq__42976_42991__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_42997);


var G__42998 = cljs.core.next.call(null,seq__42976_42991__$1);
var G__42999 = null;
var G__43000 = (0);
var G__43001 = (0);
seq__42976_42981 = G__42998;
chunk__42977_42982 = G__42999;
count__42978_42983 = G__43000;
i__42979_42984 = G__43001;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___43006 = arguments.length;
var i__4500__auto___43007 = (0);
while(true){
if((i__4500__auto___43007 < len__4499__auto___43006)){
args__4502__auto__.push((arguments[i__4500__auto___43007]));

var G__43008 = (i__4500__auto___43007 + (1));
i__4500__auto___43007 = G__43008;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__43003){
var map__43004 = p__43003;
var map__43004__$1 = ((((!((map__43004 == null)))?(((((map__43004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43004):map__43004);
var opts = map__43004__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq43002){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq43002));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e43009){if((e43009 instanceof Error)){
var e = e43009;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e43009;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__43010){
var map__43011 = p__43010;
var map__43011__$1 = ((((!((map__43011 == null)))?(((((map__43011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__43011):map__43011);
var msg_name = cljs.core.get.call(null,map__43011__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1547392813709
