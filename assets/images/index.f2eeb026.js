const ho = function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const r of i)
      if (r.type === "childList")
        for (const o of r.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && n(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function t(i) {
    const r = {};
    return (
      i.integrity && (r.integrity = i.integrity),
      i.referrerpolicy && (r.referrerPolicy = i.referrerpolicy),
      i.crossorigin === "use-credentials"
        ? (r.credentials = "include")
        : i.crossorigin === "anonymous"
        ? (r.credentials = "omit")
        : (r.credentials = "same-origin"),
      r
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const r = t(i);
    fetch(i.href, r);
  }
};
ho();
/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Yr = "142",
  fo = 0,
  os = 1,
  po = 2,
  Ta = 1,
  mo = 2,
  oi = 3,
  hi = 0,
  yt = 1,
  Hn = 2,
  go = 1,
  Kt = 0,
  Vn = 1,
  Nr = 2,
  ls = 3,
  cs = 4,
  vo = 5,
  Un = 100,
  xo = 101,
  _o = 102,
  us = 103,
  hs = 104,
  yo = 200,
  Mo = 201,
  bo = 202,
  wo = 203,
  Ca = 204,
  La = 205,
  Ao = 206,
  So = 207,
  Eo = 208,
  To = 209,
  Co = 210,
  Lo = 0,
  Ro = 1,
  Do = 2,
  Or = 3,
  Po = 4,
  Io = 5,
  Fo = 6,
  Bo = 7,
  Ra = 0,
  Uo = 1,
  zo = 2,
  Vt = 0,
  No = 1,
  Oo = 2,
  ko = 3,
  Vo = 4,
  Go = 5,
  Da = 300,
  Wn = 301,
  jn = 302,
  kr = 303,
  Vr = 304,
  Zi = 306,
  Gr = 1e3,
  _t = 1001,
  Hr = 1002,
  tt = 1003,
  ds = 1004,
  fs = 1005,
  ut = 1006,
  Ho = 1007,
  Ki = 1008,
  mn = 1009,
  Wo = 1010,
  jo = 1011,
  Pa = 1012,
  Xo = 1013,
  un = 1014,
  hn = 1015,
  di = 1016,
  qo = 1017,
  Yo = 1018,
  Gn = 1020,
  Qo = 1021,
  Jo = 1022,
  Rt = 1023,
  Zo = 1024,
  Ko = 1025,
  fn = 1026,
  Xn = 1027,
  $o = 1028,
  el = 1029,
  tl = 1030,
  nl = 1031,
  il = 1033,
  ar = 33776,
  or = 33777,
  lr = 33778,
  cr = 33779,
  ps = 35840,
  ms = 35841,
  gs = 35842,
  vs = 35843,
  rl = 36196,
  xs = 37492,
  _s = 37496,
  ys = 37808,
  Ms = 37809,
  bs = 37810,
  ws = 37811,
  As = 37812,
  Ss = 37813,
  Es = 37814,
  Ts = 37815,
  Cs = 37816,
  Ls = 37817,
  Rs = 37818,
  Ds = 37819,
  Ps = 37820,
  Is = 37821,
  Fs = 36492,
  gn = 3e3,
  ze = 3001,
  sl = 3200,
  al = 3201,
  Ia = 0,
  ol = 1,
  Ot = "srgb",
  dn = "srgb-linear",
  ur = 7680,
  ll = 519,
  Bs = 35044,
  Us = "300 es",
  Wr = 1035;
class Qn {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t);
  }
  hasEventListener(e, t) {
    if (this._listeners === void 0) return !1;
    const n = this._listeners;
    return n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    if (this._listeners === void 0) return;
    const i = this._listeners[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    if (this._listeners === void 0) return;
    const n = this._listeners[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, o = i.length; r < o; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const Ye = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let zs = 1234567;
const ci = Math.PI / 180,
  qi = 180 / Math.PI;
function Jn() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Ye[s & 255] +
    Ye[(s >> 8) & 255] +
    Ye[(s >> 16) & 255] +
    Ye[(s >> 24) & 255] +
    "-" +
    Ye[e & 255] +
    Ye[(e >> 8) & 255] +
    "-" +
    Ye[((e >> 16) & 15) | 64] +
    Ye[(e >> 24) & 255] +
    "-" +
    Ye[(t & 63) | 128] +
    Ye[(t >> 8) & 255] +
    "-" +
    Ye[(t >> 16) & 255] +
    Ye[(t >> 24) & 255] +
    Ye[n & 255] +
    Ye[(n >> 8) & 255] +
    Ye[(n >> 16) & 255] +
    Ye[(n >> 24) & 255]
  ).toLowerCase();
}
function nt(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function Qr(s, e) {
  return ((s % e) + e) % e;
}
function cl(s, e, t, n, i) {
  return n + ((s - e) * (i - n)) / (t - e);
}
function ul(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function ui(s, e, t) {
  return (1 - t) * s + t * e;
}
function hl(s, e, t, n) {
  return ui(s, e, 1 - Math.exp(-t * n));
}
function dl(s, e = 1) {
  return e - Math.abs(Qr(s, e * 2) - e);
}
function fl(s, e, t) {
  return s <= e
    ? 0
    : s >= t
    ? 1
    : ((s = (s - e) / (t - e)), s * s * (3 - 2 * s));
}
function pl(s, e, t) {
  return s <= e
    ? 0
    : s >= t
    ? 1
    : ((s = (s - e) / (t - e)), s * s * s * (s * (s * 6 - 15) + 10));
}
function ml(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function gl(s, e) {
  return s + Math.random() * (e - s);
}
function vl(s) {
  return s * (0.5 - Math.random());
}
function xl(s) {
  s !== void 0 && (zs = s);
  let e = (zs += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function _l(s) {
  return s * ci;
}
function yl(s) {
  return s * qi;
}
function jr(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function Ml(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function Yi(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function bl(s, e, t, n, i) {
  const r = Math.cos,
    o = Math.sin,
    a = r(t / 2),
    u = o(t / 2),
    c = r((e + n) / 2),
    f = o((e + n) / 2),
    h = r((e - n) / 2),
    l = o((e - n) / 2),
    m = r((n - e) / 2),
    g = o((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(a * f, u * h, u * l, a * c);
      break;
    case "YZY":
      s.set(u * l, a * f, u * h, a * c);
      break;
    case "ZXZ":
      s.set(u * h, u * l, a * f, a * c);
      break;
    case "XZX":
      s.set(a * f, u * g, u * m, a * c);
      break;
    case "YXY":
      s.set(u * m, a * f, u * g, a * c);
      break;
    case "ZYZ":
      s.set(u * g, u * m, a * f, a * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i
      );
  }
}
function wl(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function Al(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
var Sl = Object.freeze({
  __proto__: null,
  DEG2RAD: ci,
  RAD2DEG: qi,
  generateUUID: Jn,
  clamp: nt,
  euclideanModulo: Qr,
  mapLinear: cl,
  inverseLerp: ul,
  lerp: ui,
  damp: hl,
  pingpong: dl,
  smoothstep: fl,
  smootherstep: pl,
  randInt: ml,
  randFloat: gl,
  randFloatSpread: vl,
  seededRandom: xl,
  degToRad: _l,
  radToDeg: yl,
  isPowerOfTwo: jr,
  ceilPowerOfTwo: Ml,
  floorPowerOfTwo: Yi,
  setQuaternionFromProperEuler: bl,
  normalize: Al,
  denormalize: wl,
});
class me {
  constructor(e = 0, t = 0) {
    (me.prototype.isVector2 = !0), (this.x = e), (this.y = t);
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return (this.x = e), (this.y = t), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), this;
  }
  addVectors(e, t) {
    return (this.x = e.x + t.x), (this.y = e.y + t.y), this;
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector2: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), this;
  }
  subVectors(e, t) {
    return (this.x = e.x - t.x), (this.y = e.y - t.y), this;
  }
  multiply(e) {
    return (this.x *= e.x), (this.y *= e.y), this;
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), this;
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)), (this.y = Math.min(this.y, e.y)), this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)), (this.y = Math.max(this.y, e.y)), this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this;
  }
  ceil() {
    return (this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this;
  }
  round() {
    return (this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this;
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (this.x += (e.x - this.x) * t), (this.y += (e.y - this.y) * t), this;
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n), (this.y = e.y + (t.y - e.y) * n), this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector2: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      this
    );
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      o = this.y - e.y;
    return (this.x = r * n - o * i + e.x), (this.y = r * i + o * n + e.y), this;
  }
  random() {
    return (this.x = Math.random()), (this.y = Math.random()), this;
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y;
  }
}
class ht {
  constructor() {
    (ht.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix3: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, r, o, a, u, c) {
    const f = this.elements;
    return (
      (f[0] = e),
      (f[1] = i),
      (f[2] = a),
      (f[3] = t),
      (f[4] = r),
      (f[5] = u),
      (f[6] = n),
      (f[7] = o),
      (f[8] = c),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this;
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]), this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      o = n[0],
      a = n[3],
      u = n[6],
      c = n[1],
      f = n[4],
      h = n[7],
      l = n[2],
      m = n[5],
      g = n[8],
      d = i[0],
      p = i[3],
      v = i[6],
      M = i[1],
      S = i[4],
      A = i[7],
      b = i[2],
      C = i[5],
      R = i[8];
    return (
      (r[0] = o * d + a * M + u * b),
      (r[3] = o * p + a * S + u * C),
      (r[6] = o * v + a * A + u * R),
      (r[1] = c * d + f * M + h * b),
      (r[4] = c * p + f * S + h * C),
      (r[7] = c * v + f * A + h * R),
      (r[2] = l * d + m * M + g * b),
      (r[5] = l * p + m * S + g * C),
      (r[8] = l * v + m * A + g * R),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      u = e[6],
      c = e[7],
      f = e[8];
    return (
      t * o * f - t * a * c - n * r * f + n * a * u + i * r * c - i * o * u
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      u = e[6],
      c = e[7],
      f = e[8],
      h = f * o - a * c,
      l = a * u - f * r,
      m = c * r - o * u,
      g = t * h + n * l + i * m;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const d = 1 / g;
    return (
      (e[0] = h * d),
      (e[1] = (i * c - f * n) * d),
      (e[2] = (a * n - i * o) * d),
      (e[3] = l * d),
      (e[4] = (f * t - i * u) * d),
      (e[5] = (i * r - a * t) * d),
      (e[6] = m * d),
      (e[7] = (n * u - c * t) * d),
      (e[8] = (o * t - n * r) * d),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, o, a) {
    const u = Math.cos(r),
      c = Math.sin(r);
    return (
      this.set(
        n * u,
        n * c,
        -n * (u * o + c * a) + o + e,
        -i * c,
        i * u,
        -i * (-c * o + u * a) + a + t,
        0,
        0,
        1
      ),
      this
    );
  }
  scale(e, t) {
    const n = this.elements;
    return (
      (n[0] *= e),
      (n[3] *= e),
      (n[6] *= e),
      (n[1] *= t),
      (n[4] *= t),
      (n[7] *= t),
      this
    );
  }
  rotate(e) {
    const t = Math.cos(e),
      n = Math.sin(e),
      i = this.elements,
      r = i[0],
      o = i[3],
      a = i[6],
      u = i[1],
      c = i[4],
      f = i[7];
    return (
      (i[0] = t * r + n * u),
      (i[3] = t * o + n * c),
      (i[6] = t * a + n * f),
      (i[1] = -n * r + t * u),
      (i[4] = -n * o + t * c),
      (i[7] = -n * a + t * f),
      this
    );
  }
  translate(e, t) {
    const n = this.elements;
    return (
      (n[0] += e * n[2]),
      (n[3] += e * n[5]),
      (n[6] += e * n[8]),
      (n[1] += t * n[2]),
      (n[4] += t * n[5]),
      (n[7] += t * n[8]),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
function Fa(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] > 65535) return !0;
  return !1;
}
function fi(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function pn(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function ji(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
const hr = { [Ot]: { [dn]: pn }, [dn]: { [Ot]: ji } },
  mt = {
    legacyMode: !0,
    get workingColorSpace() {
      return dn;
    },
    set workingColorSpace(s) {
      console.warn("THREE.ColorManagement: .workingColorSpace is readonly.");
    },
    convert: function (s, e, t) {
      if (this.legacyMode || e === t || !e || !t) return s;
      if (hr[e] && hr[e][t] !== void 0) {
        const n = hr[e][t];
        return (s.r = n(s.r)), (s.g = n(s.g)), (s.b = n(s.b)), s;
      }
      throw new Error("Unsupported color space conversion.");
    },
    fromWorkingColorSpace: function (s, e) {
      return this.convert(s, this.workingColorSpace, e);
    },
    toWorkingColorSpace: function (s, e) {
      return this.convert(s, e, this.workingColorSpace);
    },
  },
  Ba = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  Ge = { r: 0, g: 0, b: 0 },
  gt = { h: 0, s: 0, l: 0 },
  Ai = { h: 0, s: 0, l: 0 };
function dr(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
      ? e
      : t < 2 / 3
      ? s + (e - s) * 6 * (2 / 3 - t)
      : s
  );
}
function Si(s, e) {
  return (e.r = s.r), (e.g = s.g), (e.b = s.b), e;
}
class Ce {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      t === void 0 && n === void 0 ? this.set(e) : this.setRGB(e, t, n)
    );
  }
  set(e) {
    return (
      e && e.isColor
        ? this.copy(e)
        : typeof e == "number"
        ? this.setHex(e)
        : typeof e == "string" && this.setStyle(e),
      this
    );
  }
  setScalar(e) {
    return (this.r = e), (this.g = e), (this.b = e), this;
  }
  setHex(e, t = Ot) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      mt.toWorkingColorSpace(this, t),
      this
    );
  }
  setRGB(e, t, n, i = dn) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      mt.toWorkingColorSpace(this, i),
      this
    );
  }
  setHSL(e, t, n, i = dn) {
    if (((e = Qr(e, 1)), (t = nt(t, 0, 1)), (n = nt(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        o = 2 * n - r;
      (this.r = dr(o, r, e + 1 / 3)),
        (this.g = dr(o, r, e)),
        (this.b = dr(o, r, e - 1 / 3));
    }
    return mt.toWorkingColorSpace(this, i), this;
  }
  setStyle(e, t = Ot) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored."
        );
    }
    let i;
    if ((i = /^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e))) {
      let r;
      const o = i[1],
        a = i[2];
      switch (o) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(255, parseInt(r[1], 10)) / 255),
              (this.g = Math.min(255, parseInt(r[2], 10)) / 255),
              (this.b = Math.min(255, parseInt(r[3], 10)) / 255),
              mt.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          )
            return (
              (this.r = Math.min(100, parseInt(r[1], 10)) / 100),
              (this.g = Math.min(100, parseInt(r[2], 10)) / 100),
              (this.b = Math.min(100, parseInt(r[3], 10)) / 100),
              mt.toWorkingColorSpace(this, t),
              n(r[4]),
              this
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                a
              ))
          ) {
            const u = parseFloat(r[1]) / 360,
              c = parseInt(r[2], 10) / 100,
              f = parseInt(r[3], 10) / 100;
            return n(r[4]), this.setHSL(u, c, f, t);
          }
          break;
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        o = r.length;
      if (o === 3)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(0), 16) / 255),
          (this.g = parseInt(r.charAt(1) + r.charAt(1), 16) / 255),
          (this.b = parseInt(r.charAt(2) + r.charAt(2), 16) / 255),
          mt.toWorkingColorSpace(this, t),
          this
        );
      if (o === 6)
        return (
          (this.r = parseInt(r.charAt(0) + r.charAt(1), 16) / 255),
          (this.g = parseInt(r.charAt(2) + r.charAt(3), 16) / 255),
          (this.b = parseInt(r.charAt(4) + r.charAt(5), 16) / 255),
          mt.toWorkingColorSpace(this, t),
          this
        );
    }
    return e && e.length > 0 ? this.setColorName(e, t) : this;
  }
  setColorName(e, t = Ot) {
    const n = Ba[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return (this.r = e.r), (this.g = e.g), (this.b = e.b), this;
  }
  copySRGBToLinear(e) {
    return (this.r = pn(e.r)), (this.g = pn(e.g)), (this.b = pn(e.b)), this;
  }
  copyLinearToSRGB(e) {
    return (this.r = ji(e.r)), (this.g = ji(e.g)), (this.b = ji(e.b)), this;
  }
  convertSRGBToLinear() {
    return this.copySRGBToLinear(this), this;
  }
  convertLinearToSRGB() {
    return this.copyLinearToSRGB(this), this;
  }
  getHex(e = Ot) {
    return (
      mt.fromWorkingColorSpace(Si(this, Ge), e),
      (nt(Ge.r * 255, 0, 255) << 16) ^
        (nt(Ge.g * 255, 0, 255) << 8) ^
        (nt(Ge.b * 255, 0, 255) << 0)
    );
  }
  getHexString(e = Ot) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = dn) {
    mt.fromWorkingColorSpace(Si(this, Ge), t);
    const n = Ge.r,
      i = Ge.g,
      r = Ge.b,
      o = Math.max(n, i, r),
      a = Math.min(n, i, r);
    let u, c;
    const f = (a + o) / 2;
    if (a === o) (u = 0), (c = 0);
    else {
      const h = o - a;
      switch (((c = f <= 0.5 ? h / (o + a) : h / (2 - o - a)), o)) {
        case n:
          u = (i - r) / h + (i < r ? 6 : 0);
          break;
        case i:
          u = (r - n) / h + 2;
          break;
        case r:
          u = (n - i) / h + 4;
          break;
      }
      u /= 6;
    }
    return (e.h = u), (e.s = c), (e.l = f), e;
  }
  getRGB(e, t = dn) {
    return (
      mt.fromWorkingColorSpace(Si(this, Ge), t),
      (e.r = Ge.r),
      (e.g = Ge.g),
      (e.b = Ge.b),
      e
    );
  }
  getStyle(e = Ot) {
    return (
      mt.fromWorkingColorSpace(Si(this, Ge), e),
      e !== Ot
        ? `color(${e} ${Ge.r} ${Ge.g} ${Ge.b})`
        : `rgb(${(Ge.r * 255) | 0},${(Ge.g * 255) | 0},${(Ge.b * 255) | 0})`
    );
  }
  offsetHSL(e, t, n) {
    return (
      this.getHSL(gt),
      (gt.h += e),
      (gt.s += t),
      (gt.l += n),
      this.setHSL(gt.h, gt.s, gt.l),
      this
    );
  }
  add(e) {
    return (this.r += e.r), (this.g += e.g), (this.b += e.b), this;
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r), (this.g = e.g + t.g), (this.b = e.b + t.b), this
    );
  }
  addScalar(e) {
    return (this.r += e), (this.g += e), (this.b += e), this;
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return (this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this;
  }
  multiplyScalar(e) {
    return (this.r *= e), (this.g *= e), (this.b *= e), this;
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    this.getHSL(gt), e.getHSL(Ai);
    const n = ui(gt.h, Ai.h, t),
      i = ui(gt.s, Ai.s, t),
      r = ui(gt.l, Ai.l, t);
    return this.setHSL(n, i, r), this;
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return (this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e;
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      e.normalized === !0 &&
        ((this.r /= 255), (this.g /= 255), (this.b /= 255)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    yield this.r, yield this.g, yield this.b;
  }
}
Ce.NAMES = Ba;
let Mn;
class Ua {
  static getDataURL(e) {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement == "undefined")
      return e.src;
    let t;
    if (e instanceof HTMLCanvasElement) t = e;
    else {
      Mn === void 0 && (Mn = fi("canvas")),
        (Mn.width = e.width),
        (Mn.height = e.height);
      const n = Mn.getContext("2d");
      e instanceof ImageData
        ? n.putImageData(e, 0, 0)
        : n.drawImage(e, 0, 0, e.width, e.height),
        (t = Mn);
    }
    return t.width > 2048 || t.height > 2048
      ? (console.warn(
          "THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",
          e
        ),
        t.toDataURL("image/jpeg", 0.6))
      : t.toDataURL("image/png");
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement != "undefined" &&
        e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement != "undefined" &&
        e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap != "undefined" && e instanceof ImageBitmap)
    ) {
      const t = fi("canvas");
      (t.width = e.width), (t.height = e.height);
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let o = 0; o < r.length; o++) r[o] = pn(r[o] / 255) * 255;
      return n.putImageData(i, 0, 0), t;
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(pn(t[n] / 255) * 255))
          : (t[n] = pn(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."
        ),
        e
      );
  }
}
class za {
  constructor(e = null) {
    (this.isSource = !0),
      (this.uuid = Jn()),
      (this.data = e),
      (this.version = 0);
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let o = 0, a = i.length; o < a; o++)
          i[o].isDataTexture ? r.push(fr(i[o].image)) : r.push(fr(i[o]));
      } else r = fr(i);
      n.url = r;
    }
    return t || (e.images[this.uuid] = n), n;
  }
}
function fr(s) {
  return (typeof HTMLImageElement != "undefined" &&
    s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement != "undefined" &&
      s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap != "undefined" && s instanceof ImageBitmap)
    ? Ua.getDataURL(s)
    : s.data
    ? {
        data: Array.from(s.data),
        width: s.width,
        height: s.height,
        type: s.data.constructor.name,
      }
    : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let El = 0;
class dt extends Qn {
  constructor(
    e = dt.DEFAULT_IMAGE,
    t = dt.DEFAULT_MAPPING,
    n = _t,
    i = _t,
    r = ut,
    o = Ki,
    a = Rt,
    u = mn,
    c = 1,
    f = gn
  ) {
    super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: El++ }),
      (this.uuid = Jn()),
      (this.name = ""),
      (this.source = new za(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = o),
      (this.anisotropy = c),
      (this.format = a),
      (this.internalFormat = null),
      (this.type = u),
      (this.offset = new me(0, 0)),
      (this.repeat = new me(1, 1)),
      (this.center = new me(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new ht()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.encoding = f),
      (this.userData = {}),
      (this.version = 0),
      (this.onUpdate = null),
      (this.isRenderTargetTexture = !1),
      (this.needsPMREMUpdate = !1);
  }
  get image() {
    return this.source.data;
  }
  set image(e) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.encoding = e.encoding),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.5, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      type: this.type,
      encoding: this.encoding,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Da) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Gr:
          e.x = e.x - Math.floor(e.x);
          break;
        case _t:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Hr:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Gr:
          e.y = e.y - Math.floor(e.y);
          break;
        case _t:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Hr:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return this.flipY && (e.y = 1 - e.y), e;
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
}
dt.DEFAULT_IMAGE = null;
dt.DEFAULT_MAPPING = Da;
class Be {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (Be.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i);
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return (this.x = e), (this.y = t), (this.z = n), (this.w = i), this;
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), (this.w = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setW(e) {
    return (this.w = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x),
        (this.y += e.y),
        (this.z += e.z),
        (this.w += e.w),
        this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), (this.w += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector4: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x),
        (this.y -= e.y),
        (this.z -= e.z),
        (this.w -= e.w),
        this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x), (this.y *= e.y), (this.z *= e.z), (this.w *= e.w), this
    );
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this;
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      o = e.elements;
    return (
      (this.x = o[0] * t + o[4] * n + o[8] * i + o[12] * r),
      (this.y = o[1] * t + o[5] * n + o[9] * i + o[13] * r),
      (this.z = o[2] * t + o[6] * n + o[10] * i + o[14] * r),
      (this.w = o[3] * t + o[7] * n + o[11] * i + o[15] * r),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const u = e.elements,
      c = u[0],
      f = u[4],
      h = u[8],
      l = u[1],
      m = u[5],
      g = u[9],
      d = u[2],
      p = u[6],
      v = u[10];
    if (
      Math.abs(f - l) < 0.01 &&
      Math.abs(h - d) < 0.01 &&
      Math.abs(g - p) < 0.01
    ) {
      if (
        Math.abs(f + l) < 0.1 &&
        Math.abs(h + d) < 0.1 &&
        Math.abs(g + p) < 0.1 &&
        Math.abs(c + m + v - 3) < 0.1
      )
        return this.set(1, 0, 0, 0), this;
      t = Math.PI;
      const S = (c + 1) / 2,
        A = (m + 1) / 2,
        b = (v + 1) / 2,
        C = (f + l) / 4,
        R = (h + d) / 4,
        _ = (g + p) / 4;
      return (
        S > A && S > b
          ? S < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(S)), (i = C / n), (r = R / n))
          : A > b
          ? A < 0.01
            ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
            : ((i = Math.sqrt(A)), (n = C / i), (r = _ / i))
          : b < 0.01
          ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
          : ((r = Math.sqrt(b)), (n = R / r), (i = _ / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let M = Math.sqrt(
      (p - g) * (p - g) + (h - d) * (h - d) + (l - f) * (l - f)
    );
    return (
      Math.abs(M) < 0.001 && (M = 1),
      (this.x = (p - g) / M),
      (this.y = (h - d) / M),
      (this.z = (l - f) / M),
      (this.w = Math.acos((c + m + v - 1) / 2)),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      (this.w = Math.max(e.w, Math.min(t.w, this.w))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      (this.w = Math.max(e, Math.min(t, this.w))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      (this.w = this.w < 0 ? Math.ceil(this.w) : Math.floor(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector4: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z, yield this.w;
  }
}
class Mt extends Qn {
  constructor(e, t, n = {}) {
    super(),
      (this.isWebGLRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = 1),
      (this.scissor = new Be(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Be(0, 0, e, t));
    const i = { width: e, height: t, depth: 1 };
    (this.texture = new dt(
      i,
      n.mapping,
      n.wrapS,
      n.wrapT,
      n.magFilter,
      n.minFilter,
      n.format,
      n.type,
      n.anisotropy,
      n.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.flipY = !1),
      (this.texture.generateMipmaps =
        n.generateMipmaps !== void 0 ? n.generateMipmaps : !1),
      (this.texture.internalFormat =
        n.internalFormat !== void 0 ? n.internalFormat : null),
      (this.texture.minFilter = n.minFilter !== void 0 ? n.minFilter : ut),
      (this.depthBuffer = n.depthBuffer !== void 0 ? n.depthBuffer : !0),
      (this.stencilBuffer = n.stencilBuffer !== void 0 ? n.stencilBuffer : !1),
      (this.depthTexture = n.depthTexture !== void 0 ? n.depthTexture : null),
      (this.samples = n.samples !== void 0 ? n.samples : 0);
  }
  setSize(e, t, n = 1) {
    (this.width !== e || this.height !== t || this.depth !== n) &&
      ((this.width = e),
      (this.height = t),
      (this.depth = n),
      (this.texture.image.width = e),
      (this.texture.image.height = t),
      (this.texture.image.depth = n),
      this.dispose()),
      this.viewport.set(0, 0, e, t),
      this.scissor.set(0, 0, e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.viewport.copy(e.viewport),
      (this.texture = e.texture.clone()),
      (this.texture.isRenderTargetTexture = !0);
    const t = Object.assign({}, e.texture.image);
    return (
      (this.texture.source = new za(t)),
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class Na extends dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = tt),
      (this.minFilter = tt),
      (this.wrapR = _t),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class Tl extends dt {
  constructor(e = null, t = 1, n = 1, i = 1) {
    super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = tt),
      (this.minFilter = tt),
      (this.wrapR = _t),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1);
  }
}
class pi {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    (this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i);
  }
  static slerp(e, t, n, i) {
    return (
      console.warn(
        "THREE.Quaternion: Static .slerp() has been deprecated. Use qm.slerpQuaternions( qa, qb, t ) instead."
      ),
      n.slerpQuaternions(e, t, i)
    );
  }
  static slerpFlat(e, t, n, i, r, o, a) {
    let u = n[i + 0],
      c = n[i + 1],
      f = n[i + 2],
      h = n[i + 3];
    const l = r[o + 0],
      m = r[o + 1],
      g = r[o + 2],
      d = r[o + 3];
    if (a === 0) {
      (e[t + 0] = u), (e[t + 1] = c), (e[t + 2] = f), (e[t + 3] = h);
      return;
    }
    if (a === 1) {
      (e[t + 0] = l), (e[t + 1] = m), (e[t + 2] = g), (e[t + 3] = d);
      return;
    }
    if (h !== d || u !== l || c !== m || f !== g) {
      let p = 1 - a;
      const v = u * l + c * m + f * g + h * d,
        M = v >= 0 ? 1 : -1,
        S = 1 - v * v;
      if (S > Number.EPSILON) {
        const b = Math.sqrt(S),
          C = Math.atan2(b, v * M);
        (p = Math.sin(p * C) / b), (a = Math.sin(a * C) / b);
      }
      const A = a * M;
      if (
        ((u = u * p + l * A),
        (c = c * p + m * A),
        (f = f * p + g * A),
        (h = h * p + d * A),
        p === 1 - a)
      ) {
        const b = 1 / Math.sqrt(u * u + c * c + f * f + h * h);
        (u *= b), (c *= b), (f *= b), (h *= b);
      }
    }
    (e[t] = u), (e[t + 1] = c), (e[t + 2] = f), (e[t + 3] = h);
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, o) {
    const a = n[i],
      u = n[i + 1],
      c = n[i + 2],
      f = n[i + 3],
      h = r[o],
      l = r[o + 1],
      m = r[o + 2],
      g = r[o + 3];
    return (
      (e[t] = a * g + f * h + u * m - c * l),
      (e[t + 1] = u * g + f * l + c * h - a * m),
      (e[t + 2] = c * g + f * m + a * l - u * h),
      (e[t + 3] = f * g - a * h - u * l - c * m),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get w() {
    return this._w;
  }
  set w(e) {
    (this._w = e), this._onChangeCallback();
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t) {
    if (!(e && e.isEuler))
      throw new Error(
        "THREE.Quaternion: .setFromEuler() now expects an Euler rotation rather than a Vector3 and order."
      );
    const n = e._x,
      i = e._y,
      r = e._z,
      o = e._order,
      a = Math.cos,
      u = Math.sin,
      c = a(n / 2),
      f = a(i / 2),
      h = a(r / 2),
      l = u(n / 2),
      m = u(i / 2),
      g = u(r / 2);
    switch (o) {
      case "XYZ":
        (this._x = l * f * h + c * m * g),
          (this._y = c * m * h - l * f * g),
          (this._z = c * f * g + l * m * h),
          (this._w = c * f * h - l * m * g);
        break;
      case "YXZ":
        (this._x = l * f * h + c * m * g),
          (this._y = c * m * h - l * f * g),
          (this._z = c * f * g - l * m * h),
          (this._w = c * f * h + l * m * g);
        break;
      case "ZXY":
        (this._x = l * f * h - c * m * g),
          (this._y = c * m * h + l * f * g),
          (this._z = c * f * g + l * m * h),
          (this._w = c * f * h - l * m * g);
        break;
      case "ZYX":
        (this._x = l * f * h - c * m * g),
          (this._y = c * m * h + l * f * g),
          (this._z = c * f * g - l * m * h),
          (this._w = c * f * h + l * m * g);
        break;
      case "YZX":
        (this._x = l * f * h + c * m * g),
          (this._y = c * m * h + l * f * g),
          (this._z = c * f * g - l * m * h),
          (this._w = c * f * h - l * m * g);
        break;
      case "XZY":
        (this._x = l * f * h - c * m * g),
          (this._y = c * m * h - l * f * g),
          (this._z = c * f * g + l * m * h),
          (this._w = c * f * h + l * m * g);
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " + o
        );
    }
    return t !== !1 && this._onChangeCallback(), this;
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      o = t[1],
      a = t[5],
      u = t[9],
      c = t[2],
      f = t[6],
      h = t[10],
      l = n + a + h;
    if (l > 0) {
      const m = 0.5 / Math.sqrt(l + 1);
      (this._w = 0.25 / m),
        (this._x = (f - u) * m),
        (this._y = (r - c) * m),
        (this._z = (o - i) * m);
    } else if (n > a && n > h) {
      const m = 2 * Math.sqrt(1 + n - a - h);
      (this._w = (f - u) / m),
        (this._x = 0.25 * m),
        (this._y = (i + o) / m),
        (this._z = (r + c) / m);
    } else if (a > h) {
      const m = 2 * Math.sqrt(1 + a - n - h);
      (this._w = (r - c) / m),
        (this._x = (i + o) / m),
        (this._y = 0.25 * m),
        (this._z = (u + f) / m);
    } else {
      const m = 2 * Math.sqrt(1 + h - n - a);
      (this._w = (o - i) / m),
        (this._x = (r + c) / m),
        (this._y = (u + f) / m),
        (this._z = 0.25 * m);
    }
    return this._onChangeCallback(), this;
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < Number.EPSILON
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(nt(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return this.slerp(e, i), this;
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Quaternion: .multiply() now only accepts one argument. Use .multiplyQuaternions( a, b ) instead."
        ),
        this.multiplyQuaternions(e, t))
      : this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      o = e._w,
      a = t._x,
      u = t._y,
      c = t._z,
      f = t._w;
    return (
      (this._x = n * f + o * a + i * c - r * u),
      (this._y = i * f + o * u + r * a - n * c),
      (this._z = r * f + o * c + n * u - i * a),
      (this._w = o * f - n * a - i * u - r * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      o = this._w;
    let a = o * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (a < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (a = -a))
        : this.copy(e),
      a >= 1)
    )
      return (this._w = o), (this._x = n), (this._y = i), (this._z = r), this;
    const u = 1 - a * a;
    if (u <= Number.EPSILON) {
      const m = 1 - t;
      return (
        (this._w = m * o + t * this._w),
        (this._x = m * n + t * this._x),
        (this._y = m * i + t * this._y),
        (this._z = m * r + t * this._z),
        this.normalize(),
        this._onChangeCallback(),
        this
      );
    }
    const c = Math.sqrt(u),
      f = Math.atan2(c, a),
      h = Math.sin((1 - t) * f) / c,
      l = Math.sin(t * f) / c;
    return (
      (this._w = o * h + this._w * l),
      (this._x = n * h + this._x * l),
      (this._y = i * h + this._y * l),
      (this._z = r * h + this._z * l),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = Math.random(),
      t = Math.sqrt(1 - e),
      n = Math.sqrt(e),
      i = 2 * Math.PI * Math.random(),
      r = 2 * Math.PI * Math.random();
    return this.set(
      t * Math.cos(i),
      n * Math.sin(r),
      n * Math.cos(r),
      t * Math.sin(i)
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._w;
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    (L.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n);
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return (this.x = e), (this.y = e), (this.z = e), this;
  }
  setX(e) {
    return (this.x = e), this;
  }
  setY(e) {
    return (this.y = e), this;
  }
  setZ(e) {
    return (this.z = e), this;
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return (this.x = e.x), (this.y = e.y), (this.z = e.z), this;
  }
  add(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .add() now only accepts one argument. Use .addVectors( a, b ) instead."
        ),
        this.addVectors(e, t))
      : ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return (this.x += e), (this.y += e), (this.z += e), this;
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x), (this.y = e.y + t.y), (this.z = e.z + t.z), this
    );
  }
  addScaledVector(e, t) {
    return (this.x += e.x * t), (this.y += e.y * t), (this.z += e.z * t), this;
  }
  sub(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .sub() now only accepts one argument. Use .subVectors( a, b ) instead."
        ),
        this.subVectors(e, t))
      : ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return (this.x -= e), (this.y -= e), (this.z -= e), this;
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x), (this.y = e.y - t.y), (this.z = e.z - t.z), this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .multiply() now only accepts one argument. Use .multiplyVectors( a, b ) instead."
        ),
        this.multiplyVectors(e, t))
      : ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return (this.x *= e), (this.y *= e), (this.z *= e), this;
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x), (this.y = e.y * t.y), (this.z = e.z * t.z), this
    );
  }
  applyEuler(e) {
    return (
      (e && e.isEuler) ||
        console.error(
          "THREE.Vector3: .applyEuler() now expects an Euler rotation rather than a Vector3 and order."
        ),
      this.applyQuaternion(Ns.setFromEuler(e))
    );
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(Ns.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      o = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * o),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * o),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * o),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      o = e.y,
      a = e.z,
      u = e.w,
      c = u * t + o * i - a * n,
      f = u * n + a * t - r * i,
      h = u * i + r * n - o * t,
      l = -r * t - o * n - a * i;
    return (
      (this.x = c * u + l * -r + f * -a - h * -o),
      (this.y = f * u + l * -o + h * -r - c * -a),
      (this.z = h * u + l * -a + c * -o - f * -r),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return (this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this;
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = Math.max(e.x, Math.min(t.x, this.x))),
      (this.y = Math.max(e.y, Math.min(t.y, this.y))),
      (this.z = Math.max(e.z, Math.min(t.z, this.z))),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = Math.max(e, Math.min(t, this.x))),
      (this.y = Math.max(e, Math.min(t, this.y))),
      (this.z = Math.max(e, Math.min(t, this.z))),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(
      Math.max(e, Math.min(t, n))
    );
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = this.x < 0 ? Math.ceil(this.x) : Math.floor(this.x)),
      (this.y = this.y < 0 ? Math.ceil(this.y) : Math.floor(this.y)),
      (this.z = this.z < 0 ? Math.ceil(this.z) : Math.floor(this.z)),
      this
    );
  }
  negate() {
    return (this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this;
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Vector3: .cross() now only accepts one argument. Use .crossVectors( a, b ) instead."
        ),
        this.crossVectors(e, t))
      : this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      o = t.x,
      a = t.y,
      u = t.z;
    return (
      (this.x = i * u - r * a),
      (this.y = r * o - n * u),
      (this.z = n * a - i * o),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return pr.copy(this).projectOnVector(e), this.sub(pr);
  }
  reflect(e) {
    return this.sub(pr.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(nt(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)), (this.y = n), (this.z = e * Math.cos(t)), this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this;
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return (this.x = t), (this.y = n), (this.z = i), this;
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return (this.x = e._x), (this.y = e._y), (this.z = e._z), this;
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return (this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this;
  }
  toArray(e = [], t = 0) {
    return (e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e;
  }
  fromBufferAttribute(e, t, n) {
    return (
      n !== void 0 &&
        console.warn(
          "THREE.Vector3: offset has been removed from .fromBufferAttribute()."
        ),
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = (Math.random() - 0.5) * 2,
      t = Math.random() * Math.PI * 2,
      n = Math.sqrt(1 - e ** 2);
    return (
      (this.x = n * Math.cos(t)), (this.y = n * Math.sin(t)), (this.z = e), this
    );
  }
  *[Symbol.iterator]() {
    yield this.x, yield this.y, yield this.z;
  }
}
const pr = new L(),
  Ns = new pi();
class mi {
  constructor(
    e = new L(1 / 0, 1 / 0, 1 / 0),
    t = new L(-1 / 0, -1 / 0, -1 / 0)
  ) {
    (this.isBox3 = !0), (this.min = e), (this.max = t);
  }
  set(e, t) {
    return this.min.copy(e), this.max.copy(t), this;
  }
  setFromArray(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let u = 0, c = e.length; u < c; u += 3) {
      const f = e[u],
        h = e[u + 1],
        l = e[u + 2];
      f < t && (t = f),
        h < n && (n = h),
        l < i && (i = l),
        f > r && (r = f),
        h > o && (o = h),
        l > a && (a = l);
    }
    return this.min.set(t, n, i), this.max.set(r, o, a), this;
  }
  setFromBufferAttribute(e) {
    let t = 1 / 0,
      n = 1 / 0,
      i = 1 / 0,
      r = -1 / 0,
      o = -1 / 0,
      a = -1 / 0;
    for (let u = 0, c = e.count; u < c; u++) {
      const f = e.getX(u),
        h = e.getY(u),
        l = e.getZ(u);
      f < t && (t = f),
        h < n && (n = h),
        l < i && (i = l),
        f > r && (r = f),
        h > o && (o = h),
        l > a && (a = l);
    }
    return this.min.set(t, n, i), this.max.set(r, o, a), this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = nn.copy(t).multiplyScalar(0.5);
    return this.min.copy(e).sub(n), this.max.copy(e).add(n), this;
  }
  setFromObject(e, t = !1) {
    return this.makeEmpty(), this.expandByObject(e, t);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.min.copy(e.min), this.max.copy(e.max), this;
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return this.min.min(e), this.max.max(e), this;
  }
  expandByVector(e) {
    return this.min.sub(e), this.max.add(e), this;
  }
  expandByScalar(e) {
    return this.min.addScalar(-e), this.max.addScalar(e), this;
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0)
      if (t && n.attributes != null && n.attributes.position !== void 0) {
        const r = n.attributes.position;
        for (let o = 0, a = r.count; o < a; o++)
          nn.fromBufferAttribute(r, o).applyMatrix4(e.matrixWorld),
            this.expandByPoint(nn);
      } else
        n.boundingBox === null && n.computeBoundingBox(),
          mr.copy(n.boundingBox),
          mr.applyMatrix4(e.matrixWorld),
          this.union(mr);
    const i = e.children;
    for (let r = 0, o = i.length; r < o; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return !(
      e.x < this.min.x ||
      e.x > this.max.x ||
      e.y < this.min.y ||
      e.y > this.max.y ||
      e.z < this.min.z ||
      e.z > this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z)
    );
  }
  intersectsBox(e) {
    return !(
      e.max.x < this.min.x ||
      e.min.x > this.max.x ||
      e.max.y < this.min.y ||
      e.min.y > this.max.y ||
      e.max.z < this.min.z ||
      e.min.z > this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, nn),
      nn.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    this.getCenter(ni),
      Ei.subVectors(this.max, ni),
      bn.subVectors(e.a, ni),
      wn.subVectors(e.b, ni),
      An.subVectors(e.c, ni),
      jt.subVectors(wn, bn),
      Xt.subVectors(An, wn),
      rn.subVectors(bn, An);
    let t = [
      0,
      -jt.z,
      jt.y,
      0,
      -Xt.z,
      Xt.y,
      0,
      -rn.z,
      rn.y,
      jt.z,
      0,
      -jt.x,
      Xt.z,
      0,
      -Xt.x,
      rn.z,
      0,
      -rn.x,
      -jt.y,
      jt.x,
      0,
      -Xt.y,
      Xt.x,
      0,
      -rn.y,
      rn.x,
      0,
    ];
    return !gr(t, bn, wn, An, Ei) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !gr(t, bn, wn, An, Ei))
      ? !1
      : (Ti.crossVectors(jt, Xt),
        (t = [Ti.x, Ti.y, Ti.z]),
        gr(t, bn, wn, An, Ei));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return nn.copy(e).clamp(this.min, this.max).sub(e).length();
  }
  getBoundingSphere(e) {
    return (
      this.getCenter(e.center), (e.radius = this.getSize(nn).length() * 0.5), e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return this.min.min(e.min), this.max.max(e.max), this;
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (Ft[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        Ft[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        Ft[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        Ft[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        Ft[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        Ft[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        Ft[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        Ft[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(Ft),
        this);
  }
  translate(e) {
    return this.min.add(e), this.max.add(e), this;
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
}
const Ft = [
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
  ],
  nn = new L(),
  mr = new mi(),
  bn = new L(),
  wn = new L(),
  An = new L(),
  jt = new L(),
  Xt = new L(),
  rn = new L(),
  ni = new L(),
  Ei = new L(),
  Ti = new L(),
  sn = new L();
function gr(s, e, t, n, i) {
  for (let r = 0, o = s.length - 3; r <= o; r += 3) {
    sn.fromArray(s, r);
    const a =
        i.x * Math.abs(sn.x) + i.y * Math.abs(sn.y) + i.z * Math.abs(sn.z),
      u = e.dot(sn),
      c = t.dot(sn),
      f = n.dot(sn);
    if (Math.max(-Math.max(u, c, f), Math.min(u, c, f)) > a) return !1;
  }
  return !0;
}
const Cl = new mi(),
  Os = new L(),
  Ci = new L(),
  vr = new L();
class Jr {
  constructor(e = new L(), t = -1) {
    (this.center = e), (this.radius = t);
  }
  set(e, t) {
    return this.center.copy(e), (this.radius = t), this;
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : Cl.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, o = e.length; r < o; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return (this.radius = Math.sqrt(i)), this;
  }
  copy(e) {
    return this.center.copy(e.center), (this.radius = e.radius), this;
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return this.center.set(0, 0, 0), (this.radius = -1), this;
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return this.center.add(e), this;
  }
  expandByPoint(e) {
    vr.subVectors(e, this.center);
    const t = vr.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      this.center.add(vr.multiplyScalar(i / n)), (this.radius += i);
    }
    return this;
  }
  union(e) {
    return (
      this.center.equals(e.center) === !0
        ? Ci.set(0, 0, 1).multiplyScalar(e.radius)
        : Ci.subVectors(e.center, this.center)
            .normalize()
            .multiplyScalar(e.radius),
      this.expandByPoint(Os.copy(e.center).add(Ci)),
      this.expandByPoint(Os.copy(e.center).sub(Ci)),
      this
    );
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const Bt = new L(),
  xr = new L(),
  Li = new L(),
  qt = new L(),
  _r = new L(),
  Ri = new L(),
  yr = new L();
class Ll {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    (this.origin = e), (this.direction = t);
  }
  set(e, t) {
    return this.origin.copy(e), this.direction.copy(t), this;
  }
  copy(e) {
    return this.origin.copy(e.origin), this.direction.copy(e.direction), this;
  }
  at(e, t) {
    return t.copy(this.direction).multiplyScalar(e).add(this.origin);
  }
  lookAt(e) {
    return this.direction.copy(e).sub(this.origin).normalize(), this;
  }
  recast(e) {
    return this.origin.copy(this.at(e, Bt)), this;
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.direction).multiplyScalar(n).add(this.origin);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Bt.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Bt.copy(this.direction).multiplyScalar(t).add(this.origin),
        Bt.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    xr.copy(e).add(t).multiplyScalar(0.5),
      Li.copy(t).sub(e).normalize(),
      qt.copy(this.origin).sub(xr);
    const r = e.distanceTo(t) * 0.5,
      o = -this.direction.dot(Li),
      a = qt.dot(this.direction),
      u = -qt.dot(Li),
      c = qt.lengthSq(),
      f = Math.abs(1 - o * o);
    let h, l, m, g;
    if (f > 0)
      if (((h = o * u - a), (l = o * a - u), (g = r * f), h >= 0))
        if (l >= -g)
          if (l <= g) {
            const d = 1 / f;
            (h *= d),
              (l *= d),
              (m = h * (h + o * l + 2 * a) + l * (o * h + l + 2 * u) + c);
          } else
            (l = r),
              (h = Math.max(0, -(o * l + a))),
              (m = -h * h + l * (l + 2 * u) + c);
        else
          (l = -r),
            (h = Math.max(0, -(o * l + a))),
            (m = -h * h + l * (l + 2 * u) + c);
      else
        l <= -g
          ? ((h = Math.max(0, -(-o * r + a))),
            (l = h > 0 ? -r : Math.min(Math.max(-r, -u), r)),
            (m = -h * h + l * (l + 2 * u) + c))
          : l <= g
          ? ((h = 0),
            (l = Math.min(Math.max(-r, -u), r)),
            (m = l * (l + 2 * u) + c))
          : ((h = Math.max(0, -(o * r + a))),
            (l = h > 0 ? r : Math.min(Math.max(-r, -u), r)),
            (m = -h * h + l * (l + 2 * u) + c));
    else
      (l = o > 0 ? -r : r),
        (h = Math.max(0, -(o * l + a))),
        (m = -h * h + l * (l + 2 * u) + c);
    return (
      n && n.copy(this.direction).multiplyScalar(h).add(this.origin),
      i && i.copy(Li).multiplyScalar(l).add(xr),
      m
    );
  }
  intersectSphere(e, t) {
    Bt.subVectors(e.center, this.origin);
    const n = Bt.dot(this.direction),
      i = Bt.dot(Bt) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const o = Math.sqrt(r - i),
      a = n - o,
      u = n + o;
    return a < 0 && u < 0 ? null : a < 0 ? this.at(u, t) : this.at(a, t);
  }
  intersectsSphere(e) {
    return this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, o, a, u;
    const c = 1 / this.direction.x,
      f = 1 / this.direction.y,
      h = 1 / this.direction.z,
      l = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - l.x) * c), (i = (e.max.x - l.x) * c))
        : ((n = (e.max.x - l.x) * c), (i = (e.min.x - l.x) * c)),
      f >= 0
        ? ((r = (e.min.y - l.y) * f), (o = (e.max.y - l.y) * f))
        : ((r = (e.max.y - l.y) * f), (o = (e.min.y - l.y) * f)),
      n > o ||
      r > i ||
      ((r > n || n !== n) && (n = r),
      (o < i || i !== i) && (i = o),
      h >= 0
        ? ((a = (e.min.z - l.z) * h), (u = (e.max.z - l.z) * h))
        : ((a = (e.max.z - l.z) * h), (u = (e.min.z - l.z) * h)),
      n > u || a > i) ||
      ((a > n || n !== n) && (n = a), (u < i || i !== i) && (i = u), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Bt) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    _r.subVectors(t, e), Ri.subVectors(n, e), yr.crossVectors(_r, Ri);
    let o = this.direction.dot(yr),
      a;
    if (o > 0) {
      if (i) return null;
      a = 1;
    } else if (o < 0) (a = -1), (o = -o);
    else return null;
    qt.subVectors(this.origin, e);
    const u = a * this.direction.dot(Ri.crossVectors(qt, Ri));
    if (u < 0) return null;
    const c = a * this.direction.dot(_r.cross(qt));
    if (c < 0 || u + c > o) return null;
    const f = -a * qt.dot(yr);
    return f < 0 ? null : this.at(f / o, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e), this.direction.transformDirection(e), this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ke {
  constructor() {
    (ke.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      arguments.length > 0 &&
        console.error(
          "THREE.Matrix4: the constructor no longer reads arguments. use .set() instead."
        );
  }
  set(e, t, n, i, r, o, a, u, c, f, h, l, m, g, d, p) {
    const v = this.elements;
    return (
      (v[0] = e),
      (v[4] = t),
      (v[8] = n),
      (v[12] = i),
      (v[1] = r),
      (v[5] = o),
      (v[9] = a),
      (v[13] = u),
      (v[2] = c),
      (v[6] = f),
      (v[10] = h),
      (v[14] = l),
      (v[3] = m),
      (v[7] = g),
      (v[11] = d),
      (v[15] = p),
      this
    );
  }
  identity() {
    return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  clone() {
    return new ke().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return (t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this;
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / Sn.setFromMatrixColumn(e, 0).length(),
      r = 1 / Sn.setFromMatrixColumn(e, 1).length(),
      o = 1 / Sn.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * o),
      (t[9] = n[9] * o),
      (t[10] = n[10] * o),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    (e && e.isEuler) ||
      console.error(
        "THREE.Matrix4: .makeRotationFromEuler() now expects a Euler rotation rather than a Vector3 and order."
      );
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      o = Math.cos(n),
      a = Math.sin(n),
      u = Math.cos(i),
      c = Math.sin(i),
      f = Math.cos(r),
      h = Math.sin(r);
    if (e.order === "XYZ") {
      const l = o * f,
        m = o * h,
        g = a * f,
        d = a * h;
      (t[0] = u * f),
        (t[4] = -u * h),
        (t[8] = c),
        (t[1] = m + g * c),
        (t[5] = l - d * c),
        (t[9] = -a * u),
        (t[2] = d - l * c),
        (t[6] = g + m * c),
        (t[10] = o * u);
    } else if (e.order === "YXZ") {
      const l = u * f,
        m = u * h,
        g = c * f,
        d = c * h;
      (t[0] = l + d * a),
        (t[4] = g * a - m),
        (t[8] = o * c),
        (t[1] = o * h),
        (t[5] = o * f),
        (t[9] = -a),
        (t[2] = m * a - g),
        (t[6] = d + l * a),
        (t[10] = o * u);
    } else if (e.order === "ZXY") {
      const l = u * f,
        m = u * h,
        g = c * f,
        d = c * h;
      (t[0] = l - d * a),
        (t[4] = -o * h),
        (t[8] = g + m * a),
        (t[1] = m + g * a),
        (t[5] = o * f),
        (t[9] = d - l * a),
        (t[2] = -o * c),
        (t[6] = a),
        (t[10] = o * u);
    } else if (e.order === "ZYX") {
      const l = o * f,
        m = o * h,
        g = a * f,
        d = a * h;
      (t[0] = u * f),
        (t[4] = g * c - m),
        (t[8] = l * c + d),
        (t[1] = u * h),
        (t[5] = d * c + l),
        (t[9] = m * c - g),
        (t[2] = -c),
        (t[6] = a * u),
        (t[10] = o * u);
    } else if (e.order === "YZX") {
      const l = o * u,
        m = o * c,
        g = a * u,
        d = a * c;
      (t[0] = u * f),
        (t[4] = d - l * h),
        (t[8] = g * h + m),
        (t[1] = h),
        (t[5] = o * f),
        (t[9] = -a * f),
        (t[2] = -c * f),
        (t[6] = m * h + g),
        (t[10] = l - d * h);
    } else if (e.order === "XZY") {
      const l = o * u,
        m = o * c,
        g = a * u,
        d = a * c;
      (t[0] = u * f),
        (t[4] = -h),
        (t[8] = c * f),
        (t[1] = l * h + d),
        (t[5] = o * f),
        (t[9] = m * h - g),
        (t[2] = g * h - m),
        (t[6] = a * f),
        (t[10] = d * h + l);
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(Rl, e, Dl);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      st.subVectors(e, t),
      st.lengthSq() === 0 && (st.z = 1),
      st.normalize(),
      Yt.crossVectors(n, st),
      Yt.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (st.x += 1e-4) : (st.z += 1e-4),
        st.normalize(),
        Yt.crossVectors(n, st)),
      Yt.normalize(),
      Di.crossVectors(st, Yt),
      (i[0] = Yt.x),
      (i[4] = Di.x),
      (i[8] = st.x),
      (i[1] = Yt.y),
      (i[5] = Di.y),
      (i[9] = st.y),
      (i[2] = Yt.z),
      (i[6] = Di.z),
      (i[10] = st.z),
      this
    );
  }
  multiply(e, t) {
    return t !== void 0
      ? (console.warn(
          "THREE.Matrix4: .multiply() now only accepts one argument. Use .multiplyMatrices( a, b ) instead."
        ),
        this.multiplyMatrices(e, t))
      : this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      o = n[0],
      a = n[4],
      u = n[8],
      c = n[12],
      f = n[1],
      h = n[5],
      l = n[9],
      m = n[13],
      g = n[2],
      d = n[6],
      p = n[10],
      v = n[14],
      M = n[3],
      S = n[7],
      A = n[11],
      b = n[15],
      C = i[0],
      R = i[4],
      _ = i[8],
      E = i[12],
      F = i[1],
      B = i[5],
      te = i[9],
      K = i[13],
      P = i[2],
      j = i[6],
      O = i[10],
      W = i[14],
      X = i[3],
      N = i[7],
      G = i[11],
      J = i[15];
    return (
      (r[0] = o * C + a * F + u * P + c * X),
      (r[4] = o * R + a * B + u * j + c * N),
      (r[8] = o * _ + a * te + u * O + c * G),
      (r[12] = o * E + a * K + u * W + c * J),
      (r[1] = f * C + h * F + l * P + m * X),
      (r[5] = f * R + h * B + l * j + m * N),
      (r[9] = f * _ + h * te + l * O + m * G),
      (r[13] = f * E + h * K + l * W + m * J),
      (r[2] = g * C + d * F + p * P + v * X),
      (r[6] = g * R + d * B + p * j + v * N),
      (r[10] = g * _ + d * te + p * O + v * G),
      (r[14] = g * E + d * K + p * W + v * J),
      (r[3] = M * C + S * F + A * P + b * X),
      (r[7] = M * R + S * B + A * j + b * N),
      (r[11] = M * _ + S * te + A * O + b * G),
      (r[15] = M * E + S * K + A * W + b * J),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      o = e[1],
      a = e[5],
      u = e[9],
      c = e[13],
      f = e[2],
      h = e[6],
      l = e[10],
      m = e[14],
      g = e[3],
      d = e[7],
      p = e[11],
      v = e[15];
    return (
      g *
        (+r * u * h -
          i * c * h -
          r * a * l +
          n * c * l +
          i * a * m -
          n * u * m) +
      d *
        (+t * u * m -
          t * c * l +
          r * o * l -
          i * o * m +
          i * c * f -
          r * u * f) +
      p *
        (+t * c * h -
          t * a * m -
          r * o * h +
          n * o * m +
          r * a * f -
          n * c * f) +
      v *
        (-i * a * f - t * u * h + t * a * l + i * o * h - n * o * l + n * u * f)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      o = e[4],
      a = e[5],
      u = e[6],
      c = e[7],
      f = e[8],
      h = e[9],
      l = e[10],
      m = e[11],
      g = e[12],
      d = e[13],
      p = e[14],
      v = e[15],
      M = h * p * c - d * l * c + d * u * m - a * p * m - h * u * v + a * l * v,
      S = g * l * c - f * p * c - g * u * m + o * p * m + f * u * v - o * l * v,
      A = f * d * c - g * h * c + g * a * m - o * d * m - f * a * v + o * h * v,
      b = g * h * u - f * d * u - g * a * l + o * d * l + f * a * p - o * h * p,
      C = t * M + n * S + i * A + r * b;
    if (C === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const R = 1 / C;
    return (
      (e[0] = M * R),
      (e[1] =
        (d * l * r -
          h * p * r -
          d * i * m +
          n * p * m +
          h * i * v -
          n * l * v) *
        R),
      (e[2] =
        (a * p * r -
          d * u * r +
          d * i * c -
          n * p * c -
          a * i * v +
          n * u * v) *
        R),
      (e[3] =
        (h * u * r -
          a * l * r -
          h * i * c +
          n * l * c +
          a * i * m -
          n * u * m) *
        R),
      (e[4] = S * R),
      (e[5] =
        (f * p * r -
          g * l * r +
          g * i * m -
          t * p * m -
          f * i * v +
          t * l * v) *
        R),
      (e[6] =
        (g * u * r -
          o * p * r -
          g * i * c +
          t * p * c +
          o * i * v -
          t * u * v) *
        R),
      (e[7] =
        (o * l * r -
          f * u * r +
          f * i * c -
          t * l * c -
          o * i * m +
          t * u * m) *
        R),
      (e[8] = A * R),
      (e[9] =
        (g * h * r -
          f * d * r -
          g * n * m +
          t * d * m +
          f * n * v -
          t * h * v) *
        R),
      (e[10] =
        (o * d * r -
          g * a * r +
          g * n * c -
          t * d * c -
          o * n * v +
          t * a * v) *
        R),
      (e[11] =
        (f * a * r -
          o * h * r -
          f * n * c +
          t * h * c +
          o * n * m -
          t * a * m) *
        R),
      (e[12] = b * R),
      (e[13] =
        (f * d * i -
          g * h * i +
          g * n * l -
          t * d * l -
          f * n * p +
          t * h * p) *
        R),
      (e[14] =
        (g * a * i -
          o * d * i -
          g * n * u +
          t * d * u +
          o * n * p -
          t * a * p) *
        R),
      (e[15] =
        (o * h * i -
          f * a * i +
          f * n * u -
          t * h * u -
          o * n * l +
          t * a * l) *
        R),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1), this;
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this;
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this;
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      o = e.x,
      a = e.y,
      u = e.z,
      c = r * o,
      f = r * a;
    return (
      this.set(
        c * o + n,
        c * a - i * u,
        c * u + i * a,
        0,
        c * a + i * u,
        f * a + n,
        f * u - i * o,
        0,
        c * u - i * a,
        f * u + i * o,
        r * u * u + n,
        0,
        0,
        0,
        0,
        1
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this;
  }
  makeShear(e, t, n, i, r, o) {
    return this.set(1, n, r, 0, e, 1, o, 0, t, i, 1, 0, 0, 0, 0, 1), this;
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      o = t._y,
      a = t._z,
      u = t._w,
      c = r + r,
      f = o + o,
      h = a + a,
      l = r * c,
      m = r * f,
      g = r * h,
      d = o * f,
      p = o * h,
      v = a * h,
      M = u * c,
      S = u * f,
      A = u * h,
      b = n.x,
      C = n.y,
      R = n.z;
    return (
      (i[0] = (1 - (d + v)) * b),
      (i[1] = (m + A) * b),
      (i[2] = (g - S) * b),
      (i[3] = 0),
      (i[4] = (m - A) * C),
      (i[5] = (1 - (l + v)) * C),
      (i[6] = (p + M) * C),
      (i[7] = 0),
      (i[8] = (g + S) * R),
      (i[9] = (p - M) * R),
      (i[10] = (1 - (l + d)) * R),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = Sn.set(i[0], i[1], i[2]).length();
    const o = Sn.set(i[4], i[5], i[6]).length(),
      a = Sn.set(i[8], i[9], i[10]).length();
    this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      vt.copy(this);
    const c = 1 / r,
      f = 1 / o,
      h = 1 / a;
    return (
      (vt.elements[0] *= c),
      (vt.elements[1] *= c),
      (vt.elements[2] *= c),
      (vt.elements[4] *= f),
      (vt.elements[5] *= f),
      (vt.elements[6] *= f),
      (vt.elements[8] *= h),
      (vt.elements[9] *= h),
      (vt.elements[10] *= h),
      t.setFromRotationMatrix(vt),
      (n.x = r),
      (n.y = o),
      (n.z = a),
      this
    );
  }
  makePerspective(e, t, n, i, r, o) {
    o === void 0 &&
      console.warn(
        "THREE.Matrix4: .makePerspective() has been redefined and has a new signature. Please check the docs."
      );
    const a = this.elements,
      u = (2 * r) / (t - e),
      c = (2 * r) / (n - i),
      f = (t + e) / (t - e),
      h = (n + i) / (n - i),
      l = -(o + r) / (o - r),
      m = (-2 * o * r) / (o - r);
    return (
      (a[0] = u),
      (a[4] = 0),
      (a[8] = f),
      (a[12] = 0),
      (a[1] = 0),
      (a[5] = c),
      (a[9] = h),
      (a[13] = 0),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = l),
      (a[14] = m),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = -1),
      (a[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, o) {
    const a = this.elements,
      u = 1 / (t - e),
      c = 1 / (n - i),
      f = 1 / (o - r),
      h = (t + e) * u,
      l = (n + i) * c,
      m = (o + r) * f;
    return (
      (a[0] = 2 * u),
      (a[4] = 0),
      (a[8] = 0),
      (a[12] = -h),
      (a[1] = 0),
      (a[5] = 2 * c),
      (a[9] = 0),
      (a[13] = -l),
      (a[2] = 0),
      (a[6] = 0),
      (a[10] = -2 * f),
      (a[14] = -m),
      (a[3] = 0),
      (a[7] = 0),
      (a[11] = 0),
      (a[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const Sn = new L(),
  vt = new ke(),
  Rl = new L(0, 0, 0),
  Dl = new L(1, 1, 1),
  Yt = new L(),
  Di = new L(),
  st = new L(),
  ks = new ke(),
  Vs = new pi();
class gi {
  constructor(e = 0, t = 0, n = 0, i = gi.DefaultOrder) {
    (this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i);
  }
  get x() {
    return this._x;
  }
  set x(e) {
    (this._x = e), this._onChangeCallback();
  }
  get y() {
    return this._y;
  }
  set y(e) {
    (this._y = e), this._onChangeCallback();
  }
  get z() {
    return this._z;
  }
  set z(e) {
    (this._z = e), this._onChangeCallback();
  }
  get order() {
    return this._order;
  }
  set order(e) {
    (this._order = e), this._onChangeCallback();
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      o = i[4],
      a = i[8],
      u = i[1],
      c = i[5],
      f = i[9],
      h = i[2],
      l = i[6],
      m = i[10];
    switch (t) {
      case "XYZ":
        (this._y = Math.asin(nt(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(-f, m)), (this._z = Math.atan2(-o, r)))
            : ((this._x = Math.atan2(l, c)), (this._z = 0));
        break;
      case "YXZ":
        (this._x = Math.asin(-nt(f, -1, 1))),
          Math.abs(f) < 0.9999999
            ? ((this._y = Math.atan2(a, m)), (this._z = Math.atan2(u, c)))
            : ((this._y = Math.atan2(-h, r)), (this._z = 0));
        break;
      case "ZXY":
        (this._x = Math.asin(nt(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._y = Math.atan2(-h, m)), (this._z = Math.atan2(-o, c)))
            : ((this._y = 0), (this._z = Math.atan2(u, r)));
        break;
      case "ZYX":
        (this._y = Math.asin(-nt(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._x = Math.atan2(l, m)), (this._z = Math.atan2(u, r)))
            : ((this._x = 0), (this._z = Math.atan2(-o, c)));
        break;
      case "YZX":
        (this._z = Math.asin(nt(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(-f, c)), (this._y = Math.atan2(-h, r)))
            : ((this._x = 0), (this._y = Math.atan2(a, m)));
        break;
      case "XZY":
        (this._z = Math.asin(-nt(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(l, c)), (this._y = Math.atan2(a, r)))
            : ((this._x = Math.atan2(-f, m)), (this._y = 0));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t
        );
    }
    return (this._order = t), n === !0 && this._onChangeCallback(), this;
  }
  setFromQuaternion(e, t, n) {
    return (
      ks.makeRotationFromQuaternion(e), this.setFromRotationMatrix(ks, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return Vs.setFromEuler(this), this.setFromQuaternion(Vs, e);
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return (this._onChangeCallback = e), this;
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    yield this._x, yield this._y, yield this._z, yield this._order;
  }
  toVector3() {
    console.error(
      "THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead"
    );
  }
}
gi.DefaultOrder = "XYZ";
gi.RotationOrders = ["XYZ", "YZX", "ZXY", "XZY", "YXZ", "ZYX"];
class Oa {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let Pl = 0;
const Gs = new L(),
  En = new pi(),
  Ut = new ke(),
  Pi = new L(),
  ii = new L(),
  Il = new L(),
  Fl = new pi(),
  Hs = new L(1, 0, 0),
  Ws = new L(0, 1, 0),
  js = new L(0, 0, 1),
  Bl = { type: "added" },
  Xs = { type: "removed" };
class ft extends Qn {
  constructor() {
    super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: Pl++ }),
      (this.uuid = Jn()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = ft.DefaultUp.clone());
    const e = new L(),
      t = new gi(),
      n = new pi(),
      i = new L(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function o() {
      t.setFromQuaternion(n, void 0, !1);
    }
    t._onChange(r),
      n._onChange(o),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new ke() },
        normalMatrix: { value: new ht() },
      }),
      (this.matrix = new ke()),
      (this.matrixWorld = new ke()),
      (this.matrixAutoUpdate = ft.DefaultMatrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new Oa()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.userData = {});
  }
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale);
  }
  applyQuaternion(e) {
    return this.quaternion.premultiply(e), this;
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return En.setFromAxisAngle(e, t), this.quaternion.multiply(En), this;
  }
  rotateOnWorldAxis(e, t) {
    return En.setFromAxisAngle(e, t), this.quaternion.premultiply(En), this;
  }
  rotateX(e) {
    return this.rotateOnAxis(Hs, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(Ws, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(js, e);
  }
  translateOnAxis(e, t) {
    return (
      Gs.copy(e).applyQuaternion(this.quaternion),
      this.position.add(Gs.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(Hs, e);
  }
  translateY(e) {
    return this.translateOnAxis(Ws, e);
  }
  translateZ(e) {
    return this.translateOnAxis(js, e);
  }
  localToWorld(e) {
    return e.applyMatrix4(this.matrixWorld);
  }
  worldToLocal(e) {
    return e.applyMatrix4(Ut.copy(this.matrixWorld).invert());
  }
  lookAt(e, t, n) {
    e.isVector3 ? Pi.copy(e) : Pi.set(e, t, n);
    const i = this.parent;
    this.updateWorldMatrix(!0, !1),
      ii.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Ut.lookAt(ii, Pi, this.up)
        : Ut.lookAt(Pi, ii, this.up),
      this.quaternion.setFromRotationMatrix(Ut),
      i &&
        (Ut.extractRotation(i.matrixWorld),
        En.setFromRotationMatrix(Ut),
        this.quaternion.premultiply(En.invert()));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e
        ),
        this)
      : (e && e.isObject3D
          ? (e.parent !== null && e.parent.remove(e),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(Bl))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null), this.children.splice(t, 1), e.dispatchEvent(Xs)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return e !== null && e.remove(this), this;
  }
  clear() {
    for (let e = 0; e < this.children.length; e++) {
      const t = this.children[e];
      (t.parent = null), t.dispatchEvent(Xs);
    }
    return (this.children.length = 0), this;
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Ut.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Ut.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Ut),
      this.add(e),
      e.updateWorldMatrix(!1, !0),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const o = this.children[n].getObjectByProperty(e, t);
      if (o !== void 0) return o;
    }
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1), e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, e, Il), e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1), this.matrixWorld.decompose(ii, Fl, e), e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0);
  }
  updateMatrixWorld(e) {
    this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix
            ),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.parent === null
        ? this.matrixWorld.copy(this.matrix)
        : this.matrixWorld.multiplyMatrices(
            this.parent.matrixWorld,
            this.matrix
          ),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, o = i.length; r < o; r++) i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.5,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    (i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      JSON.stringify(this.userData) !== "{}" && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON()));
    function r(a, u) {
      return a[u.uuid] === void 0 && (a[u.uuid] = u.toJSON(e)), u.uuid;
    }
    if (this.isScene)
      this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          (i.environment = this.environment.toJSON(e).uuid);
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const a = this.geometry.parameters;
      if (a !== void 0 && a.shapes !== void 0) {
        const u = a.shapes;
        if (Array.isArray(u))
          for (let c = 0, f = u.length; c < f; c++) {
            const h = u[c];
            r(e.shapes, h);
          }
        else r(e.shapes, u);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const a = [];
        for (let u = 0, c = this.material.length; u < c; u++)
          a.push(r(e.materials, this.material[u]));
        i.material = a;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let a = 0; a < this.children.length; a++)
        i.children.push(this.children[a].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let a = 0; a < this.animations.length; a++) {
        const u = this.animations[a];
        i.animations.push(r(e.animations, u));
      }
    }
    if (t) {
      const a = o(e.geometries),
        u = o(e.materials),
        c = o(e.textures),
        f = o(e.images),
        h = o(e.shapes),
        l = o(e.skeletons),
        m = o(e.animations),
        g = o(e.nodes);
      a.length > 0 && (n.geometries = a),
        u.length > 0 && (n.materials = u),
        c.length > 0 && (n.textures = c),
        f.length > 0 && (n.images = f),
        h.length > 0 && (n.shapes = h),
        l.length > 0 && (n.skeletons = l),
        m.length > 0 && (n.animations = m),
        g.length > 0 && (n.nodes = g);
    }
    return (n.object = i), n;
    function o(a) {
      const u = [];
      for (const c in a) {
        const f = a[c];
        delete f.metadata, u.push(f);
      }
      return u;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
ft.DefaultUp = new L(0, 1, 0);
ft.DefaultMatrixAutoUpdate = !0;
const xt = new L(),
  zt = new L(),
  Mr = new L(),
  Nt = new L(),
  Tn = new L(),
  Cn = new L(),
  qs = new L(),
  br = new L(),
  wr = new L(),
  Ar = new L();
class kt {
  constructor(e = new L(), t = new L(), n = new L()) {
    (this.a = e), (this.b = t), (this.c = n);
  }
  static getNormal(e, t, n, i) {
    i.subVectors(n, t), xt.subVectors(e, t), i.cross(xt);
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    xt.subVectors(i, t), zt.subVectors(n, t), Mr.subVectors(e, t);
    const o = xt.dot(xt),
      a = xt.dot(zt),
      u = xt.dot(Mr),
      c = zt.dot(zt),
      f = zt.dot(Mr),
      h = o * c - a * a;
    if (h === 0) return r.set(-2, -1, -1);
    const l = 1 / h,
      m = (c * u - a * f) * l,
      g = (o * f - a * u) * l;
    return r.set(1 - m - g, g, m);
  }
  static containsPoint(e, t, n, i) {
    return (
      this.getBarycoord(e, t, n, i, Nt),
      Nt.x >= 0 && Nt.y >= 0 && Nt.x + Nt.y <= 1
    );
  }
  static getUV(e, t, n, i, r, o, a, u) {
    return (
      this.getBarycoord(e, t, n, i, Nt),
      u.set(0, 0),
      u.addScaledVector(r, Nt.x),
      u.addScaledVector(o, Nt.y),
      u.addScaledVector(a, Nt.z),
      u
    );
  }
  static isFrontFacing(e, t, n, i) {
    return xt.subVectors(n, t), zt.subVectors(e, t), xt.cross(zt).dot(i) < 0;
  }
  set(e, t, n) {
    return this.a.copy(e), this.b.copy(t), this.c.copy(n), this;
  }
  setFromPointsAndIndices(e, t, n, i) {
    return this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this;
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this;
  }
  getArea() {
    return (
      xt.subVectors(this.c, this.b),
      zt.subVectors(this.a, this.b),
      xt.cross(zt).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return kt.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return kt.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getUV(e, t, n, i, r) {
    return kt.getUV(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return kt.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return kt.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let o, a;
    Tn.subVectors(i, n), Cn.subVectors(r, n), br.subVectors(e, n);
    const u = Tn.dot(br),
      c = Cn.dot(br);
    if (u <= 0 && c <= 0) return t.copy(n);
    wr.subVectors(e, i);
    const f = Tn.dot(wr),
      h = Cn.dot(wr);
    if (f >= 0 && h <= f) return t.copy(i);
    const l = u * h - f * c;
    if (l <= 0 && u >= 0 && f <= 0)
      return (o = u / (u - f)), t.copy(n).addScaledVector(Tn, o);
    Ar.subVectors(e, r);
    const m = Tn.dot(Ar),
      g = Cn.dot(Ar);
    if (g >= 0 && m <= g) return t.copy(r);
    const d = m * c - u * g;
    if (d <= 0 && c >= 0 && g <= 0)
      return (a = c / (c - g)), t.copy(n).addScaledVector(Cn, a);
    const p = f * g - m * h;
    if (p <= 0 && h - f >= 0 && m - g >= 0)
      return (
        qs.subVectors(r, i),
        (a = (h - f) / (h - f + (m - g))),
        t.copy(i).addScaledVector(qs, a)
      );
    const v = 1 / (p + d + l);
    return (
      (o = d * v),
      (a = l * v),
      t.copy(n).addScaledVector(Tn, o).addScaledVector(Cn, a)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
let Ul = 0;
class vi extends Qn {
  constructor() {
    super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: Ul++ }),
      (this.uuid = Jn()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Vn),
      (this.side = hi),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.blendSrc = Ca),
      (this.blendDst = La),
      (this.blendEquation = Un),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.depthFunc = Or),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = ll),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = ur),
      (this.stencilZFail = ur),
      (this.stencilZPass = ur),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0);
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e);
  }
  onBuild() {}
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn("THREE.Material: '" + t + "' parameter is undefined.");
          continue;
        }
        if (t === "shading") {
          console.warn(
            "THREE." +
              this.type +
              ": .shading has been removed. Use the boolean .flatShading instead."
          ),
            (this.flatShading = n === go);
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            "THREE." +
              this.type +
              ": '" +
              t +
              "' is not a property of this material."
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
          ? i.copy(n)
          : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.5,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    (n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Vn && (n.blending = this.blending),
      this.side !== hi && (n.side = this.side),
      this.vertexColors && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = this.transparent),
      (n.depthFunc = this.depthFunc),
      (n.depthTest = this.depthTest),
      (n.depthWrite = this.depthWrite),
      (n.colorWrite = this.colorWrite),
      (n.stencilWrite = this.stencilWrite),
      (n.stencilWriteMask = this.stencilWriteMask),
      (n.stencilFunc = this.stencilFunc),
      (n.stencilRef = this.stencilRef),
      (n.stencilFuncMask = this.stencilFuncMask),
      (n.stencilFail = this.stencilFail),
      (n.stencilZFail = this.stencilZFail),
      (n.stencilZPass = this.stencilZPass),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = this.alphaToCoverage),
      this.premultipliedAlpha === !0 &&
        (n.premultipliedAlpha = this.premultipliedAlpha),
      this.wireframe === !0 && (n.wireframe = this.wireframe),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = this.flatShading),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      JSON.stringify(this.userData) !== "{}" && (n.userData = this.userData);
    function i(r) {
      const o = [];
      for (const a in r) {
        const u = r[a];
        delete u.metadata, o.push(u);
      }
      return o;
    }
    if (t) {
      const r = i(e.textures),
        o = i(e.images);
      r.length > 0 && (n.textures = r), o.length > 0 && (n.images = o);
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite);
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class $i extends vi {
  constructor(e) {
    super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ce(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.combine = Ra),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Oe = new L(),
  Ii = new me();
class Dt {
  constructor(e, t, n) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array."
      );
    (this.isBufferAttribute = !0),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n === !0),
      (this.usage = Bs),
      (this.updateRange = { offset: 0, count: -1 }),
      (this.version = 0);
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return (this.usage = e), this;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    (e *= this.itemSize), (n *= t.itemSize);
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return this.array.set(e), this;
  }
  copyColorsArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let o = e[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyColorsArray(): color is undefined",
          i
        ),
        (o = new Ce())),
        (t[n++] = o.r),
        (t[n++] = o.g),
        (t[n++] = o.b);
    }
    return this;
  }
  copyVector2sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let o = e[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector2sArray(): vector is undefined",
          i
        ),
        (o = new me())),
        (t[n++] = o.x),
        (t[n++] = o.y);
    }
    return this;
  }
  copyVector3sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let o = e[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector3sArray(): vector is undefined",
          i
        ),
        (o = new L())),
        (t[n++] = o.x),
        (t[n++] = o.y),
        (t[n++] = o.z);
    }
    return this;
  }
  copyVector4sArray(e) {
    const t = this.array;
    let n = 0;
    for (let i = 0, r = e.length; i < r; i++) {
      let o = e[i];
      o === void 0 &&
        (console.warn(
          "THREE.BufferAttribute.copyVector4sArray(): vector is undefined",
          i
        ),
        (o = new Be())),
        (t[n++] = o.x),
        (t[n++] = o.y),
        (t[n++] = o.z),
        (t[n++] = o.w);
    }
    return this;
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        Ii.fromBufferAttribute(this, t),
          Ii.applyMatrix3(e),
          this.setXY(t, Ii.x, Ii.y);
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        Oe.fromBufferAttribute(this, t),
          Oe.applyMatrix3(e),
          this.setXYZ(t, Oe.x, Oe.y, Oe.z);
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Oe.fromBufferAttribute(this, t),
        Oe.applyMatrix4(e),
        this.setXYZ(t, Oe.x, Oe.y, Oe.z);
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Oe.fromBufferAttribute(this, t),
        Oe.applyNormalMatrix(e),
        this.setXYZ(t, Oe.x, Oe.y, Oe.z);
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      Oe.fromBufferAttribute(this, t),
        Oe.transformDirection(e),
        this.setXYZ(t, Oe.x, Oe.y, Oe.z);
    return this;
  }
  set(e, t = 0) {
    return this.array.set(e, t), this;
  }
  getX(e) {
    return this.array[e * this.itemSize];
  }
  setX(e, t) {
    return (this.array[e * this.itemSize] = t), this;
  }
  getY(e) {
    return this.array[e * this.itemSize + 1];
  }
  setY(e, t) {
    return (this.array[e * this.itemSize + 1] = t), this;
  }
  getZ(e) {
    return this.array[e * this.itemSize + 2];
  }
  setZ(e, t) {
    return (this.array[e * this.itemSize + 2] = t), this;
  }
  getW(e) {
    return this.array[e * this.itemSize + 3];
  }
  setW(e, t) {
    return (this.array[e * this.itemSize + 3] = t), this;
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return (this.onUploadCallback = e), this;
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Bs && (e.usage = this.usage),
      (this.updateRange.offset !== 0 || this.updateRange.count !== -1) &&
        (e.updateRange = this.updateRange),
      e
    );
  }
}
class ka extends Dt {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class Va extends Dt {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class Ve extends Dt {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let zl = 0;
const ct = new ke(),
  Sr = new ft(),
  Ln = new L(),
  at = new mi(),
  ri = new mi(),
  We = new L();
class pt extends Qn {
  constructor() {
    super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: zl++ }),
      (this.uuid = Jn()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {});
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (Fa(e) ? Va : ka)(e, 1))
        : (this.index = e),
      this
    );
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return (this.attributes[e] = t), this;
  }
  deleteAttribute(e) {
    return delete this.attributes[e], this;
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    (this.drawRange.start = e), (this.drawRange.count = t);
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new ht().getNormalMatrix(e);
      n.applyNormalMatrix(r), (n.needsUpdate = !0);
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return ct.makeRotationFromQuaternion(e), this.applyMatrix4(ct), this;
  }
  rotateX(e) {
    return ct.makeRotationX(e), this.applyMatrix4(ct), this;
  }
  rotateY(e) {
    return ct.makeRotationY(e), this.applyMatrix4(ct), this;
  }
  rotateZ(e) {
    return ct.makeRotationZ(e), this.applyMatrix4(ct), this;
  }
  translate(e, t, n) {
    return ct.makeTranslation(e, t, n), this.applyMatrix4(ct), this;
  }
  scale(e, t, n) {
    return ct.makeScale(e, t, n), this.applyMatrix4(ct), this;
  }
  lookAt(e) {
    return Sr.lookAt(e), Sr.updateMatrix(), this.applyMatrix4(Sr.matrix), this;
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(Ln).negate(),
      this.translate(Ln.x, Ln.y, Ln.z),
      this
    );
  }
  setFromPoints(e) {
    const t = [];
    for (let n = 0, i = e.length; n < i; n++) {
      const r = e[n];
      t.push(r.x, r.y, r.z || 0);
    }
    return this.setAttribute("position", new Ve(t, 3)), this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new mi());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingBox.set(
          new L(-1 / 0, -1 / 0, -1 / 0),
          new L(1 / 0, 1 / 0, 1 / 0)
        );
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          at.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (We.addVectors(this.boundingBox.min, at.min),
                this.boundingBox.expandByPoint(We),
                We.addVectors(this.boundingBox.max, at.max),
                this.boundingBox.expandByPoint(We))
              : (this.boundingBox.expandByPoint(at.min),
                this.boundingBox.expandByPoint(at.max));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Jr());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      console.error(
        'THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',
        this
      ),
        this.boundingSphere.set(new L(), 1 / 0);
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((at.setFromBufferAttribute(e), t))
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r];
          ri.setFromBufferAttribute(a),
            this.morphTargetsRelative
              ? (We.addVectors(at.min, ri.min),
                at.expandByPoint(We),
                We.addVectors(at.max, ri.max),
                at.expandByPoint(We))
              : (at.expandByPoint(ri.min), at.expandByPoint(ri.max));
        }
      at.getCenter(n);
      let i = 0;
      for (let r = 0, o = e.count; r < o; r++)
        We.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(We)));
      if (t)
        for (let r = 0, o = t.length; r < o; r++) {
          const a = t[r],
            u = this.morphTargetsRelative;
          for (let c = 0, f = a.count; c < f; c++)
            We.fromBufferAttribute(a, c),
              u && (Ln.fromBufferAttribute(e, c), We.add(Ln)),
              (i = Math.max(i, n.distanceToSquared(We)));
        }
      (this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this
          );
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)"
      );
      return;
    }
    const n = e.array,
      i = t.position.array,
      r = t.normal.array,
      o = t.uv.array,
      a = i.length / 3;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Dt(new Float32Array(4 * a), 4));
    const u = this.getAttribute("tangent").array,
      c = [],
      f = [];
    for (let F = 0; F < a; F++) (c[F] = new L()), (f[F] = new L());
    const h = new L(),
      l = new L(),
      m = new L(),
      g = new me(),
      d = new me(),
      p = new me(),
      v = new L(),
      M = new L();
    function S(F, B, te) {
      h.fromArray(i, F * 3),
        l.fromArray(i, B * 3),
        m.fromArray(i, te * 3),
        g.fromArray(o, F * 2),
        d.fromArray(o, B * 2),
        p.fromArray(o, te * 2),
        l.sub(h),
        m.sub(h),
        d.sub(g),
        p.sub(g);
      const K = 1 / (d.x * p.y - p.x * d.y);
      !isFinite(K) ||
        (v
          .copy(l)
          .multiplyScalar(p.y)
          .addScaledVector(m, -d.y)
          .multiplyScalar(K),
        M.copy(m)
          .multiplyScalar(d.x)
          .addScaledVector(l, -p.x)
          .multiplyScalar(K),
        c[F].add(v),
        c[B].add(v),
        c[te].add(v),
        f[F].add(M),
        f[B].add(M),
        f[te].add(M));
    }
    let A = this.groups;
    A.length === 0 && (A = [{ start: 0, count: n.length }]);
    for (let F = 0, B = A.length; F < B; ++F) {
      const te = A[F],
        K = te.start,
        P = te.count;
      for (let j = K, O = K + P; j < O; j += 3) S(n[j + 0], n[j + 1], n[j + 2]);
    }
    const b = new L(),
      C = new L(),
      R = new L(),
      _ = new L();
    function E(F) {
      R.fromArray(r, F * 3), _.copy(R);
      const B = c[F];
      b.copy(B),
        b.sub(R.multiplyScalar(R.dot(B))).normalize(),
        C.crossVectors(_, B);
      const K = C.dot(f[F]) < 0 ? -1 : 1;
      (u[F * 4] = b.x),
        (u[F * 4 + 1] = b.y),
        (u[F * 4 + 2] = b.z),
        (u[F * 4 + 3] = K);
    }
    for (let F = 0, B = A.length; F < B; ++F) {
      const te = A[F],
        K = te.start,
        P = te.count;
      for (let j = K, O = K + P; j < O; j += 3)
        E(n[j + 0]), E(n[j + 1]), E(n[j + 2]);
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        (n = new Dt(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n);
      else for (let l = 0, m = n.count; l < m; l++) n.setXYZ(l, 0, 0, 0);
      const i = new L(),
        r = new L(),
        o = new L(),
        a = new L(),
        u = new L(),
        c = new L(),
        f = new L(),
        h = new L();
      if (e)
        for (let l = 0, m = e.count; l < m; l += 3) {
          const g = e.getX(l + 0),
            d = e.getX(l + 1),
            p = e.getX(l + 2);
          i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, d),
            o.fromBufferAttribute(t, p),
            f.subVectors(o, r),
            h.subVectors(i, r),
            f.cross(h),
            a.fromBufferAttribute(n, g),
            u.fromBufferAttribute(n, d),
            c.fromBufferAttribute(n, p),
            a.add(f),
            u.add(f),
            c.add(f),
            n.setXYZ(g, a.x, a.y, a.z),
            n.setXYZ(d, u.x, u.y, u.z),
            n.setXYZ(p, c.x, c.y, c.z);
        }
      else
        for (let l = 0, m = t.count; l < m; l += 3)
          i.fromBufferAttribute(t, l + 0),
            r.fromBufferAttribute(t, l + 1),
            o.fromBufferAttribute(t, l + 2),
            f.subVectors(o, r),
            h.subVectors(i, r),
            f.cross(h),
            n.setXYZ(l + 0, f.x, f.y, f.z),
            n.setXYZ(l + 1, f.x, f.y, f.z),
            n.setXYZ(l + 2, f.x, f.y, f.z);
      this.normalizeNormals(), (n.needsUpdate = !0);
    }
  }
  merge(e, t) {
    if (!(e && e.isBufferGeometry)) {
      console.error(
        "THREE.BufferGeometry.merge(): geometry not an instance of THREE.BufferGeometry.",
        e
      );
      return;
    }
    t === void 0 &&
      ((t = 0),
      console.warn(
        "THREE.BufferGeometry.merge(): Overwriting original geometry, starting at offset=0. Use BufferGeometryUtils.mergeBufferGeometries() for lossless merge."
      ));
    const n = this.attributes;
    for (const i in n) {
      if (e.attributes[i] === void 0) continue;
      const o = n[i].array,
        a = e.attributes[i],
        u = a.array,
        c = a.itemSize * t,
        f = Math.min(u.length, o.length - c);
      for (let h = 0, l = c; h < f; h++, l++) o[l] = u[h];
    }
    return this;
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      We.fromBufferAttribute(e, t),
        We.normalize(),
        e.setXYZ(t, We.x, We.y, We.z);
  }
  toNonIndexed() {
    function e(a, u) {
      const c = a.array,
        f = a.itemSize,
        h = a.normalized,
        l = new c.constructor(u.length * f);
      let m = 0,
        g = 0;
      for (let d = 0, p = u.length; d < p; d++) {
        a.isInterleavedBufferAttribute
          ? (m = u[d] * a.data.stride + a.offset)
          : (m = u[d] * f);
        for (let v = 0; v < f; v++) l[g++] = c[m++];
      }
      return new Dt(l, f, h);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."
        ),
        this
      );
    const t = new pt(),
      n = this.index.array,
      i = this.attributes;
    for (const a in i) {
      const u = i[a],
        c = e(u, n);
      t.setAttribute(a, c);
    }
    const r = this.morphAttributes;
    for (const a in r) {
      const u = [],
        c = r[a];
      for (let f = 0, h = c.length; f < h; f++) {
        const l = c[f],
          m = e(l, n);
        u.push(m);
      }
      t.morphAttributes[a] = u;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const o = this.groups;
    for (let a = 0, u = o.length; a < u; a++) {
      const c = o[a];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.5,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const u = this.parameters;
      for (const c in u) u[c] !== void 0 && (e[c] = u[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const u in n) {
      const c = n[u];
      e.data.attributes[u] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const u in this.morphAttributes) {
      const c = this.morphAttributes[u],
        f = [];
      for (let h = 0, l = c.length; h < l; h++) {
        const m = c[h];
        f.push(m.toJSON(e.data));
      }
      f.length > 0 && ((i[u] = f), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const o = this.groups;
    o.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(o)));
    const a = this.boundingSphere;
    return (
      a !== null &&
        (e.data.boundingSphere = {
          center: a.center.toArray(),
          radius: a.radius,
        }),
      e
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    (this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null);
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone(t));
    const i = e.attributes;
    for (const c in i) {
      const f = i[c];
      this.setAttribute(c, f.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const f = [],
        h = r[c];
      for (let l = 0, m = h.length; l < m; l++) f.push(h[l].clone(t));
      this.morphAttributes[c] = f;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const o = e.groups;
    for (let c = 0, f = o.length; c < f; c++) {
      const h = o[c];
      this.addGroup(h.start, h.count, h.materialIndex);
    }
    const a = e.boundingBox;
    a !== null && (this.boundingBox = a.clone());
    const u = e.boundingSphere;
    return (
      u !== null && (this.boundingSphere = u.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      e.parameters !== void 0 &&
        (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const Ys = new ke(),
  Rn = new Ll(),
  Er = new Jr(),
  Qt = new L(),
  Jt = new L(),
  Zt = new L(),
  Tr = new L(),
  Cr = new L(),
  Lr = new L(),
  Fi = new L(),
  Bi = new L(),
  Ui = new L(),
  zi = new me(),
  Ni = new me(),
  Oi = new me(),
  Rr = new L(),
  ki = new L();
class it extends ft {
  constructor(e = new pt(), t = new $i()) {
    super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      this.updateMorphTargets();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary
        )),
      (this.material = e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        (this.morphTargetInfluences = []), (this.morphTargetDictionary = {});
        for (let r = 0, o = i.length; r < o; r++) {
          const a = i[r].name || String(r);
          this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[a] = r);
        }
      }
    }
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    if (
      i === void 0 ||
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Er.copy(n.boundingSphere),
      Er.applyMatrix4(r),
      e.ray.intersectsSphere(Er) === !1) ||
      (Ys.copy(r).invert(),
      Rn.copy(e.ray).applyMatrix4(Ys),
      n.boundingBox !== null && Rn.intersectsBox(n.boundingBox) === !1)
    )
      return;
    let o;
    const a = n.index,
      u = n.attributes.position,
      c = n.morphAttributes.position,
      f = n.morphTargetsRelative,
      h = n.attributes.uv,
      l = n.attributes.uv2,
      m = n.groups,
      g = n.drawRange;
    if (a !== null)
      if (Array.isArray(i))
        for (let d = 0, p = m.length; d < p; d++) {
          const v = m[d],
            M = i[v.materialIndex],
            S = Math.max(v.start, g.start),
            A = Math.min(
              a.count,
              Math.min(v.start + v.count, g.start + g.count)
            );
          for (let b = S, C = A; b < C; b += 3) {
            const R = a.getX(b),
              _ = a.getX(b + 1),
              E = a.getX(b + 2);
            (o = Vi(this, M, e, Rn, u, c, f, h, l, R, _, E)),
              o &&
                ((o.faceIndex = Math.floor(b / 3)),
                (o.face.materialIndex = v.materialIndex),
                t.push(o));
          }
        }
      else {
        const d = Math.max(0, g.start),
          p = Math.min(a.count, g.start + g.count);
        for (let v = d, M = p; v < M; v += 3) {
          const S = a.getX(v),
            A = a.getX(v + 1),
            b = a.getX(v + 2);
          (o = Vi(this, i, e, Rn, u, c, f, h, l, S, A, b)),
            o && ((o.faceIndex = Math.floor(v / 3)), t.push(o));
        }
      }
    else if (u !== void 0)
      if (Array.isArray(i))
        for (let d = 0, p = m.length; d < p; d++) {
          const v = m[d],
            M = i[v.materialIndex],
            S = Math.max(v.start, g.start),
            A = Math.min(
              u.count,
              Math.min(v.start + v.count, g.start + g.count)
            );
          for (let b = S, C = A; b < C; b += 3) {
            const R = b,
              _ = b + 1,
              E = b + 2;
            (o = Vi(this, M, e, Rn, u, c, f, h, l, R, _, E)),
              o &&
                ((o.faceIndex = Math.floor(b / 3)),
                (o.face.materialIndex = v.materialIndex),
                t.push(o));
          }
        }
      else {
        const d = Math.max(0, g.start),
          p = Math.min(u.count, g.start + g.count);
        for (let v = d, M = p; v < M; v += 3) {
          const S = v,
            A = v + 1,
            b = v + 2;
          (o = Vi(this, i, e, Rn, u, c, f, h, l, S, A, b)),
            o && ((o.faceIndex = Math.floor(v / 3)), t.push(o));
        }
      }
  }
}
function Nl(s, e, t, n, i, r, o, a) {
  let u;
  if (
    (e.side === yt
      ? (u = n.intersectTriangle(o, r, i, !0, a))
      : (u = n.intersectTriangle(i, r, o, e.side !== Hn, a)),
    u === null)
  )
    return null;
  ki.copy(a), ki.applyMatrix4(s.matrixWorld);
  const c = t.ray.origin.distanceTo(ki);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: ki.clone(), object: s };
}
function Vi(s, e, t, n, i, r, o, a, u, c, f, h) {
  Qt.fromBufferAttribute(i, c),
    Jt.fromBufferAttribute(i, f),
    Zt.fromBufferAttribute(i, h);
  const l = s.morphTargetInfluences;
  if (r && l) {
    Fi.set(0, 0, 0), Bi.set(0, 0, 0), Ui.set(0, 0, 0);
    for (let g = 0, d = r.length; g < d; g++) {
      const p = l[g],
        v = r[g];
      p !== 0 &&
        (Tr.fromBufferAttribute(v, c),
        Cr.fromBufferAttribute(v, f),
        Lr.fromBufferAttribute(v, h),
        o
          ? (Fi.addScaledVector(Tr, p),
            Bi.addScaledVector(Cr, p),
            Ui.addScaledVector(Lr, p))
          : (Fi.addScaledVector(Tr.sub(Qt), p),
            Bi.addScaledVector(Cr.sub(Jt), p),
            Ui.addScaledVector(Lr.sub(Zt), p)));
    }
    Qt.add(Fi), Jt.add(Bi), Zt.add(Ui);
  }
  s.isSkinnedMesh &&
    (s.boneTransform(c, Qt), s.boneTransform(f, Jt), s.boneTransform(h, Zt));
  const m = Nl(s, e, t, n, Qt, Jt, Zt, Rr);
  if (m) {
    a &&
      (zi.fromBufferAttribute(a, c),
      Ni.fromBufferAttribute(a, f),
      Oi.fromBufferAttribute(a, h),
      (m.uv = kt.getUV(Rr, Qt, Jt, Zt, zi, Ni, Oi, new me()))),
      u &&
        (zi.fromBufferAttribute(u, c),
        Ni.fromBufferAttribute(u, f),
        Oi.fromBufferAttribute(u, h),
        (m.uv2 = kt.getUV(Rr, Qt, Jt, Zt, zi, Ni, Oi, new me())));
    const g = { a: c, b: f, c: h, normal: new L(), materialIndex: 0 };
    kt.getNormal(Qt, Jt, Zt, g.normal), (m.face = g);
  }
  return m;
}
class xi extends pt {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, o = 1) {
    super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: o,
      });
    const a = this;
    (i = Math.floor(i)), (r = Math.floor(r)), (o = Math.floor(o));
    const u = [],
      c = [],
      f = [],
      h = [];
    let l = 0,
      m = 0;
    g("z", "y", "x", -1, -1, n, t, e, o, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, o, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, o, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, o, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(u),
      this.setAttribute("position", new Ve(c, 3)),
      this.setAttribute("normal", new Ve(f, 3)),
      this.setAttribute("uv", new Ve(h, 2));
    function g(d, p, v, M, S, A, b, C, R, _, E) {
      const F = A / R,
        B = b / _,
        te = A / 2,
        K = b / 2,
        P = C / 2,
        j = R + 1,
        O = _ + 1;
      let W = 0,
        X = 0;
      const N = new L();
      for (let G = 0; G < O; G++) {
        const J = G * B - K;
        for (let q = 0; q < j; q++) {
          const Y = q * F - te;
          (N[d] = Y * M),
            (N[p] = J * S),
            (N[v] = P),
            c.push(N.x, N.y, N.z),
            (N[d] = 0),
            (N[p] = 0),
            (N[v] = C > 0 ? 1 : -1),
            f.push(N.x, N.y, N.z),
            h.push(q / R),
            h.push(1 - G / _),
            (W += 1);
        }
      }
      for (let G = 0; G < _; G++)
        for (let J = 0; J < R; J++) {
          const q = l + J + j * G,
            Y = l + J + j * (G + 1),
            ce = l + (J + 1) + j * (G + 1),
            he = l + (J + 1) + j * G;
          u.push(q, Y, he), u.push(Y, ce, he), (X += 6);
        }
      a.addGroup(m, X, E), (m += X), (l += W);
    }
  }
  static fromJSON(e) {
    return new xi(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments
    );
  }
}
function qn(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? (e[t][n] = i.clone())
        : Array.isArray(i)
        ? (e[t][n] = i.slice())
        : (e[t][n] = i);
    }
  }
  return e;
}
function Qe(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = qn(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
const Qi = { clone: qn, merge: Qe };
var Ol = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  kl = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class lt extends vi {
  constructor(e) {
    super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.vertexShader = Ol),
      (this.fragmentShader = kl),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.extensions = {
        derivatives: !1,
        fragDepth: !1,
        drawBuffers: !1,
        shaderTextureLOD: !1,
      }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv2: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 &&
        (e.attributes !== void 0 &&
          console.error(
            "THREE.ShaderMaterial: attributes should now be defined in THREE.BufferGeometry instead."
          ),
        this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = qn(e.uniforms)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    (t.glslVersion = this.glslVersion), (t.uniforms = {});
    for (const i in this.uniforms) {
      const o = this.uniforms[i].value;
      o && o.isTexture
        ? (t.uniforms[i] = { type: "t", value: o.toJSON(e).uuid })
        : o && o.isColor
        ? (t.uniforms[i] = { type: "c", value: o.getHex() })
        : o && o.isVector2
        ? (t.uniforms[i] = { type: "v2", value: o.toArray() })
        : o && o.isVector3
        ? (t.uniforms[i] = { type: "v3", value: o.toArray() })
        : o && o.isVector4
        ? (t.uniforms[i] = { type: "v4", value: o.toArray() })
        : o && o.isMatrix3
        ? (t.uniforms[i] = { type: "m3", value: o.toArray() })
        : o && o.isMatrix4
        ? (t.uniforms[i] = { type: "m4", value: o.toArray() })
        : (t.uniforms[i] = { value: o });
    }
    Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader);
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return Object.keys(n).length > 0 && (t.extensions = n), t;
  }
}
class Ga extends ft {
  constructor() {
    super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new ke()),
      (this.projectionMatrix = new ke()),
      (this.projectionMatrixInverse = new ke());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      this
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(-t[8], -t[9], -t[10]).normalize();
  }
  updateMatrixWorld(e) {
    super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  updateWorldMatrix(e, t) {
    super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert();
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class ot extends Ga {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    (this.fov = qi * 2 * Math.atan(t)), this.updateProjectionMatrix();
  }
  getFocalLength() {
    const e = Math.tan(ci * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return qi * 2 * Math.atan(Math.tan(ci * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  setViewOffset(e, t, n, i, r, o) {
    (this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(ci * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const o = this.view;
    if (this.view !== null && this.view.enabled) {
      const u = o.fullWidth,
        c = o.fullHeight;
      (r += (o.offsetX * i) / u),
        (t -= (o.offsetY * n) / c),
        (i *= o.width / u),
        (n *= o.height / c);
    }
    const a = this.filmOffset;
    a !== 0 && (r += (e * a) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(r, r + i, t, t - n, e, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const Dn = 90,
  Pn = 1;
class Vl extends ft {
  constructor(e, t, n) {
    if (
      (super(), (this.type = "CubeCamera"), n.isWebGLCubeRenderTarget !== !0)
    ) {
      console.error(
        "THREE.CubeCamera: The constructor now expects an instance of WebGLCubeRenderTarget as third parameter."
      );
      return;
    }
    this.renderTarget = n;
    const i = new ot(Dn, Pn, e, t);
    (i.layers = this.layers),
      i.up.set(0, -1, 0),
      i.lookAt(new L(1, 0, 0)),
      this.add(i);
    const r = new ot(Dn, Pn, e, t);
    (r.layers = this.layers),
      r.up.set(0, -1, 0),
      r.lookAt(new L(-1, 0, 0)),
      this.add(r);
    const o = new ot(Dn, Pn, e, t);
    (o.layers = this.layers),
      o.up.set(0, 0, 1),
      o.lookAt(new L(0, 1, 0)),
      this.add(o);
    const a = new ot(Dn, Pn, e, t);
    (a.layers = this.layers),
      a.up.set(0, 0, -1),
      a.lookAt(new L(0, -1, 0)),
      this.add(a);
    const u = new ot(Dn, Pn, e, t);
    (u.layers = this.layers),
      u.up.set(0, -1, 0),
      u.lookAt(new L(0, 0, 1)),
      this.add(u);
    const c = new ot(Dn, Pn, e, t);
    (c.layers = this.layers),
      c.up.set(0, -1, 0),
      c.lookAt(new L(0, 0, -1)),
      this.add(c);
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const n = this.renderTarget,
      [i, r, o, a, u, c] = this.children,
      f = e.getRenderTarget(),
      h = e.toneMapping,
      l = e.xr.enabled;
    (e.toneMapping = Vt), (e.xr.enabled = !1);
    const m = n.texture.generateMipmaps;
    (n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0),
      e.render(t, i),
      e.setRenderTarget(n, 1),
      e.render(t, r),
      e.setRenderTarget(n, 2),
      e.render(t, o),
      e.setRenderTarget(n, 3),
      e.render(t, a),
      e.setRenderTarget(n, 4),
      e.render(t, u),
      (n.texture.generateMipmaps = m),
      e.setRenderTarget(n, 5),
      e.render(t, c),
      e.setRenderTarget(f),
      (e.toneMapping = h),
      (e.xr.enabled = l),
      (n.texture.needsPMREMUpdate = !0);
  }
}
class Ha extends dt {
  constructor(e, t, n, i, r, o, a, u, c, f) {
    (e = e !== void 0 ? e : []),
      (t = t !== void 0 ? t : Wn),
      super(e, t, n, i, r, o, a, u, c, f),
      (this.isCubeTexture = !0),
      (this.flipY = !1);
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Gl extends Mt {
  constructor(e, t = {}) {
    super(e, e, t), (this.isWebGLCubeRenderTarget = !0);
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    (this.texture = new Ha(
      i,
      t.mapping,
      t.wrapS,
      t.wrapT,
      t.magFilter,
      t.minFilter,
      t.format,
      t.type,
      t.anisotropy,
      t.encoding
    )),
      (this.texture.isRenderTargetTexture = !0),
      (this.texture.generateMipmaps =
        t.generateMipmaps !== void 0 ? t.generateMipmaps : !1),
      (this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : ut);
  }
  fromEquirectangularTexture(e, t) {
    (this.texture.type = t.type),
      (this.texture.encoding = t.encoding),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter);
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new xi(5, 5, 5),
      r = new lt({
        name: "CubemapFromEquirect",
        uniforms: qn(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: yt,
        blending: Kt,
      });
    r.uniforms.tEquirect.value = t;
    const o = new it(i, r),
      a = t.minFilter;
    return (
      t.minFilter === Ki && (t.minFilter = ut),
      new Vl(1, 10, this).update(e, o),
      (t.minFilter = a),
      o.geometry.dispose(),
      o.material.dispose(),
      this
    );
  }
  clear(e, t, n, i) {
    const r = e.getRenderTarget();
    for (let o = 0; o < 6; o++) e.setRenderTarget(this, o), e.clear(t, n, i);
    e.setRenderTarget(r);
  }
}
const Dr = new L(),
  Hl = new L(),
  Wl = new ht();
class an {
  constructor(e = new L(1, 0, 0), t = 0) {
    (this.isPlane = !0), (this.normal = e), (this.constant = t);
  }
  set(e, t) {
    return this.normal.copy(e), (this.constant = t), this;
  }
  setComponents(e, t, n, i) {
    return this.normal.set(e, t, n), (this.constant = i), this;
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return this.normal.copy(e), (this.constant = -t.dot(this.normal)), this;
  }
  setFromCoplanarPoints(e, t, n) {
    const i = Dr.subVectors(n, t).cross(Hl.subVectors(e, t)).normalize();
    return this.setFromNormalAndCoplanarPoint(i, e), this;
  }
  copy(e) {
    return this.normal.copy(e.normal), (this.constant = e.constant), this;
  }
  normalize() {
    const e = 1 / this.normal.length();
    return this.normal.multiplyScalar(e), (this.constant *= e), this;
  }
  negate() {
    return (this.constant *= -1), this.normal.negate(), this;
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e);
  }
  intersectLine(e, t) {
    const n = e.delta(Dr),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(n).multiplyScalar(r).add(e.start);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Wl.getNormalMatrix(e),
      i = this.coplanarPoint(Dr).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return (this.constant = -i.dot(r)), this;
  }
  translate(e) {
    return (this.constant -= e.dot(this.normal)), this;
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const In = new Jr(),
  Gi = new L();
class Zr {
  constructor(
    e = new an(),
    t = new an(),
    n = new an(),
    i = new an(),
    r = new an(),
    o = new an()
  ) {
    this.planes = [e, t, n, i, r, o];
  }
  set(e, t, n, i, r, o) {
    const a = this.planes;
    return (
      a[0].copy(e),
      a[1].copy(t),
      a[2].copy(n),
      a[3].copy(i),
      a[4].copy(r),
      a[5].copy(o),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e) {
    const t = this.planes,
      n = e.elements,
      i = n[0],
      r = n[1],
      o = n[2],
      a = n[3],
      u = n[4],
      c = n[5],
      f = n[6],
      h = n[7],
      l = n[8],
      m = n[9],
      g = n[10],
      d = n[11],
      p = n[12],
      v = n[13],
      M = n[14],
      S = n[15];
    return (
      t[0].setComponents(a - i, h - u, d - l, S - p).normalize(),
      t[1].setComponents(a + i, h + u, d + l, S + p).normalize(),
      t[2].setComponents(a + r, h + c, d + m, S + v).normalize(),
      t[3].setComponents(a - r, h - c, d - m, S - v).normalize(),
      t[4].setComponents(a - o, h - f, d - g, S - M).normalize(),
      t[5].setComponents(a + o, h + f, d + g, S + M).normalize(),
      this
    );
  }
  intersectsObject(e) {
    const t = e.geometry;
    return (
      t.boundingSphere === null && t.computeBoundingSphere(),
      In.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),
      this.intersectsSphere(In)
    );
  }
  intersectsSprite(e) {
    return (
      In.center.set(0, 0, 0),
      (In.radius = 0.7071067811865476),
      In.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(In)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((Gi.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (Gi.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (Gi.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(Gi) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
function Wa() {
  let s = null,
    e = !1,
    t = null,
    n = null;
  function i(r, o) {
    t(r, o), (n = s.requestAnimationFrame(i));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = s.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      s.cancelAnimationFrame(n), (e = !1);
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function jl(s, e) {
  const t = e.isWebGL2,
    n = new WeakMap();
  function i(c, f) {
    const h = c.array,
      l = c.usage,
      m = s.createBuffer();
    s.bindBuffer(f, m), s.bufferData(f, h, l), c.onUploadCallback();
    let g;
    if (h instanceof Float32Array) g = 5126;
    else if (h instanceof Uint16Array)
      if (c.isFloat16BufferAttribute)
        if (t) g = 5131;
        else
          throw new Error(
            "THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2."
          );
      else g = 5123;
    else if (h instanceof Int16Array) g = 5122;
    else if (h instanceof Uint32Array) g = 5125;
    else if (h instanceof Int32Array) g = 5124;
    else if (h instanceof Int8Array) g = 5120;
    else if (h instanceof Uint8Array) g = 5121;
    else if (h instanceof Uint8ClampedArray) g = 5121;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + h
      );
    return {
      buffer: m,
      type: g,
      bytesPerElement: h.BYTES_PER_ELEMENT,
      version: c.version,
    };
  }
  function r(c, f, h) {
    const l = f.array,
      m = f.updateRange;
    s.bindBuffer(h, c),
      m.count === -1
        ? s.bufferSubData(h, 0, l)
        : (t
            ? s.bufferSubData(
                h,
                m.offset * l.BYTES_PER_ELEMENT,
                l,
                m.offset,
                m.count
              )
            : s.bufferSubData(
                h,
                m.offset * l.BYTES_PER_ELEMENT,
                l.subarray(m.offset, m.offset + m.count)
              ),
          (m.count = -1));
  }
  function o(c) {
    return c.isInterleavedBufferAttribute && (c = c.data), n.get(c);
  }
  function a(c) {
    c.isInterleavedBufferAttribute && (c = c.data);
    const f = n.get(c);
    f && (s.deleteBuffer(f.buffer), n.delete(c));
  }
  function u(c, f) {
    if (c.isGLBufferAttribute) {
      const l = n.get(c);
      (!l || l.version < c.version) &&
        n.set(c, {
          buffer: c.buffer,
          type: c.type,
          bytesPerElement: c.elementSize,
          version: c.version,
        });
      return;
    }
    c.isInterleavedBufferAttribute && (c = c.data);
    const h = n.get(c);
    h === void 0
      ? n.set(c, i(c, f))
      : h.version < c.version && (r(h.buffer, c, f), (h.version = c.version));
  }
  return { get: o, remove: a, update: u };
}
class Kr extends pt {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      });
    const r = e / 2,
      o = t / 2,
      a = Math.floor(n),
      u = Math.floor(i),
      c = a + 1,
      f = u + 1,
      h = e / a,
      l = t / u,
      m = [],
      g = [],
      d = [],
      p = [];
    for (let v = 0; v < f; v++) {
      const M = v * l - o;
      for (let S = 0; S < c; S++) {
        const A = S * h - r;
        g.push(A, -M, 0), d.push(0, 0, 1), p.push(S / a), p.push(1 - v / u);
      }
    }
    for (let v = 0; v < u; v++)
      for (let M = 0; M < a; M++) {
        const S = M + c * v,
          A = M + c * (v + 1),
          b = M + 1 + c * (v + 1),
          C = M + 1 + c * v;
        m.push(S, A, C), m.push(A, b, C);
      }
    this.setIndex(m),
      this.setAttribute("position", new Ve(g, 3)),
      this.setAttribute("normal", new Ve(d, 3)),
      this.setAttribute("uv", new Ve(p, 2));
  }
  static fromJSON(e) {
    return new Kr(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
var Xl = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,
  ql = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Yl = `#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,
  Ql = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  Jl = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  Zl = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  Kl = "vec3 transformed = vec3( position );",
  $l = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  ec = `vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = mix(F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence);
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,
  tc = `#ifdef USE_IRIDESCENCE
const mat3 XYZ_TO_REC709 = mat3(
    3.2404542, -0.9692660,  0.0556434,
   -1.5371385,  1.8760108, -0.2040259,
   -0.4985314,  0.0415560,  1.0572252
);
vec3 Fresnel0ToIor( vec3 fresnel0 ) {
   vec3 sqrtF0 = sqrt( fresnel0 );
   return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
}
vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
}
float IorToFresnel0( float transmittedIor, float incidentIor ) {
   return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
}
vec3 evalSensitivity( float OPD, vec3 shift ) {
   float phase = 2.0 * PI * OPD * 1.0e-9;
   vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
   vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
   vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
   vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( -pow2( phase ) * var );
   xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[0] ) * exp( -4.5282e+09 * pow2( phase ) );
   xyz /= 1.0685e-7;
   vec3 srgb = XYZ_TO_REC709 * xyz;
   return srgb;
}
vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
   vec3 I;
   float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
   float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
   float cosTheta2Sq = 1.0 - sinTheta2Sq;
   if ( cosTheta2Sq < 0.0 ) {
       return vec3( 1.0 );
   }
   float cosTheta2 = sqrt( cosTheta2Sq );
   float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
   float R12 = F_Schlick( R0, 1.0, cosTheta1 );
   float R21 = R12;
   float T121 = 1.0 - R12;
   float phi12 = 0.0;
   if ( iridescenceIOR < outsideIOR ) phi12 = PI;
   float phi21 = PI - phi12;
   vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );   vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
   vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
   vec3 phi23 = vec3( 0.0 );
   if ( baseIOR[0] < iridescenceIOR ) phi23[0] = PI;
   if ( baseIOR[1] < iridescenceIOR ) phi23[1] = PI;
   if ( baseIOR[2] < iridescenceIOR ) phi23[2] = PI;
   float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
   vec3 phi = vec3( phi21 ) + phi23;
   vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
   vec3 r123 = sqrt( R123 );
   vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
   vec3 C0 = R12 + Rs;
   I = C0;
   vec3 Cm = Rs - T121;
   for ( int m = 1; m <= 2; ++m ) {
       Cm *= r123;
       vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
       I += Cm * Sm;
   }
   return max( I, vec3( 0.0 ) );
}
#endif`,
  nc = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = vec3( dFdx( surf_pos.x ), dFdx( surf_pos.y ), dFdx( surf_pos.z ) );
		vec3 vSigmaY = vec3( dFdy( surf_pos.x ), dFdy( surf_pos.y ), dFdy( surf_pos.z ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  ic = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,
  rc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  sc = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  ac = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  oc = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  lc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  cc = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,
  uc = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,
  hc = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 color ) { return dot( color, vec3( 0.3333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float linearToRelativeLuminance( const in vec3 color ) {
	vec3 weights = vec3( 0.2126, 0.7152, 0.0722 );
	return dot( weights, color.rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,
  dc = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define r0 1.0
	#define v0 0.339
	#define m0 - 2.0
	#define r1 0.8
	#define v1 0.276
	#define m1 - 1.0
	#define r4 0.4
	#define v4 0.046
	#define m4 2.0
	#define r5 0.305
	#define v5 0.016
	#define m5 3.0
	#define r6 0.21
	#define v6 0.0038
	#define m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= r1 ) {
			mip = ( r0 - roughness ) * ( m1 - m0 ) / ( r0 - r1 ) + m0;
		} else if ( roughness >= r4 ) {
			mip = ( r1 - roughness ) * ( m4 - m1 ) / ( r1 - r4 ) + m1;
		} else if ( roughness >= r5 ) {
			mip = ( r4 - roughness ) * ( m5 - m4 ) / ( r4 - r5 ) + m4;
		} else if ( roughness >= r6 ) {
			mip = ( r5 - roughness ) * ( m6 - m5 ) / ( r5 - r6 ) + m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  fc = `vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  pc = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  mc = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,
  gc = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  vc = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  xc = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  _c = `vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  yc = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 envColor = textureCubeUV( envMap, reflectVec, 0.0 );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  Mc = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  bc = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  wc = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) ||defined( PHONG )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  Ac = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  Sc = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  Ec = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  Tc = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  Cc = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  Lc = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		return ( coord.x < 0.7 ) ? vec3( 0.7 ) : vec3( 1.0 );
	#endif
}`,
  Rc = `#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,
  Dc = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  Pc = `vec3 diffuse = vec3( 1.0 );
GeometricContext geometry;
geometry.position = mvPosition.xyz;
geometry.normal = normalize( transformedNormal );
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( -mvPosition.xyz );
GeometricContext backGeometry;
backGeometry.position = geometry.position;
backGeometry.normal = -geometry.normal;
backGeometry.viewDir = geometry.viewDir;
vLightFront = vec3( 0.0 );
vIndirectFront = vec3( 0.0 );
#ifdef DOUBLE_SIDED
	vLightBack = vec3( 0.0 );
	vIndirectBack = vec3( 0.0 );
#endif
IncidentLight directLight;
float dotNL;
vec3 directLightColor_Diffuse;
vIndirectFront += getAmbientLightIrradiance( ambientLightColor );
vIndirectFront += getLightProbeIrradiance( lightProbe, geometry.normal );
#ifdef DOUBLE_SIDED
	vIndirectBack += getAmbientLightIrradiance( ambientLightColor );
	vIndirectBack += getLightProbeIrradiance( lightProbe, backGeometry.normal );
#endif
#if NUM_POINT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		getPointLightInfo( pointLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_SPOT_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		getSpotLightInfo( spotLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_DIR_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		getDirectionalLightInfo( directionalLights[ i ], geometry, directLight );
		dotNL = dot( geometry.normal, directLight.direction );
		directLightColor_Diffuse = directLight.color;
		vLightFront += saturate( dotNL ) * directLightColor_Diffuse;
		#ifdef DOUBLE_SIDED
			vLightBack += saturate( - dotNL ) * directLightColor_Diffuse;
		#endif
	}
	#pragma unroll_loop_end
#endif
#if NUM_HEMI_LIGHTS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
		vIndirectFront += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		#ifdef DOUBLE_SIDED
			vIndirectBack += getHemisphereLightIrradiance( hemisphereLights[ i ], backGeometry.normal );
		#endif
	}
	#pragma unroll_loop_end
#endif`,
  Ic = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  Fc = `#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,
  Bc = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  Uc = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,
  zc = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  Nc = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,
  Oc = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( ior - 1.0 ) / ( ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,
  kc = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  Vc = `
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
float dotNVi = saturate( dot( normal, geometry.viewDir ) );
if ( material.iridescenceThickness == 0.0 ) {
	material.iridescence = 0.0;
} else {
	material.iridescence = saturate( material.iridescence );
}
if ( material.iridescence > 0.0 ) {
	material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
	material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  Gc = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  Hc = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,
  Wc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  jc = `#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Xc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,
  qc = `#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,
  Yc = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  Qc = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Jc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  Zc = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Kc = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  $c = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  eu = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  tu = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,
  nu = `#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,
  iu = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,
  ru = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = vec3( dFdx( vViewPosition.x ), dFdx( vViewPosition.y ), dFdx( vViewPosition.z ) );
	vec3 fdy = vec3( dFdy( vViewPosition.x ), dFdy( vViewPosition.y ), dFdy( vViewPosition.z ) );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,
  su = `#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  au = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  ou = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  lu = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  cu = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = vec3( dFdx( eye_pos.x ), dFdx( eye_pos.y ), dFdx( eye_pos.z ) );
		vec3 q1 = vec3( dFdy( eye_pos.x ), dFdy( eye_pos.y ), dFdy( eye_pos.z ) );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,
  uu = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,
  hu = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,
  du = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,
  fu = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  pu = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  mu = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,
  gu = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  vu = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  xu = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  _u = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  yu = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Mu = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  bu = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,
  wu = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform mat4 spotShadowMatrix[ NUM_SPOT_LIGHT_SHADOWS ];
		varying vec4 vSpotShadowCoord[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  Au = `#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias, 0 );
		vSpotShadowCoord[ i ] = spotShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,
  Su = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  Eu = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  Tu = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,
  Cu = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  Lu = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  Ru = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  Du = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  Pu = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  Iu = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  Fu = `#ifdef USE_TRANSMISSION
	float transmissionAlpha = 1.0;
	float transmissionFactor = transmission;
	float thicknessFactor = thickness;
	#ifdef USE_TRANSMISSIONMAP
		transmissionFactor *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		thicknessFactor *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, roughnessFactor, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, ior, thicknessFactor,
		attenuationColor, attenuationDistance );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, transmissionFactor );
	transmissionAlpha = mix( transmissionAlpha, transmission.a, transmissionFactor );
#endif`,
  Bu = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( attenuationDistance == 0.0 ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,
  Uu = `#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,
  zu = `#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,
  Nu = `#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,
  Ou = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,
  ku = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,
  Vu = `#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,
  Gu = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION )
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const Hu = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  Wu = `uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  ju = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  Xu = `#include <envmap_common_pars_fragment>
uniform float opacity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	vec3 vReflect = vWorldDirection;
	#include <envmap_fragment>
	gl_FragColor = envColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  qu = `#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  Yu = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,
  Qu = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  Ju = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  Zu = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  Ku = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,
  $u = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  eh = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  th = `#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  nh = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  ih = `#define LAMBERT
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <bsdfs>
#include <lights_pars_begin>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <lights_lambert_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  rh = `uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
varying vec3 vLightFront;
varying vec3 vIndirectFront;
#ifdef DOUBLE_SIDED
	varying vec3 vLightBack;
	varying vec3 vIndirectBack;
#endif
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <fog_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <emissivemap_fragment>
	#ifdef DOUBLE_SIDED
		reflectedLight.indirectDiffuse += ( gl_FrontFacing ) ? vIndirectFront : vIndirectBack;
	#else
		reflectedLight.indirectDiffuse += vIndirectFront;
	#endif
	#include <lightmap_fragment>
	reflectedLight.indirectDiffuse *= BRDF_Lambert( diffuseColor.rgb );
	#ifdef DOUBLE_SIDED
		reflectedLight.directDiffuse = ( gl_FrontFacing ) ? vLightFront : vLightBack;
	#else
		reflectedLight.directDiffuse = vLightFront;
	#endif
	reflectedLight.directDiffuse *= BRDF_Lambert( diffuseColor.rgb ) * getShadowMask();
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  sh = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  ah = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  oh = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  lh = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  ch = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  uh = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  hh = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  dh = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  fh = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  ph = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  mh = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  gh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  vh = `#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  xh = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  _h = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  yh = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,
  we = {
    alphamap_fragment: Xl,
    alphamap_pars_fragment: ql,
    alphatest_fragment: Yl,
    alphatest_pars_fragment: Ql,
    aomap_fragment: Jl,
    aomap_pars_fragment: Zl,
    begin_vertex: Kl,
    beginnormal_vertex: $l,
    bsdfs: ec,
    iridescence_fragment: tc,
    bumpmap_pars_fragment: nc,
    clipping_planes_fragment: ic,
    clipping_planes_pars_fragment: rc,
    clipping_planes_pars_vertex: sc,
    clipping_planes_vertex: ac,
    color_fragment: oc,
    color_pars_fragment: lc,
    color_pars_vertex: cc,
    color_vertex: uc,
    common: hc,
    cube_uv_reflection_fragment: dc,
    defaultnormal_vertex: fc,
    displacementmap_pars_vertex: pc,
    displacementmap_vertex: mc,
    emissivemap_fragment: gc,
    emissivemap_pars_fragment: vc,
    encodings_fragment: xc,
    encodings_pars_fragment: _c,
    envmap_fragment: yc,
    envmap_common_pars_fragment: Mc,
    envmap_pars_fragment: bc,
    envmap_pars_vertex: wc,
    envmap_physical_pars_fragment: Fc,
    envmap_vertex: Ac,
    fog_vertex: Sc,
    fog_pars_vertex: Ec,
    fog_fragment: Tc,
    fog_pars_fragment: Cc,
    gradientmap_pars_fragment: Lc,
    lightmap_fragment: Rc,
    lightmap_pars_fragment: Dc,
    lights_lambert_vertex: Pc,
    lights_pars_begin: Ic,
    lights_toon_fragment: Bc,
    lights_toon_pars_fragment: Uc,
    lights_phong_fragment: zc,
    lights_phong_pars_fragment: Nc,
    lights_physical_fragment: Oc,
    lights_physical_pars_fragment: kc,
    lights_fragment_begin: Vc,
    lights_fragment_maps: Gc,
    lights_fragment_end: Hc,
    logdepthbuf_fragment: Wc,
    logdepthbuf_pars_fragment: jc,
    logdepthbuf_pars_vertex: Xc,
    logdepthbuf_vertex: qc,
    map_fragment: Yc,
    map_pars_fragment: Qc,
    map_particle_fragment: Jc,
    map_particle_pars_fragment: Zc,
    metalnessmap_fragment: Kc,
    metalnessmap_pars_fragment: $c,
    morphcolor_vertex: eu,
    morphnormal_vertex: tu,
    morphtarget_pars_vertex: nu,
    morphtarget_vertex: iu,
    normal_fragment_begin: ru,
    normal_fragment_maps: su,
    normal_pars_fragment: au,
    normal_pars_vertex: ou,
    normal_vertex: lu,
    normalmap_pars_fragment: cu,
    clearcoat_normal_fragment_begin: uu,
    clearcoat_normal_fragment_maps: hu,
    clearcoat_pars_fragment: du,
    iridescence_pars_fragment: fu,
    output_fragment: pu,
    packing: mu,
    premultiplied_alpha_fragment: gu,
    project_vertex: vu,
    dithering_fragment: xu,
    dithering_pars_fragment: _u,
    roughnessmap_fragment: yu,
    roughnessmap_pars_fragment: Mu,
    shadowmap_pars_fragment: bu,
    shadowmap_pars_vertex: wu,
    shadowmap_vertex: Au,
    shadowmask_pars_fragment: Su,
    skinbase_vertex: Eu,
    skinning_pars_vertex: Tu,
    skinning_vertex: Cu,
    skinnormal_vertex: Lu,
    specularmap_fragment: Ru,
    specularmap_pars_fragment: Du,
    tonemapping_fragment: Pu,
    tonemapping_pars_fragment: Iu,
    transmission_fragment: Fu,
    transmission_pars_fragment: Bu,
    uv_pars_fragment: Uu,
    uv_pars_vertex: zu,
    uv_vertex: Nu,
    uv2_pars_fragment: Ou,
    uv2_pars_vertex: ku,
    uv2_vertex: Vu,
    worldpos_vertex: Gu,
    background_vert: Hu,
    background_frag: Wu,
    cube_vert: ju,
    cube_frag: Xu,
    depth_vert: qu,
    depth_frag: Yu,
    distanceRGBA_vert: Qu,
    distanceRGBA_frag: Ju,
    equirect_vert: Zu,
    equirect_frag: Ku,
    linedashed_vert: $u,
    linedashed_frag: eh,
    meshbasic_vert: th,
    meshbasic_frag: nh,
    meshlambert_vert: ih,
    meshlambert_frag: rh,
    meshmatcap_vert: sh,
    meshmatcap_frag: ah,
    meshnormal_vert: oh,
    meshnormal_frag: lh,
    meshphong_vert: ch,
    meshphong_frag: uh,
    meshphysical_vert: hh,
    meshphysical_frag: dh,
    meshtoon_vert: fh,
    meshtoon_frag: ph,
    points_vert: mh,
    points_frag: gh,
    shadow_vert: vh,
    shadow_frag: xh,
    sprite_vert: _h,
    sprite_frag: yh,
  },
  ie = {
    common: {
      diffuse: { value: new Ce(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      uvTransform: { value: new ht() },
      uv2Transform: { value: new ht() },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
    },
    specularmap: { specularMap: { value: null } },
    envmap: {
      envMap: { value: null },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: { aoMap: { value: null }, aoMapIntensity: { value: 1 } },
    lightmap: { lightMap: { value: null }, lightMapIntensity: { value: 1 } },
    emissivemap: { emissiveMap: { value: null } },
    bumpmap: { bumpMap: { value: null }, bumpScale: { value: 1 } },
    normalmap: {
      normalMap: { value: null },
      normalScale: { value: new me(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    roughnessmap: { roughnessMap: { value: null } },
    metalnessmap: { metalnessMap: { value: null } },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ce(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotShadowMap: { value: [] },
      spotShadowMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ce(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new ht() },
    },
    sprite: {
      diffuse: { value: new Ce(16777215) },
      opacity: { value: 1 },
      center: { value: new me(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      alphaMap: { value: null },
      alphaTest: { value: 0 },
      uvTransform: { value: new ht() },
    },
  },
  Tt = {
    basic: {
      uniforms: Qe([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.fog,
      ]),
      vertexShader: we.meshbasic_vert,
      fragmentShader: we.meshbasic_frag,
    },
    lambert: {
      uniforms: Qe([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.fog,
        ie.lights,
        { emissive: { value: new Ce(0) } },
      ]),
      vertexShader: we.meshlambert_vert,
      fragmentShader: we.meshlambert_frag,
    },
    phong: {
      uniforms: Qe([
        ie.common,
        ie.specularmap,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new Ce(0) },
          specular: { value: new Ce(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: we.meshphong_vert,
      fragmentShader: we.meshphong_frag,
    },
    standard: {
      uniforms: Qe([
        ie.common,
        ie.envmap,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.roughnessmap,
        ie.metalnessmap,
        ie.fog,
        ie.lights,
        {
          emissive: { value: new Ce(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: we.meshphysical_vert,
      fragmentShader: we.meshphysical_frag,
    },
    toon: {
      uniforms: Qe([
        ie.common,
        ie.aomap,
        ie.lightmap,
        ie.emissivemap,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.gradientmap,
        ie.fog,
        ie.lights,
        { emissive: { value: new Ce(0) } },
      ]),
      vertexShader: we.meshtoon_vert,
      fragmentShader: we.meshtoon_frag,
    },
    matcap: {
      uniforms: Qe([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        ie.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: we.meshmatcap_vert,
      fragmentShader: we.meshmatcap_frag,
    },
    points: {
      uniforms: Qe([ie.points, ie.fog]),
      vertexShader: we.points_vert,
      fragmentShader: we.points_frag,
    },
    dashed: {
      uniforms: Qe([
        ie.common,
        ie.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: we.linedashed_vert,
      fragmentShader: we.linedashed_frag,
    },
    depth: {
      uniforms: Qe([ie.common, ie.displacementmap]),
      vertexShader: we.depth_vert,
      fragmentShader: we.depth_frag,
    },
    normal: {
      uniforms: Qe([
        ie.common,
        ie.bumpmap,
        ie.normalmap,
        ie.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: we.meshnormal_vert,
      fragmentShader: we.meshnormal_frag,
    },
    sprite: {
      uniforms: Qe([ie.sprite, ie.fog]),
      vertexShader: we.sprite_vert,
      fragmentShader: we.sprite_frag,
    },
    background: {
      uniforms: { uvTransform: { value: new ht() }, t2D: { value: null } },
      vertexShader: we.background_vert,
      fragmentShader: we.background_frag,
    },
    cube: {
      uniforms: Qe([ie.envmap, { opacity: { value: 1 } }]),
      vertexShader: we.cube_vert,
      fragmentShader: we.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: we.equirect_vert,
      fragmentShader: we.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Qe([
        ie.common,
        ie.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: we.distanceRGBA_vert,
      fragmentShader: we.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Qe([
        ie.lights,
        ie.fog,
        { color: { value: new Ce(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: we.shadow_vert,
      fragmentShader: we.shadow_frag,
    },
  };
Tt.physical = {
  uniforms: Qe([
    Tt.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatNormalScale: { value: new me(1, 1) },
      clearcoatNormalMap: { value: null },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      sheen: { value: 0 },
      sheenColor: { value: new Ce(0) },
      sheenColorMap: { value: null },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionSamplerSize: { value: new me() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ce(0) },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularColor: { value: new Ce(1, 1, 1) },
      specularColorMap: { value: null },
    },
  ]),
  vertexShader: we.meshphysical_vert,
  fragmentShader: we.meshphysical_frag,
};
function Mh(s, e, t, n, i, r) {
  const o = new Ce(0);
  let a = i === !0 ? 0 : 1,
    u,
    c,
    f = null,
    h = 0,
    l = null;
  function m(d, p) {
    let v = !1,
      M = p.isScene === !0 ? p.background : null;
    M && M.isTexture && (M = e.get(M));
    const S = s.xr,
      A = S.getSession && S.getSession();
    A && A.environmentBlendMode === "additive" && (M = null),
      M === null ? g(o, a) : M && M.isColor && (g(M, 1), (v = !0)),
      (s.autoClear || v) &&
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil),
      M && (M.isCubeTexture || M.mapping === Zi)
        ? (c === void 0 &&
            ((c = new it(
              new xi(1, 1, 1),
              new lt({
                name: "BackgroundCubeMaterial",
                uniforms: qn(Tt.cube.uniforms),
                vertexShader: Tt.cube.vertexShader,
                fragmentShader: Tt.cube.fragmentShader,
                side: yt,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            c.geometry.deleteAttribute("normal"),
            c.geometry.deleteAttribute("uv"),
            (c.onBeforeRender = function (b, C, R) {
              this.matrixWorld.copyPosition(R.matrixWorld);
            }),
            Object.defineProperty(c.material, "envMap", {
              get: function () {
                return this.uniforms.envMap.value;
              },
            }),
            n.update(c)),
          (c.material.uniforms.envMap.value = M),
          (c.material.uniforms.flipEnvMap.value =
            M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
          (f !== M || h !== M.version || l !== s.toneMapping) &&
            ((c.material.needsUpdate = !0),
            (f = M),
            (h = M.version),
            (l = s.toneMapping)),
          c.layers.enableAll(),
          d.unshift(c, c.geometry, c.material, 0, 0, null))
        : M &&
          M.isTexture &&
          (u === void 0 &&
            ((u = new it(
              new Kr(2, 2),
              new lt({
                name: "BackgroundMaterial",
                uniforms: qn(Tt.background.uniforms),
                vertexShader: Tt.background.vertexShader,
                fragmentShader: Tt.background.fragmentShader,
                side: hi,
                depthTest: !1,
                depthWrite: !1,
                fog: !1,
              })
            )),
            u.geometry.deleteAttribute("normal"),
            Object.defineProperty(u.material, "map", {
              get: function () {
                return this.uniforms.t2D.value;
              },
            }),
            n.update(u)),
          (u.material.uniforms.t2D.value = M),
          M.matrixAutoUpdate === !0 && M.updateMatrix(),
          u.material.uniforms.uvTransform.value.copy(M.matrix),
          (f !== M || h !== M.version || l !== s.toneMapping) &&
            ((u.material.needsUpdate = !0),
            (f = M),
            (h = M.version),
            (l = s.toneMapping)),
          u.layers.enableAll(),
          d.unshift(u, u.geometry, u.material, 0, 0, null));
  }
  function g(d, p) {
    t.buffers.color.setClear(d.r, d.g, d.b, p, r);
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (d, p = 1) {
      o.set(d), (a = p), g(o, a);
    },
    getClearAlpha: function () {
      return a;
    },
    setClearAlpha: function (d) {
      (a = d), g(o, a);
    },
    render: m,
  };
}
function bh(s, e, t, n) {
  const i = s.getParameter(34921),
    r = n.isWebGL2 ? null : e.get("OES_vertex_array_object"),
    o = n.isWebGL2 || r !== null,
    a = {},
    u = p(null);
  let c = u,
    f = !1;
  function h(P, j, O, W, X) {
    let N = !1;
    if (o) {
      const G = d(W, O, j);
      c !== G && ((c = G), m(c.object)),
        (N = v(P, W, O, X)),
        N && M(P, W, O, X);
    } else {
      const G = j.wireframe === !0;
      (c.geometry !== W.id || c.program !== O.id || c.wireframe !== G) &&
        ((c.geometry = W.id), (c.program = O.id), (c.wireframe = G), (N = !0));
    }
    X !== null && t.update(X, 34963),
      (N || f) &&
        ((f = !1),
        _(P, j, O, W),
        X !== null && s.bindBuffer(34963, t.get(X).buffer));
  }
  function l() {
    return n.isWebGL2 ? s.createVertexArray() : r.createVertexArrayOES();
  }
  function m(P) {
    return n.isWebGL2 ? s.bindVertexArray(P) : r.bindVertexArrayOES(P);
  }
  function g(P) {
    return n.isWebGL2 ? s.deleteVertexArray(P) : r.deleteVertexArrayOES(P);
  }
  function d(P, j, O) {
    const W = O.wireframe === !0;
    let X = a[P.id];
    X === void 0 && ((X = {}), (a[P.id] = X));
    let N = X[j.id];
    N === void 0 && ((N = {}), (X[j.id] = N));
    let G = N[W];
    return G === void 0 && ((G = p(l())), (N[W] = G)), G;
  }
  function p(P) {
    const j = [],
      O = [],
      W = [];
    for (let X = 0; X < i; X++) (j[X] = 0), (O[X] = 0), (W[X] = 0);
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: j,
      enabledAttributes: O,
      attributeDivisors: W,
      object: P,
      attributes: {},
      index: null,
    };
  }
  function v(P, j, O, W) {
    const X = c.attributes,
      N = j.attributes;
    let G = 0;
    const J = O.getAttributes();
    for (const q in J)
      if (J[q].location >= 0) {
        const ce = X[q];
        let he = N[q];
        if (
          (he === void 0 &&
            (q === "instanceMatrix" &&
              P.instanceMatrix &&
              (he = P.instanceMatrix),
            q === "instanceColor" && P.instanceColor && (he = P.instanceColor)),
          ce === void 0 || ce.attribute !== he || (he && ce.data !== he.data))
        )
          return !0;
        G++;
      }
    return c.attributesNum !== G || c.index !== W;
  }
  function M(P, j, O, W) {
    const X = {},
      N = j.attributes;
    let G = 0;
    const J = O.getAttributes();
    for (const q in J)
      if (J[q].location >= 0) {
        let ce = N[q];
        ce === void 0 &&
          (q === "instanceMatrix" &&
            P.instanceMatrix &&
            (ce = P.instanceMatrix),
          q === "instanceColor" && P.instanceColor && (ce = P.instanceColor));
        const he = {};
        (he.attribute = ce),
          ce && ce.data && (he.data = ce.data),
          (X[q] = he),
          G++;
      }
    (c.attributes = X), (c.attributesNum = G), (c.index = W);
  }
  function S() {
    const P = c.newAttributes;
    for (let j = 0, O = P.length; j < O; j++) P[j] = 0;
  }
  function A(P) {
    b(P, 0);
  }
  function b(P, j) {
    const O = c.newAttributes,
      W = c.enabledAttributes,
      X = c.attributeDivisors;
    (O[P] = 1),
      W[P] === 0 && (s.enableVertexAttribArray(P), (W[P] = 1)),
      X[P] !== j &&
        ((n.isWebGL2 ? s : e.get("ANGLE_instanced_arrays"))[
          n.isWebGL2 ? "vertexAttribDivisor" : "vertexAttribDivisorANGLE"
        ](P, j),
        (X[P] = j));
  }
  function C() {
    const P = c.newAttributes,
      j = c.enabledAttributes;
    for (let O = 0, W = j.length; O < W; O++)
      j[O] !== P[O] && (s.disableVertexAttribArray(O), (j[O] = 0));
  }
  function R(P, j, O, W, X, N) {
    n.isWebGL2 === !0 && (O === 5124 || O === 5125)
      ? s.vertexAttribIPointer(P, j, O, X, N)
      : s.vertexAttribPointer(P, j, O, W, X, N);
  }
  function _(P, j, O, W) {
    if (
      n.isWebGL2 === !1 &&
      (P.isInstancedMesh || W.isInstancedBufferGeometry) &&
      e.get("ANGLE_instanced_arrays") === null
    )
      return;
    S();
    const X = W.attributes,
      N = O.getAttributes(),
      G = j.defaultAttributeValues;
    for (const J in N) {
      const q = N[J];
      if (q.location >= 0) {
        let Y = X[J];
        if (
          (Y === void 0 &&
            (J === "instanceMatrix" &&
              P.instanceMatrix &&
              (Y = P.instanceMatrix),
            J === "instanceColor" && P.instanceColor && (Y = P.instanceColor)),
          Y !== void 0)
        ) {
          const ce = Y.normalized,
            he = Y.itemSize,
            V = t.get(Y);
          if (V === void 0) continue;
          const He = V.buffer,
            Ae = V.type,
            ye = V.bytesPerElement;
          if (Y.isInterleavedBufferAttribute) {
            const se = Y.data,
              Ie = se.stride,
              Se = Y.offset;
            if (se.isInstancedInterleavedBuffer) {
              for (let fe = 0; fe < q.locationSize; fe++)
                b(q.location + fe, se.meshPerAttribute);
              P.isInstancedMesh !== !0 &&
                W._maxInstanceCount === void 0 &&
                (W._maxInstanceCount = se.meshPerAttribute * se.count);
            } else
              for (let fe = 0; fe < q.locationSize; fe++) A(q.location + fe);
            s.bindBuffer(34962, He);
            for (let fe = 0; fe < q.locationSize; fe++)
              R(
                q.location + fe,
                he / q.locationSize,
                Ae,
                ce,
                Ie * ye,
                (Se + (he / q.locationSize) * fe) * ye
              );
          } else {
            if (Y.isInstancedBufferAttribute) {
              for (let se = 0; se < q.locationSize; se++)
                b(q.location + se, Y.meshPerAttribute);
              P.isInstancedMesh !== !0 &&
                W._maxInstanceCount === void 0 &&
                (W._maxInstanceCount = Y.meshPerAttribute * Y.count);
            } else
              for (let se = 0; se < q.locationSize; se++) A(q.location + se);
            s.bindBuffer(34962, He);
            for (let se = 0; se < q.locationSize; se++)
              R(
                q.location + se,
                he / q.locationSize,
                Ae,
                ce,
                he * ye,
                (he / q.locationSize) * se * ye
              );
          }
        } else if (G !== void 0) {
          const ce = G[J];
          if (ce !== void 0)
            switch (ce.length) {
              case 2:
                s.vertexAttrib2fv(q.location, ce);
                break;
              case 3:
                s.vertexAttrib3fv(q.location, ce);
                break;
              case 4:
                s.vertexAttrib4fv(q.location, ce);
                break;
              default:
                s.vertexAttrib1fv(q.location, ce);
            }
        }
      }
    }
    C();
  }
  function E() {
    te();
    for (const P in a) {
      const j = a[P];
      for (const O in j) {
        const W = j[O];
        for (const X in W) g(W[X].object), delete W[X];
        delete j[O];
      }
      delete a[P];
    }
  }
  function F(P) {
    if (a[P.id] === void 0) return;
    const j = a[P.id];
    for (const O in j) {
      const W = j[O];
      for (const X in W) g(W[X].object), delete W[X];
      delete j[O];
    }
    delete a[P.id];
  }
  function B(P) {
    for (const j in a) {
      const O = a[j];
      if (O[P.id] === void 0) continue;
      const W = O[P.id];
      for (const X in W) g(W[X].object), delete W[X];
      delete O[P.id];
    }
  }
  function te() {
    K(), (f = !0), c !== u && ((c = u), m(c.object));
  }
  function K() {
    (u.geometry = null), (u.program = null), (u.wireframe = !1);
  }
  return {
    setup: h,
    reset: te,
    resetDefaultState: K,
    dispose: E,
    releaseStatesOfGeometry: F,
    releaseStatesOfProgram: B,
    initAttributes: S,
    enableAttribute: A,
    disableUnusedAttributes: C,
  };
}
function wh(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(c) {
    r = c;
  }
  function a(c, f) {
    s.drawArrays(r, c, f), t.update(f, r, 1);
  }
  function u(c, f, h) {
    if (h === 0) return;
    let l, m;
    if (i) (l = s), (m = "drawArraysInstanced");
    else if (
      ((l = e.get("ANGLE_instanced_arrays")),
      (m = "drawArraysInstancedANGLE"),
      l === null)
    ) {
      console.error(
        "THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    l[m](r, c, f, h), t.update(f, r, h);
  }
  (this.setMode = o), (this.render = a), (this.renderInstances = u);
}
function Ah(s, e, t) {
  let n;
  function i() {
    if (n !== void 0) return n;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const R = e.get("EXT_texture_filter_anisotropic");
      n = s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else n = 0;
    return n;
  }
  function r(R) {
    if (R === "highp") {
      if (
        s.getShaderPrecisionFormat(35633, 36338).precision > 0 &&
        s.getShaderPrecisionFormat(35632, 36338).precision > 0
      )
        return "highp";
      R = "mediump";
    }
    return R === "mediump" &&
      s.getShaderPrecisionFormat(35633, 36337).precision > 0 &&
      s.getShaderPrecisionFormat(35632, 36337).precision > 0
      ? "mediump"
      : "lowp";
  }
  const o =
    (typeof WebGL2RenderingContext != "undefined" &&
      s instanceof WebGL2RenderingContext) ||
    (typeof WebGL2ComputeRenderingContext != "undefined" &&
      s instanceof WebGL2ComputeRenderingContext);
  let a = t.precision !== void 0 ? t.precision : "highp";
  const u = r(a);
  u !== a &&
    (console.warn(
      "THREE.WebGLRenderer:",
      a,
      "not supported, using",
      u,
      "instead."
    ),
    (a = u));
  const c = o || e.has("WEBGL_draw_buffers"),
    f = t.logarithmicDepthBuffer === !0,
    h = s.getParameter(34930),
    l = s.getParameter(35660),
    m = s.getParameter(3379),
    g = s.getParameter(34076),
    d = s.getParameter(34921),
    p = s.getParameter(36347),
    v = s.getParameter(36348),
    M = s.getParameter(36349),
    S = l > 0,
    A = o || e.has("OES_texture_float"),
    b = S && A,
    C = o ? s.getParameter(36183) : 0;
  return {
    isWebGL2: o,
    drawBuffers: c,
    getMaxAnisotropy: i,
    getMaxPrecision: r,
    precision: a,
    logarithmicDepthBuffer: f,
    maxTextures: h,
    maxVertexTextures: l,
    maxTextureSize: m,
    maxCubemapSize: g,
    maxAttributes: d,
    maxVertexUniforms: p,
    maxVaryings: v,
    maxFragmentUniforms: M,
    vertexTextures: S,
    floatFragmentTextures: A,
    floatVertexTextures: b,
    maxSamples: C,
  };
}
function Sh(s) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const o = new an(),
    a = new ht(),
    u = { value: null, needsUpdate: !1 };
  (this.uniform = u),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (h, l, m) {
      const g = h.length !== 0 || l || n !== 0 || i;
      return (i = l), (t = f(h, m, 0)), (n = h.length), g;
    }),
    (this.beginShadows = function () {
      (r = !0), f(null);
    }),
    (this.endShadows = function () {
      (r = !1), c();
    }),
    (this.setState = function (h, l, m) {
      const g = h.clippingPlanes,
        d = h.clipIntersection,
        p = h.clipShadows,
        v = s.get(h);
      if (!i || g === null || g.length === 0 || (r && !p)) r ? f(null) : c();
      else {
        const M = r ? 0 : n,
          S = M * 4;
        let A = v.clippingState || null;
        (u.value = A), (A = f(g, l, S, m));
        for (let b = 0; b !== S; ++b) A[b] = t[b];
        (v.clippingState = A),
          (this.numIntersection = d ? this.numPlanes : 0),
          (this.numPlanes += M);
      }
    });
  function c() {
    u.value !== t && ((u.value = t), (u.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0);
  }
  function f(h, l, m, g) {
    const d = h !== null ? h.length : 0;
    let p = null;
    if (d !== 0) {
      if (((p = u.value), g !== !0 || p === null)) {
        const v = m + d * 4,
          M = l.matrixWorldInverse;
        a.getNormalMatrix(M),
          (p === null || p.length < v) && (p = new Float32Array(v));
        for (let S = 0, A = m; S !== d; ++S, A += 4)
          o.copy(h[S]).applyMatrix4(M, a),
            o.normal.toArray(p, A),
            (p[A + 3] = o.constant);
      }
      (u.value = p), (u.needsUpdate = !0);
    }
    return (e.numPlanes = d), (e.numIntersection = 0), p;
  }
}
function Eh(s) {
  let e = new WeakMap();
  function t(o, a) {
    return a === kr ? (o.mapping = Wn) : a === Vr && (o.mapping = jn), o;
  }
  function n(o) {
    if (o && o.isTexture && o.isRenderTargetTexture === !1) {
      const a = o.mapping;
      if (a === kr || a === Vr)
        if (e.has(o)) {
          const u = e.get(o).texture;
          return t(u, o.mapping);
        } else {
          const u = o.image;
          if (u && u.height > 0) {
            const c = new Gl(u.height / 2);
            return (
              c.fromEquirectangularTexture(s, o),
              e.set(o, c),
              o.addEventListener("dispose", i),
              t(c.texture, o.mapping)
            );
          } else return null;
        }
    }
    return o;
  }
  function i(o) {
    const a = o.target;
    a.removeEventListener("dispose", i);
    const u = e.get(a);
    u !== void 0 && (e.delete(a), u.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
class $r extends Ga {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, o = 2e3) {
    super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = o),
      this.updateProjectionMatrix();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, o) {
    this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = o),
      this.updateProjectionMatrix();
  }
  clearViewOffset() {
    this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix();
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      o = n + e,
      a = i + t,
      u = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        f = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      (r += c * this.view.offsetX),
        (o = r + c * this.view.width),
        (a -= f * this.view.offsetY),
        (u = a - f * this.view.height);
    }
    this.projectionMatrix.makeOrthographic(r, o, a, u, this.near, this.far),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert();
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
const kn = 4,
  Qs = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  ln = 20,
  Pr = new $r(),
  Js = new Ce();
let Ir = null;
const on = (1 + Math.sqrt(5)) / 2,
  Fn = 1 / on,
  Zs = [
    new L(1, 1, 1),
    new L(-1, 1, 1),
    new L(1, 1, -1),
    new L(-1, 1, -1),
    new L(0, on, Fn),
    new L(0, on, -Fn),
    new L(Fn, 0, on),
    new L(-Fn, 0, on),
    new L(on, Fn, 0),
    new L(-on, Fn, 0),
  ];
class Ks {
  constructor(e) {
    (this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial);
  }
  fromScene(e, t = 0, n = 0.1, i = 100) {
    (Ir = this._renderer.getRenderTarget()), this._setSize(256);
    const r = this._allocateTargets();
    return (
      (r.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, r),
      t > 0 && this._blur(r, 0, 0, t),
      this._applyPMREM(r),
      this._cleanup(r),
      r
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = ta()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = ea()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose();
  }
  _setSize(e) {
    (this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax));
  }
  _dispose() {
    this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose();
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    this._renderer.setRenderTarget(Ir),
      (e.scissorTest = !1),
      Hi(e, 0, 0, e.width, e.height);
  }
  _fromTexture(e, t) {
    e.mapping === Wn || e.mapping === jn
      ? this._setSize(
          e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width
        )
      : this._setSize(e.image.width / 4),
      (Ir = this._renderer.getRenderTarget());
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n), this._applyPMREM(n), this._cleanup(n), n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: ut,
        minFilter: ut,
        generateMipmaps: !1,
        type: di,
        format: Rt,
        encoding: gn,
        depthBuffer: !1,
      },
      i = $s(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e
    ) {
      this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = $s(e, t, n));
      const { _lodMax: r } = this;
      ({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = Th(r)),
        (this._blurMaterial = Ch(r, e, t));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new it(this._lodPlanes[0], e);
    this._renderer.compile(t, Pr);
  }
  _sceneToCubeUV(e, t, n, i) {
    const a = new ot(90, 1, t, n),
      u = [1, -1, 1, 1, 1, 1],
      c = [1, 1, 1, -1, -1, -1],
      f = this._renderer,
      h = f.autoClear,
      l = f.toneMapping;
    f.getClearColor(Js), (f.toneMapping = Vt), (f.autoClear = !1);
    const m = new $i({
        name: "PMREM.Background",
        side: yt,
        depthWrite: !1,
        depthTest: !1,
      }),
      g = new it(new xi(), m);
    let d = !1;
    const p = e.background;
    p
      ? p.isColor && (m.color.copy(p), (e.background = null), (d = !0))
      : (m.color.copy(Js), (d = !0));
    for (let v = 0; v < 6; v++) {
      const M = v % 3;
      M === 0
        ? (a.up.set(0, u[v], 0), a.lookAt(c[v], 0, 0))
        : M === 1
        ? (a.up.set(0, 0, u[v]), a.lookAt(0, c[v], 0))
        : (a.up.set(0, u[v], 0), a.lookAt(0, 0, c[v]));
      const S = this._cubeSize;
      Hi(i, M * S, v > 2 ? S : 0, S, S),
        f.setRenderTarget(i),
        d && f.render(g, a),
        f.render(e, a);
    }
    g.geometry.dispose(),
      g.material.dispose(),
      (f.toneMapping = l),
      (f.autoClear = h),
      (e.background = p);
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === Wn || e.mapping === jn;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = ta()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = ea());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      o = new it(this._lodPlanes[0], r),
      a = r.uniforms;
    a.envMap.value = e;
    const u = this._cubeSize;
    Hi(t, 0, 0, 3 * u, 2 * u), n.setRenderTarget(t), n.render(o, Pr);
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    for (let i = 1; i < this._lodPlanes.length; i++) {
      const r = Math.sqrt(
          this._sigmas[i] * this._sigmas[i] -
            this._sigmas[i - 1] * this._sigmas[i - 1]
        ),
        o = Zs[(i - 1) % Zs.length];
      this._blur(e, i - 1, i, r, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const o = this._pingPongRenderTarget;
    this._halfBlur(e, o, t, n, i, "latitudinal", r),
      this._halfBlur(o, e, n, n, i, "longitudinal", r);
  }
  _halfBlur(e, t, n, i, r, o, a) {
    const u = this._renderer,
      c = this._blurMaterial;
    o !== "latitudinal" &&
      o !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!"
      );
    const f = 3,
      h = new it(this._lodPlanes[i], c),
      l = c.uniforms,
      m = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * m) : (2 * Math.PI) / (2 * ln - 1),
      d = r / g,
      p = isFinite(r) ? 1 + Math.floor(f * d) : ln;
    p > ln &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${ln}`
      );
    const v = [];
    let M = 0;
    for (let R = 0; R < ln; ++R) {
      const _ = R / d,
        E = Math.exp((-_ * _) / 2);
      v.push(E), R === 0 ? (M += E) : R < p && (M += 2 * E);
    }
    for (let R = 0; R < v.length; R++) v[R] = v[R] / M;
    (l.envMap.value = e.texture),
      (l.samples.value = p),
      (l.weights.value = v),
      (l.latitudinal.value = o === "latitudinal"),
      a && (l.poleAxis.value = a);
    const { _lodMax: S } = this;
    (l.dTheta.value = g), (l.mipInt.value = S - n);
    const A = this._sizeLods[i],
      b = 3 * A * (i > S - kn ? i - S + kn : 0),
      C = 4 * (this._cubeSize - A);
    Hi(t, b, C, 3 * A, 2 * A), u.setRenderTarget(t), u.render(h, Pr);
  }
}
function Th(s) {
  const e = [],
    t = [],
    n = [];
  let i = s;
  const r = s - kn + 1 + Qs.length;
  for (let o = 0; o < r; o++) {
    const a = Math.pow(2, i);
    t.push(a);
    let u = 1 / a;
    o > s - kn ? (u = Qs[o - s + kn - 1]) : o === 0 && (u = 0), n.push(u);
    const c = 1 / (a - 2),
      f = -c,
      h = 1 + c,
      l = [f, f, h, f, h, h, f, f, h, h, f, h],
      m = 6,
      g = 6,
      d = 3,
      p = 2,
      v = 1,
      M = new Float32Array(d * g * m),
      S = new Float32Array(p * g * m),
      A = new Float32Array(v * g * m);
    for (let C = 0; C < m; C++) {
      const R = ((C % 3) * 2) / 3 - 1,
        _ = C > 2 ? 0 : -1,
        E = [
          R,
          _,
          0,
          R + 2 / 3,
          _,
          0,
          R + 2 / 3,
          _ + 1,
          0,
          R,
          _,
          0,
          R + 2 / 3,
          _ + 1,
          0,
          R,
          _ + 1,
          0,
        ];
      M.set(E, d * g * C), S.set(l, p * g * C);
      const F = [C, C, C, C, C, C];
      A.set(F, v * g * C);
    }
    const b = new pt();
    b.setAttribute("position", new Dt(M, d)),
      b.setAttribute("uv", new Dt(S, p)),
      b.setAttribute("faceIndex", new Dt(A, v)),
      e.push(b),
      i > kn && i--;
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function $s(s, e, t) {
  const n = new Mt(s, e, t);
  return (
    (n.texture.mapping = Zi),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function Hi(s, e, t, n, i) {
  s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i);
}
function Ch(s, e, t) {
  const n = new Float32Array(ln),
    i = new L(0, 1, 0);
  return new lt({
    name: "SphericalGaussianBlur",
    defines: {
      n: ln,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: es(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ea() {
  return new lt({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: es(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function ta() {
  return new lt({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: es(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: Kt,
    depthTest: !1,
    depthWrite: !1,
  });
}
function es() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function Lh(s) {
  let e = new WeakMap(),
    t = null;
  function n(a) {
    if (a && a.isTexture) {
      const u = a.mapping,
        c = u === kr || u === Vr,
        f = u === Wn || u === jn;
      if (c || f)
        if (a.isRenderTargetTexture && a.needsPMREMUpdate === !0) {
          a.needsPMREMUpdate = !1;
          let h = e.get(a);
          return (
            t === null && (t = new Ks(s)),
            (h = c ? t.fromEquirectangular(a, h) : t.fromCubemap(a, h)),
            e.set(a, h),
            h.texture
          );
        } else {
          if (e.has(a)) return e.get(a).texture;
          {
            const h = a.image;
            if ((c && h && h.height > 0) || (f && h && i(h))) {
              t === null && (t = new Ks(s));
              const l = c ? t.fromEquirectangular(a) : t.fromCubemap(a);
              return e.set(a, l), a.addEventListener("dispose", r), l.texture;
            } else return null;
          }
        }
    }
    return a;
  }
  function i(a) {
    let u = 0;
    const c = 6;
    for (let f = 0; f < c; f++) a[f] !== void 0 && u++;
    return u === c;
  }
  function r(a) {
    const u = a.target;
    u.removeEventListener("dispose", r);
    const c = e.get(u);
    c !== void 0 && (e.delete(u), c.dispose());
  }
  function o() {
    (e = new WeakMap()), t !== null && (t.dispose(), (t = null));
  }
  return { get: n, dispose: o };
}
function Rh(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return (e[n] = i), i;
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function (n) {
      n.isWebGL2
        ? t("EXT_color_buffer_float")
        : (t("WEBGL_depth_texture"),
          t("OES_texture_float"),
          t("OES_texture_half_float"),
          t("OES_texture_half_float_linear"),
          t("OES_standard_derivatives"),
          t("OES_element_index_uint"),
          t("OES_vertex_array_object"),
          t("ANGLE_instanced_arrays")),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture");
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          console.warn(
            "THREE.WebGLRenderer: " + n + " extension not supported."
          ),
        i
      );
    },
  };
}
function Dh(s, e, t, n) {
  const i = {},
    r = new WeakMap();
  function o(h) {
    const l = h.target;
    l.index !== null && e.remove(l.index);
    for (const g in l.attributes) e.remove(l.attributes[g]);
    l.removeEventListener("dispose", o), delete i[l.id];
    const m = r.get(l);
    m && (e.remove(m), r.delete(l)),
      n.releaseStatesOfGeometry(l),
      l.isInstancedBufferGeometry === !0 && delete l._maxInstanceCount,
      t.memory.geometries--;
  }
  function a(h, l) {
    return (
      i[l.id] === !0 ||
        (l.addEventListener("dispose", o),
        (i[l.id] = !0),
        t.memory.geometries++),
      l
    );
  }
  function u(h) {
    const l = h.attributes;
    for (const g in l) e.update(l[g], 34962);
    const m = h.morphAttributes;
    for (const g in m) {
      const d = m[g];
      for (let p = 0, v = d.length; p < v; p++) e.update(d[p], 34962);
    }
  }
  function c(h) {
    const l = [],
      m = h.index,
      g = h.attributes.position;
    let d = 0;
    if (m !== null) {
      const M = m.array;
      d = m.version;
      for (let S = 0, A = M.length; S < A; S += 3) {
        const b = M[S + 0],
          C = M[S + 1],
          R = M[S + 2];
        l.push(b, C, C, R, R, b);
      }
    } else {
      const M = g.array;
      d = g.version;
      for (let S = 0, A = M.length / 3 - 1; S < A; S += 3) {
        const b = S + 0,
          C = S + 1,
          R = S + 2;
        l.push(b, C, C, R, R, b);
      }
    }
    const p = new (Fa(l) ? Va : ka)(l, 1);
    p.version = d;
    const v = r.get(h);
    v && e.remove(v), r.set(h, p);
  }
  function f(h) {
    const l = r.get(h);
    if (l) {
      const m = h.index;
      m !== null && l.version < m.version && c(h);
    } else c(h);
    return r.get(h);
  }
  return { get: a, update: u, getWireframeAttribute: f };
}
function Ph(s, e, t, n) {
  const i = n.isWebGL2;
  let r;
  function o(l) {
    r = l;
  }
  let a, u;
  function c(l) {
    (a = l.type), (u = l.bytesPerElement);
  }
  function f(l, m) {
    s.drawElements(r, m, a, l * u), t.update(m, r, 1);
  }
  function h(l, m, g) {
    if (g === 0) return;
    let d, p;
    if (i) (d = s), (p = "drawElementsInstanced");
    else if (
      ((d = e.get("ANGLE_instanced_arrays")),
      (p = "drawElementsInstancedANGLE"),
      d === null)
    ) {
      console.error(
        "THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays."
      );
      return;
    }
    d[p](r, m, a, l * u, g), t.update(m, r, g);
  }
  (this.setMode = o),
    (this.setIndex = c),
    (this.render = f),
    (this.renderInstances = h);
}
function Ih(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, o, a) {
    switch ((t.calls++, o)) {
      case 4:
        t.triangles += a * (r / 3);
        break;
      case 1:
        t.lines += a * (r / 2);
        break;
      case 3:
        t.lines += a * (r - 1);
        break;
      case 2:
        t.lines += a * r;
        break;
      case 0:
        t.points += a * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", o);
        break;
    }
  }
  function i() {
    t.frame++, (t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0);
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function Fh(s, e) {
  return s[0] - e[0];
}
function Bh(s, e) {
  return Math.abs(e[1]) - Math.abs(s[1]);
}
function Fr(s, e) {
  let t = 1;
  const n = e.isInterleavedBufferAttribute ? e.data.array : e.array;
  n instanceof Int8Array
    ? (t = 127)
    : n instanceof Uint8Array
    ? (t = 255)
    : n instanceof Uint16Array
    ? (t = 65535)
    : n instanceof Int16Array
    ? (t = 32767)
    : n instanceof Int32Array
    ? (t = 2147483647)
    : console.error(
        "THREE.WebGLMorphtargets: Unsupported morph attribute data type: ",
        n
      ),
    s.divideScalar(t);
}
function Uh(s, e, t) {
  const n = {},
    i = new Float32Array(8),
    r = new WeakMap(),
    o = new Be(),
    a = [];
  for (let c = 0; c < 8; c++) a[c] = [c, 0];
  function u(c, f, h, l) {
    const m = c.morphTargetInfluences;
    if (e.isWebGL2 === !0) {
      const d =
          f.morphAttributes.position ||
          f.morphAttributes.normal ||
          f.morphAttributes.color,
        p = d !== void 0 ? d.length : 0;
      let v = r.get(f);
      if (v === void 0 || v.count !== p) {
        let O = function () {
          P.dispose(), r.delete(f), f.removeEventListener("dispose", O);
        };
        var g = O;
        v !== void 0 && v.texture.dispose();
        const A = f.morphAttributes.position !== void 0,
          b = f.morphAttributes.normal !== void 0,
          C = f.morphAttributes.color !== void 0,
          R = f.morphAttributes.position || [],
          _ = f.morphAttributes.normal || [],
          E = f.morphAttributes.color || [];
        let F = 0;
        A === !0 && (F = 1), b === !0 && (F = 2), C === !0 && (F = 3);
        let B = f.attributes.position.count * F,
          te = 1;
        B > e.maxTextureSize &&
          ((te = Math.ceil(B / e.maxTextureSize)), (B = e.maxTextureSize));
        const K = new Float32Array(B * te * 4 * p),
          P = new Na(K, B, te, p);
        (P.type = hn), (P.needsUpdate = !0);
        const j = F * 4;
        for (let W = 0; W < p; W++) {
          const X = R[W],
            N = _[W],
            G = E[W],
            J = B * te * 4 * W;
          for (let q = 0; q < X.count; q++) {
            const Y = q * j;
            A === !0 &&
              (o.fromBufferAttribute(X, q),
              X.normalized === !0 && Fr(o, X),
              (K[J + Y + 0] = o.x),
              (K[J + Y + 1] = o.y),
              (K[J + Y + 2] = o.z),
              (K[J + Y + 3] = 0)),
              b === !0 &&
                (o.fromBufferAttribute(N, q),
                N.normalized === !0 && Fr(o, N),
                (K[J + Y + 4] = o.x),
                (K[J + Y + 5] = o.y),
                (K[J + Y + 6] = o.z),
                (K[J + Y + 7] = 0)),
              C === !0 &&
                (o.fromBufferAttribute(G, q),
                G.normalized === !0 && Fr(o, G),
                (K[J + Y + 8] = o.x),
                (K[J + Y + 9] = o.y),
                (K[J + Y + 10] = o.z),
                (K[J + Y + 11] = G.itemSize === 4 ? o.w : 1));
          }
        }
        (v = { count: p, texture: P, size: new me(B, te) }),
          r.set(f, v),
          f.addEventListener("dispose", O);
      }
      let M = 0;
      for (let A = 0; A < m.length; A++) M += m[A];
      const S = f.morphTargetsRelative ? 1 : 1 - M;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", S),
        l.getUniforms().setValue(s, "morphTargetInfluences", m),
        l.getUniforms().setValue(s, "morphTargetsTexture", v.texture, t),
        l.getUniforms().setValue(s, "morphTargetsTextureSize", v.size);
    } else {
      const d = m === void 0 ? 0 : m.length;
      let p = n[f.id];
      if (p === void 0 || p.length !== d) {
        p = [];
        for (let b = 0; b < d; b++) p[b] = [b, 0];
        n[f.id] = p;
      }
      for (let b = 0; b < d; b++) {
        const C = p[b];
        (C[0] = b), (C[1] = m[b]);
      }
      p.sort(Bh);
      for (let b = 0; b < 8; b++)
        b < d && p[b][1]
          ? ((a[b][0] = p[b][0]), (a[b][1] = p[b][1]))
          : ((a[b][0] = Number.MAX_SAFE_INTEGER), (a[b][1] = 0));
      a.sort(Fh);
      const v = f.morphAttributes.position,
        M = f.morphAttributes.normal;
      let S = 0;
      for (let b = 0; b < 8; b++) {
        const C = a[b],
          R = C[0],
          _ = C[1];
        R !== Number.MAX_SAFE_INTEGER && _
          ? (v &&
              f.getAttribute("morphTarget" + b) !== v[R] &&
              f.setAttribute("morphTarget" + b, v[R]),
            M &&
              f.getAttribute("morphNormal" + b) !== M[R] &&
              f.setAttribute("morphNormal" + b, M[R]),
            (i[b] = _),
            (S += _))
          : (v &&
              f.hasAttribute("morphTarget" + b) === !0 &&
              f.deleteAttribute("morphTarget" + b),
            M &&
              f.hasAttribute("morphNormal" + b) === !0 &&
              f.deleteAttribute("morphNormal" + b),
            (i[b] = 0));
      }
      const A = f.morphTargetsRelative ? 1 : 1 - S;
      l.getUniforms().setValue(s, "morphTargetBaseInfluence", A),
        l.getUniforms().setValue(s, "morphTargetInfluences", i);
    }
  }
  return { update: u };
}
function zh(s, e, t, n) {
  let i = new WeakMap();
  function r(u) {
    const c = n.render.frame,
      f = u.geometry,
      h = e.get(u, f);
    return (
      i.get(h) !== c && (e.update(h), i.set(h, c)),
      u.isInstancedMesh &&
        (u.hasEventListener("dispose", a) === !1 &&
          u.addEventListener("dispose", a),
        t.update(u.instanceMatrix, 34962),
        u.instanceColor !== null && t.update(u.instanceColor, 34962)),
      h
    );
  }
  function o() {
    i = new WeakMap();
  }
  function a(u) {
    const c = u.target;
    c.removeEventListener("dispose", a),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor);
  }
  return { update: r, dispose: o };
}
const ja = new dt(),
  Xa = new Na(),
  qa = new Tl(),
  Ya = new Ha(),
  na = [],
  ia = [],
  ra = new Float32Array(16),
  sa = new Float32Array(9),
  aa = new Float32Array(4);
function Zn(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = na[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (na[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let o = 1, a = 0; o !== e; ++o) (a += t), s[o].toArray(r, a);
  }
  return r;
}
function Ke(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function $e(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function er(s, e) {
  let t = ia[e];
  t === void 0 && ((t = new Int32Array(e)), (ia[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function Nh(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function Oh(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Ke(t, e)) return;
    s.uniform2fv(this.addr, e), $e(t, e);
  }
}
function kh(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Ke(t, e)) return;
    s.uniform3fv(this.addr, e), $e(t, e);
  }
}
function Vh(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Ke(t, e)) return;
    s.uniform4fv(this.addr, e), $e(t, e);
  }
}
function Gh(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Ke(t, e)) return;
    s.uniformMatrix2fv(this.addr, !1, e), $e(t, e);
  } else {
    if (Ke(t, n)) return;
    aa.set(n), s.uniformMatrix2fv(this.addr, !1, aa), $e(t, n);
  }
}
function Hh(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Ke(t, e)) return;
    s.uniformMatrix3fv(this.addr, !1, e), $e(t, e);
  } else {
    if (Ke(t, n)) return;
    sa.set(n), s.uniformMatrix3fv(this.addr, !1, sa), $e(t, n);
  }
}
function Wh(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Ke(t, e)) return;
    s.uniformMatrix4fv(this.addr, !1, e), $e(t, e);
  } else {
    if (Ke(t, n)) return;
    ra.set(n), s.uniformMatrix4fv(this.addr, !1, ra), $e(t, n);
  }
}
function jh(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function Xh(s, e) {
  const t = this.cache;
  Ke(t, e) || (s.uniform2iv(this.addr, e), $e(t, e));
}
function qh(s, e) {
  const t = this.cache;
  Ke(t, e) || (s.uniform3iv(this.addr, e), $e(t, e));
}
function Yh(s, e) {
  const t = this.cache;
  Ke(t, e) || (s.uniform4iv(this.addr, e), $e(t, e));
}
function Qh(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function Jh(s, e) {
  const t = this.cache;
  Ke(t, e) || (s.uniform2uiv(this.addr, e), $e(t, e));
}
function Zh(s, e) {
  const t = this.cache;
  Ke(t, e) || (s.uniform3uiv(this.addr, e), $e(t, e));
}
function Kh(s, e) {
  const t = this.cache;
  Ke(t, e) || (s.uniform4uiv(this.addr, e), $e(t, e));
}
function $h(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2D(e || ja, i);
}
function ed(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || qa, i);
}
function td(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || Ya, i);
}
function nd(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || Xa, i);
}
function id(s) {
  switch (s) {
    case 5126:
      return Nh;
    case 35664:
      return Oh;
    case 35665:
      return kh;
    case 35666:
      return Vh;
    case 35674:
      return Gh;
    case 35675:
      return Hh;
    case 35676:
      return Wh;
    case 5124:
    case 35670:
      return jh;
    case 35667:
    case 35671:
      return Xh;
    case 35668:
    case 35672:
      return qh;
    case 35669:
    case 35673:
      return Yh;
    case 5125:
      return Qh;
    case 36294:
      return Jh;
    case 36295:
      return Zh;
    case 36296:
      return Kh;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return $h;
    case 35679:
    case 36299:
    case 36307:
      return ed;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return td;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return nd;
  }
}
function rd(s, e) {
  s.uniform1fv(this.addr, e);
}
function sd(s, e) {
  const t = Zn(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function ad(s, e) {
  const t = Zn(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function od(s, e) {
  const t = Zn(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function ld(s, e) {
  const t = Zn(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function cd(s, e) {
  const t = Zn(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function ud(s, e) {
  const t = Zn(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function hd(s, e) {
  s.uniform1iv(this.addr, e);
}
function dd(s, e) {
  s.uniform2iv(this.addr, e);
}
function fd(s, e) {
  s.uniform3iv(this.addr, e);
}
function pd(s, e) {
  s.uniform4iv(this.addr, e);
}
function md(s, e) {
  s.uniform1uiv(this.addr, e);
}
function gd(s, e) {
  s.uniform2uiv(this.addr, e);
}
function vd(s, e) {
  s.uniform3uiv(this.addr, e);
}
function xd(s, e) {
  s.uniform4uiv(this.addr, e);
}
function _d(s, e, t) {
  const n = e.length,
    i = er(t, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture2D(e[r] || ja, i[r]);
}
function yd(s, e, t) {
  const n = e.length,
    i = er(t, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture3D(e[r] || qa, i[r]);
}
function Md(s, e, t) {
  const n = e.length,
    i = er(t, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTextureCube(e[r] || Ya, i[r]);
}
function bd(s, e, t) {
  const n = e.length,
    i = er(t, n);
  s.uniform1iv(this.addr, i);
  for (let r = 0; r !== n; ++r) t.setTexture2DArray(e[r] || Xa, i[r]);
}
function wd(s) {
  switch (s) {
    case 5126:
      return rd;
    case 35664:
      return sd;
    case 35665:
      return ad;
    case 35666:
      return od;
    case 35674:
      return ld;
    case 35675:
      return cd;
    case 35676:
      return ud;
    case 5124:
    case 35670:
      return hd;
    case 35667:
    case 35671:
      return dd;
    case 35668:
    case 35672:
      return fd;
    case 35669:
    case 35673:
      return pd;
    case 5125:
      return md;
    case 36294:
      return gd;
    case 36295:
      return vd;
    case 36296:
      return xd;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return _d;
    case 35679:
    case 36299:
    case 36307:
      return yd;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Md;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return bd;
  }
}
class Ad {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.setValue = id(t.type));
  }
}
class Sd {
  constructor(e, t, n) {
    (this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.size = t.size),
      (this.setValue = wd(t.type));
  }
}
class Ed {
  constructor(e) {
    (this.id = e), (this.seq = []), (this.map = {});
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, o = i.length; r !== o; ++r) {
      const a = i[r];
      a.setValue(e, t[a.id], n);
    }
  }
}
const Br = /(\w+)(\])?(\[|\.)?/g;
function oa(s, e) {
  s.seq.push(e), (s.map[e.id] = e);
}
function Td(s, e, t) {
  const n = s.name,
    i = n.length;
  for (Br.lastIndex = 0; ; ) {
    const r = Br.exec(n),
      o = Br.lastIndex;
    let a = r[1];
    const u = r[2] === "]",
      c = r[3];
    if ((u && (a = a | 0), c === void 0 || (c === "[" && o + 2 === i))) {
      oa(t, c === void 0 ? new Ad(a, s, e) : new Sd(a, s, e));
      break;
    } else {
      let h = t.map[a];
      h === void 0 && ((h = new Ed(a)), oa(t, h)), (t = h);
    }
  }
}
class Xi {
  constructor(e, t) {
    (this.seq = []), (this.map = {});
    const n = e.getProgramParameter(t, 35718);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        o = e.getUniformLocation(t, r.name);
      Td(r, o, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, o = t.length; r !== o; ++r) {
      const a = t[r],
        u = n[a.id];
      u.needsUpdate !== !1 && a.setValue(e, u.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const o = e[i];
      o.id in t && n.push(o);
    }
    return n;
  }
}
function la(s, e, t) {
  const n = s.createShader(e);
  return s.shaderSource(n, t), s.compileShader(n), n;
}
let Cd = 0;
function Ld(s, e) {
  const t = s.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let o = i; o < r; o++) {
    const a = o + 1;
    n.push(`${a === e ? ">" : " "} ${a}: ${t[o]}`);
  }
  return n.join(`
`);
}
function Rd(s) {
  switch (s) {
    case gn:
      return ["Linear", "( value )"];
    case ze:
      return ["sRGB", "( value )"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported encoding:", s),
        ["Linear", "( value )"]
      );
  }
}
function ca(s, e, t) {
  const n = s.getShaderParameter(e, 35713),
    i = s.getShaderInfoLog(e).trim();
  if (n && i === "") return "";
  const r = /ERROR: 0:(\d+)/.exec(i);
  if (r) {
    const o = parseInt(r[1]);
    return (
      t.toUpperCase() +
      `

` +
      i +
      `

` +
      Ld(s.getShaderSource(e), o)
    );
  } else return i;
}
function Dd(s, e) {
  const t = Rd(e);
  return "vec4 " + s + "( vec4 value ) { return LinearTo" + t[0] + t[1] + "; }";
}
function Pd(s, e) {
  let t;
  switch (e) {
    case No:
      t = "Linear";
      break;
    case Oo:
      t = "Reinhard";
      break;
    case ko:
      t = "OptimizedCineon";
      break;
    case Vo:
      t = "ACESFilmic";
      break;
    case Go:
      t = "Custom";
      break;
    default:
      console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear");
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
function Id(s) {
  return [
    s.extensionDerivatives ||
    !!s.envMapCubeUVHeight ||
    s.bumpMap ||
    s.tangentSpaceNormalMap ||
    s.clearcoatNormalMap ||
    s.flatShading ||
    s.shaderID === "physical"
      ? "#extension GL_OES_standard_derivatives : enable"
      : "",
    (s.extensionFragDepth || s.logarithmicDepthBuffer) &&
    s.rendererExtensionFragDepth
      ? "#extension GL_EXT_frag_depth : enable"
      : "",
    s.extensionDrawBuffers && s.rendererExtensionDrawBuffers
      ? "#extension GL_EXT_draw_buffers : require"
      : "",
    (s.extensionShaderTextureLOD || s.envMap || s.transmission) &&
    s.rendererExtensionShaderTextureLod
      ? "#extension GL_EXT_shader_texture_lod : enable"
      : "",
  ].filter(li).join(`
`);
}
function Fd(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function Bd(s, e) {
  const t = {},
    n = s.getProgramParameter(e, 35721);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i),
      o = r.name;
    let a = 1;
    r.type === 35674 && (a = 2),
      r.type === 35675 && (a = 3),
      r.type === 35676 && (a = 4),
      (t[o] = {
        type: r.type,
        location: s.getAttribLocation(e, o),
        locationSize: a,
      });
  }
  return t;
}
function li(s) {
  return s !== "";
}
function ua(s, e) {
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function ha(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection
    );
}
const Ud = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Xr(s) {
  return s.replace(Ud, zd);
}
function zd(s, e) {
  const t = we[e];
  if (t === void 0) throw new Error("Can not resolve #include <" + e + ">");
  return Xr(t);
}
const Nd =
    /#pragma unroll_loop[\s]+?for \( int i \= (\d+)\; i < (\d+)\; i \+\+ \) \{([\s\S]+?)(?=\})\}/g,
  Od =
    /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function da(s) {
  return s.replace(Od, Qa).replace(Nd, kd);
}
function kd(s, e, t, n) {
  return (
    console.warn(
      "WebGLProgram: #pragma unroll_loop shader syntax is deprecated. Please use #pragma unroll_loop_start syntax instead."
    ),
    Qa(s, e, t, n)
  );
}
function Qa(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function fa(s) {
  let e =
    "precision " +
    s.precision +
    ` float;
precision ` +
    s.precision +
    " int;";
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
      ? (e += `
#define MEDIUM_PRECISION`)
      : s.precision === "lowp" &&
        (e += `
#define LOW_PRECISION`),
    e
  );
}
function Vd(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === Ta
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === mo
      ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
      : s.shadowMapType === oi && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function Gd(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case Wn:
      case jn:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Zi:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Hd(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case jn:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Wd(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case Ra:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case Uo:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case zo:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function jd(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
    texelHeight: n,
    maxMip: t,
  };
}
function Xd(s, e, t, n) {
  const i = s.getContext(),
    r = t.defines;
  let o = t.vertexShader,
    a = t.fragmentShader;
  const u = Vd(t),
    c = Gd(t),
    f = Hd(t),
    h = Wd(t),
    l = jd(t),
    m = t.isWebGL2 ? "" : Id(t),
    g = Fd(r),
    d = i.createProgram();
  let p,
    v,
    M = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  t.isRawShaderMaterial
    ? ((p = [g].filter(li).join(`
`)),
      p.length > 0 &&
        (p += `
`),
      (v = [m, g].filter(li).join(`
`)),
      v.length > 0 &&
        (v += `
`))
    : ((p = [
        fa(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.supportsVertexTextures ? "#define VERTEX_TEXTURES" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + f : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.displacementMap && t.supportsVertexTextures
          ? "#define USE_DISPLACEMENTMAP"
          : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors && t.isWebGL2 ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE"
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0 && t.isWebGL2
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + u : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )",
        "	attribute vec3 morphTarget0;",
        "	attribute vec3 morphTarget1;",
        "	attribute vec3 morphTarget2;",
        "	attribute vec3 morphTarget3;",
        "	#ifdef USE_MORPHNORMALS",
        "		attribute vec3 morphNormal0;",
        "		attribute vec3 morphNormal1;",
        "		attribute vec3 morphNormal2;",
        "		attribute vec3 morphNormal3;",
        "	#else",
        "		attribute vec3 morphTarget4;",
        "		attribute vec3 morphTarget5;",
        "		attribute vec3 morphTarget6;",
        "		attribute vec3 morphTarget7;",
        "	#endif",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(li).join(`
`)),
      (v = [
        m,
        fa(t),
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + f : "",
        t.envMap ? "#define " + h : "",
        l ? "#define CUBEUV_TEXEL_WIDTH " + l.texelWidth : "",
        l ? "#define CUBEUV_TEXEL_HEIGHT " + l.texelHeight : "",
        l ? "#define CUBEUV_MAX_MIP " + l.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMap && t.objectSpaceNormalMap
          ? "#define OBJECTSPACE_NORMALMAP"
          : "",
        t.normalMap && t.tangentSpaceNormalMap
          ? "#define TANGENTSPACE_NORMALMAP"
          : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULARINTENSITYMAP" : "",
        t.specularColorMap ? "#define USE_SPECULARCOLORMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEENCOLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEENROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.vertexTangents ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUvs ? "#define USE_UV" : "",
        t.uvsVertexOnly ? "#define UVS_VERTEX_ONLY" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + u : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.physicallyCorrectLights ? "#define PHYSICALLY_CORRECT_LIGHTS" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.logarithmicDepthBuffer && t.rendererExtensionFragDepth
          ? "#define USE_LOGDEPTHBUF_EXT"
          : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Vt ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Vt ? we.tonemapping_pars_fragment : "",
        t.toneMapping !== Vt ? Pd("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        we.encodings_pars_fragment,
        Dd("linearToOutputTexel", t.outputEncoding),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(li).join(`
`))),
    (o = Xr(o)),
    (o = ua(o, t)),
    (o = ha(o, t)),
    (a = Xr(a)),
    (a = ua(a, t)),
    (a = ha(a, t)),
    (o = da(o)),
    (a = da(a)),
    t.isWebGL2 &&
      t.isRawShaderMaterial !== !0 &&
      ((M = `#version 300 es
`),
      (p =
        [
          "precision mediump sampler2DArray;",
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        p),
      (v =
        [
          "#define varying in",
          t.glslVersion === Us
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === Us ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        v));
  const S = M + p + o,
    A = M + v + a,
    b = la(i, 35633, S),
    C = la(i, 35632, A);
  if (
    (i.attachShader(d, b),
    i.attachShader(d, C),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(d, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(d, 0, "position"),
    i.linkProgram(d),
    s.debug.checkShaderErrors)
  ) {
    const E = i.getProgramInfoLog(d).trim(),
      F = i.getShaderInfoLog(b).trim(),
      B = i.getShaderInfoLog(C).trim();
    let te = !0,
      K = !0;
    if (i.getProgramParameter(d, 35714) === !1) {
      te = !1;
      const P = ca(i, b, "vertex"),
        j = ca(i, C, "fragment");
      console.error(
        "THREE.WebGLProgram: Shader Error " +
          i.getError() +
          " - VALIDATE_STATUS " +
          i.getProgramParameter(d, 35715) +
          `

Program Info Log: ` +
          E +
          `
` +
          P +
          `
` +
          j
      );
    } else
      E !== ""
        ? console.warn("THREE.WebGLProgram: Program Info Log:", E)
        : (F === "" || B === "") && (K = !1);
    K &&
      (this.diagnostics = {
        runnable: te,
        programLog: E,
        vertexShader: { log: F, prefix: p },
        fragmentShader: { log: B, prefix: v },
      });
  }
  i.deleteShader(b), i.deleteShader(C);
  let R;
  this.getUniforms = function () {
    return R === void 0 && (R = new Xi(i, d)), R;
  };
  let _;
  return (
    (this.getAttributes = function () {
      return _ === void 0 && (_ = Bd(i, d)), _;
    }),
    (this.destroy = function () {
      n.releaseStatesOfProgram(this),
        i.deleteProgram(d),
        (this.program = void 0);
    }),
    (this.name = t.shaderName),
    (this.id = Cd++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = d),
    (this.vertexShader = b),
    (this.fragmentShader = C),
    this
  );
}
let qd = 0;
class Yd {
  constructor() {
    (this.shaderCache = new Map()), (this.materialCache = new Map());
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      o = this._getShaderCacheForMaterial(e);
    return (
      o.has(i) === !1 && (o.add(i), i.usedTimes++),
      o.has(r) === !1 && (o.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code);
    return this.materialCache.delete(e), this;
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    this.shaderCache.clear(), this.materialCache.clear();
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    return t.has(e) === !1 && t.set(e, new Set()), t.get(e);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    if (t.has(e) === !1) {
      const n = new Qd(e);
      t.set(e, n);
    }
    return t.get(e);
  }
}
class Qd {
  constructor(e) {
    (this.id = qd++), (this.code = e), (this.usedTimes = 0);
  }
}
function Jd(s, e, t, n, i, r, o) {
  const a = new Oa(),
    u = new Yd(),
    c = [],
    f = i.isWebGL2,
    h = i.logarithmicDepthBuffer,
    l = i.vertexTextures;
  let m = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function d(_, E, F, B, te) {
    const K = B.fog,
      P = te.geometry,
      j = _.isMeshStandardMaterial ? B.environment : null,
      O = (_.isMeshStandardMaterial ? t : e).get(_.envMap || j),
      W = !!O && O.mapping === Zi ? O.image.height : null,
      X = g[_.type];
    _.precision !== null &&
      ((m = i.getMaxPrecision(_.precision)),
      m !== _.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          _.precision,
          "not supported, using",
          m,
          "instead."
        ));
    const N =
        P.morphAttributes.position ||
        P.morphAttributes.normal ||
        P.morphAttributes.color,
      G = N !== void 0 ? N.length : 0;
    let J = 0;
    P.morphAttributes.position !== void 0 && (J = 1),
      P.morphAttributes.normal !== void 0 && (J = 2),
      P.morphAttributes.color !== void 0 && (J = 3);
    let q, Y, ce, he;
    if (X) {
      const Ie = Tt[X];
      (q = Ie.vertexShader), (Y = Ie.fragmentShader);
    } else
      (q = _.vertexShader),
        (Y = _.fragmentShader),
        u.update(_),
        (ce = u.getVertexShaderID(_)),
        (he = u.getFragmentShaderID(_));
    const V = s.getRenderTarget(),
      He = _.alphaTest > 0,
      Ae = _.clearcoat > 0,
      ye = _.iridescence > 0;
    return {
      isWebGL2: f,
      shaderID: X,
      shaderName: _.type,
      vertexShader: q,
      fragmentShader: Y,
      defines: _.defines,
      customVertexShaderID: ce,
      customFragmentShaderID: he,
      isRawShaderMaterial: _.isRawShaderMaterial === !0,
      glslVersion: _.glslVersion,
      precision: m,
      instancing: te.isInstancedMesh === !0,
      instancingColor: te.isInstancedMesh === !0 && te.instanceColor !== null,
      supportsVertexTextures: l,
      outputEncoding:
        V === null
          ? s.outputEncoding
          : V.isXRRenderTarget === !0
          ? V.texture.encoding
          : gn,
      map: !!_.map,
      matcap: !!_.matcap,
      envMap: !!O,
      envMapMode: O && O.mapping,
      envMapCubeUVHeight: W,
      lightMap: !!_.lightMap,
      aoMap: !!_.aoMap,
      emissiveMap: !!_.emissiveMap,
      bumpMap: !!_.bumpMap,
      normalMap: !!_.normalMap,
      objectSpaceNormalMap: _.normalMapType === ol,
      tangentSpaceNormalMap: _.normalMapType === Ia,
      decodeVideoTexture:
        !!_.map && _.map.isVideoTexture === !0 && _.map.encoding === ze,
      clearcoat: Ae,
      clearcoatMap: Ae && !!_.clearcoatMap,
      clearcoatRoughnessMap: Ae && !!_.clearcoatRoughnessMap,
      clearcoatNormalMap: Ae && !!_.clearcoatNormalMap,
      iridescence: ye,
      iridescenceMap: ye && !!_.iridescenceMap,
      iridescenceThicknessMap: ye && !!_.iridescenceThicknessMap,
      displacementMap: !!_.displacementMap,
      roughnessMap: !!_.roughnessMap,
      metalnessMap: !!_.metalnessMap,
      specularMap: !!_.specularMap,
      specularIntensityMap: !!_.specularIntensityMap,
      specularColorMap: !!_.specularColorMap,
      opaque: _.transparent === !1 && _.blending === Vn,
      alphaMap: !!_.alphaMap,
      alphaTest: He,
      gradientMap: !!_.gradientMap,
      sheen: _.sheen > 0,
      sheenColorMap: !!_.sheenColorMap,
      sheenRoughnessMap: !!_.sheenRoughnessMap,
      transmission: _.transmission > 0,
      transmissionMap: !!_.transmissionMap,
      thicknessMap: !!_.thicknessMap,
      combine: _.combine,
      vertexTangents: !!_.normalMap && !!P.attributes.tangent,
      vertexColors: _.vertexColors,
      vertexAlphas:
        _.vertexColors === !0 &&
        !!P.attributes.color &&
        P.attributes.color.itemSize === 4,
      vertexUvs:
        !!_.map ||
        !!_.bumpMap ||
        !!_.normalMap ||
        !!_.specularMap ||
        !!_.alphaMap ||
        !!_.emissiveMap ||
        !!_.roughnessMap ||
        !!_.metalnessMap ||
        !!_.clearcoatMap ||
        !!_.clearcoatRoughnessMap ||
        !!_.clearcoatNormalMap ||
        !!_.iridescenceMap ||
        !!_.iridescenceThicknessMap ||
        !!_.displacementMap ||
        !!_.transmissionMap ||
        !!_.thicknessMap ||
        !!_.specularIntensityMap ||
        !!_.specularColorMap ||
        !!_.sheenColorMap ||
        !!_.sheenRoughnessMap,
      uvsVertexOnly:
        !(
          !!_.map ||
          !!_.bumpMap ||
          !!_.normalMap ||
          !!_.specularMap ||
          !!_.alphaMap ||
          !!_.emissiveMap ||
          !!_.roughnessMap ||
          !!_.metalnessMap ||
          !!_.clearcoatNormalMap ||
          !!_.iridescenceMap ||
          !!_.iridescenceThicknessMap ||
          _.transmission > 0 ||
          !!_.transmissionMap ||
          !!_.thicknessMap ||
          !!_.specularIntensityMap ||
          !!_.specularColorMap ||
          _.sheen > 0 ||
          !!_.sheenColorMap ||
          !!_.sheenRoughnessMap
        ) && !!_.displacementMap,
      fog: !!K,
      useFog: _.fog === !0,
      fogExp2: K && K.isFogExp2,
      flatShading: !!_.flatShading,
      sizeAttenuation: _.sizeAttenuation,
      logarithmicDepthBuffer: h,
      skinning: te.isSkinnedMesh === !0,
      morphTargets: P.morphAttributes.position !== void 0,
      morphNormals: P.morphAttributes.normal !== void 0,
      morphColors: P.morphAttributes.color !== void 0,
      morphTargetsCount: G,
      morphTextureStride: J,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numClippingPlanes: o.numPlanes,
      numClipIntersection: o.numIntersection,
      dithering: _.dithering,
      shadowMapEnabled: s.shadowMap.enabled && F.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: _.toneMapped ? s.toneMapping : Vt,
      physicallyCorrectLights: s.physicallyCorrectLights,
      premultipliedAlpha: _.premultipliedAlpha,
      doubleSided: _.side === Hn,
      flipSided: _.side === yt,
      useDepthPacking: !!_.depthPacking,
      depthPacking: _.depthPacking || 0,
      index0AttributeName: _.index0AttributeName,
      extensionDerivatives: _.extensions && _.extensions.derivatives,
      extensionFragDepth: _.extensions && _.extensions.fragDepth,
      extensionDrawBuffers: _.extensions && _.extensions.drawBuffers,
      extensionShaderTextureLOD: _.extensions && _.extensions.shaderTextureLOD,
      rendererExtensionFragDepth: f || n.has("EXT_frag_depth"),
      rendererExtensionDrawBuffers: f || n.has("WEBGL_draw_buffers"),
      rendererExtensionShaderTextureLod: f || n.has("EXT_shader_texture_lod"),
      customProgramCacheKey: _.customProgramCacheKey(),
    };
  }
  function p(_) {
    const E = [];
    if (
      (_.shaderID
        ? E.push(_.shaderID)
        : (E.push(_.customVertexShaderID), E.push(_.customFragmentShaderID)),
      _.defines !== void 0)
    )
      for (const F in _.defines) E.push(F), E.push(_.defines[F]);
    return (
      _.isRawShaderMaterial === !1 &&
        (v(E, _), M(E, _), E.push(s.outputEncoding)),
      E.push(_.customProgramCacheKey),
      E.join()
    );
  }
  function v(_, E) {
    _.push(E.precision),
      _.push(E.outputEncoding),
      _.push(E.envMapMode),
      _.push(E.envMapCubeUVHeight),
      _.push(E.combine),
      _.push(E.vertexUvs),
      _.push(E.fogExp2),
      _.push(E.sizeAttenuation),
      _.push(E.morphTargetsCount),
      _.push(E.morphAttributeCount),
      _.push(E.numDirLights),
      _.push(E.numPointLights),
      _.push(E.numSpotLights),
      _.push(E.numHemiLights),
      _.push(E.numRectAreaLights),
      _.push(E.numDirLightShadows),
      _.push(E.numPointLightShadows),
      _.push(E.numSpotLightShadows),
      _.push(E.shadowMapType),
      _.push(E.toneMapping),
      _.push(E.numClippingPlanes),
      _.push(E.numClipIntersection),
      _.push(E.depthPacking);
  }
  function M(_, E) {
    a.disableAll(),
      E.isWebGL2 && a.enable(0),
      E.supportsVertexTextures && a.enable(1),
      E.instancing && a.enable(2),
      E.instancingColor && a.enable(3),
      E.map && a.enable(4),
      E.matcap && a.enable(5),
      E.envMap && a.enable(6),
      E.lightMap && a.enable(7),
      E.aoMap && a.enable(8),
      E.emissiveMap && a.enable(9),
      E.bumpMap && a.enable(10),
      E.normalMap && a.enable(11),
      E.objectSpaceNormalMap && a.enable(12),
      E.tangentSpaceNormalMap && a.enable(13),
      E.clearcoat && a.enable(14),
      E.clearcoatMap && a.enable(15),
      E.clearcoatRoughnessMap && a.enable(16),
      E.clearcoatNormalMap && a.enable(17),
      E.iridescence && a.enable(18),
      E.iridescenceMap && a.enable(19),
      E.iridescenceThicknessMap && a.enable(20),
      E.displacementMap && a.enable(21),
      E.specularMap && a.enable(22),
      E.roughnessMap && a.enable(23),
      E.metalnessMap && a.enable(24),
      E.gradientMap && a.enable(25),
      E.alphaMap && a.enable(26),
      E.alphaTest && a.enable(27),
      E.vertexColors && a.enable(28),
      E.vertexAlphas && a.enable(29),
      E.vertexUvs && a.enable(30),
      E.vertexTangents && a.enable(31),
      E.uvsVertexOnly && a.enable(32),
      E.fog && a.enable(33),
      _.push(a.mask),
      a.disableAll(),
      E.useFog && a.enable(0),
      E.flatShading && a.enable(1),
      E.logarithmicDepthBuffer && a.enable(2),
      E.skinning && a.enable(3),
      E.morphTargets && a.enable(4),
      E.morphNormals && a.enable(5),
      E.morphColors && a.enable(6),
      E.premultipliedAlpha && a.enable(7),
      E.shadowMapEnabled && a.enable(8),
      E.physicallyCorrectLights && a.enable(9),
      E.doubleSided && a.enable(10),
      E.flipSided && a.enable(11),
      E.useDepthPacking && a.enable(12),
      E.dithering && a.enable(13),
      E.specularIntensityMap && a.enable(14),
      E.specularColorMap && a.enable(15),
      E.transmission && a.enable(16),
      E.transmissionMap && a.enable(17),
      E.thicknessMap && a.enable(18),
      E.sheen && a.enable(19),
      E.sheenColorMap && a.enable(20),
      E.sheenRoughnessMap && a.enable(21),
      E.decodeVideoTexture && a.enable(22),
      E.opaque && a.enable(23),
      _.push(a.mask);
  }
  function S(_) {
    const E = g[_.type];
    let F;
    if (E) {
      const B = Tt[E];
      F = Qi.clone(B.uniforms);
    } else F = _.uniforms;
    return F;
  }
  function A(_, E) {
    let F;
    for (let B = 0, te = c.length; B < te; B++) {
      const K = c[B];
      if (K.cacheKey === E) {
        (F = K), ++F.usedTimes;
        break;
      }
    }
    return F === void 0 && ((F = new Xd(s, E, _, r)), c.push(F)), F;
  }
  function b(_) {
    if (--_.usedTimes === 0) {
      const E = c.indexOf(_);
      (c[E] = c[c.length - 1]), c.pop(), _.destroy();
    }
  }
  function C(_) {
    u.remove(_);
  }
  function R() {
    u.dispose();
  }
  return {
    getParameters: d,
    getProgramCacheKey: p,
    getUniforms: S,
    acquireProgram: A,
    releaseProgram: b,
    releaseShaderCache: C,
    programs: c,
    dispose: R,
  };
}
function Zd() {
  let s = new WeakMap();
  function e(r) {
    let o = s.get(r);
    return o === void 0 && ((o = {}), s.set(r, o)), o;
  }
  function t(r) {
    s.delete(r);
  }
  function n(r, o, a) {
    s.get(r)[o] = a;
  }
  function i() {
    s = new WeakMap();
  }
  return { get: e, remove: t, update: n, dispose: i };
}
function Kd(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.material.id !== e.material.id
    ? s.material.id - e.material.id
    : s.z !== e.z
    ? s.z - e.z
    : s.id - e.id;
}
function pa(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
    ? s.renderOrder - e.renderOrder
    : s.z !== e.z
    ? e.z - s.z
    : s.id - e.id;
}
function ma() {
  const s = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    (e = 0), (t.length = 0), (n.length = 0), (i.length = 0);
  }
  function o(h, l, m, g, d, p) {
    let v = s[e];
    return (
      v === void 0
        ? ((v = {
            id: h.id,
            object: h,
            geometry: l,
            material: m,
            groupOrder: g,
            renderOrder: h.renderOrder,
            z: d,
            group: p,
          }),
          (s[e] = v))
        : ((v.id = h.id),
          (v.object = h),
          (v.geometry = l),
          (v.material = m),
          (v.groupOrder = g),
          (v.renderOrder = h.renderOrder),
          (v.z = d),
          (v.group = p)),
      e++,
      v
    );
  }
  function a(h, l, m, g, d, p) {
    const v = o(h, l, m, g, d, p);
    m.transmission > 0
      ? n.push(v)
      : m.transparent === !0
      ? i.push(v)
      : t.push(v);
  }
  function u(h, l, m, g, d, p) {
    const v = o(h, l, m, g, d, p);
    m.transmission > 0
      ? n.unshift(v)
      : m.transparent === !0
      ? i.unshift(v)
      : t.unshift(v);
  }
  function c(h, l) {
    t.length > 1 && t.sort(h || Kd),
      n.length > 1 && n.sort(l || pa),
      i.length > 1 && i.sort(l || pa);
  }
  function f() {
    for (let h = e, l = s.length; h < l; h++) {
      const m = s[h];
      if (m.id === null) break;
      (m.id = null),
        (m.object = null),
        (m.geometry = null),
        (m.material = null),
        (m.group = null);
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: a,
    unshift: u,
    finish: f,
    sort: c,
  };
}
function $d() {
  let s = new WeakMap();
  function e(n, i) {
    let r;
    return (
      s.has(n) === !1
        ? ((r = new ma()), s.set(n, [r]))
        : i >= s.get(n).length
        ? ((r = new ma()), s.get(n).push(r))
        : (r = s.get(n)[i]),
      r
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function ef() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new L(), color: new Ce() };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new Ce(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new L(), color: new Ce(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new L(), skyColor: new Ce(), groundColor: new Ce() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ce(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
function tf() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me(),
          };
          break;
        case "SpotLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me(),
          };
          break;
        case "PointLight":
          t = {
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new me(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return (s[e.id] = t), t;
    },
  };
}
let nf = 0;
function rf(s, e) {
  return (e.castShadow ? 1 : 0) - (s.castShadow ? 1 : 0);
}
function sf(s, e) {
  const t = new ef(),
    n = tf(),
    i = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotShadow: [],
      spotShadowMap: [],
      spotShadowMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
    };
  for (let f = 0; f < 9; f++) i.probe.push(new L());
  const r = new L(),
    o = new ke(),
    a = new ke();
  function u(f, h) {
    let l = 0,
      m = 0,
      g = 0;
    for (let E = 0; E < 9; E++) i.probe[E].set(0, 0, 0);
    let d = 0,
      p = 0,
      v = 0,
      M = 0,
      S = 0,
      A = 0,
      b = 0,
      C = 0;
    f.sort(rf);
    const R = h !== !0 ? Math.PI : 1;
    for (let E = 0, F = f.length; E < F; E++) {
      const B = f[E],
        te = B.color,
        K = B.intensity,
        P = B.distance,
        j = B.shadow && B.shadow.map ? B.shadow.map.texture : null;
      if (B.isAmbientLight)
        (l += te.r * K * R), (m += te.g * K * R), (g += te.b * K * R);
      else if (B.isLightProbe)
        for (let O = 0; O < 9; O++)
          i.probe[O].addScaledVector(B.sh.coefficients[O], K);
      else if (B.isDirectionalLight) {
        const O = t.get(B);
        if (
          (O.color.copy(B.color).multiplyScalar(B.intensity * R), B.castShadow)
        ) {
          const W = B.shadow,
            X = n.get(B);
          (X.shadowBias = W.bias),
            (X.shadowNormalBias = W.normalBias),
            (X.shadowRadius = W.radius),
            (X.shadowMapSize = W.mapSize),
            (i.directionalShadow[d] = X),
            (i.directionalShadowMap[d] = j),
            (i.directionalShadowMatrix[d] = B.shadow.matrix),
            A++;
        }
        (i.directional[d] = O), d++;
      } else if (B.isSpotLight) {
        const O = t.get(B);
        if (
          (O.position.setFromMatrixPosition(B.matrixWorld),
          O.color.copy(te).multiplyScalar(K * R),
          (O.distance = P),
          (O.coneCos = Math.cos(B.angle)),
          (O.penumbraCos = Math.cos(B.angle * (1 - B.penumbra))),
          (O.decay = B.decay),
          B.castShadow)
        ) {
          const W = B.shadow,
            X = n.get(B);
          (X.shadowBias = W.bias),
            (X.shadowNormalBias = W.normalBias),
            (X.shadowRadius = W.radius),
            (X.shadowMapSize = W.mapSize),
            (i.spotShadow[v] = X),
            (i.spotShadowMap[v] = j),
            (i.spotShadowMatrix[v] = B.shadow.matrix),
            C++;
        }
        (i.spot[v] = O), v++;
      } else if (B.isRectAreaLight) {
        const O = t.get(B);
        O.color.copy(te).multiplyScalar(K),
          O.halfWidth.set(B.width * 0.5, 0, 0),
          O.halfHeight.set(0, B.height * 0.5, 0),
          (i.rectArea[M] = O),
          M++;
      } else if (B.isPointLight) {
        const O = t.get(B);
        if (
          (O.color.copy(B.color).multiplyScalar(B.intensity * R),
          (O.distance = B.distance),
          (O.decay = B.decay),
          B.castShadow)
        ) {
          const W = B.shadow,
            X = n.get(B);
          (X.shadowBias = W.bias),
            (X.shadowNormalBias = W.normalBias),
            (X.shadowRadius = W.radius),
            (X.shadowMapSize = W.mapSize),
            (X.shadowCameraNear = W.camera.near),
            (X.shadowCameraFar = W.camera.far),
            (i.pointShadow[p] = X),
            (i.pointShadowMap[p] = j),
            (i.pointShadowMatrix[p] = B.shadow.matrix),
            b++;
        }
        (i.point[p] = O), p++;
      } else if (B.isHemisphereLight) {
        const O = t.get(B);
        O.skyColor.copy(B.color).multiplyScalar(K * R),
          O.groundColor.copy(B.groundColor).multiplyScalar(K * R),
          (i.hemi[S] = O),
          S++;
      }
    }
    M > 0 &&
      (e.isWebGL2 || s.has("OES_texture_float_linear") === !0
        ? ((i.rectAreaLTC1 = ie.LTC_FLOAT_1), (i.rectAreaLTC2 = ie.LTC_FLOAT_2))
        : s.has("OES_texture_half_float_linear") === !0
        ? ((i.rectAreaLTC1 = ie.LTC_HALF_1), (i.rectAreaLTC2 = ie.LTC_HALF_2))
        : console.error(
            "THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions."
          )),
      (i.ambient[0] = l),
      (i.ambient[1] = m),
      (i.ambient[2] = g);
    const _ = i.hash;
    (_.directionalLength !== d ||
      _.pointLength !== p ||
      _.spotLength !== v ||
      _.rectAreaLength !== M ||
      _.hemiLength !== S ||
      _.numDirectionalShadows !== A ||
      _.numPointShadows !== b ||
      _.numSpotShadows !== C) &&
      ((i.directional.length = d),
      (i.spot.length = v),
      (i.rectArea.length = M),
      (i.point.length = p),
      (i.hemi.length = S),
      (i.directionalShadow.length = A),
      (i.directionalShadowMap.length = A),
      (i.pointShadow.length = b),
      (i.pointShadowMap.length = b),
      (i.spotShadow.length = C),
      (i.spotShadowMap.length = C),
      (i.directionalShadowMatrix.length = A),
      (i.pointShadowMatrix.length = b),
      (i.spotShadowMatrix.length = C),
      (_.directionalLength = d),
      (_.pointLength = p),
      (_.spotLength = v),
      (_.rectAreaLength = M),
      (_.hemiLength = S),
      (_.numDirectionalShadows = A),
      (_.numPointShadows = b),
      (_.numSpotShadows = C),
      (i.version = nf++));
  }
  function c(f, h) {
    let l = 0,
      m = 0,
      g = 0,
      d = 0,
      p = 0;
    const v = h.matrixWorldInverse;
    for (let M = 0, S = f.length; M < S; M++) {
      const A = f[M];
      if (A.isDirectionalLight) {
        const b = i.directional[l];
        b.direction.setFromMatrixPosition(A.matrixWorld),
          r.setFromMatrixPosition(A.target.matrixWorld),
          b.direction.sub(r),
          b.direction.transformDirection(v),
          l++;
      } else if (A.isSpotLight) {
        const b = i.spot[g];
        b.position.setFromMatrixPosition(A.matrixWorld),
          b.position.applyMatrix4(v),
          b.direction.setFromMatrixPosition(A.matrixWorld),
          r.setFromMatrixPosition(A.target.matrixWorld),
          b.direction.sub(r),
          b.direction.transformDirection(v),
          g++;
      } else if (A.isRectAreaLight) {
        const b = i.rectArea[d];
        b.position.setFromMatrixPosition(A.matrixWorld),
          b.position.applyMatrix4(v),
          a.identity(),
          o.copy(A.matrixWorld),
          o.premultiply(v),
          a.extractRotation(o),
          b.halfWidth.set(A.width * 0.5, 0, 0),
          b.halfHeight.set(0, A.height * 0.5, 0),
          b.halfWidth.applyMatrix4(a),
          b.halfHeight.applyMatrix4(a),
          d++;
      } else if (A.isPointLight) {
        const b = i.point[m];
        b.position.setFromMatrixPosition(A.matrixWorld),
          b.position.applyMatrix4(v),
          m++;
      } else if (A.isHemisphereLight) {
        const b = i.hemi[p];
        b.direction.setFromMatrixPosition(A.matrixWorld),
          b.direction.transformDirection(v),
          p++;
      }
    }
  }
  return { setup: u, setupView: c, state: i };
}
function ga(s, e) {
  const t = new sf(s, e),
    n = [],
    i = [];
  function r() {
    (n.length = 0), (i.length = 0);
  }
  function o(h) {
    n.push(h);
  }
  function a(h) {
    i.push(h);
  }
  function u(h) {
    t.setup(n, h);
  }
  function c(h) {
    t.setupView(n, h);
  }
  return {
    init: r,
    state: { lightsArray: n, shadowsArray: i, lights: t },
    setupLights: u,
    setupLightsView: c,
    pushLight: o,
    pushShadow: a,
  };
}
function af(s, e) {
  let t = new WeakMap();
  function n(r, o = 0) {
    let a;
    return (
      t.has(r) === !1
        ? ((a = new ga(s, e)), t.set(r, [a]))
        : o >= t.get(r).length
        ? ((a = new ga(s, e)), t.get(r).push(a))
        : (a = t.get(r)[o]),
      a
    );
  }
  function i() {
    t = new WeakMap();
  }
  return { get: n, dispose: i };
}
class of extends vi {
  constructor(e) {
    super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = sl),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class lf extends vi {
  constructor(e) {
    super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.referencePosition = new L()),
      (this.nearDistance = 1),
      (this.farDistance = 1e3),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      this.referencePosition.copy(e.referencePosition),
      (this.nearDistance = e.nearDistance),
      (this.farDistance = e.farDistance),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
const cf = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  uf = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function hf(s, e, t) {
  let n = new Zr();
  const i = new me(),
    r = new me(),
    o = new Be(),
    a = new of({ depthPacking: al }),
    u = new lf(),
    c = {},
    f = t.maxTextureSize,
    h = { 0: yt, 1: hi, 2: Hn },
    l = new lt({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new me() },
        radius: { value: 4 },
      },
      vertexShader: cf,
      fragmentShader: uf,
    }),
    m = l.clone();
  m.defines.HORIZONTAL_PASS = 1;
  const g = new pt();
  g.setAttribute(
    "position",
    new Dt(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3)
  );
  const d = new it(g, l),
    p = this;
  (this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Ta),
    (this.render = function (A, b, C) {
      if (
        p.enabled === !1 ||
        (p.autoUpdate === !1 && p.needsUpdate === !1) ||
        A.length === 0
      )
        return;
      const R = s.getRenderTarget(),
        _ = s.getActiveCubeFace(),
        E = s.getActiveMipmapLevel(),
        F = s.state;
      F.setBlending(Kt),
        F.buffers.color.setClear(1, 1, 1, 1),
        F.buffers.depth.setTest(!0),
        F.setScissorTest(!1);
      for (let B = 0, te = A.length; B < te; B++) {
        const K = A[B],
          P = K.shadow;
        if (P === void 0) {
          console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
          continue;
        }
        if (P.autoUpdate === !1 && P.needsUpdate === !1) continue;
        i.copy(P.mapSize);
        const j = P.getFrameExtents();
        if (
          (i.multiply(j),
          r.copy(P.mapSize),
          (i.x > f || i.y > f) &&
            (i.x > f &&
              ((r.x = Math.floor(f / j.x)),
              (i.x = r.x * j.x),
              (P.mapSize.x = r.x)),
            i.y > f &&
              ((r.y = Math.floor(f / j.y)),
              (i.y = r.y * j.y),
              (P.mapSize.y = r.y))),
          P.map === null)
        ) {
          const W = this.type !== oi ? { minFilter: tt, magFilter: tt } : {};
          (P.map = new Mt(i.x, i.y, W)),
            (P.map.texture.name = K.name + ".shadowMap"),
            P.camera.updateProjectionMatrix();
        }
        s.setRenderTarget(P.map), s.clear();
        const O = P.getViewportCount();
        for (let W = 0; W < O; W++) {
          const X = P.getViewport(W);
          o.set(r.x * X.x, r.y * X.y, r.x * X.z, r.y * X.w),
            F.viewport(o),
            P.updateMatrices(K, W),
            (n = P.getFrustum()),
            S(b, C, P.camera, K, this.type);
        }
        P.isPointLightShadow !== !0 && this.type === oi && v(P, C),
          (P.needsUpdate = !1);
      }
      (p.needsUpdate = !1), s.setRenderTarget(R, _, E);
    });
  function v(A, b) {
    const C = e.update(d);
    l.defines.VSM_SAMPLES !== A.blurSamples &&
      ((l.defines.VSM_SAMPLES = A.blurSamples),
      (m.defines.VSM_SAMPLES = A.blurSamples),
      (l.needsUpdate = !0),
      (m.needsUpdate = !0)),
      A.mapPass === null && (A.mapPass = new Mt(i.x, i.y)),
      (l.uniforms.shadow_pass.value = A.map.texture),
      (l.uniforms.resolution.value = A.mapSize),
      (l.uniforms.radius.value = A.radius),
      s.setRenderTarget(A.mapPass),
      s.clear(),
      s.renderBufferDirect(b, null, C, l, d, null),
      (m.uniforms.shadow_pass.value = A.mapPass.texture),
      (m.uniforms.resolution.value = A.mapSize),
      (m.uniforms.radius.value = A.radius),
      s.setRenderTarget(A.map),
      s.clear(),
      s.renderBufferDirect(b, null, C, m, d, null);
  }
  function M(A, b, C, R, _, E) {
    let F = null;
    const B =
      C.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (
      (B !== void 0 ? (F = B) : (F = C.isPointLight === !0 ? u : a),
      (s.localClippingEnabled &&
        b.clipShadows === !0 &&
        Array.isArray(b.clippingPlanes) &&
        b.clippingPlanes.length !== 0) ||
        (b.displacementMap && b.displacementScale !== 0) ||
        (b.alphaMap && b.alphaTest > 0))
    ) {
      const te = F.uuid,
        K = b.uuid;
      let P = c[te];
      P === void 0 && ((P = {}), (c[te] = P));
      let j = P[K];
      j === void 0 && ((j = F.clone()), (P[K] = j)), (F = j);
    }
    return (
      (F.visible = b.visible),
      (F.wireframe = b.wireframe),
      E === oi
        ? (F.side = b.shadowSide !== null ? b.shadowSide : b.side)
        : (F.side = b.shadowSide !== null ? b.shadowSide : h[b.side]),
      (F.alphaMap = b.alphaMap),
      (F.alphaTest = b.alphaTest),
      (F.clipShadows = b.clipShadows),
      (F.clippingPlanes = b.clippingPlanes),
      (F.clipIntersection = b.clipIntersection),
      (F.displacementMap = b.displacementMap),
      (F.displacementScale = b.displacementScale),
      (F.displacementBias = b.displacementBias),
      (F.wireframeLinewidth = b.wireframeLinewidth),
      (F.linewidth = b.linewidth),
      C.isPointLight === !0 &&
        F.isMeshDistanceMaterial === !0 &&
        (F.referencePosition.setFromMatrixPosition(C.matrixWorld),
        (F.nearDistance = R),
        (F.farDistance = _)),
      F
    );
  }
  function S(A, b, C, R, _) {
    if (A.visible === !1) return;
    if (
      A.layers.test(b.layers) &&
      (A.isMesh || A.isLine || A.isPoints) &&
      (A.castShadow || (A.receiveShadow && _ === oi)) &&
      (!A.frustumCulled || n.intersectsObject(A))
    ) {
      A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, A.matrixWorld);
      const B = e.update(A),
        te = A.material;
      if (Array.isArray(te)) {
        const K = B.groups;
        for (let P = 0, j = K.length; P < j; P++) {
          const O = K[P],
            W = te[O.materialIndex];
          if (W && W.visible) {
            const X = M(A, W, R, C.near, C.far, _);
            s.renderBufferDirect(C, null, B, X, A, O);
          }
        }
      } else if (te.visible) {
        const K = M(A, te, R, C.near, C.far, _);
        s.renderBufferDirect(C, null, B, K, A, null);
      }
    }
    const F = A.children;
    for (let B = 0, te = F.length; B < te; B++) S(F[B], b, C, R, _);
  }
}
function df(s, e, t) {
  const n = t.isWebGL2;
  function i() {
    let T = !1;
    const ne = new Be();
    let ee = null;
    const de = new Be(0, 0, 0, 0);
    return {
      setMask: function (oe) {
        ee !== oe && !T && (s.colorMask(oe, oe, oe, oe), (ee = oe));
      },
      setLocked: function (oe) {
        T = oe;
      },
      setClear: function (oe, ge, Z, ve, Re) {
        Re === !0 && ((oe *= ve), (ge *= ve), (Z *= ve)),
          ne.set(oe, ge, Z, ve),
          de.equals(ne) === !1 && (s.clearColor(oe, ge, Z, ve), de.copy(ne));
      },
      reset: function () {
        (T = !1), (ee = null), de.set(-1, 0, 0, 0);
      },
    };
  }
  function r() {
    let T = !1,
      ne = null,
      ee = null,
      de = null;
    return {
      setTest: function (oe) {
        oe ? he(2929) : V(2929);
      },
      setMask: function (oe) {
        ne !== oe && !T && (s.depthMask(oe), (ne = oe));
      },
      setFunc: function (oe) {
        if (ee !== oe) {
          if (oe)
            switch (oe) {
              case Lo:
                s.depthFunc(512);
                break;
              case Ro:
                s.depthFunc(519);
                break;
              case Do:
                s.depthFunc(513);
                break;
              case Or:
                s.depthFunc(515);
                break;
              case Po:
                s.depthFunc(514);
                break;
              case Io:
                s.depthFunc(518);
                break;
              case Fo:
                s.depthFunc(516);
                break;
              case Bo:
                s.depthFunc(517);
                break;
              default:
                s.depthFunc(515);
            }
          else s.depthFunc(515);
          ee = oe;
        }
      },
      setLocked: function (oe) {
        T = oe;
      },
      setClear: function (oe) {
        de !== oe && (s.clearDepth(oe), (de = oe));
      },
      reset: function () {
        (T = !1), (ne = null), (ee = null), (de = null);
      },
    };
  }
  function o() {
    let T = !1,
      ne = null,
      ee = null,
      de = null,
      oe = null,
      ge = null,
      Z = null,
      ve = null,
      Re = null;
    return {
      setTest: function (De) {
        T || (De ? he(2960) : V(2960));
      },
      setMask: function (De) {
        ne !== De && !T && (s.stencilMask(De), (ne = De));
      },
      setFunc: function (De, Je, wt) {
        (ee !== De || de !== Je || oe !== wt) &&
          (s.stencilFunc(De, Je, wt), (ee = De), (de = Je), (oe = wt));
      },
      setOp: function (De, Je, wt) {
        (ge !== De || Z !== Je || ve !== wt) &&
          (s.stencilOp(De, Je, wt), (ge = De), (Z = Je), (ve = wt));
      },
      setLocked: function (De) {
        T = De;
      },
      setClear: function (De) {
        Re !== De && (s.clearStencil(De), (Re = De));
      },
      reset: function () {
        (T = !1),
          (ne = null),
          (ee = null),
          (de = null),
          (oe = null),
          (ge = null),
          (Z = null),
          (ve = null),
          (Re = null);
      },
    };
  }
  const a = new i(),
    u = new r(),
    c = new o();
  let f = {},
    h = {},
    l = new WeakMap(),
    m = [],
    g = null,
    d = !1,
    p = null,
    v = null,
    M = null,
    S = null,
    A = null,
    b = null,
    C = null,
    R = !1,
    _ = null,
    E = null,
    F = null,
    B = null,
    te = null;
  const K = s.getParameter(35661);
  let P = !1,
    j = 0;
  const O = s.getParameter(7938);
  O.indexOf("WebGL") !== -1
    ? ((j = parseFloat(/^WebGL (\d)/.exec(O)[1])), (P = j >= 1))
    : O.indexOf("OpenGL ES") !== -1 &&
      ((j = parseFloat(/^OpenGL ES (\d)/.exec(O)[1])), (P = j >= 2));
  let W = null,
    X = {};
  const N = s.getParameter(3088),
    G = s.getParameter(2978),
    J = new Be().fromArray(N),
    q = new Be().fromArray(G);
  function Y(T, ne, ee) {
    const de = new Uint8Array(4),
      oe = s.createTexture();
    s.bindTexture(T, oe),
      s.texParameteri(T, 10241, 9728),
      s.texParameteri(T, 10240, 9728);
    for (let ge = 0; ge < ee; ge++)
      s.texImage2D(ne + ge, 0, 6408, 1, 1, 0, 6408, 5121, de);
    return oe;
  }
  const ce = {};
  (ce[3553] = Y(3553, 3553, 1)),
    (ce[34067] = Y(34067, 34069, 6)),
    a.setClear(0, 0, 0, 1),
    u.setClear(1),
    c.setClear(0),
    he(2929),
    u.setFunc(Or),
    qe(!1),
    et(os),
    he(2884),
    Se(Kt);
  function he(T) {
    f[T] !== !0 && (s.enable(T), (f[T] = !0));
  }
  function V(T) {
    f[T] !== !1 && (s.disable(T), (f[T] = !1));
  }
  function He(T, ne) {
    return h[T] !== ne
      ? (s.bindFramebuffer(T, ne),
        (h[T] = ne),
        n && (T === 36009 && (h[36160] = ne), T === 36160 && (h[36009] = ne)),
        !0)
      : !1;
  }
  function Ae(T, ne) {
    let ee = m,
      de = !1;
    if (T)
      if (
        ((ee = l.get(ne)),
        ee === void 0 && ((ee = []), l.set(ne, ee)),
        T.isWebGLMultipleRenderTargets)
      ) {
        const oe = T.texture;
        if (ee.length !== oe.length || ee[0] !== 36064) {
          for (let ge = 0, Z = oe.length; ge < Z; ge++) ee[ge] = 36064 + ge;
          (ee.length = oe.length), (de = !0);
        }
      } else ee[0] !== 36064 && ((ee[0] = 36064), (de = !0));
    else ee[0] !== 1029 && ((ee[0] = 1029), (de = !0));
    de &&
      (t.isWebGL2
        ? s.drawBuffers(ee)
        : e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ee));
  }
  function ye(T) {
    return g !== T ? (s.useProgram(T), (g = T), !0) : !1;
  }
  const se = { [Un]: 32774, [xo]: 32778, [_o]: 32779 };
  if (n) (se[us] = 32775), (se[hs] = 32776);
  else {
    const T = e.get("EXT_blend_minmax");
    T !== null && ((se[us] = T.MIN_EXT), (se[hs] = T.MAX_EXT));
  }
  const Ie = {
    [yo]: 0,
    [Mo]: 1,
    [bo]: 768,
    [Ca]: 770,
    [Co]: 776,
    [Eo]: 774,
    [Ao]: 772,
    [wo]: 769,
    [La]: 771,
    [To]: 775,
    [So]: 773,
  };
  function Se(T, ne, ee, de, oe, ge, Z, ve) {
    if (T === Kt) {
      d === !0 && (V(3042), (d = !1));
      return;
    }
    if ((d === !1 && (he(3042), (d = !0)), T !== vo)) {
      if (T !== p || ve !== R) {
        if (
          ((v !== Un || A !== Un) &&
            (s.blendEquation(32774), (v = Un), (A = Un)),
          ve)
        )
          switch (T) {
            case Vn:
              s.blendFuncSeparate(1, 771, 1, 771);
              break;
            case Nr:
              s.blendFunc(1, 1);
              break;
            case ls:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case cs:
              s.blendFuncSeparate(0, 768, 0, 770);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        else
          switch (T) {
            case Vn:
              s.blendFuncSeparate(770, 771, 1, 771);
              break;
            case Nr:
              s.blendFunc(770, 1);
              break;
            case ls:
              s.blendFuncSeparate(0, 769, 0, 1);
              break;
            case cs:
              s.blendFunc(0, 768);
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", T);
              break;
          }
        (M = null), (S = null), (b = null), (C = null), (p = T), (R = ve);
      }
      return;
    }
    (oe = oe || ne),
      (ge = ge || ee),
      (Z = Z || de),
      (ne !== v || oe !== A) &&
        (s.blendEquationSeparate(se[ne], se[oe]), (v = ne), (A = oe)),
      (ee !== M || de !== S || ge !== b || Z !== C) &&
        (s.blendFuncSeparate(Ie[ee], Ie[de], Ie[ge], Ie[Z]),
        (M = ee),
        (S = de),
        (b = ge),
        (C = Z)),
      (p = T),
      (R = null);
  }
  function fe(T, ne) {
    T.side === Hn ? V(2884) : he(2884);
    let ee = T.side === yt;
    ne && (ee = !ee),
      qe(ee),
      T.blending === Vn && T.transparent === !1
        ? Se(Kt)
        : Se(
            T.blending,
            T.blendEquation,
            T.blendSrc,
            T.blendDst,
            T.blendEquationAlpha,
            T.blendSrcAlpha,
            T.blendDstAlpha,
            T.premultipliedAlpha
          ),
      u.setFunc(T.depthFunc),
      u.setTest(T.depthTest),
      u.setMask(T.depthWrite),
      a.setMask(T.colorWrite);
    const de = T.stencilWrite;
    c.setTest(de),
      de &&
        (c.setMask(T.stencilWriteMask),
        c.setFunc(T.stencilFunc, T.stencilRef, T.stencilFuncMask),
        c.setOp(T.stencilFail, T.stencilZFail, T.stencilZPass)),
      bt(T.polygonOffset, T.polygonOffsetFactor, T.polygonOffsetUnits),
      T.alphaToCoverage === !0 ? he(32926) : V(32926);
  }
  function qe(T) {
    _ !== T && (T ? s.frontFace(2304) : s.frontFace(2305), (_ = T));
  }
  function et(T) {
    T !== fo
      ? (he(2884),
        T !== E &&
          (T === os
            ? s.cullFace(1029)
            : T === po
            ? s.cullFace(1028)
            : s.cullFace(1032)))
      : V(2884),
      (E = T);
  }
  function rt(T) {
    T !== F && (P && s.lineWidth(T), (F = T));
  }
  function bt(T, ne, ee) {
    T
      ? (he(32823),
        (B !== ne || te !== ee) &&
          (s.polygonOffset(ne, ee), (B = ne), (te = ee)))
      : V(32823);
  }
  function je(T) {
    T ? he(3089) : V(3089);
  }
  function Fe(T) {
    T === void 0 && (T = 33984 + K - 1),
      W !== T && (s.activeTexture(T), (W = T));
  }
  function Pt(T, ne) {
    W === null && Fe();
    let ee = X[W];
    ee === void 0 && ((ee = { type: void 0, texture: void 0 }), (X[W] = ee)),
      (ee.type !== T || ee.texture !== ne) &&
        (s.bindTexture(T, ne || ce[T]), (ee.type = T), (ee.texture = ne));
  }
  function It() {
    const T = X[W];
    T !== void 0 &&
      T.type !== void 0 &&
      (s.bindTexture(T.type, null), (T.type = void 0), (T.texture = void 0));
  }
  function w() {
    try {
      s.compressedTexImage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function x() {
    try {
      s.texSubImage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function k() {
    try {
      s.texSubImage3D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function Q() {
    try {
      s.compressedTexSubImage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function $() {
    try {
      s.texStorage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function re() {
    try {
      s.texStorage3D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function xe() {
    try {
      s.texImage2D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function z() {
    try {
      s.texImage3D.apply(s, arguments);
    } catch (T) {
      console.error("THREE.WebGLState:", T);
    }
  }
  function ue(T) {
    J.equals(T) === !1 && (s.scissor(T.x, T.y, T.z, T.w), J.copy(T));
  }
  function le(T) {
    q.equals(T) === !1 && (s.viewport(T.x, T.y, T.z, T.w), q.copy(T));
  }
  function ae() {
    s.disable(3042),
      s.disable(2884),
      s.disable(2929),
      s.disable(32823),
      s.disable(3089),
      s.disable(2960),
      s.disable(32926),
      s.blendEquation(32774),
      s.blendFunc(1, 0),
      s.blendFuncSeparate(1, 0, 1, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(513),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(519, 0, 4294967295),
      s.stencilOp(7680, 7680, 7680),
      s.clearStencil(0),
      s.cullFace(1029),
      s.frontFace(2305),
      s.polygonOffset(0, 0),
      s.activeTexture(33984),
      s.bindFramebuffer(36160, null),
      n === !0 &&
        (s.bindFramebuffer(36009, null), s.bindFramebuffer(36008, null)),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (f = {}),
      (W = null),
      (X = {}),
      (h = {}),
      (l = new WeakMap()),
      (m = []),
      (g = null),
      (d = !1),
      (p = null),
      (v = null),
      (M = null),
      (S = null),
      (A = null),
      (b = null),
      (C = null),
      (R = !1),
      (_ = null),
      (E = null),
      (F = null),
      (B = null),
      (te = null),
      J.set(0, 0, s.canvas.width, s.canvas.height),
      q.set(0, 0, s.canvas.width, s.canvas.height),
      a.reset(),
      u.reset(),
      c.reset();
  }
  return {
    buffers: { color: a, depth: u, stencil: c },
    enable: he,
    disable: V,
    bindFramebuffer: He,
    drawBuffers: Ae,
    useProgram: ye,
    setBlending: Se,
    setMaterial: fe,
    setFlipSided: qe,
    setCullFace: et,
    setLineWidth: rt,
    setPolygonOffset: bt,
    setScissorTest: je,
    activeTexture: Fe,
    bindTexture: Pt,
    unbindTexture: It,
    compressedTexImage2D: w,
    texImage2D: xe,
    texImage3D: z,
    texStorage2D: $,
    texStorage3D: re,
    texSubImage2D: x,
    texSubImage3D: k,
    compressedTexSubImage2D: Q,
    scissor: ue,
    viewport: le,
    reset: ae,
  };
}
function ff(s, e, t, n, i, r, o) {
  const a = i.isWebGL2,
    u = i.maxTextures,
    c = i.maxCubemapSize,
    f = i.maxTextureSize,
    h = i.maxSamples,
    l = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    m = /OculusBrowser/g.test(navigator.userAgent),
    g = new WeakMap();
  let d;
  const p = new WeakMap();
  let v = !1;
  try {
    v =
      typeof OffscreenCanvas != "undefined" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function M(w, x) {
    return v ? new OffscreenCanvas(w, x) : fi("canvas");
  }
  function S(w, x, k, Q) {
    let $ = 1;
    if (
      ((w.width > Q || w.height > Q) && ($ = Q / Math.max(w.width, w.height)),
      $ < 1 || x === !0)
    )
      if (
        (typeof HTMLImageElement != "undefined" &&
          w instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement != "undefined" &&
          w instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap != "undefined" && w instanceof ImageBitmap)
      ) {
        const re = x ? Yi : Math.floor,
          xe = re($ * w.width),
          z = re($ * w.height);
        d === void 0 && (d = M(xe, z));
        const ue = k ? M(xe, z) : d;
        return (
          (ue.width = xe),
          (ue.height = z),
          ue.getContext("2d").drawImage(w, 0, 0, xe, z),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              w.width +
              "x" +
              w.height +
              ") to (" +
              xe +
              "x" +
              z +
              ")."
          ),
          ue
        );
      } else
        return (
          "data" in w &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                w.width +
                "x" +
                w.height +
                ")."
            ),
          w
        );
    return w;
  }
  function A(w) {
    return jr(w.width) && jr(w.height);
  }
  function b(w) {
    return a
      ? !1
      : w.wrapS !== _t ||
          w.wrapT !== _t ||
          (w.minFilter !== tt && w.minFilter !== ut);
  }
  function C(w, x) {
    return w.generateMipmaps && x && w.minFilter !== tt && w.minFilter !== ut;
  }
  function R(w) {
    s.generateMipmap(w);
  }
  function _(w, x, k, Q, $ = !1) {
    if (a === !1) return x;
    if (w !== null) {
      if (s[w] !== void 0) return s[w];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          w +
          "'"
      );
    }
    let re = x;
    return (
      x === 6403 &&
        (k === 5126 && (re = 33326),
        k === 5131 && (re = 33325),
        k === 5121 && (re = 33321)),
      x === 33319 &&
        (k === 5126 && (re = 33328),
        k === 5131 && (re = 33327),
        k === 5121 && (re = 33323)),
      x === 6408 &&
        (k === 5126 && (re = 34836),
        k === 5131 && (re = 34842),
        k === 5121 && (re = Q === ze && $ === !1 ? 35907 : 32856),
        k === 32819 && (re = 32854),
        k === 32820 && (re = 32855)),
      (re === 33325 ||
        re === 33326 ||
        re === 33327 ||
        re === 33328 ||
        re === 34842 ||
        re === 34836) &&
        e.get("EXT_color_buffer_float"),
      re
    );
  }
  function E(w, x, k) {
    return C(w, k) === !0 ||
      (w.isFramebufferTexture && w.minFilter !== tt && w.minFilter !== ut)
      ? Math.log2(Math.max(x.width, x.height)) + 1
      : w.mipmaps !== void 0 && w.mipmaps.length > 0
      ? w.mipmaps.length
      : w.isCompressedTexture && Array.isArray(w.image)
      ? x.mipmaps.length
      : 1;
  }
  function F(w) {
    return w === tt || w === ds || w === fs ? 9728 : 9729;
  }
  function B(w) {
    const x = w.target;
    x.removeEventListener("dispose", B), K(x), x.isVideoTexture && g.delete(x);
  }
  function te(w) {
    const x = w.target;
    x.removeEventListener("dispose", te), j(x);
  }
  function K(w) {
    const x = n.get(w);
    if (x.__webglInit === void 0) return;
    const k = w.source,
      Q = p.get(k);
    if (Q) {
      const $ = Q[x.__cacheKey];
      $.usedTimes--,
        $.usedTimes === 0 && P(w),
        Object.keys(Q).length === 0 && p.delete(k);
    }
    n.remove(w);
  }
  function P(w) {
    const x = n.get(w);
    s.deleteTexture(x.__webglTexture);
    const k = w.source,
      Q = p.get(k);
    delete Q[x.__cacheKey], o.memory.textures--;
  }
  function j(w) {
    const x = w.texture,
      k = n.get(w),
      Q = n.get(x);
    if (
      (Q.__webglTexture !== void 0 &&
        (s.deleteTexture(Q.__webglTexture), o.memory.textures--),
      w.depthTexture && w.depthTexture.dispose(),
      w.isWebGLCubeRenderTarget)
    )
      for (let $ = 0; $ < 6; $++)
        s.deleteFramebuffer(k.__webglFramebuffer[$]),
          k.__webglDepthbuffer && s.deleteRenderbuffer(k.__webglDepthbuffer[$]);
    else {
      if (
        (s.deleteFramebuffer(k.__webglFramebuffer),
        k.__webglDepthbuffer && s.deleteRenderbuffer(k.__webglDepthbuffer),
        k.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(k.__webglMultisampledFramebuffer),
        k.__webglColorRenderbuffer)
      )
        for (let $ = 0; $ < k.__webglColorRenderbuffer.length; $++)
          k.__webglColorRenderbuffer[$] &&
            s.deleteRenderbuffer(k.__webglColorRenderbuffer[$]);
      k.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(k.__webglDepthRenderbuffer);
    }
    if (w.isWebGLMultipleRenderTargets)
      for (let $ = 0, re = x.length; $ < re; $++) {
        const xe = n.get(x[$]);
        xe.__webglTexture &&
          (s.deleteTexture(xe.__webglTexture), o.memory.textures--),
          n.remove(x[$]);
      }
    n.remove(x), n.remove(w);
  }
  let O = 0;
  function W() {
    O = 0;
  }
  function X() {
    const w = O;
    return (
      w >= u &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            w +
            " texture units while this GPU supports only " +
            u
        ),
      (O += 1),
      w
    );
  }
  function N(w) {
    const x = [];
    return (
      x.push(w.wrapS),
      x.push(w.wrapT),
      x.push(w.magFilter),
      x.push(w.minFilter),
      x.push(w.anisotropy),
      x.push(w.internalFormat),
      x.push(w.format),
      x.push(w.type),
      x.push(w.generateMipmaps),
      x.push(w.premultiplyAlpha),
      x.push(w.flipY),
      x.push(w.unpackAlignment),
      x.push(w.encoding),
      x.join()
    );
  }
  function G(w, x) {
    const k = n.get(w);
    if (
      (w.isVideoTexture && Pt(w),
      w.isRenderTargetTexture === !1 &&
        w.version > 0 &&
        k.__version !== w.version)
    ) {
      const Q = w.image;
      if (Q === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found."
        );
      else if (Q.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete"
        );
      else {
        Ae(k, w, x);
        return;
      }
    }
    t.activeTexture(33984 + x), t.bindTexture(3553, k.__webglTexture);
  }
  function J(w, x) {
    const k = n.get(w);
    if (w.version > 0 && k.__version !== w.version) {
      Ae(k, w, x);
      return;
    }
    t.activeTexture(33984 + x), t.bindTexture(35866, k.__webglTexture);
  }
  function q(w, x) {
    const k = n.get(w);
    if (w.version > 0 && k.__version !== w.version) {
      Ae(k, w, x);
      return;
    }
    t.activeTexture(33984 + x), t.bindTexture(32879, k.__webglTexture);
  }
  function Y(w, x) {
    const k = n.get(w);
    if (w.version > 0 && k.__version !== w.version) {
      ye(k, w, x);
      return;
    }
    t.activeTexture(33984 + x), t.bindTexture(34067, k.__webglTexture);
  }
  const ce = { [Gr]: 10497, [_t]: 33071, [Hr]: 33648 },
    he = {
      [tt]: 9728,
      [ds]: 9984,
      [fs]: 9986,
      [ut]: 9729,
      [Ho]: 9985,
      [Ki]: 9987,
    };
  function V(w, x, k) {
    if (
      (k
        ? (s.texParameteri(w, 10242, ce[x.wrapS]),
          s.texParameteri(w, 10243, ce[x.wrapT]),
          (w === 32879 || w === 35866) &&
            s.texParameteri(w, 32882, ce[x.wrapR]),
          s.texParameteri(w, 10240, he[x.magFilter]),
          s.texParameteri(w, 10241, he[x.minFilter]))
        : (s.texParameteri(w, 10242, 33071),
          s.texParameteri(w, 10243, 33071),
          (w === 32879 || w === 35866) && s.texParameteri(w, 32882, 33071),
          (x.wrapS !== _t || x.wrapT !== _t) &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."
            ),
          s.texParameteri(w, 10240, F(x.magFilter)),
          s.texParameteri(w, 10241, F(x.minFilter)),
          x.minFilter !== tt &&
            x.minFilter !== ut &&
            console.warn(
              "THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter."
            )),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      const Q = e.get("EXT_texture_filter_anisotropic");
      if (
        (x.type === hn && e.has("OES_texture_float_linear") === !1) ||
        (a === !1 &&
          x.type === di &&
          e.has("OES_texture_half_float_linear") === !1)
      )
        return;
      (x.anisotropy > 1 || n.get(x).__currentAnisotropy) &&
        (s.texParameterf(
          w,
          Q.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(x.anisotropy, i.getMaxAnisotropy())
        ),
        (n.get(x).__currentAnisotropy = x.anisotropy));
    }
  }
  function He(w, x) {
    let k = !1;
    w.__webglInit === void 0 &&
      ((w.__webglInit = !0), x.addEventListener("dispose", B));
    const Q = x.source;
    let $ = p.get(Q);
    $ === void 0 && (($ = {}), p.set(Q, $));
    const re = N(x);
    if (re !== w.__cacheKey) {
      $[re] === void 0 &&
        (($[re] = { texture: s.createTexture(), usedTimes: 0 }),
        o.memory.textures++,
        (k = !0)),
        $[re].usedTimes++;
      const xe = $[w.__cacheKey];
      xe !== void 0 &&
        ($[w.__cacheKey].usedTimes--, xe.usedTimes === 0 && P(x)),
        (w.__cacheKey = re),
        (w.__webglTexture = $[re].texture);
    }
    return k;
  }
  function Ae(w, x, k) {
    let Q = 3553;
    x.isDataArrayTexture && (Q = 35866), x.isData3DTexture && (Q = 32879);
    const $ = He(w, x),
      re = x.source;
    if (
      (t.activeTexture(33984 + k),
      t.bindTexture(Q, w.__webglTexture),
      re.version !== re.__currentVersion || $ === !0)
    ) {
      s.pixelStorei(37440, x.flipY),
        s.pixelStorei(37441, x.premultiplyAlpha),
        s.pixelStorei(3317, x.unpackAlignment),
        s.pixelStorei(37443, 0);
      const xe = b(x) && A(x.image) === !1;
      let z = S(x.image, xe, !1, f);
      z = It(x, z);
      const ue = A(z) || a,
        le = r.convert(x.format, x.encoding);
      let ae = r.convert(x.type),
        T = _(x.internalFormat, le, ae, x.encoding, x.isVideoTexture);
      V(Q, x, ue);
      let ne;
      const ee = x.mipmaps,
        de = a && x.isVideoTexture !== !0,
        oe = re.__currentVersion === void 0 || $ === !0,
        ge = E(x, z, ue);
      if (x.isDepthTexture)
        (T = 6402),
          a
            ? x.type === hn
              ? (T = 36012)
              : x.type === un
              ? (T = 33190)
              : x.type === Gn
              ? (T = 35056)
              : (T = 33189)
            : x.type === hn &&
              console.error(
                "WebGLRenderer: Floating point depth texture requires WebGL2."
              ),
          x.format === fn &&
            T === 6402 &&
            x.type !== Pa &&
            x.type !== un &&
            (console.warn(
              "THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."
            ),
            (x.type = un),
            (ae = r.convert(x.type))),
          x.format === Xn &&
            T === 6402 &&
            ((T = 34041),
            x.type !== Gn &&
              (console.warn(
                "THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."
              ),
              (x.type = Gn),
              (ae = r.convert(x.type)))),
          oe &&
            (de
              ? t.texStorage2D(3553, 1, T, z.width, z.height)
              : t.texImage2D(3553, 0, T, z.width, z.height, 0, le, ae, null));
      else if (x.isDataTexture)
        if (ee.length > 0 && ue) {
          de && oe && t.texStorage2D(3553, ge, T, ee[0].width, ee[0].height);
          for (let Z = 0, ve = ee.length; Z < ve; Z++)
            (ne = ee[Z]),
              de
                ? t.texSubImage2D(
                    3553,
                    Z,
                    0,
                    0,
                    ne.width,
                    ne.height,
                    le,
                    ae,
                    ne.data
                  )
                : t.texImage2D(
                    3553,
                    Z,
                    T,
                    ne.width,
                    ne.height,
                    0,
                    le,
                    ae,
                    ne.data
                  );
          x.generateMipmaps = !1;
        } else
          de
            ? (oe && t.texStorage2D(3553, ge, T, z.width, z.height),
              t.texSubImage2D(3553, 0, 0, 0, z.width, z.height, le, ae, z.data))
            : t.texImage2D(3553, 0, T, z.width, z.height, 0, le, ae, z.data);
      else if (x.isCompressedTexture) {
        de && oe && t.texStorage2D(3553, ge, T, ee[0].width, ee[0].height);
        for (let Z = 0, ve = ee.length; Z < ve; Z++)
          (ne = ee[Z]),
            x.format !== Rt
              ? le !== null
                ? de
                  ? t.compressedTexSubImage2D(
                      3553,
                      Z,
                      0,
                      0,
                      ne.width,
                      ne.height,
                      le,
                      ne.data
                    )
                  : t.compressedTexImage2D(
                      3553,
                      Z,
                      T,
                      ne.width,
                      ne.height,
                      0,
                      ne.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"
                  )
              : de
              ? t.texSubImage2D(
                  3553,
                  Z,
                  0,
                  0,
                  ne.width,
                  ne.height,
                  le,
                  ae,
                  ne.data
                )
              : t.texImage2D(
                  3553,
                  Z,
                  T,
                  ne.width,
                  ne.height,
                  0,
                  le,
                  ae,
                  ne.data
                );
      } else if (x.isDataArrayTexture)
        de
          ? (oe && t.texStorage3D(35866, ge, T, z.width, z.height, z.depth),
            t.texSubImage3D(
              35866,
              0,
              0,
              0,
              0,
              z.width,
              z.height,
              z.depth,
              le,
              ae,
              z.data
            ))
          : t.texImage3D(
              35866,
              0,
              T,
              z.width,
              z.height,
              z.depth,
              0,
              le,
              ae,
              z.data
            );
      else if (x.isData3DTexture)
        de
          ? (oe && t.texStorage3D(32879, ge, T, z.width, z.height, z.depth),
            t.texSubImage3D(
              32879,
              0,
              0,
              0,
              0,
              z.width,
              z.height,
              z.depth,
              le,
              ae,
              z.data
            ))
          : t.texImage3D(
              32879,
              0,
              T,
              z.width,
              z.height,
              z.depth,
              0,
              le,
              ae,
              z.data
            );
      else if (x.isFramebufferTexture) {
        if (oe)
          if (de) t.texStorage2D(3553, ge, T, z.width, z.height);
          else {
            let Z = z.width,
              ve = z.height;
            for (let Re = 0; Re < ge; Re++)
              t.texImage2D(3553, Re, T, Z, ve, 0, le, ae, null),
                (Z >>= 1),
                (ve >>= 1);
          }
      } else if (ee.length > 0 && ue) {
        de && oe && t.texStorage2D(3553, ge, T, ee[0].width, ee[0].height);
        for (let Z = 0, ve = ee.length; Z < ve; Z++)
          (ne = ee[Z]),
            de
              ? t.texSubImage2D(3553, Z, 0, 0, le, ae, ne)
              : t.texImage2D(3553, Z, T, le, ae, ne);
        x.generateMipmaps = !1;
      } else
        de
          ? (oe && t.texStorage2D(3553, ge, T, z.width, z.height),
            t.texSubImage2D(3553, 0, 0, 0, le, ae, z))
          : t.texImage2D(3553, 0, T, le, ae, z);
      C(x, ue) && R(Q),
        (re.__currentVersion = re.version),
        x.onUpdate && x.onUpdate(x);
    }
    w.__version = x.version;
  }
  function ye(w, x, k) {
    if (x.image.length !== 6) return;
    const Q = He(w, x),
      $ = x.source;
    if (
      (t.activeTexture(33984 + k),
      t.bindTexture(34067, w.__webglTexture),
      $.version !== $.__currentVersion || Q === !0)
    ) {
      s.pixelStorei(37440, x.flipY),
        s.pixelStorei(37441, x.premultiplyAlpha),
        s.pixelStorei(3317, x.unpackAlignment),
        s.pixelStorei(37443, 0);
      const re = x.isCompressedTexture || x.image[0].isCompressedTexture,
        xe = x.image[0] && x.image[0].isDataTexture,
        z = [];
      for (let Z = 0; Z < 6; Z++)
        !re && !xe
          ? (z[Z] = S(x.image[Z], !1, !0, c))
          : (z[Z] = xe ? x.image[Z].image : x.image[Z]),
          (z[Z] = It(x, z[Z]));
      const ue = z[0],
        le = A(ue) || a,
        ae = r.convert(x.format, x.encoding),
        T = r.convert(x.type),
        ne = _(x.internalFormat, ae, T, x.encoding),
        ee = a && x.isVideoTexture !== !0,
        de = $.__currentVersion === void 0 || Q === !0;
      let oe = E(x, ue, le);
      V(34067, x, le);
      let ge;
      if (re) {
        ee && de && t.texStorage2D(34067, oe, ne, ue.width, ue.height);
        for (let Z = 0; Z < 6; Z++) {
          ge = z[Z].mipmaps;
          for (let ve = 0; ve < ge.length; ve++) {
            const Re = ge[ve];
            x.format !== Rt
              ? ae !== null
                ? ee
                  ? t.compressedTexSubImage2D(
                      34069 + Z,
                      ve,
                      0,
                      0,
                      Re.width,
                      Re.height,
                      ae,
                      Re.data
                    )
                  : t.compressedTexImage2D(
                      34069 + Z,
                      ve,
                      ne,
                      Re.width,
                      Re.height,
                      0,
                      Re.data
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"
                  )
              : ee
              ? t.texSubImage2D(
                  34069 + Z,
                  ve,
                  0,
                  0,
                  Re.width,
                  Re.height,
                  ae,
                  T,
                  Re.data
                )
              : t.texImage2D(
                  34069 + Z,
                  ve,
                  ne,
                  Re.width,
                  Re.height,
                  0,
                  ae,
                  T,
                  Re.data
                );
          }
        }
      } else {
        (ge = x.mipmaps),
          ee &&
            de &&
            (ge.length > 0 && oe++,
            t.texStorage2D(34067, oe, ne, z[0].width, z[0].height));
        for (let Z = 0; Z < 6; Z++)
          if (xe) {
            ee
              ? t.texSubImage2D(
                  34069 + Z,
                  0,
                  0,
                  0,
                  z[Z].width,
                  z[Z].height,
                  ae,
                  T,
                  z[Z].data
                )
              : t.texImage2D(
                  34069 + Z,
                  0,
                  ne,
                  z[Z].width,
                  z[Z].height,
                  0,
                  ae,
                  T,
                  z[Z].data
                );
            for (let ve = 0; ve < ge.length; ve++) {
              const De = ge[ve].image[Z].image;
              ee
                ? t.texSubImage2D(
                    34069 + Z,
                    ve + 1,
                    0,
                    0,
                    De.width,
                    De.height,
                    ae,
                    T,
                    De.data
                  )
                : t.texImage2D(
                    34069 + Z,
                    ve + 1,
                    ne,
                    De.width,
                    De.height,
                    0,
                    ae,
                    T,
                    De.data
                  );
            }
          } else {
            ee
              ? t.texSubImage2D(34069 + Z, 0, 0, 0, ae, T, z[Z])
              : t.texImage2D(34069 + Z, 0, ne, ae, T, z[Z]);
            for (let ve = 0; ve < ge.length; ve++) {
              const Re = ge[ve];
              ee
                ? t.texSubImage2D(34069 + Z, ve + 1, 0, 0, ae, T, Re.image[Z])
                : t.texImage2D(34069 + Z, ve + 1, ne, ae, T, Re.image[Z]);
            }
          }
      }
      C(x, le) && R(34067),
        ($.__currentVersion = $.version),
        x.onUpdate && x.onUpdate(x);
    }
    w.__version = x.version;
  }
  function se(w, x, k, Q, $) {
    const re = r.convert(k.format, k.encoding),
      xe = r.convert(k.type),
      z = _(k.internalFormat, re, xe, k.encoding);
    n.get(x).__hasExternalTextures ||
      ($ === 32879 || $ === 35866
        ? t.texImage3D($, 0, z, x.width, x.height, x.depth, 0, re, xe, null)
        : t.texImage2D($, 0, z, x.width, x.height, 0, re, xe, null)),
      t.bindFramebuffer(36160, w),
      Fe(x)
        ? l.framebufferTexture2DMultisampleEXT(
            36160,
            Q,
            $,
            n.get(k).__webglTexture,
            0,
            je(x)
          )
        : s.framebufferTexture2D(36160, Q, $, n.get(k).__webglTexture, 0),
      t.bindFramebuffer(36160, null);
  }
  function Ie(w, x, k) {
    if ((s.bindRenderbuffer(36161, w), x.depthBuffer && !x.stencilBuffer)) {
      let Q = 33189;
      if (k || Fe(x)) {
        const $ = x.depthTexture;
        $ &&
          $.isDepthTexture &&
          ($.type === hn ? (Q = 36012) : $.type === un && (Q = 33190));
        const re = je(x);
        Fe(x)
          ? l.renderbufferStorageMultisampleEXT(36161, re, Q, x.width, x.height)
          : s.renderbufferStorageMultisample(36161, re, Q, x.width, x.height);
      } else s.renderbufferStorage(36161, Q, x.width, x.height);
      s.framebufferRenderbuffer(36160, 36096, 36161, w);
    } else if (x.depthBuffer && x.stencilBuffer) {
      const Q = je(x);
      k && Fe(x) === !1
        ? s.renderbufferStorageMultisample(36161, Q, 35056, x.width, x.height)
        : Fe(x)
        ? l.renderbufferStorageMultisampleEXT(
            36161,
            Q,
            35056,
            x.width,
            x.height
          )
        : s.renderbufferStorage(36161, 34041, x.width, x.height),
        s.framebufferRenderbuffer(36160, 33306, 36161, w);
    } else {
      const Q = x.isWebGLMultipleRenderTargets === !0 ? x.texture : [x.texture];
      for (let $ = 0; $ < Q.length; $++) {
        const re = Q[$],
          xe = r.convert(re.format, re.encoding),
          z = r.convert(re.type),
          ue = _(re.internalFormat, xe, z, re.encoding),
          le = je(x);
        k && Fe(x) === !1
          ? s.renderbufferStorageMultisample(36161, le, ue, x.width, x.height)
          : Fe(x)
          ? l.renderbufferStorageMultisampleEXT(
              36161,
              le,
              ue,
              x.width,
              x.height
            )
          : s.renderbufferStorage(36161, ue, x.width, x.height);
      }
    }
    s.bindRenderbuffer(36161, null);
  }
  function Se(w, x) {
    if (x && x.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported"
      );
    if (
      (t.bindFramebuffer(36160, w),
      !(x.depthTexture && x.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture"
      );
    (!n.get(x.depthTexture).__webglTexture ||
      x.depthTexture.image.width !== x.width ||
      x.depthTexture.image.height !== x.height) &&
      ((x.depthTexture.image.width = x.width),
      (x.depthTexture.image.height = x.height),
      (x.depthTexture.needsUpdate = !0)),
      G(x.depthTexture, 0);
    const Q = n.get(x.depthTexture).__webglTexture,
      $ = je(x);
    if (x.depthTexture.format === fn)
      Fe(x)
        ? l.framebufferTexture2DMultisampleEXT(36160, 36096, 3553, Q, 0, $)
        : s.framebufferTexture2D(36160, 36096, 3553, Q, 0);
    else if (x.depthTexture.format === Xn)
      Fe(x)
        ? l.framebufferTexture2DMultisampleEXT(36160, 33306, 3553, Q, 0, $)
        : s.framebufferTexture2D(36160, 33306, 3553, Q, 0);
    else throw new Error("Unknown depthTexture format");
  }
  function fe(w) {
    const x = n.get(w),
      k = w.isWebGLCubeRenderTarget === !0;
    if (w.depthTexture && !x.__autoAllocateDepthBuffer) {
      if (k)
        throw new Error(
          "target.depthTexture not supported in Cube render targets"
        );
      Se(x.__webglFramebuffer, w);
    } else if (k) {
      x.__webglDepthbuffer = [];
      for (let Q = 0; Q < 6; Q++)
        t.bindFramebuffer(36160, x.__webglFramebuffer[Q]),
          (x.__webglDepthbuffer[Q] = s.createRenderbuffer()),
          Ie(x.__webglDepthbuffer[Q], w, !1);
    } else
      t.bindFramebuffer(36160, x.__webglFramebuffer),
        (x.__webglDepthbuffer = s.createRenderbuffer()),
        Ie(x.__webglDepthbuffer, w, !1);
    t.bindFramebuffer(36160, null);
  }
  function qe(w, x, k) {
    const Q = n.get(w);
    x !== void 0 && se(Q.__webglFramebuffer, w, w.texture, 36064, 3553),
      k !== void 0 && fe(w);
  }
  function et(w) {
    const x = w.texture,
      k = n.get(w),
      Q = n.get(x);
    w.addEventListener("dispose", te),
      w.isWebGLMultipleRenderTargets !== !0 &&
        (Q.__webglTexture === void 0 && (Q.__webglTexture = s.createTexture()),
        (Q.__version = x.version),
        o.memory.textures++);
    const $ = w.isWebGLCubeRenderTarget === !0,
      re = w.isWebGLMultipleRenderTargets === !0,
      xe = A(w) || a;
    if ($) {
      k.__webglFramebuffer = [];
      for (let z = 0; z < 6; z++)
        k.__webglFramebuffer[z] = s.createFramebuffer();
    } else {
      if (((k.__webglFramebuffer = s.createFramebuffer()), re))
        if (i.drawBuffers) {
          const z = w.texture;
          for (let ue = 0, le = z.length; ue < le; ue++) {
            const ae = n.get(z[ue]);
            ae.__webglTexture === void 0 &&
              ((ae.__webglTexture = s.createTexture()), o.memory.textures++);
          }
        } else
          console.warn(
            "THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension."
          );
      if (a && w.samples > 0 && Fe(w) === !1) {
        const z = re ? x : [x];
        (k.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (k.__webglColorRenderbuffer = []),
          t.bindFramebuffer(36160, k.__webglMultisampledFramebuffer);
        for (let ue = 0; ue < z.length; ue++) {
          const le = z[ue];
          (k.__webglColorRenderbuffer[ue] = s.createRenderbuffer()),
            s.bindRenderbuffer(36161, k.__webglColorRenderbuffer[ue]);
          const ae = r.convert(le.format, le.encoding),
            T = r.convert(le.type),
            ne = _(le.internalFormat, ae, T, le.encoding),
            ee = je(w);
          s.renderbufferStorageMultisample(36161, ee, ne, w.width, w.height),
            s.framebufferRenderbuffer(
              36160,
              36064 + ue,
              36161,
              k.__webglColorRenderbuffer[ue]
            );
        }
        s.bindRenderbuffer(36161, null),
          w.depthBuffer &&
            ((k.__webglDepthRenderbuffer = s.createRenderbuffer()),
            Ie(k.__webglDepthRenderbuffer, w, !0)),
          t.bindFramebuffer(36160, null);
      }
    }
    if ($) {
      t.bindTexture(34067, Q.__webglTexture), V(34067, x, xe);
      for (let z = 0; z < 6; z++)
        se(k.__webglFramebuffer[z], w, x, 36064, 34069 + z);
      C(x, xe) && R(34067), t.unbindTexture();
    } else if (re) {
      const z = w.texture;
      for (let ue = 0, le = z.length; ue < le; ue++) {
        const ae = z[ue],
          T = n.get(ae);
        t.bindTexture(3553, T.__webglTexture),
          V(3553, ae, xe),
          se(k.__webglFramebuffer, w, ae, 36064 + ue, 3553),
          C(ae, xe) && R(3553);
      }
      t.unbindTexture();
    } else {
      let z = 3553;
      (w.isWebGL3DRenderTarget || w.isWebGLArrayRenderTarget) &&
        (a
          ? (z = w.isWebGL3DRenderTarget ? 32879 : 35866)
          : console.error(
              "THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2."
            )),
        t.bindTexture(z, Q.__webglTexture),
        V(z, x, xe),
        se(k.__webglFramebuffer, w, x, 36064, z),
        C(x, xe) && R(z),
        t.unbindTexture();
    }
    w.depthBuffer && fe(w);
  }
  function rt(w) {
    const x = A(w) || a,
      k = w.isWebGLMultipleRenderTargets === !0 ? w.texture : [w.texture];
    for (let Q = 0, $ = k.length; Q < $; Q++) {
      const re = k[Q];
      if (C(re, x)) {
        const xe = w.isWebGLCubeRenderTarget ? 34067 : 3553,
          z = n.get(re).__webglTexture;
        t.bindTexture(xe, z), R(xe), t.unbindTexture();
      }
    }
  }
  function bt(w) {
    if (a && w.samples > 0 && Fe(w) === !1) {
      const x = w.isWebGLMultipleRenderTargets ? w.texture : [w.texture],
        k = w.width,
        Q = w.height;
      let $ = 16384;
      const re = [],
        xe = w.stencilBuffer ? 33306 : 36096,
        z = n.get(w),
        ue = w.isWebGLMultipleRenderTargets === !0;
      if (ue)
        for (let le = 0; le < x.length; le++)
          t.bindFramebuffer(36160, z.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(36160, 36064 + le, 36161, null),
            t.bindFramebuffer(36160, z.__webglFramebuffer),
            s.framebufferTexture2D(36009, 36064 + le, 3553, null, 0);
      t.bindFramebuffer(36008, z.__webglMultisampledFramebuffer),
        t.bindFramebuffer(36009, z.__webglFramebuffer);
      for (let le = 0; le < x.length; le++) {
        re.push(36064 + le), w.depthBuffer && re.push(xe);
        const ae =
          z.__ignoreDepthValues !== void 0 ? z.__ignoreDepthValues : !1;
        if (
          (ae === !1 &&
            (w.depthBuffer && ($ |= 256), w.stencilBuffer && ($ |= 1024)),
          ue &&
            s.framebufferRenderbuffer(
              36008,
              36064,
              36161,
              z.__webglColorRenderbuffer[le]
            ),
          ae === !0 &&
            (s.invalidateFramebuffer(36008, [xe]),
            s.invalidateFramebuffer(36009, [xe])),
          ue)
        ) {
          const T = n.get(x[le]).__webglTexture;
          s.framebufferTexture2D(36009, 36064, 3553, T, 0);
        }
        s.blitFramebuffer(0, 0, k, Q, 0, 0, k, Q, $, 9728),
          m && s.invalidateFramebuffer(36008, re);
      }
      if ((t.bindFramebuffer(36008, null), t.bindFramebuffer(36009, null), ue))
        for (let le = 0; le < x.length; le++) {
          t.bindFramebuffer(36160, z.__webglMultisampledFramebuffer),
            s.framebufferRenderbuffer(
              36160,
              36064 + le,
              36161,
              z.__webglColorRenderbuffer[le]
            );
          const ae = n.get(x[le]).__webglTexture;
          t.bindFramebuffer(36160, z.__webglFramebuffer),
            s.framebufferTexture2D(36009, 36064 + le, 3553, ae, 0);
        }
      t.bindFramebuffer(36009, z.__webglMultisampledFramebuffer);
    }
  }
  function je(w) {
    return Math.min(h, w.samples);
  }
  function Fe(w) {
    const x = n.get(w);
    return (
      a &&
      w.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      x.__useRenderToTexture !== !1
    );
  }
  function Pt(w) {
    const x = o.render.frame;
    g.get(w) !== x && (g.set(w, x), w.update());
  }
  function It(w, x) {
    const k = w.encoding,
      Q = w.format,
      $ = w.type;
    return (
      w.isCompressedTexture === !0 ||
        w.isVideoTexture === !0 ||
        w.format === Wr ||
        (k !== gn &&
          (k === ze
            ? a === !1
              ? e.has("EXT_sRGB") === !0 && Q === Rt
                ? ((w.format = Wr),
                  (w.minFilter = ut),
                  (w.generateMipmaps = !1))
                : (x = Ua.sRGBToLinear(x))
              : (Q !== Rt || $ !== mn) &&
                console.warn(
                  "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."
                )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture encoding:",
                k
              ))),
      x
    );
  }
  (this.allocateTextureUnit = X),
    (this.resetTextureUnits = W),
    (this.setTexture2D = G),
    (this.setTexture2DArray = J),
    (this.setTexture3D = q),
    (this.setTextureCube = Y),
    (this.rebindTextures = qe),
    (this.setupRenderTarget = et),
    (this.updateRenderTargetMipmap = rt),
    (this.updateMultisampleRenderTarget = bt),
    (this.setupDepthRenderbuffer = fe),
    (this.setupFrameBufferTexture = se),
    (this.useMultisampledRTT = Fe);
}
function pf(s, e, t) {
  const n = t.isWebGL2;
  function i(r, o = null) {
    let a;
    if (r === mn) return 5121;
    if (r === qo) return 32819;
    if (r === Yo) return 32820;
    if (r === Wo) return 5120;
    if (r === jo) return 5122;
    if (r === Pa) return 5123;
    if (r === Xo) return 5124;
    if (r === un) return 5125;
    if (r === hn) return 5126;
    if (r === di)
      return n
        ? 5131
        : ((a = e.get("OES_texture_half_float")),
          a !== null ? a.HALF_FLOAT_OES : null);
    if (r === Qo) return 6406;
    if (r === Rt) return 6408;
    if (r === Zo) return 6409;
    if (r === Ko) return 6410;
    if (r === fn) return 6402;
    if (r === Xn) return 34041;
    if (r === $o) return 6403;
    if (r === Jo)
      return (
        console.warn(
          "THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"
        ),
        6408
      );
    if (r === Wr)
      return (a = e.get("EXT_sRGB")), a !== null ? a.SRGB_ALPHA_EXT : null;
    if (r === el) return 36244;
    if (r === tl) return 33319;
    if (r === nl) return 33320;
    if (r === il) return 36249;
    if (r === ar || r === or || r === lr || r === cr)
      if (o === ze)
        if (((a = e.get("WEBGL_compressed_texture_s3tc_srgb")), a !== null)) {
          if (r === ar) return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (r === or) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (r === lr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (r === cr) return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((a = e.get("WEBGL_compressed_texture_s3tc")), a !== null)) {
        if (r === ar) return a.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (r === or) return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (r === lr) return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (r === cr) return a.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (r === ps || r === ms || r === gs || r === vs)
      if (((a = e.get("WEBGL_compressed_texture_pvrtc")), a !== null)) {
        if (r === ps) return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (r === ms) return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (r === gs) return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (r === vs) return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (r === rl)
      return (
        (a = e.get("WEBGL_compressed_texture_etc1")),
        a !== null ? a.COMPRESSED_RGB_ETC1_WEBGL : null
      );
    if (r === xs || r === _s)
      if (((a = e.get("WEBGL_compressed_texture_etc")), a !== null)) {
        if (r === xs)
          return o === ze ? a.COMPRESSED_SRGB8_ETC2 : a.COMPRESSED_RGB8_ETC2;
        if (r === _s)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : a.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      r === ys ||
      r === Ms ||
      r === bs ||
      r === ws ||
      r === As ||
      r === Ss ||
      r === Es ||
      r === Ts ||
      r === Cs ||
      r === Ls ||
      r === Rs ||
      r === Ds ||
      r === Ps ||
      r === Is
    )
      if (((a = e.get("WEBGL_compressed_texture_astc")), a !== null)) {
        if (r === ys)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : a.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (r === Ms)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : a.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (r === bs)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : a.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (r === ws)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : a.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (r === As)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : a.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (r === Ss)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : a.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (r === Es)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : a.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (r === Ts)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : a.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (r === Cs)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : a.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (r === Ls)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : a.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (r === Rs)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : a.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (r === Ds)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : a.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (r === Ps)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : a.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (r === Is)
          return o === ze
            ? a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : a.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (r === Fs)
      if (((a = e.get("EXT_texture_compression_bptc")), a !== null)) {
        if (r === Fs)
          return o === ze
            ? a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : a.COMPRESSED_RGBA_BPTC_UNORM_EXT;
      } else return null;
    return r === Gn
      ? n
        ? 34042
        : ((a = e.get("WEBGL_depth_texture")),
          a !== null ? a.UNSIGNED_INT_24_8_WEBGL : null)
      : s[r] !== void 0
      ? s[r]
      : null;
  }
  return { convert: i };
}
class mf extends ot {
  constructor(e = []) {
    super(), (this.isArrayCamera = !0), (this.cameras = e);
  }
}
class Wi extends ft {
  constructor() {
    super(), (this.isGroup = !0), (this.type = "Group");
  }
}
const gf = { type: "move" };
class Ur {
  constructor() {
    (this._targetRay = null), (this._grip = null), (this._hand = null);
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Wi()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Wi()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new L()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new L())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Wi()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new L()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new L())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      o = null;
    const a = this._targetRay,
      u = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        o = !0;
        for (const d of e.hand.values()) {
          const p = t.getJointPose(d, n);
          if (c.joints[d.jointName] === void 0) {
            const M = new Wi();
            (M.matrixAutoUpdate = !1),
              (M.visible = !1),
              (c.joints[d.jointName] = M),
              c.add(M);
          }
          const v = c.joints[d.jointName];
          p !== null &&
            (v.matrix.fromArray(p.transform.matrix),
            v.matrix.decompose(v.position, v.rotation, v.scale),
            (v.jointRadius = p.radius)),
            (v.visible = p !== null);
        }
        const f = c.joints["index-finger-tip"],
          h = c.joints["thumb-tip"],
          l = f.position.distanceTo(h.position),
          m = 0.02,
          g = 0.005;
        c.inputState.pinching && l > m + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            l <= m - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        u !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (u.matrix.fromArray(r.transform.matrix),
            u.matrix.decompose(u.position, u.rotation, u.scale),
            r.linearVelocity
              ? ((u.hasLinearVelocity = !0),
                u.linearVelocity.copy(r.linearVelocity))
              : (u.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((u.hasAngularVelocity = !0),
                u.angularVelocity.copy(r.angularVelocity))
              : (u.hasAngularVelocity = !1)));
      a !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (a.matrix.fromArray(i.transform.matrix),
          a.matrix.decompose(a.position, a.rotation, a.scale),
          i.linearVelocity
            ? ((a.hasLinearVelocity = !0),
              a.linearVelocity.copy(i.linearVelocity))
            : (a.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((a.hasAngularVelocity = !0),
              a.angularVelocity.copy(i.angularVelocity))
            : (a.hasAngularVelocity = !1),
          this.dispatchEvent(gf)));
    }
    return (
      a !== null && (a.visible = i !== null),
      u !== null && (u.visible = r !== null),
      c !== null && (c.visible = o !== null),
      this
    );
  }
}
class vf extends dt {
  constructor(e, t, n, i, r, o, a, u, c, f) {
    if (((f = f !== void 0 ? f : fn), f !== fn && f !== Xn))
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat"
      );
    n === void 0 && f === fn && (n = un),
      n === void 0 && f === Xn && (n = Gn),
      super(null, i, r, o, a, u, f, n, c),
      (this.isDepthTexture = !0),
      (this.image = { width: e, height: t }),
      (this.magFilter = a !== void 0 ? a : tt),
      (this.minFilter = u !== void 0 ? u : tt),
      (this.flipY = !1),
      (this.generateMipmaps = !1);
  }
}
class xf extends Qn {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      o = null,
      a = "local-floor",
      u = null,
      c = null,
      f = null,
      h = null,
      l = null,
      m = null;
    const g = t.getContextAttributes();
    let d = null,
      p = null;
    const v = [],
      M = [],
      S = new ot();
    S.layers.enable(1), (S.viewport = new Be());
    const A = new ot();
    A.layers.enable(2), (A.viewport = new Be());
    const b = [S, A],
      C = new mf();
    C.layers.enable(1), C.layers.enable(2);
    let R = null,
      _ = null;
    (this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (N) {
        let G = v[N];
        return (
          G === void 0 && ((G = new Ur()), (v[N] = G)), G.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (N) {
        let G = v[N];
        return G === void 0 && ((G = new Ur()), (v[N] = G)), G.getGripSpace();
      }),
      (this.getHand = function (N) {
        let G = v[N];
        return G === void 0 && ((G = new Ur()), (v[N] = G)), G.getHandSpace();
      });
    function E(N) {
      const G = M.indexOf(N.inputSource);
      if (G === -1) return;
      const J = v[G];
      J !== void 0 && J.dispatchEvent({ type: N.type, data: N.inputSource });
    }
    function F() {
      i.removeEventListener("select", E),
        i.removeEventListener("selectstart", E),
        i.removeEventListener("selectend", E),
        i.removeEventListener("squeeze", E),
        i.removeEventListener("squeezestart", E),
        i.removeEventListener("squeezeend", E),
        i.removeEventListener("end", F),
        i.removeEventListener("inputsourceschange", B);
      for (let N = 0; N < v.length; N++) {
        const G = M[N];
        G !== null && ((M[N] = null), v[N].disconnect(G));
      }
      (R = null),
        (_ = null),
        e.setRenderTarget(d),
        (l = null),
        (h = null),
        (f = null),
        (i = null),
        (p = null),
        X.stop(),
        (n.isPresenting = !1),
        n.dispatchEvent({ type: "sessionend" });
    }
    (this.setFramebufferScaleFactor = function (N) {
      (r = N),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting."
          );
    }),
      (this.setReferenceSpaceType = function (N) {
        (a = N),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting."
            );
      }),
      (this.getReferenceSpace = function () {
        return u || o;
      }),
      (this.setReferenceSpace = function (N) {
        u = N;
      }),
      (this.getBaseLayer = function () {
        return h !== null ? h : l;
      }),
      (this.getBinding = function () {
        return f;
      }),
      (this.getFrame = function () {
        return m;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (N) {
        if (((i = N), i !== null)) {
          if (
            ((d = e.getRenderTarget()),
            i.addEventListener("select", E),
            i.addEventListener("selectstart", E),
            i.addEventListener("selectend", E),
            i.addEventListener("squeeze", E),
            i.addEventListener("squeezestart", E),
            i.addEventListener("squeezeend", E),
            i.addEventListener("end", F),
            i.addEventListener("inputsourceschange", B),
            g.xrCompatible !== !0 && (await t.makeXRCompatible()),
            i.renderState.layers === void 0 || e.capabilities.isWebGL2 === !1)
          ) {
            const G = {
              antialias: i.renderState.layers === void 0 ? g.antialias : !0,
              alpha: g.alpha,
              depth: g.depth,
              stencil: g.stencil,
              framebufferScaleFactor: r,
            };
            (l = new XRWebGLLayer(i, t, G)),
              i.updateRenderState({ baseLayer: l }),
              (p = new Mt(l.framebufferWidth, l.framebufferHeight, {
                format: Rt,
                type: mn,
                encoding: e.outputEncoding,
              }));
          } else {
            let G = null,
              J = null,
              q = null;
            g.depth &&
              ((q = g.stencil ? 35056 : 33190),
              (G = g.stencil ? Xn : fn),
              (J = g.stencil ? Gn : un));
            const Y = { colorFormat: 32856, depthFormat: q, scaleFactor: r };
            (f = new XRWebGLBinding(i, t)),
              (h = f.createProjectionLayer(Y)),
              i.updateRenderState({ layers: [h] }),
              (p = new Mt(h.textureWidth, h.textureHeight, {
                format: Rt,
                type: mn,
                depthTexture: new vf(
                  h.textureWidth,
                  h.textureHeight,
                  J,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  G
                ),
                stencilBuffer: g.stencil,
                encoding: e.outputEncoding,
                samples: g.antialias ? 4 : 0,
              }));
            const ce = e.properties.get(p);
            ce.__ignoreDepthValues = h.ignoreDepthValues;
          }
          (p.isXRRenderTarget = !0),
            this.setFoveation(1),
            (u = null),
            (o = await i.requestReferenceSpace(a)),
            X.setContext(i),
            X.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" });
        }
      });
    function B(N) {
      for (let G = 0; G < N.removed.length; G++) {
        const J = N.removed[G],
          q = M.indexOf(J);
        q >= 0 &&
          ((M[q] = null),
          v[q].dispatchEvent({ type: "disconnected", data: J }));
      }
      for (let G = 0; G < N.added.length; G++) {
        const J = N.added[G];
        let q = M.indexOf(J);
        if (q === -1) {
          for (let ce = 0; ce < v.length; ce++)
            if (ce >= M.length) {
              M.push(J), (q = ce);
              break;
            } else if (M[ce] === null) {
              (M[ce] = J), (q = ce);
              break;
            }
          if (q === -1) break;
        }
        const Y = v[q];
        Y && Y.dispatchEvent({ type: "connected", data: J });
      }
    }
    const te = new L(),
      K = new L();
    function P(N, G, J) {
      te.setFromMatrixPosition(G.matrixWorld),
        K.setFromMatrixPosition(J.matrixWorld);
      const q = te.distanceTo(K),
        Y = G.projectionMatrix.elements,
        ce = J.projectionMatrix.elements,
        he = Y[14] / (Y[10] - 1),
        V = Y[14] / (Y[10] + 1),
        He = (Y[9] + 1) / Y[5],
        Ae = (Y[9] - 1) / Y[5],
        ye = (Y[8] - 1) / Y[0],
        se = (ce[8] + 1) / ce[0],
        Ie = he * ye,
        Se = he * se,
        fe = q / (-ye + se),
        qe = fe * -ye;
      G.matrixWorld.decompose(N.position, N.quaternion, N.scale),
        N.translateX(qe),
        N.translateZ(fe),
        N.matrixWorld.compose(N.position, N.quaternion, N.scale),
        N.matrixWorldInverse.copy(N.matrixWorld).invert();
      const et = he + fe,
        rt = V + fe,
        bt = Ie - qe,
        je = Se + (q - qe),
        Fe = ((He * V) / rt) * et,
        Pt = ((Ae * V) / rt) * et;
      N.projectionMatrix.makePerspective(bt, je, Fe, Pt, et, rt);
    }
    function j(N, G) {
      G === null
        ? N.matrixWorld.copy(N.matrix)
        : N.matrixWorld.multiplyMatrices(G.matrixWorld, N.matrix),
        N.matrixWorldInverse.copy(N.matrixWorld).invert();
    }
    (this.updateCamera = function (N) {
      if (i === null) return;
      (C.near = A.near = S.near = N.near),
        (C.far = A.far = S.far = N.far),
        (R !== C.near || _ !== C.far) &&
          (i.updateRenderState({ depthNear: C.near, depthFar: C.far }),
          (R = C.near),
          (_ = C.far));
      const G = N.parent,
        J = C.cameras;
      j(C, G);
      for (let Y = 0; Y < J.length; Y++) j(J[Y], G);
      C.matrixWorld.decompose(C.position, C.quaternion, C.scale),
        N.position.copy(C.position),
        N.quaternion.copy(C.quaternion),
        N.scale.copy(C.scale),
        N.matrix.copy(C.matrix),
        N.matrixWorld.copy(C.matrixWorld);
      const q = N.children;
      for (let Y = 0, ce = q.length; Y < ce; Y++) q[Y].updateMatrixWorld(!0);
      J.length === 2 ? P(C, S, A) : C.projectionMatrix.copy(S.projectionMatrix);
    }),
      (this.getCamera = function () {
        return C;
      }),
      (this.getFoveation = function () {
        if (h !== null) return h.fixedFoveation;
        if (l !== null) return l.fixedFoveation;
      }),
      (this.setFoveation = function (N) {
        h !== null && (h.fixedFoveation = N),
          l !== null && l.fixedFoveation !== void 0 && (l.fixedFoveation = N);
      });
    let O = null;
    function W(N, G) {
      if (((c = G.getViewerPose(u || o)), (m = G), c !== null)) {
        const J = c.views;
        l !== null &&
          (e.setRenderTargetFramebuffer(p, l.framebuffer),
          e.setRenderTarget(p));
        let q = !1;
        J.length !== C.cameras.length && ((C.cameras.length = 0), (q = !0));
        for (let Y = 0; Y < J.length; Y++) {
          const ce = J[Y];
          let he = null;
          if (l !== null) he = l.getViewport(ce);
          else {
            const He = f.getViewSubImage(h, ce);
            (he = He.viewport),
              Y === 0 &&
                (e.setRenderTargetTextures(
                  p,
                  He.colorTexture,
                  h.ignoreDepthValues ? void 0 : He.depthStencilTexture
                ),
                e.setRenderTarget(p));
          }
          let V = b[Y];
          V === void 0 &&
            ((V = new ot()),
            V.layers.enable(Y),
            (V.viewport = new Be()),
            (b[Y] = V)),
            V.matrix.fromArray(ce.transform.matrix),
            V.projectionMatrix.fromArray(ce.projectionMatrix),
            V.viewport.set(he.x, he.y, he.width, he.height),
            Y === 0 && C.matrix.copy(V.matrix),
            q === !0 && C.cameras.push(V);
        }
      }
      for (let J = 0; J < v.length; J++) {
        const q = M[J],
          Y = v[J];
        q !== null && Y !== void 0 && Y.update(q, G, u || o);
      }
      O && O(N, G), (m = null);
    }
    const X = new Wa();
    X.setAnimationLoop(W),
      (this.setAnimationLoop = function (N) {
        O = N;
      }),
      (this.dispose = function () {});
  }
}
function _f(s, e) {
  function t(d, p) {
    d.fogColor.value.copy(p.color),
      p.isFog
        ? ((d.fogNear.value = p.near), (d.fogFar.value = p.far))
        : p.isFogExp2 && (d.fogDensity.value = p.density);
  }
  function n(d, p, v, M, S) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial
      ? i(d, p)
      : p.isMeshToonMaterial
      ? (i(d, p), f(d, p))
      : p.isMeshPhongMaterial
      ? (i(d, p), c(d, p))
      : p.isMeshStandardMaterial
      ? (i(d, p), h(d, p), p.isMeshPhysicalMaterial && l(d, p, S))
      : p.isMeshMatcapMaterial
      ? (i(d, p), m(d, p))
      : p.isMeshDepthMaterial
      ? i(d, p)
      : p.isMeshDistanceMaterial
      ? (i(d, p), g(d, p))
      : p.isMeshNormalMaterial
      ? i(d, p)
      : p.isLineBasicMaterial
      ? (r(d, p), p.isLineDashedMaterial && o(d, p))
      : p.isPointsMaterial
      ? a(d, p, v, M)
      : p.isSpriteMaterial
      ? u(d, p)
      : p.isShadowMaterial
      ? (d.color.value.copy(p.color), (d.opacity.value = p.opacity))
      : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function i(d, p) {
    (d.opacity.value = p.opacity),
      p.color && d.diffuse.value.copy(p.color),
      p.emissive &&
        d.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && (d.map.value = p.map),
      p.alphaMap && (d.alphaMap.value = p.alphaMap),
      p.bumpMap &&
        ((d.bumpMap.value = p.bumpMap),
        (d.bumpScale.value = p.bumpScale),
        p.side === yt && (d.bumpScale.value *= -1)),
      p.displacementMap &&
        ((d.displacementMap.value = p.displacementMap),
        (d.displacementScale.value = p.displacementScale),
        (d.displacementBias.value = p.displacementBias)),
      p.emissiveMap && (d.emissiveMap.value = p.emissiveMap),
      p.normalMap &&
        ((d.normalMap.value = p.normalMap),
        d.normalScale.value.copy(p.normalScale),
        p.side === yt && d.normalScale.value.negate()),
      p.specularMap && (d.specularMap.value = p.specularMap),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    const v = e.get(p).envMap;
    if (
      (v &&
        ((d.envMap.value = v),
        (d.flipEnvMap.value =
          v.isCubeTexture && v.isRenderTargetTexture === !1 ? -1 : 1),
        (d.reflectivity.value = p.reflectivity),
        (d.ior.value = p.ior),
        (d.refractionRatio.value = p.refractionRatio)),
      p.lightMap)
    ) {
      d.lightMap.value = p.lightMap;
      const A = s.physicallyCorrectLights !== !0 ? Math.PI : 1;
      d.lightMapIntensity.value = p.lightMapIntensity * A;
    }
    p.aoMap &&
      ((d.aoMap.value = p.aoMap), (d.aoMapIntensity.value = p.aoMapIntensity));
    let M;
    p.map
      ? (M = p.map)
      : p.specularMap
      ? (M = p.specularMap)
      : p.displacementMap
      ? (M = p.displacementMap)
      : p.normalMap
      ? (M = p.normalMap)
      : p.bumpMap
      ? (M = p.bumpMap)
      : p.roughnessMap
      ? (M = p.roughnessMap)
      : p.metalnessMap
      ? (M = p.metalnessMap)
      : p.alphaMap
      ? (M = p.alphaMap)
      : p.emissiveMap
      ? (M = p.emissiveMap)
      : p.clearcoatMap
      ? (M = p.clearcoatMap)
      : p.clearcoatNormalMap
      ? (M = p.clearcoatNormalMap)
      : p.clearcoatRoughnessMap
      ? (M = p.clearcoatRoughnessMap)
      : p.iridescenceMap
      ? (M = p.iridescenceMap)
      : p.iridescenceThicknessMap
      ? (M = p.iridescenceThicknessMap)
      : p.specularIntensityMap
      ? (M = p.specularIntensityMap)
      : p.specularColorMap
      ? (M = p.specularColorMap)
      : p.transmissionMap
      ? (M = p.transmissionMap)
      : p.thicknessMap
      ? (M = p.thicknessMap)
      : p.sheenColorMap
      ? (M = p.sheenColorMap)
      : p.sheenRoughnessMap && (M = p.sheenRoughnessMap),
      M !== void 0 &&
        (M.isWebGLRenderTarget && (M = M.texture),
        M.matrixAutoUpdate === !0 && M.updateMatrix(),
        d.uvTransform.value.copy(M.matrix));
    let S;
    p.aoMap ? (S = p.aoMap) : p.lightMap && (S = p.lightMap),
      S !== void 0 &&
        (S.isWebGLRenderTarget && (S = S.texture),
        S.matrixAutoUpdate === !0 && S.updateMatrix(),
        d.uv2Transform.value.copy(S.matrix));
  }
  function r(d, p) {
    d.diffuse.value.copy(p.color), (d.opacity.value = p.opacity);
  }
  function o(d, p) {
    (d.dashSize.value = p.dashSize),
      (d.totalSize.value = p.dashSize + p.gapSize),
      (d.scale.value = p.scale);
  }
  function a(d, p, v, M) {
    d.diffuse.value.copy(p.color),
      (d.opacity.value = p.opacity),
      (d.size.value = p.size * v),
      (d.scale.value = M * 0.5),
      p.map && (d.map.value = p.map),
      p.alphaMap && (d.alphaMap.value = p.alphaMap),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    let S;
    p.map ? (S = p.map) : p.alphaMap && (S = p.alphaMap),
      S !== void 0 &&
        (S.matrixAutoUpdate === !0 && S.updateMatrix(),
        d.uvTransform.value.copy(S.matrix));
  }
  function u(d, p) {
    d.diffuse.value.copy(p.color),
      (d.opacity.value = p.opacity),
      (d.rotation.value = p.rotation),
      p.map && (d.map.value = p.map),
      p.alphaMap && (d.alphaMap.value = p.alphaMap),
      p.alphaTest > 0 && (d.alphaTest.value = p.alphaTest);
    let v;
    p.map ? (v = p.map) : p.alphaMap && (v = p.alphaMap),
      v !== void 0 &&
        (v.matrixAutoUpdate === !0 && v.updateMatrix(),
        d.uvTransform.value.copy(v.matrix));
  }
  function c(d, p) {
    d.specular.value.copy(p.specular),
      (d.shininess.value = Math.max(p.shininess, 1e-4));
  }
  function f(d, p) {
    p.gradientMap && (d.gradientMap.value = p.gradientMap);
  }
  function h(d, p) {
    (d.roughness.value = p.roughness),
      (d.metalness.value = p.metalness),
      p.roughnessMap && (d.roughnessMap.value = p.roughnessMap),
      p.metalnessMap && (d.metalnessMap.value = p.metalnessMap),
      e.get(p).envMap && (d.envMapIntensity.value = p.envMapIntensity);
  }
  function l(d, p, v) {
    (d.ior.value = p.ior),
      p.sheen > 0 &&
        (d.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (d.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap && (d.sheenColorMap.value = p.sheenColorMap),
        p.sheenRoughnessMap &&
          (d.sheenRoughnessMap.value = p.sheenRoughnessMap)),
      p.clearcoat > 0 &&
        ((d.clearcoat.value = p.clearcoat),
        (d.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap && (d.clearcoatMap.value = p.clearcoatMap),
        p.clearcoatRoughnessMap &&
          (d.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
        p.clearcoatNormalMap &&
          (d.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          (d.clearcoatNormalMap.value = p.clearcoatNormalMap),
          p.side === yt && d.clearcoatNormalScale.value.negate())),
      p.iridescence > 0 &&
        ((d.iridescence.value = p.iridescence),
        (d.iridescenceIOR.value = p.iridescenceIOR),
        (d.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (d.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap && (d.iridescenceMap.value = p.iridescenceMap),
        p.iridescenceThicknessMap &&
          (d.iridescenceThicknessMap.value = p.iridescenceThicknessMap)),
      p.transmission > 0 &&
        ((d.transmission.value = p.transmission),
        (d.transmissionSamplerMap.value = v.texture),
        d.transmissionSamplerSize.value.set(v.width, v.height),
        p.transmissionMap && (d.transmissionMap.value = p.transmissionMap),
        (d.thickness.value = p.thickness),
        p.thicknessMap && (d.thicknessMap.value = p.thicknessMap),
        (d.attenuationDistance.value = p.attenuationDistance),
        d.attenuationColor.value.copy(p.attenuationColor)),
      (d.specularIntensity.value = p.specularIntensity),
      d.specularColor.value.copy(p.specularColor),
      p.specularIntensityMap &&
        (d.specularIntensityMap.value = p.specularIntensityMap),
      p.specularColorMap && (d.specularColorMap.value = p.specularColorMap);
  }
  function m(d, p) {
    p.matcap && (d.matcap.value = p.matcap);
  }
  function g(d, p) {
    d.referencePosition.value.copy(p.referencePosition),
      (d.nearDistance.value = p.nearDistance),
      (d.farDistance.value = p.farDistance);
  }
  return { refreshFogUniforms: t, refreshMaterialUniforms: n };
}
function yf() {
  const s = fi("canvas");
  return (s.style.display = "block"), s;
}
function Ja(s = {}) {
  this.isWebGLRenderer = !0;
  const e = s.canvas !== void 0 ? s.canvas : yf(),
    t = s.context !== void 0 ? s.context : null,
    n = s.depth !== void 0 ? s.depth : !0,
    i = s.stencil !== void 0 ? s.stencil : !0,
    r = s.antialias !== void 0 ? s.antialias : !1,
    o = s.premultipliedAlpha !== void 0 ? s.premultipliedAlpha : !0,
    a = s.preserveDrawingBuffer !== void 0 ? s.preserveDrawingBuffer : !1,
    u = s.powerPreference !== void 0 ? s.powerPreference : "default",
    c =
      s.failIfMajorPerformanceCaveat !== void 0
        ? s.failIfMajorPerformanceCaveat
        : !1;
  let f;
  t !== null
    ? (f = t.getContextAttributes().alpha)
    : (f = s.alpha !== void 0 ? s.alpha : !1);
  let h = null,
    l = null;
  const m = [],
    g = [];
  (this.domElement = e),
    (this.debug = { checkShaderErrors: !0 }),
    (this.autoClear = !0),
    (this.autoClearColor = !0),
    (this.autoClearDepth = !0),
    (this.autoClearStencil = !0),
    (this.sortObjects = !0),
    (this.clippingPlanes = []),
    (this.localClippingEnabled = !1),
    (this.outputEncoding = gn),
    (this.physicallyCorrectLights = !1),
    (this.toneMapping = Vt),
    (this.toneMappingExposure = 1),
    Object.defineProperties(this, {
      gammaFactor: {
        get: function () {
          return (
            console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),
            2
          );
        },
        set: function () {
          console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.");
        },
      },
    });
  const d = this;
  let p = !1,
    v = 0,
    M = 0,
    S = null,
    A = -1,
    b = null;
  const C = new Be(),
    R = new Be();
  let _ = null,
    E = e.width,
    F = e.height,
    B = 1,
    te = null,
    K = null;
  const P = new Be(0, 0, E, F),
    j = new Be(0, 0, E, F);
  let O = !1;
  const W = new Zr();
  let X = !1,
    N = !1,
    G = null;
  const J = new ke(),
    q = new me(),
    Y = new L(),
    ce = {
      background: null,
      fog: null,
      environment: null,
      overrideMaterial: null,
      isScene: !0,
    };
  function he() {
    return S === null ? B : 1;
  }
  let V = t;
  function He(y, D) {
    for (let U = 0; U < y.length; U++) {
      const I = y[U],
        H = e.getContext(I, D);
      if (H !== null) return H;
    }
    return null;
  }
  try {
    const y = {
      alpha: !0,
      depth: n,
      stencil: i,
      antialias: r,
      premultipliedAlpha: o,
      preserveDrawingBuffer: a,
      powerPreference: u,
      failIfMajorPerformanceCaveat: c,
    };
    if (
      ("setAttribute" in e && e.setAttribute("data-engine", `three.js r${Yr}`),
      e.addEventListener("webglcontextlost", T, !1),
      e.addEventListener("webglcontextrestored", ne, !1),
      e.addEventListener("webglcontextcreationerror", ee, !1),
      V === null)
    ) {
      const D = ["webgl2", "webgl", "experimental-webgl"];
      if ((d.isWebGL1Renderer === !0 && D.shift(), (V = He(D, y)), V === null))
        throw He(D)
          ? new Error(
              "Error creating WebGL context with your selected attributes."
            )
          : new Error("Error creating WebGL context.");
    }
    V.getShaderPrecisionFormat === void 0 &&
      (V.getShaderPrecisionFormat = function () {
        return { rangeMin: 1, rangeMax: 1, precision: 1 };
      });
  } catch (y) {
    throw (console.error("THREE.WebGLRenderer: " + y.message), y);
  }
  let Ae,
    ye,
    se,
    Ie,
    Se,
    fe,
    qe,
    et,
    rt,
    bt,
    je,
    Fe,
    Pt,
    It,
    w,
    x,
    k,
    Q,
    $,
    re,
    xe,
    z,
    ue;
  function le() {
    (Ae = new Rh(V)),
      (ye = new Ah(V, Ae, s)),
      Ae.init(ye),
      (z = new pf(V, Ae, ye)),
      (se = new df(V, Ae, ye)),
      (Ie = new Ih()),
      (Se = new Zd()),
      (fe = new ff(V, Ae, se, Se, ye, z, Ie)),
      (qe = new Eh(d)),
      (et = new Lh(d)),
      (rt = new jl(V, ye)),
      (ue = new bh(V, Ae, rt, ye)),
      (bt = new Dh(V, rt, Ie, ue)),
      (je = new zh(V, bt, rt, Ie)),
      ($ = new Uh(V, ye, fe)),
      (x = new Sh(Se)),
      (Fe = new Jd(d, qe, et, Ae, ye, ue, x)),
      (Pt = new _f(d, Se)),
      (It = new $d()),
      (w = new af(Ae, ye)),
      (Q = new Mh(d, qe, se, je, f, o)),
      (k = new hf(d, je, ye)),
      (re = new wh(V, Ae, Ie, ye)),
      (xe = new Ph(V, Ae, Ie, ye)),
      (Ie.programs = Fe.programs),
      (d.capabilities = ye),
      (d.extensions = Ae),
      (d.properties = Se),
      (d.renderLists = It),
      (d.shadowMap = k),
      (d.state = se),
      (d.info = Ie);
  }
  le();
  const ae = new xf(d, V);
  (this.xr = ae),
    (this.getContext = function () {
      return V;
    }),
    (this.getContextAttributes = function () {
      return V.getContextAttributes();
    }),
    (this.forceContextLoss = function () {
      const y = Ae.get("WEBGL_lose_context");
      y && y.loseContext();
    }),
    (this.forceContextRestore = function () {
      const y = Ae.get("WEBGL_lose_context");
      y && y.restoreContext();
    }),
    (this.getPixelRatio = function () {
      return B;
    }),
    (this.setPixelRatio = function (y) {
      y !== void 0 && ((B = y), this.setSize(E, F, !1));
    }),
    (this.getSize = function (y) {
      return y.set(E, F);
    }),
    (this.setSize = function (y, D, U) {
      if (ae.isPresenting) {
        console.warn(
          "THREE.WebGLRenderer: Can't change size while VR device is presenting."
        );
        return;
      }
      (E = y),
        (F = D),
        (e.width = Math.floor(y * B)),
        (e.height = Math.floor(D * B)),
        U !== !1 && ((e.style.width = y + "px"), (e.style.height = D + "px")),
        this.setViewport(0, 0, y, D);
    }),
    (this.getDrawingBufferSize = function (y) {
      return y.set(E * B, F * B).floor();
    }),
    (this.setDrawingBufferSize = function (y, D, U) {
      (E = y),
        (F = D),
        (B = U),
        (e.width = Math.floor(y * U)),
        (e.height = Math.floor(D * U)),
        this.setViewport(0, 0, y, D);
    }),
    (this.getCurrentViewport = function (y) {
      return y.copy(C);
    }),
    (this.getViewport = function (y) {
      return y.copy(P);
    }),
    (this.setViewport = function (y, D, U, I) {
      y.isVector4 ? P.set(y.x, y.y, y.z, y.w) : P.set(y, D, U, I),
        se.viewport(C.copy(P).multiplyScalar(B).floor());
    }),
    (this.getScissor = function (y) {
      return y.copy(j);
    }),
    (this.setScissor = function (y, D, U, I) {
      y.isVector4 ? j.set(y.x, y.y, y.z, y.w) : j.set(y, D, U, I),
        se.scissor(R.copy(j).multiplyScalar(B).floor());
    }),
    (this.getScissorTest = function () {
      return O;
    }),
    (this.setScissorTest = function (y) {
      se.setScissorTest((O = y));
    }),
    (this.setOpaqueSort = function (y) {
      te = y;
    }),
    (this.setTransparentSort = function (y) {
      K = y;
    }),
    (this.getClearColor = function (y) {
      return y.copy(Q.getClearColor());
    }),
    (this.setClearColor = function () {
      Q.setClearColor.apply(Q, arguments);
    }),
    (this.getClearAlpha = function () {
      return Q.getClearAlpha();
    }),
    (this.setClearAlpha = function () {
      Q.setClearAlpha.apply(Q, arguments);
    }),
    (this.clear = function (y = !0, D = !0, U = !0) {
      let I = 0;
      y && (I |= 16384), D && (I |= 256), U && (I |= 1024), V.clear(I);
    }),
    (this.clearColor = function () {
      this.clear(!0, !1, !1);
    }),
    (this.clearDepth = function () {
      this.clear(!1, !0, !1);
    }),
    (this.clearStencil = function () {
      this.clear(!1, !1, !0);
    }),
    (this.dispose = function () {
      e.removeEventListener("webglcontextlost", T, !1),
        e.removeEventListener("webglcontextrestored", ne, !1),
        e.removeEventListener("webglcontextcreationerror", ee, !1),
        It.dispose(),
        w.dispose(),
        Se.dispose(),
        qe.dispose(),
        et.dispose(),
        je.dispose(),
        ue.dispose(),
        Fe.dispose(),
        ae.dispose(),
        ae.removeEventListener("sessionstart", Re),
        ae.removeEventListener("sessionend", De),
        G && (G.dispose(), (G = null)),
        Je.stop();
    });
  function T(y) {
    y.preventDefault(),
      console.log("THREE.WebGLRenderer: Context Lost."),
      (p = !0);
  }
  function ne() {
    console.log("THREE.WebGLRenderer: Context Restored."), (p = !1);
    const y = Ie.autoReset,
      D = k.enabled,
      U = k.autoUpdate,
      I = k.needsUpdate,
      H = k.type;
    le(),
      (Ie.autoReset = y),
      (k.enabled = D),
      (k.autoUpdate = U),
      (k.needsUpdate = I),
      (k.type = H);
  }
  function ee(y) {
    console.error(
      "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
      y.statusMessage
    );
  }
  function de(y) {
    const D = y.target;
    D.removeEventListener("dispose", de), oe(D);
  }
  function oe(y) {
    ge(y), Se.remove(y);
  }
  function ge(y) {
    const D = Se.get(y).programs;
    D !== void 0 &&
      (D.forEach(function (U) {
        Fe.releaseProgram(U);
      }),
      y.isShaderMaterial && Fe.releaseShaderCache(y));
  }
  (this.renderBufferDirect = function (y, D, U, I, H, pe) {
    D === null && (D = ce);
    const _e = H.isMesh && H.matrixWorld.determinant() < 0,
      be = lo(y, D, U, I, H);
    se.setMaterial(I, _e);
    let Me = U.index;
    const Pe = U.attributes.position;
    if (Me === null) {
      if (Pe === void 0 || Pe.count === 0) return;
    } else if (Me.count === 0) return;
    let Ee = 1;
    I.wireframe === !0 && ((Me = bt.getWireframeAttribute(U)), (Ee = 2)),
      ue.setup(H, I, be, U, Me);
    let Te,
      Ue = re;
    Me !== null && ((Te = rt.get(Me)), (Ue = xe), Ue.setIndex(Te));
    const tn = Me !== null ? Me.count : Pe.count,
      xn = U.drawRange.start * Ee,
      _n = U.drawRange.count * Ee,
      At = pe !== null ? pe.start * Ee : 0,
      Le = pe !== null ? pe.count * Ee : 1 / 0,
      yn = Math.max(xn, At),
      Ne = Math.min(tn, xn + _n, At + Le) - 1,
      St = Math.max(0, Ne - yn + 1);
    if (St !== 0) {
      if (H.isMesh)
        I.wireframe === !0
          ? (se.setLineWidth(I.wireframeLinewidth * he()), Ue.setMode(1))
          : Ue.setMode(4);
      else if (H.isLine) {
        let Wt = I.linewidth;
        Wt === void 0 && (Wt = 1),
          se.setLineWidth(Wt * he()),
          H.isLineSegments
            ? Ue.setMode(1)
            : H.isLineLoop
            ? Ue.setMode(2)
            : Ue.setMode(3);
      } else H.isPoints ? Ue.setMode(0) : H.isSprite && Ue.setMode(4);
      if (H.isInstancedMesh) Ue.renderInstances(yn, St, H.count);
      else if (U.isInstancedBufferGeometry) {
        const Wt = Math.min(U.instanceCount, U._maxInstanceCount);
        Ue.renderInstances(yn, St, Wt);
      } else Ue.render(yn, St);
    }
  }),
    (this.compile = function (y, D) {
      (l = w.get(y)),
        l.init(),
        g.push(l),
        y.traverseVisible(function (U) {
          U.isLight &&
            U.layers.test(D.layers) &&
            (l.pushLight(U), U.castShadow && l.pushShadow(U));
        }),
        l.setupLights(d.physicallyCorrectLights),
        y.traverse(function (U) {
          const I = U.material;
          if (I)
            if (Array.isArray(I))
              for (let H = 0; H < I.length; H++) {
                const pe = I[H];
                ir(pe, y, U);
              }
            else ir(I, y, U);
        }),
        g.pop(),
        (l = null);
    });
  let Z = null;
  function ve(y) {
    Z && Z(y);
  }
  function Re() {
    Je.stop();
  }
  function De() {
    Je.start();
  }
  const Je = new Wa();
  Je.setAnimationLoop(ve),
    typeof self != "undefined" && Je.setContext(self),
    (this.setAnimationLoop = function (y) {
      (Z = y), ae.setAnimationLoop(y), y === null ? Je.stop() : Je.start();
    }),
    ae.addEventListener("sessionstart", Re),
    ae.addEventListener("sessionend", De),
    (this.render = function (y, D) {
      if (D !== void 0 && D.isCamera !== !0) {
        console.error(
          "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera."
        );
        return;
      }
      if (p === !0) return;
      y.autoUpdate === !0 && y.updateMatrixWorld(),
        D.parent === null && D.updateMatrixWorld(),
        ae.enabled === !0 &&
          ae.isPresenting === !0 &&
          (ae.cameraAutoUpdate === !0 && ae.updateCamera(D),
          (D = ae.getCamera())),
        y.isScene === !0 && y.onBeforeRender(d, y, D, S),
        (l = w.get(y, g.length)),
        l.init(),
        g.push(l),
        J.multiplyMatrices(D.projectionMatrix, D.matrixWorldInverse),
        W.setFromProjectionMatrix(J),
        (N = this.localClippingEnabled),
        (X = x.init(this.clippingPlanes, N, D)),
        (h = It.get(y, m.length)),
        h.init(),
        m.push(h),
        wt(y, D, 0, d.sortObjects),
        h.finish(),
        d.sortObjects === !0 && h.sort(te, K),
        X === !0 && x.beginShadows();
      const U = l.state.shadowsArray;
      if (
        (k.render(U, y, D),
        X === !0 && x.endShadows(),
        this.info.autoReset === !0 && this.info.reset(),
        Q.render(h, y),
        l.setupLights(d.physicallyCorrectLights),
        D.isArrayCamera)
      ) {
        const I = D.cameras;
        for (let H = 0, pe = I.length; H < pe; H++) {
          const _e = I[H];
          ss(h, y, _e, _e.viewport);
        }
      } else ss(h, y, D);
      S !== null &&
        (fe.updateMultisampleRenderTarget(S), fe.updateRenderTargetMipmap(S)),
        y.isScene === !0 && y.onAfterRender(d, y, D),
        ue.resetDefaultState(),
        (A = -1),
        (b = null),
        g.pop(),
        g.length > 0 ? (l = g[g.length - 1]) : (l = null),
        m.pop(),
        m.length > 0 ? (h = m[m.length - 1]) : (h = null);
    });
  function wt(y, D, U, I) {
    if (y.visible === !1) return;
    if (y.layers.test(D.layers)) {
      if (y.isGroup) U = y.renderOrder;
      else if (y.isLOD) y.autoUpdate === !0 && y.update(D);
      else if (y.isLight) l.pushLight(y), y.castShadow && l.pushShadow(y);
      else if (y.isSprite) {
        if (!y.frustumCulled || W.intersectsSprite(y)) {
          I && Y.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);
          const _e = je.update(y),
            be = y.material;
          be.visible && h.push(y, _e, be, U, Y.z, null);
        }
      } else if (
        (y.isMesh || y.isLine || y.isPoints) &&
        (y.isSkinnedMesh &&
          y.skeleton.frame !== Ie.render.frame &&
          (y.skeleton.update(), (y.skeleton.frame = Ie.render.frame)),
        !y.frustumCulled || W.intersectsObject(y))
      ) {
        I && Y.setFromMatrixPosition(y.matrixWorld).applyMatrix4(J);
        const _e = je.update(y),
          be = y.material;
        if (Array.isArray(be)) {
          const Me = _e.groups;
          for (let Pe = 0, Ee = Me.length; Pe < Ee; Pe++) {
            const Te = Me[Pe],
              Ue = be[Te.materialIndex];
            Ue && Ue.visible && h.push(y, _e, Ue, U, Y.z, Te);
          }
        } else be.visible && h.push(y, _e, be, U, Y.z, null);
      }
    }
    const pe = y.children;
    for (let _e = 0, be = pe.length; _e < be; _e++) wt(pe[_e], D, U, I);
  }
  function ss(y, D, U, I) {
    const H = y.opaque,
      pe = y.transmissive,
      _e = y.transparent;
    l.setupLightsView(U),
      pe.length > 0 && ao(H, D, U),
      I && se.viewport(C.copy(I)),
      H.length > 0 && wi(H, D, U),
      pe.length > 0 && wi(pe, D, U),
      _e.length > 0 && wi(_e, D, U),
      se.buffers.depth.setTest(!0),
      se.buffers.depth.setMask(!0),
      se.buffers.color.setMask(!0),
      se.setPolygonOffset(!1);
  }
  function ao(y, D, U) {
    const I = ye.isWebGL2;
    G === null &&
      (G = new Mt(1, 1, {
        generateMipmaps: !0,
        type: Ae.has("EXT_color_buffer_half_float") ? di : mn,
        minFilter: Ki,
        samples: I && r === !0 ? 4 : 0,
      })),
      d.getDrawingBufferSize(q),
      I ? G.setSize(q.x, q.y) : G.setSize(Yi(q.x), Yi(q.y));
    const H = d.getRenderTarget();
    d.setRenderTarget(G), d.clear();
    const pe = d.toneMapping;
    (d.toneMapping = Vt),
      wi(y, D, U),
      (d.toneMapping = pe),
      fe.updateMultisampleRenderTarget(G),
      fe.updateRenderTargetMipmap(G),
      d.setRenderTarget(H);
  }
  function wi(y, D, U) {
    const I = D.isScene === !0 ? D.overrideMaterial : null;
    for (let H = 0, pe = y.length; H < pe; H++) {
      const _e = y[H],
        be = _e.object,
        Me = _e.geometry,
        Pe = I === null ? _e.material : I,
        Ee = _e.group;
      be.layers.test(U.layers) && oo(be, D, U, Me, Pe, Ee);
    }
  }
  function oo(y, D, U, I, H, pe) {
    y.onBeforeRender(d, D, U, I, H, pe),
      y.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse, y.matrixWorld),
      y.normalMatrix.getNormalMatrix(y.modelViewMatrix),
      H.onBeforeRender(d, D, U, I, y, pe),
      H.transparent === !0 && H.side === Hn
        ? ((H.side = yt),
          (H.needsUpdate = !0),
          d.renderBufferDirect(U, D, I, H, y, pe),
          (H.side = hi),
          (H.needsUpdate = !0),
          d.renderBufferDirect(U, D, I, H, y, pe),
          (H.side = Hn))
        : d.renderBufferDirect(U, D, I, H, y, pe),
      y.onAfterRender(d, D, U, I, H, pe);
  }
  function ir(y, D, U) {
    D.isScene !== !0 && (D = ce);
    const I = Se.get(y),
      H = l.state.lights,
      pe = l.state.shadowsArray,
      _e = H.state.version,
      be = Fe.getParameters(y, H.state, pe, D, U),
      Me = Fe.getProgramCacheKey(be);
    let Pe = I.programs;
    (I.environment = y.isMeshStandardMaterial ? D.environment : null),
      (I.fog = D.fog),
      (I.envMap = (y.isMeshStandardMaterial ? et : qe).get(
        y.envMap || I.environment
      )),
      Pe === void 0 &&
        (y.addEventListener("dispose", de),
        (Pe = new Map()),
        (I.programs = Pe));
    let Ee = Pe.get(Me);
    if (Ee !== void 0) {
      if (I.currentProgram === Ee && I.lightsStateVersion === _e)
        return as(y, be), Ee;
    } else
      (be.uniforms = Fe.getUniforms(y)),
        y.onBuild(U, be, d),
        y.onBeforeCompile(be, d),
        (Ee = Fe.acquireProgram(be, Me)),
        Pe.set(Me, Ee),
        (I.uniforms = be.uniforms);
    const Te = I.uniforms;
    ((!y.isShaderMaterial && !y.isRawShaderMaterial) || y.clipping === !0) &&
      (Te.clippingPlanes = x.uniform),
      as(y, be),
      (I.needsLights = uo(y)),
      (I.lightsStateVersion = _e),
      I.needsLights &&
        ((Te.ambientLightColor.value = H.state.ambient),
        (Te.lightProbe.value = H.state.probe),
        (Te.directionalLights.value = H.state.directional),
        (Te.directionalLightShadows.value = H.state.directionalShadow),
        (Te.spotLights.value = H.state.spot),
        (Te.spotLightShadows.value = H.state.spotShadow),
        (Te.rectAreaLights.value = H.state.rectArea),
        (Te.ltc_1.value = H.state.rectAreaLTC1),
        (Te.ltc_2.value = H.state.rectAreaLTC2),
        (Te.pointLights.value = H.state.point),
        (Te.pointLightShadows.value = H.state.pointShadow),
        (Te.hemisphereLights.value = H.state.hemi),
        (Te.directionalShadowMap.value = H.state.directionalShadowMap),
        (Te.directionalShadowMatrix.value = H.state.directionalShadowMatrix),
        (Te.spotShadowMap.value = H.state.spotShadowMap),
        (Te.spotShadowMatrix.value = H.state.spotShadowMatrix),
        (Te.pointShadowMap.value = H.state.pointShadowMap),
        (Te.pointShadowMatrix.value = H.state.pointShadowMatrix));
    const Ue = Ee.getUniforms(),
      tn = Xi.seqWithValue(Ue.seq, Te);
    return (I.currentProgram = Ee), (I.uniformsList = tn), Ee;
  }
  function as(y, D) {
    const U = Se.get(y);
    (U.outputEncoding = D.outputEncoding),
      (U.instancing = D.instancing),
      (U.skinning = D.skinning),
      (U.morphTargets = D.morphTargets),
      (U.morphNormals = D.morphNormals),
      (U.morphColors = D.morphColors),
      (U.morphTargetsCount = D.morphTargetsCount),
      (U.numClippingPlanes = D.numClippingPlanes),
      (U.numIntersection = D.numClipIntersection),
      (U.vertexAlphas = D.vertexAlphas),
      (U.vertexTangents = D.vertexTangents),
      (U.toneMapping = D.toneMapping);
  }
  function lo(y, D, U, I, H) {
    D.isScene !== !0 && (D = ce), fe.resetTextureUnits();
    const pe = D.fog,
      _e = I.isMeshStandardMaterial ? D.environment : null,
      be =
        S === null
          ? d.outputEncoding
          : S.isXRRenderTarget === !0
          ? S.texture.encoding
          : gn,
      Me = (I.isMeshStandardMaterial ? et : qe).get(I.envMap || _e),
      Pe =
        I.vertexColors === !0 &&
        !!U.attributes.color &&
        U.attributes.color.itemSize === 4,
      Ee = !!I.normalMap && !!U.attributes.tangent,
      Te = !!U.morphAttributes.position,
      Ue = !!U.morphAttributes.normal,
      tn = !!U.morphAttributes.color,
      xn = I.toneMapped ? d.toneMapping : Vt,
      _n =
        U.morphAttributes.position ||
        U.morphAttributes.normal ||
        U.morphAttributes.color,
      At = _n !== void 0 ? _n.length : 0,
      Le = Se.get(I),
      yn = l.state.lights;
    if (X === !0 && (N === !0 || y !== b)) {
      const Et = y === b && I.id === A;
      x.setState(I, y, Et);
    }
    let Ne = !1;
    I.version === Le.__version
      ? ((Le.needsLights && Le.lightsStateVersion !== yn.state.version) ||
          Le.outputEncoding !== be ||
          (H.isInstancedMesh && Le.instancing === !1) ||
          (!H.isInstancedMesh && Le.instancing === !0) ||
          (H.isSkinnedMesh && Le.skinning === !1) ||
          (!H.isSkinnedMesh && Le.skinning === !0) ||
          Le.envMap !== Me ||
          (I.fog === !0 && Le.fog !== pe) ||
          (Le.numClippingPlanes !== void 0 &&
            (Le.numClippingPlanes !== x.numPlanes ||
              Le.numIntersection !== x.numIntersection)) ||
          Le.vertexAlphas !== Pe ||
          Le.vertexTangents !== Ee ||
          Le.morphTargets !== Te ||
          Le.morphNormals !== Ue ||
          Le.morphColors !== tn ||
          Le.toneMapping !== xn ||
          (ye.isWebGL2 === !0 && Le.morphTargetsCount !== At)) &&
        (Ne = !0)
      : ((Ne = !0), (Le.__version = I.version));
    let St = Le.currentProgram;
    Ne === !0 && (St = ir(I, D, H));
    let Wt = !1,
      ei = !1,
      rr = !1;
    const Ze = St.getUniforms(),
      ti = Le.uniforms;
    if (
      (se.useProgram(St.program) && ((Wt = !0), (ei = !0), (rr = !0)),
      I.id !== A && ((A = I.id), (ei = !0)),
      Wt || b !== y)
    ) {
      if (
        (Ze.setValue(V, "projectionMatrix", y.projectionMatrix),
        ye.logarithmicDepthBuffer &&
          Ze.setValue(V, "logDepthBufFC", 2 / (Math.log(y.far + 1) / Math.LN2)),
        b !== y && ((b = y), (ei = !0), (rr = !0)),
        I.isShaderMaterial ||
          I.isMeshPhongMaterial ||
          I.isMeshToonMaterial ||
          I.isMeshStandardMaterial ||
          I.envMap)
      ) {
        const Et = Ze.map.cameraPosition;
        Et !== void 0 && Et.setValue(V, Y.setFromMatrixPosition(y.matrixWorld));
      }
      (I.isMeshPhongMaterial ||
        I.isMeshToonMaterial ||
        I.isMeshLambertMaterial ||
        I.isMeshBasicMaterial ||
        I.isMeshStandardMaterial ||
        I.isShaderMaterial) &&
        Ze.setValue(V, "isOrthographic", y.isOrthographicCamera === !0),
        (I.isMeshPhongMaterial ||
          I.isMeshToonMaterial ||
          I.isMeshLambertMaterial ||
          I.isMeshBasicMaterial ||
          I.isMeshStandardMaterial ||
          I.isShaderMaterial ||
          I.isShadowMaterial ||
          H.isSkinnedMesh) &&
          Ze.setValue(V, "viewMatrix", y.matrixWorldInverse);
    }
    if (H.isSkinnedMesh) {
      Ze.setOptional(V, H, "bindMatrix"),
        Ze.setOptional(V, H, "bindMatrixInverse");
      const Et = H.skeleton;
      Et &&
        (ye.floatVertexTextures
          ? (Et.boneTexture === null && Et.computeBoneTexture(),
            Ze.setValue(V, "boneTexture", Et.boneTexture, fe),
            Ze.setValue(V, "boneTextureSize", Et.boneTextureSize))
          : console.warn(
              "THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."
            ));
    }
    const sr = U.morphAttributes;
    return (
      (sr.position !== void 0 ||
        sr.normal !== void 0 ||
        (sr.color !== void 0 && ye.isWebGL2 === !0)) &&
        $.update(H, U, I, St),
      (ei || Le.receiveShadow !== H.receiveShadow) &&
        ((Le.receiveShadow = H.receiveShadow),
        Ze.setValue(V, "receiveShadow", H.receiveShadow)),
      ei &&
        (Ze.setValue(V, "toneMappingExposure", d.toneMappingExposure),
        Le.needsLights && co(ti, rr),
        pe && I.fog === !0 && Pt.refreshFogUniforms(ti, pe),
        Pt.refreshMaterialUniforms(ti, I, B, F, G),
        Xi.upload(V, Le.uniformsList, ti, fe)),
      I.isShaderMaterial &&
        I.uniformsNeedUpdate === !0 &&
        (Xi.upload(V, Le.uniformsList, ti, fe), (I.uniformsNeedUpdate = !1)),
      I.isSpriteMaterial && Ze.setValue(V, "center", H.center),
      Ze.setValue(V, "modelViewMatrix", H.modelViewMatrix),
      Ze.setValue(V, "normalMatrix", H.normalMatrix),
      Ze.setValue(V, "modelMatrix", H.matrixWorld),
      St
    );
  }
  function co(y, D) {
    (y.ambientLightColor.needsUpdate = D),
      (y.lightProbe.needsUpdate = D),
      (y.directionalLights.needsUpdate = D),
      (y.directionalLightShadows.needsUpdate = D),
      (y.pointLights.needsUpdate = D),
      (y.pointLightShadows.needsUpdate = D),
      (y.spotLights.needsUpdate = D),
      (y.spotLightShadows.needsUpdate = D),
      (y.rectAreaLights.needsUpdate = D),
      (y.hemisphereLights.needsUpdate = D);
  }
  function uo(y) {
    return (
      y.isMeshLambertMaterial ||
      y.isMeshToonMaterial ||
      y.isMeshPhongMaterial ||
      y.isMeshStandardMaterial ||
      y.isShadowMaterial ||
      (y.isShaderMaterial && y.lights === !0)
    );
  }
  (this.getActiveCubeFace = function () {
    return v;
  }),
    (this.getActiveMipmapLevel = function () {
      return M;
    }),
    (this.getRenderTarget = function () {
      return S;
    }),
    (this.setRenderTargetTextures = function (y, D, U) {
      (Se.get(y.texture).__webglTexture = D),
        (Se.get(y.depthTexture).__webglTexture = U);
      const I = Se.get(y);
      (I.__hasExternalTextures = !0),
        I.__hasExternalTextures &&
          ((I.__autoAllocateDepthBuffer = U === void 0),
          I.__autoAllocateDepthBuffer ||
            (Ae.has("WEBGL_multisampled_render_to_texture") === !0 &&
              (console.warn(
                "THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"
              ),
              (I.__useRenderToTexture = !1))));
    }),
    (this.setRenderTargetFramebuffer = function (y, D) {
      const U = Se.get(y);
      (U.__webglFramebuffer = D), (U.__useDefaultFramebuffer = D === void 0);
    }),
    (this.setRenderTarget = function (y, D = 0, U = 0) {
      (S = y), (v = D), (M = U);
      let I = !0;
      if (y) {
        const Me = Se.get(y);
        Me.__useDefaultFramebuffer !== void 0
          ? (se.bindFramebuffer(36160, null), (I = !1))
          : Me.__webglFramebuffer === void 0
          ? fe.setupRenderTarget(y)
          : Me.__hasExternalTextures &&
            fe.rebindTextures(
              y,
              Se.get(y.texture).__webglTexture,
              Se.get(y.depthTexture).__webglTexture
            );
      }
      let H = null,
        pe = !1,
        _e = !1;
      if (y) {
        const Me = y.texture;
        (Me.isData3DTexture || Me.isDataArrayTexture) && (_e = !0);
        const Pe = Se.get(y).__webglFramebuffer;
        y.isWebGLCubeRenderTarget
          ? ((H = Pe[D]), (pe = !0))
          : ye.isWebGL2 && y.samples > 0 && fe.useMultisampledRTT(y) === !1
          ? (H = Se.get(y).__webglMultisampledFramebuffer)
          : (H = Pe),
          C.copy(y.viewport),
          R.copy(y.scissor),
          (_ = y.scissorTest);
      } else
        C.copy(P).multiplyScalar(B).floor(),
          R.copy(j).multiplyScalar(B).floor(),
          (_ = O);
      if (
        (se.bindFramebuffer(36160, H) &&
          ye.drawBuffers &&
          I &&
          se.drawBuffers(y, H),
        se.viewport(C),
        se.scissor(R),
        se.setScissorTest(_),
        pe)
      ) {
        const Me = Se.get(y.texture);
        V.framebufferTexture2D(36160, 36064, 34069 + D, Me.__webglTexture, U);
      } else if (_e) {
        const Me = Se.get(y.texture),
          Pe = D || 0;
        V.framebufferTextureLayer(36160, 36064, Me.__webglTexture, U || 0, Pe);
      }
      A = -1;
    }),
    (this.readRenderTargetPixels = function (y, D, U, I, H, pe, _e) {
      if (!(y && y.isWebGLRenderTarget)) {
        console.error(
          "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget."
        );
        return;
      }
      let be = Se.get(y).__webglFramebuffer;
      if ((y.isWebGLCubeRenderTarget && _e !== void 0 && (be = be[_e]), be)) {
        se.bindFramebuffer(36160, be);
        try {
          const Me = y.texture,
            Pe = Me.format,
            Ee = Me.type;
          if (Pe !== Rt && z.convert(Pe) !== V.getParameter(35739)) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format."
            );
            return;
          }
          const Te =
            Ee === di &&
            (Ae.has("EXT_color_buffer_half_float") ||
              (ye.isWebGL2 && Ae.has("EXT_color_buffer_float")));
          if (
            Ee !== mn &&
            z.convert(Ee) !== V.getParameter(35738) &&
            !(
              Ee === hn &&
              (ye.isWebGL2 ||
                Ae.has("OES_texture_float") ||
                Ae.has("WEBGL_color_buffer_float"))
            ) &&
            !Te
          ) {
            console.error(
              "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type."
            );
            return;
          }
          D >= 0 &&
            D <= y.width - I &&
            U >= 0 &&
            U <= y.height - H &&
            V.readPixels(D, U, I, H, z.convert(Pe), z.convert(Ee), pe);
        } finally {
          const Me = S !== null ? Se.get(S).__webglFramebuffer : null;
          se.bindFramebuffer(36160, Me);
        }
      }
    }),
    (this.copyFramebufferToTexture = function (y, D, U = 0) {
      const I = Math.pow(2, -U),
        H = Math.floor(D.image.width * I),
        pe = Math.floor(D.image.height * I);
      fe.setTexture2D(D, 0),
        V.copyTexSubImage2D(3553, U, 0, 0, y.x, y.y, H, pe),
        se.unbindTexture();
    }),
    (this.copyTextureToTexture = function (y, D, U, I = 0) {
      const H = D.image.width,
        pe = D.image.height,
        _e = z.convert(U.format),
        be = z.convert(U.type);
      fe.setTexture2D(U, 0),
        V.pixelStorei(37440, U.flipY),
        V.pixelStorei(37441, U.premultiplyAlpha),
        V.pixelStorei(3317, U.unpackAlignment),
        D.isDataTexture
          ? V.texSubImage2D(3553, I, y.x, y.y, H, pe, _e, be, D.image.data)
          : D.isCompressedTexture
          ? V.compressedTexSubImage2D(
              3553,
              I,
              y.x,
              y.y,
              D.mipmaps[0].width,
              D.mipmaps[0].height,
              _e,
              D.mipmaps[0].data
            )
          : V.texSubImage2D(3553, I, y.x, y.y, _e, be, D.image),
        I === 0 && U.generateMipmaps && V.generateMipmap(3553),
        se.unbindTexture();
    }),
    (this.copyTextureToTexture3D = function (y, D, U, I, H = 0) {
      if (d.isWebGL1Renderer) {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2."
        );
        return;
      }
      const pe = y.max.x - y.min.x + 1,
        _e = y.max.y - y.min.y + 1,
        be = y.max.z - y.min.z + 1,
        Me = z.convert(I.format),
        Pe = z.convert(I.type);
      let Ee;
      if (I.isData3DTexture) fe.setTexture3D(I, 0), (Ee = 32879);
      else if (I.isDataArrayTexture) fe.setTexture2DArray(I, 0), (Ee = 35866);
      else {
        console.warn(
          "THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray."
        );
        return;
      }
      V.pixelStorei(37440, I.flipY),
        V.pixelStorei(37441, I.premultiplyAlpha),
        V.pixelStorei(3317, I.unpackAlignment);
      const Te = V.getParameter(3314),
        Ue = V.getParameter(32878),
        tn = V.getParameter(3316),
        xn = V.getParameter(3315),
        _n = V.getParameter(32877),
        At = U.isCompressedTexture ? U.mipmaps[0] : U.image;
      V.pixelStorei(3314, At.width),
        V.pixelStorei(32878, At.height),
        V.pixelStorei(3316, y.min.x),
        V.pixelStorei(3315, y.min.y),
        V.pixelStorei(32877, y.min.z),
        U.isDataTexture || U.isData3DTexture
          ? V.texSubImage3D(Ee, H, D.x, D.y, D.z, pe, _e, be, Me, Pe, At.data)
          : U.isCompressedTexture
          ? (console.warn(
              "THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."
            ),
            V.compressedTexSubImage3D(
              Ee,
              H,
              D.x,
              D.y,
              D.z,
              pe,
              _e,
              be,
              Me,
              At.data
            ))
          : V.texSubImage3D(Ee, H, D.x, D.y, D.z, pe, _e, be, Me, Pe, At),
        V.pixelStorei(3314, Te),
        V.pixelStorei(32878, Ue),
        V.pixelStorei(3316, tn),
        V.pixelStorei(3315, xn),
        V.pixelStorei(32877, _n),
        H === 0 && I.generateMipmaps && V.generateMipmap(Ee),
        se.unbindTexture();
    }),
    (this.initTexture = function (y) {
      y.isCubeTexture
        ? fe.setTextureCube(y, 0)
        : y.isData3DTexture
        ? fe.setTexture3D(y, 0)
        : y.isDataArrayTexture
        ? fe.setTexture2DArray(y, 0)
        : fe.setTexture2D(y, 0),
        se.unbindTexture();
    }),
    (this.resetState = function () {
      (v = 0), (M = 0), (S = null), se.reset(), ue.reset();
    }),
    typeof __THREE_DEVTOOLS__ != "undefined" &&
      __THREE_DEVTOOLS__.dispatchEvent(
        new CustomEvent("observe", { detail: this })
      );
}
class Mf extends Ja {}
Mf.prototype.isWebGL1Renderer = !0;
class bf extends ft {
  constructor() {
    super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.overrideMaterial = null),
      (this.autoUpdate = !0),
      typeof __THREE_DEVTOOLS__ != "undefined" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this })
        );
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.autoUpdate = e.autoUpdate),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return this.fog !== null && (t.object.fog = this.fog.toJSON()), t;
  }
}
class ts extends pt {
  constructor(e = [], t = [], n = 1, i = 0) {
    super(),
      (this.type = "PolyhedronGeometry"),
      (this.parameters = { vertices: e, indices: t, radius: n, detail: i });
    const r = [],
      o = [];
    a(i),
      c(n),
      f(),
      this.setAttribute("position", new Ve(r, 3)),
      this.setAttribute("normal", new Ve(r.slice(), 3)),
      this.setAttribute("uv", new Ve(o, 2)),
      i === 0 ? this.computeVertexNormals() : this.normalizeNormals();
    function a(M) {
      const S = new L(),
        A = new L(),
        b = new L();
      for (let C = 0; C < t.length; C += 3)
        m(t[C + 0], S), m(t[C + 1], A), m(t[C + 2], b), u(S, A, b, M);
    }
    function u(M, S, A, b) {
      const C = b + 1,
        R = [];
      for (let _ = 0; _ <= C; _++) {
        R[_] = [];
        const E = M.clone().lerp(A, _ / C),
          F = S.clone().lerp(A, _ / C),
          B = C - _;
        for (let te = 0; te <= B; te++)
          te === 0 && _ === C
            ? (R[_][te] = E)
            : (R[_][te] = E.clone().lerp(F, te / B));
      }
      for (let _ = 0; _ < C; _++)
        for (let E = 0; E < 2 * (C - _) - 1; E++) {
          const F = Math.floor(E / 2);
          E % 2 === 0
            ? (l(R[_][F + 1]), l(R[_ + 1][F]), l(R[_][F]))
            : (l(R[_][F + 1]), l(R[_ + 1][F + 1]), l(R[_ + 1][F]));
        }
    }
    function c(M) {
      const S = new L();
      for (let A = 0; A < r.length; A += 3)
        (S.x = r[A + 0]),
          (S.y = r[A + 1]),
          (S.z = r[A + 2]),
          S.normalize().multiplyScalar(M),
          (r[A + 0] = S.x),
          (r[A + 1] = S.y),
          (r[A + 2] = S.z);
    }
    function f() {
      const M = new L();
      for (let S = 0; S < r.length; S += 3) {
        (M.x = r[S + 0]), (M.y = r[S + 1]), (M.z = r[S + 2]);
        const A = p(M) / 2 / Math.PI + 0.5,
          b = v(M) / Math.PI + 0.5;
        o.push(A, 1 - b);
      }
      g(), h();
    }
    function h() {
      for (let M = 0; M < o.length; M += 6) {
        const S = o[M + 0],
          A = o[M + 2],
          b = o[M + 4],
          C = Math.max(S, A, b),
          R = Math.min(S, A, b);
        C > 0.9 &&
          R < 0.1 &&
          (S < 0.2 && (o[M + 0] += 1),
          A < 0.2 && (o[M + 2] += 1),
          b < 0.2 && (o[M + 4] += 1));
      }
    }
    function l(M) {
      r.push(M.x, M.y, M.z);
    }
    function m(M, S) {
      const A = M * 3;
      (S.x = e[A + 0]), (S.y = e[A + 1]), (S.z = e[A + 2]);
    }
    function g() {
      const M = new L(),
        S = new L(),
        A = new L(),
        b = new L(),
        C = new me(),
        R = new me(),
        _ = new me();
      for (let E = 0, F = 0; E < r.length; E += 9, F += 6) {
        M.set(r[E + 0], r[E + 1], r[E + 2]),
          S.set(r[E + 3], r[E + 4], r[E + 5]),
          A.set(r[E + 6], r[E + 7], r[E + 8]),
          C.set(o[F + 0], o[F + 1]),
          R.set(o[F + 2], o[F + 3]),
          _.set(o[F + 4], o[F + 5]),
          b.copy(M).add(S).add(A).divideScalar(3);
        const B = p(b);
        d(C, F + 0, M, B), d(R, F + 2, S, B), d(_, F + 4, A, B);
      }
    }
    function d(M, S, A, b) {
      b < 0 && M.x === 1 && (o[S] = M.x - 1),
        A.x === 0 && A.z === 0 && (o[S] = b / 2 / Math.PI + 0.5);
    }
    function p(M) {
      return Math.atan2(M.z, -M.x);
    }
    function v(M) {
      return Math.atan2(-M.y, Math.sqrt(M.x * M.x + M.z * M.z));
    }
  }
  static fromJSON(e) {
    return new ts(e.vertices, e.indices, e.radius, e.details);
  }
}
class ns extends ts {
  constructor(e = 1, t = 0) {
    const n = (1 + Math.sqrt(5)) / 2,
      i = [
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        0,
        0,
        -1,
        n,
        0,
        1,
        n,
        0,
        -1,
        -n,
        0,
        1,
        -n,
        n,
        0,
        -1,
        n,
        0,
        1,
        -n,
        0,
        -1,
        -n,
        0,
        1,
      ],
      r = [
        0, 11, 5, 0, 5, 1, 0, 1, 7, 0, 7, 10, 0, 10, 11, 1, 5, 9, 5, 11, 4, 11,
        10, 2, 10, 7, 6, 7, 1, 8, 3, 9, 4, 3, 4, 2, 3, 2, 6, 3, 6, 8, 3, 8, 9,
        4, 9, 5, 2, 4, 11, 6, 2, 10, 8, 6, 7, 9, 8, 1,
      ];
    super(i, r, e, t),
      (this.type = "IcosahedronGeometry"),
      (this.parameters = { radius: e, detail: t });
  }
  static fromJSON(e) {
    return new ns(e.radius, e.detail);
  }
}
class _i extends pt {
  constructor(
    e = 1,
    t = 32,
    n = 16,
    i = 0,
    r = Math.PI * 2,
    o = 0,
    a = Math.PI
  ) {
    super(),
      (this.type = "SphereGeometry"),
      (this.parameters = {
        radius: e,
        widthSegments: t,
        heightSegments: n,
        phiStart: i,
        phiLength: r,
        thetaStart: o,
        thetaLength: a,
      }),
      (t = Math.max(3, Math.floor(t))),
      (n = Math.max(2, Math.floor(n)));
    const u = Math.min(o + a, Math.PI);
    let c = 0;
    const f = [],
      h = new L(),
      l = new L(),
      m = [],
      g = [],
      d = [],
      p = [];
    for (let v = 0; v <= n; v++) {
      const M = [],
        S = v / n;
      let A = 0;
      v == 0 && o == 0
        ? (A = 0.5 / t)
        : v == n && u == Math.PI && (A = -0.5 / t);
      for (let b = 0; b <= t; b++) {
        const C = b / t;
        (h.x = -e * Math.cos(i + C * r) * Math.sin(o + S * a)),
          (h.y = e * Math.cos(o + S * a)),
          (h.z = e * Math.sin(i + C * r) * Math.sin(o + S * a)),
          g.push(h.x, h.y, h.z),
          l.copy(h).normalize(),
          d.push(l.x, l.y, l.z),
          p.push(C + A, 1 - S),
          M.push(c++);
      }
      f.push(M);
    }
    for (let v = 0; v < n; v++)
      for (let M = 0; M < t; M++) {
        const S = f[v][M + 1],
          A = f[v][M],
          b = f[v + 1][M],
          C = f[v + 1][M + 1];
        (v !== 0 || o > 0) && m.push(S, A, C),
          (v !== n - 1 || u < Math.PI) && m.push(A, b, C);
      }
    this.setIndex(m),
      this.setAttribute("position", new Ve(g, 3)),
      this.setAttribute("normal", new Ve(d, 3)),
      this.setAttribute("uv", new Ve(p, 2));
  }
  static fromJSON(e) {
    return new _i(
      e.radius,
      e.widthSegments,
      e.heightSegments,
      e.phiStart,
      e.phiLength,
      e.thetaStart,
      e.thetaLength
    );
  }
}
class is extends pt {
  constructor(e = 1, t = 0.4, n = 8, i = 6, r = Math.PI * 2) {
    super(),
      (this.type = "TorusGeometry"),
      (this.parameters = {
        radius: e,
        tube: t,
        radialSegments: n,
        tubularSegments: i,
        arc: r,
      }),
      (n = Math.floor(n)),
      (i = Math.floor(i));
    const o = [],
      a = [],
      u = [],
      c = [],
      f = new L(),
      h = new L(),
      l = new L();
    for (let m = 0; m <= n; m++)
      for (let g = 0; g <= i; g++) {
        const d = (g / i) * r,
          p = (m / n) * Math.PI * 2;
        (h.x = (e + t * Math.cos(p)) * Math.cos(d)),
          (h.y = (e + t * Math.cos(p)) * Math.sin(d)),
          (h.z = t * Math.sin(p)),
          a.push(h.x, h.y, h.z),
          (f.x = e * Math.cos(d)),
          (f.y = e * Math.sin(d)),
          l.subVectors(h, f).normalize(),
          u.push(l.x, l.y, l.z),
          c.push(g / i),
          c.push(m / n);
      }
    for (let m = 1; m <= n; m++)
      for (let g = 1; g <= i; g++) {
        const d = (i + 1) * m + g - 1,
          p = (i + 1) * (m - 1) + g - 1,
          v = (i + 1) * (m - 1) + g,
          M = (i + 1) * m + g;
        o.push(d, p, M), o.push(p, v, M);
      }
    this.setIndex(o),
      this.setAttribute("position", new Ve(a, 3)),
      this.setAttribute("normal", new Ve(u, 3)),
      this.setAttribute("uv", new Ve(c, 2));
  }
  static fromJSON(e) {
    return new is(e.radius, e.tube, e.radialSegments, e.tubularSegments, e.arc);
  }
}
class tr extends vi {
  constructor(e) {
    super(),
      (this.isMeshStandardMaterial = !0),
      (this.defines = { STANDARD: "" }),
      (this.type = "MeshStandardMaterial"),
      (this.color = new Ce(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ce(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = Ia),
      (this.normalScale = new me(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e);
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
const va = {
  enabled: !1,
  files: {},
  add: function (s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  },
};
class wf {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      o = 0,
      a = 0,
      u;
    const c = [];
    (this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.itemStart = function (f) {
        a++, r === !1 && i.onStart !== void 0 && i.onStart(f, o, a), (r = !0);
      }),
      (this.itemEnd = function (f) {
        o++,
          i.onProgress !== void 0 && i.onProgress(f, o, a),
          o === a && ((r = !1), i.onLoad !== void 0 && i.onLoad());
      }),
      (this.itemError = function (f) {
        i.onError !== void 0 && i.onError(f);
      }),
      (this.resolveURL = function (f) {
        return u ? u(f) : f;
      }),
      (this.setURLModifier = function (f) {
        return (u = f), this;
      }),
      (this.addHandler = function (f, h) {
        return c.push(f, h), this;
      }),
      (this.removeHandler = function (f) {
        const h = c.indexOf(f);
        return h !== -1 && c.splice(h, 2), this;
      }),
      (this.getHandler = function (f) {
        for (let h = 0, l = c.length; h < l; h += 2) {
          const m = c[h],
            g = c[h + 1];
          if ((m.global && (m.lastIndex = 0), m.test(f))) return g;
        }
        return null;
      });
  }
}
const Af = new wf();
class Za {
  constructor(e) {
    (this.manager = e !== void 0 ? e : Af),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {});
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return (this.crossOrigin = e), this;
  }
  setWithCredentials(e) {
    return (this.withCredentials = e), this;
  }
  setPath(e) {
    return (this.path = e), this;
  }
  setResourcePath(e) {
    return (this.resourcePath = e), this;
  }
  setRequestHeader(e) {
    return (this.requestHeader = e), this;
  }
}
class Sf extends Za {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e));
    const r = this,
      o = va.get(e);
    if (o !== void 0)
      return (
        r.manager.itemStart(e),
        setTimeout(function () {
          t && t(o), r.manager.itemEnd(e);
        }, 0),
        o
      );
    const a = fi("img");
    function u() {
      f(), va.add(e, this), t && t(this), r.manager.itemEnd(e);
    }
    function c(h) {
      f(), i && i(h), r.manager.itemError(e), r.manager.itemEnd(e);
    }
    function f() {
      a.removeEventListener("load", u, !1),
        a.removeEventListener("error", c, !1);
    }
    return (
      a.addEventListener("load", u, !1),
      a.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (a.crossOrigin = this.crossOrigin),
      r.manager.itemStart(e),
      (a.src = e),
      a
    );
  }
}
class Kn extends Za {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new dt(),
      o = new Sf(this.manager);
    return (
      o.setCrossOrigin(this.crossOrigin),
      o.setPath(this.path),
      o.load(
        e,
        function (a) {
          (r.image = a), (r.needsUpdate = !0), t !== void 0 && t(r);
        },
        n,
        i
      ),
      r
    );
  }
}
class Ka extends ft {
  constructor(e, t = 1) {
    super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ce(e)),
      (this.intensity = t);
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      t
    );
  }
}
const xa = new ke(),
  _a = new L(),
  ya = new L();
class Ef {
  constructor(e) {
    (this.camera = e),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new me(512, 512)),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new ke()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new Zr()),
      (this._frameExtents = new me(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Be(0, 0, 1, 1)]);
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    _a.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(_a),
      ya.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(ya),
      t.updateMatrixWorld(),
      xa.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(xa),
      n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(t.projectionMatrix),
      n.multiply(t.matrixWorldInverse);
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose();
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.bias = e.bias),
      (this.radius = e.radius),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
const Ma = new ke(),
  si = new L(),
  zr = new L();
class Tf extends Ef {
  constructor() {
    super(new ot(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new me(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Be(2, 1, 1, 1),
        new Be(0, 1, 1, 1),
        new Be(3, 1, 1, 1),
        new Be(1, 1, 1, 1),
        new Be(3, 0, 1, 1),
        new Be(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new L(1, 0, 0),
        new L(-1, 0, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
        new L(0, 1, 0),
        new L(0, -1, 0),
      ]),
      (this._cubeUps = [
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
      ]);
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      r = e.distance || n.far;
    r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      si.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(si),
      zr.copy(n.position),
      zr.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(zr),
      n.updateMatrixWorld(),
      i.makeTranslation(-si.x, -si.y, -si.z),
      Ma.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(Ma);
  }
}
class Cf extends Ka {
  constructor(e, t, n = 0, i = 1) {
    super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new Tf());
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Lf extends Ka {
  constructor(e, t) {
    super(e, t), (this.isAmbientLight = !0), (this.type = "AmbientLight");
  }
}
class $a {
  constructor(e = !0) {
    (this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1);
  }
  start() {
    (this.startTime = ba()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0);
  }
  stop() {
    this.getElapsedTime(), (this.running = !1), (this.autoStart = !1);
  }
  getElapsedTime() {
    return this.getDelta(), this.elapsedTime;
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return this.start(), 0;
    if (this.running) {
      const t = ba();
      (e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e);
    }
    return e;
  }
}
function ba() {
  return (typeof performance == "undefined" ? Date : performance).now();
}
typeof __THREE_DEVTOOLS__ != "undefined" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Yr } })
  );
typeof window != "undefined" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Yr));
var Rf =
  typeof globalThis != "undefined"
    ? globalThis
    : typeof window != "undefined"
    ? window
    : typeof global != "undefined"
    ? global
    : typeof self != "undefined"
    ? self
    : {};
function Df(s) {
  return s && s.__esModule && Object.prototype.hasOwnProperty.call(s, "default")
    ? s.default
    : s;
}
var eo = { exports: {} };
/*!
 *
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 *
 */ (function (s, e) {
  (function (n, i) {
    s.exports = i();
  })(Rf, function () {
    return (function (t) {
      var n = {};
      function i(r) {
        if (n[r]) return n[r].exports;
        var o = (n[r] = { exports: {}, id: r, loaded: !1 });
        return (
          t[r].call(o.exports, o, o.exports, i), (o.loaded = !0), o.exports
        );
      }
      return (i.m = t), (i.c = n), (i.p = ""), i(0);
    })([
      function (t, n, i) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r = (function () {
          function f(h, l) {
            for (var m = 0; m < l.length; m++) {
              var g = l[m];
              (g.enumerable = g.enumerable || !1),
                (g.configurable = !0),
                "value" in g && (g.writable = !0),
                Object.defineProperty(h, g.key, g);
            }
          }
          return function (h, l, m) {
            return l && f(h.prototype, l), m && f(h, m), h;
          };
        })();
        function o(f, h) {
          if (!(f instanceof h))
            throw new TypeError("Cannot call a class as a function");
        }
        var a = i(1),
          u = i(3),
          c = (function () {
            function f(h, l) {
              o(this, f), a.initializer.load(this, l, h), this.begin();
            }
            return (
              r(f, [
                {
                  key: "toggle",
                  value: function () {
                    this.pause.status ? this.start() : this.stop();
                  },
                },
                {
                  key: "stop",
                  value: function () {
                    this.typingComplete ||
                      this.pause.status ||
                      (this.toggleBlinking(!0),
                      (this.pause.status = !0),
                      this.options.onStop(this.arrayPos, this));
                  },
                },
                {
                  key: "start",
                  value: function () {
                    this.typingComplete ||
                      !this.pause.status ||
                      ((this.pause.status = !1),
                      this.pause.typewrite
                        ? this.typewrite(
                            this.pause.curString,
                            this.pause.curStrPos
                          )
                        : this.backspace(
                            this.pause.curString,
                            this.pause.curStrPos
                          ),
                      this.options.onStart(this.arrayPos, this));
                  },
                },
                {
                  key: "destroy",
                  value: function () {
                    this.reset(!1), this.options.onDestroy(this);
                  },
                },
                {
                  key: "reset",
                  value: function () {
                    var l =
                      arguments.length <= 0 || arguments[0] === void 0
                        ? !0
                        : arguments[0];
                    clearInterval(this.timeout),
                      this.replaceText(""),
                      this.cursor &&
                        this.cursor.parentNode &&
                        (this.cursor.parentNode.removeChild(this.cursor),
                        (this.cursor = null)),
                      (this.strPos = 0),
                      (this.arrayPos = 0),
                      (this.curLoop = 0),
                      l &&
                        (this.insertCursor(),
                        this.options.onReset(this),
                        this.begin());
                  },
                },
                {
                  key: "begin",
                  value: function () {
                    var l = this;
                    this.options.onBegin(this),
                      (this.typingComplete = !1),
                      this.shuffleStringsIfNeeded(this),
                      this.insertCursor(),
                      this.bindInputFocusEvents && this.bindFocusEvents(),
                      (this.timeout = setTimeout(function () {
                        !l.currentElContent || l.currentElContent.length === 0
                          ? l.typewrite(
                              l.strings[l.sequence[l.arrayPos]],
                              l.strPos
                            )
                          : l.backspace(
                              l.currentElContent,
                              l.currentElContent.length
                            );
                      }, this.startDelay));
                  },
                },
                {
                  key: "typewrite",
                  value: function (l, m) {
                    var g = this;
                    this.fadeOut &&
                      this.el.classList.contains(this.fadeOutClass) &&
                      (this.el.classList.remove(this.fadeOutClass),
                      this.cursor &&
                        this.cursor.classList.remove(this.fadeOutClass));
                    var d = this.humanizer(this.typeSpeed),
                      p = 1;
                    if (this.pause.status === !0) {
                      this.setPauseStatus(l, m, !0);
                      return;
                    }
                    this.timeout = setTimeout(function () {
                      m = u.htmlParser.typeHtmlChars(l, m, g);
                      var v = 0,
                        M = l.substr(m);
                      if (M.charAt(0) === "^" && /^\^\d+/.test(M)) {
                        var S = 1;
                        (M = /\d+/.exec(M)[0]),
                          (S += M.length),
                          (v = parseInt(M)),
                          (g.temporaryPause = !0),
                          g.options.onTypingPaused(g.arrayPos, g),
                          (l = l.substring(0, m) + l.substring(m + S)),
                          g.toggleBlinking(!0);
                      }
                      if (M.charAt(0) === "`") {
                        for (
                          ;
                          l.substr(m + p).charAt(0) !== "`" &&
                          (p++, !(m + p > l.length));

                        );
                        var A = l.substring(0, m),
                          b = l.substring(A.length + 1, m + p),
                          C = l.substring(m + p + 1);
                        (l = A + b + C), p--;
                      }
                      g.timeout = setTimeout(function () {
                        g.toggleBlinking(!1),
                          m >= l.length
                            ? g.doneTyping(l, m)
                            : g.keepTyping(l, m, p),
                          g.temporaryPause &&
                            ((g.temporaryPause = !1),
                            g.options.onTypingResumed(g.arrayPos, g));
                      }, v);
                    }, d);
                  },
                },
                {
                  key: "keepTyping",
                  value: function (l, m, g) {
                    m === 0 &&
                      (this.toggleBlinking(!1),
                      this.options.preStringTyped(this.arrayPos, this)),
                      (m += g);
                    var d = l.substr(0, m);
                    this.replaceText(d), this.typewrite(l, m);
                  },
                },
                {
                  key: "doneTyping",
                  value: function (l, m) {
                    var g = this;
                    this.options.onStringTyped(this.arrayPos, this),
                      this.toggleBlinking(!0),
                      !(
                        this.arrayPos === this.strings.length - 1 &&
                        (this.complete(),
                        this.loop === !1 || this.curLoop === this.loopCount)
                      ) &&
                        (this.timeout = setTimeout(function () {
                          g.backspace(l, m);
                        }, this.backDelay));
                  },
                },
                {
                  key: "backspace",
                  value: function (l, m) {
                    var g = this;
                    if (this.pause.status === !0) {
                      this.setPauseStatus(l, m, !1);
                      return;
                    }
                    if (this.fadeOut) return this.initFadeOut();
                    this.toggleBlinking(!1);
                    var d = this.humanizer(this.backSpeed);
                    this.timeout = setTimeout(function () {
                      m = u.htmlParser.backSpaceHtmlChars(l, m, g);
                      var p = l.substr(0, m);
                      if ((g.replaceText(p), g.smartBackspace)) {
                        var v = g.strings[g.arrayPos + 1];
                        v && p === v.substr(0, m)
                          ? (g.stopNum = m)
                          : (g.stopNum = 0);
                      }
                      m > g.stopNum
                        ? (m--, g.backspace(l, m))
                        : m <= g.stopNum &&
                          (g.arrayPos++,
                          g.arrayPos === g.strings.length
                            ? ((g.arrayPos = 0),
                              g.options.onLastStringBackspaced(),
                              g.shuffleStringsIfNeeded(),
                              g.begin())
                            : g.typewrite(
                                g.strings[g.sequence[g.arrayPos]],
                                m
                              ));
                    }, d);
                  },
                },
                {
                  key: "complete",
                  value: function () {
                    this.options.onComplete(this),
                      this.loop ? this.curLoop++ : (this.typingComplete = !0);
                  },
                },
                {
                  key: "setPauseStatus",
                  value: function (l, m, g) {
                    (this.pause.typewrite = g),
                      (this.pause.curString = l),
                      (this.pause.curStrPos = m);
                  },
                },
                {
                  key: "toggleBlinking",
                  value: function (l) {
                    !this.cursor ||
                      this.pause.status ||
                      (this.cursorBlinking !== l &&
                        ((this.cursorBlinking = l),
                        l
                          ? this.cursor.classList.add("typed-cursor--blink")
                          : this.cursor.classList.remove(
                              "typed-cursor--blink"
                            )));
                  },
                },
                {
                  key: "humanizer",
                  value: function (l) {
                    return Math.round((Math.random() * l) / 2) + l;
                  },
                },
                {
                  key: "shuffleStringsIfNeeded",
                  value: function () {
                    !this.shuffle ||
                      (this.sequence = this.sequence.sort(function () {
                        return Math.random() - 0.5;
                      }));
                  },
                },
                {
                  key: "initFadeOut",
                  value: function () {
                    var l = this;
                    return (
                      (this.el.className += " " + this.fadeOutClass),
                      this.cursor &&
                        (this.cursor.className += " " + this.fadeOutClass),
                      setTimeout(function () {
                        l.arrayPos++,
                          l.replaceText(""),
                          l.strings.length > l.arrayPos
                            ? l.typewrite(l.strings[l.sequence[l.arrayPos]], 0)
                            : (l.typewrite(l.strings[0], 0), (l.arrayPos = 0));
                      }, this.fadeOutDelay)
                    );
                  },
                },
                {
                  key: "replaceText",
                  value: function (l) {
                    this.attr
                      ? this.el.setAttribute(this.attr, l)
                      : this.isInput
                      ? (this.el.value = l)
                      : this.contentType === "html"
                      ? (this.el.innerHTML = l)
                      : (this.el.textContent = l);
                  },
                },
                {
                  key: "bindFocusEvents",
                  value: function () {
                    var l = this;
                    !this.isInput ||
                      (this.el.addEventListener("focus", function (m) {
                        l.stop();
                      }),
                      this.el.addEventListener("blur", function (m) {
                        (l.el.value && l.el.value.length !== 0) || l.start();
                      }));
                  },
                },
                {
                  key: "insertCursor",
                  value: function () {
                    !this.showCursor ||
                      this.cursor ||
                      ((this.cursor = document.createElement("span")),
                      (this.cursor.className = "typed-cursor"),
                      this.cursor.setAttribute("aria-hidden", !0),
                      (this.cursor.innerHTML = this.cursorChar),
                      this.el.parentNode &&
                        this.el.parentNode.insertBefore(
                          this.cursor,
                          this.el.nextSibling
                        ));
                  },
                },
              ]),
              f
            );
          })();
        (n.default = c), (t.exports = n.default);
      },
      function (t, n, i) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var r =
            Object.assign ||
            function (m) {
              for (var g = 1; g < arguments.length; g++) {
                var d = arguments[g];
                for (var p in d)
                  Object.prototype.hasOwnProperty.call(d, p) && (m[p] = d[p]);
              }
              return m;
            },
          o = (function () {
            function m(g, d) {
              for (var p = 0; p < d.length; p++) {
                var v = d[p];
                (v.enumerable = v.enumerable || !1),
                  (v.configurable = !0),
                  "value" in v && (v.writable = !0),
                  Object.defineProperty(g, v.key, v);
              }
            }
            return function (g, d, p) {
              return d && m(g.prototype, d), p && m(g, p), g;
            };
          })();
        function a(m) {
          return m && m.__esModule ? m : { default: m };
        }
        function u(m, g) {
          if (!(m instanceof g))
            throw new TypeError("Cannot call a class as a function");
        }
        var c = i(2),
          f = a(c),
          h = (function () {
            function m() {
              u(this, m);
            }
            return (
              o(m, [
                {
                  key: "load",
                  value: function (d, p, v) {
                    if (
                      (typeof v == "string"
                        ? (d.el = document.querySelector(v))
                        : (d.el = v),
                      (d.options = r({}, f.default, p)),
                      (d.isInput = d.el.tagName.toLowerCase() === "input"),
                      (d.attr = d.options.attr),
                      (d.bindInputFocusEvents = d.options.bindInputFocusEvents),
                      (d.showCursor = d.isInput ? !1 : d.options.showCursor),
                      (d.cursorChar = d.options.cursorChar),
                      (d.cursorBlinking = !0),
                      (d.elContent = d.attr
                        ? d.el.getAttribute(d.attr)
                        : d.el.textContent),
                      (d.contentType = d.options.contentType),
                      (d.typeSpeed = d.options.typeSpeed),
                      (d.startDelay = d.options.startDelay),
                      (d.backSpeed = d.options.backSpeed),
                      (d.smartBackspace = d.options.smartBackspace),
                      (d.backDelay = d.options.backDelay),
                      (d.fadeOut = d.options.fadeOut),
                      (d.fadeOutClass = d.options.fadeOutClass),
                      (d.fadeOutDelay = d.options.fadeOutDelay),
                      (d.isPaused = !1),
                      (d.strings = d.options.strings.map(function (C) {
                        return C.trim();
                      })),
                      typeof d.options.stringsElement == "string"
                        ? (d.stringsElement = document.querySelector(
                            d.options.stringsElement
                          ))
                        : (d.stringsElement = d.options.stringsElement),
                      d.stringsElement)
                    ) {
                      (d.strings = []),
                        (d.stringsElement.style.display = "none");
                      var M = Array.prototype.slice.apply(
                          d.stringsElement.children
                        ),
                        S = M.length;
                      if (S)
                        for (var A = 0; A < S; A += 1) {
                          var b = M[A];
                          d.strings.push(b.innerHTML.trim());
                        }
                    }
                    (d.strPos = 0),
                      (d.arrayPos = 0),
                      (d.stopNum = 0),
                      (d.loop = d.options.loop),
                      (d.loopCount = d.options.loopCount),
                      (d.curLoop = 0),
                      (d.shuffle = d.options.shuffle),
                      (d.sequence = []),
                      (d.pause = {
                        status: !1,
                        typewrite: !0,
                        curString: "",
                        curStrPos: 0,
                      }),
                      (d.typingComplete = !1);
                    for (var A in d.strings) d.sequence[A] = A;
                    (d.currentElContent = this.getCurrentElContent(d)),
                      (d.autoInsertCss = d.options.autoInsertCss),
                      this.appendAnimationCss(d);
                  },
                },
                {
                  key: "getCurrentElContent",
                  value: function (d) {
                    var p = "";
                    return (
                      d.attr
                        ? (p = d.el.getAttribute(d.attr))
                        : d.isInput
                        ? (p = d.el.value)
                        : d.contentType === "html"
                        ? (p = d.el.innerHTML)
                        : (p = d.el.textContent),
                      p
                    );
                  },
                },
                {
                  key: "appendAnimationCss",
                  value: function (d) {
                    var p = "data-typed-js-css";
                    if (
                      !!d.autoInsertCss &&
                      !(!d.showCursor && !d.fadeOut) &&
                      !document.querySelector("[" + p + "]")
                    ) {
                      var v = document.createElement("style");
                      (v.type = "text/css"), v.setAttribute(p, !0);
                      var M = "";
                      d.showCursor &&
                        (M += `
        .typed-cursor{
          opacity: 1;
        }
        .typed-cursor.typed-cursor--blink{
          animation: typedjsBlink 0.7s infinite;
          -webkit-animation: typedjsBlink 0.7s infinite;
                  animation: typedjsBlink 0.7s infinite;
        }
        @keyframes typedjsBlink{
          50% { opacity: 0.0; }
        }
        @-webkit-keyframes typedjsBlink{
          0% { opacity: 1; }
          50% { opacity: 0.0; }
          100% { opacity: 1; }
        }
      `),
                        d.fadeOut &&
                          (M += `
        .typed-fade-out{
          opacity: 0;
          transition: opacity .25s;
        }
        .typed-cursor.typed-cursor--blink.typed-fade-out{
          -webkit-animation: 0;
          animation: 0;
        }
      `),
                        v.length !== 0 &&
                          ((v.innerHTML = M), document.body.appendChild(v));
                    }
                  },
                },
              ]),
              m
            );
          })();
        n.default = h;
        var l = new h();
        n.initializer = l;
      },
      function (t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = {
          strings: [
            "These are the default values...",
            "You know what you should do?",
            "Use your own!",
            "Have a great day!",
          ],
          stringsElement: null,
          typeSpeed: 0,
          startDelay: 0,
          backSpeed: 0,
          smartBackspace: !0,
          shuffle: !1,
          backDelay: 700,
          fadeOut: !1,
          fadeOutClass: "typed-fade-out",
          fadeOutDelay: 500,
          loop: !1,
          loopCount: 1 / 0,
          showCursor: !0,
          cursorChar: "|",
          autoInsertCss: !0,
          attr: null,
          bindInputFocusEvents: !1,
          contentType: "html",
          onBegin: function (o) {},
          onComplete: function (o) {},
          preStringTyped: function (o, a) {},
          onStringTyped: function (o, a) {},
          onLastStringBackspaced: function (o) {},
          onTypingPaused: function (o, a) {},
          onTypingResumed: function (o, a) {},
          onReset: function (o) {},
          onStop: function (o, a) {},
          onStart: function (o, a) {},
          onDestroy: function (o) {},
        };
        (n.default = i), (t.exports = n.default);
      },
      function (t, n) {
        Object.defineProperty(n, "__esModule", { value: !0 });
        var i = (function () {
          function u(c, f) {
            for (var h = 0; h < f.length; h++) {
              var l = f[h];
              (l.enumerable = l.enumerable || !1),
                (l.configurable = !0),
                "value" in l && (l.writable = !0),
                Object.defineProperty(c, l.key, l);
            }
          }
          return function (c, f, h) {
            return f && u(c.prototype, f), h && u(c, h), c;
          };
        })();
        function r(u, c) {
          if (!(u instanceof c))
            throw new TypeError("Cannot call a class as a function");
        }
        var o = (function () {
          function u() {
            r(this, u);
          }
          return (
            i(u, [
              {
                key: "typeHtmlChars",
                value: function (f, h, l) {
                  if (l.contentType !== "html") return h;
                  var m = f.substr(h).charAt(0);
                  if (m === "<" || m === "&") {
                    var g = "";
                    for (
                      m === "<" ? (g = ">") : (g = ";");
                      f.substr(h + 1).charAt(0) !== g &&
                      (h++, !(h + 1 > f.length));

                    );
                    h++;
                  }
                  return h;
                },
              },
              {
                key: "backSpaceHtmlChars",
                value: function (f, h, l) {
                  if (l.contentType !== "html") return h;
                  var m = f.substr(h).charAt(0);
                  if (m === ">" || m === ";") {
                    var g = "";
                    for (
                      m === ">" ? (g = "<") : (g = "&");
                      f.substr(h - 1).charAt(0) !== g && (h--, !(h < 0));

                    );
                    h--;
                  }
                  return h;
                },
              },
            ]),
            u
          );
        })();
        n.default = o;
        var a = new o();
        n.htmlParser = a;
      },
    ]);
  });
})(eo);
var Pf = Df(eo.exports),
  If = "/assets/pluto.fa8407a6.jpg",
  Ff = "/assets/ring.905cabdc.jpg",
  Bf = "/assets/earth.ef270a21.jpg",
  Uf = "/assets/earth_edge.1af3441a.jpg",
  zf = "/assets/mars.34ffa876.jpg",
  Nf = "/assets/mars_edge.dbf776bf.jpg";
const Ji = {
  uniforms: { tDiffuse: { value: null }, opacity: { value: 1 } },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`,
};
class yi {
  constructor() {
    (this.enabled = !0),
      (this.needsSwap = !0),
      (this.clear = !1),
      (this.renderToScreen = !1);
  }
  setSize() {}
  render() {
    console.error("THREE.Pass: .render() must be implemented in derived pass.");
  }
}
const Of = new $r(-1, 1, 1, -1, 0, 1),
  rs = new pt();
rs.setAttribute("position", new Ve([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
rs.setAttribute("uv", new Ve([0, 2, 0, 0, 2, 0], 2));
class to {
  constructor(e) {
    this._mesh = new it(rs, e);
  }
  dispose() {
    this._mesh.geometry.dispose();
  }
  render(e) {
    e.render(this._mesh, Of);
  }
  get material() {
    return this._mesh.material;
  }
  set material(e) {
    this._mesh.material = e;
  }
}
class wa extends yi {
  constructor(e, t) {
    super(),
      (this.textureID = t !== void 0 ? t : "tDiffuse"),
      e instanceof lt
        ? ((this.uniforms = e.uniforms), (this.material = e))
        : e &&
          ((this.uniforms = Qi.clone(e.uniforms)),
          (this.material = new lt({
            defines: Object.assign({}, e.defines),
            uniforms: this.uniforms,
            vertexShader: e.vertexShader,
            fragmentShader: e.fragmentShader,
          }))),
      (this.fsQuad = new to(this.material));
  }
  render(e, t, n) {
    this.uniforms[this.textureID] &&
      (this.uniforms[this.textureID].value = n.texture),
      (this.fsQuad.material = this.material),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(t),
          this.clear &&
            e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
          this.fsQuad.render(e));
  }
}
class Aa extends yi {
  constructor(e, t) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.clear = !0),
      (this.needsSwap = !1),
      (this.inverse = !1);
  }
  render(e, t, n) {
    const i = e.getContext(),
      r = e.state;
    r.buffers.color.setMask(!1),
      r.buffers.depth.setMask(!1),
      r.buffers.color.setLocked(!0),
      r.buffers.depth.setLocked(!0);
    let o, a;
    this.inverse ? ((o = 0), (a = 1)) : ((o = 1), (a = 0)),
      r.buffers.stencil.setTest(!0),
      r.buffers.stencil.setOp(i.REPLACE, i.REPLACE, i.REPLACE),
      r.buffers.stencil.setFunc(i.ALWAYS, o, 4294967295),
      r.buffers.stencil.setClear(a),
      r.buffers.stencil.setLocked(!0),
      e.setRenderTarget(n),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      e.setRenderTarget(t),
      this.clear && e.clear(),
      e.render(this.scene, this.camera),
      r.buffers.color.setLocked(!1),
      r.buffers.depth.setLocked(!1),
      r.buffers.stencil.setLocked(!1),
      r.buffers.stencil.setFunc(i.EQUAL, 1, 4294967295),
      r.buffers.stencil.setOp(i.KEEP, i.KEEP, i.KEEP),
      r.buffers.stencil.setLocked(!0);
  }
}
class kf extends yi {
  constructor() {
    super(), (this.needsSwap = !1);
  }
  render(e) {
    e.state.buffers.stencil.setLocked(!1), e.state.buffers.stencil.setTest(!1);
  }
}
class Vf {
  constructor(e, t) {
    if (((this.renderer = e), t === void 0)) {
      const n = e.getSize(new me());
      (this._pixelRatio = e.getPixelRatio()),
        (this._width = n.width),
        (this._height = n.height),
        (t = new Mt(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        )),
        (t.texture.name = "EffectComposer.rt1");
    } else
      (this._pixelRatio = 1),
        (this._width = t.width),
        (this._height = t.height);
    (this.renderTarget1 = t),
      (this.renderTarget2 = t.clone()),
      (this.renderTarget2.texture.name = "EffectComposer.rt2"),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2),
      (this.renderToScreen = !0),
      (this.passes = []),
      Ji === void 0 &&
        console.error("THREE.EffectComposer relies on CopyShader"),
      wa === void 0 &&
        console.error("THREE.EffectComposer relies on ShaderPass"),
      (this.copyPass = new wa(Ji)),
      (this.clock = new $a());
  }
  swapBuffers() {
    const e = this.readBuffer;
    (this.readBuffer = this.writeBuffer), (this.writeBuffer = e);
  }
  addPass(e) {
    this.passes.push(e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
  }
  insertPass(e, t) {
    this.passes.splice(t, 0, e),
      e.setSize(
        this._width * this._pixelRatio,
        this._height * this._pixelRatio
      );
  }
  removePass(e) {
    const t = this.passes.indexOf(e);
    t !== -1 && this.passes.splice(t, 1);
  }
  isLastEnabledPass(e) {
    for (let t = e + 1; t < this.passes.length; t++)
      if (this.passes[t].enabled) return !1;
    return !0;
  }
  render(e) {
    e === void 0 && (e = this.clock.getDelta());
    const t = this.renderer.getRenderTarget();
    let n = !1;
    for (let i = 0, r = this.passes.length; i < r; i++) {
      const o = this.passes[i];
      if (o.enabled !== !1) {
        if (
          ((o.renderToScreen =
            this.renderToScreen && this.isLastEnabledPass(i)),
          o.render(this.renderer, this.writeBuffer, this.readBuffer, e, n),
          o.needsSwap)
        ) {
          if (n) {
            const a = this.renderer.getContext(),
              u = this.renderer.state.buffers.stencil;
            u.setFunc(a.NOTEQUAL, 1, 4294967295),
              this.copyPass.render(
                this.renderer,
                this.writeBuffer,
                this.readBuffer,
                e
              ),
              u.setFunc(a.EQUAL, 1, 4294967295);
          }
          this.swapBuffers();
        }
        Aa !== void 0 &&
          (o instanceof Aa ? (n = !0) : o instanceof kf && (n = !1));
      }
    }
    this.renderer.setRenderTarget(t);
  }
  reset(e) {
    if (e === void 0) {
      const t = this.renderer.getSize(new me());
      (this._pixelRatio = this.renderer.getPixelRatio()),
        (this._width = t.width),
        (this._height = t.height),
        (e = this.renderTarget1.clone()),
        e.setSize(
          this._width * this._pixelRatio,
          this._height * this._pixelRatio
        );
    }
    this.renderTarget1.dispose(),
      this.renderTarget2.dispose(),
      (this.renderTarget1 = e),
      (this.renderTarget2 = e.clone()),
      (this.writeBuffer = this.renderTarget1),
      (this.readBuffer = this.renderTarget2);
  }
  setSize(e, t) {
    (this._width = e), (this._height = t);
    const n = this._width * this._pixelRatio,
      i = this._height * this._pixelRatio;
    this.renderTarget1.setSize(n, i), this.renderTarget2.setSize(n, i);
    for (let r = 0; r < this.passes.length; r++) this.passes[r].setSize(n, i);
  }
  setPixelRatio(e) {
    (this._pixelRatio = e), this.setSize(this._width, this._height);
  }
}
new $r(-1, 1, 1, -1, 0, 1);
const no = new pt();
no.setAttribute("position", new Ve([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
no.setAttribute("uv", new Ve([0, 2, 0, 0, 2, 0], 2));
class Gf extends yi {
  constructor(e, t, n, i, r) {
    super(),
      (this.scene = e),
      (this.camera = t),
      (this.overrideMaterial = n),
      (this.clearColor = i),
      (this.clearAlpha = r !== void 0 ? r : 0),
      (this.clear = !0),
      (this.clearDepth = !1),
      (this.needsSwap = !1),
      (this._oldClearColor = new Ce());
  }
  render(e, t, n) {
    const i = e.autoClear;
    e.autoClear = !1;
    let r, o;
    this.overrideMaterial !== void 0 &&
      ((o = this.scene.overrideMaterial),
      (this.scene.overrideMaterial = this.overrideMaterial)),
      this.clearColor &&
        (e.getClearColor(this._oldClearColor),
        (r = e.getClearAlpha()),
        e.setClearColor(this.clearColor, this.clearAlpha)),
      this.clearDepth && e.clearDepth(),
      e.setRenderTarget(this.renderToScreen ? null : n),
      this.clear &&
        e.clear(e.autoClearColor, e.autoClearDepth, e.autoClearStencil),
      e.render(this.scene, this.camera),
      this.clearColor && e.setClearColor(this._oldClearColor, r),
      this.overrideMaterial !== void 0 && (this.scene.overrideMaterial = o),
      (e.autoClear = i);
  }
}
const Sa = {
  shaderID: "luminosityHighPass",
  uniforms: {
    tDiffuse: { value: null },
    luminosityThreshold: { value: 1 },
    smoothWidth: { value: 1 },
    defaultColor: { value: new Ce(0) },
    defaultOpacity: { value: 0 },
  },
  vertexShader: `

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
  fragmentShader: `

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`,
};
class Yn extends yi {
  constructor(e, t, n, i) {
    super(),
      (this.strength = t !== void 0 ? t : 1),
      (this.radius = n),
      (this.threshold = i),
      (this.resolution = e !== void 0 ? new me(e.x, e.y) : new me(256, 256)),
      (this.clearColor = new Ce(0, 0, 0)),
      (this.renderTargetsHorizontal = []),
      (this.renderTargetsVertical = []),
      (this.nMips = 5);
    let r = Math.round(this.resolution.x / 2),
      o = Math.round(this.resolution.y / 2);
    (this.renderTargetBright = new Mt(r, o)),
      (this.renderTargetBright.texture.name = "UnrealBloomPass.bright"),
      (this.renderTargetBright.texture.generateMipmaps = !1);
    for (let h = 0; h < this.nMips; h++) {
      const l = new Mt(r, o);
      (l.texture.name = "UnrealBloomPass.h" + h),
        (l.texture.generateMipmaps = !1),
        this.renderTargetsHorizontal.push(l);
      const m = new Mt(r, o);
      (m.texture.name = "UnrealBloomPass.v" + h),
        (m.texture.generateMipmaps = !1),
        this.renderTargetsVertical.push(m),
        (r = Math.round(r / 2)),
        (o = Math.round(o / 2));
    }
    Sa === void 0 &&
      console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");
    const a = Sa;
    (this.highPassUniforms = Qi.clone(a.uniforms)),
      (this.highPassUniforms.luminosityThreshold.value = i),
      (this.highPassUniforms.smoothWidth.value = 0.01),
      (this.materialHighPassFilter = new lt({
        uniforms: this.highPassUniforms,
        vertexShader: a.vertexShader,
        fragmentShader: a.fragmentShader,
        defines: {},
      })),
      (this.separableBlurMaterials = []);
    const u = [3, 5, 7, 9, 11];
    (r = Math.round(this.resolution.x / 2)),
      (o = Math.round(this.resolution.y / 2));
    for (let h = 0; h < this.nMips; h++)
      this.separableBlurMaterials.push(this.getSeperableBlurMaterial(u[h])),
        (this.separableBlurMaterials[h].uniforms.texSize.value = new me(r, o)),
        (r = Math.round(r / 2)),
        (o = Math.round(o / 2));
    (this.compositeMaterial = this.getCompositeMaterial(this.nMips)),
      (this.compositeMaterial.uniforms.blurTexture1.value =
        this.renderTargetsVertical[0].texture),
      (this.compositeMaterial.uniforms.blurTexture2.value =
        this.renderTargetsVertical[1].texture),
      (this.compositeMaterial.uniforms.blurTexture3.value =
        this.renderTargetsVertical[2].texture),
      (this.compositeMaterial.uniforms.blurTexture4.value =
        this.renderTargetsVertical[3].texture),
      (this.compositeMaterial.uniforms.blurTexture5.value =
        this.renderTargetsVertical[4].texture),
      (this.compositeMaterial.uniforms.bloomStrength.value = t),
      (this.compositeMaterial.uniforms.bloomRadius.value = 0.1),
      (this.compositeMaterial.needsUpdate = !0);
    const c = [1, 0.8, 0.6, 0.4, 0.2];
    (this.compositeMaterial.uniforms.bloomFactors.value = c),
      (this.bloomTintColors = [
        new L(1, 1, 1),
        new L(1, 1, 1),
        new L(1, 1, 1),
        new L(1, 1, 1),
        new L(1, 1, 1),
      ]),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors),
      Ji === void 0 &&
        console.error("THREE.UnrealBloomPass relies on CopyShader");
    const f = Ji;
    (this.copyUniforms = Qi.clone(f.uniforms)),
      (this.copyUniforms.opacity.value = 1),
      (this.materialCopy = new lt({
        uniforms: this.copyUniforms,
        vertexShader: f.vertexShader,
        fragmentShader: f.fragmentShader,
        blending: Nr,
        depthTest: !1,
        depthWrite: !1,
        transparent: !0,
      })),
      (this.enabled = !0),
      (this.needsSwap = !1),
      (this._oldClearColor = new Ce()),
      (this.oldClearAlpha = 1),
      (this.basic = new $i()),
      (this.fsQuad = new to(null));
  }
  dispose() {
    for (let e = 0; e < this.renderTargetsHorizontal.length; e++)
      this.renderTargetsHorizontal[e].dispose();
    for (let e = 0; e < this.renderTargetsVertical.length; e++)
      this.renderTargetsVertical[e].dispose();
    this.renderTargetBright.dispose();
  }
  setSize(e, t) {
    let n = Math.round(e / 2),
      i = Math.round(t / 2);
    this.renderTargetBright.setSize(n, i);
    for (let r = 0; r < this.nMips; r++)
      this.renderTargetsHorizontal[r].setSize(n, i),
        this.renderTargetsVertical[r].setSize(n, i),
        (this.separableBlurMaterials[r].uniforms.texSize.value = new me(n, i)),
        (n = Math.round(n / 2)),
        (i = Math.round(i / 2));
  }
  render(e, t, n, i, r) {
    e.getClearColor(this._oldClearColor),
      (this.oldClearAlpha = e.getClearAlpha());
    const o = e.autoClear;
    (e.autoClear = !1),
      e.setClearColor(this.clearColor, 0),
      r && e.state.buffers.stencil.setTest(!1),
      this.renderToScreen &&
        ((this.fsQuad.material = this.basic),
        (this.basic.map = n.texture),
        e.setRenderTarget(null),
        e.clear(),
        this.fsQuad.render(e)),
      (this.highPassUniforms.tDiffuse.value = n.texture),
      (this.highPassUniforms.luminosityThreshold.value = this.threshold),
      (this.fsQuad.material = this.materialHighPassFilter),
      e.setRenderTarget(this.renderTargetBright),
      e.clear(),
      this.fsQuad.render(e);
    let a = this.renderTargetBright;
    for (let u = 0; u < this.nMips; u++)
      (this.fsQuad.material = this.separableBlurMaterials[u]),
        (this.separableBlurMaterials[u].uniforms.colorTexture.value =
          a.texture),
        (this.separableBlurMaterials[u].uniforms.direction.value =
          Yn.BlurDirectionX),
        e.setRenderTarget(this.renderTargetsHorizontal[u]),
        e.clear(),
        this.fsQuad.render(e),
        (this.separableBlurMaterials[u].uniforms.colorTexture.value =
          this.renderTargetsHorizontal[u].texture),
        (this.separableBlurMaterials[u].uniforms.direction.value =
          Yn.BlurDirectionY),
        e.setRenderTarget(this.renderTargetsVertical[u]),
        e.clear(),
        this.fsQuad.render(e),
        (a = this.renderTargetsVertical[u]);
    (this.fsQuad.material = this.compositeMaterial),
      (this.compositeMaterial.uniforms.bloomStrength.value = this.strength),
      (this.compositeMaterial.uniforms.bloomRadius.value = this.radius),
      (this.compositeMaterial.uniforms.bloomTintColors.value =
        this.bloomTintColors),
      e.setRenderTarget(this.renderTargetsHorizontal[0]),
      e.clear(),
      this.fsQuad.render(e),
      (this.fsQuad.material = this.materialCopy),
      (this.copyUniforms.tDiffuse.value =
        this.renderTargetsHorizontal[0].texture),
      r && e.state.buffers.stencil.setTest(!0),
      this.renderToScreen
        ? (e.setRenderTarget(null), this.fsQuad.render(e))
        : (e.setRenderTarget(n), this.fsQuad.render(e)),
      e.setClearColor(this._oldClearColor, this.oldClearAlpha),
      (e.autoClear = o);
  }
  getSeperableBlurMaterial(e) {
    return new lt({
      defines: { KERNEL_RADIUS: e, SIGMA: e },
      uniforms: {
        colorTexture: { value: null },
        texSize: { value: new me(0.5, 0.5) },
        direction: { value: new me(0.5, 0.5) },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`,
    });
  }
  getCompositeMaterial(e) {
    return new lt({
      defines: { NUM_MIPS: e },
      uniforms: {
        blurTexture1: { value: null },
        blurTexture2: { value: null },
        blurTexture3: { value: null },
        blurTexture4: { value: null },
        blurTexture5: { value: null },
        bloomStrength: { value: 1 },
        bloomFactors: { value: null },
        bloomTintColors: { value: null },
        bloomRadius: { value: 0 },
      },
      vertexShader: `varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,
      fragmentShader: `varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`,
    });
  }
}
Yn.BlurDirectionX = new me(1, 0);
Yn.BlurDirectionY = new me(0, 1);
var Hf =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAABMCAYAAADHl1ErAAAABmJLR0QA/wD/AP+gvaeTAAAFv0lEQVR4nO2c62scVRiHnybFJArahkpsKiSN6UbagCCU2EBtjeailLagoqDfrIj/h5/84uUvKF7Au0aNShQvVVqxtX7R0oZiFZvVkDRRIUmXmMQP7wxzZjJn9uzOmcuGeWDg7OzZd97zmzlnzuU9CwUFBQUFBQXhbLFgYw/wEHAA6AO2AzdbsGuDf4EF4BJwGvgEuJyVM0PAt8B6gx2ngMMJ6KGlBHxquRBZHBNAb62Fr7VKjgJvANuUc2vA98A4cAEoA3/X6khCbAM6gX3AMWAAaFK+XwAeByaTuPjTwH94d2gVOAl0JXGxhOgGXkF8d8uxApywfaFR/GL9Aey3fZEUGQCu4hdt2JbxEvLousZ/BHbaMp4hncB5vHLNU0ebFsZnitFpYJcNoznhNqS2uOX7KK7BIfxtViNXQx334G/TDsUxpvazTsZ2Lb+8ilfOb+o1sgf/09VIb8Na2Y33lK0Bd+gyNum+QIY7LmeA3624lk+uAD846S3Ag7qMUYIdUNKxG8MG4EMlPajLFCVYSUn/Etud/POzki7pMkUJtkNJT8d2J/+UlfQOXaYowdqU9EJsd/LPNSV9ky7TVkNj6wZ5bgR6gBZDm2lRAX4FlqrkMyljJLN43YqoLkUb8LLjUNZTNrpjEXgRf60J0qXkn62iTSgmgm0FvkiwoLaPz4FmTVmMBDOtkjqeBO4PnJsnX/Nh7crnB4AnkCke65g8YeNsvIvTyNx+1vQhvgT9+0CT3+gJi3pLmtCpOfcl2YrWB3yF3r+6iSuYOsX9HHDdSXcig9i9Me3XQwm5Ye6cXQV4Xvk+VpnjCqYyicybu6J1II6nKVoJ/5NVAR4BPrZ1AZuCQbaiJS4W2BcMshEt2GZVgIexLBYkIxikK1qfYzso1kQC10pMMEhHtFTFgmQFg2RFS10sSF4wSEa0oFjLwBESFgvSEQzsihZs4JeBo8iYNnHSEgzsiOaK5XZKUxUL0hUsjFpEC4qVCWkKNoYM1lsD5zuQaZe7I347gAy1gmK1IYsX1uIiqpGWYGPA+3hilYFn8Y89v0PGfP2OX83AXcALiFgdTt4l4BngL+dzG3IjUhNNh8n0zjklz0FNnjGkrVGnf9xVmREkrDI4BbOCP1rIPRaA+5zf3okI7363hF60g0q+c5o8qcy4VhMsSiyXvcBPbBQneJwN+W2YaCMhfjSEYCZiuTQBjwLvBK47A7wFHEcfLWkiWu4Fq0WsMFqobfUpKNoyftGsCZZEoz+Cv4GfQdqWqRpsVJzDlItIZLS7GNuKvD2P1GDDCNuCjeDvOswgMWYXLF8njCnkheCK1gK8i2XRbAo2il+sMhKcloZYLlPIDfrT+XwD8LbjW+KYtGFnlTx5WjnSrRit44U1BUmlDStrzg0h21Wy4pLjQ5h/sQJr4i7kvocMflVakT09eSA4DAPxORFMqmQzMg7MOgTA9JgkZqhA3Cq5ijxhL1E9OiZLFpEx6VHE57qJ2ms0ixdY1k31GNc2JNwprBpkyXUk3Gm5Sr4u4DcnPQfcGpbJtA0z2cS1TGOHdhptVIuqkuodadfm2jyoYZqLukxRgs0p6VgBHA2COjk5p8sUJZjaj9oX253806+ktX3IKMHOKOljsd3JP8eV9Ol6DPQi20jWkVdxtwWn8koP/q0zu+s1dAqvM5dImGNOeA2vnF/HMXRYMbSKrN5sNgbxb/+7N67BCcVYGbg9rsEcsRP/VmZd/GtN9CKR0a7R82yObsYu/Isv15C2zArDyNKXa/wqspO1URnEvwawgoSkW+UEftFWkZ2sdb9RMqAHeJ2Nf8PwlKmBWv/oYxh4E/l/HZc1ZBZzHBlLlsnPZq7tSPPRj/Ql9+Pve84Dj5FwMEsvEjua9dxW3GMci22WCYeQmAe3c9sIxxrSz6q762Dj77B6kP3hg8jiQztwiwW7NvgHqXYX8f4O60qmHhUUFBQUFGxa/geuRQQfNC+10wAAAABJRU5ErkJggg==",
  Wf = "/assets/menu_1.1b990887.jpeg",
  jf = "/assets/menu_2.4d96754d.png",
  Xf = "/assets/game_1.9a3164f5.png",
  qf = "/assets/dark_game.5ba55d4b.png",
  Yf = "/assets/end.8e06720c.png",
  Qf = "/assets/chat_1.e3fc81da.png",
  Jf = "/assets/chat_2.42ff894f.png",
  Zf = "/assets/nasworld.19e918f9.png",
  Kf = "/assets/emptynas.a82b8cc7.png",
  $f = "/assets/nashome.9d72306d.png",
  ep =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAHN0lEQVRogbVaa2wU1xX+zp3ZWXa9+AUUGgIJzrPKywHHBuS4FCJRhBJatY4QEklkASkkfahK1EpNq4pIVSulSlFKWyKiUrtJE5yXSiQosYlRDIltKFGiEARugndxahwFA2GXfczc0x+w63l6d3an36+5Z84953yz995z77lL+D9gtK3p7qyUv8wxr7xmWug0E7pVXeyK9L1/OmhfFJShxJIl9YaaeUpnuS4jeTZflV8fCedVJDG9B4HO1GX1H7MOHfoqCL8VEeBlUBO8aFNWysezhrxVutgzETAjTYQ9kNwVvSD30dGjuXJjKItA/N7GNQaJn6cN2Wwwi6l0PQiYcY7BrzKJruqegX6/sZRMYKR14SIJ/CLL8ts55kip/UogYMYnTNgdAndO6xn6tJQOUxJILF8yl7OZrRnI72aY68BTaTuhKopxraaOAZjrryckgINg6sqE8dqMvQMXvRQdBD5ub9eqx/7zkxzko5cNbvAZswXTmpd+Ouejf+8E+DcVmEkD6GFGZ+yC8aZ9vhQIFMa1bjQbwJTjuhQQAZHtuybqH//hDWo4mwBQValNECaYuds8XwqBJiW/kdSNxUEEDwDadQ2fo7qmrra/f4IJXUHYBKOOQJsE8568SEw+iEwgTq6COjYbBb+MZ3FlXAcETuSfJgkQAkksABCqqb0gGm6cl29X9w6eBOhfQdkHkSuBL4KyL9aud7P1bFD2GYgXfOUfCPg8CONqKJRVWr91g10e6x14G8CHQfgQDOcvoBCVlDiKQV2xcgRErvmFGM8F4YPZZQgR4USlhhUiSQ+uv9brfTR8rgvA2Ur9sHAhwFKp+OdV72hMkKYVthmcTF76clVLdb5Ne4czDHq+Uj+GzDkJxGITQ5UYJQLEhi1Rs4xf/tuYlsV6i6Ki/BFXsmu54Bo5fTTfKBCYsXf4olLBWq19fe441c+cZZbl+g/OJ/BjbMr40/cfHgewu1w/AMapr6/wASxZVyFR9pcRD21Mmts8eGjYyGU1AN/4akVzq0WZlGcAv1vDAhLmhnXbQLhQjkUtFrtEt9+1wCyTr7xYW3BC2Gx+F+t57yOAD5bji6cioALj5RhV1jxoySF8fmIic3Zspsnr9y6taJlt1iESfyjHF4G8CQghzvg1qCqqjpWrLYlL7tpx3jZCNAAdZkG0dWAPEYb9+gNPNYRY+k5mSmvbaRJCKQiklPoHR+c5NfkH3N5e0KNfQ0pm34mNSXoTYKKP/RgTRCzWdcyx2OjdN2zouuqiPj91bmSVWZBOa38FcN6PTwUUN7etc0DRP/BjLHTjraNUVRUzy4w3X53tpc+2yXyltEIv+PEJwzoHLF/q4sxbjtHoyZLWNwIgNmxW7HKx7pEvIlJOLgZdf96Sf2RJjjyjsPKcQfqP7bF4wIggMmaPw4ITrY26LtkRmB3ajFnn1G3P1xfTa2hoKFr5SK5o7mbg+8X0ACRivYPzzQLH8VGAUyUYgljfMVGKXikwmEs6K9hzAOBCQIEoGlgoHEmLpsWOPX+5qD4wdBiEgWJ6BI7bZY5xRwJnITHfLrd0Wn1/HMDNZpnxStcpyjiP1cn7WjbZZSxlNnZgaJdFKLENhJem8guCI085CUgkANzjZUMIIemB9ustvk8cH8nsef0mN32OhHc4AyGkljcdjx44MpgXVclod1JJ/Q6ASw65asu2hAKuc0Cc8jIAAFpTy2moqmYR/v0FzUPdEwaJjeY29fXpIP7TVH0ElzIHFO9kRgSIRx6tswgzmVR25LM5Hl28gwHWmg87AKCnwzsAJD26AJKKE5A5HPPqH7puwX9RXWMhIF97aVQy+65yMxCblsNas6y2v3+CGJ1efWRIKU5g3uEjx71qvqJji26X6X09fgu3BTDzRrtMV8irCJaJ7T/sKNc4CBAgVYLjwkGrqbMUqwBAnvwkrqdSUbuuDzQlly9eaBbUvD1wCoR9jrgICXI5BLmmb4WQ1Bm1ZhlNj6Vl507LeYGPvD8TFYJJbk3e1/JPi4x5zKHH7LrVdyWggt7Ngu83082cSczGmYTnRq0CrGbm1UV0dABvub1wrUQv6D/2QFQoq8IK+T7gBA/qASkLY71Dv3d9W6x7vK3xibSBrVkf10pm+LximgTTCSJ+sqp30PXL51HS8sfLoMblwu0pQ24odqlnRxkEvgTo6Sojsp36+hyrnh2+1u+xpXd+LaUouy8b8pul1kR8EMgC9Jcs6b+q7zlacnWkvGvWpY336ApeThncUEy3RAJvKQp+FNk/+JnfWCq66B5pW/RwRsptWSlrvHSKEBiSRD8t5344j0D+ahBvu/vplME/05lD9nceBBIgPFXVM9jllpz8ILD/Sowvuy2W1MOdaTa+Y/CkXRuBJBOeienR35rrm5UgMAJ5JNoab8pJ6r4s5V2MAgEJwotgejLWO1Dx/YAZgRPII35v45o0aOc1WugIS35i+jtDvmpOpeJ/bCq2QI6wGgEAAAAASUVORK5CYII=",
  tp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAHqklEQVRoge2Yf3BUVxXHP+fthvzid8qPCpQouymSlA3dGUBJlgUcBcfO1GnR4lhqO20o/uhUHYq2SlFEO1SnWO1gsHacTvkDbAf5VaxFmmSTOgjIkiadNru0WEIIhgQEEvJj9x7/eG+XTdhkaBmKM+73r3fvPffc7znvnh/vQQYZZJBBBhlkkMFHhqQO/H5/1n/6hi+2hK8YdLbAeAFVpVXRWlxsjB4JvZ2QL/IFnlIYI7C/6WjN1oHKi3yBryosVNEz2X0dP2lsbOxNXffMDE4WzPcR8tTSXyd0TysJTLFcugpkMTAViCucELTOiDx/LFzz5hUGBINB98mzpgn45BAGdyN6dyQc2gPg9QWOAKVAp3bmF0Sje3tSnXE+lt8BDAdQ0Tuj4dCOAQY+pbAaQERmN4WrD04rDXzWUl4FRg3CIW5c1vRj/6yKAliJ2ePnGO6Qf0/hV4osR+TzKnwd2AIYIAeVPxQWBnMAUPY42/Mlt3NO6ikXYnmzEuRtWSkfyMQoi5zHlqZw9aHi4uJhlrLVIX8R0ccEqxw1c1X0TpSNijYTIyehw500IFx1zuObVxI9WteYxuot3tLy86isBCa4R8XnA6+B2QXWEwBqSRCoubzFKgMFuACMEChLVVhYGhwtamY5w52AxlwFZcBk2ze6JhoOPTOAxw7gu6kTVupgEPLYCl3bkgPh0wCR+tqDwGlbkQb7y+s8+0F+50zd/gm/Py+x7jYmALgAjFo7AIyluZcVWN2DcRnUgKGgFs0pg5HOkwH7GinM9XiWZKdsmWcLyIvASSArLz5idmJRYIHzeEG6ct8AsMQcAfrsdV3nLQ18ze/3Zw3Fyz1wwjOrfIYYWaZIiaB5iLYr1nErHm/RRMyrJoNfRHepygNALiMuzgWqP1Ua8KJMADqO1Vc1en3zQ6D3iJoyoMrZuAAUgb9EnOB/90hdi6d0/i9F9YcIBShbzsfyn/H6An9WeCV6tGaf47T0BnhmBp4UwxrAEvv+ggqCov0zbhI5Jvf1S9LdDeQQlyBQ7VJJ3P86QEW0VpV7xLlWRf7gTRoztwEYoV9mioarn/CWzj+H6mpgLDAeqBCo8PoCUUEeazpavT0hn7xC3tLyb4iw1pmLikiFEeaJyGwwd4CsS2dAff1fO1V4w3kbQYAEUURqASSmIQBFPsPSpS7TFw865/T1xs2rA1RqJFy9YVjMmqrovcArQFfCx4q+XOSb/+U0b0AS0d0Td5tF7x2u/SBV6/TSYENc9cfpjMDILkSXgMwtLAzmKFoGigohgHcbQg1FvsBZhTHeSNttgixQQCH0wVu1Z9OpbGysugi8BLzkmTNnpPRkfwdlHWApugbYDpffgKB2ZgEiA8kDGBOflhxYkhqsqNHdNh9y3KP1DtAi4FJ275nDie2K1AGIxsvUCWBR6Xd9BkP0wIHzkXDNemCfMzUDpwgnDFAgUebHsXSpK1VBMBh0K/wgMRajU1PXjzXUnADCNil93FauB1JbB0VrnYPuQpgO4LJk59UYkDhWRMY6z+0O535BXAt8AZjgjbT+RnwL14vVo0atWSc7zCpEAkAccCEs8niWZKe2DiC7QWdhtxaAff+TBgghUQBJ1IvwO+Gq46kyHl9gtSDLQF9WtfZZYp3AbXpMX/wWQR5RVb/jjWTflQxiy7J+BHQ7p61UYs3GuE6ishuhDPSbAn90xCdYw7tm9ncPu/oRdjyeQE5f+yHgUlIevcL7onSD+oB1IubvSqxZY6ZNRA4j3OeI/cPqia9J7ElelfbW4y0FE6bsA/EiTHaMu6TIHjVmebS+dlf++Ckht0iRijwZCVe/nnp4e+u/WgomTh2L6gUR682R7s6Np06dSubstra2eMHNt/SiCJY0CFk/bT/9/oVUHR2B2YfGtndFLTQX5Ca43PMA7yDytHbmPxyJ7E9kpfTJvbi4eFhn1ri84+Gqc+nWPy7ceuu8ETpMxpm8vjPRAwfO30guGQyG9P3B/xB0E4W4WIYSADzAaKANaAX+JFpJHcJ2svit3M9VtbAfF7SSDcCjQBZ23h/o8G6LOA+gVNBLk27mIX2W7Cs03SgYdmC4HYuJnMItKxB6GAVscCTOCIA+z1jibAU+B7QiPEsvm+XbtN8o7gOhmyjB4pKs4JhuZgn2d/NeC0AepIMxLMb+wB6D8nOyOKmVbNPNLNFtuIbUfv1IT9JKVmkl9Vi8BawFwGAXUSF0RRDr75mJ4QXAnzLdjrAH2EkWf5P7uS71QRVhMyXAAoQvoSzELraKsok4q+VbXNRKXgMW4sKTNgvpWixu5l5gPTBpwLIBGoAQymEsGsjhbVlO54cm/BxTcFEEzEAoB4LAuAFih1G+Jw/bPwz0OSbiphlhi1Rw35BpVF8kny5WIDyC/YNpMBjgFNCM0IpyGuhC6EHpBbKx099IlOEIk4AiIH8InUdRfsEKtkny8xC0kkeBxzGUyEr+fVV1QNfiZiJ3ITyI3ctfr5joRNgJVEoF1Wm5VLID4WdSwUH4CIVMX2AcfdyN8kW7S2X0tXHmBLAfZS957P6wV/GaKrGuxWISJShzUDzYlXIaMALbsDzsAtQNnENoQTkBRFDCuDgiD/H+tXDIIIMMMsjg/xv/BXKCBEIvzZtZAAAAAElFTkSuQmCC",
  np =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAEu0lEQVRogbWZW0wcVRjH/3Pd2dkrLLBQWuiVtLS0FW8YKwlRGivqg4atTRpNMaZEgw9qjAKp28byYIiJplpjqUn70JJa44tNNdUYMQaqVYJLq7FYsOByWRcWdjfsspfxQbeBZS8nZ2b+b7vzzff/fjNz5nxnDqCj3JfaT5wdOluipwevZ/LR2dHnjbK9EsATenmweiVuu3h4eHbeLw1ODjaduXqmSi8fRuuEzUozV3zBOjruG18HAOZCB9ZY107vMFWvP9RwKKK1n+Z3wN4re1PFA4DACbgxfd15MzIy7FbcmvtpmrDt4mHPlH9yxaDlWQ4AMOgd3MRcYX7R0g/QEKDzi9e7x6ZGd6wy+B8AAAbGr+7q7us+r5UnoBFAd19X9fCE55VMx3iGW/H7uz/7njnZ//ELWvgCGgH8NnH9+0Q8kfGFwKYBxJNx9P/1wwenBk45tfBWDeD+sqN1Zs5XmNWAXW3hC/sEb9B7Wa03oAHAH1O/vwcl+3GOzfymvjbx8109P/Y8rNZfFYD7q44Xg6GgmNMg7RFKKZ6M46Zv5BM1/oBKgPF/bh/LF8Mw2edKz5Sn4vTA6b1qaqAGePubjkpfYMaR3yA7gAIFE0Hvcdoa/stPqYVQ+H1FyfHwpwwyDOLl8kz/eve5a+eKaOugBvCH/XtI4jg28xhIKRwNM76Iv522DmqAueBsAUkcQ9AvzoSmH6etgwrg+JWjTbFYjKiTzTUGUrrlv7WJttGjOikYCTxHGsvkGQMAEIgE2PKfyptpaqECCEXDq5q2bGIILeYXF6hWbVQAi9FF4nUum2MeWK5oPLKephYqgFhiyUgaS7rkCy2Fy2hqoQKIJ+LkHwMIHWLJOPFFoUi/UopCvpZmGTILJZnIPWFky09zEsMySeJYQlYFhIMlTVQAIidESWNJq5J4wwJNLVQAskGeI40lvQMGXiLOuVxUACaD2UMam6udXi6rZL5BUwsVgEMu/Ig0lvQOmATT1zS1UAG80fjWJUEU8vfSAEjGpiRIit1i/5ymFupu1GkvHac9N11bijZPura7QjTnUgOUW8pfI4lTEvnfuOXWdZ/R1kEN0Lnv2Kd2W+FivrhIMpbzuMVgSTr4gk7aOlQt6rc5q/MaxxO5AXav2d13sO4g1RwAqARo33vkXYetKKd5LAeA2WBWSs3OZ9XUoPrDVk3x1nqOy54mEss+addV3N/bcl+LqpeBaoBXHz0yVF25szfb8XA08zCpKq6arU3Uqrr6gEYfd7see+dAqaNsOv1/hmEgcsKq+AKjPbFr7c6HGhoa4mq9NdsfaOSaKmwW+4otJJEXUSjaVsSJnIj6jfUvt9S2ULUO6dIMwOVyLW0vqd4mG+U7V1VmJRTx1jsxPMvjkS2NR1vrWj/UylfTLaY397nHajbfs9EiW5MAYGNNKFoUwYCBUTBi/9anLrc9+JJbS0/NdykBwP2t2+z3/e11zBksVXIZ5p1GpaSgrPPpew90ae2lC0BKJ0+0J202E7NhQ82FB/Y8uV8PD902ugHAYrXNAIBkknv08tAVQDLIIwDAssYhvTx0BRAEwxgAWK1L1L1OPukKwHPsbQAIBCDp5aEvgCT22+zFYZ5P5t3JodW/iaBEy5rciB8AAAAASUVORK5CYII=",
  ip =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAQAAAD9CzEMAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfmBxcTKC7szF9FAAAFR0lEQVRYw5WYXWyU1RaGn3f+YPojo7SFQiXGgI0/CFKlcBJzrk4Ubk7ihYlGEaREvVMv0KgREaJGQY0memFO9HBMNP6eC0PxJ/GCC1QUTSUQ1Gg1UKSAVdtOcejM68WeaaftfDPT9d3sb39rv+9ea+9vr7W2iBRNNpO0sJh25tOAGeMsA5zgDOMlBdeDMrU7Th6gkeVcTzedLKCRJDGgwHlGOMUxPmM/h8lCjEIVkhngxWeBtugT/S6Hh7Kn1Kff9JE2q600pn74Zm3WV8pPAs9xiy/xMi91h+c5Xk6U15fapKbKFKr42sU21pEIvl3ItfyDFVzMBaQocI6z/MQ3HKCPodKYcXrZwcHq6xHmHtcG/RxmHneXn3Kfz7mSDPszP+hlk5b8ojuVqOIoITRHD2skuOUKv+RB15If/ZgvLlFktV3pCIoi/BPKyXiOe/xDTfCSHPJNTgSScT1dkUIIxfRQgJ/vFyLcEiV/eocvCBTntU3xaRTFnXObhmW8wG/OCjxIwa+6JVCM6o5pO0oIrdJPMr7Qb8wK+KT7J9qv+6JA0a9VZQRCqEnvyzjlXbOCP+ht/rXs/QXPDRTvq3GCIobQpuD9252dBfy7Xu3eKT1/+a5AkNOGIoEQatNBGS/z0brBx7zLF3qrC9P6+70iUHyuVqEiwWbl5Zh31w0/6Hsc99op7inJq06GDbuxRNCoj2V8tQfqhD/q9cYZ76v4dcjXBxv2qSEQrNHvMt5ZJ/ynXmmMH3A+QuMlxyxrSN2B4AEZt/nrOsDz/p87jPHaKvZ+5yXBhq0CpcIG/Vcd+2fUO91sjDPeW0Uv538Hgv8rFaOVywBWk64RKQa5l+0MI6CHG6poJukKjU4WJGinFeJcVQP+CPfzISDMau4jVlW7kzgFaKMjRjuNpoElVdTNR9zMh8V2M4+wqMZ0FpHG0MDiBG2kIE2minofr9DIGgAKrGMdtaSVJkYgSUuCJmKQJFXV4P9MHF0iTbwmQUNYUZFOhJH5kKREyFzmAjDOGCZbdFWq2FtJFNZIKEEWQ46xmrMaZwe9xdkX6OBhVkXq5sgFtbEEp8mRzjFck6CX5ya0LmcLK6vo/sFomNOZGMcZFWOcrAF/gp3FfwBu4G1urLpRf2EEwSjHY5zgFOQ5UhW+wPN8gTAJtvBfrqwxnW+DiwY5jhJ6S8brqob5vc4Y42bv9GjNI+Wc108cFQjdK+N2H44cMOA1xrjDeyJP0HLp88Kyww516YxMZDTOe6sxXuFP6wC37ScC/JBWB4K5+kDG1/pURfV9zhivrzucnvDV0wIOul3n5bhfrKD+q9c65rsjyCvJrhBuykImmq8DMu70sWnKBW91xk97rG74w750atCfsCEn4w3Twk6vr/M7MzKHaBnxLaW0ZePUxKtR781MvE75UX9RN7hd8JNOljZo0/TcbpX6ZZzxnokB/T45C3j7Nc8L8D+ra2ZuijZqVMYtfm0WTpmUPZPJ76YZ5ZQQSugxjct4np+q438tlzHvdqZUIWyvWOcIobR2B4qkb/WRuuG/9yanSvDPVK9x0tqhbCihlvrZOtbgtF/25aU6LavHI+GLWTZKqEfHQxEY80o/6b6Iv+AvH/Vz7i4VT2VFYGzKtKdZAUA3j3DjZBl7DWtYTgfzSJInyzAnOcpBDjGAS2XsPh6vWcaW7agZhXjSGbd7iRe7xU1OTC3ED6lHzbOt9dHCOq4ShvSxerQw+ioh8jKkaHojy/kn3XTSStPEZUiOUQY5xgH2cziE3yjXVLGp7FOKFhazqHidk+UsAwxwmvMlhWi//w0zPDxEpuNSngAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAyMi0wNy0yM1QxOTo0MDoxMyswMDowMMIHghMAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMjItMDctMjNUMTk6NDA6MTMrMDA6MDCzWjqvAAAAAElFTkSuQmCC",
  rp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAoCAMAAAC2PjgYAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABv1BMVEUAAABh2vtg2/th2vxg2vth2/th2fxh2/wAAQEBAgIBAQJg2vph2fph2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vth2vv///+5jqbMAAAAk3RSTlMAAAAAAAAAAAAAAAAAA1/V56A/ZPL93dnslCMm3/d0Gxg7i+VQAW+kBDCp/vF1BgKmWQt2/IwKwvU3V+QPzO8tBacNyW4Hu/k+812h2n2AH7TFRHxNuDxgh6jB+vb4gs/EvhNbsZxzY9sQCAlcyNyalmvHF6L7HjbUFSQawCC/YryKozkr0Oo13kgpIpAhjY/mLpvgBwLLAAAAAWJLR0SUf2dKFQAAAAd0SU1FB+YIChI5MGT7M5IAAALESURBVDjLlVX9PyJxEG4O955QKi9FFGpTVJKk8lJEVzgvKSGvERF57byT1/Ny8w9f2273oS2n+Wln59nvzjPfmWdYLNoA2IUcxKLiEjYAkD6wS4qLEDmFbNJPMwAur5Qv4KGwrBySVl4mRJ6AX8rjMuEAFZUicVW1pKYWOVIZgEzKwdoaSXWVWFRZwcB/gDqsbyAPlSsIZaNKJVYSCjnpN9RjHeSln65uwmYqCY1WqWtp0Sm1moSTD9CMTer000HfamijKYKxHbHdWEBTbjO06hlwU4fZAjQNaydip5VOGCzmDhMD3tWtlAOF/tgjMptFPZ8oPMiV3V0MuM3e2wefk8lIzY7+fodZmkzmC/T12m0MuGwgRdXi1DUCNOoEFspvxgEZAw4/0JWIqfXuQRwalkiGh3DQrVcnXrnwZ1rdyUNGiNGxcc+E10mgb9Lvn/Qh4fROeMbHRokRgBcfkI7NMuX3GZA0w/RMwG4PzEzTrs8/ZbH9+4B8mJ2bFyYigoXFpSB6ljUrNtuKZtmDwaXFBUEiIJyfm4VU54VW1xDD6wrcAIgQm1tA29YmEQHYQMV6GHFtNUTiAdzRbcLL3YFd3t7+QVhE1s8ai1nJiorCB/t7vF3YWfpFbEfdJPzwCAXHJrJXTgjjKZ6pAM4VwaDiHEB1hqdG4oTsHdOxAI8OgRWKYuCC+nkEL+PxqwT6mqR4ncBfxeOXGKGiFwGMhlg3DuctTeKOj3gvA6siWRFUWEF2j8j/TVO8dTpuWC58oGsE8IhPzwCxIAUPxgCen/AxFYUHdOUK/38ydy+TyZFqjoV83zVxvalropuA/+ddTZBji2Vq4KE3Gjjn8ch5+F6PtkCnBdC+PdrZhONrZuF4IUt5lCzBW7KUo+gxJTU1yxklNYtgF2QR7FfrQJy+DvIZ8JyWTZZV5siyyl4tym8kxe+ZFuVfpKY6p/ruTxQAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDgtMTBUMTg6NTc6MzIrMDA6MDDhXOpeAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA4LTEwVDE4OjU3OjMyKzAwOjAwkAFS4gAAAABJRU5ErkJggg==",
  sp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAgCAYAAABts0pHAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAB3RJTUUH5ggKEjU0zyO4hwAAByJJREFUWMO1l3uIVNcdxz+/c+7M3Jm5s+9dV421u6u1phI1Ngp9U2gJKIntH3lASWKE/lGK1AakgYT2n1JqaWvoIwTapAVbrAShTRtCCeRFrbaY0ETz0Chaa9ZVd9Z9zczOvef8+sfs+trZx/j4wYV777n39/v8vuf8zkO4TtPSvbUbkRa8/zyezwJrUXqANiALCFABhhBOAv9B+AdWXsdzHgHJ/fm64kujP4x9EJEKwOT7CDrWhJSHfonXB1Fy84xYwciLGNkKXMQKmnhM9JdbA148kicfGlSVxIGZGEunFqy7OwgX/R6lpcGoFaw8qln7vFRcjK1haFUxTfNLwMzno/KxiHwIiVOMJRRhk0tHe3zif9cwNIAS4vRXUnJ7QDaqkRAHZMzlIXgjip87kidKCyIwOipEka5zjh3e6yYTRLlc+2qMzTTMfQ1BCSMvYOUnjCWHiIJabqNlzIK/Nw5ePJIlTFsArCUTx2z1nse95zaAsLmPTLQU0BsDnzIjpzH8iJR5FqcTAFpxmLa/1v+8LvThPGHGooAIrdUqO53j5zVoxdiQVNg5l5KNlb7XJTjdRdXvRGhFQUKLL26aP3iYEVTBGNqShF3OsU2V9FR7ELZhguzMahv48ETMqf/JPKto0pQ0TreR6C6MtKGKZOz8wMePRaiCQJTE7HSeh65W0hKEHTPLKTA+7vjxU2fY92KOuNoI+aQ5fYjE71QJIvQsenEO8JF3IwDSoRrneMx7tlwtqmJsliBdmEVtYd8LA7z08nneOxbx5uGoMdWnzOsWic88phMHjQL+wizg6VDwDibKstF7tqtODxmkmxCTrh/MCKdOlXnq6f9SqXiSRHhlfwuDxaDxpU7F4JPtIrJJfIBkZwAfez/CJYoxLPSeJ1Rpnu5NsJlmZqLwTvn1b05z+N0xrBWMgY8G0rx2oAX116E6+WY08wSSLKIKWqwDrigTE4L3POI96+u5ERNgU1H9GFZ4bf8Qu//0EXJFXgL8660CR09mGxwyCpIDDe/Cs4VKHcWHj+QRI2Qy2uOVR2ZyZGwGY0OmjW+Bi0MxP/3FSQaL8dXgAuMlw8tvtFIumQaHTAoogPIwIb0I+HNXgJ8fiPEOvOce9XxiJjdis4gJ6jTA7r39vPJ6EWunkxkDR49nOfBWoRHqmmMpgGc5nntx4IeuAO9enMYGFFTZPJsbG2Sp19/qobUloLcni/eKXtEhqrWroy0mn/ONL7SSryWgbCagYLtqr4PiO7mp4CtVWTOrDxvWb1C4/2vdfGZ9C08/e5o/7u2nMqE4D/mc49OrR/nChmFam+MGqQEJgQA0vgPP7cBBfxaC1lXNjL4/igjrddadnsHY+tOgCBw4NEySKD98cjmbN3bx291FVq8qsekrwyxdXOb4qSwXRyzLllZozNIgAWjcgrIB5aAsADPy3giFrkRUuXP2zAUxqRnaYOXyPM/94Qw7vn+UJYtDnvlZL996eITWpph9L3Ww/1AT3Z1xg8WpNWgu1dXapB3RQQiMEcqDQQ7om53b1C/MSf/tHWm2ffNjPPDo27z6RpHvfruHvt4+Xv1nO5UJYeuDZ4kiBw3P5+YyuNJnh8lhGDemVmsRMI/t3iwTsVPWrW1mx3d6+PB4iR1PnuK5PRHnB1N89YtDLF08cR3QU3EvbbQ6BSIRMN6Bc2RVyc/lQGSOflblG/ct5L6vd1ONlTiBdXeMsWHN6A1s24VLC4OSx5HDg5Ha+xS12X4mosl/5wKHbNby+PYePrUyortzgru/NEQqdZMOGxAgBAgEIrUSuCr6tRljQOz8XHtlWV+OH3zv4xQKw3S063UOkWsUmbrR2kMQREuoDn+YQIiY4NKyLjbE2Axi0xiTQkx68nw5D/U8fPlzUe3bG4YGyAFpIPZ4jUktI0i3fbInyN92v6+MFy7BGkv9s9dN6/IGzEBwO2gvUG7GNj1AqrBXdPSet/G6Cq1XeVOgcs3zrbJr49RBElWMHA5QVqAiqMP7GHUVfFLBuzLeVVFNMDZLKts1uaW9VfCCi8eIy+fwroyInRy2WSQIMTbEmBRgBWVF4JNx4vELJNWL+KSEuiqqbhpgXB4gbOolle2aVOJmJVDzFZcHqIycwCelae0itlZrQY4g3UyQ60BKJxY+k1RGN3rVRTUvM015ikhAKtdNOr8IE+SQ+c40M5k6XFKiOt5PXOpHNWG2+ICKSH8QRn+T8jsEmomWe+UuVe5UZQWwRJV2aitqRpXgskdFTBqbKmBSOUSCuQHrYWiCj0u4eBT11SuBVYQEmADGRBgETovwgcCbxvBvqmPHpHwsQgHnYHzc0NLiss5JK9CpykKgW5VuoEuVThFavddmEQpAVj1ZhLQIU7shi2Kn1gYBRXCAAxJVEpSqGMpAWZVRY2RYlSERLgADIpwFzgr0I5y3RoeKw7ZcyHvsZCf/H/7r24Yg77XGAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIyLTA4LTEwVDE4OjUzOjQwKzAwOjAwde1SFAAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMi0wOC0xMFQxODo1Mzo0MCswMDowMASw6qgAAAAASUVORK5CYII=",
  ap =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAYAAABXuSs3AAAABmJLR0QA/wD/AP+gvaeTAAAEHElEQVRogeXYTWxVRRjG8d+0V8pHqRTxg0QopFBsUbcSKWhXRBITE7caxZiYaDRgwkJDQo1B3ShCwsJEQwhx04UrZYuGoia6ZYPBKIkgYkCqLUg/xsWlpffj3Dvn9raa+KzuOfOeef95+s470+H/pDhkUYzCv8nQkveDeFLBdWcd89l8AKUqN7gfdYu68FQ8ZqD5SGnKD17QN/M7eruZMHmUH5zeWb+3xqN2Ngsmj/KDxxJwgnfjYEMGzEmNJOwre35Yl6fLg+KHNsXDuhvDqq9cLS0OarHOCJaVDZ3VZXMYMAHxiHbjfhDdsFRPeMl4s4Cnlc/xLmtVQkOPnzwz8zTuddF9WOe65+dEmKF8jh+1U/BFxkw/u2aTm5ZrdQ4dt0bOu2ZjGHQzc95hT+B86HcmlSWf46FsYZZk16XDiwredBsa1lrhuczPTtmHE/goD0rexZkNDjcNil6ueB/ti4MWVbw+ZVCY2QvKF31N5QWvPfmvVhnVVmWkxPUYhTjsA8H+WTGd8aRVqSB5wR/IHLmBK7iKqSrjt1yPUXDaIeypiGnTkwqSDB6PW43OzIALiJjAWNWItVbYZdgneLV6knTwQmqgyRplMoaRWc9XFJtmec/q9r5QtZ0WFW1MxUkvlVodZdrtaU3hr7IsG9BZA5pcjqeDT2WAj+DPKu+naz2gW60iu60wH+Aho1QuZsRPKZZQD1YkZ9kYYxpTnq5S6fgVWQuxuHoeVLoV1dcSp92fEpgEHj+2EveWvpTt9h3YjrtTZi9PllYuaY4Xqrj9O1VPH214HHclzVyNKKmzpLXDqK+ktU3iUpW4xYpO35k0a1auJoKXt8LLVJywlyg63Z40Yy0llUp+xyfwW9n4MkWn5w6d3BLTany245cUS2VayzXL6aKi9fFM5UmyXHXB45B2rEFxMV6eNdiBx7C0McYMFVy1vl5QfcdH9Zo+dVx0e2vvxIBibTdbCS2xPvh0mdxQ3MYpQm+n/h+0YdUFr784g96ZzSZiFbYlfdm4Qv2WWD991GcM13APtola5v2mtgmO0+sCVuNRU8IC3FolbEI1nYuHtYnGjGvxiElBa/Poaioa1xEGSk71JartXrvNlpiwZUGhIVhkQ62A2uBBhz6XWVBo+EWsfW1XEzzs8qXFekRvKTbE+da46LCCvnq3WsndIX5ljYIDomfnzleV5HPsDludSwvPqThsAIfwUN5vM3QWe0K/E3k+aqgfx5MKCl4QHCD99qlMf4jes9LBsDn7QjRLc9pI4tdWmrRf8Ir0BTwl+FSrvWFL1X9HktSUHTB+o9eEg4IddUK/w2uh37dzzdnUrTue8qTgEBXH0guiN/Q7HkLJ1VHDavqZI35vqb/tFe2+Nf8Ro94JO4w2O9e8KA5pjUMLvnH99/UPzZf2a59+h8YAAAAASUVORK5CYII=",
  op =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAC4AAAAuCAQAAAD9sOO8AAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QA/4ePzL8AAAAHdElNRQfmCAoSMiXq0g6yAAADlUlEQVRYw6WX3U8cVRTAfzMDCywsFHBlow2hGEyVRLT4QdqYJqKNSeODJsTYFJriQ9OoLz745IN/hdCHNjFFW8MD/UjbpIrVgikqxlQ0NikhaVVYPgQX1l1gP24fOmx25p4ZmPXM094z57fnnns+7hj4SzfPkBM1ButcZtbPuMwX/TifEOM/DFEbJ8k58t7mpi+8j2epwUBpD6SJ8zxtfuZ+8Hb6MAhTLegU86SpoZtQKXCLEzSTx6AWS4t3kn8wyNNORynwA7xpx7OSGpcuR5xNAEJ0EwkKD/MeDSj7Vy3lDr8TrNiHnKeFl4LCD9NdlAflDu8yxIvS0+Qg0SDwKCepKvgNEKGi4Pcya0XJqWjiYBD423S6SseizgZuENdyu4s9O4U/wbtafkCYKgAWSLuKSlHHK1I56nCDftqEujOpwyLFouCOooOndwJ/gXfkCFJFNfNsYmgPhHmVsNtA38w+QiyLcItfGCQj6gyyOktvSa0M0OzIlC1J8SE3CSB6WGYYFtEWo9wKgpaz5QK/C91kgSGPkASCL3GWdQ1+kalgaK8i+poJh+8mM3wZFO0FT/EZiaLDznGeP7W3ygotIRAcfuR6QWdxm8vCOy9zzGMAbgPP8jlzmIBBmrOsaG9EOEYfT5UChz8YQQEmY9wQ9K/TSZSjfiPeb4YOM43FipA7EOMI5eR5ja7S4LN8QY5rTAq6t9hLHkUtfeIABxBaa7H8xSMMsaStP8lH1KIAxWPc504p8HUmmdOagcX77C805XJi3CAVHA4bQp95kQ+KMlwRJcHPkrH/jUuSKnqpd/ylSQ+tpXiuyyGOu6wUu1CM63sM6nkDva57wUP8YZ77/2F5Q7xS52mgl0r3st4bmmj2ACvq+Zg9HpfmFP1MOJf04q2khzpxFkELbdq9cSsCU/y9fVjuMSHMdwOI0EjC4zsjwym9KUsxHyMurJvECLHBmmBhMc6ItB1dFvlO80+xy87uNW2SGqzyKYmdweEHZlyaMmJ2dmdY1RhXGJUPQpIk39iX+y2/G4kUDjnpaMEmcQYdb28Dh1/5rUhXQVPRrxwJRzadkzuLN3yTUZKFKogSduBShS5ocpczHonrU6HT/IQBKMI86tIpEnYp5TjNjBfCG57nW5YwMGkSrhDrJAGLSc57ErYZc+MoIjSK214lS5oBYU7tCA7fM8tuQpjCkyXNV1z1M/f/9v+X63bpy45dksfbljwA41TzAKze5kMAAAAldEVYdGRhdGU6Y3JlYXRlADIwMjItMDgtMTBUMTg6NTA6MjkrMDA6MDDNLaVDAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDIyLTA4LTEwVDE4OjUwOjI5KzAwOjAwvHAd/wAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAAASUVORK5CYII=",
  lp = "/assets/inf1900.24a54755.gif",
  cp = "/assets/robot-usb.743a1a48.png",
  up =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAHQUlEQVRoge1Za2wU1xk9dx/e13jXBtuYkio2Br8IBLAcQKIthQSC0pIgvAjUlIIsFJpgoEQhRVSpcdM2tGoCFJFSFEilorQYUkoqIC4R5hcEFxsSQ22wY6+zeBfvw97Z2cfszOztD2oazMx49hH1D+fn/Z5n5s653+4FHuERMgL5OpKuWHt+kkSix+25toUUlLJs5CIV+TVnm1f7sl0rqwScTqoPk7/vc+Qxm4xGg/6rNlEQJJblPnBJQv2N5tWJbNXMGoHn1p5ssFiZt8xmk1XNj4/zcS4cazx7/IU92aibMYFlzg+ftVotR2yMZXIqcREuFoxw8fqWkytPZVI/bQLLnMenGXMsf3Hk5dakm4RSijAXuc1H4is/Pll3I50cKdde/oMzdgMVjzJ220q9Xp+VLZiUKA2x7CeRaNLZemrlSCqxKTRAyXNrTu+22a0/zTEajak2qQWCIIocFzlSW77ix42NJKklRhOBpas+/FGu3brfYjXb1fxKvsmgZlYBKqY54LDnYGK+CQAQGOYRYhPo6gmh/TM/+r/kVOvFY3yEY7kd506sOpgRgafXfrSQydH9iWFsUxUTEKB2diGc3y9FcZFlvHoAAM/dKE78ox9t13ygVNkvEonfjcfC687+1dmiWF9u0ek8N4E3CWdy7cw8QpQ5FhVY8PL6SpSVqL4YRfT0sTj4/r/hC8QVfSilCLPcp2CTz5w+/Xx4rF0nFyRaku12R65q8+VTHfj5q3PSbh4AppXa0bRjLqrL8xR9CCEQJTrPG+fa5OyyBCyM+XG1wlXT87Bz65Ow52b+LTM2I157ZRYqpzkeskUicfT2ejE8wkOvM1bIxcsS0BHZZQBAwUQzGuqrYciOggIADHqCrRtnoKjg3jckihIGBobg8bIAGZ1I5OspdyoDQoDNG6qQy2RfRRmbES+tq4TXG0Rfvx+CSKC2hUdhSKVI7ezCcfc8GxbQ0urGtRtBeIdiAIDiIgtmPzERyxZNUSR/szuIvX+8jkhUgk6n/blqJkAIUPe9ElWfKx0+HD7WjXhcemDd5ebgcnNoaXVj44sVqJ1deN825I/hD+934uMLLlVJVYJmAo8/xmDyJOVB80qHDweO3FRtIhaX8Pv3bqKhvhozqybg2Ilu/Lm5G3xCUg4aB5oJ1MwqULSxYQGHj3VreoLJJEXjnkswGPTwBWJayytCM4EKGZkbRUur+6FtI4dgkEUgGIVOpx/XVys0E8h3mBRtHZ1B1dhohIfHOwwQfVabB1IgkOfIUbQN+eW3gigmMTjoR0IACMlu46PQLqNq+3uMXFNKEQyE8KXbC4M+B2Yrk153KjVGoZnACJtAsVl+2pxUYIHLfW9EZlkO7gEPotF7A5oIATwfhdnKwGy2KneSJjSfGMERXtE2Z+ZE8HEeX/QM4FZX3/3mR0GTFDEuDHY4gERCefJMB5oJdPeGFG1LFk6Gq8+FYFDZBwAkSUSEHYHEs6guz9fepQo0E2j/zK9oy3OY8Itdi6FhdIFOR/CrNxbh8DtL8ObO+ZgyObPvQzMBl5uD525U0b50cRn2/no5GJuyWuUyOdj31nIs+c5UEAIs/tZj+ODQUrzeMBd5KjKtBlltm/XU+ka5dX8gigW1xYrJykonoO75aphMBkRjAiJRATlGA6aXTYDzhRn4bdMyzKgsfCBGpyOonJ6PFc+WAgA+7woqKp67p3n32DXZl/7iK60PpJAkCZ5BH3xDfhw7vApPPqFMIhO0X/fgh5v+BrMlFyaT5aHuLp11PtSv+haiFL6hIDqv34LX44MkUby6qwXB4cxnmLEYCcWxc/d5JKUkolwI4VAAgqCsfKOQJZBMUoRCHDo7e+DqvwNBFO/b7nhYbNt5DoKQ/gQ5FoIgYfNrZzDg/p+KiaIALjQMjh2BJEmK56gsgZ5brlO3u/sQj8lrdlv7Hax/+RQCWXgTI6E4Nm75CFevDcrahUQc7LAf0XDogpxdloA0wq8GaBMARdlpv+7Bmg3NuPa5N52+7+eoW3ccn151q7lFgWRT1BtdLmdUVe7yBe9O0YniGwDqoaBYhADPfLcMWzfNx9QSbYdTb/8w9r17Gf+80KvmRglwgurFHV2Xf9Kv5KRpMKmqOTCX6ujvACxS9asoxJJvl6JmzjdQVGBDcdG9Q8o7xGHIH8G/OgbxycUv0HVL+VD8Ly6DkO1dVzZfGs8xpcmqqnb/0xRkL4AZqcSlgNuUYFf3lYZmrQEpj4Y1NYeMEZ2wAaBvAigcN0Abhgkhe4Rgcm9Pz5bxtfMrSHu2nbnwYH6CF18nINsApDcHAAKAo6JIf9bTsSWtC8CMh/OqefumI6n7JQXqUsx3Xgey7Wbb5rRuZkaRtV8XVfP2z6dJ8jaABeO4tgN0e1fblovZqJvle2JKKp46UEco+Q1Ax/4LdgcgTV0lRe+heXXWjvGv5aK7puaQldPx2wnIBgCgoEeZpOntq1dfUp7HH+ER/j/4Dxrk0QL/2pQ4AAAAAElFTkSuQmCC",
  hp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADYElEQVRoge3Zy2sdVRwH8E+a2N5E8XVbI7pRV6IIQgWLDYpasdEK7vQPcCXi0uLGhejGhS8EQaxuVHwtXFhc6FaXKqLER0VKCNXcJK3WRxBNXJyZ3nMnM3dmrrmZBO4Xhrlzvr9z5ve95/c7r2GEZjE+QJ17k3pLOdw9mCjgZrEbnRzuMPYUcJuORbxRwJ3CWwXcAt4u4Obx7iDO7KppP442Litoa18BN9aHk5QXcX1RV8AlSZ12DnexrsAsLsJ5BdyFQmjlcaWoK6CduQ+bK8WOFzBRweZ+PCCEx3RSdoGNSZdyU3gP6xGXxncrh9uX3HfjfazhLzyDbyr4V4pfkxdu9fVBFeeqhNBUlYaGgPOrGFUJoSw6ODtAvTJMq+h0jLHo9324S4jJy7E3+T0d2RzHQ7hyYDeLsYgvcWnyvIqTWI6uJRzDt3kNfKQ8Lh/HcxXsBrkO4dMSmzU8HDsdh9CsMBntFYa0ttATxzJCxwwHu/SOTnN4UvjXl7Ai9MIfcaVsDpxJrhPJc8tGAVuFfmunc6g7kW07jAQ0jTgHjuBO3QRuCwndFA4KS4k0eZeFOeg1fJ8axQIewd1b6GAZJnFdTvm8AgGzwiQS98A0Xh2ej30xh6d0J7B0KO1ZBcQC1nW7KkVLcwIWFG9Pz2HHJ/FIQNPIDqN36E3kpofRr/WuRjt4HT+kRrGAR4Xl9HbBJK7PKT+lQMBhvUNoOoy+Mjwf+2IOT+tOZOlQ+ltsFAtYE7ooPt5raU7AAt4sM9rxSTwS0DSySXxISN50KG16GP1K74Z+WRhG0x1jj4DHcHtJo1P4HJ9spqfCOmxeOPFLMYkbcmx/wYvpQ7xBH9e7oU839S9HNkt4Qv4HjP+L/TgaPZ/As/g5eV9HOHpZqdNoSzPHiuv4uIqDOz6JywSs4outcCQHn1UxqnJItQfXCgl/qxCXZ21M+Bk8Lxw83ZbhDuIF/Jm0EeMAXhLC5mZhRfA7vqsioC5mkhf9mMPdknA/5XAHEu5kDrc/4U4P4lDdHFjO3DeDW+zDlWI7COj04UpRV8CK7uY/i9NC/OZxZ/BvAbcq5NRAAiaETcORGnX+xjV6J52Yu7oPd1UB9w+uKOBSfChMrDdFZcfHcCMeLHW7ebwjfFiZicoG+ro/wmbiP2E5FIxyO+ccAAAAAElFTkSuQmCC",
  dp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFO0lEQVRoge2YW2wUZRTHf+fbbaUVqoV6i6aKJoKIlxdAUTAiPGhUEghPJgjFiJRuFamoWHB0RcVeQLaWUBU0RB9qMCT4oAE0MRFEMIqIt3gnmgIKWGlLd3e+40N3d2Z3RwK81MT5JU3mnO9c/l/nu0wWQkJCQkJCQkJCePzZthGDreFUeey59srsswA4jhP9O1L1E8g3Ku6y1sb6jwdP3r/TsKL9Wqw2WnRChfvHFY7jpA3AcVM1A7gEdKqo2bno6cQ1g6y1iIYV7deqtXsVnSVQ3R0dMR0gCmBF58nAywD4dNXy2L4zbaS1tUN7TO/dokxD5JKM+4AIW8vcsi3S3n78TOo2P1H7xeJ42+fA9QBGpQbYZJasfHWYILd4Cug4U/E9dTXzek3fD4K8gcgcYGrmb64qb/aavu+P182de6b1UXnZk8mUhqams42b7L0NOCvrj1h957TrgvTU1bwE+gpw/klCLxBY31NXs+Z0ewCoYctAOwCG0F8+JYrKOG/1sO8FJ/Z71miIJ0ZaZKMgmxB9u6Wx7pegwj0L5ywRtPY0pMSOx2p+GZpY3xI0+pCz9rJIxM4EneG6kXtWOwt+BmhtXHhgcTyxH2QsgFodbwD/hv0sr43IZIGbQFtRvr5/3bqSwma9D8y+WESWn7r4AUQ13vfg7OpCv+M4pZGI+zVoMzDRGDs5Lw/zuWfIWINwpTfI/vwm3OiN6Scd8+enChtqJFoLlBcJLCsnesMkojfcjJQVDQOUWdfcFzCBpCK7c3WMpwFAxadRdXQUyF0KVuVgXjBc5JP0VZAKRG8vcg2rYMgjy5HK4QN17pjOiaY4+nd3QaS5Ayh6eyLsR5kEoFYv8o+ppUuyS16oNECFl2gLO5yXS1QOB04ARhY6ohNvyYkHkMoRRCdOLgwDuDywotU/vGSq/EPG6F8+s8KAt4VFRMknmn1QkXRQL1EiRc7Soq0CJaUBuRotDgQVSeZioDDR+p6NAY56mTo8L1TIvRGjem5wMw4U+tK7dkCy33P095Pe9VFQbuCpJthKn+X/j2Mt/m+2P6MoRxAuBLAileSTE6foqMAJKNtEGJPnO9TFiZVPEcksm/SOD9HDB4tzYWtQTdSMJrMYlPxJikildxVw1CCSO/cFrsovJF/4MifM6uwsXi6irwBuodse6iK1uZPU5k70UFeQTFfVvlronNXZGUF0XNY2ol/mSfJpVPQ3g9o9vtHx/mBj+MBnVlV/d+imwoZD217bB6wNUngyVDQx7KXX9xf6L/324CTwNq611q8BQXMaDWa3Qcxu3/iYR59fd07WaFpauxf/K1QJvG3LkyUPA++dsnqRd8/uL10SNKTIfJ/an1uX1+/NmhltY7xYu8cYlx14OzvqppIzfI0UoQOwgrwVQZ4M1NPRkSqvuvROgWag6LLzkRSRleUjqu+Sjo7AOEGXZnqmpeDDMpVMzYTcqeemjbtTABbH27YDUzIVtrc01k3NJi1yWoeb0pLzW5bGvjmJsBwnYvde4VozB2EqkP1U+BVlW8TKhiFr1/94KnWWxNtHpdwTh1c5Dx/J+hY/0/Y+yq2ZqW5rWbZwmgA0xBNzFVmfibNiItc1P7Hgy6Kqg0jDirVj1bp7AQMgaE3zstgGA9Dv6ibgWCbWqLXxQdL5r1jXfZqMeOBYRvOAI+HUdyP4Pm114kPOqsCLazCIOWsqRJiQtRVpTTj13eDNiL60rAa6gI24JVevdhYdKy41OCSc+m4Z0nelwkrgYMp1XwwM9P9c8V/Ff8yHhISEhISEhPzf+Qf88eEr39gSVgAAAABJRU5ErkJggg==",
  fp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAGeklEQVRoge2Zf0zU5x3HX8/3y/0ADpC7FlChRbjjh6ACJ9wJWJi1IGptm0pdLDWaLrNpl3VpXdKYJuuSZsm6LVO7tWm6aLVNFm3qks10Md2GRavUpqYOq66zWhU8mIAgIHDcPc/+UAqucnfcff1jCe//7rn3835/3vc83+f5Ps/BDGYwg/9r6HfbILu21prrcAifzyfvhr64G6IF7iULpFJbgVVAEjACHJGw49yJ1gOAMsrL8AB5Zd51wLuAaQrKe1/lZm3k/feDRvgZOoWcHk+ykKIZSAhBW+jo6+/q8XV8ZoSnZoTIOISfh4DksEQlXsKg0Tc0ABrz7tSsaxom020zKstZWuk1xtJACDSTPdXO1i0vkO9yAuCwO9i7Zxcf7t9HUWHBhLFQbiM8DQ2gpNKbvt/IhX+f5ZmnNwGwZmU9hz9u5sMDf+HJdY0TXFSKEZ7GjoCmAvbUVN7bs5urXZ0A2Gw2frdjO69v30ZK8sTjoSGGjPA0dBVyzM6cn5yU/HDTilQqU99my8rz2MZaWTDfxay5HjquDnDq9Olx+pkeX/vBWD3jYhWYDKXoSRt5h3WFPpRSaBoUpnezKPMQVZktHDpjB7LG6R4jPA2dQroueh4t68QfuFk8wPUhxcFWycBgkAdKEifTvYVu9+xYPQ0NEAxqct8pr//sZTPHTkmOnJS0X4U6j4Zzfim20rdJT0sbf43Qgpg3xupp8EMsV7b5XMHsuj9R4c6hqjSe4oUlDGbvpN95EJlQwuqG+okNTKot2SW1s2LxNCxAwaKKPF1oL+Q5c+MDCeX05R+nt/gy/a6P8KesZnzjXbWiHm18fgnsZn14eyy+hgQoKqq1yTh9f1BKk7e8PCQ3I+1eKtxlEw1KbHCVeh6P1tuQAGPmkd+iVNF9WZmUu0vD8h9uWHHbZyHEW9E+0DEHyCv1LkfwNMDzz26emB4hUF3pxZ5qn9zkCCrTtmj8Y93INMeczA+A9JrqKrGxaX1kprqOkpIOn4/ExMTg4NCQBhQ5MjI/6elsPz+tAqIo+lvklXkbhRCZczLSg88/+8y0+q5ZvYre3mu4nLm6w2EfvdX8ynRriCWAALYW5DkvLK2qjMtIT5tW5yRbIku8FRw91sqmpvWWW4pVLrd3Wjt01AHyyiqqgaKKxW7nyvq6qDQK8lwEpSTeGo/VMp6BJ6ejEXUAhdioaeJLIfRZzpw7nmPCImvuXABMpjhM5psHHoH43nQ0og0gBFpDQoLtqitnHkJEdzpMTkpC1zRczlyGhm4AoJQqcrvdU10IfAdRvY3mLqy8F+RsUIPVMZwMzRYzDz24jM6u/yDlt9dG07qtiGoZPf9Od93jnmtr/H5/+pWhLArz86ORwe8fo6pyCTt37+Hipcs3G4X656nPP3sjUo1pj71qNhejiVYgEeDFd7PJLv8p659oDNNzApr/EinnVnBhdBk/2hWPlIo4jaFcy9HuR0q7jy9/ruuJiLUiLlyhqZb4KjTx1/HiAX62tp0P9r7Ja9t2EAgEItIyDR1DC3STo+1DyiBKKRbNuWLZ3nTu/geL+xpVi6ki0roimkKqxfJLLpr2gnqO/7n3sZgk89JH+NUfuzlxso1qrwer1Ro6wPDnmK9/hBCQndpPxX0dbKr4QtO1W0cFIU7/fFewNZLaIhsBRR2o1Km+rim8Tn1JHyfb2vjhj3/CjeHhkHIiOHGeX5pzkbr8rzHpk55dyQ/UUex36PodRBqgORzl5UfbsVmDXPF10tnVFZIrx66HFhMU4bccVS2W+nC+kS6j7eEIaSljvPRIB933/IKc7OwpeX9rPkSROKyK7WEWEEE+it1ARihaZAEEqyOhrfX0sPkPv+abS5dY09BAbs48TCYT16718cmnn7L/zwc4+6+vOPLq151AuPf/b4DN4UsLA3WYVKSlN5IAAMfP2Xjq9y4ANE2TuqbJsUDgth+q7bUves0mNdUc96PEb7CNvCoWcyOcX/gRqKaPFrUTxIZI+M7Zw4PcvF7vl1KipBwAEQA1AMwC5sbpKnGK7ifQ1QZRPfpl2LpuIeKNTB0kEbN1CTpLUXI5CC93XgRaRM1ozVQ6tbW1cf945dgJIVhwuwGvYxt9USxmLNKaIIY7etUcn4ku16J4Chg/pQ8gxGPigZG/h+z7sXUZqDeB+4HLoF4WNf690dRhyJ8M6kjCHORYBnFjZ0QloTeBGcxgBjOYjP8Cbbb4VlKkt2AAAAAASUVORK5CYII=",
  pp = "/assets/robotstar1.9e2a8d40.png",
  mp = "/assets/robotstar2.df38069d.png",
  gp = "/assets/robotstar3.950efd09.png",
  Ea =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAFSElEQVRoge1ZXWwUVRg9d7cKtIgEkJ820GohRKqIUCIa/wgRFA1voCYmRtT0wcSAIfBon1ATk/bBB59I9IGQCiGBREs0gTeDELAipQYEhbTFaolYtrTduef4sLPbmZ2fHZzGhqRf8uXO3vm553zfud+9MwtM2ZRN2V1tZkKeIpmlB/pWkdwIa9eRWAayllY1Iq2oQVG9sjxlLQ//cXPFCbQaTsTQqQksP3htpc1n9otsEgVZQhTEQkvvb1toQR3LYPSNvl3Nf6UdP5Pm5tqjfdXWyXxdAk8/eBesezzupDbl7T1H0KpU46cmUD2MZ0TV+QAqCLhESN5s8Mk52TMbJ5UAqDqQgNRrLZoyY6wXec6fBYVmwe1/alIJ0GqWC6bz6vb67sstjVdFfuXPSFBWHnndl5ZAVaq7aV0w9sUl+y6uyDKby+ftVpX6FZ8FKC3+dARoCQgQUQdrzufplM0Df9RBuufcCqX0lTRlBjAukYBUKjtsavzpCPz29oPtANrjrpn3ydkdENp8WXCJkgUJqaduB4A2SIAASCOQzkHmI/No/+G456euwxXNInI+wCshyevTIa2FeEhdC96Je3xsBho7BpZm5OyS1dMkG0DWsHy1tR7ZuP0s+x2oQB65AQCK7XgGiq2B1KYzi741q/t/D8MYmYHlHde3ZOR0iWwR2QSyplwCgVbxdb88C/DO4eLv0rmSzwScliicoQQePtRXT3G/qOro1TXKK0d9fA64FIhyCfmd9tU7IuAQH0iqiQKDQNSDlQcJiEP2CgDAssYXdR8BAMJD+uGBhYkJyGpzbJQjgcUQDcrt7+zoWAcAwGClP+JhUnJWJyLQcPjKbFCNkVKIBFeJnM9ztHzt1uebBtS1YD7IzeOTN+iSAGhZGIFAFaoaqVolygQmYggw/zUViVJSLy2PSfbj0c82/AoAoNohzfQTwDhw95gwcxIRoKNFKIKN2Yh52l8Iu9eM4bvBDx/vhzGJNjgSMvhx/qcQX/eXz8Kxgn0zEhGQMAehEQ7JiLT//hnV2y+9v2wUANCaAHjXgvkQn8dZ7Ya4xhd1eMH7CWSkwUQEAI4kmYgkj/85fOPNgd2POepZXAvYPQC2QFgMKRsmicIEZUg/ApIJZkX9yTJgNZig+pBy3kPrekc9i5sBdkKYGz24e4wgaL9kYghYdCUiwLxzETC+Oh/IgnRycM+aC7rSMB2j+YOQ5sYOHgG6ctRL993GrFx3GIFAGb06e2mPqFxsGbT8GQAwOrYRVH34AhQqg2B5jHTPfVCnaUY+EQFsM1bCybi6DyIHALBo8C9ARUfYnqbkgf0QY8k6BtgbBj6cAABRHVEbMKmw2wQAGGWSRDoY9ZBrw8k6xqrFrB8+fUcEplVlD4jqjdqIlba/FSLtl5Z3osb6CIgLAr4wxmk2L4zsiwIPRLwPXG5pvLmw7fy7oo6IqirPAqXChZZwkYVNvnaz9sbOuMEnwiLfB67vbPqG0AaRx0UNl22DC+bTb0jF+R8s1bdRnZ23A0Lbfy2PEtqz63OpspT6q4R/cSrXOiLBF8pj+o/jKV/qmbA8CqB6DdBkYJcA+gnFbcWkEvC8ClYqj6I6zbO3us1zt68Z8iA4MQTSSmgICJNM8NgYvaTjMx+BY/+RtK1w3gxNLgHhe39tjyYAqVay5wABttCXEa+lJZBKQmbdjW5JHfELE6LODcHmj04qAQDI3Fvzlqgv/atvJOjivLhsLF8xL+N62vEn5k8+ADpRvZYwWw3wBKh6SPMgTQMwBGkA0iUjnIKjTuTyp822ifi0O2VTNmV3vf0LlrubUrzQ0PAAAAAASUVORK5CYII=",
  vp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAF60lEQVRoge2ZbWxTZRTHf6ftGIUMNyN2vEVCNCFRY6QQoyGSuI2oGNkihYQYjbJJTIQIBAX1QzUSKEMQMCa4zZhoUAY6RlgUgWiiGMOoEr/4AQIoLzLUbbyPvtzjh43Z9j537e7dF+P+n3r/55zn/E/7PPeecwvDGMb/GzKUi+nEB4MkRkcQrUZ9MxC9vc/UgdCORSujUs1y6tueoco5ZAVoqHIhsA6YlMf1NMir0rH/06HI67kAJeIn1LUJWDLI1FvoKF0u7Ex7ye/zEgxAqHsjgxYPoEsJdW3wmt7TL6ChigUgn3lToBE5f3CX63C3gXp3ZAR/df0KTHG7Rt9KpygZMVWOf3nDTbT7LfRX91M4i/8dqOa2smJKikaiWtPHGSCTuZyodisj4DYQdK6D4TRF/vvlzL5OOvq53Tqh4juSvqOITrSHyFxghxsVXg7xNCOrLJMz+zpzaTl78G98LDfGCGG3IrwUMM7IamqfY0QiYLYp492K8FKA38gGRxc5RgQTTjbXNxMvBfxhZG/0zHaMSPmcbOa1CoCHAuSwg2Gdlj82Npfs5XStQ0y7WxXuCxC+cDBMRlN7bXQvd4cxRPncrQz3BZzv3A2cNBt1W2EcACe4kGp1K8N1AUI8iRh6IOFnOmZ+ZON7OftWUV0hfJtyq8NTMyfnD7Sh1GfKwZIlQtSy+RK1UFkGaAYdkwsHd3vR4BkKordXxTRUqRqq3J7XP1S5vc93nQ7xQOUJWl45R8fPzjfMoONnT9LyqseHKm/ebyD6TTQwYcyZJ8Xy1SA6jf4nsJwFK65Kyy0nL+6dP9/bYOIWAzZzTe11j6mcew+VKYjmWLUM5B4Rnr00pXQ/4PwAy0FFTOcVWRz5arWcGsjv0bU6OeUnfOAVcbzNGg+xKtJ0pHaDCm2gBfT70pDfByLN6q+s160i7EwHsg6/EX0+u6piujkaVaNWI9l45IWYIiso7JB9vyj8QUETVddvvIvyEoAq86rW6ywn36r1OkuVeQAqLD0UZJPJz1ZAQ3vtXBFdWYggwFLRl0XI3V8mQZGb4vuDhc2RZrU1hdGo+hTeyeRUWFoR03m5vlkFbDm2pFhENhcoHlFprAs3xvP5hbdpkQXr7fHc1/kbtbn8oSAvgH1GEGFjJKojMrmsAkZ39zyBU78Cx1V1oaa03G8VjUN5RvzJN/KJByi7RERgsskmyrO5nArPOCw1qXMUNZlE1l1IhQXmODlBIv1A3UNNmZPWxwOJzlaEeeYVjhenmJNLF6eZcyPAYZQ77SHUkDF+5p6B+x0kvFWbLX6wmG5klVVtq6Url25bLV2ivOaw1ozMi9wCjNsnDV8XIHIgGMfPVBEHnQJ8AUdb1viZvYUgJWAb+0aniq86Jfrwp+fGWlbggsF0pXZ6Q0nf5yQwMtch6MfW9N1EOkHaodVMZl5kuQj8aYq47r8+0zGR+h9xMJ3r/6TmkTFxA+eeyG8/G7Z1ySlA4UdjiMi6pu+fL8ml3//lxTJRedsYAvGMiyNGH4uNs+v7X8H3o2KNhtDs50CGxqyZImsLibIXYb5BzL2M9B9ubK97U9P6jRXw9fgl/TCJ1Aaw3yl6E0lLxgKtKAvtFTDOsjhatV5XBEbSlryG4GdOn/hy07ooWdNbVgFpkc/8sAbU1hYrTEX4VAKCHwVza3ITv48JdvUn6hpDS9kljptuiwjjFLYne+jdDwM/00/cep09mUSWisXTP0iqWE63r4IhyvL5d+9M3LyOL5akwCsel1VRlu2MSiKTtH2NdeHGTxA+dJtF0C2LZjTY2t/9K6UFyd+BDoDY/ldlTy5p3AdnLk1YrNA06BTCeyUnLprffwIzr7JKDD1RHihCbOY1XjenHAAN8dqnRakHMR+of3FORZfXhRsLesNcEdNq8VFvPBPZOIaw8sBKcXztkrffb/5hWfBy8ZUFCjUo04AJ9M7yZ0HjotpytTS4Y+ldWwf1B0V4mxaVdjNXhGogjND72l05rRBHae0upTW+WJIDrzSMYQzjP41/ALpEABcbfaINAAAAAElFTkSuQmCC",
  xp =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAAGHUlEQVRoge2YbWxb1RnHf891XERbCamdEEIbY0OlL4y3rexDE3zjxoAo0LLGsQSCoBWNSIiJjTWhtFQ1HbSkKy9CCKmoIEiR2BwHaYBAkATHTrMxUSYY1TRG2SbBRmG8aR2lJM559uEmTq59r32vnYoP6//T9fNynv/f95x7znPgBE7g/xty3EZ+ZvR8VLeg5myUe0jaWUR0rsvMvYAScU26x9c3j4eQuRPgS7wccytkbgRkcqchVh/CJQEzPsDINaRi+UZLW3VnZnILS8+p+GE67Esxugr0+SpZ/0XoJRpZ6iK/50C0Xhrh38DMVFkH8hsiE3fxo7Z3XTEDhWbUbAK5csoyDjyB1bSV9c0fleLSanFOvh2RXuBD0B0kW587PgIyuQuIRDZ7zPEJkF8jkqb94r+5cvpzrYh1BU08xNX2eyW7qpDNJxG5Gzi7rNKrYYTUFuBPvBzOv2yK20m1/dM3aiCXQK1e4Ps1mP0e1Z21hPgTUhUGCg8At1Yt5IZB9HE+XngzXSsnKrzZ/BLgCWBV8CHlaRZPdhKPF728/otYRDkYuw3VFOjbAQoNYcwPaG/9iYt830sLSs9J+x2SdjPGXIxQ6wv0HvAzjkxu8CMPPm/g0t267OWN8peSobTY+CXI0griYjbT3vqay5zJn0tEtqK6FnjSWSOxD1wxA7kEWPeg/LCM+H0cMXv4cfyYKz6tFmkxNQUkdukkMKAR7hz+hfy1UojcDXyKxRbW26+4krO5ZUhku8eaOQrsxZidpOKHXTn9o1ci5qfAs8z/Yi9r1nzlKRTTTnv8/SACpndIAwxEJtn80h1yqBSQyURIpSZdSZn9Z2BNbgE2AE1e407hC+AxohM7WJf4sErc9ILfAVzksDXfCitgGkcFmgd75A3PQtmR20B2AvOqEnJB3ybatJp1Lf/yIb4TWOmyewgIuhPPV9js6z1oP4jqdcA7Acb6CGUTZt6FnuSzhT7UGqScvA/CHCXa2+7T8k3HQVoMHa39HIwtc75ankL+7RCPnkmH3Utq1ZeA87n+7f7TZ8L01BCcQgmwrCI9nh5VZypOC/lkwTkoNwCHZhH/dgXx7MhVDBQOMD55UxjS9QpAhc7EvXpGuT2xiz2JXk0n7tVTAOhaOUGH3ccnC1ZUJY48S60deS4FAFERj51ZWISwDYt3K4RME0+rNUX89QriInUf60Mfp9Xipsvu10U+7sVTQg4ldumGkrU/v4rvFd6aIn5h9QK+Tc6XyLzxcmP4fkBZaIrcUiPqGyjrS7+EGLAidC0H48CjmOIS11F8CnU1NAq3tqZ1Ye3IgBDjNYUmQPYh1nKSdpffCbfejmxRdD431plbHWKKIPuIFJeTjHW6eoy0VvCtv6WEjR1pDbHzBkS06VqSsU5Xl5fJtZAt5Dh35PTy8KAC/gB0zzYofPPz+VzbEFkH45hZ56x1LUdKz5lcC9n8K1jWKGirV3LgN1A8ysMCrnOIwqa0x2sNiPGpqbKCDrvP5cnkWujPDzvEiVcbJHDxkbQcU9hRZl66/2SuDkzZwfjM4iybKgDZwiNY1ijC6iCDhfr3PjuFvYC7cRc2IYEuB5zPoZizKhbnM0OLZ8L0zDCcQgl4vUsmVNleZr4I9ehxXaLMEKb4XZJ2l+s47MzxIUz052F4zEa1xsMTi77DU5/9g9uB5bPMp1UEKjM7ajJ+wOXL5FqwrDTQNmV5NSyPaYRegP0pmRTYVle16X/cWZxtNeMDwE/AbuCYj4/BbrLAHwNXyRbOI5vPByQe6sLXU8BQj3QXlSXAo0DllYaICmwNXkbXALEwxMrwO9C15e0kVJlCI7fL+0M90qUW5yO8WO4f7JEXgLEGSAXBGOhaknaz3w1dzUU8vFH+DNzl5VO4Q6DQIEkvjIH2BrkfbeQsxHCPjAoMNjJGBQy3kLRbgl7uNiQAwAgbcTap+qF8XnpO2X8Pk9qwgOFu+RPC9cB/6kgfQ8wldNi7663fsACAoW7JFGEpwj6CfQYd4km7hfb4UCO1Q+/EfhjpkcNAZ+JX+jjKIz5hY6hsoyM2PFd1jwsuf0hPWr1bLy8Zsvk1ZAr210jpBE7AD/8D/0hM/QOAg4MAAAAASUVORK5CYII=",
  _p =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADp0lEQVRoge2WXWhTZxjH/8/5SvwoTW0togwKI2wgA1kwKShS6eAIIknHBk6YKDLHLiobiGyyMYfgpILuwrvNixW0srLZhLEmdWPuYpAEKl4M3GhhY8OLdP2yTUhPTs55dtEmPTk9cUlBVHx/d8/7/J/z/J837zl5AYFAIBAIBILnF/lJGwCAiB69vyP40tSDyT/uN1srPQ5D6+BlYvqmW4/ebrbwaRkAAMBAb7M1T9UA60EM8KR55gdQnMGunljA77M/YtAJAl9bMqTP790Zma9X3HOjp0Mp+28pPnnP7J8zv1qK2Td+enz6UQ3dPUzLdwEoNax3eyIACIVOqkr71HEQnwfQ6aifJWCgTSp9MTo6alSNn+tRlC7/gLZZ7ZdkWQGA/EwBc3/PWaTSUNDqOjF8brjGVSh0UlW35t5jxicAOhypaWecScWb8kQR/VAUkC8BHKy/bzRBZJ9OJxOJ3kH9jOrTPlM02V8jYSA3kYORN0CStCSr0qd3P84OAEBjPVYHaMaTBEjfuoQZZj4GIONwF2Sm7wBA9WsX15gHAALaXmgDCGDb9ltl6+Jq0tWDkWbmY2Ckvc2t9UREx708KXBcJ5joSDY5chMAAxgMH4gdJuYbK2kZAAozeWrd1urZVtugoaWjBYv/LkLboJEjVdsjVbeHt37V09dhPfoWAdcrupqvUDY5MrQiBABeiWswiyZKhfovXWB7ANpGDbLqfc1qpIdbH76yb3/35b1/ha/s259NxVeHZfywrs/o7IM5sMWeOZIJgR2B9Ty2GSYBeiMzFj+o/L+2Frtso1QwsJBbQOt276Pkb/HDyBueubAePZJNxSu/AoUPxA6DvTejqv8gPgSgq7KWScWr70fTA5QKJYCBhakFbGzfBNXn/YhNWzY7Qwsr55qA6xE9eoqJviTmd8AccenW6Lv12PsgnEknR+64+ziPUKKO55p1ySddlYgsthnz/8x5Fthl27LM8tVKTMSvAzThkESI+SsADvM0saxbq2fwbmb+OaJHv9+tH9rpHuB3wI5lUvGol5nldTu2rAPuns32m9JSQFGVW8XFIhfni1Ut2wwjb/xiPTQ6b7892l9ZTycTifJ0504wvQsg52oxS8CHWyTjlXQykXDqiekUlv/oKhyUIP0U7u1rr47tuYUNsut8JOjTpJsdL2591VwyJ2FbfWNHx357VE3otTdbVdk4y6CjBB40Ld+F8R+HHzagb+h6IxAIBAKBQCAQCATPDP8BaEOaEZ1yEaIAAAAASUVORK5CYII=",
  yp = "/assets/selenium.7a705a44.png",
  Mp = "/assets/scrap-bot.1f04c93d.png";
document.getElementById("mail-button").src = Hf;
const Ht = new bf(),
  bp = new $a(),
  Gt = new ot(75, window.innerWidth / window.innerHeight, 0.1, 1e3);
Gt.position.setZ(0);
const en = new Ja({ canvas: document.querySelector("#bg"), antialias: !0 });
en.autoClear = !1;
en.setPixelRatio(window.devicePixelRatio);
en.setSize(window.innerWidth, window.innerHeight);
en.setClearColor(0, 0);
const wp = new Kn().load(If),
  vn = new it(new ns(1, 10), new $i({ color: 16730112, map: wp }));
vn.position.setX(3.5).setY(1.7).setZ(-5);
vn.rotation.x += 0.9;
Ht.add(vn);
const Ap = new is(2, 0.1, 10, 40),
  Sp = new Kn().load(Ff),
  Ep = new tr({ map: Sp, wireframe: !0 }),
  $t = new it(Ap, Ep);
$t.position.setX(3.5).setY(1.7).setZ(-5);
$t.rotation.x = -10;
Ht.add($t);
const Tp = new Kn().load(Bf),
  Cp = new Kn().load(Uf),
  Mi = new it(new _i(5, 30, 30), new tr({ map: Tp, bumpMap: Cp }));
Mi.position.z = 30;
Mi.position.x = -20;
Mi.position.y = -5;
Ht.add(Mi);
const Lp = new Kn().load(zf),
  Rp = new Kn().load(Nf),
  bi = new it(new _i(2.5, 30, 30), new tr({ map: Lp, bumpMap: Rp }));
bi.position.z = 60;
bi.position.x = 5;
bi.position.y = 5;
Ht.add(bi);
window.innerWidth < 1e3 && ($t.position.setX(0.5), vn.position.setX(0.5));
const io = new Cf(3423334, 5);
io.position.setX(2).setY(1.7).setZ(-5);
const Dp = new Lf(16777215, 0.2);
Ht.add(Dp, io);
const Pp = new Gf(Ht, Gt),
  nr = new Yn(new me(window.innerWidth, window.innerHeight), 0, 0.4, 0);
nr.threshold = 0;
nr.strength = 0.7;
nr.radius = 0;
const $n = new Vf(en);
$n.setSize(window.innerWidth, window.innerHeight);
$n.renderToScreen = !0;
$n.addPass(Pp);
$n.addPass(nr);
function Ip() {
  const s = document.body.getBoundingClientRect().top;
  (Gt.position.z = s * -0.1),
    (Gt.position.x = s * -2e-4),
    (Gt.position.y = s * -2e-4);
}
document.body.onscroll = Ip;
function ro() {
  requestAnimationFrame(ro);
  const s = bp.getElapsedTime();
  $t.translateX(Math.cos(s) * 0.001),
    $t.translateY(Math.sin(s) * 5e-4),
    (Mi.rotation.y += 0.01),
    (bi.rotation.y += 0.002),
    (vn.rotation.y += 0.01),
    en.render(Ht, Gt),
    $n.render();
}
function Fp() {
  const s = new _i(0.25, 24, 24),
    e = new tr({ color: 16777215 }),
    t = new it(s, e),
    [n, i, r] = Array(3)
      .fill()
      .map(() => Sl.randFloatSpread(500));
  t.position.set(n, i, r), Ht.add(t);
}
var Bn = document.querySelectorAll(".timeline li");
function Bp(s) {
  var e = s.getBoundingClientRect();
  return (
    e.top >= 0 &&
    e.left >= 0 &&
    e.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    e.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
function so() {
  for (var s = 0; s < Bn.length; s++)
    Bp(Bn[s])
      ? Bn[s].classList.contains("in-view") || Bn[s].classList.add("in-view")
      : Bn[s].classList.contains("in-view") &&
        Bn[s].classList.remove("in-view");
}
document.addEventListener("scroll", () => {
  let s = window.scrollY - 100;
  (document.getElementById("line1").style.left = `${s * 1.5}px`),
    (document.getElementById("line2").style.right = `${s * 2 - 1200}px`),
    (document.getElementById("scroll-clue").style.opacity = -(s / 60) + 1);
  let e = Math.min(Math.max(0, window.scrollY - 2800), 630);
  if (window.innerWidth < 820)
    document.getElementById("myjourney").style.marginLeft = `${
      100 - (e - 20) / 5
    }vw`;
  else {
    const t = Math.min(Math.max(0, window.scrollY - 2250), 600);
    document.getElementById("myjourney").style.marginLeft = `${
      100 - (t - 80) / 5
    }vw`;
  }
  if (e == 630) {
    const t = document.getElementsByClassName("journey-content");
    for (let n = 0; n < t.length; n++) t[n].style.opacity = "1";
  }
  so();
});
window.addEventListener("load", so);
document.addEventListener("mouseup", () => {
  document.onmousemove = null;
});
window.addEventListener(
  "resize",
  () => {
    (Gt.aspect = window.innerWidth / window.innerHeight),
      Gt.updateProjectionMatrix(),
      en.setSize(window.innerWidth, window.innerHeight),
      $n.setSize(window.innerWidth, window.innerHeight),
      window.innerWidth < 1e3
        ? (vn.position.setX(0.5), $t.position.setX(0.5))
        : (vn.position.setX(3.5), $t.position.setX(3.5));
  },
  !1
);
new Pf(".type-text", {
  strings: [
    "Welcome to my website \u{1F44B}",
    "I'm a Software Engineer \u{1F4BB}^1000",
  ],
  typeSpeed: 40,
  backSpeed: 30,
  loop: !0,
});
let zn = "",
  Nn = "",
  On = "",
  qr = "",
  Xe = [],
  cn = [];
const Ct = document.getElementById("project-img"),
  Up = document.getElementsByClassName("project"),
  ai = (s) => {
    (document.getElementById("project-title").textContent = zn),
      (document.getElementById("description-paragraph").textContent = Nn),
      (document.getElementById("try-link").href = On);
    const e = document.getElementById("git-link");
    s
      ? ((e.href = qr), (e.style.display = "block"))
      : (e.style.display = "none");
    const t = document.getElementById("stack");
    for (let n = 0; n < cn.length; n++) {
      const i = document.createElement("img");
      (i.src = cn[n]), (i.alt = ""), t.appendChild(i);
    }
    t.style.alignSelf = "center";
  },
  zp = (s) => {
    switch (s) {
      case "p1":
        (zn = "Scrabble Online"),
          (Nn =
            "This scrabble game was made for a school project. You can chose between multiplayer mode allowing you to play with friends and random people online or a single player mode against an AI with an easy and hard difficulty."),
          (On = ""),
          (qr = ""),
          (Xe = [Xf, qf, Wf, Qf, Jf, Yf, jf]),
          (cn = [ep, tp, np, ip, _p]),
          (Ct.src = Xe[0]),
          ai(!0);
        break;
      case "p2":
        (zn = "Prodigy"),
          (Nn =
            "When working at CAE. I had the chance to contribute to their new image generator (Prodigy)."),
          (On =
            "https://www.cae.com/news-events/press-releases/cae-launches-new-cae-prodigy-image-generator/"),
          (qr = ""),
          (Xe = [Zf, Kf, $f]),
          (cn = [op, rp, sp, ap]),
          (Ct.src = Xe[0]),
          ai(!0);
        break;
      case "p3":
        (zn = "Self Driving Car"),
          (Nn =
            "Self driving robot capable of following a line while being able to turn and stop when facing obstacles. It can be controlled by a wireless infrared signals and can also play sounds. This robot was build from the ground up including the wires, the mechanical parts and the motherboard."),
          (On = "https://cours.polymtl.ca/inf1900/"),
          (Xe = [lp, cp]),
          (cn = [up, hp, fp, dp]),
          (Ct.src = Xe[0]),
          ai(!1);
        break;
      case "p4":
        (zn = "LGS (IBM) Data anonymisation tool"),
          (Nn =
            "Check the presentation video :)"),
          (On = "https://www.youtube.com/playlist?list=PLldj85ZGYGp0aAc7zpjhmnNI9rNJqbmwv"),
          (Xe = [pp, mp, gp]),
          (cn = [Ea, vp, xp]),
          (Ct.src = Xe[0]),
          ai(!1);
        break;
      case "p5":
        (zn = "Harraga simulator"),
          (Nn =
            "A Unity video game made to work perfectly on mobile device"),
          (Xe = [Mp]),
          (On = "https://www.youtube.com/watch?v=ujg-EjgO3AM&t=9s"),
          (cn = [Ea, yp]),
          (Ct.src = Xe[0]),
          ai(!1);
        break;
    }
    setTimeout(() => {
      (document.getElementById("blanket").style.display = "block"),
        (document.getElementById("projects-description").style.display =
          "flex");
    }, 100);
  };
for (const s of Up)
  s.addEventListener("click", () => {
    zp(s.id);
  });
let Lt = 0;
const Np = document.getElementById("switch-left"),
  Op = document.getElementById("switch-right"),
  kp = document.getElementById("close-project");
kp.addEventListener("click", () => {
  (document.getElementById("blanket").style.display = "none"),
    (document.getElementById("projects-description").style.display = "none");
  const s = document.getElementById("stack");
  for (; s.firstChild; ) s.removeChild(s.lastChild);
});
const Vp = () => {
    (Ct.src = Xe[0]),
      Lt >= Xe.length - 1
        ? ((Lt = 0), (Ct.src = Xe[Lt]))
        : ((Ct.src = Xe[Lt + 1]), Lt++);
  },
  Gp = () => {
    Lt < 1
      ? ((Lt = Xe.length - 1), (Ct.src = Xe[Lt]))
      : ((Ct.src = Xe[Lt - 1]), Lt--);
  };
Np.addEventListener("click", Gp, !1);
Op.addEventListener("click", Vp, !1);
en.render(Ht, Gt);
Array(1e3).fill().forEach(Fp);
ro();
