import { Ref, App } from 'vue';

declare const idKey: unique symbol;
declare const valueKey: unique symbol;
declare const childrenKey: unique symbol;
declare const growKey: unique symbol;
/**
 * tree node
 */
interface TreeNode {
    [propName: string]: any;
    [idKey]: string;
    [valueKey]: any;
    [growKey]: boolean;
    [childrenKey]: Map<string, TreeNode>;
}
/**
 * tree接口
 */
interface Tree extends TreeNode {
    /**
    * 加入数据
    * @param args
    * @returns {boolean}
    */
    put(...args: any[]): boolean;
    /**
     * 获取内容
     * @param args
     * @returns {any}
     */
    get(...args: any[]): any | undefined;
    /**
     * 移除数据
     * @param args
     * @returns {boolean}
     */
    remove(...args: any[]): boolean;
    /**
     * 判断是否包含数据
     * @param args
     * @returns {boolean}
     */
    contains(...args: any[]): boolean;
    /**
     * 清空所以数据
     */
    clear(): void;
}
/**
 * 导出Bus
 */
declare let Bus: any;

/**
 * 更新类型
 */
declare enum UpdateType {
    /**
     * 部分替换
     */
    Part = 0,
    /**
     * 整体替换
     */
    All = 1
}

/**
 * 操作类型
 * @type {Enum}
 */
declare enum OperationType {
    /**
     * Push策略(生产历史记录)
     */
    Push = 0,
    /**
     * 替换策略(替换当前历史记录)
     */
    Replace = 1,
    /**
     * 修改策略(不影响历史记录)
     */
    Put = 2,
    /**
     * 增加策略(生成历史记录)
     */
    Append = 3,
    /**
     * 打开策略,如果不存在则打开，否则切换（生成历史记录）
     */
    Open = 4
}

/**
 * 路由配置
 */
interface RouteConfig {
    /**
     * 路径
     */
    path?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 转发路径
     */
    redirect?: string;
    /**
     * 组件
     */
    component?: any;
    /**
     * 组件映射
     */
    components?: {
        [propName: string]: any;
    };
    /**
     * 孩子节点
     */
    children?: any[];
    /**
     * 属性
     */
    props?: any;
    /**
     * 元数据
     */
    meta?: any;
}
/**
 * 插槽
 */
declare class Slot {
    /**
     * 插槽名称
     */
    name: string;
    /**
     * 层次
     */
    level: number;
    /**
     * root插槽节点名称
     */
    rootName: string | undefined;
    /**
     * root插槽节点index
     */
    rootIndex: number;
    /**
     * 构造函数
     * @param name
     * @param level
     * @param rootName
     */
    constructor(name: string, level: number, rootName: string | undefined, rootIndex: number);
}
declare class Session {
    /**
     * 目标路由
     */
    to?: Route;
    /**
     * 来源路由
     */
    from?: Route;
    /**
     * 流程数据
     */
    data: {
        [propName: string]: any;
    };
    /**
     * 构造函数
     * @param to
     * @param from
     */
    constructor(to?: Route, from?: Route);
    /**
     * 转换为session
     * @param src
     * @returns
     */
    static from(src: {
        [propName: string]: any;
    }): Session;
}
/**
 * 路由(跳转目标)
 */
