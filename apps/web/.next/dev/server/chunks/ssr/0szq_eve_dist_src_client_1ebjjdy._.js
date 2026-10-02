module.exports = [
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-host.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveEveAgentHost",
    ()=>resolveEveAgentHost
]);
const AGENT_NAME_PATTERN = /^[a-z0-9][a-z0-9_-]*$/;
function resolveEveAgentHost(e) {
    if (e.agent === void 0) return e.host ?? ``;
    if (e.host !== void 0) throw Error(`useEveAgent cannot combine agent and host. Use one target option.`);
    return assertValidAgentName(e.agent), `/eve/${e.agent}`;
}
function assertValidAgentName(e) {
    if (!AGENT_NAME_PATTERN.test(e)) throw Error(`eve agent name ${JSON.stringify(e)} is invalid. Use lowercase letters, numbers, underscores, or hyphens, starting with a letter or number.`);
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-info-error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentInfoResponseError",
    ()=>AgentInfoResponseError
]);
var AgentInfoResponseError = class extends Error {
    issues;
    constructor(e = []){
        let t = e.length === 0 ? `` : ` (${e.join(`; `)})`;
        super(`The server returned an unrecognized response from the eve agent info route.${t}`), this.name = `AgentInfoResponseError`, this.issues = e;
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-info-schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentInfoResultSchema",
    ()=>AgentInfoResultSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/compiled/zod/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$extension$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/extension-mount.js [app-ssr] (ecmascript)");
;
;
const owner = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].discriminatedUnion(`kind`, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`application`)
    }).strict(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        feature: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`framework`)
    }).strict(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`extension`),
        mountId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$extension$2d$mount$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mountIdSchema"].optional(),
        namespace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        packageName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
    }).strict()
]), moduleBacking = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].discriminatedUnion(`kind`, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        externalDependencies: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()),
        extensionScope: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
            namespace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
            sourceRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
        }).strict().optional(),
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`filesystem`),
        mountId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
        sourcePath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
    }).strict(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        dependencies: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()).optional(),
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`programmatic`),
        mountId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
        moduleId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        parameters: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].unknown()).optional(),
        registryId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        revision: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        semanticRevision: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional()
    }).strict()
]), binding = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
    backing: moduleBacking,
    logicalPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    owner
}).strict(), source = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
    binding: binding.optional(),
    exportName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
    logicalPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    owner,
    sourceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    sourceKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
        `markdown`,
        `module`,
        `skill-package`
    ])
}).strict(), entry = source.extend({
    name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), dynamicResolver = source.extend({
    eventNames: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), modelRouting = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].discriminatedUnion(`kind`, [
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`gateway`),
        target: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        byok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional()
    }).strict(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`external`),
        provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
    }).strict()
]), modelEndpoint = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`external`),
        provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
    }).strict(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`chatgpt`),
        state: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
            `checking`,
            `ready`,
            `signed-out`,
            `reauth-required`,
            `unavailable`
        ]),
        accountLabel: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional()
    }).strict(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`gateway`),
        connected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
        credential: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
            `api-key`,
            `oidc`,
            `oauth`
        ]),
        team: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].optional(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string())
    }).strict(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`gateway`),
        connected: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!1)
    }).strict()
]), modelBaseFields = {
    contextWindowTokens: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number().optional(),
    providerOptions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].unknown().optional(),
    reasoning: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
        `provider-default`,
        `none`,
        `minimal`,
        `low`,
        `medium`,
        `high`,
        `xhigh`
    ]).optional().catch(void 0),
    source: source.optional()
}, agentModel = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].union([
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        ...modelBaseFields,
        endpoint: modelEndpoint.optional(),
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        routing: modelRouting
    }).strict(),
    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        ...modelBaseFields,
        endpoint: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].never().optional(),
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].never().optional(),
        routing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`dynamic`),
            resolver: dynamicResolver
        }).strict()
    }).strict()
]), tool = entry.extend({
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    hasAuth: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean(),
    hasExecute: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean(),
    hasModelOutputProjection: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean(),
    hasOutputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean(),
    inputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].unknown(),
    outputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].unknown().optional(),
    requiresApproval: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean()
}).strict(), skill = entry.extend({
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    license: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
    markdown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    metadata: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].record(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(), __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()).optional()
}).strict(), instructions = entry.extend({
    content: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    role: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
        `system`,
        `user`
    ])
}).strict(), schedule = entry.extend({
    cron: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    hasRun: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean(),
    markdown: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional()
}).strict(), channelMethod = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
    `GET`,
    `HEAD`,
    `POST`,
    `PUT`,
    `PATCH`,
    `DELETE`,
    `OPTIONS`,
    `WEBSOCKET`
]), channelRoute = entry.extend({
    adapterKind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
    method: channelMethod,
    urlPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), sourceDescriptor = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
    backing: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].union([
        moduleBacking,
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
            kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`resource`),
            sourcePath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
        }).strict()
    ]),
    form: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
        `derived`,
        `direct`
    ]),
    layer: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
        `framework-default`,
        `extension-package`,
        `extension-override`,
        `application`
    ]),
    logicalPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    owner,
    sourceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), shadowedChannelRoute = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
    method: channelMethod,
    source: sourceDescriptor,
    urlPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    winnerSourceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), connection = source.extend({
    connectionName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    hasApproval: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean(),
    hasAuthorization: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean(),
    hasHeaders: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean(),
    protocol: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    toolFilter: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].unknown().optional(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), hook = source.extend({
    eventNames: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()),
    slug: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), memory = source.extend({
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
    slot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    visibility: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
        `scope`,
        `session`
    ])
}).strict(), sandbox = source.extend({
    provider: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
    environmentExportName: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
    revisionHash: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), subagent = entry.extend({
    configResolver: dynamicResolver.optional(),
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
    entryPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    nodeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    parentNodeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    rootPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    summary: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        channels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number(),
        connections: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number(),
        hooks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number(),
        instructions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number(),
        memories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number(),
        schedules: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number(),
        skills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number(),
        tools: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number()
    }).strict()
}).strict(), remoteAgent = entry.extend({
    description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    nodeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    parentNodeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    url: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional()
}).strict(), kernelEffect = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
    action: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
            `subagent-call`,
            `workflow-tool-call`
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`unrecognized`)
    ]).catch(`unrecognized`).optional(),
    audience: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`root-session`),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`unrecognized`)
    ]).catch(`unrecognized`)),
    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].union([
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
            `dispatch`,
            `provider-tool`
        ]),
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`unrecognized`)
    ]).catch(`unrecognized`),
    sourceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string()
}).strict(), compositionDiagnostic = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
        `disabled`,
        `shadowed`
    ]),
    logicalPath: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    owner,
    sourceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
    winnerSourceId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional()
}).strict(), AgentInfoResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
    agent: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        agentRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        appRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        config: source.extend({
            binding
        }).strict(),
        description: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().optional(),
        model: agentModel,
        name: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        nodeId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string(),
        outputSchema: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].unknown().optional()
    }).strict(),
    capabilities: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        devRoutes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].boolean()
    }).strict(),
    channels: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        routes: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(channelRoute),
        shadowed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(shadowedChannelRoute)
    }).strict(),
    composition: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        disabled: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(compositionDiagnostic),
        shadowed: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(compositionDiagnostic)
    }).strict(),
    connections: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(connection),
    diagnostics: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        discoveryErrors: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number(),
        discoveryWarnings: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number()
    }).strict(),
    hooks: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(hook),
    instructions: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(dynamicResolver),
        static: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(instructions)
    }).strict(),
    instrumentation: source.optional(),
    kernelEffects: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(kernelEffect),
    kind: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`eve-agent-info`),
    memories: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(memory),
    mode: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].enum([
        `development`,
        `production`
    ]),
    remoteAgents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        entries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(remoteAgent),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number()
    }).strict(),
    sandbox,
    schedules: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(schedule),
    skills: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(dynamicResolver),
        static: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(skill)
    }).strict(),
    subagents: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        local: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(subagent),
        total: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].number()
    }).strict(),
    tools: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        dynamic: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(dynamicResolver),
        static: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(tool)
    }).strict(),
    version: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(5),
    workspace: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
        resourceRoot: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].unknown(),
        rootEntries: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].array(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string())
    }).strict()
}).strict().superRefine((e, t)=>{
    let assertUnique = (e, n, r)=>{
        let i = new Set;
        e.forEach((e, a)=>{
            let o = n(e);
            i.has(o) && t.addIssue({
                code: `custom`,
                message: `Duplicate public identity "${o}".`,
                path: [
                    ...r,
                    a
                ]
            }), i.add(o);
        });
    }, assertTotal = (e, n, r)=>{
        (!Number.isSafeInteger(e) || e < 0 || e !== n.length) && t.addIssue({
            code: `custom`,
            message: `Expected total ${n.length}, received ${e}.`,
            path: [
                ...r
            ]
        });
    };
    assertUnique(e.tools.static, (e)=>e.name, [
        `tools`,
        `static`
    ]), assertUnique(e.tools.dynamic, (e)=>e.slug, [
        `tools`,
        `dynamic`
    ]), assertUnique(e.skills.static, (e)=>e.name, [
        `skills`,
        `static`
    ]), assertUnique(e.skills.dynamic, (e)=>e.slug, [
        `skills`,
        `dynamic`
    ]), assertUnique(e.instructions.static, (e)=>e.name, [
        `instructions`,
        `static`
    ]), assertUnique(e.instructions.dynamic, (e)=>e.slug, [
        `instructions`,
        `dynamic`
    ]), assertUnique(e.schedules, (e)=>e.name, [
        `schedules`
    ]), assertUnique(e.connections, (e)=>e.connectionName, [
        `connections`
    ]), assertUnique(e.hooks, (e)=>e.slug, [
        `hooks`
    ]), assertUnique(e.memories, (e)=>e.slot, [
        `memories`
    ]), assertUnique(e.channels.routes, (e)=>`${e.method} ${normalizeRoutePattern(e.urlPath)}`, [
        `channels`,
        `routes`
    ]), assertUnique(e.subagents.local, (e)=>e.nodeId, [
        `subagents`,
        `local`
    ]), assertUnique(e.remoteAgents.entries, (e)=>e.nodeId, [
        `remoteAgents`,
        `entries`
    ]), assertTotal(e.subagents.total, e.subagents.local, [
        `subagents`,
        `total`
    ]), assertTotal(e.remoteAgents.total, e.remoteAgents.entries, [
        `remoteAgents`,
        `total`
    ]);
    let n = [
        [
            e.agent.config,
            [
                `agent`,
                `config`
            ]
        ],
        ...e.agent.model.source === void 0 ? [] : [
            [
                e.agent.model.source,
                [
                    `agent`,
                    `model`,
                    `source`
                ]
            ]
        ],
        ...e.agent.model.routing.kind === `dynamic` ? [
            [
                e.agent.model.routing.resolver,
                [
                    `agent`,
                    `model`,
                    `routing`,
                    `resolver`
                ]
            ]
        ] : [],
        ...e.channels.routes.map((e, t)=>[
                e,
                [
                    `channels`,
                    `routes`,
                    t
                ]
            ]),
        ...e.connections.map((e, t)=>[
                e,
                [
                    `connections`,
                    t
                ]
            ]),
        ...e.hooks.map((e, t)=>[
                e,
                [
                    `hooks`,
                    t
                ]
            ]),
        ...e.instructions.dynamic.map((e, t)=>[
                e,
                [
                    `instructions`,
                    `dynamic`,
                    t
                ]
            ]),
        ...e.instructions.static.map((e, t)=>[
                e,
                [
                    `instructions`,
                    `static`,
                    t
                ]
            ]),
        ...e.memories.map((e, t)=>[
                e,
                [
                    `memories`,
                    t
                ]
            ]),
        ...e.instrumentation === void 0 ? [] : [
            [
                e.instrumentation,
                [
                    `instrumentation`
                ]
            ]
        ],
        ...e.remoteAgents.entries.map((e, t)=>[
                e,
                [
                    `remoteAgents`,
                    `entries`,
                    t
                ]
            ]),
        ...e.schedules.map((e, t)=>[
                e,
                [
                    `schedules`,
                    t
                ]
            ]),
        ...e.skills.dynamic.map((e, t)=>[
                e,
                [
                    `skills`,
                    `dynamic`,
                    t
                ]
            ]),
        ...e.skills.static.map((e, t)=>[
                e,
                [
                    `skills`,
                    `static`,
                    t
                ]
            ]),
        ...e.subagents.local.flatMap((e, t)=>e.configResolver === void 0 ? [] : [
                [
                    e.configResolver,
                    [
                        `subagents`,
                        `local`,
                        t,
                        `configResolver`
                    ]
                ]
            ]),
        ...e.tools.dynamic.map((e, t)=>[
                e,
                [
                    `tools`,
                    `dynamic`,
                    t
                ]
            ]),
        ...e.tools.static.map((e, t)=>[
                e,
                [
                    `tools`,
                    `static`,
                    t
                ]
            ]),
        [
            e.sandbox,
            [
                `sandbox`
            ]
        ]
    ];
    for (let [e, r] of n){
        if (e.sourceKind === `module` && e.binding === void 0) {
            t.addIssue({
                code: `custom`,
                message: `Module source is missing its compiled binding.`,
                path: [
                    ...r,
                    `binding`
                ]
            });
            continue;
        }
        if (e.sourceKind !== `module` && e.binding !== void 0) {
            t.addIssue({
                code: `custom`,
                message: `${e.sourceKind} source cannot carry a module binding.`,
                path: [
                    ...r,
                    `binding`
                ]
            });
            continue;
        }
        e.binding !== void 0 && (e.binding.logicalPath !== e.logicalPath && t.addIssue({
            code: `custom`,
            message: `Source and binding logical paths do not match.`,
            path: [
                ...r,
                `binding`,
                `logicalPath`
            ]
        }), JSON.stringify(e.binding.owner) !== JSON.stringify(e.owner) && t.addIssue({
            code: `custom`,
            message: `Source and binding owners do not match.`,
            path: [
                ...r,
                `binding`,
                `owner`
            ]
        }));
    }
});
function normalizeRoutePattern(e) {
    return e.replace(/^\/+|\/+$/g, ``).split(`/`).map((e)=>e.startsWith(`:`) || /^\[[^\]]+\]$/.test(e) ? `:` : e).join(`/`);
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-session.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientAgentSession",
    ()=>ClientAgentSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$open$2d$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/open-stream.js [app-ssr] (ecmascript)");
