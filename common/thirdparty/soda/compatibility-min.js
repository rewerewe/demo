(function (c) {
    var o = (void 0);
    var n = 100000;

    function F(N) {
        switch (typeof N) {
            case "undefined":
                return "undefined";
            case "boolean":
                return "boolean";
            case "number":
                return "number";
            case "string":
                return "string";
            default:
                return N === null ? "null" : "object"
        }
    }

    function b(N) {
        return Object.prototype.toString.call(N).replace(/^\[object *|\]$/g, "")
    }

    function M(N) {
        return typeof N === "function"
    }

    function f(N) {
        if (N === null || N === o) {
            throw TypeError()
        }
        return Object(N)
    }

    function d(N) {
        return N >> 0
    }

    function v(N) {
        return N >>> 0
    }
    var l = Math.LN2,
        y = Math.abs,
        g = Math.floor,
        k = Math.log,
        t = Math.max,
        L = Math.min,
        x = Math.pow,
        G = Math.round;
    (function () {
        var O = Object.defineProperty;
        var N = !(function () {
            try {
                return Object.defineProperty({}, "x", {})
            } catch (P) {
                return false
            }
        }());
        if (!O || N) {
            Object.defineProperty = function (R, S, Q) {
                if (O) {
                    try {
                        return O(R, S, Q)
                    } catch (P) {}
                }
                if (R !== Object(R)) {
                    throw TypeError("Object.defineProperty called on non-object")
                }
                if (Object.prototype.__defineGetter__ && ("get" in Q)) {
                    Object.prototype.__defineGetter__.call(R, S, Q.get)
                }
                if (Object.prototype.__defineSetter__ && ("set" in Q)) {
                    Object.prototype.__defineSetter__.call(R, S, Q.set)
                }
                if ("value" in Q) {
                    R[S] = Q.value
                }
                return R
            }
        }
    }());

    function p(P) {
        if ("TYPED_ARRAY_POLYFILL_NO_ARRAY_ACCESSORS" in c) {
            return
        }
        if (P.length > n) {
            throw RangeError("Array too large for polyfill")
        }

        function N(Q) {
            Object.defineProperty(P, Q, {
                get: function () {
                    return P._getter(Q)
                },
                set: function (R) {
                    P._setter(Q, R)
                },
                enumerable: true,
                configurable: false
            })
        }
        var O;
        for (O = 0; O < P.length; O += 1) {
            N(O)
        }
    }

    function D(P, O) {
        var N = 32 - O;
        return (P << N) >> N
    }

    function q(P, O) {
        var N = 32 - O;
        return (P << N) >>> N
    }

    function e(N) {
        return [N & 255]
    }

    function u(N) {
        return D(N[0], 8)
    }

    function j(N) {
        return [N & 255]
    }

    function z(N) {
        return q(N[0], 8)
    }

    function K(N) {
        N = G(Number(N));
        return [N < 0 ? 0 : N > 255 ? 255 : N & 255]
    }

    function i(N) {
        return [N & 255, (N >> 8) & 255]
    }

    function A(N) {
        return D(N[1] << 8 | N[0], 16)
    }

    function E(N) {
        return [N & 255, (N >> 8) & 255]
    }

    function m(N) {
        return q(N[1] << 8 | N[0], 16)
    }

    function w(N) {
        return [N & 255, (N >> 8) & 255, (N >> 16) & 255, (N >> 24) & 255]
    }

    function a(N) {
        return D(N[3] << 24 | N[2] << 16 | N[1] << 8 | N[0], 32)
    }

    function h(N) {
        return [N & 255, (N >> 8) & 255, (N >> 16) & 255, (N >> 24) & 255]
    }

    function B(N) {
        return q(N[3] << 24 | N[2] << 16 | N[1] << 8 | N[0], 32)
    }

    function C(X, O, N) {
        var Q = (1 << (O - 1)) - 1;

        function V(ad) {
            var ab = g(ad),
                ac = ad - ab;
            if (ac < 0.5) {
                return ab
            }
            if (ac > 0.5) {
                return ab + 1
            }
            return ab % 2 ? ab + 1 : ab
        }
        var aa, T, R;
        if (X !== X) {
            T = (1 << O) - 1;
            R = x(2, N - 1);
            aa = 0
        } else {
            if (X === Infinity || X === -Infinity) {
                T = (1 << O) - 1;
                R = 0;
                aa = (X < 0) ? 1 : 0
            } else {
                if (X === 0) {
                    T = 0;
                    R = 0;
                    aa = (1 / X === -Infinity) ? 1 : 0
                } else {
                    aa = X < 0;
                    X = y(X);
                    if (X >= x(2, 1 - Q)) {
                        T = L(g(k(X) / l), 1023);
                        var S = X / x(2, T);
                        if (S < 1) {
                            T -= 1;
                            S *= 2
                        }
                        if (S >= 2) {
                            T += 1;
                            S /= 2
                        }
                        var U = x(2, N);
                        R = V(S * U) - U;
                        T += Q;
                        if (R / U >= 1) {
                            T += 1;
                            R = 0
                        }
                        if (T > 2 * Q) {
                            T = (1 << O) - 1;
                            R = 0
                        }
                    } else {
                        T = 0;
                        R = V(X / x(2, 1 - Q - N))
                    }
                }
            }
        }
        var Y = [],
            P;
        for (P = N; P; P -= 1) {
            Y.push(R % 2 ? 1 : 0);
            R = g(R / 2)
        }
        for (P = O; P; P -= 1) {
            Y.push(T % 2 ? 1 : 0);
            T = g(T / 2)
        }
        Y.push(aa ? 1 : 0);
        Y.reverse();
        var W = Y.join("");
        var Z = [];
        while (W.length) {
            Z.unshift(parseInt(W.substring(0, 8), 2));
            W = W.substring(8)
        }
        return Z
    }

    function J(Y, O, N) {
        var W = [],
            Q, P, V, U, R, X, T, S;
        for (Q = 0; Q < Y.length; ++Q) {
            V = Y[Q];
            for (P = 8; P; P -= 1) {
                W.push(V % 2 ? 1 : 0);
                V = V >> 1
            }
        }
        W.reverse();
        U = W.join("");
        R = (1 << (O - 1)) - 1;
        X = parseInt(U.substring(0, 1), 2) ? -1 : 1;
        T = parseInt(U.substring(1, 1 + O), 2);
        S = parseInt(U.substring(1 + O), 2);
        if (T === (1 << O) - 1) {
            return S !== 0 ? NaN : X * Infinity
        } else {
            if (T > 0) {
                return X * x(2, T - R) * (1 + S / x(2, N))
            } else {
                if (S !== 0) {
                    return X * x(2, -(R - 1)) * (S / x(2, N))
                } else {
                    return X < 0 ? -0 : 0
                }
            }
        }
    }

    function s(N) {
        return J(N, 11, 52)
    }

    function I(N) {
        return C(N, 11, 52)
    }

    function r(N) {
        return J(N, 8, 23)
    }

    function H(N) {
        return C(N, 8, 23)
    }(function () {
        function W(ab) {
            ab = d(ab);
            if (ab < 0) {
                throw RangeError("ArrayBuffer size is not a small enough positive integer.")
            }
            Object.defineProperty(this, "byteLength", {
                value: ab
            });
            Object.defineProperty(this, "_bytes", {
                value: Array(ab)
            });
            for (var aa = 0; aa < ab; aa += 1) {
                this._bytes[aa] = 0
            }
        }
        c.ArrayBuffer = c.ArrayBuffer || W;

        function V() {
            if (!arguments.length || typeof arguments[0] !== "object") {
                return (function (aa) {
                    aa = d(aa);
                    if (aa < 0) {
                        throw RangeError("length is not a small enough positive integer.")
                    }
                    Object.defineProperty(this, "length", {
                        value: aa
                    });
                    Object.defineProperty(this, "byteLength", {
                        value: aa * this.BYTES_PER_ELEMENT
                    });
                    Object.defineProperty(this, "buffer", {
                        value: new W(this.byteLength)
                    });
                    Object.defineProperty(this, "byteOffset", {
                        value: 0
                    })
                }).apply(this, arguments)
            }
            if (arguments.length >= 1 && F(arguments[0]) === "object" && arguments[0] instanceof V) {
                return (function (ac) {
                    if (this.constructor !== ac.constructor) {
                        throw TypeError()
                    }
                    var aa = ac.length * this.BYTES_PER_ELEMENT;
                    Object.defineProperty(this, "buffer", {
                        value: new W(aa)
                    });
                    Object.defineProperty(this, "byteLength", {
                        value: aa
                    });
                    Object.defineProperty(this, "byteOffset", {
                        value: 0
                    });
                    Object.defineProperty(this, "length", {
                        value: ac.length
                    });
                    for (var ab = 0; ab < this.length; ab += 1) {
                        this._setter(ab, ac._getter(ab))
                    }
                }).apply(this, arguments)
            }
            if (arguments.length >= 1 && F(arguments[0]) === "object" && !(arguments[0] instanceof V) && !(arguments[0] instanceof W || b(arguments[0]) === "ArrayBuffer")) {
                return (function (ad) {
                    var aa = ad.length * this.BYTES_PER_ELEMENT;
                    Object.defineProperty(this, "buffer", {
                        value: new W(aa)
                    });
                    Object.defineProperty(this, "byteLength", {
                        value: aa
                    });
                    Object.defineProperty(this, "byteOffset", {
                        value: 0
                    });
                    Object.defineProperty(this, "length", {
                        value: ad.length
                    });
                    for (var ab = 0; ab < this.length; ab += 1) {
                        var ac = ad[ab];
                        this._setter(ab, Number(ac))
                    }
                }).apply(this, arguments)
            }
            if (arguments.length >= 1 && F(arguments[0]) === "object" && (arguments[0] instanceof W || b(arguments[0]) === "ArrayBuffer")) {
                return (function (aa, ac, ad) {
                    ac = v(ac);
                    if (ac > aa.byteLength) {
                        throw RangeError("byteOffset out of range")
                    }
                    if (ac % this.BYTES_PER_ELEMENT) {
                        throw RangeError("buffer length minus the byteOffset is not a multiple of the element size.")
                    }
                    if (ad === o) {
                        var ab = aa.byteLength - ac;
                        if (ab % this.BYTES_PER_ELEMENT) {
                            throw RangeError("length of buffer minus byteOffset not a multiple of the element size")
                        }
                        ad = ab / this.BYTES_PER_ELEMENT
                    } else {
                        ad = v(ad);
                        ab = ad * this.BYTES_PER_ELEMENT
                    }
                    if ((ac + ab) > aa.byteLength) {
                        throw RangeError("byteOffset and length reference an area beyond the end of the buffer")
                    }
                    Object.defineProperty(this, "buffer", {
                        value: aa
                    });
                    Object.defineProperty(this, "byteLength", {
                        value: ab
                    });
                    Object.defineProperty(this, "byteOffset", {
                        value: ac
                    });
                    Object.defineProperty(this, "length", {
                        value: ad
                    })
                }).apply(this, arguments)
            }
            throw TypeError()
        }
        Object.defineProperty(V, "from", {
            value: function (aa) {
                return new this(aa)
            }
        });
        Object.defineProperty(V, "of", {
            value: function () {
                return new this(arguments)
            }
        });
        var Q = {};
        V.prototype = Q;
        Object.defineProperty(V.prototype, "_getter", {
            value: function (ab) {
                if (arguments.length < 1) {
                    throw SyntaxError("Not enough arguments")
                }
                ab = v(ab);
                if (ab >= this.length) {
                    return o
                }
                var aa = [],
                    ac, ad;
                for (ac = 0, ad = this.byteOffset + ab * this.BYTES_PER_ELEMENT; ac < this.BYTES_PER_ELEMENT; ac += 1, ad += 1) {
                    aa.push(this.buffer._bytes[ad])
                }
                return this._unpack(aa)
            }
        });
        Object.defineProperty(V.prototype, "get", {
            value: V.prototype._getter
        });
        Object.defineProperty(V.prototype, "_setter", {
            value: function (ab, ad) {
                if (arguments.length < 2) {
                    throw SyntaxError("Not enough arguments")
                }
                ab = v(ab);
                if (ab >= this.length) {
                    return
                }
                var aa = this._pack(ad),
                    ac, ae;
                for (ac = 0, ae = this.byteOffset + ab * this.BYTES_PER_ELEMENT; ac < this.BYTES_PER_ELEMENT; ac += 1, ae += 1) {
                    this.buffer._bytes[ae] = aa[ac]
                }
            }
        });
        Object.defineProperty(V.prototype, "constructor", {
            value: V
        });
        Object.defineProperty(V.prototype, "copyWithin", {
            value: function (ag, aa) {
                var ac = arguments[2];
                var ab = f(this);
                var an = ab.length;
                var af = v(an);
                af = t(af, 0);
                var ah = d(ag);
                var ak;
                if (ah < 0) {
                    ak = t(af + ah, 0)
                } else {
                    ak = L(ah, af)
                }
                var ae = d(aa);
                var aj;
                if (ae < 0) {
                    aj = t(af + ae, 0)
                } else {
                    aj = L(ae, af)
                }
                var am;
                if (ac === o) {
                    am = af
                } else {
                    am = d(ac)
                }
                var al;
                if (am < 0) {
                    al = t(af + am, 0)
                } else {
                    al = L(am, af)
                }
                var ad = L(al - aj, af - ak);
                var ai;
                if (aj < ak && ak < aj + ad) {
                    ai = -1;
                    aj = aj + ad - 1;
                    ak = ak + ad - 1
                } else {
                    ai = 1
                }
                while (ad > 0) {
                    ab._setter(ak, ab._getter(aj));
                    aj = aj + ai;
                    ak = ak + ai;
                    ad = ad - 1
                }
                return ab
            }
        });
        Object.defineProperty(V.prototype, "every", {
            value: function (ab) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ae = Object(this);
                var aa = v(ae.length);
                if (!M(ab)) {
                    throw TypeError()
                }
                var ac = arguments[1];
                for (var ad = 0; ad < aa; ad++) {
                    if (!ab.call(ac, ae._getter(ad), ad, ae)) {
                        return false
                    }
                }
                return true
            }
        });
        Object.defineProperty(V.prototype, "fill", {
            value: function (ag) {
                var aa = arguments[1],
                    ad = arguments[2];
                var ab = f(this);
                var aj = ab.length;
                var af = v(aj);
                af = t(af, 0);
                var ae = d(aa);
                var ac;
                if (ae < 0) {
                    ac = t((af + ae), 0)
                } else {
                    ac = L(ae, af)
                }
                var ai;
                if (ad === o) {
                    ai = af
                } else {
                    ai = d(ad)
                }
                var ah;
                if (ai < 0) {
                    ah = t((af + ai), 0)
                } else {
                    ah = L(ai, af)
                }
                while (ac < ah) {
                    ab._setter(ac, ag);
                    ac += 1
                }
                return ab
            }
        });
        Object.defineProperty(V.prototype, "filter", {
            value: function (ab) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var af = Object(this);
                var aa = v(af.length);
                if (!M(ab)) {
                    throw TypeError()
                }
                var ae = [];
                var ad = arguments[1];
                for (var ac = 0; ac < aa; ac++) {
                    var ag = af._getter(ac);
                    if (ab.call(ad, ag, ac, af)) {
                        ae.push(ag)
                    }
                }
                return new this.constructor(ae)
            }
        });
        Object.defineProperty(V.prototype, "find", {
            value: function (ac) {
                var ah = f(this);
                var af = ah.length;
                var ab = v(af);
                if (!M(ac)) {
                    throw TypeError()
                }
                var ae = arguments.length > 1 ? arguments[1] : o;
                var ad = 0;
                while (ad < ab) {
                    var ag = ah._getter(ad);
                    var aa = ac.call(ae, ag, ad, ah);
                    if (Boolean(aa)) {
                        return ag
                    }++ad
                }
                return o
            }
        });
        Object.defineProperty(V.prototype, "findIndex", {
            value: function (ac) {
                var ah = f(this);
                var af = ah.length;
                var ab = v(af);
                if (!M(ac)) {
                    throw TypeError()
                }
                var ae = arguments.length > 1 ? arguments[1] : o;
                var ad = 0;
                while (ad < ab) {
                    var ag = ah._getter(ad);
                    var aa = ac.call(ae, ag, ad, ah);
                    if (Boolean(aa)) {
                        return ad
                    }++ad
                }
                return -1
            }
        });
        Object.defineProperty(V.prototype, "forEach", {
            value: function (ab) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ae = Object(this);
                var aa = v(ae.length);
                if (!M(ab)) {
                    throw TypeError()
                }
                var ad = arguments[1];
                for (var ac = 0; ac < aa; ac++) {
                    ab.call(ad, ae._getter(ac), ac, ae)
                }
            }
        });
        Object.defineProperty(V.prototype, "indexOf", {
            value: function (ac) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ad = Object(this);
                var aa = v(ad.length);
                if (aa === 0) {
                    return -1
                }
                var ae = 0;
                if (arguments.length > 0) {
                    ae = Number(arguments[1]);
                    if (ae !== ae) {
                        ae = 0
                    } else {
                        if (ae !== 0 && ae !== (1 / 0) && ae !== -(1 / 0)) {
                            ae = (ae > 0 || -1) * g(y(ae))
                        }
                    }
                }
                if (ae >= aa) {
                    return -1
                }
                var ab = ae >= 0 ? ae : t(aa - y(ae), 0);
                for (; ab < aa; ab++) {
                    if (ad._getter(ab) === ac) {
                        return ab
                    }
                }
                return -1
            }
        });
        Object.defineProperty(V.prototype, "join", {
            value: function (ae) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ad = Object(this);
                var aa = v(ad.length);
                var ac = Array(aa);
                for (var ab = 0; ab < aa; ++ab) {
                    ac[ab] = ad._getter(ab)
                }
                return ac.join(ae === o ? "," : ae)
            }
        });
        Object.defineProperty(V.prototype, "lastIndexOf", {
            value: function (ac) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ad = Object(this);
                var aa = v(ad.length);
                if (aa === 0) {
                    return -1
                }
                var ae = aa;
                if (arguments.length > 1) {
                    ae = Number(arguments[1]);
                    if (ae !== ae) {
                        ae = 0
                    } else {
                        if (ae !== 0 && ae !== (1 / 0) && ae !== -(1 / 0)) {
                            ae = (ae > 0 || -1) * g(y(ae))
                        }
                    }
                }
                var ab = ae >= 0 ? L(ae, aa - 1) : aa - y(ae);
                for (; ab >= 0; ab--) {
                    if (ad._getter(ab) === ac) {
                        return ab
                    }
                }
                return -1
            }
        });
        Object.defineProperty(V.prototype, "map", {
            value: function (ab) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var af = Object(this);
                var aa = v(af.length);
                if (!M(ab)) {
                    throw TypeError()
                }
                var ae = [];
                ae.length = aa;
                var ad = arguments[1];
                for (var ac = 0; ac < aa; ac++) {
                    ae[ac] = ab.call(ad, af._getter(ac), ac, af)
                }
                return new this.constructor(ae)
            }
        });
        Object.defineProperty(V.prototype, "reduce", {
            value: function (ab) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ae = Object(this);
                var aa = v(ae.length);
                if (!M(ab)) {
                    throw TypeError()
                }
                if (aa === 0 && arguments.length === 1) {
                    throw TypeError()
                }
                var ad = 0;
                var ac;
                if (arguments.length >= 2) {
                    ac = arguments[1]
                } else {
                    ac = ae._getter(ad++)
                }
                while (ad < aa) {
                    ac = ab.call(o, ac, ae._getter(ad), ad, ae);
                    ad++
                }
                return ac
            }
        });
        Object.defineProperty(V.prototype, "reduceRight", {
            value: function (ab) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ae = Object(this);
                var aa = v(ae.length);
                if (!M(ab)) {
                    throw TypeError()
                }
                if (aa === 0 && arguments.length === 1) {
                    throw TypeError()
                }
                var ad = aa - 1;
                var ac;
                if (arguments.length >= 2) {
                    ac = arguments[1]
                } else {
                    ac = ae._getter(ad--)
                }
                while (ad >= 0) {
                    ac = ab.call(o, ac, ae._getter(ad), ad, ae);
                    ad--
                }
                return ac
            }
        });
        Object.defineProperty(V.prototype, "reverse", {
            value: function () {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ae = Object(this);
                var aa = v(ae.length);
                var af = g(aa / 2);
                for (var ad = 0, ab = aa - 1; ad < af; ++ad, --ab) {
                    var ac = ae._getter(ad);
                    ae._setter(ad, ae._getter(ab));
                    ae._setter(ab, ac)
                }
                return ae
            }
        });
        Object.defineProperty(V.prototype, "set", {
            value: function (af, aj) {
                if (arguments.length < 1) {
                    throw SyntaxError("Not enough arguments")
                }
                var ah, ab, ac, ag, ae, al, ai, aa, ak, ad;
                if (typeof arguments[0] === "object" && arguments[0].constructor === this.constructor) {
                    ah = arguments[0];
                    ac = v(arguments[1]);
                    if (ac + ah.length > this.length) {
                        throw RangeError("Offset plus length of array is out of range")
                    }
                    aa = this.byteOffset + ac * this.BYTES_PER_ELEMENT;
                    ak = ah.length * this.BYTES_PER_ELEMENT;
                    if (ah.buffer === this.buffer) {
                        ad = [];
                        for (ae = 0, al = ah.byteOffset; ae < ak; ae += 1, al += 1) {
                            ad[ae] = ah.buffer._bytes[al]
                        }
                        for (ae = 0, ai = aa; ae < ak; ae += 1, ai += 1) {
                            this.buffer._bytes[ai] = ad[ae]
                        }
                    } else {
                        for (ae = 0, al = ah.byteOffset, ai = aa; ae < ak; ae += 1, al += 1, ai += 1) {
                            this.buffer._bytes[ai] = ah.buffer._bytes[al]
                        }
                    }
                } else {
                    if (typeof arguments[0] === "object" && typeof arguments[0].length !== "undefined") {
                        ab = arguments[0];
                        ag = v(ab.length);
                        ac = v(arguments[1]);
                        if (ac + ag > this.length) {
                            throw RangeError("Offset plus length of array is out of range")
                        }
                        for (ae = 0; ae < ag; ae += 1) {
                            al = ab[ae];
                            this._setter(ac + ae, Number(al))
                        }
                    } else {
                        throw TypeError("Unexpected argument type(s)")
                    }
                }
            }
        });
        Object.defineProperty(V.prototype, "slice", {
            value: function (aa, ae) {
                var ab = f(this);
                var an = ab.length;
                var ai = v(an);
                var ah = d(aa);
                var ad = (ah < 0) ? t(ai + ah, 0) : L(ah, ai);
                var am = (ae === o) ? ai : d(ae);
                var al = (am < 0) ? t(ai + am, 0) : L(am, ai);
                var ag = al - ad;
                var aj = ab.constructor;
                var ak = new aj(ag);
                var ac = 0;
                while (ad < al) {
                    var af = ab._getter(ad);
                    ak._setter(ac, af);
                    ++ad;
                    ++ac
                }
                return ak
            }
        });
        Object.defineProperty(V.prototype, "some", {
            value: function (ab) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ae = Object(this);
                var aa = v(ae.length);
                if (!M(ab)) {
                    throw TypeError()
                }
                var ad = arguments[1];
                for (var ac = 0; ac < aa; ac++) {
                    if (ab.call(ad, ae._getter(ac), ac, ae)) {
                        return true
                    }
                }
                return false
            }
        });
        Object.defineProperty(V.prototype, "sort", {
            value: function (ae) {
                if (this === o || this === null) {
                    throw TypeError()
                }
                var ad = Object(this);
                var aa = v(ad.length);
                var ac = Array(aa);
                for (var ab = 0; ab < aa; ++ab) {
                    ac[ab] = ad._getter(ab)
                }
                if (ae) {
                    ac.sort(ae)
                } else {
                    ac.sort()
                }
                for (ab = 0; ab < aa; ++ab) {
                    ad._setter(ab, ac[ab])
                }
                return ad
            }
        });
        Object.defineProperty(V.prototype, "subarray", {
            value: function (ad, ab) {
                function ac(af, ag, ae) {
                    return af < ag ? ag : af > ae ? ae : af
                }
                ad = d(ad);
                ab = d(ab);
                if (arguments.length < 1) {
                    ad = 0
                }
                if (arguments.length < 2) {
                    ab = this.length
                }
                if (ad < 0) {
                    ad = this.length + ad
                }
                if (ab < 0) {
                    ab = this.length + ab
                }
                ad = ac(ad, 0, this.length);
                ab = ac(ab, 0, this.length);
                var aa = ab - ad;
                if (aa < 0) {
                    aa = 0
                }
                return new this.constructor(this.buffer, this.byteOffset + ad * this.BYTES_PER_ELEMENT, aa)
            }
        });

        function T(aa, ac, ae) {
            var ab = function () {
                Object.defineProperty(this, "constructor", {
                    value: ab
                });
                V.apply(this, arguments);
                p(this)
            };
            if ("__proto__" in ab) {
                ab.__proto__ = V
            } else {
                ab.from = V.from;
                ab.of = V.of
            }
            ab.BYTES_PER_ELEMENT = aa;
            var ad = function () {};
            ad.prototype = Q;
            ab.prototype = new ad();
            Object.defineProperty(ab.prototype, "BYTES_PER_ELEMENT", {
                value: aa
            });
            Object.defineProperty(ab.prototype, "_pack", {
                value: ac
            });
            Object.defineProperty(ab.prototype, "_unpack", {
                value: ae
            });
            return ab
        }
        var S = T(1, e, u);
        var Z = T(1, j, z);
        var X = T(1, K, z);
        var R = T(2, i, A);
        var O = T(2, E, m);
        var N = T(4, w, a);
        var Y = T(4, h, B);
        var U = T(4, H, r);
        var P = T(8, I, s);
        c.Int8Array = c.Int8Array || S;
        c.Uint8Array = c.Uint8Array || Z;
        c.Uint8ClampedArray = c.Uint8ClampedArray || X;
        c.Int16Array = c.Int16Array || R;
        c.Uint16Array = c.Uint16Array || O;
        c.Int32Array = c.Int32Array || N;
        c.Uint32Array = c.Uint32Array || Y;
        c.Float32Array = c.Float32Array || U;
        c.Float64Array = c.Float64Array || P
    }());
    (function () {
        function P(T, S) {
            return M(T.get) ? T.get(S) : T[S]
        }
        var Q = (function () {
            var T = new Uint16Array([4660]),
                S = new Uint8Array(T.buffer);
            return P(S, 0) === 18
        }());

        function R(S, U, T) {
            if (!(S instanceof ArrayBuffer || b(S) === "ArrayBuffer")) {
                throw TypeError()
            }
            U = v(U);
            if (U > S.byteLength) {
                throw RangeError("byteOffset out of range")
            }
            if (T === o) {
                T = S.byteLength - U
            } else {
                T = v(T)
            }
            if ((U + T) > S.byteLength) {
                throw RangeError("byteOffset and length reference an area beyond the end of the buffer")
            }
            Object.defineProperty(this, "buffer", {
                value: S
            });
            Object.defineProperty(this, "byteLength", {
                value: T
            });
            Object.defineProperty(this, "byteOffset", {
                value: U
            })
        }

        function N(T) {
            return function S(W, Y) {
                W = v(W);
                if (W + T.BYTES_PER_ELEMENT > this.byteLength) {
                    throw RangeError("Array index out of range")
                }
                W += this.byteOffset;
                var X = new Uint8Array(this.buffer, W, T.BYTES_PER_ELEMENT),
                    U = [];
                for (var V = 0; V < T.BYTES_PER_ELEMENT; V += 1) {
                    U.push(P(X, V))
                }
                if (Boolean(Y) === Boolean(Q)) {
                    U.reverse()
                }
                return P(new T(new Uint8Array(U).buffer), 0)
            }
        }
        Object.defineProperty(R.prototype, "getUint8", {
            value: N(Uint8Array)
        });
        Object.defineProperty(R.prototype, "getInt8", {
            value: N(Int8Array)
        });
        Object.defineProperty(R.prototype, "getUint16", {
            value: N(Uint16Array)
        });
        Object.defineProperty(R.prototype, "getInt16", {
            value: N(Int16Array)
        });
        Object.defineProperty(R.prototype, "getUint32", {
            value: N(Uint32Array)
        });
        Object.defineProperty(R.prototype, "getInt32", {
            value: N(Int32Array)
        });
        Object.defineProperty(R.prototype, "getFloat32", {
            value: N(Float32Array)
        });
        Object.defineProperty(R.prototype, "getFloat64", {
            value: N(Float64Array)
        });

        function O(T) {
            return function S(Y, Z, aa) {
                Y = v(Y);
                if (Y + T.BYTES_PER_ELEMENT > this.byteLength) {
                    throw RangeError("Array index out of range")
                }
                var ab = new T([Z]),
                    V = new Uint8Array(ab.buffer),
                    U = [],
                    X, W;
                for (X = 0; X < T.BYTES_PER_ELEMENT; X += 1) {
                    U.push(P(V, X))
                }
                if (Boolean(aa) === Boolean(Q)) {
                    U.reverse()
                }
                W = new Uint8Array(this.buffer, Y, T.BYTES_PER_ELEMENT);
                W.set(U)
            }
        }
        Object.defineProperty(R.prototype, "setUint8", {
            value: O(Uint8Array)
        });
        Object.defineProperty(R.prototype, "setInt8", {
            value: O(Int8Array)
        });
        Object.defineProperty(R.prototype, "setUint16", {
            value: O(Uint16Array)
        });
        Object.defineProperty(R.prototype, "setInt16", {
            value: O(Int16Array)
        });
        Object.defineProperty(R.prototype, "setUint32", {
            value: O(Uint32Array)
        });
        Object.defineProperty(R.prototype, "setInt32", {
            value: O(Int32Array)
        });
        Object.defineProperty(R.prototype, "setFloat32", {
            value: O(Float32Array)
        });
        Object.defineProperty(R.prototype, "setFloat64", {
            value: O(Float64Array)
        });
        c.DataView = c.DataView || R
    }())
}(self));
(function () {
    if (typeof Uint8Array !== "undefined") {
        if (typeof Uint8Array.prototype.subarray === "undefined") {
            Uint8Array.prototype.subarray = function b(e, d) {
                return new Uint8Array(this.slice(e, d))
            };
            Float32Array.prototype.subarray = function b(e, d) {
                return new Float32Array(this.slice(e, d))
            }
        }
        if (typeof Float64Array === "undefined") {
            window.Float64Array = Float32Array
        }
        return
    }

    function b(e, d) {
        return new a(this.slice(e, d))
    }

    function c(g, e) {
        if (arguments.length < 2) {
            e = 0
        }
        for (var d = 0, f = g.length; d < f; ++d, ++e) {
            this[e] = g[d] & 255
        }
    }

    function a(e) {
        var d, f, g;
        if (typeof e === "number") {
            d = [];
            for (f = 0; f < e; ++f) {
                d[f] = 0
            }
        } else {
            if ("slice" in e) {
                d = e.slice(0)
            } else {
                d = [];
                for (f = 0, g = e.length; f < g; ++f) {
                    d[f] = e[f]
                }
            }
        }
        d.subarray = b;
        d.buffer = d;
        d.byteLength = d.length;
        d.set = c;
        if (typeof e === "object" && e.buffer) {
            d.buffer = e.buffer
        }
        return d
    }
    window.Uint8Array = a;
    window.Int8Array = a;
    window.Uint32Array = a;
    window.Int32Array = a;
    window.Uint16Array = a;
    window.Float32Array = a;
    window.Float64Array = a
})();
(function () {
    var b = typeof exports != "undefined" ? exports : typeof self != "undefined" ? self : $.global;
    var c = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

    function a(d) {
        this.message = d
    }
    a.prototype = new Error;
    a.prototype.name = "InvalidCharacterError";
    b.btoa || (b.btoa = function (g) {
        var j = String(g);
        for (var i, e, d = 0, h = c, f = ""; j.charAt(d | 0) || (h = "=", d % 1); f += h.charAt(63 & i >> 8 - d % 1 * 8)) {
            e = j.charCodeAt(d += 3 / 4);
            if (e > 255) {
                throw new a("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.")
            }
            i = i << 8 | e
        }
        return f
    });
    b.atob || (b.atob = function (g) {
        var j = String(g).replace(/[=]+$/, "");
        if (j.length % 4 == 1) {
            throw new a("'atob' failed: The string to be decoded is not correctly encoded.")
        }
        for (var i = 0, h, e, d = 0, f = ""; e = j.charAt(d++); ~e && (h = i % 4 ? h * 64 + e : e, i++ % 4) ? f += String.fromCharCode(255 & h >> (-2 * i & 6)) : 0) {
            e = c.indexOf(e)
        }
        return f
    })
}());
(function checkXMLHttpRequestResponseCompatibility() {
    var b = XMLHttpRequest.prototype;
    var f = new XMLHttpRequest();
    if (!("overrideMimeType" in f)) {
        Object.defineProperty(b, "overrideMimeType", {
            value: function c(g) {}
        })
    }
    if ("responseType" in f) {
        return
    }
    Object.defineProperty(b, "responseType", {
        get: function e() {
            return this._responseType || "text"
        },
        set: function a(g) {
            if (g === "text" || g === "arraybuffer") {
                this._responseType = g;
                if (g === "arraybuffer" && typeof this.overrideMimeType === "function") {
                    this.overrideMimeType("text/plain; charset=x-user-defined")
                }
            }
        }
    });
    if (typeof VBArray !== "undefined") {
        Object.defineProperty(b, "response", {
            get: function d() {
                if (this.responseType === "arraybuffer") {
                    return new Uint8Array(new VBArray(this.responseBody).toArray())
                } else {
                    return this.responseText
                }
            }
        });
        return
    }
    Object.defineProperty(b, "response", {
        get: function d() {
            if (this.responseType !== "arraybuffer") {
                return this.responseText
            }
            var j = this.responseText;
            var h, k = j.length;
            var g = new Uint8Array(k);
            for (h = 0; h < k; ++h) {
                g[h] = j.charCodeAt(h) & 255
            }
            return g.buffer
        }
    })
})();
(function () {
    if ("document" in self) {
        if (!("classList" in document.createElement("_"))) {
            (function (j) {
                if (!("Element" in j)) {
                    return
                }
                var a = "classList",
                    f = "prototype",
                    m = j.Element[f],
                    b = Object,
                    k = String[f].trim || function () {
                        return this.replace(/^\s+|\s+$/g, "")
                    },
                    c = Array[f].indexOf || function (q) {
                        var p = 0,
                            o = this.length;
                        for (; p < o; p++) {
                            if (p in this && this[p] === q) {
                                return p
                            }
                        }
                        return -1
                    },
                    n = function (o, p) {
                        this.name = o;
                        this.code = DOMException[o];
                        this.message = p
                    },
                    g = function (p, o) {
                        if (o === "") {
                            throw new n("SYNTAX_ERR", "An invalid or illegal string was specified")
                        }
                        if (/\s/.test(o)) {
                            throw new n("INVALID_CHARACTER_ERR", "String contains an invalid character")
                        }
                        return c.call(p, o)
                    },
                    d = function (s) {
                        var r = k.call(s.getAttribute("class") || ""),
                            q = r ? r.split(/\s+/) : [],
                            p = 0,
                            o = q.length;
                        for (; p < o; p++) {
                            this.push(q[p])
                        }
                        this._updateClassName = function () {
                            s.setAttribute("class", this.toString())
                        }
                    },
                    e = d[f] = [],
                    i = function () {
                        return new d(this)
                    };
                n[f] = Error[f];
                e.item = function (o) {
                    return this[o] || null
                };
                e.contains = function (o) {
                    o += "";
                    return g(this, o) !== -1
                };
                e.add = function () {
                    var s = arguments,
                        r = 0,
                        p = s.length,
                        q, o = false;
                    do {
                        q = s[r] + "";
                        if (g(this, q) === -1) {
                            this.push(q);
                            o = true
                        }
                    } while (++r < p);
                    if (o) {
                        this._updateClassName()
                    }
                };
                e.remove = function () {
                    var t = arguments,
                        s = 0,
                        p = t.length,
                        r, o = false,
                        q;
                    do {
                        r = t[s] + "";
                        q = g(this, r);
                        while (q !== -1) {
                            this.splice(q, 1);
                            o = true;
                            q = g(this, r)
                        }
                    } while (++s < p);
                    if (o) {
                        this._updateClassName()
                    }
                };
                e.toggle = function (p, q) {
                    p += "";
                    var o = this.contains(p),
                        r = o ? q !== true && "remove" : q !== false && "add";
                    if (r) {
                        this[r](p)
                    }
                    if (q === true || q === false) {
                        return q
                    } else {
                        return !o
                    }
                };
                e.toString = function () {
                    return this.join(" ")
                };
                if (b.defineProperty) {
                    var l = {
                        get: i,
                        enumerable: true,
                        configurable: true
                    };
                    try {
                        b.defineProperty(m, a, l)
                    } catch (h) {
                        if (h.number === -2146823252) {
                            l.enumerable = false;
                            b.defineProperty(m, a, l)
                        }
                    }
                } else {
                    if (b[f].__defineGetter__) {
                        m.__defineGetter__(a, i)
                    }
                }
            }(self))
        } else {
            (function () {
                var b = document.createElement("_");
                b.classList.add("c1", "c2");
                if (!b.classList.contains("c2")) {
                    var c = function (e) {
                        var d = DOMTokenList.prototype[e];
                        DOMTokenList.prototype[e] = function (h) {
                            var g, f = arguments.length;
                            for (g = 0; g < f; g++) {
                                h = arguments[g];
                                d.call(this, h)
                            }
                        }
                    };
                    c("add");
                    c("remove")
                }
                b.classList.toggle("c3", false);
                if (b.classList.contains("c3")) {
                    var a = DOMTokenList.prototype.toggle;
                    DOMTokenList.prototype.toggle = function (d, e) {
                        if (1 in arguments && !this.contains(d) === !e) {
                            return e
                        } else {
                            return a.call(this, d)
                        }
                    }
                }
                b = null
            }())
        }
    }
})();
(function () {
    if (!("remove" in Element.prototype)) {
        Element.prototype.remove = function () {
            if (this.parentNode) {
                this.parentNode.removeChild(this)
            }
        }
    }
})();
(function (d) {
    if (typeof a !== "undefined") {
        return
    }
    var c = d.URL;

    function e(g) {
        var f = document.createElement("a");
        f.href = g;
        return f
    }
    d.URL = function a(g, h) {
        if (!(this instanceof d.URL)) {
            throw new TypeError("Failed to construct 'URL': Please use the 'new' operator.")
        }
        if (h) {
            g = (function () {
                var s;
                if (document.implementation && document.implementation.createHTMLDocument) {
                    s = document.implementation.createHTMLDocument("")
                } else {
                    if (document.implementation && document.implementation.createDocument) {
                        s = document.implementation.createElement("http://www.w3.org/1999/xhtml", "html", null);
                        s.documentElement.appendChild(s.createElement("head"));
                        s.documentElement.appendChild(s.createElement("body"))
                    } else {
                        if (window.ActiveXObject) {
                            s = new window.ActiveXObject("htmlfile");
                            s.write("<head></head><body></body>");
                            s.close()
                        }
                    }
                }
                if (!s) {
                    throw Error("base not supported")
                }
                var r = s.createElement("base");
                r.href = h;
                s.getElementsByTagName("head")[0].appendChild(r);
                var q = s.createElement("a");
                q.href = g;
                return q.href
            }())
        }
        var n = e(g || "");
        var m = false;
        try {
            m = (Object.defineProperties && (function () {
                var q = {};
                Object.defineProperties(q, {
                    p: {
                        get: function () {
                            return true
                        }
                    }
                });
                return q.p
            }()))
        } catch (j) {
            m = false
        }
        var p = m ? this : document.createElement("a");

        function i(r, u) {
            var t = r.split("&");
            if (u && t[0].indexOf("=") === -1) {
                t[0] = "=" + t[0]
            }
            var s = [];
            t.forEach(function (v) {
                if (v.length === 0) {
                    return
                }
                var x = v.indexOf("=");
                if (x !== -1) {
                    var w = v.substring(0, x);
                    var y = v.substring(x + 1)
                } else {
                    w = v;
                    y = ""
                }
                w = w.replace(/\+/g, " ");
                y = y.replace(/\+/g, " ");
                s.push({
                    name: w,
                    value: y
                })
            });
            var q = [];
            s.forEach(function (v) {
                q.push({
                    name: decodeURIComponent(v.name),
                    value: decodeURIComponent(v.value)
                })
            });
            return q
        }

        function k(s, v) {
            var u = [];
            if (v) {
                u = i(v)
            }
            this._setPairs = function (w) {
                u = w
            };
            this._updateSteps = function () {
                t()
            };
            var r = false;

            function t() {
                if (r) {
                    return
                }
                r = true;
                s.search = q(u);
                r = false
            }

            function q(x) {
                var w = "",
                    y = true;
                x.forEach(function (B) {
                    var z = encodeURIComponent(B.name);
                    var A = encodeURIComponent(B.value);
                    if (!y) {
                        w += "&"
                    }
                    w += z + "=" + A;
                    y = false
                });
                return w.replace(/%20/g, "+")
            }
            Object.defineProperties(this, {
                append: {
                    value: function (w, x) {
                        u.push({
                            name: w,
                            value: x
                        });
                        t()
                    }
                },
                "delete": {
                    value: function (w) {
                        for (var x = 0; x < u.length;) {
                            if (u[x].name === w) {
                                u.splice(x, 1)
                            } else {
                                ++x
                            }
                        }
                        t()
                    }
                },
                get: {
                    value: function (w) {
                        for (var x = 0; x < u.length; ++x) {
                            if (u[x].name === w) {
                                return u[x].value
                            }
                        }
                        return null
                    }
                },
                getAll: {
                    value: function (x) {
                        var w = [];
                        for (var y = 0; y < u.length; ++y) {
                            if (u[y].name === x) {
                                w.push(u[y].value)
                            }
                        }
                        return w
                    }
                },
                has: {
                    value: function (w) {
                        for (var x = 0; x < u.length; ++x) {
                            if (u[x].name === w) {
                                return true
                            }
                        }
                        return false
                    }
                },
                set: {
                    value: function (w, z) {
                        var y = false;
                        for (var x = 0; x < u.length;) {
                            if (u[x].name === w) {
                                if (!y) {
                                    u[x].value = z;
                                    y = true;
                                    ++x
                                } else {
                                    u.splice(x, 1)
                                }
                            } else {
                                ++x
                            }
                        }
                        if (!y) {
                            u.push({
                                name: w,
                                value: z
                            })
                        }
                        t()
                    }
                },
                toString: {
                    value: function () {
                        return q(u)
                    }
                }
            })
        }
        var o = new k(p, n.search ? n.search.substring(1) : null);
        Object.defineProperties(p, {
            href: {
                get: function () {
                    return n.href
                },
                set: function (q) {
                    n.href = q;
                    l();
                    f()
                }
            },
            origin: {
                get: function () {
                    if ("origin" in n) {
                        return n.origin
                    }
                    return this.protocol + "//" + this.host
                }
            },
            protocol: {
                get: function () {
                    return n.protocol
                },
                set: function (q) {
                    n.protocol = q
                }
            },
            username: {
                get: function () {
                    return n.username
                },
                set: function (q) {
                    n.username = q
                }
            },
            password: {
                get: function () {
                    return n.password
                },
                set: function (q) {
                    n.password = q
                }
            },
            host: {
                get: function () {
                    var q = {
                        "http:": /:80$/,
                        "https:": /:443$/,
                        "ftp:": /:21$/
                    } [n.protocol];
                    return q ? n.host.replace(q, "") : n.host
                },
                set: function (q) {
                    n.host = q
                }
            },
            hostname: {
                get: function () {
                    return n.hostname
                },
                set: function (q) {
                    n.hostname = q
                }
            },
            port: {
                get: function () {
                    return n.port
                },
                set: function (q) {
                    n.port = q
                }
            },
            pathname: {
                get: function () {
                    if (n.pathname.charAt(0) !== "/") {
                        return "/" + n.pathname
                    }
                    return n.pathname
                },
                set: function (q) {
                    n.pathname = q
                }
            },
            search: {
                get: function () {
                    return n.search
                },
                set: function (q) {
                    if (n.search !== q) {
                        n.search = q;
                        l();
                        f()
                    }
                }
            },
            searchParams: {
                get: function () {
                    return o
                }
            },
            hash: {
                get: function () {
                    return n.hash
                },
                set: function (q) {
                    n.hash = q;
                    l()
                }
            },
            toString: {
                value: function () {
                    return n.toString()
                }
            },
            valueOf: {
                value: function () {
                    return n.valueOf()
                }
            }
        });

        function l() {
            var q = n.href.replace(/#$|\?$|\?(?=#)/g, "");
            if (n.href !== q) {
                n.href = q
            }
        }

        function f() {
            o._setPairs(n.search ? i(n.search.substring(1)) : []);
            o._updateSteps()
        }
        return p
    };
    if (c) {
        for (var b in c) {
            if (c.hasOwnProperty(b)) {
                d.URL[b] = c[b]
            }
        }
    }
}(this));
(function (a) {
    a.URL = a.URL || a.webkitURL;
    if (a.Blob && a.URL) {
        try {
            new Blob;
            return
        } catch (d) {}
    }
    var c = a.BlobBuilder || a.WebKitBlobBuilder || a.MozBlobBuilder || (function (p) {
        var g = function (z) {
                return Object.prototype.toString.call(z).match(/^\[object\s(.*)\]$/)[1]
            },
            y = function m() {
                this.data = []
            },
            w = function i(B, z, A) {
                this.data = B;
                this.size = B.length;
                this.type = z;
                this.encoding = A
            },
            q = y.prototype,
            v = w.prototype,
            s = p.FileReaderSync,
            e = function (z) {
                this.code = this[this.name = z]
            },
            r = ("NOT_FOUND_ERR SECURITY_ERR ABORT_ERR NOT_READABLE_ERR ENCODING_ERR NO_MODIFICATION_ALLOWED_ERR INVALID_STATE_ERR SYNTAX_ERR").split(" "),
            u = r.length,
            l = p.URL || p.webkitURL || p,
            t = l.createObjectURL,
            f = l.revokeObjectURL,
            k = l,
            o = p.btoa,
            j = p.atob,
            h = p.ArrayBuffer,
            n = p.Uint8Array,
            x = /^[\w-]+:\/*\[?[\w\.:-]+\]?(?::[0-9]+)?/;
        w.fake = v.fake = true;
        while (u--) {
            e.prototype[r[u]] = u + 1
        }
        if (!l.createObjectURL) {
            k = p.URL = function (A) {
                var z = document.createElementNS("http://www.w3.org/1999/xhtml", "a"),
                    B;
                z.href = A;
                if (!("origin" in z)) {
                    if (z.protocol.toLowerCase() === "data:") {
                        z.origin = null
                    } else {
                        B = A.match(x);
                        z.origin = B && B[1]
                    }
                }
                return z
            }
        }
        k.createObjectURL = function (A) {
            var B = A.type,
                z;
            if (B === null) {
                B = "application/octet-stream"
            }
            if (A instanceof w) {
                z = "data:" + B;
                if (A.encoding === "base64") {
                    return z + ";base64," + A.data
                } else {
                    if (A.encoding === "URI") {
                        return z + "," + decodeURIComponent(A.data)
                    }
                }
                if (o) {
                    return z + ";base64," + o(A.data)
                } else {
                    return z + "," + encodeURIComponent(A.data)
                }
            } else {
                if (t) {
                    return t.call(l, A)
                }
            }
        };
        k.revokeObjectURL = function (z) {
            if (z.substring(0, 5) !== "data:" && f) {
                f.call(l, z)
            }
        };
        q.append = function (D) {
            var F = this.data;
            if (n && (D instanceof h || D instanceof n)) {
                var E = "",
                    A = new n(D),
                    B = 0,
                    C = A.length;
                for (; B < C; B++) {
                    E += String.fromCharCode(A[B])
                }
                F.push(E)
            } else {
                if (g(D) === "Blob" || g(D) === "File") {
                    if (s) {
                        var z = new s;
                        F.push(z.readAsBinaryString(D))
                    } else {
                        throw new e("NOT_READABLE_ERR")
                    }
                } else {
                    if (D instanceof w) {
                        if (D.encoding === "base64" && j) {
                            F.push(j(D.data))
                        } else {
                            if (D.encoding === "URI") {
                                F.push(decodeURIComponent(D.data))
                            } else {
                                if (D.encoding === "raw") {
                                    F.push(D.data)
                                }
                            }
                        }
                    } else {
                        if (typeof D !== "string") {
                            D += ""
                        }
                        F.push(unescape(encodeURIComponent(D)))
                    }
                }
            }
        };
        q.getBlob = function (z) {
            if (!arguments.length) {
                z = null
            }
            return new w(this.data.join(""), z, "raw")
        };
        q.toString = function () {
            return "[object BlobBuilder]"
        };
        v.slice = function (C, z, B) {
            var A = arguments.length;
            if (A < 3) {
                B = null
            }
            return new w(this.data.slice(C, A > 1 ? z : this.data.length), B, this.encoding)
        };
        v.toString = function () {
            return "[object Blob]"
        };
        v.close = function () {
            this.size = 0;
            delete this.data
        };
        return y
    }(a));
    a.Blob = function (j, h) {
        var l = h ? (h.type || "") : "";
        var g = new c();
        if (j) {
            for (var k = 0, e = j.length; k < e; k++) {
                if (Uint8Array && j[k] instanceof Uint8Array) {
                    g.append(j[k].buffer)
                } else {
                    g.append(j[k])
                }
            }
        }
        var f = g.getBlob(l);
        if (!f.slice && f.webkitSlice) {
            f.slice = f.webkitSlice
        }
        return f
    };
    var b = Object.getPrototypeOf || function (e) {
        return e.__proto__
    };
    a.Blob.prototype = b(new a.Blob())
}(typeof self !== "undefined" && self || typeof window !== "undefined" && window || this.content || this));
(function () {
    if (typeof window.CustomEvent === "function") {
        return false
    }

    function a(c, d) {
        d = d || {
            bubbles: false,
            cancelable: false,
            detail: undefined
        };
        var b = document.createEvent("CustomEvent");
        b.initCustomEvent(c, d.bubbles, d.cancelable, d.detail);
        return b
    }
    a.prototype = window.Event.prototype;
    window.CustomEvent = a
})();