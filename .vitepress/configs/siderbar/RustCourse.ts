import { type DefaultTheme } from 'vitepress'

const RustCourse: DefaultTheme.SidebarItem = {
  base: '/RustCourse',
  text: 'Rust 语言圣经',
  items: [
    // 序言
    { text: '关于本书', link: '/about-book' },
    { text: '进入 Rust 编程世界', link: '/into-rust' },
    { text: '避免从入门到放弃', link: '/first-try/sth-you-should-not-do' },

    // 第一部分：寻找牛刀
    {
      text: '第一部分：寻找牛刀',
      collapsed: false,
      base: '/RustCourse/first-try',
      items: [
        { text: '安装 Rust 环境', link: '/installation' },
        { text: '墙推 VSCode!', link: '/editor' },
        { text: '认识 Cargo', link: '/cargo' },
        { text: '不仅仅是 Hello world', link: '/hello-world' },
        { text: '下载依赖太慢了？', link: '/slowly-downloading' },
      ],
    },

    // 第二部分：Rust 基础入门
    {
      text: '第二部分：Rust 基础入门',
      collapsed: false,
      base: '/RustCourse/basic',
      items: [
        { text: '变量绑定与解构', link: '/variable' },
        {
          text: '基本类型',
          collapsed: true,
          base: '/RustCourse/basic/base-type',
          link: '/index',
          items: [
            { text: '数值类型', link: '/numbers' },
            { text: '字符、布尔、单元类型', link: '/char-bool' },
            { text: '语句和表达式', link: '/statement-expression' },
            { text: '函数', link: '/function' },
          ],
        },
        {
          text: '所有权和借用',
          collapsed: true,
          base: '/RustCourse/basic/ownership',
          link: '/index',
          items: [
            { text: '所有权', link: '/ownership' },
            { text: '引用与借用', link: '/borrowing' },
          ],
        },
        {
          text: '复合类型',
          collapsed: true,
          base: '/RustCourse/basic/compound-type',
          link: '/intro',
          items: [
            { text: '字符串与切片', link: '/string-slice' },
            { text: '元组', link: '/tuple' },
            { text: '结构体', link: '/struct' },
            { text: '枚举', link: '/enum' },
            { text: '数组', link: '/array' },
          ],
        },
        { text: '流程控制', link: '/flow-control' },
        {
          text: '模式匹配',
          collapsed: true,
          base: '/RustCourse/basic/match-pattern',
          link: '/intro',
          items: [
            { text: 'match 和 if let', link: '/match-if-let' },
            { text: '解构 Option', link: '/option' },
            { text: '模式适用场景', link: '/pattern-match' },
            { text: '全模式列表', link: '/all-patterns' },
          ],
        },
        { text: '方法 Method', link: '/method' },
        {
          text: '泛型和特征',
          collapsed: true,
          base: '/RustCourse/basic/trait',
          link: '/intro',
          items: [
            { text: '泛型 Generics', link: '/generic' },
            { text: '特征 Trait', link: '/trait' },
            { text: '特征对象', link: '/trait-object' },
            { text: '深入了解特征', link: '/advance-trait' },
          ],
        },
        {
          text: '集合类型',
          collapsed: true,
          base: '/RustCourse/basic/collections',
          link: '/intro',
          items: [
            { text: '动态数组 Vector', link: '/vector' },
            { text: 'KV 存储 HashMap', link: '/hashmap' },
          ],
        },
        { text: '认识生命周期', link: '/lifetime' },
        {
          text: '返回值和错误处理',
          collapsed: true,
          base: '/RustCourse/basic/result-error',
          link: '/intro',
          items: [
            { text: 'panic! 深入剖析', link: '/panic' },
            { text: 'Result 和 ?', link: '/result' },
          ],
        },
        {
          text: '包和模块',
          collapsed: true,
          base: '/RustCourse/basic/crate-module',
          link: '/intro',
          items: [
            { text: '包和包管理器', link: '/crate' },
            { text: '模块', link: '/module' },
            { text: 'use 关键字', link: '/use' },
          ],
        },
        { text: '注释和文档', link: '/comment' },
        { text: '格式化输出', link: '/formatted-output' },
      ],
    },

    // 第三部分：入门实战
    {
      text: '第三部分：入门实战',
      collapsed: false,
      base: '/RustCourse/basic-practice',
      items: [
        { text: '基本功能', link: '/base-features' },
        { text: '模块化和错误处理', link: '/refactoring' },
        { text: '测试驱动开发', link: '/tests' },
        { text: '使用环境变量', link: '/envs' },
        { text: '重定向错误输出', link: '/stderr' },
        { text: '使用迭代器改进', link: '/iterators' },
      ],
    },

    // 第四部分：Rust 高级进阶
    {
      text: '第四部分：Rust 高级进阶',
      collapsed: false,
      base: '/RustCourse/advance',
      items: [
        {
          text: '生命周期',
          collapsed: true,
          base: '/RustCourse/advance/lifetime',
          link: '/intro',
          items: [
            { text: '深入生命周期', link: '/advance' },
            { text: '生命周期误区', link: '/misconceptions' },
            { text: '静态生命周期', link: '/static' },
          ],
        },
        {
          text: '函数式编程',
          collapsed: true,
          base: '/RustCourse/advance/functional-programing',
          link: '/intro',
          items: [
            { text: '闭包 Closure', link: '/closure' },
            { text: '迭代器 Iterator', link: '/iterator' },
          ],
        },
        {
          text: '深入类型',
          collapsed: true,
          base: '/RustCourse/advance/into-types',
          link: '/intro',
          items: [
            { text: '类型转换', link: '/converse' },
            { text: '自定义类型', link: '/custom-type' },
            { text: '枚举与整数', link: '/enum-int' },
            { text: 'Sized 和不定长类型', link: '/sized' },
          ],
        },
        {
          text: '智能指针',
          collapsed: true,
          base: '/RustCourse/advance/smart-pointer',
          link: '/intro',
          items: [
            { text: 'Box<T> 堆对象', link: '/box' },
            { text: 'Deref 解引用', link: '/deref' },
            { text: 'Drop 释放资源', link: '/drop' },
            { text: 'Rc 和 Arc', link: '/rc-arc' },
            { text: 'Cell 和 RefCell', link: '/cell-refcell' },
          ],
        },
        {
          text: '循环引用与自引用',
          collapsed: true,
          base: '/RustCourse/advance/circle-self-ref',
          link: '/intro',
          items: [
            { text: '循环引用', link: '/circle-reference' },
            { text: '自引用', link: '/self-referential' },
          ],
        },
        {
          text: '多线程并发编程',
          collapsed: true,
          base: '/RustCourse/advance/concurrency-with-threads',
          link: '/intro',
          items: [
            { text: '并发和并行', link: '/concurrency-parallelism' },
            { text: '线程', link: '/thread' },
            { text: '消息传递', link: '/message-passing' },
            { text: '共享状态', link: '/ref-counter-lock' },
            { text: 'Sync 和 Send', link: '/send-sync' },
            { text: '数据竞争', link: '/races' },
            { text: 'Sync 1', link: '/sync1' },
            { text: 'Sync 2', link: '/sync2' },
          ],
        },
        { text: '全局变量', link: '/global-variable' },
        { text: '错误处理', link: '/errors' },
        {
          text: 'Unsafe Rust',
          collapsed: true,
          base: '/RustCourse/advance/unsafe',
          link: '/intro',
          items: [
            { text: '五个超能力', link: '/superpowers' },
            { text: '未定义行为', link: '/ub' },
            { text: '内联汇编', link: '/inline-asm' },
          ],
        },
        { text: 'Macro 宏编程', link: '/macro' },
        {
          text: 'async/await 异步编程',
          collapsed: true,
          base: '/RustCourse/advance/async',
          link: '/intro',
          items: [
            { text: '入门', link: '/getting-started' },
            { text: 'async/await 语法', link: '/async-await' },
            { text: 'Future 执行', link: '/future-excuting' },
            { text: '多 Future 并发', link: '/multi-futures-simultaneous' },
            { text: 'pin 和 unpin', link: '/pin-unpin' },
            { text: '坑点和最佳实践', link: '/pain-points-and-workarounds' },
            { text: 'Web 服务器', link: '/web-server' },
          ],
        },
      ],
    },

    // 第五部分：进阶实战 1 - Web 服务器
    {
      text: '第五部分：进阶实战 1 - Web 服务器',
      collapsed: false,
      base: '/RustCourse/advance-practice1',
      items: [
        { text: '单线程版本', link: '/web-server' },
        { text: '多线程版本', link: '/multi-threads' },
        { text: '优雅关闭和资源清理', link: '/graceful-shutdown' },
      ],
    },

    // 第六部分：进阶实战 2 - 实现 Redis
    {
      text: '第六部分：进阶实战 2 - 实现 Redis',
      collapsed: false,
      base: '/RustCourse/advance-practice',
      items: [
        { text: 'tokio 概览', link: '/overview' },
        { text: '使用初印象', link: '/getting-startted' },
        { text: '创建异步任务', link: '/spawning' },
        { text: '共享状态', link: '/shared-state' },
        { text: '消息传递', link: '/channels' },
        { text: 'I/O', link: '/io' },
        { text: '解析数据帧', link: '/frame' },
        { text: '深入 async', link: '/async' },
        { text: 'select', link: '/select' },
        { text: '类似迭代器的 Stream', link: '/stream' },
        { text: '优雅的关闭', link: '/graceful-shutdown' },
        { text: '异步跟同步共存', link: '/bridging-with-sync' },
      ],
    },

    // Rust 难点攻关
    {
      text: 'Rust 难点攻关',
      collapsed: false,
      base: '/RustCourse/difficulties',
      items: [
        { text: '切片和切片引用', link: '/slice' },
        { text: 'Eq 和 PartialEq', link: '/eq' },
      ],
    },

    // 常用工具链
    {
      text: '常用工具链',
      collapsed: false,
      base: '/RustCourse/test',
      items: [
        {
          text: '自动化测试',
          collapsed: true,
          base: '/RustCourse/test',
          link: '/intro',
          items: [
            { text: '编写测试', link: '/write-tests' },
            { text: '断言', link: '/assertion' },
            { text: '单元测试和集成测试', link: '/unit-integration-test' },
            { text: '基准测试', link: '/benchmark' },
            { text: '持续集成', link: '/ci' },
          ],
        },
        {
          text: 'Cargo 使用指南',
          collapsed: true,
          base: '/RustCourse/cargo',
          link: '/intro',
          items: [
            { text: '快速入门', link: '/getting-started' },
            { text: 'Git 认证', link: '/git-auth' },
          ],
        },
      ],
    },

    // 开发实践
    {
      text: '开发实践',
      collapsed: false,
      base: '/RustCourse/usecases',
      items: [
        {
          text: '企业落地实践',
          collapsed: true,
          base: '/RustCourse/usecases',
          link: '/intro',
          items: [
            { text: 'AWS 与 Rust', link: '/aws-rust' },
          ],
        },
        {
          text: '日志和监控',
          collapsed: true,
          base: '/RustCourse/logs',
          link: '/intro',
          items: [
            { text: '日志', link: '/log' },
            { text: 'tracing', link: '/tracing' },
            { text: 'tracing 日志器', link: '/tracing-logger' },
            { text: '关于日志', link: '/about-log' },
          ],
        },
        {
          text: 'Rust 最佳实践',
          collapsed: true,
          base: '/RustCourse/practice',
          link: '/intro',
          items: [
            { text: '最佳实践', link: '/best-pratice' },
            { text: '命名规范', link: '/naming' },
            { text: '第三方库', link: '/third-party-libs' },
            { text: '面试', link: '/interview' },
          ],
        },
        {
          text: '手把手带你实现链表',
          collapsed: true,
          base: '/RustCourse/too-many-lists',
          link: '/intro',
          items: [
            { text: '我们真的需要链表吗', link: '/do-we-need-it' },
          ],
        },
      ],
    },

    // 攻克编译错误
    {
      text: '攻克编译错误',
      collapsed: false,
      base: '/RustCourse/compiler',
      items: [
        {
          text: '对抗编译检查',
          collapsed: true,
          base: '/RustCourse/compiler/fight-with-compiler',
          link: '/intro',
          items: [
            { text: '幽灵数据', link: '/phantom-data' },
            { text: '不受约束的泛型', link: '/unconstrained' },
          ],
        },
        {
          text: 'Rust 常见陷阱',
          collapsed: true,
          base: '/RustCourse/compiler/pitfalls',
          link: '/index',
          items: [
            { text: '算术溢出', link: '/arithmetic-overflow' },
            { text: '带生命周期的闭包', link: '/closure-with-lifetime' },
            { text: '无处不在的迭代器', link: '/iterator-everywhere' },
            { text: '惰性迭代器', link: '/lazy-iterators' },
            { text: '主线程阻塞', link: '/main-with-channel-blocked' },
            { text: '多个可变引用', link: '/multiple-mutable-references' },
            { text: '栈溢出', link: '/stack-overflow' },
            { text: '被禁用的可变性', link: '/the-disabled-mutability' },
            { text: '在 for 循环中使用 Vec', link: '/use-vec-in-for' },
            { text: 'UTF-8 性能', link: '/utf8-performance' },
            { text: '诡异的范围', link: '/weird-ranges' },
          ],
        },
      ],
    },

    // 性能优化
    {
      text: '性能优化',
      collapsed: false,
      base: '/RustCourse/profiling',
      items: [
        {
          text: '深入内存',
          collapsed: true,
          base: '/RustCourse/profiling/memory',
          link: '/intro',
          items: [
            { text: '内存布局', link: '/layout' },
            { text: '虚拟内存', link: '/virtual' },
            { text: '指针和引用', link: '/pointer-ref' },
            { text: '未初始化', link: '/uninit' },
            { text: '内存分配', link: '/allocation' },
          ],
        },
        {
          text: '性能调优',
          collapsed: true,
          base: '/RustCourse/profiling/performance',
          link: '/intro',
          items: [
            { text: 'CPU 缓存', link: '/cpu-cache' },
            { text: '计算性能', link: '/calculate' },
            { text: '堆和栈', link: '/heap-stack' },
            { text: '深究 move', link: '/deep-into-move' },
            { text: '克隆和拷贝', link: '/clone-copy' },
            { text: '运行时检查', link: '/runtime-check' },
            { text: '字符串', link: '/string' },
            { text: '枚举', link: '/enum' },
            { text: '内存分配器', link: '/allocator' },
            { text: '基准测试', link: '/tools' },
            { text: '过早优化', link: '/early-optimise' },
          ],
        },
        {
          text: '编译优化',
          collapsed: true,
          base: '/RustCourse/profiling/compiler',
          link: '/intro',
          items: [
            { text: '加速编译', link: '/speed-up' },
            { text: '编译属性', link: '/attributes' },
            { text: 'LLVM 优化', link: '/llvm' },
            { text: '幽灵数据', link: '/phantom-data' },
          ],
        },
      ],
    },

    // 附录
    {
      text: '附录',
      collapsed: false,
      base: '/RustCourse/appendix',
      items: [
        { text: '关键字', link: '/keywords' },
        { text: '运算符与符号', link: '/operators' },
        { text: '表达式', link: '/expressions' },
        { text: '派生特征 trait', link: '/derive' },
        { text: 'Rust 版本说明', link: '/rust-version' },
        {
          text: 'Rust 历次版本更新解读',
          collapsed: true,
          base: '/RustCourse/appendix/rust-versions',
          link: '/intro',
          items: [
            { text: '1.58', link: '/1.58' },
            { text: '1.59', link: '/1.59' },
            { text: '1.60', link: '/1.60' },
            { text: '1.61', link: '/1.61' },
            { text: '1.62', link: '/1.62' },
            { text: '1.63', link: '/1.63' },
            { text: '1.64', link: '/1.64' },
            { text: '1.65', link: '/1.65' },
            { text: '1.66', link: '/1.66' },
            { text: '1.67', link: '/1.67' },
            { text: '1.68', link: '/1.68' },
            { text: '1.69', link: '/1.69' },
            { text: '1.70', link: '/1.70' },
            { text: '1.71', link: '/1.71' },
            { text: '1.72', link: '/1.72' },
            { text: '1.73', link: '/1.73' },
            { text: '1.74', link: '/1.74' },
            { text: '1.75', link: '/1.75' },
            { text: '1.76', link: '/1.76' },
            { text: '1.77', link: '/1.77' },
            { text: '1.78', link: '/1.78' },
            { text: '1.79', link: '/1.79' },
            { text: '1.80', link: '/1.80' },
            { text: '1.81', link: '/1.81' },
            { text: '1.82', link: '/1.82' },
            { text: '1.83', link: '/1.83' },
            { text: '1.84', link: '/1.84' },
            { text: '1.85', link: '/1.85' },
            { text: '1.86', link: '/1.86' },
            { text: '1.87', link: '/1.87' },
            { text: '1.88', link: '/1.88' },
            { text: '1.89', link: '/1.89' },
          ],
        },
      ],
    },
  ],
}

export default RustCourse