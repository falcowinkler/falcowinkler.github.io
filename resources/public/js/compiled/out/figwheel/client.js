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
}catch (e29863){if((e29863 instanceof Error)){
var e = e29863;
return "Error: Unable to stringify";
} else {
throw e29863;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__29866 = arguments.length;
switch (G__29866) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__29864_SHARP_){
if(typeof p1__29864_SHARP_ === 'string'){
return p1__29864_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__29864_SHARP_);
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
var len__4499__auto___29869 = arguments.length;
var i__4500__auto___29870 = (0);
while(true){
if((i__4500__auto___29870 < len__4499__auto___29869)){
args__4502__auto__.push((arguments[i__4500__auto___29870]));

var G__29871 = (i__4500__auto___29870 + (1));
i__4500__auto___29870 = G__29871;
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
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq29868){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29868));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29873 = arguments.length;
var i__4500__auto___29874 = (0);
while(true){
if((i__4500__auto___29874 < len__4499__auto___29873)){
args__4502__auto__.push((arguments[i__4500__auto___29874]));

var G__29875 = (i__4500__auto___29874 + (1));
i__4500__auto___29874 = G__29875;
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
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq29872){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29872));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29876){
var map__29877 = p__29876;
var map__29877__$1 = ((((!((map__29877 == null)))?(((((map__29877.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29877.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29877):map__29877);
var message = cljs.core.get.call(null,map__29877__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29877__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__26017__auto___29956 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___29956,ch){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___29956,ch){
return (function (state_29928){
var state_val_29929 = (state_29928[(1)]);
if((state_val_29929 === (7))){
var inst_29924 = (state_29928[(2)]);
var state_29928__$1 = state_29928;
var statearr_29930_29957 = state_29928__$1;
(statearr_29930_29957[(2)] = inst_29924);

(statearr_29930_29957[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (1))){
var state_29928__$1 = state_29928;
var statearr_29931_29958 = state_29928__$1;
(statearr_29931_29958[(2)] = null);

(statearr_29931_29958[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (4))){
var inst_29881 = (state_29928[(7)]);
var inst_29881__$1 = (state_29928[(2)]);
var state_29928__$1 = (function (){var statearr_29932 = state_29928;
(statearr_29932[(7)] = inst_29881__$1);

return statearr_29932;
})();
if(cljs.core.truth_(inst_29881__$1)){
var statearr_29933_29959 = state_29928__$1;
(statearr_29933_29959[(1)] = (5));

} else {
var statearr_29934_29960 = state_29928__$1;
(statearr_29934_29960[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (15))){
var inst_29888 = (state_29928[(8)]);
var inst_29903 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29888);
var inst_29904 = cljs.core.first.call(null,inst_29903);
var inst_29905 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29904);
var inst_29906 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29905)].join('');
var inst_29907 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_29906);
var state_29928__$1 = state_29928;
var statearr_29935_29961 = state_29928__$1;
(statearr_29935_29961[(2)] = inst_29907);

(statearr_29935_29961[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (13))){
var inst_29912 = (state_29928[(2)]);
var state_29928__$1 = state_29928;
var statearr_29936_29962 = state_29928__$1;
(statearr_29936_29962[(2)] = inst_29912);

(statearr_29936_29962[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (6))){
var state_29928__$1 = state_29928;
var statearr_29937_29963 = state_29928__$1;
(statearr_29937_29963[(2)] = null);

(statearr_29937_29963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (17))){
var inst_29910 = (state_29928[(2)]);
var state_29928__$1 = state_29928;
var statearr_29938_29964 = state_29928__$1;
(statearr_29938_29964[(2)] = inst_29910);

(statearr_29938_29964[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (3))){
var inst_29926 = (state_29928[(2)]);
var state_29928__$1 = state_29928;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29928__$1,inst_29926);
} else {
if((state_val_29929 === (12))){
var inst_29887 = (state_29928[(9)]);
var inst_29901 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29887,opts);
var state_29928__$1 = state_29928;
if(cljs.core.truth_(inst_29901)){
var statearr_29939_29965 = state_29928__$1;
(statearr_29939_29965[(1)] = (15));

} else {
var statearr_29940_29966 = state_29928__$1;
(statearr_29940_29966[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (2))){
var state_29928__$1 = state_29928;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29928__$1,(4),ch);
} else {
if((state_val_29929 === (11))){
var inst_29888 = (state_29928[(8)]);
var inst_29893 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29894 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29888);
var inst_29895 = cljs.core.async.timeout.call(null,(1000));
var inst_29896 = [inst_29894,inst_29895];
var inst_29897 = (new cljs.core.PersistentVector(null,2,(5),inst_29893,inst_29896,null));
var state_29928__$1 = state_29928;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29928__$1,(14),inst_29897);
} else {
if((state_val_29929 === (9))){
var inst_29888 = (state_29928[(8)]);
var inst_29914 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_29915 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29888);
var inst_29916 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_29915);
var inst_29917 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_29916)].join('');
var inst_29918 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_29917);
var state_29928__$1 = (function (){var statearr_29941 = state_29928;
(statearr_29941[(10)] = inst_29914);

return statearr_29941;
})();
var statearr_29942_29967 = state_29928__$1;
(statearr_29942_29967[(2)] = inst_29918);

(statearr_29942_29967[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (5))){
var inst_29881 = (state_29928[(7)]);
var inst_29883 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29884 = (new cljs.core.PersistentArrayMap(null,2,inst_29883,null));
var inst_29885 = (new cljs.core.PersistentHashSet(null,inst_29884,null));
var inst_29886 = figwheel.client.focus_msgs.call(null,inst_29885,inst_29881);
var inst_29887 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29886);
var inst_29888 = cljs.core.first.call(null,inst_29886);
var inst_29889 = figwheel.client.autoload_QMARK_.call(null);
var state_29928__$1 = (function (){var statearr_29943 = state_29928;
(statearr_29943[(8)] = inst_29888);

(statearr_29943[(9)] = inst_29887);

return statearr_29943;
})();
if(cljs.core.truth_(inst_29889)){
var statearr_29944_29968 = state_29928__$1;
(statearr_29944_29968[(1)] = (8));

} else {
var statearr_29945_29969 = state_29928__$1;
(statearr_29945_29969[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (14))){
var inst_29899 = (state_29928[(2)]);
var state_29928__$1 = state_29928;
var statearr_29946_29970 = state_29928__$1;
(statearr_29946_29970[(2)] = inst_29899);

(statearr_29946_29970[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (16))){
var state_29928__$1 = state_29928;
var statearr_29947_29971 = state_29928__$1;
(statearr_29947_29971[(2)] = null);

(statearr_29947_29971[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (10))){
var inst_29920 = (state_29928[(2)]);
var state_29928__$1 = (function (){var statearr_29948 = state_29928;
(statearr_29948[(11)] = inst_29920);

return statearr_29948;
})();
var statearr_29949_29972 = state_29928__$1;
(statearr_29949_29972[(2)] = null);

(statearr_29949_29972[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29929 === (8))){
var inst_29887 = (state_29928[(9)]);
var inst_29891 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29887,opts);
var state_29928__$1 = state_29928;
if(cljs.core.truth_(inst_29891)){
var statearr_29950_29973 = state_29928__$1;
(statearr_29950_29973[(1)] = (11));

} else {
var statearr_29951_29974 = state_29928__$1;
(statearr_29951_29974[(1)] = (12));

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
});})(c__26017__auto___29956,ch))
;
return ((function (switch__25929__auto__,c__26017__auto___29956,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____0 = (function (){
var statearr_29952 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29952[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__);

(statearr_29952[(1)] = (1));

return statearr_29952;
});
var figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____1 = (function (state_29928){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_29928);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e29953){if((e29953 instanceof Object)){
var ex__25933__auto__ = e29953;
var statearr_29954_29975 = state_29928;
(statearr_29954_29975[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29928);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29953;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29976 = state_29928;
state_29928 = G__29976;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__ = function(state_29928){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____1.call(this,state_29928);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__25930__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___29956,ch))
})();
var state__26019__auto__ = (function (){var statearr_29955 = f__26018__auto__.call(null);
(statearr_29955[(6)] = c__26017__auto___29956);

return statearr_29955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___29956,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29977_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29977_SHARP_));
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
var base_path_29981 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29981){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_29979 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_29980 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_29979,_STAR_print_fn_STAR_29980,sb,base_path_29981){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_29979,_STAR_print_fn_STAR_29980,sb,base_path_29981))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29980;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29979;
}}catch (e29978){if((e29978 instanceof Error)){
var e = e29978;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29981], null));
} else {
var e = e29978;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29981))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29982){
var map__29983 = p__29982;
var map__29983__$1 = ((((!((map__29983 == null)))?(((((map__29983.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29983.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29983):map__29983);
var opts = map__29983__$1;
var build_id = cljs.core.get.call(null,map__29983__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29983,map__29983__$1,opts,build_id){
return (function (p__29985){
var vec__29986 = p__29985;
var seq__29987 = cljs.core.seq.call(null,vec__29986);
var first__29988 = cljs.core.first.call(null,seq__29987);
var seq__29987__$1 = cljs.core.next.call(null,seq__29987);
var map__29989 = first__29988;
var map__29989__$1 = ((((!((map__29989 == null)))?(((((map__29989.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29989.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29989):map__29989);
var msg = map__29989__$1;
var msg_name = cljs.core.get.call(null,map__29989__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29987__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29986,seq__29987,first__29988,seq__29987__$1,map__29989,map__29989__$1,msg,msg_name,_,map__29983,map__29983__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29986,seq__29987,first__29988,seq__29987__$1,map__29989,map__29989__$1,msg,msg_name,_,map__29983,map__29983__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29983,map__29983__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29991){
var vec__29992 = p__29991;
var seq__29993 = cljs.core.seq.call(null,vec__29992);
var first__29994 = cljs.core.first.call(null,seq__29993);
var seq__29993__$1 = cljs.core.next.call(null,seq__29993);
var map__29995 = first__29994;
var map__29995__$1 = ((((!((map__29995 == null)))?(((((map__29995.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29995.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29995):map__29995);
var msg = map__29995__$1;
var msg_name = cljs.core.get.call(null,map__29995__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__29993__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29997){
var map__29998 = p__29997;
var map__29998__$1 = ((((!((map__29998 == null)))?(((((map__29998.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29998.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29998):map__29998);
var on_compile_warning = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29998__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29998,map__29998__$1,on_compile_warning,on_compile_fail){
return (function (p__30000){
var vec__30001 = p__30000;
var seq__30002 = cljs.core.seq.call(null,vec__30001);
var first__30003 = cljs.core.first.call(null,seq__30002);
var seq__30002__$1 = cljs.core.next.call(null,seq__30002);
var map__30004 = first__30003;
var map__30004__$1 = ((((!((map__30004 == null)))?(((((map__30004.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30004.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30004):map__30004);
var msg = map__30004__$1;
var msg_name = cljs.core.get.call(null,map__30004__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__30002__$1;
var pred__30006 = cljs.core._EQ_;
var expr__30007 = msg_name;
if(cljs.core.truth_(pred__30006.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__30007))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__30006.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__30007))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29998,map__29998__$1,on_compile_warning,on_compile_fail))
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
return (function (state_30096){
var state_val_30097 = (state_30096[(1)]);
if((state_val_30097 === (7))){
var inst_30016 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30016)){
var statearr_30098_30145 = state_30096__$1;
(statearr_30098_30145[(1)] = (8));

} else {
var statearr_30099_30146 = state_30096__$1;
(statearr_30099_30146[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (20))){
var inst_30090 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30100_30147 = state_30096__$1;
(statearr_30100_30147[(2)] = inst_30090);

(statearr_30100_30147[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (27))){
var inst_30086 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30101_30148 = state_30096__$1;
(statearr_30101_30148[(2)] = inst_30086);

(statearr_30101_30148[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (1))){
var inst_30009 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30009)){
var statearr_30102_30149 = state_30096__$1;
(statearr_30102_30149[(1)] = (2));

} else {
var statearr_30103_30150 = state_30096__$1;
(statearr_30103_30150[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (24))){
var inst_30088 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30104_30151 = state_30096__$1;
(statearr_30104_30151[(2)] = inst_30088);

(statearr_30104_30151[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (4))){
var inst_30094 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30096__$1,inst_30094);
} else {
if((state_val_30097 === (15))){
var inst_30092 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30105_30152 = state_30096__$1;
(statearr_30105_30152[(2)] = inst_30092);

(statearr_30105_30152[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (21))){
var inst_30045 = (state_30096[(2)]);
var inst_30046 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30047 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30046);
var state_30096__$1 = (function (){var statearr_30106 = state_30096;
(statearr_30106[(7)] = inst_30045);

return statearr_30106;
})();
var statearr_30107_30153 = state_30096__$1;
(statearr_30107_30153[(2)] = inst_30047);

(statearr_30107_30153[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (31))){
var inst_30075 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30075)){
var statearr_30108_30154 = state_30096__$1;
(statearr_30108_30154[(1)] = (34));

} else {
var statearr_30109_30155 = state_30096__$1;
(statearr_30109_30155[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (32))){
var inst_30084 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30110_30156 = state_30096__$1;
(statearr_30110_30156[(2)] = inst_30084);

(statearr_30110_30156[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (33))){
var inst_30071 = (state_30096[(2)]);
var inst_30072 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30073 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30072);
var state_30096__$1 = (function (){var statearr_30111 = state_30096;
(statearr_30111[(8)] = inst_30071);

return statearr_30111;
})();
var statearr_30112_30157 = state_30096__$1;
(statearr_30112_30157[(2)] = inst_30073);

(statearr_30112_30157[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (13))){
var inst_30030 = figwheel.client.heads_up.clear.call(null);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(16),inst_30030);
} else {
if((state_val_30097 === (22))){
var inst_30051 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30052 = figwheel.client.heads_up.append_warning_message.call(null,inst_30051);
var state_30096__$1 = state_30096;
var statearr_30113_30158 = state_30096__$1;
(statearr_30113_30158[(2)] = inst_30052);

(statearr_30113_30158[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (36))){
var inst_30082 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30114_30159 = state_30096__$1;
(statearr_30114_30159[(2)] = inst_30082);

(statearr_30114_30159[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (29))){
var inst_30062 = (state_30096[(2)]);
var inst_30063 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30064 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30063);
var state_30096__$1 = (function (){var statearr_30115 = state_30096;
(statearr_30115[(9)] = inst_30062);

return statearr_30115;
})();
var statearr_30116_30160 = state_30096__$1;
(statearr_30116_30160[(2)] = inst_30064);

(statearr_30116_30160[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (6))){
var inst_30011 = (state_30096[(10)]);
var state_30096__$1 = state_30096;
var statearr_30117_30161 = state_30096__$1;
(statearr_30117_30161[(2)] = inst_30011);

(statearr_30117_30161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (28))){
var inst_30058 = (state_30096[(2)]);
var inst_30059 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30060 = figwheel.client.heads_up.display_warning.call(null,inst_30059);
var state_30096__$1 = (function (){var statearr_30118 = state_30096;
(statearr_30118[(11)] = inst_30058);

return statearr_30118;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(29),inst_30060);
} else {
if((state_val_30097 === (25))){
var inst_30056 = figwheel.client.heads_up.clear.call(null);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(28),inst_30056);
} else {
if((state_val_30097 === (34))){
var inst_30077 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(37),inst_30077);
} else {
if((state_val_30097 === (17))){
var inst_30036 = (state_30096[(2)]);
var inst_30037 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30038 = figwheel.client.auto_jump_to_error.call(null,opts,inst_30037);
var state_30096__$1 = (function (){var statearr_30119 = state_30096;
(statearr_30119[(12)] = inst_30036);

return statearr_30119;
})();
var statearr_30120_30162 = state_30096__$1;
(statearr_30120_30162[(2)] = inst_30038);

(statearr_30120_30162[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (3))){
var inst_30028 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30028)){
var statearr_30121_30163 = state_30096__$1;
(statearr_30121_30163[(1)] = (13));

} else {
var statearr_30122_30164 = state_30096__$1;
(statearr_30122_30164[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (12))){
var inst_30024 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30123_30165 = state_30096__$1;
(statearr_30123_30165[(2)] = inst_30024);

(statearr_30123_30165[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (2))){
var inst_30011 = (state_30096[(10)]);
var inst_30011__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_30096__$1 = (function (){var statearr_30124 = state_30096;
(statearr_30124[(10)] = inst_30011__$1);

return statearr_30124;
})();
if(cljs.core.truth_(inst_30011__$1)){
var statearr_30125_30166 = state_30096__$1;
(statearr_30125_30166[(1)] = (5));

} else {
var statearr_30126_30167 = state_30096__$1;
(statearr_30126_30167[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (23))){
var inst_30054 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30054)){
var statearr_30127_30168 = state_30096__$1;
(statearr_30127_30168[(1)] = (25));

} else {
var statearr_30128_30169 = state_30096__$1;
(statearr_30128_30169[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (35))){
var state_30096__$1 = state_30096;
var statearr_30129_30170 = state_30096__$1;
(statearr_30129_30170[(2)] = null);

(statearr_30129_30170[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (19))){
var inst_30049 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30049)){
var statearr_30130_30171 = state_30096__$1;
(statearr_30130_30171[(1)] = (22));

} else {
var statearr_30131_30172 = state_30096__$1;
(statearr_30131_30172[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (11))){
var inst_30020 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30132_30173 = state_30096__$1;
(statearr_30132_30173[(2)] = inst_30020);

(statearr_30132_30173[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (9))){
var inst_30022 = figwheel.client.heads_up.clear.call(null);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(12),inst_30022);
} else {
if((state_val_30097 === (5))){
var inst_30013 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_30096__$1 = state_30096;
var statearr_30133_30174 = state_30096__$1;
(statearr_30133_30174[(2)] = inst_30013);

(statearr_30133_30174[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (14))){
var inst_30040 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30040)){
var statearr_30134_30175 = state_30096__$1;
(statearr_30134_30175[(1)] = (18));

} else {
var statearr_30135_30176 = state_30096__$1;
(statearr_30135_30176[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (26))){
var inst_30066 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_30096__$1 = state_30096;
if(cljs.core.truth_(inst_30066)){
var statearr_30136_30177 = state_30096__$1;
(statearr_30136_30177[(1)] = (30));

} else {
var statearr_30137_30178 = state_30096__$1;
(statearr_30137_30178[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (16))){
var inst_30032 = (state_30096[(2)]);
var inst_30033 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30034 = figwheel.client.heads_up.display_exception.call(null,inst_30033);
var state_30096__$1 = (function (){var statearr_30138 = state_30096;
(statearr_30138[(13)] = inst_30032);

return statearr_30138;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(17),inst_30034);
} else {
if((state_val_30097 === (30))){
var inst_30068 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30069 = figwheel.client.heads_up.display_warning.call(null,inst_30068);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(33),inst_30069);
} else {
if((state_val_30097 === (10))){
var inst_30026 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30139_30179 = state_30096__$1;
(statearr_30139_30179[(2)] = inst_30026);

(statearr_30139_30179[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (18))){
var inst_30042 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_30043 = figwheel.client.heads_up.display_exception.call(null,inst_30042);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(21),inst_30043);
} else {
if((state_val_30097 === (37))){
var inst_30079 = (state_30096[(2)]);
var state_30096__$1 = state_30096;
var statearr_30140_30180 = state_30096__$1;
(statearr_30140_30180[(2)] = inst_30079);

(statearr_30140_30180[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30097 === (8))){
var inst_30018 = figwheel.client.heads_up.flash_loaded.call(null);
var state_30096__$1 = state_30096;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30096__$1,(11),inst_30018);
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
var statearr_30141 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30141[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__);

(statearr_30141[(1)] = (1));

return statearr_30141;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____1 = (function (state_30096){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_30096);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e30142){if((e30142 instanceof Object)){
var ex__25933__auto__ = e30142;
var statearr_30143_30181 = state_30096;
(statearr_30143_30181[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30096);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30142;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30182 = state_30096;
state_30096 = G__30182;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__ = function(state_30096){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____1.call(this,state_30096);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,msg_hist,msg_names,msg))
})();
var state__26019__auto__ = (function (){var statearr_30144 = f__26018__auto__.call(null);
(statearr_30144[(6)] = c__26017__auto__);

return statearr_30144;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__,msg_hist,msg_names,msg))
);

return c__26017__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__26017__auto___30211 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___30211,ch){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___30211,ch){
return (function (state_30197){
var state_val_30198 = (state_30197[(1)]);
if((state_val_30198 === (1))){
var state_30197__$1 = state_30197;
var statearr_30199_30212 = state_30197__$1;
(statearr_30199_30212[(2)] = null);

(statearr_30199_30212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (2))){
var state_30197__$1 = state_30197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30197__$1,(4),ch);
} else {
if((state_val_30198 === (3))){
var inst_30195 = (state_30197[(2)]);
var state_30197__$1 = state_30197;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30197__$1,inst_30195);
} else {
if((state_val_30198 === (4))){
var inst_30185 = (state_30197[(7)]);
var inst_30185__$1 = (state_30197[(2)]);
var state_30197__$1 = (function (){var statearr_30200 = state_30197;
(statearr_30200[(7)] = inst_30185__$1);

return statearr_30200;
})();
if(cljs.core.truth_(inst_30185__$1)){
var statearr_30201_30213 = state_30197__$1;
(statearr_30201_30213[(1)] = (5));

} else {
var statearr_30202_30214 = state_30197__$1;
(statearr_30202_30214[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (5))){
var inst_30185 = (state_30197[(7)]);
var inst_30187 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_30185);
var state_30197__$1 = state_30197;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30197__$1,(8),inst_30187);
} else {
if((state_val_30198 === (6))){
var state_30197__$1 = state_30197;
var statearr_30203_30215 = state_30197__$1;
(statearr_30203_30215[(2)] = null);

(statearr_30203_30215[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (7))){
var inst_30193 = (state_30197[(2)]);
var state_30197__$1 = state_30197;
var statearr_30204_30216 = state_30197__$1;
(statearr_30204_30216[(2)] = inst_30193);

(statearr_30204_30216[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30198 === (8))){
var inst_30189 = (state_30197[(2)]);
var state_30197__$1 = (function (){var statearr_30205 = state_30197;
(statearr_30205[(8)] = inst_30189);

return statearr_30205;
})();
var statearr_30206_30217 = state_30197__$1;
(statearr_30206_30217[(2)] = null);

(statearr_30206_30217[(1)] = (2));


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
});})(c__26017__auto___30211,ch))
;
return ((function (switch__25929__auto__,c__26017__auto___30211,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__25930__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__25930__auto____0 = (function (){
var statearr_30207 = [null,null,null,null,null,null,null,null,null];
(statearr_30207[(0)] = figwheel$client$heads_up_plugin_$_state_machine__25930__auto__);

(statearr_30207[(1)] = (1));

return statearr_30207;
});
var figwheel$client$heads_up_plugin_$_state_machine__25930__auto____1 = (function (state_30197){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_30197);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e30208){if((e30208 instanceof Object)){
var ex__25933__auto__ = e30208;
var statearr_30209_30218 = state_30197;
(statearr_30209_30218[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30197);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30219 = state_30197;
state_30197 = G__30219;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__25930__auto__ = function(state_30197){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__25930__auto____1.call(this,state_30197);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__25930__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__25930__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___30211,ch))
})();
var state__26019__auto__ = (function (){var statearr_30210 = f__26018__auto__.call(null);
(statearr_30210[(6)] = c__26017__auto___30211);

return statearr_30210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___30211,ch))
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
return (function (state_30225){
var state_val_30226 = (state_30225[(1)]);
if((state_val_30226 === (1))){
var inst_30220 = cljs.core.async.timeout.call(null,(3000));
var state_30225__$1 = state_30225;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30225__$1,(2),inst_30220);
} else {
if((state_val_30226 === (2))){
var inst_30222 = (state_30225[(2)]);
var inst_30223 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_30225__$1 = (function (){var statearr_30227 = state_30225;
(statearr_30227[(7)] = inst_30222);

return statearr_30227;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30225__$1,inst_30223);
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
var statearr_30228 = [null,null,null,null,null,null,null,null];
(statearr_30228[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__);

(statearr_30228[(1)] = (1));

return statearr_30228;
});
var figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____1 = (function (state_30225){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_30225);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e30229){if((e30229 instanceof Object)){
var ex__25933__auto__ = e30229;
var statearr_30230_30232 = state_30225;
(statearr_30230_30232[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30225);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30229;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30233 = state_30225;
state_30225 = G__30233;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__ = function(state_30225){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____1.call(this,state_30225);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__25930__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_30231 = f__26018__auto__.call(null);
(statearr_30231[(6)] = c__26017__auto__);

return statearr_30231;
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
return (function (state_30240){
var state_val_30241 = (state_30240[(1)]);
if((state_val_30241 === (1))){
var inst_30234 = cljs.core.async.timeout.call(null,(2000));
var state_30240__$1 = state_30240;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30240__$1,(2),inst_30234);
} else {
if((state_val_30241 === (2))){
var inst_30236 = (state_30240[(2)]);
var inst_30237 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_30238 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_30237);
var state_30240__$1 = (function (){var statearr_30242 = state_30240;
(statearr_30242[(7)] = inst_30236);

return statearr_30242;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30240__$1,inst_30238);
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
var statearr_30243 = [null,null,null,null,null,null,null,null];
(statearr_30243[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__);

(statearr_30243[(1)] = (1));

return statearr_30243;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____1 = (function (state_30240){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_30240);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e30244){if((e30244 instanceof Object)){
var ex__25933__auto__ = e30244;
var statearr_30245_30247 = state_30240;
(statearr_30245_30247[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30240);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30248 = state_30240;
state_30240 = G__30248;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__ = function(state_30240){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____1.call(this,state_30240);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,figwheel_version,temp__4657__auto__))
})();
var state__26019__auto__ = (function (){var statearr_30246 = f__26018__auto__.call(null);
(statearr_30246[(6)] = c__26017__auto__);

return statearr_30246;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__30249){
var map__30250 = p__30249;
var map__30250__$1 = ((((!((map__30250 == null)))?(((((map__30250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30250):map__30250);
var file = cljs.core.get.call(null,map__30250__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__30250__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__30250__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__30252 = "";
var G__30252__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30252),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__30252);
var G__30252__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30252__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__30252__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__30252__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__30252__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__30253){
var map__30254 = p__30253;
var map__30254__$1 = ((((!((map__30254 == null)))?(((((map__30254.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30254.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30254):map__30254);
var ed = map__30254__$1;
var formatted_exception = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__30254__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__30256_30260 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__30257_30261 = null;
var count__30258_30262 = (0);
var i__30259_30263 = (0);
while(true){
if((i__30259_30263 < count__30258_30262)){
var msg_30264 = cljs.core._nth.call(null,chunk__30257_30261,i__30259_30263);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30264);


var G__30265 = seq__30256_30260;
var G__30266 = chunk__30257_30261;
var G__30267 = count__30258_30262;
var G__30268 = (i__30259_30263 + (1));
seq__30256_30260 = G__30265;
chunk__30257_30261 = G__30266;
count__30258_30262 = G__30267;
i__30259_30263 = G__30268;
continue;
} else {
var temp__4657__auto___30269 = cljs.core.seq.call(null,seq__30256_30260);
if(temp__4657__auto___30269){
var seq__30256_30270__$1 = temp__4657__auto___30269;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30256_30270__$1)){
var c__4319__auto___30271 = cljs.core.chunk_first.call(null,seq__30256_30270__$1);
var G__30272 = cljs.core.chunk_rest.call(null,seq__30256_30270__$1);
var G__30273 = c__4319__auto___30271;
var G__30274 = cljs.core.count.call(null,c__4319__auto___30271);
var G__30275 = (0);
seq__30256_30260 = G__30272;
chunk__30257_30261 = G__30273;
count__30258_30262 = G__30274;
i__30259_30263 = G__30275;
continue;
} else {
var msg_30276 = cljs.core.first.call(null,seq__30256_30270__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_30276);


var G__30277 = cljs.core.next.call(null,seq__30256_30270__$1);
var G__30278 = null;
var G__30279 = (0);
var G__30280 = (0);
seq__30256_30260 = G__30277;
chunk__30257_30261 = G__30278;
count__30258_30262 = G__30279;
i__30259_30263 = G__30280;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__30281){
var map__30282 = p__30281;
var map__30282__$1 = ((((!((map__30282 == null)))?(((((map__30282.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30282.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30282):map__30282);
var w = map__30282__$1;
var message = cljs.core.get.call(null,map__30282__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__30284 = cljs.core.seq.call(null,plugins);
var chunk__30285 = null;
var count__30286 = (0);
var i__30287 = (0);
while(true){
if((i__30287 < count__30286)){
var vec__30288 = cljs.core._nth.call(null,chunk__30285,i__30287);
var k = cljs.core.nth.call(null,vec__30288,(0),null);
var plugin = cljs.core.nth.call(null,vec__30288,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30294 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30284,chunk__30285,count__30286,i__30287,pl_30294,vec__30288,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_30294.call(null,msg_hist);
});})(seq__30284,chunk__30285,count__30286,i__30287,pl_30294,vec__30288,k,plugin))
);
} else {
}


var G__30295 = seq__30284;
var G__30296 = chunk__30285;
var G__30297 = count__30286;
var G__30298 = (i__30287 + (1));
seq__30284 = G__30295;
chunk__30285 = G__30296;
count__30286 = G__30297;
i__30287 = G__30298;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30284);
if(temp__4657__auto__){
var seq__30284__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30284__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30284__$1);
var G__30299 = cljs.core.chunk_rest.call(null,seq__30284__$1);
var G__30300 = c__4319__auto__;
var G__30301 = cljs.core.count.call(null,c__4319__auto__);
var G__30302 = (0);
seq__30284 = G__30299;
chunk__30285 = G__30300;
count__30286 = G__30301;
i__30287 = G__30302;
continue;
} else {
var vec__30291 = cljs.core.first.call(null,seq__30284__$1);
var k = cljs.core.nth.call(null,vec__30291,(0),null);
var plugin = cljs.core.nth.call(null,vec__30291,(1),null);
if(cljs.core.truth_(plugin)){
var pl_30303 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__30284,chunk__30285,count__30286,i__30287,pl_30303,vec__30291,k,plugin,seq__30284__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_30303.call(null,msg_hist);
});})(seq__30284,chunk__30285,count__30286,i__30287,pl_30303,vec__30291,k,plugin,seq__30284__$1,temp__4657__auto__))
);
} else {
}


var G__30304 = cljs.core.next.call(null,seq__30284__$1);
var G__30305 = null;
var G__30306 = (0);
var G__30307 = (0);
seq__30284 = G__30304;
chunk__30285 = G__30305;
count__30286 = G__30306;
i__30287 = G__30307;
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
var G__30309 = arguments.length;
switch (G__30309) {
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

var seq__30310_30315 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__30311_30316 = null;
var count__30312_30317 = (0);
var i__30313_30318 = (0);
while(true){
if((i__30313_30318 < count__30312_30317)){
var msg_30319 = cljs.core._nth.call(null,chunk__30311_30316,i__30313_30318);
figwheel.client.socket.handle_incoming_message.call(null,msg_30319);


var G__30320 = seq__30310_30315;
var G__30321 = chunk__30311_30316;
var G__30322 = count__30312_30317;
var G__30323 = (i__30313_30318 + (1));
seq__30310_30315 = G__30320;
chunk__30311_30316 = G__30321;
count__30312_30317 = G__30322;
i__30313_30318 = G__30323;
continue;
} else {
var temp__4657__auto___30324 = cljs.core.seq.call(null,seq__30310_30315);
if(temp__4657__auto___30324){
var seq__30310_30325__$1 = temp__4657__auto___30324;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30310_30325__$1)){
var c__4319__auto___30326 = cljs.core.chunk_first.call(null,seq__30310_30325__$1);
var G__30327 = cljs.core.chunk_rest.call(null,seq__30310_30325__$1);
var G__30328 = c__4319__auto___30326;
var G__30329 = cljs.core.count.call(null,c__4319__auto___30326);
var G__30330 = (0);
seq__30310_30315 = G__30327;
chunk__30311_30316 = G__30328;
count__30312_30317 = G__30329;
i__30313_30318 = G__30330;
continue;
} else {
var msg_30331 = cljs.core.first.call(null,seq__30310_30325__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_30331);


var G__30332 = cljs.core.next.call(null,seq__30310_30325__$1);
var G__30333 = null;
var G__30334 = (0);
var G__30335 = (0);
seq__30310_30315 = G__30332;
chunk__30311_30316 = G__30333;
count__30312_30317 = G__30334;
i__30313_30318 = G__30335;
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
var len__4499__auto___30340 = arguments.length;
var i__4500__auto___30341 = (0);
while(true){
if((i__4500__auto___30341 < len__4499__auto___30340)){
args__4502__auto__.push((arguments[i__4500__auto___30341]));

var G__30342 = (i__4500__auto___30341 + (1));
i__4500__auto___30341 = G__30342;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__30337){
var map__30338 = p__30337;
var map__30338__$1 = ((((!((map__30338 == null)))?(((((map__30338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30338):map__30338);
var opts = map__30338__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq30336){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq30336));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e30343){if((e30343 instanceof Error)){
var e = e30343;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e30343;

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
return (function (p__30344){
var map__30345 = p__30344;
var map__30345__$1 = ((((!((map__30345 == null)))?(((((map__30345.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30345.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345):map__30345);
var msg_name = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1547389521190
