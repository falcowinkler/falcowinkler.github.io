// Compiled by ClojureScript 1.10.238 {}
goog.provide('falcowinkler.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('falcowinkler.events');
goog.require('falcowinkler.views');
goog.require('falcowinkler.config');
falcowinkler.core.dev_setup = (function falcowinkler$core$dev_setup(){
if(falcowinkler.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
falcowinkler.core.mount_root = (function falcowinkler$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [falcowinkler.views.main_panel], null),document.getElementById("app"));
});
falcowinkler.core.init = (function falcowinkler$core$init(){
re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("falcowinkler.events","initialize-db","falcowinkler.events/initialize-db",59996146)], null));

falcowinkler.core.dev_setup.call(null);

return falcowinkler.core.mount_root.call(null);
});
goog.exportSymbol('falcowinkler.core.init', falcowinkler.core.init);

//# sourceMappingURL=core.js.map?rel=1547392175641
