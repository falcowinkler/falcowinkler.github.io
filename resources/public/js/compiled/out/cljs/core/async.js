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
var G__26063 = arguments.length;
switch (G__26063) {
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
if(typeof cljs.core.async.t_cljs$core$async26064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26064 = (function (f,blockable,meta26065){
this.f = f;
this.blockable = blockable;
this.meta26065 = meta26065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26066,meta26065__$1){
var self__ = this;
var _26066__$1 = this;
return (new cljs.core.async.t_cljs$core$async26064(self__.f,self__.blockable,meta26065__$1));
});

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26066){
var self__ = this;
var _26066__$1 = this;
return self__.meta26065;
});

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async26064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26064.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta26065","meta26065",84775880,null)], null);
});

cljs.core.async.t_cljs$core$async26064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26064";

cljs.core.async.t_cljs$core$async26064.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26064");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26064.
 */
cljs.core.async.__GT_t_cljs$core$async26064 = (function cljs$core$async$__GT_t_cljs$core$async26064(f__$1,blockable__$1,meta26065){
return (new cljs.core.async.t_cljs$core$async26064(f__$1,blockable__$1,meta26065));
});

}

return (new cljs.core.async.t_cljs$core$async26064(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__26070 = arguments.length;
switch (G__26070) {
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
var G__26073 = arguments.length;
switch (G__26073) {
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
var G__26076 = arguments.length;
switch (G__26076) {
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
var val_26078 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26078);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26078,ret){
return (function (){
return fn1.call(null,val_26078);
});})(val_26078,ret))
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
var G__26080 = arguments.length;
switch (G__26080) {
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
var n__4376__auto___26082 = n;
var x_26083 = (0);
while(true){
if((x_26083 < n__4376__auto___26082)){
(a[x_26083] = (0));

var G__26084 = (x_26083 + (1));
x_26083 = G__26084;
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

var G__26085 = (i + (1));
i = G__26085;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26086 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26086 = (function (flag,meta26087){
this.flag = flag;
this.meta26087 = meta26087;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26088,meta26087__$1){
var self__ = this;
var _26088__$1 = this;
return (new cljs.core.async.t_cljs$core$async26086(self__.flag,meta26087__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26088){
var self__ = this;
var _26088__$1 = this;
return self__.meta26087;
});})(flag))
;

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26086.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26086.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26087","meta26087",-1948584637,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26086.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26086.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26086";

cljs.core.async.t_cljs$core$async26086.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26086");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26086.
 */
cljs.core.async.__GT_t_cljs$core$async26086 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26086(flag__$1,meta26087){
return (new cljs.core.async.t_cljs$core$async26086(flag__$1,meta26087));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26086(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26089 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26089 = (function (flag,cb,meta26090){
this.flag = flag;
this.cb = cb;
this.meta26090 = meta26090;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26091,meta26090__$1){
var self__ = this;
var _26091__$1 = this;
return (new cljs.core.async.t_cljs$core$async26089(self__.flag,self__.cb,meta26090__$1));
});

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26091){
var self__ = this;
var _26091__$1 = this;
return self__.meta26090;
});

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26089.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26089.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26090","meta26090",-932277233,null)], null);
});

cljs.core.async.t_cljs$core$async26089.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26089.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26089";

cljs.core.async.t_cljs$core$async26089.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26089");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26089.
 */
cljs.core.async.__GT_t_cljs$core$async26089 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26089(flag__$1,cb__$1,meta26090){
return (new cljs.core.async.t_cljs$core$async26089(flag__$1,cb__$1,meta26090));
});

}

