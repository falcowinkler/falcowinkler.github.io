// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__38807 = arguments.length;
switch (G__38807) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async38808 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38808 = (function (f,blockable,meta38809){
this.f = f;
this.blockable = blockable;
this.meta38809 = meta38809;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38808.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38810,meta38809__$1){
var self__ = this;
var _38810__$1 = this;
return (new cljs.core.async.t_cljs$core$async38808(self__.f,self__.blockable,meta38809__$1));
});

cljs.core.async.t_cljs$core$async38808.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38810){
var self__ = this;
var _38810__$1 = this;
return self__.meta38809;
});

cljs.core.async.t_cljs$core$async38808.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38808.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38808.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async38808.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async38808.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta38809","meta38809",613745521,null)], null);
});

cljs.core.async.t_cljs$core$async38808.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38808.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38808";

cljs.core.async.t_cljs$core$async38808.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38808");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38808.
 */
cljs.core.async.__GT_t_cljs$core$async38808 = (function cljs$core$async$__GT_t_cljs$core$async38808(f__$1,blockable__$1,meta38809){
return (new cljs.core.async.t_cljs$core$async38808(f__$1,blockable__$1,meta38809));
});

}

return (new cljs.core.async.t_cljs$core$async38808(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__38814 = arguments.length;
switch (G__38814) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__38817 = arguments.length;
switch (G__38817) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__38820 = arguments.length;
switch (G__38820) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_38822 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_38822);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_38822,ret){
return (function (){
return fn1.call(null,val_38822);
});})(val_38822,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__38824 = arguments.length;
switch (G__38824) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___38826 = n;
var x_38827 = (0);
while(true){
if((x_38827 < n__4376__auto___38826)){
(a[x_38827] = (0));

var G__38828 = (x_38827 + (1));
x_38827 = G__38828;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__38829 = (i + (1));
i = G__38829;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async38830 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38830 = (function (flag,meta38831){
this.flag = flag;
this.meta38831 = meta38831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_38832,meta38831__$1){
var self__ = this;
var _38832__$1 = this;
return (new cljs.core.async.t_cljs$core$async38830(self__.flag,meta38831__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async38830.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_38832){
var self__ = this;
var _38832__$1 = this;
return self__.meta38831;
});})(flag))
;

cljs.core.async.t_cljs$core$async38830.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38830.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async38830.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38830.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async38830.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta38831","meta38831",-695316463,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async38830.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38830.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38830";

cljs.core.async.t_cljs$core$async38830.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38830");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38830.
 */
cljs.core.async.__GT_t_cljs$core$async38830 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async38830(flag__$1,meta38831){
return (new cljs.core.async.t_cljs$core$async38830(flag__$1,meta38831));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async38830(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async38833 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async38833 = (function (flag,cb,meta38834){
this.flag = flag;
this.cb = cb;
this.meta38834 = meta38834;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async38833.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38835,meta38834__$1){
var self__ = this;
var _38835__$1 = this;
return (new cljs.core.async.t_cljs$core$async38833(self__.flag,self__.cb,meta38834__$1));
});

cljs.core.async.t_cljs$core$async38833.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38835){
var self__ = this;
var _38835__$1 = this;
return self__.meta38834;
});

cljs.core.async.t_cljs$core$async38833.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async38833.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async38833.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async38833.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async38833.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta38834","meta38834",-1042944490,null)], null);
});

cljs.core.async.t_cljs$core$async38833.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async38833.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async38833";

cljs.core.async.t_cljs$core$async38833.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async38833");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async38833.
 */
cljs.core.async.__GT_t_cljs$core$async38833 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async38833(flag__$1,cb__$1,meta38834){
return (new cljs.core.async.t_cljs$core$async38833(flag__$1,cb__$1,meta38834));
});

}

