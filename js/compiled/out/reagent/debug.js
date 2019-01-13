// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__35306__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35306 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35307__i = 0, G__35307__a = new Array(arguments.length -  0);
while (G__35307__i < G__35307__a.length) {G__35307__a[G__35307__i] = arguments[G__35307__i + 0]; ++G__35307__i;}
  args = new cljs.core.IndexedSeq(G__35307__a,0,null);
} 
return G__35306__delegate.call(this,args);};
G__35306.cljs$lang$maxFixedArity = 0;
G__35306.cljs$lang$applyTo = (function (arglist__35308){
var args = cljs.core.seq(arglist__35308);
return G__35306__delegate(args);
});
G__35306.cljs$core$IFn$_invoke$arity$variadic = G__35306__delegate;
return G__35306;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__35309__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__35309 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__35310__i = 0, G__35310__a = new Array(arguments.length -  0);
while (G__35310__i < G__35310__a.length) {G__35310__a[G__35310__i] = arguments[G__35310__i + 0]; ++G__35310__i;}
  args = new cljs.core.IndexedSeq(G__35310__a,0,null);
} 
return G__35309__delegate.call(this,args);};
G__35309.cljs$lang$maxFixedArity = 0;
G__35309.cljs$lang$applyTo = (function (arglist__35311){
var args = cljs.core.seq(arglist__35311);
return G__35309__delegate(args);
});
G__35309.cljs$core$IFn$_invoke$arity$variadic = G__35309__delegate;
return G__35309;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1547392801150
