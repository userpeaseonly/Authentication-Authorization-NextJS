(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_07fdd8._.js", {

"[project]/src/tanstack/api.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "login": (()=>login),
    "refreshTokenInstaance": (()=>refreshTokenInstaance),
    "verifyToken": (()=>verifyToken),
    "verifyTokenInstance": (()=>verifyTokenInstance)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/axios/lib/axios.js [app-client] (ecmascript)");
;
const BASE_URL = "http://localhost:3001";
const loginInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
const verifyTokenInstance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
const login = async (userCred)=>{
    const res = await loginInstance.post("/login", userCred, {
        withCredentials: true
    });
    return res;
};
const refreshTokenInstaance = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type": "application/json"
    }
});
const verifyToken = async (verTokenIns)=>{
    try {
        const res = await verTokenIns.get("/verify");
        console.log(res);
        return res;
    } catch (e) {
        const err = e;
        const statusCode = err.status;
        return statusCode;
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useRefresh.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useRefresh": (()=>useRefresh)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/tanstack/api.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$toolkit$2f$userSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/toolkit/userSlice.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
;
const useRefresh = ()=>{
    _s();
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"])();
    const refresh = async ()=>{
        const res = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["refreshTokenInstaance"])("/refresh", {
            withCredentials: true
        });
        const newAccessToken = res.data.accessToken;
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$toolkit$2f$userSlice$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveToken"])(newAccessToken));
        console.log(res);
    };
    return refresh;
};
_s(useRefresh, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDispatch"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/hooks/useInterceptor.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>useInterceptor)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/tanstack/api.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useRefresh.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/react-redux/dist/react-redux.mjs [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
;
;
function useInterceptor() {
    _s();
    const refresh = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"])();
    const accessToken = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"])({
        "useInterceptor.useSelector[accessToken]": (state)=>state.userSlice.accessToken
    }["useInterceptor.useSelector[accessToken]"]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useInterceptor.useEffect": ()=>{
            const regInterceptor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTokenInstance"].interceptors.request.use({
                "useInterceptor.useEffect.use[regInterceptor]": (config)=>{
                    console.log("Request Interceptor", config);
                    if (!config.headers.Authorization) {
                        config.headers.Authorization = `Bearer ${accessToken}`;
                    }
                    return config;
                }
            }["useInterceptor.useEffect.use[regInterceptor]"]);
            const resInterceptor = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTokenInstance"].interceptors.response.use({
                "useInterceptor.useEffect.use[resInterceptor]": (res)=>{
                    console.log("Response Interceptor", res);
                    return res;
                }
            }["useInterceptor.useEffect.use[resInterceptor]"], {
                "useInterceptor.useEffect.use[resInterceptor]": async (error)=>{
                    const initialReq = error.config;
                    console.log("Response Interceptor", error);
                    if (error.status === 401) {
                        const { newAccessToken } = await refresh();
                        initialReq.headers.Authorization = `Bearer ${newAccessToken}`;
                        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTokenInstance"])(initialReq);
                    }
                    return Promise.reject(error);
                }
            }["useInterceptor.useEffect.use[resInterceptor]"]);
            return ({
                "useInterceptor.useEffect": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTokenInstance"].interceptors.request.eject(regInterceptor);
                    __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTokenInstance"].interceptors.response.eject(resInterceptor);
                }
            })["useInterceptor.useEffect"];
        }
    }["useInterceptor.useEffect"], []);
    return {
        verifyTokenInstance: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyTokenInstance"]
    };
}
_s(useInterceptor, "KX/ZQq/aSJQ+7gjk7NbSbpkO5/0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useRefresh$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRefresh"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSelector"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/tanstack/queries.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "useVerifyToken": (()=>useVerifyToken)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/tanstack/api.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInterceptor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/hooks/useInterceptor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/@tanstack/react-query/build/modern/useQuery.js [app-client] (ecmascript)");
var _s = __turbopack_refresh__.signature();
;
;
;
const useVerifyToken = ()=>{
    _s();
    const { verifyTokenInstance } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInterceptor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])();
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"])({
        queryKey: [
            'token'
        ],
        queryFn: {
            "useVerifyToken.useQuery": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$api$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["verifyToken"])(verifyTokenInstance)
        }["useVerifyToken.useQuery"]
    });
    return {
        data,
        isLoading
    };
};
_s(useVerifyToken, "LMNBg9PbvA8REmeeK3P1Fq3bCFE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$hooks$2f$useInterceptor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$tanstack$2f$react$2d$query$2f$build$2f$modern$2f$useQuery$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useQuery"]
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/profile/page.tsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, k: __turbopack_refresh__, m: module, z: __turbopack_require_stub__ } = __turbopack_context__;
{
__turbopack_esm__({
    "default": (()=>ProfilePage)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$queries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/src/tanstack/queries.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_import__("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_refresh__.signature();
"use client";
;
;
;
function ProfilePage() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const { data, isLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$queries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVerifyToken"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProfilePage.useEffect": ()=>{
            if (data === 401) {
                router.push("/");
            }
        }
    }["ProfilePage.useEffect"], [
        data,
        router
    ]);
    if (isLoading) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
        children: "Loading..."
    }, void 0, false, {
        fileName: "[project]/src/app/profile/page.tsx",
        lineNumber: 16,
        columnNumber: 27
    }, this);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
            children: "Profile"
        }, void 0, false, {
            fileName: "[project]/src/app/profile/page.tsx",
            lineNumber: 20,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/profile/page.tsx",
        lineNumber: 19,
        columnNumber: 9
    }, this);
}
_s(ProfilePage, "QqnG93sbtaJAtxH2Mz9fjSkexU8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$tanstack$2f$queries$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useVerifyToken"]
    ];
});
_c = ProfilePage;
var _c;
__turbopack_refresh__.register(_c, "ProfilePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_refresh__.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/app/profile/page.tsx [app-rsc] (ecmascript, Next.js server component, client modules)": ((__turbopack_context__) => {

var { r: __turbopack_require__, f: __turbopack_module_context__, i: __turbopack_import__, s: __turbopack_esm__, v: __turbopack_export_value__, n: __turbopack_export_namespace__, c: __turbopack_cache__, M: __turbopack_modules__, l: __turbopack_load__, j: __turbopack_dynamic__, P: __turbopack_resolve_absolute_path__, U: __turbopack_relative_url__, R: __turbopack_resolve_module_id_path__, b: __turbopack_worker_blob_url__, g: global, __dirname, t: __turbopack_require_real__ } = __turbopack_context__;
{
}}),
}]);

//# sourceMappingURL=src_07fdd8._.js.map