declare class Route {
    /**
     * 路径
     */
    path?: string;
    /**
     * 返回full path
     */
    get fullPath(): string;
    /**
     * 名称
     */
    name?: string;
    /**
     * 嵌入root节点
     */
    root?: string;
    /**
     * 参数
     */
    params: any;
    /**
     * 查询
     */
    query: any;
    /**
     * 成功回调函数
     */
    success?: {
        (...arg: any[]): void;
    };
    /**
     * 失败回调函数
     */
    error?: {
        (...arg: any[]): void;
    };
    /**
     * 页面销毁回答函数
     */
    destroy?: {
        (...arg: any[]): void;
    };
    /**
     * 操作类型(Push, Replace, Put, Append)
     */
    opsType?: OperationType;
    /**
     * 更新类型(All,Part)
     */
    updateType?: UpdateType;
    /**
     * view属性集合(用于multi view的tab view属性)
     */
    viewTagAttrs: any;
    /**
     * 索引(用于opsType为Append的情况下，可以精确卸载的需求)
     */
    index?: number;
    /**
     * 是否激活状态(用于多视图，Open操作的情况下，标志view是否为激活状态)
     */
    active?: boolean;
    /**
     * 插槽(用于历史还原)
     */
    slot?: Slot;
    /**
     * session(router执行链路session)
     */
    session?: Session;
    /**
     * 判断路由是否相同
     * @param x
     * @param y
     * @returns
     */
    static isSame(x: Route, y: Route): boolean;
    /**
     * 判断路由对应的route model是否一致
     * @param x
     * @param y
     * @returns
     */
    static isSameForRouteModel(x: Route, y: Route): boolean;
    /**
     * 由对象生成路由
     * @param obj
     * @returns
     */
    static from(obj: any): Route;
}
/**
 * model (RouteModel > ModelLayer > Model)
 */
declare class Model {
    /**
     * 唯一ID(用于区分model)
     */
    id: number;
    /**
     * 名称
     */
    name: string;
    /**
     * 属性
     */
    props: any;
    /**
     * 元数据
     */
    meta: any;
    /**
     * 原始组件数据
     */
    src: any;
    /**
     * 组件(解析后组件)
     */
    component: any;
    /**
     * 构造函数
     *
     * @param name
     * @param src
     * @param props
     * @param meta
     */
    constructor(name: string, src: any, props: any, meta: any);
    /**
     * 是否已经解析完成
     */
    get isResolved(): boolean;
    /**
     * 解析组件
     */
    resolve(): Promise<void>;
}
/**
 * 层(RouteModel > ModelLayer > Model)
 */
declare class ModelLayer {
    /**
     * 节点
     */
    models: Model[];
}
/**
 * Route Model(RouteModel > ModelLayer > Model)
 */
declare class RouteModel {
    /**
     * 路径
     */
    path?: string;
    /**
     * 路径match
     */
    match: any;
    /**
     * 转发路径
     */
    redirect?: string;
    /**
     * 名称
     */
    name?: string;
    /**
     * layer集合
     */
    layers: ModelLayer[];
}

declare const rootKey: unique symbol;
declare const rootNodeKey: unique symbol;
declare const parentNodeKey: unique symbol;
declare const nameKey: unique symbol;
/**
 * model插槽
 */
declare class ModelSlot {
    /**
     * model
     */
    model: Model;
    /**
     * route
     */
    route: Route | null;
    /**
     * 是否激活状态
     */
    active: boolean;
    /**
     * 索引
     */
    index: number;
    /**
     * 构造函数
     * @param route
     * @param model
     * @param index
     * @param active
     */
    constructor(route: Route | null, model: Model, index?: number, active?: boolean);
}
/**
 * 视图
 */
declare class View {
    /**
     * model slots列表
     */
    private _slots?;
    /**
    * getter for models
    */
    get slots(): Ref<ModelSlot[]>;
    /**
     * 是否为空视图
     */
    get empty(): boolean;
    /**
     * name
     */
    [nameKey]: string;
    /**
     * 是否分支根节点标志(true/false)
     */
    [rootKey]: boolean;
    /**
     * view的所在的root(最近一个)
     */
    [rootNodeKey]: ViewPlace | null;
    /**
     * view的父亲记得引用(会在router的[sync]方法中建立关系)
     */
    [parentNodeKey]: ViewPlace | null;
    /**
     * 名称
     */
    get name(): string;
    /**
     * 构造函数
     * @param name
     * @param isRoot
     * @param rootNodeRef
     */
    constructor(name: string, isRoot: boolean, rootNodeRef?: ViewPlace | null);
}
/**
 * view place
 */
declare class ViewPlace {
    /**
     * view
     */
    view: View;
    /**
     * 索引
     */
    index: number;
    /**
     * 层次
     */
    level: number;
    /**
     * 构造函数
     * @param view
     * @param index
     * @param level
     */
    constructor(view: View, index: number, level: number);
    /**
     * 判断是否在队列中
     * @param list
     * @param view
     */
    static include(list: ViewPlace[], viewPlace: ViewPlace): boolean;
}
/**
 * 层
 */
