var Ai = {};
// @__NO_SIDE_EFFECTS__
function Xe(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const K = Ai.NODE_ENV !== "production" ? Object.freeze({}) : {}, wt = Ai.NODE_ENV !== "production" ? Object.freeze([]) : [], ee = () => {
}, Pi = () => !1, Xt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), En = (e) => e.startsWith("onUpdate:"), z = Object.assign, bo = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, er = Object.prototype.hasOwnProperty, F = (e, t) => er.call(e, t), $ = Array.isArray, pt = (e) => $n(e) === "[object Map]", Ii = (e) => $n(e) === "[object Set]", P = (e) => typeof e == "function", Y = (e) => typeof e == "string", ct = (e) => typeof e == "symbol", W = (e) => e !== null && typeof e == "object", yo = (e) => (W(e) || P(e)) && P(e.then) && P(e.catch), Mi = Object.prototype.toString, $n = (e) => Mi.call(e), No = (e) => $n(e).slice(8, -1), An = (e) => $n(e) === "[object Object]", vo = (e) => Y(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = /* @__PURE__ */ Xe(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), tr = /* @__PURE__ */ Xe(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Pn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return ((n) => t[n] || (t[n] = e(n)));
}, nr = /-\w/g, _e = Pn(
  (e) => e.replace(nr, (t) => t.slice(1).toUpperCase())
), or = /\B([A-Z])/g, ye = Pn(
  (e) => e.replace(or, "-$1").toLowerCase()
), In = Pn((e) => e.charAt(0).toUpperCase() + e.slice(1)), at = Pn(
  (e) => e ? `on${In(e)}` : ""
), ht = (e, t) => !Object.is(e, t), It = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, bn = (e, t, n, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: n
  });
}, ir = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Go = (e) => {
  const t = Y(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let qo;
const Zt = () => qo || (qo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xt(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const o = e[n], i = Y(o) ? cr(o) : xt(o);
      if (i)
        for (const s in i)
          t[s] = i[s];
    }
    return t;
  } else if (Y(e) || W(e))
    return e;
}
const sr = /;(?![^(]*\))/g, rr = /:([^]+)/, lr = /\/\*[^]*?\*\//g;
function cr(e) {
  const t = {};
  return e.replace(lr, "").split(sr).forEach((n) => {
    if (n) {
      const o = n.split(rr);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function Oo(e) {
  let t = "";
  if (Y(e))
    t = e;
  else if ($(e))
    for (let n = 0; n < e.length; n++) {
      const o = Oo(e[n]);
      o && (t += o + " ");
    }
  else if (W(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const fr = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ur = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", ar = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", dr = /* @__PURE__ */ Xe(fr), pr = /* @__PURE__ */ Xe(ur), hr = /* @__PURE__ */ Xe(ar), _r = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", gr = /* @__PURE__ */ Xe(_r);
function Ri(e) {
  return !!e || e === "";
}
const Fi = (e) => !!(e && e.__v_isRef === !0), ji = (e) => Y(e) ? e : e == null ? "" : $(e) || W(e) && (e.toString === Mi || !P(e.toString)) ? Fi(e) ? ji(e.value) : JSON.stringify(e, Hi, 2) : String(e), Hi = (e, t) => Fi(t) ? Hi(e, t.value) : pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [o, i], s) => (n[Wn(o, s) + " =>"] = i, n),
    {}
  )
} : Ii(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Wn(n))
} : ct(t) ? Wn(t) : W(t) && !$(t) && !An(t) ? String(t) : t, Wn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    ct(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
var q = {};
function $e(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let pe;
class mr {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = pe, !t && pe && (this.index = (pe.scopes || (pe.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = pe;
      try {
        return pe = this, t();
      } finally {
        pe = n;
      }
    } else q.NODE_ENV !== "production" && $e("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = pe, pe = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (pe = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, o;
      for (n = 0, o = this.effects.length; n < o; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, o = this.cleanups.length; n < o; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, o = this.scopes.length; n < o; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Er() {
  return pe;
}
let U;
const Gn = /* @__PURE__ */ new WeakSet();
class Li {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, pe && pe.active && pe.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Gn.has(this) && (Gn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Ui(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Jo(this), Bi(this);
    const t = U, n = Ce;
    U = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      q.NODE_ENV !== "production" && U !== this && $e(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ki(this), U = t, Ce = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Do(t);
      this.deps = this.depsTail = void 0, Jo(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Gn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    oo(this) && this.run();
  }
  get dirty() {
    return oo(this);
  }
}
let ki = 0, kt, Ut;
function Ui(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ut, Ut = e;
    return;
  }
  e.next = kt, kt = e;
}
function wo() {
  ki++;
}
function xo() {
  if (--ki > 0)
    return;
  if (Ut) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kt; ) {
    let t = kt;
    for (kt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Bi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ki(e) {
  let t, n = e.depsTail, o = n;
  for (; o; ) {
    const i = o.prevDep;
    o.version === -1 ? (o === n && (n = i), Do(o), br(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = i;
  }
  e.deps = t, e.depsTail = n;
}
function oo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Wi(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Wi(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gt) || (e.globalVersion = Gt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !oo(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = U, o = Ce;
  U = e, Ce = !0;
  try {
    Bi(e);
    const i = e.fn(e._value);
    (t.version === 0 || ht(i, e._value)) && (e.flags |= 128, e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    U = n, Ce = o, Ki(e), e.flags &= -3;
  }
}
function Do(e, t = !1) {
  const { dep: n, prevSub: o, nextSub: i } = e;
  if (o && (o.nextSub = i, e.prevSub = void 0), i && (i.prevSub = o, e.nextSub = void 0), q.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = o, !o && n.computed)) {
    n.computed.flags &= -5;
    for (let s = n.computed.deps; s; s = s.nextDep)
      Do(s, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function br(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const Gi = [];
function Ae() {
  Gi.push(Ce), Ce = !1;
}
function Pe() {
  const e = Gi.pop();
  Ce = e === void 0 ? !0 : e;
}
function Jo(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = U;
    U = void 0;
    try {
      t();
    } finally {
      U = n;
    }
  }
}
let Gt = 0;
class yr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class qi {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, q.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!U || !Ce || U === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== U)
      n = this.activeLink = new yr(U, this), U.deps ? (n.prevDep = U.depsTail, U.depsTail.nextDep = n, U.depsTail = n) : U.deps = U.depsTail = n, Ji(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const o = n.nextDep;
      o.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = o), n.prevDep = U.depsTail, n.nextDep = void 0, U.depsTail.nextDep = n, U.depsTail = n, U.deps === n && (U.deps = o);
    }
    return q.NODE_ENV !== "production" && U.onTrack && U.onTrack(
      z(
        {
          effect: U
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Gt++, this.notify(t);
  }
  notify(t) {
    wo();
    try {
      if (q.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            z(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      xo();
    }
  }
}
function Ji(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        Ji(o);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), q.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const io = /* @__PURE__ */ new WeakMap(), _t = /* @__PURE__ */ Symbol(
  q.NODE_ENV !== "production" ? "Object iterate" : ""
), so = /* @__PURE__ */ Symbol(
  q.NODE_ENV !== "production" ? "Map keys iterate" : ""
), qt = /* @__PURE__ */ Symbol(
  q.NODE_ENV !== "production" ? "Array iterate" : ""
);
function Q(e, t, n) {
  if (Ce && U) {
    let o = io.get(e);
    o || io.set(e, o = /* @__PURE__ */ new Map());
    let i = o.get(n);
    i || (o.set(n, i = new qi()), i.map = o, i.key = n), q.NODE_ENV !== "production" ? i.track({
      target: e,
      type: t,
      key: n
    }) : i.track();
  }
}
function Le(e, t, n, o, i, s) {
  const r = io.get(e);
  if (!r) {
    Gt++;
    return;
  }
  const l = (f) => {
    f && (q.NODE_ENV !== "production" ? f.trigger({
      target: e,
      type: t,
      key: n,
      newValue: o,
      oldValue: i,
      oldTarget: s
    }) : f.trigger());
  };
  if (wo(), t === "clear")
    r.forEach(l);
  else {
    const f = $(e), h = f && vo(n);
    if (f && n === "length") {
      const d = Number(o);
      r.forEach((u, g) => {
        (g === "length" || g === qt || !ct(g) && g >= d) && l(u);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), h && l(r.get(qt)), t) {
        case "add":
          f ? h && l(r.get("length")) : (l(r.get(_t)), pt(e) && l(r.get(so)));
          break;
        case "delete":
          f || (l(r.get(_t)), pt(e) && l(r.get(so)));
          break;
        case "set":
          pt(e) && l(r.get(_t));
          break;
      }
  }
  xo();
}
function yt(e) {
  const t = M(e);
  return t === e ? t : (Q(t, "iterate", qt), ge(e) ? t : t.map(Ye));
}
function Mn(e) {
  return Q(e = M(e), "iterate", qt), e;
}
function nt(e, t) {
  return Be(e) ? rt(e) ? St(Ye(t)) : St(t) : Ye(t);
}
const Nr = {
  __proto__: null,
  [Symbol.iterator]() {
    return qn(this, Symbol.iterator, (e) => nt(this, e));
  },
  concat(...e) {
    return yt(this).concat(
      ...e.map((t) => $(t) ? yt(t) : t)
    );
  },
  entries() {
    return qn(this, "entries", (e) => (e[1] = nt(this, e[1]), e));
  },
  every(e, t) {
    return Ge(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Ge(
      this,
      "filter",
      e,
      t,
      (n) => n.map((o) => nt(this, o)),
      arguments
    );
  },
  find(e, t) {
    return Ge(
      this,
      "find",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findIndex(e, t) {
    return Ge(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Ge(
      this,
      "findLast",
      e,
      t,
      (n) => nt(this, n),
      arguments
    );
  },
  findLastIndex(e, t) {
    return Ge(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Ge(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Jn(this, "includes", e);
  },
  indexOf(...e) {
    return Jn(this, "indexOf", e);
  },
  join(e) {
    return yt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Ge(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Mt(this, "pop");
  },
  push(...e) {
    return Mt(this, "push", e);
  },
  reduce(e, ...t) {
    return zo(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return zo(this, "reduceRight", e, t);
  },
  shift() {
    return Mt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Ge(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Mt(this, "splice", e);
  },
  toReversed() {
    return yt(this).toReversed();
  },
  toSorted(e) {
    return yt(this).toSorted(e);
  },
  toSpliced(...e) {
    return yt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Mt(this, "unshift", e);
  },
  values() {
    return qn(this, "values", (e) => nt(this, e));
  }
};
function qn(e, t, n) {
  const o = Mn(e), i = o[t]();
  return o !== e && !ge(e) && (i._next = i.next, i.next = () => {
    const s = i._next();
    return s.done || (s.value = n(s.value)), s;
  }), i;
}
const vr = Array.prototype;
function Ge(e, t, n, o, i, s) {
  const r = Mn(e), l = r !== e && !ge(e), f = r[t];
  if (f !== vr[t]) {
    const u = f.apply(e, s);
    return l ? Ye(u) : u;
  }
  let h = n;
  r !== e && (l ? h = function(u, g) {
    return n.call(this, nt(e, u), g, e);
  } : n.length > 2 && (h = function(u, g) {
    return n.call(this, u, g, e);
  }));
  const d = f.call(r, h, o);
  return l && i ? i(d) : d;
}
function zo(e, t, n, o) {
  const i = Mn(e);
  let s = n;
  return i !== e && (ge(e) ? n.length > 3 && (s = function(r, l, f) {
    return n.call(this, r, l, f, e);
  }) : s = function(r, l, f) {
    return n.call(this, r, nt(e, l), f, e);
  }), i[t](s, ...o);
}
function Jn(e, t, n) {
  const o = M(e);
  Q(o, "iterate", qt);
  const i = o[t](...n);
  return (i === -1 || i === !1) && yn(n[0]) ? (n[0] = M(n[0]), o[t](...n)) : i;
}
function Mt(e, t, n = []) {
  Ae(), wo();
  const o = M(e)[t].apply(e, n);
  return xo(), Pe(), o;
}
const Or = /* @__PURE__ */ Xe("__proto__,__v_isRef,__isVue"), zi = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(ct)
);
function wr(e) {
  ct(e) || (e = String(e));
  const t = M(this);
  return Q(t, "has", e), t.hasOwnProperty(e);
}
class Yi {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, o) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, s = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return s;
    if (n === "__v_raw")
      return o === (i ? s ? ns : ts : s ? es : Qi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const r = $(t);
    if (!i) {
      let f;
      if (r && (f = Nr[n]))
        return f;
      if (n === "hasOwnProperty")
        return wr;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      te(t) ? t : o
    );
    if ((ct(n) ? zi.has(n) : Or(n)) || (i || Q(t, "get", n), s))
      return l;
    if (te(l)) {
      const f = r && vo(n) ? l : l.value;
      return i && W(f) ? lo(f) : f;
    }
    return W(l) ? i ? lo(l) : Vo(l) : l;
  }
}
class Xi extends Yi {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, o, i) {
    let s = t[n];
    const r = $(t) && vo(n);
    if (!this._isShallow) {
      const h = Be(s);
      if (!ge(o) && !Be(o) && (s = M(s), o = M(o)), !r && te(s) && !te(o))
        return h ? (q.NODE_ENV !== "production" && $e(
          `Set operation on key "${String(n)}" failed: target is readonly.`,
          t[n]
        ), !0) : (s.value = o, !0);
    }
    const l = r ? Number(n) < t.length : F(t, n), f = Reflect.set(
      t,
      n,
      o,
      te(t) ? t : i
    );
    return t === M(i) && (l ? ht(o, s) && Le(t, "set", n, o, s) : Le(t, "add", n, o)), f;
  }
  deleteProperty(t, n) {
    const o = F(t, n), i = t[n], s = Reflect.deleteProperty(t, n);
    return s && o && Le(t, "delete", n, void 0, i), s;
  }
  has(t, n) {
    const o = Reflect.has(t, n);
    return (!ct(n) || !zi.has(n)) && Q(t, "has", n), o;
  }
  ownKeys(t) {
    return Q(
      t,
      "iterate",
      $(t) ? "length" : _t
    ), Reflect.ownKeys(t);
  }
}
class Zi extends Yi {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return q.NODE_ENV !== "production" && $e(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return q.NODE_ENV !== "production" && $e(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const xr = /* @__PURE__ */ new Xi(), Dr = /* @__PURE__ */ new Zi(), Vr = /* @__PURE__ */ new Xi(!0), Sr = /* @__PURE__ */ new Zi(!0), ro = (e) => e, ln = (e) => Reflect.getPrototypeOf(e);
function Cr(e, t, n) {
  return function(...o) {
    const i = this.__v_raw, s = M(i), r = pt(s), l = e === "entries" || e === Symbol.iterator && r, f = e === "keys" && r, h = i[e](...o), d = n ? ro : t ? St : Ye;
    return !t && Q(
      s,
      "iterate",
      f ? so : _t
    ), {
      // iterator protocol
      next() {
        const { value: u, done: g } = h.next();
        return g ? { value: u, done: g } : {
          value: l ? [d(u[0]), d(u[1])] : d(u),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function cn(e) {
  return function(...t) {
    if (q.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      $e(
        `${In(e)} operation ${n}failed: target is readonly.`,
        M(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Tr(e, t) {
  const n = {
    get(i) {
      const s = this.__v_raw, r = M(s), l = M(i);
      e || (ht(i, l) && Q(r, "get", i), Q(r, "get", l));
      const { has: f } = ln(r), h = t ? ro : e ? St : Ye;
      if (f.call(r, i))
        return h(s.get(i));
      if (f.call(r, l))
        return h(s.get(l));
      s !== r && s.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && Q(M(i), "iterate", _t), i.size;
    },
    has(i) {
      const s = this.__v_raw, r = M(s), l = M(i);
      return e || (ht(i, l) && Q(r, "has", i), Q(r, "has", l)), i === l ? s.has(i) : s.has(i) || s.has(l);
    },
    forEach(i, s) {
      const r = this, l = r.__v_raw, f = M(l), h = t ? ro : e ? St : Ye;
      return !e && Q(f, "iterate", _t), l.forEach((d, u) => i.call(s, h(d), h(u), r));
    }
  };
  return z(
    n,
    e ? {
      add: cn("add"),
      set: cn("set"),
      delete: cn("delete"),
      clear: cn("clear")
    } : {
      add(i) {
        !t && !ge(i) && !Be(i) && (i = M(i));
        const s = M(this);
        return ln(s).has.call(s, i) || (s.add(i), Le(s, "add", i, i)), this;
      },
      set(i, s) {
        !t && !ge(s) && !Be(s) && (s = M(s));
        const r = M(this), { has: l, get: f } = ln(r);
        let h = l.call(r, i);
        h ? q.NODE_ENV !== "production" && Yo(r, l, i) : (i = M(i), h = l.call(r, i));
        const d = f.call(r, i);
        return r.set(i, s), h ? ht(s, d) && Le(r, "set", i, s, d) : Le(r, "add", i, s), this;
      },
      delete(i) {
        const s = M(this), { has: r, get: l } = ln(s);
        let f = r.call(s, i);
        f ? q.NODE_ENV !== "production" && Yo(s, r, i) : (i = M(i), f = r.call(s, i));
        const h = l ? l.call(s, i) : void 0, d = s.delete(i);
        return f && Le(s, "delete", i, void 0, h), d;
      },
      clear() {
        const i = M(this), s = i.size !== 0, r = q.NODE_ENV !== "production" ? pt(i) ? new Map(i) : new Set(i) : void 0, l = i.clear();
        return s && Le(
          i,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = Cr(i, e, t);
  }), n;
}
function Rn(e, t) {
  const n = Tr(e, t);
  return (o, i, s) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? o : Reflect.get(
    F(n, i) && i in o ? n : o,
    i,
    s
  );
}
const $r = {
  get: /* @__PURE__ */ Rn(!1, !1)
}, Ar = {
  get: /* @__PURE__ */ Rn(!1, !0)
}, Pr = {
  get: /* @__PURE__ */ Rn(!0, !1)
}, Ir = {
  get: /* @__PURE__ */ Rn(!0, !0)
};
function Yo(e, t, n) {
  const o = M(n);
  if (o !== n && t.call(e, o)) {
    const i = No(e);
    $e(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Qi = /* @__PURE__ */ new WeakMap(), es = /* @__PURE__ */ new WeakMap(), ts = /* @__PURE__ */ new WeakMap(), ns = /* @__PURE__ */ new WeakMap();
function Mr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function Rr(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Mr(No(e));
}
function Vo(e) {
  return Be(e) ? e : Fn(
    e,
    !1,
    xr,
    $r,
    Qi
  );
}
function Fr(e) {
  return Fn(
    e,
    !1,
    Vr,
    Ar,
    es
  );
}
function lo(e) {
  return Fn(
    e,
    !0,
    Dr,
    Pr,
    ts
  );
}
function Ue(e) {
  return Fn(
    e,
    !0,
    Sr,
    Ir,
    ns
  );
}
function Fn(e, t, n, o, i) {
  if (!W(e))
    return q.NODE_ENV !== "production" && $e(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const s = Rr(e);
  if (s === 0)
    return e;
  const r = i.get(e);
  if (r)
    return r;
  const l = new Proxy(
    e,
    s === 2 ? o : n
  );
  return i.set(e, l), l;
}
function rt(e) {
  return Be(e) ? rt(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Be(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function yn(e) {
  return e ? !!e.__v_raw : !1;
}
function M(e) {
  const t = e && e.__v_raw;
  return t ? M(t) : e;
}
function jr(e) {
  return !F(e, "__v_skip") && Object.isExtensible(e) && bn(e, "__v_skip", !0), e;
}
const Ye = (e) => W(e) ? Vo(e) : e, St = (e) => W(e) ? lo(e) : e;
function te(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function os(e) {
  return te(e) ? e.value : e;
}
const Hr = {
  get: (e, t, n) => t === "__v_raw" ? e : os(Reflect.get(e, t, n)),
  set: (e, t, n, o) => {
    const i = e[t];
    return te(i) && !te(n) ? (i.value = n, !0) : Reflect.set(e, t, n, o);
  }
};
function is(e) {
  return rt(e) ? e : new Proxy(e, Hr);
}
class Lr {
  constructor(t, n, o) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new qi(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    U !== this)
      return Ui(this, !0), !0;
  }
  get value() {
    const t = q.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Wi(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : q.NODE_ENV !== "production" && $e("Write operation failed: computed value is readonly");
  }
}
function kr(e, t, n = !1) {
  let o, i;
  return P(e) ? o = e : (o = e.get, i = e.set), new Lr(o, i, n);
}
const fn = {}, Nn = /* @__PURE__ */ new WeakMap();
let dt;
function Ur(e, t = !1, n = dt) {
  if (n) {
    let o = Nn.get(n);
    o || Nn.set(n, o = []), o.push(e);
  } else q.NODE_ENV !== "production" && !t && $e(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Br(e, t, n = K) {
  const { immediate: o, deep: i, once: s, scheduler: r, augmentJob: l, call: f } = n, h = (T) => {
    (n.onWarn || $e)(
      "Invalid watch source: ",
      T,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (T) => i ? T : ge(T) || i === !1 || i === 0 ? st(T, 1) : st(T);
  let u, g, m, S, V = !1, X = !1;
  if (te(e) ? (g = () => e.value, V = ge(e)) : rt(e) ? (g = () => d(e), V = !0) : $(e) ? (X = !0, V = e.some((T) => rt(T) || ge(T)), g = () => e.map((T) => {
    if (te(T))
      return T.value;
    if (rt(T))
      return d(T);
    if (P(T))
      return f ? f(T, 2) : T();
    q.NODE_ENV !== "production" && h(T);
  })) : P(e) ? t ? g = f ? () => f(e, 2) : e : g = () => {
    if (m) {
      Ae();
      try {
        m();
      } finally {
        Pe();
      }
    }
    const T = dt;
    dt = u;
    try {
      return f ? f(e, 3, [S]) : e(S);
    } finally {
      dt = T;
    }
  } : (g = ee, q.NODE_ENV !== "production" && h(e)), t && i) {
    const T = g, ne = i === !0 ? 1 / 0 : i;
    g = () => st(T(), ne);
  }
  const J = Er(), L = () => {
    u.stop(), J && J.active && bo(J.effects, u);
  };
  if (s && t) {
    const T = t;
    t = (...ne) => {
      T(...ne), L();
    };
  }
  let k = X ? new Array(e.length).fill(fn) : fn;
  const me = (T) => {
    if (!(!(u.flags & 1) || !u.dirty && !T))
      if (t) {
        const ne = u.run();
        if (i || V || (X ? ne.some((we, oe) => ht(we, k[oe])) : ht(ne, k))) {
          m && m();
          const we = dt;
          dt = u;
          try {
            const oe = [
              ne,
              // pass undefined as the old value when it's changed for the first time
              k === fn ? void 0 : X && k[0] === fn ? [] : k,
              S
            ];
            k = ne, f ? f(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            );
          } finally {
            dt = we;
          }
        }
      } else
        u.run();
  };
  return l && l(me), u = new Li(g), u.scheduler = r ? () => r(me, !1) : me, S = (T) => Ur(T, !1, u), m = u.onStop = () => {
    const T = Nn.get(u);
    if (T) {
      if (f)
        f(T, 4);
      else
        for (const ne of T) ne();
      Nn.delete(u);
    }
  }, q.NODE_ENV !== "production" && (u.onTrack = n.onTrack, u.onTrigger = n.onTrigger), t ? o ? me(!0) : k = u.run() : r ? r(me.bind(null, !0), !0) : u.run(), L.pause = u.pause.bind(u), L.resume = u.resume.bind(u), L.stop = L, L;
}
function st(e, t = 1 / 0, n) {
  if (t <= 0 || !W(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Map(), (n.get(e) || 0) >= t))
    return e;
  if (n.set(e, t), t--, te(e))
    st(e.value, t, n);
  else if ($(e))
    for (let o = 0; o < e.length; o++)
      st(e[o], t, n);
  else if (Ii(e) || pt(e))
    e.forEach((o) => {
      st(o, t, n);
    });
  else if (An(e)) {
    for (const o in e)
      st(e[o], t, n);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && st(e[o], t, n);
  }
  return e;
}
var p = {};
const gt = [];
function un(e) {
  gt.push(e);
}
function an() {
  gt.pop();
}
let zn = !1;
function w(e, ...t) {
  if (zn) return;
  zn = !0, Ae();
  const n = gt.length ? gt[gt.length - 1].component : null, o = n && n.appContext.config.warnHandler, i = Kr();
  if (o)
    Ct(
      o,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((s) => {
          var r, l;
          return (l = (r = s.toString) == null ? void 0 : r.call(s)) != null ? l : JSON.stringify(s);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: s }) => `at <${on(n, s.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const s = [`[Vue warn]: ${e}`, ...t];
    i.length && s.push(`
`, ...Wr(i)), console.warn(...s);
  }
  Pe(), zn = !1;
}
function Kr() {
  let e = gt[gt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function Wr(e) {
  const t = [];
  return e.forEach((n, o) => {
    t.push(...o === 0 ? [] : [`
`], ...Gr(n));
  }), t;
}
function Gr({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, i = ` at <${on(
    e.component,
    e.type,
    o
  )}`, s = ">" + n;
  return e.props ? [i, ...qr(e.props), s] : [i + s];
}
function qr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((o) => {
    t.push(...ss(o, e[o]));
  }), n.length > 3 && t.push(" ..."), t;
}
function ss(e, t, n) {
  return Y(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : te(t) ? (t = ss(e, M(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : P(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = M(t), n ? t : [`${e}=`, t]);
}
const So = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Ct(e, t, n, o) {
  try {
    return o ? e(...o) : e();
  } catch (i) {
    Qt(i, t, n);
  }
}
function Ke(e, t, n, o) {
  if (P(e)) {
    const i = Ct(e, t, n, o);
    return i && yo(i) && i.catch((s) => {
      Qt(s, t, n);
    }), i;
  }
  if ($(e)) {
    const i = [];
    for (let s = 0; s < e.length; s++)
      i.push(Ke(e[s], t, n, o));
    return i;
  } else p.NODE_ENV !== "production" && w(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function Qt(e, t, n, o = !0) {
  const i = t ? t.vnode : null, { errorHandler: s, throwUnhandledErrorInProduction: r } = t && t.appContext.config || K;
  if (t) {
    let l = t.parent;
    const f = t.proxy, h = p.NODE_ENV !== "production" ? So[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let u = 0; u < d.length; u++)
          if (d[u](e, f, h) === !1)
            return;
      }
      l = l.parent;
    }
    if (s) {
      Ae(), Ct(s, null, 10, [
        e,
        f,
        h
      ]), Pe();
      return;
    }
  }
  Jr(e, n, i, o, r);
}
function Jr(e, t, n, o = !0, i = !1) {
  if (p.NODE_ENV !== "production") {
    const s = So[t];
    if (n && un(n), w(`Unhandled error${s ? ` during execution of ${s}` : ""}`), n && an(), o)
      throw e;
    console.error(e);
  } else {
    if (i)
      throw e;
    console.error(e);
  }
}
const le = [];
let He = -1;
const Dt = [];
let ot = null, Ot = 0;
const rs = /* @__PURE__ */ Promise.resolve();
let vn = null;
const zr = 100;
function ls(e) {
  const t = vn || rs;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Yr(e) {
  let t = He + 1, n = le.length;
  for (; t < n; ) {
    const o = t + n >>> 1, i = le[o], s = Jt(i);
    s < e || s === e && i.flags & 2 ? t = o + 1 : n = o;
  }
  return t;
}
function jn(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e), n = le[le.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jt(n) ? le.push(e) : le.splice(Yr(t), 0, e), e.flags |= 1, cs();
  }
}
function cs() {
  vn || (vn = rs.then(as));
}
function fs(e) {
  $(e) ? Dt.push(...e) : ot && e.id === -1 ? ot.splice(Ot + 1, 0, e) : e.flags & 1 || (Dt.push(e), e.flags |= 1), cs();
}
function Xo(e, t, n = He + 1) {
  for (p.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < le.length; n++) {
    const o = le[n];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || p.NODE_ENV !== "production" && Co(t, o))
        continue;
      le.splice(n, 1), n--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function us(e) {
  if (Dt.length) {
    const t = [...new Set(Dt)].sort(
      (n, o) => Jt(n) - Jt(o)
    );
    if (Dt.length = 0, ot) {
      ot.push(...t);
      return;
    }
    for (ot = t, p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), Ot = 0; Ot < ot.length; Ot++) {
      const n = ot[Ot];
      p.NODE_ENV !== "production" && Co(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    ot = null, Ot = 0;
  }
}
const Jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function as(e) {
  p.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = p.NODE_ENV !== "production" ? (n) => Co(e, n) : ee;
  try {
    for (He = 0; He < le.length; He++) {
      const n = le[He];
      if (n && !(n.flags & 8)) {
        if (p.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Ct(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; He < le.length; He++) {
      const n = le[He];
      n && (n.flags &= -2);
    }
    He = -1, le.length = 0, us(e), vn = null, (le.length || Dt.length) && as(e);
  }
}
function Co(e, t) {
  const n = e.get(t) || 0;
  if (n > zr) {
    const o = t.i, i = o && qs(o.type);
    return Qt(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Se = !1;
const dn = /* @__PURE__ */ new Map();
p.NODE_ENV !== "production" && (Zt().__VUE_HMR_RUNTIME__ = {
  createRecord: Yn(ds),
  rerender: Yn(Qr),
  reload: Yn(el)
});
const Et = /* @__PURE__ */ new Map();
function Xr(e) {
  const t = e.type.__hmrId;
  let n = Et.get(t);
  n || (ds(t, e.type), n = Et.get(t)), n.instances.add(e);
}
function Zr(e) {
  Et.get(e.type.__hmrId).instances.delete(e);
}
function ds(e, t) {
  return Et.has(e) ? !1 : (Et.set(e, {
    initialDef: On(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function On(e) {
  return Js(e) ? e.__vccOpts : e;
}
function Qr(e, t) {
  const n = Et.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((o) => {
    t && (o.render = t, On(o.type).render = t), o.renderCache = [], Se = !0, o.job.flags & 8 || o.update(), Se = !1;
  }));
}
function el(e, t) {
  const n = Et.get(e);
  if (!n) return;
  t = On(t), Zo(n.initialDef, t);
  const o = [...n.instances];
  for (let i = 0; i < o.length; i++) {
    const s = o[i], r = On(s.type);
    let l = dn.get(r);
    l || (r !== n.initialDef && Zo(r, t), dn.set(r, l = /* @__PURE__ */ new Set())), l.add(s), s.appContext.propsCache.delete(s.type), s.appContext.emitsCache.delete(s.type), s.appContext.optionsCache.delete(s.type), s.ceReload ? (l.add(s), s.ceReload(t.styles), l.delete(s)) : s.parent ? jn(() => {
      s.job.flags & 8 || (Se = !0, s.parent.update(), Se = !1, l.delete(s));
    }) : s.appContext.reload ? s.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), s.root.ce && s !== s.root && s.root.ce._removeChildStyle(r);
  }
  fs(() => {
    dn.clear();
  });
}
function Zo(e, t) {
  z(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Yn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let ke, jt = [], co = !1;
function en(e, ...t) {
  ke ? ke.emit(e, ...t) : co || jt.push({ event: e, args: t });
}
function ps(e, t) {
  var n, o;
  ke = e, ke ? (ke.enabled = !0, jt.forEach(({ event: i, args: s }) => ke.emit(i, ...s)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (n = window.navigator) == null ? void 0 : n.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((s) => {
    ps(s, t);
  }), setTimeout(() => {
    ke || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, co = !0, jt = []);
  }, 3e3)) : (co = !0, jt = []);
}
function tl(e, t) {
  en("app:init", e, t, {
    Fragment: he,
    Text: tn,
    Comment: Oe,
    Static: _n
  });
}
function nl(e) {
  en("app:unmount", e);
}
const ol = /* @__PURE__ */ To(
  "component:added"
  /* COMPONENT_ADDED */
), hs = /* @__PURE__ */ To(
  "component:updated"
  /* COMPONENT_UPDATED */
), il = /* @__PURE__ */ To(
  "component:removed"
  /* COMPONENT_REMOVED */
), sl = (e) => {
  ke && typeof ke.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !ke.cleanupBuffer(e) && il(e);
};
// @__NO_SIDE_EFFECTS__
function To(e) {
  return (t) => {
    en(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const rl = /* @__PURE__ */ _s(
  "perf:start"
  /* PERFORMANCE_START */
), ll = /* @__PURE__ */ _s(
  "perf:end"
  /* PERFORMANCE_END */
);
function _s(e) {
  return (t, n, o) => {
    en(e, t.appContext.app, t.uid, t, n, o);
  };
}
function cl(e, t, n) {
  en(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let Ne = null, gs = null;
function wn(e) {
  const t = Ne;
  return Ne = e, gs = e && e.type.__scopeId || null, t;
}
function fl(e, t = Ne, n) {
  if (!t || e._n)
    return e;
  const o = (...i) => {
    o._d && di(-1);
    const s = wn(t);
    let r;
    try {
      r = e(...i);
    } finally {
      wn(s), o._d && di(1);
    }
    return p.NODE_ENV !== "production" && hs(t), r;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function ms(e) {
  tr(e) && w("Do not use built-in directive ids as custom directive id: " + e);
}
function ft(e, t, n, o) {
  const i = e.dirs, s = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    s && (l.oldValue = s[r].value);
    let f = l.dir[o];
    f && (Ae(), Ke(f, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Pe());
  }
}
function ul(e, t) {
  if (p.NODE_ENV !== "production" && (!Z || Z.isMounted) && w("provide() can only be used inside setup()."), Z) {
    let n = Z.provides;
    const o = Z.parent && Z.parent.provides;
    o === n && (n = Z.provides = Object.create(o)), n[e] = t;
  }
}
function pn(e, t, n = !1) {
  const o = Ks();
  if (o || Vt) {
    let i = Vt ? Vt._context.provides : o ? o.parent == null || o.ce ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && P(t) ? t.call(o && o.proxy) : t;
    p.NODE_ENV !== "production" && w(`injection "${String(e)}" not found.`);
  } else p.NODE_ENV !== "production" && w("inject() can only be used inside setup() or functional components.");
}
const al = /* @__PURE__ */ Symbol.for("v-scx"), dl = () => {
  {
    const e = pn(al);
    return e || p.NODE_ENV !== "production" && w(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Xn(e, t, n) {
  return p.NODE_ENV !== "production" && !P(t) && w(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Es(e, t, n);
}
function Es(e, t, n = K) {
  const { immediate: o, deep: i, flush: s, once: r } = n;
  p.NODE_ENV !== "production" && !t && (o !== void 0 && w(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && w(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && w(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = z({}, n);
  p.NODE_ENV !== "production" && (l.onWarn = w);
  const f = t && o || !t && s !== "post";
  let h;
  if (Yt) {
    if (s === "sync") {
      const m = dl();
      h = m.__watcherHandles || (m.__watcherHandles = []);
    } else if (!f) {
      const m = () => {
      };
      return m.stop = ee, m.resume = ee, m.pause = ee, m;
    }
  }
  const d = Z;
  l.call = (m, S, V) => Ke(m, d, S, V);
  let u = !1;
  s === "post" ? l.scheduler = (m) => {
    Ee(m, d && d.suspense);
  } : s !== "sync" && (u = !0, l.scheduler = (m, S) => {
    S ? m() : jn(m);
  }), l.augmentJob = (m) => {
    t && (m.flags |= 4), u && (m.flags |= 2, d && (m.id = d.uid, m.i = d));
  };
  const g = Br(e, t, l);
  return Yt && (h ? h.push(g) : f && g()), g;
}
function pl(e, t, n) {
  const o = this.proxy, i = Y(e) ? e.includes(".") ? bs(o, e) : () => o[e] : e.bind(o, o);
  let s;
  P(t) ? s = t : (s = t.handler, n = t);
  const r = nn(this), l = Es(i, s.bind(o), n);
  return r(), l;
}
function bs(e, t) {
  const n = t.split(".");
  return () => {
    let o = e;
    for (let i = 0; i < n.length && o; i++)
      o = o[n[i]];
    return o;
  };
}
const hl = /* @__PURE__ */ Symbol("_vte"), _l = (e) => e.__isTeleport, gl = /* @__PURE__ */ Symbol("_leaveCb");
function $o(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, $o(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
// @__NO_SIDE_EFFECTS__
function Ao(e, t) {
  return P(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    z({ name: e.name }, t, { setup: e })
  ) : e;
}
function ys(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Qo = /* @__PURE__ */ new WeakSet(), xn = /* @__PURE__ */ new WeakMap();
function Bt(e, t, n, o, i = !1) {
  if ($(e)) {
    e.forEach(
      (V, X) => Bt(
        V,
        t && ($(t) ? t[X] : t),
        n,
        o,
        i
      )
    );
    return;
  }
  if (Kt(o) && !i) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Bt(e, t, n, o.component.subTree);
    return;
  }
  const s = o.shapeFlag & 4 ? Ho(o.component) : o.el, r = i ? null : s, { i: l, r: f } = e;
  if (p.NODE_ENV !== "production" && !l) {
    w(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const h = t && t.r, d = l.refs === K ? l.refs = {} : l.refs, u = l.setupState, g = M(u), m = u === K ? Pi : (V) => p.NODE_ENV !== "production" && (F(g, V) && !te(g[V]) && w(
    `Template ref "${V}" used on a non-ref value. It will not work in the production build.`
  ), Qo.has(g[V])) ? !1 : F(g, V), S = (V) => p.NODE_ENV === "production" || !Qo.has(V);
  if (h != null && h !== f) {
    if (ei(t), Y(h))
      d[h] = null, m(h) && (u[h] = null);
    else if (te(h)) {
      S(h) && (h.value = null);
      const V = t;
      V.k && (d[V.k] = null);
    }
  }
  if (P(f))
    Ct(f, l, 12, [r, d]);
  else {
    const V = Y(f), X = te(f);
    if (V || X) {
      const J = () => {
        if (e.f) {
          const L = V ? m(f) ? u[f] : d[f] : S(f) || !e.k ? f.value : d[e.k];
          if (i)
            $(L) && bo(L, s);
          else if ($(L))
            L.includes(s) || L.push(s);
          else if (V)
            d[f] = [s], m(f) && (u[f] = d[f]);
          else {
            const k = [s];
            S(f) && (f.value = k), e.k && (d[e.k] = k);
          }
        } else V ? (d[f] = r, m(f) && (u[f] = r)) : X ? (S(f) && (f.value = r), e.k && (d[e.k] = r)) : p.NODE_ENV !== "production" && w("Invalid template ref type:", f, `(${typeof f})`);
      };
      if (r) {
        const L = () => {
          J(), xn.delete(e);
        };
        L.id = -1, xn.set(e, L), Ee(L, n);
      } else
        ei(e), J();
    } else p.NODE_ENV !== "production" && w("Invalid template ref type:", f, `(${typeof f})`);
  }
}
function ei(e) {
  const t = xn.get(e);
  t && (t.flags |= 8, xn.delete(e));
}
Zt().requestIdleCallback;
Zt().cancelIdleCallback;
const Kt = (e) => !!e.type.__asyncLoader, Po = (e) => e.type.__isKeepAlive;
function ml(e, t) {
  Ns(e, "a", t);
}
function El(e, t) {
  Ns(e, "da", t);
}
function Ns(e, t, n = Z) {
  const o = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Hn(t, o, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      Po(i.parent.vnode) && bl(o, t, n, i), i = i.parent;
  }
}
function bl(e, t, n, o) {
  const i = Hn(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  vs(() => {
    bo(o[t], i);
  }, n);
}
function Hn(e, t, n = Z, o = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), s = t.__weh || (t.__weh = (...r) => {
      Ae();
      const l = nn(n), f = Ke(t, n, e, r);
      return l(), Pe(), f;
    });
    return o ? i.unshift(s) : i.push(s), s;
  } else if (p.NODE_ENV !== "production") {
    const i = at(So[e].replace(/ hook$/, ""));
    w(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Ze = (e) => (t, n = Z) => {
  (!Yt || e === "sp") && Hn(e, (...o) => t(...o), n);
}, yl = Ze("bm"), Nl = Ze("m"), vl = Ze(
  "bu"
), Ol = Ze("u"), wl = Ze(
  "bum"
), vs = Ze("um"), xl = Ze(
  "sp"
), Dl = Ze("rtg"), Vl = Ze("rtc");
function Sl(e, t = Z) {
  Hn("ec", e, t);
}
const Cl = /* @__PURE__ */ Symbol.for("v-ndc");
function Zn(e, t, n, o) {
  let i;
  const s = n, r = $(e);
  if (r || Y(e)) {
    const l = r && rt(e);
    let f = !1, h = !1;
    l && (f = !ge(e), h = Be(e), e = Mn(e)), i = new Array(e.length);
    for (let d = 0, u = e.length; d < u; d++)
      i[d] = t(
        f ? h ? St(Ye(e[d])) : Ye(e[d]) : e[d],
        d,
        void 0,
        s
      );
  } else if (typeof e == "number") {
    p.NODE_ENV !== "production" && !Number.isInteger(e) && w(`The v-for range expect an integer value but got ${e}.`), i = new Array(e);
    for (let l = 0; l < e; l++)
      i[l] = t(l + 1, l, void 0, s);
  } else if (W(e))
    if (e[Symbol.iterator])
      i = Array.from(
        e,
        (l, f) => t(l, f, void 0, s)
      );
    else {
      const l = Object.keys(e);
      i = new Array(l.length);
      for (let f = 0, h = l.length; f < h; f++) {
        const d = l[f];
        i[f] = t(e[d], d, f, s);
      }
    }
  else
    i = [];
  return i;
}
const fo = (e) => e ? Ws(e) ? Ho(e) : fo(e.parent) : null, mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ z(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => p.NODE_ENV !== "production" ? Ue(e.props) : e.props,
    $attrs: (e) => p.NODE_ENV !== "production" ? Ue(e.attrs) : e.attrs,
    $slots: (e) => p.NODE_ENV !== "production" ? Ue(e.slots) : e.slots,
    $refs: (e) => p.NODE_ENV !== "production" ? Ue(e.refs) : e.refs,
    $parent: (e) => fo(e.parent),
    $root: (e) => fo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => xs(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      jn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = ls.bind(e.proxy)),
    $watch: (e) => pl.bind(e)
  })
), Io = (e) => e === "_" || e === "$", Qn = (e, t) => e !== K && !e.__isScriptSetup && F(e, t), Os = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: o, data: i, props: s, accessCache: r, type: l, appContext: f } = e;
    if (p.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    if (t[0] !== "$") {
      const g = r[t];
      if (g !== void 0)
        switch (g) {
          case 1:
            return o[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return s[t];
        }
      else {
        if (Qn(o, t))
          return r[t] = 1, o[t];
        if (i !== K && F(i, t))
          return r[t] = 2, i[t];
        if (F(s, t))
          return r[t] = 3, s[t];
        if (n !== K && F(n, t))
          return r[t] = 4, n[t];
        uo && (r[t] = 0);
      }
    }
    const h = mt[t];
    let d, u;
    if (h)
      return t === "$attrs" ? (Q(e.attrs, "get", ""), p.NODE_ENV !== "production" && Vn()) : p.NODE_ENV !== "production" && t === "$slots" && Q(e, "get", t), h(e);
    if (
      // css module (injected by vue-loader)
      (d = l.__cssModules) && (d = d[t])
    )
      return d;
    if (n !== K && F(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      u = f.config.globalProperties, F(u, t)
    )
      return u[t];
    p.NODE_ENV !== "production" && Ne && (!Y(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== K && Io(t[0]) && F(i, t) ? w(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === Ne && w(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: o, setupState: i, ctx: s } = e;
    return Qn(i, t) ? (i[t] = n, !0) : p.NODE_ENV !== "production" && i.__isScriptSetup && F(i, t) ? (w(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== K && F(o, t) ? (o[t] = n, !0) : F(e.props, t) ? (p.NODE_ENV !== "production" && w(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (p.NODE_ENV !== "production" && w(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (p.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(s, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : s[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: o, appContext: i, props: s, type: r }
  }, l) {
    let f;
    return !!(n[l] || e !== K && l[0] !== "$" && F(e, l) || Qn(t, l) || F(s, l) || F(o, l) || F(mt, l) || F(i.config.globalProperties, l) || (f = r.__cssModules) && f[l]);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : F(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
p.NODE_ENV !== "production" && (Os.ownKeys = (e) => (w(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Tl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(mt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => mt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: ee
    });
  }), t;
}
function $l(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: ee
    });
  });
}
function Al(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(M(n)).forEach((o) => {
    if (!n.__isScriptSetup) {
      if (Io(o[0])) {
        w(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => n[o],
        set: ee
      });
    }
  });
}
function ti(e) {
  return $(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Pl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? w(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let uo = !0;
function Il(e) {
  const t = xs(e), n = e.proxy, o = e.ctx;
  uo = !1, t.beforeCreate && ni(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: s,
    methods: r,
    watch: l,
    provide: f,
    inject: h,
    // lifecycle
    created: d,
    beforeMount: u,
    mounted: g,
    beforeUpdate: m,
    updated: S,
    activated: V,
    deactivated: X,
    beforeDestroy: J,
    beforeUnmount: L,
    destroyed: k,
    unmounted: me,
    render: T,
    renderTracked: ne,
    renderTriggered: we,
    errorCaptured: oe,
    serverPrefetch: ce,
    // public API
    expose: We,
    inheritAttrs: Qe,
    // assets
    components: De,
    directives: sn,
    filters: ko
  } = t, et = p.NODE_ENV !== "production" ? Pl() : null;
  if (p.NODE_ENV !== "production") {
    const [j] = e.propsOptions;
    if (j)
      for (const R in j)
        et("Props", R);
  }
  if (h && Ml(h, o, et), r)
    for (const j in r) {
      const R = r[j];
      P(R) ? (p.NODE_ENV !== "production" ? Object.defineProperty(o, j, {
        value: R.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : o[j] = R.bind(n), p.NODE_ENV !== "production" && et("Methods", j)) : p.NODE_ENV !== "production" && w(
        `Method "${j}" has type "${typeof R}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    p.NODE_ENV !== "production" && !P(i) && w(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const j = i.call(n, n);
    if (p.NODE_ENV !== "production" && yo(j) && w(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !W(j))
      p.NODE_ENV !== "production" && w("data() should return an object.");
    else if (e.data = Vo(j), p.NODE_ENV !== "production")
      for (const R in j)
        et("Data", R), Io(R[0]) || Object.defineProperty(o, R, {
          configurable: !0,
          enumerable: !0,
          get: () => j[R],
          set: ee
        });
  }
  if (uo = !0, s)
    for (const j in s) {
      const R = s[j], Ie = P(R) ? R.bind(n, n) : P(R.get) ? R.get.bind(n, n) : ee;
      p.NODE_ENV !== "production" && Ie === ee && w(`Computed property "${j}" has no getter.`);
      const Un = !P(R) && P(R.set) ? R.set.bind(n) : p.NODE_ENV !== "production" ? () => {
        w(
          `Write operation failed: computed property "${j}" is readonly.`
        );
      } : ee, Tt = Tn({
        get: Ie,
        set: Un
      });
      Object.defineProperty(o, j, {
        enumerable: !0,
        configurable: !0,
        get: () => Tt.value,
        set: (bt) => Tt.value = bt
      }), p.NODE_ENV !== "production" && et("Computed", j);
    }
  if (l)
    for (const j in l)
      ws(l[j], o, n, j);
  if (f) {
    const j = P(f) ? f.call(n) : f;
    Reflect.ownKeys(j).forEach((R) => {
      ul(R, j[R]);
    });
  }
  d && ni(d, e, "c");
  function fe(j, R) {
    $(R) ? R.forEach((Ie) => j(Ie.bind(n))) : R && j(R.bind(n));
  }
  if (fe(yl, u), fe(Nl, g), fe(vl, m), fe(Ol, S), fe(ml, V), fe(El, X), fe(Sl, oe), fe(Vl, ne), fe(Dl, we), fe(wl, L), fe(vs, me), fe(xl, ce), $(We))
    if (We.length) {
      const j = e.exposed || (e.exposed = {});
      We.forEach((R) => {
        Object.defineProperty(j, R, {
          get: () => n[R],
          set: (Ie) => n[R] = Ie,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  T && e.render === ee && (e.render = T), Qe != null && (e.inheritAttrs = Qe), De && (e.components = De), sn && (e.directives = sn), ce && ys(e);
}
function Ml(e, t, n = ee) {
  $(e) && (e = ao(e));
  for (const o in e) {
    const i = e[o];
    let s;
    W(i) ? "default" in i ? s = pn(
      i.from || o,
      i.default,
      !0
    ) : s = pn(i.from || o) : s = pn(i), te(s) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => s.value,
      set: (r) => s.value = r
    }) : t[o] = s, p.NODE_ENV !== "production" && n("Inject", o);
  }
}
function ni(e, t, n) {
  Ke(
    $(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function ws(e, t, n, o) {
  let i = o.includes(".") ? bs(n, o) : () => n[o];
  if (Y(e)) {
    const s = t[e];
    P(s) ? Xn(i, s) : p.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e}"`, s);
  } else if (P(e))
    Xn(i, e.bind(n));
  else if (W(e))
    if ($(e))
      e.forEach((s) => ws(s, t, n, o));
    else {
      const s = P(e.handler) ? e.handler.bind(n) : t[e.handler];
      P(s) ? Xn(i, s, e) : p.NODE_ENV !== "production" && w(`Invalid watch handler specified by key "${e.handler}"`, s);
    }
  else p.NODE_ENV !== "production" && w(`Invalid watch option: "${o}"`, e);
}
function xs(e) {
  const t = e.type, { mixins: n, extends: o } = t, {
    mixins: i,
    optionsCache: s,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = s.get(t);
  let f;
  return l ? f = l : !i.length && !n && !o ? f = t : (f = {}, i.length && i.forEach(
    (h) => Dn(f, h, r, !0)
  ), Dn(f, t, r)), W(t) && s.set(t, f), f;
}
function Dn(e, t, n, o = !1) {
  const { mixins: i, extends: s } = t;
  s && Dn(e, s, n, !0), i && i.forEach(
    (r) => Dn(e, r, n, !0)
  );
  for (const r in t)
    if (o && r === "expose")
      p.NODE_ENV !== "production" && w(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Rl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const Rl = {
  data: oi,
  props: ii,
  emits: ii,
  // objects
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: re,
  created: re,
  beforeMount: re,
  mounted: re,
  beforeUpdate: re,
  updated: re,
  beforeDestroy: re,
  beforeUnmount: re,
  destroyed: re,
  unmounted: re,
  activated: re,
  deactivated: re,
  errorCaptured: re,
  serverPrefetch: re,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: jl,
  // provide / inject
  provide: oi,
  inject: Fl
};
function oi(e, t) {
  return t ? e ? function() {
    return z(
      P(e) ? e.call(this, this) : e,
      P(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Fl(e, t) {
  return Ht(ao(e), ao(t));
}
function ao(e) {
  if ($(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function re(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? z(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function ii(e, t) {
  return e ? $(e) && $(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : z(
    /* @__PURE__ */ Object.create(null),
    ti(e),
    ti(t ?? {})
  ) : t;
}
function jl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = z(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    n[o] = re(e[o], t[o]);
  return n;
}
function Ds() {
  return {
    app: null,
    config: {
      isNativeTag: Pi,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Hl = 0;
function Ll(e, t) {
  return function(o, i = null) {
    P(o) || (o = z({}, o)), i != null && !W(i) && (p.NODE_ENV !== "production" && w("root props passed to app.mount() must be an object."), i = null);
    const s = Ds(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let f = !1;
    const h = s.app = {
      _uid: Hl++,
      _component: o,
      _props: i,
      _container: null,
      _context: s,
      _instance: null,
      version: gi,
      get config() {
        return s.config;
      },
      set config(d) {
        p.NODE_ENV !== "production" && w(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...u) {
        return r.has(d) ? p.NODE_ENV !== "production" && w("Plugin has already been applied to target app.") : d && P(d.install) ? (r.add(d), d.install(h, ...u)) : P(d) ? (r.add(d), d(h, ...u)) : p.NODE_ENV !== "production" && w(
          'A plugin must either be a function or an object with an "install" function.'
        ), h;
      },
      mixin(d) {
        return s.mixins.includes(d) ? p.NODE_ENV !== "production" && w(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : s.mixins.push(d), h;
      },
      component(d, u) {
        return p.NODE_ENV !== "production" && mo(d, s.config), u ? (p.NODE_ENV !== "production" && s.components[d] && w(`Component "${d}" has already been registered in target app.`), s.components[d] = u, h) : s.components[d];
      },
      directive(d, u) {
        return p.NODE_ENV !== "production" && ms(d), u ? (p.NODE_ENV !== "production" && s.directives[d] && w(`Directive "${d}" has already been registered in target app.`), s.directives[d] = u, h) : s.directives[d];
      },
      mount(d, u, g) {
        if (f)
          p.NODE_ENV !== "production" && w(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          p.NODE_ENV !== "production" && d.__vue_app__ && w(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const m = h._ceVNode || Te(o, i);
          return m.appContext = s, g === !0 ? g = "svg" : g === !1 && (g = void 0), p.NODE_ENV !== "production" && (s.reload = () => {
            const S = lt(m);
            S.el = null, e(S, d, g);
          }), e(m, d, g), f = !0, h._container = d, d.__vue_app__ = h, p.NODE_ENV !== "production" && (h._instance = m.component, tl(h, gi)), Ho(m.component);
        }
      },
      onUnmount(d) {
        p.NODE_ENV !== "production" && typeof d != "function" && w(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        f ? (Ke(
          l,
          h._instance,
          16
        ), e(null, h._container), p.NODE_ENV !== "production" && (h._instance = null, nl(h)), delete h._container.__vue_app__) : p.NODE_ENV !== "production" && w("Cannot unmount an app that is not mounted.");
      },
      provide(d, u) {
        return p.NODE_ENV !== "production" && d in s.provides && (F(s.provides, d) ? w(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ) : w(
          `App already provides property with key "${String(d)}" inherited from its parent element. It will be overwritten with the new value.`
        )), s.provides[d] = u, h;
      },
      runWithContext(d) {
        const u = Vt;
        Vt = h;
        try {
          return d();
        } finally {
          Vt = u;
        }
      }
    };
    return h;
  };
}
let Vt = null;
const kl = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${_e(t)}Modifiers`] || e[`${ye(t)}Modifiers`];
function Ul(e, t, ...n) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || K;
  if (p.NODE_ENV !== "production") {
    const {
      emitsOptions: d,
      propsOptions: [u]
    } = e;
    if (d)
      if (!(t in d))
        (!u || !(at(_e(t)) in u)) && w(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${at(_e(t))}" prop.`
        );
      else {
        const g = d[t];
        P(g) && (g(...n) || w(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const s = t.startsWith("update:"), r = s && kl(o, t.slice(7));
  if (r && (r.trim && (i = n.map((d) => Y(d) ? d.trim() : d)), r.number && (i = n.map(ir))), p.NODE_ENV !== "production" && cl(e, t, i), p.NODE_ENV !== "production") {
    const d = t.toLowerCase();
    d !== t && o[at(d)] && w(
      `Event "${d}" is emitted in component ${on(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${ye(
        t
      )}" instead of "${t}".`
    );
  }
  let l, f = o[l = at(t)] || // also try camelCase event handler (#2249)
  o[l = at(_e(t))];
  !f && s && (f = o[l = at(ye(t))]), f && Ke(
    f,
    e,
    6,
    i
  );
  const h = o[l + "Once"];
  if (h) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Ke(
      h,
      e,
      6,
      i
    );
  }
}
const Bl = /* @__PURE__ */ new WeakMap();
function Vs(e, t, n = !1) {
  const o = n ? Bl : t.emitsCache, i = o.get(e);
  if (i !== void 0)
    return i;
  const s = e.emits;
  let r = {}, l = !1;
  if (!P(e)) {
    const f = (h) => {
      const d = Vs(h, t, !0);
      d && (l = !0, z(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  return !s && !l ? (W(e) && o.set(e, null), null) : ($(s) ? s.forEach((f) => r[f] = null) : z(r, s), W(e) && o.set(e, r), r);
}
function Ln(e, t) {
  return !e || !Xt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), F(e, t[0].toLowerCase() + t.slice(1)) || F(e, ye(t)) || F(e, t));
}
let po = !1;
function Vn() {
  po = !0;
}
function si(e) {
  const {
    type: t,
    vnode: n,
    proxy: o,
    withProxy: i,
    propsOptions: [s],
    slots: r,
    attrs: l,
    emit: f,
    render: h,
    renderCache: d,
    props: u,
    data: g,
    setupState: m,
    ctx: S,
    inheritAttrs: V
  } = e, X = wn(e);
  let J, L;
  p.NODE_ENV !== "production" && (po = !1);
  try {
    if (n.shapeFlag & 4) {
      const T = i || o, ne = p.NODE_ENV !== "production" && m.__isScriptSetup ? new Proxy(T, {
        get(we, oe, ce) {
          return w(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(we, oe, ce);
        }
      }) : T;
      J = Ve(
        h.call(
          ne,
          T,
          d,
          p.NODE_ENV !== "production" ? Ue(u) : u,
          m,
          g,
          S
        )
      ), L = l;
    } else {
      const T = t;
      p.NODE_ENV !== "production" && l === u && Vn(), J = Ve(
        T.length > 1 ? T(
          p.NODE_ENV !== "production" ? Ue(u) : u,
          p.NODE_ENV !== "production" ? {
            get attrs() {
              return Vn(), Ue(l);
            },
            slots: r,
            emit: f
          } : { attrs: l, slots: r, emit: f }
        ) : T(
          p.NODE_ENV !== "production" ? Ue(u) : u,
          null
        )
      ), L = t.props ? l : Kl(l);
    }
  } catch (T) {
    Wt.length = 0, Qt(T, e, 1), J = Te(Oe);
  }
  let k = J, me;
  if (p.NODE_ENV !== "production" && J.patchFlag > 0 && J.patchFlag & 2048 && ([k, me] = Ss(J)), L && V !== !1) {
    const T = Object.keys(L), { shapeFlag: ne } = k;
    if (T.length) {
      if (ne & 7)
        s && T.some(En) && (L = Wl(
          L,
          s
        )), k = lt(k, L, !1, !0);
      else if (p.NODE_ENV !== "production" && !po && k.type !== Oe) {
        const we = Object.keys(l), oe = [], ce = [];
        for (let We = 0, Qe = we.length; We < Qe; We++) {
          const De = we[We];
          Xt(De) ? En(De) || oe.push(De[2].toLowerCase() + De.slice(3)) : ce.push(De);
        }
        ce.length && w(
          `Extraneous non-props attributes (${ce.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), oe.length && w(
          `Extraneous non-emits event listeners (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (p.NODE_ENV !== "production" && !ri(k) && w(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), k = lt(k, null, !1, !0), k.dirs = k.dirs ? k.dirs.concat(n.dirs) : n.dirs), n.transition && (p.NODE_ENV !== "production" && !ri(k) && w(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), $o(k, n.transition)), p.NODE_ENV !== "production" && me ? me(k) : J = k, wn(X), J;
}
const Ss = (e) => {
  const t = e.children, n = e.dynamicChildren, o = Mo(t, !1);
  if (o) {
    if (p.NODE_ENV !== "production" && o.patchFlag > 0 && o.patchFlag & 2048)
      return Ss(o);
  } else return [e, void 0];
  const i = t.indexOf(o), s = n ? n.indexOf(o) : -1, r = (l) => {
    t[i] = l, n && (s > -1 ? n[s] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Ve(o), r];
};
function Mo(e, t = !0) {
  let n;
  for (let o = 0; o < e.length; o++) {
    const i = e[o];
    if (kn(i)) {
      if (i.type !== Oe || i.children === "v-if") {
        if (n)
          return;
        if (n = i, p.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Mo(n.children);
      }
    } else
      return;
  }
  return n;
}
const Kl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Xt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Wl = (e, t) => {
  const n = {};
  for (const o in e)
    (!En(o) || !(o.slice(9) in t)) && (n[o] = e[o]);
  return n;
}, ri = (e) => e.shapeFlag & 7 || e.type === Oe;
function Gl(e, t, n) {
  const { props: o, children: i, component: s } = e, { props: r, children: l, patchFlag: f } = t, h = s.emitsOptions;
  if (p.NODE_ENV !== "production" && (i || l) && Se || t.dirs || t.transition)
    return !0;
  if (n && f >= 0) {
    if (f & 1024)
      return !0;
    if (f & 16)
      return o ? li(o, r, h) : !!r;
    if (f & 8) {
      const d = t.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        const g = d[u];
        if (r[g] !== o[g] && !Ln(h, g))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : o === r ? !1 : o ? r ? li(o, r, h) : !0 : !!r;
  return !1;
}
function li(e, t, n) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < o.length; i++) {
    const s = o[i];
    if (t[s] !== e[s] && !Ln(n, s))
      return !0;
  }
  return !1;
}
function ql({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Cs = {}, Ts = () => Object.create(Cs), $s = (e) => Object.getPrototypeOf(e) === Cs;
function Jl(e, t, n, o = !1) {
  const i = {}, s = Ts();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), As(e, t, i, s);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  p.NODE_ENV !== "production" && Is(t || {}, i, e), n ? e.props = o ? i : Fr(i) : e.type.props ? e.props = i : e.props = s, e.attrs = s;
}
function zl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Yl(e, t, n, o) {
  const {
    props: i,
    attrs: s,
    vnode: { patchFlag: r }
  } = e, l = M(i), [f] = e.propsOptions;
  let h = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(p.NODE_ENV !== "production" && zl(e)) && (o || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let u = 0; u < d.length; u++) {
        let g = d[u];
        if (Ln(e.emitsOptions, g))
          continue;
        const m = t[g];
        if (f)
          if (F(s, g))
            m !== s[g] && (s[g] = m, h = !0);
          else {
            const S = _e(g);
            i[S] = ho(
              f,
              l,
              S,
              m,
              e,
              !1
            );
          }
        else
          m !== s[g] && (s[g] = m, h = !0);
      }
    }
  } else {
    As(e, t, i, s) && (h = !0);
    let d;
    for (const u in l)
      (!t || // for camelCase
      !F(t, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = ye(u)) === u || !F(t, d))) && (f ? n && // for camelCase
      (n[u] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[u] = ho(
        f,
        l,
        u,
        void 0,
        e,
        !0
      )) : delete i[u]);
    if (s !== l)
      for (const u in s)
        (!t || !F(t, u)) && (delete s[u], h = !0);
  }
  h && Le(e.attrs, "set", ""), p.NODE_ENV !== "production" && Is(t || {}, i, e);
}
function As(e, t, n, o) {
  const [i, s] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let f in t) {
      if (Lt(f))
        continue;
      const h = t[f];
      let d;
      i && F(i, d = _e(f)) ? !s || !s.includes(d) ? n[d] = h : (l || (l = {}))[d] = h : Ln(e.emitsOptions, f) || (!(f in o) || h !== o[f]) && (o[f] = h, r = !0);
    }
  if (s) {
    const f = M(n), h = l || K;
    for (let d = 0; d < s.length; d++) {
      const u = s[d];
      n[u] = ho(
        i,
        f,
        u,
        h[u],
        e,
        !F(h, u)
      );
    }
  }
  return r;
}
function ho(e, t, n, o, i, s) {
  const r = e[n];
  if (r != null) {
    const l = F(r, "default");
    if (l && o === void 0) {
      const f = r.default;
      if (r.type !== Function && !r.skipFactory && P(f)) {
        const { propsDefaults: h } = i;
        if (n in h)
          o = h[n];
        else {
          const d = nn(i);
          o = h[n] = f.call(
            null,
            t
          ), d();
        }
      } else
        o = f;
      i.ce && i.ce._setProp(n, o);
    }
    r[
      0
      /* shouldCast */
    ] && (s && !l ? o = !1 : r[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === ye(n)) && (o = !0));
  }
  return o;
}
const Xl = /* @__PURE__ */ new WeakMap();
function Ps(e, t, n = !1) {
  const o = n ? Xl : t.propsCache, i = o.get(e);
  if (i)
    return i;
  const s = e.props, r = {}, l = [];
  let f = !1;
  if (!P(e)) {
    const d = (u) => {
      f = !0;
      const [g, m] = Ps(u, t, !0);
      z(r, g), m && l.push(...m);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!s && !f)
    return W(e) && o.set(e, wt), wt;
  if ($(s))
    for (let d = 0; d < s.length; d++) {
      p.NODE_ENV !== "production" && !Y(s[d]) && w("props must be strings when using array syntax.", s[d]);
      const u = _e(s[d]);
      ci(u) && (r[u] = K);
    }
  else if (s) {
    p.NODE_ENV !== "production" && !W(s) && w("invalid props options", s);
    for (const d in s) {
      const u = _e(d);
      if (ci(u)) {
        const g = s[d], m = r[u] = $(g) || P(g) ? { type: g } : z({}, g), S = m.type;
        let V = !1, X = !0;
        if ($(S))
          for (let J = 0; J < S.length; ++J) {
            const L = S[J], k = P(L) && L.name;
            if (k === "Boolean") {
              V = !0;
              break;
            } else k === "String" && (X = !1);
          }
        else
          V = P(S) && S.name === "Boolean";
        m[
          0
          /* shouldCast */
        ] = V, m[
          1
          /* shouldCastTrue */
        ] = X, (V || F(m, "default")) && l.push(u);
      }
    }
  }
  const h = [r, l];
  return W(e) && o.set(e, h), h;
}
function ci(e) {
  return e[0] !== "$" && !Lt(e) ? !0 : (p.NODE_ENV !== "production" && w(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Zl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Is(e, t, n) {
  const o = M(t), i = n.propsOptions[0], s = Object.keys(e).map((r) => _e(r));
  for (const r in i) {
    let l = i[r];
    l != null && Ql(
      r,
      o[r],
      l,
      p.NODE_ENV !== "production" ? Ue(o) : o,
      !s.includes(r)
    );
  }
}
function Ql(e, t, n, o, i) {
  const { type: s, required: r, validator: l, skipCheck: f } = n;
  if (r && i) {
    w('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (s != null && s !== !0 && !f) {
      let h = !1;
      const d = $(s) ? s : [s], u = [];
      for (let g = 0; g < d.length && !h; g++) {
        const { valid: m, expectedType: S } = tc(t, d[g]);
        u.push(S || ""), h = m;
      }
      if (!h) {
        w(nc(e, t, u));
        return;
      }
    }
    l && !l(t, o) && w('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ec = /* @__PURE__ */ Xe(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function tc(e, t) {
  let n;
  const o = Zl(t);
  if (o === "null")
    n = e === null;
  else if (ec(o)) {
    const i = typeof e;
    n = i === o.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else o === "Object" ? n = W(e) : o === "Array" ? n = $(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: o
  };
}
function nc(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(In).join(" | ")}`;
  const i = n[0], s = No(t), r = fi(t, i), l = fi(t, s);
  return n.length === 1 && ui(i) && !oc(i, s) && (o += ` with value ${r}`), o += `, got ${s} `, ui(s) && (o += `with value ${l}.`), o;
}
function fi(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function ui(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function oc(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Ro = (e) => e === "_" || e === "_ctx" || e === "$stable", Fo = (e) => $(e) ? e.map(Ve) : [Ve(e)], ic = (e, t, n) => {
  if (t._n)
    return t;
  const o = fl((...i) => (p.NODE_ENV !== "production" && Z && !(n === null && Ne) && !(n && n.root !== Z.root) && w(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Fo(t(...i))), n);
  return o._c = !1, o;
}, Ms = (e, t, n) => {
  const o = e._ctx;
  for (const i in e) {
    if (Ro(i)) continue;
    const s = e[i];
    if (P(s))
      t[i] = ic(i, s, o);
    else if (s != null) {
      p.NODE_ENV !== "production" && w(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = Fo(s);
      t[i] = () => r;
    }
  }
}, Rs = (e, t) => {
  p.NODE_ENV !== "production" && !Po(e.vnode) && w(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Fo(t);
  e.slots.default = () => n;
}, _o = (e, t, n) => {
  for (const o in t)
    (n || !Ro(o)) && (e[o] = t[o]);
}, sc = (e, t, n) => {
  const o = e.slots = Ts();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (_o(o, t, n), n && bn(o, "_", i, !0)) : Ms(t, o);
  } else t && Rs(e, t);
}, rc = (e, t, n) => {
  const { vnode: o, slots: i } = e;
  let s = !0, r = K;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? p.NODE_ENV !== "production" && Se ? (_o(i, t, n), Le(e, "set", "$slots")) : n && l === 1 ? s = !1 : _o(i, t, n) : (s = !t.$stable, Ms(t, i)), r = t;
  } else t && (Rs(e, t), r = { default: 1 });
  if (s)
    for (const l in i)
      !Ro(l) && r[l] == null && delete i[l];
};
let Rt, ze;
function Nt(e, t) {
  e.appContext.config.performance && Sn() && ze.mark(`vue-${t}-${e.uid}`), p.NODE_ENV !== "production" && rl(e, t, Sn() ? ze.now() : Date.now());
}
function vt(e, t) {
  if (e.appContext.config.performance && Sn()) {
    const n = `vue-${t}-${e.uid}`, o = n + ":end", i = `<${on(e, e.type)}> ${t}`;
    ze.mark(o), ze.measure(i, n, o), ze.clearMeasures(i), ze.clearMarks(n), ze.clearMarks(o);
  }
  p.NODE_ENV !== "production" && ll(e, t, Sn() ? ze.now() : Date.now());
}
function Sn() {
  return Rt !== void 0 || (typeof window < "u" && window.performance ? (Rt = !0, ze = window.performance) : Rt = !1), Rt;
}
function lc() {
  const e = [];
  if (p.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ee = dc;
function cc(e) {
  return fc(e);
}
function fc(e, t) {
  lc();
  const n = Zt();
  n.__VUE__ = !0, p.NODE_ENV !== "production" && ps(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: o,
    remove: i,
    patchProp: s,
    createElement: r,
    createText: l,
    createComment: f,
    setText: h,
    setElementText: d,
    parentNode: u,
    nextSibling: g,
    setScopeId: m = ee,
    insertStaticContent: S
  } = e, V = (c, a, _, N = null, b = null, E = null, x = void 0, v = null, O = p.NODE_ENV !== "production" && Se ? !1 : !!a.dynamicChildren) => {
    if (c === a)
      return;
    c && !Ft(c, a) && (N = rn(c), tt(c, b, E, !0), c = null), a.patchFlag === -2 && (O = !1, a.dynamicChildren = null);
    const { type: y, ref: A, shapeFlag: D } = a;
    switch (y) {
      case tn:
        X(c, a, _, N);
        break;
      case Oe:
        J(c, a, _, N);
        break;
      case _n:
        c == null ? L(a, _, N, x) : p.NODE_ENV !== "production" && k(c, a, _, x);
        break;
      case he:
        sn(
          c,
          a,
          _,
          N,
          b,
          E,
          x,
          v,
          O
        );
        break;
      default:
        D & 1 ? ne(
          c,
          a,
          _,
          N,
          b,
          E,
          x,
          v,
          O
        ) : D & 6 ? ko(
          c,
          a,
          _,
          N,
          b,
          E,
          x,
          v,
          O
        ) : D & 64 || D & 128 ? y.process(
          c,
          a,
          _,
          N,
          b,
          E,
          x,
          v,
          O,
          At
        ) : p.NODE_ENV !== "production" && w("Invalid VNode type:", y, `(${typeof y})`);
    }
    A != null && b ? Bt(A, c && c.ref, E, a || c, !a) : A == null && c && c.ref != null && Bt(c.ref, null, E, c, !0);
  }, X = (c, a, _, N) => {
    if (c == null)
      o(
        a.el = l(a.children),
        _,
        N
      );
    else {
      const b = a.el = c.el;
      if (a.children !== c.children)
        if (p.NODE_ENV !== "production" && Se && a.patchFlag === -1 && "__elIndex" in c) {
          const E = _.childNodes, x = l(a.children), v = E[a.__elIndex = c.__elIndex];
          o(x, _, v), i(v);
        } else
          h(b, a.children);
    }
  }, J = (c, a, _, N) => {
    c == null ? o(
      a.el = f(a.children || ""),
      _,
      N
    ) : a.el = c.el;
  }, L = (c, a, _, N) => {
    [c.el, c.anchor] = S(
      c.children,
      a,
      _,
      N,
      c.el,
      c.anchor
    );
  }, k = (c, a, _, N) => {
    if (a.children !== c.children) {
      const b = g(c.anchor);
      T(c), [a.el, a.anchor] = S(
        a.children,
        _,
        b,
        N
      );
    } else
      a.el = c.el, a.anchor = c.anchor;
  }, me = ({ el: c, anchor: a }, _, N) => {
    let b;
    for (; c && c !== a; )
      b = g(c), o(c, _, N), c = b;
    o(a, _, N);
  }, T = ({ el: c, anchor: a }) => {
    let _;
    for (; c && c !== a; )
      _ = g(c), i(c), c = _;
    i(a);
  }, ne = (c, a, _, N, b, E, x, v, O) => {
    if (a.type === "svg" ? x = "svg" : a.type === "math" && (x = "mathml"), c == null)
      we(
        a,
        _,
        N,
        b,
        E,
        x,
        v,
        O
      );
    else {
      const y = c.el && c.el._isVueCE ? c.el : null;
      try {
        y && y._beginPatch(), We(
          c,
          a,
          b,
          E,
          x,
          v,
          O
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, we = (c, a, _, N, b, E, x, v) => {
    let O, y;
    const { props: A, shapeFlag: D, transition: C, dirs: I } = c;
    if (O = c.el = r(
      c.type,
      E,
      A && A.is,
      A
    ), D & 8 ? d(O, c.children) : D & 16 && ce(
      c.children,
      O,
      null,
      N,
      b,
      eo(c, E),
      x,
      v
    ), I && ft(c, null, N, "created"), oe(O, c, c.scopeId, x, N), A) {
      for (const G in A)
        G !== "value" && !Lt(G) && s(O, G, null, A[G], E, N);
      "value" in A && s(O, "value", null, A.value, E), (y = A.onVnodeBeforeMount) && je(y, N, c);
    }
    p.NODE_ENV !== "production" && (bn(O, "__vnode", c, !0), bn(O, "__vueParentComponent", N, !0)), I && ft(c, null, N, "beforeMount");
    const H = uc(b, C);
    H && C.beforeEnter(O), o(O, a, _), ((y = A && A.onVnodeMounted) || H || I) && Ee(() => {
      y && je(y, N, c), H && C.enter(O), I && ft(c, null, N, "mounted");
    }, b);
  }, oe = (c, a, _, N, b) => {
    if (_ && m(c, _), N)
      for (let E = 0; E < N.length; E++)
        m(c, N[E]);
    if (b) {
      let E = b.subTree;
      if (p.NODE_ENV !== "production" && E.patchFlag > 0 && E.patchFlag & 2048 && (E = Mo(E.children) || E), a === E || Hs(E.type) && (E.ssContent === a || E.ssFallback === a)) {
        const x = b.vnode;
        oe(
          c,
          x,
          x.scopeId,
          x.slotScopeIds,
          b.parent
        );
      }
    }
  }, ce = (c, a, _, N, b, E, x, v, O = 0) => {
    for (let y = O; y < c.length; y++) {
      const A = c[y] = v ? it(c[y]) : Ve(c[y]);
      V(
        null,
        A,
        a,
        _,
        N,
        b,
        E,
        x,
        v
      );
    }
  }, We = (c, a, _, N, b, E, x) => {
    const v = a.el = c.el;
    p.NODE_ENV !== "production" && (v.__vnode = a);
    let { patchFlag: O, dynamicChildren: y, dirs: A } = a;
    O |= c.patchFlag & 16;
    const D = c.props || K, C = a.props || K;
    let I;
    if (_ && ut(_, !1), (I = C.onVnodeBeforeUpdate) && je(I, _, a, c), A && ft(a, c, _, "beforeUpdate"), _ && ut(_, !0), p.NODE_ENV !== "production" && Se && (O = 0, x = !1, y = null), (D.innerHTML && C.innerHTML == null || D.textContent && C.textContent == null) && d(v, ""), y ? (Qe(
      c.dynamicChildren,
      y,
      v,
      _,
      N,
      eo(a, b),
      E
    ), p.NODE_ENV !== "production" && hn(c, a)) : x || Ie(
      c,
      a,
      v,
      null,
      _,
      N,
      eo(a, b),
      E,
      !1
    ), O > 0) {
      if (O & 16)
        De(v, D, C, _, b);
      else if (O & 2 && D.class !== C.class && s(v, "class", null, C.class, b), O & 4 && s(v, "style", D.style, C.style, b), O & 8) {
        const H = a.dynamicProps;
        for (let G = 0; G < H.length; G++) {
          const B = H[G], ue = D[B], ae = C[B];
          (ae !== ue || B === "value") && s(v, B, ue, ae, b, _);
        }
      }
      O & 1 && c.children !== a.children && d(v, a.children);
    } else !x && y == null && De(v, D, C, _, b);
    ((I = C.onVnodeUpdated) || A) && Ee(() => {
      I && je(I, _, a, c), A && ft(a, c, _, "updated");
    }, N);
  }, Qe = (c, a, _, N, b, E, x) => {
    for (let v = 0; v < a.length; v++) {
      const O = c[v], y = a[v], A = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        O.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (O.type === he || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ft(O, y) || // - In the case of a component, it could contain anything.
        O.shapeFlag & 198) ? u(O.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          _
        )
      );
      V(
        O,
        y,
        A,
        null,
        N,
        b,
        E,
        x,
        !0
      );
    }
  }, De = (c, a, _, N, b) => {
    if (a !== _) {
      if (a !== K)
        for (const E in a)
          !Lt(E) && !(E in _) && s(
            c,
            E,
            a[E],
            null,
            b,
            N
          );
      for (const E in _) {
        if (Lt(E)) continue;
        const x = _[E], v = a[E];
        x !== v && E !== "value" && s(c, E, v, x, b, N);
      }
      "value" in _ && s(c, "value", a.value, _.value, b);
    }
  }, sn = (c, a, _, N, b, E, x, v, O) => {
    const y = a.el = c ? c.el : l(""), A = a.anchor = c ? c.anchor : l("");
    let { patchFlag: D, dynamicChildren: C, slotScopeIds: I } = a;
    p.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Se || D & 2048) && (D = 0, O = !1, C = null), I && (v = v ? v.concat(I) : I), c == null ? (o(y, _, N), o(A, _, N), ce(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      a.children || [],
      _,
      A,
      b,
      E,
      x,
      v,
      O
    )) : D > 0 && D & 64 && C && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren && c.dynamicChildren.length === C.length ? (Qe(
      c.dynamicChildren,
      C,
      _,
      b,
      E,
      x,
      v
    ), p.NODE_ENV !== "production" ? hn(c, a) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (a.key != null || b && a === b.subTree) && hn(
        c,
        a,
        !0
        /* shallow */
      )
    )) : Ie(
      c,
      a,
      _,
      A,
      b,
      E,
      x,
      v,
      O
    );
  }, ko = (c, a, _, N, b, E, x, v, O) => {
    a.slotScopeIds = v, c == null ? a.shapeFlag & 512 ? b.ctx.activate(
      a,
      _,
      N,
      x,
      O
    ) : et(
      a,
      _,
      N,
      b,
      E,
      x,
      O
    ) : fe(c, a, O);
  }, et = (c, a, _, N, b, E, x) => {
    const v = c.component = vc(
      c,
      N,
      b
    );
    if (p.NODE_ENV !== "production" && v.type.__hmrId && Xr(v), p.NODE_ENV !== "production" && (un(c), Nt(v, "mount")), Po(c) && (v.ctx.renderer = At), p.NODE_ENV !== "production" && Nt(v, "init"), wc(v, !1, x), p.NODE_ENV !== "production" && vt(v, "init"), p.NODE_ENV !== "production" && Se && (c.el = null), v.asyncDep) {
      if (b && b.registerDep(v, j, x), !c.el) {
        const O = v.subTree = Te(Oe);
        J(null, O, a, _), c.placeholder = O.el;
      }
    } else
      j(
        v,
        c,
        a,
        _,
        b,
        E,
        x
      );
    p.NODE_ENV !== "production" && (an(), vt(v, "mount"));
  }, fe = (c, a, _) => {
    const N = a.component = c.component;
    if (Gl(c, a, _))
      if (N.asyncDep && !N.asyncResolved) {
        p.NODE_ENV !== "production" && un(a), R(N, a, _), p.NODE_ENV !== "production" && an();
        return;
      } else
        N.next = a, N.update();
    else
      a.el = c.el, N.vnode = a;
  }, j = (c, a, _, N, b, E, x) => {
    const v = () => {
      if (c.isMounted) {
        let { next: D, bu: C, u: I, parent: H, vnode: G } = c;
        {
          const Re = Fs(c);
          if (Re) {
            D && (D.el = G.el, R(c, D, x)), Re.asyncDep.then(() => {
              c.isUnmounted || v();
            });
            return;
          }
        }
        let B = D, ue;
        p.NODE_ENV !== "production" && un(D || c.vnode), ut(c, !1), D ? (D.el = G.el, R(c, D, x)) : D = G, C && It(C), (ue = D.props && D.props.onVnodeBeforeUpdate) && je(ue, H, D, G), ut(c, !0), p.NODE_ENV !== "production" && Nt(c, "render");
        const ae = si(c);
        p.NODE_ENV !== "production" && vt(c, "render");
        const Me = c.subTree;
        c.subTree = ae, p.NODE_ENV !== "production" && Nt(c, "patch"), V(
          Me,
          ae,
          // parent may have changed if it's in a teleport
          u(Me.el),
          // anchor may have changed if it's in a fragment
          rn(Me),
          c,
          b,
          E
        ), p.NODE_ENV !== "production" && vt(c, "patch"), D.el = ae.el, B === null && ql(c, ae.el), I && Ee(I, b), (ue = D.props && D.props.onVnodeUpdated) && Ee(
          () => je(ue, H, D, G),
          b
        ), p.NODE_ENV !== "production" && hs(c), p.NODE_ENV !== "production" && an();
      } else {
        let D;
        const { el: C, props: I } = a, { bm: H, m: G, parent: B, root: ue, type: ae } = c, Me = Kt(a);
        ut(c, !1), H && It(H), !Me && (D = I && I.onVnodeBeforeMount) && je(D, B, a), ut(c, !0);
        {
          ue.ce && // @ts-expect-error _def is private
          ue.ce._def.shadowRoot !== !1 && ue.ce._injectChildStyle(ae), p.NODE_ENV !== "production" && Nt(c, "render");
          const Re = c.subTree = si(c);
          p.NODE_ENV !== "production" && vt(c, "render"), p.NODE_ENV !== "production" && Nt(c, "patch"), V(
            null,
            Re,
            _,
            N,
            c,
            b,
            E
          ), p.NODE_ENV !== "production" && vt(c, "patch"), a.el = Re.el;
        }
        if (G && Ee(G, b), !Me && (D = I && I.onVnodeMounted)) {
          const Re = a;
          Ee(
            () => je(D, B, Re),
            b
          );
        }
        (a.shapeFlag & 256 || B && Kt(B.vnode) && B.vnode.shapeFlag & 256) && c.a && Ee(c.a, b), c.isMounted = !0, p.NODE_ENV !== "production" && ol(c), a = _ = N = null;
      }
    };
    c.scope.on();
    const O = c.effect = new Li(v);
    c.scope.off();
    const y = c.update = O.run.bind(O), A = c.job = O.runIfDirty.bind(O);
    A.i = c, A.id = c.uid, O.scheduler = () => jn(A), ut(c, !0), p.NODE_ENV !== "production" && (O.onTrack = c.rtc ? (D) => It(c.rtc, D) : void 0, O.onTrigger = c.rtg ? (D) => It(c.rtg, D) : void 0), y();
  }, R = (c, a, _) => {
    a.component = c;
    const N = c.vnode.props;
    c.vnode = a, c.next = null, Yl(c, a.props, N, _), rc(c, a.children, _), Ae(), Xo(c), Pe();
  }, Ie = (c, a, _, N, b, E, x, v, O = !1) => {
    const y = c && c.children, A = c ? c.shapeFlag : 0, D = a.children, { patchFlag: C, shapeFlag: I } = a;
    if (C > 0) {
      if (C & 128) {
        Tt(
          y,
          D,
          _,
          N,
          b,
          E,
          x,
          v,
          O
        );
        return;
      } else if (C & 256) {
        Un(
          y,
          D,
          _,
          N,
          b,
          E,
          x,
          v,
          O
        );
        return;
      }
    }
    I & 8 ? (A & 16 && $t(y, b, E), D !== y && d(_, D)) : A & 16 ? I & 16 ? Tt(
      y,
      D,
      _,
      N,
      b,
      E,
      x,
      v,
      O
    ) : $t(y, b, E, !0) : (A & 8 && d(_, ""), I & 16 && ce(
      D,
      _,
      N,
      b,
      E,
      x,
      v,
      O
    ));
  }, Un = (c, a, _, N, b, E, x, v, O) => {
    c = c || wt, a = a || wt;
    const y = c.length, A = a.length, D = Math.min(y, A);
    let C;
    for (C = 0; C < D; C++) {
      const I = a[C] = O ? it(a[C]) : Ve(a[C]);
      V(
        c[C],
        I,
        _,
        null,
        b,
        E,
        x,
        v,
        O
      );
    }
    y > A ? $t(
      c,
      b,
      E,
      !0,
      !1,
      D
    ) : ce(
      a,
      _,
      N,
      b,
      E,
      x,
      v,
      O,
      D
    );
  }, Tt = (c, a, _, N, b, E, x, v, O) => {
    let y = 0;
    const A = a.length;
    let D = c.length - 1, C = A - 1;
    for (; y <= D && y <= C; ) {
      const I = c[y], H = a[y] = O ? it(a[y]) : Ve(a[y]);
      if (Ft(I, H))
        V(
          I,
          H,
          _,
          null,
          b,
          E,
          x,
          v,
          O
        );
      else
        break;
      y++;
    }
    for (; y <= D && y <= C; ) {
      const I = c[D], H = a[C] = O ? it(a[C]) : Ve(a[C]);
      if (Ft(I, H))
        V(
          I,
          H,
          _,
          null,
          b,
          E,
          x,
          v,
          O
        );
      else
        break;
      D--, C--;
    }
    if (y > D) {
      if (y <= C) {
        const I = C + 1, H = I < A ? a[I].el : N;
        for (; y <= C; )
          V(
            null,
            a[y] = O ? it(a[y]) : Ve(a[y]),
            _,
            H,
            b,
            E,
            x,
            v,
            O
          ), y++;
      }
    } else if (y > C)
      for (; y <= D; )
        tt(c[y], b, E, !0), y++;
    else {
      const I = y, H = y, G = /* @__PURE__ */ new Map();
      for (y = H; y <= C; y++) {
        const se = a[y] = O ? it(a[y]) : Ve(a[y]);
        se.key != null && (p.NODE_ENV !== "production" && G.has(se.key) && w(
          "Duplicate keys found during update:",
          JSON.stringify(se.key),
          "Make sure keys are unique."
        ), G.set(se.key, y));
      }
      let B, ue = 0;
      const ae = C - H + 1;
      let Me = !1, Re = 0;
      const Pt = new Array(ae);
      for (y = 0; y < ae; y++) Pt[y] = 0;
      for (y = I; y <= D; y++) {
        const se = c[y];
        if (ue >= ae) {
          tt(se, b, E, !0);
          continue;
        }
        let Fe;
        if (se.key != null)
          Fe = G.get(se.key);
        else
          for (B = H; B <= C; B++)
            if (Pt[B - H] === 0 && Ft(se, a[B])) {
              Fe = B;
              break;
            }
        Fe === void 0 ? tt(se, b, E, !0) : (Pt[Fe - H] = y + 1, Fe >= Re ? Re = Fe : Me = !0, V(
          se,
          a[Fe],
          _,
          null,
          b,
          E,
          x,
          v,
          O
        ), ue++);
      }
      const Bo = Me ? ac(Pt) : wt;
      for (B = Bo.length - 1, y = ae - 1; y >= 0; y--) {
        const se = H + y, Fe = a[se], Ko = a[se + 1], Wo = se + 1 < A ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Ko.el || js(Ko)
        ) : N;
        Pt[y] === 0 ? V(
          null,
          Fe,
          _,
          Wo,
          b,
          E,
          x,
          v,
          O
        ) : Me && (B < 0 || y !== Bo[B] ? bt(Fe, _, Wo, 2) : B--);
      }
    }
  }, bt = (c, a, _, N, b = null) => {
    const { el: E, type: x, transition: v, children: O, shapeFlag: y } = c;
    if (y & 6) {
      bt(c.component.subTree, a, _, N);
      return;
    }
    if (y & 128) {
      c.suspense.move(a, _, N);
      return;
    }
    if (y & 64) {
      x.move(c, a, _, At);
      return;
    }
    if (x === he) {
      o(E, a, _);
      for (let D = 0; D < O.length; D++)
        bt(O[D], a, _, N);
      o(c.anchor, a, _);
      return;
    }
    if (x === _n) {
      me(c, a, _);
      return;
    }
    if (N !== 2 && y & 1 && v)
      if (N === 0)
        v.beforeEnter(E), o(E, a, _), Ee(() => v.enter(E), b);
      else {
        const { leave: D, delayLeave: C, afterLeave: I } = v, H = () => {
          c.ctx.isUnmounted ? i(E) : o(E, a, _);
        }, G = () => {
          E._isLeaving && E[gl](
            !0
            /* cancelled */
          ), D(E, () => {
            H(), I && I();
          });
        };
        C ? C(E, H, G) : G();
      }
    else
      o(E, a, _);
  }, tt = (c, a, _, N = !1, b = !1) => {
    const {
      type: E,
      props: x,
      ref: v,
      children: O,
      dynamicChildren: y,
      shapeFlag: A,
      patchFlag: D,
      dirs: C,
      cacheIndex: I
    } = c;
    if (D === -2 && (b = !1), v != null && (Ae(), Bt(v, null, _, c, !0), Pe()), I != null && (a.renderCache[I] = void 0), A & 256) {
      a.ctx.deactivate(c);
      return;
    }
    const H = A & 1 && C, G = !Kt(c);
    let B;
    if (G && (B = x && x.onVnodeBeforeUnmount) && je(B, a, c), A & 6)
      Qs(c.component, _, N);
    else {
      if (A & 128) {
        c.suspense.unmount(_, N);
        return;
      }
      H && ft(c, null, a, "beforeUnmount"), A & 64 ? c.type.remove(
        c,
        a,
        _,
        At,
        N
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== he || D > 0 && D & 64) ? $t(
        y,
        a,
        _,
        !1,
        !0
      ) : (E === he && D & 384 || !b && A & 16) && $t(O, a, _), N && Bn(c);
    }
    (G && (B = x && x.onVnodeUnmounted) || H) && Ee(() => {
      B && je(B, a, c), H && ft(c, null, a, "unmounted");
    }, _);
  }, Bn = (c) => {
    const { type: a, el: _, anchor: N, transition: b } = c;
    if (a === he) {
      p.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && b && !b.persisted ? c.children.forEach((x) => {
        x.type === Oe ? i(x.el) : Bn(x);
      }) : Zs(_, N);
      return;
    }
    if (a === _n) {
      T(c);
      return;
    }
    const E = () => {
      i(_), b && !b.persisted && b.afterLeave && b.afterLeave();
    };
    if (c.shapeFlag & 1 && b && !b.persisted) {
      const { leave: x, delayLeave: v } = b, O = () => x(_, E);
      v ? v(c.el, E, O) : O();
    } else
      E();
  }, Zs = (c, a) => {
    let _;
    for (; c !== a; )
      _ = g(c), i(c), c = _;
    i(a);
  }, Qs = (c, a, _) => {
    p.NODE_ENV !== "production" && c.type.__hmrId && Zr(c);
    const { bum: N, scope: b, job: E, subTree: x, um: v, m: O, a: y } = c;
    ai(O), ai(y), N && It(N), b.stop(), E && (E.flags |= 8, tt(x, c, a, _)), v && Ee(v, a), Ee(() => {
      c.isUnmounted = !0;
    }, a), p.NODE_ENV !== "production" && sl(c);
  }, $t = (c, a, _, N = !1, b = !1, E = 0) => {
    for (let x = E; x < c.length; x++)
      tt(c[x], a, _, N, b);
  }, rn = (c) => {
    if (c.shapeFlag & 6)
      return rn(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const a = g(c.anchor || c.el), _ = a && a[hl];
    return _ ? g(_) : a;
  };
  let Kn = !1;
  const Uo = (c, a, _) => {
    let N;
    c == null ? a._vnode && (tt(a._vnode, null, null, !0), N = a._vnode.component) : V(
      a._vnode || null,
      c,
      a,
      null,
      null,
      null,
      _
    ), a._vnode = c, Kn || (Kn = !0, Xo(N), us(), Kn = !1);
  }, At = {
    p: V,
    um: tt,
    m: bt,
    r: Bn,
    mt: et,
    mc: ce,
    pc: Ie,
    pbc: Qe,
    n: rn,
    o: e
  };
  return {
    render: Uo,
    hydrate: void 0,
    createApp: Ll(Uo)
  };
}
function eo({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function ut({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function uc(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function hn(e, t, n = !1) {
  const o = e.children, i = t.children;
  if ($(o) && $(i))
    for (let s = 0; s < o.length; s++) {
      const r = o[s];
      let l = i[s];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[s] = it(i[s]), l.el = r.el), !n && l.patchFlag !== -2 && hn(r, l)), l.type === tn && (l.patchFlag !== -1 ? l.el = r.el : l.__elIndex = s + // take fragment start anchor into account
      (e.type === he ? 1 : 0)), l.type === Oe && !l.el && (l.el = r.el), p.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function ac(e) {
  const t = e.slice(), n = [0];
  let o, i, s, r, l;
  const f = e.length;
  for (o = 0; o < f; o++) {
    const h = e[o];
    if (h !== 0) {
      if (i = n[n.length - 1], e[i] < h) {
        t[o] = i, n.push(o);
        continue;
      }
      for (s = 0, r = n.length - 1; s < r; )
        l = s + r >> 1, e[n[l]] < h ? s = l + 1 : r = l;
      h < e[n[s]] && (s > 0 && (t[o] = n[s - 1]), n[s] = o);
    }
  }
  for (s = n.length, r = n[s - 1]; s-- > 0; )
    n[s] = r, r = t[r];
  return n;
}
function Fs(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Fs(t);
}
function ai(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
function js(e) {
  if (e.placeholder)
    return e.placeholder;
  const t = e.component;
  return t ? js(t.subTree) : null;
}
const Hs = (e) => e.__isSuspense;
function dc(e, t) {
  t && t.pendingBranch ? $(e) ? t.effects.push(...e) : t.effects.push(e) : fs(e);
}
const he = /* @__PURE__ */ Symbol.for("v-fgt"), tn = /* @__PURE__ */ Symbol.for("v-txt"), Oe = /* @__PURE__ */ Symbol.for("v-cmt"), _n = /* @__PURE__ */ Symbol.for("v-stc"), Wt = [];
let ve = null;
function de(e = !1) {
  Wt.push(ve = e ? null : []);
}
function pc() {
  Wt.pop(), ve = Wt[Wt.length - 1] || null;
}
let zt = 1;
function di(e, t = !1) {
  zt += e, e < 0 && ve && t && (ve.hasOnce = !0);
}
function Ls(e) {
  return e.dynamicChildren = zt > 0 ? ve || wt : null, pc(), zt > 0 && ve && ve.push(e), e;
}
function be(e, t, n, o, i, s) {
  return Ls(
    qe(
      e,
      t,
      n,
      o,
      i,
      s,
      !0
    )
  );
}
function hc(e, t, n, o, i) {
  return Ls(
    Te(
      e,
      t,
      n,
      o,
      i,
      !0
    )
  );
}
function kn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  if (p.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = dn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const _c = (...e) => Us(
  ...e
), ks = ({ key: e }) => e ?? null, gn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? Y(e) || te(e) || P(e) ? { i: Ne, r: e, k: t, f: !!n } : e : null);
function qe(e, t = null, n = null, o = 0, i = null, s = e === he ? 0 : 1, r = !1, l = !1) {
  const f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && ks(t),
    ref: t && gn(t),
    scopeId: gs,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: s,
    patchFlag: o,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: Ne
  };
  return l ? (jo(f, n), s & 128 && e.normalize(f)) : n && (f.shapeFlag |= Y(n) ? 8 : 16), p.NODE_ENV !== "production" && f.key !== f.key && w("VNode created with invalid key (NaN). VNode type:", f.type), zt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  ve && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (f.patchFlag > 0 || s & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  f.patchFlag !== 32 && ve.push(f), f;
}
const Te = p.NODE_ENV !== "production" ? _c : Us;
function Us(e, t = null, n = null, o = 0, i = null, s = !1) {
  if ((!e || e === Cl) && (p.NODE_ENV !== "production" && !e && w(`Invalid vnode type when creating vnode: ${e}.`), e = Oe), kn(e)) {
    const l = lt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && jo(l, n), zt > 0 && !s && ve && (l.shapeFlag & 6 ? ve[ve.indexOf(e)] = l : ve.push(l)), l.patchFlag = -2, l;
  }
  if (Js(e) && (e = e.__vccOpts), t) {
    t = gc(t);
    let { class: l, style: f } = t;
    l && !Y(l) && (t.class = Oo(l)), W(f) && (yn(f) && !$(f) && (f = z({}, f)), t.style = xt(f));
  }
  const r = Y(e) ? 1 : Hs(e) ? 128 : _l(e) ? 64 : W(e) ? 4 : P(e) ? 2 : 0;
  return p.NODE_ENV !== "production" && r & 4 && yn(e) && (e = M(e), w(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), qe(
    e,
    t,
    n,
    o,
    i,
    r,
    s,
    !0
  );
}
function gc(e) {
  return e ? yn(e) || $s(e) ? z({}, e) : e : null;
}
function lt(e, t, n = !1, o = !1) {
  const { props: i, ref: s, patchFlag: r, children: l, transition: f } = e, h = t ? bc(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: h,
    key: h && ks(h),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && s ? $(s) ? s.concat(gn(t)) : [s, gn(t)] : gn(t)
    ) : s,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: p.NODE_ENV !== "production" && r === -1 && $(l) ? l.map(Bs) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== he ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: f,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && lt(e.ssContent),
    ssFallback: e.ssFallback && lt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return f && o && $o(
    d,
    f.clone(d)
  ), d;
}
function Bs(e) {
  const t = lt(e);
  return $(e.children) && (t.children = e.children.map(Bs)), t;
}
function mc(e = " ", t = 0) {
  return Te(tn, null, e, t);
}
function Ec(e = "", t = !1) {
  return t ? (de(), hc(Oe, null, e)) : Te(Oe, null, e);
}
function Ve(e) {
  return e == null || typeof e == "boolean" ? Te(Oe) : $(e) ? Te(
    he,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : kn(e) ? it(e) : Te(tn, null, String(e));
}
function it(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : lt(e);
}
function jo(e, t) {
  let n = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if ($(t))
    n = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), jo(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !$s(t) ? t._ctx = Ne : i === 3 && Ne && (Ne.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else P(t) ? (t = { default: t, _ctx: Ne }, n = 32) : (t = String(t), o & 64 ? (n = 16, t = [mc(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function bc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const o = e[n];
    for (const i in o)
      if (i === "class")
        t.class !== o.class && (t.class = Oo([t.class, o.class]));
      else if (i === "style")
        t.style = xt([t.style, o.style]);
      else if (Xt(i)) {
        const s = t[i], r = o[i];
        r && s !== r && !($(s) && s.includes(r)) && (t[i] = s ? [].concat(s, r) : r);
      } else i !== "" && (t[i] = o[i]);
  }
  return t;
}
function je(e, t, n, o = null) {
  Ke(e, t, 7, [
    n,
    o
  ]);
}
const yc = Ds();
let Nc = 0;
function vc(e, t, n) {
  const o = e.type, i = (t ? t.appContext : e.appContext) || yc, s = {
    uid: Nc++,
    vnode: e,
    type: o,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new mr(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Ps(o, i),
    emitsOptions: Vs(o, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: K,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: K,
    data: K,
    props: K,
    attrs: K,
    slots: K,
    refs: K,
    setupState: K,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return p.NODE_ENV !== "production" ? s.ctx = Tl(s) : s.ctx = { _: s }, s.root = t ? t.root : s, s.emit = Ul.bind(null, s), e.ce && e.ce(s), s;
}
let Z = null;
const Ks = () => Z || Ne;
let Cn, go;
{
  const e = Zt(), t = (n, o) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(o), (s) => {
      i.length > 1 ? i.forEach((r) => r(s)) : i[0](s);
    };
  };
  Cn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Z = n
  ), go = t(
    "__VUE_SSR_SETTERS__",
    (n) => Yt = n
  );
}
const nn = (e) => {
  const t = Z;
  return Cn(e), e.scope.on(), () => {
    e.scope.off(), Cn(t);
  };
}, pi = () => {
  Z && Z.scope.off(), Cn(null);
}, Oc = /* @__PURE__ */ Xe("slot,component");
function mo(e, { isNativeTag: t }) {
  (Oc(e) || t(e)) && w(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Ws(e) {
  return e.vnode.shapeFlag & 4;
}
let Yt = !1;
function wc(e, t = !1, n = !1) {
  t && go(t);
  const { props: o, children: i } = e.vnode, s = Ws(e);
  Jl(e, o, s, t), sc(e, i, n || t);
  const r = s ? xc(e, t) : void 0;
  return t && go(!1), r;
}
function xc(e, t) {
  const n = e.type;
  if (p.NODE_ENV !== "production") {
    if (n.name && mo(n.name, e.appContext.config), n.components) {
      const i = Object.keys(n.components);
      for (let s = 0; s < i.length; s++)
        mo(i[s], e.appContext.config);
    }
    if (n.directives) {
      const i = Object.keys(n.directives);
      for (let s = 0; s < i.length; s++)
        ms(i[s]);
    }
    n.compilerOptions && Dc() && w(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Os), p.NODE_ENV !== "production" && $l(e);
  const { setup: o } = n;
  if (o) {
    Ae();
    const i = e.setupContext = o.length > 1 ? Sc(e) : null, s = nn(e), r = Ct(
      o,
      e,
      0,
      [
        p.NODE_ENV !== "production" ? Ue(e.props) : e.props,
        i
      ]
    ), l = yo(r);
    if (Pe(), s(), (l || e.sp) && !Kt(e) && ys(e), l) {
      if (r.then(pi, pi), t)
        return r.then((f) => {
          hi(e, f, t);
        }).catch((f) => {
          Qt(f, e, 0);
        });
      if (e.asyncDep = r, p.NODE_ENV !== "production" && !e.suspense) {
        const f = on(e, n);
        w(
          `Component <${f}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      hi(e, r, t);
  } else
    Gs(e, t);
}
function hi(e, t, n) {
  P(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : W(t) ? (p.NODE_ENV !== "production" && kn(t) && w(
    "setup() should not return VNodes directly - return a render function instead."
  ), p.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = is(t), p.NODE_ENV !== "production" && Al(e)) : p.NODE_ENV !== "production" && t !== void 0 && w(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Gs(e, n);
}
const Dc = () => !0;
function Gs(e, t, n) {
  const o = e.type;
  e.render || (e.render = o.render || ee);
  {
    const i = nn(e);
    Ae();
    try {
      Il(e);
    } finally {
      Pe(), i();
    }
  }
  p.NODE_ENV !== "production" && !o.render && e.render === ee && !t && (o.template ? w(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : w("Component is missing template or render function: ", o));
}
const _i = p.NODE_ENV !== "production" ? {
  get(e, t) {
    return Vn(), Q(e, "get", ""), e[t];
  },
  set() {
    return w("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return w("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return Q(e, "get", ""), e[t];
  }
};
function Vc(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return Q(e, "get", "$slots"), t[n];
    }
  });
}
function Sc(e) {
  const t = (n) => {
    if (p.NODE_ENV !== "production" && (e.exposed && w("expose() should be called only once per setup()."), n != null)) {
      let o = typeof n;
      o === "object" && ($(n) ? o = "array" : te(n) && (o = "ref")), o !== "object" && w(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = n || {};
  };
  if (p.NODE_ENV !== "production") {
    let n, o;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, _i));
      },
      get slots() {
        return o || (o = Vc(e));
      },
      get emit() {
        return (i, ...s) => e.emit(i, ...s);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, _i),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function Ho(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(is(jr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in mt)
        return mt[n](e);
    },
    has(t, n) {
      return n in t || n in mt;
    }
  })) : e.proxy;
}
const Cc = /(?:^|[-_])\w/g, Tc = (e) => e.replace(Cc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function qs(e, t = !0) {
  return P(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function on(e, t, n = !1) {
  let o = qs(t);
  if (!o && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (o = i[1]);
  }
  if (!o && e) {
    const i = (s) => {
      for (const r in s)
        if (s[r] === t)
          return r;
    };
    o = i(e.components) || e.parent && i(
      e.parent.type.components
    ) || i(e.appContext.components);
  }
  return o ? Tc(o) : n ? "App" : "Anonymous";
}
function Js(e) {
  return P(e) && "__vccOpts" in e;
}
const Tn = (e, t) => {
  const n = kr(e, t, Yt);
  if (p.NODE_ENV !== "production") {
    const o = Ks();
    o && o.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function $c() {
  if (p.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(u) {
      if (!W(u))
        return null;
      if (u.__isVue)
        return ["div", e, "VueInstance"];
      if (te(u)) {
        Ae();
        const g = u.value;
        return Pe(), [
          "div",
          {},
          ["span", e, d(u)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (rt(u))
          return [
            "div",
            {},
            ["span", e, ge(u) ? "ShallowReactive" : "Reactive"],
            "<",
            l(u),
            `>${Be(u) ? " (readonly)" : ""}`
          ];
        if (Be(u))
          return [
            "div",
            {},
            ["span", e, ge(u) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(u),
            ">"
          ];
      }
      return null;
    },
    hasBody(u) {
      return u && u.__isVue;
    },
    body(u) {
      if (u && u.__isVue)
        return [
          "div",
          {},
          ...s(u.$)
        ];
    }
  };
  function s(u) {
    const g = [];
    u.type.props && u.props && g.push(r("props", M(u.props))), u.setupState !== K && g.push(r("setup", u.setupState)), u.data !== K && g.push(r("data", M(u.data)));
    const m = f(u, "computed");
    m && g.push(r("computed", m));
    const S = f(u, "inject");
    return S && g.push(r("injected", S)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: u }]
    ]), g;
  }
  function r(u, g) {
    return g = z({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        u
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((m) => [
          "div",
          {},
          ["span", o, m + ": "],
          l(g[m], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(u, g = !0) {
    return typeof u == "number" ? ["span", t, u] : typeof u == "string" ? ["span", n, JSON.stringify(u)] : typeof u == "boolean" ? ["span", o, u] : W(u) ? ["object", { object: g ? M(u) : u }] : ["span", n, String(u)];
  }
  function f(u, g) {
    const m = u.type;
    if (P(m))
      return;
    const S = {};
    for (const V in u.ctx)
      h(m, V, g) && (S[V] = u.ctx[V]);
    return S;
  }
  function h(u, g, m) {
    const S = u[m];
    if ($(S) && S.includes(g) || W(S) && g in S || u.extends && h(u.extends, g, m) || u.mixins && u.mixins.some((V) => h(V, g, m)))
      return !0;
  }
  function d(u) {
    return ge(u) ? "ShallowRef" : u.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const gi = "3.5.26", xe = p.NODE_ENV !== "production" ? w : ee;
var ie = {};
let Eo;
const mi = typeof window < "u" && window.trustedTypes;
if (mi)
  try {
    Eo = /* @__PURE__ */ mi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ie.NODE_ENV !== "production" && xe(`Error creating trusted types policy: ${e}`);
  }
const zs = Eo ? (e) => Eo.createHTML(e) : (e) => e, Ac = "http://www.w3.org/2000/svg", Pc = "http://www.w3.org/1998/Math/MathML", Je = typeof document < "u" ? document : null, Ei = Je && /* @__PURE__ */ Je.createElement("template"), Ic = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, o) => {
    const i = t === "svg" ? Je.createElementNS(Ac, e) : t === "mathml" ? Je.createElementNS(Pc, e) : n ? Je.createElement(e, { is: n }) : Je.createElement(e);
    return e === "select" && o && o.multiple != null && i.setAttribute("multiple", o.multiple), i;
  },
  createText: (e) => Je.createTextNode(e),
  createComment: (e) => Je.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Je.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, o, i, s) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === s || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === s || !(i = i.nextSibling)); )
        ;
    else {
      Ei.innerHTML = zs(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Ei.content;
      if (o === "svg" || o === "mathml") {
        const f = l.firstChild;
        for (; f.firstChild; )
          l.appendChild(f.firstChild);
        l.removeChild(f);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Mc = /* @__PURE__ */ Symbol("_vtc");
function Rc(e, t, n) {
  const o = e[Mc];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const bi = /* @__PURE__ */ Symbol("_vod"), Fc = /* @__PURE__ */ Symbol("_vsh"), jc = /* @__PURE__ */ Symbol(ie.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), Hc = /(?:^|;)\s*display\s*:/;
function Lc(e, t, n) {
  const o = e.style, i = Y(n);
  let s = !1;
  if (n && !i) {
    if (t)
      if (Y(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && mn(o, l, "");
        }
      else
        for (const r in t)
          n[r] == null && mn(o, r, "");
    for (const r in n)
      r === "display" && (s = !0), mn(o, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = o[jc];
      r && (n += ";" + r), o.cssText = n, s = Hc.test(n);
    }
  } else t && e.removeAttribute("style");
  bi in e && (e[bi] = s ? o.display : "", e[Fc] && (o.display = "none"));
}
const kc = /[^\\];\s*$/, yi = /\s*!important$/;
function mn(e, t, n) {
  if ($(n))
    n.forEach((o) => mn(e, t, o));
  else if (n == null && (n = ""), ie.NODE_ENV !== "production" && kc.test(n) && xe(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const o = Uc(e, t);
    yi.test(n) ? e.setProperty(
      ye(o),
      n.replace(yi, ""),
      "important"
    ) : e[o] = n;
  }
}
const Ni = ["Webkit", "Moz", "ms"], to = {};
function Uc(e, t) {
  const n = to[t];
  if (n)
    return n;
  let o = _e(t);
  if (o !== "filter" && o in e)
    return to[t] = o;
  o = In(o);
  for (let i = 0; i < Ni.length; i++) {
    const s = Ni[i] + o;
    if (s in e)
      return to[t] = s;
  }
  return t;
}
const vi = "http://www.w3.org/1999/xlink";
function Oi(e, t, n, o, i, s = gr(t)) {
  o && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(vi, t.slice(6, t.length)) : e.setAttributeNS(vi, t, n) : n == null || s && !Ri(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    s ? "" : ct(n) ? String(n) : n
  );
}
function wi(e, t, n, o, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? zs(n) : n);
    return;
  }
  const s = e.tagName;
  if (t === "value" && s !== "PROGRESS" && // custom elements may use _value internally
  !s.includes("-")) {
    const l = s === "OPTION" ? e.getAttribute("value") || "" : e.value, f = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== f || !("_value" in e)) && (e.value = f), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ri(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    ie.NODE_ENV !== "production" && !r && xe(
      `Failed setting prop "${t}" on <${s.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(i || t);
}
function Bc(e, t, n, o) {
  e.addEventListener(t, n, o);
}
function Kc(e, t, n, o) {
  e.removeEventListener(t, n, o);
}
const xi = /* @__PURE__ */ Symbol("_vei");
function Wc(e, t, n, o, i = null) {
  const s = e[xi] || (e[xi] = {}), r = s[t];
  if (o && r)
    r.value = ie.NODE_ENV !== "production" ? Vi(o, t) : o;
  else {
    const [l, f] = Gc(t);
    if (o) {
      const h = s[t] = zc(
        ie.NODE_ENV !== "production" ? Vi(o, t) : o,
        i
      );
      Bc(e, l, h, f);
    } else r && (Kc(e, l, r, f), s[t] = void 0);
  }
}
const Di = /(?:Once|Passive|Capture)$/;
function Gc(e) {
  let t;
  if (Di.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Di); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : ye(e.slice(2)), t];
}
let no = 0;
const qc = /* @__PURE__ */ Promise.resolve(), Jc = () => no || (qc.then(() => no = 0), no = Date.now());
function zc(e, t) {
  const n = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= n.attached)
      return;
    Ke(
      Yc(o, n.value),
      t,
      5,
      [o]
    );
  };
  return n.value = e, n.attached = Jc(), n;
}
function Vi(e, t) {
  return P(e) || $(e) ? e : (xe(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), ee);
}
function Yc(e, t) {
  if ($(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (o) => (i) => !i._stopped && o && o(i)
    );
  } else
    return t;
}
const Si = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Xc = (e, t, n, o, i, s) => {
  const r = i === "svg";
  t === "class" ? Rc(e, o, r) : t === "style" ? Lc(e, n, o) : Xt(t) ? En(t) || Wc(e, t, n, o, s) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Zc(e, t, o, r)) ? (wi(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && Oi(e, t, o, r, s, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !Y(o)) ? wi(e, _e(t), o, s, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), Oi(e, t, o, r));
};
function Zc(e, t, n, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Si(t) && P(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "sandbox" && e.tagName === "IFRAME" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return Si(t) && Y(n) ? !1 : t in e;
}
const Ci = {};
// @__NO_SIDE_EFFECTS__
function Qc(e, t, n) {
  let o = /* @__PURE__ */ Ao(e, t);
  An(o) && (o = z({}, o, t));
  class i extends Lo {
    constructor(r) {
      super(o, r, n);
    }
  }
  return i.def = o, i;
}
const ef = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Lo extends ef {
  constructor(t, n = {}, o = $i) {
    super(), this._def = t, this._props = n, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== $i ? this._root = this.shadowRoot : (ie.NODE_ENV !== "production" && this.shadowRoot && xe(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow(
      z({}, t.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Lo) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._inheritParentContext(t));
  }
  _inheritParentContext(t = this._parent) {
    t && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      t._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, ls(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(t) {
    for (const n of t)
      this._setAttr(n.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const t = (o, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: s, styles: r } = o;
      let l;
      if (s && !$(s))
        for (const f in s) {
          const h = s[f];
          (h === Number || h && h.type === Number) && (f in this._props && (this._props[f] = Go(this._props[f])), (l || (l = /* @__PURE__ */ Object.create(null)))[_e(f)] = !0);
        }
      this._numberProps = l, this._resolveProps(o), this.shadowRoot ? this._applyStyles(r) : ie.NODE_ENV !== "production" && r && xe(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then((o) => {
      o.configureApp = this._def.configureApp, t(this._def = o, !0);
    }) : t(this._def);
  }
  _mount(t) {
    ie.NODE_ENV !== "production" && !t.name && (t.name = "VueElement"), this._app = this._createApp(t), this._inheritParentContext(), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const o in n)
        F(this, o) ? ie.NODE_ENV !== "production" && xe(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => os(n[o])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, o = $(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && o.includes(i) && this._setProp(i, this[i]);
    for (const i of o.map(_e))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(s) {
          this._setProp(i, s, !0, !this._patching);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let o = n ? this.getAttribute(t) : Ci;
    const i = _e(t);
    n && this._numberProps && this._numberProps[i] && (o = Go(o)), this._setProp(i, o, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, o = !0, i = !1) {
    if (n !== this._props[t] && (this._dirty = !0, n === Ci ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), o)) {
      const s = this._ob;
      s && (this._processMutations(s.takeRecords()), s.disconnect()), n === !0 ? this.setAttribute(ye(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(ye(t), n + "") : n || this.removeAttribute(ye(t)), s && s.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const t = this._createVNode();
    this._app && (t.appContext = this._app._context), rf(t, this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Te(this._def, z(t, this._props));
    return this._instance || (n.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, ie.NODE_ENV !== "production" && (o.ceReload = (s) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(s), this._instance = null, this._update();
      });
      const i = (s, r) => {
        this.dispatchEvent(
          new CustomEvent(
            s,
            An(r[0]) ? z({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      o.emit = (s, ...r) => {
        i(s, r), ye(s) !== s && i(ye(s), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const o = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const s = document.createElement("style");
      if (o && s.setAttribute("nonce", o), s.textContent = t[i], this.shadowRoot.prepend(s), ie.NODE_ENV !== "production")
        if (n) {
          if (n.__hmrId) {
            this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
            let r = this._childStyles.get(n.__hmrId);
            r || this._childStyles.set(n.__hmrId, r = []), r.push(s);
          }
        } else
          (this._styles || (this._styles = [])).push(s);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const o = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = this._getSlots(), n = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const i = t[o], s = i.getAttribute("name") || "default", r = this._slots[s], l = i.parentNode;
      if (r)
        for (const f of r) {
          if (n && f.nodeType === 1) {
            const h = n + "-s", d = document.createTreeWalker(f, 1);
            f.setAttribute(h, "");
            let u;
            for (; u = d.nextNode(); )
              u.setAttribute(h, "");
          }
          l.insertBefore(f, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const t = [this];
    this._teleportTargets && t.push(...this._teleportTargets);
    const n = /* @__PURE__ */ new Set();
    for (const o of t) {
      const i = o.querySelectorAll("slot");
      for (let s = 0; s < i.length; s++)
        n.add(i[s]);
    }
    return Array.from(n);
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (ie.NODE_ENV !== "production" && (this._styleChildren.delete(t), this._childStyles && t.__hmrId)) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((o) => this._root.removeChild(o)), n.length = 0);
    }
  }
}
const tf = ["ctrl", "shift", "alt", "meta"], nf = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => tf.some((n) => e[`${n}Key`] && !t.includes(n))
}, of = (e, t) => {
  const n = e._withMods || (e._withMods = {}), o = t.join(".");
  return n[o] || (n[o] = ((i, ...s) => {
    for (let r = 0; r < t.length; r++) {
      const l = nf[t[r]];
      if (l && l(i, t)) return;
    }
    return e(i, ...s);
  }));
}, sf = /* @__PURE__ */ z({ patchProp: Xc }, Ic);
let Ti;
function Ys() {
  return Ti || (Ti = cc(sf));
}
const rf = ((...e) => {
  Ys().render(...e);
}), $i = ((...e) => {
  const t = Ys().createApp(...e);
  ie.NODE_ENV !== "production" && (cf(t), ff(t));
  const { mount: n } = t;
  return t.mount = (o) => {
    const i = uf(o);
    if (!i) return;
    const s = t._component;
    !P(s) && !s.render && !s.template && (s.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, lf(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
});
function lf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function cf(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => dr(t) || pr(t) || hr(t),
    writable: !1
  });
}
function ff(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        xe(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return xe(o), n;
      },
      set() {
        xe(o);
      }
    });
  }
}
function uf(e) {
  if (Y(e)) {
    const t = document.querySelector(e);
    return ie.NODE_ENV !== "production" && !t && xe(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return ie.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && xe(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
var af = {};
function df() {
  $c();
}
af.NODE_ENV !== "production" && df();
const pf = { class: "viewer-area" }, hf = {
  key: 0,
  class: "empty-state"
}, _f = {
  key: 1,
  class: "canvas-container"
}, gf = { class: "image-wrapper" }, mf = ["src"], Ef = {
  class: "overlay-layer",
  viewBox: "0 0 100 100",
  preserveAspectRatio: "none"
}, bf = ["id", "cx", "cy", "r"], yf = ["stop-color", "stop-opacity"], Nf = ["stop-color"], vf = ["points", "fill"], Of = ["onClick", "title"], wf = ["onClick"], xf = /* @__PURE__ */ Ao({
  __name: "InteractiveFloorplan",
  props: {
    config: {},
    entityStates: {}
  },
  emits: ["entity-click"],
  setup(e, { emit: t }) {
    const n = e, o = t, i = Tn(() => !!n.config.imageBase64);
    function s(u) {
      o("entity-click", u.entityId, u.type);
    }
    function r(u) {
      const g = n.entityStates[u.entityId] || { isOn: !1 }, { style: m } = u;
      if (!g.isOn)
        return {
          color: m.offColor,
          opacity: m.offOpacity
        };
      let S = g.color || m.onColor, V = m.onOpacity;
      return g.brightness !== void 0 && (V = g.brightness / 255 * m.onOpacity), { color: S, opacity: V };
    }
    function l(u) {
      const { style: g, x: m, y: S } = u;
      return {
        left: `${m}%`,
        top: `${S}%`,
        width: `${g.width}%`,
        height: `${g.height}%`,
        transform: `translate(-50%, -50%) rotate(${g.rotation}deg)`,
        position: "absolute",
        zIndex: 10
      };
    }
    function f(u) {
      const { color: g, opacity: m } = r(u), { shape: S } = u, V = n.entityStates[u.entityId] || { isOn: !1 };
      let X = m;
      if (V.isOn && V.brightness !== void 0) {
        const L = u.style.onOpacity;
        X = 0.3 + V.brightness / 255 * (L - 0.3);
      }
      return {
        width: "100%",
        height: "100%",
        backgroundColor: g,
        opacity: X,
        borderRadius: S === "circle" ? "50%" : "4px",
        cursor: "pointer",
        boxShadow: V.isOn ? `0 0 15px ${g}` : "none",
        transition: "all 0.3s ease"
      };
    }
    function h(u) {
      const { offsetX: g, offsetY: m, color: S } = u.labelConfig || {};
      return {
        transform: `translate(-50%, -50%) translate(${g || 0}%, ${m || 0}%)`,
        color: S || "#ffffff",
        pointerEvents: "auto",
        cursor: "pointer"
      };
    }
    function d(u) {
      return u ? u.map((g) => `${g.x} ${g.y}`).join(",") : "";
    }
    return (u, g) => (de(), be("div", pf, [
      i.value ? (de(), be("div", _f, [
        qe("div", gf, [
          qe("img", {
            src: n.config.imageBase64,
            alt: "Floorplan Base",
            draggable: "false"
          }, null, 8, mf),
          (de(), be("svg", Ef, [
            qe("defs", null, [
              (de(!0), be(he, null, Zn(n.config.entities, (m) => (de(), be("radialGradient", {
                key: "grad-" + m.id,
                id: "grad-" + m.id,
                gradientUnits: "userSpaceOnUse",
                cx: m.x,
                cy: m.y,
                r: m.style.gradientRadius
              }, [
                qe("stop", {
                  offset: "0%",
                  "stop-color": r(m).color,
                  "stop-opacity": Math.max(0.3, r(m).opacity)
                }, null, 8, yf),
                qe("stop", {
                  offset: "100%",
                  "stop-color": r(m).color,
                  "stop-opacity": "0"
                }, null, 8, Nf)
              ], 8, bf))), 128))
            ]),
            (de(!0), be(he, null, Zn(n.config.entities, (m) => (de(), be("polygon", {
              key: "poly-" + m.id,
              points: d(m.points),
              fill: n.entityStates[m.entityId]?.isOn ? `url(#grad-${m.id})` : "transparent",
              stroke: "none",
              style: { "pointer-events": "none", transition: "fill-opacity 0.3s ease" }
            }, null, 8, vf))), 128))
          ])),
          (de(!0), be(he, null, Zn(n.config.entities, (m) => (de(), be("div", {
            key: m.id,
            class: "interactive-entity",
            style: xt(l(m)),
            onClick: (S) => s(m),
            title: m.label
          }, [
            qe("div", {
              class: "entity-shape",
              style: xt(f(m))
            }, null, 4),
            m.labelConfig.show ? (de(), be("div", {
              key: 0,
              class: "entity-label",
              style: xt(h(m)),
              onClick: of((S) => s(m), ["stop"])
            }, ji(m.label), 13, wf)) : Ec("", !0)
          ], 12, Of))), 128))
        ])
      ])) : (de(), be("div", hf, [...g[0] || (g[0] = [
        qe("p", null, "No floorplan loaded. Go to Editor to set up.", -1)
      ])]))
    ]));
  }
}), Xs = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [o, i] of t)
    n[o] = i;
  return n;
}, Df = /* @__PURE__ */ Xs(xf, [["__scopeId", "data-v-cb5cf9d5"]]), Vf = {
  key: 0,
  class: "ha-card-wrapper"
}, Sf = {
  key: 1,
  class: "error"
}, Cf = /* @__PURE__ */ Ao({
  __name: "HaFloorplanCard.ce",
  props: {
    config: { type: [Object, String] },
    hass: { type: null }
  },
  setup(e) {
    const t = e, n = Tn(() => {
      if (!t.config) return null;
      let s = null;
      if (typeof t.config == "string")
        try {
          s = JSON.parse(t.config);
        } catch (r) {
          return console.error("Failed to parse floorplan config", r), null;
        }
      else
        s = t.config;
      return s && s.imageBase64 ? {
        ...s,
        imageBase64: s.imageBase64.replace(/\s/g, "")
      } : s;
    }), o = Tn(() => {
      const s = {};
      return !n.value || !t.hass || n.value.entities?.forEach((r) => {
        const l = t.hass.states[r.entityId];
        if (l) {
          let f = !1, h, d;
          r.type === "light" ? (f = l.state === "on", f && (l.attributes.rgb_color && (h = `rgb(${l.attributes.rgb_color.join(",")})`), l.attributes.brightness !== void 0 && (d = l.attributes.brightness))) : r.type === "media_player" ? f = l.state !== "off" && l.state !== "unavailable" && l.state !== "unknown" : r.type === "camera" ? f = l.state === "recording" || l.state === "streaming" : f = l.state === "on", s[r.entityId] = { isOn: f, color: h, brightness: d };
        } else
          s[r.entityId] = { isOn: !1 };
      }), s;
    });
    function i(s, r) {
      if (t.hass)
        if (r === "light")
          t.hass.callService("light", "toggle", {
            entity_id: s
          });
        else if (r === "media_player")
          t.hass.callService("media_player", "toggle", {
            entity_id: s
          });
        else if (r === "camera") {
          const l = o.value[s]?.isOn ? "turn_off" : "turn_on";
          t.hass.callService("homeassistant", l, {
            entity_id: s
          });
        } else
          t.hass.callService("homeassistant", "toggle", {
            entity_id: s
          });
    }
    return console.info("%c HA Floorplan Card %c v1.1.0-9-gdd83a68 ", "background: #333; color: #fff", "background: #0ea5e9; color: #fff"), (s, r) => n.value ? (de(), be("ha-card", Vf, [
      Te(Df, {
        config: n.value,
        "entity-states": o.value,
        onEntityClick: i
      }, null, 8, ["config", "entity-states"])
    ])) : (de(), be("div", Sf, " No Configuration Loaded "));
  }
}), Tf = ":host{display:block!important;width:100%!important;margin:0!important;padding:0!important;box-sizing:border-box!important}*,*:before,*:after{box-sizing:border-box}ha-card{display:block!important;width:100%!important;margin:0!important;padding:0!important;background:none!important;box-shadow:none!important;border:none!important}.ha-card-wrapper{width:100%!important;display:block!important;padding:0!important;margin:0!important}.viewer-area{flex:1;background-color:transparent;display:block;position:relative;padding:0!important;margin:0!important;height:auto;width:100%!important}.empty-state{color:var(--color-text-secondary);font-size:1.2rem;padding:20px;text-align:center}.canvas-container{border-radius:0;overflow:hidden;position:relative;max-width:100%;max-height:100%}.image-wrapper{position:relative;display:block;width:100%;line-height:0;container-type:inline-size}.image-wrapper img{width:100%;height:auto;display:block}.entity-label{position:absolute;top:50%;left:50%;background:#000000b3;color:#fff;padding:2px 4px;font-size:14px;font-size:1.5cqw;border-radius:4px;white-space:nowrap;pointer-events:none;line-height:1.2}.overlay-layer{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:0}.overlay-layer polygon{vector-effect:non-scaling-stroke}.interactive-entity{z-index:10}.error{padding:20px;color:red}", $f = /* @__PURE__ */ Xs(Cf, [["styles", [Tf]]]), Af = /* @__PURE__ */ Qc($f);
class Pf extends Af {
  setConfig(t) {
    t.floorplan_config ? this.config = t.floorplan_config : t.config ? this.config = t.config : this.config = t;
  }
}
customElements.define("ha-floorplan-card", Pf);
console.info(
  "%c HA FLOORPLAN CARD %c v0.0.1 ",
  "color: white; background: #202020; font-weight: 700;",
  "color: #202020; background: #91eb61; font-weight: 700;"
);