;
var ClientAgentSession = class {
    name;
    sessionId;
    taskId;
    #e;
    #t;
    constructor(e, t){
        this.#e = e, this.#t = t.data.streamPath, this.name = t.data.name, this.sessionId = t.data.sessionId, this.taskId = t.data.taskId;
    }
    stream(e) {
        let t = e?.startIndex ?? 0;
        if (e?.follow === !1 && t < 0) throw Error(`agent(started).stream({ follow: false }) requires a nonnegative startIndex; a tail-relative cursor cannot be bounded.`);
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$open$2d$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followStreamIterable"])({
            follow: e?.follow,
            host: this.#e.host,
            path: this.#t,
            redirect: this.#e.redirect,
            resolveHeaders: ()=>this.#e.resolveHeaders(),
            signal: e?.signal,
            startIndex: t,
            streamReconnectPolicy: e?.streamReconnectPolicy
        });
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-stream-follower.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AgentStreamFollower",
    ()=>AgentStreamFollower
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-state.js [app-ssr] (ecmascript)");
;
const agentStreamReconnectPolicy = {
    streamIdleReconnectPolicy: {
        maxAttempts: 1 / 0
    },
    streamOpenReconnectPolicy: {
        maxAttempts: 1 / 0
    }
};
var AgentStreamFollower = class {
    #e;
    #t = new Map;
    #n = new Map;
    #r = new Set;
    #i = !1;
    constructor(e){
        this.#e = e;
    }
    acceptParentEvent(e) {
        e.type === `agent.started` && this.#t.set(e.data.sessionId, e);
    }
    reconcile() {
        if (this.#i) return;
        let e = this.#e.getState();
        for (let t of Object.values(e.agents)){
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["agentToolTask"])(e, t) === void 0) continue;
            let n = this.#n.get(t.sessionId), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAgentSessionCaughtUp"])(e, t);
            n !== void 0 && r ? (this.#n.delete(t.sessionId), n.abort(), this.#e.onIdle(t.sessionId)) : n === void 0 && !r && !this.#r.has(t.sessionId) && this.#a(t.sessionId);
        }
    }
    abortAll() {
        this.#i = !0;
        for (let e of this.#n.values())e.abort();
        this.#n.clear();
    }
    #a(e) {
        let t = this.#t.get(e);
        if (t === void 0) return;
        let n = new AbortController;
        this.#n.set(e, n), this.#e.onFollowing(e);
        let { cursors: r } = this.#e;
        (async ()=>{
            let i = r.get(e) ?? 0;
            try {
                for await (let a of this.#e.session.agent(t).stream({
                    signal: n.signal,
                    startIndex: i,
                    streamReconnectPolicy: agentStreamReconnectPolicy
                })){
                    if (n.signal.aborted) return;
                    r.set(e, ++i), this.#e.onEvent(e, a), this.reconcile();
                }
            } catch  {}
            n.signal.aborted || this.#n.get(e) !== n || (this.#n.delete(e), this.#r.add(e), this.#e.onUnavailable(e));
        })();
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/authorization-message-parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createAuthorizationCompletedPart",
    ()=>createAuthorizationCompletedPart,
    "createAuthorizationRequiredPart",
    ()=>createAuthorizationRequiredPart
]);
function createAuthorizationRequiredPart(e) {
    let t = e.data.authorization?.displayName ?? formatAuthorizationDisplayName(e.data.name), n = {
        authorization: e.data.authorization,
        description: normalizeAuthorizationDescription(e.data.description, e.data.name, t),
        displayName: t,
        name: e.data.name,
        state: `required`,
        stepIndex: e.data.stepIndex,
        turnId: e.data.turnId,
        type: `authorization`
    };
    return e.data.attemptId !== void 0 && (n.attemptId = e.data.attemptId), e.data.webhookUrl !== void 0 && (n.awaitsCallback = !0), n;
}
function createAuthorizationCompletedPart(e, t) {
    let n = e.data.authorization?.displayName ?? t?.displayName ?? formatAuthorizationDisplayName(e.data.name), r = {
        authorization: t?.authorization || e.data.authorization ? {
            ...t?.authorization,
            ...e.data.authorization
        } : void 0,
        description: t?.description ?? buildCompletedAuthorizationDescription(n, e.data.outcome, e.data.reason),
        displayName: n,
        name: e.data.name,
        outcome: e.data.outcome,
        state: `completed`,
        stepIndex: t?.stepIndex ?? e.data.stepIndex,
        turnId: t?.turnId ?? e.data.turnId,
        type: `authorization`
    }, i = e.data.attemptId ?? t?.attemptId;
    return i !== void 0 && (r.attemptId = i), t?.awaitsCallback && (r.awaitsCallback = !0), e.data.reason !== void 0 && (r.reason = e.data.reason), r;
}
function buildCompletedAuthorizationDescription(e, t, n) {
    return t === `authorized` ? `${e} connected.` : `${e} authorization ${t}${n === void 0 ? `` : ` (${n})`}.`;
}
function normalizeAuthorizationDescription(e, t, n) {
    return e === `Authorization required for ${t}` ? `Authorization required for ${n}` : e;
}
function formatAuthorizationDisplayName(e) {
    return e.length === 0 ? e : `${e.charAt(0).toUpperCase()}${e.slice(1)}`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/client-error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientError",
    ()=>ClientError
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/guards.js [app-ssr] (ecmascript)");
;
var ClientError = class extends Error {
    code;
    status;
    body;
    headers;
    constructor(e, t, n){
        let r = Object.freeze(Object.fromEntries(new Headers(n).entries())), i = r[`content-type`]?.toLowerCase(), a = t || `Server returned ${e}.`, o;
        try {
            let e = JSON.parse(t);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$guards$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isObject"])(e) && (typeof e.error == `string` && (a = e.error), typeof e.code == `string` && (o = e.code));
        } catch  {
            i?.includes(`text/html`) && (a = `Server returned ${e} with an HTML response. Check the eve route and development server configuration.`);
        }
        super(a), this.name = `ClientError`, this.code = o, this.status = e, this.body = t, this.headers = r;
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Client",
    ()=>Client
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/routes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$http$2f$basic$2d$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/internal/http/basic-auth.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$info$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-info-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$health$2d$response$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/health-response-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$health$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/health-schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$info$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-info-schema.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/client-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$sessions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/sessions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/types.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
var Client = class {
    #e;
    #t;
    #n;
    #r;
    sessions;
    constructor(e){
        this.#n = e.host, this.#e = e.auth, this.#t = e.headers, this.#r = e.redirect, this.sessions = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$sessions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientSessions"]({
            host: this.#n,
            redirect: this.#r,
            resolveHeaders: (e)=>this.#i(e)
        });
    }
    async health() {
        let e = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClientUrl"])(this.#n, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_HEALTH_ROUTE_PATH"]), t = await this.#i(), n = await fetch(e, withRedirectPolicy({
            headers: t
        }, this.#r));
        if (!n.ok) {
            let e = await n.text();
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"](n.status, e, n.headers);
        }
        let r;
        try {
            r = await n.json();
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$health$2d$response$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HealthResponseError"];
        }
        let i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$health$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HealthResultSchema"].safeParse(r);
        if (!i.success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$health$2d$response$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["HealthResponseError"](i.error.issues.slice(0, 5).map((e)=>{
            let t = e.path.join(`.`);
            return t.length === 0 ? e.message : `${t}: ${e.message}`;
        }));
        return i.data;
    }
    async info(e = {}) {
        let t = await this.fetch(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_INFO_ROUTE_PATH"], e);
        if (!t.ok) {
            let e = await t.text();
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"](t.status, e, t.headers);
        }
        let n;
        try {
            n = await t.json();
        } catch  {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$info$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgentInfoResponseError"];
        }
        let r = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$info$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgentInfoResultSchema"].safeParse(n);
        if (!r.success) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$info$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgentInfoResponseError"](r.error.issues.slice(0, 5).map((e)=>{
            let t = e.path.join(`.`);
            return t.length === 0 ? e.message : `${t}: ${e.message}`;
        }));
        return r.data;
    }
    async fetch(e, t = {}) {
        let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClientUrl"])(this.#n, e), r = await this.#i(headersInitToRecord(t.headers));
        return await fetch(n, withRedirectPolicy({
            ...t,
            headers: r
        }, this.#r));
    }
    async #i(e) {
        let t = new Headers, [n, r] = await Promise.all([
            resolveHeadersValue(this.#t),
            this.#a()
        ]);
        for (let [e, r] of Object.entries(n))t.set(e, r);
        for (let [e, n] of Object.entries(r))t.set(e, n);
        if (e) for (let [n, r] of Object.entries(e))t.set(n, r);
        return t;
    }
    async #a() {
        let e = this.#e;
        if (!e) return {};
        if (`vercelOidc` in e) {
            let t = (await resolveTokenValue(e.vercelOidc.token)).trim();
            return t.length === 0 ? {} : {
                authorization: `Bearer ${t}`,
                [__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VERCEL_TRUSTED_OIDC_IDP_TOKEN_HEADER"]]: t
            };
        }
        if (`bearer` in e) {
            let t = (await resolveTokenValue(e.bearer)).trim();
            return t.length === 0 ? {} : {
                authorization: `Bearer ${t}`
            };
        }
        if (`basic` in e) {
            let t = await resolveTokenValue(e.basic.password);
            return {
                authorization: `Basic ${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$internal$2f$http$2f$basic$2d$auth$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["encodeBasicCredentials"])(e.basic.username, t)}`
            };
        }
        return {};
    }
};
async function resolveTokenValue(e) {
    return typeof e == `function` ? e() : e;
}
async function resolveHeadersValue(e) {
    return e === void 0 ? {} : typeof e == `function` ? await e() : e;
}
function headersInitToRecord(e) {
    return e === void 0 ? {} : Object.fromEntries(new Headers(e).entries());
}
function withRedirectPolicy(e, t) {
    return t === void 0 ? e : {
        ...e,
        redirect: t
    };
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-client.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ConversationClient",
    ()=>ConversationClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-store-helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$stream$2d$follower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-stream-follower.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-reducer.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$projection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-projection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$event$2d$dedupe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/event-dedupe.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$event$2d$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-event-stream.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
var ConversationClient = class {
    projection;
    #e;
    #t = new Map;
    #n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$event$2d$dedupe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventDeduper"])();
    #r;
    #i;
    #a;
    #o;
    constructor(e, t, n){
        this.projection = e, this.#e = e.reducer === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["conversationReducer"] ? e : new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$projection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EveAgentProjection"](__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["canonicalConversationReducer"], []), this.#a = t, this.#o = n;
    }
    get data() {
        return this.projection.data;
    }
    get conversation() {
        return this.#e.data;
    }
    get projections() {
        return this.#e === this.projection ? [
            this.projection
        ] : [
            this.#e,
            this.projection
        ];
    }
    get following() {
        return this.#r !== void 0;
    }
    append(e) {
        let t = this.data, n = this.conversation;
        this.#c(e), t === this.data ? n !== this.conversation && this.#o?.(this.conversation, n) : this.#a(this.data, t);
    }
    projectResponses(e) {
        if (!e?.length) return;
        let t = {
            data: {
                createdAt: Date.now(),
                responses: e
            },
            type: `client.input.responded`
        };
        return this.append(t), ()=>this.#s(t);
    }
    replaceResponses(e, t) {
        return e?.(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAnswerable"])(t, this.conversation), this.projectResponses(t.inputResponses);
    }
    #s(e) {
        let t = this.data, n = this.conversation;
        for (let t of this.projections)t.remove((t)=>t === e);
        t === this.data ? n !== this.conversation && this.#o?.(this.conversation, n) : this.#a(this.data, t);
    }
    observe(e, t = {}) {
        if (!this.#n.admit(e)) return !1;
        t.onAccepted?.(e);
        let n = this.data, r = this.conversation;
        return t.project ? t.project(e) : this.#c(e), t.notify !== !1 && (n === this.data ? r !== this.conversation && this.#o?.(this.conversation, r) : this.#a(this.data, n)), this.#r?.acceptParentEvent(e), this.#r?.reconcile(), !0;
    }
    hydrate(e) {
        return this.#n.admit(e) ? (this.#c(e), !0) : !1;
    }
    follow(e, t = []) {
        this.#r?.abortAll();
        let n = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$stream$2d$follower$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AgentStreamFollower"]({
            session: e,
            cursors: this.#t,
            getState: ()=>this.conversation,
            onFollowing: (e)=>this.#l({
                    type: `client.agent.following`,
                    data: {
                        sessionId: e
                    }
                }),
            onEvent: (e, t)=>this.#l({
                    type: `client.agent.observed`,
                    data: {
                        sessionId: e,
                        event: t
                    }
                }),
            onIdle: (e)=>this.#l({
                    type: `client.agent.idle`,
                    data: {
                        sessionId: e
                    }
                }),
            onUnavailable: (e)=>this.#l({
                    type: `client.agent.unavailable`,
                    data: {
                        sessionId: e
                    }
                })
        });
        this.#r = n;
        for (let e of t)n.acceptParentEvent(e);
        n.reconcile();
    }
    #c(e) {
        for (let t of this.projections)t.append(e);
    }
    #l(e) {
        let t = this.data, n = this.conversation;
        this.#e.append(e), t === this.data ? n !== this.conversation && this.#o?.(this.conversation, n) : this.#a(this.data, t);
    }
    stream(e, t) {
        return this.#i !== void 0 && !this.#i.ended ? (this.#i.setOptions(t), this.#i) : (this.#i = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$event$2d$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SessionEventStream"](e, t), this.#i);
    }
    stop() {
        this.#r?.abortAll(), this.#r = void 0, this.#i?.close(), this.#i = void 0;
    }
    reset() {
        this.stop(), this.#t.clear(), this.#n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$event$2d$dedupe$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEventDeduper"])();
        for (let e of this.projections)e.reset();
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-reducer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canonicalConversationReducer",
    ()=>canonicalConversationReducer,
    "conversationReducer",
    ()=>conversationReducer,
    "initialConversationState",
    ()=>initialConversationState,
    "reduceConversation",
    ()=>reduceConversation
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-reducer.js [app-ssr] (ecmascript)");
;
function initialConversationState() {
    return {
        messages: [],
        turns: {},
        inputs: {},
        tasks: {},
        agents: {}
    };
}
function updateTurn(e, t, n) {
    let r = e.turns[t];
    if (r === void 0) return e;
    let i = n(r);
    return i === r ? e : {
        ...e,
        turns: {
            ...e.turns,
            [t]: i
        }
    };
}
function updateTask(e, t, n) {
    let r = e.tasks[t];
    if (r === void 0) return e;
    let i = n(r);
    return i === r ? e : {
        ...e,
        tasks: {
            ...e.tasks,
            [t]: i
        }
    };
}
function updateObservation(e, t, n) {
    let r = e.agents[t];
    if (r === void 0) return e;
    let i = n(r.observation);
    return i === r.observation ? e : {
        ...e,
        agents: {
            ...e.agents,
            [t]: {
                ...r,
                observation: i
            }
        }
    };
}
function observedConversation(e) {
    return e.status === `not-followed` ? void 0 : e.conversation;
}
function reduceConversationLifecycle(e, t) {
    switch(t.type){
        case `turn.started`:
            return {
                ...e,
                activeTurnId: t.data.turnId,
                turns: {
                    ...e.turns,
                    [t.data.turnId]: {
                        turnId: t.data.turnId,
                        status: `active`
                    }
                }
            };
        case `turn.waiting`:
            return updateTurn(e, t.data.turnId, (e)=>e.status === `active` && !e.waiting ? {
                    ...e,
                    waiting: !0
                } : e);
        case `step.started`:
            return updateTurn(e, t.data.turnId, (e)=>e.waiting ? {
                    turnId: e.turnId,
                    status: e.status
                } : e);
        case `turn.completed`:
        case `turn.cancelled`:
        case `turn.failed`:
            {
                let { turnId: n } = t.data;
                return {
                    ...e,
                    activeTurnId: e.activeTurnId === n ? void 0 : e.activeTurnId,
                    turns: {
                        ...e.turns,
                        [n]: {
                            turnId: n,
                            status: t.type === `turn.completed` ? `completed` : t.type === `turn.failed` ? `failed` : `cancelled`
                        }
                    }
                };
            }
        case `session.waiting`:
        case `session.completed`:
        case `session.failed`:
            return e.activeTurnId === void 0 ? e : {
                ...e,
                activeTurnId: void 0
            };
        case `task.started`:
            {
                let { callId: n, kind: r, name: i, taskId: a, turnId: o } = t.data, s = e.tasks[a] ?? {
                    taskId: a,
                    name: i,
                    kind: r,
                    calls: {}
                };
                return s.calls[n] === void 0 ? {
                    ...e,
                    tasks: {
                        ...e.tasks,
                        [a]: {
                            ...s,
                            calls: {
                                ...s.calls,
                                [n]: {
                                    callId: n,
                                    turnId: o,
                                    status: `working`
                                }
                            }
                        }
                    }
                } : e;
            }
        case `task.settled`:
            {
                let { callId: n, error: r, output: i, status: a, taskId: o } = t.data;
                return updateTask(e, o, (e)=>{
                    let t = e.calls[n];
                    if (t === void 0 || t.status !== `working`) return e;
                    let o = {
                        callId: n,
                        turnId: t.turnId,
                        status: a
                    };
                    return {
                        ...e,
                        calls: {
                            ...e.calls,
                            [n]: a === `completed` && i !== void 0 ? {
                                ...o,
                                output: i
                            } : a === `failed` && r !== void 0 ? {
                                ...o,
                                error: r
                            } : o
                        }
                    };
                });
            }
        case `agent.started`:
            {
                let { callId: n, name: r, sessionId: i, taskId: a, turnId: o } = t.data;
                if (e.agents[i] !== void 0) return e;
                let s = {
                    sessionId: i,
                    name: r,
                    callId: n,
                    turnId: o,
                    observation: {
                        status: `not-followed`
                    }
                };
                return a !== void 0 && (s.taskId = a), {
                    ...e,
                    agents: {
                        ...e.agents,
                        [i]: s
                    }
                };
            }
        case `input.requested`:
            {
                let n = {
                    ...e.inputs
                };
                for (let e of t.data.requests){
                    if (n[e.requestId] !== void 0) continue;
                    let r = {
                        request: e,
                        turnId: t.data.turnId,
                        stepIndex: t.data.stepIndex,
                        status: `open`
                    };
                    t.data.taskId !== void 0 && (r.taskId = t.data.taskId), n[e.requestId] = r;
                }
                return {
                    ...e,
                    inputs: n
                };
            }
        case `client.input.responded`:
            {
                let n = {
                    ...e.inputs
                };
                for (let e of t.data.responses){
                    let t = n[e.requestId];
                    t?.status === `open` && (n[e.requestId] = {
                        ...t,
                        response: e,
                        status: `responded`
                    });
                }
                return {
                    ...e,
                    inputs: n
                };
            }
        case `approval.candidate`:
            {
                let n = e.inputs[t.data.requestId];
                return n === void 0 || n.status === `settled` || t.data.outcome === `pending` ? e : {
                    ...e,
                    inputs: {
                        ...e.inputs,
                        [t.data.requestId]: {
                            ...n,
                            status: `open`,
                            response: void 0
                        }
                    }
                };
            }
        case `approval.settled`:
            {
                let n = e.inputs[t.data.requestId];
                return n === void 0 || n.status === `settled` ? e : {
                    ...e,
                    inputs: {
                        ...e.inputs,
                        [t.data.requestId]: {
                            ...n,
                            status: `settled`,
                            outcome: t.data.outcome
                        }
                    }
                };
            }
        case `input.resolved`:
            {
                let n = {
                    ...e.inputs
                };
                for (let e of t.data.resolutions){
                    let t = n[e.requestId];
                    t !== void 0 && t.status !== `settled` && (n[e.requestId] = {
                        ...t,
                        status: `settled`,
                        outcome: e.outcome,
                        response: e.response ?? t.response
                    });
                }
                return {
                    ...e,
                    inputs: n
                };
            }
        default:
            return e;
    }
}
const messageReducer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["defaultMessageReducer"])();
function reduceConversation(e, t) {
    switch(t.type){
        case `client.agent.following`:
            return updateObservation(e, t.data.sessionId, (e)=>e.status === `following` ? e : {
                    status: `following`,
                    conversation: observedConversation(e) ?? initialConversationState()
                });
        case `client.agent.observed`:
            return updateObservation(e, t.data.sessionId, (e)=>e.status === `following` ? {
                    status: `following`,
                    conversation: reduceConversation(e.conversation, t.data.event)
                } : e);
        case `client.agent.idle`:
            return updateObservation(e, t.data.sessionId, (e)=>e.status === `following` ? {
                    status: `idle`,
                    conversation: e.conversation
                } : e);
        case `client.agent.unavailable`:
            return updateObservation(e, t.data.sessionId, (e)=>{
                let t = observedConversation(e);
                return t === void 0 ? {
                    status: `unavailable`
                } : {
                    status: `unavailable`,
                    conversation: t
                };
            });
        default:
            {
                let n = messageReducer.reduce(e, t);
                return reduceConversationLifecycle({
                    ...e,
                    ...n
                }, t);
            }
    }
}
const canonicalConversationReducer = {
    initial: initialConversationState,
    reduce: reduceConversation
}, conversationReducer = canonicalConversationReducer;
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-state.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "agentCallTurns",
    ()=>agentCallTurns,
    "agentToolSession",
    ()=>agentToolSession,
    "agentToolTask",
    ()=>agentToolTask,
    "conversationAuthorizations",
    ()=>conversationAuthorizations,
    "hasPendingAuthorizations",
    ()=>hasPendingAuthorizations,
    "isAgentCallContentPending",
    ()=>isAgentCallContentPending,
    "isAgentSessionCaughtUp",
    ()=>isAgentSessionCaughtUp,
    "openConversationInputs",
    ()=>openConversationInputs
]);
function openConversationInputs(e) {
    return Object.values(e.inputs).filter((e)=>e.status === `open`);
}
function conversationAuthorizations(e) {
    return e.messages.flatMap((e)=>e.role === `assistant` ? e.parts.filter((e)=>e.type === `authorization`) : []);
}
function hasPendingAuthorizations(e) {
    return conversationAuthorizations(e).some((e)=>e.state === `required` && e.awaitsCallback === !0);
}
function agentToolTask(e, t) {
    let n = t.taskId === void 0 ? void 0 : e.tasks[t.taskId];
    return n?.kind === `agent` ? n : void 0;
}
function agentToolSession(e, t) {
    return Object.values(e.agents).find((n)=>agentToolTask(e, n)?.taskId === t.taskId);
}
function isAgentSessionCaughtUp(e, t) {
    if (t.observation.status !== `following` && t.observation.status !== `idle`) return !1;
    let n = agentToolTask(e, t);
    if (n === void 0) return !1;
    let r = Object.values(n.calls);
    if (r.some((e)=>e.status === `working`)) return !1;
    let i = t.observation.conversation;
    return i.activeTurnId !== void 0 || Object.values(i.inputs).some((e)=>e.status !== `settled`) || hasPendingAuthorizations(i) ? !1 : i.messages.filter((e)=>e.role === `user`).length >= r.filter((e)=>e.status === `completed`).length;
}
function agentCallTurns(e, t) {
    let n = Object.keys(e.calls), r = new Map, i = 0;
    for (let e of t.messages){
        if (e.role !== `user`) continue;
        let t = n[i++], a = e.metadata?.turnId;
        t !== void 0 && a !== void 0 && !r.has(a) && r.set(a, t);
    }
    let a = new Map(n.map((e)=>[
            e,
            []
        ])), o;
    for (let e of Object.keys(t.turns))o = r.get(e) ?? o, o !== void 0 && a.get(o)?.push(e);
    return a;
}
function isAgentCallContentPending(e, t, n) {
    let r = agentCallTurns(e, n).get(t.callId) ?? [], { activeTurnId: i } = n;
    return i !== void 0 && r.includes(i) ? !0 : t.status === `completed` && n.messages.filter((e)=>e.role === `user`).length <= Object.keys(e.calls).indexOf(t.callId);
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-projection.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EveAgentProjection",
    ()=>EveAgentProjection
]);
var EveAgentProjection = class {
    #e;
    #t;
    #n;
    constructor(e, t){
        this.#e = e, this.#t = [
            ...t
        ], this.#n = this.#r();
    }
    get data() {
        return this.#n;
    }
    get reducer() {
        return this.#e;
    }
    reset() {
        this.#t = [], this.#n = this.#e.initial();
    }
    append(e) {
        this.#t.push(e), this.#n = this.#e.reduce(this.#n, e);
    }
    remove(e) {
        this.#t = this.#t.filter((t)=>!e(t)), this.#n = this.#r();
    }
    replace(e, t) {
        let n = this.#t.findIndex(e);
        n === -1 ? this.#t.push(t) : this.#t[n] = t, this.#n = this.#r();
    }
    #r() {
        let e = this.#e.initial();
        for (let t of this.#t)e = this.#e.reduce(e, t);
        return e;
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-store-helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "activeTurnForOptimisticFollowUp",
    ()=>activeTurnForOptimisticFollowUp,
    "assertAnswerable",
    ()=>assertAnswerable,
    "assertExclusiveTurnInput",
    ()=>assertExclusiveTurnInput,
    "assertInFlightFollowUp",
    ()=>assertInFlightFollowUp,
    "countFollowUpDeliveries",
    ()=>countFollowUpDeliveries,
    "createAbortSignal",
    ()=>createAbortSignal,
    "createActiveTurn",
    ()=>createActiveTurn,
    "createSubmissionId",
    ()=>createSubmissionId,
    "followSteeredTurns",
    ()=>followSteeredTurns,
    "isAbortError",
    ()=>isAbortError,
    "isResponseBoundary",
    ()=>isResponseBoundary,
    "isSettledSessionTail",
    ()=>isSettledSessionTail,
    "settledStatus",
    ()=>settledStatus,
    "summarizeUserContent",
    ()=>summarizeUserContent,
    "toTerminalStreamFailureError",
    ()=>toTerminalStreamFailureError,
    "validateFollowUp",
    ()=>validateFollowUp,
    "waitWithSignal",
    ()=>waitWithSignal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-state.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)");