declare class Layer {
    /**
     * 节点(view集合)
     */
    views: View[];
}
/**
 * page
 */
declare class Page {
    /**
     * 层
     */
    layers: Layer[];
}

/**
 * 操作类型
 * @type {Enum}
 */
declare enum ModuleStatus {
    /**
     * 加载中
     */
    Loading = 0,
    /**
     * 加载完成
     */
    Loaded = 1,
    /**
     * 定义中状态
     */
    Defining = 2,
    /**
     * 定义完成状态
     */
    Defined = 3
}

/**
 * Session类型
 */
interface EventChainSession {
    [propName: string]: any;
}
/**
 * event chain 上下文
 */
interface EventChainContext {
    /**
     * 任务跳转
     */
    go: {
        (step: number, ...args: any[]): void;
    };
    /**
     * 触发链路
     */
    resolve: {
        (...args: any[]): void;
    };
    /**
     * 中断链路
     */
    reject: {
        (...args: any[]): void;
    };
    /**
     * 插入任务
     */
    insert: {
        (...args: any[]): void;
    };
    /**
     * chain session
     */
    session: EventChainSession;
}
/**
 * Task类型
 */
interface Task {
    (context: EventChainContext, ...args: any[]): void;
}
/**
 * 完成Task类型(Exception,Finish, Wait)
 */
interface EndTask {
    (context: {
        session: EventChainSession;
    }, ...args: any[]): void;
}
declare const chainKey: unique symbol;
declare const cursorKey: unique symbol;
declare const persistentModeKey: unique symbol;
declare const statusKey: unique symbol;
declare const argsKey: unique symbol;
declare const exArgsKey: unique symbol;
declare const successFnsKey: unique symbol;
declare const errorFnsKey: unique symbol;
declare const sessionKey: unique symbol;
declare const _go: unique symbol;
/**
 * 任务链路
 */
declare class EventChain {
    /**
     * 事件链路
     */
    private [chainKey];
    /**
     * 游标
     */
    private [cursorKey];
    /**
     * 是否持久模式(该状态为true的情况，已经执行的任务会继续保存在队列中)
     */
    private [persistentModeKey];
    /**
     * 状态
     */
    private [statusKey];
    /**
     * 参数
     */
    private [argsKey];
    /**
     * 异常参数
     */
    private [exArgsKey];
    /**
     * 移除函数
     */
    private [successFnsKey];
    /**
     * 错误函数
     */
    private [errorFnsKey];
    /**
     * 链路session
     */
    private [sessionKey]?;
    /**
     * 获取session
     */
    get session(): EventChainSession | undefined;
    /**
     * 构造函数
     *
     * @param session
     * @param persistentMode
     */
    constructor(session?: EventChainSession, persistentMode?: boolean);
    /**
     * 触发链路的下一个任务
     * @param step
     * @param params
     */
    private [_go];
    /**
     * 跳转
     * @param step
     * @param params
     */
    go(step: number, ...params: any[]): EventChain;
    /**
     * 结束事件链调用，直接触发wait函数(success方法)
     * @param params
     */
    finish(...params: any[]): EventChain;
    /**
     * 结束事件链调用，直接触发wait函数(error方法)
     * @param params
     */
    reject(...params: any[]): EventChain;
    /**
     * 结束事件链调用，直接触发error函数
     * @param params
     */
    throw(...params: any[]): EventChain;
    /**
     * 重置事件链，直接触发wait函数
     * @param params
     */
    reset(...params: any[]): EventChain;
    /**
     * 加入任务
     * @param task
     * @returns {EventChain}
     */
    post(task: Task): EventChain;
    /**
     * 加入等待任务
     * @param successFn
     * @param errorFn
     * @returns
     */
    wait(successFn: EndTask, errorFn: EndTask): EventChain;
    /**
     * 加入异常处理任务
     * @param errorFn
     * @returns
     */
    exception(errorFn: EndTask): EventChain;
    /**
     * 判断事件链是否已经执行完成
     * @returns {boolean}
     */
    isFinish(): boolean;
}

