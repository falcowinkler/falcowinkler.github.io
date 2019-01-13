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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__28112_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__28112_SHARP_));
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
var seq__28113 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__28114 = null;
var count__28115 = (0);
var i__28116 = (0);
while(true){
if((i__28116 < count__28115)){
var n = cljs.core._nth.call(null,chunk__28114,i__28116);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28117 = seq__28113;
var G__28118 = chunk__28114;
var G__28119 = count__28115;
var G__28120 = (i__28116 + (1));
seq__28113 = G__28117;
chunk__28114 = G__28118;
count__28115 = G__28119;
i__28116 = G__28120;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28113);
if(temp__4657__auto__){
var seq__28113__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28113__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28113__$1);
var G__28121 = cljs.core.chunk_rest.call(null,seq__28113__$1);
var G__28122 = c__4319__auto__;
var G__28123 = cljs.core.count.call(null,c__4319__auto__);
var G__28124 = (0);
seq__28113 = G__28121;
chunk__28114 = G__28122;
count__28115 = G__28123;
i__28116 = G__28124;
continue;
} else {
var n = cljs.core.first.call(null,seq__28113__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__28125 = cljs.core.next.call(null,seq__28113__$1);
var G__28126 = null;
var G__28127 = (0);
var G__28128 = (0);
seq__28113 = G__28125;
chunk__28114 = G__28126;
count__28115 = G__28127;
i__28116 = G__28128;
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
return cljs.core.some.call(null,(function (p__28129){
var vec__28130 = p__28129;
var _ = cljs.core.nth.call(null,vec__28130,(0),null);
var v = cljs.core.nth.call(null,vec__28130,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__28133){
var vec__28134 = p__28133;
var k = cljs.core.nth.call(null,vec__28134,(0),null);
var v = cljs.core.nth.call(null,vec__28134,(1),null);
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

var seq__28146_28154 = cljs.core.seq.call(null,deps);
var chunk__28147_28155 = null;
var count__28148_28156 = (0);
var i__28149_28157 = (0);
while(true){
if((i__28149_28157 < count__28148_28156)){
var dep_28158 = cljs.core._nth.call(null,chunk__28147_28155,i__28149_28157);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28158;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28158));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28158,(depth + (1)),state);
} else {
}


var G__28159 = seq__28146_28154;
var G__28160 = chunk__28147_28155;
var G__28161 = count__28148_28156;
var G__28162 = (i__28149_28157 + (1));
seq__28146_28154 = G__28159;
chunk__28147_28155 = G__28160;
count__28148_28156 = G__28161;
i__28149_28157 = G__28162;
continue;
} else {
var temp__4657__auto___28163 = cljs.core.seq.call(null,seq__28146_28154);
if(temp__4657__auto___28163){
var seq__28146_28164__$1 = temp__4657__auto___28163;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28146_28164__$1)){
var c__4319__auto___28165 = cljs.core.chunk_first.call(null,seq__28146_28164__$1);
var G__28166 = cljs.core.chunk_rest.call(null,seq__28146_28164__$1);
var G__28167 = c__4319__auto___28165;
var G__28168 = cljs.core.count.call(null,c__4319__auto___28165);
var G__28169 = (0);
seq__28146_28154 = G__28166;
chunk__28147_28155 = G__28167;
count__28148_28156 = G__28168;
i__28149_28157 = G__28169;
continue;
} else {
var dep_28170 = cljs.core.first.call(null,seq__28146_28164__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_28170;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_28170));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_28170,(depth + (1)),state);
} else {
}


var G__28171 = cljs.core.next.call(null,seq__28146_28164__$1);
var G__28172 = null;
var G__28173 = (0);
var G__28174 = (0);
seq__28146_28154 = G__28171;
chunk__28147_28155 = G__28172;
count__28148_28156 = G__28173;
i__28149_28157 = G__28174;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__28150){
var vec__28151 = p__28150;
var seq__28152 = cljs.core.seq.call(null,vec__28151);
var first__28153 = cljs.core.first.call(null,seq__28152);
var seq__28152__$1 = cljs.core.next.call(null,seq__28152);
var x = first__28153;
var xs = seq__28152__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__28151,seq__28152,first__28153,seq__28152__$1,x,xs,get_deps__$1){
return (function (p1__28137_SHARP_){
return clojure.set.difference.call(null,p1__28137_SHARP_,x);
});})(vec__28151,seq__28152,first__28153,seq__28152__$1,x,xs,get_deps__$1))
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
var seq__28175 = cljs.core.seq.call(null,provides);
var chunk__28176 = null;
var count__28177 = (0);
var i__28178 = (0);
while(true){
if((i__28178 < count__28177)){
var prov = cljs.core._nth.call(null,chunk__28176,i__28178);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28179_28187 = cljs.core.seq.call(null,requires);
var chunk__28180_28188 = null;
var count__28181_28189 = (0);
var i__28182_28190 = (0);
while(true){
if((i__28182_28190 < count__28181_28189)){
var req_28191 = cljs.core._nth.call(null,chunk__28180_28188,i__28182_28190);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28191,prov);


var G__28192 = seq__28179_28187;
var G__28193 = chunk__28180_28188;
var G__28194 = count__28181_28189;
var G__28195 = (i__28182_28190 + (1));
seq__28179_28187 = G__28192;
chunk__28180_28188 = G__28193;
count__28181_28189 = G__28194;
i__28182_28190 = G__28195;
continue;
} else {
var temp__4657__auto___28196 = cljs.core.seq.call(null,seq__28179_28187);
if(temp__4657__auto___28196){
var seq__28179_28197__$1 = temp__4657__auto___28196;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28179_28197__$1)){
var c__4319__auto___28198 = cljs.core.chunk_first.call(null,seq__28179_28197__$1);
var G__28199 = cljs.core.chunk_rest.call(null,seq__28179_28197__$1);
var G__28200 = c__4319__auto___28198;
var G__28201 = cljs.core.count.call(null,c__4319__auto___28198);
var G__28202 = (0);
seq__28179_28187 = G__28199;
chunk__28180_28188 = G__28200;
count__28181_28189 = G__28201;
i__28182_28190 = G__28202;
continue;
} else {
var req_28203 = cljs.core.first.call(null,seq__28179_28197__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28203,prov);


var G__28204 = cljs.core.next.call(null,seq__28179_28197__$1);
var G__28205 = null;
var G__28206 = (0);
var G__28207 = (0);
seq__28179_28187 = G__28204;
chunk__28180_28188 = G__28205;
count__28181_28189 = G__28206;
i__28182_28190 = G__28207;
continue;
}
} else {
}
}
break;
}


