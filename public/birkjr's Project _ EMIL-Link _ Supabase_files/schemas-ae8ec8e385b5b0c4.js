(!(function () {
  try {
    var e =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {},
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = '13d023e8-9e5d-421b-8c06-b2adbb484f15'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-13d023e8-9e5d-421b-8c06-b2adbb484f15'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3055],
    {
      76996: function (e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/database/schemas',
          function () {
            return s(41083);
          },
        ]);
      },
      74615: function (e, t, s) {
        'use strict';
        s.d(t, {
          T: function () {
            return h;
          },
          b: function () {
            return u;
          },
        });
        var n = s(38143),
          a = s.n(n),
          r = s(3010),
          i = s.n(r),
          l = s(9069);
        s(59329);
        var o = s(37756),
          c = s(45536),
          d = s(19573);
        async function u(e, t, s) {
          var n;
          if (!(null == s ? void 0 : s.length)) return { nodes: [], edges: [] };
          let a = s.map(t => {
              let s = (t.columns || []).map(e => ({
                id: e.id,
                isPrimary: t.primary_keys.some(t => t.name === e.name),
                name: e.name,
                format: e.format,
                isNullable: e.is_nullable,
                isUnique: e.is_unique,
                isUpdateable: e.is_updatable,
                isIdentity: e.is_identity,
              }));
              return {
                id: ''.concat(t.id),
                type: 'table',
                data: {
                  ref: e,
                  id: t.id,
                  name: t.name,
                  isForeign: !1,
                  columns: s,
                },
                position: { x: 0, y: 0 },
              };
            }),
            r = [],
            l = s[0].schema;
          for (let t of i()(
            s.flatMap(e => e.relationships),
            'id'
          )) {
            if (t.source_schema !== l) continue;
            if (t.target_table_schema !== l) {
              a.push({
                id: t.constraint_name,
                type: 'table',
                data: {
                  ref: e,
                  name: ''
                    .concat(t.target_table_schema, '.')
                    .concat(t.target_table_name, '.')
                    .concat(t.target_column_name),
                  isForeign: !0,
                  columns: [],
                },
                position: { x: 0, y: 0 },
              });
              let [n, i] = m(s, t.source_table_name, t.source_column_name);
              n &&
                r.push({
                  id: String(t.id),
                  source: n,
                  sourceHandle: i,
                  target: t.constraint_name,
                  targetHandle: t.constraint_name,
                });
              continue;
            }
            let [n, i] = m(s, t.source_table_name, t.source_column_name),
              [o, c] = m(s, t.target_table_name, t.target_column_name);
            n &&
              o &&
              r.push({
                id: String(t.id),
                source: n,
                sourceHandle: i,
                target: o,
                targetHandle: c,
              });
          }
          let d = localStorage.getItem(
              o.dA.SCHEMA_VISUALIZER_POSITIONS(
                null != e ? e : 'project',
                null !== (n = null == t ? void 0 : t.id) && void 0 !== n ? n : 0
              )
            ),
            u = (0, c.dW)(d);
          return u ? x(a, r, u) : h(a, r);
        }
        function m(e, t, s) {
          for (let n of e)
            if (t === n.name) {
              for (let e of n.columns || [])
                if (s === e.name) return [String(n.id), e.id];
            }
          return [];
        }
        let h = (e, t) => {
            let s = new (a().graphlib.Graph)();
            return (
              s.setDefaultEdgeLabel(() => ({})),
              s.setGraph({
                rankdir: 'LR',
                align: 'UR',
                nodesep: 25,
                ranksep: 50,
              }),
              e.forEach(e => {
                s.setNode(e.id, {
                  width: d.jq / 2,
                  height: (d.AH / 2) * (e.data.columns.length + 1),
                });
              }),
              t.forEach(e => {
                s.setEdge(e.source, e.target);
              }),
              a().layout(s),
              e.forEach(e => {
                let t = s.node(e.id);
                return (
                  (e.targetPosition = l.Ly.Left),
                  (e.sourcePosition = l.Ly.Right),
                  (e.position = {
                    x: t.x - t.width / 2,
                    y: t.y - t.height / 2,
                  }),
                  e
                );
              }),
              { nodes: e, edges: t }
            );
          },
          x = (e, t, s) => {
            let n = e.filter(e => !(e.id in s)),
              a = 0,
              r = { x: 0, y: -(25 + d.AH + 10 * n.length) };
            return (
              e.forEach(e => {
                let t = null == s ? void 0 : s[e.id];
                ((e.targetPosition = l.Ly.Left),
                  (e.sourcePosition = l.Ly.Right),
                  t
                    ? (e.position = t)
                    : ((e.position = { x: r.x + 10 * a, y: r.y + 10 * a }),
                      (a += 1)));
              }),
              { nodes: e, edges: t }
            );
          };
      },
      67628: function (e, t, s) {
        'use strict';
        s.d(t, {
          Q: function () {
            return l;
          },
        });
        var n = s(97458),
          a = s(94059),
          r = s(73565),
          i = s(55228),
          l = e => {
            let { page: t, menu: s } = e;
            return (0, n.jsx)('div', {
              className: 'flex flex-col space-y-8 overflow-y-auto',
              'data-sentry-component': 'ProductMenu',
              'data-sentry-source-file': 'ProductMenu.tsx',
              children: (0, n.jsx)(a.ZP, {
                type: 'pills',
                'data-sentry-element': 'Menu',
                'data-sentry-source-file': 'ProductMenu.tsx',
                children: s.map((e, l) =>
                  (0, n.jsxs)(
                    'div',
                    {
                      children: [
                        (0, n.jsx)('div', {
                          className: 'my-6 space-y-8',
                          children: (0, n.jsxs)('div', {
                            className: 'mx-3',
                            children: [
                              (0, n.jsx)(a.ZP.Group, {
                                title: e.title
                                  ? (0, n.jsxs)('div', {
                                      className:
                                        'flex flex-col space-y-2 uppercase font-mono',
                                      children: [
                                        (0, n.jsx)('span', {
                                          children: e.title,
                                        }),
                                        e.isPreview &&
                                          (0, n.jsx)(r.C, {
                                            variant: 'warning',
                                            children: 'Not production ready',
                                          }),
                                      ],
                                    })
                                  : null,
                              }),
                              (0, n.jsx)('div', {
                                children: e.items.map(e =>
                                  (0, n.jsx)(
                                    i.Z,
                                    {
                                      url: e.url,
                                      name: e.name,
                                      icon: e.icon,
                                      rightIcon: e.rightIcon,
                                      isActive: t === e.key,
                                      isExternal: e.isExternal,
                                      target: e.isExternal ? '_blank' : '_self',
                                      label: e.label,
                                    },
                                    e.key
                                  )
                                ),
                              }),
                            ],
                          }),
                        }),
                        l !== s.length - 1 &&
                          (0, n.jsx)('div', {
                            className: 'h-px w-full bg-border-overlay',
                          }),
                      ],
                    },
                    e.key || e.title
                  )
                ),
              }),
            });
          };
      },
      38889: function (e, t, s) {
        'use strict';
        s.d(t, {
          H: function () {
            return c;
          },
        });
        var n = s(28894),
          a = s(6464),
          r = s(33715),
          i = s(62432),
          l = s(37756);
        async function o(e, t) {
          let { projectRef: s, connectionString: n } = e;
          if (!s) throw Error('projectRef is required');
          let r = new Headers();
          n && r.set('x-connection-encrypted', n);
          let { data: i, error: l } = await (0, a.U2)(
            '/platform/pg-meta/{ref}/extensions',
            {
              params: {
                header: { 'x-connection-encrypted': n },
                path: { ref: s },
              },
              headers: r,
              signal: t,
            }
          );
          return (l && (0, a.S3)(l), i);
        }
        let c = function (e) {
          let { projectRef: t, connectionString: s } = e,
            { enabled: a = !0, ...c } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {},
            d = (0, i.Vm)(),
            u = (null == d ? void 0 : d.status) === l.S.ACTIVE_HEALTHY;
          return (0, n.a)(
            r.o.list(t),
            e => {
              let { signal: n } = e;
              return o({ projectRef: t, connectionString: s }, n);
            },
            { enabled: a && void 0 !== t && u, ...c }
          );
        };
      },
      13510: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return n;
          },
        });
        let n = (0, s(98266).Z)('ArrowUpRight', [
          ['path', { d: 'M7 7h10v10', key: '1tivn9' }],
          ['path', { d: 'M7 17 17 7', key: '1vkiza' }],
        ]);
      },
      61353: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return n;
          },
        });
        let n = (0, s(98266).Z)('Diamond', [
          [
            'path',
            {
              d: 'M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z',
              key: '1f1r0c',
            },
          ],
        ]);
      },
      57730: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return n;
          },
        });
        let n = (0, s(98266).Z)('Fingerprint', [
          [
            'path',
            { d: 'M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4', key: '1nerag' },
          ],
          ['path', { d: 'M14 13.12c0 2.38 0 6.38-1 8.88', key: 'o46ks0' }],
          ['path', { d: 'M17.29 21.02c.12-.6.43-2.3.5-3.02', key: 'ptglia' }],
          ['path', { d: 'M2 12a10 10 0 0 1 18-6', key: 'ydlgp0' }],
          ['path', { d: 'M2 16h.01', key: '1gqxmh' }],
          ['path', { d: 'M21.8 16c.2-2 .131-5.354 0-6', key: 'drycrb' }],
          [
            'path',
            { d: 'M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2', key: '1tidbn' },
          ],
          ['path', { d: 'M8.65 22c.21-.66.45-1.32.57-2', key: '13wd9y' }],
          ['path', { d: 'M9 6.8a6 6 0 0 1 9 5.2v2', key: '1fr1j5' }],
        ]);
      },
      38536: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return n;
          },
        });
        let n = (0, s(98266).Z)('Hash', [
          ['line', { x1: '4', x2: '20', y1: '9', y2: '9', key: '4lhtct' }],
          ['line', { x1: '4', x2: '20', y1: '15', y2: '15', key: 'vyu0kd' }],
          ['line', { x1: '10', x2: '8', y1: '3', y2: '21', key: '1ggp8o' }],
          ['line', { x1: '16', x2: '14', y1: '3', y2: '21', key: 'weycgp' }],
        ]);
      },
      52139: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return n;
          },
        });
        let n = (0, s(98266).Z)('Key', [
          [
            'path',
            {
              d: 'm15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4',
              key: 'g0fldk',
            },
          ],
          ['path', { d: 'm21 2-9.6 9.6', key: '1j0ho8' }],
          ['circle', { cx: '7.5', cy: '15.5', r: '5.5', key: 'yqb3hr' }],
        ]);
      },
      70840: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return n;
          },
        });
        let n = (0, s(98266).Z)('Table2', [
          [
            'path',
            {
              d: 'M9 3H5a2 2 0 0 0-2 2v4m6-6h10a2 2 0 0 1 2 2v4M9 3v18m0 0h10a2 2 0 0 0 2-2V9M9 21H5a2 2 0 0 1-2-2V9m0 0h18',
              key: 'gugj83',
            },
          ],
        ]);
      },
      19573: function (e, t, s) {
        'use strict';
        s.d(t, {
          AH: function () {
            return p;
          },
          Fh: function () {
            return y;
          },
          jq: function () {
            return f;
          },
        });
        var n = s(97458),
          a = s(70840),
          r = s(4839),
          i = s(52139),
          l = s(61353),
          o = s(57730),
          c = s(38536),
          d = s(83145),
          u = s.n(d),
          m = s(9069),
          h = s(65092),
          x = s(90839);
        let f = 320,
          p = 40,
          y = e => {
            let {
                data: t,
                targetPosition: s,
                sourcePosition: d,
                placeholder: p,
              } = e,
              y =
                '!h-px !w-px !min-w-0 !min-h-0 !cursor-grab !border-0 !opacity-0',
              g = 'h-[22px]';
            return (0, n.jsx)(n.Fragment, {
              children: t.isForeign
                ? (0, n.jsxs)('header', {
                    className:
                      'text-[0.55rem] px-2 py-1 border-[0.5px] rounded-[4px] bg-alternative text-default flex gap-1 items-center',
                    children: [
                      t.name,
                      s &&
                        (0, n.jsx)(m.HH, {
                          type: 'target',
                          id: t.name,
                          position: s,
                          className: (0, h.cn)(y),
                        }),
                    ],
                  })
                : (0, n.jsxs)('div', {
                    className:
                      'border-[0.5px] overflow-hidden rounded-[4px] shadow-sm',
                    style: { width: f / 2 },
                    children: [
                      (0, n.jsxs)('header', {
                        className: (0, h.cn)(
                          'text-[0.55rem] pl-2 pr-1 bg-alternative text-default flex items-center justify-between',
                          g
                        ),
                        children: [
                          (0, n.jsxs)('div', {
                            className: 'flex gap-x-1 items-center',
                            children: [
                              (0, n.jsx)(a.Z, {
                                strokeWidth: 1,
                                size: 12,
                                className: 'text-light',
                              }),
                              t.name,
                            ],
                          }),
                          t.id &&
                            !p &&
                            (0, n.jsx)(x.z, {
                              asChild: !0,
                              type: 'text',
                              className: 'px-0 w-[16px] h-[16px] rounded',
                              children: (0, n.jsx)(u(), {
                                href: '/project/'
                                  .concat(t.ref, '/editor/')
                                  .concat(t.id),
                                children: (0, n.jsx)(r.Z, {
                                  size: 10,
                                  className: 'text-foreground-light',
                                }),
                              }),
                            }),
                        ],
                      }),
                      t.columns.map(e =>
                        (0, n.jsxs)(
                          'div',
                          {
                            className: (0, h.cn)(
                              'text-[8px] leading-5 relative flex flex-row justify-items-start',
                              'bg-surface-100',
                              'border-t',
                              'border-t-[0.5px]',
                              'hover:bg-scale-500 transition cursor-default',
                              g
                            ),
                            children: [
                              (0, n.jsxs)('div', {
                                className: (0, h.cn)(
                                  'gap-[0.24rem] flex mx-2 align-middle items-center justify-start',
                                  e.isPrimary && 'basis-1/5'
                                ),
                                children: [
                                  e.isPrimary &&
                                    (0, n.jsx)(i.Z, {
                                      size: 8,
                                      strokeWidth: 1,
                                      className: (0, h.cn)(
                                        'flex-shrink-0',
                                        'text-light'
                                      ),
                                    }),
                                  e.isNullable &&
                                    (0, n.jsx)(l.Z, {
                                      size: 8,
                                      strokeWidth: 1,
                                      className: 'flex-shrink-0 text-light',
                                    }),
                                  !e.isNullable &&
                                    (0, n.jsx)(l.Z, {
                                      size: 8,
                                      strokeWidth: 1,
                                      fill: 'currentColor',
                                      className: 'flex-shrink-0 text-light',
                                    }),
                                  e.isUnique &&
                                    (0, n.jsx)(o.Z, {
                                      size: 8,
                                      strokeWidth: 1,
                                      className: 'flex-shrink-0 text-light',
                                    }),
                                  e.isIdentity &&
                                    (0, n.jsx)(c.Z, {
                                      size: 8,
                                      strokeWidth: 1,
                                      className: 'flex-shrink-0 text-light',
                                    }),
                                ],
                              }),
                              (0, n.jsxs)('div', {
                                className: 'flex w-full justify-between',
                                children: [
                                  (0, n.jsx)('span', {
                                    className:
                                      'text-ellipsis overflow-hidden whitespace-nowrap max-w-[85px]',
                                    children: e.name,
                                  }),
                                  (0, n.jsx)('span', {
                                    className:
                                      'px-2 inline-flex justify-end font-mono text-lighter text-[0.4rem]',
                                    children: e.format,
                                  }),
                                ],
                              }),
                              s &&
                                (0, n.jsx)(m.HH, {
                                  type: 'target',
                                  id: e.id,
                                  position: s,
                                  className: (0, h.cn)(y, '!left-0'),
                                }),
                              d &&
                                (0, n.jsx)(m.HH, {
                                  type: 'source',
                                  id: e.id,
                                  position: d,
                                  className: (0, h.cn)(y, '!right-0'),
                                }),
                            ],
                          },
                          e.id
                        )
                      ),
                    ],
                  }),
            });
          };
      },
      32500: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return p;
          },
        });
        var n = s(97458),
          a = s(32691),
          r = s(99163),
          i = s(67628),
          l = s(38889),
          o = s(9108),
          c = s(62432),
          d = s(58326),
          u = s(74334),
          m = s(37756),
          h = s(13510);
        let x = (e, t) => {
            var s;
            let a =
                null !== (s = null == e ? void 0 : e.ref) && void 0 !== s
                  ? s
                  : 'default',
              {
                pgNetExtensionExists: r,
                pitrEnabled: i,
                columnLevelPrivileges: l,
              } = t || {};
            return [
              {
                title: 'Database Management',
                items: [
                  {
                    name: 'Schema Visualizer',
                    key: 'schemas',
                    url: '/project/'.concat(a, '/database/schemas'),
                    items: [],
                  },
                  {
                    name: 'Tables',
                    key: 'tables',
                    url: '/project/'.concat(a, '/database/tables'),
                    items: [],
                  },
                  {
                    name: 'Functions',
                    key: 'functions',
                    url: '/project/'.concat(a, '/database/functions'),
                    items: [],
                  },
                  {
                    name: 'Triggers',
                    key: 'triggers',
                    url: '/project/'.concat(a, '/database/triggers'),
                    items: [],
                  },
                  {
                    name: 'Enumerated Types',
                    key: 'types',
                    url: '/project/'.concat(a, '/database/types'),
                    items: [],
                  },
                  {
                    name: 'Extensions',
                    key: 'extensions',
                    url: '/project/'.concat(a, '/database/extensions'),
                    items: [],
                  },
                  {
                    name: 'Indexes',
                    key: 'indexes',
                    url: '/project/'.concat(a, '/database/indexes'),
                    items: [],
                  },
                  {
                    name: 'Publications',
                    key: 'publications',
                    url: '/project/'.concat(a, '/database/publications'),
                    items: [],
                  },
                ],
              },
              {
                title: 'Access Control',
                items: [
                  {
                    name: 'Roles',
                    key: 'roles',
                    url: '/project/'.concat(a, '/database/roles'),
                    items: [],
                  },
                  ...(l
                    ? [
                        {
                          name: 'Column Privileges',
                          key: 'column-privileges',
                          url: '/project/'.concat(
                            a,
                            '/database/column-privileges'
                          ),
                          items: [],
                          label: 'ALPHA',
                        },
                      ]
                    : []),
                  {
                    name: 'Policies',
                    key: 'policies',
                    url: '/project/'.concat(a, '/auth/policies'),
                    rightIcon: (0, n.jsx)(h.Z, {
                      strokeWidth: 1,
                      className: 'h-4 w-4',
                    }),
                    items: [],
                  },
                ],
              },
              {
                title: 'Platform',
                items: [
                  ...(m.Qy
                    ? [
                        {
                          name: 'Backups',
                          key: 'backups',
                          url: i
                            ? '/project/'.concat(a, '/database/backups/pitr')
                            : '/project/'.concat(
                                a,
                                '/database/backups/scheduled'
                              ),
                          items: [],
                        },
                      ]
                    : []),
                  {
                    name: 'Migrations',
                    key: 'migrations',
                    url: '/project/'.concat(a, '/database/migrations'),
                    items: [],
                  },
                  {
                    name: 'Wrappers',
                    key: 'wrappers',
                    url: '/project/'.concat(
                      a,
                      '/integrations?category=wrapper'
                    ),
                    rightIcon: (0, n.jsx)(h.Z, {
                      strokeWidth: 1,
                      className: 'h-4 w-4',
                    }),
                    items: [],
                  },
                  ...(r
                    ? [
                        {
                          name: 'Webhooks',
                          key: 'hooks',
                          url: '/project/'.concat(
                            a,
                            '/integrations/webhooks/overview'
                          ),
                          rightIcon: (0, n.jsx)(h.Z, {
                            strokeWidth: 1,
                            className: 'h-4 w-4',
                          }),
                          items: [],
                        },
                      ]
                    : []),
                ],
              },
              {
                title: 'Tools',
                items: [
                  {
                    name: 'Security Advisor',
                    key: 'security-advisor',
                    url: '/project/'.concat(a, '/advisors/security'),
                    rightIcon: (0, n.jsx)(h.Z, {
                      strokeWidth: 1,
                      className: 'h-4 w-4',
                    }),
                    items: [],
                  },
                  {
                    name: 'Performance Advisor',
                    key: 'performance-advisor',
                    url: '/project/'.concat(a, '/advisors/performance'),
                    rightIcon: (0, n.jsx)(h.Z, {
                      strokeWidth: 1,
                      className: 'h-4 w-4',
                    }),
                    items: [],
                  },
                  {
                    name: 'Query Performance',
                    key: 'query-performance',
                    url: '/project/'.concat(a, '/advisors/query-performance'),
                    rightIcon: (0, n.jsx)(h.Z, {
                      strokeWidth: 1,
                      className: 'h-4 w-4',
                    }),
                    items: [],
                  },
                ],
              },
            ];
          },
          f = () => {
            let e = (0, c.Vm)(),
              t = (0, a.useRouter)().pathname.split('/')[4],
              { data: s } = (0, l.H)({
                projectRef: null == e ? void 0 : e.ref,
                connectionString: null == e ? void 0 : e.connectionString,
              }),
              { data: d } = (0, o.F)({
                projectRef: null == e ? void 0 : e.ref,
              }),
              u =
                void 0 !== (null != s ? s : []).find(e => 'pg_net' === e.name),
              m =
                (null == d
                  ? void 0
                  : d.selected_addons.find(e => 'pitr' === e.type)) !== void 0,
              h = (0, r.ar)();
            return (0, n.jsx)(n.Fragment, {
              children: (0, n.jsx)(i.Q, {
                page: t,
                menu: x(e, {
                  pgNetExtensionExists: u,
                  pitrEnabled: m,
                  columnLevelPrivileges: h,
                }),
                'data-sentry-element': 'ProductMenu',
                'data-sentry-source-file': 'DatabaseLayout.tsx',
              }),
            });
          };
        var p = (0, d.Q)(e => {
          let { children: t } = e;
          return (0, n.jsx)(u.Z, {
            product: 'Database',
            productMenu: (0, n.jsx)(f, {}),
            isBlocking: !1,
            'data-sentry-element': 'ProjectLayout',
            'data-sentry-component': 'DatabaseLayout',
            'data-sentry-source-file': 'DatabaseLayout.tsx',
            children: t,
          });
        });
      },
      55228: function (e, t, s) {
        'use strict';
        var n = s(97458),
          a = s(83145),
          r = s.n(a),
          i = s(94059),
          l = s(73565),
          o = s(90839);
        t.Z = e => {
          let {
              name: t = '',
              isActive: s,
              isExternal: a,
              icon: c,
              rightIcon: d,
              url: u = '',
              target: m = '_self',
              onClick: h,
              textClassName: x = '',
              hoverText: f = '',
              label: p,
            } = e,
            y = (0, n.jsx)(i.ZP.Item, {
              icon: c,
              rounded: !0,
              active: s,
              onClick: h,
              children: (0, n.jsxs)('div', {
                className: 'flex w-full items-center justify-between gap-1',
                children: [
                  (0, n.jsxs)('div', {
                    title: f || ('string' == typeof t ? t : ''),
                    className: 'flex items-center gap-2 truncate w-full ' + x,
                    children: [
                      (0, n.jsxs)('span', {
                        className: 'truncate',
                        children: [t, ' '],
                      }),
                      void 0 !== p &&
                        (0, n.jsx)(l.C, {
                          variant: 'warning',
                          className: 'py-0 px-1.5 capitalize',
                          children: p,
                        }),
                    ],
                  }),
                  d && (0, n.jsx)('div', { children: d }),
                ],
              }),
            });
          return u
            ? a
              ? (0, n.jsx)(o.z, {
                  asChild: !0,
                  block: !0,
                  className: '!justify-start',
                  type: 'text',
                  size: 'small',
                  icon: c,
                  children: (0, n.jsx)(r(), {
                    href: u,
                    target: '_blank',
                    rel: 'noreferrer',
                    children: t,
                  }),
                })
              : (0, n.jsx)(r(), {
                  href: u,
                  className: 'block',
                  target: m,
                  children: y,
                })
            : y;
        };
      },
      66902: function (e, t, s) {
        'use strict';
        var n = s(97458),
          a = s(50416),
          r = s(62507),
          i = s(36950),
          l = s(52983),
          o = s(198),
          c = s(88971),
          d = s(58015),
          u = s(90817),
          m = s(90839),
          h = s(10947),
          x = s(42026),
          f = s(47482),
          p = s(64890);
        t.Z = e => {
          let {
              className: t,
              disabled: s = !1,
              size: y = 'tiny',
              showError: g = !0,
              selectedSchemaName: j,
              supportSelectAll: v = !1,
              excludedSchemas: b = [],
              onSelectSchema: k,
              onSelectCreateSchema: N,
            } = e,
            [w, _] = (0, l.useState)(!1),
            Z = (0, u.Xo)(o.KA.TENANT_SQL_ADMIN_WRITE, 'schemas'),
            { project: S } = (0, c.d2)(),
            {
              data: E,
              isLoading: M,
              isSuccess: C,
              isError: z,
              error: I,
              refetch: P,
            } = (0, d.Q1)({
              projectRef: null == S ? void 0 : S.ref,
              connectionString: null == S ? void 0 : S.connectionString,
            }),
            L = (E || [])
              .filter(e => !b.includes(e.name))
              .sort((e, t) => e.name.localeCompare(t.name));
          return (0, n.jsxs)('div', {
            className: t,
            'data-sentry-component': 'SchemaSelector',
            'data-sentry-source-file': 'SchemaSelector.tsx',
            children: [
              M &&
                (0, n.jsx)(m.z, {
                  type: 'default',
                  className: 'justify-start',
                  block: !0,
                  size: y,
                  loading: !0,
                  children: 'Loading schemas...',
                }),
              g &&
                z &&
                (0, n.jsxs)(h.bZ, {
                  variant: 'warning',
                  className: '!px-3 !py-3',
                  children: [
                    (0, n.jsx)(h.Cd, {
                      className: 'text-xs text-amber-900',
                      children: 'Failed to load schemas',
                    }),
                    (0, n.jsxs)(h.X, {
                      className: 'text-xs mb-2 break-words',
                      children: ['Error: ', null == I ? void 0 : I.message],
                    }),
                    (0, n.jsx)(m.z, {
                      type: 'default',
                      size: 'tiny',
                      onClick: () => P(),
                      children: 'Reload schemas',
                    }),
                  ],
                }),
              C &&
                (0, n.jsxs)(x.J2, {
                  open: w,
                  onOpenChange: _,
                  modal: !1,
                  children: [
                    (0, n.jsx)(x.xo, {
                      asChild: !0,
                      children: (0, n.jsx)(m.z, {
                        size: y,
                        disabled: s,
                        type: 'default',
                        className: 'w-full [&>span]:w-full',
                        iconRight: (0, n.jsx)(a.Z, {
                          className: 'text-foreground-muted',
                          strokeWidth: 2,
                          size: 14,
                        }),
                        children: j
                          ? (0, n.jsxs)('div', {
                              className: 'w-full flex gap-1',
                              children: [
                                (0, n.jsx)('p', {
                                  className: 'text-foreground-lighter',
                                  children: 'schema:',
                                }),
                                (0, n.jsx)('p', {
                                  className: 'text-foreground',
                                  children: '*' === j ? 'All schemas' : j,
                                }),
                              ],
                            })
                          : (0, n.jsx)('div', {
                              className: 'w-full flex gap-1',
                              children: (0, n.jsx)('p', {
                                className: 'text-foreground-lighter',
                                children: 'Choose a schema…',
                              }),
                            }),
                      }),
                    }),
                    (0, n.jsx)(x.yk, {
                      className: 'p-0',
                      side: 'bottom',
                      align: 'start',
                      sameWidthAsTrigger: !0,
                      children: (0, n.jsxs)(f.mY, {
                        children: [
                          (0, n.jsx)(f.sZ, { placeholder: 'Find schema...' }),
                          (0, n.jsxs)(f.e8, {
                            children: [
                              (0, n.jsx)(f.rb, {
                                children: 'No schemas found',
                              }),
                              (0, n.jsx)(f.fu, {
                                children: (0, n.jsxs)(p.x, {
                                  className:
                                    (L || []).length > 7 ? 'h-[210px]' : '',
                                  children: [
                                    v &&
                                      (0, n.jsxs)(
                                        f.di,
                                        {
                                          className:
                                            'cursor-pointer flex items-center justify-between space-x-2 w-full',
                                          onSelect: () => {
                                            (k('*'), _(!1));
                                          },
                                          onClick: () => {
                                            (k('*'), _(!1));
                                          },
                                          children: [
                                            (0, n.jsx)('span', {
                                              children: 'All schemas',
                                            }),
                                            '*' === j &&
                                              (0, n.jsx)(r.Z, {
                                                className: 'text-brand',
                                                strokeWidth: 2,
                                                size: 16,
                                              }),
                                          ],
                                        },
                                        'select-all'
                                      ),
                                    null == L
                                      ? void 0
                                      : L.map(e =>
                                          (0, n.jsxs)(
                                            f.di,
                                            {
                                              className:
                                                'cursor-pointer flex items-center justify-between space-x-2 w-full',
                                              onSelect: () => {
                                                (k(e.name), _(!1));
                                              },
                                              onClick: () => {
                                                (k(e.name), _(!1));
                                              },
                                              children: [
                                                (0, n.jsx)('span', {
                                                  children: e.name,
                                                }),
                                                j === e.name &&
                                                  (0, n.jsx)(r.Z, {
                                                    className: 'text-brand',
                                                    strokeWidth: 2,
                                                    size: 16,
                                                  }),
                                              ],
                                            },
                                            e.id
                                          )
                                        ),
                                  ],
                                }),
                              }),
                              void 0 !== N &&
                                Z &&
                                (0, n.jsxs)(n.Fragment, {
                                  children: [
                                    (0, n.jsx)(f.zz, {}),
                                    (0, n.jsx)(f.fu, {
                                      children: (0, n.jsxs)(f.di, {
                                        className:
                                          'cursor-pointer flex items-center gap-x-2 w-full',
                                        onSelect: () => {
                                          (N(), _(!1));
                                        },
                                        onClick: () => {
                                          (N(), _(!1));
                                        },
                                        children: [
                                          (0, n.jsx)(i.Z, { size: 12 }),
                                          'Create a new schema',
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                            ],
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
            ],
          });
        };
      },
      41083: function (e, t, s) {
        'use strict';
        (s.r(t),
          s.d(t, {
            default: function () {
              return $;
            },
          }));
        var n = s(97458),
          a = s(9069),
          r = s(52675),
          i = s(98809),
          l = s(52983),
          o = s(33235),
          c = s(61768),
          d = s(58152),
          u = s(73319),
          m = s(72905),
          h = s(30271);
        let x = ({
          id: e,
          x: t,
          y: s,
          width: n,
          height: a,
          style: r,
          color: i,
          strokeColor: o,
          strokeWidth: d,
          className: u,
          borderRadius: m,
          shapeRendering: h,
          onClick: x,
          selected: f,
        }) => {
          let { background: p, backgroundColor: y } = r || {};
          return l.createElement('rect', {
            className: (0, c.Z)([
              'react-flow__minimap-node',
              { selected: f },
              u,
            ]),
            x: t,
            y: s,
            rx: m,
            ry: m,
            width: n,
            height: a,
            fill: i || p || y,
            stroke: o,
            strokeWidth: d,
            shapeRendering: h,
            onClick: x ? t => x(t, e) : void 0,
          });
        };
        x.displayName = 'MiniMapNode';
        var f = (0, l.memo)(x);
        let p = e => e.nodeOrigin,
          y = e => e.getNodes().filter(e => !e.hidden && e.width && e.height),
          g = e => (e instanceof Function ? e : () => e);
        var j = (0, l.memo)(function ({
          nodeStrokeColor: e = 'transparent',
          nodeColor: t = '#e2e2e2',
          nodeClassName: s = '',
          nodeBorderRadius: n = 5,
          nodeStrokeWidth: r = 2,
          nodeComponent: i = f,
          onClick: o,
        }) {
          let c = (0, a.oR)(y, d.X),
            u = (0, a.oR)(p),
            m = g(t),
            h = g(e),
            x = g(s),
            j =
              'undefined' == typeof window || window.chrome
                ? 'crispEdges'
                : 'geometricPrecision';
          return l.createElement(
            l.Fragment,
            null,
            c.map(e => {
              let { x: t, y: s } = (0, a.VP)(e, u).positionAbsolute;
              return l.createElement(i, {
                key: e.id,
                x: t,
                y: s,
                width: e.width,
                height: e.height,
                style: e.style,
                selected: e.selected,
                className: x(e),
                color: m(e),
                borderRadius: n,
                strokeColor: h(e),
                strokeWidth: r,
                shapeRendering: j,
                onClick: o,
                id: e.id,
              });
            })
          );
        });
        let v = e => {
          let t = e.getNodes(),
            s = {
              x: -e.transform[0] / e.transform[2],
              y: -e.transform[1] / e.transform[2],
              width: e.width / e.transform[2],
              height: e.height / e.transform[2],
            };
          return {
            viewBB: s,
            boundingRect:
              t.length > 0 ? (0, a.oI)((0, a.RX)(t, e.nodeOrigin), s) : s,
            rfId: e.rfId,
          };
        };
        function b({
          style: e,
          className: t,
          nodeStrokeColor: s = 'transparent',
          nodeColor: n = '#e2e2e2',
          nodeClassName: r = '',
          nodeBorderRadius: i = 5,
          nodeStrokeWidth: o = 2,
          nodeComponent: x,
          maskColor: f = 'rgb(240, 240, 240, 0.6)',
          maskStrokeColor: p = 'none',
          maskStrokeWidth: y = 1,
          position: g = 'bottom-right',
          onClick: b,
          onNodeClick: k,
          pannable: N = !1,
          zoomable: w = !1,
          ariaLabel: _ = 'React Flow mini map',
          inversePan: Z = !1,
          zoomStep: S = 10,
          offsetScale: E = 5,
        }) {
          let M = (0, a.AC)(),
            C = (0, l.useRef)(null),
            { boundingRect: z, viewBB: I, rfId: P } = (0, a.oR)(v, d.X),
            L = e?.width ?? 200,
            R = e?.height ?? 150,
            T = Math.max(z.width / L, z.height / R),
            A = T * L,
            W = T * R,
            F = E * T,
            H = z.x - (A - z.width) / 2 - F,
            D = z.y - (W - z.height) / 2 - F,
            $ = A + 2 * F,
            G = W + 2 * F,
            V = `react-flow__minimap-desc-${P}`,
            q = (0, l.useRef)(0);
          ((q.current = T),
            (0, l.useEffect)(() => {
              if (C.current) {
                let e = (0, m.Z)(C.current),
                  t = (0, u.sP)()
                    .on(
                      'zoom',
                      N
                        ? e => {
                            let {
                              transform: t,
                              d3Selection: s,
                              d3Zoom: n,
                              translateExtent: a,
                              width: r,
                              height: i,
                            } = M.getState();
                            if ('mousemove' !== e.sourceEvent.type || !s || !n)
                              return;
                            let l =
                                q.current * Math.max(1, t[2]) * (Z ? -1 : 1),
                              o = {
                                x: t[0] - e.sourceEvent.movementX * l,
                                y: t[1] - e.sourceEvent.movementY * l,
                              },
                              c = u.CR.translate(o.x, o.y).scale(t[2]),
                              d = n.constrain()(
                                c,
                                [
                                  [0, 0],
                                  [r, i],
                                ],
                                a
                              );
                            n.transform(s, d);
                          }
                        : null
                    )
                    .on(
                      'zoom.wheel',
                      w
                        ? e => {
                            let {
                              transform: t,
                              d3Selection: s,
                              d3Zoom: n,
                            } = M.getState();
                            if ('wheel' !== e.sourceEvent.type || !s || !n)
                              return;
                            let a =
                                -e.sourceEvent.deltaY *
                                (1 === e.sourceEvent.deltaMode
                                  ? 0.05
                                  : e.sourceEvent.deltaMode
                                    ? 1
                                    : 0.002) *
                                S,
                              r = t[2] * Math.pow(2, a);
                            n.scaleTo(s, r);
                          }
                        : null
                    );
                return (
                  e.call(t),
                  () => {
                    e.on('zoom', null);
                  }
                );
              }
            }, [N, w, Z, S]));
          let O = b
            ? e => {
                let t = (0, h.Z)(e);
                b(e, { x: t[0], y: t[1] });
              }
            : void 0;
          return l.createElement(
            a.s_,
            {
              position: g,
              style: e,
              className: (0, c.Z)(['react-flow__minimap', t]),
              'data-testid': 'rf__minimap',
            },
            l.createElement(
              'svg',
              {
                width: L,
                height: R,
                viewBox: `${H} ${D} ${$} ${G}`,
                role: 'img',
                'aria-labelledby': V,
                ref: C,
                onClick: O,
              },
              _ && l.createElement('title', { id: V }, _),
              l.createElement(j, {
                onClick: k
                  ? (e, t) => {
                      k(e, M.getState().nodeInternals.get(t));
                    }
                  : void 0,
                nodeColor: n,
                nodeStrokeColor: s,
                nodeBorderRadius: i,
                nodeClassName: r,
                nodeStrokeWidth: o,
                nodeComponent: x,
              }),
              l.createElement('path', {
                className: 'react-flow__minimap-mask',
                d: `M${H - F},${D - F}h${$ + 2 * F}v${G + 2 * F}h${-$ - 2 * F}z
        M${I.x},${I.y}h${I.width}v${I.height}h${-I.width}z`,
                fill: f,
                fillRule: 'evenodd',
                stroke: p,
                strokeWidth: y,
                pointerEvents: 'none',
              })
            )
          );
        }
        b.displayName = 'MiniMap';
        var k = (0, l.memo)(b);
        s(59329);
        var N = s(12436),
          w = s(88971),
          _ = s(5529),
          Z = s(359),
          S = s(66902),
          E = s(58015),
          M = s(79581),
          C = s(92261),
          z = s(37756),
          I = s(52139),
          P = s(38536),
          L = s(57730),
          R = s(61353);
        let T = () =>
          (0, n.jsx)('div', {
            className:
              'absolute bottom-0 left-0 border-t flex justify-center px-1 py-2 shadow-md bg-surface-100 w-full z-10',
            'data-sentry-component': 'SchemaGraphLegend',
            'data-sentry-source-file': 'SchemaGraphLegend.tsx',
            children: (0, n.jsxs)('ul', {
              className: 'flex flex-wrap  items-center justify-center gap-4',
              children: [
                (0, n.jsxs)('li', {
                  className: 'flex items-center text-xs font-mono gap-1',
                  children: [
                    (0, n.jsx)(I.Z, {
                      size: 15,
                      strokeWidth: 1.5,
                      className: 'flex-shrink-0 text-light',
                      'data-sentry-element': 'Key',
                      'data-sentry-source-file': 'SchemaGraphLegend.tsx',
                    }),
                    'Primary key',
                  ],
                }),
                (0, n.jsxs)('li', {
                  className: 'flex items-center text-xs font-mono gap-1',
                  children: [
                    (0, n.jsx)(P.Z, {
                      size: 15,
                      strokeWidth: 1.5,
                      className: 'flex-shrink-0 text-light',
                      'data-sentry-element': 'Hash',
                      'data-sentry-source-file': 'SchemaGraphLegend.tsx',
                    }),
                    'Identity',
                  ],
                }),
                (0, n.jsxs)('li', {
                  className: 'flex items-center text-xs font-mono gap-1',
                  children: [
                    (0, n.jsx)(L.Z, {
                      size: 15,
                      strokeWidth: 1.5,
                      className: 'flex-shrink-0 text-light',
                      'data-sentry-element': 'Fingerprint',
                      'data-sentry-source-file': 'SchemaGraphLegend.tsx',
                    }),
                    'Unique',
                  ],
                }),
                (0, n.jsxs)('li', {
                  className: 'flex items-center text-xs font-mono gap-1',
                  children: [
                    (0, n.jsx)(R.Z, {
                      size: 15,
                      strokeWidth: 1.5,
                      className: 'flex-shrink-0 text-light',
                      'data-sentry-element': 'DiamondIcon',
                      'data-sentry-source-file': 'SchemaGraphLegend.tsx',
                    }),
                    'Nullable',
                  ],
                }),
                (0, n.jsxs)('li', {
                  className: 'flex items-center text-xs font-mono gap-1',
                  children: [
                    (0, n.jsx)(R.Z, {
                      size: 15,
                      strokeWidth: 1.5,
                      fill: 'currentColor',
                      className: 'flex-shrink-0 text-light',
                      'data-sentry-element': 'DiamondIcon',
                      'data-sentry-source-file': 'SchemaGraphLegend.tsx',
                    }),
                    'Non-Nullable',
                  ],
                }),
              ],
            }),
          });
        var A = s(74615),
          W = s(19573);
        let F = () => {
          var e;
          let { ref: t } = (0, N.UO)(),
            { resolvedTheme: s } = (0, i.F)(),
            { project: c } = (0, w.d2)(),
            [d, u] = (0, l.useState)('public'),
            m = (null == s ? void 0 : s.includes('dark'))
              ? 'rgb(17, 19, 24, .8)'
              : 'rgb(237, 237, 237, .8)',
            h = (0, a._K)(),
            x = (0, l.useMemo)(() => ({ table: W.Fh }), []),
            {
              data: f,
              error: p,
              isSuccess: y,
              isLoading: g,
              isError: j,
            } = (0, E.Q1)({
              projectRef: null == c ? void 0 : c.ref,
              connectionString: null == c ? void 0 : c.connectionString,
            }),
            {
              data: v,
              error: b,
              isSuccess: I,
              isLoading: P,
              isError: L,
            } = (0, M.Bj)({
              projectRef: null == c ? void 0 : c.ref,
              connectionString: null == c ? void 0 : c.connectionString,
              schema: d,
              includeColumns: !0,
            }),
            R = (null != f ? f : []).find(e => e.name === d),
            [F, H] = (0, C._)(
              z.dA.SCHEMA_VISUALIZER_POSITIONS(
                t,
                null !== (e = null == R ? void 0 : R.id) && void 0 !== e ? e : 0
              ),
              {}
            ),
            D = () => {
              if (void 0 === R) return console.error('Schema is required');
              let e = h.getNodes();
              e.length > 0 &&
                H(e.reduce((e, t) => ({ ...e, [t.id]: t.position }), {}));
            };
          return (
            (0, l.useEffect)(() => {
              if (I && y && v.length > 0) {
                let e = f.find(e => e.name === d);
                (0, A.b)(t, e, v).then(e => {
                  let { nodes: t, edges: s } = e;
                  (h.setNodes(t),
                    h.setEdges(s),
                    setTimeout(() => h.fitView({})));
                });
              }
            }, [I, y, v, s]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsxs)('div', {
                  className:
                    'flex items-center justify-between p-4 border-b border-muted',
                  children: [
                    g &&
                      (0, n.jsx)('div', {
                        className:
                          'h-[34px] w-[260px] bg-foreground-lighter rounded shimmering-loader',
                      }),
                    j &&
                      (0, n.jsx)(_.Z, {
                        error: p,
                        subject: 'Failed to retrieve schemas',
                      }),
                    y &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(S.Z, {
                            className: 'w-[180px]',
                            size: 'tiny',
                            showError: !1,
                            selectedSchemaName: d,
                            onSelectSchema: u,
                          }),
                          (0, n.jsx)(Z.u, {
                            type: 'default',
                            onClick: () => {
                              let e = h.getNodes(),
                                t = h.getEdges();
                              ((0, A.T)(e, t),
                                h.setNodes(e),
                                h.setEdges(t),
                                setTimeout(() => h.fitView({})),
                                D());
                            },
                            tooltip: {
                              content: {
                                side: 'bottom',
                                text: 'Automatically arrange the layout of all nodes',
                              },
                            },
                            children: 'Auto layout',
                          }),
                        ],
                      }),
                  ],
                }),
                P &&
                  (0, n.jsxs)('div', {
                    className:
                      'w-full h-full flex items-center justify-center gap-x-2',
                    children: [
                      (0, n.jsx)(r.Z, {
                        className: 'animate-spin text-foreground-light',
                        size: 16,
                      }),
                      (0, n.jsx)('p', {
                        className: 'text-sm text-foreground-light',
                        children: 'Loading tables',
                      }),
                    ],
                  }),
                L &&
                  (0, n.jsx)('div', {
                    className:
                      'w-full h-full flex items-center justify-center px-20',
                    children: (0, n.jsx)(_.Z, {
                      subject: 'Failed to retrieve tables',
                      error: b,
                    }),
                  }),
                I &&
                  (0, n.jsx)('div', {
                    className: 'w-full h-full',
                    children: (0, n.jsxs)(a.x$, {
                      defaultNodes: [],
                      defaultEdges: [],
                      defaultEdgeOptions: {
                        type: 'smoothstep',
                        animated: !0,
                        deletable: !1,
                        style: {
                          stroke: 'hsl(var(--border-stronger))',
                          strokeWidth: 0.5,
                        },
                      },
                      nodeTypes: x,
                      fitView: !0,
                      minZoom: 0.8,
                      maxZoom: 1.8,
                      proOptions: { hideAttribution: !0 },
                      onNodeDragStop: () => D(),
                      children: [
                        (0, n.jsx)(o.A, {
                          gap: 16,
                          className:
                            '[&>*]:stroke-foreground-muted opacity-[25%]',
                          variant: o.T.Dots,
                          color: 'inherit',
                        }),
                        (0, n.jsx)(k, {
                          pannable: !0,
                          zoomable: !0,
                          nodeColor: '#111318',
                          maskColor: m,
                          className: 'border rounded-md shadow-sm',
                        }),
                        (0, n.jsx)(T, {}),
                      ],
                    }),
                  }),
              ],
            })
          );
        };
        var H = s(32500);
        let D = () =>
          (0, n.jsx)('div', {
            className: 'flex w-full h-full flex-col',
            'data-sentry-component': 'SchemasPage',
            'data-sentry-source-file': 'schemas.tsx',
            children: (0, n.jsx)(a.tV, {
              'data-sentry-element': 'ReactFlowProvider',
              'data-sentry-source-file': 'schemas.tsx',
              children: (0, n.jsx)(F, {
                'data-sentry-element': 'SchemaGraph',
                'data-sentry-source-file': 'schemas.tsx',
              }),
            }),
          });
        D.getLayout = e => (0, n.jsx)(H.Z, { title: 'Database', children: e });
        var $ = D;
      },
      94059: function (e, t, s) {
        'use strict';
        s.d(t, {
          ZP: function () {
            return m;
          },
        });
        var n = s(97458),
          a = s(52983),
          r = s(25843),
          i = s(65092);
        function l(e) {
          let { children: t, className: s, tag: a = 'div', style: r } = e;
          return (0, n.jsx)(''.concat(a), {
            style: r,
            'data-sentry-element': 'CustomTag',
            'data-sentry-component': 'Typography',
            'data-sentry-source-file': 'Typography.tsx',
            children: t,
          });
        }
        ((l.Title = function (e) {
          let { className: t, level: s = 1, children: a, style: r } = e;
          return (0, n.jsx)('h'.concat(s), {
            style: r,
            'data-sentry-element': 'CustomTag',
            'data-sentry-component': 'Title',
            'data-sentry-source-file': 'Title.tsx',
            children: a,
          });
        }),
          (l.Text = function (e) {
            let {
              className: t,
              children: s,
              style: a,
              type: r,
              disabled: i,
              mark: l,
              code: o,
              keyboard: c,
              underline: d,
              strikethrough: u,
              strong: m,
              small: h,
            } = e;
            return o
              ? (0, n.jsx)('code', { style: a, children: s })
              : l
                ? (0, n.jsx)('mark', { style: a, children: s })
                : c
                  ? (0, n.jsx)('kbd', { style: a, children: s })
                  : m
                    ? (0, n.jsx)('strong', { style: a, children: s })
                    : (0, n.jsx)('span', {
                        style: a,
                        'data-sentry-component': 'Text',
                        'data-sentry-source-file': 'Text.tsx',
                        children: s,
                      });
          }),
          (l.Link = function (e) {
            let {
              children: t,
              target: s = '_blank',
              href: a,
              className: r,
              onClick: i,
              style: l,
            } = e;
            return (0, n.jsx)('a', {
              onClick: i,
              href: a,
              target: s,
              rel: 'noopener noreferrer',
              style: l,
              'data-sentry-component': 'Link',
              'data-sentry-source-file': 'Link.tsx',
              children: t,
            });
          }));
        let o = (0, a.createContext)({ type: 'text' }),
          c = e => {
            let { type: t } = e;
            return (0, n.jsx)(o.Provider, {
              value: { type: t },
              'data-sentry-element': 'unknown',
              'data-sentry-component': 'MenuContextProvider',
              'data-sentry-source-file': 'MenuContext.tsx',
              children: e.children,
            });
          },
          d = () => {
            let e = (0, a.useContext)(o);
            if (void 0 === e)
              throw Error(
                'MenuContext must be used within a MenuContextProvider.'
              );
            return e;
          };
        function u(e) {
          let {
            children: t,
            className: s,
            ulClassName: a,
            style: r,
            type: i = 'text',
          } = e;
          return (0, n.jsx)('nav', {
            role: 'menu',
            'aria-label': 'Sidebar',
            'aria-orientation': 'vertical',
            'aria-labelledby': 'options-menu',
            className: s,
            style: r,
            'data-sentry-component': 'Menu',
            'data-sentry-source-file': 'Menu.tsx',
            children: (0, n.jsx)(c, {
              type: i,
              'data-sentry-element': 'MenuContextProvider',
              'data-sentry-source-file': 'Menu.tsx',
              children: (0, n.jsx)('ul', { className: a, children: t }),
            }),
          });
        }
        ((u.Item = function (e) {
          let {
              children: t,
              icon: s,
              active: a,
              rounded: l,
              onClick: o,
              doNotCloseOverlay: c = !1,
              showActiveBar: u = !1,
              style: m,
            } = e,
            h = (0, r.Z)('menu'),
            { type: x } = d(),
            f = [h.item.base];
          (f.push(h.item.variants[x].base),
            a
              ? f.push(h.item.variants[x].active)
              : f.push(h.item.variants[x].normal));
          let p = [h.item.content.base];
          a ? p.push(h.item.content.active) : p.push(h.item.content.normal);
          let y = [h.item.icon.base];
          return (
            a ? y.push(h.item.icon.active) : y.push(h.item.icon.normal),
            (0, n.jsxs)('li', {
              role: 'menuitem',
              className: (0, i.cn)('outline-none', f),
              style: m,
              onClick: o,
              'aria-current': a ? 'page' : void 0,
              'data-sentry-component': 'Item',
              'data-sentry-source-file': 'Menu.tsx',
              children: [
                s &&
                  (0, n.jsx)('div', {
                    className: ''.concat(y.join(' '), ' min-w-fit'),
                    children: s,
                  }),
                (0, n.jsx)('span', { className: p.join(' '), children: t }),
              ],
            })
          );
        }),
          (u.Group = function (e) {
            let { children: t, icon: s, title: a } = e,
              i = (0, r.Z)('menu'),
              { type: l } = d();
            return (0, n.jsxs)('div', {
              className: [i.group.base, i.group.variants[l]].join(' '),
              'data-sentry-component': 'Group',
              'data-sentry-source-file': 'Menu.tsx',
              children: [
                s &&
                  (0, n.jsx)('span', { className: i.group.icon, children: s }),
                (0, n.jsx)('span', { className: i.group.content, children: a }),
                t,
              ],
            });
          }),
          (u.Misc = function (e) {
            let { children: t } = e;
            return (0, n.jsx)('div', {
              'data-sentry-component': 'Misc',
              'data-sentry-source-file': 'Menu.tsx',
              children: (0, n.jsx)(l.Text, {
                'data-sentry-element': 'unknown',
                'data-sentry-source-file': 'Menu.tsx',
                children: (0, n.jsx)('span', { children: t }),
              }),
            });
          }));
        var m = u;
      },
    },
    function (e) {
      (e.O(
        0,
        [
          6665, 9442, 7623, 588, 783, 1018, 1706, 1864, 8703, 2397, 3954, 9621,
          9911, 659, 7612, 4637, 9344, 7726, 6739, 3302, 3898, 1214, 793, 3594,
          3861, 6120, 7094, 4334, 9774, 2888, 179,
        ],
        function () {
          return e((e.s = 76996));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
