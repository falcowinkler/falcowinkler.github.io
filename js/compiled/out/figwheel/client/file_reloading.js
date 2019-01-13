// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__40778_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__40778_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__40779 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__40780 = null;
var count__40781 = (0);
var i__40782 = (0);
while(true){
if((i__40782 < count__40781)){
var n = cljs.core._nth.call(null,chunk__40780,i__40782);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__40783 = seq__40779;
var G__40784 = chunk__40780;
var G__40785 = count__40781;
var G__40786 = (i__40782 + (1));
seq__40779 = G__40783;
chunk__40780 = G__40784;
count__40781 = G__40785;
i__40782 = G__40786;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40779);
if(temp__4657__auto__){
var seq__40779__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40779__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__40779__$1);
var G__40787 = cljs.core.chunk_rest.call(null,seq__40779__$1);
var G__40788 = c__4319__auto__;
var G__40789 = cljs.core.count.call(null,c__4319__auto__);
var G__40790 = (0);
seq__40779 = G__40787;
chunk__40780 = G__40788;
count__40781 = G__40789;
i__40782 = G__40790;
continue;
} else {
var n = cljs.core.first.call(null,seq__40779__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__40791 = cljs.core.next.call(null,seq__40779__$1);
var G__40792 = null;
var G__40793 = (0);
var G__40794 = (0);
seq__40779 = G__40791;
chunk__40780 = G__40792;
count__40781 = G__40793;
i__40782 = G__40794;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__40795){
var vec__40796 = p__40795;
var _ = cljs.core.nth.call(null,vec__40796,(0),null);
var v = cljs.core.nth.call(null,vec__40796,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__40799){
var vec__40800 = p__40799;
var k = cljs.core.nth.call(null,vec__40800,(0),null);
var v = cljs.core.nth.call(null,vec__40800,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__40812_40820 = cljs.core.seq.call(null,deps);
var chunk__40813_40821 = null;
var count__40814_40822 = (0);
var i__40815_40823 = (0);
while(true){
if((i__40815_40823 < count__40814_40822)){
var dep_40824 = cljs.core._nth.call(null,chunk__40813_40821,i__40815_40823);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_40824;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40824));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40824,(depth + (1)),state);
} else {
}


var G__40825 = seq__40812_40820;
var G__40826 = chunk__40813_40821;
var G__40827 = count__40814_40822;
var G__40828 = (i__40815_40823 + (1));
seq__40812_40820 = G__40825;
chunk__40813_40821 = G__40826;
count__40814_40822 = G__40827;
i__40815_40823 = G__40828;
continue;
} else {
var temp__4657__auto___40829 = cljs.core.seq.call(null,seq__40812_40820);
if(temp__4657__auto___40829){
var seq__40812_40830__$1 = temp__4657__auto___40829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40812_40830__$1)){
var c__4319__auto___40831 = cljs.core.chunk_first.call(null,seq__40812_40830__$1);
var G__40832 = cljs.core.chunk_rest.call(null,seq__40812_40830__$1);
var G__40833 = c__4319__auto___40831;
var G__40834 = cljs.core.count.call(null,c__4319__auto___40831);
var G__40835 = (0);
seq__40812_40820 = G__40832;
chunk__40813_40821 = G__40833;
count__40814_40822 = G__40834;
i__40815_40823 = G__40835;
continue;
} else {
var dep_40836 = cljs.core.first.call(null,seq__40812_40830__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_40836;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_40836));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_40836,(depth + (1)),state);
} else {
}


var G__40837 = cljs.core.next.call(null,seq__40812_40830__$1);
var G__40838 = null;
var G__40839 = (0);
var G__40840 = (0);
seq__40812_40820 = G__40837;
chunk__40813_40821 = G__40838;
count__40814_40822 = G__40839;
i__40815_40823 = G__40840;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__40816){
var vec__40817 = p__40816;
var seq__40818 = cljs.core.seq.call(null,vec__40817);
var first__40819 = cljs.core.first.call(null,seq__40818);
var seq__40818__$1 = cljs.core.next.call(null,seq__40818);
var x = first__40819;
var xs = seq__40818__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__40817,seq__40818,first__40819,seq__40818__$1,x,xs,get_deps__$1){
return (function (p1__40803_SHARP_){
return clojure.set.difference.call(null,p1__40803_SHARP_,x);
});})(vec__40817,seq__40818,first__40819,seq__40818__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__40841 = cljs.core.seq.call(null,provides);
var chunk__40842 = null;
var count__40843 = (0);
var i__40844 = (0);
while(true){
if((i__40844 < count__40843)){
var prov = cljs.core._nth.call(null,chunk__40842,i__40844);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40845_40853 = cljs.core.seq.call(null,requires);
var chunk__40846_40854 = null;
var count__40847_40855 = (0);
var i__40848_40856 = (0);
while(true){
if((i__40848_40856 < count__40847_40855)){
var req_40857 = cljs.core._nth.call(null,chunk__40846_40854,i__40848_40856);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40857,prov);


var G__40858 = seq__40845_40853;
var G__40859 = chunk__40846_40854;
var G__40860 = count__40847_40855;
var G__40861 = (i__40848_40856 + (1));
seq__40845_40853 = G__40858;
chunk__40846_40854 = G__40859;
count__40847_40855 = G__40860;
i__40848_40856 = G__40861;
continue;
} else {
var temp__4657__auto___40862 = cljs.core.seq.call(null,seq__40845_40853);
if(temp__4657__auto___40862){
var seq__40845_40863__$1 = temp__4657__auto___40862;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40845_40863__$1)){
var c__4319__auto___40864 = cljs.core.chunk_first.call(null,seq__40845_40863__$1);
var G__40865 = cljs.core.chunk_rest.call(null,seq__40845_40863__$1);
var G__40866 = c__4319__auto___40864;
var G__40867 = cljs.core.count.call(null,c__4319__auto___40864);
var G__40868 = (0);
seq__40845_40853 = G__40865;
chunk__40846_40854 = G__40866;
count__40847_40855 = G__40867;
i__40848_40856 = G__40868;
continue;
} else {
var req_40869 = cljs.core.first.call(null,seq__40845_40863__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40869,prov);


var G__40870 = cljs.core.next.call(null,seq__40845_40863__$1);
var G__40871 = null;
var G__40872 = (0);
var G__40873 = (0);
seq__40845_40853 = G__40870;
chunk__40846_40854 = G__40871;
count__40847_40855 = G__40872;
i__40848_40856 = G__40873;
continue;
}
} else {
}
}
break;
}