var G__28208 = seq__28175;
var G__28209 = chunk__28176;
var G__28210 = count__28177;
var G__28211 = (i__28178 + (1));
seq__28175 = G__28208;
chunk__28176 = G__28209;
count__28177 = G__28210;
i__28178 = G__28211;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__28175);
if(temp__4657__auto__){
var seq__28175__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28175__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__28175__$1);
var G__28212 = cljs.core.chunk_rest.call(null,seq__28175__$1);
var G__28213 = c__4319__auto__;
var G__28214 = cljs.core.count.call(null,c__4319__auto__);
var G__28215 = (0);
seq__28175 = G__28212;
chunk__28176 = G__28213;
count__28177 = G__28214;
i__28178 = G__28215;
continue;
} else {
var prov = cljs.core.first.call(null,seq__28175__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__28183_28216 = cljs.core.seq.call(null,requires);
var chunk__28184_28217 = null;
var count__28185_28218 = (0);
var i__28186_28219 = (0);
while(true){
if((i__28186_28219 < count__28185_28218)){
var req_28220 = cljs.core._nth.call(null,chunk__28184_28217,i__28186_28219);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28220,prov);


var G__28221 = seq__28183_28216;
var G__28222 = chunk__28184_28217;
var G__28223 = count__28185_28218;
var G__28224 = (i__28186_28219 + (1));
seq__28183_28216 = G__28221;
chunk__28184_28217 = G__28222;
count__28185_28218 = G__28223;
i__28186_28219 = G__28224;
continue;
} else {
var temp__4657__auto___28225__$1 = cljs.core.seq.call(null,seq__28183_28216);
if(temp__4657__auto___28225__$1){
var seq__28183_28226__$1 = temp__4657__auto___28225__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28183_28226__$1)){
var c__4319__auto___28227 = cljs.core.chunk_first.call(null,seq__28183_28226__$1);
var G__28228 = cljs.core.chunk_rest.call(null,seq__28183_28226__$1);
var G__28229 = c__4319__auto___28227;
var G__28230 = cljs.core.count.call(null,c__4319__auto___28227);
var G__28231 = (0);
seq__28183_28216 = G__28228;
chunk__28184_28217 = G__28229;
count__28185_28218 = G__28230;
i__28186_28219 = G__28231;
continue;
} else {
var req_28232 = cljs.core.first.call(null,seq__28183_28226__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_28232,prov);


var G__28233 = cljs.core.next.call(null,seq__28183_28226__$1);
var G__28234 = null;
var G__28235 = (0);
var G__28236 = (0);
seq__28183_28216 = G__28233;
chunk__28184_28217 = G__28234;
count__28185_28218 = G__28235;
i__28186_28219 = G__28236;
continue;
}
} else {
}
}
break;
}


