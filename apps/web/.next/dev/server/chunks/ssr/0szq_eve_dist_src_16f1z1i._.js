module.exports = [
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/attachments/refs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ATTACHMENT_REF_SCHEME",
    ()=>ATTACHMENT_REF_SCHEME,
    "ATTACHMENT_REF_WIRE_VERSION",
    ()=>ATTACHMENT_REF_WIRE_VERSION,
    "encodeAttachmentRef",
    ()=>encodeAttachmentRef,
    "isAttachmentRefUrl",
    ()=>isAttachmentRefUrl,
    "parseAttachmentRef",
    ()=>parseAttachmentRef
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/errors.js [app-ssr] (ecmascript)");
;
const ATTACHMENT_REF_SCHEME = `eve-attachment:`, ATTACHMENT_REF_WIRE_VERSION = `1`;
function isValidSize(e) {
    return Number.isFinite(e) && Number.isInteger(e) && e >= 0;
}
function encodeAttachmentRef(e) {
    if (e.size !== void 0 && !isValidSize(e.size)) throw RangeError(`AttachmentRef.size must be a non-negative integer. Received: ${String(e.size)}.`);
    let t = e.size === void 0 ? {
        params: e.params
    } : {
        params: e.params,
        size: e.size
    }, n = Buffer.from(JSON.stringify(t), `utf8`).toString(`base64url`), r = new URL(ATTACHMENT_REF_SCHEME);
    return r.searchParams.set(`v`, `1`), r.searchParams.set(`p`, n), r;
}
function parseAttachmentRef(e) {
    if (e.protocol !== `eve-attachment:`) throw Error(`AttachmentRef URL must use scheme "${ATTACHMENT_REF_SCHEME}". Got: "${e.protocol}".`);
    let t = e.searchParams.get(`v`);
    if (t !== `1`) throw Error(`AttachmentRef wire format version must be "1". Got: ${t === null ? `missing` : JSON.stringify(t)}.`);
    let n = e.searchParams.get(`p`);
    if (n === null || n === ``) throw Error(`AttachmentRef URL is missing the required "p" payload query param.`);
    let r;
    try {
        let e = Buffer.from(n, `base64url`).toString(`utf8`);
        r = JSON.parse(e);
    } catch (e) {
        throw Error(`AttachmentRef payload is not valid base64url-encoded JSON: ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toErrorMessage"])(e)}`);
    }
    if (typeof r != `object` || !r || Array.isArray(r)) throw Error(`AttachmentRef payload must decode to a JSON object.`);
    let i = r;
    if (!(`params` in i)) throw Error(`AttachmentRef payload is missing the required "params" field.`);
    let a = i.params;
    if (!(`size` in i)) return {
        params: a
    };
    let o = i.size;
    if (typeof o != `number` || !isValidSize(o)) throw Error(`AttachmentRef payload "size" must be a non-negative integer. Got: ${JSON.stringify(o)}.`);
    return {
        params: a,
        size: o
    };
}
function isAttachmentRefUrl(e) {
    return e instanceof URL && e.protocol === `eve-attachment:`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/attachments/sandbox-refs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SANDBOX_URL_SCHEME",
    ()=>SANDBOX_URL_SCHEME,
    "decodeSandboxRef",
    ()=>decodeSandboxRef,
    "encodeSandboxRef",
    ()=>encodeSandboxRef,
    "isSandboxRefUrl",
    ()=>isSandboxRefUrl
]);
const SANDBOX_URL_SCHEME = `eve-sandbox:`, PATH_QUERY_KEY = `path`, SIZE_QUERY_KEY = `size`, TYPE_QUERY_KEY = `type`;
function isValidSize(e) {
    return Number.isFinite(e) && Number.isInteger(e) && e >= 0;
}
function encodeSandboxRef(e) {
    if (typeof e.path != `string` || e.path.length === 0) throw RangeError(`SandboxRef.path must be a non-empty string.`);
    if (!isValidSize(e.size)) throw RangeError(`SandboxRef.size must be a non-negative integer. Received: ${String(e.size)}.`);
    if (typeof e.mediaType != `string` || e.mediaType.length === 0) throw RangeError(`SandboxRef.mediaType must be a non-empty string.`);
    let t = new URL(SANDBOX_URL_SCHEME);
    return t.searchParams.set(PATH_QUERY_KEY, e.path), t.searchParams.set(SIZE_QUERY_KEY, String(e.size)), t.searchParams.set(TYPE_QUERY_KEY, e.mediaType), t;
}
function decodeSandboxRef(e) {
    let t = e instanceof URL ? e : new URL(e);
    if (t.protocol !== `eve-sandbox:`) throw Error(`SandboxRef URL must use scheme "${SANDBOX_URL_SCHEME}". Got: "${t.protocol}".`);
    let n = t.searchParams.get(PATH_QUERY_KEY);
    if (n === null || n === ``) throw Error(`SandboxRef URL is missing the required "path" query param.`);
    let r = t.searchParams.get(SIZE_QUERY_KEY);
    if (r === null || r === ``) throw Error(`SandboxRef URL is missing the required "size" query param.`);
    let i = Number(r);
    if (!isValidSize(i)) throw Error(`SandboxRef URL "size" must be a non-negative integer. Got: ${JSON.stringify(r)}.`);
    let a = t.searchParams.get(TYPE_QUERY_KEY);
    if (a === null || a === ``) throw Error(`SandboxRef URL is missing the required "type" query param.`);
    return {
        mediaType: a,
        path: n,
        size: i
    };
}
function isSandboxRefUrl(e) {
    return e instanceof URL && e.protocol === `eve-sandbox:`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/attachments/url-refs.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "deserializeUrlFilePart",
    ()=>deserializeUrlFilePart,
    "hasInternalRefScheme",
    ()=>hasInternalRefScheme,
    "isSerializedUrlFilePart",
    ()=>isSerializedUrlFilePart,
    "serializeUrlFilePart",
    ()=>serializeUrlFilePart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$sandbox$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/attachments/sandbox-refs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/attachments/refs.js [app-ssr] (ecmascript)");
;
;
const EVE_URL_SCHEME = `eve-url:`;
function serializeUrlFilePart(e) {
    return `${EVE_URL_SCHEME}${e.href}`;
}
function isSerializedUrlFilePart(e) {
    return typeof e == `string` && e.startsWith(EVE_URL_SCHEME);
}
function deserializeUrlFilePart(e) {
    return new URL(e.slice(8));
}
const INTERNAL_REF_SCHEMES = [
    EVE_URL_SCHEME,
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$sandbox$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SANDBOX_URL_SCHEME"],
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ATTACHMENT_REF_SCHEME"]
];
function hasInternalRefScheme(e) {
    return INTERNAL_REF_SCHEMES.some((t)=>e.startsWith(t));
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/http/basic-auth.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "encodeBasicCredentials",
    ()=>encodeBasicCredentials
]);
function encodeBasicCredentials(e, t) {
    let n = new TextEncoder().encode(`${e}:${t}`), r = Array.from(n, (e)=>String.fromCodePoint(e)).join(``);
    return btoa(r);
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/cancel-turn.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CancelTurnResponseSchema",
    ()=>CancelTurnResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/compiled/zod/index.js [app-ssr] (ecmascript) <locals>");
;
const CancelTurnResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].discriminatedUnion(`status`, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].strictObject({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().min(1),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`accepted`)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].strictObject({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`no_active_turn`)
    })
]);
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/clear-session.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClearResponseSchema",
    ()=>ClearResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/compiled/zod/index.js [app-ssr] (ecmascript) <locals>");
;
const ClearResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].discriminatedUnion(`status`, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().min(1),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`accepted`)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`no_active_session`)
    })
]);
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/compact-session.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CompactResponseSchema",
    ()=>CompactResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/compiled/zod/index.js [app-ssr] (ecmascript) <locals>");