return (new cljs.core.async.t_cljs$core$async26089(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26092_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26092_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26093_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26093_SHARP_,port], null));
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
var G__26094 = (i + (1));
i = G__26094;
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
var len__4499__auto___26100 = arguments.length;
var i__4500__auto___26101 = (0);
while(true){
if((i__4500__auto___26101 < len__4499__auto___26100)){
args__4502__auto__.push((arguments[i__4500__auto___26101]));

var G__26102 = (i__4500__auto___26101 + (1));
i__4500__auto___26101 = G__26102;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26097){
var map__26098 = p__26097;
var map__26098__$1 = ((((!((map__26098 == null)))?(((((map__26098.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26098.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26098):map__26098);
var opts = map__26098__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26095){
var G__26096 = cljs.core.first.call(null,seq26095);
var seq26095__$1 = cljs.core.next.call(null,seq26095);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26096,seq26095__$1);
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
var G__26104 = arguments.length;
switch (G__26104) {
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
var c__26017__auto___26150 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___26150){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___26150){
return (function (state_26128){
var state_val_26129 = (state_26128[(1)]);
if((state_val_26129 === (7))){
var inst_26124 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26130_26151 = state_26128__$1;
(statearr_26130_26151[(2)] = inst_26124);

(statearr_26130_26151[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (1))){
var state_26128__$1 = state_26128;
var statearr_26131_26152 = state_26128__$1;
(statearr_26131_26152[(2)] = null);

(statearr_26131_26152[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (4))){
var inst_26107 = (state_26128[(7)]);
var inst_26107__$1 = (state_26128[(2)]);
var inst_26108 = (inst_26107__$1 == null);
var state_26128__$1 = (function (){var statearr_26132 = state_26128;
(statearr_26132[(7)] = inst_26107__$1);

return statearr_26132;
})();
if(cljs.core.truth_(inst_26108)){
var statearr_26133_26153 = state_26128__$1;
(statearr_26133_26153[(1)] = (5));

} else {
var statearr_26134_26154 = state_26128__$1;
(statearr_26134_26154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (13))){
var state_26128__$1 = state_26128;
var statearr_26135_26155 = state_26128__$1;
(statearr_26135_26155[(2)] = null);

(statearr_26135_26155[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (6))){
var inst_26107 = (state_26128[(7)]);
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26128__$1,(11),to,inst_26107);
} else {
if((state_val_26129 === (3))){
var inst_26126 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26128__$1,inst_26126);
} else {
if((state_val_26129 === (12))){
var state_26128__$1 = state_26128;
var statearr_26136_26156 = state_26128__$1;
(statearr_26136_26156[(2)] = null);

(statearr_26136_26156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (2))){
var state_26128__$1 = state_26128;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26128__$1,(4),from);
} else {
if((state_val_26129 === (11))){
var inst_26117 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
if(cljs.core.truth_(inst_26117)){
var statearr_26137_26157 = state_26128__$1;
(statearr_26137_26157[(1)] = (12));

} else {
var statearr_26138_26158 = state_26128__$1;
(statearr_26138_26158[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (9))){
var state_26128__$1 = state_26128;
var statearr_26139_26159 = state_26128__$1;
(statearr_26139_26159[(2)] = null);

(statearr_26139_26159[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (5))){
var state_26128__$1 = state_26128;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26140_26160 = state_26128__$1;
(statearr_26140_26160[(1)] = (8));

} else {
var statearr_26141_26161 = state_26128__$1;
(statearr_26141_26161[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (14))){
var inst_26122 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26142_26162 = state_26128__$1;
(statearr_26142_26162[(2)] = inst_26122);

(statearr_26142_26162[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (10))){
var inst_26114 = (state_26128[(2)]);
var state_26128__$1 = state_26128;
var statearr_26143_26163 = state_26128__$1;
(statearr_26143_26163[(2)] = inst_26114);

(statearr_26143_26163[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26129 === (8))){
var inst_26111 = cljs.core.async.close_BANG_.call(null,to);
var state_26128__$1 = state_26128;
var statearr_26144_26164 = state_26128__$1;
(statearr_26144_26164[(2)] = inst_26111);

(statearr_26144_26164[(1)] = (10));


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
});})(c__26017__auto___26150))
;
return ((function (switch__25929__auto__,c__26017__auto___26150){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_26145 = [null,null,null,null,null,null,null,null];
(statearr_26145[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_26145[(1)] = (1));

return statearr_26145;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_26128){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26128);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26146){if((e26146 instanceof Object)){
var ex__25933__auto__ = e26146;
var statearr_26147_26165 = state_26128;
(statearr_26147_26165[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26128);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26146;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26166 = state_26128;
state_26128 = G__26166;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_26128){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_26128);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___26150))
})();
var state__26019__auto__ = (function (){var statearr_26148 = f__26018__auto__.call(null);
(statearr_26148[(6)] = c__26017__auto___26150);

return statearr_26148;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___26150))
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
var process = ((function (jobs,results){
return (function (p__26167){
var vec__26168 = p__26167;
var v = cljs.core.nth.call(null,vec__26168,(0),null);
var p = cljs.core.nth.call(null,vec__26168,(1),null);
var job = vec__26168;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__26017__auto___26339 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___26339,res,vec__26168,v,p,job,jobs,results){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___26339,res,vec__26168,v,p,job,jobs,results){
return (function (state_26175){
var state_val_26176 = (state_26175[(1)]);
if((state_val_26176 === (1))){
var state_26175__$1 = state_26175;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26175__$1,(2),res,v);
} else {
if((state_val_26176 === (2))){
var inst_26172 = (state_26175[(2)]);
var inst_26173 = cljs.core.async.close_BANG_.call(null,res);
var state_26175__$1 = (function (){var statearr_26177 = state_26175;
(statearr_26177[(7)] = inst_26172);

return statearr_26177;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26175__$1,inst_26173);
} else {
return null;
}
}
});})(c__26017__auto___26339,res,vec__26168,v,p,job,jobs,results))
;
return ((function (switch__25929__auto__,c__26017__auto___26339,res,vec__26168,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_26178 = [null,null,null,null,null,null,null,null];
(statearr_26178[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_26178[(1)] = (1));

return statearr_26178;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_26175){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26175);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26179){if((e26179 instanceof Object)){
var ex__25933__auto__ = e26179;
var statearr_26180_26340 = state_26175;
(statearr_26180_26340[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26179;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26341 = state_26175;
state_26175 = G__26341;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_26175){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_26175);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___26339,res,vec__26168,v,p,job,jobs,results))
})();
var state__26019__auto__ = (function (){var statearr_26181 = f__26018__auto__.call(null);
(statearr_26181[(6)] = c__26017__auto___26339);

return statearr_26181;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___26339,res,vec__26168,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26182){
var vec__26183 = p__26182;
var v = cljs.core.nth.call(null,vec__26183,(0),null);
var p = cljs.core.nth.call(null,vec__26183,(1),null);
var job = vec__26183;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___26342 = n;
var __26343 = (0);
while(true){
if((__26343 < n__4376__auto___26342)){
var G__26186_26344 = type;
var G__26186_26345__$1 = (((G__26186_26344 instanceof cljs.core.Keyword))?G__26186_26344.fqn:null);
switch (G__26186_26345__$1) {
case "compute":
var c__26017__auto___26347 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26343,c__26017__auto___26347,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (__26343,c__26017__auto___26347,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async){
return (function (state_26199){
var state_val_26200 = (state_26199[(1)]);
if((state_val_26200 === (1))){
var state_26199__$1 = state_26199;
var statearr_26201_26348 = state_26199__$1;
(statearr_26201_26348[(2)] = null);

(statearr_26201_26348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26200 === (2))){
var state_26199__$1 = state_26199;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26199__$1,(4),jobs);
} else {
if((state_val_26200 === (3))){
var inst_26197 = (state_26199[(2)]);
var state_26199__$1 = state_26199;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26199__$1,inst_26197);
} else {
if((state_val_26200 === (4))){
var inst_26189 = (state_26199[(2)]);
var inst_26190 = process.call(null,inst_26189);
var state_26199__$1 = state_26199;
if(cljs.core.truth_(inst_26190)){
var statearr_26202_26349 = state_26199__$1;
(statearr_26202_26349[(1)] = (5));

} else {
var statearr_26203_26350 = state_26199__$1;
(statearr_26203_26350[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26200 === (5))){
var state_26199__$1 = state_26199;
var statearr_26204_26351 = state_26199__$1;
(statearr_26204_26351[(2)] = null);

(statearr_26204_26351[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26200 === (6))){
var state_26199__$1 = state_26199;
var statearr_26205_26352 = state_26199__$1;
(statearr_26205_26352[(2)] = null);

(statearr_26205_26352[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26200 === (7))){
var inst_26195 = (state_26199[(2)]);
var state_26199__$1 = state_26199;
var statearr_26206_26353 = state_26199__$1;
(statearr_26206_26353[(2)] = inst_26195);

(statearr_26206_26353[(1)] = (3));


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
});})(__26343,c__26017__auto___26347,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async))
;
return ((function (__26343,switch__25929__auto__,c__26017__auto___26347,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_26207 = [null,null,null,null,null,null,null];
(statearr_26207[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_26207[(1)] = (1));

return statearr_26207;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_26199){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26199);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26208){if((e26208 instanceof Object)){
var ex__25933__auto__ = e26208;
var statearr_26209_26354 = state_26199;
(statearr_26209_26354[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26199);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26208;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26355 = state_26199;
state_26199 = G__26355;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_26199){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_26199);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(__26343,switch__25929__auto__,c__26017__auto___26347,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async))
})();
var state__26019__auto__ = (function (){var statearr_26210 = f__26018__auto__.call(null);
(statearr_26210[(6)] = c__26017__auto___26347);

return statearr_26210;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(__26343,c__26017__auto___26347,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async))
);


break;
case "async":
var c__26017__auto___26356 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26343,c__26017__auto___26356,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (__26343,c__26017__auto___26356,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async){
return (function (state_26223){
var state_val_26224 = (state_26223[(1)]);
if((state_val_26224 === (1))){
var state_26223__$1 = state_26223;
var statearr_26225_26357 = state_26223__$1;
(statearr_26225_26357[(2)] = null);

(statearr_26225_26357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (2))){
var state_26223__$1 = state_26223;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26223__$1,(4),jobs);
} else {
if((state_val_26224 === (3))){
var inst_26221 = (state_26223[(2)]);
var state_26223__$1 = state_26223;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26223__$1,inst_26221);
} else {
if((state_val_26224 === (4))){
var inst_26213 = (state_26223[(2)]);
var inst_26214 = async.call(null,inst_26213);
var state_26223__$1 = state_26223;
if(cljs.core.truth_(inst_26214)){
var statearr_26226_26358 = state_26223__$1;
(statearr_26226_26358[(1)] = (5));

} else {
var statearr_26227_26359 = state_26223__$1;
(statearr_26227_26359[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (5))){
var state_26223__$1 = state_26223;
var statearr_26228_26360 = state_26223__$1;
(statearr_26228_26360[(2)] = null);

(statearr_26228_26360[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (6))){
var state_26223__$1 = state_26223;
var statearr_26229_26361 = state_26223__$1;
(statearr_26229_26361[(2)] = null);

(statearr_26229_26361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26224 === (7))){
var inst_26219 = (state_26223[(2)]);
var state_26223__$1 = state_26223;
var statearr_26230_26362 = state_26223__$1;
(statearr_26230_26362[(2)] = inst_26219);

(statearr_26230_26362[(1)] = (3));


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
});})(__26343,c__26017__auto___26356,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async))
;
return ((function (__26343,switch__25929__auto__,c__26017__auto___26356,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_26231 = [null,null,null,null,null,null,null];
(statearr_26231[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_26231[(1)] = (1));

return statearr_26231;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_26223){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26223);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26232){if((e26232 instanceof Object)){
var ex__25933__auto__ = e26232;
var statearr_26233_26363 = state_26223;
(statearr_26233_26363[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26223);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26364 = state_26223;
state_26223 = G__26364;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_26223){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_26223);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(__26343,switch__25929__auto__,c__26017__auto___26356,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async))
})();
var state__26019__auto__ = (function (){var statearr_26234 = f__26018__auto__.call(null);
(statearr_26234[(6)] = c__26017__auto___26356);

return statearr_26234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(__26343,c__26017__auto___26356,G__26186_26344,G__26186_26345__$1,n__4376__auto___26342,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__26186_26345__$1)].join('')));

}

var G__26365 = (__26343 + (1));
__26343 = G__26365;
continue;
} else {
}
break;
}

var c__26017__auto___26366 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___26366,jobs,results,process,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___26366,jobs,results,process,async){
return (function (state_26256){
var state_val_26257 = (state_26256[(1)]);
if((state_val_26257 === (1))){
var state_26256__$1 = state_26256;
var statearr_26258_26367 = state_26256__$1;
(statearr_26258_26367[(2)] = null);

(statearr_26258_26367[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (2))){
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26256__$1,(4),from);
} else {
if((state_val_26257 === (3))){
var inst_26254 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26256__$1,inst_26254);
} else {
if((state_val_26257 === (4))){
var inst_26237 = (state_26256[(7)]);
var inst_26237__$1 = (state_26256[(2)]);
var inst_26238 = (inst_26237__$1 == null);
var state_26256__$1 = (function (){var statearr_26259 = state_26256;
(statearr_26259[(7)] = inst_26237__$1);

return statearr_26259;
})();
if(cljs.core.truth_(inst_26238)){
var statearr_26260_26368 = state_26256__$1;
(statearr_26260_26368[(1)] = (5));

} else {
var statearr_26261_26369 = state_26256__$1;
(statearr_26261_26369[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (5))){
var inst_26240 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26256__$1 = state_26256;
var statearr_26262_26370 = state_26256__$1;
(statearr_26262_26370[(2)] = inst_26240);

(statearr_26262_26370[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (6))){
var inst_26242 = (state_26256[(8)]);
var inst_26237 = (state_26256[(7)]);
var inst_26242__$1 = cljs.core.async.chan.call(null,(1));
var inst_26243 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26244 = [inst_26237,inst_26242__$1];
var inst_26245 = (new cljs.core.PersistentVector(null,2,(5),inst_26243,inst_26244,null));
var state_26256__$1 = (function (){var statearr_26263 = state_26256;
(statearr_26263[(8)] = inst_26242__$1);

return statearr_26263;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26256__$1,(8),jobs,inst_26245);
} else {
if((state_val_26257 === (7))){
var inst_26252 = (state_26256[(2)]);
var state_26256__$1 = state_26256;
var statearr_26264_26371 = state_26256__$1;
(statearr_26264_26371[(2)] = inst_26252);

(statearr_26264_26371[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26257 === (8))){
var inst_26242 = (state_26256[(8)]);
var inst_26247 = (state_26256[(2)]);
var state_26256__$1 = (function (){var statearr_26265 = state_26256;
(statearr_26265[(9)] = inst_26247);

return statearr_26265;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26256__$1,(9),results,inst_26242);
} else {
if((state_val_26257 === (9))){
var inst_26249 = (state_26256[(2)]);
var state_26256__$1 = (function (){var statearr_26266 = state_26256;
(statearr_26266[(10)] = inst_26249);

return statearr_26266;
})();
var statearr_26267_26372 = state_26256__$1;
(statearr_26267_26372[(2)] = null);

(statearr_26267_26372[(1)] = (2));


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
});})(c__26017__auto___26366,jobs,results,process,async))
;
return ((function (switch__25929__auto__,c__26017__auto___26366,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_26268 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26268[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_26268[(1)] = (1));

return statearr_26268;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_26256){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26256);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26269){if((e26269 instanceof Object)){
var ex__25933__auto__ = e26269;
var statearr_26270_26373 = state_26256;
(statearr_26270_26373[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26256);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26269;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26374 = state_26256;
state_26256 = G__26374;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_26256){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_26256);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___26366,jobs,results,process,async))
})();
var state__26019__auto__ = (function (){var statearr_26271 = f__26018__auto__.call(null);
(statearr_26271[(6)] = c__26017__auto___26366);

return statearr_26271;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___26366,jobs,results,process,async))
);


var c__26017__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto__,jobs,results,process,async){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto__,jobs,results,process,async){
return (function (state_26309){
var state_val_26310 = (state_26309[(1)]);
if((state_val_26310 === (7))){
var inst_26305 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26311_26375 = state_26309__$1;
(statearr_26311_26375[(2)] = inst_26305);

(statearr_26311_26375[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (20))){
var state_26309__$1 = state_26309;
var statearr_26312_26376 = state_26309__$1;
(statearr_26312_26376[(2)] = null);

(statearr_26312_26376[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (1))){
var state_26309__$1 = state_26309;
var statearr_26313_26377 = state_26309__$1;
(statearr_26313_26377[(2)] = null);

(statearr_26313_26377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (4))){
var inst_26274 = (state_26309[(7)]);
var inst_26274__$1 = (state_26309[(2)]);
var inst_26275 = (inst_26274__$1 == null);
var state_26309__$1 = (function (){var statearr_26314 = state_26309;
(statearr_26314[(7)] = inst_26274__$1);

return statearr_26314;
})();
if(cljs.core.truth_(inst_26275)){
var statearr_26315_26378 = state_26309__$1;
(statearr_26315_26378[(1)] = (5));

} else {
var statearr_26316_26379 = state_26309__$1;
(statearr_26316_26379[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (15))){
var inst_26287 = (state_26309[(8)]);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26309__$1,(18),to,inst_26287);
} else {
if((state_val_26310 === (21))){
var inst_26300 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26317_26380 = state_26309__$1;
(statearr_26317_26380[(2)] = inst_26300);

(statearr_26317_26380[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (13))){
var inst_26302 = (state_26309[(2)]);
var state_26309__$1 = (function (){var statearr_26318 = state_26309;
(statearr_26318[(9)] = inst_26302);

return statearr_26318;
})();
var statearr_26319_26381 = state_26309__$1;
(statearr_26319_26381[(2)] = null);

(statearr_26319_26381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (6))){
var inst_26274 = (state_26309[(7)]);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26309__$1,(11),inst_26274);
} else {
if((state_val_26310 === (17))){
var inst_26295 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
if(cljs.core.truth_(inst_26295)){
var statearr_26320_26382 = state_26309__$1;
(statearr_26320_26382[(1)] = (19));

} else {
var statearr_26321_26383 = state_26309__$1;
(statearr_26321_26383[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (3))){
var inst_26307 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26309__$1,inst_26307);
} else {
if((state_val_26310 === (12))){
var inst_26284 = (state_26309[(10)]);
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26309__$1,(14),inst_26284);
} else {
if((state_val_26310 === (2))){
var state_26309__$1 = state_26309;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26309__$1,(4),results);
} else {
if((state_val_26310 === (19))){
var state_26309__$1 = state_26309;
var statearr_26322_26384 = state_26309__$1;
(statearr_26322_26384[(2)] = null);

(statearr_26322_26384[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (11))){
var inst_26284 = (state_26309[(2)]);
var state_26309__$1 = (function (){var statearr_26323 = state_26309;
(statearr_26323[(10)] = inst_26284);

return statearr_26323;
})();
var statearr_26324_26385 = state_26309__$1;
(statearr_26324_26385[(2)] = null);

(statearr_26324_26385[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (9))){
var state_26309__$1 = state_26309;
var statearr_26325_26386 = state_26309__$1;
(statearr_26325_26386[(2)] = null);

(statearr_26325_26386[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (5))){
var state_26309__$1 = state_26309;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26326_26387 = state_26309__$1;
(statearr_26326_26387[(1)] = (8));

} else {
var statearr_26327_26388 = state_26309__$1;
(statearr_26327_26388[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (14))){
var inst_26287 = (state_26309[(8)]);
var inst_26289 = (state_26309[(11)]);
var inst_26287__$1 = (state_26309[(2)]);
var inst_26288 = (inst_26287__$1 == null);
var inst_26289__$1 = cljs.core.not.call(null,inst_26288);
var state_26309__$1 = (function (){var statearr_26328 = state_26309;
(statearr_26328[(8)] = inst_26287__$1);

(statearr_26328[(11)] = inst_26289__$1);

return statearr_26328;
})();
if(inst_26289__$1){
var statearr_26329_26389 = state_26309__$1;
(statearr_26329_26389[(1)] = (15));

} else {
var statearr_26330_26390 = state_26309__$1;
(statearr_26330_26390[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (16))){
var inst_26289 = (state_26309[(11)]);
var state_26309__$1 = state_26309;
var statearr_26331_26391 = state_26309__$1;
(statearr_26331_26391[(2)] = inst_26289);

(statearr_26331_26391[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (10))){
var inst_26281 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26332_26392 = state_26309__$1;
(statearr_26332_26392[(2)] = inst_26281);

(statearr_26332_26392[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (18))){
var inst_26292 = (state_26309[(2)]);
var state_26309__$1 = state_26309;
var statearr_26333_26393 = state_26309__$1;
(statearr_26333_26393[(2)] = inst_26292);

(statearr_26333_26393[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26310 === (8))){
var inst_26278 = cljs.core.async.close_BANG_.call(null,to);
var state_26309__$1 = state_26309;
var statearr_26334_26394 = state_26309__$1;
(statearr_26334_26394[(2)] = inst_26278);

(statearr_26334_26394[(1)] = (10));


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
});})(c__26017__auto__,jobs,results,process,async))
;
return ((function (switch__25929__auto__,c__26017__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0 = (function (){
var statearr_26335 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26335[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__);

(statearr_26335[(1)] = (1));

return statearr_26335;
});
var cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1 = (function (state_26309){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26336){if((e26336 instanceof Object)){
var ex__25933__auto__ = e26336;
var statearr_26337_26395 = state_26309;
(statearr_26337_26395[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26396 = state_26309;
state_26309 = G__26396;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__ = function(state_26309){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1.call(this,state_26309);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,jobs,results,process,async))
})();
var state__26019__auto__ = (function (){var statearr_26338 = f__26018__auto__.call(null);
(statearr_26338[(6)] = c__26017__auto__);

return statearr_26338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto__,jobs,results,process,async))
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
var G__26398 = arguments.length;
switch (G__26398) {
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
var G__26401 = arguments.length;
switch (G__26401) {
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
var G__26404 = arguments.length;
switch (G__26404) {
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
var c__26017__auto___26453 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___26453,tc,fc){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___26453,tc,fc){
return (function (state_26430){
var state_val_26431 = (state_26430[(1)]);
if((state_val_26431 === (7))){
var inst_26426 = (state_26430[(2)]);
var state_26430__$1 = state_26430;
var statearr_26432_26454 = state_26430__$1;
(statearr_26432_26454[(2)] = inst_26426);

(statearr_26432_26454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (1))){
var state_26430__$1 = state_26430;
var statearr_26433_26455 = state_26430__$1;
(statearr_26433_26455[(2)] = null);

(statearr_26433_26455[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (4))){
var inst_26407 = (state_26430[(7)]);
var inst_26407__$1 = (state_26430[(2)]);
var inst_26408 = (inst_26407__$1 == null);
var state_26430__$1 = (function (){var statearr_26434 = state_26430;
(statearr_26434[(7)] = inst_26407__$1);

return statearr_26434;
})();
if(cljs.core.truth_(inst_26408)){
var statearr_26435_26456 = state_26430__$1;
(statearr_26435_26456[(1)] = (5));

} else {
var statearr_26436_26457 = state_26430__$1;
(statearr_26436_26457[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (13))){
var state_26430__$1 = state_26430;
var statearr_26437_26458 = state_26430__$1;
(statearr_26437_26458[(2)] = null);

(statearr_26437_26458[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (6))){
var inst_26407 = (state_26430[(7)]);
var inst_26413 = p.call(null,inst_26407);
var state_26430__$1 = state_26430;
if(cljs.core.truth_(inst_26413)){
var statearr_26438_26459 = state_26430__$1;
(statearr_26438_26459[(1)] = (9));

} else {
var statearr_26439_26460 = state_26430__$1;
(statearr_26439_26460[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (3))){
var inst_26428 = (state_26430[(2)]);
var state_26430__$1 = state_26430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26430__$1,inst_26428);
} else {
if((state_val_26431 === (12))){
var state_26430__$1 = state_26430;
var statearr_26440_26461 = state_26430__$1;
(statearr_26440_26461[(2)] = null);

(statearr_26440_26461[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (2))){
var state_26430__$1 = state_26430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26430__$1,(4),ch);
} else {
if((state_val_26431 === (11))){
var inst_26407 = (state_26430[(7)]);
var inst_26417 = (state_26430[(2)]);
var state_26430__$1 = state_26430;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26430__$1,(8),inst_26417,inst_26407);
} else {
if((state_val_26431 === (9))){
var state_26430__$1 = state_26430;
var statearr_26441_26462 = state_26430__$1;
(statearr_26441_26462[(2)] = tc);

(statearr_26441_26462[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (5))){
var inst_26410 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26411 = cljs.core.async.close_BANG_.call(null,fc);
var state_26430__$1 = (function (){var statearr_26442 = state_26430;
(statearr_26442[(8)] = inst_26410);

return statearr_26442;
})();
var statearr_26443_26463 = state_26430__$1;
(statearr_26443_26463[(2)] = inst_26411);

(statearr_26443_26463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (14))){
var inst_26424 = (state_26430[(2)]);
var state_26430__$1 = state_26430;
var statearr_26444_26464 = state_26430__$1;
(statearr_26444_26464[(2)] = inst_26424);

(statearr_26444_26464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (10))){
var state_26430__$1 = state_26430;
var statearr_26445_26465 = state_26430__$1;
(statearr_26445_26465[(2)] = fc);

(statearr_26445_26465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26431 === (8))){
var inst_26419 = (state_26430[(2)]);
var state_26430__$1 = state_26430;
if(cljs.core.truth_(inst_26419)){
var statearr_26446_26466 = state_26430__$1;
(statearr_26446_26466[(1)] = (12));

} else {
var statearr_26447_26467 = state_26430__$1;
(statearr_26447_26467[(1)] = (13));

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
});})(c__26017__auto___26453,tc,fc))
;
return ((function (switch__25929__auto__,c__26017__auto___26453,tc,fc){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_26448 = [null,null,null,null,null,null,null,null,null];
(statearr_26448[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_26448[(1)] = (1));

return statearr_26448;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_26430){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26449){if((e26449 instanceof Object)){
var ex__25933__auto__ = e26449;
var statearr_26450_26468 = state_26430;
(statearr_26450_26468[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26449;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26469 = state_26430;
state_26430 = G__26469;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_26430){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_26430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___26453,tc,fc))
})();
var state__26019__auto__ = (function (){var statearr_26451 = f__26018__auto__.call(null);
(statearr_26451[(6)] = c__26017__auto___26453);

return statearr_26451;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___26453,tc,fc))
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
return (function (state_26490){
var state_val_26491 = (state_26490[(1)]);
if((state_val_26491 === (7))){
var inst_26486 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
var statearr_26492_26510 = state_26490__$1;
(statearr_26492_26510[(2)] = inst_26486);

(statearr_26492_26510[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (1))){
var inst_26470 = init;
var state_26490__$1 = (function (){var statearr_26493 = state_26490;
(statearr_26493[(7)] = inst_26470);

return statearr_26493;
})();
var statearr_26494_26511 = state_26490__$1;
(statearr_26494_26511[(2)] = null);

(statearr_26494_26511[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (4))){
var inst_26473 = (state_26490[(8)]);
var inst_26473__$1 = (state_26490[(2)]);
var inst_26474 = (inst_26473__$1 == null);
var state_26490__$1 = (function (){var statearr_26495 = state_26490;
(statearr_26495[(8)] = inst_26473__$1);

return statearr_26495;
})();
if(cljs.core.truth_(inst_26474)){
var statearr_26496_26512 = state_26490__$1;
(statearr_26496_26512[(1)] = (5));

} else {
var statearr_26497_26513 = state_26490__$1;
(statearr_26497_26513[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (6))){
var inst_26477 = (state_26490[(9)]);
var inst_26473 = (state_26490[(8)]);
var inst_26470 = (state_26490[(7)]);
var inst_26477__$1 = f.call(null,inst_26470,inst_26473);
var inst_26478 = cljs.core.reduced_QMARK_.call(null,inst_26477__$1);
var state_26490__$1 = (function (){var statearr_26498 = state_26490;
(statearr_26498[(9)] = inst_26477__$1);

return statearr_26498;
})();
if(inst_26478){
var statearr_26499_26514 = state_26490__$1;
(statearr_26499_26514[(1)] = (8));

} else {
var statearr_26500_26515 = state_26490__$1;
(statearr_26500_26515[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (3))){
var inst_26488 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26490__$1,inst_26488);
} else {
if((state_val_26491 === (2))){
var state_26490__$1 = state_26490;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26490__$1,(4),ch);
} else {
if((state_val_26491 === (9))){
var inst_26477 = (state_26490[(9)]);
var inst_26470 = inst_26477;
var state_26490__$1 = (function (){var statearr_26501 = state_26490;
(statearr_26501[(7)] = inst_26470);

return statearr_26501;
})();
var statearr_26502_26516 = state_26490__$1;
(statearr_26502_26516[(2)] = null);

(statearr_26502_26516[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (5))){
var inst_26470 = (state_26490[(7)]);
var state_26490__$1 = state_26490;
var statearr_26503_26517 = state_26490__$1;
(statearr_26503_26517[(2)] = inst_26470);

(statearr_26503_26517[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (10))){
var inst_26484 = (state_26490[(2)]);
var state_26490__$1 = state_26490;
var statearr_26504_26518 = state_26490__$1;
(statearr_26504_26518[(2)] = inst_26484);

(statearr_26504_26518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26491 === (8))){
var inst_26477 = (state_26490[(9)]);
var inst_26480 = cljs.core.deref.call(null,inst_26477);
var state_26490__$1 = state_26490;
var statearr_26505_26519 = state_26490__$1;
(statearr_26505_26519[(2)] = inst_26480);

(statearr_26505_26519[(1)] = (10));


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
var statearr_26506 = [null,null,null,null,null,null,null,null,null,null];
(statearr_26506[(0)] = cljs$core$async$reduce_$_state_machine__25930__auto__);

(statearr_26506[(1)] = (1));

return statearr_26506;
});
var cljs$core$async$reduce_$_state_machine__25930__auto____1 = (function (state_26490){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26490);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26507){if((e26507 instanceof Object)){
var ex__25933__auto__ = e26507;
var statearr_26508_26520 = state_26490;
(statearr_26508_26520[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26507;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26521 = state_26490;
state_26490 = G__26521;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__25930__auto__ = function(state_26490){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__25930__auto____1.call(this,state_26490);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__25930__auto____0;
cljs$core$async$reduce_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__25930__auto____1;
return cljs$core$async$reduce_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_26509 = f__26018__auto__.call(null);
(statearr_26509[(6)] = c__26017__auto__);

return statearr_26509;
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
return (function (state_26527){
var state_val_26528 = (state_26527[(1)]);
if((state_val_26528 === (1))){
var inst_26522 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26527__$1,(2),inst_26522);
} else {
if((state_val_26528 === (2))){
var inst_26524 = (state_26527[(2)]);
var inst_26525 = f__$1.call(null,inst_26524);
var state_26527__$1 = state_26527;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26527__$1,inst_26525);
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
var statearr_26529 = [null,null,null,null,null,null,null];
(statearr_26529[(0)] = cljs$core$async$transduce_$_state_machine__25930__auto__);

(statearr_26529[(1)] = (1));

return statearr_26529;
});
var cljs$core$async$transduce_$_state_machine__25930__auto____1 = (function (state_26527){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26527);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26530){if((e26530 instanceof Object)){
var ex__25933__auto__ = e26530;
var statearr_26531_26533 = state_26527;
(statearr_26531_26533[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26527);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26530;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26534 = state_26527;
state_26527 = G__26534;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__25930__auto__ = function(state_26527){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__25930__auto____1.call(this,state_26527);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__25930__auto____0;
cljs$core$async$transduce_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__25930__auto____1;
return cljs$core$async$transduce_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__,f__$1))
})();
var state__26019__auto__ = (function (){var statearr_26532 = f__26018__auto__.call(null);
(statearr_26532[(6)] = c__26017__auto__);

return statearr_26532;
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
var G__26536 = arguments.length;
switch (G__26536) {
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
return (function (state_26561){
var state_val_26562 = (state_26561[(1)]);
if((state_val_26562 === (7))){
var inst_26543 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26563_26584 = state_26561__$1;
(statearr_26563_26584[(2)] = inst_26543);

(statearr_26563_26584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (1))){
var inst_26537 = cljs.core.seq.call(null,coll);
var inst_26538 = inst_26537;
var state_26561__$1 = (function (){var statearr_26564 = state_26561;
(statearr_26564[(7)] = inst_26538);

return statearr_26564;
})();
var statearr_26565_26585 = state_26561__$1;
(statearr_26565_26585[(2)] = null);

(statearr_26565_26585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (4))){
var inst_26538 = (state_26561[(7)]);
var inst_26541 = cljs.core.first.call(null,inst_26538);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26561__$1,(7),ch,inst_26541);
} else {
if((state_val_26562 === (13))){
var inst_26555 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26566_26586 = state_26561__$1;
(statearr_26566_26586[(2)] = inst_26555);

(statearr_26566_26586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (6))){
var inst_26546 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26546)){
var statearr_26567_26587 = state_26561__$1;
(statearr_26567_26587[(1)] = (8));

} else {
var statearr_26568_26588 = state_26561__$1;
(statearr_26568_26588[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (3))){
var inst_26559 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26561__$1,inst_26559);
} else {
if((state_val_26562 === (12))){
var state_26561__$1 = state_26561;
var statearr_26569_26589 = state_26561__$1;
(statearr_26569_26589[(2)] = null);

(statearr_26569_26589[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (2))){
var inst_26538 = (state_26561[(7)]);
var state_26561__$1 = state_26561;
if(cljs.core.truth_(inst_26538)){
var statearr_26570_26590 = state_26561__$1;
(statearr_26570_26590[(1)] = (4));

} else {
var statearr_26571_26591 = state_26561__$1;
(statearr_26571_26591[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (11))){
var inst_26552 = cljs.core.async.close_BANG_.call(null,ch);
var state_26561__$1 = state_26561;
var statearr_26572_26592 = state_26561__$1;
(statearr_26572_26592[(2)] = inst_26552);

(statearr_26572_26592[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (9))){
var state_26561__$1 = state_26561;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26573_26593 = state_26561__$1;
(statearr_26573_26593[(1)] = (11));

} else {
var statearr_26574_26594 = state_26561__$1;
(statearr_26574_26594[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (5))){
var inst_26538 = (state_26561[(7)]);
var state_26561__$1 = state_26561;
var statearr_26575_26595 = state_26561__$1;
(statearr_26575_26595[(2)] = inst_26538);

(statearr_26575_26595[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (10))){
var inst_26557 = (state_26561[(2)]);
var state_26561__$1 = state_26561;
var statearr_26576_26596 = state_26561__$1;
(statearr_26576_26596[(2)] = inst_26557);

(statearr_26576_26596[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26562 === (8))){
var inst_26538 = (state_26561[(7)]);
var inst_26548 = cljs.core.next.call(null,inst_26538);
var inst_26538__$1 = inst_26548;
var state_26561__$1 = (function (){var statearr_26577 = state_26561;
(statearr_26577[(7)] = inst_26538__$1);

return statearr_26577;
})();
var statearr_26578_26597 = state_26561__$1;
(statearr_26578_26597[(2)] = null);

(statearr_26578_26597[(1)] = (2));


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
var statearr_26579 = [null,null,null,null,null,null,null,null];
(statearr_26579[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_26579[(1)] = (1));

return statearr_26579;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_26561){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26561);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26580){if((e26580 instanceof Object)){
var ex__25933__auto__ = e26580;
var statearr_26581_26598 = state_26561;
(statearr_26581_26598[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26561);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26580;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26599 = state_26561;
state_26561 = G__26599;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_26561){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_26561);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_26582 = f__26018__auto__.call(null);
(statearr_26582[(6)] = c__26017__auto__);

return statearr_26582;
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
if(typeof cljs.core.async.t_cljs$core$async26600 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26600 = (function (ch,cs,meta26601){
this.ch = ch;
this.cs = cs;
this.meta26601 = meta26601;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_26602,meta26601__$1){
var self__ = this;
var _26602__$1 = this;
return (new cljs.core.async.t_cljs$core$async26600(self__.ch,self__.cs,meta26601__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_26602){
var self__ = this;
var _26602__$1 = this;
return self__.meta26601;
});})(cs))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26600.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async26600.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta26601","meta26601",173062226,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async26600.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26600.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26600";

cljs.core.async.t_cljs$core$async26600.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26600");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26600.
 */
cljs.core.async.__GT_t_cljs$core$async26600 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async26600(ch__$1,cs__$1,meta26601){
return (new cljs.core.async.t_cljs$core$async26600(ch__$1,cs__$1,meta26601));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async26600(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__26017__auto___26822 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___26822,cs,m,dchan,dctr,done){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___26822,cs,m,dchan,dctr,done){
return (function (state_26737){
var state_val_26738 = (state_26737[(1)]);
if((state_val_26738 === (7))){
var inst_26733 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26739_26823 = state_26737__$1;
(statearr_26739_26823[(2)] = inst_26733);

(statearr_26739_26823[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (20))){
var inst_26636 = (state_26737[(7)]);
var inst_26648 = cljs.core.first.call(null,inst_26636);
var inst_26649 = cljs.core.nth.call(null,inst_26648,(0),null);
var inst_26650 = cljs.core.nth.call(null,inst_26648,(1),null);
var state_26737__$1 = (function (){var statearr_26740 = state_26737;
(statearr_26740[(8)] = inst_26649);

return statearr_26740;
})();
if(cljs.core.truth_(inst_26650)){
var statearr_26741_26824 = state_26737__$1;
(statearr_26741_26824[(1)] = (22));

} else {
var statearr_26742_26825 = state_26737__$1;
(statearr_26742_26825[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (27))){
var inst_26678 = (state_26737[(9)]);
var inst_26605 = (state_26737[(10)]);
var inst_26685 = (state_26737[(11)]);
var inst_26680 = (state_26737[(12)]);
var inst_26685__$1 = cljs.core._nth.call(null,inst_26678,inst_26680);
var inst_26686 = cljs.core.async.put_BANG_.call(null,inst_26685__$1,inst_26605,done);
var state_26737__$1 = (function (){var statearr_26743 = state_26737;
(statearr_26743[(11)] = inst_26685__$1);

return statearr_26743;
})();
if(cljs.core.truth_(inst_26686)){
var statearr_26744_26826 = state_26737__$1;
(statearr_26744_26826[(1)] = (30));

} else {
var statearr_26745_26827 = state_26737__$1;
(statearr_26745_26827[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (1))){
var state_26737__$1 = state_26737;
var statearr_26746_26828 = state_26737__$1;
(statearr_26746_26828[(2)] = null);

(statearr_26746_26828[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (24))){
var inst_26636 = (state_26737[(7)]);
var inst_26655 = (state_26737[(2)]);
var inst_26656 = cljs.core.next.call(null,inst_26636);
var inst_26614 = inst_26656;
var inst_26615 = null;
var inst_26616 = (0);
var inst_26617 = (0);
var state_26737__$1 = (function (){var statearr_26747 = state_26737;
(statearr_26747[(13)] = inst_26614);

(statearr_26747[(14)] = inst_26655);

(statearr_26747[(15)] = inst_26616);

(statearr_26747[(16)] = inst_26615);

(statearr_26747[(17)] = inst_26617);

return statearr_26747;
})();
var statearr_26748_26829 = state_26737__$1;
(statearr_26748_26829[(2)] = null);

(statearr_26748_26829[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (39))){
var state_26737__$1 = state_26737;
var statearr_26752_26830 = state_26737__$1;
(statearr_26752_26830[(2)] = null);

(statearr_26752_26830[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (4))){
var inst_26605 = (state_26737[(10)]);
var inst_26605__$1 = (state_26737[(2)]);
var inst_26606 = (inst_26605__$1 == null);
var state_26737__$1 = (function (){var statearr_26753 = state_26737;
(statearr_26753[(10)] = inst_26605__$1);

return statearr_26753;
})();
if(cljs.core.truth_(inst_26606)){
var statearr_26754_26831 = state_26737__$1;
(statearr_26754_26831[(1)] = (5));

} else {
var statearr_26755_26832 = state_26737__$1;
(statearr_26755_26832[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (15))){
var inst_26614 = (state_26737[(13)]);
var inst_26616 = (state_26737[(15)]);
var inst_26615 = (state_26737[(16)]);
var inst_26617 = (state_26737[(17)]);
var inst_26632 = (state_26737[(2)]);
var inst_26633 = (inst_26617 + (1));
var tmp26749 = inst_26614;
var tmp26750 = inst_26616;
var tmp26751 = inst_26615;
var inst_26614__$1 = tmp26749;
var inst_26615__$1 = tmp26751;
var inst_26616__$1 = tmp26750;
var inst_26617__$1 = inst_26633;
var state_26737__$1 = (function (){var statearr_26756 = state_26737;
(statearr_26756[(13)] = inst_26614__$1);

(statearr_26756[(18)] = inst_26632);

(statearr_26756[(15)] = inst_26616__$1);

(statearr_26756[(16)] = inst_26615__$1);

(statearr_26756[(17)] = inst_26617__$1);

return statearr_26756;
})();
var statearr_26757_26833 = state_26737__$1;
(statearr_26757_26833[(2)] = null);

(statearr_26757_26833[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (21))){
var inst_26659 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26761_26834 = state_26737__$1;
(statearr_26761_26834[(2)] = inst_26659);

(statearr_26761_26834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (31))){
var inst_26685 = (state_26737[(11)]);
var inst_26689 = done.call(null,null);
var inst_26690 = cljs.core.async.untap_STAR_.call(null,m,inst_26685);
var state_26737__$1 = (function (){var statearr_26762 = state_26737;
(statearr_26762[(19)] = inst_26689);

return statearr_26762;
})();
var statearr_26763_26835 = state_26737__$1;
(statearr_26763_26835[(2)] = inst_26690);

(statearr_26763_26835[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (32))){
var inst_26678 = (state_26737[(9)]);
var inst_26677 = (state_26737[(20)]);
var inst_26680 = (state_26737[(12)]);
var inst_26679 = (state_26737[(21)]);
var inst_26692 = (state_26737[(2)]);
var inst_26693 = (inst_26680 + (1));
var tmp26758 = inst_26678;
var tmp26759 = inst_26677;
var tmp26760 = inst_26679;
var inst_26677__$1 = tmp26759;
var inst_26678__$1 = tmp26758;
var inst_26679__$1 = tmp26760;
var inst_26680__$1 = inst_26693;
var state_26737__$1 = (function (){var statearr_26764 = state_26737;
(statearr_26764[(22)] = inst_26692);

(statearr_26764[(9)] = inst_26678__$1);

(statearr_26764[(20)] = inst_26677__$1);

(statearr_26764[(12)] = inst_26680__$1);

(statearr_26764[(21)] = inst_26679__$1);

return statearr_26764;
})();
var statearr_26765_26836 = state_26737__$1;
(statearr_26765_26836[(2)] = null);

(statearr_26765_26836[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (40))){
var inst_26705 = (state_26737[(23)]);
var inst_26709 = done.call(null,null);
var inst_26710 = cljs.core.async.untap_STAR_.call(null,m,inst_26705);
var state_26737__$1 = (function (){var statearr_26766 = state_26737;
(statearr_26766[(24)] = inst_26709);

return statearr_26766;
})();
var statearr_26767_26837 = state_26737__$1;
(statearr_26767_26837[(2)] = inst_26710);

(statearr_26767_26837[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (33))){
var inst_26696 = (state_26737[(25)]);
var inst_26698 = cljs.core.chunked_seq_QMARK_.call(null,inst_26696);
var state_26737__$1 = state_26737;
if(inst_26698){
var statearr_26768_26838 = state_26737__$1;
(statearr_26768_26838[(1)] = (36));

} else {
var statearr_26769_26839 = state_26737__$1;
(statearr_26769_26839[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (13))){
var inst_26626 = (state_26737[(26)]);
var inst_26629 = cljs.core.async.close_BANG_.call(null,inst_26626);
var state_26737__$1 = state_26737;
var statearr_26770_26840 = state_26737__$1;
(statearr_26770_26840[(2)] = inst_26629);

(statearr_26770_26840[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (22))){
var inst_26649 = (state_26737[(8)]);
var inst_26652 = cljs.core.async.close_BANG_.call(null,inst_26649);
var state_26737__$1 = state_26737;
var statearr_26771_26841 = state_26737__$1;
(statearr_26771_26841[(2)] = inst_26652);

(statearr_26771_26841[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (36))){
var inst_26696 = (state_26737[(25)]);
var inst_26700 = cljs.core.chunk_first.call(null,inst_26696);
var inst_26701 = cljs.core.chunk_rest.call(null,inst_26696);
var inst_26702 = cljs.core.count.call(null,inst_26700);
var inst_26677 = inst_26701;
var inst_26678 = inst_26700;
var inst_26679 = inst_26702;
var inst_26680 = (0);
var state_26737__$1 = (function (){var statearr_26772 = state_26737;
(statearr_26772[(9)] = inst_26678);

(statearr_26772[(20)] = inst_26677);

(statearr_26772[(12)] = inst_26680);

(statearr_26772[(21)] = inst_26679);

return statearr_26772;
})();
var statearr_26773_26842 = state_26737__$1;
(statearr_26773_26842[(2)] = null);

(statearr_26773_26842[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (41))){
var inst_26696 = (state_26737[(25)]);
var inst_26712 = (state_26737[(2)]);
var inst_26713 = cljs.core.next.call(null,inst_26696);
var inst_26677 = inst_26713;
var inst_26678 = null;
var inst_26679 = (0);
var inst_26680 = (0);
var state_26737__$1 = (function (){var statearr_26774 = state_26737;
(statearr_26774[(27)] = inst_26712);

(statearr_26774[(9)] = inst_26678);

(statearr_26774[(20)] = inst_26677);

(statearr_26774[(12)] = inst_26680);

(statearr_26774[(21)] = inst_26679);

return statearr_26774;
})();
var statearr_26775_26843 = state_26737__$1;
(statearr_26775_26843[(2)] = null);

(statearr_26775_26843[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (43))){
var state_26737__$1 = state_26737;
var statearr_26776_26844 = state_26737__$1;
(statearr_26776_26844[(2)] = null);

(statearr_26776_26844[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (29))){
var inst_26721 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26777_26845 = state_26737__$1;
(statearr_26777_26845[(2)] = inst_26721);

(statearr_26777_26845[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (44))){
var inst_26730 = (state_26737[(2)]);
var state_26737__$1 = (function (){var statearr_26778 = state_26737;
(statearr_26778[(28)] = inst_26730);

return statearr_26778;
})();
var statearr_26779_26846 = state_26737__$1;
(statearr_26779_26846[(2)] = null);

(statearr_26779_26846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (6))){
var inst_26669 = (state_26737[(29)]);
var inst_26668 = cljs.core.deref.call(null,cs);
var inst_26669__$1 = cljs.core.keys.call(null,inst_26668);
var inst_26670 = cljs.core.count.call(null,inst_26669__$1);
var inst_26671 = cljs.core.reset_BANG_.call(null,dctr,inst_26670);
var inst_26676 = cljs.core.seq.call(null,inst_26669__$1);
var inst_26677 = inst_26676;
var inst_26678 = null;
var inst_26679 = (0);
var inst_26680 = (0);
var state_26737__$1 = (function (){var statearr_26780 = state_26737;
(statearr_26780[(9)] = inst_26678);

(statearr_26780[(30)] = inst_26671);

(statearr_26780[(20)] = inst_26677);

(statearr_26780[(12)] = inst_26680);

(statearr_26780[(29)] = inst_26669__$1);

(statearr_26780[(21)] = inst_26679);

return statearr_26780;
})();
var statearr_26781_26847 = state_26737__$1;
(statearr_26781_26847[(2)] = null);

(statearr_26781_26847[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (28))){
var inst_26677 = (state_26737[(20)]);
var inst_26696 = (state_26737[(25)]);
var inst_26696__$1 = cljs.core.seq.call(null,inst_26677);
var state_26737__$1 = (function (){var statearr_26782 = state_26737;
(statearr_26782[(25)] = inst_26696__$1);

return statearr_26782;
})();
if(inst_26696__$1){
var statearr_26783_26848 = state_26737__$1;
(statearr_26783_26848[(1)] = (33));

} else {
var statearr_26784_26849 = state_26737__$1;
(statearr_26784_26849[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (25))){
var inst_26680 = (state_26737[(12)]);
var inst_26679 = (state_26737[(21)]);
var inst_26682 = (inst_26680 < inst_26679);
var inst_26683 = inst_26682;
var state_26737__$1 = state_26737;
if(cljs.core.truth_(inst_26683)){
var statearr_26785_26850 = state_26737__$1;
(statearr_26785_26850[(1)] = (27));

} else {
var statearr_26786_26851 = state_26737__$1;
(statearr_26786_26851[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (34))){
var state_26737__$1 = state_26737;
var statearr_26787_26852 = state_26737__$1;
(statearr_26787_26852[(2)] = null);

(statearr_26787_26852[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (17))){
var state_26737__$1 = state_26737;
var statearr_26788_26853 = state_26737__$1;
(statearr_26788_26853[(2)] = null);

(statearr_26788_26853[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (3))){
var inst_26735 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26737__$1,inst_26735);
} else {
if((state_val_26738 === (12))){
var inst_26664 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26789_26854 = state_26737__$1;
(statearr_26789_26854[(2)] = inst_26664);

(statearr_26789_26854[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (2))){
var state_26737__$1 = state_26737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26737__$1,(4),ch);
} else {
if((state_val_26738 === (23))){
var state_26737__$1 = state_26737;
var statearr_26790_26855 = state_26737__$1;
(statearr_26790_26855[(2)] = null);

(statearr_26790_26855[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (35))){
var inst_26719 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26791_26856 = state_26737__$1;
(statearr_26791_26856[(2)] = inst_26719);

(statearr_26791_26856[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (19))){
var inst_26636 = (state_26737[(7)]);
var inst_26640 = cljs.core.chunk_first.call(null,inst_26636);
var inst_26641 = cljs.core.chunk_rest.call(null,inst_26636);
var inst_26642 = cljs.core.count.call(null,inst_26640);
var inst_26614 = inst_26641;
var inst_26615 = inst_26640;
var inst_26616 = inst_26642;
var inst_26617 = (0);
var state_26737__$1 = (function (){var statearr_26792 = state_26737;
(statearr_26792[(13)] = inst_26614);

(statearr_26792[(15)] = inst_26616);

(statearr_26792[(16)] = inst_26615);

(statearr_26792[(17)] = inst_26617);

return statearr_26792;
})();
var statearr_26793_26857 = state_26737__$1;
(statearr_26793_26857[(2)] = null);

(statearr_26793_26857[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (11))){
var inst_26614 = (state_26737[(13)]);
var inst_26636 = (state_26737[(7)]);
var inst_26636__$1 = cljs.core.seq.call(null,inst_26614);
var state_26737__$1 = (function (){var statearr_26794 = state_26737;
(statearr_26794[(7)] = inst_26636__$1);

return statearr_26794;
})();
if(inst_26636__$1){
var statearr_26795_26858 = state_26737__$1;
(statearr_26795_26858[(1)] = (16));

} else {
var statearr_26796_26859 = state_26737__$1;
(statearr_26796_26859[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (9))){
var inst_26666 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26797_26860 = state_26737__$1;
(statearr_26797_26860[(2)] = inst_26666);

(statearr_26797_26860[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (5))){
var inst_26612 = cljs.core.deref.call(null,cs);
var inst_26613 = cljs.core.seq.call(null,inst_26612);
var inst_26614 = inst_26613;
var inst_26615 = null;
var inst_26616 = (0);
var inst_26617 = (0);
var state_26737__$1 = (function (){var statearr_26798 = state_26737;
(statearr_26798[(13)] = inst_26614);

(statearr_26798[(15)] = inst_26616);

(statearr_26798[(16)] = inst_26615);

(statearr_26798[(17)] = inst_26617);

return statearr_26798;
})();
var statearr_26799_26861 = state_26737__$1;
(statearr_26799_26861[(2)] = null);

(statearr_26799_26861[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (14))){
var state_26737__$1 = state_26737;
var statearr_26800_26862 = state_26737__$1;
(statearr_26800_26862[(2)] = null);

(statearr_26800_26862[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (45))){
var inst_26727 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26801_26863 = state_26737__$1;
(statearr_26801_26863[(2)] = inst_26727);

(statearr_26801_26863[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (26))){
var inst_26669 = (state_26737[(29)]);
var inst_26723 = (state_26737[(2)]);
var inst_26724 = cljs.core.seq.call(null,inst_26669);
var state_26737__$1 = (function (){var statearr_26802 = state_26737;
(statearr_26802[(31)] = inst_26723);

return statearr_26802;
})();
if(inst_26724){
var statearr_26803_26864 = state_26737__$1;
(statearr_26803_26864[(1)] = (42));

} else {
var statearr_26804_26865 = state_26737__$1;
(statearr_26804_26865[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (16))){
var inst_26636 = (state_26737[(7)]);
var inst_26638 = cljs.core.chunked_seq_QMARK_.call(null,inst_26636);
var state_26737__$1 = state_26737;
if(inst_26638){
var statearr_26805_26866 = state_26737__$1;
(statearr_26805_26866[(1)] = (19));

} else {
var statearr_26806_26867 = state_26737__$1;
(statearr_26806_26867[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (38))){
var inst_26716 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26807_26868 = state_26737__$1;
(statearr_26807_26868[(2)] = inst_26716);

(statearr_26807_26868[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (30))){
var state_26737__$1 = state_26737;
var statearr_26808_26869 = state_26737__$1;
(statearr_26808_26869[(2)] = null);

(statearr_26808_26869[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (10))){
var inst_26615 = (state_26737[(16)]);
var inst_26617 = (state_26737[(17)]);
var inst_26625 = cljs.core._nth.call(null,inst_26615,inst_26617);
var inst_26626 = cljs.core.nth.call(null,inst_26625,(0),null);
var inst_26627 = cljs.core.nth.call(null,inst_26625,(1),null);
var state_26737__$1 = (function (){var statearr_26809 = state_26737;
(statearr_26809[(26)] = inst_26626);

return statearr_26809;
})();
if(cljs.core.truth_(inst_26627)){
var statearr_26810_26870 = state_26737__$1;
(statearr_26810_26870[(1)] = (13));

} else {
var statearr_26811_26871 = state_26737__$1;
(statearr_26811_26871[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (18))){
var inst_26662 = (state_26737[(2)]);
var state_26737__$1 = state_26737;
var statearr_26812_26872 = state_26737__$1;
(statearr_26812_26872[(2)] = inst_26662);

(statearr_26812_26872[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (42))){
var state_26737__$1 = state_26737;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26737__$1,(45),dchan);
} else {
if((state_val_26738 === (37))){
var inst_26605 = (state_26737[(10)]);
var inst_26696 = (state_26737[(25)]);
var inst_26705 = (state_26737[(23)]);
var inst_26705__$1 = cljs.core.first.call(null,inst_26696);
var inst_26706 = cljs.core.async.put_BANG_.call(null,inst_26705__$1,inst_26605,done);
var state_26737__$1 = (function (){var statearr_26813 = state_26737;
(statearr_26813[(23)] = inst_26705__$1);

return statearr_26813;
})();
if(cljs.core.truth_(inst_26706)){
var statearr_26814_26873 = state_26737__$1;
(statearr_26814_26873[(1)] = (39));

} else {
var statearr_26815_26874 = state_26737__$1;
(statearr_26815_26874[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26738 === (8))){
var inst_26616 = (state_26737[(15)]);
var inst_26617 = (state_26737[(17)]);
var inst_26619 = (inst_26617 < inst_26616);
var inst_26620 = inst_26619;
var state_26737__$1 = state_26737;
if(cljs.core.truth_(inst_26620)){
var statearr_26816_26875 = state_26737__$1;
(statearr_26816_26875[(1)] = (10));

} else {
var statearr_26817_26876 = state_26737__$1;
(statearr_26817_26876[(1)] = (11));

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
});})(c__26017__auto___26822,cs,m,dchan,dctr,done))
;
return ((function (switch__25929__auto__,c__26017__auto___26822,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__25930__auto__ = null;
var cljs$core$async$mult_$_state_machine__25930__auto____0 = (function (){
var statearr_26818 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26818[(0)] = cljs$core$async$mult_$_state_machine__25930__auto__);

(statearr_26818[(1)] = (1));

return statearr_26818;
});
var cljs$core$async$mult_$_state_machine__25930__auto____1 = (function (state_26737){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_26737);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e26819){if((e26819 instanceof Object)){
var ex__25933__auto__ = e26819;
var statearr_26820_26877 = state_26737;
(statearr_26820_26877[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26737);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26878 = state_26737;
state_26737 = G__26878;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__25930__auto__ = function(state_26737){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__25930__auto____1.call(this,state_26737);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__25930__auto____0;
cljs$core$async$mult_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__25930__auto____1;
return cljs$core$async$mult_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___26822,cs,m,dchan,dctr,done))
})();
var state__26019__auto__ = (function (){var statearr_26821 = f__26018__auto__.call(null);
(statearr_26821[(6)] = c__26017__auto___26822);

return statearr_26821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___26822,cs,m,dchan,dctr,done))
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
var G__26880 = arguments.length;
switch (G__26880) {
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
var len__4499__auto___26892 = arguments.length;
var i__4500__auto___26893 = (0);
while(true){
if((i__4500__auto___26893 < len__4499__auto___26892)){
args__4502__auto__.push((arguments[i__4500__auto___26893]));

var G__26894 = (i__4500__auto___26893 + (1));
i__4500__auto___26893 = G__26894;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__26886){
var map__26887 = p__26886;
var map__26887__$1 = ((((!((map__26887 == null)))?(((((map__26887.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__26887.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26887):map__26887);
var opts = map__26887__$1;
var statearr_26889_26895 = state;
(statearr_26889_26895[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__26887,map__26887__$1,opts){
return (function (val){
var statearr_26890_26896 = state;
(statearr_26890_26896[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__26887,map__26887__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_26891_26897 = state;
(statearr_26891_26897[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq26882){
var G__26883 = cljs.core.first.call(null,seq26882);
var seq26882__$1 = cljs.core.next.call(null,seq26882);
var G__26884 = cljs.core.first.call(null,seq26882__$1);
var seq26882__$2 = cljs.core.next.call(null,seq26882__$1);
var G__26885 = cljs.core.first.call(null,seq26882__$2);
var seq26882__$3 = cljs.core.next.call(null,seq26882__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__26883,G__26884,G__26885,seq26882__$3);
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
if(typeof cljs.core.async.t_cljs$core$async26898 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26898 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta26899){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta26899 = meta26899;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26900,meta26899__$1){
var self__ = this;
var _26900__$1 = this;
return (new cljs.core.async.t_cljs$core$async26898(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta26899__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_26900){
var self__ = this;
var _26900__$1 = this;
return self__.meta26899;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26898.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async26898.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta26899","meta26899",248798319,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async26898.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26898.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26898";

cljs.core.async.t_cljs$core$async26898.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async26898");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async26898.
 */
cljs.core.async.__GT_t_cljs$core$async26898 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async26898(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26899){
return (new cljs.core.async.t_cljs$core$async26898(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta26899));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async26898(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26017__auto___27062 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27002){
var state_val_27003 = (state_27002[(1)]);
if((state_val_27003 === (7))){
var inst_26917 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27004_27063 = state_27002__$1;
(statearr_27004_27063[(2)] = inst_26917);

(statearr_27004_27063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (20))){
var inst_26929 = (state_27002[(7)]);
var state_27002__$1 = state_27002;
var statearr_27005_27064 = state_27002__$1;
(statearr_27005_27064[(2)] = inst_26929);

(statearr_27005_27064[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (27))){
var state_27002__$1 = state_27002;
var statearr_27006_27065 = state_27002__$1;
(statearr_27006_27065[(2)] = null);

(statearr_27006_27065[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (1))){
var inst_26904 = (state_27002[(8)]);
var inst_26904__$1 = calc_state.call(null);
var inst_26906 = (inst_26904__$1 == null);
var inst_26907 = cljs.core.not.call(null,inst_26906);
var state_27002__$1 = (function (){var statearr_27007 = state_27002;
(statearr_27007[(8)] = inst_26904__$1);

return statearr_27007;
})();
if(inst_26907){
var statearr_27008_27066 = state_27002__$1;
(statearr_27008_27066[(1)] = (2));

} else {
var statearr_27009_27067 = state_27002__$1;
(statearr_27009_27067[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (24))){
var inst_26976 = (state_27002[(9)]);
var inst_26962 = (state_27002[(10)]);
var inst_26953 = (state_27002[(11)]);
var inst_26976__$1 = inst_26953.call(null,inst_26962);
var state_27002__$1 = (function (){var statearr_27010 = state_27002;
(statearr_27010[(9)] = inst_26976__$1);

return statearr_27010;
})();
if(cljs.core.truth_(inst_26976__$1)){
var statearr_27011_27068 = state_27002__$1;
(statearr_27011_27068[(1)] = (29));

} else {
var statearr_27012_27069 = state_27002__$1;
(statearr_27012_27069[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (4))){
var inst_26920 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26920)){
var statearr_27013_27070 = state_27002__$1;
(statearr_27013_27070[(1)] = (8));

} else {
var statearr_27014_27071 = state_27002__$1;
(statearr_27014_27071[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (15))){
var inst_26947 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26947)){
var statearr_27015_27072 = state_27002__$1;
(statearr_27015_27072[(1)] = (19));

} else {
var statearr_27016_27073 = state_27002__$1;
(statearr_27016_27073[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (21))){
var inst_26952 = (state_27002[(12)]);
var inst_26952__$1 = (state_27002[(2)]);
var inst_26953 = cljs.core.get.call(null,inst_26952__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26954 = cljs.core.get.call(null,inst_26952__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26955 = cljs.core.get.call(null,inst_26952__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27002__$1 = (function (){var statearr_27017 = state_27002;
(statearr_27017[(12)] = inst_26952__$1);

(statearr_27017[(13)] = inst_26954);

(statearr_27017[(11)] = inst_26953);

return statearr_27017;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27002__$1,(22),inst_26955);
} else {
if((state_val_27003 === (31))){
var inst_26984 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26984)){
var statearr_27018_27074 = state_27002__$1;
(statearr_27018_27074[(1)] = (32));

} else {
var statearr_27019_27075 = state_27002__$1;
(statearr_27019_27075[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (32))){
var inst_26961 = (state_27002[(14)]);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27002__$1,(35),out,inst_26961);
} else {
if((state_val_27003 === (33))){
var inst_26952 = (state_27002[(12)]);
var inst_26929 = inst_26952;
var state_27002__$1 = (function (){var statearr_27020 = state_27002;
(statearr_27020[(7)] = inst_26929);

return statearr_27020;
})();
var statearr_27021_27076 = state_27002__$1;
(statearr_27021_27076[(2)] = null);

(statearr_27021_27076[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (13))){
var inst_26929 = (state_27002[(7)]);
var inst_26936 = inst_26929.cljs$lang$protocol_mask$partition0$;
var inst_26937 = (inst_26936 & (64));
var inst_26938 = inst_26929.cljs$core$ISeq$;
var inst_26939 = (cljs.core.PROTOCOL_SENTINEL === inst_26938);
var inst_26940 = ((inst_26937) || (inst_26939));
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26940)){
var statearr_27022_27077 = state_27002__$1;
(statearr_27022_27077[(1)] = (16));

} else {
var statearr_27023_27078 = state_27002__$1;
(statearr_27023_27078[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (22))){
var inst_26962 = (state_27002[(10)]);
var inst_26961 = (state_27002[(14)]);
var inst_26960 = (state_27002[(2)]);
var inst_26961__$1 = cljs.core.nth.call(null,inst_26960,(0),null);
var inst_26962__$1 = cljs.core.nth.call(null,inst_26960,(1),null);
var inst_26963 = (inst_26961__$1 == null);
var inst_26964 = cljs.core._EQ_.call(null,inst_26962__$1,change);
var inst_26965 = ((inst_26963) || (inst_26964));
var state_27002__$1 = (function (){var statearr_27024 = state_27002;
(statearr_27024[(10)] = inst_26962__$1);

(statearr_27024[(14)] = inst_26961__$1);

return statearr_27024;
})();
if(cljs.core.truth_(inst_26965)){
var statearr_27025_27079 = state_27002__$1;
(statearr_27025_27079[(1)] = (23));

} else {
var statearr_27026_27080 = state_27002__$1;
(statearr_27026_27080[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (36))){
var inst_26952 = (state_27002[(12)]);
var inst_26929 = inst_26952;
var state_27002__$1 = (function (){var statearr_27027 = state_27002;
(statearr_27027[(7)] = inst_26929);

return statearr_27027;
})();
var statearr_27028_27081 = state_27002__$1;
(statearr_27028_27081[(2)] = null);

(statearr_27028_27081[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (29))){
var inst_26976 = (state_27002[(9)]);
var state_27002__$1 = state_27002;
var statearr_27029_27082 = state_27002__$1;
(statearr_27029_27082[(2)] = inst_26976);

(statearr_27029_27082[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (6))){
var state_27002__$1 = state_27002;
var statearr_27030_27083 = state_27002__$1;
(statearr_27030_27083[(2)] = false);

(statearr_27030_27083[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (28))){
var inst_26972 = (state_27002[(2)]);
var inst_26973 = calc_state.call(null);
var inst_26929 = inst_26973;
var state_27002__$1 = (function (){var statearr_27031 = state_27002;
(statearr_27031[(7)] = inst_26929);

(statearr_27031[(15)] = inst_26972);

return statearr_27031;
})();
var statearr_27032_27084 = state_27002__$1;
(statearr_27032_27084[(2)] = null);

(statearr_27032_27084[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (25))){
var inst_26998 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27033_27085 = state_27002__$1;
(statearr_27033_27085[(2)] = inst_26998);

(statearr_27033_27085[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (34))){
var inst_26996 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27034_27086 = state_27002__$1;
(statearr_27034_27086[(2)] = inst_26996);

(statearr_27034_27086[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (17))){
var state_27002__$1 = state_27002;
var statearr_27035_27087 = state_27002__$1;
(statearr_27035_27087[(2)] = false);

(statearr_27035_27087[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (3))){
var state_27002__$1 = state_27002;
var statearr_27036_27088 = state_27002__$1;
(statearr_27036_27088[(2)] = false);

(statearr_27036_27088[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (12))){
var inst_27000 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27002__$1,inst_27000);
} else {
if((state_val_27003 === (2))){
var inst_26904 = (state_27002[(8)]);
var inst_26909 = inst_26904.cljs$lang$protocol_mask$partition0$;
var inst_26910 = (inst_26909 & (64));
var inst_26911 = inst_26904.cljs$core$ISeq$;
var inst_26912 = (cljs.core.PROTOCOL_SENTINEL === inst_26911);
var inst_26913 = ((inst_26910) || (inst_26912));
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26913)){
var statearr_27037_27089 = state_27002__$1;
(statearr_27037_27089[(1)] = (5));

} else {
var statearr_27038_27090 = state_27002__$1;
(statearr_27038_27090[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (23))){
var inst_26961 = (state_27002[(14)]);
var inst_26967 = (inst_26961 == null);
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26967)){
var statearr_27039_27091 = state_27002__$1;
(statearr_27039_27091[(1)] = (26));

} else {
var statearr_27040_27092 = state_27002__$1;
(statearr_27040_27092[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (35))){
var inst_26987 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
if(cljs.core.truth_(inst_26987)){
var statearr_27041_27093 = state_27002__$1;
(statearr_27041_27093[(1)] = (36));

} else {
var statearr_27042_27094 = state_27002__$1;
(statearr_27042_27094[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (19))){
var inst_26929 = (state_27002[(7)]);
var inst_26949 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26929);
var state_27002__$1 = state_27002;
var statearr_27043_27095 = state_27002__$1;
(statearr_27043_27095[(2)] = inst_26949);

(statearr_27043_27095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (11))){
var inst_26929 = (state_27002[(7)]);
var inst_26933 = (inst_26929 == null);
var inst_26934 = cljs.core.not.call(null,inst_26933);
var state_27002__$1 = state_27002;
if(inst_26934){
var statearr_27044_27096 = state_27002__$1;
(statearr_27044_27096[(1)] = (13));

} else {
var statearr_27045_27097 = state_27002__$1;
(statearr_27045_27097[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (9))){
var inst_26904 = (state_27002[(8)]);
var state_27002__$1 = state_27002;
var statearr_27046_27098 = state_27002__$1;
(statearr_27046_27098[(2)] = inst_26904);

(statearr_27046_27098[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (5))){
var state_27002__$1 = state_27002;
var statearr_27047_27099 = state_27002__$1;
(statearr_27047_27099[(2)] = true);

(statearr_27047_27099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (14))){
var state_27002__$1 = state_27002;
var statearr_27048_27100 = state_27002__$1;
(statearr_27048_27100[(2)] = false);

(statearr_27048_27100[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (26))){
var inst_26962 = (state_27002[(10)]);
var inst_26969 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_26962);
var state_27002__$1 = state_27002;
var statearr_27049_27101 = state_27002__$1;
(statearr_27049_27101[(2)] = inst_26969);

(statearr_27049_27101[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (16))){
var state_27002__$1 = state_27002;
var statearr_27050_27102 = state_27002__$1;
(statearr_27050_27102[(2)] = true);

(statearr_27050_27102[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (38))){
var inst_26992 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27051_27103 = state_27002__$1;
(statearr_27051_27103[(2)] = inst_26992);

(statearr_27051_27103[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (30))){
var inst_26954 = (state_27002[(13)]);
var inst_26962 = (state_27002[(10)]);
var inst_26953 = (state_27002[(11)]);
var inst_26979 = cljs.core.empty_QMARK_.call(null,inst_26953);
var inst_26980 = inst_26954.call(null,inst_26962);
var inst_26981 = cljs.core.not.call(null,inst_26980);
var inst_26982 = ((inst_26979) && (inst_26981));
var state_27002__$1 = state_27002;
var statearr_27052_27104 = state_27002__$1;
(statearr_27052_27104[(2)] = inst_26982);

(statearr_27052_27104[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (10))){
var inst_26904 = (state_27002[(8)]);
var inst_26925 = (state_27002[(2)]);
var inst_26926 = cljs.core.get.call(null,inst_26925,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_26927 = cljs.core.get.call(null,inst_26925,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_26928 = cljs.core.get.call(null,inst_26925,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_26929 = inst_26904;
var state_27002__$1 = (function (){var statearr_27053 = state_27002;
(statearr_27053[(16)] = inst_26926);

(statearr_27053[(17)] = inst_26927);

(statearr_27053[(18)] = inst_26928);

(statearr_27053[(7)] = inst_26929);

return statearr_27053;
})();
var statearr_27054_27105 = state_27002__$1;
(statearr_27054_27105[(2)] = null);

(statearr_27054_27105[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (18))){
var inst_26944 = (state_27002[(2)]);
var state_27002__$1 = state_27002;
var statearr_27055_27106 = state_27002__$1;
(statearr_27055_27106[(2)] = inst_26944);

(statearr_27055_27106[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (37))){
var state_27002__$1 = state_27002;
var statearr_27056_27107 = state_27002__$1;
(statearr_27056_27107[(2)] = null);

(statearr_27056_27107[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27003 === (8))){
var inst_26904 = (state_27002[(8)]);
var inst_26922 = cljs.core.apply.call(null,cljs.core.hash_map,inst_26904);
var state_27002__$1 = state_27002;
var statearr_27057_27108 = state_27002__$1;
(statearr_27057_27108[(2)] = inst_26922);

(statearr_27057_27108[(1)] = (10));


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
});})(c__26017__auto___27062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__25929__auto__,c__26017__auto___27062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__25930__auto__ = null;
var cljs$core$async$mix_$_state_machine__25930__auto____0 = (function (){
var statearr_27058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27058[(0)] = cljs$core$async$mix_$_state_machine__25930__auto__);

(statearr_27058[(1)] = (1));

return statearr_27058;
});
var cljs$core$async$mix_$_state_machine__25930__auto____1 = (function (state_27002){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27059){if((e27059 instanceof Object)){
var ex__25933__auto__ = e27059;
var statearr_27060_27109 = state_27002;
(statearr_27060_27109[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27059;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27110 = state_27002;
state_27002 = G__27110;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__25930__auto__ = function(state_27002){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__25930__auto____1.call(this,state_27002);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__25930__auto____0;
cljs$core$async$mix_$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__25930__auto____1;
return cljs$core$async$mix_$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__26019__auto__ = (function (){var statearr_27061 = f__26018__auto__.call(null);
(statearr_27061[(6)] = c__26017__auto___27062);

return statearr_27061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27062,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__27112 = arguments.length;
switch (G__27112) {
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
var G__27118 = arguments.length;
switch (G__27118) {
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
return (function (p1__27116_SHARP_){
if(cljs.core.truth_(p1__27116_SHARP_.call(null,topic))){
return p1__27116_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__27116_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async27119 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27119 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta27120){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta27120 = meta27120;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_27121,meta27120__$1){
var self__ = this;
var _27121__$1 = this;
return (new cljs.core.async.t_cljs$core$async27119(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta27120__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_27121){
var self__ = this;
var _27121__$1 = this;
return self__.meta27120;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27119.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27119.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta27120","meta27120",387527179,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async27119.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27119.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27119";

cljs.core.async.t_cljs$core$async27119.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27119");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27119.
 */
cljs.core.async.__GT_t_cljs$core$async27119 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async27119(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27120){
return (new cljs.core.async.t_cljs$core$async27119(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta27120));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async27119(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__26017__auto___27239 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27239,mults,ensure_mult,p){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27239,mults,ensure_mult,p){
return (function (state_27193){
var state_val_27194 = (state_27193[(1)]);
if((state_val_27194 === (7))){
var inst_27189 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27195_27240 = state_27193__$1;
(statearr_27195_27240[(2)] = inst_27189);

(statearr_27195_27240[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (20))){
var state_27193__$1 = state_27193;
var statearr_27196_27241 = state_27193__$1;
(statearr_27196_27241[(2)] = null);

(statearr_27196_27241[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (1))){
var state_27193__$1 = state_27193;
var statearr_27197_27242 = state_27193__$1;
(statearr_27197_27242[(2)] = null);

(statearr_27197_27242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (24))){
var inst_27172 = (state_27193[(7)]);
var inst_27181 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_27172);
var state_27193__$1 = state_27193;
var statearr_27198_27243 = state_27193__$1;
(statearr_27198_27243[(2)] = inst_27181);

(statearr_27198_27243[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (4))){
var inst_27124 = (state_27193[(8)]);
var inst_27124__$1 = (state_27193[(2)]);
var inst_27125 = (inst_27124__$1 == null);
var state_27193__$1 = (function (){var statearr_27199 = state_27193;
(statearr_27199[(8)] = inst_27124__$1);

return statearr_27199;
})();
if(cljs.core.truth_(inst_27125)){
var statearr_27200_27244 = state_27193__$1;
(statearr_27200_27244[(1)] = (5));

} else {
var statearr_27201_27245 = state_27193__$1;
(statearr_27201_27245[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (15))){
var inst_27166 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27202_27246 = state_27193__$1;
(statearr_27202_27246[(2)] = inst_27166);

(statearr_27202_27246[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (21))){
var inst_27186 = (state_27193[(2)]);
var state_27193__$1 = (function (){var statearr_27203 = state_27193;
(statearr_27203[(9)] = inst_27186);

return statearr_27203;
})();
var statearr_27204_27247 = state_27193__$1;
(statearr_27204_27247[(2)] = null);

(statearr_27204_27247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (13))){
var inst_27148 = (state_27193[(10)]);
var inst_27150 = cljs.core.chunked_seq_QMARK_.call(null,inst_27148);
var state_27193__$1 = state_27193;
if(inst_27150){
var statearr_27205_27248 = state_27193__$1;
(statearr_27205_27248[(1)] = (16));

} else {
var statearr_27206_27249 = state_27193__$1;
(statearr_27206_27249[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (22))){
var inst_27178 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
if(cljs.core.truth_(inst_27178)){
var statearr_27207_27250 = state_27193__$1;
(statearr_27207_27250[(1)] = (23));

} else {
var statearr_27208_27251 = state_27193__$1;
(statearr_27208_27251[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (6))){
var inst_27124 = (state_27193[(8)]);
var inst_27174 = (state_27193[(11)]);
var inst_27172 = (state_27193[(7)]);
var inst_27172__$1 = topic_fn.call(null,inst_27124);
var inst_27173 = cljs.core.deref.call(null,mults);
var inst_27174__$1 = cljs.core.get.call(null,inst_27173,inst_27172__$1);
var state_27193__$1 = (function (){var statearr_27209 = state_27193;
(statearr_27209[(11)] = inst_27174__$1);

(statearr_27209[(7)] = inst_27172__$1);

return statearr_27209;
})();
if(cljs.core.truth_(inst_27174__$1)){
var statearr_27210_27252 = state_27193__$1;
(statearr_27210_27252[(1)] = (19));

} else {
var statearr_27211_27253 = state_27193__$1;
(statearr_27211_27253[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (25))){
var inst_27183 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27212_27254 = state_27193__$1;
(statearr_27212_27254[(2)] = inst_27183);

(statearr_27212_27254[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (17))){
var inst_27148 = (state_27193[(10)]);
var inst_27157 = cljs.core.first.call(null,inst_27148);
var inst_27158 = cljs.core.async.muxch_STAR_.call(null,inst_27157);
var inst_27159 = cljs.core.async.close_BANG_.call(null,inst_27158);
var inst_27160 = cljs.core.next.call(null,inst_27148);
var inst_27134 = inst_27160;
var inst_27135 = null;
var inst_27136 = (0);
var inst_27137 = (0);
var state_27193__$1 = (function (){var statearr_27213 = state_27193;
(statearr_27213[(12)] = inst_27136);

(statearr_27213[(13)] = inst_27137);

(statearr_27213[(14)] = inst_27135);

(statearr_27213[(15)] = inst_27159);

(statearr_27213[(16)] = inst_27134);

return statearr_27213;
})();
var statearr_27214_27255 = state_27193__$1;
(statearr_27214_27255[(2)] = null);

(statearr_27214_27255[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (3))){
var inst_27191 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27193__$1,inst_27191);
} else {
if((state_val_27194 === (12))){
var inst_27168 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27215_27256 = state_27193__$1;
(statearr_27215_27256[(2)] = inst_27168);

(statearr_27215_27256[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (2))){
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27193__$1,(4),ch);
} else {
if((state_val_27194 === (23))){
var state_27193__$1 = state_27193;
var statearr_27216_27257 = state_27193__$1;
(statearr_27216_27257[(2)] = null);

(statearr_27216_27257[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (19))){
var inst_27124 = (state_27193[(8)]);
var inst_27174 = (state_27193[(11)]);
var inst_27176 = cljs.core.async.muxch_STAR_.call(null,inst_27174);
var state_27193__$1 = state_27193;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27193__$1,(22),inst_27176,inst_27124);
} else {
if((state_val_27194 === (11))){
var inst_27148 = (state_27193[(10)]);
var inst_27134 = (state_27193[(16)]);
var inst_27148__$1 = cljs.core.seq.call(null,inst_27134);
var state_27193__$1 = (function (){var statearr_27217 = state_27193;
(statearr_27217[(10)] = inst_27148__$1);

return statearr_27217;
})();
if(inst_27148__$1){
var statearr_27218_27258 = state_27193__$1;
(statearr_27218_27258[(1)] = (13));

} else {
var statearr_27219_27259 = state_27193__$1;
(statearr_27219_27259[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (9))){
var inst_27170 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27220_27260 = state_27193__$1;
(statearr_27220_27260[(2)] = inst_27170);

(statearr_27220_27260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (5))){
var inst_27131 = cljs.core.deref.call(null,mults);
var inst_27132 = cljs.core.vals.call(null,inst_27131);
var inst_27133 = cljs.core.seq.call(null,inst_27132);
var inst_27134 = inst_27133;
var inst_27135 = null;
var inst_27136 = (0);
var inst_27137 = (0);
var state_27193__$1 = (function (){var statearr_27221 = state_27193;
(statearr_27221[(12)] = inst_27136);

(statearr_27221[(13)] = inst_27137);

(statearr_27221[(14)] = inst_27135);

(statearr_27221[(16)] = inst_27134);

return statearr_27221;
})();
var statearr_27222_27261 = state_27193__$1;
(statearr_27222_27261[(2)] = null);

(statearr_27222_27261[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (14))){
var state_27193__$1 = state_27193;
var statearr_27226_27262 = state_27193__$1;
(statearr_27226_27262[(2)] = null);

(statearr_27226_27262[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (16))){
var inst_27148 = (state_27193[(10)]);
var inst_27152 = cljs.core.chunk_first.call(null,inst_27148);
var inst_27153 = cljs.core.chunk_rest.call(null,inst_27148);
var inst_27154 = cljs.core.count.call(null,inst_27152);
var inst_27134 = inst_27153;
var inst_27135 = inst_27152;
var inst_27136 = inst_27154;
var inst_27137 = (0);
var state_27193__$1 = (function (){var statearr_27227 = state_27193;
(statearr_27227[(12)] = inst_27136);

(statearr_27227[(13)] = inst_27137);

(statearr_27227[(14)] = inst_27135);

(statearr_27227[(16)] = inst_27134);

return statearr_27227;
})();
var statearr_27228_27263 = state_27193__$1;
(statearr_27228_27263[(2)] = null);

(statearr_27228_27263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (10))){
var inst_27136 = (state_27193[(12)]);
var inst_27137 = (state_27193[(13)]);
var inst_27135 = (state_27193[(14)]);
var inst_27134 = (state_27193[(16)]);
var inst_27142 = cljs.core._nth.call(null,inst_27135,inst_27137);
var inst_27143 = cljs.core.async.muxch_STAR_.call(null,inst_27142);
var inst_27144 = cljs.core.async.close_BANG_.call(null,inst_27143);
var inst_27145 = (inst_27137 + (1));
var tmp27223 = inst_27136;
var tmp27224 = inst_27135;
var tmp27225 = inst_27134;
var inst_27134__$1 = tmp27225;
var inst_27135__$1 = tmp27224;
var inst_27136__$1 = tmp27223;
var inst_27137__$1 = inst_27145;
var state_27193__$1 = (function (){var statearr_27229 = state_27193;
(statearr_27229[(12)] = inst_27136__$1);

(statearr_27229[(17)] = inst_27144);

(statearr_27229[(13)] = inst_27137__$1);

(statearr_27229[(14)] = inst_27135__$1);

(statearr_27229[(16)] = inst_27134__$1);

return statearr_27229;
})();
var statearr_27230_27264 = state_27193__$1;
(statearr_27230_27264[(2)] = null);

(statearr_27230_27264[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (18))){
var inst_27163 = (state_27193[(2)]);
var state_27193__$1 = state_27193;
var statearr_27231_27265 = state_27193__$1;
(statearr_27231_27265[(2)] = inst_27163);

(statearr_27231_27265[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27194 === (8))){
var inst_27136 = (state_27193[(12)]);
var inst_27137 = (state_27193[(13)]);
var inst_27139 = (inst_27137 < inst_27136);
var inst_27140 = inst_27139;
var state_27193__$1 = state_27193;
if(cljs.core.truth_(inst_27140)){
var statearr_27232_27266 = state_27193__$1;
(statearr_27232_27266[(1)] = (10));

} else {
var statearr_27233_27267 = state_27193__$1;
(statearr_27233_27267[(1)] = (11));

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
});})(c__26017__auto___27239,mults,ensure_mult,p))
;
return ((function (switch__25929__auto__,c__26017__auto___27239,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_27234 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27234[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_27234[(1)] = (1));

return statearr_27234;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_27193){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27193);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27235){if((e27235 instanceof Object)){
var ex__25933__auto__ = e27235;
var statearr_27236_27268 = state_27193;
(statearr_27236_27268[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27193);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27235;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27269 = state_27193;
state_27193 = G__27269;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_27193){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_27193);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27239,mults,ensure_mult,p))
})();
var state__26019__auto__ = (function (){var statearr_27237 = f__26018__auto__.call(null);
(statearr_27237[(6)] = c__26017__auto___27239);

return statearr_27237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27239,mults,ensure_mult,p))
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
var G__27271 = arguments.length;
switch (G__27271) {
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
var G__27274 = arguments.length;
switch (G__27274) {
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
var G__27277 = arguments.length;
switch (G__27277) {
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
var c__26017__auto___27344 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_27316){
var state_val_27317 = (state_27316[(1)]);
if((state_val_27317 === (7))){
var state_27316__$1 = state_27316;
var statearr_27318_27345 = state_27316__$1;
(statearr_27318_27345[(2)] = null);

(statearr_27318_27345[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (1))){
var state_27316__$1 = state_27316;
var statearr_27319_27346 = state_27316__$1;
(statearr_27319_27346[(2)] = null);

(statearr_27319_27346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (4))){
var inst_27280 = (state_27316[(7)]);
var inst_27282 = (inst_27280 < cnt);
var state_27316__$1 = state_27316;
if(cljs.core.truth_(inst_27282)){
var statearr_27320_27347 = state_27316__$1;
(statearr_27320_27347[(1)] = (6));

} else {
var statearr_27321_27348 = state_27316__$1;
(statearr_27321_27348[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (15))){
var inst_27312 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27322_27349 = state_27316__$1;
(statearr_27322_27349[(2)] = inst_27312);

(statearr_27322_27349[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (13))){
var inst_27305 = cljs.core.async.close_BANG_.call(null,out);
var state_27316__$1 = state_27316;
var statearr_27323_27350 = state_27316__$1;
(statearr_27323_27350[(2)] = inst_27305);

(statearr_27323_27350[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (6))){
var state_27316__$1 = state_27316;
var statearr_27324_27351 = state_27316__$1;
(statearr_27324_27351[(2)] = null);

(statearr_27324_27351[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (3))){
var inst_27314 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27316__$1,inst_27314);
} else {
if((state_val_27317 === (12))){
var inst_27302 = (state_27316[(8)]);
var inst_27302__$1 = (state_27316[(2)]);
var inst_27303 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_27302__$1);
var state_27316__$1 = (function (){var statearr_27325 = state_27316;
(statearr_27325[(8)] = inst_27302__$1);

return statearr_27325;
})();
if(cljs.core.truth_(inst_27303)){
var statearr_27326_27352 = state_27316__$1;
(statearr_27326_27352[(1)] = (13));

} else {
var statearr_27327_27353 = state_27316__$1;
(statearr_27327_27353[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (2))){
var inst_27279 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_27280 = (0);
var state_27316__$1 = (function (){var statearr_27328 = state_27316;
(statearr_27328[(9)] = inst_27279);

(statearr_27328[(7)] = inst_27280);

return statearr_27328;
})();
var statearr_27329_27354 = state_27316__$1;
(statearr_27329_27354[(2)] = null);

(statearr_27329_27354[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (11))){
var inst_27280 = (state_27316[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_27316,(10),Object,null,(9));
var inst_27289 = chs__$1.call(null,inst_27280);
var inst_27290 = done.call(null,inst_27280);
var inst_27291 = cljs.core.async.take_BANG_.call(null,inst_27289,inst_27290);
var state_27316__$1 = state_27316;
var statearr_27330_27355 = state_27316__$1;
(statearr_27330_27355[(2)] = inst_27291);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27316__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (9))){
var inst_27280 = (state_27316[(7)]);
var inst_27293 = (state_27316[(2)]);
var inst_27294 = (inst_27280 + (1));
var inst_27280__$1 = inst_27294;
var state_27316__$1 = (function (){var statearr_27331 = state_27316;
(statearr_27331[(10)] = inst_27293);

(statearr_27331[(7)] = inst_27280__$1);

return statearr_27331;
})();
var statearr_27332_27356 = state_27316__$1;
(statearr_27332_27356[(2)] = null);

(statearr_27332_27356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (5))){
var inst_27300 = (state_27316[(2)]);
var state_27316__$1 = (function (){var statearr_27333 = state_27316;
(statearr_27333[(11)] = inst_27300);

return statearr_27333;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27316__$1,(12),dchan);
} else {
if((state_val_27317 === (14))){
var inst_27302 = (state_27316[(8)]);
var inst_27307 = cljs.core.apply.call(null,f,inst_27302);
var state_27316__$1 = state_27316;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27316__$1,(16),out,inst_27307);
} else {
if((state_val_27317 === (16))){
var inst_27309 = (state_27316[(2)]);
var state_27316__$1 = (function (){var statearr_27334 = state_27316;
(statearr_27334[(12)] = inst_27309);

return statearr_27334;
})();
var statearr_27335_27357 = state_27316__$1;
(statearr_27335_27357[(2)] = null);

(statearr_27335_27357[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (10))){
var inst_27284 = (state_27316[(2)]);
var inst_27285 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_27316__$1 = (function (){var statearr_27336 = state_27316;
(statearr_27336[(13)] = inst_27284);

return statearr_27336;
})();
var statearr_27337_27358 = state_27316__$1;
(statearr_27337_27358[(2)] = inst_27285);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27316__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27317 === (8))){
var inst_27298 = (state_27316[(2)]);
var state_27316__$1 = state_27316;
var statearr_27338_27359 = state_27316__$1;
(statearr_27338_27359[(2)] = inst_27298);

(statearr_27338_27359[(1)] = (5));


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
});})(c__26017__auto___27344,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__25929__auto__,c__26017__auto___27344,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_27339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27339[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_27339[(1)] = (1));

return statearr_27339;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_27316){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27316);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27340){if((e27340 instanceof Object)){
var ex__25933__auto__ = e27340;
var statearr_27341_27360 = state_27316;
(statearr_27341_27360[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27316);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27361 = state_27316;
state_27316 = G__27361;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_27316){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_27316);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27344,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__26019__auto__ = (function (){var statearr_27342 = f__26018__auto__.call(null);
(statearr_27342[(6)] = c__26017__auto___27344);

return statearr_27342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27344,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__27364 = arguments.length;
switch (G__27364) {
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
var c__26017__auto___27418 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27418,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27418,out){
return (function (state_27396){
var state_val_27397 = (state_27396[(1)]);
if((state_val_27397 === (7))){
var inst_27376 = (state_27396[(7)]);
var inst_27375 = (state_27396[(8)]);
var inst_27375__$1 = (state_27396[(2)]);
var inst_27376__$1 = cljs.core.nth.call(null,inst_27375__$1,(0),null);
var inst_27377 = cljs.core.nth.call(null,inst_27375__$1,(1),null);
var inst_27378 = (inst_27376__$1 == null);
var state_27396__$1 = (function (){var statearr_27398 = state_27396;
(statearr_27398[(7)] = inst_27376__$1);

(statearr_27398[(8)] = inst_27375__$1);

(statearr_27398[(9)] = inst_27377);

return statearr_27398;
})();
if(cljs.core.truth_(inst_27378)){
var statearr_27399_27419 = state_27396__$1;
(statearr_27399_27419[(1)] = (8));

} else {
var statearr_27400_27420 = state_27396__$1;
(statearr_27400_27420[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (1))){
var inst_27365 = cljs.core.vec.call(null,chs);
var inst_27366 = inst_27365;
var state_27396__$1 = (function (){var statearr_27401 = state_27396;
(statearr_27401[(10)] = inst_27366);

return statearr_27401;
})();
var statearr_27402_27421 = state_27396__$1;
(statearr_27402_27421[(2)] = null);

(statearr_27402_27421[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (4))){
var inst_27366 = (state_27396[(10)]);
var state_27396__$1 = state_27396;
return cljs.core.async.ioc_alts_BANG_.call(null,state_27396__$1,(7),inst_27366);
} else {
if((state_val_27397 === (6))){
var inst_27392 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27403_27422 = state_27396__$1;
(statearr_27403_27422[(2)] = inst_27392);

(statearr_27403_27422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (3))){
var inst_27394 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27396__$1,inst_27394);
} else {
if((state_val_27397 === (2))){
var inst_27366 = (state_27396[(10)]);
var inst_27368 = cljs.core.count.call(null,inst_27366);
var inst_27369 = (inst_27368 > (0));
var state_27396__$1 = state_27396;
if(cljs.core.truth_(inst_27369)){
var statearr_27405_27423 = state_27396__$1;
(statearr_27405_27423[(1)] = (4));

} else {
var statearr_27406_27424 = state_27396__$1;
(statearr_27406_27424[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (11))){
var inst_27366 = (state_27396[(10)]);
var inst_27385 = (state_27396[(2)]);
var tmp27404 = inst_27366;
var inst_27366__$1 = tmp27404;
var state_27396__$1 = (function (){var statearr_27407 = state_27396;
(statearr_27407[(11)] = inst_27385);

(statearr_27407[(10)] = inst_27366__$1);

return statearr_27407;
})();
var statearr_27408_27425 = state_27396__$1;
(statearr_27408_27425[(2)] = null);

(statearr_27408_27425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (9))){
var inst_27376 = (state_27396[(7)]);
var state_27396__$1 = state_27396;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27396__$1,(11),out,inst_27376);
} else {
if((state_val_27397 === (5))){
var inst_27390 = cljs.core.async.close_BANG_.call(null,out);
var state_27396__$1 = state_27396;
var statearr_27409_27426 = state_27396__$1;
(statearr_27409_27426[(2)] = inst_27390);

(statearr_27409_27426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (10))){
var inst_27388 = (state_27396[(2)]);
var state_27396__$1 = state_27396;
var statearr_27410_27427 = state_27396__$1;
(statearr_27410_27427[(2)] = inst_27388);

(statearr_27410_27427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27397 === (8))){
var inst_27376 = (state_27396[(7)]);
var inst_27375 = (state_27396[(8)]);
var inst_27366 = (state_27396[(10)]);
var inst_27377 = (state_27396[(9)]);
var inst_27380 = (function (){var cs = inst_27366;
var vec__27371 = inst_27375;
var v = inst_27376;
var c = inst_27377;
return ((function (cs,vec__27371,v,c,inst_27376,inst_27375,inst_27366,inst_27377,state_val_27397,c__26017__auto___27418,out){
return (function (p1__27362_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__27362_SHARP_);
});
;})(cs,vec__27371,v,c,inst_27376,inst_27375,inst_27366,inst_27377,state_val_27397,c__26017__auto___27418,out))
})();
var inst_27381 = cljs.core.filterv.call(null,inst_27380,inst_27366);
var inst_27366__$1 = inst_27381;
var state_27396__$1 = (function (){var statearr_27411 = state_27396;
(statearr_27411[(10)] = inst_27366__$1);

return statearr_27411;
})();
var statearr_27412_27428 = state_27396__$1;
(statearr_27412_27428[(2)] = null);

(statearr_27412_27428[(1)] = (2));


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
});})(c__26017__auto___27418,out))
;
return ((function (switch__25929__auto__,c__26017__auto___27418,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_27413 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27413[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_27413[(1)] = (1));

return statearr_27413;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_27396){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27414){if((e27414 instanceof Object)){
var ex__25933__auto__ = e27414;
var statearr_27415_27429 = state_27396;
(statearr_27415_27429[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27414;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27430 = state_27396;
state_27396 = G__27430;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_27396){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_27396);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27418,out))
})();
var state__26019__auto__ = (function (){var statearr_27416 = f__26018__auto__.call(null);
(statearr_27416[(6)] = c__26017__auto___27418);

return statearr_27416;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27418,out))
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
var G__27432 = arguments.length;
switch (G__27432) {
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
var c__26017__auto___27477 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27477,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27477,out){
return (function (state_27456){
var state_val_27457 = (state_27456[(1)]);
if((state_val_27457 === (7))){
var inst_27438 = (state_27456[(7)]);
var inst_27438__$1 = (state_27456[(2)]);
var inst_27439 = (inst_27438__$1 == null);
var inst_27440 = cljs.core.not.call(null,inst_27439);
var state_27456__$1 = (function (){var statearr_27458 = state_27456;
(statearr_27458[(7)] = inst_27438__$1);

return statearr_27458;
})();
if(inst_27440){
var statearr_27459_27478 = state_27456__$1;
(statearr_27459_27478[(1)] = (8));

} else {
var statearr_27460_27479 = state_27456__$1;
(statearr_27460_27479[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (1))){
var inst_27433 = (0);
var state_27456__$1 = (function (){var statearr_27461 = state_27456;
(statearr_27461[(8)] = inst_27433);

return statearr_27461;
})();
var statearr_27462_27480 = state_27456__$1;
(statearr_27462_27480[(2)] = null);

(statearr_27462_27480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (4))){
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27456__$1,(7),ch);
} else {
if((state_val_27457 === (6))){
var inst_27451 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27463_27481 = state_27456__$1;
(statearr_27463_27481[(2)] = inst_27451);

(statearr_27463_27481[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (3))){
var inst_27453 = (state_27456[(2)]);
var inst_27454 = cljs.core.async.close_BANG_.call(null,out);
var state_27456__$1 = (function (){var statearr_27464 = state_27456;
(statearr_27464[(9)] = inst_27453);

return statearr_27464;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27456__$1,inst_27454);
} else {
if((state_val_27457 === (2))){
var inst_27433 = (state_27456[(8)]);
var inst_27435 = (inst_27433 < n);
var state_27456__$1 = state_27456;
if(cljs.core.truth_(inst_27435)){
var statearr_27465_27482 = state_27456__$1;
(statearr_27465_27482[(1)] = (4));

} else {
var statearr_27466_27483 = state_27456__$1;
(statearr_27466_27483[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (11))){
var inst_27433 = (state_27456[(8)]);
var inst_27443 = (state_27456[(2)]);
var inst_27444 = (inst_27433 + (1));
var inst_27433__$1 = inst_27444;
var state_27456__$1 = (function (){var statearr_27467 = state_27456;
(statearr_27467[(10)] = inst_27443);

(statearr_27467[(8)] = inst_27433__$1);

return statearr_27467;
})();
var statearr_27468_27484 = state_27456__$1;
(statearr_27468_27484[(2)] = null);

(statearr_27468_27484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (9))){
var state_27456__$1 = state_27456;
var statearr_27469_27485 = state_27456__$1;
(statearr_27469_27485[(2)] = null);

(statearr_27469_27485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (5))){
var state_27456__$1 = state_27456;
var statearr_27470_27486 = state_27456__$1;
(statearr_27470_27486[(2)] = null);

(statearr_27470_27486[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (10))){
var inst_27448 = (state_27456[(2)]);
var state_27456__$1 = state_27456;
var statearr_27471_27487 = state_27456__$1;
(statearr_27471_27487[(2)] = inst_27448);

(statearr_27471_27487[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27457 === (8))){
var inst_27438 = (state_27456[(7)]);
var state_27456__$1 = state_27456;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27456__$1,(11),out,inst_27438);
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
});})(c__26017__auto___27477,out))
;
return ((function (switch__25929__auto__,c__26017__auto___27477,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_27472 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27472[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_27472[(1)] = (1));

return statearr_27472;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_27456){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27456);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27473){if((e27473 instanceof Object)){
var ex__25933__auto__ = e27473;
var statearr_27474_27488 = state_27456;
(statearr_27474_27488[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27456);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27473;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27489 = state_27456;
state_27456 = G__27489;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_27456){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_27456);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27477,out))
})();
var state__26019__auto__ = (function (){var statearr_27475 = f__26018__auto__.call(null);
(statearr_27475[(6)] = c__26017__auto___27477);

return statearr_27475;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27477,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27491 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27491 = (function (f,ch,meta27492){
this.f = f;
this.ch = ch;
this.meta27492 = meta27492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27493,meta27492__$1){
var self__ = this;
var _27493__$1 = this;
return (new cljs.core.async.t_cljs$core$async27491(self__.f,self__.ch,meta27492__$1));
});

cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27493){
var self__ = this;
var _27493__$1 = this;
return self__.meta27492;
});

cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async27494 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27494 = (function (f,ch,meta27492,_,fn1,meta27495){
this.f = f;
this.ch = ch;
this.meta27492 = meta27492;
this._ = _;
this.fn1 = fn1;
this.meta27495 = meta27495;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27494.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_27496,meta27495__$1){
var self__ = this;
var _27496__$1 = this;
return (new cljs.core.async.t_cljs$core$async27494(self__.f,self__.ch,self__.meta27492,self__._,self__.fn1,meta27495__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async27494.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_27496){
var self__ = this;
var _27496__$1 = this;
return self__.meta27495;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27494.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27494.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27494.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async27494.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__27490_SHARP_){
return f1.call(null,(((p1__27490_SHARP_ == null))?null:self__.f.call(null,p1__27490_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async27494.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27492","meta27492",-451317538,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async27491","cljs.core.async/t_cljs$core$async27491",-1704717475,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta27495","meta27495",1161993616,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async27494.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27494.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27494";

cljs.core.async.t_cljs$core$async27494.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27494");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27494.
 */
cljs.core.async.__GT_t_cljs$core$async27494 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27494(f__$1,ch__$1,meta27492__$1,___$2,fn1__$1,meta27495){
return (new cljs.core.async.t_cljs$core$async27494(f__$1,ch__$1,meta27492__$1,___$2,fn1__$1,meta27495));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async27494(self__.f,self__.ch,self__.meta27492,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27491.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async27491.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27492","meta27492",-451317538,null)], null);
});

cljs.core.async.t_cljs$core$async27491.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27491.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27491";

cljs.core.async.t_cljs$core$async27491.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27491");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27491.
 */
cljs.core.async.__GT_t_cljs$core$async27491 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async27491(f__$1,ch__$1,meta27492){
return (new cljs.core.async.t_cljs$core$async27491(f__$1,ch__$1,meta27492));
});

}

return (new cljs.core.async.t_cljs$core$async27491(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async27497 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27497 = (function (f,ch,meta27498){
this.f = f;
this.ch = ch;
this.meta27498 = meta27498;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27497.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27499,meta27498__$1){
var self__ = this;
var _27499__$1 = this;
return (new cljs.core.async.t_cljs$core$async27497(self__.f,self__.ch,meta27498__$1));
});

cljs.core.async.t_cljs$core$async27497.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27499){
var self__ = this;
var _27499__$1 = this;
return self__.meta27498;
});

cljs.core.async.t_cljs$core$async27497.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27497.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27497.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27497.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27497.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27497.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async27497.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27498","meta27498",483976062,null)], null);
});

cljs.core.async.t_cljs$core$async27497.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27497.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27497";

cljs.core.async.t_cljs$core$async27497.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27497");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27497.
 */
cljs.core.async.__GT_t_cljs$core$async27497 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async27497(f__$1,ch__$1,meta27498){
return (new cljs.core.async.t_cljs$core$async27497(f__$1,ch__$1,meta27498));
});

}

return (new cljs.core.async.t_cljs$core$async27497(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async27500 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27500 = (function (p,ch,meta27501){
this.p = p;
this.ch = ch;
this.meta27501 = meta27501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_27502,meta27501__$1){
var self__ = this;
var _27502__$1 = this;
return (new cljs.core.async.t_cljs$core$async27500(self__.p,self__.ch,meta27501__$1));
});

cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_27502){
var self__ = this;
var _27502__$1 = this;
return self__.meta27501;
});

cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async27500.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async27500.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta27501","meta27501",-590493430,null)], null);
});

cljs.core.async.t_cljs$core$async27500.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27500.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27500";

cljs.core.async.t_cljs$core$async27500.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async27500");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async27500.
 */
cljs.core.async.__GT_t_cljs$core$async27500 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async27500(p__$1,ch__$1,meta27501){
return (new cljs.core.async.t_cljs$core$async27500(p__$1,ch__$1,meta27501));
});

}

return (new cljs.core.async.t_cljs$core$async27500(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__27504 = arguments.length;
switch (G__27504) {
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
var c__26017__auto___27544 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27544,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27544,out){
return (function (state_27525){
var state_val_27526 = (state_27525[(1)]);
if((state_val_27526 === (7))){
var inst_27521 = (state_27525[(2)]);
var state_27525__$1 = state_27525;
var statearr_27527_27545 = state_27525__$1;
(statearr_27527_27545[(2)] = inst_27521);

(statearr_27527_27545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (1))){
var state_27525__$1 = state_27525;
var statearr_27528_27546 = state_27525__$1;
(statearr_27528_27546[(2)] = null);

(statearr_27528_27546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (4))){
var inst_27507 = (state_27525[(7)]);
var inst_27507__$1 = (state_27525[(2)]);
var inst_27508 = (inst_27507__$1 == null);
var state_27525__$1 = (function (){var statearr_27529 = state_27525;
(statearr_27529[(7)] = inst_27507__$1);

return statearr_27529;
})();
if(cljs.core.truth_(inst_27508)){
var statearr_27530_27547 = state_27525__$1;
(statearr_27530_27547[(1)] = (5));

} else {
var statearr_27531_27548 = state_27525__$1;
(statearr_27531_27548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (6))){
var inst_27507 = (state_27525[(7)]);
var inst_27512 = p.call(null,inst_27507);
var state_27525__$1 = state_27525;
if(cljs.core.truth_(inst_27512)){
var statearr_27532_27549 = state_27525__$1;
(statearr_27532_27549[(1)] = (8));

} else {
var statearr_27533_27550 = state_27525__$1;
(statearr_27533_27550[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (3))){
var inst_27523 = (state_27525[(2)]);
var state_27525__$1 = state_27525;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27525__$1,inst_27523);
} else {
if((state_val_27526 === (2))){
var state_27525__$1 = state_27525;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27525__$1,(4),ch);
} else {
if((state_val_27526 === (11))){
var inst_27515 = (state_27525[(2)]);
var state_27525__$1 = state_27525;
var statearr_27534_27551 = state_27525__$1;
(statearr_27534_27551[(2)] = inst_27515);

(statearr_27534_27551[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (9))){
var state_27525__$1 = state_27525;
var statearr_27535_27552 = state_27525__$1;
(statearr_27535_27552[(2)] = null);

(statearr_27535_27552[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (5))){
var inst_27510 = cljs.core.async.close_BANG_.call(null,out);
var state_27525__$1 = state_27525;
var statearr_27536_27553 = state_27525__$1;
(statearr_27536_27553[(2)] = inst_27510);

(statearr_27536_27553[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (10))){
var inst_27518 = (state_27525[(2)]);
var state_27525__$1 = (function (){var statearr_27537 = state_27525;
(statearr_27537[(8)] = inst_27518);

return statearr_27537;
})();
var statearr_27538_27554 = state_27525__$1;
(statearr_27538_27554[(2)] = null);

(statearr_27538_27554[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27526 === (8))){
var inst_27507 = (state_27525[(7)]);
var state_27525__$1 = state_27525;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27525__$1,(11),out,inst_27507);
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
});})(c__26017__auto___27544,out))
;
return ((function (switch__25929__auto__,c__26017__auto___27544,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_27539 = [null,null,null,null,null,null,null,null,null];
(statearr_27539[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_27539[(1)] = (1));

return statearr_27539;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_27525){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27525);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27540){if((e27540 instanceof Object)){
var ex__25933__auto__ = e27540;
var statearr_27541_27555 = state_27525;
(statearr_27541_27555[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27525);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27540;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27556 = state_27525;
state_27525 = G__27556;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_27525){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_27525);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27544,out))
})();
var state__26019__auto__ = (function (){var statearr_27542 = f__26018__auto__.call(null);
(statearr_27542[(6)] = c__26017__auto___27544);

return statearr_27542;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27544,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__27558 = arguments.length;
switch (G__27558) {
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
return (function (state_27621){
var state_val_27622 = (state_27621[(1)]);
if((state_val_27622 === (7))){
var inst_27617 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27623_27661 = state_27621__$1;
(statearr_27623_27661[(2)] = inst_27617);

(statearr_27623_27661[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (20))){
var inst_27587 = (state_27621[(7)]);
var inst_27598 = (state_27621[(2)]);
var inst_27599 = cljs.core.next.call(null,inst_27587);
var inst_27573 = inst_27599;
var inst_27574 = null;
var inst_27575 = (0);
var inst_27576 = (0);
var state_27621__$1 = (function (){var statearr_27624 = state_27621;
(statearr_27624[(8)] = inst_27598);

(statearr_27624[(9)] = inst_27576);

(statearr_27624[(10)] = inst_27574);

(statearr_27624[(11)] = inst_27573);

(statearr_27624[(12)] = inst_27575);

return statearr_27624;
})();
var statearr_27625_27662 = state_27621__$1;
(statearr_27625_27662[(2)] = null);

(statearr_27625_27662[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (1))){
var state_27621__$1 = state_27621;
var statearr_27626_27663 = state_27621__$1;
(statearr_27626_27663[(2)] = null);

(statearr_27626_27663[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (4))){
var inst_27562 = (state_27621[(13)]);
var inst_27562__$1 = (state_27621[(2)]);
var inst_27563 = (inst_27562__$1 == null);
var state_27621__$1 = (function (){var statearr_27627 = state_27621;
(statearr_27627[(13)] = inst_27562__$1);

return statearr_27627;
})();
if(cljs.core.truth_(inst_27563)){
var statearr_27628_27664 = state_27621__$1;
(statearr_27628_27664[(1)] = (5));

} else {
var statearr_27629_27665 = state_27621__$1;
(statearr_27629_27665[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (15))){
var state_27621__$1 = state_27621;
var statearr_27633_27666 = state_27621__$1;
(statearr_27633_27666[(2)] = null);

(statearr_27633_27666[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (21))){
var state_27621__$1 = state_27621;
var statearr_27634_27667 = state_27621__$1;
(statearr_27634_27667[(2)] = null);

(statearr_27634_27667[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (13))){
var inst_27576 = (state_27621[(9)]);
var inst_27574 = (state_27621[(10)]);
var inst_27573 = (state_27621[(11)]);
var inst_27575 = (state_27621[(12)]);
var inst_27583 = (state_27621[(2)]);
var inst_27584 = (inst_27576 + (1));
var tmp27630 = inst_27574;
var tmp27631 = inst_27573;
var tmp27632 = inst_27575;
var inst_27573__$1 = tmp27631;
var inst_27574__$1 = tmp27630;
var inst_27575__$1 = tmp27632;
var inst_27576__$1 = inst_27584;
var state_27621__$1 = (function (){var statearr_27635 = state_27621;
(statearr_27635[(9)] = inst_27576__$1);

(statearr_27635[(14)] = inst_27583);

(statearr_27635[(10)] = inst_27574__$1);

(statearr_27635[(11)] = inst_27573__$1);

(statearr_27635[(12)] = inst_27575__$1);

return statearr_27635;
})();
var statearr_27636_27668 = state_27621__$1;
(statearr_27636_27668[(2)] = null);

(statearr_27636_27668[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (22))){
var state_27621__$1 = state_27621;
var statearr_27637_27669 = state_27621__$1;
(statearr_27637_27669[(2)] = null);

(statearr_27637_27669[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (6))){
var inst_27562 = (state_27621[(13)]);
var inst_27571 = f.call(null,inst_27562);
var inst_27572 = cljs.core.seq.call(null,inst_27571);
var inst_27573 = inst_27572;
var inst_27574 = null;
var inst_27575 = (0);
var inst_27576 = (0);
var state_27621__$1 = (function (){var statearr_27638 = state_27621;
(statearr_27638[(9)] = inst_27576);

(statearr_27638[(10)] = inst_27574);

(statearr_27638[(11)] = inst_27573);

(statearr_27638[(12)] = inst_27575);

return statearr_27638;
})();
var statearr_27639_27670 = state_27621__$1;
(statearr_27639_27670[(2)] = null);

(statearr_27639_27670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (17))){
var inst_27587 = (state_27621[(7)]);
var inst_27591 = cljs.core.chunk_first.call(null,inst_27587);
var inst_27592 = cljs.core.chunk_rest.call(null,inst_27587);
var inst_27593 = cljs.core.count.call(null,inst_27591);
var inst_27573 = inst_27592;
var inst_27574 = inst_27591;
var inst_27575 = inst_27593;
var inst_27576 = (0);
var state_27621__$1 = (function (){var statearr_27640 = state_27621;
(statearr_27640[(9)] = inst_27576);

(statearr_27640[(10)] = inst_27574);

(statearr_27640[(11)] = inst_27573);

(statearr_27640[(12)] = inst_27575);

return statearr_27640;
})();
var statearr_27641_27671 = state_27621__$1;
(statearr_27641_27671[(2)] = null);

(statearr_27641_27671[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (3))){
var inst_27619 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27621__$1,inst_27619);
} else {
if((state_val_27622 === (12))){
var inst_27607 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27642_27672 = state_27621__$1;
(statearr_27642_27672[(2)] = inst_27607);

(statearr_27642_27672[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (2))){
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27621__$1,(4),in$);
} else {
if((state_val_27622 === (23))){
var inst_27615 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27643_27673 = state_27621__$1;
(statearr_27643_27673[(2)] = inst_27615);

(statearr_27643_27673[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (19))){
var inst_27602 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27644_27674 = state_27621__$1;
(statearr_27644_27674[(2)] = inst_27602);

(statearr_27644_27674[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (11))){
var inst_27587 = (state_27621[(7)]);
var inst_27573 = (state_27621[(11)]);
var inst_27587__$1 = cljs.core.seq.call(null,inst_27573);
var state_27621__$1 = (function (){var statearr_27645 = state_27621;
(statearr_27645[(7)] = inst_27587__$1);

return statearr_27645;
})();
if(inst_27587__$1){
var statearr_27646_27675 = state_27621__$1;
(statearr_27646_27675[(1)] = (14));

} else {
var statearr_27647_27676 = state_27621__$1;
(statearr_27647_27676[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (9))){
var inst_27609 = (state_27621[(2)]);
var inst_27610 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_27621__$1 = (function (){var statearr_27648 = state_27621;
(statearr_27648[(15)] = inst_27609);

return statearr_27648;
})();
if(cljs.core.truth_(inst_27610)){
var statearr_27649_27677 = state_27621__$1;
(statearr_27649_27677[(1)] = (21));

} else {
var statearr_27650_27678 = state_27621__$1;
(statearr_27650_27678[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (5))){
var inst_27565 = cljs.core.async.close_BANG_.call(null,out);
var state_27621__$1 = state_27621;
var statearr_27651_27679 = state_27621__$1;
(statearr_27651_27679[(2)] = inst_27565);

(statearr_27651_27679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (14))){
var inst_27587 = (state_27621[(7)]);
var inst_27589 = cljs.core.chunked_seq_QMARK_.call(null,inst_27587);
var state_27621__$1 = state_27621;
if(inst_27589){
var statearr_27652_27680 = state_27621__$1;
(statearr_27652_27680[(1)] = (17));

} else {
var statearr_27653_27681 = state_27621__$1;
(statearr_27653_27681[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (16))){
var inst_27605 = (state_27621[(2)]);
var state_27621__$1 = state_27621;
var statearr_27654_27682 = state_27621__$1;
(statearr_27654_27682[(2)] = inst_27605);

(statearr_27654_27682[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27622 === (10))){
var inst_27576 = (state_27621[(9)]);
var inst_27574 = (state_27621[(10)]);
var inst_27581 = cljs.core._nth.call(null,inst_27574,inst_27576);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27621__$1,(13),out,inst_27581);
} else {
if((state_val_27622 === (18))){
var inst_27587 = (state_27621[(7)]);
var inst_27596 = cljs.core.first.call(null,inst_27587);
var state_27621__$1 = state_27621;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27621__$1,(20),out,inst_27596);
} else {
if((state_val_27622 === (8))){
var inst_27576 = (state_27621[(9)]);
var inst_27575 = (state_27621[(12)]);
var inst_27578 = (inst_27576 < inst_27575);
var inst_27579 = inst_27578;
var state_27621__$1 = state_27621;
if(cljs.core.truth_(inst_27579)){
var statearr_27655_27683 = state_27621__$1;
(statearr_27655_27683[(1)] = (10));

} else {
var statearr_27656_27684 = state_27621__$1;
(statearr_27656_27684[(1)] = (11));

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
var statearr_27657 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27657[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__);

(statearr_27657[(1)] = (1));

return statearr_27657;
});
var cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____1 = (function (state_27621){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27621);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27658){if((e27658 instanceof Object)){
var ex__25933__auto__ = e27658;
var statearr_27659_27685 = state_27621;
(statearr_27659_27685[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27621);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27658;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27686 = state_27621;
state_27621 = G__27686;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__ = function(state_27621){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____1.call(this,state_27621);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__25930__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto__))
})();
var state__26019__auto__ = (function (){var statearr_27660 = f__26018__auto__.call(null);
(statearr_27660[(6)] = c__26017__auto__);

return statearr_27660;
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
var G__27688 = arguments.length;
switch (G__27688) {
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
var G__27691 = arguments.length;
switch (G__27691) {
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
var G__27694 = arguments.length;
switch (G__27694) {
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
var c__26017__auto___27741 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27741,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27741,out){
return (function (state_27718){
var state_val_27719 = (state_27718[(1)]);
if((state_val_27719 === (7))){
var inst_27713 = (state_27718[(2)]);
var state_27718__$1 = state_27718;
var statearr_27720_27742 = state_27718__$1;
(statearr_27720_27742[(2)] = inst_27713);

(statearr_27720_27742[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (1))){
var inst_27695 = null;
var state_27718__$1 = (function (){var statearr_27721 = state_27718;
(statearr_27721[(7)] = inst_27695);

return statearr_27721;
})();
var statearr_27722_27743 = state_27718__$1;
(statearr_27722_27743[(2)] = null);

(statearr_27722_27743[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (4))){
var inst_27698 = (state_27718[(8)]);
var inst_27698__$1 = (state_27718[(2)]);
var inst_27699 = (inst_27698__$1 == null);
var inst_27700 = cljs.core.not.call(null,inst_27699);
var state_27718__$1 = (function (){var statearr_27723 = state_27718;
(statearr_27723[(8)] = inst_27698__$1);

return statearr_27723;
})();
if(inst_27700){
var statearr_27724_27744 = state_27718__$1;
(statearr_27724_27744[(1)] = (5));

} else {
var statearr_27725_27745 = state_27718__$1;
(statearr_27725_27745[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (6))){
var state_27718__$1 = state_27718;
var statearr_27726_27746 = state_27718__$1;
(statearr_27726_27746[(2)] = null);

(statearr_27726_27746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (3))){
var inst_27715 = (state_27718[(2)]);
var inst_27716 = cljs.core.async.close_BANG_.call(null,out);
var state_27718__$1 = (function (){var statearr_27727 = state_27718;
(statearr_27727[(9)] = inst_27715);

return statearr_27727;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27718__$1,inst_27716);
} else {
if((state_val_27719 === (2))){
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27718__$1,(4),ch);
} else {
if((state_val_27719 === (11))){
var inst_27698 = (state_27718[(8)]);
var inst_27707 = (state_27718[(2)]);
var inst_27695 = inst_27698;
var state_27718__$1 = (function (){var statearr_27728 = state_27718;
(statearr_27728[(10)] = inst_27707);

(statearr_27728[(7)] = inst_27695);

return statearr_27728;
})();
var statearr_27729_27747 = state_27718__$1;
(statearr_27729_27747[(2)] = null);

(statearr_27729_27747[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (9))){
var inst_27698 = (state_27718[(8)]);
var state_27718__$1 = state_27718;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27718__$1,(11),out,inst_27698);
} else {
if((state_val_27719 === (5))){
var inst_27698 = (state_27718[(8)]);
var inst_27695 = (state_27718[(7)]);
var inst_27702 = cljs.core._EQ_.call(null,inst_27698,inst_27695);
var state_27718__$1 = state_27718;
if(inst_27702){
var statearr_27731_27748 = state_27718__$1;
(statearr_27731_27748[(1)] = (8));

} else {
var statearr_27732_27749 = state_27718__$1;
(statearr_27732_27749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (10))){
var inst_27710 = (state_27718[(2)]);
var state_27718__$1 = state_27718;
var statearr_27733_27750 = state_27718__$1;
(statearr_27733_27750[(2)] = inst_27710);

(statearr_27733_27750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27719 === (8))){
var inst_27695 = (state_27718[(7)]);
var tmp27730 = inst_27695;
var inst_27695__$1 = tmp27730;
var state_27718__$1 = (function (){var statearr_27734 = state_27718;
(statearr_27734[(7)] = inst_27695__$1);

return statearr_27734;
})();
var statearr_27735_27751 = state_27718__$1;
(statearr_27735_27751[(2)] = null);

(statearr_27735_27751[(1)] = (2));


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
});})(c__26017__auto___27741,out))
;
return ((function (switch__25929__auto__,c__26017__auto___27741,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_27736 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_27736[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_27736[(1)] = (1));

return statearr_27736;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_27718){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27737){if((e27737 instanceof Object)){
var ex__25933__auto__ = e27737;
var statearr_27738_27752 = state_27718;
(statearr_27738_27752[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27737;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27753 = state_27718;
state_27718 = G__27753;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_27718){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_27718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27741,out))
})();
var state__26019__auto__ = (function (){var statearr_27739 = f__26018__auto__.call(null);
(statearr_27739[(6)] = c__26017__auto___27741);

return statearr_27739;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27741,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__27755 = arguments.length;
switch (G__27755) {
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
var c__26017__auto___27821 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27821,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27821,out){
return (function (state_27793){
var state_val_27794 = (state_27793[(1)]);
if((state_val_27794 === (7))){
var inst_27789 = (state_27793[(2)]);
var state_27793__$1 = state_27793;
var statearr_27795_27822 = state_27793__$1;
(statearr_27795_27822[(2)] = inst_27789);

(statearr_27795_27822[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (1))){
var inst_27756 = (new Array(n));
var inst_27757 = inst_27756;
var inst_27758 = (0);
var state_27793__$1 = (function (){var statearr_27796 = state_27793;
(statearr_27796[(7)] = inst_27757);

(statearr_27796[(8)] = inst_27758);

return statearr_27796;
})();
var statearr_27797_27823 = state_27793__$1;
(statearr_27797_27823[(2)] = null);

(statearr_27797_27823[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (4))){
var inst_27761 = (state_27793[(9)]);
var inst_27761__$1 = (state_27793[(2)]);
var inst_27762 = (inst_27761__$1 == null);
var inst_27763 = cljs.core.not.call(null,inst_27762);
var state_27793__$1 = (function (){var statearr_27798 = state_27793;
(statearr_27798[(9)] = inst_27761__$1);

return statearr_27798;
})();
if(inst_27763){
var statearr_27799_27824 = state_27793__$1;
(statearr_27799_27824[(1)] = (5));

} else {
var statearr_27800_27825 = state_27793__$1;
(statearr_27800_27825[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (15))){
var inst_27783 = (state_27793[(2)]);
var state_27793__$1 = state_27793;
var statearr_27801_27826 = state_27793__$1;
(statearr_27801_27826[(2)] = inst_27783);

(statearr_27801_27826[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (13))){
var state_27793__$1 = state_27793;
var statearr_27802_27827 = state_27793__$1;
(statearr_27802_27827[(2)] = null);

(statearr_27802_27827[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (6))){
var inst_27758 = (state_27793[(8)]);
var inst_27779 = (inst_27758 > (0));
var state_27793__$1 = state_27793;
if(cljs.core.truth_(inst_27779)){
var statearr_27803_27828 = state_27793__$1;
(statearr_27803_27828[(1)] = (12));

} else {
var statearr_27804_27829 = state_27793__$1;
(statearr_27804_27829[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (3))){
var inst_27791 = (state_27793[(2)]);
var state_27793__$1 = state_27793;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27793__$1,inst_27791);
} else {
if((state_val_27794 === (12))){
var inst_27757 = (state_27793[(7)]);
var inst_27781 = cljs.core.vec.call(null,inst_27757);
var state_27793__$1 = state_27793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27793__$1,(15),out,inst_27781);
} else {
if((state_val_27794 === (2))){
var state_27793__$1 = state_27793;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27793__$1,(4),ch);
} else {
if((state_val_27794 === (11))){
var inst_27773 = (state_27793[(2)]);
var inst_27774 = (new Array(n));
var inst_27757 = inst_27774;
var inst_27758 = (0);
var state_27793__$1 = (function (){var statearr_27805 = state_27793;
(statearr_27805[(7)] = inst_27757);

(statearr_27805[(10)] = inst_27773);

(statearr_27805[(8)] = inst_27758);

return statearr_27805;
})();
var statearr_27806_27830 = state_27793__$1;
(statearr_27806_27830[(2)] = null);

(statearr_27806_27830[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (9))){
var inst_27757 = (state_27793[(7)]);
var inst_27771 = cljs.core.vec.call(null,inst_27757);
var state_27793__$1 = state_27793;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27793__$1,(11),out,inst_27771);
} else {
if((state_val_27794 === (5))){
var inst_27757 = (state_27793[(7)]);
var inst_27761 = (state_27793[(9)]);
var inst_27758 = (state_27793[(8)]);
var inst_27766 = (state_27793[(11)]);
var inst_27765 = (inst_27757[inst_27758] = inst_27761);
var inst_27766__$1 = (inst_27758 + (1));
var inst_27767 = (inst_27766__$1 < n);
var state_27793__$1 = (function (){var statearr_27807 = state_27793;
(statearr_27807[(12)] = inst_27765);

(statearr_27807[(11)] = inst_27766__$1);

return statearr_27807;
})();
if(cljs.core.truth_(inst_27767)){
var statearr_27808_27831 = state_27793__$1;
(statearr_27808_27831[(1)] = (8));

} else {
var statearr_27809_27832 = state_27793__$1;
(statearr_27809_27832[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (14))){
var inst_27786 = (state_27793[(2)]);
var inst_27787 = cljs.core.async.close_BANG_.call(null,out);
var state_27793__$1 = (function (){var statearr_27811 = state_27793;
(statearr_27811[(13)] = inst_27786);

return statearr_27811;
})();
var statearr_27812_27833 = state_27793__$1;
(statearr_27812_27833[(2)] = inst_27787);

(statearr_27812_27833[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (10))){
var inst_27777 = (state_27793[(2)]);
var state_27793__$1 = state_27793;
var statearr_27813_27834 = state_27793__$1;
(statearr_27813_27834[(2)] = inst_27777);

(statearr_27813_27834[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27794 === (8))){
var inst_27757 = (state_27793[(7)]);
var inst_27766 = (state_27793[(11)]);
var tmp27810 = inst_27757;
var inst_27757__$1 = tmp27810;
var inst_27758 = inst_27766;
var state_27793__$1 = (function (){var statearr_27814 = state_27793;
(statearr_27814[(7)] = inst_27757__$1);

(statearr_27814[(8)] = inst_27758);

return statearr_27814;
})();
var statearr_27815_27835 = state_27793__$1;
(statearr_27815_27835[(2)] = null);

(statearr_27815_27835[(1)] = (2));


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
});})(c__26017__auto___27821,out))
;
return ((function (switch__25929__auto__,c__26017__auto___27821,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_27816 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27816[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_27816[(1)] = (1));

return statearr_27816;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_27793){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27793);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27817){if((e27817 instanceof Object)){
var ex__25933__auto__ = e27817;
var statearr_27818_27836 = state_27793;
(statearr_27818_27836[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27793);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27817;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27837 = state_27793;
state_27793 = G__27837;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_27793){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_27793);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27821,out))
})();
var state__26019__auto__ = (function (){var statearr_27819 = f__26018__auto__.call(null);
(statearr_27819[(6)] = c__26017__auto___27821);

return statearr_27819;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27821,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__27839 = arguments.length;
switch (G__27839) {
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
var c__26017__auto___27909 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__26017__auto___27909,out){
return (function (){
var f__26018__auto__ = (function (){var switch__25929__auto__ = ((function (c__26017__auto___27909,out){
return (function (state_27881){
var state_val_27882 = (state_27881[(1)]);
if((state_val_27882 === (7))){
var inst_27877 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27883_27910 = state_27881__$1;
(statearr_27883_27910[(2)] = inst_27877);

(statearr_27883_27910[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (1))){
var inst_27840 = [];
var inst_27841 = inst_27840;
var inst_27842 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_27881__$1 = (function (){var statearr_27884 = state_27881;
(statearr_27884[(7)] = inst_27841);

(statearr_27884[(8)] = inst_27842);

return statearr_27884;
})();
var statearr_27885_27911 = state_27881__$1;
(statearr_27885_27911[(2)] = null);

(statearr_27885_27911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (4))){
var inst_27845 = (state_27881[(9)]);
var inst_27845__$1 = (state_27881[(2)]);
var inst_27846 = (inst_27845__$1 == null);
var inst_27847 = cljs.core.not.call(null,inst_27846);
var state_27881__$1 = (function (){var statearr_27886 = state_27881;
(statearr_27886[(9)] = inst_27845__$1);

return statearr_27886;
})();
if(inst_27847){
var statearr_27887_27912 = state_27881__$1;
(statearr_27887_27912[(1)] = (5));

} else {
var statearr_27888_27913 = state_27881__$1;
(statearr_27888_27913[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (15))){
var inst_27871 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27889_27914 = state_27881__$1;
(statearr_27889_27914[(2)] = inst_27871);

(statearr_27889_27914[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (13))){
var state_27881__$1 = state_27881;
var statearr_27890_27915 = state_27881__$1;
(statearr_27890_27915[(2)] = null);

(statearr_27890_27915[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (6))){
var inst_27841 = (state_27881[(7)]);
var inst_27866 = inst_27841.length;
var inst_27867 = (inst_27866 > (0));
var state_27881__$1 = state_27881;
if(cljs.core.truth_(inst_27867)){
var statearr_27891_27916 = state_27881__$1;
(statearr_27891_27916[(1)] = (12));

} else {
var statearr_27892_27917 = state_27881__$1;
(statearr_27892_27917[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (3))){
var inst_27879 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27881__$1,inst_27879);
} else {
if((state_val_27882 === (12))){
var inst_27841 = (state_27881[(7)]);
var inst_27869 = cljs.core.vec.call(null,inst_27841);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27881__$1,(15),out,inst_27869);
} else {
if((state_val_27882 === (2))){
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27881__$1,(4),ch);
} else {
if((state_val_27882 === (11))){
var inst_27849 = (state_27881[(10)]);
var inst_27845 = (state_27881[(9)]);
var inst_27859 = (state_27881[(2)]);
var inst_27860 = [];
var inst_27861 = inst_27860.push(inst_27845);
var inst_27841 = inst_27860;
var inst_27842 = inst_27849;
var state_27881__$1 = (function (){var statearr_27893 = state_27881;
(statearr_27893[(7)] = inst_27841);

(statearr_27893[(8)] = inst_27842);

(statearr_27893[(11)] = inst_27861);

(statearr_27893[(12)] = inst_27859);

return statearr_27893;
})();
var statearr_27894_27918 = state_27881__$1;
(statearr_27894_27918[(2)] = null);

(statearr_27894_27918[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (9))){
var inst_27841 = (state_27881[(7)]);
var inst_27857 = cljs.core.vec.call(null,inst_27841);
var state_27881__$1 = state_27881;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27881__$1,(11),out,inst_27857);
} else {
if((state_val_27882 === (5))){
var inst_27849 = (state_27881[(10)]);
var inst_27842 = (state_27881[(8)]);
var inst_27845 = (state_27881[(9)]);
var inst_27849__$1 = f.call(null,inst_27845);
var inst_27850 = cljs.core._EQ_.call(null,inst_27849__$1,inst_27842);
var inst_27851 = cljs.core.keyword_identical_QMARK_.call(null,inst_27842,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_27852 = ((inst_27850) || (inst_27851));
var state_27881__$1 = (function (){var statearr_27895 = state_27881;
(statearr_27895[(10)] = inst_27849__$1);

return statearr_27895;
})();
if(cljs.core.truth_(inst_27852)){
var statearr_27896_27919 = state_27881__$1;
(statearr_27896_27919[(1)] = (8));

} else {
var statearr_27897_27920 = state_27881__$1;
(statearr_27897_27920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (14))){
var inst_27874 = (state_27881[(2)]);
var inst_27875 = cljs.core.async.close_BANG_.call(null,out);
var state_27881__$1 = (function (){var statearr_27899 = state_27881;
(statearr_27899[(13)] = inst_27874);

return statearr_27899;
})();
var statearr_27900_27921 = state_27881__$1;
(statearr_27900_27921[(2)] = inst_27875);

(statearr_27900_27921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (10))){
var inst_27864 = (state_27881[(2)]);
var state_27881__$1 = state_27881;
var statearr_27901_27922 = state_27881__$1;
(statearr_27901_27922[(2)] = inst_27864);

(statearr_27901_27922[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27882 === (8))){
var inst_27849 = (state_27881[(10)]);
var inst_27841 = (state_27881[(7)]);
var inst_27845 = (state_27881[(9)]);
var inst_27854 = inst_27841.push(inst_27845);
var tmp27898 = inst_27841;
var inst_27841__$1 = tmp27898;
var inst_27842 = inst_27849;
var state_27881__$1 = (function (){var statearr_27902 = state_27881;
(statearr_27902[(7)] = inst_27841__$1);

(statearr_27902[(8)] = inst_27842);

(statearr_27902[(14)] = inst_27854);

return statearr_27902;
})();
var statearr_27903_27923 = state_27881__$1;
(statearr_27903_27923[(2)] = null);

(statearr_27903_27923[(1)] = (2));


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
});})(c__26017__auto___27909,out))
;
return ((function (switch__25929__auto__,c__26017__auto___27909,out){
return (function() {
var cljs$core$async$state_machine__25930__auto__ = null;
var cljs$core$async$state_machine__25930__auto____0 = (function (){
var statearr_27904 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27904[(0)] = cljs$core$async$state_machine__25930__auto__);

(statearr_27904[(1)] = (1));

return statearr_27904;
});
var cljs$core$async$state_machine__25930__auto____1 = (function (state_27881){
while(true){
var ret_value__25931__auto__ = (function (){try{while(true){
var result__25932__auto__ = switch__25929__auto__.call(null,state_27881);
if(cljs.core.keyword_identical_QMARK_.call(null,result__25932__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25932__auto__;
}
break;
}
}catch (e27905){if((e27905 instanceof Object)){
var ex__25933__auto__ = e27905;
var statearr_27906_27924 = state_27881;
(statearr_27906_27924[(5)] = ex__25933__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27881);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27905;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__25931__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27925 = state_27881;
state_27881 = G__27925;
continue;
} else {
return ret_value__25931__auto__;
}
break;
}
});
cljs$core$async$state_machine__25930__auto__ = function(state_27881){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__25930__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__25930__auto____1.call(this,state_27881);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__25930__auto____0;
cljs$core$async$state_machine__25930__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__25930__auto____1;
return cljs$core$async$state_machine__25930__auto__;
})()
;})(switch__25929__auto__,c__26017__auto___27909,out))
})();
var state__26019__auto__ = (function (){var statearr_27907 = f__26018__auto__.call(null);
(statearr_27907[(6)] = c__26017__auto___27909);

return statearr_27907;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__26019__auto__);
});})(c__26017__auto___27909,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1547389518213