/**
 * AMD加载器
 */
declare class Require {
    /**
     * head对象
     */
    private head;
    /**
     * 是否为老的webkit浏览器
     */
    private isOldWebKit;
    /**
     * moudel manager
     * @type {ModuleManager}
     */
    private moduleManager;
    /**
     * 参数配置
     */
    private options;
    /**
     * 构造函数
     */
    constructor(options?: any);
    /**
     * 加载
     */
    ensure(...args: any[]): Require;
    /**
     * 加载
     *
     * @param chain
     * @param taskNode
     */
    mount(chain: EventChain, taskNode: TaskNode): void;
    /**
     * 加载html
     *
     * @param chain
     * @param task
     * @param point
     */
    private mountHTML;
    /**
     * 加载css
     * @param chain
     * @param task
     * @param point
     */
    private mountCSS;
    /**
     * 加载js
     *
     * @param chain
     * @param task
     * @param point
     */
    private mountJS;
    /**
     * 去掉空元素
     */
    private trimEmptyElement;
    /**
     * 创建define函数
     * @param module
     * @param task
     * @returns {Function}
     */
    private createDefine;
    /**
     * 解析路径
     * @param uri
     * @returns {string}
     */
    private resolvePath;
    /**
     * 获取文件名后缀
     * @param name
     * @returns {string}
     */
    getFileNamePostfix(name: string): string;
    /**
     * 是否为不处理的路径
     * @param uri
     * @param type
     * @returns {boolean}
     */
    private isNaturePath;
    /**
     * 解析路径
     * @param uri
     * @param replace
     */
    private parserPath;
}
/**
 * 进程
 */
declare class Progress {
    /**
     * 回调函数
     */
    private callback;
    /**
     * values
     */
    private values;
    /**
     * 状态
     */
    private status;
    /**
     * 工作量
     */
    private size;
    /**
     * 最新的index
     */
    private lastIndex;
    /**
     * 构造函数
     */
    constructor(size: number, callback: {
        (status: ModuleStatus, values: any[]): void;
    });
    /**
     * work
     * @param status 工作状态(true/false)
     * @param index
     * @param value
     */
    work(status: boolean, index: number, value: any): void;
    /**
     * 判断进程是否为正常状态
     */
    isOK(): boolean;
}
/**
 * 任务节点
 */
declare class TaskNode {
    /**
     * 索引
     */
    index: number;
    /**
     * 来源
     */
    src: string;
    /**
     * 参数
     */
    params: any;
    /**
     * 进程
     */
    progress: Progress;
    /**
     * 构造函数
     * @param index
     * @param src
     * @param params
     * @param progress
     */
    constructor(index: number, src: string, params: any, progress: Progress);
}

declare const sync: unique symbol;
declare const resolveRoute: unique symbol;

/**
 * router options
 */
