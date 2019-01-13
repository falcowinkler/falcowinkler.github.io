// Compiled by ClojureScript 1.10.238 {}
goog.provide('falcowinkler.views');
goog.require('cljs.core');
falcowinkler.views.available_courses = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["python_beginner_1"], null);
falcowinkler.views.main_panel = (function falcowinkler$views$main_panel(){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Wilkommen beim python crashkurs"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://ti.to/moinworld/python-lernen-hamburg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Anmeldung Teil 1 (ohne Vorkenntnisse)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://ti.to/moinworld/python-class-hamburg"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Anmeldung Teil 2 (Vorraussetzung abgeschlossener Teil 1 oder Vorkenntnisse)"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),"https://moinworldhamburg.slack.com"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Alle infos in Slack"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group"], null),(function (){var iter__4292__auto__ = (function falcowinkler$views$main_panel_$_iter__25961(s__25962){
return (new cljs.core.LazySeq(null,(function (){
var s__25962__$1 = s__25962;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__25962__$1);
if(temp__4657__auto__){
var s__25962__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__25962__$2)){
var c__4290__auto__ = cljs.core.chunk_first.call(null,s__25962__$2);
var size__4291__auto__ = cljs.core.count.call(null,c__4290__auto__);
var b__25964 = cljs.core.chunk_buffer.call(null,size__4291__auto__);
if((function (){var i__25963 = (0);
while(true){
if((i__25963 < size__4291__auto__)){
var course = cljs.core._nth.call(null,c__4290__auto__,i__25963);
cljs.core.chunk_append.call(null,b__25964,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["https://github.com/falcowinkler/python-course/raw/master/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(course),".zip"].join('')], null),["Download ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(course)].join('')], null)], null));

var G__25965 = (i__25963 + (1));
i__25963 = G__25965;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25964),falcowinkler$views$main_panel_$_iter__25961.call(null,cljs.core.chunk_rest.call(null,s__25962__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__25964),null);
}
} else {
var course = cljs.core.first.call(null,s__25962__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"list-group-item"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["https://github.com/falcowinkler/python-course/raw/master/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(course),".zip"].join('')], null),["Download ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(course)].join('')], null)], null),falcowinkler$views$main_panel_$_iter__25961.call(null,cljs.core.rest.call(null,s__25962__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4292__auto__.call(null,falcowinkler.views.available_courses);
})()], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1547394467528