var G__40874 = seq__40841;
var G__40875 = chunk__40842;
var G__40876 = count__40843;
var G__40877 = (i__40844 + (1));
seq__40841 = G__40874;
chunk__40842 = G__40875;
count__40843 = G__40876;
i__40844 = G__40877;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__40841);
if(temp__4657__auto__){
var seq__40841__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40841__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__40841__$1);
var G__40878 = cljs.core.chunk_rest.call(null,seq__40841__$1);
var G__40879 = c__4319__auto__;
var G__40880 = cljs.core.count.call(null,c__4319__auto__);
var G__40881 = (0);
seq__40841 = G__40878;
chunk__40842 = G__40879;
count__40843 = G__40880;
i__40844 = G__40881;
continue;
} else {
var prov = cljs.core.first.call(null,seq__40841__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__40849_40882 = cljs.core.seq.call(null,requires);
var chunk__40850_40883 = null;
var count__40851_40884 = (0);
var i__40852_40885 = (0);
while(true){
if((i__40852_40885 < count__40851_40884)){
var req_40886 = cljs.core._nth.call(null,chunk__40850_40883,i__40852_40885);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40886,prov);


var G__40887 = seq__40849_40882;
var G__40888 = chunk__40850_40883;
var G__40889 = count__40851_40884;
var G__40890 = (i__40852_40885 + (1));
seq__40849_40882 = G__40887;
chunk__40850_40883 = G__40888;
count__40851_40884 = G__40889;
i__40852_40885 = G__40890;
continue;
} else {
var temp__4657__auto___40891__$1 = cljs.core.seq.call(null,seq__40849_40882);
if(temp__4657__auto___40891__$1){
var seq__40849_40892__$1 = temp__4657__auto___40891__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40849_40892__$1)){
var c__4319__auto___40893 = cljs.core.chunk_first.call(null,seq__40849_40892__$1);
var G__40894 = cljs.core.chunk_rest.call(null,seq__40849_40892__$1);
var G__40895 = c__4319__auto___40893;
var G__40896 = cljs.core.count.call(null,c__4319__auto___40893);
var G__40897 = (0);
seq__40849_40882 = G__40894;
chunk__40850_40883 = G__40895;
count__40851_40884 = G__40896;
i__40852_40885 = G__40897;
continue;
} else {
var req_40898 = cljs.core.first.call(null,seq__40849_40892__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_40898,prov);


var G__40899 = cljs.core.next.call(null,seq__40849_40892__$1);
var G__40900 = null;
var G__40901 = (0);
var G__40902 = (0);
seq__40849_40882 = G__40899;
chunk__40850_40883 = G__40900;
count__40851_40884 = G__40901;
i__40852_40885 = G__40902;
continue;
}
} else {
}
}
break;
}