interface RouterOptions {
    /**
     * 默认操作类型
     */
    defaultOperationType?: OperationType;
    /**
     * 模块路径解释
     */
    modulePathResolve?: {
        (route: Route): string;
    };
    /**
     * hash monitor(路由跳转是否基于URL hash的变化)
     */
    hashMonitor?: boolean;
    /**
     * 默认加载的路由对应路径
     */
    defaultPath?: string;
    /**
     * base query
     */
    query?: any;
    /**
     * 路由配置列表
     */
    routes?: RouteConfig[];
    /**
     * not found 路由
     */
    notFound?: RouteConfig;
}
declare const _constructRouteModel: unique symbol;
declare const _findRouteModel: unique symbol;
declare const _findRootView: unique symbol;
declare const _removeView: unique symbol;
declare const _buildPage: unique symbol;
declare const _resolveComponent: unique symbol;
declare const _update: unique symbol;
declare const _merge: unique symbol;
declare const ignoreHistoryChangeOnceKey: unique symbol;
declare const _handleHistoryChange: unique symbol;
declare const _notifyChange: unique symbol;
declare const currentRoutes: unique symbol;
declare const currentKey: unique symbol;
declare const _addRouteRecorder: unique symbol;
declare const _removeRouteRecorder: unique symbol;
declare const _cloneRouteRecorder: unique symbol;
declare const _recordError: unique symbol;
declare const registerKey$1: unique symbol;
declare const notFoundKey: unique symbol;
declare const forestKey: unique symbol;
declare const historyKey: unique symbol;
declare const beforeFiltersKey: unique symbol;
declare const afterFiltersKey: unique symbol;
declare const destroyFiltersKey: unique symbol;
declare const mainDispatcherKey: unique symbol;
declare const initKey: unique symbol;
declare const requireKey: unique symbol;
declare const _createNextFn: unique symbol;
declare const _start: unique symbol;
declare const _before: unique symbol;
declare const _after: unique symbol;
declare const _destroy: unique symbol;
declare const _load: unique symbol;
declare const _unload: unique symbol;
declare const _loadDependency: unique symbol;
declare const resolvedModulesKey: unique symbol;
declare const resolveDependencyKey: unique symbol;
declare const routerGuardKey: unique symbol;
declare class Router {
    /**
     * 注册表
     */
    private [registerKey$1];
    /**
     * not found route
     */
    private [notFoundKey]?;
    /**
     * 页面根节点
     */
    private [forestKey];
    /**
     * 历史记录控制器
     */
    private [historyKey]?;
    /**
     * 当前路由集合
     */
    private [currentRoutes];
    /**
     * before过滤器队列
     */
    private [beforeFiltersKey];
    /**
     * after过滤器队列
     */
    private [afterFiltersKey];
    /**
     * destroy过滤器队列
     */
    private [destroyFiltersKey];
    /**
     * 主任务分发器
     */
    private [mainDispatcherKey];
    /**
     * 已解析模块集合
     */
    private [resolvedModulesKey];
    /**
     * 解析依赖函数
     */
    private [resolveDependencyKey];
    /**
     * 路由守护者
     */
    private [routerGuardKey];
    /**
     * 是否初始化
     */
    private [initKey];
    /**
     * 当前最新路由
     */
    private [currentKey];
    /**
     * 创建require
     */
    private [requireKey];
    get require(): Require;
    /**
     * 获取当前最新route
     */
    get current(): Route | null;
    private options;
    /**
     * 构造函数
     * @param options
     */
    constructor(options: RouterOptions);
    /**
     * 记录错误日志
     * @param msg
     * @param route
     */
    private [_recordError];
    /**
     * 初始化
     */
    init(): void;
    /**
     * 是否忽略历史记录改变
     * @type {boolean}
     */
    private [ignoreHistoryChangeOnceKey];
    /**
     * 处理历史记录
     * @param record
     */
    private [_handleHistoryChange];
    /**
     * 通知改变
     * @param route
     */
    private [_notifyChange];
    /**
     * 加入路由记录
     * @param route
     */
    private [_addRouteRecorder];
    /**
     * 克隆路由记录
     * @returns
     */
    private [_cloneRouteRecorder];
    /**
     * 移除路由记录
     *
     * @param route
     */
    private [_removeRouteRecorder];
    /**
     * 设置hash monitor是否启动
     * @param enabled
     */
    setHashMonitorEnabled(enabled: boolean): void;
    /**
     * 添加before filter
     * @param filter
     */
    beforeEach(filter: {
        (...args: any[]): void;
    }): void;
    /**
     * 添加after filter
     * @param filter
     */
    afterEach(filter: {
        (...args: any[]): void;
    }): void;
    /**
     * 添加destroy filter
     * @param filter
     */
    destroyEach(filter: {
        (...args: any[]): void;
    }): void;
    /**
     * 设置依赖模块解释函数
     * @param resolveDependency
     */
    setResolveDependency(resolveDependency: {
        (route: Route): string;
    }): void;
    /**
     * 加入路由配置列表
     * @param routes
     */
    addRoutes(routeConfigs: RouteConfig[]): void;
    /**
     * 加入路由配置
     * @param route
     * @param index
     */
    addRoute(routeConfig: RouteConfig, index?: number): void;
    /**
     * 配置not found路由配置
     * @param routeConfig
     */
    setNotFoundRoute(routeConfig: RouteConfig): void;
    /**
     * 返回目前加载的routes
     */
    getRoutes(): RouteModel[];
    /**
     * 根据路由构建route model
     *
     * @param routeConfig
     */
    private [_constructRouteModel];
    /**
     * 查找route model
     * @param cite
     */
    private [_findRouteModel];
    /**
     * 解释路由
     * @param args
     * @returns
     */
    private [resolveRoute];
    /**
     * 路由跳转(operation类型为Push)
     * @param args
     */
    push(...args: any[]): Router;
    /**
     * 路由跳转(operation类型为Put)
     * @param args
     */
    put(...args: any[]): Router;
    /**
     * 路由跳转(operation类型为Replace)
     * @param args
     */
    replace(...args: any[]): Router;
    /**
     * 路由跳转(operation类型为Append)
     * @param path
     */
    append(...args: any[]): Router;
    /**
     * 移除
     * @param term
     */
    remove(term?: any): Promise<boolean>;
    /**
     * 路由跳转(operation类型为Open)
     * @param args
     */
    open(...args: any[]): Router;
    /**
     * 关闭路由跳转的页面
     * @param args
     */
    close(args: any): Router;
    /**
     * 路由跳转
     * @param args
     */
    to(...args: any[]): Router;
    /**
     * 历史回退
     * @param n
     */
    back(n: number): void;
    /**
     * 创建next函数
     */
    private [_createNextFn];
    /**
     * 开始链路
     * @param route
     * @returns {EventChain}
     */
    private [_start];
    /**
     * 执行before事件
     * @param chain
     */
    private [_before];
    /**
     * 执行after事件
     * @param chain
     */
    private [_after];
    /**
     * 执行销毁事件
     */
    private [_destroy];
    /**
     * 加载依赖模块
     * @param chain
     * @param depencies
     */
    private [_loadDependency];
    /**
     * 加载路由
     * @param route
     */
    private [_load];
    /**
     * 卸载(只能用于卸载多视图上的view)
     *
     * @param routes
     */
    private [_unload];
    /**
     * 查找root view索引
     * @param route
     */
    private [_findRootView];
    /**
     * 移除view
     * @param page
     * @param pos
     * @param indexs
     * @param under
     */
    private [_removeView];
    /**
     * 恢复
     * @param routes
     *
     * @returns
     */
    restore(routes?: Route[]): Promise<void>;
    /**
     * build page
     * @param route
     * @param routeModel
     * @returns {boolean}
     */
    private [_buildPage];
    /**
     * 解析组件
     */
    private [_resolveComponent];
    /**
     * 更新页面
     * @param routeModel
     * @param route
     * @param session
     * @param updateType
     * @returns
     */
    private [_update];
    /**
     * 合并view
     * @param page
     * @param startViewLevel
     * @param routeModel
     * @param startModelLevel
     * @param rootNodeRef
     */
    [_merge](page: Page, startViewLevel: number, routeModel: RouteModel, startModelLevel: number, rootNodeRef: ViewPlace): void;
    /**
     * router view与view同步数据
     * @param name
     * @param level
     * @param rootView
     * @param rootViewIndex
     * @param parentView
     * @param parentViewIndex
     * @returns
     */
    [sync](name: string, level: number, rootView: View | null, rootViewIndex: number, parentView: View | null, parentViewIndex: number): View | null;
}