;
;
;
function activeTurnForOptimisticFollowUp(e) {
    let t = e.findLast((e)=>e.type === `turn.started` || e.type === `turn.completed` || e.type === `turn.failed` || e.type === `turn.cancelled` || (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCurrentTurnBoundaryEvent"])(e));
    return t?.type === `turn.started` ? t.data.turnId : void 0;
}
function isResponseBoundary(e, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["endsTurnSegment"])(e, {
        callbacks: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$state$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPendingAuthorizations"])(t),
        requests: Object.values(t.inputs).some((e)=>e.status !== `settled`)
    });
}
function settledStatus(e, t) {
    return e === void 0 ? t.activeTurnId === void 0 ? `ready` : `streaming` : `error`;
}
function isSettledSessionTail(e, t) {
    let n = e.at(-1);
    return n !== void 0 && isResponseBoundary(n, t);
}
function assertAnswerable(e, t) {
    for (let { requestId: n } of e.inputResponses ?? []){
        let e = t.inputs[n]?.status;
        if (e !== void 0 && e !== `open`) throw Error(`Input request ${n} was already answered.`);
    }
}
function assertInFlightFollowUp(e) {
    if (e.inputResponses === void 0 && (e.message === void 0 || e.turnPolicy !== `steer`)) throw Error(`eve session is already processing a turn. Send a message with turnPolicy: "steer" to guide it at the next boundary, or answer an open input request.`);
}
function validateFollowUp(e) {
    return assertExclusiveTurnInput(e), assertInFlightFollowUp(e), e;
}
function assertExclusiveTurnInput(e) {
    if (e.message !== void 0 == (e.inputResponses !== void 0)) throw Error(`A turn requires exactly one of message or inputResponses.`);
}
let submissionSequence = 0;
function createSubmissionId() {
    let e = globalThis.crypto?.randomUUID;
    return e === void 0 ? (submissionSequence += 1, `submission_${submissionSequence.toString()}`) : e.call(globalThis.crypto);
}
function createAbortSignal(e, t) {
    return e ? AbortSignal.any([
        e,
        t
    ]) : t;
}
function summarizeUserContent(e) {
    if (typeof e == `string`) return e;
    let t = [];
    for (let n of e)n.type === `text` ? t.push(n.text) : n.type === `file` && t.push(n.filename ? `[file: ${n.filename}]` : `[file]`);
    return t.join(`
`);
}
function isAbortError(e) {
    return e instanceof Error && e.name === `AbortError`;
}
function toTerminalStreamFailureError(e) {
    if (e.type !== `session.failed`) return;
    let t = Error(e.data.message);
    return t.name = e.data.code, t;
}
function createActiveTurn(e) {
    let t = Promise.withResolvers(), n = Promise.withResolvers(), r = {
        abortController: new AbortController,
        acceptedFollowUps: 0,
        cancel: ()=>e(r),
        completion: n.promise,
        followUpDispatches: new Set,
        receivedFollowUps: 0,
        receivedFollowUpEvents: new Map,
        followUpSubmissionIds: new Set,
        resolveCompletion: n.resolve,
        response: t.promise,
        resolveResponse: t.resolve
    };
    return r;
}
function countFollowUpDeliveries(e, t) {
    let n = 0;
    for (let r of t.ids)e.followUpSubmissionIds.delete(r) && (n += 1);
    if (n !== 0) {
        if (t.alreadyProjected) e.receivedFollowUps += n;
        else {
            let r = e.receivedFollowUpEvents.get(t.event) ?? 0;
            e.receivedFollowUpEvents.set(t.event, r + n);
        }
    }
}
async function followSteeredTurns(e, t, n) {
    for(; e.followUpDispatches.size > 0;)await Promise.allSettled(e.followUpDispatches);
    if (e.receivedFollowUps >= e.acceptedFollowUps) return;
    let r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnSegment"]({
        followCallbacks: !0
    });
    for await (let i of t){
        if (!n()) return;
        if (e.receivedFollowUps += e.receivedFollowUpEvents.get(i) ?? 0, e.receivedFollowUpEvents.delete(i), r.observe(i)) {
            for(; e.followUpDispatches.size > 0;)await Promise.allSettled(e.followUpDispatches);
            if (e.receivedFollowUps >= e.acceptedFollowUps) return;
        }
    }
}
async function waitWithSignal(e, t) {
    if (t === void 0) return await e;
    let n = Promise.withResolvers(), onAbort = ()=>n.reject(t.reason);
    t.addEventListener(`abort`, onAbort, {
        once: !0
    }), t.aborted && onAbort();
    try {
        return await Promise.race([
            n.promise,
            e
        ]);
    } finally{
        t.removeEventListener(`abort`, onAbort);
    }
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-store.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EveAgentStore",
    ()=>EveAgentStore,
    "attachEveAgentStore",
    ()=>attachEveAgentStore,
    "detachEveAgentStore",
    ()=>detachEveAgentStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/errors.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-store-helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$projection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-projection.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$response$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-response.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$optimistic$2d$message$2d$submissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/optimistic-message-submissions.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/conversation-client.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$turn$2d$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-turn-dispatch.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const detachStore = Symbol(`detachEveAgentStore`), attachStore = Symbol(`attachEveAgentStore`);
var EveAgentStore = class {
    #e;
    #t;
    #n = !1;
    #r;
    #i;
    #a;
    #o = new Set;
    #s;
    #c = {};
    #l;
    #u;
    #d;
    #f = 0;
    #p;
    #m;
    #h;
    #g;
    #_;
    #v = `ready`;
    constructor(e){
        this.#t = e.prewarm ?? !1, this.#i = e.followSubagents ?? !1, this.#a = e.session !== void 0, this.#e = this.#a ? void 0 : e.client ?? new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Client"]({
            auth: e.auth,
            headers: e.headers,
            host: e.host ?? ``
        }), this.#r = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$conversation$2d$client$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ConversationClient"](new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$projection$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EveAgentProjection"](e.reducer, []), ()=>this.#F(), ()=>this.#F()), this.#u = (e.initialEvents ?? []).filter((e)=>this.#r.hydrate(e)), this.#d = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$optimistic$2d$message$2d$submissions$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["OptimisticMessageSubmissions"](this.#r.projections, e.optimistic ?? !0), this.#g = e.session ?? (e.initialSession === void 0 ? void 0 : this.#e?.sessions.attach(e.initialSession.sessionId, {
            streamIndex: e.initialSession.streamIndex
        })), this.#_ = this.#P();
    }
    get snapshot() {
        return this.#_;
    }
    setCallbacks(e) {
        this.#c = e;
    }
    subscribe(e) {
        return this.#o.add(e), ()=>void this.#o.delete(e);
    }
    prewarm() {
        if (this.#p !== void 0) return this.#p;
        if (this.#g !== void 0 || this.#a) return Promise.resolve();
        if (this.#s !== void 0) return this.#s.response.then((e)=>{
            if (e === void 0) throw this.#l ?? new DOMException(`Session creation was aborted.`, `AbortError`);
        });
        let e = this.#e;
        if (e === void 0) return Promise.reject(Error(`This eve agent store does not own a session client.`));
        let t = this.#f, n = new AbortController;
        this.#m = n;
        let r = (async ()=>{
            try {
                let r = await e.sessions.create({
                    signal: n.signal
                });
                if (t !== this.#f) return;
                this.#l = void 0, this.#v === `error` && (this.#v = `ready`), this.#w(r.session), this.#C();
            } catch (e) {
                throw t === this.#f && this.#s === void 0 && this.#l === void 0 && this.#T(e), e;
            }
        })();
        this.#p = r;
        let clear = ()=>{
            this.#p === r && (this.#p = void 0, this.#m = void 0);
        };
        return r.then(clear, clear), r;
    }
    async send(e) {
        return await this.#y(e, this.#c.prepareSend);
    }
    async #y(e, t) {
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertAnswerable"])(e, this.#r.conversation), this.#s !== void 0) {
            if (this.#v === `resuming`) throw Error(`eve session is resuming.`);
            return await this.#x(this.#s, e, t);
        }
        let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createActiveTurn"])((e)=>e.acceptedFollowUps > 0 && this.#g !== void 0 ? this.#g.cancel() : e.response.then((e)=>e === void 0 ? {
                    status: `no_active_turn`
                } : e.cancel()));
        this.#s = n, this.#l = void 0, this.#v = `submitted`;
        let r, i, a;
        try {
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertExclusiveTurnInput"])(e), i = this.#d.submit(e, this.#u.length), a = this.#r.projectResponses(e.inputResponses), this.#F();
            let o = await (t === void 0 ? e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitWithSignal"])(Promise.resolve(t(e)), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAbortSignal"])(e.signal, n.abortController.signal)));
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertExclusiveTurnInput"])(o), !this.#k(n)) return;
            o !== e && (i = this.#d.resubmit(i, o), a = this.#r.replaceResponses(a, o), this.#F());
            let s = {
                ...o,
                signal: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAbortSignal"])(o.signal, n.abortController.signal)
            }, c = await this.#S(s);
            a = void 0;
            let l = c.response;
            if (r = c.reader, !this.#k(n)) return;
            n.resolveResponse(l), this.#j(i, l);
            for await (let e of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$response$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["consumeMessageResponse"])(l, r)){
                if (!this.#k(n)) return;
                n.receivedFollowUps += n.receivedFollowUpEvents.get(e) ?? 0, n.receivedFollowUpEvents.delete(e);
            }
            if (!this.#k(n) || (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followSteeredTurns"])(n, r, ()=>this.#k(n)), !this.#k(n))) return;
            this.#v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["settledStatus"])(this.#l, this.#r.conversation);
        } catch (e) {
            if (!this.#k(n)) return;
            if (a?.(), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbortError"])(e)) this.#v = `ready`, this.#d.fail((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toError"])(e), i);
            else {
                let t = this.#l !== void 0;
                this.#l ??= (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toError"])(e), this.#v = `error`, this.#d.fail(this.#l, i), t || this.#c.onError?.(this.#l);
            }
        } finally{
            r?.[Symbol.dispose](), this.#O(n);
        }
    }
    resume() {
        if (this.#h !== void 0) return this.#h;
        let e = this.#b();
        this.#h = e;
        let clear = ()=>{
            this.#h === e && (this.#h = void 0);
        };
        return e.then(clear, clear), e;
    }
    async #b() {
        if (this.#v !== `ready` && this.#v !== `error`) throw Error(`eve session is already processing a turn.`);
        if (this.#g === void 0) throw Error(`An eve session is required before resuming.`);
        let e = this.#g, t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createActiveTurn"])(()=>e.cancel());
        this.#s = t, t.resolveResponse(void 0), this.#l = void 0, this.#v = `resuming`, this.#F();
        let n;
        try {
            let r = this.#C({
                catchUp: !0,
                startIndex: this.#u.length === e.state.streamIndex ? e.state.streamIndex : 0
            });
            if (n = r.subscribe(t.abortController.signal), await r.caughtUp, !this.#k(t)) return;
            n.discard();
            let i = this.#u.at(-1);
            if (i !== void 0 && this.#N(i), i && !this.#l && !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSettledSessionTail"])(this.#u, this.#r.conversation)) {
                this.#v = `streaming`, this.#F();
                for await (let e of n){
                    if (!this.#k(t)) return;
                    if (t.receivedFollowUps += t.receivedFollowUpEvents.get(e) ?? 0, t.receivedFollowUpEvents.delete(e), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isResponseBoundary"])(e, this.#r.conversation)) break;
                }
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followSteeredTurns"])(t, n, ()=>this.#k(t)), this.#k(t) && (this.#v = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["settledStatus"])(this.#l, this.#r.conversation));
        } catch (e) {
            if (!this.#k(t)) return;
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAbortError"])(e) ? this.#v = `ready` : (this.#l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toError"])(e), this.#v = `error`, this.#c.onError?.(this.#l));
        } finally{
            n?.[Symbol.dispose](), this.#O(t);
        }
    }
    cancel() {
        let e = this.#s;
        return e === void 0 ? this.#v === `streaming` && this.#g !== void 0 ? this.#g.cancel() : Promise.resolve({
            status: `no_active_turn`
        }) : e.cancel();
    }
    async compact() {
        return await this.#g?.compact() ?? {
            status: `no_active_session`
        };
    }
    async clear() {
        return await this.#g?.clear() ?? {
            status: `no_active_session`
        };
    }
    async retire() {
        if (this.#a) throw Error(`retire() needs a store-owned session. Call reset() on the session you supplied, then create a new store for the next session.`);
        let e = await this.#g?.reset() ?? {
            status: `no_active_session`
        };
        return this.reset(), e;
    }
    [attachStore]() {
        this.#n = !0, this.#i && !this.#r.following && this.#E(), this.#t && this.#g === void 0 && this.prewarm().catch(()=>{});
    }
    [detachStore]() {
        this.#n = !1, this.#r.stop(), this.#s?.abortController.abort(), this.#D(), this.#h = void 0;
    }
    reset() {
        this.#r.stop();
        let e = this.#s;
        this.#s = void 0, e?.resolveResponse(void 0), e?.resolveCompletion(), e?.abortController.abort(), this.#D(), this.#h = void 0, this.#a || (this.#g = void 0), this.#u = [], this.#r.reset(), this.#d.reset(), this.#i && this.#n && this.#E(), this.#l = void 0, this.#v = `ready`, this.#c.onSessionChange?.(this.#g?.state), this.#F(), this.#t && this.#n && this.prewarm().catch(()=>{});
    }
    async #x(e, t, n) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["assertInFlightFollowUp"])(t);
        let r = this.#f, i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAbortSignal"])(t.signal, e.abortController.signal), a = this.#r.projectResponses(t.inputResponses), o = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitWithSignal"])(Promise.resolve(n?.(t)), i).then((e)=>{
            let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateFollowUp"])(e ?? t);
            return n === t || (a = this.#r.replaceResponses(a, n)), n;
        }).catch((e)=>{
            throw a?.(), e;
        });
        if (r !== this.#f) return;
        if (!this.#k(e)) return a?.(), await this.#y(o);
        let s = this.#d.submit(o, this.#u.length, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["activeTurnForOptimisticFollowUp"])(this.#u));
        s !== void 0 && e.followUpSubmissionIds.add(s), this.#F();
        let c;
        c = (async ()=>{
            try {
                let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAbortSignal"])(o.signal, e.abortController.signal);
                if (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitWithSignal"])(e.response, t), !this.#k(e) || this.#g === void 0) throw Error(`The active eve turn ended before the follow-up could be sent.`);
                this.#C({
                    headers: o.headers,
                    streamReconnectPolicy: o.streamReconnectPolicy
                });
                let n = (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$turn$2d$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSessionTurn"])({
                    session: this.#g,
                    turn: {
                        ...o,
                        signal: t
                    }
                })).response;
                if (a = void 0, o.message === void 0) return;
                e.acceptedFollowUps += 1, this.#j(s, n);
            } catch (t) {
                throw this.#k(e) && (this.#d.fail((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toError"])(t), s), a?.(), this.#F()), t;
            } finally{
                e.followUpDispatches.delete(c);
            }
        })(), e.followUpDispatches.add(c), await c, await e.completion;
    }
    async #S(e) {
        let t = {
            headers: e.headers,
            streamReconnectPolicy: e.streamReconnectPolicy
        };
        this.#p !== void 0 && (await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["waitWithSignal"])(this.#p.catch((e)=>{
            if (this.#g !== void 0) throw e;
        }), e.signal), e.signal?.throwIfAborted());
        let n = this.#g, r;
        try {
            let i = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$turn$2d$dispatch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["dispatchSessionTurn"])({
                client: this.#e,
                session: n,
                turn: e,
                beforeSend: ()=>{
                    r = this.#C(t).subscribe(e.signal);
                }
            });
            return i.created && (this.#w(i.session), r = this.#C(t).subscribe(e.signal)), {
                response: i.response,
                reader: r
            };
        } catch (e) {
            throw r?.[Symbol.dispose](), e;
        }
    }
    #C(e = {}) {
        if (this.#g === void 0) throw Error(`A session is required before opening its stream.`);
        let t = this.#f;
        return this.#i && !this.#r.following && this.#E(), this.#r.stream(this.#g, {
            ...e,
            onEvent: (e)=>{
                t === this.#f && this.#A(e);
            },
            onError: (e)=>{
                t === this.#f && this.#s === void 0 && this.#T(e);
            }
        });
    }
    #w(e) {
        this.#g = e, this.#i && this.#n && this.#E(), this.#c.onSessionChange?.(e.state), this.#F();
    }
    #T(e) {
        this.#l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$errors$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toError"])(e), this.#v = `error`, this.#c.onError?.(this.#l), this.#F();
    }
    #E() {
        this.#g && this.#r.follow(this.#g, this.#u);
    }
    #D() {
        this.#f += 1, this.#m?.abort(), this.#m = void 0, this.#p = void 0;
    }
    #O(e) {
        if (this.#k(e)) {
            e.resolveResponse(void 0), this.#s = void 0;
            try {
                this.#c.onSessionChange?.(this.#g?.state), this.#F(), this.#c.onFinish?.(this.#_);
            } finally{
                e.resolveCompletion();
            }
        }
    }
    #k(e) {
        return this.#s === e;
    }
    #A(e) {
        let t = this.#v === `streaming`;
        if (!this.#r.observe(e, {
            onAccepted: ()=>{
                this.#u = [
                    ...this.#u,
                    e
                ];
            },
            project: (e)=>{
                this.#M(this.#d.apply(e));
            },
            notify: !1
        })) return !1;
        this.#c.onEvent?.(e), this.#N(e);
        let { conversation: n } = this.#r, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isSettledSessionTail"])(this.#u, n) && n.activeTurnId === void 0;
        return this.#v !== `resuming` && this.#l === void 0 && (`data` in e && e.data !== void 0 && `turnId` in e.data && (this.#v = `streaming`), this.#s === void 0 && r && (this.#v = `ready`)), this.#c.onSessionChange?.(this.#g?.state), this.#v !== `resuming` && this.#F(), this.#s === void 0 && t && r && this.#c.onFinish?.(this.#_), !0;
    }
    #j(e, t) {
        let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$response$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getMessageResponseDeliveryId"])(t), r = this.#d.correlate(e, n, this.#u);
        this.#M(r) && this.#F();
    }
    #M(e) {
        return e !== void 0 && (this.#s !== void 0 && (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["countFollowUpDeliveries"])(this.#s, e), !0);
    }
    #N(e) {
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toTerminalStreamFailureError"])(e);
        t !== void 0 && (this.#v = `error`, this.#d.failAll(t), this.#l === void 0 && (this.#l = t, this.#c.onError?.(t)));
    }
    #P() {
        return {
            data: this.#r.data,
            conversation: this.#r.conversation,
            error: this.#l,
            events: this.#u,
            session: this.#g?.state,
            status: this.#v
        };
    }
    #F() {
        this.#_ = this.#P();
        for (let e of this.#o)e();
    }
};
function detachEveAgentStore(e) {
    e[detachStore]();
}
function attachEveAgentStore(e) {
    e[attachStore]();
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/health-response-error.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HealthResponseError",
    ()=>HealthResponseError
]);
var HealthResponseError = class extends Error {
    issues;
    constructor(e = []){
        let t = e.length === 0 ? `` : ` (${e.join(`; `)})`;
        super(`The server returned an unrecognized eve health response.${t}`), this.name = `HealthResponseError`, this.issues = e;
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/health-schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "HealthResultSchema",
    ()=>HealthResultSchema
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/compiled/zod/index.js [app-ssr] (ecmascript) <locals>");
;
const HealthResultSchema = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].object({
    ok: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(!0),
    status: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].literal(`ready`),
    workflowId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$compiled$2f$zod$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["z"].string().min(1)
}).strict();
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-action-parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "approvedApproval",
    ()=>approvedApproval,
    "createToolMetadata",
    ()=>createToolMetadata,
    "mergeToolMetadata",
    ()=>mergeToolMetadata,
    "normalizeActionRequest",
    ()=>normalizeActionRequest,
    "normalizeActionResult",
    ()=>normalizeActionResult,
    "stringifyUnknown",
    ()=>stringifyUnknown,
    "toMessageInputRequest",
    ()=>toMessageInputRequest
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$action$2d$request$2d$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/action-request-name.js [app-ssr] (ecmascript)");
;
function toMessageInputRequest(e) {
    return {
        allowFreeform: e.allowFreeform,
        display: e.display,
        kind: e.kind,
        options: e.options,
        prompt: e.prompt,
        requestId: e.requestId
    };
}
function createToolMetadata(e, t) {
    return {
        eve: {
            inputRequest: t?.inputRequest,
            kind: e.kind,
            name: e.name
        }
    };
}
function mergeToolMetadata(e, t) {
    let n = t.eve?.kind ?? e?.eve?.kind ?? `unknown`, r = t.eve?.name ?? e?.eve?.name ?? `unknown`;
    return {
        eve: {
            ...e?.eve,
            ...t.eve,
            inputRequest: t.eve?.inputRequest ?? e?.eve?.inputRequest,
            inputResponse: t.eve?.inputResponse ?? e?.eve?.inputResponse,
            kind: n,
            name: r
        }
    };
}
function approvedApproval(e) {
    if (e?.approval?.id) return {
        approved: !0,
        id: e.approval.id,
        isAutomatic: e.approval.isAutomatic,
        reason: e.approval.reason
    };
}
function normalizeActionRequest(e) {
    let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$action$2d$request$2d$name$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["actionRequestName"])(e);
    switch(e.kind){
        case `load-skill`:
            return {
                kind: `load-skill`,
                name: t,
                toolName: `eve:load-skill`
            };
        case `tool-call`:
        case `workflow-tool-call`:
            return {
                kind: `tool-call`,
                name: t,
                toolName: t
            };
        case `subagent-call`:
        case `remote-agent-call`:
            return {
                kind: `subagent-call`,
                name: t,
                toolName: `eve:subagent:${t}`
            };
    }
}
function normalizeActionResult(e) {
    switch(e.kind){
        case `load-skill-result`:
            return {
                kind: `load-skill`,
                name: e.name ?? `load_skill`,
                toolName: `eve:load-skill`
            };
        case `tool-result`:
            return {
                kind: `tool-call`,
                name: e.toolName,
                toolName: e.toolName
            };
        case `subagent-result`:
            return {
                kind: `subagent-call`,
                name: e.subagentName,
                toolName: `eve:subagent:${e.subagentName}`
            };
    }
}
function stringifyUnknown(e) {
    if (typeof e == `string`) return e;
    try {
        return JSON.stringify(e);
    } catch  {
        return `Action failed.`;
    }
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-reducer-primitives.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "optimisticUserMessageId",
    ()=>optimisticUserMessageId,
    "partKey",
    ()=>partKey,
    "projectReceivedParts",
    ()=>projectReceivedParts,
    "upsertMessage",
    ()=>upsertMessage
]);
function projectReceivedParts(e, t) {
    return e?.map((e)=>e.type === `text` ? {
            state: `done`,
            text: e.text,
            type: `text`
        } : {
            filename: e.filename,
            mediaType: e.mediaType,
            size: e.size,
            type: `file`,
            url: e.url
        }) ?? [
        {
            state: `done`,
            text: t,
            type: `text`
        }
    ];
}
function partKey(e) {
    switch(e.type){
        case `text`:
            return `text:${e.stepIndex ?? 0}`;
        case `reasoning`:
            return `reasoning:${e.stepIndex ?? 0}`;
        case `file`:
            return `file:${e.stepIndex ?? 0}:${e.filename ?? e.url ?? e.mediaType}`;
        case `step-start`:
            return `step-start`;
        case `authorization`:
            return e.attemptId === void 0 ? `authorization:${e.turnId}:${e.stepIndex}:${e.name}` : `authorization:${e.attemptId}`;
        case `dynamic-tool`:
            return `dynamic-tool:${e.toolCallId}`;
    }
}
function upsertMessage(e, t, n) {
    let r = e.messages.findIndex((e)=>e.id === t.id);
    if (r !== -1) return {
        ...e,
        messages: [
            ...e.messages.slice(0, r),
            t,
            ...e.messages.slice(r + 1)
        ]
    };
    let i = n === void 0 ? -1 : e.messages.findIndex((e)=>e.role === `assistant` && e.metadata?.turnId === n);
    return i === -1 ? {
        ...e,
        messages: [
            ...e.messages,
            t
        ]
    } : {
        ...e,
        messages: [
            ...e.messages.slice(0, i),
            t,
            ...e.messages.slice(i)
        ]
    };
}
function optimisticUserMessageId(e) {
    return `optimistic:${e}:user`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-reducer.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultMessageReducer",
    ()=>defaultMessageReducer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-action-parts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$authorization$2d$message$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/authorization-message-parts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-reducer-primitives.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$run$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-run-parts.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$task$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-task-parts.js [app-ssr] (ecmascript)");
;
;
;
;
;
function receivedMessageEventId(e) {
    return e.meta.id ?? `${e.data.turnId}:${e.data.sequence}`;
}
function defaultMessageReducer() {
    return {
        initial () {
            return {
                messages: []
            };
        },
        reduce (e, t) {
            return reduceMessageData(e, t);
        }
    };
}
function reduceMessageData(e, t) {
    switch(t.type){
        case `client.message.submitted`:
        case `client.message.failed`:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upsertMessage"])(e, {
                id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["optimisticUserMessageId"])(t.data.submissionId),
                metadata: {
                    optimistic: !0,
                    status: t.type === `client.message.failed` ? `failed` : `submitted`
                },
                parts: [
                    {
                        type: `text`,
                        text: t.data.message
                    }
                ],
                role: `user`
            }, t.data.turnId);
        case `input.resolved`:
            {
                let n = e;
                for (let e of t.data.resolutions)n = resolveInputRequest(n, e);
                return n;
            }
        case `message.received`:
            return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upsertMessage"])(e, {
                id: `${receivedMessageEventId(t)}:user`,
                metadata: {
                    status: `complete`,
                    turnId: t.data.turnId
                },
                parts: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["projectReceivedParts"])(t.data.parts, t.data.message),
                role: `user`
            }, t.data.turnId);
        case `step.started`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>ensureStepStartPart(e, t.data.stepIndex));
        case `step.completed`:
            return e.messages.find((e)=>e.role === `assistant` && e.metadata?.turnId === t.data.turnId) === void 0 ? e : updateAssistantMessage(e, t.data.turnId, (e)=>({
                    ...e,
                    parts: closeStreamingRuns(e.parts, t.data.stepIndex)
                }));
        case `reasoning.appended`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$run$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageRun"].transition(ensureStepStartPart(e, t.data.stepIndex), {
                    kind: `append`,
                    delta: t.data.reasoningDelta,
                    id: t.meta?.id,
                    stepIndex: t.data.stepIndex,
                    type: `reasoning`
                }));
        case `reasoning.completed`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$run$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageRun"].transition(ensureStepStartPart(e, t.data.stepIndex), {
                    kind: `complete`,
                    stepIndex: t.data.stepIndex,
                    text: t.data.reasoning,
                    id: t.meta?.id,
                    type: `reasoning`
                }));
        case `action.input.appended`:
            {
                let n = findToolPart(e, t.data.callId);
                if (n !== void 0 && n.state !== `input-streaming`) return e;
                let r = {
                    input: void 0,
                    inputText: (n?.state === `input-streaming` ? n.inputText : ``) + t.data.inputTextDelta,
                    state: `input-streaming`,
                    stepIndex: t.data.stepIndex,
                    toolCallId: t.data.callId,
                    toolMetadata: n?.toolMetadata ?? {
                        eve: {
                            kind: `unknown`,
                            name: t.data.toolName
                        }
                    },
                    toolName: t.data.toolName,
                    type: `dynamic-tool`
                };
                return upsertToolPart(e, t.data.turnId, t.data.stepIndex, r);
            }
        case `actions.requested`:
            {
                let n = e;
                for (let e of t.data.actions){
                    let r = findToolPart(n, e.callId);
                    if (r !== void 0 && r.state !== `input-streaming`) continue;
                    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeActionRequest"])(e);
                    n = updateAssistantMessage(n, t.data.turnId, (n)=>upsertPart(ensureStepStartPart(n, t.data.stepIndex), {
                            input: `input` in e ? e.input : void 0,
                            state: `input-available`,
                            stepIndex: t.data.stepIndex,
                            toolCallId: e.callId,
                            toolMetadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createToolMetadata"])(i),
                            toolName: i.toolName,
                            type: `dynamic-tool`
                        }));
                }
                return n;
            }
        case `input.requested`:
            {
                let n = e;
                for (let e of t.data.requests){
                    let r = findToolPart(n, e.action.callId);
                    if (r?.approval?.id === e.requestId || r !== void 0 && isSettledToolPart(r)) continue;
                    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeActionRequest"])(e.action);
                    n = updateAssistantMessage(n, t.data.turnId, (n)=>upsertPart(ensureStepStartPart(n, t.data.stepIndex), {
                            approval: {
                                id: e.requestId
                            },
                            input: e.action.input,
                            state: `approval-requested`,
                            stepIndex: t.data.stepIndex,
                            toolCallId: e.action.callId,
                            toolMetadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createToolMetadata"])(i, {
                                inputRequest: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toMessageInputRequest"])(e)
                            }),
                            toolName: i.toolName,
                            type: `dynamic-tool`
                        }));
                }
                return n;
            }
        case `approval.candidate`:
            return e;
        case `approval.settled`:
            {
                let n = findToolPartByApprovalId(e, t.data.requestId);
                if (n === void 0) return e;
                if (t.data.outcome === `approved`) {
                    let r = {
                        approved: !0,
                        id: t.data.requestId,
                        reason: void 0
                    };
                    return updateToolPart(e, n.toolCallId, n.state === `output-available` ? {
                        ...n,
                        approval: r
                    } : {
                        ...toolPartIdentity(n),
                        approval: r,
                        state: `approval-responded`
                    });
                }
                return n.state === `output-available` ? e : updateToolPart(e, n.toolCallId, {
                    ...toolPartIdentity(n),
                    approval: {
                        approved: !1,
                        id: t.data.requestId,
                        reason: `Tool execution was cancelled.`
                    },
                    state: `output-denied`
                });
            }
        case `action.result`:
            {
                let n = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeActionResult"])(t.data.result), r = findToolPart(e, t.data.result.callId), i = t.data.status === `rejected` || t.data.error?.code === `TOOL_EXECUTION_DENIED`, a = t.data.status === `failed` && !i, o = r?.approval?.id ?? t.data.result.callId, s = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeToolMetadata"])(r?.toolMetadata, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createToolMetadata"])(n)), c = {
                    input: r?.input,
                    stepIndex: t.data.stepIndex,
                    toolCallId: t.data.result.callId,
                    toolMetadata: s,
                    toolName: r?.toolName ?? n.toolName,
                    type: `dynamic-tool`
                }, l;
                return l = i ? {
                    ...c,
                    approval: {
                        approved: !1,
                        id: o,
                        reason: t.data.error?.message
                    },
                    state: `output-denied`
                } : a ? {
                    ...c,
                    approval: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["approvedApproval"])(r),
                    errorText: t.data.error?.message ?? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["stringifyUnknown"])(t.data.result.output),
                    state: `output-error`
                } : {
                    ...c,
                    approval: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["approvedApproval"])(r),
                    output: t.data.result.output,
                    state: `output-available`
                }, upsertToolPart(e, t.data.turnId, t.data.stepIndex, l);
            }
        case `action.partial`:
            {
                let n = findToolPart(e, t.data.result.callId);
                if (n !== void 0 && isSettledToolPart(n)) return e;
                let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeActionResult"])(t.data.result), i = {
                    approval: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["approvedApproval"])(n),
                    input: n?.input,
                    output: t.data.result.output,
                    partial: !0,
                    state: `output-available`,
                    stepIndex: t.data.stepIndex,
                    toolCallId: t.data.result.callId,
                    toolMetadata: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeToolMetadata"])(n?.toolMetadata, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createToolMetadata"])(r)),
                    toolName: n?.toolName ?? r.toolName,
                    type: `dynamic-tool`
                };
                return upsertToolPart(e, t.data.turnId, t.data.stepIndex, i);
            }
        case `task.settled`:
            {
                let n = findToolPart(e, t.data.callId);
                return n === void 0 ? e : replaceToolPart(e, (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$task$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSettledTaskPart"])(n, t));
            }
        case `authorization.required`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>upsertPart(ensureStepStartPart(e, t.data.stepIndex), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$authorization$2d$message$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAuthorizationRequiredPart"])(t)));
        case `authorization.completed`:
            return completeAuthorization(e, t);
        case `message.appended`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$run$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageRun"].transition(ensureStepStartPart(e, t.data.stepIndex), {
                    kind: `append`,
                    delta: t.data.messageDelta,
                    id: t.meta?.id,
                    stepIndex: t.data.stepIndex,
                    type: `text`
                }));
        case `message.completed`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$run$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["messageRun"].transition(ensureStepStartPart(e, t.data.stepIndex), {
                    kind: `complete`,
                    stepIndex: t.data.stepIndex,
                    text: t.data.message,
                    id: t.meta?.id,
                    type: `text`
                }));
        case `result.completed`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>({
                    ...e,
                    metadata: {
                        ...e.metadata,
                        result: t.data.result
                    }
                }));
        case `turn.completed`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>({
                    ...e,
                    metadata: {
                        ...e.metadata,
                        status: `complete`
                    },
                    parts: removeStreamingToolParts(closeStreamingRuns(e.parts))
                }));
        case `turn.cancelled`:
            return updateAssistantMessage(e, t.data.turnId, (e)=>({
                    ...e,
                    metadata: {
                        ...e.metadata,
                        status: `complete`
                    },
                    parts: removeStreamingToolParts(closeStreamingRuns(e.parts))
                }));
        case `turn.failed`:
            return e.messages.find((e)=>e.role === `assistant` && e.metadata?.turnId === t.data.turnId) === void 0 ? e : updateAssistantMessage(e, t.data.turnId, (e)=>({
                    ...e,
                    metadata: {
                        ...e.metadata,
                        status: `complete`
                    },
                    parts: removeStreamingToolParts(closeStreamingRuns(e.parts))
                }));
        case `session.failed`:
            return e;
        default:
            return e;
    }
}
function closeStreamingRuns(e, t) {
    return e.map((e)=>(e.type === `text` || e.type === `reasoning`) && e.state === `streaming` && (t === void 0 || e.stepIndex === t) ? {
            ...e,
            state: `done`
        } : e);
}
function removeStreamingToolParts(e) {
    return e.filter((e)=>e.type !== `dynamic-tool` || e.state !== `input-streaming`);
}
function respondToInputRequest(e, t) {
    let n = findToolPartByApprovalId(e, t.requestId);
    if (!n) return e;
    let r = {
        id: t.requestId
    };
    t.text !== void 0 && (r.reason = t.text);
    let i = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeToolMetadata"])(n.toolMetadata, {
        eve: {
            inputResponse: t,
            kind: n.toolMetadata?.eve?.kind ?? `unknown`,
            name: n.toolMetadata?.eve?.name ?? n.toolName
        }
    });
    return updateToolPart(e, n.toolCallId, n.state === `output-available` ? {
        ...n,
        approval: {
            ...r,
            approved: !0
        },
        toolMetadata: i
    } : {
        ...toolPartIdentity(n),
        approval: r,
        state: `approval-responded`,
        toolMetadata: i
    });
}
function resolveInputRequest(e, t) {
    if (t.response !== void 0) return findToolPartByApprovalId(e, t.requestId)?.approval?.approved === void 0 ? respondToInputRequest(e, t.response) : e;
    let n = findToolPartByApprovalId(e, t.requestId);
    return n ? updateToolPart(e, n.toolCallId, {
        ...toolPartIdentity(n),
        output: {
            status: t.outcome
        },
        state: `output-available`
    }) : e;
}
function toolPartIdentity(e) {
    return {
        input: e.input,
        stepIndex: e.stepIndex,
        toolCallId: e.toolCallId,
        toolMetadata: e.toolMetadata,
        toolName: e.toolName,
        type: e.type
    };
}
function updateAssistantMessage(e, t, n) {
    let r = e.messages.find((e)=>e.role === `assistant` && e.metadata?.turnId === t) ?? createAssistantMessage(t);
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upsertMessage"])(e, n(r));
}
function createAssistantMessage(e) {
    return {
        id: `${e}:assistant`,
        metadata: {
            status: `streaming`,
            turnId: e
        },
        parts: [],
        role: `assistant`
    };
}
function ensureStepStartPart(e, t) {
    let n = e.parts.filter((e)=>e.type === `step-start`).length;
    if (n > t) return e;
    let r = t - n + 1;
    return {
        ...e,
        parts: [
            ...e.parts,
            ...Array.from({
                length: r
            }, ()=>({
                    type: `step-start`
                }))
        ]
    };
}
function upsertPart(e, t) {
    let n = e.parts.findIndex((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partKey"])(e) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partKey"])(t)), r = n === -1 ? [
        ...e.parts,
        t
    ] : [
        ...e.parts.slice(0, n),
        t,
        ...e.parts.slice(n + 1)
    ];
    return {
        ...e,
        metadata: {
            ...e.metadata,
            status: t.type === `text` && t.state === `done` ? `complete` : `streaming`
        },
        parts: r
    };
}
function upsertToolPart(e, t, n, r) {
    let i = updateToolPart(e, r.toolCallId, r);
    return i === e ? updateAssistantMessage(e, t, (e)=>upsertPart(ensureStepStartPart(e, n), r)) : i;
}
function updateToolPart(e, t, n) {
    let r = e.messages.find((e)=>e.role === `assistant` && e.parts.some((e)=>e.type === `dynamic-tool` && e.toolCallId === t));
    return r ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upsertMessage"])(e, upsertPart(r, n)) : e;
}
function replaceToolPart(e, t) {
    let n = e.messages.find((e)=>e.parts.some((e)=>e.type === `dynamic-tool` && e.toolCallId === t.toolCallId));
    return n === void 0 ? e : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["upsertMessage"])(e, {
        ...n,
        parts: n.parts.map((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partKey"])(e) === (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$reducer$2d$primitives$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["partKey"])(t) ? t : e)
    });
}
function completeAuthorization(e, t) {
    let n = findPendingAuthorizationPart(e, t.data.name, t.data.attemptId), r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$authorization$2d$message$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createAuthorizationCompletedPart"])(t, n);
    return updateAssistantMessage(e, n?.turnId ?? t.data.turnId, (e)=>upsertPart(ensureStepStartPart(e, r.stepIndex), r));
}
function findToolPart(e, t) {
    for (let n of e.messages)for (let e of n.parts)if (e.type === `dynamic-tool` && e.toolCallId === t) return e;
}
function isSettledToolPart(e) {
    return e.state === `output-denied` || e.state === `output-error` || e.state === `output-available` && e.partial !== !0;
}
function findPendingAuthorizationPart(e, t, n) {
    for(let r = e.messages.length - 1; r >= 0; --r){
        let i = e.messages[r];
        if (i?.role === `assistant`) for(let e = i.parts.length - 1; e >= 0; --e){
            let r = i.parts[e];
            if (r?.type === `authorization` && r.state === `required` && (n === void 0 ? r.attemptId === void 0 && r.name === t : r.attemptId === n)) return r;
        }
    }
}
function findToolPartByApprovalId(e, t) {
    for (let n of e.messages)for (let e of n.parts)if (e.type === `dynamic-tool` && e.approval?.id === t) return e;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-response.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MessageResponse",
    ()=>MessageResponse,
    "consumeMessageResponse",
    ()=>consumeMessageResponse,
    "getMessageResponseDeliveryId",
    ()=>getMessageResponseDeliveryId
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$output$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/output-schema.js [app-ssr] (ecmascript)");
;
;
;
const consumeResponse = Symbol(`consumeMessageResponse`), acceptedDeliveryId = Symbol(`acceptedDeliveryId`);
var MessageResponse = class {
    sessionId;
    [acceptedDeliveryId];
    #e;
    #t;
    #n = !1;
    #r;
    #i = !1;
    #a = Promise.withResolvers();
    constructor(e){
        this.#e = e.cancelTurn, this.sessionId = e.sessionId, this[acceptedDeliveryId] = e.deliveryId, this.#r = e.createStream;
    }
    cancel() {
        if (this.#i) return Promise.resolve({
            status: `no_active_turn`
        });
        if (this.#t !== void 0) return this.#t;
        let e = this.#a.promise.then((e)=>e === void 0 ? {
                status: `no_active_turn`
            } : this.#e(e));
        return this.#t = e, e.catch(()=>{
            !this.#i && this.#t === e && (this.#t = void 0);
        }), e;
    }
    async result() {
        let e = [];
        for await (let t of this)e.push(t);
        let t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["summarizeTurnEvents"])(e);
        return {
            data: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$output$2d$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["extractCompletedResult"])(e),
            events: e,
            inputRequests: t.inputRequests,
            message: t.message,
            sessionId: this.sessionId,
            status: t.status
        };
    }
    [Symbol.asyncIterator]() {
        return this[consumeResponse]();
    }
    [consumeResponse](e) {
        if (this.#n) throw Error(`MessageResponse has already been consumed.`);
        return this.#n = !0, this.#o(e);
    }
    async *#o(e) {
        try {
            for await (let t of this.#r(e))t.type === `turn.started` ? this.#a.resolve(t.data.turnId) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCurrentTurnBoundaryEvent"])(t) && (this.#i = !0, this.#a.resolve(void 0)), yield t;
        } finally{
            this.#a.resolve(void 0);
        }
    }
};
function getMessageResponseDeliveryId(e) {
    return e[acceptedDeliveryId];
}
function consumeMessageResponse(e, t) {
    return e[consumeResponse](t);
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-run-parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "messageRun",
    ()=>messageRun
]);
function transition(e, t) {
    let n = e.parts.findLastIndex((e)=>e.type === t.type && e.stepIndex === t.stepIndex), r = n === -1 ? void 0 : e.parts[n];
    if (t.kind === `append` && !t.delta) return e;
    let i = r?.state === `streaming` ? r : void 0, a = {
        id: i?.id ?? t.id ?? `${e.id}:${t.type}:${e.parts.length}`,
        state: t.kind === `append` ? `streaming` : `done`,
        stepIndex: t.stepIndex,
        text: t.kind === `append` ? (i?.text ?? ``) + t.delta : t.text,
        type: t.type
    }, o = i ? [
        ...e.parts.slice(0, n),
        a,
        ...e.parts.slice(n + 1)
    ] : [
        ...e.parts,
        a
    ];
    return {
        ...e,
        metadata: {
            ...e.metadata,
            status: t.type === `text` && a.state === `done` ? `complete` : `streaming`
        },
        parts: o
    };
}
const messageRun = {
    transition
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-task-parts.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createSettledTaskPart",
    ()=>createSettledTaskPart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-action-parts.js [app-ssr] (ecmascript)");
;
function createSettledTaskPart(e, t) {
    let n = {
        approval: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$action$2d$parts$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["approvedApproval"])(e),
        input: e.input,
        stepIndex: e.stepIndex,
        toolCallId: e.toolCallId,
        toolMetadata: e.toolMetadata,
        toolName: e.toolName,
        type: `dynamic-tool`
    };
    switch(t.data.status){
        case `completed`:
            return {
                ...n,
                output: t.data.output,
                state: `output-available`
            };
        case `failed`:
            return {
                ...n,
                errorText: t.data.error?.message ?? `Task failed.`,
                state: `output-error`
            };
        case `cancelled`:
            return {
                ...n,
                errorText: `Task was cancelled.`,
                state: `output-error`
            };
    }
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/ndjson.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isStreamDisconnectError",
    ()=>isStreamDisconnectError,
    "readNdjsonStream",
    ()=>readNdjsonStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2d$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message-version.js [app-ssr] (ecmascript)");
;
;
function isStreamDisconnectError(e) {
    if (e instanceof DOMException) return e.name === `AbortError`;
    if (!(e instanceof Error)) return !1;
    let t = `code` in e && typeof e.code == `string` ? e.code : void 0;
    return e.name === `AbortError` || e.message === `terminated` || t === `UND_ERR_SOCKET` || e instanceof TypeError && /^(?:failed to fetch|fetch failed)$/i.test(e.message) || /abort|cancel|disconnect|premature close|socket|terminated/i.test(e.message);
}
async function* readNdjsonStream(e, t) {
    let n = e.getReader(), r = new TextDecoder, i = ``, a = !1, abort = ()=>{
        n.cancel().catch(()=>{});
    };
    t.signal?.addEventListener(`abort`, abort, {
        once: !0
    });
    try {
        for(;;){
            t.signal?.throwIfAborted();
            let e = await readWithIdleTimeout(n, t?.idleTimeoutMs);
            if (t.signal?.throwIfAborted(), e.done) {
                a = !0, i += r.decode();
                break;
            }
            e.value && (i += r.decode(e.value, {
                stream: !0
            }));
            let o = i.indexOf(`
`);
            for(; o !== -1;){
                let e = i.slice(0, o).trim();
                if (i = i.slice(o + 1), e.length > 0) {
                    let n = JSON.parse(e);
                    t.controlVersion === `1` && isLeaseEndedControl(n) ? t.onLeaseEnded?.() : yield parseMessageStreamEvent(n, t.streamVersion);
                }
                o = i.indexOf(`
`);
            }
        }
        let e = i.trim();
        if (e.length > 0) {
            let n = JSON.parse(e);
            t.controlVersion === `1` && isLeaseEndedControl(n) ? t.onLeaseEnded?.() : yield parseMessageStreamEvent(n, t.streamVersion);
        }
    } finally{
        t.signal?.removeEventListener(`abort`, abort), a || n.cancel().catch(()=>{}), n.releaseLock();
    }
}
function isLeaseEndedControl(e) {
    if (typeof e != `object` || !e) return !1;
    let t = e;
    return t.$eve === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_STREAM_LEASE_ENDED_CONTROL"].$eve && t.version === __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_STREAM_LEASE_ENDED_CONTROL"].version;
}
function parseMessageStreamEvent(e, t) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2d$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["normalizeMessageStreamEvent"])(t, e);
}
async function readWithIdleTimeout(e, t) {
    let n;
    try {
        return t === void 0 ? await e.read() : await Promise.race([
            e.read(),
            new Promise((e, r)=>{
                n = setTimeout(()=>r(new DOMException(`Session stream was idle.`, `AbortError`)), t);
            })
        ]);
    } catch (e) {
        throw e instanceof TypeError ? Error(`Session stream disconnected.`, {
            cause: e
        }) : e;
    } finally{
        n !== void 0 && clearTimeout(n);
    }
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/open-stream.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "followStreamIterable",
    ()=>followStreamIterable,
    "openStreamBody",
    ()=>openStreamBody,
    "sleep",
    ()=>sleep
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/client-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$ndjson$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/ndjson.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$stream$2d$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/stream-version.js [app-ssr] (ecmascript)");
;
;
;
;
;
const DEFAULT_STREAM_RECONNECT_POLICY = {
    retryableErrorStatuses: new Set([
        404,
        409,
        425,
        500,
        502,
        503,
        504
    ]),
    streamIdleReconnectPolicy: {
        baseDelayMs: 250,
        maxAttempts: 5,
        maxDelayMs: 4e3
    },
    streamOpenReconnectPolicy: {
        baseDelayMs: 250,
        maxAttempts: 12,
        maxDelayMs: 5e3
    }
}, NO_STREAM_RECONNECT_POLICY = {
    ...DEFAULT_STREAM_RECONNECT_POLICY,
    streamIdleReconnectPolicy: {
        ...DEFAULT_STREAM_RECONNECT_POLICY.streamIdleReconnectPolicy,
        maxAttempts: 0
    },
    streamOpenReconnectPolicy: {
        ...DEFAULT_STREAM_RECONNECT_POLICY.streamOpenReconnectPolicy,
        maxAttempts: 1
    }
};
function resolveRetryPolicy(e, t) {
    return {
        ...t,
        ...e
    };
}
function resolveStreamReconnectPolicy(e, t = !1) {
    if (e && `reconnect` in e && e.reconnect === !1) return NO_STREAM_RECONNECT_POLICY;
    let n = e;
    return {
        retryableErrorStatuses: n?.retryableErrorStatuses ? new Set(n.retryableErrorStatuses) : DEFAULT_STREAM_RECONNECT_POLICY.retryableErrorStatuses,
        streamIdleReconnectPolicy: resolveRetryPolicy(n?.streamIdleReconnectPolicy, {
            ...DEFAULT_STREAM_RECONNECT_POLICY.streamIdleReconnectPolicy,
            maxAttempts: t ? 1 / 0 : DEFAULT_STREAM_RECONNECT_POLICY.streamIdleReconnectPolicy.maxAttempts
        }),
        streamOpenReconnectPolicy: resolveRetryPolicy(n?.streamOpenReconnectPolicy, DEFAULT_STREAM_RECONNECT_POLICY.streamOpenReconnectPolicy)
    };
}
async function* followStreamIterable(e) {
    if (e.follow === !1 && e.startIndex < 0) throw Error(`stream({ follow: false }) requires a nonnegative startIndex; a tail-relative cursor cannot be bounded.`);
    let resolvePolicy = ()=>resolveStreamReconnectPolicy(e.resolveReconnectPolicy === void 0 ? e.streamReconnectPolicy : e.resolveReconnectPolicy(), e.keepAlive), t = resolvePolicy(), n = t.streamIdleReconnectPolicy, r = e.startIndex, i = n.baseDelayMs, a = 0, o = !0, s, c = !1;
    for(;;){
        t = resolvePolicy(), n = t.streamIdleReconnectPolicy;
        let l;
        try {
            l = await openStreamBody({
                ...e,
                retryPolicy: t,
                startIndex: r,
                requestTailIndex: (e.follow === !1 || e.onCaughtUp !== void 0) && s === void 0
            });
        } catch (t) {
            if (e.signal?.aborted) return;
            throw t;
        }
        if ((e.follow === !1 || e.onCaughtUp !== void 0) && s === void 0 && (s = l.tailIndex, s === void 0)) throw l.close(), Error(`stream({ follow: false }) requires the server to report the ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_STREAM_TAIL_INDEX_HEADER"]} header. The agent may be running an older eve version.`);
        if (!c && s !== void 0 && r > s && (c = !0, e.onCaughtUp?.()), e.follow === !1 && s !== void 0 && r > s) {
            l.close();
            return;
        }
        let u = !1, d = !1;
        try {
            for await (let t of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$ndjson$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readNdjsonStream"])(l.body, {
                signal: e.signal,
                controlVersion: l.controlVersion,
                idleTimeoutMs: e.streamReadIdleTimeoutMs ?? 15e3,
                onLeaseEnded: ()=>{
                    d = !0;
                },
                streamVersion: l.streamVersion
            }))if (r += 1, u = !0, i = n.baseDelayMs, a = 0, yield t, !c && s !== void 0 && r > s && (c = !0, e.onCaughtUp?.()), e.follow === !1 && s !== void 0 && r > s) return;
        } catch (e) {
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$ndjson$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStreamDisconnectError"])(e)) throw e;
        } finally{
            l.close();
        }
        if (n = resolvePolicy().streamIdleReconnectPolicy, e.signal?.aborted || e.startIndex < 0 || n.maxAttempts === 0) return;
        if (!d) {
            if (!u && !o && (a += 1) >= n.maxAttempts || (o = !1, await sleep(i, e.signal), e.signal?.aborted)) return;
            i = Math.min(i * 2, n.maxDelayMs);
        }
    }
}
async function openStreamBody(e) {
    let t = e.retryPolicy ?? resolveStreamReconnectPolicy(e.streamReconnectPolicy, e.keepAlive), n = t.streamOpenReconnectPolicy, r, i, a, o = n.baseDelayMs, s = e.startIndex >= 0 && t.streamIdleReconnectPolicy.maxAttempts > 0 ? __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_STREAM_CONTROL_VERSION"] : void 0, c = {};
    s !== void 0 && (c[__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_STREAM_CONTROL_VERSION_QUERY"]] = s), e.startIndex !== 0 && (c.startIndex = String(e.startIndex)), e.requestTailIndex === !0 && (c.includeTailIndex = `1`);
    for(let l = 0; l < n.maxAttempts; l += 1){
        e.signal?.throwIfAborted();
        let u = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClientUrl"])(e.host, e.path, Object.keys(c).length > 0 ? c : void 0), d = await e.resolveHeaders();
        e.signal?.throwIfAborted();
        let f = new AbortController, p = e.signal ? AbortSignal.any([
            e.signal,
            f.signal
        ]) : f.signal, m;
        try {
            m = await fetch(u, {
                cache: `no-store`,
                headers: d,
                redirect: e.redirect,
                signal: p
            });
        } catch (t) {
            if (e.signal?.aborted || !(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$ndjson$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isStreamDisconnectError"])(t) || l === n.maxAttempts - 1) throw t;
            await sleep(o, e.signal), o = Math.min(o * 2, n.maxDelayMs);
            continue;
        }
        if (m.ok) {
            if (!m.body) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"](m.status, `Response body is null.`, m.headers);
            let e = !1;
            return {
                body: m.body,
                close: ()=>{
                    e || (e = !0, m.body?.cancel().catch(()=>{}), f.abort());
                },
                controlVersion: s,
                streamVersion: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$stream$2d$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["readMessageStreamVersion"])(m.headers),
                tailIndex: parseTailIndexHeader(m.headers)
            };
        }
        if (r = m.status, i = await m.text(), a = m.headers, !t.retryableErrorStatuses.has(m.status)) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"](m.status, i, m.headers);
        l < n.maxAttempts - 1 && (await sleep(o, e.signal), o = Math.min(o * 2, n.maxDelayMs));
    }
    throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"](r ?? 0, i ?? `Failed to open message stream.`, a);
}
function parseTailIndexHeader(e) {
    let t = e.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_STREAM_TAIL_INDEX_HEADER"]);
    if (t === null || !/^-?\d+$/.test(t)) return;
    let n = Number(t);
    return Number.isSafeInteger(n) ? n : void 0;
}
async function sleep(e, t) {
    t?.aborted || await new Promise((n)=>{
        let onAbort = ()=>{
            clearTimeout(r), n();
        }, r = setTimeout(()=>{
            t?.removeEventListener(`abort`, onAbort), n();
        }, e);
        t?.addEventListener(`abort`, onAbort, {
            once: !0
        });
    });
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/optimistic-message-submissions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "OptimisticMessageSubmissions",
    ()=>OptimisticMessageSubmissions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/eve-agent-store-helpers.js [app-ssr] (ecmascript)");
;
var OptimisticMessageSubmissions = class {
    #e;
    #t;
    #n = [];
    constructor(e, t){
        this.#t = e, this.#e = t;
    }
    reset() {
        this.#n = [];
    }
    submit(e, t, n) {
        if (e.message === void 0) return;
        let r = {
            createdAt: Date.now(),
            eventStartIndex: t,
            id: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createSubmissionId"])(),
            message: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["summarizeUserContent"])(e.message),
            turnId: n,
            requiresDeliveryId: !0
        };
        if (this.#n = [
            ...this.#n,
            r
        ], this.#e) for (let e of this.#t)e.append({
            data: {
                createdAt: r.createdAt,
                message: r.message,
                submissionId: r.id,
                turnId: n
            },
            type: `client.message.submitted`
        });
        return r.id;
    }
    resubmit(e, t) {
        let n = this.#n.find((t)=>t.id === e), r = t.message === void 0 ? void 0 : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$eve$2d$agent$2d$store$2d$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["summarizeUserContent"])(t.message);
        return n?.message === r ? e : (n !== void 0 && this.#a([
            n.id
        ]), this.submit(t, n?.eventStartIndex ?? 0, n?.turnId));
    }
    apply(e) {
        if (e.type !== `message.received`) {
            for (let t of this.#t)t.append(e);
            return;
        }
        let t = this.#r(e);
        if (t.length === 0) {
            for (let t of this.#t)t.append(e);
            return;
        }
        return this.#i(t, e, !1);
    }
    correlate(e, t, n) {
        if (e === void 0) return;
        this.#n = this.#n.map((n)=>n.id === e ? {
                ...n,
                deliveryId: t,
                requiresDeliveryId: t !== void 0
            } : n);
        let r = this.#n.find((t)=>t.id === e);
        if (r !== void 0) for (let t of n.slice(r.eventStartIndex)){
            if (t.type !== `message.received`) continue;
            let n = this.#r(t);
            if (n.some((t)=>t.id === e)) return this.#i(n, t, !0);
        }
    }
    fail(e, t) {
        let n = t === void 0 ? this.#n[0] : this.#n.find((e)=>e.id === t);
        if (n !== void 0) {
            this.#n = this.#n.filter((e)=>e.id !== n.id);
            for (let t of this.#t)t.replace((e)=>e.type === `client.message.submitted` && e.data.submissionId === n.id, {
                data: {
                    createdAt: n.createdAt,
                    error: {
                        message: e.message
                    },
                    message: n.message,
                    submissionId: n.id,
                    turnId: n.turnId
                },
                type: `client.message.failed`
            });
        }
    }
    failAll(e) {
        for (let t of this.#n)this.fail(e, t.id);
    }
    #r(e) {
        return this.#n.filter((t)=>t.deliveryId === void 0 ? !t.requiresDeliveryId : e.meta.deliveryIds?.includes(t.deliveryId) === !0);
    }
    #i(e, t, n) {
        let r = e.map((e)=>e.id);
        if (this.#a(r), !n) for (let e of this.#t)e.append(t);
        return {
            alreadyProjected: n,
            event: t,
            ids: r
        };
    }
    #a(e) {
        let t = new Set(e);
        this.#n = this.#n.filter((e)=>!t.has(e.id));
        for (let e of this.#t)e.remove((e)=>e.type === `client.message.submitted` && t.has(e.data.submissionId));
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/output-schema.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "extractCompletedResult",
    ()=>extractCompletedResult
]);
function extractCompletedResult(e) {
    let t;
    for (let n of e)isResultCompletedEvent(n) && (t = n.data.result);
    return t;
}
function isResultCompletedEvent(e) {
    return e.type === `result.completed`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-controls.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cancelClientSession",
    ()=>cancelClientSession,
    "clearClientSession",
    ()=>clearClientSession,
    "compactClientSession",
    ()=>compactClientSession,
    "resetClientSession",
    ()=>resetClientSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/routes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/client-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$cancel$2d$turn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/cancel-turn.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$clear$2d$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/clear-session.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$compact$2d$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/compact-session.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$reset$2d$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/reset-session.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
async function cancelClientSession(e) {
    let { signal: t, ...n } = e.options ?? {}, { payload: r, response: i } = await postJson({
        body: n,
        context: e.context,
        operation: `Cancel`,
        path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEveSessionCancelRoutePath"])(e.sessionId),
        signal: t
    }), a = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$cancel$2d$turn$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CancelTurnResponseSchema"].safeParse(r);
    if (!a.success || a.data.status === `accepted` && a.data.sessionId !== e.sessionId) throw Error(`Cancel route returned an invalid response (${i.status}).`);
    return a.data.status === `accepted` ? {
        sessionId: a.data.sessionId,
        status: `accepted`
    } : {
        status: `no_active_turn`
    };
}
async function clearClientSession(e) {
    let { payload: t } = await postJson({
        context: e.context,
        operation: `Clear`,
        path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEveSessionClearRoutePath"])(e.sessionId)
    }), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$clear$2d$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClearResponseSchema"].safeParse(t);
    if (!n.success || n.data.status === `accepted` && n.data.sessionId !== e.sessionId) throw Error(`Clear route returned an invalid response.`);
    return n.data.status === `accepted` ? {
        sessionId: n.data.sessionId,
        status: `accepted`
    } : {
        status: `no_active_session`
    };
}
async function compactClientSession(e) {
    let { payload: t } = await postJson({
        context: e.context,
        operation: `Compact`,
        path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEveSessionCompactRoutePath"])(e.sessionId)
    }), n = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$compact$2d$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CompactResponseSchema"].safeParse(t);
    if (!n.success || n.data.status === `accepted` && n.data.sessionId !== e.sessionId) throw Error(`Compact route returned an invalid response.`);
    return n.data.status === `accepted` ? {
        sessionId: n.data.sessionId,
        status: `accepted`
    } : {
        status: `no_active_session`
    };
}
async function resetClientSession(e) {
    let { signal: t, ...n } = e.options ?? {}, { payload: r } = await postJson({
        body: n,
        context: e.context,
        operation: `Reset`,
        path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEveSessionResetRoutePath"])(e.sessionId),
        signal: t
    }), i = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$reset$2d$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ResetResponseSchema"].safeParse(r);
    if (!i.success || i.data.status === `reset` && i.data.previousSessionId !== e.sessionId) throw Error(`Reset route returned an invalid response.`);
    return i.data.status === `reset` ? {
        previousSessionId: i.data.previousSessionId,
        status: `reset`
    } : {
        status: `no_active_session`
    };
}
async function postJson(e) {
    let t = await e.context.resolveHeaders();
    t.set(`content-type`, `application/json`);
    let n = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClientUrl"])(e.context.host, e.path), withRedirectPolicy({
        body: e.body === void 0 ? void 0 : JSON.stringify(e.body),
        headers: t,
        method: `POST`,
        signal: e.signal
    }, e.context.redirect)), r = await n.text();
    if (!n.ok) throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"](n.status, r, n.headers);
    try {
        return {
            payload: JSON.parse(r),
            response: n
        };
    } catch  {
        throw Error(`${e.operation} route returned invalid JSON (${n.status}).`);
    }
}
function withRedirectPolicy(e, t) {
    return t === void 0 ? e : {
        ...e,
        redirect: t
    };
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-event-stream.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SessionEventReader",
    ()=>SessionEventReader,
    "SessionEventStream",
    ()=>SessionEventStream
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session.js [app-ssr] (ecmascript)");
;
var SessionEventStream = class {
    #e = new AbortController;
    #t = new Set;
    #n = Promise.withResolvers();
    caughtUp = this.#n.promise;
    #r = !1;
    #i;
    #a;
    #o;
    constructor(e, t){
        this.setOptions(t), this.caughtUp.catch(()=>{}), t.catchUp || this.#n.resolve(), (async ()=>{
            try {
                for await (let n of (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followClientSession"])(e, {
                    signal: this.#e.signal,
                    resolveHeaders: ()=>this.#a,
                    resolveReconnectPolicy: ()=>this.#o,
                    startIndex: t.startIndex,
                    onCaughtUp: t.catchUp ? ()=>this.#n.resolve() : void 0
                })){
                    if (this.#e.signal.aborted) return;
                    t.onEvent(n);
                    for (let e of this.#t)e.push(n);
                    if (n.type === `session.completed` || n.type === `session.failed`) break;
                }
                this.#n.resolve(), this.#s();
            } catch (e) {
                this.#n.reject(e), this.#s(e), this.#e.signal.aborted || t.onError(e);
            }
        })();
    }
    subscribe(e) {
        let t = new SessionEventReader(()=>this.#t.delete(t), e);
        return this.#r ? t.end(this.#i) : this.#t.add(t), t;
    }
    get ended() {
        return this.#r;
    }
    setOptions(e) {
        `headers` in e && (this.#a = e.headers), `streamReconnectPolicy` in e && (this.#o = e.streamReconnectPolicy);
    }
    close() {
        let e = new DOMException(`Session stream was detached.`, `AbortError`);
        this.#e.abort(e), this.#n.reject(e), this.#s(e);
    }
    #s(e) {
        if (!this.#r) {
            this.#r = !0, this.#i = e;
            for (let t of this.#t)t.end(e);
        }
    }
}, SessionEventReader = class {
    #e = [];
    #t = Promise.withResolvers();
    #n = !1;
    #r;
    #i;
    constructor(e, t){
        let abort = ()=>this.end(t?.reason);
        t?.addEventListener(`abort`, abort, {
            once: !0
        }), this.#i = ()=>{
            t?.removeEventListener(`abort`, abort), e();
        }, t?.aborted && abort();
    }
    push(e) {
        this.#n || (this.#e.push(e), this.#t.resolve());
    }
    end(e) {
        this.#n || (this.#n = !0, this.#r = e, this.#t.resolve());
    }
    [Symbol.dispose]() {
        this.end(), this.#e = [], this.#i();
    }
    discard() {
        this.#e = [];
    }
    async *[Symbol.asyncIterator]() {
        for(;;){
            for(; this.#e.length > 0;)yield this.#e.shift();
            if (this.#n) {
                if (this.#r !== void 0) throw this.#r;
                return;
            }
            this.#t = Promise.withResolvers(), await this.#t.promise;
        }
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-turn-dispatch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dispatchSessionTurn",
    ()=>dispatchSessionTurn
]);
async function dispatchSessionTurn(e) {
    let { client: t, session: n, turn: r, beforeSend: i } = e;
    if (n === void 0) {
        if (t === void 0) throw Error(`An external eve session is required before sending.`);
        if (r.message === void 0) throw Error(`Cannot answer an input request before the session starts.`);
        let e = await t.sessions.create({
            ...r,
            message: r.message
        });
        return r.signal?.throwIfAborted(), {
            ...e,
            created: !0
        };
    }
    if (i?.(), r.inputResponses === void 0) {
        let { message: e, ...t } = r;
        return {
            session: n,
            response: await n.send(e, t),
            created: !1
        };
    }
    let { inputResponses: a, ...o } = r;
    return {
        session: n,
        response: await n.respond(a, o),
        created: !1
    };
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-utils.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TurnSegment",
    ()=>TurnSegment,
    "authorizationKey",
    ()=>authorizationKey,
    "collectTurnEvents",
    ()=>collectTurnEvents,
    "endsTurnSegment",
    ()=>endsTurnSegment,
    "summarizeTurnEvents",
    ()=>summarizeTurnEvents
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)");
;
function summarizeTurnEvents(e) {
    let t = new TurnSegment, n, r, i;
    for (let a of e)t.observe(a) && (n = a), (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isTurnFailureEvent"])(a) && (r = a), isFinalMessageCompleted(a) && (i = a.data.message ?? void 0), a.type === `turn.waiting` && (i = void 0);
    return {
        boundary: n,
        failure: r,
        inputRequests: t.inputRequests,
        message: i,
        pendingAuthorizations: t.pendingAuthorizations,
        status: summarizeBoundaryStatus(n)
    };
}
function summarizeBoundaryStatus(e) {
    return e?.type === `session.waiting` || e?.type === `turn.waiting` ? `waiting` : e?.type === `session.failed` ? `failed` : `completed`;
}
async function collectTurnEvents(e) {
    let t = [], n = new TurnSegment;
    for await (let r of e)if (t.push(r), n.observe(r)) break;
    return t;
}
function endsTurnSegment(e, t) {
    return e.type === `turn.waiting` ? t.requests || e.data.on === `input` && !t.callbacks : (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isCurrentTurnBoundaryEvent"])(e) && (e.type !== `session.waiting` || !t.callbacks);
}
var TurnSegment = class {
    #e = new Map;
    #t;
    #n = new Map;
    constructor(e = {}){
        this.#t = e.followCallbacks === !0;
    }
    get inputRequests() {
        return [
            ...this.#n.values()
        ];
    }
    get pendingAuthorizations() {
        return [
            ...this.#e.values()
        ];
    }
    observe(e) {
        switch(e.type){
            case `input.requested`:
                for (let t of e.data.requests)this.#n.set(t.requestId, t);
                break;
            case `approval.settled`:
                this.#n.delete(e.data.requestId);
                break;
            case `input.resolved`:
                for (let t of e.data.resolutions)this.#n.delete(t.requestId);
                break;
            case `authorization.required`:
                this.#e.set(authorizationKey(e.data), e.data);
                break;
            case `authorization.completed`:
                this.#e.delete(authorizationKey(e.data));
        }
        return endsTurnSegment(e, {
            callbacks: this.#t && [
                ...this.#e.values()
            ].some((e)=>e.webhookUrl !== void 0),
            requests: this.#n.size > 0
        });
    }
};
function isFinalMessageCompleted(e) {
    return e.type === `message.completed` && e.data.finishReason !== `tool-calls`;
}
function authorizationKey(e) {
    return e.attemptId === void 0 ? `name:${e.name}` : `attempt:${e.attemptId}`;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientSession",
    ()=>ClientSession,
    "followClientSession",
    ()=>followClientSession
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/routes.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-utils.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$open$2d$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/open-stream.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/client-error.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/url.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$response$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/message-response.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/agent-session.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$controls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session-controls.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$tools$2f$schema$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/tools/schema.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$tools$2f$schema$2d$emission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/tools/schema-emission.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
const followSession = Symbol(`followClientSession`);
var ClientSession = class ClientSession {
    #e;
    #t;
    constructor(e, t){
        this.#e = e, this.#t = t;
    }
    static async create(e, t) {
        let n = await postTurn(e, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_SESSION_ROUTE_PATH"], t, !0), { sessionId: r } = await readAcceptedMessage(n), i = new ClientSession(e, {
            sessionId: r,
            streamIndex: 0
        });
        return {
            response: i.#r(n, t, 0),
            session: i
        };
    }
    static async prewarm(e, t = {}) {
        let { sessionId: n } = await readAcceptedMessage(await postCreateSession(e, t));
        return new ClientSession(e, {
            sessionId: n,
            streamIndex: 0
        });
    }
    get state() {
        return this.#t;
    }
    async snapshot(e) {
        e?.signal?.throwIfAborted();
        let t = [];
        for await (let n of this.#s({
            follow: !1,
            signal: e?.signal,
            startIndex: 0
        }))t.push(n);
        return e?.signal?.throwIfAborted(), {
            events: t,
            session: {
                sessionId: this.#t.sessionId,
                streamIndex: t.length
            }
        };
    }
    async send(e, t = {}) {
        return await this.#n({
            ...t,
            message: e
        }, !0);
    }
    async respond(e, t = {}) {
        if (e.length === 0) throw Error(`ClientSession.respond() requires at least one input response.`);
        return await this.#n({
            ...t,
            inputResponses: e
        }, !1);
    }
    async #n(e, t) {
        let n = this.#t.streamIndex, r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEveSessionRoutePath"])(this.#t.sessionId), i = t ? await postSessionSend(this.#e, r, e) : await postTurn(this.#e, r, e, !1), { sessionId: a, deliveryId: o } = await readAcceptedMessage(i, this.#t.sessionId);
        if (a !== this.#t.sessionId) throw Error(`Message route returned a different session id.`);
        if (e.message !== void 0 && o === void 0) throw Error(`Message route did not return a delivery id. Update the server before sending with this client.`);
        return this.#r(i, e, n, e.message === void 0 ? void 0 : o);
    }
    async cancel(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$controls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cancelClientSession"])({
            context: this.#e,
            options: e,
            sessionId: this.#t.sessionId
        });
    }
    async clear() {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$controls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearClientSession"])({
            context: this.#e,
            sessionId: this.#t.sessionId
        });
    }
    async compact() {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$controls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["compactClientSession"])({
            context: this.#e,
            sessionId: this.#t.sessionId
        });
    }
    async reset(e) {
        return await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$controls$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetClientSession"])({
            context: this.#e,
            options: e,
            sessionId: this.#t.sessionId
        });
    }
    stream(e) {
        if (e?.follow === !1 && (e.startIndex ?? this.#t.streamIndex) < 0) throw Error(`stream({ follow: false }) requires a nonnegative startIndex; a tail-relative cursor cannot be bounded.`);
        return this.#a(e);
    }
    agent(e) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$agent$2d$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientAgentSession"](this.#e, e);
    }
    [followSession](e) {
        return this.#a({
            ...e,
            keepAlive: !0
        });
    }
    #r(e, t, n, r) {
        return e.body?.cancel().catch(()=>{}), new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$message$2d$response$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["MessageResponse"]({
            cancelTurn: async (e)=>await this.cancel({
                    turnId: e
                }),
            createStream: (e)=>this.#i(n, t, r, e),
            deliveryId: r,
            sessionId: this.#t.sessionId
        });
    }
    async *#i(e, t, n, r) {
        let i = 0, a = n === void 0, o = !1, s = new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2d$utils$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TurnSegment"]({
            followCallbacks: !0
        });
        try {
            for await (let c of r ?? this.#s({
                headers: t.headers,
                keepAlive: !0,
                signal: t.signal,
                startIndex: e,
                streamReconnectPolicy: t.streamReconnectPolicy
            })){
                if (i += 1, n !== void 0) {
                    let e = c.meta?.deliveryIds?.includes(n) === !0, t = c.type === `session.failed` || c.type === `session.completed`;
                    if (!e && t && (!a || c.type === `session.completed`)) throw Error(`The session ended before the accepted message reached its turn boundary.`);
                    if (!a && !e || !t && c.meta?.deliveryIds !== void 0 && !e) continue;
                    a = !0;
                }
                if (o = s.observe(c), yield c, o) break;
            }
            if (n !== void 0 && !o && !t.signal?.aborted) throw Error(`The response stream ended before the accepted message reached its turn boundary.`);
        } finally{
            this.#o(e + i);
        }
    }
    async *#a(e) {
        let t = e?.startIndex ?? this.#t.streamIndex, n = 0;
        for await (let r of this.#s({
            follow: e?.follow,
            headers: e?.headers,
            keepAlive: e?.keepAlive,
            onCaughtUp: e?.onCaughtUp,
            resolveHeaders: e?.resolveHeaders,
            resolveReconnectPolicy: e?.resolveReconnectPolicy,
            signal: e?.signal,
            startIndex: t,
            streamReconnectPolicy: e?.streamReconnectPolicy
        }))n += 1, t >= 0 && this.#o(t + n), yield r;
    }
    #o(e) {
        this.#t = {
            sessionId: this.#t.sessionId,
            streamIndex: Math.max(this.#t.streamIndex, e)
        };
    }
    #s(e) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$open$2d$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["followStreamIterable"])({
            onCaughtUp: e.onCaughtUp,
            follow: e.follow,
            host: this.#e.host,
            keepAlive: e.keepAlive,
            resolveHeaders: ()=>this.#e.resolveHeaders(e.resolveHeaders?.() ?? e.headers),
            path: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createEveSessionStreamRoutePath"])(this.#t.sessionId),
            redirect: this.#e.redirect,
            signal: e.signal,
            startIndex: e.startIndex,
            streamReconnectPolicy: e.streamReconnectPolicy,
            resolveReconnectPolicy: e.resolveReconnectPolicy
        });
    }
};
function followClientSession(e, t) {
    return e[followSession](t);
}
async function postSessionSend(e, t, n) {
    let r = Date.now() + 2e4, i = 250;
    for(;;){
        try {
            return await postTurn(e, t, n, !1);
        } catch (e) {
            if (!isSessionNotReady(e)) throw e;
            let t = r - Date.now();
            if (t <= 0) throw e;
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$open$2d$stream$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["sleep"])(Math.min(i, t), n.signal);
        }
        n.signal?.throwIfAborted(), i = Math.min(i * 2, 2e3);
    }
}
async function postCreateSession(e, t) {
    let n = await e.resolveHeaders(t.headers), r = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClientUrl"])(e.host, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$routes$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_SESSION_ROUTE_PATH"]), {
        headers: n,
        method: `POST`,
        redirect: e.redirect,
        signal: t.signal ?? null
    });
    if (!r.ok) {
        let e = await r.text();
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"](r.status, e, r.headers);
    }
    return r;
}
function isSessionNotReady(e) {
    return e instanceof __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"] && e.status === 409 && e.code === `session_not_ready`;
}
async function postTurn(e, t, n, r) {
    let i = createMessageBody(n, r);
    if (i === null) throw Error(r ? `Creating a session requires a non-empty message.` : `A session turn requires a non-empty message or inputResponses.`);
    let a = await e.resolveHeaders(n.headers);
    a.set(`content-type`, `application/json`);
    let o = await fetch((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$url$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createClientUrl"])(e.host, t), {
        body: JSON.stringify(i),
        headers: a,
        method: `POST`,
        redirect: e.redirect,
        signal: n.signal ?? null
    });
    if (!o.ok) {
        let e = await o.text();
        throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$client$2d$error$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientError"](o.status, e, o.headers);
    }
    return o;
}
async function readAcceptedMessage(e, t) {
    let n = await e.json(), r = (typeof n.sessionId == `string` ? n.sessionId : void 0) ?? e.headers.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_SESSION_ID_HEADER"])?.trim() ?? t;
    if (!r) throw Error(`Message route did not return a session id.`);
    return {
        sessionId: r,
        deliveryId: typeof n.deliveryId == `string` && n.deliveryId.length > 0 ? n.deliveryId : void 0
    };
}
function createMessageBody(e, t) {
    let n = {};
    e.message !== void 0 && (n.message = e.message), e.inputResponses !== void 0 && e.inputResponses.length > 0 && (n.inputResponses = e.inputResponses), !t && e.message !== void 0 && e.turnPolicy !== void 0 && (n.turnPolicy = e.turnPolicy), e.clientContext !== void 0 && (n.clientContext = e.clientContext);
    let r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$tools$2f$schema$2d$emission$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["serializeOutputSchema"])(e.outputSchema);
    return r !== void 0 && (n.outputSchema = r), t && n.message === void 0 || n.message === void 0 && n.inputResponses === void 0 ? null : n;
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/sessions.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ClientSessions",
    ()=>ClientSessions
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/session.js [app-ssr] (ecmascript)");
;
var ClientSessions = class {
    #e;
    constructor(e){
        this.#e = e;
    }
    async create(e = {}) {
        return `message` in e ? await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientSession"].create(this.#e, e) : {
            session: await __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientSession"].prewarm(this.#e, e)
        };
    }
    attach(e, t) {
        if (e.length === 0) throw Error(`sessionId must be a non-empty string.`);
        return new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$client$2f$session$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ClientSession"](this.#e, {
            sessionId: e,
            streamIndex: t?.streamIndex ?? 0
        });
    }
};
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/stream-version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readMessageStreamVersion",
    ()=>readMessageStreamVersion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/protocol/message.js [app-ssr] (ecmascript)");