var G__40903 = cljs.core.next.call(null,seq__40841__$1);
var G__40904 = null;
var G__40905 = (0);
var G__40906 = (0);
seq__40841 = G__40903;
chunk__40842 = G__40904;
count__40843 = G__40905;
i__40844 = G__40906;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__40907_40911 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__40908_40912 = null;
var count__40909_40913 = (0);
var i__40910_40914 = (0);
while(true){
if((i__40910_40914 < count__40909_40913)){
var ns_40915 = cljs.core._nth.call(null,chunk__40908_40912,i__40910_40914);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40915);


var G__40916 = seq__40907_40911;
var G__40917 = chunk__40908_40912;
var G__40918 = count__40909_40913;
var G__40919 = (i__40910_40914 + (1));
seq__40907_40911 = G__40916;
chunk__40908_40912 = G__40917;
count__40909_40913 = G__40918;
i__40910_40914 = G__40919;
continue;
} else {
var temp__4657__auto___40920 = cljs.core.seq.call(null,seq__40907_40911);
if(temp__4657__auto___40920){
var seq__40907_40921__$1 = temp__4657__auto___40920;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40907_40921__$1)){
var c__4319__auto___40922 = cljs.core.chunk_first.call(null,seq__40907_40921__$1);
var G__40923 = cljs.core.chunk_rest.call(null,seq__40907_40921__$1);
var G__40924 = c__4319__auto___40922;
var G__40925 = cljs.core.count.call(null,c__4319__auto___40922);
var G__40926 = (0);
seq__40907_40911 = G__40923;
chunk__40908_40912 = G__40924;
count__40909_40913 = G__40925;
i__40910_40914 = G__40926;
continue;
} else {
var ns_40927 = cljs.core.first.call(null,seq__40907_40921__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_40927);


var G__40928 = cljs.core.next.call(null,seq__40907_40921__$1);
var G__40929 = null;
var G__40930 = (0);
var G__40931 = (0);
seq__40907_40911 = G__40928;
chunk__40908_40912 = G__40929;
count__40909_40913 = G__40930;
i__40910_40914 = G__40931;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__40932__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__40932 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__40933__i = 0, G__40933__a = new Array(arguments.length -  0);
while (G__40933__i < G__40933__a.length) {G__40933__a[G__40933__i] = arguments[G__40933__i + 0]; ++G__40933__i;}
  args = new cljs.core.IndexedSeq(G__40933__a,0,null);
} 
return G__40932__delegate.call(this,args);};
G__40932.cljs$lang$maxFixedArity = 0;
G__40932.cljs$lang$applyTo = (function (arglist__40934){
var args = cljs.core.seq(arglist__40934);
return G__40932__delegate(args);
});
G__40932.cljs$core$IFn$_invoke$arity$variadic = G__40932__delegate;
return G__40932;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__40935_SHARP_,p2__40936_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40935_SHARP_)].join('')),p2__40936_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__40937_SHARP_,p2__40938_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__40937_SHARP_)].join(''),p2__40938_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__40939 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__40939.addCallback(((function (G__40939){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__40939))
);

G__40939.addErrback(((function (G__40939){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__40939))
);

return G__40939;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e40940){if((e40940 instanceof Error)){
var e = e40940;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40940;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e40941){if((e40941 instanceof Error)){
var e = e40941;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e40941;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__40942 = cljs.core._EQ_;
var expr__40943 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__40942.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__40943))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__40942.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__40943))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__40942.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__40943))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__40942,expr__40943){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__40942,expr__40943))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__40945,callback){
var map__40946 = p__40945;
var map__40946__$1 = ((((!((map__40946 == null)))?(((((map__40946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__40946.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40946):map__40946);
var file_msg = map__40946__$1;
var request_url = cljs.core.get.call(null,map__40946__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__40946,map__40946__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__40946,map__40946__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__){
return (function (state_40984){
var state_val_40985 = (state_40984[(1)]);
if((state_val_40985 === (7))){
var inst_40980 = (state_40984[(2)]);
var state_40984__$1 = state_40984;
var statearr_40986_41012 = state_40984__$1;
(statearr_40986_41012[(2)] = inst_40980);

(statearr_40986_41012[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (1))){
var state_40984__$1 = state_40984;
var statearr_40987_41013 = state_40984__$1;
(statearr_40987_41013[(2)] = null);

(statearr_40987_41013[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (4))){
var inst_40950 = (state_40984[(7)]);
var inst_40950__$1 = (state_40984[(2)]);
var state_40984__$1 = (function (){var statearr_40988 = state_40984;
(statearr_40988[(7)] = inst_40950__$1);

return statearr_40988;
})();
if(cljs.core.truth_(inst_40950__$1)){
var statearr_40989_41014 = state_40984__$1;
(statearr_40989_41014[(1)] = (5));

} else {
var statearr_40990_41015 = state_40984__$1;
(statearr_40990_41015[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (15))){
var inst_40965 = (state_40984[(8)]);
var inst_40963 = (state_40984[(9)]);
var inst_40967 = inst_40965.call(null,inst_40963);
var state_40984__$1 = state_40984;
var statearr_40991_41016 = state_40984__$1;
(statearr_40991_41016[(2)] = inst_40967);

(statearr_40991_41016[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (13))){
var inst_40974 = (state_40984[(2)]);
var state_40984__$1 = state_40984;
var statearr_40992_41017 = state_40984__$1;
(statearr_40992_41017[(2)] = inst_40974);

(statearr_40992_41017[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (6))){
var state_40984__$1 = state_40984;
var statearr_40993_41018 = state_40984__$1;
(statearr_40993_41018[(2)] = null);

(statearr_40993_41018[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (17))){
var inst_40971 = (state_40984[(2)]);
var state_40984__$1 = state_40984;
var statearr_40994_41019 = state_40984__$1;
(statearr_40994_41019[(2)] = inst_40971);

(statearr_40994_41019[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (3))){
var inst_40982 = (state_40984[(2)]);
var state_40984__$1 = state_40984;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40984__$1,inst_40982);
} else {
if((state_val_40985 === (12))){
var state_40984__$1 = state_40984;
var statearr_40995_41020 = state_40984__$1;
(statearr_40995_41020[(2)] = null);

(statearr_40995_41020[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (2))){
var state_40984__$1 = state_40984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40984__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_40985 === (11))){
var inst_40955 = (state_40984[(10)]);
var inst_40961 = figwheel.client.file_reloading.blocking_load.call(null,inst_40955);
var state_40984__$1 = state_40984;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40984__$1,(14),inst_40961);
} else {
if((state_val_40985 === (9))){
var inst_40955 = (state_40984[(10)]);
var state_40984__$1 = state_40984;
if(cljs.core.truth_(inst_40955)){
var statearr_40996_41021 = state_40984__$1;
(statearr_40996_41021[(1)] = (11));

} else {
var statearr_40997_41022 = state_40984__$1;
(statearr_40997_41022[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (5))){
var inst_40950 = (state_40984[(7)]);
var inst_40956 = (state_40984[(11)]);
var inst_40955 = cljs.core.nth.call(null,inst_40950,(0),null);
var inst_40956__$1 = cljs.core.nth.call(null,inst_40950,(1),null);
var state_40984__$1 = (function (){var statearr_40998 = state_40984;
(statearr_40998[(10)] = inst_40955);

(statearr_40998[(11)] = inst_40956__$1);

return statearr_40998;
})();
if(cljs.core.truth_(inst_40956__$1)){
var statearr_40999_41023 = state_40984__$1;
(statearr_40999_41023[(1)] = (8));

} else {
var statearr_41000_41024 = state_40984__$1;
(statearr_41000_41024[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (14))){
var inst_40955 = (state_40984[(10)]);
var inst_40965 = (state_40984[(8)]);
var inst_40963 = (state_40984[(2)]);
var inst_40964 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_40965__$1 = cljs.core.get.call(null,inst_40964,inst_40955);
var state_40984__$1 = (function (){var statearr_41001 = state_40984;
(statearr_41001[(8)] = inst_40965__$1);

(statearr_41001[(9)] = inst_40963);

return statearr_41001;
})();
if(cljs.core.truth_(inst_40965__$1)){
var statearr_41002_41025 = state_40984__$1;
(statearr_41002_41025[(1)] = (15));

} else {
var statearr_41003_41026 = state_40984__$1;
(statearr_41003_41026[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (16))){
var inst_40963 = (state_40984[(9)]);
var inst_40969 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_40963);
var state_40984__$1 = state_40984;
var statearr_41004_41027 = state_40984__$1;
(statearr_41004_41027[(2)] = inst_40969);

(statearr_41004_41027[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (10))){
var inst_40976 = (state_40984[(2)]);
var state_40984__$1 = (function (){var statearr_41005 = state_40984;
(statearr_41005[(12)] = inst_40976);

return statearr_41005;
})();
var statearr_41006_41028 = state_40984__$1;
(statearr_41006_41028[(2)] = null);

(statearr_41006_41028[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40985 === (8))){
var inst_40956 = (state_40984[(11)]);
var inst_40958 = eval(inst_40956);
var state_40984__$1 = state_40984;
var statearr_41007_41029 = state_40984__$1;
(statearr_41007_41029[(2)] = inst_40958);

(statearr_41007_41029[(1)] = (10));


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
});})(c__26017__auto__))
;
return ((function (switch__25929__auto__,c__26017__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__25930__auto__ = null;
var figwheel$client$file_reloading$state_machine__25930__auto____0 = (function (){
var statearr_41008 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41008[(0)] = figwheel$client$file_reloading$state_machine__25930__auto__);

(statearr_41008[(1)] = (1));

return statearr_41008;
});
var figwheel$client$file_reloading$state_machine__25930__auto____1 = (function (state_40984){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40984);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e41009){if((e41009 instanceof Object)){
var ex__25933__auto__ = e41009;
var statearr_41010_41030 = state_40984;
(statearr_41010_41030[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40984);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41009;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41031 = state_40984;
state_40984 = G__41031;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25930__auto__ = function(state_40984){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25930__auto____1.call(this,state_40984);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25930__auto____0;
figwheel$client$file_reloading$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25930__auto____1;
return figwheel$client$file_reloading$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_41011 = f__26018__auto__.call(null);
(statearr_41011[(6)] = c__26017__auto__);

return statearr_41011;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__))
);

return c__26017__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__41033 = arguments.length;
switch (G__41033) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__41035,callback){
var map__41036 = p__41035;
var map__41036__$1 = ((((!((map__41036 == null)))?(((((map__41036.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41036.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41036):map__41036);
var file_msg = map__41036__$1;
var namespace = cljs.core.get.call(null,map__41036__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__41036,map__41036__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__41036,map__41036__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__41038){
var map__41039 = p__41038;
var map__41039__$1 = ((((!((map__41039 == null)))?(((((map__41039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41039):map__41039);
var file_msg = map__41039__$1;
var namespace = cljs.core.get.call(null,map__41039__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__41041){
var map__41042 = p__41041;
var map__41042__$1 = ((((!((map__41042 == null)))?(((((map__41042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41042):map__41042);
var file_msg = map__41042__$1;
var namespace = cljs.core.get.call(null,map__41042__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__41044,callback){
var map__41045 = p__41044;
var map__41045__$1 = ((((!((map__41045 == null)))?(((((map__41045.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41045.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41045):map__41045);
var file_msg = map__41045__$1;
var request_url = cljs.core.get.call(null,map__41045__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__41045__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__26017__auto___41095 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___41095,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___41095,out){
return (function (state_41080){
var state_val_41081 = (state_41080[(1)]);
if((state_val_41081 === (1))){
var inst_41054 = cljs.core.seq.call(null,files);
var inst_41055 = cljs.core.first.call(null,inst_41054);
var inst_41056 = cljs.core.next.call(null,inst_41054);
var inst_41057 = files;
var state_41080__$1 = (function (){var statearr_41082 = state_41080;
(statearr_41082[(7)] = inst_41056);

(statearr_41082[(8)] = inst_41057);

(statearr_41082[(9)] = inst_41055);

return statearr_41082;
})();
var statearr_41083_41096 = state_41080__$1;
(statearr_41083_41096[(2)] = null);

(statearr_41083_41096[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (2))){
var inst_41057 = (state_41080[(8)]);
var inst_41063 = (state_41080[(10)]);
var inst_41062 = cljs.core.seq.call(null,inst_41057);
var inst_41063__$1 = cljs.core.first.call(null,inst_41062);
var inst_41064 = cljs.core.next.call(null,inst_41062);
var inst_41065 = (inst_41063__$1 == null);
var inst_41066 = cljs.core.not.call(null,inst_41065);
var state_41080__$1 = (function (){var statearr_41084 = state_41080;
(statearr_41084[(10)] = inst_41063__$1);

(statearr_41084[(11)] = inst_41064);

return statearr_41084;
})();
if(inst_41066){
var statearr_41085_41097 = state_41080__$1;
(statearr_41085_41097[(1)] = (4));

} else {
var statearr_41086_41098 = state_41080__$1;
(statearr_41086_41098[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (3))){
var inst_41078 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41080__$1,inst_41078);
} else {
if((state_val_41081 === (4))){
var inst_41063 = (state_41080[(10)]);
var inst_41068 = figwheel.client.file_reloading.reload_js_file.call(null,inst_41063);
var state_41080__$1 = state_41080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41080__$1,(7),inst_41068);
} else {
if((state_val_41081 === (5))){
var inst_41074 = cljs.core.async.close_BANG_.call(null,out);
var state_41080__$1 = state_41080;
var statearr_41087_41099 = state_41080__$1;
(statearr_41087_41099[(2)] = inst_41074);

(statearr_41087_41099[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (6))){
var inst_41076 = (state_41080[(2)]);
var state_41080__$1 = state_41080;
var statearr_41088_41100 = state_41080__$1;
(statearr_41088_41100[(2)] = inst_41076);

(statearr_41088_41100[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41081 === (7))){
var inst_41064 = (state_41080[(11)]);
var inst_41070 = (state_41080[(2)]);
var inst_41071 = cljs.core.async.put_BANG_.call(null,out,inst_41070);
var inst_41057 = inst_41064;
var state_41080__$1 = (function (){var statearr_41089 = state_41080;
(statearr_41089[(12)] = inst_41071);

(statearr_41089[(8)] = inst_41057);

return statearr_41089;
})();
var statearr_41090_41101 = state_41080__$1;
(statearr_41090_41101[(2)] = null);

(statearr_41090_41101[(1)] = (2));


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
});})(c__26017__auto___41095,out))
;
return ((function (switch__25929__auto__,c__26017__auto___41095,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____0 = (function (){
var statearr_41091 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41091[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__);

(statearr_41091[(1)] = (1));

return statearr_41091;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____1 = (function (state_41080){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_41080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e41092){if((e41092 instanceof Object)){
var ex__25933__auto__ = e41092;
var statearr_41093_41102 = state_41080;
(statearr_41093_41102[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41092;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41103 = state_41080;
state_41080 = G__41103;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__ = function(state_41080){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____1.call(this,state_41080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___41095,out))
})();
var state__26019__auto__ = (function (){var statearr_41094 = f__26018__auto__.call(null);
(statearr_41094[(6)] = c__26017__auto___41095);

return statearr_41094;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___41095,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__41104,opts){
var map__41105 = p__41104;
var map__41105__$1 = ((((!((map__41105 == null)))?(((((map__41105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41105):map__41105);
var eval_body = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__41105__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e41107){var e = e41107;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__41108_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41108_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__41109){
var vec__41110 = p__41109;
var k = cljs.core.nth.call(null,vec__41110,(0),null);
var v = cljs.core.nth.call(null,vec__41110,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__41113){
var vec__41114 = p__41113;
var k = cljs.core.nth.call(null,vec__41114,(0),null);
var v = cljs.core.nth.call(null,vec__41114,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__41120,p__41121){
var map__41122 = p__41120;
var map__41122__$1 = ((((!((map__41122 == null)))?(((((map__41122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41122):map__41122);
var opts = map__41122__$1;
var before_jsload = cljs.core.get.call(null,map__41122__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__41122__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__41122__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__41123 = p__41121;
var map__41123__$1 = ((((!((map__41123 == null)))?(((((map__41123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41123):map__41123);
var msg = map__41123__$1;
var files = cljs.core.get.call(null,map__41123__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__41123__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__41123__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_41277){
var state_val_41278 = (state_41277[(1)]);
if((state_val_41278 === (7))){
var inst_41138 = (state_41277[(7)]);
var inst_41139 = (state_41277[(8)]);
var inst_41140 = (state_41277[(9)]);
var inst_41137 = (state_41277[(10)]);
var inst_41145 = cljs.core._nth.call(null,inst_41138,inst_41140);
var inst_41146 = figwheel.client.file_reloading.eval_body.call(null,inst_41145,opts);
var inst_41147 = (inst_41140 + (1));
var tmp41279 = inst_41138;
var tmp41280 = inst_41139;
var tmp41281 = inst_41137;
var inst_41137__$1 = tmp41281;
var inst_41138__$1 = tmp41279;
var inst_41139__$1 = tmp41280;
var inst_41140__$1 = inst_41147;
var state_41277__$1 = (function (){var statearr_41282 = state_41277;
(statearr_41282[(7)] = inst_41138__$1);

(statearr_41282[(8)] = inst_41139__$1);

(statearr_41282[(9)] = inst_41140__$1);

(statearr_41282[(11)] = inst_41146);

(statearr_41282[(10)] = inst_41137__$1);

return statearr_41282;
})();
var statearr_41283_41366 = state_41277__$1;
(statearr_41283_41366[(2)] = null);

(statearr_41283_41366[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (20))){
var inst_41180 = (state_41277[(12)]);
var inst_41188 = figwheel.client.file_reloading.sort_files.call(null,inst_41180);
var state_41277__$1 = state_41277;
var statearr_41284_41367 = state_41277__$1;
(statearr_41284_41367[(2)] = inst_41188);

(statearr_41284_41367[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (27))){
var state_41277__$1 = state_41277;
var statearr_41285_41368 = state_41277__$1;
(statearr_41285_41368[(2)] = null);

(statearr_41285_41368[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (1))){
var inst_41129 = (state_41277[(13)]);
var inst_41126 = before_jsload.call(null,files);
var inst_41127 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_41128 = (function (){return ((function (inst_41129,inst_41126,inst_41127,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41117_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41117_SHARP_);
});
;})(inst_41129,inst_41126,inst_41127,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41129__$1 = cljs.core.filter.call(null,inst_41128,files);
var inst_41130 = cljs.core.not_empty.call(null,inst_41129__$1);
var state_41277__$1 = (function (){var statearr_41286 = state_41277;
(statearr_41286[(13)] = inst_41129__$1);

(statearr_41286[(14)] = inst_41126);

(statearr_41286[(15)] = inst_41127);

return statearr_41286;
})();
if(cljs.core.truth_(inst_41130)){
var statearr_41287_41369 = state_41277__$1;
(statearr_41287_41369[(1)] = (2));

} else {
var statearr_41288_41370 = state_41277__$1;
(statearr_41288_41370[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (24))){
var state_41277__$1 = state_41277;
var statearr_41289_41371 = state_41277__$1;
(statearr_41289_41371[(2)] = null);

(statearr_41289_41371[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (39))){
var inst_41230 = (state_41277[(16)]);
var state_41277__$1 = state_41277;
var statearr_41290_41372 = state_41277__$1;
(statearr_41290_41372[(2)] = inst_41230);

(statearr_41290_41372[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (46))){
var inst_41272 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
var statearr_41291_41373 = state_41277__$1;
(statearr_41291_41373[(2)] = inst_41272);

(statearr_41291_41373[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (4))){
var inst_41174 = (state_41277[(2)]);
var inst_41175 = cljs.core.List.EMPTY;
var inst_41176 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_41175);
var inst_41177 = (function (){return ((function (inst_41174,inst_41175,inst_41176,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41118_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__41118_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__41118_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__41118_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_41174,inst_41175,inst_41176,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41178 = cljs.core.filter.call(null,inst_41177,files);
var inst_41179 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_41180 = cljs.core.concat.call(null,inst_41178,inst_41179);
var state_41277__$1 = (function (){var statearr_41292 = state_41277;
(statearr_41292[(17)] = inst_41176);

(statearr_41292[(18)] = inst_41174);

(statearr_41292[(12)] = inst_41180);

return statearr_41292;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_41293_41374 = state_41277__$1;
(statearr_41293_41374[(1)] = (16));

} else {
var statearr_41294_41375 = state_41277__$1;
(statearr_41294_41375[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (15))){
var inst_41164 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
var statearr_41295_41376 = state_41277__$1;
(statearr_41295_41376[(2)] = inst_41164);

(statearr_41295_41376[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (21))){
var inst_41190 = (state_41277[(19)]);
var inst_41190__$1 = (state_41277[(2)]);
var inst_41191 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_41190__$1);
var state_41277__$1 = (function (){var statearr_41296 = state_41277;
(statearr_41296[(19)] = inst_41190__$1);

return statearr_41296;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_41277__$1,(22),inst_41191);
} else {
if((state_val_41278 === (31))){
var inst_41275 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_41277__$1,inst_41275);
} else {
if((state_val_41278 === (32))){
var inst_41230 = (state_41277[(16)]);
var inst_41235 = inst_41230.cljs$lang$protocol_mask$partition0$;
var inst_41236 = (inst_41235 & (64));
var inst_41237 = inst_41230.cljs$core$ISeq$;
var inst_41238 = (cljs.core.PROTOCOL_SENTINEL === inst_41237);
var inst_41239 = ((inst_41236) || (inst_41238));
var state_41277__$1 = state_41277;
if(cljs.core.truth_(inst_41239)){
var statearr_41297_41377 = state_41277__$1;
(statearr_41297_41377[(1)] = (35));

} else {
var statearr_41298_41378 = state_41277__$1;
(statearr_41298_41378[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (40))){
var inst_41252 = (state_41277[(20)]);
var inst_41251 = (state_41277[(2)]);
var inst_41252__$1 = cljs.core.get.call(null,inst_41251,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_41253 = cljs.core.get.call(null,inst_41251,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_41254 = cljs.core.not_empty.call(null,inst_41252__$1);
var state_41277__$1 = (function (){var statearr_41299 = state_41277;
(statearr_41299[(20)] = inst_41252__$1);

(statearr_41299[(21)] = inst_41253);

return statearr_41299;
})();
if(cljs.core.truth_(inst_41254)){
var statearr_41300_41379 = state_41277__$1;
(statearr_41300_41379[(1)] = (41));

} else {
var statearr_41301_41380 = state_41277__$1;
(statearr_41301_41380[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (33))){
var state_41277__$1 = state_41277;
var statearr_41302_41381 = state_41277__$1;
(statearr_41302_41381[(2)] = false);

(statearr_41302_41381[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (13))){
var inst_41150 = (state_41277[(22)]);
var inst_41154 = cljs.core.chunk_first.call(null,inst_41150);
var inst_41155 = cljs.core.chunk_rest.call(null,inst_41150);
var inst_41156 = cljs.core.count.call(null,inst_41154);
var inst_41137 = inst_41155;
var inst_41138 = inst_41154;
var inst_41139 = inst_41156;
var inst_41140 = (0);
var state_41277__$1 = (function (){var statearr_41303 = state_41277;
(statearr_41303[(7)] = inst_41138);

(statearr_41303[(8)] = inst_41139);

(statearr_41303[(9)] = inst_41140);

(statearr_41303[(10)] = inst_41137);

return statearr_41303;
})();
var statearr_41304_41382 = state_41277__$1;
(statearr_41304_41382[(2)] = null);

(statearr_41304_41382[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (22))){
var inst_41194 = (state_41277[(23)]);
var inst_41190 = (state_41277[(19)]);
var inst_41198 = (state_41277[(24)]);
var inst_41193 = (state_41277[(25)]);
var inst_41193__$1 = (state_41277[(2)]);
var inst_41194__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41193__$1);
var inst_41195 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193__$1;
var res = inst_41194__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_41194,inst_41190,inst_41198,inst_41193,inst_41193__$1,inst_41194__$1,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__41119_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__41119_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_41194,inst_41190,inst_41198,inst_41193,inst_41193__$1,inst_41194__$1,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41196 = cljs.core.filter.call(null,inst_41195,inst_41193__$1);
var inst_41197 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_41198__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_41197);
var inst_41199 = cljs.core.not_empty.call(null,inst_41198__$1);
var state_41277__$1 = (function (){var statearr_41305 = state_41277;
(statearr_41305[(23)] = inst_41194__$1);

(statearr_41305[(26)] = inst_41196);

(statearr_41305[(24)] = inst_41198__$1);

(statearr_41305[(25)] = inst_41193__$1);

return statearr_41305;
})();
if(cljs.core.truth_(inst_41199)){
var statearr_41306_41383 = state_41277__$1;
(statearr_41306_41383[(1)] = (23));

} else {
var statearr_41307_41384 = state_41277__$1;
(statearr_41307_41384[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (36))){
var state_41277__$1 = state_41277;
var statearr_41308_41385 = state_41277__$1;
(statearr_41308_41385[(2)] = false);

(statearr_41308_41385[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (41))){
var inst_41252 = (state_41277[(20)]);
var inst_41256 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_41257 = cljs.core.map.call(null,inst_41256,inst_41252);
var inst_41258 = cljs.core.pr_str.call(null,inst_41257);
var inst_41259 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41258)].join('');
var inst_41260 = figwheel.client.utils.log.call(null,inst_41259);
var state_41277__$1 = state_41277;
var statearr_41309_41386 = state_41277__$1;
(statearr_41309_41386[(2)] = inst_41260);

(statearr_41309_41386[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (43))){
var inst_41253 = (state_41277[(21)]);
var inst_41263 = (state_41277[(2)]);
var inst_41264 = cljs.core.not_empty.call(null,inst_41253);
var state_41277__$1 = (function (){var statearr_41310 = state_41277;
(statearr_41310[(27)] = inst_41263);

return statearr_41310;
})();
if(cljs.core.truth_(inst_41264)){
var statearr_41311_41387 = state_41277__$1;
(statearr_41311_41387[(1)] = (44));

} else {
var statearr_41312_41388 = state_41277__$1;
(statearr_41312_41388[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (29))){
var inst_41194 = (state_41277[(23)]);
var inst_41196 = (state_41277[(26)]);
var inst_41190 = (state_41277[(19)]);
var inst_41198 = (state_41277[(24)]);
var inst_41193 = (state_41277[(25)]);
var inst_41230 = (state_41277[(16)]);
var inst_41226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_41229 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193;
var res = inst_41194;
var files_not_loaded = inst_41196;
var dependencies_that_loaded = inst_41198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41230,inst_41226,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41228){
var map__41313 = p__41228;
var map__41313__$1 = ((((!((map__41313 == null)))?(((((map__41313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41313):map__41313);
var namespace = cljs.core.get.call(null,map__41313__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41230,inst_41226,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41230__$1 = cljs.core.group_by.call(null,inst_41229,inst_41196);
var inst_41232 = (inst_41230__$1 == null);
var inst_41233 = cljs.core.not.call(null,inst_41232);
var state_41277__$1 = (function (){var statearr_41315 = state_41277;
(statearr_41315[(16)] = inst_41230__$1);

(statearr_41315[(28)] = inst_41226);

return statearr_41315;
})();
if(inst_41233){
var statearr_41316_41389 = state_41277__$1;
(statearr_41316_41389[(1)] = (32));

} else {
var statearr_41317_41390 = state_41277__$1;
(statearr_41317_41390[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (44))){
var inst_41253 = (state_41277[(21)]);
var inst_41266 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_41253);
var inst_41267 = cljs.core.pr_str.call(null,inst_41266);
var inst_41268 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_41267)].join('');
var inst_41269 = figwheel.client.utils.log.call(null,inst_41268);
var state_41277__$1 = state_41277;
var statearr_41318_41391 = state_41277__$1;
(statearr_41318_41391[(2)] = inst_41269);

(statearr_41318_41391[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (6))){
var inst_41171 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
var statearr_41319_41392 = state_41277__$1;
(statearr_41319_41392[(2)] = inst_41171);

(statearr_41319_41392[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (28))){
var inst_41196 = (state_41277[(26)]);
var inst_41223 = (state_41277[(2)]);
var inst_41224 = cljs.core.not_empty.call(null,inst_41196);
var state_41277__$1 = (function (){var statearr_41320 = state_41277;
(statearr_41320[(29)] = inst_41223);

return statearr_41320;
})();
if(cljs.core.truth_(inst_41224)){
var statearr_41321_41393 = state_41277__$1;
(statearr_41321_41393[(1)] = (29));

} else {
var statearr_41322_41394 = state_41277__$1;
(statearr_41322_41394[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (25))){
var inst_41194 = (state_41277[(23)]);
var inst_41210 = (state_41277[(2)]);
var inst_41211 = cljs.core.not_empty.call(null,inst_41194);
var state_41277__$1 = (function (){var statearr_41323 = state_41277;
(statearr_41323[(30)] = inst_41210);

return statearr_41323;
})();
if(cljs.core.truth_(inst_41211)){
var statearr_41324_41395 = state_41277__$1;
(statearr_41324_41395[(1)] = (26));

} else {
var statearr_41325_41396 = state_41277__$1;
(statearr_41325_41396[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (34))){
var inst_41246 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
if(cljs.core.truth_(inst_41246)){
var statearr_41326_41397 = state_41277__$1;
(statearr_41326_41397[(1)] = (38));

} else {
var statearr_41327_41398 = state_41277__$1;
(statearr_41327_41398[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (17))){
var state_41277__$1 = state_41277;
var statearr_41328_41399 = state_41277__$1;
(statearr_41328_41399[(2)] = recompile_dependents);

(statearr_41328_41399[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (3))){
var state_41277__$1 = state_41277;
var statearr_41329_41400 = state_41277__$1;
(statearr_41329_41400[(2)] = null);

(statearr_41329_41400[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (12))){
var inst_41167 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
var statearr_41330_41401 = state_41277__$1;
(statearr_41330_41401[(2)] = inst_41167);

(statearr_41330_41401[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (2))){
var inst_41129 = (state_41277[(13)]);
var inst_41136 = cljs.core.seq.call(null,inst_41129);
var inst_41137 = inst_41136;
var inst_41138 = null;
var inst_41139 = (0);
var inst_41140 = (0);
var state_41277__$1 = (function (){var statearr_41331 = state_41277;
(statearr_41331[(7)] = inst_41138);

(statearr_41331[(8)] = inst_41139);

(statearr_41331[(9)] = inst_41140);

(statearr_41331[(10)] = inst_41137);

return statearr_41331;
})();
var statearr_41332_41402 = state_41277__$1;
(statearr_41332_41402[(2)] = null);

(statearr_41332_41402[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (23))){
var inst_41194 = (state_41277[(23)]);
var inst_41196 = (state_41277[(26)]);
var inst_41190 = (state_41277[(19)]);
var inst_41198 = (state_41277[(24)]);
var inst_41193 = (state_41277[(25)]);
var inst_41201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_41203 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193;
var res = inst_41194;
var files_not_loaded = inst_41196;
var dependencies_that_loaded = inst_41198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41201,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41202){
var map__41333 = p__41202;
var map__41333__$1 = ((((!((map__41333 == null)))?(((((map__41333.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41333.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41333):map__41333);
var request_url = cljs.core.get.call(null,map__41333__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41201,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41204 = cljs.core.reverse.call(null,inst_41198);
var inst_41205 = cljs.core.map.call(null,inst_41203,inst_41204);
var inst_41206 = cljs.core.pr_str.call(null,inst_41205);
var inst_41207 = figwheel.client.utils.log.call(null,inst_41206);
var state_41277__$1 = (function (){var statearr_41335 = state_41277;
(statearr_41335[(31)] = inst_41201);

return statearr_41335;
})();
var statearr_41336_41403 = state_41277__$1;
(statearr_41336_41403[(2)] = inst_41207);

(statearr_41336_41403[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (35))){
var state_41277__$1 = state_41277;
var statearr_41337_41404 = state_41277__$1;
(statearr_41337_41404[(2)] = true);

(statearr_41337_41404[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (19))){
var inst_41180 = (state_41277[(12)]);
var inst_41186 = figwheel.client.file_reloading.expand_files.call(null,inst_41180);
var state_41277__$1 = state_41277;
var statearr_41338_41405 = state_41277__$1;
(statearr_41338_41405[(2)] = inst_41186);

(statearr_41338_41405[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (11))){
var state_41277__$1 = state_41277;
var statearr_41339_41406 = state_41277__$1;
(statearr_41339_41406[(2)] = null);

(statearr_41339_41406[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (9))){
var inst_41169 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
var statearr_41340_41407 = state_41277__$1;
(statearr_41340_41407[(2)] = inst_41169);

(statearr_41340_41407[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (5))){
var inst_41139 = (state_41277[(8)]);
var inst_41140 = (state_41277[(9)]);
var inst_41142 = (inst_41140 < inst_41139);
var inst_41143 = inst_41142;
var state_41277__$1 = state_41277;
if(cljs.core.truth_(inst_41143)){
var statearr_41341_41408 = state_41277__$1;
(statearr_41341_41408[(1)] = (7));

} else {
var statearr_41342_41409 = state_41277__$1;
(statearr_41342_41409[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (14))){
var inst_41150 = (state_41277[(22)]);
var inst_41159 = cljs.core.first.call(null,inst_41150);
var inst_41160 = figwheel.client.file_reloading.eval_body.call(null,inst_41159,opts);
var inst_41161 = cljs.core.next.call(null,inst_41150);
var inst_41137 = inst_41161;
var inst_41138 = null;
var inst_41139 = (0);
var inst_41140 = (0);
var state_41277__$1 = (function (){var statearr_41343 = state_41277;
(statearr_41343[(32)] = inst_41160);

(statearr_41343[(7)] = inst_41138);

(statearr_41343[(8)] = inst_41139);

(statearr_41343[(9)] = inst_41140);

(statearr_41343[(10)] = inst_41137);

return statearr_41343;
})();
var statearr_41344_41410 = state_41277__$1;
(statearr_41344_41410[(2)] = null);

(statearr_41344_41410[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (45))){
var state_41277__$1 = state_41277;
var statearr_41345_41411 = state_41277__$1;
(statearr_41345_41411[(2)] = null);

(statearr_41345_41411[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (26))){
var inst_41194 = (state_41277[(23)]);
var inst_41196 = (state_41277[(26)]);
var inst_41190 = (state_41277[(19)]);
var inst_41198 = (state_41277[(24)]);
var inst_41193 = (state_41277[(25)]);
var inst_41213 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_41215 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193;
var res = inst_41194;
var files_not_loaded = inst_41196;
var dependencies_that_loaded = inst_41198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41213,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__41214){
var map__41346 = p__41214;
var map__41346__$1 = ((((!((map__41346 == null)))?(((((map__41346.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41346.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41346):map__41346);
var namespace = cljs.core.get.call(null,map__41346__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__41346__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41213,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41216 = cljs.core.map.call(null,inst_41215,inst_41194);
var inst_41217 = cljs.core.pr_str.call(null,inst_41216);
var inst_41218 = figwheel.client.utils.log.call(null,inst_41217);
var inst_41219 = (function (){var all_files = inst_41190;
var res_SINGLEQUOTE_ = inst_41193;
var res = inst_41194;
var files_not_loaded = inst_41196;
var dependencies_that_loaded = inst_41198;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41213,inst_41215,inst_41216,inst_41217,inst_41218,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_41194,inst_41196,inst_41190,inst_41198,inst_41193,inst_41213,inst_41215,inst_41216,inst_41217,inst_41218,state_val_41278,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_41220 = setTimeout(inst_41219,(10));
var state_41277__$1 = (function (){var statearr_41348 = state_41277;
(statearr_41348[(33)] = inst_41213);

(statearr_41348[(34)] = inst_41218);

return statearr_41348;
})();
var statearr_41349_41412 = state_41277__$1;
(statearr_41349_41412[(2)] = inst_41220);

(statearr_41349_41412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (16))){
var state_41277__$1 = state_41277;
var statearr_41350_41413 = state_41277__$1;
(statearr_41350_41413[(2)] = reload_dependents);

(statearr_41350_41413[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (38))){
var inst_41230 = (state_41277[(16)]);
var inst_41248 = cljs.core.apply.call(null,cljs.core.hash_map,inst_41230);
var state_41277__$1 = state_41277;
var statearr_41351_41414 = state_41277__$1;
(statearr_41351_41414[(2)] = inst_41248);

(statearr_41351_41414[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (30))){
var state_41277__$1 = state_41277;
var statearr_41352_41415 = state_41277__$1;
(statearr_41352_41415[(2)] = null);

(statearr_41352_41415[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (10))){
var inst_41150 = (state_41277[(22)]);
var inst_41152 = cljs.core.chunked_seq_QMARK_.call(null,inst_41150);
var state_41277__$1 = state_41277;
if(inst_41152){
var statearr_41353_41416 = state_41277__$1;
(statearr_41353_41416[(1)] = (13));

} else {
var statearr_41354_41417 = state_41277__$1;
(statearr_41354_41417[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (18))){
var inst_41184 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
if(cljs.core.truth_(inst_41184)){
var statearr_41355_41418 = state_41277__$1;
(statearr_41355_41418[(1)] = (19));

} else {
var statearr_41356_41419 = state_41277__$1;
(statearr_41356_41419[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (42))){
var state_41277__$1 = state_41277;
var statearr_41357_41420 = state_41277__$1;
(statearr_41357_41420[(2)] = null);

(statearr_41357_41420[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (37))){
var inst_41243 = (state_41277[(2)]);
var state_41277__$1 = state_41277;
var statearr_41358_41421 = state_41277__$1;
(statearr_41358_41421[(2)] = inst_41243);

(statearr_41358_41421[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_41278 === (8))){
var inst_41150 = (state_41277[(22)]);
var inst_41137 = (state_41277[(10)]);
var inst_41150__$1 = cljs.core.seq.call(null,inst_41137);
var state_41277__$1 = (function (){var statearr_41359 = state_41277;
(statearr_41359[(22)] = inst_41150__$1);

return statearr_41359;
})();
if(inst_41150__$1){
var statearr_41360_41422 = state_41277__$1;
(statearr_41360_41422[(1)] = (10));

} else {
var statearr_41361_41423 = state_41277__$1;
(statearr_41361_41423[(1)] = (11));

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
});})(c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25929__auto__,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____0 = (function (){
var statearr_41362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_41362[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__);

(statearr_41362[(1)] = (1));

return statearr_41362;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____1 = (function (state_41277){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_41277);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e41363){if((e41363 instanceof Object)){
var ex__25933__auto__ = e41363;
var statearr_41364_41424 = state_41277;
(statearr_41364_41424[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_41277);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e41363;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__41425 = state_41277;
state_41277 = G__41425;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__ = function(state_41277){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____1.call(this,state_41277);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26019__auto__ = (function (){var statearr_41365 = f__26018__auto__.call(null);
(statearr_41365[(6)] = c__26017__auto__);

return statearr_41365;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__,map__41122,map__41122__$1,opts,before_jsload,on_jsload,reload_dependents,map__41123,map__41123__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26017__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__41428,link){
var map__41429 = p__41428;
var map__41429__$1 = ((((!((map__41429 == null)))?(((((map__41429.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41429.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41429):map__41429);
var file = cljs.core.get.call(null,map__41429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__41429,map__41429__$1,file){
return (function (p1__41426_SHARP_,p2__41427_SHARP_){
if(cljs.core._EQ_.call(null,p1__41426_SHARP_,p2__41427_SHARP_)){
return p1__41426_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__41429,map__41429__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__41432){
var map__41433 = p__41432;
var map__41433__$1 = ((((!((map__41433 == null)))?(((((map__41433.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41433.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41433):map__41433);
var match_length = cljs.core.get.call(null,map__41433__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__41433__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__41431_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__41431_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__41435_SHARP_,p2__41436_SHARP_){
return cljs.core.assoc.call(null,p1__41435_SHARP_,cljs.core.get.call(null,p2__41436_SHARP_,key),p2__41436_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_41437 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_41437);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_41437);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__41438,p__41439){
var map__41440 = p__41438;
var map__41440__$1 = ((((!((map__41440 == null)))?(((((map__41440.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41440.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41440):map__41440);
var on_cssload = cljs.core.get.call(null,map__41440__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__41441 = p__41439;
var map__41441__$1 = ((((!((map__41441 == null)))?(((((map__41441.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41441.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41441):map__41441);
var files_msg = map__41441__$1;
var files = cljs.core.get.call(null,map__41441__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1547392810726