return (new cljs.core.async.t_cljs$core$async38833(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38836_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38836_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__38837_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__38837_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__38838 = (i + (1));
i = G__38838;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38844 = arguments.length;
var i__4500__auto___38845 = (0);
while(true){
if((i__4500__auto___38845 < len__4499__auto___38844)){
args__4502__auto__.push((arguments[i__4500__auto___38845]));

var G__38846 = (i__4500__auto___38845 + (1));
i__4500__auto___38845 = G__38846;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__38841){
var map__38842 = p__38841;
var map__38842__$1 = ((((!((map__38842 == null)))?(((((map__38842.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38842.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38842):map__38842);
var opts = map__38842__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq38839){
var G__38840 = cljs.core.first.call(null,seq38839);
var seq38839__$1 = cljs.core.next.call(null,seq38839);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38840,seq38839__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__38848 = arguments.length;
switch (G__38848) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__26017__auto___38894 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___38894){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___38894){
return (function (state_38872){
var state_val_38873 = (state_38872[(1)]);
if((state_val_38873 === (7))){
var inst_38868 = (state_38872[(2)]);
var state_38872__$1 = state_38872;
var statearr_38874_38895 = state_38872__$1;
(statearr_38874_38895[(2)] = inst_38868);

(statearr_38874_38895[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (1))){
var state_38872__$1 = state_38872;
var statearr_38875_38896 = state_38872__$1;
(statearr_38875_38896[(2)] = null);

(statearr_38875_38896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (4))){
var inst_38851 = (state_38872[(7)]);
var inst_38851__$1 = (state_38872[(2)]);
var inst_38852 = (inst_38851__$1 == null);
var state_38872__$1 = (function (){var statearr_38876 = state_38872;
(statearr_38876[(7)] = inst_38851__$1);

return statearr_38876;
})();
if(cljs.core.truth_(inst_38852)){
var statearr_38877_38897 = state_38872__$1;
(statearr_38877_38897[(1)] = (5));

} else {
var statearr_38878_38898 = state_38872__$1;
(statearr_38878_38898[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (13))){
var state_38872__$1 = state_38872;
var statearr_38879_38899 = state_38872__$1;
(statearr_38879_38899[(2)] = null);

(statearr_38879_38899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (6))){
var inst_38851 = (state_38872[(7)]);
var state_38872__$1 = state_38872;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38872__$1,(11),to,inst_38851);
} else {
if((state_val_38873 === (3))){
var inst_38870 = (state_38872[(2)]);
var state_38872__$1 = state_38872;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38872__$1,inst_38870);
} else {
if((state_val_38873 === (12))){
var state_38872__$1 = state_38872;
var statearr_38880_38900 = state_38872__$1;
(statearr_38880_38900[(2)] = null);

(statearr_38880_38900[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (2))){
var state_38872__$1 = state_38872;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38872__$1,(4),from);
} else {
if((state_val_38873 === (11))){
var inst_38861 = (state_38872[(2)]);
var state_38872__$1 = state_38872;
if(cljs.core.truth_(inst_38861)){
var statearr_38881_38901 = state_38872__$1;
(statearr_38881_38901[(1)] = (12));

} else {
var statearr_38882_38902 = state_38872__$1;
(statearr_38882_38902[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (9))){
var state_38872__$1 = state_38872;
var statearr_38883_38903 = state_38872__$1;
(statearr_38883_38903[(2)] = null);

(statearr_38883_38903[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (5))){
var state_38872__$1 = state_38872;
if(cljs.core.truth_(close_QMARK_)){
var statearr_38884_38904 = state_38872__$1;
(statearr_38884_38904[(1)] = (8));

} else {
var statearr_38885_38905 = state_38872__$1;
(statearr_38885_38905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (14))){
var inst_38866 = (state_38872[(2)]);
var state_38872__$1 = state_38872;
var statearr_38886_38906 = state_38872__$1;
(statearr_38886_38906[(2)] = inst_38866);

(statearr_38886_38906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (10))){
var inst_38858 = (state_38872[(2)]);
var state_38872__$1 = state_38872;
var statearr_38887_38907 = state_38872__$1;
(statearr_38887_38907[(2)] = inst_38858);

(statearr_38887_38907[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38873 === (8))){
var inst_38855 = cljs.core.async.close_BANG_.call(null,to);
var state_38872__$1 = state_38872;
var statearr_38888_38908 = state_38872__$1;
(statearr_38888_38908[(2)] = inst_38855);

(statearr_38888_38908[(1)] = (10));


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
});})(c__26017__auto___38894))
;
return ((function (switch__25929__auto__,c__26017__auto___38894){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_38889 = [null,null,null,null,null,null,null,null];
(statearr_38889[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_38889[(1)] = (1));

return statearr_38889;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_38872){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_38872);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e38890){if((e38890 instanceof Object)){
var ex__25933__auto__ = e38890;
var statearr_38891_38909 = state_38872;
(statearr_38891_38909[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38872);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38910 = state_38872;
state_38872 = G__38910;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_38872){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_38872);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___38894))
})();
var state__26019__auto__ = (function (){var statearr_38892 = f__26018__auto__.call(null);
(statearr_38892[(6)] = c__26017__auto___38894);

return statearr_38892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___38894))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process__$1 = ((function (jobs,results){
return (function (p__38911){
var vec__38912 = p__38911;
var v = cljs.core.nth.call(null,vec__38912,(0),null);
var p = cljs.core.nth.call(null,vec__38912,(1),null);
var job = vec__38912;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26017__auto___39083 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___39083,res,vec__38912,v,p,job,jobs,results){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___39083,res,vec__38912,v,p,job,jobs,results){
return (function (state_38919){
var state_val_38920 = (state_38919[(1)]);
if((state_val_38920 === (1))){
var state_38919__$1 = state_38919;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_38919__$1,(2),res,v);
} else {
if((state_val_38920 === (2))){
var inst_38916 = (state_38919[(2)]);
var inst_38917 = cljs.core.async.close_BANG_.call(null,res);
var state_38919__$1 = (function (){var statearr_38921 = state_38919;
(statearr_38921[(7)] = inst_38916);

return statearr_38921;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38919__$1,inst_38917);
} else {
return null;
}
}
});})(c__26017__auto___39083,res,vec__38912,v,p,job,jobs,results))
;
return ((function (switch__25929__auto__,c__26017__auto___39083,res,vec__38912,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_38922 = [null,null,null,null,null,null,null,null];
(statearr_38922[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_38922[(1)] = (1));

return statearr_38922;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_38919){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_38919);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e38923){if((e38923 instanceof Object)){
var ex__25933__auto__ = e38923;
var statearr_38924_39084 = state_38919;
(statearr_38924_39084[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38919);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38923;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39085 = state_38919;
state_38919 = G__39085;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_38919){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_38919);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___39083,res,vec__38912,v,p,job,jobs,results))
})();
var state__26019__auto__ = (function (){var statearr_38925 = f__26018__auto__.call(null);
(statearr_38925[(6)] = c__26017__auto___39083);

return statearr_38925;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___39083,res,vec__38912,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process__$1){
return (function (p__38926){
var vec__38927 = p__38926;
var v = cljs.core.nth.call(null,vec__38927,(0),null);
var p = cljs.core.nth.call(null,vec__38927,(1),null);
var job = vec__38927;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process__$1))
;
var n__4376__auto___39086 = n;
var __39087 = (0);
while(true){
if((__39087 < n__4376__auto___39086)){
var G__38930_39088 = type;
var G__38930_39089__$1 = (((G__38930_39088 instanceof cljs.core.Keyword))?G__38930_39088.fqn:null);
switch (G__38930_39089__$1) {
case "compute":
var c__26017__auto___39091 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39087,c__26017__auto___39091,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (__39087,c__26017__auto___39091,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async){
return (function (state_38943){
var state_val_38944 = (state_38943[(1)]);
if((state_val_38944 === (1))){
var state_38943__$1 = state_38943;
var statearr_38945_39092 = state_38943__$1;
(statearr_38945_39092[(2)] = null);

(statearr_38945_39092[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (2))){
var state_38943__$1 = state_38943;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38943__$1,(4),jobs);
} else {
if((state_val_38944 === (3))){
var inst_38941 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38943__$1,inst_38941);
} else {
if((state_val_38944 === (4))){
var inst_38933 = (state_38943[(2)]);
var inst_38934 = process__$1.call(null,inst_38933);
var state_38943__$1 = state_38943;
if(cljs.core.truth_(inst_38934)){
var statearr_38946_39093 = state_38943__$1;
(statearr_38946_39093[(1)] = (5));

} else {
var statearr_38947_39094 = state_38943__$1;
(statearr_38947_39094[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (5))){
var state_38943__$1 = state_38943;
var statearr_38948_39095 = state_38943__$1;
(statearr_38948_39095[(2)] = null);

(statearr_38948_39095[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (6))){
var state_38943__$1 = state_38943;
var statearr_38949_39096 = state_38943__$1;
(statearr_38949_39096[(2)] = null);

(statearr_38949_39096[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38944 === (7))){
var inst_38939 = (state_38943[(2)]);
var state_38943__$1 = state_38943;
var statearr_38950_39097 = state_38943__$1;
(statearr_38950_39097[(2)] = inst_38939);

(statearr_38950_39097[(1)] = (3));


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
});})(__39087,c__26017__auto___39091,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async))
;
return ((function (__39087,switch__25929__auto__,c__26017__auto___39091,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_38951 = [null,null,null,null,null,null,null];
(statearr_38951[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_38951[(1)] = (1));

return statearr_38951;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_38943){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_38943);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e38952){if((e38952 instanceof Object)){
var ex__25933__auto__ = e38952;
var statearr_38953_39098 = state_38943;
(statearr_38953_39098[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38943);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38952;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39099 = state_38943;
state_38943 = G__39099;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_38943){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_38943);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(__39087,switch__25929__auto__,c__26017__auto___39091,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async))
})();
var state__26019__auto__ = (function (){var statearr_38954 = f__26018__auto__.call(null);
(statearr_38954[(6)] = c__26017__auto___39091);

return statearr_38954;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(__39087,c__26017__auto___39091,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async))
);


break;
case "async":
var c__26017__auto___39100 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__39087,c__26017__auto___39100,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (__39087,c__26017__auto___39100,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async){
return (function (state_38967){
var state_val_38968 = (state_38967[(1)]);
if((state_val_38968 === (1))){
var state_38967__$1 = state_38967;
var statearr_38969_39101 = state_38967__$1;
(statearr_38969_39101[(2)] = null);

(statearr_38969_39101[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (2))){
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38967__$1,(4),jobs);
} else {
if((state_val_38968 === (3))){
var inst_38965 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38967__$1,inst_38965);
} else {
if((state_val_38968 === (4))){
var inst_38957 = (state_38967[(2)]);
var inst_38958 = async.call(null,inst_38957);
var state_38967__$1 = state_38967;
if(cljs.core.truth_(inst_38958)){
var statearr_38970_39102 = state_38967__$1;
(statearr_38970_39102[(1)] = (5));

} else {
var statearr_38971_39103 = state_38967__$1;
(statearr_38971_39103[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (5))){
var state_38967__$1 = state_38967;
var statearr_38972_39104 = state_38967__$1;
(statearr_38972_39104[(2)] = null);

(statearr_38972_39104[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (6))){
var state_38967__$1 = state_38967;
var statearr_38973_39105 = state_38967__$1;
(statearr_38973_39105[(2)] = null);

(statearr_38973_39105[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38968 === (7))){
var inst_38963 = (state_38967[(2)]);
var state_38967__$1 = state_38967;
var statearr_38974_39106 = state_38967__$1;
(statearr_38974_39106[(2)] = inst_38963);

(statearr_38974_39106[(1)] = (3));


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
});})(__39087,c__26017__auto___39100,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async))
;
return ((function (__39087,switch__25929__auto__,c__26017__auto___39100,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_38975 = [null,null,null,null,null,null,null];
(statearr_38975[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_38975[(1)] = (1));

return statearr_38975;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_38967){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_38967);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e38976){if((e38976 instanceof Object)){
var ex__25933__auto__ = e38976;
var statearr_38977_39107 = state_38967;
(statearr_38977_39107[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38967);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39108 = state_38967;
state_38967 = G__39108;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_38967){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_38967);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(__39087,switch__25929__auto__,c__26017__auto___39100,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async))
})();
var state__26019__auto__ = (function (){var statearr_38978 = f__26018__auto__.call(null);
(statearr_38978[(6)] = c__26017__auto___39100);

return statearr_38978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(__39087,c__26017__auto___39100,G__38930_39088,G__38930_39089__$1,n__4376__auto___39086,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38930_39089__$1)].join('')));

}

var G__39109 = (__39087 + (1));
__39087 = G__39109;
continue;
} else {
}
break;
}

var c__26017__auto___39110 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___39110,jobs,results,process__$1,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___39110,jobs,results,process__$1,async){
return (function (state_39000){
var state_val_39001 = (state_39000[(1)]);
if((state_val_39001 === (1))){
var state_39000__$1 = state_39000;
var statearr_39002_39111 = state_39000__$1;
(statearr_39002_39111[(2)] = null);

(statearr_39002_39111[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39001 === (2))){
var state_39000__$1 = state_39000;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39000__$1,(4),from);
} else {
if((state_val_39001 === (3))){
var inst_38998 = (state_39000[(2)]);
var state_39000__$1 = state_39000;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39000__$1,inst_38998);
} else {
if((state_val_39001 === (4))){
var inst_38981 = (state_39000[(7)]);
var inst_38981__$1 = (state_39000[(2)]);
var inst_38982 = (inst_38981__$1 == null);
var state_39000__$1 = (function (){var statearr_39003 = state_39000;
(statearr_39003[(7)] = inst_38981__$1);

return statearr_39003;
})();
if(cljs.core.truth_(inst_38982)){
var statearr_39004_39112 = state_39000__$1;
(statearr_39004_39112[(1)] = (5));

} else {
var statearr_39005_39113 = state_39000__$1;
(statearr_39005_39113[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39001 === (5))){
var inst_38984 = cljs.core.async.close_BANG_.call(null,jobs);
var state_39000__$1 = state_39000;
var statearr_39006_39114 = state_39000__$1;
(statearr_39006_39114[(2)] = inst_38984);

(statearr_39006_39114[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39001 === (6))){
var inst_38986 = (state_39000[(8)]);
var inst_38981 = (state_39000[(7)]);
var inst_38986__$1 = cljs.core.async.chan.call(null,(1));
var inst_38987 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38988 = [inst_38981,inst_38986__$1];
var inst_38989 = (new cljs.core.PersistentVector(null,2,(5),inst_38987,inst_38988,null));
var state_39000__$1 = (function (){var statearr_39007 = state_39000;
(statearr_39007[(8)] = inst_38986__$1);

return statearr_39007;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39000__$1,(8),jobs,inst_38989);
} else {
if((state_val_39001 === (7))){
var inst_38996 = (state_39000[(2)]);
var state_39000__$1 = state_39000;
var statearr_39008_39115 = state_39000__$1;
(statearr_39008_39115[(2)] = inst_38996);

(statearr_39008_39115[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39001 === (8))){
var inst_38986 = (state_39000[(8)]);
var inst_38991 = (state_39000[(2)]);
var state_39000__$1 = (function (){var statearr_39009 = state_39000;
(statearr_39009[(9)] = inst_38991);

return statearr_39009;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39000__$1,(9),results,inst_38986);
} else {
if((state_val_39001 === (9))){
var inst_38993 = (state_39000[(2)]);
var state_39000__$1 = (function (){var statearr_39010 = state_39000;
(statearr_39010[(10)] = inst_38993);

return statearr_39010;
})();
var statearr_39011_39116 = state_39000__$1;
(statearr_39011_39116[(2)] = null);

(statearr_39011_39116[(1)] = (2));


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
});})(c__26017__auto___39110,jobs,results,process__$1,async))
;
return ((function (switch__25929__auto__,c__26017__auto___39110,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_39012 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39012[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_39012[(1)] = (1));

return statearr_39012;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_39000){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39000);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39013){if((e39013 instanceof Object)){
var ex__25933__auto__ = e39013;
var statearr_39014_39117 = state_39000;
(statearr_39014_39117[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39000);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39013;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39118 = state_39000;
state_39000 = G__39118;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_39000){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_39000);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___39110,jobs,results,process__$1,async))
})();
var state__26019__auto__ = (function (){var statearr_39015 = f__26018__auto__.call(null);
(statearr_39015[(6)] = c__26017__auto___39110);

return statearr_39015;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___39110,jobs,results,process__$1,async))
);


var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__,jobs,results,process__$1,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__,jobs,results,process__$1,async){
return (function (state_39053){
var state_val_39054 = (state_39053[(1)]);
if((state_val_39054 === (7))){
var inst_39049 = (state_39053[(2)]);
var state_39053__$1 = state_39053;
var statearr_39055_39119 = state_39053__$1;
(statearr_39055_39119[(2)] = inst_39049);

(statearr_39055_39119[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (20))){
var state_39053__$1 = state_39053;
var statearr_39056_39120 = state_39053__$1;
(statearr_39056_39120[(2)] = null);

(statearr_39056_39120[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (1))){
var state_39053__$1 = state_39053;
var statearr_39057_39121 = state_39053__$1;
(statearr_39057_39121[(2)] = null);

(statearr_39057_39121[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (4))){
var inst_39018 = (state_39053[(7)]);
var inst_39018__$1 = (state_39053[(2)]);
var inst_39019 = (inst_39018__$1 == null);
var state_39053__$1 = (function (){var statearr_39058 = state_39053;
(statearr_39058[(7)] = inst_39018__$1);

return statearr_39058;
})();
if(cljs.core.truth_(inst_39019)){
var statearr_39059_39122 = state_39053__$1;
(statearr_39059_39122[(1)] = (5));

} else {
var statearr_39060_39123 = state_39053__$1;
(statearr_39060_39123[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (15))){
var inst_39031 = (state_39053[(8)]);
var state_39053__$1 = state_39053;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39053__$1,(18),to,inst_39031);
} else {
if((state_val_39054 === (21))){
var inst_39044 = (state_39053[(2)]);
var state_39053__$1 = state_39053;
var statearr_39061_39124 = state_39053__$1;
(statearr_39061_39124[(2)] = inst_39044);

(statearr_39061_39124[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (13))){
var inst_39046 = (state_39053[(2)]);
var state_39053__$1 = (function (){var statearr_39062 = state_39053;
(statearr_39062[(9)] = inst_39046);

return statearr_39062;
})();
var statearr_39063_39125 = state_39053__$1;
(statearr_39063_39125[(2)] = null);

(statearr_39063_39125[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (6))){
var inst_39018 = (state_39053[(7)]);
var state_39053__$1 = state_39053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39053__$1,(11),inst_39018);
} else {
if((state_val_39054 === (17))){
var inst_39039 = (state_39053[(2)]);
var state_39053__$1 = state_39053;
if(cljs.core.truth_(inst_39039)){
var statearr_39064_39126 = state_39053__$1;
(statearr_39064_39126[(1)] = (19));

} else {
var statearr_39065_39127 = state_39053__$1;
(statearr_39065_39127[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (3))){
var inst_39051 = (state_39053[(2)]);
var state_39053__$1 = state_39053;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39053__$1,inst_39051);
} else {
if((state_val_39054 === (12))){
var inst_39028 = (state_39053[(10)]);
var state_39053__$1 = state_39053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39053__$1,(14),inst_39028);
} else {
if((state_val_39054 === (2))){
var state_39053__$1 = state_39053;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39053__$1,(4),results);
} else {
if((state_val_39054 === (19))){
var state_39053__$1 = state_39053;
var statearr_39066_39128 = state_39053__$1;
(statearr_39066_39128[(2)] = null);

(statearr_39066_39128[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (11))){
var inst_39028 = (state_39053[(2)]);
var state_39053__$1 = (function (){var statearr_39067 = state_39053;
(statearr_39067[(10)] = inst_39028);

return statearr_39067;
})();
var statearr_39068_39129 = state_39053__$1;
(statearr_39068_39129[(2)] = null);

(statearr_39068_39129[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (9))){
var state_39053__$1 = state_39053;
var statearr_39069_39130 = state_39053__$1;
(statearr_39069_39130[(2)] = null);

(statearr_39069_39130[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (5))){
var state_39053__$1 = state_39053;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39070_39131 = state_39053__$1;
(statearr_39070_39131[(1)] = (8));

} else {
var statearr_39071_39132 = state_39053__$1;
(statearr_39071_39132[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (14))){
var inst_39033 = (state_39053[(11)]);
var inst_39031 = (state_39053[(8)]);
var inst_39031__$1 = (state_39053[(2)]);
var inst_39032 = (inst_39031__$1 == null);
var inst_39033__$1 = cljs.core.not.call(null,inst_39032);
var state_39053__$1 = (function (){var statearr_39072 = state_39053;
(statearr_39072[(11)] = inst_39033__$1);

(statearr_39072[(8)] = inst_39031__$1);

return statearr_39072;
})();
if(inst_39033__$1){
var statearr_39073_39133 = state_39053__$1;
(statearr_39073_39133[(1)] = (15));

} else {
var statearr_39074_39134 = state_39053__$1;
(statearr_39074_39134[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (16))){
var inst_39033 = (state_39053[(11)]);
var state_39053__$1 = state_39053;
var statearr_39075_39135 = state_39053__$1;
(statearr_39075_39135[(2)] = inst_39033);

(statearr_39075_39135[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (10))){
var inst_39025 = (state_39053[(2)]);
var state_39053__$1 = state_39053;
var statearr_39076_39136 = state_39053__$1;
(statearr_39076_39136[(2)] = inst_39025);

(statearr_39076_39136[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (18))){
var inst_39036 = (state_39053[(2)]);
var state_39053__$1 = state_39053;
var statearr_39077_39137 = state_39053__$1;
(statearr_39077_39137[(2)] = inst_39036);

(statearr_39077_39137[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39054 === (8))){
var inst_39022 = cljs.core.async.close_BANG_.call(null,to);
var state_39053__$1 = state_39053;
var statearr_39078_39138 = state_39053__$1;
(statearr_39078_39138[(2)] = inst_39022);

(statearr_39078_39138[(1)] = (10));


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
});})(c__26017__auto__,jobs,results,process__$1,async))
;
return ((function (switch__25929__auto__,c__26017__auto__,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_39079 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39079[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_39079[(1)] = (1));

return statearr_39079;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_39053){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39053);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39080){if((e39080 instanceof Object)){
var ex__25933__auto__ = e39080;
var statearr_39081_39139 = state_39053;
(statearr_39081_39139[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39053);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39080;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39140 = state_39053;
state_39053 = G__39140;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_39053){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_39053);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,jobs,results,process__$1,async))
})();
var state__26019__auto__ = (function (){var statearr_39082 = f__26018__auto__.call(null);
(statearr_39082[(6)] = c__26017__auto__);

return statearr_39082;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__,jobs,results,process__$1,async))
);

return c__26017__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__39142 = arguments.length;
switch (G__39142) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__39145 = arguments.length;
switch (G__39145) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__39148 = arguments.length;
switch (G__39148) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__26017__auto___39197 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___39197,tc,fc){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___39197,tc,fc){
return (function (state_39174){
var state_val_39175 = (state_39174[(1)]);
if((state_val_39175 === (7))){
var inst_39170 = (state_39174[(2)]);
var state_39174__$1 = state_39174;
var statearr_39176_39198 = state_39174__$1;
(statearr_39176_39198[(2)] = inst_39170);

(statearr_39176_39198[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (1))){
var state_39174__$1 = state_39174;
var statearr_39177_39199 = state_39174__$1;
(statearr_39177_39199[(2)] = null);

(statearr_39177_39199[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (4))){
var inst_39151 = (state_39174[(7)]);
var inst_39151__$1 = (state_39174[(2)]);
var inst_39152 = (inst_39151__$1 == null);
var state_39174__$1 = (function (){var statearr_39178 = state_39174;
(statearr_39178[(7)] = inst_39151__$1);

return statearr_39178;
})();
if(cljs.core.truth_(inst_39152)){
var statearr_39179_39200 = state_39174__$1;
(statearr_39179_39200[(1)] = (5));

} else {
var statearr_39180_39201 = state_39174__$1;
(statearr_39180_39201[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (13))){
var state_39174__$1 = state_39174;
var statearr_39181_39202 = state_39174__$1;
(statearr_39181_39202[(2)] = null);

(statearr_39181_39202[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (6))){
var inst_39151 = (state_39174[(7)]);
var inst_39157 = p.call(null,inst_39151);
var state_39174__$1 = state_39174;
if(cljs.core.truth_(inst_39157)){
var statearr_39182_39203 = state_39174__$1;
(statearr_39182_39203[(1)] = (9));

} else {
var statearr_39183_39204 = state_39174__$1;
(statearr_39183_39204[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (3))){
var inst_39172 = (state_39174[(2)]);
var state_39174__$1 = state_39174;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39174__$1,inst_39172);
} else {
if((state_val_39175 === (12))){
var state_39174__$1 = state_39174;
var statearr_39184_39205 = state_39174__$1;
(statearr_39184_39205[(2)] = null);

(statearr_39184_39205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (2))){
var state_39174__$1 = state_39174;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39174__$1,(4),ch);
} else {
if((state_val_39175 === (11))){
var inst_39151 = (state_39174[(7)]);
var inst_39161 = (state_39174[(2)]);
var state_39174__$1 = state_39174;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39174__$1,(8),inst_39161,inst_39151);
} else {
if((state_val_39175 === (9))){
var state_39174__$1 = state_39174;
var statearr_39185_39206 = state_39174__$1;
(statearr_39185_39206[(2)] = tc);

(statearr_39185_39206[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (5))){
var inst_39154 = cljs.core.async.close_BANG_.call(null,tc);
var inst_39155 = cljs.core.async.close_BANG_.call(null,fc);
var state_39174__$1 = (function (){var statearr_39186 = state_39174;
(statearr_39186[(8)] = inst_39154);

return statearr_39186;
})();
var statearr_39187_39207 = state_39174__$1;
(statearr_39187_39207[(2)] = inst_39155);

(statearr_39187_39207[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (14))){
var inst_39168 = (state_39174[(2)]);
var state_39174__$1 = state_39174;
var statearr_39188_39208 = state_39174__$1;
(statearr_39188_39208[(2)] = inst_39168);

(statearr_39188_39208[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (10))){
var state_39174__$1 = state_39174;
var statearr_39189_39209 = state_39174__$1;
(statearr_39189_39209[(2)] = fc);

(statearr_39189_39209[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39175 === (8))){
var inst_39163 = (state_39174[(2)]);
var state_39174__$1 = state_39174;
if(cljs.core.truth_(inst_39163)){
var statearr_39190_39210 = state_39174__$1;
(statearr_39190_39210[(1)] = (12));

} else {
var statearr_39191_39211 = state_39174__$1;
(statearr_39191_39211[(1)] = (13));

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
});})(c__26017__auto___39197,tc,fc))
;
return ((function (switch__25929__auto__,c__26017__auto___39197,tc,fc){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_39192 = [null,null,null,null,null,null,null,null,null];
(statearr_39192[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_39192[(1)] = (1));

return statearr_39192;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_39174){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39174);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39193){if((e39193 instanceof Object)){
var ex__25933__auto__ = e39193;
var statearr_39194_39212 = state_39174;
(statearr_39194_39212[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39193;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39213 = state_39174;
state_39174 = G__39213;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_39174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_39174);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___39197,tc,fc))
})();
var state__26019__auto__ = (function (){var statearr_39195 = f__26018__auto__.call(null);
(statearr_39195[(6)] = c__26017__auto___39197);

return statearr_39195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___39197,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__){
return (function (state_39234){
var state_val_39235 = (state_39234[(1)]);
if((state_val_39235 === (7))){
var inst_39230 = (state_39234[(2)]);
var state_39234__$1 = state_39234;
var statearr_39236_39254 = state_39234__$1;
(statearr_39236_39254[(2)] = inst_39230);

(statearr_39236_39254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39235 === (1))){
var inst_39214 = init;
var state_39234__$1 = (function (){var statearr_39237 = state_39234;
(statearr_39237[(7)] = inst_39214);

return statearr_39237;
})();
var statearr_39238_39255 = state_39234__$1;
(statearr_39238_39255[(2)] = null);

(statearr_39238_39255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39235 === (4))){
var inst_39217 = (state_39234[(8)]);
var inst_39217__$1 = (state_39234[(2)]);
var inst_39218 = (inst_39217__$1 == null);
var state_39234__$1 = (function (){var statearr_39239 = state_39234;
(statearr_39239[(8)] = inst_39217__$1);

return statearr_39239;
})();
if(cljs.core.truth_(inst_39218)){
var statearr_39240_39256 = state_39234__$1;
(statearr_39240_39256[(1)] = (5));

} else {
var statearr_39241_39257 = state_39234__$1;
(statearr_39241_39257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39235 === (6))){
var inst_39221 = (state_39234[(9)]);
var inst_39217 = (state_39234[(8)]);
var inst_39214 = (state_39234[(7)]);
var inst_39221__$1 = f.call(null,inst_39214,inst_39217);
var inst_39222 = cljs.core.reduced_QMARK_.call(null,inst_39221__$1);
var state_39234__$1 = (function (){var statearr_39242 = state_39234;
(statearr_39242[(9)] = inst_39221__$1);

return statearr_39242;
})();
if(inst_39222){
var statearr_39243_39258 = state_39234__$1;
(statearr_39243_39258[(1)] = (8));

} else {
var statearr_39244_39259 = state_39234__$1;
(statearr_39244_39259[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39235 === (3))){
var inst_39232 = (state_39234[(2)]);
var state_39234__$1 = state_39234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39234__$1,inst_39232);
} else {
if((state_val_39235 === (2))){
var state_39234__$1 = state_39234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39234__$1,(4),ch);
} else {
if((state_val_39235 === (9))){
var inst_39221 = (state_39234[(9)]);
var inst_39214 = inst_39221;
var state_39234__$1 = (function (){var statearr_39245 = state_39234;
(statearr_39245[(7)] = inst_39214);

return statearr_39245;
})();
var statearr_39246_39260 = state_39234__$1;
(statearr_39246_39260[(2)] = null);

(statearr_39246_39260[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39235 === (5))){
var inst_39214 = (state_39234[(7)]);
var state_39234__$1 = state_39234;
var statearr_39247_39261 = state_39234__$1;
(statearr_39247_39261[(2)] = inst_39214);

(statearr_39247_39261[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39235 === (10))){
var inst_39228 = (state_39234[(2)]);
var state_39234__$1 = state_39234;
var statearr_39248_39262 = state_39234__$1;
(statearr_39248_39262[(2)] = inst_39228);

(statearr_39248_39262[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39235 === (8))){
var inst_39221 = (state_39234[(9)]);
var inst_39224 = cljs.core.deref.call(null,inst_39221);
var state_39234__$1 = state_39234;
var statearr_39249_39263 = state_39234__$1;
(statearr_39249_39263[(2)] = inst_39224);

(statearr_39249_39263[(1)] = (10));


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
});})(c__26017__auto__))
;
return ((function (switch__25929__auto__,c__26017__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__25930__auto__ = null;
var cljs$core$async$reduce_$_state_machine__25930__auto____0 = (function (){
var statearr_39250 = [null,null,null,null,null,null,null,null,null,null];
(statearr_39250[(0)] = cljs$core$async$reduce_$_state_machine__25930__auto__);

(statearr_39250[(1)] = (1));

return statearr_39250;
});
var cljs$core$async$reduce_$_state_machine__25930__auto____1 = (function (state_39234){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39251){if((e39251 instanceof Object)){
var ex__25933__auto__ = e39251;
var statearr_39252_39264 = state_39234;
(statearr_39252_39264[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39251;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39265 = state_39234;
state_39234 = G__39265;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25930__auto__ = function(state_39234){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25930__auto____1.call(this,state_39234);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25930__auto____0;
cljs$core$async$reduce_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25930__auto____1;
return cljs$core$async$reduce_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_39253 = f__26018__auto__.call(null);
(statearr_39253[(6)] = c__26017__auto__);

return statearr_39253;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__))
);

return c__26017__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__,f__$1){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__,f__$1){
return (function (state_39271){
var state_val_39272 = (state_39271[(1)]);
if((state_val_39272 === (1))){
var inst_39266 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_39271__$1 = state_39271;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39271__$1,(2),inst_39266);
} else {
if((state_val_39272 === (2))){
var inst_39268 = (state_39271[(2)]);
var inst_39269 = f__$1.call(null,inst_39268);
var state_39271__$1 = state_39271;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39271__$1,inst_39269);
} else {
return null;
}
}
});})(c__26017__auto__,f__$1))
;
return ((function (switch__25929__auto__,c__26017__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__25930__auto__ = null;
var cljs$core$async$transduce_$_state_machine__25930__auto____0 = (function (){
var statearr_39273 = [null,null,null,null,null,null,null];
(statearr_39273[(0)] = cljs$core$async$transduce_$_state_machine__25930__auto__);

(statearr_39273[(1)] = (1));

return statearr_39273;
});
var cljs$core$async$transduce_$_state_machine__25930__auto____1 = (function (state_39271){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39271);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39274){if((e39274 instanceof Object)){
var ex__25933__auto__ = e39274;
var statearr_39275_39277 = state_39271;
(statearr_39275_39277[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39271);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39274;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39278 = state_39271;
state_39271 = G__39278;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25930__auto__ = function(state_39271){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25930__auto____1.call(this,state_39271);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25930__auto____0;
cljs$core$async$transduce_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25930__auto____1;
return cljs$core$async$transduce_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,f__$1))
})();
var state__26019__auto__ = (function (){var statearr_39276 = f__26018__auto__.call(null);
(statearr_39276[(6)] = c__26017__auto__);

return statearr_39276;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__,f__$1))
);

return c__26017__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__39280 = arguments.length;
switch (G__39280) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__){
return (function (state_39305){
var state_val_39306 = (state_39305[(1)]);
if((state_val_39306 === (7))){
var inst_39287 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39307_39328 = state_39305__$1;
(statearr_39307_39328[(2)] = inst_39287);

(statearr_39307_39328[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (1))){
var inst_39281 = cljs.core.seq.call(null,coll);
var inst_39282 = inst_39281;
var state_39305__$1 = (function (){var statearr_39308 = state_39305;
(statearr_39308[(7)] = inst_39282);

return statearr_39308;
})();
var statearr_39309_39329 = state_39305__$1;
(statearr_39309_39329[(2)] = null);

(statearr_39309_39329[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (4))){
var inst_39282 = (state_39305[(7)]);
var inst_39285 = cljs.core.first.call(null,inst_39282);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39305__$1,(7),ch,inst_39285);
} else {
if((state_val_39306 === (13))){
var inst_39299 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39310_39330 = state_39305__$1;
(statearr_39310_39330[(2)] = inst_39299);

(statearr_39310_39330[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (6))){
var inst_39290 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39290)){
var statearr_39311_39331 = state_39305__$1;
(statearr_39311_39331[(1)] = (8));

} else {
var statearr_39312_39332 = state_39305__$1;
(statearr_39312_39332[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (3))){
var inst_39303 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39305__$1,inst_39303);
} else {
if((state_val_39306 === (12))){
var state_39305__$1 = state_39305;
var statearr_39313_39333 = state_39305__$1;
(statearr_39313_39333[(2)] = null);

(statearr_39313_39333[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (2))){
var inst_39282 = (state_39305[(7)]);
var state_39305__$1 = state_39305;
if(cljs.core.truth_(inst_39282)){
var statearr_39314_39334 = state_39305__$1;
(statearr_39314_39334[(1)] = (4));

} else {
var statearr_39315_39335 = state_39305__$1;
(statearr_39315_39335[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (11))){
var inst_39296 = cljs.core.async.close_BANG_.call(null,ch);
var state_39305__$1 = state_39305;
var statearr_39316_39336 = state_39305__$1;
(statearr_39316_39336[(2)] = inst_39296);

(statearr_39316_39336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (9))){
var state_39305__$1 = state_39305;
if(cljs.core.truth_(close_QMARK_)){
var statearr_39317_39337 = state_39305__$1;
(statearr_39317_39337[(1)] = (11));

} else {
var statearr_39318_39338 = state_39305__$1;
(statearr_39318_39338[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (5))){
var inst_39282 = (state_39305[(7)]);
var state_39305__$1 = state_39305;
var statearr_39319_39339 = state_39305__$1;
(statearr_39319_39339[(2)] = inst_39282);

(statearr_39319_39339[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (10))){
var inst_39301 = (state_39305[(2)]);
var state_39305__$1 = state_39305;
var statearr_39320_39340 = state_39305__$1;
(statearr_39320_39340[(2)] = inst_39301);

(statearr_39320_39340[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39306 === (8))){
var inst_39282 = (state_39305[(7)]);
var inst_39292 = cljs.core.next.call(null,inst_39282);
var inst_39282__$1 = inst_39292;
var state_39305__$1 = (function (){var statearr_39321 = state_39305;
(statearr_39321[(7)] = inst_39282__$1);

return statearr_39321;
})();
var statearr_39322_39341 = state_39305__$1;
(statearr_39322_39341[(2)] = null);

(statearr_39322_39341[(1)] = (2));


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
});})(c__26017__auto__))
;
return ((function (switch__25929__auto__,c__26017__auto__){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_39323 = [null,null,null,null,null,null,null,null];
(statearr_39323[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_39323[(1)] = (1));

return statearr_39323;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_39305){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39305);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39324){if((e39324 instanceof Object)){
var ex__25933__auto__ = e39324;
var statearr_39325_39342 = state_39305;
(statearr_39325_39342[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39305);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39324;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39343 = state_39305;
state_39305 = G__39343;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_39305){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_39305);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_39326 = f__26018__auto__.call(null);
(statearr_39326[(6)] = c__26017__auto__);

return statearr_39326;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__))
);

return c__26017__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39344 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39344 = (function (ch,cs,meta39345){
this.ch = ch;
this.cs = cs;
this.meta39345 = meta39345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_39346,meta39345__$1){
var self__ = this;
var _39346__$1 = this;
return (new cljs.core.async.t_cljs$core$async39344(self__.ch,self__.cs,meta39345__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_39346){
var self__ = this;
var _39346__$1 = this;
return self__.meta39345;
});})(cs))
;

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39344.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async39344.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta39345","meta39345",1314016551,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async39344.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39344.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39344";

cljs.core.async.t_cljs$core$async39344.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39344");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39344.
 */
cljs.core.async.__GT_t_cljs$core$async39344 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async39344(ch__$1,cs__$1,meta39345){
return (new cljs.core.async.t_cljs$core$async39344(ch__$1,cs__$1,meta39345));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async39344(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__26017__auto___39566 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___39566,cs,m,dchan,dctr,done){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___39566,cs,m,dchan,dctr,done){
return (function (state_39481){
var state_val_39482 = (state_39481[(1)]);
if((state_val_39482 === (7))){
var inst_39477 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39483_39567 = state_39481__$1;
(statearr_39483_39567[(2)] = inst_39477);

(statearr_39483_39567[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (20))){
var inst_39380 = (state_39481[(7)]);
var inst_39392 = cljs.core.first.call(null,inst_39380);
var inst_39393 = cljs.core.nth.call(null,inst_39392,(0),null);
var inst_39394 = cljs.core.nth.call(null,inst_39392,(1),null);
var state_39481__$1 = (function (){var statearr_39484 = state_39481;
(statearr_39484[(8)] = inst_39393);

return statearr_39484;
})();
if(cljs.core.truth_(inst_39394)){
var statearr_39485_39568 = state_39481__$1;
(statearr_39485_39568[(1)] = (22));

} else {
var statearr_39486_39569 = state_39481__$1;
(statearr_39486_39569[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (27))){
var inst_39422 = (state_39481[(9)]);
var inst_39429 = (state_39481[(10)]);
var inst_39424 = (state_39481[(11)]);
var inst_39349 = (state_39481[(12)]);
var inst_39429__$1 = cljs.core._nth.call(null,inst_39422,inst_39424);
var inst_39430 = cljs.core.async.put_BANG_.call(null,inst_39429__$1,inst_39349,done);
var state_39481__$1 = (function (){var statearr_39487 = state_39481;
(statearr_39487[(10)] = inst_39429__$1);

return statearr_39487;
})();
if(cljs.core.truth_(inst_39430)){
var statearr_39488_39570 = state_39481__$1;
(statearr_39488_39570[(1)] = (30));

} else {
var statearr_39489_39571 = state_39481__$1;
(statearr_39489_39571[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (1))){
var state_39481__$1 = state_39481;
var statearr_39490_39572 = state_39481__$1;
(statearr_39490_39572[(2)] = null);

(statearr_39490_39572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (24))){
var inst_39380 = (state_39481[(7)]);
var inst_39399 = (state_39481[(2)]);
var inst_39400 = cljs.core.next.call(null,inst_39380);
var inst_39358 = inst_39400;
var inst_39359 = null;
var inst_39360 = (0);
var inst_39361 = (0);
var state_39481__$1 = (function (){var statearr_39491 = state_39481;
(statearr_39491[(13)] = inst_39361);

(statearr_39491[(14)] = inst_39359);

(statearr_39491[(15)] = inst_39358);

(statearr_39491[(16)] = inst_39360);

(statearr_39491[(17)] = inst_39399);

return statearr_39491;
})();
var statearr_39492_39573 = state_39481__$1;
(statearr_39492_39573[(2)] = null);

(statearr_39492_39573[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (39))){
var state_39481__$1 = state_39481;
var statearr_39496_39574 = state_39481__$1;
(statearr_39496_39574[(2)] = null);

(statearr_39496_39574[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (4))){
var inst_39349 = (state_39481[(12)]);
var inst_39349__$1 = (state_39481[(2)]);
var inst_39350 = (inst_39349__$1 == null);
var state_39481__$1 = (function (){var statearr_39497 = state_39481;
(statearr_39497[(12)] = inst_39349__$1);

return statearr_39497;
})();
if(cljs.core.truth_(inst_39350)){
var statearr_39498_39575 = state_39481__$1;
(statearr_39498_39575[(1)] = (5));

} else {
var statearr_39499_39576 = state_39481__$1;
(statearr_39499_39576[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (15))){
var inst_39361 = (state_39481[(13)]);
var inst_39359 = (state_39481[(14)]);
var inst_39358 = (state_39481[(15)]);
var inst_39360 = (state_39481[(16)]);
var inst_39376 = (state_39481[(2)]);
var inst_39377 = (inst_39361 + (1));
var tmp39493 = inst_39359;
var tmp39494 = inst_39358;
var tmp39495 = inst_39360;
var inst_39358__$1 = tmp39494;
var inst_39359__$1 = tmp39493;
var inst_39360__$1 = tmp39495;
var inst_39361__$1 = inst_39377;
var state_39481__$1 = (function (){var statearr_39500 = state_39481;
(statearr_39500[(13)] = inst_39361__$1);

(statearr_39500[(14)] = inst_39359__$1);

(statearr_39500[(15)] = inst_39358__$1);

(statearr_39500[(18)] = inst_39376);

(statearr_39500[(16)] = inst_39360__$1);

return statearr_39500;
})();
var statearr_39501_39577 = state_39481__$1;
(statearr_39501_39577[(2)] = null);

(statearr_39501_39577[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (21))){
var inst_39403 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39505_39578 = state_39481__$1;
(statearr_39505_39578[(2)] = inst_39403);

(statearr_39505_39578[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (31))){
var inst_39429 = (state_39481[(10)]);
var inst_39433 = done.call(null,null);
var inst_39434 = cljs.core.async.untap_STAR_.call(null,m,inst_39429);
var state_39481__$1 = (function (){var statearr_39506 = state_39481;
(statearr_39506[(19)] = inst_39433);

return statearr_39506;
})();
var statearr_39507_39579 = state_39481__$1;
(statearr_39507_39579[(2)] = inst_39434);

(statearr_39507_39579[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (32))){
var inst_39422 = (state_39481[(9)]);
var inst_39423 = (state_39481[(20)]);
var inst_39421 = (state_39481[(21)]);
var inst_39424 = (state_39481[(11)]);
var inst_39436 = (state_39481[(2)]);
var inst_39437 = (inst_39424 + (1));
var tmp39502 = inst_39422;
var tmp39503 = inst_39423;
var tmp39504 = inst_39421;
var inst_39421__$1 = tmp39504;
var inst_39422__$1 = tmp39502;
var inst_39423__$1 = tmp39503;
var inst_39424__$1 = inst_39437;
var state_39481__$1 = (function (){var statearr_39508 = state_39481;
(statearr_39508[(9)] = inst_39422__$1);

(statearr_39508[(20)] = inst_39423__$1);

(statearr_39508[(21)] = inst_39421__$1);

(statearr_39508[(11)] = inst_39424__$1);

(statearr_39508[(22)] = inst_39436);

return statearr_39508;
})();
var statearr_39509_39580 = state_39481__$1;
(statearr_39509_39580[(2)] = null);

(statearr_39509_39580[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (40))){
var inst_39449 = (state_39481[(23)]);
var inst_39453 = done.call(null,null);
var inst_39454 = cljs.core.async.untap_STAR_.call(null,m,inst_39449);
var state_39481__$1 = (function (){var statearr_39510 = state_39481;
(statearr_39510[(24)] = inst_39453);

return statearr_39510;
})();
var statearr_39511_39581 = state_39481__$1;
(statearr_39511_39581[(2)] = inst_39454);

(statearr_39511_39581[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (33))){
var inst_39440 = (state_39481[(25)]);
var inst_39442 = cljs.core.chunked_seq_QMARK_.call(null,inst_39440);
var state_39481__$1 = state_39481;
if(inst_39442){
var statearr_39512_39582 = state_39481__$1;
(statearr_39512_39582[(1)] = (36));

} else {
var statearr_39513_39583 = state_39481__$1;
(statearr_39513_39583[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (13))){
var inst_39370 = (state_39481[(26)]);
var inst_39373 = cljs.core.async.close_BANG_.call(null,inst_39370);
var state_39481__$1 = state_39481;
var statearr_39514_39584 = state_39481__$1;
(statearr_39514_39584[(2)] = inst_39373);

(statearr_39514_39584[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (22))){
var inst_39393 = (state_39481[(8)]);
var inst_39396 = cljs.core.async.close_BANG_.call(null,inst_39393);
var state_39481__$1 = state_39481;
var statearr_39515_39585 = state_39481__$1;
(statearr_39515_39585[(2)] = inst_39396);

(statearr_39515_39585[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (36))){
var inst_39440 = (state_39481[(25)]);
var inst_39444 = cljs.core.chunk_first.call(null,inst_39440);
var inst_39445 = cljs.core.chunk_rest.call(null,inst_39440);
var inst_39446 = cljs.core.count.call(null,inst_39444);
var inst_39421 = inst_39445;
var inst_39422 = inst_39444;
var inst_39423 = inst_39446;
var inst_39424 = (0);
var state_39481__$1 = (function (){var statearr_39516 = state_39481;
(statearr_39516[(9)] = inst_39422);

(statearr_39516[(20)] = inst_39423);

(statearr_39516[(21)] = inst_39421);

(statearr_39516[(11)] = inst_39424);

return statearr_39516;
})();
var statearr_39517_39586 = state_39481__$1;
(statearr_39517_39586[(2)] = null);

(statearr_39517_39586[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (41))){
var inst_39440 = (state_39481[(25)]);
var inst_39456 = (state_39481[(2)]);
var inst_39457 = cljs.core.next.call(null,inst_39440);
var inst_39421 = inst_39457;
var inst_39422 = null;
var inst_39423 = (0);
var inst_39424 = (0);
var state_39481__$1 = (function (){var statearr_39518 = state_39481;
(statearr_39518[(9)] = inst_39422);

(statearr_39518[(20)] = inst_39423);

(statearr_39518[(21)] = inst_39421);

(statearr_39518[(11)] = inst_39424);

(statearr_39518[(27)] = inst_39456);

return statearr_39518;
})();
var statearr_39519_39587 = state_39481__$1;
(statearr_39519_39587[(2)] = null);

(statearr_39519_39587[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (43))){
var state_39481__$1 = state_39481;
var statearr_39520_39588 = state_39481__$1;
(statearr_39520_39588[(2)] = null);

(statearr_39520_39588[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (29))){
var inst_39465 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39521_39589 = state_39481__$1;
(statearr_39521_39589[(2)] = inst_39465);

(statearr_39521_39589[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (44))){
var inst_39474 = (state_39481[(2)]);
var state_39481__$1 = (function (){var statearr_39522 = state_39481;
(statearr_39522[(28)] = inst_39474);

return statearr_39522;
})();
var statearr_39523_39590 = state_39481__$1;
(statearr_39523_39590[(2)] = null);

(statearr_39523_39590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (6))){
var inst_39413 = (state_39481[(29)]);
var inst_39412 = cljs.core.deref.call(null,cs);
var inst_39413__$1 = cljs.core.keys.call(null,inst_39412);
var inst_39414 = cljs.core.count.call(null,inst_39413__$1);
var inst_39415 = cljs.core.reset_BANG_.call(null,dctr,inst_39414);
var inst_39420 = cljs.core.seq.call(null,inst_39413__$1);
var inst_39421 = inst_39420;
var inst_39422 = null;
var inst_39423 = (0);
var inst_39424 = (0);
var state_39481__$1 = (function (){var statearr_39524 = state_39481;
(statearr_39524[(9)] = inst_39422);

(statearr_39524[(30)] = inst_39415);

(statearr_39524[(20)] = inst_39423);

(statearr_39524[(21)] = inst_39421);

(statearr_39524[(11)] = inst_39424);

(statearr_39524[(29)] = inst_39413__$1);

return statearr_39524;
})();
var statearr_39525_39591 = state_39481__$1;
(statearr_39525_39591[(2)] = null);

(statearr_39525_39591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (28))){
var inst_39421 = (state_39481[(21)]);
var inst_39440 = (state_39481[(25)]);
var inst_39440__$1 = cljs.core.seq.call(null,inst_39421);
var state_39481__$1 = (function (){var statearr_39526 = state_39481;
(statearr_39526[(25)] = inst_39440__$1);

return statearr_39526;
})();
if(inst_39440__$1){
var statearr_39527_39592 = state_39481__$1;
(statearr_39527_39592[(1)] = (33));

} else {
var statearr_39528_39593 = state_39481__$1;
(statearr_39528_39593[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (25))){
var inst_39423 = (state_39481[(20)]);
var inst_39424 = (state_39481[(11)]);
var inst_39426 = (inst_39424 < inst_39423);
var inst_39427 = inst_39426;
var state_39481__$1 = state_39481;
if(cljs.core.truth_(inst_39427)){
var statearr_39529_39594 = state_39481__$1;
(statearr_39529_39594[(1)] = (27));

} else {
var statearr_39530_39595 = state_39481__$1;
(statearr_39530_39595[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (34))){
var state_39481__$1 = state_39481;
var statearr_39531_39596 = state_39481__$1;
(statearr_39531_39596[(2)] = null);

(statearr_39531_39596[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (17))){
var state_39481__$1 = state_39481;
var statearr_39532_39597 = state_39481__$1;
(statearr_39532_39597[(2)] = null);

(statearr_39532_39597[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (3))){
var inst_39479 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39481__$1,inst_39479);
} else {
if((state_val_39482 === (12))){
var inst_39408 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39533_39598 = state_39481__$1;
(statearr_39533_39598[(2)] = inst_39408);

(statearr_39533_39598[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (2))){
var state_39481__$1 = state_39481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39481__$1,(4),ch);
} else {
if((state_val_39482 === (23))){
var state_39481__$1 = state_39481;
var statearr_39534_39599 = state_39481__$1;
(statearr_39534_39599[(2)] = null);

(statearr_39534_39599[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (35))){
var inst_39463 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39535_39600 = state_39481__$1;
(statearr_39535_39600[(2)] = inst_39463);

(statearr_39535_39600[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (19))){
var inst_39380 = (state_39481[(7)]);
var inst_39384 = cljs.core.chunk_first.call(null,inst_39380);
var inst_39385 = cljs.core.chunk_rest.call(null,inst_39380);
var inst_39386 = cljs.core.count.call(null,inst_39384);
var inst_39358 = inst_39385;
var inst_39359 = inst_39384;
var inst_39360 = inst_39386;
var inst_39361 = (0);
var state_39481__$1 = (function (){var statearr_39536 = state_39481;
(statearr_39536[(13)] = inst_39361);

(statearr_39536[(14)] = inst_39359);

(statearr_39536[(15)] = inst_39358);

(statearr_39536[(16)] = inst_39360);

return statearr_39536;
})();
var statearr_39537_39601 = state_39481__$1;
(statearr_39537_39601[(2)] = null);

(statearr_39537_39601[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (11))){
var inst_39358 = (state_39481[(15)]);
var inst_39380 = (state_39481[(7)]);
var inst_39380__$1 = cljs.core.seq.call(null,inst_39358);
var state_39481__$1 = (function (){var statearr_39538 = state_39481;
(statearr_39538[(7)] = inst_39380__$1);

return statearr_39538;
})();
if(inst_39380__$1){
var statearr_39539_39602 = state_39481__$1;
(statearr_39539_39602[(1)] = (16));

} else {
var statearr_39540_39603 = state_39481__$1;
(statearr_39540_39603[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (9))){
var inst_39410 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39541_39604 = state_39481__$1;
(statearr_39541_39604[(2)] = inst_39410);

(statearr_39541_39604[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (5))){
var inst_39356 = cljs.core.deref.call(null,cs);
var inst_39357 = cljs.core.seq.call(null,inst_39356);
var inst_39358 = inst_39357;
var inst_39359 = null;
var inst_39360 = (0);
var inst_39361 = (0);
var state_39481__$1 = (function (){var statearr_39542 = state_39481;
(statearr_39542[(13)] = inst_39361);

(statearr_39542[(14)] = inst_39359);

(statearr_39542[(15)] = inst_39358);

(statearr_39542[(16)] = inst_39360);

return statearr_39542;
})();
var statearr_39543_39605 = state_39481__$1;
(statearr_39543_39605[(2)] = null);

(statearr_39543_39605[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (14))){
var state_39481__$1 = state_39481;
var statearr_39544_39606 = state_39481__$1;
(statearr_39544_39606[(2)] = null);

(statearr_39544_39606[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (45))){
var inst_39471 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39545_39607 = state_39481__$1;
(statearr_39545_39607[(2)] = inst_39471);

(statearr_39545_39607[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (26))){
var inst_39413 = (state_39481[(29)]);
var inst_39467 = (state_39481[(2)]);
var inst_39468 = cljs.core.seq.call(null,inst_39413);
var state_39481__$1 = (function (){var statearr_39546 = state_39481;
(statearr_39546[(31)] = inst_39467);

return statearr_39546;
})();
if(inst_39468){
var statearr_39547_39608 = state_39481__$1;
(statearr_39547_39608[(1)] = (42));

} else {
var statearr_39548_39609 = state_39481__$1;
(statearr_39548_39609[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (16))){
var inst_39380 = (state_39481[(7)]);
var inst_39382 = cljs.core.chunked_seq_QMARK_.call(null,inst_39380);
var state_39481__$1 = state_39481;
if(inst_39382){
var statearr_39549_39610 = state_39481__$1;
(statearr_39549_39610[(1)] = (19));

} else {
var statearr_39550_39611 = state_39481__$1;
(statearr_39550_39611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (38))){
var inst_39460 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39551_39612 = state_39481__$1;
(statearr_39551_39612[(2)] = inst_39460);

(statearr_39551_39612[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (30))){
var state_39481__$1 = state_39481;
var statearr_39552_39613 = state_39481__$1;
(statearr_39552_39613[(2)] = null);

(statearr_39552_39613[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (10))){
var inst_39361 = (state_39481[(13)]);
var inst_39359 = (state_39481[(14)]);
var inst_39369 = cljs.core._nth.call(null,inst_39359,inst_39361);
var inst_39370 = cljs.core.nth.call(null,inst_39369,(0),null);
var inst_39371 = cljs.core.nth.call(null,inst_39369,(1),null);
var state_39481__$1 = (function (){var statearr_39553 = state_39481;
(statearr_39553[(26)] = inst_39370);

return statearr_39553;
})();
if(cljs.core.truth_(inst_39371)){
var statearr_39554_39614 = state_39481__$1;
(statearr_39554_39614[(1)] = (13));

} else {
var statearr_39555_39615 = state_39481__$1;
(statearr_39555_39615[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (18))){
var inst_39406 = (state_39481[(2)]);
var state_39481__$1 = state_39481;
var statearr_39556_39616 = state_39481__$1;
(statearr_39556_39616[(2)] = inst_39406);

(statearr_39556_39616[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (42))){
var state_39481__$1 = state_39481;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39481__$1,(45),dchan);
} else {
if((state_val_39482 === (37))){
var inst_39449 = (state_39481[(23)]);
var inst_39440 = (state_39481[(25)]);
var inst_39349 = (state_39481[(12)]);
var inst_39449__$1 = cljs.core.first.call(null,inst_39440);
var inst_39450 = cljs.core.async.put_BANG_.call(null,inst_39449__$1,inst_39349,done);
var state_39481__$1 = (function (){var statearr_39557 = state_39481;
(statearr_39557[(23)] = inst_39449__$1);

return statearr_39557;
})();
if(cljs.core.truth_(inst_39450)){
var statearr_39558_39617 = state_39481__$1;
(statearr_39558_39617[(1)] = (39));

} else {
var statearr_39559_39618 = state_39481__$1;
(statearr_39559_39618[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39482 === (8))){
var inst_39361 = (state_39481[(13)]);
var inst_39360 = (state_39481[(16)]);
var inst_39363 = (inst_39361 < inst_39360);
var inst_39364 = inst_39363;
var state_39481__$1 = state_39481;
if(cljs.core.truth_(inst_39364)){
var statearr_39560_39619 = state_39481__$1;
(statearr_39560_39619[(1)] = (10));

} else {
var statearr_39561_39620 = state_39481__$1;
(statearr_39561_39620[(1)] = (11));

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
});})(c__26017__auto___39566,cs,m,dchan,dctr,done))
;
return ((function (switch__25929__auto__,c__26017__auto___39566,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25930__auto__ = null;
var cljs$core$async$mult_$_state_machine__25930__auto____0 = (function (){
var statearr_39562 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39562[(0)] = cljs$core$async$mult_$_state_machine__25930__auto__);

(statearr_39562[(1)] = (1));

return statearr_39562;
});
var cljs$core$async$mult_$_state_machine__25930__auto____1 = (function (state_39481){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39481);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39563){if((e39563 instanceof Object)){
var ex__25933__auto__ = e39563;
var statearr_39564_39621 = state_39481;
(statearr_39564_39621[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39481);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39622 = state_39481;
state_39481 = G__39622;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25930__auto__ = function(state_39481){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25930__auto____1.call(this,state_39481);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25930__auto____0;
cljs$core$async$mult_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25930__auto____1;
return cljs$core$async$mult_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___39566,cs,m,dchan,dctr,done))
})();
var state__26019__auto__ = (function (){var statearr_39565 = f__26018__auto__.call(null);
(statearr_39565[(6)] = c__26017__auto___39566);

return statearr_39565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___39566,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__39624 = arguments.length;
switch (G__39624) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___39636 = arguments.length;
var i__4500__auto___39637 = (0);
while(true){
if((i__4500__auto___39637 < len__4499__auto___39636)){
args__4502__auto__.push((arguments[i__4500__auto___39637]));

var G__39638 = (i__4500__auto___39637 + (1));
i__4500__auto___39637 = G__39638;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__39630){
var map__39631 = p__39630;
var map__39631__$1 = ((((!((map__39631 == null)))?(((((map__39631.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39631.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39631):map__39631);
var opts = map__39631__$1;
var statearr_39633_39639 = state;
(statearr_39633_39639[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__39631,map__39631__$1,opts){
return (function (val){
var statearr_39634_39640 = state;
(statearr_39634_39640[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__39631,map__39631__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_39635_39641 = state;
(statearr_39635_39641[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq39626){
var G__39627 = cljs.core.first.call(null,seq39626);
var seq39626__$1 = cljs.core.next.call(null,seq39626);
var G__39628 = cljs.core.first.call(null,seq39626__$1);
var seq39626__$2 = cljs.core.next.call(null,seq39626__$1);
var G__39629 = cljs.core.first.call(null,seq39626__$2);
var seq39626__$3 = cljs.core.next.call(null,seq39626__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39627,G__39628,G__39629,seq39626__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async39642 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39642 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta39643){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta39643 = meta39643;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39644,meta39643__$1){
var self__ = this;
var _39644__$1 = this;
return (new cljs.core.async.t_cljs$core$async39642(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta39643__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_39644){
var self__ = this;
var _39644__$1 = this;
return self__.meta39643;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta39643","meta39643",-1322021435,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async39642.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39642.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39642";

cljs.core.async.t_cljs$core$async39642.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39642");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39642.
 */
cljs.core.async.__GT_t_cljs$core$async39642 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async39642(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39643){
return (new cljs.core.async.t_cljs$core$async39642(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta39643));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async39642(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26017__auto___39806 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___39806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___39806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_39746){
var state_val_39747 = (state_39746[(1)]);
if((state_val_39747 === (7))){
var inst_39661 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
var statearr_39748_39807 = state_39746__$1;
(statearr_39748_39807[(2)] = inst_39661);

(statearr_39748_39807[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (20))){
var inst_39673 = (state_39746[(7)]);
var state_39746__$1 = state_39746;
var statearr_39749_39808 = state_39746__$1;
(statearr_39749_39808[(2)] = inst_39673);

(statearr_39749_39808[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (27))){
var state_39746__$1 = state_39746;
var statearr_39750_39809 = state_39746__$1;
(statearr_39750_39809[(2)] = null);

(statearr_39750_39809[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (1))){
var inst_39648 = (state_39746[(8)]);
var inst_39648__$1 = calc_state.call(null);
var inst_39650 = (inst_39648__$1 == null);
var inst_39651 = cljs.core.not.call(null,inst_39650);
var state_39746__$1 = (function (){var statearr_39751 = state_39746;
(statearr_39751[(8)] = inst_39648__$1);

return statearr_39751;
})();
if(inst_39651){
var statearr_39752_39810 = state_39746__$1;
(statearr_39752_39810[(1)] = (2));

} else {
var statearr_39753_39811 = state_39746__$1;
(statearr_39753_39811[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (24))){
var inst_39720 = (state_39746[(9)]);
var inst_39697 = (state_39746[(10)]);
var inst_39706 = (state_39746[(11)]);
var inst_39720__$1 = inst_39697.call(null,inst_39706);
var state_39746__$1 = (function (){var statearr_39754 = state_39746;
(statearr_39754[(9)] = inst_39720__$1);

return statearr_39754;
})();
if(cljs.core.truth_(inst_39720__$1)){
var statearr_39755_39812 = state_39746__$1;
(statearr_39755_39812[(1)] = (29));

} else {
var statearr_39756_39813 = state_39746__$1;
(statearr_39756_39813[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (4))){
var inst_39664 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
if(cljs.core.truth_(inst_39664)){
var statearr_39757_39814 = state_39746__$1;
(statearr_39757_39814[(1)] = (8));

} else {
var statearr_39758_39815 = state_39746__$1;
(statearr_39758_39815[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (15))){
var inst_39691 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
if(cljs.core.truth_(inst_39691)){
var statearr_39759_39816 = state_39746__$1;
(statearr_39759_39816[(1)] = (19));

} else {
var statearr_39760_39817 = state_39746__$1;
(statearr_39760_39817[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (21))){
var inst_39696 = (state_39746[(12)]);
var inst_39696__$1 = (state_39746[(2)]);
var inst_39697 = cljs.core.get.call(null,inst_39696__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39698 = cljs.core.get.call(null,inst_39696__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39699 = cljs.core.get.call(null,inst_39696__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_39746__$1 = (function (){var statearr_39761 = state_39746;
(statearr_39761[(10)] = inst_39697);

(statearr_39761[(13)] = inst_39698);

(statearr_39761[(12)] = inst_39696__$1);

return statearr_39761;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_39746__$1,(22),inst_39699);
} else {
if((state_val_39747 === (31))){
var inst_39728 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
if(cljs.core.truth_(inst_39728)){
var statearr_39762_39818 = state_39746__$1;
(statearr_39762_39818[(1)] = (32));

} else {
var statearr_39763_39819 = state_39746__$1;
(statearr_39763_39819[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (32))){
var inst_39705 = (state_39746[(14)]);
var state_39746__$1 = state_39746;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39746__$1,(35),out,inst_39705);
} else {
if((state_val_39747 === (33))){
var inst_39696 = (state_39746[(12)]);
var inst_39673 = inst_39696;
var state_39746__$1 = (function (){var statearr_39764 = state_39746;
(statearr_39764[(7)] = inst_39673);

return statearr_39764;
})();
var statearr_39765_39820 = state_39746__$1;
(statearr_39765_39820[(2)] = null);

(statearr_39765_39820[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (13))){
var inst_39673 = (state_39746[(7)]);
var inst_39680 = inst_39673.cljs$lang$protocol_mask$partition0$;
var inst_39681 = (inst_39680 & (64));
var inst_39682 = inst_39673.cljs$core$ISeq$;
var inst_39683 = (cljs.core.PROTOCOL_SENTINEL === inst_39682);
var inst_39684 = ((inst_39681) || (inst_39683));
var state_39746__$1 = state_39746;
if(cljs.core.truth_(inst_39684)){
var statearr_39766_39821 = state_39746__$1;
(statearr_39766_39821[(1)] = (16));

} else {
var statearr_39767_39822 = state_39746__$1;
(statearr_39767_39822[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (22))){
var inst_39705 = (state_39746[(14)]);
var inst_39706 = (state_39746[(11)]);
var inst_39704 = (state_39746[(2)]);
var inst_39705__$1 = cljs.core.nth.call(null,inst_39704,(0),null);
var inst_39706__$1 = cljs.core.nth.call(null,inst_39704,(1),null);
var inst_39707 = (inst_39705__$1 == null);
var inst_39708 = cljs.core._EQ_.call(null,inst_39706__$1,change);
var inst_39709 = ((inst_39707) || (inst_39708));
var state_39746__$1 = (function (){var statearr_39768 = state_39746;
(statearr_39768[(14)] = inst_39705__$1);

(statearr_39768[(11)] = inst_39706__$1);

return statearr_39768;
})();
if(cljs.core.truth_(inst_39709)){
var statearr_39769_39823 = state_39746__$1;
(statearr_39769_39823[(1)] = (23));

} else {
var statearr_39770_39824 = state_39746__$1;
(statearr_39770_39824[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (36))){
var inst_39696 = (state_39746[(12)]);
var inst_39673 = inst_39696;
var state_39746__$1 = (function (){var statearr_39771 = state_39746;
(statearr_39771[(7)] = inst_39673);

return statearr_39771;
})();
var statearr_39772_39825 = state_39746__$1;
(statearr_39772_39825[(2)] = null);

(statearr_39772_39825[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (29))){
var inst_39720 = (state_39746[(9)]);
var state_39746__$1 = state_39746;
var statearr_39773_39826 = state_39746__$1;
(statearr_39773_39826[(2)] = inst_39720);

(statearr_39773_39826[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (6))){
var state_39746__$1 = state_39746;
var statearr_39774_39827 = state_39746__$1;
(statearr_39774_39827[(2)] = false);

(statearr_39774_39827[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (28))){
var inst_39716 = (state_39746[(2)]);
var inst_39717 = calc_state.call(null);
var inst_39673 = inst_39717;
var state_39746__$1 = (function (){var statearr_39775 = state_39746;
(statearr_39775[(7)] = inst_39673);

(statearr_39775[(15)] = inst_39716);

return statearr_39775;
})();
var statearr_39776_39828 = state_39746__$1;
(statearr_39776_39828[(2)] = null);

(statearr_39776_39828[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (25))){
var inst_39742 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
var statearr_39777_39829 = state_39746__$1;
(statearr_39777_39829[(2)] = inst_39742);

(statearr_39777_39829[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (34))){
var inst_39740 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
var statearr_39778_39830 = state_39746__$1;
(statearr_39778_39830[(2)] = inst_39740);

(statearr_39778_39830[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (17))){
var state_39746__$1 = state_39746;
var statearr_39779_39831 = state_39746__$1;
(statearr_39779_39831[(2)] = false);

(statearr_39779_39831[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (3))){
var state_39746__$1 = state_39746;
var statearr_39780_39832 = state_39746__$1;
(statearr_39780_39832[(2)] = false);

(statearr_39780_39832[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (12))){
var inst_39744 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39746__$1,inst_39744);
} else {
if((state_val_39747 === (2))){
var inst_39648 = (state_39746[(8)]);
var inst_39653 = inst_39648.cljs$lang$protocol_mask$partition0$;
var inst_39654 = (inst_39653 & (64));
var inst_39655 = inst_39648.cljs$core$ISeq$;
var inst_39656 = (cljs.core.PROTOCOL_SENTINEL === inst_39655);
var inst_39657 = ((inst_39654) || (inst_39656));
var state_39746__$1 = state_39746;
if(cljs.core.truth_(inst_39657)){
var statearr_39781_39833 = state_39746__$1;
(statearr_39781_39833[(1)] = (5));

} else {
var statearr_39782_39834 = state_39746__$1;
(statearr_39782_39834[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (23))){
var inst_39705 = (state_39746[(14)]);
var inst_39711 = (inst_39705 == null);
var state_39746__$1 = state_39746;
if(cljs.core.truth_(inst_39711)){
var statearr_39783_39835 = state_39746__$1;
(statearr_39783_39835[(1)] = (26));

} else {
var statearr_39784_39836 = state_39746__$1;
(statearr_39784_39836[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (35))){
var inst_39731 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
if(cljs.core.truth_(inst_39731)){
var statearr_39785_39837 = state_39746__$1;
(statearr_39785_39837[(1)] = (36));

} else {
var statearr_39786_39838 = state_39746__$1;
(statearr_39786_39838[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (19))){
var inst_39673 = (state_39746[(7)]);
var inst_39693 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39673);
var state_39746__$1 = state_39746;
var statearr_39787_39839 = state_39746__$1;
(statearr_39787_39839[(2)] = inst_39693);

(statearr_39787_39839[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (11))){
var inst_39673 = (state_39746[(7)]);
var inst_39677 = (inst_39673 == null);
var inst_39678 = cljs.core.not.call(null,inst_39677);
var state_39746__$1 = state_39746;
if(inst_39678){
var statearr_39788_39840 = state_39746__$1;
(statearr_39788_39840[(1)] = (13));

} else {
var statearr_39789_39841 = state_39746__$1;
(statearr_39789_39841[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (9))){
var inst_39648 = (state_39746[(8)]);
var state_39746__$1 = state_39746;
var statearr_39790_39842 = state_39746__$1;
(statearr_39790_39842[(2)] = inst_39648);

(statearr_39790_39842[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (5))){
var state_39746__$1 = state_39746;
var statearr_39791_39843 = state_39746__$1;
(statearr_39791_39843[(2)] = true);

(statearr_39791_39843[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (14))){
var state_39746__$1 = state_39746;
var statearr_39792_39844 = state_39746__$1;
(statearr_39792_39844[(2)] = false);

(statearr_39792_39844[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (26))){
var inst_39706 = (state_39746[(11)]);
var inst_39713 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_39706);
var state_39746__$1 = state_39746;
var statearr_39793_39845 = state_39746__$1;
(statearr_39793_39845[(2)] = inst_39713);

(statearr_39793_39845[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (16))){
var state_39746__$1 = state_39746;
var statearr_39794_39846 = state_39746__$1;
(statearr_39794_39846[(2)] = true);

(statearr_39794_39846[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (38))){
var inst_39736 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
var statearr_39795_39847 = state_39746__$1;
(statearr_39795_39847[(2)] = inst_39736);

(statearr_39795_39847[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (30))){
var inst_39697 = (state_39746[(10)]);
var inst_39698 = (state_39746[(13)]);
var inst_39706 = (state_39746[(11)]);
var inst_39723 = cljs.core.empty_QMARK_.call(null,inst_39697);
var inst_39724 = inst_39698.call(null,inst_39706);
var inst_39725 = cljs.core.not.call(null,inst_39724);
var inst_39726 = ((inst_39723) && (inst_39725));
var state_39746__$1 = state_39746;
var statearr_39796_39848 = state_39746__$1;
(statearr_39796_39848[(2)] = inst_39726);

(statearr_39796_39848[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (10))){
var inst_39648 = (state_39746[(8)]);
var inst_39669 = (state_39746[(2)]);
var inst_39670 = cljs.core.get.call(null,inst_39669,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_39671 = cljs.core.get.call(null,inst_39669,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_39672 = cljs.core.get.call(null,inst_39669,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_39673 = inst_39648;
var state_39746__$1 = (function (){var statearr_39797 = state_39746;
(statearr_39797[(7)] = inst_39673);

(statearr_39797[(16)] = inst_39670);

(statearr_39797[(17)] = inst_39671);

(statearr_39797[(18)] = inst_39672);

return statearr_39797;
})();
var statearr_39798_39849 = state_39746__$1;
(statearr_39798_39849[(2)] = null);

(statearr_39798_39849[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (18))){
var inst_39688 = (state_39746[(2)]);
var state_39746__$1 = state_39746;
var statearr_39799_39850 = state_39746__$1;
(statearr_39799_39850[(2)] = inst_39688);

(statearr_39799_39850[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (37))){
var state_39746__$1 = state_39746;
var statearr_39800_39851 = state_39746__$1;
(statearr_39800_39851[(2)] = null);

(statearr_39800_39851[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39747 === (8))){
var inst_39648 = (state_39746[(8)]);
var inst_39666 = cljs.core.apply.call(null,cljs.core.hash_map,inst_39648);
var state_39746__$1 = state_39746;
var statearr_39801_39852 = state_39746__$1;
(statearr_39801_39852[(2)] = inst_39666);

(statearr_39801_39852[(1)] = (10));


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
});})(c__26017__auto___39806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25929__auto__,c__26017__auto___39806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25930__auto__ = null;
var cljs$core$async$mix_$_state_machine__25930__auto____0 = (function (){
var statearr_39802 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39802[(0)] = cljs$core$async$mix_$_state_machine__25930__auto__);

(statearr_39802[(1)] = (1));

return statearr_39802;
});
var cljs$core$async$mix_$_state_machine__25930__auto____1 = (function (state_39746){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39746);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39803){if((e39803 instanceof Object)){
var ex__25933__auto__ = e39803;
var statearr_39804_39853 = state_39746;
(statearr_39804_39853[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39746);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39803;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39854 = state_39746;
state_39746 = G__39854;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25930__auto__ = function(state_39746){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25930__auto____1.call(this,state_39746);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25930__auto____0;
cljs$core$async$mix_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25930__auto____1;
return cljs$core$async$mix_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___39806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26019__auto__ = (function (){var statearr_39805 = f__26018__auto__.call(null);
(statearr_39805[(6)] = c__26017__auto___39806);

return statearr_39805;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___39806,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__39856 = arguments.length;
switch (G__39856) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__39860 = arguments.length;
switch (G__39860) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__39858_SHARP_){
if(cljs.core.truth_(p1__39858_SHARP_.call(null,topic))){
return p1__39858_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__39858_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async39861 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async39861 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta39862){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta39862 = meta39862;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_39863,meta39862__$1){
var self__ = this;
var _39863__$1 = this;
return (new cljs.core.async.t_cljs$core$async39861(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta39862__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_39863){
var self__ = this;
var _39863__$1 = this;
return self__.meta39862;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39861.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39861.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta39862","meta39862",-1920155902,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async39861.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async39861.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async39861";

cljs.core.async.t_cljs$core$async39861.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async39861");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async39861.
 */
cljs.core.async.__GT_t_cljs$core$async39861 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async39861(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39862){
return (new cljs.core.async.t_cljs$core$async39861(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta39862));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async39861(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26017__auto___39981 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___39981,mults,ensure_mult,p){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___39981,mults,ensure_mult,p){
return (function (state_39935){
var state_val_39936 = (state_39935[(1)]);
if((state_val_39936 === (7))){
var inst_39931 = (state_39935[(2)]);
var state_39935__$1 = state_39935;
var statearr_39937_39982 = state_39935__$1;
(statearr_39937_39982[(2)] = inst_39931);

(statearr_39937_39982[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (20))){
var state_39935__$1 = state_39935;
var statearr_39938_39983 = state_39935__$1;
(statearr_39938_39983[(2)] = null);

(statearr_39938_39983[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (1))){
var state_39935__$1 = state_39935;
var statearr_39939_39984 = state_39935__$1;
(statearr_39939_39984[(2)] = null);

(statearr_39939_39984[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (24))){
var inst_39914 = (state_39935[(7)]);
var inst_39923 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_39914);
var state_39935__$1 = state_39935;
var statearr_39940_39985 = state_39935__$1;
(statearr_39940_39985[(2)] = inst_39923);

(statearr_39940_39985[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (4))){
var inst_39866 = (state_39935[(8)]);
var inst_39866__$1 = (state_39935[(2)]);
var inst_39867 = (inst_39866__$1 == null);
var state_39935__$1 = (function (){var statearr_39941 = state_39935;
(statearr_39941[(8)] = inst_39866__$1);

return statearr_39941;
})();
if(cljs.core.truth_(inst_39867)){
var statearr_39942_39986 = state_39935__$1;
(statearr_39942_39986[(1)] = (5));

} else {
var statearr_39943_39987 = state_39935__$1;
(statearr_39943_39987[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (15))){
var inst_39908 = (state_39935[(2)]);
var state_39935__$1 = state_39935;
var statearr_39944_39988 = state_39935__$1;
(statearr_39944_39988[(2)] = inst_39908);

(statearr_39944_39988[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (21))){
var inst_39928 = (state_39935[(2)]);
var state_39935__$1 = (function (){var statearr_39945 = state_39935;
(statearr_39945[(9)] = inst_39928);

return statearr_39945;
})();
var statearr_39946_39989 = state_39935__$1;
(statearr_39946_39989[(2)] = null);

(statearr_39946_39989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (13))){
var inst_39890 = (state_39935[(10)]);
var inst_39892 = cljs.core.chunked_seq_QMARK_.call(null,inst_39890);
var state_39935__$1 = state_39935;
if(inst_39892){
var statearr_39947_39990 = state_39935__$1;
(statearr_39947_39990[(1)] = (16));

} else {
var statearr_39948_39991 = state_39935__$1;
(statearr_39948_39991[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (22))){
var inst_39920 = (state_39935[(2)]);
var state_39935__$1 = state_39935;
if(cljs.core.truth_(inst_39920)){
var statearr_39949_39992 = state_39935__$1;
(statearr_39949_39992[(1)] = (23));

} else {
var statearr_39950_39993 = state_39935__$1;
(statearr_39950_39993[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (6))){
var inst_39914 = (state_39935[(7)]);
var inst_39916 = (state_39935[(11)]);
var inst_39866 = (state_39935[(8)]);
var inst_39914__$1 = topic_fn.call(null,inst_39866);
var inst_39915 = cljs.core.deref.call(null,mults);
var inst_39916__$1 = cljs.core.get.call(null,inst_39915,inst_39914__$1);
var state_39935__$1 = (function (){var statearr_39951 = state_39935;
(statearr_39951[(7)] = inst_39914__$1);

(statearr_39951[(11)] = inst_39916__$1);

return statearr_39951;
})();
if(cljs.core.truth_(inst_39916__$1)){
var statearr_39952_39994 = state_39935__$1;
(statearr_39952_39994[(1)] = (19));

} else {
var statearr_39953_39995 = state_39935__$1;
(statearr_39953_39995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (25))){
var inst_39925 = (state_39935[(2)]);
var state_39935__$1 = state_39935;
var statearr_39954_39996 = state_39935__$1;
(statearr_39954_39996[(2)] = inst_39925);

(statearr_39954_39996[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (17))){
var inst_39890 = (state_39935[(10)]);
var inst_39899 = cljs.core.first.call(null,inst_39890);
var inst_39900 = cljs.core.async.muxch_STAR_.call(null,inst_39899);
var inst_39901 = cljs.core.async.close_BANG_.call(null,inst_39900);
var inst_39902 = cljs.core.next.call(null,inst_39890);
var inst_39876 = inst_39902;
var inst_39877 = null;
var inst_39878 = (0);
var inst_39879 = (0);
var state_39935__$1 = (function (){var statearr_39955 = state_39935;
(statearr_39955[(12)] = inst_39877);

(statearr_39955[(13)] = inst_39876);

(statearr_39955[(14)] = inst_39879);

(statearr_39955[(15)] = inst_39878);

(statearr_39955[(16)] = inst_39901);

return statearr_39955;
})();
var statearr_39956_39997 = state_39935__$1;
(statearr_39956_39997[(2)] = null);

(statearr_39956_39997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (3))){
var inst_39933 = (state_39935[(2)]);
var state_39935__$1 = state_39935;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39935__$1,inst_39933);
} else {
if((state_val_39936 === (12))){
var inst_39910 = (state_39935[(2)]);
var state_39935__$1 = state_39935;
var statearr_39957_39998 = state_39935__$1;
(statearr_39957_39998[(2)] = inst_39910);

(statearr_39957_39998[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (2))){
var state_39935__$1 = state_39935;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39935__$1,(4),ch);
} else {
if((state_val_39936 === (23))){
var state_39935__$1 = state_39935;
var statearr_39958_39999 = state_39935__$1;
(statearr_39958_39999[(2)] = null);

(statearr_39958_39999[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (19))){
var inst_39916 = (state_39935[(11)]);
var inst_39866 = (state_39935[(8)]);
var inst_39918 = cljs.core.async.muxch_STAR_.call(null,inst_39916);
var state_39935__$1 = state_39935;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_39935__$1,(22),inst_39918,inst_39866);
} else {
if((state_val_39936 === (11))){
var inst_39876 = (state_39935[(13)]);
var inst_39890 = (state_39935[(10)]);
var inst_39890__$1 = cljs.core.seq.call(null,inst_39876);
var state_39935__$1 = (function (){var statearr_39959 = state_39935;
(statearr_39959[(10)] = inst_39890__$1);

return statearr_39959;
})();
if(inst_39890__$1){
var statearr_39960_40000 = state_39935__$1;
(statearr_39960_40000[(1)] = (13));

} else {
var statearr_39961_40001 = state_39935__$1;
(statearr_39961_40001[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (9))){
var inst_39912 = (state_39935[(2)]);
var state_39935__$1 = state_39935;
var statearr_39962_40002 = state_39935__$1;
(statearr_39962_40002[(2)] = inst_39912);

(statearr_39962_40002[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (5))){
var inst_39873 = cljs.core.deref.call(null,mults);
var inst_39874 = cljs.core.vals.call(null,inst_39873);
var inst_39875 = cljs.core.seq.call(null,inst_39874);
var inst_39876 = inst_39875;
var inst_39877 = null;
var inst_39878 = (0);
var inst_39879 = (0);
var state_39935__$1 = (function (){var statearr_39963 = state_39935;
(statearr_39963[(12)] = inst_39877);

(statearr_39963[(13)] = inst_39876);

(statearr_39963[(14)] = inst_39879);

(statearr_39963[(15)] = inst_39878);

return statearr_39963;
})();
var statearr_39964_40003 = state_39935__$1;
(statearr_39964_40003[(2)] = null);

(statearr_39964_40003[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (14))){
var state_39935__$1 = state_39935;
var statearr_39968_40004 = state_39935__$1;
(statearr_39968_40004[(2)] = null);

(statearr_39968_40004[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (16))){
var inst_39890 = (state_39935[(10)]);
var inst_39894 = cljs.core.chunk_first.call(null,inst_39890);
var inst_39895 = cljs.core.chunk_rest.call(null,inst_39890);
var inst_39896 = cljs.core.count.call(null,inst_39894);
var inst_39876 = inst_39895;
var inst_39877 = inst_39894;
var inst_39878 = inst_39896;
var inst_39879 = (0);
var state_39935__$1 = (function (){var statearr_39969 = state_39935;
(statearr_39969[(12)] = inst_39877);

(statearr_39969[(13)] = inst_39876);

(statearr_39969[(14)] = inst_39879);

(statearr_39969[(15)] = inst_39878);

return statearr_39969;
})();
var statearr_39970_40005 = state_39935__$1;
(statearr_39970_40005[(2)] = null);

(statearr_39970_40005[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (10))){
var inst_39877 = (state_39935[(12)]);
var inst_39876 = (state_39935[(13)]);
var inst_39879 = (state_39935[(14)]);
var inst_39878 = (state_39935[(15)]);
var inst_39884 = cljs.core._nth.call(null,inst_39877,inst_39879);
var inst_39885 = cljs.core.async.muxch_STAR_.call(null,inst_39884);
var inst_39886 = cljs.core.async.close_BANG_.call(null,inst_39885);
var inst_39887 = (inst_39879 + (1));
var tmp39965 = inst_39877;
var tmp39966 = inst_39876;
var tmp39967 = inst_39878;
var inst_39876__$1 = tmp39966;
var inst_39877__$1 = tmp39965;
var inst_39878__$1 = tmp39967;
var inst_39879__$1 = inst_39887;
var state_39935__$1 = (function (){var statearr_39971 = state_39935;
(statearr_39971[(12)] = inst_39877__$1);

(statearr_39971[(13)] = inst_39876__$1);

(statearr_39971[(14)] = inst_39879__$1);

(statearr_39971[(15)] = inst_39878__$1);

(statearr_39971[(17)] = inst_39886);

return statearr_39971;
})();
var statearr_39972_40006 = state_39935__$1;
(statearr_39972_40006[(2)] = null);

(statearr_39972_40006[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (18))){
var inst_39905 = (state_39935[(2)]);
var state_39935__$1 = state_39935;
var statearr_39973_40007 = state_39935__$1;
(statearr_39973_40007[(2)] = inst_39905);

(statearr_39973_40007[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39936 === (8))){
var inst_39879 = (state_39935[(14)]);
var inst_39878 = (state_39935[(15)]);
var inst_39881 = (inst_39879 < inst_39878);
var inst_39882 = inst_39881;
var state_39935__$1 = state_39935;
if(cljs.core.truth_(inst_39882)){
var statearr_39974_40008 = state_39935__$1;
(statearr_39974_40008[(1)] = (10));

} else {
var statearr_39975_40009 = state_39935__$1;
(statearr_39975_40009[(1)] = (11));

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
});})(c__26017__auto___39981,mults,ensure_mult,p))
;
return ((function (switch__25929__auto__,c__26017__auto___39981,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_39976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39976[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_39976[(1)] = (1));

return statearr_39976;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_39935){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_39935);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e39977){if((e39977 instanceof Object)){
var ex__25933__auto__ = e39977;
var statearr_39978_40010 = state_39935;
(statearr_39978_40010[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39935);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40011 = state_39935;
state_39935 = G__40011;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_39935){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_39935);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___39981,mults,ensure_mult,p))
})();
var state__26019__auto__ = (function (){var statearr_39979 = f__26018__auto__.call(null);
(statearr_39979[(6)] = c__26017__auto___39981);

return statearr_39979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___39981,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__40013 = arguments.length;
switch (G__40013) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__40016 = arguments.length;
switch (G__40016) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__40019 = arguments.length;
switch (G__40019) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__26017__auto___40086 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___40086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___40086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_40058){
var state_val_40059 = (state_40058[(1)]);
if((state_val_40059 === (7))){
var state_40058__$1 = state_40058;
var statearr_40060_40087 = state_40058__$1;
(statearr_40060_40087[(2)] = null);

(statearr_40060_40087[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (1))){
var state_40058__$1 = state_40058;
var statearr_40061_40088 = state_40058__$1;
(statearr_40061_40088[(2)] = null);

(statearr_40061_40088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (4))){
var inst_40022 = (state_40058[(7)]);
var inst_40024 = (inst_40022 < cnt);
var state_40058__$1 = state_40058;
if(cljs.core.truth_(inst_40024)){
var statearr_40062_40089 = state_40058__$1;
(statearr_40062_40089[(1)] = (6));

} else {
var statearr_40063_40090 = state_40058__$1;
(statearr_40063_40090[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (15))){
var inst_40054 = (state_40058[(2)]);
var state_40058__$1 = state_40058;
var statearr_40064_40091 = state_40058__$1;
(statearr_40064_40091[(2)] = inst_40054);

(statearr_40064_40091[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (13))){
var inst_40047 = cljs.core.async.close_BANG_.call(null,out);
var state_40058__$1 = state_40058;
var statearr_40065_40092 = state_40058__$1;
(statearr_40065_40092[(2)] = inst_40047);

(statearr_40065_40092[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (6))){
var state_40058__$1 = state_40058;
var statearr_40066_40093 = state_40058__$1;
(statearr_40066_40093[(2)] = null);

(statearr_40066_40093[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (3))){
var inst_40056 = (state_40058[(2)]);
var state_40058__$1 = state_40058;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40058__$1,inst_40056);
} else {
if((state_val_40059 === (12))){
var inst_40044 = (state_40058[(8)]);
var inst_40044__$1 = (state_40058[(2)]);
var inst_40045 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_40044__$1);
var state_40058__$1 = (function (){var statearr_40067 = state_40058;
(statearr_40067[(8)] = inst_40044__$1);

return statearr_40067;
})();
if(cljs.core.truth_(inst_40045)){
var statearr_40068_40094 = state_40058__$1;
(statearr_40068_40094[(1)] = (13));

} else {
var statearr_40069_40095 = state_40058__$1;
(statearr_40069_40095[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (2))){
var inst_40021 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_40022 = (0);
var state_40058__$1 = (function (){var statearr_40070 = state_40058;
(statearr_40070[(9)] = inst_40021);

(statearr_40070[(7)] = inst_40022);

return statearr_40070;
})();
var statearr_40071_40096 = state_40058__$1;
(statearr_40071_40096[(2)] = null);

(statearr_40071_40096[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (11))){
var inst_40022 = (state_40058[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_40058,(10),Object,null,(9));
var inst_40031 = chs__$1.call(null,inst_40022);
var inst_40032 = done.call(null,inst_40022);
var inst_40033 = cljs.core.async.take_BANG_.call(null,inst_40031,inst_40032);
var state_40058__$1 = state_40058;
var statearr_40072_40097 = state_40058__$1;
(statearr_40072_40097[(2)] = inst_40033);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (9))){
var inst_40022 = (state_40058[(7)]);
var inst_40035 = (state_40058[(2)]);
var inst_40036 = (inst_40022 + (1));
var inst_40022__$1 = inst_40036;
var state_40058__$1 = (function (){var statearr_40073 = state_40058;
(statearr_40073[(10)] = inst_40035);

(statearr_40073[(7)] = inst_40022__$1);

return statearr_40073;
})();
var statearr_40074_40098 = state_40058__$1;
(statearr_40074_40098[(2)] = null);

(statearr_40074_40098[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (5))){
var inst_40042 = (state_40058[(2)]);
var state_40058__$1 = (function (){var statearr_40075 = state_40058;
(statearr_40075[(11)] = inst_40042);

return statearr_40075;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40058__$1,(12),dchan);
} else {
if((state_val_40059 === (14))){
var inst_40044 = (state_40058[(8)]);
var inst_40049 = cljs.core.apply.call(null,f,inst_40044);
var state_40058__$1 = state_40058;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40058__$1,(16),out,inst_40049);
} else {
if((state_val_40059 === (16))){
var inst_40051 = (state_40058[(2)]);
var state_40058__$1 = (function (){var statearr_40076 = state_40058;
(statearr_40076[(12)] = inst_40051);

return statearr_40076;
})();
var statearr_40077_40099 = state_40058__$1;
(statearr_40077_40099[(2)] = null);

(statearr_40077_40099[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (10))){
var inst_40026 = (state_40058[(2)]);
var inst_40027 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_40058__$1 = (function (){var statearr_40078 = state_40058;
(statearr_40078[(13)] = inst_40026);

return statearr_40078;
})();
var statearr_40079_40100 = state_40058__$1;
(statearr_40079_40100[(2)] = inst_40027);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40058__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40059 === (8))){
var inst_40040 = (state_40058[(2)]);
var state_40058__$1 = state_40058;
var statearr_40080_40101 = state_40058__$1;
(statearr_40080_40101[(2)] = inst_40040);

(statearr_40080_40101[(1)] = (5));


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
});})(c__26017__auto___40086,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25929__auto__,c__26017__auto___40086,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_40081 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40081[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_40081[(1)] = (1));

return statearr_40081;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_40058){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40058);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e40082){if((e40082 instanceof Object)){
var ex__25933__auto__ = e40082;
var statearr_40083_40102 = state_40058;
(statearr_40083_40102[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40058);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40082;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40103 = state_40058;
state_40058 = G__40103;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_40058){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_40058);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___40086,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26019__auto__ = (function (){var statearr_40084 = f__26018__auto__.call(null);
(statearr_40084[(6)] = c__26017__auto___40086);

return statearr_40084;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___40086,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__40106 = arguments.length;
switch (G__40106) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26017__auto___40160 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___40160,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___40160,out){
return (function (state_40138){
var state_val_40139 = (state_40138[(1)]);
if((state_val_40139 === (7))){
var inst_40117 = (state_40138[(7)]);
var inst_40118 = (state_40138[(8)]);
var inst_40117__$1 = (state_40138[(2)]);
var inst_40118__$1 = cljs.core.nth.call(null,inst_40117__$1,(0),null);
var inst_40119 = cljs.core.nth.call(null,inst_40117__$1,(1),null);
var inst_40120 = (inst_40118__$1 == null);
var state_40138__$1 = (function (){var statearr_40140 = state_40138;
(statearr_40140[(9)] = inst_40119);

(statearr_40140[(7)] = inst_40117__$1);

(statearr_40140[(8)] = inst_40118__$1);

return statearr_40140;
})();
if(cljs.core.truth_(inst_40120)){
var statearr_40141_40161 = state_40138__$1;
(statearr_40141_40161[(1)] = (8));

} else {
var statearr_40142_40162 = state_40138__$1;
(statearr_40142_40162[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40139 === (1))){
var inst_40107 = cljs.core.vec.call(null,chs);
var inst_40108 = inst_40107;
var state_40138__$1 = (function (){var statearr_40143 = state_40138;
(statearr_40143[(10)] = inst_40108);

return statearr_40143;
})();
var statearr_40144_40163 = state_40138__$1;
(statearr_40144_40163[(2)] = null);

(statearr_40144_40163[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40139 === (4))){
var inst_40108 = (state_40138[(10)]);
var state_40138__$1 = state_40138;
return cljs.core.async.ioc_alts_BANG_.call(null,state_40138__$1,(7),inst_40108);
} else {
if((state_val_40139 === (6))){
var inst_40134 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
var statearr_40145_40164 = state_40138__$1;
(statearr_40145_40164[(2)] = inst_40134);

(statearr_40145_40164[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40139 === (3))){
var inst_40136 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40138__$1,inst_40136);
} else {
if((state_val_40139 === (2))){
var inst_40108 = (state_40138[(10)]);
var inst_40110 = cljs.core.count.call(null,inst_40108);
var inst_40111 = (inst_40110 > (0));
var state_40138__$1 = state_40138;
if(cljs.core.truth_(inst_40111)){
var statearr_40147_40165 = state_40138__$1;
(statearr_40147_40165[(1)] = (4));

} else {
var statearr_40148_40166 = state_40138__$1;
(statearr_40148_40166[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40139 === (11))){
var inst_40108 = (state_40138[(10)]);
var inst_40127 = (state_40138[(2)]);
var tmp40146 = inst_40108;
var inst_40108__$1 = tmp40146;
var state_40138__$1 = (function (){var statearr_40149 = state_40138;
(statearr_40149[(11)] = inst_40127);

(statearr_40149[(10)] = inst_40108__$1);

return statearr_40149;
})();
var statearr_40150_40167 = state_40138__$1;
(statearr_40150_40167[(2)] = null);

(statearr_40150_40167[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40139 === (9))){
var inst_40118 = (state_40138[(8)]);
var state_40138__$1 = state_40138;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40138__$1,(11),out,inst_40118);
} else {
if((state_val_40139 === (5))){
var inst_40132 = cljs.core.async.close_BANG_.call(null,out);
var state_40138__$1 = state_40138;
var statearr_40151_40168 = state_40138__$1;
(statearr_40151_40168[(2)] = inst_40132);

(statearr_40151_40168[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40139 === (10))){
var inst_40130 = (state_40138[(2)]);
var state_40138__$1 = state_40138;
var statearr_40152_40169 = state_40138__$1;
(statearr_40152_40169[(2)] = inst_40130);

(statearr_40152_40169[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40139 === (8))){
var inst_40119 = (state_40138[(9)]);
var inst_40117 = (state_40138[(7)]);
var inst_40118 = (state_40138[(8)]);
var inst_40108 = (state_40138[(10)]);
var inst_40122 = (function (){var cs = inst_40108;
var vec__40113 = inst_40117;
var v = inst_40118;
var c = inst_40119;
return ((function (cs,vec__40113,v,c,inst_40119,inst_40117,inst_40118,inst_40108,state_val_40139,c__26017__auto___40160,out){
return (function (p1__40104_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__40104_SHARP_);
});
;})(cs,vec__40113,v,c,inst_40119,inst_40117,inst_40118,inst_40108,state_val_40139,c__26017__auto___40160,out))
})();
var inst_40123 = cljs.core.filterv.call(null,inst_40122,inst_40108);
var inst_40108__$1 = inst_40123;
var state_40138__$1 = (function (){var statearr_40153 = state_40138;
(statearr_40153[(10)] = inst_40108__$1);

return statearr_40153;
})();
var statearr_40154_40170 = state_40138__$1;
(statearr_40154_40170[(2)] = null);

(statearr_40154_40170[(1)] = (2));


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
});})(c__26017__auto___40160,out))
;
return ((function (switch__25929__auto__,c__26017__auto___40160,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_40155 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40155[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_40155[(1)] = (1));

return statearr_40155;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_40138){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e40156){if((e40156 instanceof Object)){
var ex__25933__auto__ = e40156;
var statearr_40157_40171 = state_40138;
(statearr_40157_40171[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40156;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40172 = state_40138;
state_40138 = G__40172;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_40138){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_40138);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___40160,out))
})();
var state__26019__auto__ = (function (){var statearr_40158 = f__26018__auto__.call(null);
(statearr_40158[(6)] = c__26017__auto___40160);

return statearr_40158;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___40160,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__40174 = arguments.length;
switch (G__40174) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26017__auto___40219 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___40219,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___40219,out){
return (function (state_40198){
var state_val_40199 = (state_40198[(1)]);
if((state_val_40199 === (7))){
var inst_40180 = (state_40198[(7)]);
var inst_40180__$1 = (state_40198[(2)]);
var inst_40181 = (inst_40180__$1 == null);
var inst_40182 = cljs.core.not.call(null,inst_40181);
var state_40198__$1 = (function (){var statearr_40200 = state_40198;
(statearr_40200[(7)] = inst_40180__$1);

return statearr_40200;
})();
if(inst_40182){
var statearr_40201_40220 = state_40198__$1;
(statearr_40201_40220[(1)] = (8));

} else {
var statearr_40202_40221 = state_40198__$1;
(statearr_40202_40221[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (1))){
var inst_40175 = (0);
var state_40198__$1 = (function (){var statearr_40203 = state_40198;
(statearr_40203[(8)] = inst_40175);

return statearr_40203;
})();
var statearr_40204_40222 = state_40198__$1;
(statearr_40204_40222[(2)] = null);

(statearr_40204_40222[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (4))){
var state_40198__$1 = state_40198;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40198__$1,(7),ch);
} else {
if((state_val_40199 === (6))){
var inst_40193 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40205_40223 = state_40198__$1;
(statearr_40205_40223[(2)] = inst_40193);

(statearr_40205_40223[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (3))){
var inst_40195 = (state_40198[(2)]);
var inst_40196 = cljs.core.async.close_BANG_.call(null,out);
var state_40198__$1 = (function (){var statearr_40206 = state_40198;
(statearr_40206[(9)] = inst_40195);

return statearr_40206;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40198__$1,inst_40196);
} else {
if((state_val_40199 === (2))){
var inst_40175 = (state_40198[(8)]);
var inst_40177 = (inst_40175 < n);
var state_40198__$1 = state_40198;
if(cljs.core.truth_(inst_40177)){
var statearr_40207_40224 = state_40198__$1;
(statearr_40207_40224[(1)] = (4));

} else {
var statearr_40208_40225 = state_40198__$1;
(statearr_40208_40225[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (11))){
var inst_40175 = (state_40198[(8)]);
var inst_40185 = (state_40198[(2)]);
var inst_40186 = (inst_40175 + (1));
var inst_40175__$1 = inst_40186;
var state_40198__$1 = (function (){var statearr_40209 = state_40198;
(statearr_40209[(10)] = inst_40185);

(statearr_40209[(8)] = inst_40175__$1);

return statearr_40209;
})();
var statearr_40210_40226 = state_40198__$1;
(statearr_40210_40226[(2)] = null);

(statearr_40210_40226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (9))){
var state_40198__$1 = state_40198;
var statearr_40211_40227 = state_40198__$1;
(statearr_40211_40227[(2)] = null);

(statearr_40211_40227[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (5))){
var state_40198__$1 = state_40198;
var statearr_40212_40228 = state_40198__$1;
(statearr_40212_40228[(2)] = null);

(statearr_40212_40228[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (10))){
var inst_40190 = (state_40198[(2)]);
var state_40198__$1 = state_40198;
var statearr_40213_40229 = state_40198__$1;
(statearr_40213_40229[(2)] = inst_40190);

(statearr_40213_40229[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40199 === (8))){
var inst_40180 = (state_40198[(7)]);
var state_40198__$1 = state_40198;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40198__$1,(11),out,inst_40180);
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
});})(c__26017__auto___40219,out))
;
return ((function (switch__25929__auto__,c__26017__auto___40219,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_40214 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40214[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_40214[(1)] = (1));

return statearr_40214;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_40198){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40198);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e40215){if((e40215 instanceof Object)){
var ex__25933__auto__ = e40215;
var statearr_40216_40230 = state_40198;
(statearr_40216_40230[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40198);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40215;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40231 = state_40198;
state_40198 = G__40231;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_40198){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_40198);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___40219,out))
})();
var state__26019__auto__ = (function (){var statearr_40217 = f__26018__auto__.call(null);
(statearr_40217[(6)] = c__26017__auto___40219);

return statearr_40217;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___40219,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40233 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40233 = (function (f,ch,meta40234){
this.f = f;
this.ch = ch;
this.meta40234 = meta40234;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40235,meta40234__$1){
var self__ = this;
var _40235__$1 = this;
return (new cljs.core.async.t_cljs$core$async40233(self__.f,self__.ch,meta40234__$1));
});

cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40235){
var self__ = this;
var _40235__$1 = this;
return self__.meta40234;
});

cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async40236 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40236 = (function (f,ch,meta40234,_,fn1,meta40237){
this.f = f;
this.ch = ch;
this.meta40234 = meta40234;
this._ = _;
this.fn1 = fn1;
this.meta40237 = meta40237;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40236.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_40238,meta40237__$1){
var self__ = this;
var _40238__$1 = this;
return (new cljs.core.async.t_cljs$core$async40236(self__.f,self__.ch,self__.meta40234,self__._,self__.fn1,meta40237__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async40236.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_40238){
var self__ = this;
var _40238__$1 = this;
return self__.meta40237;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40236.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40236.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40236.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async40236.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__40232_SHARP_){
return f1.call(null,(((p1__40232_SHARP_ == null))?null:self__.f.call(null,p1__40232_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async40236.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40234","meta40234",460394202,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async40233","cljs.core.async/t_cljs$core$async40233",1695273619,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta40237","meta40237",-198876320,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async40236.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40236.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40236";

cljs.core.async.t_cljs$core$async40236.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40236");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40236.
 */
cljs.core.async.__GT_t_cljs$core$async40236 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40236(f__$1,ch__$1,meta40234__$1,___$2,fn1__$1,meta40237){
return (new cljs.core.async.t_cljs$core$async40236(f__$1,ch__$1,meta40234__$1,___$2,fn1__$1,meta40237));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async40236(self__.f,self__.ch,self__.meta40234,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40233.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async40233.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40234","meta40234",460394202,null)], null);
});

cljs.core.async.t_cljs$core$async40233.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40233.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40233";

cljs.core.async.t_cljs$core$async40233.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40233");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40233.
 */
cljs.core.async.__GT_t_cljs$core$async40233 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async40233(f__$1,ch__$1,meta40234){
return (new cljs.core.async.t_cljs$core$async40233(f__$1,ch__$1,meta40234));
});

}

return (new cljs.core.async.t_cljs$core$async40233(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async40239 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40239 = (function (f,ch,meta40240){
this.f = f;
this.ch = ch;
this.meta40240 = meta40240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40241,meta40240__$1){
var self__ = this;
var _40241__$1 = this;
return (new cljs.core.async.t_cljs$core$async40239(self__.f,self__.ch,meta40240__$1));
});

cljs.core.async.t_cljs$core$async40239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40241){
var self__ = this;
var _40241__$1 = this;
return self__.meta40240;
});

cljs.core.async.t_cljs$core$async40239.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40239.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40239.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40239.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40239.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40239.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async40239.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40240","meta40240",-1001636609,null)], null);
});

cljs.core.async.t_cljs$core$async40239.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40239.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40239";

cljs.core.async.t_cljs$core$async40239.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40239");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40239.
 */
cljs.core.async.__GT_t_cljs$core$async40239 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async40239(f__$1,ch__$1,meta40240){
return (new cljs.core.async.t_cljs$core$async40239(f__$1,ch__$1,meta40240));
});

}

return (new cljs.core.async.t_cljs$core$async40239(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async40242 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async40242 = (function (p,ch,meta40243){
this.p = p;
this.ch = ch;
this.meta40243 = meta40243;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_40244,meta40243__$1){
var self__ = this;
var _40244__$1 = this;
return (new cljs.core.async.t_cljs$core$async40242(self__.p,self__.ch,meta40243__$1));
});

cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_40244){
var self__ = this;
var _40244__$1 = this;
return self__.meta40243;
});

cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async40242.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async40242.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta40243","meta40243",1338285058,null)], null);
});

cljs.core.async.t_cljs$core$async40242.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async40242.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async40242";

cljs.core.async.t_cljs$core$async40242.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async40242");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async40242.
 */
cljs.core.async.__GT_t_cljs$core$async40242 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async40242(p__$1,ch__$1,meta40243){
return (new cljs.core.async.t_cljs$core$async40242(p__$1,ch__$1,meta40243));
});

}

return (new cljs.core.async.t_cljs$core$async40242(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__40246 = arguments.length;
switch (G__40246) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26017__auto___40286 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___40286,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___40286,out){
return (function (state_40267){
var state_val_40268 = (state_40267[(1)]);
if((state_val_40268 === (7))){
var inst_40263 = (state_40267[(2)]);
var state_40267__$1 = state_40267;
var statearr_40269_40287 = state_40267__$1;
(statearr_40269_40287[(2)] = inst_40263);

(statearr_40269_40287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (1))){
var state_40267__$1 = state_40267;
var statearr_40270_40288 = state_40267__$1;
(statearr_40270_40288[(2)] = null);

(statearr_40270_40288[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (4))){
var inst_40249 = (state_40267[(7)]);
var inst_40249__$1 = (state_40267[(2)]);
var inst_40250 = (inst_40249__$1 == null);
var state_40267__$1 = (function (){var statearr_40271 = state_40267;
(statearr_40271[(7)] = inst_40249__$1);

return statearr_40271;
})();
if(cljs.core.truth_(inst_40250)){
var statearr_40272_40289 = state_40267__$1;
(statearr_40272_40289[(1)] = (5));

} else {
var statearr_40273_40290 = state_40267__$1;
(statearr_40273_40290[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (6))){
var inst_40249 = (state_40267[(7)]);
var inst_40254 = p.call(null,inst_40249);
var state_40267__$1 = state_40267;
if(cljs.core.truth_(inst_40254)){
var statearr_40274_40291 = state_40267__$1;
(statearr_40274_40291[(1)] = (8));

} else {
var statearr_40275_40292 = state_40267__$1;
(statearr_40275_40292[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (3))){
var inst_40265 = (state_40267[(2)]);
var state_40267__$1 = state_40267;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40267__$1,inst_40265);
} else {
if((state_val_40268 === (2))){
var state_40267__$1 = state_40267;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40267__$1,(4),ch);
} else {
if((state_val_40268 === (11))){
var inst_40257 = (state_40267[(2)]);
var state_40267__$1 = state_40267;
var statearr_40276_40293 = state_40267__$1;
(statearr_40276_40293[(2)] = inst_40257);

(statearr_40276_40293[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (9))){
var state_40267__$1 = state_40267;
var statearr_40277_40294 = state_40267__$1;
(statearr_40277_40294[(2)] = null);

(statearr_40277_40294[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (5))){
var inst_40252 = cljs.core.async.close_BANG_.call(null,out);
var state_40267__$1 = state_40267;
var statearr_40278_40295 = state_40267__$1;
(statearr_40278_40295[(2)] = inst_40252);

(statearr_40278_40295[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (10))){
var inst_40260 = (state_40267[(2)]);
var state_40267__$1 = (function (){var statearr_40279 = state_40267;
(statearr_40279[(8)] = inst_40260);

return statearr_40279;
})();
var statearr_40280_40296 = state_40267__$1;
(statearr_40280_40296[(2)] = null);

(statearr_40280_40296[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40268 === (8))){
var inst_40249 = (state_40267[(7)]);
var state_40267__$1 = state_40267;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40267__$1,(11),out,inst_40249);
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
});})(c__26017__auto___40286,out))
;
return ((function (switch__25929__auto__,c__26017__auto___40286,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_40281 = [null,null,null,null,null,null,null,null,null];
(statearr_40281[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_40281[(1)] = (1));

return statearr_40281;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_40267){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40267);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e40282){if((e40282 instanceof Object)){
var ex__25933__auto__ = e40282;
var statearr_40283_40297 = state_40267;
(statearr_40283_40297[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40267);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40298 = state_40267;
state_40267 = G__40298;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_40267){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_40267);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___40286,out))
})();
var state__26019__auto__ = (function (){var statearr_40284 = f__26018__auto__.call(null);
(statearr_40284[(6)] = c__26017__auto___40286);

return statearr_40284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___40286,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__40300 = arguments.length;
switch (G__40300) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__){
return (function (state_40363){
var state_val_40364 = (state_40363[(1)]);
if((state_val_40364 === (7))){
var inst_40359 = (state_40363[(2)]);
var state_40363__$1 = state_40363;
var statearr_40365_40403 = state_40363__$1;
(statearr_40365_40403[(2)] = inst_40359);

(statearr_40365_40403[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (20))){
var inst_40329 = (state_40363[(7)]);
var inst_40340 = (state_40363[(2)]);
var inst_40341 = cljs.core.next.call(null,inst_40329);
var inst_40315 = inst_40341;
var inst_40316 = null;
var inst_40317 = (0);
var inst_40318 = (0);
var state_40363__$1 = (function (){var statearr_40366 = state_40363;
(statearr_40366[(8)] = inst_40316);

(statearr_40366[(9)] = inst_40315);

(statearr_40366[(10)] = inst_40318);

(statearr_40366[(11)] = inst_40317);

(statearr_40366[(12)] = inst_40340);

return statearr_40366;
})();
var statearr_40367_40404 = state_40363__$1;
(statearr_40367_40404[(2)] = null);

(statearr_40367_40404[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (1))){
var state_40363__$1 = state_40363;
var statearr_40368_40405 = state_40363__$1;
(statearr_40368_40405[(2)] = null);

(statearr_40368_40405[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (4))){
var inst_40304 = (state_40363[(13)]);
var inst_40304__$1 = (state_40363[(2)]);
var inst_40305 = (inst_40304__$1 == null);
var state_40363__$1 = (function (){var statearr_40369 = state_40363;
(statearr_40369[(13)] = inst_40304__$1);

return statearr_40369;
})();
if(cljs.core.truth_(inst_40305)){
var statearr_40370_40406 = state_40363__$1;
(statearr_40370_40406[(1)] = (5));

} else {
var statearr_40371_40407 = state_40363__$1;
(statearr_40371_40407[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (15))){
var state_40363__$1 = state_40363;
var statearr_40375_40408 = state_40363__$1;
(statearr_40375_40408[(2)] = null);

(statearr_40375_40408[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (21))){
var state_40363__$1 = state_40363;
var statearr_40376_40409 = state_40363__$1;
(statearr_40376_40409[(2)] = null);

(statearr_40376_40409[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (13))){
var inst_40316 = (state_40363[(8)]);
var inst_40315 = (state_40363[(9)]);
var inst_40318 = (state_40363[(10)]);
var inst_40317 = (state_40363[(11)]);
var inst_40325 = (state_40363[(2)]);
var inst_40326 = (inst_40318 + (1));
var tmp40372 = inst_40316;
var tmp40373 = inst_40315;
var tmp40374 = inst_40317;
var inst_40315__$1 = tmp40373;
var inst_40316__$1 = tmp40372;
var inst_40317__$1 = tmp40374;
var inst_40318__$1 = inst_40326;
var state_40363__$1 = (function (){var statearr_40377 = state_40363;
(statearr_40377[(8)] = inst_40316__$1);

(statearr_40377[(9)] = inst_40315__$1);

(statearr_40377[(10)] = inst_40318__$1);

(statearr_40377[(14)] = inst_40325);

(statearr_40377[(11)] = inst_40317__$1);

return statearr_40377;
})();
var statearr_40378_40410 = state_40363__$1;
(statearr_40378_40410[(2)] = null);

(statearr_40378_40410[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (22))){
var state_40363__$1 = state_40363;
var statearr_40379_40411 = state_40363__$1;
(statearr_40379_40411[(2)] = null);

(statearr_40379_40411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (6))){
var inst_40304 = (state_40363[(13)]);
var inst_40313 = f.call(null,inst_40304);
var inst_40314 = cljs.core.seq.call(null,inst_40313);
var inst_40315 = inst_40314;
var inst_40316 = null;
var inst_40317 = (0);
var inst_40318 = (0);
var state_40363__$1 = (function (){var statearr_40380 = state_40363;
(statearr_40380[(8)] = inst_40316);

(statearr_40380[(9)] = inst_40315);

(statearr_40380[(10)] = inst_40318);

(statearr_40380[(11)] = inst_40317);

return statearr_40380;
})();
var statearr_40381_40412 = state_40363__$1;
(statearr_40381_40412[(2)] = null);

(statearr_40381_40412[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (17))){
var inst_40329 = (state_40363[(7)]);
var inst_40333 = cljs.core.chunk_first.call(null,inst_40329);
var inst_40334 = cljs.core.chunk_rest.call(null,inst_40329);
var inst_40335 = cljs.core.count.call(null,inst_40333);
var inst_40315 = inst_40334;
var inst_40316 = inst_40333;
var inst_40317 = inst_40335;
var inst_40318 = (0);
var state_40363__$1 = (function (){var statearr_40382 = state_40363;
(statearr_40382[(8)] = inst_40316);

(statearr_40382[(9)] = inst_40315);

(statearr_40382[(10)] = inst_40318);

(statearr_40382[(11)] = inst_40317);

return statearr_40382;
})();
var statearr_40383_40413 = state_40363__$1;
(statearr_40383_40413[(2)] = null);

(statearr_40383_40413[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (3))){
var inst_40361 = (state_40363[(2)]);
var state_40363__$1 = state_40363;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40363__$1,inst_40361);
} else {
if((state_val_40364 === (12))){
var inst_40349 = (state_40363[(2)]);
var state_40363__$1 = state_40363;
var statearr_40384_40414 = state_40363__$1;
(statearr_40384_40414[(2)] = inst_40349);

(statearr_40384_40414[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (2))){
var state_40363__$1 = state_40363;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40363__$1,(4),in$);
} else {
if((state_val_40364 === (23))){
var inst_40357 = (state_40363[(2)]);
var state_40363__$1 = state_40363;
var statearr_40385_40415 = state_40363__$1;
(statearr_40385_40415[(2)] = inst_40357);

(statearr_40385_40415[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (19))){
var inst_40344 = (state_40363[(2)]);
var state_40363__$1 = state_40363;
var statearr_40386_40416 = state_40363__$1;
(statearr_40386_40416[(2)] = inst_40344);

(statearr_40386_40416[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (11))){
var inst_40315 = (state_40363[(9)]);
var inst_40329 = (state_40363[(7)]);
var inst_40329__$1 = cljs.core.seq.call(null,inst_40315);
var state_40363__$1 = (function (){var statearr_40387 = state_40363;
(statearr_40387[(7)] = inst_40329__$1);

return statearr_40387;
})();
if(inst_40329__$1){
var statearr_40388_40417 = state_40363__$1;
(statearr_40388_40417[(1)] = (14));

} else {
var statearr_40389_40418 = state_40363__$1;
(statearr_40389_40418[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (9))){
var inst_40351 = (state_40363[(2)]);
var inst_40352 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_40363__$1 = (function (){var statearr_40390 = state_40363;
(statearr_40390[(15)] = inst_40351);

return statearr_40390;
})();
if(cljs.core.truth_(inst_40352)){
var statearr_40391_40419 = state_40363__$1;
(statearr_40391_40419[(1)] = (21));

} else {
var statearr_40392_40420 = state_40363__$1;
(statearr_40392_40420[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (5))){
var inst_40307 = cljs.core.async.close_BANG_.call(null,out);
var state_40363__$1 = state_40363;
var statearr_40393_40421 = state_40363__$1;
(statearr_40393_40421[(2)] = inst_40307);

(statearr_40393_40421[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (14))){
var inst_40329 = (state_40363[(7)]);
var inst_40331 = cljs.core.chunked_seq_QMARK_.call(null,inst_40329);
var state_40363__$1 = state_40363;
if(inst_40331){
var statearr_40394_40422 = state_40363__$1;
(statearr_40394_40422[(1)] = (17));

} else {
var statearr_40395_40423 = state_40363__$1;
(statearr_40395_40423[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (16))){
var inst_40347 = (state_40363[(2)]);
var state_40363__$1 = state_40363;
var statearr_40396_40424 = state_40363__$1;
(statearr_40396_40424[(2)] = inst_40347);

(statearr_40396_40424[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40364 === (10))){
var inst_40316 = (state_40363[(8)]);
var inst_40318 = (state_40363[(10)]);
var inst_40323 = cljs.core._nth.call(null,inst_40316,inst_40318);
var state_40363__$1 = state_40363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40363__$1,(13),out,inst_40323);
} else {
if((state_val_40364 === (18))){
var inst_40329 = (state_40363[(7)]);
var inst_40338 = cljs.core.first.call(null,inst_40329);
var state_40363__$1 = state_40363;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40363__$1,(20),out,inst_40338);
} else {
if((state_val_40364 === (8))){
var inst_40318 = (state_40363[(10)]);
var inst_40317 = (state_40363[(11)]);
var inst_40320 = (inst_40318 < inst_40317);
var inst_40321 = inst_40320;
var state_40363__$1 = state_40363;
if(cljs.core.truth_(inst_40321)){
var statearr_40397_40425 = state_40363__$1;
(statearr_40397_40425[(1)] = (10));

} else {
var statearr_40398_40426 = state_40363__$1;
(statearr_40398_40426[(1)] = (11));

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
});})(c__26017__auto__))
;
return ((function (switch__25929__auto__,c__26017__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_40399 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40399[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__);

(statearr_40399[(1)] = (1));

return statearr_40399;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____1 = (function (state_40363){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40363);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e40400){if((e40400 instanceof Object)){
var ex__25933__auto__ = e40400;
var statearr_40401_40427 = state_40363;
(statearr_40401_40427[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40363);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40400;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40428 = state_40363;
state_40363 = G__40428;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__ = function(state_40363){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____1.call(this,state_40363);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_40402 = f__26018__auto__.call(null);
(statearr_40402[(6)] = c__26017__auto__);

return statearr_40402;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__))
);

return c__26017__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__40430 = arguments.length;
switch (G__40430) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__40433 = arguments.length;
switch (G__40433) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__40436 = arguments.length;
switch (G__40436) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26017__auto___40483 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___40483,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___40483,out){
return (function (state_40460){
var state_val_40461 = (state_40460[(1)]);
if((state_val_40461 === (7))){
var inst_40455 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40462_40484 = state_40460__$1;
(statearr_40462_40484[(2)] = inst_40455);

(statearr_40462_40484[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (1))){
var inst_40437 = null;
var state_40460__$1 = (function (){var statearr_40463 = state_40460;
(statearr_40463[(7)] = inst_40437);

return statearr_40463;
})();
var statearr_40464_40485 = state_40460__$1;
(statearr_40464_40485[(2)] = null);

(statearr_40464_40485[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (4))){
var inst_40440 = (state_40460[(8)]);
var inst_40440__$1 = (state_40460[(2)]);
var inst_40441 = (inst_40440__$1 == null);
var inst_40442 = cljs.core.not.call(null,inst_40441);
var state_40460__$1 = (function (){var statearr_40465 = state_40460;
(statearr_40465[(8)] = inst_40440__$1);

return statearr_40465;
})();
if(inst_40442){
var statearr_40466_40486 = state_40460__$1;
(statearr_40466_40486[(1)] = (5));

} else {
var statearr_40467_40487 = state_40460__$1;
(statearr_40467_40487[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (6))){
var state_40460__$1 = state_40460;
var statearr_40468_40488 = state_40460__$1;
(statearr_40468_40488[(2)] = null);

(statearr_40468_40488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (3))){
var inst_40457 = (state_40460[(2)]);
var inst_40458 = cljs.core.async.close_BANG_.call(null,out);
var state_40460__$1 = (function (){var statearr_40469 = state_40460;
(statearr_40469[(9)] = inst_40457);

return statearr_40469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40460__$1,inst_40458);
} else {
if((state_val_40461 === (2))){
var state_40460__$1 = state_40460;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40460__$1,(4),ch);
} else {
if((state_val_40461 === (11))){
var inst_40440 = (state_40460[(8)]);
var inst_40449 = (state_40460[(2)]);
var inst_40437 = inst_40440;
var state_40460__$1 = (function (){var statearr_40470 = state_40460;
(statearr_40470[(10)] = inst_40449);

(statearr_40470[(7)] = inst_40437);

return statearr_40470;
})();
var statearr_40471_40489 = state_40460__$1;
(statearr_40471_40489[(2)] = null);

(statearr_40471_40489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (9))){
var inst_40440 = (state_40460[(8)]);
var state_40460__$1 = state_40460;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40460__$1,(11),out,inst_40440);
} else {
if((state_val_40461 === (5))){
var inst_40440 = (state_40460[(8)]);
var inst_40437 = (state_40460[(7)]);
var inst_40444 = cljs.core._EQ_.call(null,inst_40440,inst_40437);
var state_40460__$1 = state_40460;
if(inst_40444){
var statearr_40473_40490 = state_40460__$1;
(statearr_40473_40490[(1)] = (8));

} else {
var statearr_40474_40491 = state_40460__$1;
(statearr_40474_40491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (10))){
var inst_40452 = (state_40460[(2)]);
var state_40460__$1 = state_40460;
var statearr_40475_40492 = state_40460__$1;
(statearr_40475_40492[(2)] = inst_40452);

(statearr_40475_40492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40461 === (8))){
var inst_40437 = (state_40460[(7)]);
var tmp40472 = inst_40437;
var inst_40437__$1 = tmp40472;
var state_40460__$1 = (function (){var statearr_40476 = state_40460;
(statearr_40476[(7)] = inst_40437__$1);

return statearr_40476;
})();
var statearr_40477_40493 = state_40460__$1;
(statearr_40477_40493[(2)] = null);

(statearr_40477_40493[(1)] = (2));


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
});})(c__26017__auto___40483,out))
;
return ((function (switch__25929__auto__,c__26017__auto___40483,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_40478 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_40478[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_40478[(1)] = (1));

return statearr_40478;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_40460){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40460);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e40479){if((e40479 instanceof Object)){
var ex__25933__auto__ = e40479;
var statearr_40480_40494 = state_40460;
(statearr_40480_40494[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40460);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40479;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40495 = state_40460;
state_40460 = G__40495;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_40460){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_40460);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___40483,out))
})();
var state__26019__auto__ = (function (){var statearr_40481 = f__26018__auto__.call(null);
(statearr_40481[(6)] = c__26017__auto___40483);

return statearr_40481;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___40483,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__40497 = arguments.length;
switch (G__40497) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26017__auto___40563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___40563,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___40563,out){
return (function (state_40535){
var state_val_40536 = (state_40535[(1)]);
if((state_val_40536 === (7))){
var inst_40531 = (state_40535[(2)]);
var state_40535__$1 = state_40535;
var statearr_40537_40564 = state_40535__$1;
(statearr_40537_40564[(2)] = inst_40531);

(statearr_40537_40564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (1))){
var inst_40498 = (new Array(n));
var inst_40499 = inst_40498;
var inst_40500 = (0);
var state_40535__$1 = (function (){var statearr_40538 = state_40535;
(statearr_40538[(7)] = inst_40499);

(statearr_40538[(8)] = inst_40500);

return statearr_40538;
})();
var statearr_40539_40565 = state_40535__$1;
(statearr_40539_40565[(2)] = null);

(statearr_40539_40565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (4))){
var inst_40503 = (state_40535[(9)]);
var inst_40503__$1 = (state_40535[(2)]);
var inst_40504 = (inst_40503__$1 == null);
var inst_40505 = cljs.core.not.call(null,inst_40504);
var state_40535__$1 = (function (){var statearr_40540 = state_40535;
(statearr_40540[(9)] = inst_40503__$1);

return statearr_40540;
})();
if(inst_40505){
var statearr_40541_40566 = state_40535__$1;
(statearr_40541_40566[(1)] = (5));

} else {
var statearr_40542_40567 = state_40535__$1;
(statearr_40542_40567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (15))){
var inst_40525 = (state_40535[(2)]);
var state_40535__$1 = state_40535;
var statearr_40543_40568 = state_40535__$1;
(statearr_40543_40568[(2)] = inst_40525);

(statearr_40543_40568[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (13))){
var state_40535__$1 = state_40535;
var statearr_40544_40569 = state_40535__$1;
(statearr_40544_40569[(2)] = null);

(statearr_40544_40569[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (6))){
var inst_40500 = (state_40535[(8)]);
var inst_40521 = (inst_40500 > (0));
var state_40535__$1 = state_40535;
if(cljs.core.truth_(inst_40521)){
var statearr_40545_40570 = state_40535__$1;
(statearr_40545_40570[(1)] = (12));

} else {
var statearr_40546_40571 = state_40535__$1;
(statearr_40546_40571[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (3))){
var inst_40533 = (state_40535[(2)]);
var state_40535__$1 = state_40535;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40535__$1,inst_40533);
} else {
if((state_val_40536 === (12))){
var inst_40499 = (state_40535[(7)]);
var inst_40523 = cljs.core.vec.call(null,inst_40499);
var state_40535__$1 = state_40535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40535__$1,(15),out,inst_40523);
} else {
if((state_val_40536 === (2))){
var state_40535__$1 = state_40535;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40535__$1,(4),ch);
} else {
if((state_val_40536 === (11))){
var inst_40515 = (state_40535[(2)]);
var inst_40516 = (new Array(n));
var inst_40499 = inst_40516;
var inst_40500 = (0);
var state_40535__$1 = (function (){var statearr_40547 = state_40535;
(statearr_40547[(7)] = inst_40499);

(statearr_40547[(10)] = inst_40515);

(statearr_40547[(8)] = inst_40500);

return statearr_40547;
})();
var statearr_40548_40572 = state_40535__$1;
(statearr_40548_40572[(2)] = null);

(statearr_40548_40572[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (9))){
var inst_40499 = (state_40535[(7)]);
var inst_40513 = cljs.core.vec.call(null,inst_40499);
var state_40535__$1 = state_40535;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40535__$1,(11),out,inst_40513);
} else {
if((state_val_40536 === (5))){
var inst_40499 = (state_40535[(7)]);
var inst_40500 = (state_40535[(8)]);
var inst_40508 = (state_40535[(11)]);
var inst_40503 = (state_40535[(9)]);
var inst_40507 = (inst_40499[inst_40500] = inst_40503);
var inst_40508__$1 = (inst_40500 + (1));
var inst_40509 = (inst_40508__$1 < n);
var state_40535__$1 = (function (){var statearr_40549 = state_40535;
(statearr_40549[(12)] = inst_40507);

(statearr_40549[(11)] = inst_40508__$1);

return statearr_40549;
})();
if(cljs.core.truth_(inst_40509)){
var statearr_40550_40573 = state_40535__$1;
(statearr_40550_40573[(1)] = (8));

} else {
var statearr_40551_40574 = state_40535__$1;
(statearr_40551_40574[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (14))){
var inst_40528 = (state_40535[(2)]);
var inst_40529 = cljs.core.async.close_BANG_.call(null,out);
var state_40535__$1 = (function (){var statearr_40553 = state_40535;
(statearr_40553[(13)] = inst_40528);

return statearr_40553;
})();
var statearr_40554_40575 = state_40535__$1;
(statearr_40554_40575[(2)] = inst_40529);

(statearr_40554_40575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (10))){
var inst_40519 = (state_40535[(2)]);
var state_40535__$1 = state_40535;
var statearr_40555_40576 = state_40535__$1;
(statearr_40555_40576[(2)] = inst_40519);

(statearr_40555_40576[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40536 === (8))){
var inst_40499 = (state_40535[(7)]);
var inst_40508 = (state_40535[(11)]);
var tmp40552 = inst_40499;
var inst_40499__$1 = tmp40552;
var inst_40500 = inst_40508;
var state_40535__$1 = (function (){var statearr_40556 = state_40535;
(statearr_40556[(7)] = inst_40499__$1);

(statearr_40556[(8)] = inst_40500);

return statearr_40556;
})();
var statearr_40557_40577 = state_40535__$1;
(statearr_40557_40577[(2)] = null);

(statearr_40557_40577[(1)] = (2));


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
});})(c__26017__auto___40563,out))
;
return ((function (switch__25929__auto__,c__26017__auto___40563,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_40558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40558[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_40558[(1)] = (1));

return statearr_40558;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_40535){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40535);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e40559){if((e40559 instanceof Object)){
var ex__25933__auto__ = e40559;
var statearr_40560_40578 = state_40535;
(statearr_40560_40578[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40535);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40559;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40579 = state_40535;
state_40535 = G__40579;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_40535){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_40535);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___40563,out))
})();
var state__26019__auto__ = (function (){var statearr_40561 = f__26018__auto__.call(null);
(statearr_40561[(6)] = c__26017__auto___40563);

return statearr_40561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___40563,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__40581 = arguments.length;
switch (G__40581) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__26017__auto___40651 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___40651,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___40651,out){
return (function (state_40623){
var state_val_40624 = (state_40623[(1)]);
if((state_val_40624 === (7))){
var inst_40619 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
var statearr_40625_40652 = state_40623__$1;
(statearr_40625_40652[(2)] = inst_40619);

(statearr_40625_40652[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (1))){
var inst_40582 = [];
var inst_40583 = inst_40582;
var inst_40584 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_40623__$1 = (function (){var statearr_40626 = state_40623;
(statearr_40626[(7)] = inst_40583);

(statearr_40626[(8)] = inst_40584);

return statearr_40626;
})();
var statearr_40627_40653 = state_40623__$1;
(statearr_40627_40653[(2)] = null);

(statearr_40627_40653[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (4))){
var inst_40587 = (state_40623[(9)]);
var inst_40587__$1 = (state_40623[(2)]);
var inst_40588 = (inst_40587__$1 == null);
var inst_40589 = cljs.core.not.call(null,inst_40588);
var state_40623__$1 = (function (){var statearr_40628 = state_40623;
(statearr_40628[(9)] = inst_40587__$1);

return statearr_40628;
})();
if(inst_40589){
var statearr_40629_40654 = state_40623__$1;
(statearr_40629_40654[(1)] = (5));

} else {
var statearr_40630_40655 = state_40623__$1;
(statearr_40630_40655[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (15))){
var inst_40613 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
var statearr_40631_40656 = state_40623__$1;
(statearr_40631_40656[(2)] = inst_40613);

(statearr_40631_40656[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (13))){
var state_40623__$1 = state_40623;
var statearr_40632_40657 = state_40623__$1;
(statearr_40632_40657[(2)] = null);

(statearr_40632_40657[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (6))){
var inst_40583 = (state_40623[(7)]);
var inst_40608 = inst_40583.length;
var inst_40609 = (inst_40608 > (0));
var state_40623__$1 = state_40623;
if(cljs.core.truth_(inst_40609)){
var statearr_40633_40658 = state_40623__$1;
(statearr_40633_40658[(1)] = (12));

} else {
var statearr_40634_40659 = state_40623__$1;
(statearr_40634_40659[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (3))){
var inst_40621 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40623__$1,inst_40621);
} else {
if((state_val_40624 === (12))){
var inst_40583 = (state_40623[(7)]);
var inst_40611 = cljs.core.vec.call(null,inst_40583);
var state_40623__$1 = state_40623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40623__$1,(15),out,inst_40611);
} else {
if((state_val_40624 === (2))){
var state_40623__$1 = state_40623;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40623__$1,(4),ch);
} else {
if((state_val_40624 === (11))){
var inst_40591 = (state_40623[(10)]);
var inst_40587 = (state_40623[(9)]);
var inst_40601 = (state_40623[(2)]);
var inst_40602 = [];
var inst_40603 = inst_40602.push(inst_40587);
var inst_40583 = inst_40602;
var inst_40584 = inst_40591;
var state_40623__$1 = (function (){var statearr_40635 = state_40623;
(statearr_40635[(11)] = inst_40601);

(statearr_40635[(7)] = inst_40583);

(statearr_40635[(8)] = inst_40584);

(statearr_40635[(12)] = inst_40603);

return statearr_40635;
})();
var statearr_40636_40660 = state_40623__$1;
(statearr_40636_40660[(2)] = null);

(statearr_40636_40660[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (9))){
var inst_40583 = (state_40623[(7)]);
var inst_40599 = cljs.core.vec.call(null,inst_40583);
var state_40623__$1 = state_40623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_40623__$1,(11),out,inst_40599);
} else {
if((state_val_40624 === (5))){
var inst_40591 = (state_40623[(10)]);
var inst_40587 = (state_40623[(9)]);
var inst_40584 = (state_40623[(8)]);
var inst_40591__$1 = f.call(null,inst_40587);
var inst_40592 = cljs.core._EQ_.call(null,inst_40591__$1,inst_40584);
var inst_40593 = cljs.core.keyword_identical_QMARK_.call(null,inst_40584,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_40594 = ((inst_40592) || (inst_40593));
var state_40623__$1 = (function (){var statearr_40637 = state_40623;
(statearr_40637[(10)] = inst_40591__$1);

return statearr_40637;
})();
if(cljs.core.truth_(inst_40594)){
var statearr_40638_40661 = state_40623__$1;
(statearr_40638_40661[(1)] = (8));

} else {
var statearr_40639_40662 = state_40623__$1;
(statearr_40639_40662[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (14))){
var inst_40616 = (state_40623[(2)]);
var inst_40617 = cljs.core.async.close_BANG_.call(null,out);
var state_40623__$1 = (function (){var statearr_40641 = state_40623;
(statearr_40641[(13)] = inst_40616);

return statearr_40641;
})();
var statearr_40642_40663 = state_40623__$1;
(statearr_40642_40663[(2)] = inst_40617);

(statearr_40642_40663[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (10))){
var inst_40606 = (state_40623[(2)]);
var state_40623__$1 = state_40623;
var statearr_40643_40664 = state_40623__$1;
(statearr_40643_40664[(2)] = inst_40606);

(statearr_40643_40664[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40624 === (8))){
var inst_40591 = (state_40623[(10)]);
var inst_40587 = (state_40623[(9)]);
var inst_40583 = (state_40623[(7)]);
var inst_40596 = inst_40583.push(inst_40587);
var tmp40640 = inst_40583;
var inst_40583__$1 = tmp40640;
var inst_40584 = inst_40591;
var state_40623__$1 = (function (){var statearr_40644 = state_40623;
(statearr_40644[(7)] = inst_40583__$1);

(statearr_40644[(8)] = inst_40584);

(statearr_40644[(14)] = inst_40596);

return statearr_40644;
})();
var statearr_40645_40665 = state_40623__$1;
(statearr_40645_40665[(2)] = null);

(statearr_40645_40665[(1)] = (2));


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
});})(c__26017__auto___40651,out))
;
return ((function (switch__25929__auto__,c__26017__auto___40651,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_40646 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40646[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_40646[(1)] = (1));

return statearr_40646;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_40623){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_40623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e40647){if((e40647 instanceof Object)){
var ex__25933__auto__ = e40647;
var statearr_40648_40666 = state_40623;
(statearr_40648_40666[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40647;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40667 = state_40623;
state_40623 = G__40667;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_40623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_40623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___40651,out))
})();
var state__26019__auto__ = (function (){var statearr_40649 = f__26018__auto__.call(null);
(statearr_40649[(6)] = c__26017__auto___40651);

return statearr_40649;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___40651,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547392809945