;
const supportedMessageStreamVersions = {
    21: !0,
    22: !0,
    23: !0,
    24: !0,
    25: !0,
    26: !0
};
function readMessageStreamVersion(e) {
    let t = e.get(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_STREAM_VERSION_HEADER"]);
    if (t !== null && Object.hasOwn(supportedMessageStreamVersions, t)) return t;
    throw TypeError(t === null ? `Missing ${__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$protocol$2f$message$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["EVE_STREAM_VERSION_HEADER"]} response header.` : `Unsupported message stream version: ${t}.`);
}
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VERCEL_TRUSTED_OIDC_IDP_TOKEN_HEADER",
    ()=>VERCEL_TRUSTED_OIDC_IDP_TOKEN_HEADER
]);
const VERCEL_TRUSTED_OIDC_IDP_TOKEN_HEADER = `x-vercel-trusted-oidc-idp-token`;
;
}),
"[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/client/url.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClientUrl",
    ()=>createClientUrl
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$eve$2d$route$2d$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/.pnpm/eve@0.70.0_ai@7.0.127_zod@4.5.4__chat@4.41.1_ai@7.0.127_zod@4.5.4__supports-color@10.2.2_zod@4.5.4_/node_modules/eve/dist/src/shared/eve-route-path.js [app-ssr] (ecmascript)");
;
function createClientUrl(e, t, n) {
    let r = t.indexOf(`?`), i = r === -1 ? t : t.slice(0, r), a = r === -1 ? `` : t.slice(r + 1), o = i.startsWith(`/`) ? i : `/${i}`;
    if (isAbsoluteUrl(e)) {
        let t = new URL(e), r = trimTrailingSlash(t.pathname);
        return t.pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$eve$2d$route$2d$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinEveRoutePath"])(r, o), mergeEmbeddedQuery(t.searchParams, a), mergeSearchParams(t.searchParams, n), t.hash = ``, t.toString();
    }
    let s = new URL(e, `http://eve.local`), c = trimTrailingSlash(s.pathname);
    return mergeEmbeddedQuery(s.searchParams, a), mergeSearchParams(s.searchParams, n), `${(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f2e$pnpm$2f$eve$40$0$2e$70$2e$0_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$chat$40$4$2e$41$2e$1_ai$40$7$2e$0$2e$127_zod$40$4$2e$5$2e$4_$5f$supports$2d$color$40$10$2e$2$2e$2_zod$40$4$2e$5$2e$4_$2f$node_modules$2f$eve$2f$dist$2f$src$2f$shared$2f$eve$2d$route$2d$path$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["joinEveRoutePath"])(c, o)}${formatSearch(s.searchParams)}`;
}
function mergeEmbeddedQuery(e, t) {
    if (t.length !== 0) for (let [n, r] of new URLSearchParams(t))e.append(n, r);
}
function isAbsoluteUrl(e) {
    return /^[a-z][a-z\d+\-.]*:/i.test(e);
}
function trimTrailingSlash(e) {
    return e === `/` ? `` : e.endsWith(`/`) ? e.slice(0, -1) : e;
}
function mergeSearchParams(e, t) {
    if (t !== void 0) for (let [n, r] of Object.entries(t))e.set(n, r);
}
function formatSearch(e) {
    let t = e.toString();
    return t.length === 0 ? `` : `?${t}`;
}
;
}),
];

//# sourceMappingURL=0szq_eve_dist_src_client_1ebjjdy._.js.map