declare const registerKey: unique symbol;
/**
 * callback function
 */
interface Callback {
    (...args: any[]): void;
}
/**
 * 事件代理
 */
declare class EventProxy {
    /**
     * 注册表
     */
    private [registerKey];
    /**
     * 构造函数
     */
    constructor();
    /**
     * 绑定事件
     * @param key
     * @param callback
     * @param once
     * @returns
     */
    on(key: string, callback: Callback, once?: boolean): EventProxy;
    /**
     * 解除绑定
     * @param key
     * @param callback
     * @returns
     */
    off(key: string, callback: Callback): EventProxy;
    /**
     * 绑定事件
     * @param key
     * @param callback
     * @param once
     * @returns
     */
    bind(key: string, callback: Callback, once?: boolean): EventProxy;
    /**
     * 解除绑定
     * @param key
     * @param callback
     * @returns
     */
    unbind(key: string, callback: Callback): EventProxy;
    /**
     * 绑定一次性触发函数
     * @param key
     * @param callback
     * @returns
     */
    once(key: string, callback: Callback): EventProxy;
    /**
     * 绑定多条件触发函数
     * @param args
     */
    all(...args: any[]): this;
    /**
     * 触发函数
     * @param key
     * @param value
     */
    emit(key: string, ...value: any[]): this;
    /**
     * 触发函数
     * @param key
     * @param value
     * @returns
     */
    trigger(key: string, ...value: any[]): EventProxy;
}