var G__28237 = cljs.core.next.call(null,seq__28175__$1);
var G__28238 = null;
var G__28239 = (0);
var G__28240 = (0);
seq__28175 = G__28237;
chunk__28176 = G__28238;
count__28177 = G__28239;
i__28178 = G__28240;
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
var seq__28241_28245 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__28242_28246 = null;
var count__28243_28247 = (0);
var i__28244_28248 = (0);
while(true){
if((i__28244_28248 < count__28243_28247)){
var ns_28249 = cljs.core._nth.call(null,chunk__28242_28246,i__28244_28248);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28249);


var G__28250 = seq__28241_28245;
var G__28251 = chunk__28242_28246;
var G__28252 = count__28243_28247;
var G__28253 = (i__28244_28248 + (1));
seq__28241_28245 = G__28250;
chunk__28242_28246 = G__28251;
count__28243_28247 = G__28252;
i__28244_28248 = G__28253;
continue;
} else {
var temp__4657__auto___28254 = cljs.core.seq.call(null,seq__28241_28245);
if(temp__4657__auto___28254){
var seq__28241_28255__$1 = temp__4657__auto___28254;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__28241_28255__$1)){
var c__4319__auto___28256 = cljs.core.chunk_first.call(null,seq__28241_28255__$1);
var G__28257 = cljs.core.chunk_rest.call(null,seq__28241_28255__$1);
var G__28258 = c__4319__auto___28256;
var G__28259 = cljs.core.count.call(null,c__4319__auto___28256);
var G__28260 = (0);
seq__28241_28245 = G__28257;
chunk__28242_28246 = G__28258;
count__28243_28247 = G__28259;
i__28244_28248 = G__28260;
continue;
} else {
var ns_28261 = cljs.core.first.call(null,seq__28241_28255__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_28261);


var G__28262 = cljs.core.next.call(null,seq__28241_28255__$1);
var G__28263 = null;
var G__28264 = (0);
var G__28265 = (0);
seq__28241_28245 = G__28262;
chunk__28242_28246 = G__28263;
count__28243_28247 = G__28264;
i__28244_28248 = G__28265;
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
var G__28266__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__28266 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__28267__i = 0, G__28267__a = new Array(arguments.length -  0);
while (G__28267__i < G__28267__a.length) {G__28267__a[G__28267__i] = arguments[G__28267__i + 0]; ++G__28267__i;}
  args = new cljs.core.IndexedSeq(G__28267__a,0,null);
} 
return G__28266__delegate.call(this,args);};
G__28266.cljs$lang$maxFixedArity = 0;
G__28266.cljs$lang$applyTo = (function (arglist__28268){
var args = cljs.core.seq(arglist__28268);
return G__28266__delegate(args);
});
G__28266.cljs$core$IFn$_invoke$arity$variadic = G__28266__delegate;
return G__28266;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__28269_SHARP_,p2__28270_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28269_SHARP_)].join('')),p2__28270_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__28271_SHARP_,p2__28272_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__28271_SHARP_)].join(''),p2__28272_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__28273 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__28273.addCallback(((function (G__28273){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__28273))
);

G__28273.addErrback(((function (G__28273){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__28273))
);

return G__28273;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e28274){if((e28274 instanceof Error)){
var e = e28274;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28274;

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
}catch (e28275){if((e28275 instanceof Error)){
var e = e28275;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e28275;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__28276 = cljs.core._EQ_;
var expr__28277 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__28276.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__28277))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__28276.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__28277))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__28276.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__28277))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__28276,expr__28277){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__28276,expr__28277))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__28279,callback){
var map__28280 = p__28279;
var map__28280__$1 = ((((!((map__28280 == null)))?(((((map__28280.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28280.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28280):map__28280);
var file_msg = map__28280__$1;
var request_url = cljs.core.get.call(null,map__28280__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__28280,map__28280__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__28280,map__28280__$1,file_msg,request_url))
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
return (function (state_28318){
var state_val_28319 = (state_28318[(1)]);
if((state_val_28319 === (7))){
var inst_28314 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28320_28346 = state_28318__$1;
(statearr_28320_28346[(2)] = inst_28314);

(statearr_28320_28346[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (1))){
var state_28318__$1 = state_28318;
var statearr_28321_28347 = state_28318__$1;
(statearr_28321_28347[(2)] = null);

(statearr_28321_28347[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (4))){
var inst_28284 = (state_28318[(7)]);
var inst_28284__$1 = (state_28318[(2)]);
var state_28318__$1 = (function (){var statearr_28322 = state_28318;
(statearr_28322[(7)] = inst_28284__$1);

return statearr_28322;
})();
if(cljs.core.truth_(inst_28284__$1)){
var statearr_28323_28348 = state_28318__$1;
(statearr_28323_28348[(1)] = (5));

} else {
var statearr_28324_28349 = state_28318__$1;
(statearr_28324_28349[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (15))){
var inst_28297 = (state_28318[(8)]);
var inst_28299 = (state_28318[(9)]);
var inst_28301 = inst_28299.call(null,inst_28297);
var state_28318__$1 = state_28318;
var statearr_28325_28350 = state_28318__$1;
(statearr_28325_28350[(2)] = inst_28301);

(statearr_28325_28350[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (13))){
var inst_28308 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28326_28351 = state_28318__$1;
(statearr_28326_28351[(2)] = inst_28308);

(statearr_28326_28351[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (6))){
var state_28318__$1 = state_28318;
var statearr_28327_28352 = state_28318__$1;
(statearr_28327_28352[(2)] = null);

(statearr_28327_28352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (17))){
var inst_28305 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
var statearr_28328_28353 = state_28318__$1;
(statearr_28328_28353[(2)] = inst_28305);

(statearr_28328_28353[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (3))){
var inst_28316 = (state_28318[(2)]);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28318__$1,inst_28316);
} else {
if((state_val_28319 === (12))){
var state_28318__$1 = state_28318;
var statearr_28329_28354 = state_28318__$1;
(statearr_28329_28354[(2)] = null);

(statearr_28329_28354[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (2))){
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28318__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_28319 === (11))){
var inst_28289 = (state_28318[(10)]);
var inst_28295 = figwheel.client.file_reloading.blocking_load.call(null,inst_28289);
var state_28318__$1 = state_28318;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28318__$1,(14),inst_28295);
} else {
if((state_val_28319 === (9))){
var inst_28289 = (state_28318[(10)]);
var state_28318__$1 = state_28318;
if(cljs.core.truth_(inst_28289)){
var statearr_28330_28355 = state_28318__$1;
(statearr_28330_28355[(1)] = (11));

} else {
var statearr_28331_28356 = state_28318__$1;
(statearr_28331_28356[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (5))){
var inst_28284 = (state_28318[(7)]);
var inst_28290 = (state_28318[(11)]);
var inst_28289 = cljs.core.nth.call(null,inst_28284,(0),null);
var inst_28290__$1 = cljs.core.nth.call(null,inst_28284,(1),null);
var state_28318__$1 = (function (){var statearr_28332 = state_28318;
(statearr_28332[(10)] = inst_28289);

(statearr_28332[(11)] = inst_28290__$1);

return statearr_28332;
})();
if(cljs.core.truth_(inst_28290__$1)){
var statearr_28333_28357 = state_28318__$1;
(statearr_28333_28357[(1)] = (8));

} else {
var statearr_28334_28358 = state_28318__$1;
(statearr_28334_28358[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (14))){
var inst_28289 = (state_28318[(10)]);
var inst_28299 = (state_28318[(9)]);
var inst_28297 = (state_28318[(2)]);
var inst_28298 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_28299__$1 = cljs.core.get.call(null,inst_28298,inst_28289);
var state_28318__$1 = (function (){var statearr_28335 = state_28318;
(statearr_28335[(8)] = inst_28297);

(statearr_28335[(9)] = inst_28299__$1);

return statearr_28335;
})();
if(cljs.core.truth_(inst_28299__$1)){
var statearr_28336_28359 = state_28318__$1;
(statearr_28336_28359[(1)] = (15));

} else {
var statearr_28337_28360 = state_28318__$1;
(statearr_28337_28360[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (16))){
var inst_28297 = (state_28318[(8)]);
var inst_28303 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_28297);
var state_28318__$1 = state_28318;
var statearr_28338_28361 = state_28318__$1;
(statearr_28338_28361[(2)] = inst_28303);

(statearr_28338_28361[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (10))){
var inst_28310 = (state_28318[(2)]);
var state_28318__$1 = (function (){var statearr_28339 = state_28318;
(statearr_28339[(12)] = inst_28310);

return statearr_28339;
})();
var statearr_28340_28362 = state_28318__$1;
(statearr_28340_28362[(2)] = null);

(statearr_28340_28362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28319 === (8))){
var inst_28290 = (state_28318[(11)]);
var inst_28292 = eval(inst_28290);
var state_28318__$1 = state_28318;
var statearr_28341_28363 = state_28318__$1;
(statearr_28341_28363[(2)] = inst_28292);

(statearr_28341_28363[(1)] = (10));


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
var statearr_28342 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28342[(0)] = figwheel$client$file_reloading$state_machine__25930__auto__);

(statearr_28342[(1)] = (1));

return statearr_28342;
});
var figwheel$client$file_reloading$state_machine__25930__auto____1 = (function (state_28318){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_28318);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e28343){if((e28343 instanceof Object)){
var ex__25933__auto__ = e28343;
var statearr_28344_28364 = state_28318;
(statearr_28344_28364[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28318);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28343;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28365 = state_28318;
state_28318 = G__28365;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__25930__auto__ = function(state_28318){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__25930__auto____1.call(this,state_28318);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__25930__auto____0;
figwheel$client$file_reloading$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__25930__auto____1;
return figwheel$client$file_reloading$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_28345 = f__26018__auto__.call(null);
(statearr_28345[(6)] = c__26017__auto__);

return statearr_28345;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__))
);

return c__26017__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__28367 = arguments.length;
switch (G__28367) {
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

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__28369,callback){
var map__28370 = p__28369;
var map__28370__$1 = ((((!((map__28370 == null)))?(((((map__28370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28370):map__28370);
var file_msg = map__28370__$1;
var namespace = cljs.core.get.call(null,map__28370__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__28370,map__28370__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__28370,map__28370__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__28372){
var map__28373 = p__28372;
var map__28373__$1 = ((((!((map__28373 == null)))?(((((map__28373.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28373.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28373):map__28373);
var file_msg = map__28373__$1;
var namespace = cljs.core.get.call(null,map__28373__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__28375){
var map__28376 = p__28375;
var map__28376__$1 = ((((!((map__28376 == null)))?(((((map__28376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28376):map__28376);
var file_msg = map__28376__$1;
var namespace = cljs.core.get.call(null,map__28376__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__28378,callback){
var map__28379 = p__28378;
var map__28379__$1 = ((((!((map__28379 == null)))?(((((map__28379.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28379.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28379):map__28379);
var file_msg = map__28379__$1;
var request_url = cljs.core.get.call(null,map__28379__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__28379__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__26017__auto___28429 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___28429,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___28429,out){
return (function (state_28414){
var state_val_28415 = (state_28414[(1)]);
if((state_val_28415 === (1))){
var inst_28388 = cljs.core.seq.call(null,files);
var inst_28389 = cljs.core.first.call(null,inst_28388);
var inst_28390 = cljs.core.next.call(null,inst_28388);
var inst_28391 = files;
var state_28414__$1 = (function (){var statearr_28416 = state_28414;
(statearr_28416[(7)] = inst_28389);

(statearr_28416[(8)] = inst_28391);

(statearr_28416[(9)] = inst_28390);

return statearr_28416;
})();
var statearr_28417_28430 = state_28414__$1;
(statearr_28417_28430[(2)] = null);

(statearr_28417_28430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (2))){
var inst_28397 = (state_28414[(10)]);
var inst_28391 = (state_28414[(8)]);
var inst_28396 = cljs.core.seq.call(null,inst_28391);
var inst_28397__$1 = cljs.core.first.call(null,inst_28396);
var inst_28398 = cljs.core.next.call(null,inst_28396);
var inst_28399 = (inst_28397__$1 == null);
var inst_28400 = cljs.core.not.call(null,inst_28399);
var state_28414__$1 = (function (){var statearr_28418 = state_28414;
(statearr_28418[(11)] = inst_28398);

(statearr_28418[(10)] = inst_28397__$1);

return statearr_28418;
})();
if(inst_28400){
var statearr_28419_28431 = state_28414__$1;
(statearr_28419_28431[(1)] = (4));

} else {
var statearr_28420_28432 = state_28414__$1;
(statearr_28420_28432[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (3))){
var inst_28412 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28414__$1,inst_28412);
} else {
if((state_val_28415 === (4))){
var inst_28397 = (state_28414[(10)]);
var inst_28402 = figwheel.client.file_reloading.reload_js_file.call(null,inst_28397);
var state_28414__$1 = state_28414;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28414__$1,(7),inst_28402);
} else {
if((state_val_28415 === (5))){
var inst_28408 = cljs.core.async.close_BANG_.call(null,out);
var state_28414__$1 = state_28414;
var statearr_28421_28433 = state_28414__$1;
(statearr_28421_28433[(2)] = inst_28408);

(statearr_28421_28433[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (6))){
var inst_28410 = (state_28414[(2)]);
var state_28414__$1 = state_28414;
var statearr_28422_28434 = state_28414__$1;
(statearr_28422_28434[(2)] = inst_28410);

(statearr_28422_28434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28415 === (7))){
var inst_28398 = (state_28414[(11)]);
var inst_28404 = (state_28414[(2)]);
var inst_28405 = cljs.core.async.put_BANG_.call(null,out,inst_28404);
var inst_28391 = inst_28398;
var state_28414__$1 = (function (){var statearr_28423 = state_28414;
(statearr_28423[(8)] = inst_28391);

(statearr_28423[(12)] = inst_28405);

return statearr_28423;
})();
var statearr_28424_28435 = state_28414__$1;
(statearr_28424_28435[(2)] = null);

(statearr_28424_28435[(1)] = (2));


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
});})(c__26017__auto___28429,out))
;
return ((function (switch__25929__auto__,c__26017__auto___28429,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____0 = (function (){
var statearr_28425 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28425[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__);

(statearr_28425[(1)] = (1));

return statearr_28425;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____1 = (function (state_28414){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_28414);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e28426){if((e28426 instanceof Object)){
var ex__25933__auto__ = e28426;
var statearr_28427_28436 = state_28414;
(statearr_28427_28436[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28414);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28437 = state_28414;
state_28414 = G__28437;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__ = function(state_28414){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____1.call(this,state_28414);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___28429,out))
})();
var state__26019__auto__ = (function (){var statearr_28428 = f__26018__auto__.call(null);
(statearr_28428[(6)] = c__26017__auto___28429);

return statearr_28428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___28429,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__28438,opts){
var map__28439 = p__28438;
var map__28439__$1 = ((((!((map__28439 == null)))?(((((map__28439.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28439.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28439):map__28439);
var eval_body = cljs.core.get.call(null,map__28439__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__28439__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e28441){var e = e28441;
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
return (function (p1__28442_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28442_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__28443){
var vec__28444 = p__28443;
var k = cljs.core.nth.call(null,vec__28444,(0),null);
var v = cljs.core.nth.call(null,vec__28444,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__28447){
var vec__28448 = p__28447;
var k = cljs.core.nth.call(null,vec__28448,(0),null);
var v = cljs.core.nth.call(null,vec__28448,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__28454,p__28455){
var map__28456 = p__28454;
var map__28456__$1 = ((((!((map__28456 == null)))?(((((map__28456.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28456.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28456):map__28456);
var opts = map__28456__$1;
var before_jsload = cljs.core.get.call(null,map__28456__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__28456__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__28456__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__28457 = p__28455;
var map__28457__$1 = ((((!((map__28457 == null)))?(((((map__28457.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28457.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28457):map__28457);
var msg = map__28457__$1;
var files = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__28457__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_28611){
var state_val_28612 = (state_28611[(1)]);
if((state_val_28612 === (7))){
var inst_28471 = (state_28611[(7)]);
var inst_28474 = (state_28611[(8)]);
var inst_28472 = (state_28611[(9)]);
var inst_28473 = (state_28611[(10)]);
var inst_28479 = cljs.core._nth.call(null,inst_28472,inst_28474);
var inst_28480 = figwheel.client.file_reloading.eval_body.call(null,inst_28479,opts);
var inst_28481 = (inst_28474 + (1));
var tmp28613 = inst_28471;
var tmp28614 = inst_28472;
var tmp28615 = inst_28473;
var inst_28471__$1 = tmp28613;
var inst_28472__$1 = tmp28614;
var inst_28473__$1 = tmp28615;
var inst_28474__$1 = inst_28481;
var state_28611__$1 = (function (){var statearr_28616 = state_28611;
(statearr_28616[(11)] = inst_28480);

(statearr_28616[(7)] = inst_28471__$1);

(statearr_28616[(8)] = inst_28474__$1);

(statearr_28616[(9)] = inst_28472__$1);

(statearr_28616[(10)] = inst_28473__$1);

return statearr_28616;
})();
var statearr_28617_28700 = state_28611__$1;
(statearr_28617_28700[(2)] = null);

(statearr_28617_28700[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (20))){
var inst_28514 = (state_28611[(12)]);
var inst_28522 = figwheel.client.file_reloading.sort_files.call(null,inst_28514);
var state_28611__$1 = state_28611;
var statearr_28618_28701 = state_28611__$1;
(statearr_28618_28701[(2)] = inst_28522);

(statearr_28618_28701[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (27))){
var state_28611__$1 = state_28611;
var statearr_28619_28702 = state_28611__$1;
(statearr_28619_28702[(2)] = null);

(statearr_28619_28702[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (1))){
var inst_28463 = (state_28611[(13)]);
var inst_28460 = before_jsload.call(null,files);
var inst_28461 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_28462 = (function (){return ((function (inst_28463,inst_28460,inst_28461,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28451_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28451_SHARP_);
});
;})(inst_28463,inst_28460,inst_28461,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28463__$1 = cljs.core.filter.call(null,inst_28462,files);
var inst_28464 = cljs.core.not_empty.call(null,inst_28463__$1);
var state_28611__$1 = (function (){var statearr_28620 = state_28611;
(statearr_28620[(14)] = inst_28460);

(statearr_28620[(13)] = inst_28463__$1);

(statearr_28620[(15)] = inst_28461);

return statearr_28620;
})();
if(cljs.core.truth_(inst_28464)){
var statearr_28621_28703 = state_28611__$1;
(statearr_28621_28703[(1)] = (2));

} else {
var statearr_28622_28704 = state_28611__$1;
(statearr_28622_28704[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (24))){
var state_28611__$1 = state_28611;
var statearr_28623_28705 = state_28611__$1;
(statearr_28623_28705[(2)] = null);

(statearr_28623_28705[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (39))){
var inst_28564 = (state_28611[(16)]);
var state_28611__$1 = state_28611;
var statearr_28624_28706 = state_28611__$1;
(statearr_28624_28706[(2)] = inst_28564);

(statearr_28624_28706[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (46))){
var inst_28606 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28625_28707 = state_28611__$1;
(statearr_28625_28707[(2)] = inst_28606);

(statearr_28625_28707[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (4))){
var inst_28508 = (state_28611[(2)]);
var inst_28509 = cljs.core.List.EMPTY;
var inst_28510 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_28509);
var inst_28511 = (function (){return ((function (inst_28508,inst_28509,inst_28510,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28452_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__28452_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__28452_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__28452_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_28508,inst_28509,inst_28510,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28512 = cljs.core.filter.call(null,inst_28511,files);
var inst_28513 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_28514 = cljs.core.concat.call(null,inst_28512,inst_28513);
var state_28611__$1 = (function (){var statearr_28626 = state_28611;
(statearr_28626[(17)] = inst_28508);

(statearr_28626[(12)] = inst_28514);

(statearr_28626[(18)] = inst_28510);

return statearr_28626;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_28627_28708 = state_28611__$1;
(statearr_28627_28708[(1)] = (16));

} else {
var statearr_28628_28709 = state_28611__$1;
(statearr_28628_28709[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (15))){
var inst_28498 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28629_28710 = state_28611__$1;
(statearr_28629_28710[(2)] = inst_28498);

(statearr_28629_28710[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (21))){
var inst_28524 = (state_28611[(19)]);
var inst_28524__$1 = (state_28611[(2)]);
var inst_28525 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_28524__$1);
var state_28611__$1 = (function (){var statearr_28630 = state_28611;
(statearr_28630[(19)] = inst_28524__$1);

return statearr_28630;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28611__$1,(22),inst_28525);
} else {
if((state_val_28612 === (31))){
var inst_28609 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28611__$1,inst_28609);
} else {
if((state_val_28612 === (32))){
var inst_28564 = (state_28611[(16)]);
var inst_28569 = inst_28564.cljs$lang$protocol_mask$partition0$;
var inst_28570 = (inst_28569 & (64));
var inst_28571 = inst_28564.cljs$core$ISeq$;
var inst_28572 = (cljs.core.PROTOCOL_SENTINEL === inst_28571);
var inst_28573 = ((inst_28570) || (inst_28572));
var state_28611__$1 = state_28611;
if(cljs.core.truth_(inst_28573)){
var statearr_28631_28711 = state_28611__$1;
(statearr_28631_28711[(1)] = (35));

} else {
var statearr_28632_28712 = state_28611__$1;
(statearr_28632_28712[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (40))){
var inst_28586 = (state_28611[(20)]);
var inst_28585 = (state_28611[(2)]);
var inst_28586__$1 = cljs.core.get.call(null,inst_28585,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_28587 = cljs.core.get.call(null,inst_28585,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_28588 = cljs.core.not_empty.call(null,inst_28586__$1);
var state_28611__$1 = (function (){var statearr_28633 = state_28611;
(statearr_28633[(20)] = inst_28586__$1);

(statearr_28633[(21)] = inst_28587);

return statearr_28633;
})();
if(cljs.core.truth_(inst_28588)){
var statearr_28634_28713 = state_28611__$1;
(statearr_28634_28713[(1)] = (41));

} else {
var statearr_28635_28714 = state_28611__$1;
(statearr_28635_28714[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (33))){
var state_28611__$1 = state_28611;
var statearr_28636_28715 = state_28611__$1;
(statearr_28636_28715[(2)] = false);

(statearr_28636_28715[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (13))){
var inst_28484 = (state_28611[(22)]);
var inst_28488 = cljs.core.chunk_first.call(null,inst_28484);
var inst_28489 = cljs.core.chunk_rest.call(null,inst_28484);
var inst_28490 = cljs.core.count.call(null,inst_28488);
var inst_28471 = inst_28489;
var inst_28472 = inst_28488;
var inst_28473 = inst_28490;
var inst_28474 = (0);
var state_28611__$1 = (function (){var statearr_28637 = state_28611;
(statearr_28637[(7)] = inst_28471);

(statearr_28637[(8)] = inst_28474);

(statearr_28637[(9)] = inst_28472);

(statearr_28637[(10)] = inst_28473);

return statearr_28637;
})();
var statearr_28638_28716 = state_28611__$1;
(statearr_28638_28716[(2)] = null);

(statearr_28638_28716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (22))){
var inst_28532 = (state_28611[(23)]);
var inst_28527 = (state_28611[(24)]);
var inst_28524 = (state_28611[(19)]);
var inst_28528 = (state_28611[(25)]);
var inst_28527__$1 = (state_28611[(2)]);
var inst_28528__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28527__$1);
var inst_28529 = (function (){var all_files = inst_28524;
var res_SINGLEQUOTE_ = inst_28527__$1;
var res = inst_28528__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_28532,inst_28527,inst_28524,inst_28528,inst_28527__$1,inst_28528__$1,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__28453_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__28453_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_28532,inst_28527,inst_28524,inst_28528,inst_28527__$1,inst_28528__$1,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28530 = cljs.core.filter.call(null,inst_28529,inst_28527__$1);
var inst_28531 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_28532__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_28531);
var inst_28533 = cljs.core.not_empty.call(null,inst_28532__$1);
var state_28611__$1 = (function (){var statearr_28639 = state_28611;
(statearr_28639[(26)] = inst_28530);

(statearr_28639[(23)] = inst_28532__$1);

(statearr_28639[(24)] = inst_28527__$1);

(statearr_28639[(25)] = inst_28528__$1);

return statearr_28639;
})();
if(cljs.core.truth_(inst_28533)){
var statearr_28640_28717 = state_28611__$1;
(statearr_28640_28717[(1)] = (23));

} else {
var statearr_28641_28718 = state_28611__$1;
(statearr_28641_28718[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (36))){
var state_28611__$1 = state_28611;
var statearr_28642_28719 = state_28611__$1;
(statearr_28642_28719[(2)] = false);

(statearr_28642_28719[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (41))){
var inst_28586 = (state_28611[(20)]);
var inst_28590 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_28591 = cljs.core.map.call(null,inst_28590,inst_28586);
var inst_28592 = cljs.core.pr_str.call(null,inst_28591);
var inst_28593 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28592)].join('');
var inst_28594 = figwheel.client.utils.log.call(null,inst_28593);
var state_28611__$1 = state_28611;
var statearr_28643_28720 = state_28611__$1;
(statearr_28643_28720[(2)] = inst_28594);

(statearr_28643_28720[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (43))){
var inst_28587 = (state_28611[(21)]);
var inst_28597 = (state_28611[(2)]);
var inst_28598 = cljs.core.not_empty.call(null,inst_28587);
var state_28611__$1 = (function (){var statearr_28644 = state_28611;
(statearr_28644[(27)] = inst_28597);

return statearr_28644;
})();
if(cljs.core.truth_(inst_28598)){
var statearr_28645_28721 = state_28611__$1;
(statearr_28645_28721[(1)] = (44));

} else {
var statearr_28646_28722 = state_28611__$1;
(statearr_28646_28722[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (29))){
var inst_28564 = (state_28611[(16)]);
var inst_28530 = (state_28611[(26)]);
var inst_28532 = (state_28611[(23)]);
var inst_28527 = (state_28611[(24)]);
var inst_28524 = (state_28611[(19)]);
var inst_28528 = (state_28611[(25)]);
var inst_28560 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_28563 = (function (){var all_files = inst_28524;
var res_SINGLEQUOTE_ = inst_28527;
var res = inst_28528;
var files_not_loaded = inst_28530;
var dependencies_that_loaded = inst_28532;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28564,inst_28530,inst_28532,inst_28527,inst_28524,inst_28528,inst_28560,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28562){
var map__28647 = p__28562;
var map__28647__$1 = ((((!((map__28647 == null)))?(((((map__28647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28647):map__28647);
var namespace = cljs.core.get.call(null,map__28647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28564,inst_28530,inst_28532,inst_28527,inst_28524,inst_28528,inst_28560,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28564__$1 = cljs.core.group_by.call(null,inst_28563,inst_28530);
var inst_28566 = (inst_28564__$1 == null);
var inst_28567 = cljs.core.not.call(null,inst_28566);
var state_28611__$1 = (function (){var statearr_28649 = state_28611;
(statearr_28649[(16)] = inst_28564__$1);

(statearr_28649[(28)] = inst_28560);

return statearr_28649;
})();
if(inst_28567){
var statearr_28650_28723 = state_28611__$1;
(statearr_28650_28723[(1)] = (32));

} else {
var statearr_28651_28724 = state_28611__$1;
(statearr_28651_28724[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (44))){
var inst_28587 = (state_28611[(21)]);
var inst_28600 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_28587);
var inst_28601 = cljs.core.pr_str.call(null,inst_28600);
var inst_28602 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_28601)].join('');
var inst_28603 = figwheel.client.utils.log.call(null,inst_28602);
var state_28611__$1 = state_28611;
var statearr_28652_28725 = state_28611__$1;
(statearr_28652_28725[(2)] = inst_28603);

(statearr_28652_28725[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (6))){
var inst_28505 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28653_28726 = state_28611__$1;
(statearr_28653_28726[(2)] = inst_28505);

(statearr_28653_28726[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (28))){
var inst_28530 = (state_28611[(26)]);
var inst_28557 = (state_28611[(2)]);
var inst_28558 = cljs.core.not_empty.call(null,inst_28530);
var state_28611__$1 = (function (){var statearr_28654 = state_28611;
(statearr_28654[(29)] = inst_28557);

return statearr_28654;
})();
if(cljs.core.truth_(inst_28558)){
var statearr_28655_28727 = state_28611__$1;
(statearr_28655_28727[(1)] = (29));

} else {
var statearr_28656_28728 = state_28611__$1;
(statearr_28656_28728[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (25))){
var inst_28528 = (state_28611[(25)]);
var inst_28544 = (state_28611[(2)]);
var inst_28545 = cljs.core.not_empty.call(null,inst_28528);
var state_28611__$1 = (function (){var statearr_28657 = state_28611;
(statearr_28657[(30)] = inst_28544);

return statearr_28657;
})();
if(cljs.core.truth_(inst_28545)){
var statearr_28658_28729 = state_28611__$1;
(statearr_28658_28729[(1)] = (26));

} else {
var statearr_28659_28730 = state_28611__$1;
(statearr_28659_28730[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (34))){
var inst_28580 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
if(cljs.core.truth_(inst_28580)){
var statearr_28660_28731 = state_28611__$1;
(statearr_28660_28731[(1)] = (38));

} else {
var statearr_28661_28732 = state_28611__$1;
(statearr_28661_28732[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (17))){
var state_28611__$1 = state_28611;
var statearr_28662_28733 = state_28611__$1;
(statearr_28662_28733[(2)] = recompile_dependents);

(statearr_28662_28733[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (3))){
var state_28611__$1 = state_28611;
var statearr_28663_28734 = state_28611__$1;
(statearr_28663_28734[(2)] = null);

(statearr_28663_28734[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (12))){
var inst_28501 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28664_28735 = state_28611__$1;
(statearr_28664_28735[(2)] = inst_28501);

(statearr_28664_28735[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (2))){
var inst_28463 = (state_28611[(13)]);
var inst_28470 = cljs.core.seq.call(null,inst_28463);
var inst_28471 = inst_28470;
var inst_28472 = null;
var inst_28473 = (0);
var inst_28474 = (0);
var state_28611__$1 = (function (){var statearr_28665 = state_28611;
(statearr_28665[(7)] = inst_28471);

(statearr_28665[(8)] = inst_28474);

(statearr_28665[(9)] = inst_28472);

(statearr_28665[(10)] = inst_28473);

return statearr_28665;
})();
var statearr_28666_28736 = state_28611__$1;
(statearr_28666_28736[(2)] = null);

(statearr_28666_28736[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (23))){
var inst_28530 = (state_28611[(26)]);
var inst_28532 = (state_28611[(23)]);
var inst_28527 = (state_28611[(24)]);
var inst_28524 = (state_28611[(19)]);
var inst_28528 = (state_28611[(25)]);
var inst_28535 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_28537 = (function (){var all_files = inst_28524;
var res_SINGLEQUOTE_ = inst_28527;
var res = inst_28528;
var files_not_loaded = inst_28530;
var dependencies_that_loaded = inst_28532;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28530,inst_28532,inst_28527,inst_28524,inst_28528,inst_28535,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28536){
var map__28667 = p__28536;
var map__28667__$1 = ((((!((map__28667 == null)))?(((((map__28667.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28667.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28667):map__28667);
var request_url = cljs.core.get.call(null,map__28667__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28530,inst_28532,inst_28527,inst_28524,inst_28528,inst_28535,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28538 = cljs.core.reverse.call(null,inst_28532);
var inst_28539 = cljs.core.map.call(null,inst_28537,inst_28538);
var inst_28540 = cljs.core.pr_str.call(null,inst_28539);
var inst_28541 = figwheel.client.utils.log.call(null,inst_28540);
var state_28611__$1 = (function (){var statearr_28669 = state_28611;
(statearr_28669[(31)] = inst_28535);

return statearr_28669;
})();
var statearr_28670_28737 = state_28611__$1;
(statearr_28670_28737[(2)] = inst_28541);

(statearr_28670_28737[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (35))){
var state_28611__$1 = state_28611;
var statearr_28671_28738 = state_28611__$1;
(statearr_28671_28738[(2)] = true);

(statearr_28671_28738[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (19))){
var inst_28514 = (state_28611[(12)]);
var inst_28520 = figwheel.client.file_reloading.expand_files.call(null,inst_28514);
var state_28611__$1 = state_28611;
var statearr_28672_28739 = state_28611__$1;
(statearr_28672_28739[(2)] = inst_28520);

(statearr_28672_28739[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (11))){
var state_28611__$1 = state_28611;
var statearr_28673_28740 = state_28611__$1;
(statearr_28673_28740[(2)] = null);

(statearr_28673_28740[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (9))){
var inst_28503 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28674_28741 = state_28611__$1;
(statearr_28674_28741[(2)] = inst_28503);

(statearr_28674_28741[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (5))){
var inst_28474 = (state_28611[(8)]);
var inst_28473 = (state_28611[(10)]);
var inst_28476 = (inst_28474 < inst_28473);
var inst_28477 = inst_28476;
var state_28611__$1 = state_28611;
if(cljs.core.truth_(inst_28477)){
var statearr_28675_28742 = state_28611__$1;
(statearr_28675_28742[(1)] = (7));

} else {
var statearr_28676_28743 = state_28611__$1;
(statearr_28676_28743[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (14))){
var inst_28484 = (state_28611[(22)]);
var inst_28493 = cljs.core.first.call(null,inst_28484);
var inst_28494 = figwheel.client.file_reloading.eval_body.call(null,inst_28493,opts);
var inst_28495 = cljs.core.next.call(null,inst_28484);
var inst_28471 = inst_28495;
var inst_28472 = null;
var inst_28473 = (0);
var inst_28474 = (0);
var state_28611__$1 = (function (){var statearr_28677 = state_28611;
(statearr_28677[(32)] = inst_28494);

(statearr_28677[(7)] = inst_28471);

(statearr_28677[(8)] = inst_28474);

(statearr_28677[(9)] = inst_28472);

(statearr_28677[(10)] = inst_28473);

return statearr_28677;
})();
var statearr_28678_28744 = state_28611__$1;
(statearr_28678_28744[(2)] = null);

(statearr_28678_28744[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (45))){
var state_28611__$1 = state_28611;
var statearr_28679_28745 = state_28611__$1;
(statearr_28679_28745[(2)] = null);

(statearr_28679_28745[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (26))){
var inst_28530 = (state_28611[(26)]);
var inst_28532 = (state_28611[(23)]);
var inst_28527 = (state_28611[(24)]);
var inst_28524 = (state_28611[(19)]);
var inst_28528 = (state_28611[(25)]);
var inst_28547 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_28549 = (function (){var all_files = inst_28524;
var res_SINGLEQUOTE_ = inst_28527;
var res = inst_28528;
var files_not_loaded = inst_28530;
var dependencies_that_loaded = inst_28532;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28530,inst_28532,inst_28527,inst_28524,inst_28528,inst_28547,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__28548){
var map__28680 = p__28548;
var map__28680__$1 = ((((!((map__28680 == null)))?(((((map__28680.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28680.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28680):map__28680);
var namespace = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__28680__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28530,inst_28532,inst_28527,inst_28524,inst_28528,inst_28547,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28550 = cljs.core.map.call(null,inst_28549,inst_28528);
var inst_28551 = cljs.core.pr_str.call(null,inst_28550);
var inst_28552 = figwheel.client.utils.log.call(null,inst_28551);
var inst_28553 = (function (){var all_files = inst_28524;
var res_SINGLEQUOTE_ = inst_28527;
var res = inst_28528;
var files_not_loaded = inst_28530;
var dependencies_that_loaded = inst_28532;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28530,inst_28532,inst_28527,inst_28524,inst_28528,inst_28547,inst_28549,inst_28550,inst_28551,inst_28552,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_28530,inst_28532,inst_28527,inst_28524,inst_28528,inst_28547,inst_28549,inst_28550,inst_28551,inst_28552,state_val_28612,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_28554 = setTimeout(inst_28553,(10));
var state_28611__$1 = (function (){var statearr_28682 = state_28611;
(statearr_28682[(33)] = inst_28547);

(statearr_28682[(34)] = inst_28552);

return statearr_28682;
})();
var statearr_28683_28746 = state_28611__$1;
(statearr_28683_28746[(2)] = inst_28554);

(statearr_28683_28746[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (16))){
var state_28611__$1 = state_28611;
var statearr_28684_28747 = state_28611__$1;
(statearr_28684_28747[(2)] = reload_dependents);

(statearr_28684_28747[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (38))){
var inst_28564 = (state_28611[(16)]);
var inst_28582 = cljs.core.apply.call(null,cljs.core.hash_map,inst_28564);
var state_28611__$1 = state_28611;
var statearr_28685_28748 = state_28611__$1;
(statearr_28685_28748[(2)] = inst_28582);

(statearr_28685_28748[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (30))){
var state_28611__$1 = state_28611;
var statearr_28686_28749 = state_28611__$1;
(statearr_28686_28749[(2)] = null);

(statearr_28686_28749[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (10))){
var inst_28484 = (state_28611[(22)]);
var inst_28486 = cljs.core.chunked_seq_QMARK_.call(null,inst_28484);
var state_28611__$1 = state_28611;
if(inst_28486){
var statearr_28687_28750 = state_28611__$1;
(statearr_28687_28750[(1)] = (13));

} else {
var statearr_28688_28751 = state_28611__$1;
(statearr_28688_28751[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (18))){
var inst_28518 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
if(cljs.core.truth_(inst_28518)){
var statearr_28689_28752 = state_28611__$1;
(statearr_28689_28752[(1)] = (19));

} else {
var statearr_28690_28753 = state_28611__$1;
(statearr_28690_28753[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (42))){
var state_28611__$1 = state_28611;
var statearr_28691_28754 = state_28611__$1;
(statearr_28691_28754[(2)] = null);

(statearr_28691_28754[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (37))){
var inst_28577 = (state_28611[(2)]);
var state_28611__$1 = state_28611;
var statearr_28692_28755 = state_28611__$1;
(statearr_28692_28755[(2)] = inst_28577);

(statearr_28692_28755[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28612 === (8))){
var inst_28484 = (state_28611[(22)]);
var inst_28471 = (state_28611[(7)]);
var inst_28484__$1 = cljs.core.seq.call(null,inst_28471);
var state_28611__$1 = (function (){var statearr_28693 = state_28611;
(statearr_28693[(22)] = inst_28484__$1);

return statearr_28693;
})();
if(inst_28484__$1){
var statearr_28694_28756 = state_28611__$1;
(statearr_28694_28756[(1)] = (10));

} else {
var statearr_28695_28757 = state_28611__$1;
(statearr_28695_28757[(1)] = (11));

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
});})(c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__25929__auto__,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____0 = (function (){
var statearr_28696 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28696[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__);

(statearr_28696[(1)] = (1));

return statearr_28696;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____1 = (function (state_28611){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_28611);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e28697){if((e28697 instanceof Object)){
var ex__25933__auto__ = e28697;
var statearr_28698_28758 = state_28611;
(statearr_28698_28758[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28611);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28759 = state_28611;
state_28611 = G__28759;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__ = function(state_28611){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____1.call(this,state_28611);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__26019__auto__ = (function (){var statearr_28699 = f__26018__auto__.call(null);
(statearr_28699[(6)] = c__26017__auto__);

return statearr_28699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__,map__28456,map__28456__$1,opts,before_jsload,on_jsload,reload_dependents,map__28457,map__28457__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__26017__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__28762,link){
var map__28763 = p__28762;
var map__28763__$1 = ((((!((map__28763 == null)))?(((((map__28763.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28763.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28763):map__28763);
var file = cljs.core.get.call(null,map__28763__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__28763,map__28763__$1,file){
return (function (p1__28760_SHARP_,p2__28761_SHARP_){
if(cljs.core._EQ_.call(null,p1__28760_SHARP_,p2__28761_SHARP_)){
return p1__28760_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__28763,map__28763__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__28766){
var map__28767 = p__28766;
var map__28767__$1 = ((((!((map__28767 == null)))?(((((map__28767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28767.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28767):map__28767);
var match_length = cljs.core.get.call(null,map__28767__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__28767__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__28765_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__28765_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__28769_SHARP_,p2__28770_SHARP_){
return cljs.core.assoc.call(null,p1__28769_SHARP_,cljs.core.get.call(null,p2__28770_SHARP_,key),p2__28770_SHARP_);
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
var loaded_f_datas_28771 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_28771);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_28771);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__28772,p__28773){
var map__28774 = p__28772;
var map__28774__$1 = ((((!((map__28774 == null)))?(((((map__28774.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28774.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28774):map__28774);
var on_cssload = cljs.core.get.call(null,map__28774__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__28775 = p__28773;
var map__28775__$1 = ((((!((map__28775 == null)))?(((((map__28775.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__28775.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__28775):map__28775);
var files_msg = map__28775__$1;
var files = cljs.core.get.call(null,map__28775__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1547389518997
