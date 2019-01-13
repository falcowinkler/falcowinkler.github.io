// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__42241){
var map__42242 = p__42241;
var map__42242__$1 = ((((!((map__42242 == null)))?(((((map__42242.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42242.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42242):map__42242);
var m = map__42242__$1;
var n = cljs.core.get.call(null,map__42242__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__42242__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42244_42266 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42245_42267 = null;
var count__42246_42268 = (0);
var i__42247_42269 = (0);
while(true){
if((i__42247_42269 < count__42246_42268)){
var f_42270 = cljs.core._nth.call(null,chunk__42245_42267,i__42247_42269);
cljs.core.println.call(null,"  ",f_42270);


var G__42271 = seq__42244_42266;
var G__42272 = chunk__42245_42267;
var G__42273 = count__42246_42268;
var G__42274 = (i__42247_42269 + (1));
seq__42244_42266 = G__42271;
chunk__42245_42267 = G__42272;
count__42246_42268 = G__42273;
i__42247_42269 = G__42274;
continue;
} else {
var temp__4657__auto___42275 = cljs.core.seq.call(null,seq__42244_42266);
if(temp__4657__auto___42275){
var seq__42244_42276__$1 = temp__4657__auto___42275;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42244_42276__$1)){
var c__4319__auto___42277 = cljs.core.chunk_first.call(null,seq__42244_42276__$1);
var G__42278 = cljs.core.chunk_rest.call(null,seq__42244_42276__$1);
var G__42279 = c__4319__auto___42277;
var G__42280 = cljs.core.count.call(null,c__4319__auto___42277);
var G__42281 = (0);
seq__42244_42266 = G__42278;
chunk__42245_42267 = G__42279;
count__42246_42268 = G__42280;
i__42247_42269 = G__42281;
continue;
} else {
var f_42282 = cljs.core.first.call(null,seq__42244_42276__$1);
cljs.core.println.call(null,"  ",f_42282);


var G__42283 = cljs.core.next.call(null,seq__42244_42276__$1);
var G__42284 = null;
var G__42285 = (0);
var G__42286 = (0);
seq__42244_42266 = G__42283;
chunk__42245_42267 = G__42284;
count__42246_42268 = G__42285;
i__42247_42269 = G__42286;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_42287 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_42287);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_42287)))?cljs.core.second.call(null,arglists_42287):arglists_42287));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__42248_42288 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__42249_42289 = null;
var count__42250_42290 = (0);
var i__42251_42291 = (0);
while(true){
if((i__42251_42291 < count__42250_42290)){
var vec__42252_42292 = cljs.core._nth.call(null,chunk__42249_42289,i__42251_42291);
var name_42293 = cljs.core.nth.call(null,vec__42252_42292,(0),null);
var map__42255_42294 = cljs.core.nth.call(null,vec__42252_42292,(1),null);
var map__42255_42295__$1 = ((((!((map__42255_42294 == null)))?(((((map__42255_42294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42255_42294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42255_42294):map__42255_42294);
var doc_42296 = cljs.core.get.call(null,map__42255_42295__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42297 = cljs.core.get.call(null,map__42255_42295__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42293);

cljs.core.println.call(null," ",arglists_42297);

if(cljs.core.truth_(doc_42296)){
cljs.core.println.call(null," ",doc_42296);
} else {
}


var G__42298 = seq__42248_42288;
var G__42299 = chunk__42249_42289;
var G__42300 = count__42250_42290;
var G__42301 = (i__42251_42291 + (1));
seq__42248_42288 = G__42298;
chunk__42249_42289 = G__42299;
count__42250_42290 = G__42300;
i__42251_42291 = G__42301;
continue;
} else {
var temp__4657__auto___42302 = cljs.core.seq.call(null,seq__42248_42288);
if(temp__4657__auto___42302){
var seq__42248_42303__$1 = temp__4657__auto___42302;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42248_42303__$1)){
var c__4319__auto___42304 = cljs.core.chunk_first.call(null,seq__42248_42303__$1);
var G__42305 = cljs.core.chunk_rest.call(null,seq__42248_42303__$1);
var G__42306 = c__4319__auto___42304;
var G__42307 = cljs.core.count.call(null,c__4319__auto___42304);
var G__42308 = (0);
seq__42248_42288 = G__42305;
chunk__42249_42289 = G__42306;
count__42250_42290 = G__42307;
i__42251_42291 = G__42308;
continue;
} else {
var vec__42257_42309 = cljs.core.first.call(null,seq__42248_42303__$1);
var name_42310 = cljs.core.nth.call(null,vec__42257_42309,(0),null);
var map__42260_42311 = cljs.core.nth.call(null,vec__42257_42309,(1),null);
var map__42260_42312__$1 = ((((!((map__42260_42311 == null)))?(((((map__42260_42311.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42260_42311.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__42260_42311):map__42260_42311);
var doc_42313 = cljs.core.get.call(null,map__42260_42312__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_42314 = cljs.core.get.call(null,map__42260_42312__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_42310);

cljs.core.println.call(null," ",arglists_42314);

if(cljs.core.truth_(doc_42313)){
cljs.core.println.call(null," ",doc_42313);
} else {
}


var G__42315 = cljs.core.next.call(null,seq__42248_42303__$1);
var G__42316 = null;
var G__42317 = (0);
var G__42318 = (0);
seq__42248_42288 = G__42315;
chunk__42249_42289 = G__42316;
count__42250_42290 = G__42317;
i__42251_42291 = G__42318;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__42262 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__42263 = null;
var count__42264 = (0);
var i__42265 = (0);
while(true){
if((i__42265 < count__42264)){
var role = cljs.core._nth.call(null,chunk__42263,i__42265);
var temp__4657__auto___42319__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42319__$1)){
var spec_42320 = temp__4657__auto___42319__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42320));
} else {
}


var G__42321 = seq__42262;
var G__42322 = chunk__42263;
var G__42323 = count__42264;
var G__42324 = (i__42265 + (1));
seq__42262 = G__42321;
chunk__42263 = G__42322;
count__42264 = G__42323;
i__42265 = G__42324;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__42262);
if(temp__4657__auto____$1){
var seq__42262__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42262__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__42262__$1);
var G__42325 = cljs.core.chunk_rest.call(null,seq__42262__$1);
var G__42326 = c__4319__auto__;
var G__42327 = cljs.core.count.call(null,c__4319__auto__);
var G__42328 = (0);
seq__42262 = G__42325;
chunk__42263 = G__42326;
count__42264 = G__42327;
i__42265 = G__42328;
continue;
} else {
var role = cljs.core.first.call(null,seq__42262__$1);
var temp__4657__auto___42329__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___42329__$2)){
var spec_42330 = temp__4657__auto___42329__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_42330));
} else {
}


var G__42331 = cljs.core.next.call(null,seq__42262__$1);
var G__42332 = null;
var G__42333 = (0);
var G__42334 = (0);
seq__42262 = G__42331;
chunk__42263 = G__42332;
count__42264 = G__42333;
i__42265 = G__42334;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1547392813122