;
const CompactResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].discriminatedUnion(`status`, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        sessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().min(1),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`accepted`)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`no_active_session`)
    })
]);
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/event-dedupe.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createEventDeduper",
    ()=>createEventDeduper
]);
function createEventDeduper() {
    let e = new Set;
    return {
        admit (t) {
            let n = t.meta?.id;
            return n === void 0 || !e.has(n) && (e.add(n), !0);
        },
        get size () {
            return e.size;
        }
    };
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/event-id.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVENT_ID_PREFIX",
    ()=>EVENT_ID_PREFIX,
    "createEventId",
    ()=>createEventId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$ulid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/ulid.js [app-ssr] (ecmascript)");
;
const EVENT_ID_PREFIX = `evt_`;
function createEventId() {
    return `${EVENT_ID_PREFIX}${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$ulid$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createUlid"])()}`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message-version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeMessageStreamEvent",
    ()=>normalizeMessageStreamEvent,
    "normalizePersistedMessageStreamEvent",
    ()=>normalizePersistedMessageStreamEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)");
;
const currentMessageStreamVersion = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_MESSAGE_STREAM_VERSION"];
function normalizeMessageStreamEvent(e, t) {
    switch(e){
        case `21`:
        case `22`:
        case `23`:
        case `24`:
            return normalizeLegacyMessageStreamEvent(e, t);
        case `25`:
        case `26`:
            return validateDeltaMessageStreamEvent(e, t);
        default:
            return assertNever(e);
    }
}
function normalizePersistedMessageStreamEvent(e) {
    return e.type === `message.appended` && `messageSoFar` in e.data || e.type === `reasoning.appended` && `reasoningSoFar` in e.data || e.type === `action.input.appended` && `inputTextOffset` in e.data ? normalizeLegacyMessageStreamEvent(void 0, e) : normalizeMessageStreamEvent(currentMessageStreamVersion, e);
}
function normalizeLegacyMessageStreamEvent(e, t) {
    if (t.type === `message.appended`) return assertLegacyAppendSnapshot(t.data.messageSoFar, t.data.messageDelta, `message`, e), {
        data: {
            messageDelta: t.data.messageDelta,
            sequence: t.data.sequence,
            stepIndex: t.data.stepIndex,
            turnId: t.data.turnId
        },
        meta: t.meta,
        type: `message.appended`
    };
    if (t.type === `reasoning.appended`) return assertLegacyAppendSnapshot(t.data.reasoningSoFar, t.data.reasoningDelta, `reasoning`, e), {
        data: {
            reasoningDelta: t.data.reasoningDelta,
            sequence: t.data.sequence,
            stepIndex: t.data.stepIndex,
            turnId: t.data.turnId
        },
        meta: t.meta,
        type: `reasoning.appended`
    };
    if (t.type === `action.input.appended`) {
        if (e !== void 0 && e !== `24`) throw TypeError(`Invalid action input append for stream version ${e}.`);
        return assertLegacyActionInputOffset(t.data.inputTextOffset, e), {
            data: {
                callId: t.data.callId,
                inputTextDelta: t.data.inputTextDelta,
                sequence: t.data.sequence,
                stepIndex: t.data.stepIndex,
                toolName: t.data.toolName,
                turnId: t.data.turnId
            },
            meta: t.meta,
            type: `action.input.appended`
        };
    }
    return t;
}
function validateDeltaMessageStreamEvent(e, t) {
    return t.type === `message.appended` ? (assertAppendDelta(t.data.messageDelta, `message`, e), assertUnsupportedAppendField(t.data, `messageOffset`, `message`, e), assertUnsupportedAppendField(t.data, `messageSoFar`, `message`, e)) : t.type === `reasoning.appended` ? (assertAppendDelta(t.data.reasoningDelta, `reasoning`, e), assertUnsupportedAppendField(t.data, `reasoningOffset`, `reasoning`, e), assertUnsupportedAppendField(t.data, `reasoningSoFar`, `reasoning`, e)) : t.type === `action.input.appended` && (assertAppendDelta(t.data.inputTextDelta, `action input`, e), assertUnsupportedAppendField(t.data, `inputTextOffset`, `action input`, e)), t;
}
function assertAppendDelta(e, t, n) {
    if (typeof e != `string`) throw TypeError(`Invalid ${t} append delta for stream version ${n}.`);
}
function assertUnsupportedAppendField(e, t, n, r) {
    if (t in e) throw TypeError(`Invalid ${n} append shape for stream version ${r}.`);
}
function assertNever(e) {
    throw TypeError(`Unsupported message stream version: ${String(e)}.`);
}
function assertLegacyActionInputOffset(e, t) {
    if (!Number.isSafeInteger(e) || e < 0) {
        let e = t === void 0 ? `persisted stream` : `stream version ${t}`;
        throw TypeError(`Invalid action input append offset for ${e}.`);
    }
}
function assertLegacyAppendSnapshot(e, t, n, r) {
    let i = e.length - t.length;
    if (i < 0 || e.slice(i) !== t) {
        let e = r === void 0 ? `persisted stream` : `stream version ${r}`;
        throw TypeError(`Invalid cumulative ${n} append for ${e}.`);
    }
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVE_MESSAGE_STREAM_CONTENT_TYPE",
    ()=>EVE_MESSAGE_STREAM_CONTENT_TYPE,
    "EVE_MESSAGE_STREAM_FORMAT",
    ()=>EVE_MESSAGE_STREAM_FORMAT,
    "EVE_MESSAGE_STREAM_VERSION",
    ()=>EVE_MESSAGE_STREAM_VERSION,
    "EVE_SESSION_ID_HEADER",
    ()=>EVE_SESSION_ID_HEADER,
    "EVE_STREAM_CONTROL_VERSION",
    ()=>EVE_STREAM_CONTROL_VERSION,
    "EVE_STREAM_CONTROL_VERSION_QUERY",
    ()=>EVE_STREAM_CONTROL_VERSION_QUERY,
    "EVE_STREAM_FORMAT_HEADER",
    ()=>EVE_STREAM_FORMAT_HEADER,
    "EVE_STREAM_LEASE_ENDED_CONTROL",
    ()=>EVE_STREAM_LEASE_ENDED_CONTROL,
    "EVE_STREAM_TAIL_INDEX_HEADER",
    ()=>EVE_STREAM_TAIL_INDEX_HEADER,
    "EVE_STREAM_VERSION_HEADER",
    ()=>EVE_STREAM_VERSION_HEADER,
    "createActionInputAppendedEvent",
    ()=>createActionInputAppendedEvent,
    "createActionPartialEvent",
    ()=>createActionPartialEvent,
    "createActionResultEvent",
    ()=>createActionResultEvent,
    "createActionsRequestedEvent",
    ()=>createActionsRequestedEvent,
    "createAgentStartedEvent",
    ()=>createAgentStartedEvent,
    "createApprovalCandidateEvent",
    ()=>createApprovalCandidateEvent,
    "createApprovalSettledEvent",
    ()=>createApprovalSettledEvent,
    "createAuthorizationCompletedEvent",
    ()=>createAuthorizationCompletedEvent,
    "createAuthorizationRequiredEvent",
    ()=>createAuthorizationRequiredEvent,
    "createCompactionCompletedEvent",
    ()=>createCompactionCompletedEvent,
    "createCompactionRequestedEvent",
    ()=>createCompactionRequestedEvent,
    "createContextClearedEvent",
    ()=>createContextClearedEvent,
    "createInputRequestedEvent",
    ()=>createInputRequestedEvent,
    "createInputResolvedEvent",
    ()=>createInputResolvedEvent,
    "createMessageAppendedEvent",
    ()=>createMessageAppendedEvent,
    "createMessageCompletedEvent",
    ()=>createMessageCompletedEvent,
    "createMessageReceivedEvent",
    ()=>createMessageReceivedEvent,
    "createReasoningAppendedEvent",
    ()=>createReasoningAppendedEvent,
    "createReasoningCompletedEvent",
    ()=>createReasoningCompletedEvent,
    "createResultCompletedEvent",
    ()=>createResultCompletedEvent,
    "createSessionCompletedEvent",
    ()=>createSessionCompletedEvent,
    "createSessionFailedEvent",
    ()=>createSessionFailedEvent,
    "createSessionStartedEvent",
    ()=>createSessionStartedEvent,
    "createSessionWaitingEvent",
    ()=>createSessionWaitingEvent,
    "createStepCompletedEvent",
    ()=>createStepCompletedEvent,
    "createStepFailedEvent",
    ()=>createStepFailedEvent,
    "createStepStartedEvent",
    ()=>createStepStartedEvent,
    "createTaskSettledEvent",
    ()=>createTaskSettledEvent,
    "createTaskStartedEvent",
    ()=>createTaskStartedEvent,
    "createTurnCancelledEvent",
    ()=>createTurnCancelledEvent,
    "createTurnCompletedEvent",
    ()=>createTurnCompletedEvent,
    "createTurnFailedEvent",
    ()=>createTurnFailedEvent,
    "createTurnStartedEvent",
    ()=>createTurnStartedEvent,
    "createTurnWaitingEvent",
    ()=>createTurnWaitingEvent,
    "encodeMessageStreamEvent",
    ()=>encodeMessageStreamEvent,
    "isCurrentTurnBoundaryEvent",
    ()=>isCurrentTurnBoundaryEvent,
    "isTurnFailureEvent",
    ()=>isTurnFailureEvent,
    "stampMessageStreamEvent",
    ()=>stampMessageStreamEvent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$url$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/attachments/url-refs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/routes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$sandbox$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/attachments/sandbox-refs.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$event$2d$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/event-id.js [app-ssr] (ecmascript)");
;
;
;
;
const EVE_SESSION_ID_HEADER = `x-eve-session-id`, EVE_STREAM_FORMAT_HEADER = `x-eve-stream-format`, EVE_STREAM_TAIL_INDEX_HEADER = `x-eve-stream-tail-index`, EVE_STREAM_VERSION_HEADER = `x-eve-stream-version`, EVE_MESSAGE_STREAM_CONTENT_TYPE = `application/x-ndjson; charset=utf-8`, EVE_MESSAGE_STREAM_FORMAT = `ndjson`, EVE_MESSAGE_STREAM_VERSION = `26`, EVE_STREAM_CONTROL_VERSION = `1`, EVE_STREAM_CONTROL_VERSION_QUERY = `streamControlVersion`, EVE_STREAM_LEASE_ENDED_CONTROL = {
    $eve: `stream.lease-ended`,
    version: 1
}, textEncoder = new TextEncoder;
function isCurrentTurnBoundaryEvent(e) {
    return e.type === `session.completed` || e.type === `session.failed` || e.type === `session.waiting`;
}
function isTurnFailureEvent(e) {
    return e.type === `session.failed` || e.type === `step.failed` || e.type === `turn.failed`;
}
function createSessionStartedEvent(e) {
    let t = {};
    return e?.invocation !== void 0 && (t.invocation = e.invocation), e?.runtime !== void 0 && (t.runtime = e.runtime), e?.trace !== void 0 && (t.trace = e.trace), {
        data: t,
        type: `session.started`
    };
}
function createTurnStartedEvent(e) {
    let t = {
        sequence: e.sequence,
        turnId: e.turnId
    };
    return e.trace !== void 0 && (t.trace = e.trace), {
        data: t,
        type: `turn.started`
    };
}
function createMessageReceivedEvent(e) {
    return {
        data: {
            message: summarizeUserContent(e.message),
            parts: projectUserContentParts(e.message),
            sequence: e.sequence,
            turnId: e.turnId
        },
        type: `message.received`
    };
}
function summarizeUserContent(e) {
    if (typeof e == `string`) return e;
    let t = [];
    for (let n of e)if (n.type === `text`) t.push(n.text);
    else if (n.type === `file`) {
        let e = n.filename ?? n.mediaType;
        t.push(`[file: ${e} (${n.mediaType})]`);
    } else n.type === `image` && t.push(`[image: ${n.mediaType ?? `image`}]`);
    return t.join(`
`);
}
function projectUserContentParts(e) {
    if (typeof e == `string`) return [
        {
            text: e,
            type: `text`
        }
    ];
    let t = [];
    for (let n of e)n.type === `text` ? t.push({
        text: n.text,
        type: `text`
    }) : n.type === `file` ? t.push(projectFileLikePart(n.data, n.mediaType, n.filename)) : n.type === `image` && t.push(projectFileLikePart(n.image, n.mediaType ?? `application/octet-stream`, void 0));
    return t;
}
function projectFileLikePart(e, t, n) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$sandbox$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSandboxRefUrl"])(e)) {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$sandbox$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["decodeSandboxRef"])(e);
        return createProjectedFilePart({
            filename: basenameOf(n ?? t.path),
            mediaType: t.mediaType,
            size: t.size
        });
    }
    let r = projectTaggedFileData(e, t, n);
    if (r !== void 0) return r;
    let i = byteLengthOf(e);
    return createProjectedFilePart(i === void 0 ? {
        filename: n,
        mediaType: t,
        ...clientUrlFragment(e)
    } : {
        filename: n,
        mediaType: t,
        size: i
    });
}
function projectTaggedFileData(e, t, n) {
    if (isTaggedFileData(e)) switch(e.type){
        case `data`:
            {
                let r = byteLengthOf(e.data);
                return createProjectedFilePart(r === void 0 ? {
                    filename: n,
                    mediaType: t
                } : {
                    filename: n,
                    mediaType: t,
                    size: r
                });
            }
        case `reference`:
        case `text`:
            return createProjectedFilePart({
                filename: n,
                mediaType: t
            });
        case `url`:
            return createProjectedFilePart({
                filename: n,
                mediaType: t,
                ...clientUrlFragment(e.url)
            });
    }
}
function createProjectedFilePart(e) {
    let t = {
        mediaType: e.mediaType,
        type: `file`
    };
    return e.filename !== void 0 && (t.filename = e.filename), e.size !== void 0 && (t.size = e.size), e.url !== void 0 && (t.url = e.url), t;
}
function isTaggedFileData(e) {
    if (typeof e != `object` || !e) return !1;
    let t = e.type;
    return t === `data` || t === `reference` || t === `text` || t === `url`;
}
function byteLengthOf(e) {
    if (e instanceof Uint8Array || e instanceof ArrayBuffer) return e.byteLength;
}
function clientUrlFragment(e) {
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$url$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSerializedUrlFilePart"])(e)) try {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$url$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deserializeUrlFilePart"])(e);
        return isClientResolvableUrl(t) ? {
            url: t.href
        } : {};
    } catch  {
        return {};
    }
    if (e instanceof URL) return isClientResolvableUrl(e) ? {
        url: e.href
    } : {};
    if (typeof e != `string` || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$attachments$2f$url$2d$refs$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasInternalRefScheme"])(e)) return {};
    if (e.startsWith(`data:`)) return {
        url: e
    };
    try {
        let t = new URL(e);
        return isClientResolvableUrl(t) ? {
            url: t.href
        } : {};
    } catch  {
        return {};
    }
}
function isClientResolvableUrl(e) {
    return e.protocol === `http:` || e.protocol === `https:` || e.protocol === `data:`;
}
function basenameOf(e) {
    let t = e.replaceAll(`\\`, `/`), n = t.slice(t.lastIndexOf(`/`) + 1);
    return n.length > 0 ? n : e;
}
function createActionsRequestedEvent(e) {
    return {
        data: {
            actions: e.actions,
            ...optionalPresentation(e.presentation),
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `actions.requested`
    };
}
function optionalPresentation(e) {
    return e === void 0 ? {} : {
        presentation: e
    };
}
function createActionInputAppendedEvent(e) {
    return {
        data: {
            callId: e.callId,
            inputTextDelta: e.inputTextDelta,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            toolName: e.toolName,
            turnId: e.turnId
        },
        type: `action.input.appended`
    };
}
function createAuthorizationRequiredEvent(e) {
    let t = {
        description: e.description,
        name: e.name,
        sequence: e.sequence,
        stepIndex: e.stepIndex,
        turnId: e.turnId
    };
    return e.attemptId !== void 0 && (t.attemptId = e.attemptId), e.authorization !== void 0 && (t.authorization = e.authorization), e.candidateId !== void 0 && (t.candidateId = e.candidateId), e.principalId !== void 0 && (t.principalId = e.principalId), e.webhookUrl !== void 0 && (t.webhookUrl = e.webhookUrl), e.taskId !== void 0 && (t.taskId = e.taskId), {
        data: t,
        type: `authorization.required`
    };
}
function createAuthorizationCompletedEvent(e) {
    let t = {
        name: e.name,
        outcome: e.outcome,
        sequence: e.sequence,
        stepIndex: e.stepIndex,
        turnId: e.turnId
    };
    return e.attemptId !== void 0 && (t.attemptId = e.attemptId), e.authorization !== void 0 && (t.authorization = e.authorization), e.candidateId !== void 0 && (t.candidateId = e.candidateId), e.principalId !== void 0 && (t.principalId = e.principalId), e.reason !== void 0 && (t.reason = e.reason), e.taskId !== void 0 && (t.taskId = e.taskId), {
        data: t,
        type: `authorization.completed`
    };
}
function createApprovalCandidateEvent(e) {
    return {
        data: e,
        type: `approval.candidate`
    };
}
function createApprovalSettledEvent(e) {
    return {
        data: e,
        type: `approval.settled`
    };
}
function createInputRequestedEvent(e) {
    let t = {
        requests: e.requests,
        sequence: e.sequence,
        stepIndex: e.stepIndex,
        turnId: e.turnId
    };
    return e.taskId !== void 0 && (t.taskId = e.taskId), {
        data: t,
        type: `input.requested`
    };
}
function createInputResolvedEvent(e) {
    return {
        data: {
            resolutions: e.resolutions,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `input.resolved`
    };
}
function createActionResultEvent(e) {
    let t = e.rejected === !0 ? {
        error: buildActionResultError(e.result),
        status: `rejected`
    } : normalizeActionResultOutcome(e.result);
    return {
        data: {
            error: t.error,
            ...optionalPresentation(e.presentation),
            result: e.result,
            sequence: e.sequence,
            status: t.status,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `action.result`
    };
}
function createActionPartialEvent(e) {
    return {
        data: {
            ...optionalPresentation(e.presentation),
            result: e.result,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `action.partial`
    };
}
function createTaskStartedEvent(e) {
    return {
        data: {
            callId: e.callId,
            kind: e.kind,
            name: e.name,
            taskId: e.taskId,
            turnId: e.turnId
        },
        type: `task.started`
    };
}
function createTaskSettledEvent(e) {
    let t = {
        callId: e.callId,
        ...e.kind !== void 0 && {
            kind: e.kind
        },
        ...e.name !== void 0 && {
            name: e.name
        },
        status: e.status,
        taskId: e.taskId,
        turnId: e.turnId
    };
    return e.output !== void 0 && (t.output = e.output), e.error !== void 0 && (t.error = e.error), e.cancel !== void 0 && (t.cancel = e.cancel), {
        data: t,
        type: `task.settled`
    };
}
function createAgentStartedEvent(e) {
    let t = {
        callId: e.callId,
        turnId: e.turnId,
        name: e.name,
        sessionId: e.sessionId,
        streamPath: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEveSessionStreamRoutePath"])(e.sessionId)
    };
    return e.taskId !== void 0 && (t.taskId = e.taskId), e.remote !== void 0 && (t.remote = e.remote, t.streamPath = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEveSubagentStreamRoutePath"])({
        callId: e.callId,
        childSessionId: e.sessionId,
        parentSessionId: e.parentSessionId
    })), {
        data: t,
        type: `agent.started`
    };
}
function createMessageAppendedEvent(e) {
    return {
        data: {
            messageDelta: e.messageDelta,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `message.appended`
    };
}
function createReasoningAppendedEvent(e) {
    return {
        data: {
            reasoningDelta: e.reasoningDelta,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `reasoning.appended`
    };
}
function createMessageCompletedEvent(e) {
    return {
        data: {
            finishReason: e.finishReason ?? `stop`,
            message: e.message,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `message.completed`
    };
}
function createReasoningCompletedEvent(e) {
    return {
        data: {
            reasoning: e.reasoning,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `reasoning.completed`
    };
}
function createResultCompletedEvent(e) {
    return {
        data: {
            result: e.result,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `result.completed`
    };
}
function createStepStartedEvent(e) {
    return {
        data: {
            modelId: e.modelId,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `step.started`
    };
}
function createStepCompletedEvent(e) {
    let t = {
        finishReason: e.finishReason,
        sequence: e.sequence,
        stepIndex: e.stepIndex,
        turnId: e.turnId
    };
    return e.usage !== void 0 && (t.usage = e.usage), e.providerMetadata !== void 0 && (t.providerMetadata = e.providerMetadata), {
        data: t,
        type: `step.completed`
    };
}
function createStepFailedEvent(e) {
    return {
        data: {
            code: e.code,
            details: e.details,
            message: e.message,
            sequence: e.sequence,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `step.failed`
    };
}
function createTurnCompletedEvent(e) {
    return {
        data: {
            sequence: e.sequence,
            turnId: e.turnId
        },
        type: `turn.completed`
    };
}
function createTurnWaitingEvent(e) {
    return {
        data: {
            on: e.on,
            sequence: e.sequence,
            turnId: e.turnId,
            ...e.usage !== void 0 && {
                usage: e.usage
            }
        },
        type: `turn.waiting`
    };
}
function createTurnFailedEvent(e) {
    return {
        data: {
            code: e.code,
            details: e.details,
            message: e.message,
            sequence: e.sequence,
            turnId: e.turnId
        },
        type: `turn.failed`
    };
}
function createTurnCancelledEvent(e) {
    return {
        data: {
            sequence: e.sequence,
            turnId: e.turnId
        },
        type: `turn.cancelled`
    };
}
function createContextClearedEvent(e) {
    return {
        data: {
            sequence: e.sequence,
            sessionId: e.sessionId,
            turnId: e.turnId
        },
        type: `context.cleared`
    };
}
function createCompactionRequestedEvent(e) {
    return {
        data: {
            modelId: e.modelId,
            sequence: e.sequence,
            sessionId: e.sessionId,
            stepIndex: e.stepIndex,
            turnId: e.turnId,
            usageInputTokens: e.usageInputTokens ?? null
        },
        type: `compaction.requested`
    };
}
function createCompactionCompletedEvent(e) {
    return {
        data: {
            modelId: e.modelId,
            sequence: e.sequence,
            sessionId: e.sessionId,
            stepIndex: e.stepIndex,
            turnId: e.turnId
        },
        type: `compaction.completed`
    };
}
function createSessionWaitingEvent(e) {
    return {
        data: {
            continuationToken: ``,
            ...e !== void 0 && {
                usage: e
            },
            wait: `next-user-message`
        },
        type: `session.waiting`
    };
}
function createSessionFailedEvent(e) {
    return {
        data: {
            code: e.code,
            details: e.details,
            message: e.message,
            sessionId: e.sessionId,
            ...e.usage !== void 0 && {
                usage: e.usage
            }
        },
        type: `session.failed`
    };
}
function createSessionCompletedEvent(e) {
    return e === void 0 ? {
        type: `session.completed`
    } : {
        data: {
            usage: e
        },
        type: `session.completed`
    };
}
function stampMessageStreamEvent(e, t) {
    let n = {
        at: new Date().toISOString(),
        id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$event$2d$id$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventId"])()
    };
    return t !== void 0 && t.length > 0 && (n.deliveryIds = t), {
        ...e,
        meta: n
    };
}
function encodeMessageStreamEvent(e) {
    return textEncoder.encode(`${JSON.stringify(e)}\n`);
}
function normalizeActionResultOutcome(e) {
    if (e.isError === !0) return {
        error: buildActionResultError(e),
        status: `failed`
    };
    let t = readActionResultOutputError(e.output);
    return t === void 0 ? {
        status: `completed`
    } : {
        error: t,
        status: `failed`
    };
}
function buildActionResultError(e) {
    let t = readActionResultOutputError(e.output);
    return t === void 0 ? {
        code: `ACTION_RESULT_FAILED`,
        message: formatActionResultOutput(e.output)
    } : t;
}
function readActionResultOutputError(e) {
    let t = parseActionResultOutputRecord(e);
    if (t === void 0) return;
    let n = typeof t.code == `string` && t.code.length > 0 ? t.code : void 0, r = typeof t.message == `string` && t.message.length > 0 ? t.message : void 0;
    if (n !== void 0 && r !== void 0) return {
        code: n,
        message: r
    };
}
function parseActionResultOutputRecord(e) {
    if (typeof e == `object` && e) return e;
    if (typeof e != `string`) return;
    let t = e.trim();
    if (t.length !== 0) try {
        let e = JSON.parse(t);
        if (typeof e == `object` && e) return e;
    } catch  {
        return;
    }
}
function formatActionResultOutput(e) {
    if (typeof e == `string`) return e;
    let t = JSON.stringify(e);
    return typeof t == `string` && t.length > 0 ? t : `Action failed.`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/reset-session.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ResetResponseSchema",
    ()=>ResetResponseSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/compiled/zod/index.js [app-ssr] (ecmascript) <locals>");
;
const ResetResponseSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].discriminatedUnion(`status`, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        previousSessionId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().min(1),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`reset`)
    }),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`no_active_session`)
    })
]);
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/routes.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EVE_CALLBACK_ROUTE_PATTERN",
    ()=>EVE_CALLBACK_ROUTE_PATTERN,
    "EVE_CONNECTION_CALLBACK_ROUTE_PATTERN",
    ()=>EVE_CONNECTION_CALLBACK_ROUTE_PATTERN,
    "EVE_DEV_DISPATCH_SCHEDULE_ROUTE_PATTERN",
    ()=>EVE_DEV_DISPATCH_SCHEDULE_ROUTE_PATTERN,
    "EVE_DEV_RUNTIME_ARTIFACTS_REBUILD_ROUTE_PATH",
    ()=>EVE_DEV_RUNTIME_ARTIFACTS_REBUILD_ROUTE_PATH,
    "EVE_DEV_RUNTIME_ARTIFACTS_RESUME_ROUTE_PATH",
    ()=>EVE_DEV_RUNTIME_ARTIFACTS_RESUME_ROUTE_PATH,
    "EVE_DEV_RUNTIME_ARTIFACTS_ROUTE_PATH",
    ()=>EVE_DEV_RUNTIME_ARTIFACTS_ROUTE_PATH,
    "EVE_DEV_RUNTIME_ARTIFACTS_SUSPEND_ROUTE_PATH",
    ()=>EVE_DEV_RUNTIME_ARTIFACTS_SUSPEND_ROUTE_PATH,
    "EVE_HEALTH_ROUTE_PATH",
    ()=>EVE_HEALTH_ROUTE_PATH,
    "EVE_INFO_ROUTE_PATH",
    ()=>EVE_INFO_ROUTE_PATH,
    "EVE_PRODUCTION_CRON_ROUTE_PATTERN",
    ()=>EVE_PRODUCTION_CRON_ROUTE_PATTERN,
    "EVE_ROUTE_PREFIX",
    ()=>EVE_ROUTE_PREFIX,
    "EVE_SESSION_CANCEL_ROUTE_PATTERN",
    ()=>EVE_SESSION_CANCEL_ROUTE_PATTERN,
    "EVE_SESSION_CLEAR_ROUTE_PATTERN",
    ()=>EVE_SESSION_CLEAR_ROUTE_PATTERN,
    "EVE_SESSION_COMPACT_ROUTE_PATTERN",
    ()=>EVE_SESSION_COMPACT_ROUTE_PATTERN,
    "EVE_SESSION_RESET_ROUTE_PATTERN",
    ()=>EVE_SESSION_RESET_ROUTE_PATTERN,
    "EVE_SESSION_ROUTE_PATH",
    ()=>EVE_SESSION_ROUTE_PATH,
    "EVE_SESSION_ROUTE_PATTERN",
    ()=>EVE_SESSION_ROUTE_PATTERN,
    "EVE_SESSION_STREAM_ROUTE_PATTERN",
    ()=>EVE_SESSION_STREAM_ROUTE_PATTERN,
    "EVE_SUBAGENT_STREAM_ROUTE_PATTERN",
    ()=>EVE_SUBAGENT_STREAM_ROUTE_PATTERN,
    "createEveCallbackRoutePath",
    ()=>createEveCallbackRoutePath,
    "createEveConnectionCallbackRoutePath",
    ()=>createEveConnectionCallbackRoutePath,
    "createEveDevDispatchSchedulePath",
    ()=>createEveDevDispatchSchedulePath,
    "createEveSessionCancelRoutePath",
    ()=>createEveSessionCancelRoutePath,
    "createEveSessionClearRoutePath",
    ()=>createEveSessionClearRoutePath,
    "createEveSessionCompactRoutePath",
    ()=>createEveSessionCompactRoutePath,
    "createEveSessionResetRoutePath",
    ()=>createEveSessionResetRoutePath,
    "createEveSessionRoutePath",
    ()=>createEveSessionRoutePath,
    "createEveSessionStreamRoutePath",
    ()=>createEveSessionStreamRoutePath,
    "createEveSubagentStreamRoutePath",
    ()=>createEveSubagentStreamRoutePath,
    "createEveTaskInputRoutePath",
    ()=>createEveTaskInputRoutePath
]);
const EVE_ROUTE_PREFIX = `/eve/v1`, EVE_PRODUCTION_CRON_ROUTE_PATTERN = `${EVE_ROUTE_PREFIX}/cron/:token`, EVE_HEALTH_ROUTE_PATH = `${EVE_ROUTE_PREFIX}/health`, EVE_INFO_ROUTE_PATH = `${EVE_ROUTE_PREFIX}/info`, EVE_SESSION_ROUTE_PATH = `${EVE_ROUTE_PREFIX}/session`, EVE_SESSION_ROUTE_PATTERN = `${EVE_SESSION_ROUTE_PATH}/:sessionId`, EVE_SESSION_CANCEL_ROUTE_PATTERN = `${EVE_SESSION_ROUTE_PATH}/:sessionId/cancel`, EVE_SESSION_COMPACT_ROUTE_PATTERN = `${EVE_SESSION_ROUTE_PATH}/:sessionId/compact`, EVE_SESSION_CLEAR_ROUTE_PATTERN = `${EVE_SESSION_ROUTE_PATH}/:sessionId/clear`, EVE_SESSION_RESET_ROUTE_PATTERN = `${EVE_SESSION_ROUTE_PATH}/:sessionId/reset`, EVE_SESSION_STREAM_ROUTE_PATTERN = `${EVE_SESSION_ROUTE_PATH}/:sessionId/stream`, EVE_SUBAGENT_STREAM_ROUTE_PATTERN = `${EVE_SESSION_ROUTE_PATH}/:parentSessionId/subagents/:callId/:childSessionId/stream`, EVE_DEV_DISPATCH_SCHEDULE_ROUTE_PATTERN = `${EVE_ROUTE_PREFIX}/dev/schedules/:scheduleId`, EVE_DEV_RUNTIME_ARTIFACTS_ROUTE_PATH = `${EVE_ROUTE_PREFIX}/dev/runtime-artifacts`, EVE_DEV_RUNTIME_ARTIFACTS_REBUILD_ROUTE_PATH = `${EVE_DEV_RUNTIME_ARTIFACTS_ROUTE_PATH}/rebuild`, EVE_DEV_RUNTIME_ARTIFACTS_SUSPEND_ROUTE_PATH = `${EVE_DEV_RUNTIME_ARTIFACTS_ROUTE_PATH}/suspend`, EVE_DEV_RUNTIME_ARTIFACTS_RESUME_ROUTE_PATH = `${EVE_DEV_RUNTIME_ARTIFACTS_ROUTE_PATH}/resume`;
function createEveDevDispatchSchedulePath(e) {
    return `${EVE_ROUTE_PREFIX}/dev/schedules/${encodeURIComponent(e)}`;
}
const EVE_CONNECTION_CALLBACK_ROUTE_PATTERN = `${EVE_ROUTE_PREFIX}/connections/:name/callback/:attemptId/:token`, EVE_CALLBACK_ROUTE_PATTERN = `${EVE_ROUTE_PREFIX}/callback/:token`;
function createEveSessionRoutePath(e) {
    return `${EVE_SESSION_ROUTE_PATH}/${encodeURIComponent(e)}`;
}
function createEveSessionCancelRoutePath(e) {
    return `${EVE_SESSION_ROUTE_PATH}/${encodeURIComponent(e)}/cancel`;
}
function createEveSubagentStreamRoutePath(e) {
    return `${EVE_SESSION_ROUTE_PATH}/${encodeURIComponent(e.parentSessionId)}/subagents/${encodeURIComponent(e.callId)}/${encodeURIComponent(e.childSessionId)}/stream`;
}
function createEveSessionCompactRoutePath(e) {
    return `${EVE_SESSION_ROUTE_PATH}/${encodeURIComponent(e)}/compact`;
}
function createEveSessionClearRoutePath(e) {
    return `${EVE_SESSION_ROUTE_PATH}/${encodeURIComponent(e)}/clear`;
}
function createEveSessionResetRoutePath(e) {
    return `${EVE_SESSION_ROUTE_PATH}/${encodeURIComponent(e)}/reset`;
}
function createEveSessionStreamRoutePath(e) {
    return `${EVE_SESSION_ROUTE_PATH}/${encodeURIComponent(e)}/stream`;
}
function createEveConnectionCallbackRoutePath(e, t, n) {
    return `${EVE_ROUTE_PREFIX}/connections/${encodeURIComponent(e)}/callback/${encodeURIComponent(t)}/${encodeURIComponent(n)}`;
}
function createEveCallbackRoutePath(e) {
    return `${EVE_ROUTE_PREFIX}/callback/${encodeURIComponent(e)}`;
}
function createEveTaskInputRoutePath(e) {
    return `${EVE_ROUTE_PREFIX}/task-input/${encodeURIComponent(e)}`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/react/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-reducer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-reducer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$react$2f$use$2d$eve$2d$agent$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/react/use-eve-agent.js [app-ssr] (ecmascript)");
;
;
;
;
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/react/use-eve-agent.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useEveAgent",
    ()=>useEveAgent
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-store.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-reducer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/next@16.3.6_@types+node@26.6.4_react-dom@19.2.6_react@19.2.6__react@19.2.6/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$host$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-host.js [app-ssr] (ecmascript)");
;
;
;
;
function useEveAgent(e = {}) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(void 0), n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(e.resume ?? !1), [r, i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(n.current), [a, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0), s = e.prewarm ?? !1;
    if (!t.current) {
        if (n.current && e.initialSession === void 0 && e.session === void 0) throw Error(`useEveAgent({ resume: true }) requires initialSession or session.`);
        let r = e.reducer ?? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conversationReducer"];
        t.current = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EveAgentStore"]({
            auth: e.auth,
            headers: e.headers,
            host: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$host$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveEveAgentHost"])({
                agent: e.agent,
                host: e.host
            }),
            initialEvents: e.initialEvents,
            initialSession: e.initialSession,
            optimistic: e.optimistic,
            followSubagents: e.followSubagents,
            reducer: r,
            session: e.session
        });
    }
    let c = t.current;
    c.setCallbacks({
        onError: e.onError,
        onEvent: e.onEvent,
        onFinish: e.onFinish,
        onSessionChange: e.onSessionChange,
        prepareSend: e.prepareSend
    });
    let l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e)=>c.subscribe(e), [
        c
    ]), u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSyncExternalStore"])(l, ()=>c.snapshot, ()=>c.snapshot);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        let e = setTimeout(()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["attachEveAgentStore"])(c), 0);
        return ()=>{
            clearTimeout(e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["detachEveAgentStore"])(c);
        };
    }, [
        c
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!s) return;
        let e = setTimeout(()=>void c.prewarm().catch(()=>{}), 0);
        return ()=>clearTimeout(e);
    }, [
        a,
        s,
        c
    ]), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!n.current) return;
        let e = !0, finish = ()=>{
            e && i(!1);
        }, t = setTimeout(()=>void c.resume().then(finish, finish), 0);
        return ()=>{
            e = !1, clearTimeout(t);
        };
    }, [
        c
    ]);
    let d = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>c.cancel(), [
        c
    ]), f = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        c.reset(), o((e)=>e + 1);
    }, [
        c
    ]), p = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>c.prewarm(), [
        c
    ]), m = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>c.resume(), [
        c
    ]), h = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, t)=>c.send({
            ...t,
            message: e
        }), [
        c
    ]), g = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((e, t)=>c.send({
            ...t,
            inputResponses: e
        }), [
        c
    ]), _ = r && u.status === `ready` ? {
        ...u,
        status: `resuming`
    } : u;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$next$40$16$2e$3$2e$6_$40$types$2b$node$40$26$2e$6$2e$4_react$2d$dom$40$19$2e$2$2e$6_react$40$19$2e$2$2e$6_$5f$react$40$19$2e$2$2e$6$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>({
            ..._,
            cancel: d,
            prewarm: p,
            reset: f,
            respond: g,
            resume: m,
            send: h
        }), [
        d,
        p,
        f,
        g,
        m,
        h,
        _
    ]);
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/action-request-name.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "actionRequestName",
    ()=>actionRequestName
]);
function actionRequestName(e) {
    switch(e.kind){
        case `load-skill`:
            return `load_skill`;
        case `subagent-call`:
            return e.subagentName;
        case `remote-agent-call`:
            return e.remoteAgentName;
        case `tool-call`:
        case `workflow-tool-call`:
            return e.toolName;
    }
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/errors.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "toError",
    ()=>toError,
    "toErrorMessage",
    ()=>toErrorMessage,
    "walkCauseChain",
    ()=>walkCauseChain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/guards.js [app-ssr] (ecmascript)");
;
function toErrorMessage(e) {
    return e instanceof Error ? e.message : typeof e == `string` ? e : e == null ? String(e) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(e) ? typeof e.message == `string` && e.message.length > 0 ? e.message : safeJsonStringify(e) : String(e);
}
function toError(e) {
    if (e instanceof Error) return e;
    let t = Error(toErrorMessage(e));
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(e) ? (typeof e.name == `string` && e.name.length > 0 && (t.name = e.name), typeof e.stack == `string` && e.stack.length > 0 && (t.stack = e.stack), `cause` in e && e.cause !== void 0 && e.cause !== e && (t.cause = e.cause), t) : t;
}
function* walkCauseChain(e) {
    let t = new Set, n = e;
    for(; (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(n) && !t.has(n);)t.add(n), yield n, n = n.cause;
}
function safeJsonStringify(e) {
    try {
        return JSON.stringify(e) ?? String(e);
    } catch  {
        return String(e);
    }
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/eve-route-path.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "joinEveRoutePath",
    ()=>joinEveRoutePath,
    "normalizePublicEveRoutePath",
    ()=>normalizePublicEveRoutePath
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/routes.js [app-ssr] (ecmascript)");
;
const EVE_NAMED_AGENT_MOUNT_PATTERN = /^\/eve\/[a-z0-9][a-z0-9_-]*$/, EVE_NAMED_AGENT_PROTOCOL_PATTERN = /^\/eve\/[a-z0-9][a-z0-9_-]*\/v1$/;
function joinEveRoutePath(e, t) {
    let n = trimTrailingSlash(e), r = t.startsWith(`/`) ? t : `/${t}`;
    if (r === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_ROUTE_PREFIX"] || r.startsWith(`${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_ROUTE_PREFIX"]}/`)) {
        if (EVE_NAMED_AGENT_MOUNT_PATTERN.test(n)) return `${n}${r.slice(4)}`;
        if (EVE_NAMED_AGENT_PROTOCOL_PATTERN.test(n)) return `${n}${r.slice(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_ROUTE_PREFIX"].length)}`;
    }
    return `${n}${r}`;
}
function normalizePublicEveRoutePath(e) {
    return e.replace(/^\/eve\/[a-z0-9][a-z0-9_-]*\/v1(?=\/|$)/, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_ROUTE_PREFIX"]);
}
function trimTrailingSlash(e) {
    return e === `/` ? `` : e.endsWith(`/`) ? e.slice(0, -1) : e;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/extension-mount.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mountIdSchema",
    ()=>mountIdSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/compiled/zod/index.js [app-ssr] (ecmascript) <locals>");
;
const mountIdSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().min(1);
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/guards.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isErrnoCode",
    ()=>isErrnoCode,
    "isNonEmptyString",
    ()=>isNonEmptyString,
    "isObject",
    ()=>isObject,
    "isPlainRecord",
    ()=>isPlainRecord,
    "isThenable",
    ()=>isThenable,
    "readNonEmptyString",
    ()=>readNonEmptyString
]);
function isObject(e) {
    return typeof e == `object` && !!e && !Array.isArray(e);
}
function isNonEmptyString(e) {
    return typeof e == `string` && e.length > 0;
}
function readNonEmptyString(e) {
    return isNonEmptyString(e) ? e : void 0;
}
function isThenable(e) {
    return isObject(e) && typeof e.then == `function`;
}
function isErrnoCode(e, t) {
    return e instanceof Error && `code` in e && e.code === t;
}
function isPlainRecord(e) {
    if (!isObject(e)) return !1;
    let t = Object.getPrototypeOf(e);
    return t === Object.prototype || t === null;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/json.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isJsonObjectValue",
    ()=>isJsonObjectValue,
    "jsonValuesEqual",
    ()=>jsonValuesEqual,
    "parseJsonObject",
    ()=>parseJsonObject,
    "parseJsonValue",
    ()=>parseJsonValue
]);
function jsonValuesEqual(e, t) {
    if (e === t) return !0;
    if (Array.isArray(e) || Array.isArray(t)) return Array.isArray(e) && Array.isArray(t) && e.length === t.length && e.every((e, n)=>jsonValuesEqual(e, t[n]));
    if (e === null || t === null || typeof e != `object` || typeof t != `object`) return !1;
    let n = Object.entries(e), r = t;
    return n.length === Object.keys(r).length && n.every(([e, t])=>Object.hasOwn(r, e) && jsonValuesEqual(t, r[e]));
}
const INVALID_JSON_VALUE_CANDIDATE = Symbol(`invalid-json-value-candidate`);
function parseJsonValue(e) {
    let t = normalizeJsonValueCandidate(e);
    if (t === INVALID_JSON_VALUE_CANDIDATE) throw TypeError(`Expected a JSON-serializable value.`);
    return t;
}
function parseJsonObject(e) {
    let t = parseJsonValue(e);
    if (!isJsonObjectValue(t)) throw TypeError(`Expected a JSON-serializable object.`);
    return t;
}
function normalizeJsonValueCandidate(e, t = new WeakSet) {
    if (e === null || typeof e == `boolean` || typeof e == `string`) return e;
    if (typeof e == `number`) return Number.isFinite(e) ? e : INVALID_JSON_VALUE_CANDIDATE;
    if (Array.isArray(e)) {
        let n = [];
        for (let r of e){
            let e = normalizeJsonValueCandidate(r, t);
            if (e === INVALID_JSON_VALUE_CANDIDATE) return INVALID_JSON_VALUE_CANDIDATE;
            n.push(e);
        }
        return n;
    }
    if (typeof e != `object` || e === void 0 || !isPlainObject(e) || t.has(e)) return INVALID_JSON_VALUE_CANDIDATE;
    t.add(e);
    let n = {};
    for (let [r, i] of Object.entries(e)){
        if (i === void 0) continue;
        let e = normalizeJsonValueCandidate(i, t);
        if (e === INVALID_JSON_VALUE_CANDIDATE) return INVALID_JSON_VALUE_CANDIDATE;
        n[r] = e;
    }
    return t.delete(e), n;
}
function isJsonObjectValue(e) {
    return e !== null && !Array.isArray(e) && typeof e == `object`;
}
function isPlainObject(e) {
    let t = Object.getPrototypeOf(e);
    return t === null || Object.getPrototypeOf(t) === null;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/ulid.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ULID_LENGTH",
    ()=>ULID_LENGTH,
    "createUlid",
    ()=>createUlid,
    "createUlidFactory",
    ()=>createUlidFactory
]);
const ENCODING = `0123456789ABCDEFGHJKMNPQRSTVWXYZ`, TIME_MAX = 2 ** 48 - 1, ULID_LENGTH = 26;
function createUlidFactory() {
    let e = -1, t = new Uint8Array(10);
    return function() {
        let n = Date.now();
        if (!Number.isInteger(n) || n < 0 || n > TIME_MAX) throw Error(`Cannot mint a ULID: timestamp must be an integer from 0 to ${TIME_MAX}.`);
        if (n > e) e = n, randomFill(t);
        else if (!incrementRandom(t)) {
            if (e === TIME_MAX) throw Error(`Cannot mint a ULID: random component overflowed at the maximum timestamp.`);
            e += 1, randomFill(t);
        }
        return `${encodeTime(e)}${encodeRandom(t)}`;
    };
}
const createUlid = createUlidFactory();
function randomFill(e) {
    let t = globalThis.crypto;
    if (typeof t?.getRandomValues != `function`) throw Error(`Cannot mint a ULID: globalThis.crypto.getRandomValues is unavailable.`);
    t.getRandomValues(e);
}
function encodeTime(e) {
    let t = e, n = ``;
    for(let e = 0; e < 10; e += 1)n = ENCODING[t % 32] + n, t = Math.floor(t / 32);
    return n;
}
function encodeRandom(e) {
    let t = 0, n = 0, r = ``;
    for (let i of e){
        for(t = t << 8 | i, n += 8; n >= 5;)n -= 5, r += ENCODING[t >>> n & 31];
        t &= (1 << n) - 1;
    }
    return r;
}
function incrementRandom(e) {
    for(let t = e.length - 1; t >= 0; --t){
        let n = e[t] ?? 0;
        if (n < 255) return e[t] = n + 1, e.fill(0, t + 1), !0;
    }
    return !1;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/tools/schema-emission.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "emitJsonSchema",
    ()=>emitJsonSchema,
    "getStandardSchemaProperties",
    ()=>getStandardSchemaProperties,
    "readJsonSchemaEmitter",
    ()=>readJsonSchemaEmitter,
    "serializeOutputSchema",
    ()=>serializeOutputSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/json.js [app-ssr] (ecmascript)");
;
function serializeOutputSchema(e) {
    return e == null ? e : emitJsonSchema(e, `output`);
}
function emitJsonSchema(e, t) {
    let n = getStandardSchemaProperties(e);
    if (n === void 0) return withoutSchemaVersion((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonObject"])(e));
    let r = readJsonSchemaEmitter(n, t);
    if (r === void 0) throw Error(describeMissingEmitter(n));
    return withoutSchemaVersion((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonObject"])(r({
        target: `draft-07`
    })));
}
function readJsonSchemaEmitter(e, t) {
    let n = e.jsonSchema;
    if (typeof n != `object` || !n) return;
    let r = n[t];
    return typeof r == `function` ? r : void 0;
}
function getStandardSchemaProperties(e) {
    if (typeof e != `object` || !e || !(`~standard` in e)) return;
    let t = e[`~standard`];
    return typeof t == `object` && t ? t : void 0;
}
function describeMissingEmitter(e) {
    let t = typeof e.vendor == `string` ? e.vendor : `unknown`;
    return t === `zod` ? `Zod 3 cannot emit an output JSON Schema. Upgrade to Zod 4 or provide a plain JSON Schema object.` : `Standard Schema vendor "${t}" does not support JSON Schema conversion. Provide a Standard Schema implementation with JSON Schema conversion or a plain JSON Schema object.`;
}
function withoutSchemaVersion(e) {
    let { $schema: t, ...n } = e;
    return n;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/tools/schema.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UNSPECIFIED_INPUT_SCHEMA",
    ()=>UNSPECIFIED_INPUT_SCHEMA,
    "defineJsonSchema",
    ()=>defineJsonSchema,
    "isToolSchema",
    ()=>isToolSchema,
    "serializeInputSchema",
    ()=>serializeInputSchema,
    "serializeModelInputSchema",
    ()=>serializeModelInputSchema,
    "toInputSchema",
    ()=>toInputSchema,
    "toModelSchema",
    ()=>toModelSchema,
    "toOutputSchema",
    ()=>toOutputSchema,
    "withOptionalStringProperty",
    ()=>withOptionalStringProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$4$2e$0$2e$21$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+provider@4.0.21/node_modules/@ai-sdk/provider/dist/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$5$2e$0$2e$53_zod$40$4$2e$5$2e$4$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/@ai-sdk+provider-utils@5.0.53_zod@4.5.4/node_modules/@ai-sdk/provider-utils/dist/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/guards.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/json.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$tools$2f$schema$2d$emission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/tools/schema-emission.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f40$cfworker$2f$json$2d$schema$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/compiled/@cfworker/json-schema/index.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
function toInputSchema(e) {
    return toSchema(e, `input`);
}
function toOutputSchema(e) {
    return toSchema(e, `output`);
}
function serializeInputSchema(e) {
    return serializeSchema(e, `input`);
}
function serializeModelInputSchema(e) {
    let t = toSchema(e, `input`);
    return t == null ? t : toModelJsonSchema(t, `input`);
}
function isToolSchema(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$tools$2f$schema$2d$emission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStandardSchemaProperties"])(e);
    if (t === void 0) return !1;
    let n = t.jsonSchema;
    return typeof t.validate == `function` && typeof n == `object` && !!n && typeof n.input == `function` && typeof n.output == `function`;
}
function defineJsonSchema(e, t) {
    let emit = ()=>structuredClone(e), n = {
        "~standard": {
            version: 1,
            vendor: `eve`,
            validate: createJsonSchemaValidator(e, t),
            jsonSchema: {
                input: emit,
                output: emit
            }
        }
    };
    return plainJsonSchemas.add(n), n;
}
const plainJsonSchemas = new WeakSet;
function withOptionalStringProperty(e, t) {
    let emit = ()=>addOptionalStringProperty(serializeInputSchema(e), t), n = {
        "~standard": {
            version: 1,
            vendor: `eve`,
            validate: (n)=>validateWithProperty(e, t.name, n),
            jsonSchema: {
                input: emit,
                output: emit
            }
        }
    };
    return plainJsonSchemas.has(e) && plainJsonSchemas.add(n), n;
}
function addOptionalStringProperty(e, t) {
    let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(e.properties) ? e.properties : {};
    return {
        ...e,
        type: e.type ?? `object`,
        properties: {
            ...n,
            [t.name]: {
                description: t.description,
                type: `string`
            }
        }
    };
}
async function validateWithProperty(e, t, n) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(n) || !(t in n)) return await e[`~standard`].validate(n);
    let { [t]: r, ...i } = n;
    if (typeof r != `string`) return {
        issues: [
            {
                message: `Expected "${t}" to be a string.`,
                path: [
                    t
                ]
            }
        ]
    };
    let a = await e[`~standard`].validate(i);
    return a.issues !== void 0 || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(a.value) ? a : {
        value: {
            ...a.value,
            [t]: r
        }
    };
}
const UNSPECIFIED_INPUT_SCHEMA = defineJsonSchema({});
function toModelSchema(e, t) {
    if (e === void 0 || typeof e == `function` || !(`~standard` in e)) return e;
    let n = e;
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$5$2e$0$2e$53_zod$40$4$2e$5$2e$4$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["jsonSchema"])(()=>toModelJsonSchema(n, t), {
        validate: async (e)=>{
            let t = await n[`~standard`].validate(e);
            return t.issues === void 0 ? {
                success: !0,
                value: t.value
            } : {
                success: !1,
                error: new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$40$4$2e$0$2e$21$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TypeValidationError"]({
                    value: e,
                    cause: t.issues
                })
            };
        }
    });
}
function toModelJsonSchema(e, t) {
    let n = serializeSchema(e, t);
    return plainJsonSchemas.has(e) ? n : closeObjectSchemas(n);
}
function closeObjectSchemas(e) {
    if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(e)) return e;
    let t = {
        ...e
    }, { type: n } = t;
    (n === `object` || Array.isArray(n) && n.includes(`object`)) && (t.additionalProperties = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(t.additionalProperties) ? closeObjectSchemas(t.additionalProperties) : !1, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(t.properties) && (t.properties = mapValues(t.properties, closeObjectSchemas))), Array.isArray(t.items) ? t.items = t.items.map(closeObjectSchemas) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(t.items) && (t.items = closeObjectSchemas(t.items));
    for (let e of [
        `allOf`,
        `anyOf`,
        `oneOf`
    ]){
        let n = t[e];
        Array.isArray(n) && (t[e] = n.map(closeObjectSchemas));
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(t.definitions) && (t.definitions = mapValues(t.definitions, closeObjectSchemas)), t;
}
function mapValues(e, t) {
    return Object.fromEntries(Object.entries(e).map(([e, n])=>[
            e,
            t(n)
        ]));
}
function toSchema(e, t) {
    return e == null || isToolSchema(e) ? e : defineJsonSchema(toJsonObject(e, t));
}
function serializeSchema(e, t) {
    return e == null ? e : toJsonObject(e, t);
}
function toJsonObject(e, t) {
    if (t === `input` && isLegacyZodSchema(e)) {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f40$ai$2d$sdk$2b$provider$2d$utils$40$5$2e$0$2e$53_zod$40$4$2e$5$2e$4$2f$node_modules$2f40$ai$2d$sdk$2f$provider$2d$utils$2f$dist$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["asSchema"])(e), { $schema: n, ...r } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$json$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["parseJsonObject"])(t.jsonSchema);
        return r;
    }
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$tools$2f$schema$2d$emission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["emitJsonSchema"])(e, t);
}
function isLegacyZodSchema(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$tools$2f$schema$2d$emission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStandardSchemaProperties"])(e);
    return t !== void 0 && t.vendor === `zod` && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$tools$2f$schema$2d$emission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readJsonSchemaEmitter"])(t, `input`) === void 0;
}
function createJsonSchemaValidator(e, t) {
    let n, r = !1, passThrough = (e, t)=>(r || (r = !0, console.warn(`[eve] Tool schema cannot validate values locally; passing them through unvalidated: ${t}`)), {
            value: e
        });
    return (r)=>{
        if (n === void 0) {
            let t = buildValidator(e);
            if (typeof t == `string`) return n = null, passThrough(r, t);
            n = t;
        }
        if (n === null) return {
            value: r
        };
        let i;
        try {
            i = n.validate(r);
        } catch (e) {
            return r === void 0 ? {
                issues: [
                    {
                        message: `Expected a JSON value.`
                    }
                ]
            } : passThrough(r, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toErrorMessage"])(e));
        }
        if (!i.valid) return {
            issues: toIssues(i.errors)
        };
        let a = applyDefaults(e, e, r), o = t?.(a);
        return o === void 0 ? {
            value: a
        } : {
            issues: [
                {
                    message: o
                }
            ]
        };
    };
}
function applyDefaults(e, t, n) {
    let r = n;
    for (let n of followRefs(e, t)){
        let { items: t, properties: i } = n;
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(r) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(i)) r = fillProperties(e, i, r);
        else if (Array.isArray(r) && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(t)) {
            let n = r, i = n.map((n)=>applyDefaults(e, t, n));
            i.some((e, t)=>e !== n[t]) && (r = i);
        }
    }
    return r;
}
function fillProperties(e, t, n) {
    let r = n;
    for (let [i, a] of Object.entries(t)){
        let t = Object.hasOwn(n, i) ? n[i] : void 0, o = t === void 0 ? findDefault(e, a) : applyDefaults(e, a, t);
        o !== t && (r === n && (r = {
            ...n
        }), r[i] = o);
    }
    return r;
}
function findDefault(e, t) {
    for (let n of followRefs(e, t))if (`default` in n) return structuredClone(n.default);
}
function* followRefs(e, t) {
    let n = new Set, r = t;
    for(; (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(r) && !n.has(r);)n.add(r), yield r, r = resolveLocalRef(e, r.$ref);
}
function resolveLocalRef(e, t) {
    if (typeof t != `string` || t !== `#` && !t.startsWith(`#/`)) return;
    let n = e;
    for (let e of decodePointer(t)){
        if (typeof n != `object` || !n || !Object.hasOwn(n, e)) return;
        n = n[e];
    }
    return n;
}
function buildValidator(e) {
    try {
        let t = structuredClone(e);
        return prepareForValidation(t) ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f40$cfworker$2f$json$2d$schema$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Validator"](t, `2020-12`, !1);
    } catch (e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toErrorMessage"])(e);
    }
}
const JSON_TYPES = new Set([
    `array`,
    `boolean`,
    `integer`,
    `null`,
    `number`,
    `object`,
    `string`
]), EXCLUSIVE_BOUNDS = [
    [
        `exclusiveMinimum`,
        `minimum`
    ],
    [
        `exclusiveMaximum`,
        `maximum`
    ]
], SUBSCHEMA_KEYWORDS = [
    `additionalItems`,
    `additionalProperties`,
    `contains`,
    `else`,
    `if`,
    `not`,
    `propertyNames`,
    `then`,
    `unevaluatedItems`,
    `unevaluatedProperties`
], SUBSCHEMA_LIST_KEYWORDS = [
    `allOf`,
    `anyOf`,
    `oneOf`,
    `prefixItems`
], SUBSCHEMA_MAP_KEYWORDS = [
    `$defs`,
    `definitions`,
    `dependencies`,
    `dependentSchemas`,
    `patternProperties`,
    `properties`
];
function prepareForValidation(e) {
    if (typeof e == `boolean`) return;
    if (typeof e != `object` || !e || Array.isArray(e)) return `a subschema is neither an object nor a boolean`;
    let t = e;
    delete t.format;
    for (let [e, n] of EXCLUSIVE_BOUNDS)typeof t[e] == `boolean` && (t[e] && typeof t[n] == `number` ? (t[e] = t[n], delete t[n]) : delete t[e]);
    let { enum: n, pattern: r, required: i, type: a } = t;
    if (a !== void 0 && !(Array.isArray(a) ? a.every(isJsonType) : isJsonType(a))) return `unsupported type ${JSON.stringify(a)}`;
    if (n !== void 0 && !Array.isArray(n)) return "`enum` is not an array";
    if (i !== void 0 && !(Array.isArray(i) && i.every((e)=>typeof e == `string`))) return "`required` is not an array of strings";
    if (r !== void 0 && !isRegExpSource(r)) return `invalid pattern ${JSON.stringify(r)}`;
    for (let e of SUBSCHEMA_KEYWORDS)if (e in t) {
        let n = prepareForValidation(t[e]);
        if (n !== void 0) return n;
    }
    let o = t.items;
    for (let e of Array.isArray(o) ? o : o === void 0 ? [] : [
        o
    ]){
        let t = prepareForValidation(e);
        if (t !== void 0) return t;
    }
    for (let e of SUBSCHEMA_LIST_KEYWORDS){
        let n = t[e];
        if (n !== void 0) {
            if (!Array.isArray(n)) return `\`${e}\` is not an array`;
            for (let e of n){
                let t = prepareForValidation(e);
                if (t !== void 0) return t;
            }
        }
    }
    for (let e of SUBSCHEMA_MAP_KEYWORDS){
        let n = t[e];
        if (n !== void 0) {
            if (typeof n != `object` || !n || Array.isArray(n)) return `\`${e}\` is not an object`;
            for (let [t, r] of Object.entries(n)){
                if (e === `patternProperties` && !isRegExpSource(t)) return `invalid pattern ${JSON.stringify(t)}`;
                if (e === `dependencies` && Array.isArray(r)) continue;
                let n = prepareForValidation(r);
                if (n !== void 0) return n;
            }
        }
    }
}
function isJsonType(e) {
    return typeof e == `string` && JSON_TYPES.has(e);
}
function isRegExpSource(e) {
    if (typeof e != `string`) return !1;
    try {
        return new RegExp(e, `u`), !0;
    } catch  {
        return !1;
    }
}
const CLOSED_OBJECT_KEYWORD = /\/(?:additional|unevaluated)Properties$/;
function toIssues(e) {
    let t = [];
    for(let n = 0; n < e.length; n++){
        let r = e[n], i = e[n + 1];
        if (CLOSED_OBJECT_KEYWORD.test(r.keywordLocation) && i?.keyword === `false`) {
            let e = decodePointer(i.instanceLocation).at(-1);
            t.push({
                keyword: `false`,
                location: i.instanceLocation,
                message: `Unrecognized key: ${JSON.stringify(e)}`,
                object: r.instanceLocation
            }), n++;
        } else t.push({
            keyword: r.keyword,
            location: r.instanceLocation,
            message: r.error
        });
    }
    let n = t.filter((e)=>e.object === void 0 || !t.some((t)=>t.object === void 0 && (t.location === e.location || t.location.startsWith(`${e.location}/`))));
    return n.filter((e, t)=>{
        let r = n[t + 1];
        return r === void 0 ? !0 : r.location.startsWith(`${e.location}/`) ? !1 : e.keyword !== `$ref` || r.location !== e.location;
    }).map(({ location: e, message: t, object: n })=>{
        let r = decodePointer(n ?? e);
        return r.length === 0 ? {
            message: t
        } : {
            message: t,
            path: r
        };
    });
}
function decodePointer(e) {
    return e.split(`/`).slice(1).map((e)=>{
        let t = e;
        try {
            t = decodeURIComponent(e);
        } catch  {}
        return t.replaceAll(`~1`, `/`).replaceAll(`~0`, `~`);
    });
}
;
}),
];

//# sourceMappingURL=0szq_eve_dist_src_16f1z1i._.js.map