// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__29575){
var map__29576 = p__29575;
var map__29576__$1 = ((((!((map__29576 == null)))?(((((map__29576.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29576.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29576):map__29576);
var m = map__29576__$1;
var n = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__29576__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__29578_29600 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29579_29601 = null;
var count__29580_29602 = (0);
var i__29581_29603 = (0);
while(true){
if((i__29581_29603 < count__29580_29602)){
var f_29604 = cljs.core._nth.call(null,chunk__29579_29601,i__29581_29603);
cljs.core.println.call(null,"  ",f_29604);


var G__29605 = seq__29578_29600;
var G__29606 = chunk__29579_29601;
var G__29607 = count__29580_29602;
var G__29608 = (i__29581_29603 + (1));
seq__29578_29600 = G__29605;
chunk__29579_29601 = G__29606;
count__29580_29602 = G__29607;
i__29581_29603 = G__29608;
continue;
} else {
var temp__4657__auto___29609 = cljs.core.seq.call(null,seq__29578_29600);
if(temp__4657__auto___29609){
var seq__29578_29610__$1 = temp__4657__auto___29609;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29578_29610__$1)){
var c__4319__auto___29611 = cljs.core.chunk_first.call(null,seq__29578_29610__$1);
var G__29612 = cljs.core.chunk_rest.call(null,seq__29578_29610__$1);
var G__29613 = c__4319__auto___29611;
var G__29614 = cljs.core.count.call(null,c__4319__auto___29611);
var G__29615 = (0);
seq__29578_29600 = G__29612;
chunk__29579_29601 = G__29613;
count__29580_29602 = G__29614;
i__29581_29603 = G__29615;
continue;
} else {
var f_29616 = cljs.core.first.call(null,seq__29578_29610__$1);
cljs.core.println.call(null,"  ",f_29616);


var G__29617 = cljs.core.next.call(null,seq__29578_29610__$1);
var G__29618 = null;
var G__29619 = (0);
var G__29620 = (0);
seq__29578_29600 = G__29617;
chunk__29579_29601 = G__29618;
count__29580_29602 = G__29619;
i__29581_29603 = G__29620;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_29621 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_29621);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_29621)))?cljs.core.second.call(null,arglists_29621):arglists_29621));
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
var seq__29582_29622 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__29583_29623 = null;
var count__29584_29624 = (0);
var i__29585_29625 = (0);
while(true){
if((i__29585_29625 < count__29584_29624)){
var vec__29586_29626 = cljs.core._nth.call(null,chunk__29583_29623,i__29585_29625);
var name_29627 = cljs.core.nth.call(null,vec__29586_29626,(0),null);
var map__29589_29628 = cljs.core.nth.call(null,vec__29586_29626,(1),null);
var map__29589_29629__$1 = ((((!((map__29589_29628 == null)))?(((((map__29589_29628.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29589_29628.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29589_29628):map__29589_29628);
var doc_29630 = cljs.core.get.call(null,map__29589_29629__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29631 = cljs.core.get.call(null,map__29589_29629__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29627);

cljs.core.println.call(null," ",arglists_29631);

if(cljs.core.truth_(doc_29630)){
cljs.core.println.call(null," ",doc_29630);
} else {
}


var G__29632 = seq__29582_29622;
var G__29633 = chunk__29583_29623;
var G__29634 = count__29584_29624;
var G__29635 = (i__29585_29625 + (1));
seq__29582_29622 = G__29632;
chunk__29583_29623 = G__29633;
count__29584_29624 = G__29634;
i__29585_29625 = G__29635;
continue;
} else {
var temp__4657__auto___29636 = cljs.core.seq.call(null,seq__29582_29622);
if(temp__4657__auto___29636){
var seq__29582_29637__$1 = temp__4657__auto___29636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29582_29637__$1)){
var c__4319__auto___29638 = cljs.core.chunk_first.call(null,seq__29582_29637__$1);
var G__29639 = cljs.core.chunk_rest.call(null,seq__29582_29637__$1);
var G__29640 = c__4319__auto___29638;
var G__29641 = cljs.core.count.call(null,c__4319__auto___29638);
var G__29642 = (0);
seq__29582_29622 = G__29639;
chunk__29583_29623 = G__29640;
count__29584_29624 = G__29641;
i__29585_29625 = G__29642;
continue;
} else {
var vec__29591_29643 = cljs.core.first.call(null,seq__29582_29637__$1);
var name_29644 = cljs.core.nth.call(null,vec__29591_29643,(0),null);
var map__29594_29645 = cljs.core.nth.call(null,vec__29591_29643,(1),null);
var map__29594_29646__$1 = ((((!((map__29594_29645 == null)))?(((((map__29594_29645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29594_29645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29594_29645):map__29594_29645);
var doc_29647 = cljs.core.get.call(null,map__29594_29646__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_29648 = cljs.core.get.call(null,map__29594_29646__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_29644);

cljs.core.println.call(null," ",arglists_29648);

if(cljs.core.truth_(doc_29647)){
cljs.core.println.call(null," ",doc_29647);
} else {
}


var G__29649 = cljs.core.next.call(null,seq__29582_29637__$1);
var G__29650 = null;
var G__29651 = (0);
var G__29652 = (0);
seq__29582_29622 = G__29649;
chunk__29583_29623 = G__29650;
count__29584_29624 = G__29651;
i__29585_29625 = G__29652;
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

var seq__29596 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__29597 = null;
var count__29598 = (0);
var i__29599 = (0);
while(true){
if((i__29599 < count__29598)){
var role = cljs.core._nth.call(null,chunk__29597,i__29599);
var temp__4657__auto___29653__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29653__$1)){
var spec_29654 = temp__4657__auto___29653__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29654));
} else {
}


var G__29655 = seq__29596;
var G__29656 = chunk__29597;
var G__29657 = count__29598;
var G__29658 = (i__29599 + (1));
seq__29596 = G__29655;
chunk__29597 = G__29656;
count__29598 = G__29657;
i__29599 = G__29658;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__29596);
if(temp__4657__auto____$1){
var seq__29596__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29596__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__29596__$1);
var G__29659 = cljs.core.chunk_rest.call(null,seq__29596__$1);
var G__29660 = c__4319__auto__;
var G__29661 = cljs.core.count.call(null,c__4319__auto__);
var G__29662 = (0);
seq__29596 = G__29659;
chunk__29597 = G__29660;
count__29598 = G__29661;
i__29599 = G__29662;
continue;
} else {
var role = cljs.core.first.call(null,seq__29596__$1);
var temp__4657__auto___29663__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___29663__$2)){
var spec_29664 = temp__4657__auto___29663__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_29664));
} else {
}


var G__29665 = cljs.core.next.call(null,seq__29596__$1);
var G__29666 = null;
var G__29667 = (0);
var G__29668 = (0);
seq__29596 = G__29665;
chunk__29597 = G__29666;
count__29598 = G__29667;
i__29599 = G__29668;
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

//# sourceMappingURL=repl.js.map?rel=1547389520594
