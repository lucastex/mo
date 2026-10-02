module.exports = [
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ZodError",
    ()=>ZodError,
    "ZodRealError",
    ()=>ZodRealError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js [app-ssr] (ecmascript)");
;
;
;
/* Prototypes that already carry the lazy helper methods. Seeded with the
 * intrinsics so that `init` on a foreign object — it accepts any object —
 * can never install an accessor onto a prototype we do not own. */ const _installedErrorProtos = /* @__PURE__ */ new WeakSet([
    Object.prototype,
    Error.prototype
]);
/* Helper methods live as non-enumerable lazy getters on the shared
 * prototype instead of own properties on every instance. On first
 * access the getter allocates the per-instance closure and caches it
 * as a non-enumerable own property, so detached usage still works and
 * the allocation only happens for methods actually touched. */ function _lazyMethod(proto, key, make) {
    Object.defineProperty(proto, key, {
        configurable: true,
        enumerable: false,
        get () {
            const value = make(this);
            Object.defineProperty(this, key, {
                value,
                configurable: true,
                writable: true
            });
            return value;
        },
        set (value) {
            Object.defineProperty(this, key, {
                value,
                configurable: true,
                writable: true
            });
        }
    });
}
const initializer = (inst, issues)=>{
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodError"].init(inst, issues);
    inst.name = "ZodError";
    const proto = Object.getPrototypeOf(inst);
    if (_installedErrorProtos.has(proto)) return;
    _installedErrorProtos.add(proto);
    _lazyMethod(proto, "format", (self)=>(mapper)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatError"](self, mapper));
    _lazyMethod(proto, "flatten", (self)=>(mapper)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["flattenError"](self, mapper));
    _lazyMethod(proto, "addIssue", (self)=>(issue)=>{
            self.issues.push(issue);
            self.message = JSON.stringify(self.issues, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2);
        });
    _lazyMethod(proto, "addIssues", (self)=>(issues)=>{
            self.issues.push(...issues);
            self.message = JSON.stringify(self.issues, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2);
        });
    Object.defineProperty(proto, "isEmpty", {
        configurable: true,
        enumerable: false,
        get () {
            return this.issues.length === 0;
        }
    });
};
const ZodError = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$constructor"]("ZodError", initializer);
const ZodRealError = /*@__PURE__*/ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$constructor"]("ZodError", initializer, undefined, {
    Parent: Error
}); // /** @deprecated Use `z.core.$ZodErrorMapCtx` instead. */
 // export type ErrorMapCtx = core.$ZodErrorMapCtx;
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/parse.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "decode",
    ()=>decode,
    "decodeAsync",
    ()=>decodeAsync,
    "encode",
    ()=>encode,
    "encodeAsync",
    ()=>encodeAsync,
    "parse",
    ()=>parse,
    "parseAsync",
    ()=>parseAsync,
    "safeDecode",
    ()=>safeDecode,
    "safeDecodeAsync",
    ()=>safeDecodeAsync,
    "safeEncode",
    ()=>safeEncode,
    "safeEncodeAsync",
    ()=>safeEncodeAsync,
    "safeParse",
    ()=>safeParse,
    "safeParseAsync",
    ()=>safeParseAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/parse.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/classic/errors.js [app-ssr] (ecmascript)");
;
;
const parse = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_parse"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const parseAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_parseAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeParse = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_safeParse"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeParseAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_safeParseAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
;
const encode = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_encode"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const decode = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_decode"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const encodeAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_encodeAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const decodeAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_decodeAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeEncode = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_safeEncode"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeDecode = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_safeDecode"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeEncodeAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_safeEncodeAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
const safeDecodeAsync = /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$parse$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["_safeDecodeAsync"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$classic$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ZodRealError"]);
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodAsyncError",
    ()=>$ZodAsyncError,
    "$ZodEncodeError",
    ()=>$ZodEncodeError,
    "$brand",
    ()=>$brand,
    "$constructor",
    ()=>$constructor,
    "NEVER",
    ()=>NEVER,
    "config",
    ()=>config,
    "globalConfig",
    ()=>globalConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js [app-ssr] (ecmascript)");
var _a;
;
const NEVER = /*@__PURE__*/ Object.freeze({
    status: "aborted"
});
/* Shared descriptor for installing `_zod`; defineProperty reads it
 * synchronously, so reusing one object avoids a per-instance allocation. */ const _zodDesc = {
    value: undefined,
    enumerable: false
};
// null where suppressing the capture would be unrecoverable: `parse()` puts the frames back with `captureStackTrace`, so without it the throw would lose its stack. also latched to null once `stackTraceLimit` proves unassignable, which a realm can do at any point by hardening Error
let _E = "captureStackTrace" in Error ? Error : null;
// v8 captures a stack trace inside the Error constructor, which dominates a failed parse; costs only the frames, and parse() restores those. the constructor must RUN: Object.create is cheaper and passes instanceof, but Error.isError and util.types.isNativeError check an internal slot
function newError(Definition) {
    const E = _E;
    if (E) {
        const saved = E.stackTraceLimit;
        if (typeof saved === "number") {
            try {
                E.stackTraceLimit = 0;
            } catch  {
                _E = null;
                return new Definition();
            }
            try {
                return new Definition();
            } finally{
                E.stackTraceLimit = saved;
            }
        }
    }
    return new Definition();
}
/*@__NO_SIDE_EFFECTS__*/ function $constructor(name, initializer, /** This trait's members, installed once on every prototype that composes it. They cannot be declared in the initializer above: that runs per instance, and the prototype is shared. */ proto, params) {
    // Prototype for this constructor's `_zod` internals. Lazily-derived fields (`values`, `pattern`, `optin`, …) install here once rather than as an accessor on every instance.
    const zodProto = {};
    // Assigning the fields in the constructor body is what gives instances in-object slots; building the object literally and reparenting it costs a second allocation and a generic property copy.
    function Internals(def) {
        this.def = def;
        this.constr = _;
        this.traits = new Set();
    }
    Internals.prototype = zodProto;
    const protoMembers = proto;
    // One trait's members land on every prototype whose chain composes it, so the answer is per prototype rather than per trait.
    const initialized = protoMembers && new WeakSet();
    function init(inst, def) {
        if (!inst._zod) {
            _zodDesc.value = new Internals(def);
            try {
                Object.defineProperty(inst, "_zod", _zodDesc);
            } finally{
                // Cleared even on throw, so the shared descriptor never leaks one instance's internals into the next.
                _zodDesc.value = undefined;
            }
        }
        if (inst._zod.traits.has(name)) {
            return;
        }
        inst._zod.traits.add(name);
        initializer(inst, def);
        if (initialized) {
            // `super(def)` from a user subclass gives `this` a prototype the subclass owns, and installing there would overwrite whatever the subclass declared. `constr` built the instance, so its prototype is the one below the subclass's that should carry the members. A receiver whose chain never reaches that prototype installs on its own, which for a plain object handed straight to `init` means `Object.prototype` — unchanged from before.
            const own = Object.getPrototypeOf(inst);
            const ctorProto = inst._zod.constr.prototype;
            let up = own;
            while(up && up !== ctorProto)up = Object.getPrototypeOf(up);
            const target = up ?? own;
            if (!initialized.has(target)) {
                initialized.add(target);
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["members"])(target, protoMembers);
            }
        }
        // support prototype modifications; for-in avoids the array allocation of Object.keys on the (usually empty) prototype
        const proto = _.prototype;
        for(const k in proto){
            if (!Object.prototype.hasOwnProperty.call(proto, k)) continue;
            if (!(k in inst)) {
                inst[k] = proto[k].bind(inst);
            }
        }
    }
    // doesn't work if Parent has a constructor with arguments
    const Parent = params?.Parent ?? Object;
    class Definition extends Parent {
    }
    Object.defineProperty(Definition, "name", {
        value: name
    });
    function _(def) {
        const inst = params?.Parent ? newError(Definition) : this;
        init(inst, def);
        const deferred = inst._zod.deferred;
        if (deferred) {
            for (const fn of deferred){
                fn();
            }
            // Released: initializers run once, and the list would otherwise be retained for the schema's lifetime.
            inst._zod.deferred = undefined;
        }
        // Global post-processor hook. Internal: installed by `import "zod/compile"` to enable AOT compilation for every constructed schema. Runs last, once the instance is fully built, because it hands the instance to compile(). The post-processor is expected to be reentrancy-guarded by its own implementation.
        const pp = globalThis.__zod_globalConfig?.postProcessor;
        if (pp) pp(inst);
        return inst;
    }
    Object.defineProperty(_, "init", {
        value: init
    });
    Object.defineProperty(_, Symbol.hasInstance, {
        value: (inst)=>{
            if (params?.Parent && inst instanceof params.Parent) return true;
            return inst?._zod?.traits?.has(name);
        }
    });
    Object.defineProperty(_, "name", {
        value: name
    });
    return _;
}
const $brand = /*@__PURE__*/ Symbol("zod_brand");
class $ZodAsyncError extends Error {
    constructor(){
        super(`Encountered Promise during synchronous parse. Use .parseAsync() instead.`);
    }
}
class $ZodEncodeError extends Error {
    constructor(name){
        super(`Encountered unidirectional transform during encode: ${name}`);
        this.name = "ZodEncodeError";
    }
}
(_a = globalThis).__zod_globalConfig ?? (_a.__zod_globalConfig = {});
const globalConfig = globalThis.__zod_globalConfig;
function config(newConfig) {
    if (newConfig) Object.assign(globalConfig, newConfig);
    return globalConfig;
}
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodError",
    ()=>$ZodError,
    "$ZodRealError",
    ()=>$ZodRealError,
    "flattenError",
    ()=>flattenError,
    "formatError",
    ()=>formatError,
    "prettifyError",
    ()=>prettifyError,
    "toDotPath",
    ()=>toDotPath,
    "treeifyError",
    ()=>treeifyError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js [app-ssr] (ecmascript)");
