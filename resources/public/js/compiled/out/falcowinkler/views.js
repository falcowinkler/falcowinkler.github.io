// Compiled by ClojureScript 1.10.238 {}
goog.provide('falcowinkler.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('falcowinkler.subs');
falcowinkler.views.main_panel = (function falcowinkler$views$main_panel(){
var name = re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("falcowinkler.subs","name","falcowinkler.subs/name",296361437)], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),"Hello from ",cljs.core.deref.call(null,name)], null)], null);
});

//# sourceMappingURL=views.js.map?rel=1547392175632