/**
 * 是否数组
 */
declare const isArray: (arg: any) => arg is any[];
/**
 * 是否为Map
 * @param val
 * @returns
 */
declare const isMap: (val: unknown) => val is Map<any, any>;
/**
 * 是否为Set
 * @param val
 * @returns
 */
declare const isSet: (val: unknown) => val is Set<any>;
/**
 * 是否为Date
 * @param val
 * @returns
 */
declare const isDate: (val: unknown) => val is Date;
/**
 * 是否为函数
 * @param val
 * @returns
 */
declare const isFunction: (val: unknown) => val is Function;
/**
 * 是否为字符串
 * @param val
 * @returns
 */
declare const isString: (val: unknown) => val is string;
/**
 * 是否为symbol
 * @param val
 * @returns
 */
declare const isSymbol: (val: unknown) => val is symbol;
/**
 * 是否为object
 */
declare const isObject: (val: unknown) => val is Record<any, any>;
/**
 * 是否为promise
 * @param val
 * @returns
 */
declare const isPromise: <T = any>(val: unknown) => val is Promise<T>;
declare const toTypeString: (value: unknown) => string;
/**
 * 是否为plain对象
 * @param val
 * @returns
 */
declare const isPlainObject: (val: unknown) => val is object;
/**
* 是否为es module
* @param obj
* @returns
*/
declare function isESModule(obj: any): obj is Object;
/**
 * 继承（是否深度拷贝,dest,src1,src2,src3...）
 *
 * @returns
 */
declare function extend(...args: any[]): any;
/**
 * 克隆对象
 * @param target
 * @param source
 * @param plain
 *
 * @returns
 */
declare function clone(target: any, source: any, plain?: boolean): any;

interface GenericFunction {
    (...args: any[]): any;
}
declare let onFoxActivated: (hook: GenericFunction) => void;
declare let onFoxDeactivated: (hook: GenericFunction) => void;

/**
 * 参数
 */
interface FoxOptions extends RouterOptions {
}
/**
 * Fox接口
 */
interface Fox {
    /**
     * 返回router
     */
    get router(): Router;
    /**
     * 返回全局Bus
     */
    get bus(): Tree;
    /**
     * 返回全局event proxy
     */
    get eventProxy(): EventProxy;
    /**
    * 返回require
    */
    get require(): Require;
    /**
     * 返回ajax
     */
    get ajax(): Function;
    /**
     * 返回extend
     */
    get extend(): Function;
    /**
     * 返回clone
     */
    get clone(): Function;
    /**
     * 安装
     * @param app
     */
    install(app: App): void;
}
/**
 * 创建Fox
 * @param options
 * @returns
 */
declare function createFox(options?: FoxOptions): Fox;
/**
 * Returns the current router
 */
declare function useRouter(): Router;
/**
 * Returns the current route
 */
declare function useRoute(): Route | null;
/**
 * Returns the current fox
 */
declare function useFox(): Fox | null;

export { Bus, EventChain, EventProxy, Route, Router, clone, createFox, extend, isArray, isDate, isESModule, isFunction, isMap, isObject, isPlainObject, isPromise, isSet, isString, isSymbol, onFoxActivated, onFoxDeactivated, toTypeString, useFox, useRoute, useRouter };