;
;
/* Computing the message eagerly is expensive (pretty-printed JSON of all
 * issues), so defer it until first read. The accessor functions and
 * descriptors are shared across instances to keep error construction
 * cheap; the computed message is cached on the internals object. The
 * setter preserves plain assignment semantics for consumers that
 * overwrite `message`. */ function _getMessage() {
    const internals = this._zod;
    internals.message ?? (internals.message = JSON.stringify(internals.def, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsonStringifyReplacer"], 2));
    return internals.message;
}
function _setMessage(value) {
    this._zod.message = value;
}
const _messageDesc = {
    get: _getMessage,
    set: _setMessage,
    enumerable: true,
    configurable: true
};
const _zodDesc = {
    value: undefined,
    enumerable: false
};
const _issuesDesc = {
    value: undefined,
    enumerable: false
};
/* Prototypes that already carry the lazy `toString`. Seeded with the
 * intrinsics so that `init` on a foreign object — it accepts any object —
 * can never install an accessor onto a prototype we do not own. */ const _installedToString = /* @__PURE__ */ new WeakSet([
    Object.prototype,
    Error.prototype
]);
const initializer = (inst, def)=>{
    inst.name = "$ZodError";
    _zodDesc.value = inst._zod;
    Object.defineProperty(inst, "_zod", _zodDesc);
    _issuesDesc.value = def;
    Object.defineProperty(inst, "issues", _issuesDesc);
    // Clear the shared slots; a retained `value` pins the last error's issues.
    _zodDesc.value = undefined;
    _issuesDesc.value = undefined;
    Object.defineProperty(inst, "message", _messageDesc);
    /* `toString` lives as a non-enumerable lazy getter on the shared
     * prototype; on first access it caches a per-instance closure so
     * detached usage still works. */ const proto = Object.getPrototypeOf(inst);
    if (!_installedToString.has(proto)) {
        _installedToString.add(proto);
        Object.defineProperty(proto, "toString", {
            configurable: true,
            enumerable: false,
            get () {
                const value = ()=>this.message;
                Object.defineProperty(this, "toString", {
                    value,
                    configurable: true,
                    writable: true
                });
                return value;
            },
            set (value) {
                Object.defineProperty(this, "toString", {
                    value,
                    configurable: true,
                    writable: true
                });
            }
        });
    }
};
const $ZodError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$constructor"])("$ZodError", initializer);
const $ZodRealError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$constructor"])("$ZodError", initializer, undefined, {
    Parent: Error
});
/** Get-or-create `obj[key]` as an own data property. A path segment naming an inherited member
 * ("toString", "constructor") would otherwise read through to the prototype, and assigning
 * "__proto__" would hit the setter instead of creating a key. */ function node(obj, key, make) {
    if (!Object.prototype.hasOwnProperty.call(obj, key)) {
        if (key === "__proto__") {
            Object.defineProperty(obj, key, {
                value: make(),
                writable: true,
                enumerable: true,
                configurable: true
            });
        } else {
            obj[key] = make();
        }
    }
    return obj[key];
}
function flattenError(error, mapper = (issue)=>issue.message) {
    const fieldErrors = {};
    const formErrors = [];
    for (const sub of error.issues){
        if (sub.path.length > 0) {
            node(fieldErrors, sub.path[0], ()=>[]).push(mapper(sub));
        } else {
            formErrors.push(mapper(sub));
        }
    }
    return {
        formErrors,
        fieldErrors
    };
}
function formatError(error, mapper = (issue)=>issue.message) {
    const fieldErrors = {
        _errors: []
    };
    const processError = (error, path = [])=>{
        for (const issue of error.issues){
            if (issue.code === "invalid_union" && issue.errors.length) {
                issue.errors.map((issues)=>processError({
                        issues
                    }, [
                        ...path,
                        ...issue.path
                    ]));
            } else if (issue.code === "invalid_key") {
                processError({
                    issues: issue.issues
                }, [
                    ...path,
                    ...issue.path
                ]);
            } else if (issue.code === "invalid_element") {
                processError({
                    issues: issue.issues
                }, [
                    ...path,
                    ...issue.path
                ]);
            } else {
                const fullpath = [
                    ...path,
                    ...issue.path
                ];
                if (fullpath.length === 0) {
                    fieldErrors._errors.push(mapper(issue));
                } else {
                    let curr = fieldErrors;
                    let i = 0;
                    while(i < fullpath.length){
                        const el = fullpath[i];
                        const terminal = i === fullpath.length - 1;
                        // `_errors` is reserved by this legacy format, so merge a matching path segment into the current node instead of treating its array as a child.
                        if (el === "_errors") {
                            if (terminal) curr._errors.push(mapper(issue));
                            i++;
                            continue;
                        }
                        // A path element may collide with an inherited property name such as
                        // "__proto__" or "constructor". Truthiness checks read the prototype
                        // (so no node is created, then ._errors.push throws), and bracket
                        // assignment of "__proto__" hits the setter instead of creating an
                        // own key. Guard the read with hasOwnProperty and create the node
                        // with defineProperty so any path element becomes a real own key.
                        if (!Object.prototype.hasOwnProperty.call(curr, el)) {
                            Object.defineProperty(curr, el, {
                                value: {
                                    _errors: []
                                },
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }
                        const node = curr[el];
                        if (terminal) {
                            node._errors.push(mapper(issue));
                        }
                        curr = node;
                        i++;
                    }
                }
            }
        }
    };
    processError(error);
    return fieldErrors;
}
function treeifyError(error, mapper = (issue)=>issue.message) {
    const result = {
        errors: []
    };
    const processError = (error, path = [])=>{
        var _a;
        for (const issue of error.issues){
            if (issue.code === "invalid_union" && issue.errors.length) {
                // regular union error
                issue.errors.map((issues)=>processError({
                        issues
                    }, [
                        ...path,
                        ...issue.path
                    ]));
            } else if (issue.code === "invalid_key") {
                processError({
                    issues: issue.issues
                }, [
                    ...path,
                    ...issue.path
                ]);
            } else if (issue.code === "invalid_element") {
                processError({
                    issues: issue.issues
                }, [
                    ...path,
                    ...issue.path
                ]);
            } else {
                const fullpath = [
                    ...path,
                    ...issue.path
                ];
                if (fullpath.length === 0) {
                    result.errors.push(mapper(issue));
                    continue;
                }
                let curr = result;
                let i = 0;
                while(i < fullpath.length){
                    const el = fullpath[i];
                    const terminal = i === fullpath.length - 1;
                    if (typeof el === "string") {
                        curr.properties ?? (curr.properties = {});
                        // el may collide with an inherited property name ("__proto__",
                        // "constructor", ...); ??= reads the prototype so the node is never
                        // created and curr.errors.push throws. Guard with hasOwnProperty and
                        // create the node with defineProperty so "__proto__" becomes a real
                        // own key rather than invoking the prototype setter.
                        if (!Object.prototype.hasOwnProperty.call(curr.properties, el)) {
                            Object.defineProperty(curr.properties, el, {
                                value: {
                                    errors: []
                                },
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }
                        curr = curr.properties[el];
                    } else {
                        curr.items ?? (curr.items = []);
                        (_a = curr.items)[el] ?? (_a[el] = {
                            errors: []
                        });
                        curr = curr.items[el];
                    }
                    if (terminal) {
                        curr.errors.push(mapper(issue));
                    }
                    i++;
                }
            }
        }
    };
    processError(error);
    return result;
}
function toDotPath(_path) {
    const segs = [];
    const path = _path.map((seg)=>typeof seg === "object" ? seg.key : seg);
    for (const seg of path){
        if (typeof seg === "number") segs.push(`[${seg}]`);
        else if (typeof seg === "symbol") segs.push(`[${JSON.stringify(String(seg))}]`);
        else if (/[^\w$]/.test(seg)) segs.push(`[${JSON.stringify(seg)}]`);
        else {
            if (segs.length) segs.push(".");
            segs.push(seg);
        }
    }
    return segs.join("");
}
function prettifyError(error) {
    const lines = [];
    // sort by path length
    const issues = [
        ...error.issues
    ].sort((a, b)=>(a.path ?? []).length - (b.path ?? []).length);
    // Process each issue
    for (const issue of issues){
        lines.push(`✖ ${issue.message}`);
        if (issue.path?.length) lines.push(`  → at ${toDotPath(issue.path)}`);
    }
    // Convert Map to formatted string
    return lines.join("\n");
}
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/json-schema-processors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allProcessors",
    ()=>allProcessors,
    "anyProcessor",
    ()=>anyProcessor,
    "arrayProcessor",
    ()=>arrayProcessor,
    "bigintProcessor",
    ()=>bigintProcessor,
    "booleanProcessor",
    ()=>booleanProcessor,
    "catchProcessor",
    ()=>catchProcessor,
    "customProcessor",
    ()=>customProcessor,
    "dateProcessor",
    ()=>dateProcessor,
    "defaultProcessor",
    ()=>defaultProcessor,
    "enumProcessor",
    ()=>enumProcessor,
    "fileProcessor",
    ()=>fileProcessor,
    "functionProcessor",
    ()=>functionProcessor,
    "intersectionProcessor",
    ()=>intersectionProcessor,
    "lazyProcessor",
    ()=>lazyProcessor,
    "literalProcessor",
    ()=>literalProcessor,
    "mapProcessor",
    ()=>mapProcessor,
    "nanProcessor",
    ()=>nanProcessor,
    "neverProcessor",
    ()=>neverProcessor,
    "nonoptionalProcessor",
    ()=>nonoptionalProcessor,
    "nullProcessor",
    ()=>nullProcessor,
    "nullableProcessor",
    ()=>nullableProcessor,
    "numberProcessor",
    ()=>numberProcessor,
    "objectProcessor",
    ()=>objectProcessor,
    "optionalProcessor",
    ()=>optionalProcessor,
    "pipeProcessor",
    ()=>pipeProcessor,
    "prefaultProcessor",
    ()=>prefaultProcessor,
    "promiseProcessor",
    ()=>promiseProcessor,
    "readonlyProcessor",
    ()=>readonlyProcessor,
    "recordProcessor",
    ()=>recordProcessor,
    "setProcessor",
    ()=>setProcessor,
    "stringProcessor",
    ()=>stringProcessor,
    "successProcessor",
    ()=>successProcessor,
    "symbolProcessor",
    ()=>symbolProcessor,
    "templateLiteralProcessor",
    ()=>templateLiteralProcessor,
    "toJSONSchema",
    ()=>toJSONSchema,
    "transformProcessor",
    ()=>transformProcessor,
    "tupleProcessor",
    ()=>tupleProcessor,
    "undefinedProcessor",
    ()=>undefinedProcessor,
    "unionProcessor",
    ()=>unionProcessor,
    "unknownProcessor",
    ()=>unknownProcessor,
    "voidProcessor",
    ()=>voidProcessor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/regexes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/to-json-schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js [app-ssr] (ecmascript)");
;
;
;
const formatMap = {
    guid: "uuid",
    url: "uri",
    datetime: "date-time",
    json_string: "json-string",
    regex: ""
};
const stringProcessor = (schema, ctx, _json, _params)=>{
    const json = _json;
    json.type = "string";
    const { minimum, maximum, format, patterns, contentEncoding, laxFormat } = schema._zod.bag;
    if (typeof minimum === "number") json.minLength = minimum;
    if (typeof maximum === "number") json.maxLength = maximum;
    // custom pattern overrides format
    if (format) {
        json.format = formatMap[format] ?? format;
        if (json.format === "") delete json.format; // empty format is not valid
        // `z.iso.time()` is never full-time, and `laxFormat` carries the datetime shapes that also accept what their keyword forbids
        if (format === "time" || laxFormat) {
            delete json.format;
        }
    }
    if (contentEncoding) json.contentEncoding = contentEncoding;
    if (patterns && patterns.size > 0) {
        const patternList = [
            ...patterns
        ];
        if (patternList.length === 1) json.pattern = patternList[0].source;
        else if (patternList.length > 1) {
            json.allOf = [
                ...patternList.map((regex)=>({
                        ...ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0" ? {
                            type: "string"
                        } : {},
                        pattern: regex.source
                    }))
            ];
        }
    }
};
const numberProcessor = (schema, ctx, _json, params)=>{
    const json = _json;
    const { minimum, maximum, format, multipleOf, exclusiveMaximum, exclusiveMinimum } = schema._zod.bag;
    if (typeof format === "string" && format.includes("int")) json.type = "integer";
    else json.type = "number";
    // when both minimum and exclusiveMinimum exist, pick the more restrictive one
    const exMin = typeof exclusiveMinimum === "number" && exclusiveMinimum >= (minimum ?? Number.NEGATIVE_INFINITY);
    const exMax = typeof exclusiveMaximum === "number" && exclusiveMaximum <= (maximum ?? Number.POSITIVE_INFINITY);
    const legacy = ctx.target === "draft-04" || ctx.target === "openapi-3.0";
    if (exMin) {
        if (legacy) {
            json.minimum = exclusiveMinimum;
            json.exclusiveMinimum = true;
        } else {
            json.exclusiveMinimum = exclusiveMinimum;
        }
    } else if (typeof minimum === "number") {
        json.minimum = minimum;
    }
    if (exMax) {
        if (legacy) {
            json.maximum = exclusiveMaximum;
            json.exclusiveMaximum = true;
        } else {
            json.exclusiveMaximum = exclusiveMaximum;
        }
    } else if (typeof maximum === "number") {
        json.maximum = maximum;
    }
    if (typeof multipleOf === "number") {
        // JSON Schema requires a divisor strictly greater than zero, and a non-finite one does not survive JSON at all. A negative divisor accepts exactly what its absolute value accepts, so it still maps; zero, NaN and Infinity have no keyword form.
        if (Number.isFinite(multipleOf) && multipleOf !== 0) json.multipleOf = Math.abs(multipleOf);
        else (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, `A multipleOf divisor of ${multipleOf} cannot be represented in JSON Schema`);
    }
};
const booleanProcessor = (_schema, _ctx, json, _params)=>{
    json.type = "boolean";
};
const bigintProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "BigInt cannot be represented in JSON Schema");
};
const symbolProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Symbols cannot be represented in JSON Schema");
};
const nullProcessor = (_schema, ctx, json, _params)=>{
    if (ctx.target === "openapi-3.0") {
        json.type = "string";
        json.nullable = true;
        json.enum = [
            null
        ];
    } else {
        json.type = "null";
    }
};
const undefinedProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Undefined cannot be represented in JSON Schema");
};
const voidProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Void cannot be represented in JSON Schema");
};
const neverProcessor = (_schema, _ctx, json, _params)=>{
    json.not = {};
};
const anyProcessor = (_schema, _ctx, _json, _params)=>{
// empty schema accepts anything
};
const unknownProcessor = (_schema, _ctx, _json, _params)=>{
// empty schema accepts anything
};
const dateProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Date cannot be represented in JSON Schema");
};
const enumProcessor = (schema, _ctx, json, _params)=>{
    const def = schema._zod.def;
    const values = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getEnumValues"])(def.entries);
    // an empty enum accepts nothing, same as z.never()
    if (values.length === 0) {
        json.not = {};
        return;
    }
    // Number enums can have both string and number values
    if (values.every((v)=>typeof v === "number")) json.type = "number";
    if (values.every((v)=>typeof v === "string")) json.type = "string";
    json.enum = values;
};
const literalProcessor = (schema, ctx, json, params)=>{
    const def = schema._zod.def;
    // a literal with no values accepts nothing, same as z.never()
    if (def.values.length === 0) {
        json.not = {};
        return;
    }
    const vals = [];
    for (const val of def.values){
        if (val === undefined) {
            // a custom schema replaces the whole literal, so there is nothing left to accumulate
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Literal `undefined` cannot be represented in JSON Schema")) return;
        // otherwise do not add to vals
        } else if (typeof val === "bigint") {
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "BigInt literals cannot be represented in JSON Schema")) return;
            vals.push(Number(val));
        } else {
            vals.push(val);
        }
    }
    if (vals.length === 0) {
    // do nothing (an undefined literal was stripped)
    } else if (vals.length === 1) {
        const val = vals[0];
        json.type = val === null ? "null" : typeof val;
        if (ctx.target === "draft-04" || ctx.target === "openapi-3.0") {
            json.enum = [
                val
            ];
        } else {
            json.const = val;
        }
    } else {
        if (vals.every((v)=>typeof v === "number")) json.type = "number";
        if (vals.every((v)=>typeof v === "string")) json.type = "string";
        if (vals.every((v)=>typeof v === "boolean")) json.type = "boolean";
        if (vals.every((v)=>v === null)) json.type = "null";
        json.enum = vals;
    }
};
const nanProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "NaN cannot be represented in JSON Schema");
};
const templateLiteralProcessor = (schema, _ctx, json, _params)=>{
    const _json = json;
    const pattern = schema._zod.pattern;
    if (!pattern) throw new Error("Pattern not found in template literal");
    _json.type = "string";
    _json.pattern = pattern.source;
};
const fileProcessor = (schema, _ctx, json, _params)=>{
    const _json = json;
    const file = {
        type: "string",
        format: "binary",
        contentEncoding: "binary"
    };
    const { minimum, maximum, mime } = schema._zod.bag;
    if (minimum !== undefined) file.minLength = minimum;
    if (maximum !== undefined) file.maxLength = maximum;
    if (mime) {
        if (mime.length === 1) {
            file.contentMediaType = mime[0];
            Object.assign(_json, file);
        } else {
            Object.assign(_json, file); // shared props at root
            _json.anyOf = mime.map((m)=>({
                    contentMediaType: m
                })); // only contentMediaType differs
        }
    } else {
        Object.assign(_json, file);
    }
};
const successProcessor = (_schema, _ctx, json, _params)=>{
    json.type = "boolean";
};
const customProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Custom types cannot be represented in JSON Schema");
};
const functionProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Function types cannot be represented in JSON Schema");
};
const transformProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Transforms cannot be represented in JSON Schema");
};
const mapProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Map cannot be represented in JSON Schema");
};
const setProcessor = (schema, ctx, json, params)=>{
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Set cannot be represented in JSON Schema");
};
const arrayProcessor = (schema, ctx, _json, params)=>{
    const json = _json;
    const def = schema._zod.def;
    const { minimum, maximum } = schema._zod.bag;
    if (typeof minimum === "number") json.minItems = minimum;
    if (typeof maximum === "number") json.maxItems = maximum;
    json.type = "array";
    json.items = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.element, ctx, {
        ...params,
        path: [
            ...params.path,
            "items"
        ]
    });
};
// Transform and catch set `optin = "optional"` at runtime so the parser lets them observe an
// absent key, but their declared input type stays required. An input JSON Schema describes the
// declared type, so resolve past them to the schema that actually carries the optionality.
// Used by both `objectProcessor` (for `required`) and `tupleProcessor` (for `minItems`); see
// wiki/optionality.md, "The JSON Schema emitter reads the *static* value".
function inputOptin(schema) {
    const def = schema._zod.def;
    if (def.type === "pipe" && def.in._zod.traits.has("$ZodTransform")) {
        return inputOptin(def.out);
    }
    if (def.type === "catch") {
        return inputOptin(def.innerType);
    }
    return schema._zod.optin;
}
const objectProcessor = (schema, ctx, _json, params)=>{
    const json = _json;
    const def = schema._zod.def;
    const shape = def.shape;
    // dropping it while still emitting `additionalProperties: false` would emit a schema that rejects data this one requires
    const symbolKeys = Object.getOwnPropertySymbols(shape);
    if (symbolKeys.length && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Symbol keys cannot be represented in JSON Schema")) {
        return;
    }
    json.type = "object";
    json.properties = {};
    for(const key in shape){
        // assignProp so a __proto__ key becomes an own property instead of hitting the inherited setter on the plain {} we build into
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignProp"])(json.properties, key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(shape[key], ctx, {
            ...params,
            path: [
                ...params.path,
                "properties",
                key
            ]
        }));
    }
    // required keys
    const allKeys = new Set(Object.keys(shape));
    const requiredKeys = new Set([
        ...allKeys
    ].filter((key)=>{
        const field = def.shape[key];
        if (ctx.io === "input") {
            return inputOptin(field) === undefined;
        } else {
            return field._zod.optout === undefined;
        }
    }));
    if (requiredKeys.size > 0) {
        json.required = Array.from(requiredKeys);
    }
    // catchall
    if (def.catchall?._zod.def.type === "never") {
        // strict
        json.additionalProperties = false;
    } else if (!def.catchall) {
        // regular
        if (ctx.io === "output") json.additionalProperties = false;
    } else if (def.catchall) {
        json.additionalProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.catchall, ctx, {
            ...params,
            path: [
                ...params.path,
                "additionalProperties"
            ]
        });
    }
};
const unionProcessor = (schema, ctx, json, params)=>{
    const def = schema._zod.def;
    // Exclusive unions (inclusive === false) use oneOf (exactly one match) instead of anyOf (one or more matches). This includes both z.xor() and discriminated unions
    const isExclusive = def.inclusive === false;
    const options = def.options.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(x, ctx, {
            ...params,
            path: [
                ...params.path,
                isExclusive ? "oneOf" : "anyOf",
                i
            ]
        }));
    if (isExclusive) {
        json.oneOf = options;
    } else {
        json.anyOf = options;
    }
};
const intersectionProcessor = (schema, ctx, json, params)=>{
    const def = schema._zod.def;
    const a = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.left, ctx, {
        ...params,
        path: [
            ...params.path,
            "allOf",
            0
        ]
    });
    const b = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.right, ctx, {
        ...params,
        path: [
            ...params.path,
            "allOf",
            1
        ]
    });
    const isSimpleIntersection = (val)=>"allOf" in val && Object.keys(val).length === 1;
    const allOf = [
        ...isSimpleIntersection(a) ? a.allOf : [
            a
        ],
        ...isSimpleIntersection(b) ? b.allOf : [
            b
        ]
    ];
    json.allOf = allOf;
    // Recorded innermost first, so a nested intersection has already folded by the time this one is considered. The array is the handle rather than the schema, because a wrapper that inherits this schema shares the same array; `finalize` folds every object holding it. See `foldIntersection`.
    ctx.intersections.push(allOf);
};
const tupleProcessor = (schema, ctx, _json, params)=>{
    const json = _json;
    const def = schema._zod.def;
    json.type = "array";
    const prefixPath = ctx.target === "draft-2020-12" ? "prefixItems" : "items";
    const restPath = ctx.target === "draft-2020-12" ? "items" : ctx.target === "openapi-3.0" ? "items" : "additionalItems";
    const prefixItems = def.items.map((x, i)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(x, ctx, {
            ...params,
            path: [
                ...params.path,
                prefixPath,
                i
            ]
        }));
    const rest = def.rest ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.rest, ctx, {
        ...params,
        path: [
            ...params.path,
            restPath,
            ...ctx.target === "openapi-3.0" ? [
                def.items.length
            ] : []
        ]
    }) : null;
    let minItems = def.items.length;
    while(minItems > 0){
        const item = def.items[minItems - 1];
        const optional = ctx.io === "input" ? inputOptin(item) !== undefined : item._zod.optout === "optional";
        if (!optional) break;
        minItems--;
    }
    const maxItems = def.items.length;
    const isClosed = !def.rest;
    if (ctx.target === "draft-2020-12") {
        json.prefixItems = prefixItems;
        if (isClosed) {
            json.items = false;
        } else if (rest) {
            json.items = rest;
        }
        if (minItems > 0) json.minItems = minItems;
        if (isClosed) json.maxItems = maxItems;
    } else if (ctx.target === "openapi-3.0") {
        json.items = {
            anyOf: prefixItems
        };
        if (rest) {
            json.items.anyOf.push(rest);
        }
        if (minItems > 0) json.minItems = minItems;
        if (isClosed) json.maxItems = maxItems;
    } else {
        json.items = prefixItems;
        if (isClosed) {
            json.additionalItems = false;
        } else if (rest) {
            json.additionalItems = rest;
        }
        if (minItems > 0) json.minItems = minItems;
        if (isClosed) json.maxItems = maxItems;
    }
    // explicit user-defined length checks take precedence
    const { minimum, maximum } = schema._zod.bag;
    if (typeof minimum === "number") json.minItems = minimum;
    if (typeof maximum === "number") json.maxItems = maximum;
};
/** JSON object keys are always strings, so a numeric record key schema is re-expressed over the
 * numeric-string form the record parser matches. Deferred to `finalize`, after the flatten: a key
 * behind a wrapper only carries its own `type` before then, and a union key only has its branches.
 *
 * A numeric bound cannot apply to a property name, so `minimum` and its siblings are dropped rather
 * than carried over: keeping them beside `type: "string"` reproduces the match-nothing schema this
 * exists to fix. A key that carries one therefore emits wider than the record parses — `z.record(z.number().min(5), V)`
 * accepts `"3"` — which is the deliberate trade, since throwing on it would reject an ordinary schema
 * outright. */ function stringifyKeyNames(bySchema, json, visited) {
    // an extracted key that rewrites cannot go on sharing its definition — the string form a key position needs is not the number form every other reference wants — so it inlines. One that does not rewrite keeps the `$ref`.
    if (json.$ref) {
        // a recursive key holds its own reference inside its definition, so a node already on the path is left alone rather than resolved again
        if (visited.has(json)) return json;
        visited.add(json);
        const def = bySchema.get(json)?.def;
        if (!def) return json;
        const inlined = stringifyKeyNames(bySchema, def, visited);
        return inlined === def ? json : inlined;
    }
    for (const keyword of [
        "anyOf",
        "oneOf"
    ]){
        const branches = json[keyword];
        if (!Array.isArray(branches)) continue;
        const mapped = branches.map((branch)=>stringifyKeyNames(bySchema, branch, visited));
        // rebuilding regardless would detach a key that had nothing to re-express, dropping its `$ref` and leaking the internal `id`
        if (mapped.some((branch, i)=>branch !== branches[i])) json = {
            ...json,
            [keyword]: mapped
        };
    }
    // a member that already admits a string leaves the key unconstrained, so the node's own type re-expresses only when every member is numeric
    const types = Array.isArray(json.type) ? json.type : [
        json.type
    ];
    const numericType = !types.includes("string") && types.some((t)=>t === "number" || t === "integer");
    // a heterogeneous key carries no type at all, so its numeric members are caught here instead
    const values = json.enum ?? (json.const !== undefined ? [
        json.const
    ] : undefined);
    if (!numericType && !values?.some((v)=>typeof v === "number")) return json;
    const { minimum, maximum, exclusiveMinimum, exclusiveMaximum, multipleOf, format, id, ...rest } = json;
    if (rest.enum) rest.enum = rest.enum.map((v)=>typeof v === "number" ? String(v) : v);
    else if (typeof rest.const === "number") rest.const = String(rest.const);
    // a heterogeneous key keeps its absent type: the stringified members already say what a key may be
    if (!numericType) return rest;
    rest.type = "string";
    if (!values) rest.pattern = (types.includes("number") ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["number"] : __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$regexes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["integer"]).source;
    return rest;
}
/** Every record of one conversion, so the carriers are found in a single pass rather than once per record. */ const pendingRecords = new WeakMap();
function rewriteKeyNames(ctx) {
    // an extracted key is resolved by the object `extractToDef` left in its place, so the map is built once rather than searched per reference. `_zod.toJSONSchema` can hand the same object to two schemas, so the first entry carrying a body wins, as a search would have found it.
    const bySchema = new Map();
    for (const entry of ctx.seen.values()){
        if (entry.def && !bySchema.has(entry.schema)) bySchema.set(entry.schema, entry);
    }
    const rewrites = new Map();
    for (const record of pendingRecords.get(ctx) ?? []){
        const seen = ctx.seen.get(record);
        const names = (seen?.def ?? seen?.schema)?.propertyNames;
        if (!names || names === true || rewrites.has(names)) continue;
        const rewritten = stringifyKeyNames(bySchema, names, new Set());
        if (rewritten !== names) rewrites.set(names, rewritten);
    }
    if (!rewrites.size) return;
    // the flatten has already copied each record's own properties onto every wrapper by reference, and an extracted body is another such copy, so every carrier holding a rewritten key is updated together
    for (const entry of ctx.seen.values()){
        for (const carrier of [
            entry.schema,
            entry.def
        ]){
            const rewritten = carrier && rewrites.get(carrier.propertyNames);
            if (rewritten) carrier.propertyNames = rewritten;
        }
    }
}
const recordProcessor = (schema, ctx, _json, params)=>{
    const json = _json;
    const def = schema._zod.def;
    json.type = "object";
    // For looseRecord with regex patterns, use patternProperties. This correctly represents "only validate keys matching the pattern" semantics and composes well with allOf (intersections)
    const keyType = def.keyType;
    const keyBag = keyType._zod.bag;
    const patterns = keyBag?.patterns;
    if (def.mode === "loose" && patterns && patterns.size > 0) {
        // Use patternProperties for looseRecord with regex patterns
        const valueSchema = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.valueType, ctx, {
            ...params,
            path: [
                ...params.path,
                "patternProperties",
                "*"
            ]
        });
        json.patternProperties = {};
        for (const pattern of patterns){
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignProp"])(json.patternProperties, pattern.source, valueSchema);
        }
    } else {
        // Default behavior: use propertyNames + additionalProperties
        if (ctx.target === "draft-07" || ctx.target === "draft-2020-12") {
            json.propertyNames = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.keyType, ctx, {
                ...params,
                path: [
                    ...params.path,
                    "propertyNames"
                ]
            });
            let pending = pendingRecords.get(ctx);
            if (!pending) {
                pending = [];
                pendingRecords.set(ctx, pending);
                ctx.deferred.push(()=>rewriteKeyNames(ctx));
            }
            pending.push(schema);
        }
        json.additionalProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.valueType, ctx, {
            ...params,
            path: [
                ...params.path,
                "additionalProperties"
            ]
        });
    }
    // Add required for keys with discrete values (enum, literal, etc.)
    const keyValues = keyType._zod.values;
    // Every key shares one value schema, so an optional-in value makes the whole key set omittable on input. Output keeps them: the exhaustive branch assigns every key, even one whose value came back undefined.
    const omittableOnInput = ctx.io === "input" && inputOptin(def.valueType) !== undefined;
    if (keyValues && !def.partial && !omittableOnInput) {
        const validKeyValues = [
            ...keyValues
        ].filter((v)=>typeof v === "string" || typeof v === "number");
        if (validKeyValues.length > 0) {
            json.required = validKeyValues.map(String);
        }
    }
};
const nullableProcessor = (schema, ctx, json, params)=>{
    const def = schema._zod.def;
    const inner = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    if (ctx.target === "openapi-3.0") {
        seen.ref = def.innerType;
        json.nullable = true;
    } else {
        json.anyOf = [
            inner,
            {
                type: "null"
            }
        ];
    }
};
const nonoptionalProcessor = (schema, ctx, _json, params)=>{
    const def = schema._zod.def;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
/** Round-trips a default value through JSON so the emitted schema is guaranteed to be valid JSON.
 * A BigInt has no reliable encoding, so it goes through `unrepresentable` like any other
 * unrepresentable value. Returns a sentinel when the caller must not write a default of its own. */ const UNREPRESENTABLE_DEFAULT = Symbol();
function serializeDefaultValue(value, schema, ctx, json, params) {
    let unrepresentable = false;
    const serialized = JSON.stringify(value, (_, val)=>{
        if (typeof val !== "bigint") return val;
        unrepresentable = true;
        return null;
    });
    if (!unrepresentable) return JSON.parse(serialized);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "BigInt defaults cannot be represented in JSON Schema");
    return UNREPRESENTABLE_DEFAULT;
}
const defaultProcessor = (schema, ctx, json, params)=>{
    const def = schema._zod.def;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
    if (value !== UNREPRESENTABLE_DEFAULT) json.default = value;
};
const prefaultProcessor = (schema, ctx, json, params)=>{
    const def = schema._zod.def;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    if (ctx.io !== "input") return;
    const value = serializeDefaultValue(def.defaultValue, schema, ctx, json, params);
    if (value !== UNREPRESENTABLE_DEFAULT) json._prefault = value;
};
const catchProcessor = (schema, ctx, json, params)=>{
    const def = schema._zod.def;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    let catchValue;
    try {
        catchValue = def.catchValue(undefined);
    } catch  {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["handleUnrepresentable"])(schema, ctx, json, params, "Dynamic catch values are not supported in JSON Schema");
        return;
    }
    json.default = catchValue;
};
const pipeProcessor = (schema, ctx, _json, params)=>{
    const def = schema._zod.def;
    const inIsTransform = def.in._zod.traits.has("$ZodTransform");
    const innerType = ctx.io === "input" ? inIsTransform ? def.out : def.in : def.out;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
};
const readonlyProcessor = (schema, ctx, json, params)=>{
    const def = schema._zod.def;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
    json.readOnly = true;
};
const promiseProcessor = (schema, ctx, _json, params)=>{
    const def = schema._zod.def;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
const optionalProcessor = (schema, ctx, _json, params)=>{
    const def = schema._zod.def;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(def.innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = def.innerType;
};
const lazyProcessor = (schema, ctx, _json, params)=>{
    const innerType = schema._zod.innerType;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(innerType, ctx, params);
    const seen = ctx.seen.get(schema);
    seen.ref = innerType;
};
const allProcessors = {
    string: stringProcessor,
    number: numberProcessor,
    boolean: booleanProcessor,
    bigint: bigintProcessor,
    symbol: symbolProcessor,
    null: nullProcessor,
    undefined: undefinedProcessor,
    void: voidProcessor,
    never: neverProcessor,
    any: anyProcessor,
    unknown: unknownProcessor,
    date: dateProcessor,
    enum: enumProcessor,
    literal: literalProcessor,
    nan: nanProcessor,
    template_literal: templateLiteralProcessor,
    file: fileProcessor,
    success: successProcessor,
    custom: customProcessor,
    function: functionProcessor,
    transform: transformProcessor,
    map: mapProcessor,
    set: setProcessor,
    array: arrayProcessor,
    object: objectProcessor,
    union: unionProcessor,
    intersection: intersectionProcessor,
    tuple: tupleProcessor,
    record: recordProcessor,
    nullable: nullableProcessor,
    nonoptional: nonoptionalProcessor,
    default: defaultProcessor,
    prefault: prefaultProcessor,
    catch: catchProcessor,
    pipe: pipeProcessor,
    readonly: readonlyProcessor,
    promise: promiseProcessor,
    optional: optionalProcessor,
    lazy: lazyProcessor
};
function toJSONSchema(input, params) {
    if ("_idmap" in input) {
        // Registry case
        const registry = input;
        const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeContext"])({
            ...params,
            processors: allProcessors
        });
        const defs = {};
        // First pass: process all schemas to build the seen map
        for (const entry of registry._idmap.entries()){
            const [_, schema] = entry;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(schema, ctx);
        }
        const schemas = {};
        const external = {
            registry,
            uri: params?.uri,
            defs
        };
        // Update the context with external configuration
        ctx.external = external;
        // Second pass: emit each schema
        for (const entry of registry._idmap.entries()){
            const [key, schema] = entry;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractDefs"])(ctx, schema);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignProp"])(schemas, key, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["finalize"])(ctx, schema));
        }
        if (Object.keys(defs).length > 0) {
            const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
            schemas.__shared = {
                [defsSegment]: defs
            };
        }
        return {
            schemas
        };
    }
    // Single schema case
    const ctx = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["initializeContext"])({
        ...params,
        processors: allProcessors
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["process"])(input, ctx);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractDefs"])(ctx, input);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$to$2d$json$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["finalize"])(ctx, input);
}
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/parse.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "_decode",
    ()=>_decode,
    "_decodeAsync",
    ()=>_decodeAsync,
    "_encode",
    ()=>_encode,
    "_encodeAsync",
    ()=>_encodeAsync,
    "_parse",
    ()=>_parse,
    "_parseAsync",
    ()=>_parseAsync,
    "_safeDecode",
    ()=>_safeDecode,
    "_safeDecodeAsync",
    ()=>_safeDecodeAsync,
    "_safeEncode",
    ()=>_safeEncode,
    "_safeEncodeAsync",
    ()=>_safeEncodeAsync,
    "_safeParse",
    ()=>_safeParse,
    "_safeParseAsync",
    ()=>_safeParseAsync,
    "decode",
    ()=>decode,
    "decodeAsync",
    ()=>decodeAsync,
    "encode",
    ()=>encode,
    "encodeAsync",
    ()=>encodeAsync,
    "parse",
    ()=>parse,
    "parseAsync",
    ()=>parseAsync,
    "safeDecode",
    ()=>safeDecode,
    "safeDecodeAsync",
    ()=>safeDecodeAsync,
    "safeEncode",
    ()=>safeEncode,
    "safeEncodeAsync",
    ()=>safeEncodeAsync,
    "safeParse",
    ()=>safeParse,
    "safeParseAsync",
    ()=>safeParseAsync,
    "validate",
    ()=>validate,
    "validateAsync",
    ()=>validateAsync
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js [app-ssr] (ecmascript)");
;
;
;
// Always both keys, so the `_params` read site in `_parse` sees one object shape rather than two.
function finalizeParams(callee, params) {
    return {
        callee: params?.callee ?? callee,
        Err: params?.Err
    };
}
const _parse = (_Err)=>{
    const fn = (schema, value, _ctx, _params)=>{
        const ctx = _ctx ? {
            ..._ctx,
            async: false
        } : {
            async: false
        };
        const result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
        }
        if (result.issues.length) {
            const e = new (_params?.Err ?? _Err)(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"]())));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["captureStackTrace"](e, _params?.callee ?? fn);
            throw e;
        }
        return result.value;
    };
    return fn;
};
const parse = /* @__PURE__*/ _parse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _parseAsync = (_Err)=>{
    const fn = async (schema, value, _ctx, params)=>{
        const ctx = _ctx ? {
            ..._ctx,
            async: true
        } : {
            async: true
        };
        let result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        if (result.issues.length) {
            const e = new (params?.Err ?? _Err)(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"]())));
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["captureStackTrace"](e, params?.callee ?? fn);
            throw e;
        }
        return result.value;
    };
    return fn;
};
const parseAsync = /* @__PURE__*/ _parseAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeParse = (_Err)=>(schema, value, _ctx)=>{
        const ctx = _ctx ? {
            ..._ctx,
            async: false
        } : {
            async: false
        };
        const result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
        }
        return result.issues.length ? {
            success: false,
            error: new (_Err ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodError"])(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"]())))
        } : {
            success: true,
            data: result.value
        };
    };
const safeParse = /* @__PURE__*/ _safeParse(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeParseAsync = (_Err)=>async (schema, value, _ctx)=>{
        const ctx = _ctx ? {
            ..._ctx,
            async: true
        } : {
            async: true
        };
        let result = schema._zod.run({
            value,
            issues: []
        }, ctx);
        if (result instanceof Promise) result = await result;
        return result.issues.length ? {
            success: false,
            error: new _Err(result.issues.map((iss)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["finalizeIssue"](iss, ctx, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["config"]())))
        } : {
            success: true,
            data: result.value
        };
    };
const safeParseAsync = /* @__PURE__*/ _safeParseAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
// registry mirrors of the compiler's sentinels, so this module never imports the compiler
const COMPILE_INVALID = /* @__PURE__ */ Symbol.for("zod.compile.invalid");
const COMPILE_FALLBACK = /* @__PURE__ */ Symbol.for("zod.compile.fallback");
const validate = (schema, value, _ctx)=>{
    const validator = schema._zod.bag.validator;
    if (validator !== undefined && validator(value) !== COMPILE_INVALID) return true;
    return validateFallback(schema, value, _ctx);
};
function validateFallback(schema, value, _ctx) {
    const ctx = _ctx ? {
        ..._ctx,
        async: false
    } : {
        async: false
    };
    const fallbackRun = schema._zod.bag.fallbackRun;
    let result;
    if (fallbackRun) {
        // skip nested fast paths on the fallback, so user callbacks keep the at-most-twice bound
        ctx[COMPILE_FALLBACK] = true;
        result = fallbackRun({
            value,
            issues: []
        }, ctx);
    } else {
        result = schema._zod.run({
            value,
            issues: []
        }, ctx);
    }
    if (result instanceof Promise) {
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodAsyncError"]();
    }
    return result.issues.length === 0;
}
const validateAsync = async (schema, value, _ctx)=>{
    const ctx = _ctx ? {
        ..._ctx,
        async: true
    } : {
        async: true
    };
    let result = schema._zod.run({
        value,
        issues: []
    }, ctx);
    if (result instanceof Promise) result = await result;
    return result.issues.length === 0;
};
const _encode = (_Err)=>{
    const parse = _parse(_Err);
    const fn = (schema, value, _ctx, _params)=>{
        const ctx = _ctx ? {
            ..._ctx,
            direction: "backward"
        } : {
            direction: "backward"
        };
        return parse(schema, value, ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const encode = /* @__PURE__*/ _encode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _decode = (_Err)=>{
    const parse = _parse(_Err);
    const fn = (schema, value, _ctx, _params)=>{
        return parse(schema, value, _ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const decode = /* @__PURE__*/ _decode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _encodeAsync = (_Err)=>{
    const parseAsync = _parseAsync(_Err);
    const fn = async (schema, value, _ctx, _params)=>{
        const ctx = _ctx ? {
            ..._ctx,
            direction: "backward"
        } : {
            direction: "backward"
        };
        return await parseAsync(schema, value, ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const encodeAsync = /* @__PURE__*/ _encodeAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _decodeAsync = (_Err)=>{
    const parseAsync = _parseAsync(_Err);
    const fn = async (schema, value, _ctx, _params)=>{
        return await parseAsync(schema, value, _ctx, finalizeParams(fn, _params));
    };
    return fn;
};
const decodeAsync = /* @__PURE__*/ _decodeAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeEncode = (_Err)=>(schema, value, _ctx)=>{
        const ctx = _ctx ? {
            ..._ctx,
            direction: "backward"
        } : {
            direction: "backward"
        };
        return _safeParse(_Err)(schema, value, ctx);
    };
const safeEncode = /* @__PURE__*/ _safeEncode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeDecode = (_Err)=>(schema, value, _ctx)=>{
        return _safeParse(_Err)(schema, value, _ctx);
    };
const safeDecode = /* @__PURE__*/ _safeDecode(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeEncodeAsync = (_Err)=>async (schema, value, _ctx)=>{
        const ctx = _ctx ? {
            ..._ctx,
            direction: "backward"
        } : {
            direction: "backward"
        };
        return _safeParseAsync(_Err)(schema, value, ctx);
    };
const safeEncodeAsync = /* @__PURE__*/ _safeEncodeAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
const _safeDecodeAsync = (_Err)=>async (schema, value, _ctx)=>{
        return _safeParseAsync(_Err)(schema, value, _ctx);
    };
const safeDecodeAsync = /* @__PURE__*/ _safeDecodeAsync(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["$ZodRealError"]);
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/regexes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "base64",
    ()=>base64,
    "base64url",
    ()=>base64url,
    "bigint",
    ()=>bigint,
    "boolean",
    ()=>boolean,
    "browserEmail",
    ()=>browserEmail,
    "cidrv4",
    ()=>cidrv4,
    "cidrv6",
    ()=>cidrv6,
    "creditCard",
    ()=>creditCard,
    "cuid",
    ()=>cuid,
    "cuid2",
    ()=>cuid2,
    "date",
    ()=>date,
    "datetime",
    ()=>datetime,
    "domain",
    ()=>domain,
    "duration",
    ()=>duration,
    "e164",
    ()=>e164,
    "email",
    ()=>email,
    "emoji",
    ()=>emoji,
    "extendedDuration",
    ()=>extendedDuration,
    "guid",
    ()=>guid,
    "hex",
    ()=>hex,
    "hostname",
    ()=>hostname,
    "html5Email",
    ()=>html5Email,
    "httpProtocol",
    ()=>httpProtocol,
    "idnEmail",
    ()=>idnEmail,
    "integer",
    ()=>integer,
    "ipv4",
    ()=>ipv4,
    "ipv6",
    ()=>ipv6,
    "ksuid",
    ()=>ksuid,
    "lowercase",
    ()=>lowercase,
    "mac",
    ()=>mac,
    "md5_base64",
    ()=>md5_base64,
    "md5_base64url",
    ()=>md5_base64url,
    "md5_hex",
    ()=>md5_hex,
    "nanoid",
    ()=>nanoid,
    "nanoidOfLength",
    ()=>nanoidOfLength,
    "null",
    ()=>_null,
    "number",
    ()=>number,
    "rfc5322Email",
    ()=>rfc5322Email,
    "sha1_base64",
    ()=>sha1_base64,
    "sha1_base64url",
    ()=>sha1_base64url,
    "sha1_hex",
    ()=>sha1_hex,
    "sha256_base64",
    ()=>sha256_base64,
    "sha256_base64url",
    ()=>sha256_base64url,
    "sha256_hex",
    ()=>sha256_hex,
    "sha384_base64",
    ()=>sha384_base64,
    "sha384_base64url",
    ()=>sha384_base64url,
    "sha384_hex",
    ()=>sha384_hex,
    "sha512_base64",
    ()=>sha512_base64,
    "sha512_base64url",
    ()=>sha512_base64url,
    "sha512_hex",
    ()=>sha512_hex,
    "string",
    ()=>string,
    "time",
    ()=>time,
    "ulid",
    ()=>ulid,
    "undefined",
    ()=>_undefined,
    "unicodeEmail",
    ()=>unicodeEmail,
    "uppercase",
    ()=>uppercase,
    "uuid",
    ()=>uuid,
    "uuid4",
    ()=>uuid4,
    "uuid6",
    ()=>uuid6,
    "uuid7",
    ()=>uuid7,
    "xid",
    ()=>xid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js [app-ssr] (ecmascript)");
;
const cuid = /^[cC][0-9a-z]{6,}$/;
const cuid2 = /^[0-9a-z]+$/;
const ulid = /^[0-7][0-9A-HJKMNP-TV-Za-hjkmnp-tv-z]{25}$/;
const xid = /^[0-9a-vA-V]{20}$/;
const ksuid = /^[A-Za-z0-9]{27}$/;
const nanoid = /^[a-zA-Z0-9_-]{21}$/;
function nanoidOfLength(length) {
    return new RegExp(`^[a-zA-Z0-9_-]{${length}}$`);
}
const duration = /^P(?:(\d+W)|(?!.*W)(?=\d|T\d)(\d+Y)?(\d+M)?(\d+D)?(T(?=\d)(\d+H)?(\d+M)?(\d+([.,]\d+)?S)?)?)$/;
const extendedDuration = /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/;
const guid = /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{4}-[0-9a-fA-F]{12})$/;
const uuid = (version)=>{
    if (!version) return /^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-[1-8][0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12}|00000000-0000-0000-0000-000000000000|ffffffff-ffff-ffff-ffff-ffffffffffff)$/;
    return new RegExp(`^([0-9a-fA-F]{8}-[0-9a-fA-F]{4}-${version}[0-9a-fA-F]{3}-[89abAB][0-9a-fA-F]{3}-[0-9a-fA-F]{12})$`);
};
const uuid4 = /*@__PURE__*/ uuid(4);
const uuid6 = /*@__PURE__*/ uuid(6);
const uuid7 = /*@__PURE__*/ uuid(7);
const email = /^(?!\.)(?!.*\.\.)([A-Za-z0-9_'+\-\.]*)[A-Za-z0-9_+-]@([A-Za-z0-9][A-Za-z0-9\-]*\.)+[A-Za-z]{2,}$/;
const html5Email = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
const rfc5322Email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const unicodeEmail = /^[^\s@"]{1,64}@[^\s@]{1,255}$/u;
const idnEmail = unicodeEmail;
const browserEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
// from https://thekevinscott.com/emojis-in-javascript/#writing-a-regular-expression
// Single character class, not an alternation: the two properties overlap (U+1F9B0-U+1F9B3), so `(A|B)+` backtracks exponentially on a failed match.
const _emoji = `^[\\p{Extended_Pictographic}\\p{Emoji_Component}]+$`;
function emoji() {
    return new RegExp(_emoji, "u");
}
const ipv4 = /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/;
const ipv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))$/;
const mac = (delimiter)=>{
    const escapedDelim = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["escapeRegex"](delimiter ?? ":");
    return new RegExp(`^(?:[0-9A-F]{2}${escapedDelim}){5}[0-9A-F]{2}$|^(?:[0-9a-f]{2}${escapedDelim}){5}[0-9a-f]{2}$`);
};
const cidrv4 = /^((25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\/([0-9]|[1-2][0-9]|3[0-2])$/;
const cidrv6 = /^(([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:))\/(12[0-8]|1[01][0-9]|[1-9]?[0-9])$/;
const base64 = /^$|^(?:[0-9a-zA-Z+/]{4})*(?:(?:[0-9a-zA-Z+/]{2}==)|(?:[0-9a-zA-Z+/]{3}=))?$/;
const base64url = /^[A-Za-z0-9_-]*$/;
const hostname = /^(?=.{1,253}\.?$)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[-0-9a-zA-Z]{0,61}[0-9a-zA-Z])?)*\.?$/;
const domain = /^(?=.{1,253}$)([a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?\.)+[a-zA-Z]{2,63}$/;
const httpProtocol = /^https?$/;
const e164 = /^\+[1-9]\d{6,14}$/;
const creditCard = /^\d(?:[ -]?\d){11,18}$/;
const dateSource = `(?:(?:\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\\d|30)|(?:02)-(?:0[1-9]|1\\d|2[0-8])))`;
/** Anchors a pattern source. The interpolation lives here rather than at the call site because
 * esbuild will not drop a `@__PURE__` call whose own argument interpolates a variable, but it
 * will drop `anchor(dateSource)`. Keeping it inline pinned `date` into every bundle. */ function anchor(source) {
    return new RegExp(`^${source}$`);
}
const date = /*@__PURE__*/ anchor(dateSource);
function timeSource(args) {
    const hhmm = `(?:[01]\\d|2[0-3]):[0-5]\\d`;
    const regex = typeof args.precision === "number" ? args.precision === -1 ? `${hhmm}` : args.precision === 0 ? `${hhmm}:[0-5]\\d` : `${hhmm}:[0-5]\\d\\.\\d{${args.precision}}` : args.seconds ? `${hhmm}:[0-5]\\d(?:\\.\\d+)?` : `${hhmm}(?::[0-5]\\d(?:\\.\\d+)?)?`;
    return regex;
}
function time(args) {
    return new RegExp(`^${timeSource(args)}$`);
}
function datetime(args) {
    const opts = [
        "Z"
    ];
    // if (args.offset) opts.push(`([+-]\\d{2}:\\d{2})`);
    if (args.offset) opts.push(`([+-](?:[01]\\d|2[0-3]):[0-5]\\d)`);
    // RFC 3339 mandates seconds wherever the time carries a `Z` or an offset, so only the unqualified form `local` adds may omit them
    const qualified = `${timeSource({
        precision: args.precision,
        seconds: true
    })}(?:${opts.join("|")})`;
    const timeRegex = args.local ? `${qualified}|${timeSource({
        precision: args.precision
    })}` : qualified;
    return new RegExp(`^${dateSource}T(?:${timeRegex})$`);
}
const string = (params)=>{
    const regex = params ? `[\\s\\S]{${params?.minimum ?? 0},${params?.maximum ?? ""}}` : `[\\s\\S]*`;
    return new RegExp(`^${regex}$`);
};
const bigint = /^-?\d+n?$/;
const integer = /^-?\d+$/;
const number = /^-?\d+(?:\.\d+)?$/;
const boolean = /^(?:true|false)$/i;
const _null = /^null$/i;
;
const _undefined = /^undefined$/i;
;
const lowercase = /^[^A-Z]*$/;
const uppercase = /^[^a-z]*$/;
const hex = /^[0-9a-fA-F]*$/;
// Hash regexes for different algorithms and encodings
// Helper function to create base64 regex with exact length and padding
function fixedBase64(bodyLength, padding) {
    return new RegExp(`^[A-Za-z0-9+/]{${bodyLength}}${padding}$`);
}
// Helper function to create base64url regex with exact length (no padding)
function fixedBase64url(length) {
    return new RegExp(`^[A-Za-z0-9_-]{${length}}$`);
}
const md5_hex = /^[0-9a-fA-F]{32}$/;
const md5_base64 = /*@__PURE__*/ fixedBase64(22, "==");
const md5_base64url = /*@__PURE__*/ fixedBase64url(22);
const sha1_hex = /^[0-9a-fA-F]{40}$/;
const sha1_base64 = /*@__PURE__*/ fixedBase64(27, "=");
const sha1_base64url = /*@__PURE__*/ fixedBase64url(27);
const sha256_hex = /^[0-9a-fA-F]{64}$/;
const sha256_base64 = /*@__PURE__*/ fixedBase64(43, "=");
const sha256_base64url = /*@__PURE__*/ fixedBase64url(43);
const sha384_hex = /^[0-9a-fA-F]{96}$/;
const sha384_base64 = /*@__PURE__*/ fixedBase64(64, "");
const sha384_base64url = /*@__PURE__*/ fixedBase64url(64);
const sha512_hex = /^[0-9a-fA-F]{128}$/;
const sha512_base64 = /*@__PURE__*/ fixedBase64(86, "==");
const sha512_base64url = /*@__PURE__*/ fixedBase64url(86);
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/registries.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "$ZodRegistry",
    ()=>$ZodRegistry,
    "$input",
    ()=>$input,
    "$output",
    ()=>$output,
    "globalRegistry",
    ()=>globalRegistry,
    "registry",
    ()=>registry
]);
var _a;
const $output = /*@__PURE__*/ Symbol("ZodOutput");
const $input = /*@__PURE__*/ Symbol("ZodInput");
class $ZodRegistry {
    constructor(){
        this._map = new WeakMap();
        this._idmap = new Map();
    }
    add(schema, ..._meta) {
        const meta = _meta[0];
        this._map.set(schema, meta);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.set(meta.id, schema);
        }
        return this;
    }
    clear() {
        this._map = new WeakMap();
        this._idmap = new Map();
        return this;
    }
    remove(schema) {
        const meta = this._map.get(schema);
        if (meta && typeof meta === "object" && "id" in meta) {
            this._idmap.delete(meta.id);
        }
        this._map.delete(schema);
        return this;
    }
    get(schema) {
        // return this._map.get(schema) as any;
        // inherit metadata
        const p = schema._zod.parent;
        if (p) {
            const pm = {
                ...this.get(p) ?? {}
            };
            delete pm.id; // do not inherit id
            const f = {
                ...pm,
                ...this._map.get(schema)
            };
            return Object.keys(f).length ? f : undefined;
        }
        return this._map.get(schema);
    }
    has(schema) {
        return this._map.has(schema);
    }
}
function registry() {
    return new $ZodRegistry();
}
(_a = globalThis).__zod_globalRegistry ?? (_a.__zod_globalRegistry = registry());
const globalRegistry = globalThis.__zod_globalRegistry;
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/to-json-schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStandardJSONSchemaMethod",
    ()=>createStandardJSONSchemaMethod,
    "createToJSONSchemaMethod",
    ()=>createToJSONSchemaMethod,
    "extractDefs",
    ()=>extractDefs,
    "finalize",
    ()=>finalize,
    "handleUnrepresentable",
    ()=>handleUnrepresentable,
    "initializeContext",
    ()=>initializeContext,
    "process",
    ()=>process
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/registries.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js [app-ssr] (ecmascript)");
;
;
function assignProps(target, ...sources) {
    for (const source of sources){
        for (const key of Reflect.ownKeys(source)){
            if (Object.prototype.propertyIsEnumerable.call(source, key)) {
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignProp"])(target, key, source[key]);
            }
        }
    }
    return target;
}
function initializeContext(params) {
    // Normalize target: convert old non-hyphenated versions to hyphenated versions
    let target = params?.target ?? "draft-2020-12";
    if (target === "draft-4") target = "draft-04";
    if (target === "draft-7") target = "draft-07";
    return {
        processors: params.processors ?? {},
        metadataRegistry: params?.metadata ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$registries$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalRegistry"],
        target,
        unrepresentable: params?.unrepresentable ?? "throw",
        override: params?.override ?? (()=>{}),
        io: params?.io ?? "output",
        counter: 0,
        seen: new Map(),
        sharedDefsExtractedFor: undefined,
        sharedEmitDoneFor: undefined,
        cycles: params?.cycles ?? "ref",
        reused: params?.reused ?? "inline",
        intersections: [],
        deferred: [],
        external: params?.external ?? undefined
    };
}
function handleUnrepresentable(schema, ctx, json, params, message) {
    const result = typeof ctx.unrepresentable === "function" ? ctx.unrepresentable({
        zodSchema: schema,
        path: params.path,
        message
    }) : ctx.unrepresentable;
    if (result === "any") return false;
    if (result === undefined || result === "throw") throw new Error(message);
    Object.assign(json, result);
    return true;
}
function process(schema, ctx, _params = {
    path: [],
    schemaPath: []
}) {
    var _a;
    const def = schema._zod.def;
    // check for schema in seens
    const seen = ctx.seen.get(schema);
    if (seen) {
        seen.count++;
        // check if cycle
        const isCycle = _params.schemaPath.includes(schema);
        if (isCycle) {
            seen.cycle = _params.path;
        }
        return seen.schema;
    }
    // initialize
    const result = {
        schema: {},
        count: 1,
        cycle: undefined,
        path: _params.path
    };
    ctx.seen.set(schema, result);
    ctx.sharedDefsExtractedFor = undefined;
    ctx.sharedEmitDoneFor = undefined;
    // custom method overrides default behavior
    const overrideSchema = schema._zod.toJSONSchema?.();
    if (overrideSchema) {
        result.schema = overrideSchema;
    } else {
        const params = {
            ..._params,
            schemaPath: [
                ..._params.schemaPath,
                schema
            ],
            path: _params.path
        };
        if (schema._zod.processJSONSchema) {
            schema._zod.processJSONSchema(ctx, result.schema, params);
        } else {
            const _json = result.schema;
            const processor = ctx.processors[def.type];
            if (!processor) {
                throw new Error(`[toJSONSchema]: Non-representable type encountered: ${def.type}`);
            }
            processor(schema, ctx, _json, params);
        }
        const parent = schema._zod.parent;
        if (parent) {
            // Also set ref if processor didn't (for inheritance)
            if (!result.ref) result.ref = parent;
            process(parent, ctx, params);
            ctx.seen.get(parent).isParent = true;
        }
    }
    // metadata
    const meta = ctx.metadataRegistry.get(schema);
    if (meta) assignProps(result.schema, meta);
    if (ctx.io === "input" && isTransforming(schema)) {
        // examples/defaults only apply to output type of pipe
        delete result.schema.examples;
        delete result.schema.default;
    }
    // set prefault as default
    if (ctx.io === "input" && "_prefault" in result.schema) (_a = result.schema).default ?? (_a.default = result.schema._prefault);
    delete result.schema._prefault;
    // pulling fresh from ctx.seen in case it was overwritten
    const _result = ctx.seen.get(schema);
    return _result.schema;
}
// Escape a reference token for use in a JSON Pointer fragment (RFC 6901): `~` becomes `~0` and `/` becomes `~1`. The `~` replacement must run first.
function encodeJSONPointerSegment(segment) {
    return segment.replace(/~/g, "~0").replace(/\//g, "~1");
}
function extractDefs(ctx, schema) {
    // iterate over seen map;
    const root = ctx.seen.get(schema);
    if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
    // With `external` set, every registered schema resolves through the external branch of `makeURI`, so the root branch below produces the same ref the external branch would — this pass is identical whichever schema it is called with, and only needs to run once.
    if (ctx.external && ctx.sharedDefsExtractedFor === ctx.external) return;
    // Track ids to detect duplicates across different schemas
    const idToSchema = new Map();
    for (const entry of ctx.seen.entries()){
        const id = ctx.metadataRegistry.get(entry[0])?.id;
        if (id) {
            const existing = idToSchema.get(id);
            if (existing && existing !== entry[0]) {
                throw new Error(`Duplicate schema id "${id}" detected during JSON Schema conversion. Two different schemas cannot share the same id when converted together.`);
            }
            idToSchema.set(id, entry[0]);
        }
    }
    // returns a ref to the schema defId will be empty if the ref points to an external schema (or #)
    const makeURI = (entry)=>{
        // comparing the seen objects because sometimes multiple schemas map to the same seen object. e.g. lazy
        // external is configured
        const defsSegment = ctx.target === "draft-2020-12" ? "$defs" : "definitions";
        if (ctx.external) {
            const externalId = ctx.external.registry.get(entry[0])?.id; // ?? "__shared";// `__schema${ctx.counter++}`;
            // check if schema is in the external registry
            const uriGenerator = ctx.external.uri ?? ((id)=>id);
            if (externalId) {
                return {
                    ref: uriGenerator(externalId)
                };
            }
            // otherwise, add to __shared
            const id = entry[1].defId ?? entry[1].schema.id ?? `schema${ctx.counter++}`;
            entry[1].defId = id; // set defId so it will be reused if needed
            return {
                defId: id,
                ref: `${uriGenerator("__shared")}#/${defsSegment}/${encodeJSONPointerSegment(id)}`
            };
        }
        const uriPrefix = `#`;
        const defUriPrefix = `${uriPrefix}/${defsSegment}/`;
        // an id-less root has nowhere to be extracted to, so it stays inline and self-references as `#`
        if (entry[1] === root && !entry[1].schema.id) {
            return {
                ref: uriPrefix
            };
        }
        // self-contained schema
        const defId = entry[1].schema.id ?? `__schema${ctx.counter++}`;
        return {
            defId,
            ref: defUriPrefix + encodeJSONPointerSegment(defId)
        };
    };
    // stored cached version in `def` property remove all properties, set $ref
    const extractToDef = (entry)=>{
        // if the schema is already a reference, do not extract it
        if (entry[1].schema.$ref) {
            return;
        }
        const seen = entry[1];
        const { ref, defId } = makeURI(entry);
        seen.def = {
            ...seen.schema
        };
        // defId won't be set if the schema is a reference to an external schema or if the schema is the root schema
        if (defId) seen.defId = defId;
        // wipe away all properties except $ref
        const schema = seen.schema;
        for(const key in schema){
            delete schema[key];
        }
        schema.$ref = ref;
    };
    // throw on cycles
    // break cycles
    if (ctx.cycles === "throw") {
        for (const entry of ctx.seen.entries()){
            const seen = entry[1];
            if (seen.cycle) {
                throw new Error("Cycle detected: " + `#/${seen.cycle?.join("/")}/<root>` + '\n\nSet the `cycles` parameter to `"ref"` to resolve cyclical schemas with defs.');
            }
        }
    }
    // extract schemas into $defs
    for (const entry of ctx.seen.entries()){
        const seen = entry[1];
        // convert root schema to # $ref
        if (schema === entry[0]) {
            extractToDef(entry); // this has special handling for the root schema
            continue;
        }
        // extract schemas that are in the external registry
        if (ctx.external) {
            const ext = ctx.external.registry.get(entry[0])?.id;
            if (schema !== entry[0] && ext) {
                extractToDef(entry);
                continue;
            }
        }
        // extract schemas with `id` meta
        const id = ctx.metadataRegistry.get(entry[0])?.id;
        if (id) {
            extractToDef(entry);
            continue;
        }
        // break cycles
        if (seen.cycle) {
            // any
            extractToDef(entry);
            continue;
        }
        // extract reused schemas
        if (seen.count > 1) {
            if (ctx.reused === "ref") {
                extractToDef(entry);
                continue;
            }
        }
    }
    if (ctx.external) ctx.sharedDefsExtractedFor = ctx.external;
}
/** Rewrites `anyOf: [{type: "a"}, {type: "b"}]` to `type: ["a", "b"]`, which every JSON Schema draft treats as equivalent and most consumers render far better for the nullable case. Only branches that are a bare type assertion qualify — anything carrying a constraint, `$ref`, `const` or metadata is left alone. Runs after `flattenRef`, so a branch an override decorated or `$defs` extraction turned into a `$ref` is no longer bare and correctly stays in `anyOf`. `oneOf` is excluded: `integer` and `number` overlap, so "exactly one" and "at least one" are not the same there. OpenAPI 3.0 is excluded: its `type` must be a single string. */ function compactTypeUnion(schema) {
    const options = schema.anyOf;
    if (!Array.isArray(options) || options.length === 0 || schema.type !== undefined) return;
    const types = [];
    for (const option of options){
        if (!option || typeof option !== "object") return;
        // A branch that is itself a compactible union folds into this one — nested `anyOf` and a flat `type` array say the same thing. Compacting it first also makes the result independent of the order this pass walks the seen map in.
        compactTypeUnion(option);
        const keys = Object.keys(option);
        if (keys.length !== 1 || keys[0] !== "type") return;
        const type = option.type;
        for (const member of Array.isArray(type) ? type : [
            type
        ]){
            if (typeof member !== "string") return;
            if (!types.includes(member)) types.push(member);
        }
    }
    delete schema.anyOf;
    // A `type` array must be non-empty and unique (metaschema); a single member is spelled as a bare string.
    schema.type = types.length === 1 ? types[0] : types;
}
/** Keywords `foldIntersection` knows how to combine. Anything else — `$ref`, `patternProperties`,
 * an annotation like `description` — makes a member unfoldable, so a constraint this does not
 * understand leaves the `allOf` alone instead of being silently dropped or misattributed. */ const FOLDABLE_KEYS = new Set([
    "type",
    "properties",
    "required",
    "additionalProperties"
]);
const UNION_KEYS = [
    "oneOf",
    "anyOf"
];
/** A member's constraint on a key it does not declare itself. A `catchall` states one; `false`, an absent `additionalProperties`, and the empty schema a loose object emits state nothing. */ function undeclaredConstraint(member) {
    const extra = member.additionalProperties;
    if (extra === undefined || extra === false || typeof extra !== "object" || extra === null) return null;
    return Object.keys(extra).length ? extra : null;
}
/** Combines object members into the single object they describe together, or returns `null` if any of them carries a keyword outside {@link FOLDABLE_KEYS}. */ function foldObjects(members) {
    const objects = [];
    for (const member of members){
        // A boolean subschema is legal JSON Schema and carries no keywords to fold.
        if (typeof member !== "object" || member.type !== "object") return null;
        for(const key in member){
            if (!FOLDABLE_KEYS.has(key)) return null;
        }
        objects.push(member);
    }
    const properties = {};
    const required = new Set();
    for (const object of objects){
        for(const key in object.properties){
            // `in` would report a `__proto__` key as already present via the prototype chain and skip it.
            if (Object.prototype.hasOwnProperty.call(properties, key)) continue;
            // Every member constrains this key: the ones that declare it say how, and a `catchall` member constrains it too even though it does not name it. The key has to satisfy all of them, which is the same intersection one level down.
            const parts = [];
            for (const other of objects){
                const part = other.properties?.[key] ?? undeclaredConstraint(other);
                if (part === null || part === undefined) continue;
                if (!parts.some((seen)=>JSON.stringify(seen) === JSON.stringify(part))) parts.push(part);
            }
            const merged = parts.length === 1 ? parts[0] : foldObjects(parts) ?? {
                allOf: parts
            };
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignProp"])(properties, key, merged);
        }
        for (const key of object.required ?? [])required.add(key);
    }
    const folded = {
        type: "object",
        properties
    };
    if (required.size) folded.required = [
        ...required
    ];
    // A key no member declares is rejected only when every member rejects it, so the fold is closed only when every member is. Otherwise it carries whatever the `catchall` members demand of such a key.
    if (objects.every((object)=>object.additionalProperties === false)) {
        folded.additionalProperties = false;
    } else {
        const constraints = [];
        for (const object of objects){
            const constraint = undeclaredConstraint(object);
            if (constraint && !constraints.some((seen)=>JSON.stringify(seen) === JSON.stringify(constraint))) constraints.push(constraint);
        }
        if (constraints.length === 1) folded.additionalProperties = constraints[0];
        else if (constraints.length > 1) folded.additionalProperties = {
            allOf: constraints
        };
    }
    return folded;
}
/** `additionalProperties` in an `allOf` member sees only that member's own `properties`, so two
 * closed object members reject each other's keys and the schema validates nothing. Zod's parser
 * pools the key sets instead — `handleIntersectionResults` reports a key as unrecognized only when
 * *every* side rejects it — so the emitted schema has to pool them too, and folding the members
 * into one object is the encoding that says so on every target.
 *
 * This runs from `finalize`, after `extractDefs`, which is what keeps it clear of the `$ref`
 * machinery: a member extracted into `$defs` is already a `$ref` by now and declines to fold, so it
 * keeps its reference and its own closedness rather than being inlined as a stale copy. */ function foldIntersection(json) {
    const allOf = json.allOf;
    if (!Array.isArray(allOf) || allOf.length < 2) return;
    // An `override` runs before this pass and may have written object keywords onto the intersection itself. Those are deliberate, so decline rather than overwrite them.
    for (const key of FOLDABLE_KEYS)if (key in json) return;
    // An intersection distributes over a union: `A & (X | Y)` is `(A & X) | (A & Y)`. Only the first union is distributed over; a second one stays among the members every branch folds against, where it fails the object check and declines the whole intersection rather than multiplying out.
    const unions = allOf.filter((m)=>UNION_KEYS.some((k)=>Array.isArray(m[k])));
    let folded = null;
    if (!unions.length) {
        folded = foldObjects(allOf);
    } else {
        const union = unions[0];
        const keyword = UNION_KEYS.find((k)=>Array.isArray(union[k]));
        if (Object.keys(union).length !== 1) return;
        const rest = allOf.filter((m)=>m !== union);
        const branches = union[keyword].map((branch)=>foldObjects([
                ...rest,
                branch
            ]));
        if (branches.some((b)=>!b)) return;
        folded = {
            [keyword]: branches
        };
    }
    if (!folded) return;
    delete json.allOf;
    assignProps(json, folded);
}
function finalize(ctx, schema) {
    const root = ctx.seen.get(schema);
    if (!root) throw new Error("Unprocessed schema. This is a bug in Zod.");
    // flatten refs - inherit properties from parent schemas
    const flattenRef = (zodSchema)=>{
        const seen = ctx.seen.get(zodSchema);
        // already processed
        if (seen.ref === null) return;
        const schema = seen.def ?? seen.schema;
        const _cached = {
            ...schema
        };
        const ref = seen.ref;
        seen.ref = null; // prevent infinite recursion
        if (ref) {
            flattenRef(ref);
            const refSeen = ctx.seen.get(ref);
            const refSchema = refSeen.schema;
            // merge referenced schema into current
            if (refSchema.$ref && (ctx.target === "draft-07" || ctx.target === "draft-04" || ctx.target === "openapi-3.0")) {
                // older drafts can't combine $ref with other properties
                schema.allOf = schema.allOf ?? [];
                schema.allOf.push(refSchema);
            } else {
                assignProps(schema, refSchema);
            }
            // restore child's own properties (child wins)
            assignProps(schema, _cached);
            const isParentRef = zodSchema._zod.parent === ref;
            // For parent chain, child is a refinement - remove parent-only properties
            if (isParentRef) {
                for(const key in schema){
                    if (key === "$ref" || key === "allOf") continue;
                    if (!(key in _cached)) {
                        delete schema[key];
                    }
                }
            }
            // When ref was extracted to $defs, remove properties that match the definition
            if (refSchema.$ref && refSeen.def) {
                for(const key in schema){
                    if (key === "$ref" || key === "allOf") continue;
                    if (key in refSeen.def && JSON.stringify(schema[key]) === JSON.stringify(refSeen.def[key])) {
                        delete schema[key];
                    }
                }
            }
        }
        // If parent was extracted (has $ref), propagate $ref to this schema. This handles cases like: readonly().meta({id}).describe() where processor sets ref to innerType but parent should be referenced
        const parent = zodSchema._zod.parent;
        if (parent && parent !== ref) {
            // Ensure parent is processed first so its def has inherited properties
            flattenRef(parent);
            const parentSeen = ctx.seen.get(parent);
            if (parentSeen?.schema.$ref) {
                schema.$ref = parentSeen.schema.$ref;
                // De-duplicate with parent's definition
                if (parentSeen.def) {
                    for(const key in schema){
                        if (key === "$ref" || key === "allOf") continue;
                        if (key in parentSeen.def && JSON.stringify(schema[key]) === JSON.stringify(parentSeen.def[key])) {
                            delete schema[key];
                        }
                    }
                }
            }
        }
        // execute overrides
        ctx.override({
            zodSchema: zodSchema,
            jsonSchema: schema,
            path: seen.path ?? []
        });
    };
    // Flattening walks the whole map and clears each `ref` as it goes, so a second call over the same map is a no-op scan. Skip it outright once it has run for a registry conversion.
    if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
        for (const entry of [
            ...ctx.seen.entries()
        ].reverse()){
            flattenRef(entry[0]);
        }
        if (ctx.target !== "openapi-3.0") {
            for (const entry of ctx.seen.entries()){
                compactTypeUnion(entry[1].def ?? entry[1].schema);
            }
        }
        for (const rewrite of ctx.deferred)rewrite();
        // After flattening, every member that was extracted is a `$ref`, so the fold sees the final shape. A schema that inherits an intersection — through `z.lazy`, or any `ref` chain — holds the same `allOf` array, so fold by array identity to catch every copy.
        if (ctx.intersections.length) {
            const carriers = new Map();
            for (const seen of ctx.seen.values()){
                for (const json of [
                    seen.schema,
                    seen.def
                ]){
                    const allOf = json?.allOf;
                    if (!Array.isArray(allOf)) continue;
                    const existing = carriers.get(allOf);
                    if (existing) existing.push(json);
                    else carriers.set(allOf, [
                        json
                    ]);
                }
            }
            for (const allOf of ctx.intersections){
                for (const json of carriers.get(allOf) ?? [])foldIntersection(json);
            }
        }
    }
    const result = {};
    if (ctx.target === "draft-2020-12") {
        result.$schema = "https://json-schema.org/draft/2020-12/schema";
    } else if (ctx.target === "draft-07") {
        result.$schema = "http://json-schema.org/draft-07/schema#";
    } else if (ctx.target === "draft-04") {
        result.$schema = "http://json-schema.org/draft-04/schema#";
    } else if (ctx.target === "openapi-3.0") {
    // OpenAPI 3.0 schema objects should not include a $schema property
    } else {
    // Arbitrary string values are allowed but won't have a $schema property set
    }
    if (ctx.external?.uri) {
        const id = ctx.external.registry.get(schema)?.id;
        if (!id) throw new Error("Schema is missing an `id` property");
        result.$id = ctx.external.uri(id);
    }
    // when the root was extracted into $defs, `root.schema` is the `$ref` wrapper and `root.def` is the body that now lives under $defs
    assignProps(result, root.defId ? root.schema : root.def ?? root.schema);
    // The `id` in `.meta()` is a Zod-specific registration tag used to extract schemas into $defs — it is not user-facing JSON Schema metadata. Strip it from the output body where it would otherwise leak. The id is preserved implicitly via the $defs key (and via $ref paths).
    const rootMetaId = ctx.metadataRegistry.get(schema)?.id;
    if (rootMetaId !== undefined && result.id === rootMetaId) delete result.id;
    // build defs object. With `external`, `defs` is the shared object every schema writes into, so the same entries are reassigned on every call. Without it, `defs` is fresh per call and must be rebuilt.
    const defs = ctx.external?.defs ?? {};
    if (!ctx.external || ctx.sharedEmitDoneFor !== ctx.external) {
        for (const entry of ctx.seen.entries()){
            const seen = entry[1];
            if (seen.def && seen.defId) {
                if (seen.def.id === seen.defId) delete seen.def.id;
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$util$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assignProp"])(defs, seen.defId, seen.def);
            }
        }
    }
    if (ctx.external) ctx.sharedEmitDoneFor = ctx.external;
    // set definitions in result
    if (ctx.external) {} else {
        if (Object.keys(defs).length > 0) {
            if (ctx.target === "draft-2020-12") {
                result.$defs = defs;
            } else {
                result.definitions = defs;
            }
        }
    }
    try {
        // this "finalizes" this schema and ensures all cycles are removed each call to finalize() is functionally independent though the seen map is shared
        const finalized = JSON.parse(JSON.stringify(result));
        Object.defineProperty(finalized, "~standard", {
            value: {
                ...schema["~standard"],
                jsonSchema: {
                    input: createStandardJSONSchemaMethod(schema, "input", ctx.processors),
                    output: createStandardJSONSchemaMethod(schema, "output", ctx.processors)
                }
            },
            enumerable: false,
            writable: false
        });
        return finalized;
    } catch (_err) {
        throw new Error("Error converting schema to JSON.");
    }
}
function isTransforming(_schema, _ctx) {
    const ctx = _ctx ?? {
        seen: new Set()
    };
    if (ctx.seen.has(_schema)) return false;
    ctx.seen.add(_schema);
    const def = _schema._zod.def;
    if (def.type === "transform") return true;
    if (def.type === "array") return isTransforming(def.element, ctx);
    if (def.type === "set") return isTransforming(def.valueType, ctx);
    if (def.type === "lazy") return isTransforming(def.getter(), ctx);
    if (def.type === "promise" || def.type === "optional" || def.type === "nonoptional" || def.type === "nullable" || def.type === "readonly" || def.type === "default" || def.type === "prefault" || def.type === "catch") {
        return isTransforming(def.innerType, ctx);
    }
    if (def.type === "intersection") {
        return isTransforming(def.left, ctx) || isTransforming(def.right, ctx);
    }
    if (def.type === "record" || def.type === "map") {
        return isTransforming(def.keyType, ctx) || isTransforming(def.valueType, ctx);
    }
    if (def.type === "pipe") {
        if (_schema._zod.traits.has("$ZodCodec")) return true;
        return isTransforming(def.in, ctx) || isTransforming(def.out, ctx);
    }
    if (def.type === "object") {
        for(const key in def.shape){
            if (isTransforming(def.shape[key], ctx)) return true;
        }
        return false;
    }
    if (def.type === "union") {
        for (const option of def.options){
            if (isTransforming(option, ctx)) return true;
        }
        return false;
    }
    if (def.type === "tuple") {
        for (const item of def.items){
            if (isTransforming(item, ctx)) return true;
        }
        if (def.rest && isTransforming(def.rest, ctx)) return true;
        return false;
    }
    return false;
}
const createToJSONSchemaMethod = (schema, processors = {})=>(params)=>{
        const ctx = initializeContext({
            ...params,
            processors
        });
        process(schema, ctx);
        extractDefs(ctx, schema);
        return finalize(ctx, schema);
    };
const createStandardJSONSchemaMethod = (schema, io, processors = {})=>(params)=>{
        const { libraryOptions, target } = params ?? {};
        const ctx = initializeContext({
            ...libraryOptions ?? {},
            target,
            io,
            processors
        });
        process(schema, ctx);
        extractDefs(ctx, schema);
        return finalize(ctx, schema);
    };
}),
"[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/util.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BIGINT_FORMAT_RANGES",
    ()=>BIGINT_FORMAT_RANGES,
    "CONSTANT_CATCH",
    ()=>CONSTANT_CATCH,
    "Class",
    ()=>Class,
    "NUMBER_FORMAT_RANGES",
    ()=>NUMBER_FORMAT_RANGES,
    "aborted",
    ()=>aborted,
    "allowsEval",
    ()=>allowsEval,
    "assert",
    ()=>assert,
    "assertEqual",
    ()=>assertEqual,
    "assertIs",
    ()=>assertIs,
    "assertNever",
    ()=>assertNever,
    "assertNotEqual",
    ()=>assertNotEqual,
    "assignProp",
    ()=>assignProp,
    "attachSchema",
    ()=>attachSchema,
    "base64ToUint8Array",
    ()=>base64ToUint8Array,
    "base64urlToUint8Array",
    ()=>base64urlToUint8Array,
    "cached",
    ()=>cached,
    "captureStackTrace",
    ()=>captureStackTrace,
    "cleanEnum",
    ()=>cleanEnum,
    "cleanRegex",
    ()=>cleanRegex,
    "clone",
    ()=>clone,
    "cloneDef",
    ()=>cloneDef,
    "codePointLength",
    ()=>codePointLength,
    "constantCatch",
    ()=>constantCatch,
    "createTransparentProxy",
    ()=>createTransparentProxy,
    "defineLazy",
    ()=>defineLazy,
    "defineLazyInternal",
    ()=>defineLazyInternal,
    "esc",
    ()=>esc,
    "escapeRegex",
    ()=>escapeRegex,
    "explicitlyAborted",
    ()=>explicitlyAborted,
    "extend",
    ()=>extend,
    "finalizeIssue",
    ()=>finalizeIssue,
    "floatSafeRemainder",
    ()=>floatSafeRemainder,
    "getElementAtPath",
    ()=>getElementAtPath,
    "getEnumValues",
    ()=>getEnumValues,
    "getLengthableOrigin",
    ()=>getLengthableOrigin,
    "getParsedType",
    ()=>getParsedType,
    "getSizableOrigin",
    ()=>getSizableOrigin,
    "hexToUint8Array",
    ()=>hexToUint8Array,
    "hide",
    ()=>hide,
    "installLazyProp",
    ()=>installLazyProp,
    "isObject",
    ()=>isObject,
    "isPlainObject",
    ()=>isPlainObject,
    "issue",
    ()=>issue,
    "joinValues",
    ()=>joinValues,
    "jsonStringifyReplacer",
    ()=>jsonStringifyReplacer,
    "members",
    ()=>members,
    "merge",
    ()=>merge,
    "mergeDefs",
    ()=>mergeDefs,
    "normalizeParams",
    ()=>normalizeParams,
    "nullish",
    ()=>nullish,
    "numKeys",
    ()=>numKeys,
    "objectClone",
    ()=>objectClone,
    "omit",
    ()=>omit,
    "optionalKeys",
    ()=>optionalKeys,
    "own",
    ()=>own,
    "parsedType",
    ()=>parsedType,
    "partial",
    ()=>partial,
    "pick",
    ()=>pick,
    "prefixIssues",
    ()=>prefixIssues,
    "primitiveTypes",
    ()=>primitiveTypes,
    "promiseAllObject",
    ()=>promiseAllObject,
    "propertyKeyTypes",
    ()=>propertyKeyTypes,
    "randomString",
    ()=>randomString,
    "required",
    ()=>required,
    "safeExtend",
    ()=>safeExtend,
    "shallowClone",
    ()=>shallowClone,
    "slugify",
    ()=>slugify,
    "stringifyPrimitive",
    ()=>stringifyPrimitive,
    "toZod",
    ()=>toZod,
    "uint8ArrayToBase64",
    ()=>uint8ArrayToBase64,
    "uint8ArrayToBase64url",
    ()=>uint8ArrayToBase64url,
    "uint8ArrayToHex",
    ()=>uint8ArrayToHex,
    "unwrapMessage",
    ()=>unwrapMessage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/zod@4.5.4/node_modules/zod/v4/core/core.js [app-ssr] (ecmascript)");
;
function assertEqual(val) {
    return val;
}
function assertNotEqual(val) {
    return val;
}
function toZod() {
    return (schema)=>schema;
}
function assertIs(_arg) {}
function assertNever(_x) {
    throw new Error("Unexpected value in exhaustive check");
}
function assert(_) {}
function getEnumValues(entries) {
    const numericValues = Object.values(entries).filter((v)=>typeof v === "number");
    const values = Object.entries(entries).filter(([k, _])=>numericValues.indexOf(+k) === -1).map(([_, v])=>v);
    return values;
}
function joinValues(array, separator = "|") {
    return array.map((val)=>stringifyPrimitive(val)).join(separator);
}
function jsonStringifyReplacer(_, value) {
    if (typeof value === "bigint") return value.toString();
    return value;
}
function cached(getter) {
    const set = false;
    return {
        get value () {
            if ("TURBOPACK compile-time truthy", 1) {
                const value = getter();
                Object.defineProperty(this, "value", {
                    value
                });
                return value;
            }
            //TURBOPACK unreachable
            ;
        }
    };
}
function nullish(input) {
    return input === null || input === undefined;
}
function cleanRegex(source) {
    const start = source.startsWith("^") ? 1 : 0;
    const end = source.endsWith("$") ? source.length - 1 : source.length;
    return source.slice(start, end);
}
function floatSafeRemainder(val, step) {
    const ratio = val / step;
    const roundedRatio = Math.round(ratio);
    // `val` and `step` each round to a double before the division rounds again, so a true decimal multiple's quotient can sit up to 1.5 of these scaled epsilons from the integer. A 1x tolerance therefore rejected 2.03 as a multiple of 0.07; 4x covers the worst case with margin.
    const tolerance = 4 * Number.EPSILON * Math.max(Math.abs(ratio), 1);
    if (Math.abs(ratio - roundedRatio) < tolerance) return 0;
    return ratio - roundedRatio;
}
const EVALUATING = /* @__PURE__*/ Symbol("evaluating");
function defineLazy(object, key, getter) {
    let value = undefined;
    Object.defineProperty(object, key, {
        get () {
            if (value === EVALUATING) {
                // Circular reference detected, return undefined to break the cycle
                return undefined;
            }
            if (value === undefined) {
                value = EVALUATING;
                value = getter();
            }
            return value;
        },
        set (v) {
            Object.defineProperty(object, key, {
                value: v
            });
        // object[key] = v;
        },
        configurable: true
    });
}
function objectClone(obj) {
    return Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));
}
function assignProp(target, prop, value) {
    Object.defineProperty(target, prop, {
        value,
        writable: true,
        enumerable: true,
        configurable: true
    });
}
function mergeDefs(...defs) {
    const mergedDescriptors = {};
    for (const def of defs){
        const descriptors = Object.getOwnPropertyDescriptors(def);
        Object.assign(mergedDescriptors, descriptors);
    }
    return Object.defineProperties({}, mergedDescriptors);
}
function cloneDef(schema) {
    return mergeDefs(schema._zod.def);
}
function getElementAtPath(obj, path) {
    if (!path) return obj;
    return path.reduce((acc, key)=>acc?.[key], obj);
}
function promiseAllObject(promisesObj) {
    const keys = Object.keys(promisesObj);
    const promises = keys.map((key)=>promisesObj[key]);
    return Promise.all(promises).then((results)=>{
        const resolvedObj = {};
        for(let i = 0; i < keys.length; i++){
            resolvedObj[keys[i]] = results[i];
        }
        return resolvedObj;
    });
}
function randomString(length = 10) {
    const chars = "abcdefghijklmnopqrstuvwxyz";
    let str = "";
    for(let i = 0; i < length; i++){
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}
function esc(str) {
    return JSON.stringify(str);
}
function slugify(input) {
    return input.toLowerCase().trim().replace(/[^\w\s-]/g, "").replace(/[\s_-]+/g, "-").replace(/^-+|-+$/g, "");
}
const captureStackTrace = "captureStackTrace" in Error ? Error.captureStackTrace : (..._args)=>{};
function isObject(data) {
    return typeof data === "object" && data !== null && !Array.isArray(data);
}
const allowsEval = /* @__PURE__*/ cached(()=>{
    // Skip the probe under `jitless`: strict CSPs report the caught `new Function` as a `securitypolicyviolation` even though the throw is swallowed.
    if (__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$zod$40$4$2e$5$2e$4$2f$node_modules$2f$zod$2f$v4$2f$core$2f$core$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["globalConfig"].jitless) {
        return false;
    }
    // @ts-ignore
    if (typeof navigator !== "undefined" && navigator?.userAgent?.includes("Cloudflare")) {
        return false;
    }
    try {
        const F = Function;
        new F("");
        return true;
    } catch (_) {
        return false;
    }
});
function isPlainObject(o) {
    if (isObject(o) === false) return false;
    // modified constructor
    const ctor = o.constructor;
    if (ctor === undefined) return true;
    if (typeof ctor !== "function") return true;
    // modified prototype
    const prot = ctor.prototype;
    if (isObject(prot) === false) return false;
    // ctor doesn't have static `isPrototypeOf`
    if (Object.prototype.hasOwnProperty.call(prot, "isPrototypeOf") === false) {
        return false;
    }
    return true;
}
function shallowClone(o) {
    if (isPlainObject(o)) return {
        ...o
    };
    if (Array.isArray(o)) return [
        ...o
    ];
    if (o instanceof Map) return new Map(o);
    if (o instanceof Set) return new Set(o);
    return o;
}
function numKeys(data) {
    let keyCount = 0;
    for(const key in data){
        if (Object.prototype.hasOwnProperty.call(data, key)) {
            keyCount++;
        }
    }
    return keyCount;
}
const getParsedType = (data)=>{
    const t = typeof data;
    switch(t){
        case "undefined":
            return "undefined";
        case "string":
            return "string";
        case "number":
            return Number.isNaN(data) ? "nan" : "number";
        case "boolean":
            return "boolean";
        case "function":
            return "function";
        case "bigint":
            return "bigint";
        case "symbol":
            return "symbol";
        case "object":
            if (Array.isArray(data)) {
                return "array";
            }
            if (data === null) {
                return "null";
            }
            if (data.then && typeof data.then === "function" && data.catch && typeof data.catch === "function") {
                return "promise";
            }
            if (typeof Map !== "undefined" && data instanceof Map) {
                return "map";
            }
            if (typeof Set !== "undefined" && data instanceof Set) {
                return "set";
            }
            if (typeof Date !== "undefined" && data instanceof Date) {
                return "date";
            }
            // @ts-ignore
            if (typeof File !== "undefined" && data instanceof File) {
                return "file";
            }
            return "object";
        default:
            throw new Error(`Unknown data type: ${t}`);
    }
};
const propertyKeyTypes = /* @__PURE__*/ new Set([
    "string",
    "number",
    "symbol"
]);
const primitiveTypes = /* @__PURE__*/ new Set([
    "string",
    "number",
    "bigint",
    "boolean",
    "symbol",
    "undefined"
]);
function escapeRegex(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function clone(inst, def, params) {
    const cl = new inst._zod.constr(def ?? inst._zod.def);
    if (!def || params?.parent) cl._zod.parent = inst;
    return cl;
}
function normalizeParams(_params) {
    const params = _params;
    if (!params) return {};
    if (typeof params === "string") return {
        error: ()=>params
    };
    if (params?.message !== undefined) {
        if (params?.error !== undefined) throw new Error("Cannot specify both `message` and `error` params");
        params.error = params.message;
    }
    delete params.message;
    if (typeof params.error === "string") return {
        ...params,
        error: ()=>params.error
    };
    return params;
}
function createTransparentProxy(getter) {
    let target;
    return new Proxy({}, {
        get (_, prop, receiver) {
            target ?? (target = getter());
            return Reflect.get(target, prop, receiver);
        },
        set (_, prop, value, receiver) {
            target ?? (target = getter());
            return Reflect.set(target, prop, value, receiver);
        },
        has (_, prop) {
            target ?? (target = getter());
            return Reflect.has(target, prop);
        },
        deleteProperty (_, prop) {
            target ?? (target = getter());
            return Reflect.deleteProperty(target, prop);
        },
        ownKeys (_) {
            target ?? (target = getter());
            return Reflect.ownKeys(target);
        },
        getOwnPropertyDescriptor (_, prop) {
            target ?? (target = getter());
            return Reflect.getOwnPropertyDescriptor(target, prop);
        },
        defineProperty (_, prop, descriptor) {
            target ?? (target = getter());
            return Reflect.defineProperty(target, prop, descriptor);
        }
    });
}
function stringifyPrimitive(value) {
    if (typeof value === "bigint") return value.toString() + "n";
    if (typeof value === "string") return `"${value}"`;
    return `${value}`;
}
function optionalKeys(shape) {
    return Object.keys(shape).filter((k)=>{
        return shape[k]._zod.optin !== undefined && shape[k]._zod.optout === "optional";
    });
}
const NUMBER_FORMAT_RANGES = /*@__PURE__*/ (()=>({
        safeint: [
            Number.MIN_SAFE_INTEGER,
            Number.MAX_SAFE_INTEGER
        ],
        int32: [
            -2147483648,
            2147483647
        ],
        uint32: [
            0,
            4294967295
        ],
        float32: [
            -3.4028234663852886e38,
            3.4028234663852886e38
        ],
        float64: [
            -Number.MAX_VALUE,
            Number.MAX_VALUE
        ]
    }))();
const BIGINT_FORMAT_RANGES = {
    int64: [
        /* @__PURE__*/ BigInt("-9223372036854775808"),
        /* @__PURE__*/ BigInt("9223372036854775807")
    ],
    uint64: [
        /* @__PURE__*/ BigInt(0),
        /* @__PURE__*/ BigInt("18446744073709551615")
    ]
};
function pick(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(".pick() cannot be used on object schemas containing refinements");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const newShape = {};
            // `for...in` skips symbols, so a symbol in the mask would select nothing
            for (const key of Reflect.ownKeys(mask)){
                if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) {
                    throw new Error(`Unrecognized key: "${String(key)}"`);
                }
                if (!mask[key]) continue;
                assignProp(newShape, key, currDef.shape[key]);
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: []
    });
    return clone(schema, def);
}
function omit(schema, mask) {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(".omit() cannot be used on object schemas containing refinements");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const newShape = {
                ...schema._zod.def.shape
            };
            for (const key of Reflect.ownKeys(mask)){
                if (!Object.prototype.hasOwnProperty.call(currDef.shape, key)) {
                    throw new Error(`Unrecognized key: "${String(key)}"`);
                }
                if (!mask[key]) continue;
                delete newShape[key];
            }
            assignProp(this, "shape", newShape); // self-caching
            return newShape;
        },
        checks: []
    });
    return clone(schema, def);
}
function extend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to extend: expected a plain object");
    }
    const checks = schema._zod.def.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        // Only throw if new shape overlaps with existing shape. Use getOwnPropertyDescriptor to check key existence without accessing values
        const existingShape = schema._zod.def.shape;
        for (const key of Reflect.ownKeys(shape)){
            if (Object.getOwnPropertyDescriptor(existingShape, key) !== undefined) {
                throw new Error("Cannot overwrite keys on object schemas containing refinements. Use `.safeExtend()` instead.");
            }
        }
    }
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const _shape = {
                ...schema._zod.def.shape,
                ...shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        }
    });
    return clone(schema, def);
}
function safeExtend(schema, shape) {
    if (!isPlainObject(shape)) {
        throw new Error("Invalid input to safeExtend: expected a plain object");
    }
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const _shape = {
                ...schema._zod.def.shape,
                ...shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        }
    });
    return clone(schema, def);
}
function merge(a, b) {
    if (!b?._zod?.def) {
        throw new Error("Invalid input to merge: expected an object schema. To merge a plain shape, use `.extend()`.");
    }
    if (a._zod.def.checks?.length) {
        throw new Error(".merge() cannot be used on object schemas containing refinements. Use .safeExtend() instead.");
    }
    const def = mergeDefs(a._zod.def, {
        get shape () {
            const _shape = {
                ...a._zod.def.shape,
                ...b._zod.def.shape
            };
            assignProp(this, "shape", _shape); // self-caching
            return _shape;
        },
        get catchall () {
            return b._zod.def.catchall;
        },
        checks: b._zod.def.checks ?? []
    });
    return clone(a, def);
}
function partial(Class, schema, mask, name = "partial") {
    const currDef = schema._zod.def;
    const checks = currDef.checks;
    const hasChecks = checks && checks.length > 0;
    if (hasChecks) {
        throw new Error(`.${name}() cannot be used on object schemas containing refinements`);
    }
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const oldShape = schema._zod.def.shape;
            const shape = {
                ...oldShape
            };
            if (mask) {
                for (const key of Reflect.ownKeys(mask)){
                    if (!Object.prototype.hasOwnProperty.call(oldShape, key)) {
                        throw new Error(`Unrecognized key: "${String(key)}"`);
                    }
                    if (!mask[key]) continue;
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class ? new Class({
                        type: "optional",
                        innerType: oldShape[key]
                    }) : oldShape[key];
                }
            } else {
                // the spread copies symbol keys; `for...in` would not reach them
                for (const key of Reflect.ownKeys(oldShape)){
                    // if (oldShape[key]!._zod.optin === "optional") continue;
                    shape[key] = Class ? new Class({
                        type: "optional",
                        innerType: oldShape[key]
                    }) : oldShape[key];
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        },
        checks: []
    });
    return clone(schema, def);
}
function required(Class, schema, mask) {
    const def = mergeDefs(schema._zod.def, {
        get shape () {
            const oldShape = schema._zod.def.shape;
            const shape = {
                ...oldShape
            };
            if (mask) {
                for (const key of Reflect.ownKeys(mask)){
                    if (!Object.prototype.hasOwnProperty.call(shape, key)) {
                        throw new Error(`Unrecognized key: "${String(key)}"`);
                    }
                    if (!mask[key]) continue;
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key]
                    });
                }
            } else {
                for (const key of Reflect.ownKeys(oldShape)){
                    // overwrite with non-optional
                    shape[key] = new Class({
                        type: "nonoptional",
                        innerType: oldShape[key]
                    });
                }
            }
            assignProp(this, "shape", shape); // self-caching
            return shape;
        }
    });
    return clone(schema, def);
}
function aborted(x, startIndex = 0) {
    if (x.aborted === true) return true;
    for(let i = startIndex; i < x.issues.length; i++){
        if (x.issues[i]?.continue !== true) {
            return true;
        }
    }
    return false;
}
function explicitlyAborted(x, startIndex = 0) {
    if (x.aborted === true) return true;
    for(let i = startIndex; i < x.issues.length; i++){
        if (x.issues[i]?.continue === false) {
            return true;
        }
    }
    return false;
}
function prefixIssues(path, issues) {
    return issues.map((iss)=>{
        var _a;
        (_a = iss).path ?? (_a.path = []);
        iss.path.unshift(path);
        return iss;
    });
}
function unwrapMessage(message) {
    return typeof message === "string" ? message : message?.message;
}
function attachSchema(issues, start, inst) {
    var _a;
    for(let i = start; i < issues.length; i++){
        (_a = issues[i]).schema ?? (_a.schema = inst);
    }
}
function finalizeIssue(iss, ctx, config) {
    var _a;
    // A schema that raised an issue itself owns it outright, and outranks any stamp an enclosing check left in `attachSchema`. String formats and z.custom() are schema and check at once, so when they act as a check they defer to that stamp instead.
    const traits = iss.inst?._zod?.traits;
    if (traits?.has("$ZodType")) {
        if (traits.has("$ZodCheck")) (_a = iss).schema ?? (_a.schema = iss.inst);
        else iss.schema = iss.inst;
    }
    // Decreasing specificity, first map to return a message wins. `inst` is whatever raised the issue, so a check's own map outranks the owning schema's.
    const schemaError = iss.schema !== iss.inst ? iss.schema?._zod.def?.error : undefined;
    const message = iss.message ? iss.message : unwrapMessage(iss.inst?._zod.def?.error?.(iss)) ?? unwrapMessage(schemaError?.(iss)) ?? unwrapMessage(ctx?.error?.(iss)) ?? unwrapMessage(config.customError?.(iss)) ?? unwrapMessage(config.localeError?.(iss)) ?? "Invalid input";
    const { inst: _inst, schema: _schema, continue: _continue, input: _input, ...rest } = iss;
    rest.path ?? (rest.path = []);
    rest.message = message;
    if (ctx?.reportInput) {
        rest.input = _input;
    }
    return rest;
}
function getSizableOrigin(input) {
    if (input instanceof Set) return "set";
    if (input instanceof Map) return "map";
    // @ts-ignore
    if (input instanceof File) return "file";
    return "unknown";
}
const highSurrogate = /[\uD800-\uDBFF]/;
function codePointLength(str) {
    const units = str.length;
    if (!highSurrogate.test(str)) return units;
    let count = units;
    for(let i = 0; i < units - 1; i++){
        if ((str.charCodeAt(i) & 0xfc00) === 0xd800 && (str.charCodeAt(i + 1) & 0xfc00) === 0xdc00) {
            count--;
            i++;
        }
    }
    return count;
}
function getLengthableOrigin(input) {
    if (Array.isArray(input)) return "array";
    if (typeof input === "string") return "string";
    return "unknown";
}
function parsedType(data) {
    const t = typeof data;
    switch(t){
        case "number":
            {
                return Number.isNaN(data) ? "nan" : "number";
            }
        case "object":
            {
                if (data === null) {
                    return "null";
                }
                if (Array.isArray(data)) {
                    return "array";
                }
                const obj = data;
                if (obj && Object.getPrototypeOf(obj) !== Object.prototype && "constructor" in obj && obj.constructor) {
                    return obj.constructor.name;
                }
            }
    }
    return t;
}
function issue(...args) {
    const [iss, input, inst] = args;
    if (typeof iss === "string") {
        return {
            message: iss,
            code: "custom",
            input,
            inst
        };
    }
    return {
        ...iss
    };
}
function cleanEnum(obj) {
    return Object.entries(obj).filter(([k, _])=>{
        // return true if NaN, meaning it's not a number, thus a string key
        return Number.isNaN(Number.parseInt(k, 10));
    }).map((el)=>el[1]);
}
function base64ToUint8Array(base64) {
    const binaryString = atob(base64);
    const bytes = new Uint8Array(binaryString.length);
    for(let i = 0; i < binaryString.length; i++){
        bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
}
function uint8ArrayToBase64(bytes) {
    let binaryString = "";
    for(let i = 0; i < bytes.length; i++){
        binaryString += String.fromCharCode(bytes[i]);
    }
    return btoa(binaryString);
}
function base64urlToUint8Array(base64url) {
    const base64 = base64url.replace(/-/g, "+").replace(/_/g, "/");
    const padding = "=".repeat((4 - base64.length % 4) % 4);
    return base64ToUint8Array(base64 + padding);
}
function uint8ArrayToBase64url(bytes) {
    return uint8ArrayToBase64(bytes).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");
}
function hexToUint8Array(hex) {
    const cleanHex = hex.replace(/^0x/, "");
    if (cleanHex.length % 2 !== 0) {
        throw new Error("Invalid hex string length");
    }
    const bytes = new Uint8Array(cleanHex.length / 2);
    for(let i = 0; i < cleanHex.length; i += 2){
        bytes[i / 2] = Number.parseInt(cleanHex.slice(i, i + 2), 16);
    }
    return bytes;
}
function uint8ArrayToHex(bytes) {
    return Array.from(bytes).map((b)=>b.toString(16).padStart(2, "0")).join("");
}
class Class {
    constructor(..._args){}
}
function members(proto, table) {
    for(const key in table){
        const desc = Object.getOwnPropertyDescriptor(table, key);
        // a getter installs as written, so it stays live: `description` reads through to the registry on every access. not enumerable: an object literal's is, and a prototype member never was
        if (desc.get) Object.defineProperty(proto, key, {
            ...desc,
            enumerable: false
        });
        else defineBound(proto, key, desc.value);
    }
}
function own(inst, key, value, enumerable = true) {
    Object.defineProperty(inst, key, {
        configurable: true,
        writable: true,
        enumerable,
        value
    });
    return value;
}
function hide(inst, key, value) {
    return own(inst, key, value, false);
}
function defineBound(proto, key, fn) {
    Object.defineProperty(proto, key, {
        configurable: true,
        get () {
            // vitest's spyOn calls a prototype getter bare to find the function it wraps, so a nullish receiver answers the raw method
            return this == null ? fn : own(this, key, fn.bind(this));
        },
        set (value) {
            own(this, key, value);
        }
    });
}
/** Returns the prototype to install on, or `undefined` if this group is already installed on it. */ function claim(inst, sentinel) {
    const proto = Object.getPrototypeOf(inst);
    // Runs on every construction, so `in` rather than the costlier `hasOwnProperty.call`. Sentinels are keys the group itself defines.
    return sentinel in proto ? undefined : proto;
}
// The internals whose init chain is installing. A second call for the same one is a derived constructor overriding its base, so it must not construct another schema in between or the override is dropped.
let installing;
// Set while a getter is running, so a value that resolved through a recursion break is not memoized. One shared descriptor shadows the key for the duration, which costs no per-key allocation.
let broke = false;
const breaker = {
    configurable: true,
    get () {
        broke = true;
        return undefined;
    }
};
function defineLazyInternal(inst, key, compute) {
    const proto = Object.getPrototypeOf(inst._zod);
    if (key in proto && installing !== inst._zod) {
        // A repeat construction: everything is installed already. Cleared here so the reference is not held past the first construction of every type.
        installing = undefined;
        return;
    }
    installing = inst._zod;
    Object.defineProperty(proto, key, {
        configurable: true,
        get () {
            // Shadowed before computing so a re-entrant read from a recursive schema resolves to undefined instead of running the getter again.
            Object.defineProperty(this, key, breaker);
            const outer = broke;
            broke = false;
            try {
                const value = compute(this);
                // A result that resolved through a recursion break is recomputed once the graph is complete; everything else memoizes, undefined included.
                if (broke) delete this[key];
                else Object.defineProperty(this, key, {
                    configurable: true,
                    writable: true,
                    value
                });
                broke = broke || outer;
                return value;
            } catch (err) {
                // A compute that threw memoizes nothing, so a later read runs it again and fails the same way. The shadow goes with it, since leaving it installed would answer undefined for every later read.
                delete this[key];
                broke = broke || outer;
                throw err;
            }
        },
        set (value) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                value
            });
        }
    });
}
function installLazyProp(inst, key, make, enumerable) {
    const proto = claim(inst, key);
    if (!proto) return;
    Object.defineProperty(proto, key, {
        configurable: true,
        get () {
            // Shadowed before computing, so a re-entrant read from a self-referential shape resolves to undefined instead of running the getter again. A data property rather than an accessor: an own accessor is the dictionary-mode transition this exists to avoid.
            const desc = {
                configurable: true,
                writable: true,
                enumerable,
                value: undefined
            };
            Object.defineProperty(this, key, desc);
            // a compute that throws leaves the shadow behind, so later reads answer undefined instead of re-throwing; `defineLazy` did the same, and `defineLazyInternal`'s delete-on-catch would cost bytes in every bundle for a case only a throwing user getter reaches
            desc.value = make(this);
            Object.defineProperty(this, key, desc);
            return desc.value;
        },
        set (value) {
            Object.defineProperty(this, key, {
                configurable: true,
                writable: true,
                enumerable,
                value
            });
        }
    });
}
const CONSTANT_CATCH = "~constantCatch";
function constantCatch(value) {
    const fn = ()=>value;
    fn[CONSTANT_CATCH] = true;
    return fn;
}
}),
];

//# sourceMappingURL=09ge_zod_v4_0k3wck5._.js.map