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
      (e._sentryDebugIds[t] = '28ef6019-83ea-42b6-b786-1a145c9a36c8'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-28ef6019-83ea-42b6-b786-1a145c9a36c8'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6377],
    {
      93906: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/sql/[id]',
          function () {
            return n(79228);
          },
        ]);
      },
      61803: function (e, t, n) {
        'use strict';
        var a, s;
        n.d(t, {
          EE: function () {
            return a;
          },
          FK: function () {
            return i;
          },
          Ki: function () {
            return l;
          },
          ZE: function () {
            return r;
          },
        });
        let r = {
            TICK: 'hsl(var(--background-overlay-hover))',
            AXIS: 'hsl(var(--background-overlay-hover))',
            GREEN_1: 'hsl(var(--brand-default))',
            GREEN_2: 'hsl(var(--brand-500))',
            RED_1: 'hsl(var(--destructive-default))',
            RED_2: 'hsl(var(--destructive-500))',
          },
          i = e =>
            e.map(e => {
              var t;
              let n = null !== (t = { slate: 11 }[e]) && void 0 !== t ? t : 9;
              return {
                lighter: 'var(--colors-'.concat(e).concat(n - 1, ')'),
                base: 'var(--colors-'.concat(e).concat(n, ')'),
                darker: 'var(--colors-'.concat(e).concat(n + 1, ')'),
              };
            }),
          l = ['brand', 'slate', 'blue', 'yellow', 'indigo'];
        (((s = a || (a = {})).FULL = 'MMM D, YYYY, hh:mma'),
          (s.DATE_ONLY = 'MMM D, YYYY'));
      },
      32875: function (e, t, n) {
        'use strict';
        n.d(t, {
          R: function () {
            return d;
          },
        });
        var a = n(49437),
          s = n(28894),
          r = n(7324),
          i = n(25878);
        let l = a.Z.functions.list();
        async function o(e, t, n) {
          let { projectRef: a, connectionString: s } = e,
            r = new Headers(n),
            { result: o } = await (0, i.R)(
              {
                projectRef: a,
                connectionString: s,
                sql: l.sql,
                queryKey: ['database-functions'],
              },
              t,
              r
            );
          return o;
        }
        let d = function (e) {
          let { projectRef: t, connectionString: n } = e,
            { enabled: a = !0, ...i } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (0, s.a)(
            r.A.databaseFunctions(t),
            e => {
              let { signal: a } = e;
              return o({ projectRef: t, connectionString: n }, a);
            },
            { enabled: a && void 0 !== t, ...i }
          );
        };
      },
      20084: function (e, t, n) {
        'use strict';
        n.d(t, {
          u$: function () {
            return d;
          },
        });
        var a = n(28894),
          s = n(25878),
          r = n(87882),
          i = n(7324);
        let l = e => {
          let { schemas: t, limit: n = 100 } = e;
          return '\n'
            .concat(
              r.k,
              "\n\nwith records as (\n  select\n    c.oid::int8 as \"id\",\n    case c.relkind\n      when 'r' then pg_temp.pg_get_tabledef(\n        concat(nc.nspname),\n        concat(c.relname),\n        false,\n        'FKEYS_INTERNAL',\n        'NO_TRIGGERS'\n      )\n      when 'v' then concat(\n        'create view ', concat(nc.nspname, '.', c.relname), ' as',\n        pg_get_viewdef(concat(nc.nspname, '.', c.relname), true)\n      )\n      when 'm' then concat(\n        'create materialized view ', concat(nc.nspname, '.', c.relname), ' as',\n        pg_get_viewdef(concat(nc.nspname, '.', c.relname), true)\n      )\n      when 'f' then concat('create foreign table ', nc.nspname, '.', c.relname, ' ( ... )')\n      when 'p' then pg_temp.pg_get_tabledef(\n        concat(nc.nspname),\n        concat(c.relname),\n        false,\n        'FKEYS_INTERNAL',\n        'NO_TRIGGERS'\n      )\n    end as \"sql\"\n  from\n    pg_namespace nc\n    join pg_class c on nc.oid = c.relnamespace\n  where\n    c.relkind in ('r', 'v', 'm', 'f', 'p')\n    and not pg_is_other_temp_schema(nc.oid)\n    and (\n      pg_has_role(c.relowner, 'USAGE')\n      or has_table_privilege(\n        c.oid,\n        'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER'\n      )\n      or has_any_column_privilege(c.oid, 'SELECT, INSERT, UPDATE, REFERENCES')\n    )\n    and nc.nspname IN ("
            )
            .concat(
              t.map(e => "'".concat(e, "'")).join(', '),
              ')\n  order by c.relname asc\n  limit '
            )
            .concat(
              n,
              "\n  offset 0\n)\nselect\n  jsonb_build_object(\n    'definitions', coalesce(jsonb_agg(\n      jsonb_build_object(\n        'id', r.id,\n        'sql', r.sql\n      )\n    ), '[]'::jsonb)\n  ) \"data\"\nfrom records r;\n  "
            )
            .trim();
        };
        async function o(e, t) {
          let { projectRef: n, connectionString: a, schemas: r, limit: i } = e,
            o = l({ schemas: r, limit: i }),
            { result: d } = await (0, s.R)(
              {
                projectRef: n,
                connectionString: a,
                sql: o,
                queryKey: ['entity-definitions', r],
              },
              t
            );
          return d[0].data.definitions;
        }
        let d = function (e) {
          let { projectRef: t, connectionString: n, schemas: s, limit: r } = e,
            { enabled: l = !0, ...d } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (0, a.a)(
            i.A.entityDefinitions(t, s),
            e => {
              let { signal: a } = e;
              return o(
                { projectRef: t, connectionString: n, schemas: s, limit: r },
                a
              );
            },
            { enabled: l && void 0 !== t && s.length > 0, ...d }
          );
        };
      },
      92563: function (e, t, n) {
        'use strict';
        n.d(t, {
          Kz: function () {
            return o;
          },
        });
        var a = n(28894),
          s = n(25878),
          r = n(7324);
        let i = e => {
          let { table: t, schema: n } = e,
            a = [];
          (t && a.push("tablename = '".concat(t, "'")),
            n && a.push("schemaname = '".concat(n, "'")));
          let s = a.length > 0 ? 'WHERE '.concat(a.join(' AND ')) : '';
          return "\n  \n  SELECT\n    tbl.schemaname,\n    tbl.tablename,\n    tbl.quoted_name,\n    tbl.is_table,\n    json_agg(a) as columns\n  FROM\n    (\n      SELECT\n        n.nspname as schemaname,\n        c.relname as tablename,\n        (quote_ident(n.nspname) || '.' || quote_ident(c.relname)) as quoted_name,\n        true as is_table\n      FROM\n        pg_catalog.pg_class c\n        JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace\n      WHERE\n        c.relkind = 'r'\n        AND n.nspname not in ('information_schema', 'pg_catalog', 'pg_toast')\n        AND n.nspname not like 'pg_temp_%'\n        AND n.nspname not like 'pg_toast_temp_%'\n        AND has_schema_privilege(n.oid, 'USAGE') = true\n        AND has_table_privilege(quote_ident(n.nspname) || '.' || quote_ident(c.relname), 'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER') = true\n      union all\n      SELECT\n        n.nspname as schemaname,\n        c.relname as tablename,\n        (quote_ident(n.nspname) || '.' || quote_ident(c.relname)) as quoted_name,\n        false as is_table\n      FROM\n        pg_catalog.pg_class c\n        JOIN pg_catalog.pg_namespace n ON n.oid = c.relnamespace\n      WHERE\n        c.relkind in ('v', 'm')\n        AND n.nspname not in ('information_schema', 'pg_catalog', 'pg_toast')\n        AND n.nspname not like 'pg_temp_%'\n        AND n.nspname not like 'pg_toast_temp_%'\n        AND has_schema_privilege(n.oid, 'USAGE') = true\n        AND has_table_privilege(quote_ident(n.nspname) || '.' || quote_ident(c.relname), 'SELECT, INSERT, UPDATE, DELETE, TRUNCATE, REFERENCES, TRIGGER') = true\n    ) as tbl\n    LEFT JOIN (\n      SELECT\n        attrelid,\n        attname,\n        format_type(atttypid, atttypmod) as data_type,\n        attnum,\n        attisdropped\n      FROM\n        pg_attribute\n    ) as a ON (\n      a.attrelid = tbl.quoted_name::regclass\n      AND a.attnum > 0\n      AND NOT a.attisdropped\n      AND has_column_privilege(tbl.quoted_name, a.attname, 'SELECT, INSERT, UPDATE, REFERENCES')\n    )\n  "
            .concat(
              s,
              '\n  GROUP BY schemaname, tablename, quoted_name, is_table;\n'
            )
            .trim();
        };
        async function l(e, t) {
          let { projectRef: n, connectionString: a, table: r, schema: l } = e,
            o = i({ table: r, schema: l }),
            { result: d } = await (0, s.R)(
              {
                projectRef: n,
                connectionString: a,
                sql: o,
                queryKey: ['table-columns', l, r],
              },
              t
            );
          return d;
        }
        let o = function (e) {
          let { projectRef: t, connectionString: n, schema: s, table: i } = e,
            { enabled: o = !0, ...d } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (0, a.a)(
            r.A.tableColumns(t, s, i),
            e => {
              let { signal: a } = e;
              return l(
                { projectRef: t, connectionString: n, schema: s, table: i },
                a
              );
            },
            { enabled: o && void 0 !== t, ...d }
          );
        };
      },
      5315: function (e, t, n) {
        'use strict';
        var a = n(97458),
          s = n(52983),
          r = n(28977),
          i = n.n(r),
          l = n(72309),
          o = n(71557),
          d = n(35495),
          c = n(97875),
          u = n(21706),
          m = n(98178),
          h = n(3276),
          x = n(98715),
          f = n(61803),
          p = n(30812),
          g = n(5699),
          y = n(54234);
        t.Z = e => {
          var t, n, r;
          let {
              data: v,
              yAxisKey: b,
              xAxisKey: j,
              format: N,
              customDateFormat: w = f.EE.FULL,
              title: S,
              highlightedValue: _,
              highlightedLabel: C,
              displayDateInUtc: E,
              minimalHeader: L,
              valuePrecision: k,
              className: R = '',
              size: A = 'normal',
              emptyStateMessage: D,
              onBarClick: I,
              showLegend: T = !1,
              xAxisIsDate: z = !0,
              XAxisProps: U,
              YAxisProps: M,
              showGrid: q = !1,
            } = e,
            { Container: P } = (0, g.D3)(A),
            [Z, K] = (0, s.useState)(null),
            F = U || { interval: v.length - 2, angle: 0, tick: !1 },
            O = M || {
              tickFormatter: e => (0, g.V2)(e, k),
              tick: !1,
              width: 0,
            },
            Q = e => (E ? i()(e).utc() : i()(e)),
            B = (function () {
              if (!z) {
                var e;
                return Z
                  ? null === (e = v[Z]) || void 0 === e
                    ? void 0
                    : e[j]
                  : C;
              }
              return (
                (null !== Z && v && void 0 !== v[Z] && Q(v[Z][j]).format(w)) ||
                C
              );
            })(),
            G =
              null !== Z
                ? null === (t = v[Z]) || void 0 === t
                  ? void 0
                  : t[b]
                : _;
          return 0 === v.length
            ? (0, a.jsx)(y.Z, {
                message: D,
                description: 'It may take up to 24 hours for data to refresh',
                size: A,
                className: R,
                attribute: S,
                format: N,
              })
            : (0, a.jsxs)('div', {
                className: ['flex flex-col gap-y-3', R].join(' '),
                'data-sentry-component': 'BarChart',
                'data-sentry-source-file': 'BarChart.tsx',
                children: [
                  (0, a.jsx)(p.Z, {
                    title: S,
                    format: N,
                    customDateFormat: w,
                    highlightedValue:
                      'number' == typeof G ? (0, g.V2)(G, k) : G,
                    highlightedLabel: B,
                    minimalHeader: L,
                    'data-sentry-element': 'ChartHeader',
                    'data-sentry-source-file': 'BarChart.tsx',
                  }),
                  (0, a.jsx)(P, {
                    'data-sentry-element': 'Container',
                    'data-sentry-source-file': 'BarChart.tsx',
                    children: (0, a.jsxs)(l.v, {
                      data: v,
                      className: 'overflow-visible',
                      onMouseMove: e => {
                        e.activeTooltipIndex !== Z && K(e.activeTooltipIndex);
                      },
                      onMouseLeave: () => K(null),
                      onClick: e => {
                        var t, n;
                        let a =
                          null == e
                            ? void 0
                            : null === (n = e.activePayload) || void 0 === n
                              ? void 0
                              : null === (t = n[0]) || void 0 === t
                                ? void 0
                                : t.payload;
                        I && I(a, e);
                      },
                      'data-sentry-element': 'RechartBarChart',
                      'data-sentry-source-file': 'BarChart.tsx',
                      children: [
                        T && (0, a.jsx)(o.D, {}),
                        q && (0, a.jsx)(d.q, { stroke: f.ZE.AXIS }),
                        (0, s.createElement)(c.B, {
                          ...O,
                          axisLine: { stroke: f.ZE.AXIS },
                          tickLine: { stroke: f.ZE.AXIS },
                          key: b,
                          'data-sentry-element': 'YAxis',
                          'data-sentry-source-file': 'BarChart.tsx',
                        }),
                        (0, s.createElement)(u.K, {
                          ...F,
                          axisLine: { stroke: f.ZE.AXIS },
                          tickLine: { stroke: f.ZE.AXIS },
                          key: j,
                          'data-sentry-element': 'XAxis',
                          'data-sentry-source-file': 'BarChart.tsx',
                        }),
                        (0, a.jsx)(m.u, {
                          content: () => null,
                          'data-sentry-element': 'Tooltip',
                          'data-sentry-source-file': 'BarChart.tsx',
                        }),
                        (0, a.jsx)(h.$, {
                          dataKey: b,
                          fill: f.ZE.GREEN_1,
                          animationDuration: 300,
                          maxBarSize: 48,
                          'data-sentry-element': 'Bar',
                          'data-sentry-source-file': 'BarChart.tsx',
                          children:
                            null == v
                              ? void 0
                              : v.map((e, t) =>
                                  (0, a.jsx)(
                                    x.b,
                                    {
                                      className:
                                        'transition-all duration-300 '.concat(
                                          I ? 'cursor-pointer' : ''
                                        ),
                                      fill:
                                        Z === t || null === Z
                                          ? f.ZE.GREEN_1
                                          : f.ZE.GREEN_2,
                                      enableBackground: 12,
                                    },
                                    'cell-'.concat(t)
                                  )
                                ),
                        }),
                      ],
                    }),
                  }),
                  v &&
                    (0, a.jsxs)('div', {
                      className:
                        'text-foreground-lighter -mt-9 flex items-center justify-between text-xs',
                      children: [
                        (0, a.jsx)('span', {
                          children: z ? Q(v[0][j]).format(w) : v[0][j],
                        }),
                        (0, a.jsx)('span', {
                          children: z
                            ? Q(
                                null ===
                                  (n =
                                    v[(null == v ? void 0 : v.length) - 1]) ||
                                  void 0 === n
                                  ? void 0
                                  : n[j]
                              ).format(w)
                            : null ===
                                  (r =
                                    v[(null == v ? void 0 : v.length) - 1]) ||
                                void 0 === r
                              ? void 0
                              : r[j],
                        }),
                      ],
                    }),
                ],
              });
        };
      },
      30812: function (e, t, n) {
        'use strict';
        var a = n(97458);
        t.Z = e => {
          let {
              format: t,
              highlightedValue: n,
              highlightedLabel: s,
              title: r,
              minimalHeader: i = !1,
            } = e,
            l = (0, a.jsx)('h3', {
              className:
                'text-foreground-lighter ' + (i ? 'text-xs' : 'text-sm'),
              children: r,
            }),
            o = (0, a.jsxs)('h5', {
              className: 'text-foreground text-xl font-normal '.concat(
                i ? 'text-base' : 'text-2xl'
              ),
              children: [
                void 0 !== n && String(n),
                'seconds' === t ? ' ' : '',
                (0, a.jsx)('span', {
                  className: 'text-lg',
                  children: 'function' == typeof t ? t(n) : t,
                }),
              ],
            }),
            d = (0, a.jsx)('h5', {
              className: 'text-foreground-lighter text-xs',
              children: s,
            });
          return i
            ? (0, a.jsxs)('div', {
                className: 'flex flex-row items-center gap-x-4',
                style: { minHeight: '1.8rem' },
                children: [
                  r && l,
                  (0, a.jsxs)('div', {
                    className: 'flex flex-row items-baseline gap-x-2',
                    children: [void 0 !== n && o, d],
                  }),
                ],
              })
            : (0, a.jsxs)('div', {
                className: 'h-16',
                'data-sentry-component': 'ChartHeader',
                'data-sentry-source-file': 'ChartHeader.tsx',
                children: [r && l, void 0 !== n && o, d],
              });
        };
      },
      5699: function (e, t, n) {
        'use strict';
        n.d(t, {
          Bh: function () {
            return h;
          },
          D3: function () {
            return f;
          },
          Hx: function () {
            return x;
          },
          V2: function () {
            return u;
          },
          ww: function () {
            return p;
          },
        });
        var a = n(97458),
          s = n(28977),
          r = n.n(s),
          i = n(13516),
          l = n.n(i),
          o = n(52983),
          d = n(59301),
          c = n(61803);
        r().extend(l());
        let u = function (e) {
            let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 2;
            return m(e) ? h(e, t) : e.toLocaleString();
          },
          m = e => String(e).includes('.'),
          h = (e, t) => {
            if (!m(e)) return e.toLocaleString() + '.' + '0'.repeat(t);
            {
              let [n, a] = String(e).split('.');
              return Number(n).toLocaleString() + '.' + a.slice(0, t);
            }
          },
          x = function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : c.EE.FULL,
              n =
                arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
            return n ? r().utc(e).format(t) : r()(e).format(t);
          },
          f = function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : 'normal',
              t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : { tiny: 76, small: 96, normal: 160, large: 280 },
              n = t[e];
            return {
              Container: (0, o.useMemo)(
                () => e => {
                  let { children: t } = e;
                  return (0, a.jsx)(d.h, {
                    height: n,
                    minHeight: n,
                    width: '100%',
                    children: t,
                  });
                },
                [e]
              ),
              minHeight: n,
            };
          },
          p = e => {
            let {
                data: t,
                xAxisKey: n,
                yAxisKey: a,
                stackKey: s,
                variant: r = 'values',
              } = e,
              i = (0, o.useMemo)(
                () =>
                  t
                    ? Object.entries(
                        t.reduce((e, t) => {
                          let r = t[n],
                            i = t[a],
                            l = t[s];
                          return (e[r] || (e[r] = {}), (e[r][l] = i), e);
                        }, {})
                      ).map(e => {
                        let [t, a] = e;
                        return {
                          ...a,
                          [n]: Number.isNaN(Number(t)) ? t : Number(t),
                        };
                      })
                    : [],
                [JSON.stringify(t)]
              ),
              l = (0, o.useMemo)(
                () =>
                  Object.keys(i[0] || {})
                    .filter(e => e !== n && e !== a)
                    .sort(),
                [JSON.stringify(i[0] || {})]
              ),
              d = (0, o.useMemo)(() => {
                if ('percentages' === r)
                  return i.map(e => {
                    let t = Object.entries(e),
                      n = t
                        .filter(e => {
                          let [t, n] = e;
                          return l.includes(t);
                        })
                        .reduce((e, t) => {
                          let [n, a] = t;
                          return e + a;
                        }, 0);
                    return t.reduce((e, t) => {
                      let [a, s] = t;
                      return l.includes(a)
                        ? { ...e, [a]: 0 !== s ? s / n : 0 }
                        : { ...e, [a]: s };
                    }, {});
                  });
              }, [JSON.stringify(i)]);
            return { dataKeys: l, stackedData: i, percentagesStackedData: d };
          };
      },
      54234: function (e, t, n) {
        'use strict';
        var a = n(97458),
          s = n(67297),
          r = n(65092),
          i = n(30812),
          l = n(5699);
        t.Z = e => {
          let {
              attribute: t,
              message: n = 'No data to show',
              description: o,
              format: d,
              className: c = '',
              size: u,
            } = e,
            { minHeight: m } = (0, l.D3)(u);
          return (0, a.jsxs)('div', {
            'data-sentry-component': 'NoDataPlaceholder',
            'data-sentry-source-file': 'NoDataPlaceholder.tsx',
            children: [
              void 0 !== t &&
                (0, a.jsx)(i.Z, { title: t, format: d, highlightedValue: 0 }),
              (0, a.jsxs)('div', {
                className: (0, r.cn)(
                  'border-control flex flex-grow w-full flex-col items-center justify-center space-y-2 border border-dashed text-center',
                  c
                ),
                style: { minHeight: m + 20 },
                children: [
                  (0, a.jsx)(s.Z, {
                    size: 20,
                    className: 'text-border-stronger',
                    'data-sentry-element': 'BarChart2',
                    'data-sentry-source-file': 'NoDataPlaceholder.tsx',
                  }),
                  (0, a.jsxs)('div', {
                    className: 'px-1',
                    children: [
                      (0, a.jsx)('p', {
                        className: 'text-foreground-light text-xs',
                        children: n,
                      }),
                      o &&
                        (0, a.jsx)('p', {
                          className: 'text-foreground-lighter text-xs',
                          children: o,
                        }),
                    ],
                  }),
                ],
              }),
            ],
          });
        };
      },
      71410: function (e, t, n) {
        'use strict';
        n.d(t, {
          z: function () {
            return x;
          },
        });
        var a = n(97458),
          s = n(98601),
          r = n(29790),
          i = n(57304),
          l = n(81307),
          o = n(52983),
          d = n(84012),
          c = n(34549),
          u = n(45536),
          m = n(14500),
          h = n(90839);
        let x = e => {
          let {
              type: t = 'default',
              align: n = 'start',
              results: x,
              fileName: f,
              onCopyAsMarkdown: p,
              onCopyAsJSON: g,
            } = e,
            y = (0, o.useRef)(null),
            v = (0, o.useMemo)(() => {
              if (x) {
                let e = Array.from(x)[0];
                if (e) return Object.keys(e);
              }
            }, [x]);
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(m.h_, {
                'data-sentry-element': 'DropdownMenu',
                'data-sentry-source-file': 'DownloadResultsButton.tsx',
                children: [
                  (0, a.jsx)(m.$F, {
                    asChild: !0,
                    'data-sentry-element': 'DropdownMenuTrigger',
                    'data-sentry-source-file': 'DownloadResultsButton.tsx',
                    children: (0, a.jsx)(h.z, {
                      type: t,
                      iconRight: (0, a.jsx)(s.Z, {}),
                      disabled: 0 === x.length,
                      'data-sentry-element': 'Button',
                      'data-sentry-source-file': 'DownloadResultsButton.tsx',
                      children: 'Export',
                    }),
                  }),
                  (0, a.jsxs)(m.AW, {
                    align: n,
                    className: 'w-44',
                    'data-sentry-element': 'DropdownMenuContent',
                    'data-sentry-source-file': 'DownloadResultsButton.tsx',
                    children: [
                      (0, a.jsxs)(m.Xi, {
                        className: 'gap-x-2',
                        onClick: () => {
                          var e;
                          return null === (e = y.current) || void 0 === e
                            ? void 0
                            : e.link.click();
                        },
                        'data-sentry-element': 'DropdownMenuItem',
                        'data-sentry-source-file': 'DownloadResultsButton.tsx',
                        children: [
                          (0, a.jsx)(r.Z, {
                            size: 14,
                            'data-sentry-element': 'Download',
                            'data-sentry-source-file':
                              'DownloadResultsButton.tsx',
                          }),
                          (0, a.jsx)('p', { children: 'Download CSV' }),
                        ],
                      }),
                      (0, a.jsxs)(m.Xi, {
                        onClick: () => {
                          if (navigator) {
                            0 == x.length && (0, c.Am)('Results are empty');
                            let e = Object.keys(x[0]),
                              t = x.map(t => {
                                let n = [];
                                return (e.forEach(e => n.push(t[e])), n);
                              }),
                              n = [e].concat(t),
                              a = (0, l.x)(n);
                            (0, u.vQ)(a, () => {
                              (c.Am.success('Copied results to clipboard'),
                                null == p || p());
                            });
                          }
                        },
                        className: 'gap-x-2',
                        'data-sentry-element': 'DropdownMenuItem',
                        'data-sentry-source-file': 'DownloadResultsButton.tsx',
                        children: [
                          (0, a.jsx)(i.Z, {
                            size: 14,
                            'data-sentry-element': 'Clipboard',
                            'data-sentry-source-file':
                              'DownloadResultsButton.tsx',
                          }),
                          (0, a.jsx)('p', { children: 'Copy as markdown' }),
                        ],
                      }),
                      (0, a.jsxs)(m.Xi, {
                        onClick: () => {
                          if (navigator) {
                            if (0 === x.length)
                              return (0, c.Am)('Results are empty');
                            (0, u.vQ)(JSON.stringify(x, null, 2), () => {
                              (c.Am.success('Copied results to clipboard'),
                                null == g || g());
                            });
                          }
                        },
                        className: 'gap-x-2',
                        'data-sentry-element': 'DropdownMenuItem',
                        'data-sentry-source-file': 'DownloadResultsButton.tsx',
                        children: [
                          (0, a.jsx)(i.Z, {
                            size: 14,
                            'data-sentry-element': 'Clipboard',
                            'data-sentry-source-file':
                              'DownloadResultsButton.tsx',
                          }),
                          (0, a.jsx)('p', { children: 'Copy as JSON' }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(d.CSVLink, {
                ref: y,
                className: 'hidden',
                headers: v,
                data: x,
                filename: ''.concat(f, '.csv'),
                'data-sentry-element': 'CSVLink',
                'data-sentry-source-file': 'DownloadResultsButton.tsx',
              }),
            ],
          });
        };
      },
      79228: function (e, t, n) {
        'use strict';
        (n.r(t),
          n.d(t, {
            default: function () {
              return tn;
            },
          }));
        var a = n(97458),
          s = n(32691),
          r = n(52983),
          i = n(34243),
          l = n(36457),
          o = n(42019),
          d = n(59171),
          c = n(16402),
          u = n(52675),
          m = n(33342),
          h = n(37393),
          x = n(34583),
          f = n.n(x),
          p = n(34549),
          g = n(12436),
          y = n(30457),
          v = n(17212),
          b = n(92797),
          j = n(20084),
          N = n(6464),
          w = n(3190),
          S = n(2343),
          _ = n(66802),
          C = n(69951),
          E = n(82288),
          L = n(18293),
          k = n(87313),
          R = n(75541),
          A = n(62432),
          D = n(37756),
          I = n(37462),
          T = n(45536),
          z = n(81514),
          U = n(99492),
          M = n(86186),
          q = n(619),
          P = n(24561),
          Z = n(49825),
          K = n(89429),
          F = n(65092),
          O = n(40577),
          Q = n(14500),
          B = n(90839),
          G = n(45437),
          V = n(51571);
        let W = e => {
          let {
            value: t,
            onChange: n,
            onSubmit: s,
            onAccept: i,
            onReject: l,
            isDiffVisible: o,
            isLoading: d = !1,
          } = e;
          (0, T.fV)();
          let c = (0, r.useCallback)(e => {
              setTimeout(() => {
                null == e || e.focus();
              }, 0);
            }, []),
            u = () => {
              t.trim() && !d && s(t);
            };
          return (0, a.jsxs)('div', {
            className:
              'overflow-hidden rounded-md p-0 bg-popover border border-foreground/20 focus-within:border-foreground/30 shadow-xl text-sm max-w-xl',
            'data-sentry-component': 'AskAIWidget',
            'data-sentry-source-file': 'AskAIWidget.tsx',
            children: [
              (0, a.jsx)(V.Z, {
                inputRef: c,
                size: 'xlarge',
                inputClassName:
                  'bg-transparent border-none shadow-none gap-4 text-xs focus-visible:outline-none focus-visible:ring-0 py-2 pl-3',
                placeholder: o
                  ? 'Make an edit...'
                  : 'Edit SQL via the Assistant...',
                autoFocus: !0,
                value: t,
                onChange: e => n(e.target.value),
                onKeyDown: e => {
                  'Enter' !== e.key || e.metaKey || e.ctrlKey || u();
                },
                disabled: d,
                'data-sentry-element': 'Input',
                'data-sentry-source-file': 'AskAIWidget.tsx',
              }),
              o &&
                (0, a.jsxs)('div', {
                  className: 'flex justify-start p-0 border-t',
                  children: [
                    (0, a.jsxs)(B.z, {
                      type: 'text',
                      onClick: i,
                      className:
                        'text-xs h-auto py-1 rounded-none px-3 border-r-border',
                      disabled: d,
                      children: [
                        'Accept ',
                        (0, a.jsx)('span', {
                          className: 'text-xs text-foreground-light',
                          children: '⌘ + Enter',
                        }),
                      ],
                    }),
                    (0, a.jsxs)(B.z, {
                      onClick: l,
                      type: 'text',
                      className:
                        'text-xs h-auto py-1 rounded-none px-3 border-r-border',
                      disabled: d,
                      children: [
                        'Reject ',
                        (0, a.jsx)('span', {
                          className: 'text-xs text-foreground-light',
                          children: 'Esc',
                        }),
                      ],
                    }),
                  ],
                }),
            ],
          });
        };
        var H = n(97008),
          X = n(63730),
          Y = e => {
            let {
                children: t,
                editor: n,
                id: a,
                beforeLineNumber: s,
                afterLineNumber: i = 0,
                heightInLines: l = 1,
              } = e,
              o = null != s ? s : i,
              d = ''.concat(a, '-').concat(o.toString()),
              c = (0, r.useMemo)(() => document.createElement('div'), []),
              u = 'getModifiedEditor' in n ? n.getModifiedEditor() : n;
            return (
              (0, r.useEffect)(() => {
                let e;
                let t = 0,
                  n = 0,
                  r = {
                    getId: () => a,
                    getDomNode: () => c,
                    getPosition: () => null,
                  },
                  o = () => {
                    let e = u.getLayoutInfo();
                    e &&
                      ((c.style.left = ''.concat(e.contentLeft, 'px')),
                      (c.style.top = ''.concat(t, 'px')),
                      (c.style.width = ''.concat(
                        e.width - e.contentLeft,
                        'px'
                      )),
                      (c.style.height = ''.concat(n, 'px')));
                  };
                return (
                  u.changeViewZones(a => {
                    ((e = a.addZone({
                      afterLineNumber: null != s ? s : i,
                      heightInLines: l,
                      domNode: document.createElement('div'),
                      onDomNodeTop: e => {
                        ((t = e), o());
                      },
                      onComputedHeight: e => {
                        ((n = e), o());
                      },
                    })),
                      u.addOverlayWidget(r));
                  }),
                  () => {
                    u.changeViewZones(t => {
                      (t.removeZone(e), u.removeOverlayWidget(r));
                    });
                  }
                );
              }, [u, a, s, i, l, c]),
              (0, X.createPortal)(t, c, d)
            );
          },
          J = n(11221),
          $ = n(32002);
        let ee = e => {
          let {
            visible: t,
            hasDestructiveOperations: n,
            hasUpdateWithoutWhere: s,
            onCancel: r,
            onConfirm: i,
          } = e;
          return (0, a.jsxs)($.Z, {
            visible: t,
            size: 'large',
            title: 'Potential issue'.concat(
              n && s ? 's' : '',
              ' detected with your query'
            ),
            confirmLabel: 'Run this query',
            variant: 'warning',
            alert: {
              base: { variant: 'warning' },
              title:
                n && s
                  ? 'The following potential issues have been detected:'
                  : 'The following potential issue has been detected:',
              description:
                'Ensure that these are intentional before executing this query',
            },
            onCancel: r,
            onConfirm: i,
            'data-sentry-element': 'ConfirmationModal',
            'data-sentry-component': 'RunQueryWarningModal',
            'data-sentry-source-file': 'RunQueryWarningModal.tsx',
            children: [
              (0, a.jsx)('div', {
                className: 'text-sm',
                children: (0, a.jsxs)('ul', {
                  className: 'border rounded-md grid bg-surface-200',
                  children: [
                    n &&
                      (0, a.jsxs)('li', {
                        className: 'grid pt-3 pb-2 px-4',
                        children: [
                          (0, a.jsx)('span', {
                            className: 'font-bold',
                            children: 'Query has destructive operation',
                          }),
                          (0, a.jsx)('span', {
                            className: 'text-foreground-lighter',
                            children:
                              'Make sure you are not accidentally removing something important.',
                          }),
                        ],
                      }),
                    n && s && (0, a.jsx)(J.Z, {}),
                    s &&
                      (0, a.jsxs)('li', {
                        className: 'grid pt-2 pb-3 px-4 gap-1',
                        children: [
                          (0, a.jsx)('span', {
                            className: 'font-bold',
                            children:
                              'Query uses update without a where clause',
                          }),
                          (0, a.jsxs)('span', {
                            className: 'text-foreground-lighter',
                            children: [
                              'Without a ',
                              (0, a.jsx)('code', {
                                className: 'text-xs',
                                children: 'where',
                              }),
                              ' clause, this could update all rows in the table.',
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, a.jsx)('p', {
                className: 'mt-4 text-sm text-foreground-light',
                children:
                  'Please confirm that you would like to execute this query.',
              }),
            ],
          });
        };
        var et = n(44840),
          en = n(22851),
          ea = n(76689),
          es = n(88971),
          er = n(51497);
        function ei(e) {
          return e.replace(/^\"/, '').replace(/\"$/, '').replace(/\"\"/, '"');
        }
        function el(e) {
          return e != e.toLowerCase() ? '"'.concat(e, '"') : e;
        }
        var eo = n(32875),
          ed = n(28894),
          ec = n(25878),
          eu = n(7324);
        let em = () => '\nSELECT word FROM pg_get_keywords();\n'.trim();
        async function eh(e, t) {
          let { projectRef: n, connectionString: a } = e,
            s = em(),
            { result: r } = await (0, ec.R)(
              {
                projectRef: n,
                connectionString: a,
                sql: s,
                queryKey: ['keywords'],
              },
              t
            );
          return r.map(e => e.word.toLocaleLowerCase());
        }
        let ex = function (e) {
          let { projectRef: t, connectionString: n } = e,
            { enabled: a = !0, ...s } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (0, ed.a)(
            eu.A.keywords(t),
            e => {
              let { signal: a } = e;
              return eh({ projectRef: t, connectionString: n }, a);
            },
            { enabled: a && void 0 !== t, ...s }
          );
        };
        var ef = n(58015),
          ep = n(92563),
          eg = n(92261);
        let ey = (e, t) => {
          let { project: n } = (0, es.d2)(),
            a = (0, Z.B0)(),
            [s] = (0, eg.l)(D.dA.SQL_EDITOR_INTELLISENSE, !0),
            { data: i, isSuccess: l } = ex(
              {
                projectRef: null == n ? void 0 : n.ref,
                connectionString: null == n ? void 0 : n.connectionString,
              },
              { enabled: s }
            ),
            { data: o, isSuccess: d } = (0, eo.R)(
              {
                projectRef: null == n ? void 0 : n.ref,
                connectionString: null == n ? void 0 : n.connectionString,
              },
              { enabled: s }
            ),
            { data: c, isSuccess: u } = (0, ef.Q1)(
              {
                projectRef: null == n ? void 0 : n.ref,
                connectionString: null == n ? void 0 : n.connectionString,
              },
              { enabled: s }
            ),
            { data: m, isSuccess: h } = (0, ep.Kz)(
              {
                projectRef: null == n ? void 0 : n.ref,
                connectionString: null == n ? void 0 : n.connectionString,
              },
              { enabled: s }
            ),
            x = (0, r.useRef)(null),
            f = s && h && u && l && d;
          (f &&
            (null === x.current && (x.current = {}),
            (x.current.tableColumns = m),
            (x.current.schemas = c),
            (x.current.keywords = i),
            (x.current.functions = o)),
            (0, r.useEffect)(() => {
              if (t) {
                let n = t.languages.registerDocumentFormattingEditProvider(
                  'pgsql',
                  {
                    async provideDocumentFormattingEdits(t) {
                      let n = t.getValue(),
                        s = (0, I._)(n);
                      return (
                        e && a.setSql(e, s),
                        [{ range: t.getFullModelRange(), text: s }]
                      );
                    },
                  }
                );
                return () => n.dispose();
              }
            }, [t]),
            (0, r.useEffect)(() => {
              let e = null,
                n = null;
              return (
                f &&
                  t &&
                  f &&
                  ((e = t.languages.registerCompletionItemProvider('pgsql', {
                    triggerCharacters: [' ', '.', '"'],
                    provideCompletionItems: function (e, n, a) {
                      try {
                        let s = new er.Z(e, n.column - 2, n.lineNumber - 1);
                        if ('"' === a.triggerCharacter)
                          return (function (e, t, n) {
                            let a = [];
                            if (!n.isFowardDQuote()) return { suggestions: a };
                            if ((n.next(), n.isNextPeriod())) {
                              let s = n.readIdent(),
                                r = !1;
                              s.match(/^\".*?\"$/) && ((r = !0), (s = ei(s)));
                              let i = t.current.tableColumns.find(
                                e =>
                                  (r && e.tablename === s) ||
                                  (!r &&
                                    e.tablename.toLocaleLowerCase() ==
                                      s.toLocaleLowerCase())
                              );
                              if (!i) return { suggestions: a };
                              i.columns.forEach(t => {
                                a.push({
                                  label: t.attname,
                                  kind: e.languages.CompletionItemKind.Property,
                                  detail: t.data_type,
                                  insertText: t.attname,
                                });
                              });
                            } else
                              t.current.tableColumns.forEach(t => {
                                a.push({
                                  label: t.tablename,
                                  kind: e.languages.CompletionItemKind.Class,
                                  insertText: t.tablename,
                                });
                              });
                            return { suggestions: a };
                          })(t, x, s);
                        if ('.' === a.triggerCharacter)
                          return (function (e, t, n) {
                            let a = [],
                              s = n.readIdents(3).map(e => {
                                let t = !1;
                                return (
                                  e.match(/^\".*?\"$/) &&
                                    ((t = !0), (e = ei(e))),
                                  { isQuoted: t, name: e }
                                );
                              }),
                              r = 0,
                              i = t.current.schemas.find(e => {
                                var t, n;
                                let a = s && s.length > r ? s[r] : {};
                                return (
                                  (a.isQuoted && e.name === a.name) ||
                                  (!a.isQuoted &&
                                    (null === (t = e.name) || void 0 === t
                                      ? void 0
                                      : t.toLocaleLowerCase()) ==
                                      (null === (n = a.name) || void 0 === n
                                        ? void 0
                                        : n.toLocaleLowerCase()))
                                );
                              });
                            if (
                              (i
                                ? r++
                                : (i = t.current.schemas.find(
                                    e => 'public' == e.name
                                  )),
                              s.length == r)
                            )
                              return (
                                t.current.tableColumns.forEach(t => {
                                  t.schemaname == i.name &&
                                    a.push({
                                      label: t.tablename,
                                      kind: e.languages.CompletionItemKind
                                        .Class,
                                      detail:
                                        'public' !== t.schemaname
                                          ? t.schemaname
                                          : null,
                                      insertText: el(t.tablename),
                                    });
                                }),
                                { suggestions: a }
                              );
                            let l = t.current.tableColumns.find(e => {
                              var t, n;
                              let a = s && s.length > r ? s[r] : {};
                              return (
                                (e.schemaname == i.name &&
                                  a.isQuoted &&
                                  e.tablename === a.name) ||
                                (!a.isQuoted &&
                                  (null === (t = e.tablename) || void 0 === t
                                    ? void 0
                                    : t.toLocaleLowerCase()) ==
                                    (null === (n = a.name) || void 0 === n
                                      ? void 0
                                      : n.toLocaleLowerCase()))
                              );
                            });
                            return (
                              l &&
                                l.columns.forEach(t => {
                                  a.push({
                                    label: t.attname,
                                    kind: e.languages.CompletionItemKind
                                      .Property,
                                    detail: t.data_type,
                                    insertText: el(t.attname),
                                  });
                                }),
                              { suggestions: a }
                            );
                          })(t, x, s);
                        return (function (e, t) {
                          var n, a, s, r;
                          let i = [];
                          return (
                            (null === (n = t.current.keywords) || void 0 === n
                              ? void 0
                              : n.length) > 0 &&
                              t.current.keywords.forEach(t => {
                                i.push({
                                  label: t,
                                  kind: e.languages.CompletionItemKind.Keyword,
                                  insertText: t,
                                });
                              }),
                            (null === (a = t.current.schemas) || void 0 === a
                              ? void 0
                              : a.length) > 0 &&
                              t.current.schemas.forEach(t => {
                                i.push({
                                  label: t.name,
                                  kind: e.languages.CompletionItemKind.Keyword,
                                  insertText: t.name,
                                });
                              }),
                            (null === (s = t.current.tableColumns) ||
                            void 0 === s
                              ? void 0
                              : s.length) > 0 &&
                              t.current.tableColumns.forEach(t => {
                                let n =
                                  'public' == t.schemaname
                                    ? t.tablename
                                    : t.schemaname + '.' + t.tablename;
                                (i.push({
                                  label: t.tablename,
                                  detail:
                                    'public' !== t.schemaname
                                      ? t.schemaname
                                      : null,
                                  kind: t.is_table
                                    ? e.languages.CompletionItemKind.Class
                                    : e.languages.CompletionItemKind.Interface,
                                  insertText: el(n),
                                }),
                                  t.columns.forEach(n => {
                                    if (!n) return;
                                    let a = i.find(
                                      t =>
                                        t.label ===
                                          (null == n ? void 0 : n.attname) &&
                                        t.kind ===
                                          e.languages.CompletionItemKind
                                            .Field &&
                                        t.detail ===
                                          (null == n ? void 0 : n.data_type)
                                    );
                                    a
                                      ? (a.tables.push(t.tablename),
                                        a.tables.sort(),
                                        (a.documentation = a.tables.join(', ')))
                                      : i.push({
                                          label: n.attname,
                                          kind: e.languages.CompletionItemKind
                                            .Field,
                                          detail: n.data_type,
                                          documentation: t.tablename,
                                          tables: [t.tablename],
                                          insertText: el(n.attname),
                                        });
                                  }));
                              }),
                            (null === (r = t.current.functions) || void 0 === r
                              ? void 0
                              : r.length) > 0 &&
                              t.current.functions.forEach(t => {
                                i.push({
                                  label: t.name,
                                  kind: e.languages.CompletionItemKind.Function,
                                  detail: t.return_type,
                                  insertText: t.name,
                                });
                              }),
                            { suggestions: i }
                          );
                        })(t, x);
                      } catch (e) {
                        return { suggestions: [] };
                      }
                    },
                  })),
                  (n = t.languages.registerSignatureHelpProvider('pgsql', {
                    signatureHelpTriggerCharacters: ['(', ','],
                    provideSignatureHelp: function (e, t) {
                      let n = new er.Z(e, t.column - 2, t.lineNumber - 1),
                        a = n.readArguments();
                      if (a < 0) return null;
                      let s = n.readIdent();
                      if (!s || s.match(/^\".*?\"$/)) return null;
                      let r = x.current.functions.find(
                        e =>
                          e.name.toLocaleLowerCase() === s.toLocaleLowerCase()
                      );
                      if (!r || !r.args || r.args.length < a) return null;
                      let i = Math.min(a, r.args.length - 1),
                        l = [];
                      return (
                        l.push({
                          label: ''
                            .concat(r.name, '(')
                            .concat(r.argument_types, ')'),
                          parameters: r.args.map(e => ({ label: e.name })),
                        }),
                        {
                          value: {
                            signatures: l,
                            activeSignature: 0,
                            activeParameter: i,
                          },
                          dispose: () => {},
                        }
                      );
                    },
                  }))),
                () => {
                  (null == e || e.dispose(), null == n || n.dispose());
                }
              );
            }, [f, t]));
        };
        var ev = n(71410),
          eb = n(52521),
          ej = n(92240),
          eN = n(28977),
          ew = n.n(eN),
          eS = n(54944),
          e_ = n(98686),
          eC = n(359),
          eE = n(5315),
          eL = n(54234),
          ek = n(21786),
          eR = n(83145),
          eA = n.n(eR),
          eD = n(73565),
          eI = n(36155),
          eT = n(22714),
          ez = n(61893),
          eU = n(33526);
        let eM = (e, t) => {
            var n;
            return (
              null == e
                ? void 0
                : null === (n = e.rows) || void 0 === n
                  ? void 0
                  : n.length
            )
              ? e.rows.reduce((e, n) => {
                  let a = e[e.length - 1] || {};
                  return [
                    ...e,
                    { ...n, [t.yKey]: (a[t.yKey] || 0) + n[t.yKey] },
                  ];
                }, [])
              : [];
          },
          eq = ['number', 'string', 'date'],
          eP = e => {
            let { results: t = { rows: [] }, config: n, onConfigChange: s } = e,
              { ref: i } = (0, g.UO)(),
              l = (0, ek.P)('reportsV2'),
              [o, d] = (0, eg.l)(D.dA.SQL_EDITOR_SQL_BLOCK_ACKNOWLEDGED(i), !1),
              c = (0, r.useMemo)(
                () =>
                  Object.keys(t.rows[0] || {}).filter(e => {
                    let n = typeof t.rows[0][e];
                    return eq.includes(n);
                  }),
                [t]
              ),
              u = (0, r.useMemo)(
                () =>
                  t.rows[0]
                    ? Object.keys(t.rows[0]).filter(e => {
                        let n = t.rows[0][e];
                        return 'number' == typeof n || !isNaN(Number(n));
                      })
                    : [],
                [t]
              ),
              m = n.xKey && n.yKey,
              h = (0, r.useMemo)(() => {
                var e, a;
                if (!m) return !1;
                let s = typeof (null === (e = t.rows[0]) || void 0 === e
                    ? void 0
                    : e[n.xKey]),
                  r = typeof (null === (a = t.rows[0]) || void 0 === a
                    ? void 0
                    : a[n.yKey]);
                return 'number' === s && 'number' === r;
              }, [m, t.rows, n.xKey, n.yKey]),
              x = (0, r.useMemo)(() => eM(t, n), [t, n]),
              f = n.cumulative ? x : t.rows;
            if (!c.length)
              return (0, a.jsx)('div', {
                className: 'p-2',
                children: (0, a.jsx)(eL.Z, {
                  size: 'normal',
                  description:
                    'Execute a query and configure the chart options.',
                }),
              });
            let p = (e => {
              var t;
              let n =
                (null == f
                  ? void 0
                  : null === (t = f[0]) || void 0 === t
                    ? void 0
                    : t[e]) || '';
              return 'number' == typeof n
                ? 'number'
                : ew()(n).isValid()
                  ? 'date'
                  : 'string';
            })(n.xKey);
            return (0, a.jsxs)(K.pO, {
              direction: 'horizontal',
              className: 'flex-grow h-full',
              'data-sentry-element': 'ResizablePanelGroup',
              'data-sentry-component': 'ChartConfig',
              'data-sentry-source-file': 'ChartConfig.tsx',
              children: [
                (0, a.jsx)(K.ee, {
                  className: 'p-4 h-full',
                  defaultSize: 75,
                  'data-sentry-element': 'ResizablePanel',
                  'data-sentry-source-file': 'ChartConfig.tsx',
                  children: (0, a.jsx)(
                    () =>
                      m
                        ? 'bar' === n.type
                          ? (0, a.jsx)(eE.Z, {
                              showLegend: !0,
                              size: 'normal',
                              xAxisIsDate: 'date' === p,
                              data: f,
                              xAxisKey: n.xKey,
                              yAxisKey: n.yKey,
                              showGrid: n.showGrid,
                              XAxisProps: {
                                angle: 0,
                                interval: 'preserveStart',
                                hide: !n.showLabels,
                                tickFormatter: e => {
                                  let t = f[+e][n.xKey];
                                  return 'date' === p
                                    ? ew()(t).format('MMM D YYYY HH:mm')
                                    : t;
                                },
                              },
                              YAxisProps: {
                                tickFormatter: e => e.toLocaleString(),
                                hide: !n.showLabels,
                                domain: [0, 'dataMax'],
                              },
                            })
                          : void 0
                        : (0, a.jsx)(K.ee, {
                            className: 'p-4 h-full',
                            defaultSize: 75,
                            children: (0, a.jsx)(eL.Z, {
                              size: 'normal',
                              title: 'Configure your chart',
                              description:
                                'Select your X and Y axis in the chart options panel',
                            }),
                          }),
                    {
                      'data-sentry-element': 'ChartPanel',
                      'data-sentry-source-file': 'ChartConfig.tsx',
                    }
                  ),
                }),
                (0, a.jsx)(K.Dp, {
                  withHandle: !0,
                  'data-sentry-element': 'ResizableHandle',
                  'data-sentry-source-file': 'ChartConfig.tsx',
                }),
                (0, a.jsxs)(K.ee, {
                  defaultSize: 25,
                  minSize: 15,
                  className: 'px-3 py-3 space-y-4 !overflow-y-auto',
                  'data-sentry-element': 'ResizablePanel',
                  'data-sentry-source-file': 'ChartConfig.tsx',
                  children: [
                    (0, a.jsxs)('div', {
                      className: 'flex justify-between items-center h-5',
                      children: [
                        (0, a.jsx)('h2', {
                          className: 'text-sm text-foreground-lighter',
                          children: 'Chart options',
                        }),
                        n.xKey &&
                          n.yKey &&
                          (0, a.jsx)(eC.u, {
                            type: 'text',
                            size: 'tiny',
                            onClick: () => {
                              let e = n.xKey,
                                t = n.yKey;
                              s({ ...n, xKey: t, yKey: e });
                            },
                            disabled: !h,
                            icon: (0, a.jsx)(eS.Z, {
                              size: '15',
                              className: 'text-foreground-lighter',
                            }),
                            tooltip: {
                              content: {
                                side: 'bottom',
                                className: 'w-64 text-center',
                                text: h
                                  ? 'Swap X and Y axis'
                                  : 'Unable to swap X and Y axis - both axes need to numerical values',
                              },
                            },
                            children: 'Flip',
                          }),
                      ],
                    }),
                    l &&
                      !o &&
                      (0, a.jsxs)(eU.J, {
                        showIcon: !1,
                        type: 'tip',
                        className: 'p-2 relative group',
                        children: [
                          (0, a.jsxs)(O.u, {
                            children: [
                              (0, a.jsx)(O.aJ, {
                                onClick: () => d(!0),
                                className:
                                  'absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity',
                                children: (0, a.jsx)(e_.Z, {
                                  size: 14,
                                  className: 'text-foreground-light',
                                }),
                              }),
                              (0, a.jsx)(O._v, {
                                side: 'bottom',
                                children: 'Dismiss',
                              }),
                            ],
                          }),
                          (0, a.jsxs)('div', {
                            className: 'flex items-center gap-x-2',
                            children: [
                              (0, a.jsx)(eD.C, {
                                variant: 'success',
                                className: 'text-xs rounded px-1',
                                children: 'NEW',
                              }),
                              (0, a.jsx)('p', {
                                className: 'text-xs',
                                children: 'Add this chart to custom reports',
                              }),
                            ],
                          }),
                          (0, a.jsx)('p', {
                            className: 'text-xs text-foreground-light mt-1',
                            children:
                              'SQL snippets can now be added and saved to your custom reports. Try it out now!',
                          }),
                          (0, a.jsx)(B.z, {
                            asChild: !0,
                            size: 'tiny',
                            type: 'default',
                            className: 'mt-2',
                            children: (0, a.jsx)(eA(), {
                              href: '/project/'.concat(i, '/reports'),
                              children: 'Head to Reports',
                            }),
                          }),
                        ],
                      }),
                    (0, a.jsxs)('div', {
                      children: [
                        (0, a.jsx)(eI._, {
                          className: 'text-xs text-foreground-light',
                          'data-sentry-element': 'Label_Shadcn_',
                          'data-sentry-source-file': 'ChartConfig.tsx',
                          children: 'X Axis',
                        }),
                        (0, a.jsxs)(eT.Ph, {
                          value: n.xKey,
                          onValueChange: e => {
                            s({ ...n, xKey: e });
                          },
                          'data-sentry-element': 'Select_Shadcn_',
                          'data-sentry-source-file': 'ChartConfig.tsx',
                          children: [
                            (0, a.jsx)(eT.i4, {
                              'data-sentry-element': 'SelectTrigger_Shadcn_',
                              'data-sentry-source-file': 'ChartConfig.tsx',
                              children: n.xKey || 'Select X Axis',
                            }),
                            (0, a.jsx)(eT.Bw, {
                              'data-sentry-element': 'SelectContent_Shadcn_',
                              'data-sentry-source-file': 'ChartConfig.tsx',
                              children: (0, a.jsx)(eT.DI, {
                                'data-sentry-element': 'SelectGroup_Shadcn_',
                                'data-sentry-source-file': 'ChartConfig.tsx',
                                children: c.map(e =>
                                  (0, a.jsx)(
                                    eT.Ql,
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      children: [
                        (0, a.jsx)(eI._, {
                          className: 'text-xs text-foreground-light',
                          'data-sentry-element': 'Label_Shadcn_',
                          'data-sentry-source-file': 'ChartConfig.tsx',
                          children: 'Y Axis',
                        }),
                        (0, a.jsxs)(eT.Ph, {
                          value: n.yKey,
                          onValueChange: e => {
                            s({ ...n, yKey: e });
                          },
                          'data-sentry-element': 'Select_Shadcn_',
                          'data-sentry-source-file': 'ChartConfig.tsx',
                          children: [
                            (0, a.jsx)(eT.i4, {
                              'data-sentry-element': 'SelectTrigger_Shadcn_',
                              'data-sentry-source-file': 'ChartConfig.tsx',
                              children: n.yKey || 'Select Y Axis',
                            }),
                            (0, a.jsx)(eT.Bw, {
                              'data-sentry-element': 'SelectContent_Shadcn_',
                              'data-sentry-source-file': 'ChartConfig.tsx',
                              children: (0, a.jsx)(eT.DI, {
                                'data-sentry-element': 'SelectGroup_Shadcn_',
                                'data-sentry-source-file': 'ChartConfig.tsx',
                                children: u.map(e =>
                                  (0, a.jsx)(
                                    eT.Ql,
                                    { value: e, children: e },
                                    e
                                  )
                                ),
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsxs)('div', {
                      className:
                        '*:flex *:gap-2 *:items-center grid gap-2 *:text-foreground-light *:p-1.5 *:pl-0',
                      children: [
                        (0, a.jsxs)(eI._, {
                          className: '',
                          htmlFor: 'cumulative',
                          'data-sentry-element': 'Label_Shadcn_',
                          'data-sentry-source-file': 'ChartConfig.tsx',
                          children: [
                            (0, a.jsx)(ez.X, {
                              id: 'cumulative',
                              name: 'cumulative',
                              checked: n.cumulative,
                              onClick: () =>
                                s({ ...n, cumulative: !n.cumulative }),
                              'data-sentry-element': 'Checkbox_Shadcn_',
                              'data-sentry-source-file': 'ChartConfig.tsx',
                            }),
                            'Cumulative',
                          ],
                        }),
                        (0, a.jsxs)(eI._, {
                          htmlFor: 'showLabels',
                          'data-sentry-element': 'Label_Shadcn_',
                          'data-sentry-source-file': 'ChartConfig.tsx',
                          children: [
                            (0, a.jsx)(ez.X, {
                              id: 'showLabels',
                              name: 'showLabels',
                              checked: n.showLabels,
                              onClick: () =>
                                s({ ...n, showLabels: !n.showLabels }),
                              'data-sentry-element': 'Checkbox_Shadcn_',
                              'data-sentry-source-file': 'ChartConfig.tsx',
                            }),
                            'Show labels',
                          ],
                        }),
                        (0, a.jsxs)(eI._, {
                          htmlFor: 'showGrid',
                          'data-sentry-element': 'Label_Shadcn_',
                          'data-sentry-source-file': 'ChartConfig.tsx',
                          children: [
                            (0, a.jsx)(ez.X, {
                              id: 'showGrid',
                              name: 'showGrid',
                              checked: n.showGrid,
                              onClick: () => s({ ...n, showGrid: !n.showGrid }),
                              'data-sentry-element': 'Checkbox_Shadcn_',
                              'data-sentry-source-file': 'ChartConfig.tsx',
                            }),
                            'Show grid',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        var eZ = n(68846),
          eK = n(110),
          eF = n(62507),
          eO = n(34216),
          eQ = n(3323),
          eB = n(12309),
          eG = n(96273),
          eV = n(1724),
          eW = n(36958),
          eH = n(44735),
          eX = n(18810),
          eY = e => {
            let { id: t } = e,
              { profile: n } = (0, z.Un)(),
              s = (0, Z.B0)().snippets[t],
              r =
                (null == n ? void 0 : n.id) ===
                (null == s ? void 0 : s.snippet.owner_id);
            return (0, a.jsx)(a.Fragment, {
              children: r ? null : (0, a.jsx)(eD.C, { children: 'Read-only' }),
            });
          },
          eJ = e => {
            let { id: t } = e,
              { profile: n } = (0, z.Un)(),
              s = (0, Z.B0)(),
              i = s.savingStates[t],
              l = (0, eX.D9)(i),
              [o, d] = (0, r.useState)(!1),
              c = s.snippets[t],
              m =
                (null == n ? void 0 : n.id) ===
                (null == c ? void 0 : c.snippet.owner_id);
            return (
              (0, r.useEffect)(() => {
                let e = !1;
                return (
                  'UPDATING' === l &&
                    'IDLE' === i &&
                    (d(!0),
                    setTimeout(() => {
                      e || d(!1);
                    }, 5e3)),
                  () => {
                    e = !0;
                  }
                );
              }, [i]),
              (0, a.jsx)(a.Fragment, {
                children: (0, a.jsxs)('div', {
                  className: 'mx-2 flex items-center gap-2',
                  children: [
                    m &&
                      'UPDATING_FAILED' === i &&
                      (0, a.jsx)(B.z, {
                        type: 'text',
                        size: 'tiny',
                        icon: (0, a.jsx)(eW.Z, {
                          className: 'text-gray-1100',
                          strokeWidth: 2,
                        }),
                        onClick: () => s.addNeedsSaving(t),
                        children: 'Retry',
                      }),
                    o
                      ? (0, a.jsxs)(O.u, {
                          children: [
                            (0, a.jsx)(O.aJ, {
                              children: (0, a.jsx)(eF.Z, {
                                className: 'text-brand',
                                size: 14,
                                strokeWidth: 3,
                              }),
                            }),
                            (0, a.jsx)(O._v, {
                              side: 'bottom',
                              children: 'All changes saved',
                            }),
                          ],
                        })
                      : 'UPDATING' === i
                        ? (0, a.jsxs)(O.u, {
                            children: [
                              (0, a.jsx)(O.aJ, {
                                children: (0, a.jsx)(u.Z, {
                                  className: 'animate-spin',
                                  size: 14,
                                  strokeWidth: 2,
                                }),
                              }),
                              (0, a.jsx)(O._v, {
                                children: 'Saving changes...',
                              }),
                            ],
                          })
                        : 'UPDATING_FAILED' === i
                          ? m
                            ? (0, a.jsxs)(O.u, {
                                children: [
                                  (0, a.jsx)(O.aJ, {
                                    children: (0, a.jsx)(eH.Z, {
                                      className: 'text-red-900',
                                      size: 14,
                                      strokeWidth: 2,
                                    }),
                                  }),
                                  (0, a.jsx)(O._v, {
                                    children: 'Failed to save changes',
                                  }),
                                ],
                              })
                            : (0, a.jsx)(eY, { id: t })
                          : null,
                  ],
                }),
              })
            );
          },
          e$ = e => {
            let {
                id: t,
                isExecuting: n = !1,
                isDisabled: s = !1,
                hasSelection: r,
                prettifyQuery: i,
                executeQuery: l,
              } = e,
              o = (0, T.fV)(),
              { ref: d } = (0, g.UO)(),
              c = (0, Z.B0)(),
              [h] = (0, eg.l)(D.dA.SQL_EDITOR_AI_OPEN, !0),
              [x, f] = (0, eg.l)(D.dA.SQL_EDITOR_INTELLISENSE, !0),
              [y, v] = (0, eg.l)(D.dA.SQL_EDITOR_LAST_SELECTED_DB(d), ''),
              b = c.snippets[t],
              j = void 0 !== b && b.snippet.favorite,
              N = () => {
                (f(!x),
                  p.Am.success(
                    'Successfully '
                      .concat(x ? 'disabled' : 'enabled', ' intellisense. ')
                      .concat(
                        x
                          ? 'Please refresh your browser for changes to take place.'
                          : ''
                      )
                  ));
              },
              w = () => c.addFavorite(t),
              S = () => c.removeFavorite(t);
            return (0, a.jsxs)('div', {
              className: 'inline-flex items-center justify-end gap-x-2',
              'data-sentry-component': 'UtilityActions',
              'data-sentry-source-file': 'UtilityActions.tsx',
              children: [
                D.Qy && (0, a.jsx)(eJ, { id: t }),
                (0, a.jsxs)(Q.h_, {
                  'data-sentry-element': 'DropdownMenu',
                  'data-sentry-source-file': 'UtilityActions.tsx',
                  children: [
                    (0, a.jsx)(Q.$F, {
                      asChild: !0,
                      'data-sentry-element': 'DropdownMenuTrigger',
                      'data-sentry-source-file': 'UtilityActions.tsx',
                      children: (0, a.jsx)(B.z, {
                        type: 'default',
                        className: (0, F.cn)(
                          'px-1',
                          h ? 'block 2xl:hidden' : 'hidden'
                        ),
                        icon: (0, a.jsx)(eZ.Z, {
                          className: 'text-foreground-light',
                        }),
                        'data-sentry-element': 'Button',
                        'data-sentry-source-file': 'UtilityActions.tsx',
                      }),
                    }),
                    (0, a.jsxs)(Q.AW, {
                      className: 'w-48',
                      'data-sentry-element': 'DropdownMenuContent',
                      'data-sentry-source-file': 'UtilityActions.tsx',
                      children: [
                        (0, a.jsxs)(Q.Xi, {
                          className: 'justify-between',
                          onClick: N,
                          'data-sentry-element': 'DropdownMenuItem',
                          'data-sentry-source-file': 'UtilityActions.tsx',
                          children: [
                            (0, a.jsxs)('span', {
                              className: 'flex items-center gap-x-2',
                              children: [
                                (0, a.jsx)(eK.Z, {
                                  size: 14,
                                  className: 'text-foreground-light',
                                  'data-sentry-element': 'Keyboard',
                                  'data-sentry-source-file':
                                    'UtilityActions.tsx',
                                }),
                                'Intellisense enabled',
                              ],
                            }),
                            x &&
                              (0, a.jsx)(eF.Z, {
                                className: 'text-brand',
                                size: 16,
                              }),
                          ],
                        }),
                        (0, a.jsx)(Q.VD, {
                          'data-sentry-element': 'DropdownMenuSeparator',
                          'data-sentry-source-file': 'UtilityActions.tsx',
                        }),
                        (0, a.jsxs)(Q.Xi, {
                          className: 'gap-x-2',
                          onClick: () => {
                            j ? S() : w();
                          },
                          'data-sentry-element': 'DropdownMenuItem',
                          'data-sentry-source-file': 'UtilityActions.tsx',
                          children: [
                            (0, a.jsx)(eO.Z, {
                              size: 14,
                              strokeWidth: 2,
                              className: j
                                ? 'fill-brand stroke-none'
                                : 'fill-none stroke-foreground-light',
                              'data-sentry-element': 'Heart',
                              'data-sentry-source-file': 'UtilityActions.tsx',
                            }),
                            j ? 'Remove from' : 'Add to',
                            ' favorites',
                          ],
                        }),
                        (0, a.jsxs)(Q.Xi, {
                          className: 'gap-x-2',
                          onClick: i,
                          'data-sentry-element': 'DropdownMenuItem',
                          'data-sentry-source-file': 'UtilityActions.tsx',
                          children: [
                            (0, a.jsx)(eQ.Z, {
                              size: 14,
                              strokeWidth: 2,
                              className: 'text-foreground-light',
                              'data-sentry-element': 'AlignLeft',
                              'data-sentry-source-file': 'UtilityActions.tsx',
                            }),
                            'Prettify SQL',
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsxs)('div', {
                  className: (0, F.cn)(
                    'items-center gap-x-2',
                    h ? 'hidden 2xl:flex' : 'flex'
                  ),
                  children: [
                    (0, a.jsxs)(Q.h_, {
                      'data-sentry-element': 'DropdownMenu',
                      'data-sentry-source-file': 'UtilityActions.tsx',
                      children: [
                        (0, a.jsx)(Q.$F, {
                          asChild: !0,
                          'data-sentry-element': 'DropdownMenuTrigger',
                          'data-sentry-source-file': 'UtilityActions.tsx',
                          children: (0, a.jsx)(B.z, {
                            type: 'text',
                            className: 'px-1',
                            icon: (0, a.jsx)(eK.Z, {
                              className: 'text-foreground-light',
                            }),
                            'data-sentry-element': 'Button',
                            'data-sentry-source-file': 'UtilityActions.tsx',
                          }),
                        }),
                        (0, a.jsx)(Q.AW, {
                          className: 'w-48',
                          'data-sentry-element': 'DropdownMenuContent',
                          'data-sentry-source-file': 'UtilityActions.tsx',
                          children: (0, a.jsxs)(Q.Xi, {
                            className: 'justify-between',
                            onClick: N,
                            'data-sentry-element': 'DropdownMenuItem',
                            'data-sentry-source-file': 'UtilityActions.tsx',
                            children: [
                              'Intellisense enabled',
                              x &&
                                (0, a.jsx)(eF.Z, {
                                  className: 'text-brand',
                                  size: 16,
                                }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    D.Qy &&
                      (0, a.jsxs)(O.u, {
                        children: [
                          (0, a.jsx)(O.aJ, {
                            asChild: !0,
                            children: j
                              ? (0, a.jsx)(B.z, {
                                  type: 'text',
                                  size: 'tiny',
                                  onClick: S,
                                  className: 'px-1',
                                  icon: (0, a.jsx)(eO.Z, {
                                    className: 'fill-brand stroke-none',
                                  }),
                                })
                              : (0, a.jsx)(B.z, {
                                  type: 'text',
                                  size: 'tiny',
                                  onClick: w,
                                  className: 'px-1',
                                  icon: (0, a.jsx)(eO.Z, {
                                    className:
                                      'fill-none stroke-foreground-light',
                                  }),
                                }),
                          }),
                          (0, a.jsxs)(O._v, {
                            side: 'bottom',
                            children: [
                              j ? 'Remove from' : 'Add to',
                              ' favorites',
                            ],
                          }),
                        ],
                      }),
                    (0, a.jsxs)(O.u, {
                      'data-sentry-element': 'Tooltip',
                      'data-sentry-source-file': 'UtilityActions.tsx',
                      children: [
                        (0, a.jsx)(O.aJ, {
                          asChild: !0,
                          'data-sentry-element': 'TooltipTrigger',
                          'data-sentry-source-file': 'UtilityActions.tsx',
                          children: (0, a.jsx)(B.z, {
                            type: 'text',
                            onClick: i,
                            className: 'px-1',
                            icon: (0, a.jsx)(eQ.Z, {
                              strokeWidth: 2,
                              className: 'text-foreground-light',
                            }),
                            'data-sentry-element': 'Button',
                            'data-sentry-source-file': 'UtilityActions.tsx',
                          }),
                        }),
                        (0, a.jsx)(O._v, {
                          side: 'bottom',
                          'data-sentry-element': 'TooltipContent',
                          'data-sentry-source-file': 'UtilityActions.tsx',
                          children: 'Prettify SQL',
                        }),
                      ],
                    }),
                  ],
                }),
                (0, a.jsx)('div', {
                  className: 'flex items-center justify-between gap-x-2',
                  children: (0, a.jsxs)('div', {
                    className: 'flex items-center',
                    children: [
                      (0, a.jsx)(eV.Z, {
                        selectedDatabaseId: 0 === y.length ? void 0 : y,
                        variant: 'connected-on-right',
                        onSelectId: e => {
                          (c.resetResult(t), v(e));
                        },
                        'data-sentry-element': 'DatabaseSelector',
                        'data-sentry-source-file': 'UtilityActions.tsx',
                      }),
                      (0, a.jsx)(eG.Q, {
                        serviceRoleLabel: 'postgres',
                        variant: 'connected-on-both',
                        'data-sentry-element': 'RoleImpersonationPopover',
                        'data-sentry-source-file': 'UtilityActions.tsx',
                      }),
                      (0, a.jsx)(B.z, {
                        onClick: () => l(),
                        disabled: s || n,
                        type: 'primary',
                        size: 'tiny',
                        iconRight: n
                          ? (0, a.jsx)(u.Z, {
                              className: 'animate-spin',
                              size: 10,
                              strokeWidth: 1.5,
                            })
                          : (0, a.jsxs)('div', {
                              className: 'flex items-center space-x-1',
                              children: [
                                'macos' === o
                                  ? (0, a.jsx)(m.Z, {
                                      size: 10,
                                      strokeWidth: 1.5,
                                    })
                                  : (0, a.jsx)('p', {
                                      className:
                                        'text-xs text-foreground-light',
                                      children: 'CTRL',
                                    }),
                                (0, a.jsx)(eB.Z, {
                                  size: 10,
                                  strokeWidth: 1.5,
                                }),
                              ],
                            }),
                        className: 'rounded-l-none min-w-[82px]',
                        'data-sentry-element': 'Button',
                        'data-sentry-source-file': 'UtilityActions.tsx',
                        children: r ? 'Run selected' : 'Run',
                      }),
                    ],
                  }),
                }),
              ],
            });
          },
          e0 = n(4839),
          e1 = n(77060),
          e2 = n(8959),
          e4 = e => {
            var t, n, s, r, i, l, o, d, c;
            let {
                id: m,
                isExecuting: h,
                isDisabled: x,
                isDebugging: f,
                onDebug: p,
              } = e,
              { ref: y } = (0, g.UO)(),
              v = (0, q.TF)(),
              b = (0, R.l)(),
              j = (0, Z.B0)(),
              N = null === (t = j.results[m]) || void 0 === t ? void 0 : t[0],
              { data: w } = (0, C.Gl)({ orgSlug: null == b ? void 0 : b.slug }),
              S = (0, G.$w)(w),
              _ =
                (null == N
                  ? void 0
                  : null === (s = N.error) || void 0 === s
                    ? void 0
                    : null === (n = s.message) || void 0 === n
                      ? void 0
                      : n.includes(
                          'canceling statement due to statement timeout'
                        )) ||
                (null == N
                  ? void 0
                  : null === (i = N.error) || void 0 === i
                    ? void 0
                    : null === (r = i.message) || void 0 === r
                      ? void 0
                      : r.includes('upstream request timeout'));
            if (h)
              return (0, a.jsxs)('div', {
                className:
                  'flex items-center gap-x-4 px-6 py-4 bg-table-header-light [[data-theme*=dark]_&]:bg-table-header-dark',
                children: [
                  (0, a.jsx)(u.Z, { size: 14, className: 'animate-spin' }),
                  (0, a.jsx)('p', {
                    className: 'm-0 border-0 font-mono text-sm',
                    children: 'Running...',
                  }),
                ],
              });
            if (null == N ? void 0 : N.error) {
              let e = (
                  null !==
                    (c =
                      null === (o = N.error) || void 0 === o
                        ? void 0
                        : null === (l = o.formattedError) || void 0 === l
                          ? void 0
                          : l.split('\n')) && void 0 !== c
                    ? c
                    : []
                ).filter(e => e.length > 0),
                t =
                  v.selectedDatabaseId !== y &&
                  N.error.message.includes('in a read-only transaction'),
                n = N.error.message.includes(
                  'Query is too large to be run via the SQL Editor'
                );
              return (0, a.jsx)('div', {
                className:
                  'bg-table-header-light [[data-theme*=dark]_&]:bg-table-header-dark',
                children: (0, a.jsxs)('div', {
                  className:
                    'flex flex-row justify-between items-start py-4 px-6 gap-x-4',
                  children: [
                    _
                      ? (0, a.jsxs)('div', {
                          className: 'flex flex-col gap-y-1',
                          children: [
                            (0, a.jsx)('p', {
                              className: 'font-mono text-sm',
                              children:
                                'SQL query ran into an upstream timeout',
                            }),
                            (0, a.jsxs)('p', {
                              className:
                                'font-mono text-sm text-foreground-light',
                              children: [
                                'You can either',
                                ' ',
                                (0, a.jsx)('a', {
                                  target: '_blank',
                                  rel: 'noreferrer',
                                  className:
                                    'underline transition hover:text-foreground',
                                  href: 'https://supabase.com/docs/guides/platform/performance#examining-query-performance',
                                  children: 'optimize your query',
                                }),
                                ', or',
                                ' ',
                                (0, a.jsx)('a', {
                                  target: '_blank',
                                  rel: 'noreferrer',
                                  className:
                                    'underline transition hover:text-foreground',
                                  href: 'https://supabase.com/docs/guides/database/timeouts',
                                  children: 'increase the statement timeout',
                                }),
                                '.',
                              ],
                            }),
                          ],
                        })
                      : (0, a.jsxs)('div', {
                          className: 'flex flex-col gap-y-1',
                          children: [
                            e.length > 0
                              ? e.map((e, t) =>
                                  (0, a.jsx)(
                                    'pre',
                                    {
                                      className: 'font-mono text-sm text-wrap',
                                      children: e,
                                    },
                                    'error-'.concat(t)
                                  )
                                )
                              : (0, a.jsxs)('p', {
                                  className: 'font-mono text-sm tracking-tight',
                                  children: [
                                    'Error: ',
                                    null === (d = N.error) || void 0 === d
                                      ? void 0
                                      : d.message,
                                  ],
                                }),
                            N.autoLimit &&
                              (0, a.jsxs)('p', {
                                className: 'text-sm text-foreground-light',
                                children: [
                                  'Note: A limit of ',
                                  N.autoLimit,
                                  ' was applied to your query. If this was the cause of a syntax error, try selecting "No limit" instead and re-run the query.',
                                ],
                              }),
                            t &&
                              (0, a.jsx)('p', {
                                className: 'text-sm text-foreground-light',
                                children:
                                  'Note: Read replicas are for read only queries. Run write queries on the primary database instead.',
                              }),
                            n &&
                              (0, a.jsxs)('p', {
                                className:
                                  'text-sm text-foreground-light flex items-center gap-x-1',
                                children: [
                                  'Run this query by',
                                  ' ',
                                  (0, a.jsxs)(eA(), {
                                    target: '_blank',
                                    rel: 'noreferrer',
                                    href: '/project/'.concat(
                                      y,
                                      '/settings/database'
                                    ),
                                    className:
                                      'underline transition hover:text-foreground flex items-center gap-x-1',
                                    children: [
                                      'connecting to your database directly',
                                      (0, a.jsx)(e0.Z, { size: 12 }),
                                    ],
                                  }),
                                  '.',
                                ],
                              }),
                          ],
                        }),
                    (0, a.jsxs)('div', {
                      className: 'flex items-center gap-x-2',
                      children: [
                        t &&
                          (0, a.jsx)(B.z, {
                            className: 'py-2',
                            type: 'default',
                            onClick: () => {
                              (v.setSelectedDatabaseId(y), j.resetResult(m));
                            },
                            children: 'Switch to primary database',
                          }),
                        !S &&
                          (0, a.jsx)(B.z, {
                            icon: (0, a.jsx)(e1.c, {
                              className: 'scale-75 w-3 h-3',
                              loading: f,
                            }),
                            disabled: !!x || f,
                            onClick: p,
                            children: 'Debug with Supabase AI',
                          }),
                      ],
                    }),
                  ],
                }),
              });
            }
            return N
              ? N.rows.length <= 0
                ? (0, a.jsx)('div', {
                    className:
                      'bg-table-header-light [[data-theme*=dark]_&]:bg-table-header-dark',
                    children: (0, a.jsx)('p', {
                      className: 'm-0 border-0 px-6 py-4 font-mono text-sm',
                      children: 'Success. No rows returned',
                    }),
                  })
                : (0, a.jsx)(e2.Z, {
                    rows: N.rows,
                    'data-sentry-element': 'Results',
                    'data-sentry-component': 'UtilityTabResults',
                    'data-sentry-source-file': 'UtilityTabResults.tsx',
                  })
              : (0, a.jsx)('div', {
                  className:
                    'bg-table-header-light [[data-theme*=dark]_&]:bg-table-header-dark',
                  children: (0, a.jsxs)('p', {
                    className:
                      'm-0 border-0 px-4 py-4 text-sm text-foreground-light',
                    children: [
                      'Click ',
                      (0, a.jsx)('code', { children: 'Run' }),
                      ' to execute your query.',
                    ],
                  }),
                });
          };
        let e3 = {
          type: 'bar',
          cumulative: !1,
          xKey: '',
          yKey: '',
          showLabels: !1,
          showGrid: !1,
        };
        var e8 = e => {
          var t, n, s;
          let {
              id: r,
              isExecuting: i,
              isDebugging: l,
              isDisabled: o,
              hasSelection: d,
              prettifyQuery: c,
              executeQuery: u,
              onDebug: m,
            } = e,
            { ref: h } = (0, g.UO)(),
            x = (0, Z.B0)(),
            f =
              null === (t = x.snippets[r]) || void 0 === t ? void 0 : t.snippet,
            y = null === (n = x.results[r]) || void 0 === n ? void 0 : n[0],
            { mutate: v } = (0, eb.R)({
              invalidateQueriesOnSuccess: !1,
              onMutate: async e => {
                let { payload: t } = e;
                if ('sql' !== t.type || !('chart' in t.content)) return;
                let n = {
                  ...f,
                  content: { ...f.content, chart: t.content.chart },
                };
                x.updateSnippet({ id: r, snippet: n });
              },
              onError: async (e, t, n) => {
                p.Am.error('Failed to update chart. Please try again.');
              },
            }),
            b =
              f &&
              'sql' === f.type &&
              (null === (s = f.content) || void 0 === s ? void 0 : s.chart)
                ? f.content.chart
                : e3;
          return (0, a.jsxs)(ej.mQ, {
            defaultValue: 'results',
            className: 'w-full h-full flex flex-col',
            'data-sentry-element': 'Tabs_Shadcn_',
            'data-sentry-component': 'UtilityPanel',
            'data-sentry-source-file': 'UtilityPanel.tsx',
            children: [
              (0, a.jsxs)(ej.dr, {
                className:
                  'flex justify-between gap-2 px-4 overflow-x-auto min-h-[42px]',
                'data-sentry-element': 'TabsList_Shadcn_',
                'data-sentry-source-file': 'UtilityPanel.tsx',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'flex items-center gap-4',
                    children: [
                      (0, a.jsx)(ej.SP, {
                        className: 'py-3 text-xs',
                        value: 'results',
                        'data-sentry-element': 'TabsTrigger_Shadcn_',
                        'data-sentry-source-file': 'UtilityPanel.tsx',
                        children: (0, a.jsx)('span', {
                          className: 'translate-y-[1px]',
                          children: 'Results',
                        }),
                      }),
                      (0, a.jsx)(ej.SP, {
                        className: 'py-3 text-xs',
                        value: 'chart',
                        'data-sentry-element': 'TabsTrigger_Shadcn_',
                        'data-sentry-source-file': 'UtilityPanel.tsx',
                        children: (0, a.jsx)('span', {
                          className: 'translate-y-[1px]',
                          children: 'Chart',
                        }),
                      }),
                      (null == y ? void 0 : y.rows) &&
                        (0, a.jsx)(ev.z, {
                          type: 'text',
                          results: y.rows,
                          fileName: 'Supabase Snippet '.concat(f.name),
                        }),
                    ],
                  }),
                  (0, a.jsx)(e$, {
                    id: r,
                    isExecuting: i,
                    isDisabled: o,
                    hasSelection: d,
                    prettifyQuery: c,
                    executeQuery: u,
                    'data-sentry-element': 'UtilityActions',
                    'data-sentry-source-file': 'UtilityPanel.tsx',
                  }),
                ],
              }),
              (0, a.jsx)(ej.nU, {
                asChild: !0,
                value: 'results',
                className: 'mt-0 flex-grow',
                'data-sentry-element': 'TabsContent_Shadcn_',
                'data-sentry-source-file': 'UtilityPanel.tsx',
                children: (0, a.jsx)(e4, {
                  id: r,
                  isExecuting: i,
                  isDisabled: o,
                  onDebug: m,
                  isDebugging: l,
                  'data-sentry-element': 'UtilityTabResults',
                  'data-sentry-source-file': 'UtilityPanel.tsx',
                }),
              }),
              (0, a.jsx)(ej.nU, {
                asChild: !0,
                value: 'chart',
                className: 'mt-0 flex-grow',
                'data-sentry-element': 'TabsContent_Shadcn_',
                'data-sentry-source-file': 'UtilityPanel.tsx',
                children: (0, a.jsx)(eP, {
                  results: y,
                  config: b,
                  onConfigChange: function (e) {
                    h &&
                      (null == f ? void 0 : f.id) &&
                      v({
                        projectRef: h,
                        payload: {
                          ...f,
                          id: f.id,
                          description: f.description || '',
                          project_id: f.project_id || 0,
                          content: { ...f.content, content_id: r, chart: e },
                        },
                      });
                  },
                  'data-sentry-element': 'ChartConfig',
                  'data-sentry-source-file': 'UtilityPanel.tsx',
                }),
              }),
            ],
          });
        };
        let e5 = f()(() => n.e(7025).then(n.bind(n, 84)), {
            loadableGenerated: { webpack: () => [84] },
            ssr: !1,
          }),
          e9 = f()(
            () =>
              Promise.resolve()
                .then(n.bind(n, 85229))
                .then(e => {
                  let { DiffEditor: t } = e;
                  return t;
                }),
            { loadableGenerated: { webpack: () => [85229] }, ssr: !1 }
          ),
          e7 = () => {
            var e, t, n;
            let i = (0, T.fV)(),
              x = (0, s.useRouter)(),
              { ref: f, id: V } = (0, g.UO)(),
              X = (0, R.l)(),
              { profile: J } = (0, z.Un)(),
              $ = (0, l.NL)(),
              es = (0, A.Vm)(),
              er = (0, R.l)(),
              ei = (0, M.WZ)(),
              el = (0, Z.B0)(),
              eo = (0, P.z6)(),
              ed = (0, q.TF)(),
              ec = (0, L.C)(),
              [eu] = (0, k.l)(null == es ? void 0 : es.ref),
              em = ec || !D.Qy,
              {
                sourceSqlDiff: eh,
                setSourceSqlDiff: ex,
                selectedDiffType: ef,
                setSelectedDiffType: ep,
                pendingTitle: eg,
                setIsAcceptDiffLoading: ev,
                isDiffOpen: eb,
                defaultSqlDiff: ej,
                closeDiff: eN,
              } = (0, H.Yx)(),
              {
                promptState: ew,
                setPromptState: eS,
                promptInput: e_,
                setPromptInput: eC,
                resetPrompt: eE,
              } = (0, H.iM)(),
              eL = (0, r.useRef)(null),
              ek = (0, r.useRef)(null),
              eR = (0, r.useRef)(null),
              [eA, eD] = (0, r.useState)(!1),
              [eI, eT] = (0, r.useState)([]),
              [ez, eU] = (0, r.useState)(!1),
              [eM, eq] = (0, r.useState)(!1),
              [eP, eZ] = (0, r.useState)(!1),
              [eK, eF] = (0, r.useState)(!1),
              [eO, eQ] = (0, r.useState)(!1),
              eB = (0, r.useMemo)(() => (0, T.k$)(), [V]),
              eG = V && 'new' !== V ? V : eB,
              eV = el.limit,
              eW =
                null === (e = el.results[eG]) || void 0 === e ? void 0 : e[0],
              eH = !(
                eG in el.snippets && void 0 !== el.snippets[eG].snippet.content
              ),
              eX = 'new' !== V && eH;
            ey(eG, ek.current);
            let { data: eY } = (0, C.Gl)({
                orgSlug: null == er ? void 0 : er.slug,
              }),
              eJ = (0, G.$w)(eY),
              { data: e$, isSuccess: e0 } = (0, S.bN)({ projectRef: f }),
              { data: e1, refetch: e2 } = (0, j.u$)(
                {
                  schemas: eu,
                  projectRef: null == es ? void 0 : es.ref,
                  connectionString: null == es ? void 0 : es.connectionString,
                },
                { enabled: em }
              ),
              e4 = em
                ? null == e1
                  ? void 0
                  : e1.map(e => e.sql.trim())
                : void 0,
              { mutateAsync: e3 } = (0, b.g)(),
              { mutate: e7 } = (0, E.a)(),
              { mutate: e6, isLoading: te } = (0, _.r)({
                onSuccess(e, t) {
                  (eG && el.addResult(eG, e.result, t.autoLimit),
                    e2(),
                    $.invalidateQueries(w.X.lint(f)));
                },
                onError(e, t) {
                  if (eG) {
                    if (e.position && ek.current) {
                      var n, a, s;
                      let t = eL.current,
                        r = ek.current,
                        i =
                          eA &&
                          null !==
                            (a =
                              null == t
                                ? void 0
                                : null === (n = t.getSelection()) ||
                                    void 0 === n
                                  ? void 0
                                  : n.startLineNumber) &&
                          void 0 !== a
                            ? a
                            : 0,
                        l =
                          null !== (s = e.formattedError) && void 0 !== s
                            ? s
                            : '',
                        o = l.slice(l.indexOf('LINE')),
                        d =
                          i + Number(o.slice(0, o.indexOf(':')).split(' ')[1]);
                      if (!isNaN(d)) {
                        let e =
                          null == t
                            ? void 0
                            : t.deltaDecorations(
                                [],
                                [
                                  {
                                    range: new r.Range(d, 1, d, 20),
                                    options: {
                                      isWholeLine: !0,
                                      inlineClassName: 'bg-warning-400',
                                    },
                                  },
                                ]
                              );
                        e && (null == t || t.revealLineInCenter(d), eT(e));
                      }
                    }
                    el.addResultError(eG, e, t.autoLimit);
                  }
                },
              }),
              tt = (0, r.useCallback)(
                async (e, t) => {
                  try {
                    let { title: n } = await e3({ sql: t });
                    el.renameSnippet({ id: e, name: n });
                  } catch (e) {}
                },
                [e3, el]
              ),
              tn = (0, r.useCallback)(async () => {
                if (eb) return;
                let e = (0, Z.pB)().snippets[eG];
                if (eL.current && es) {
                  var t, n, a, s, r, i;
                  let l = eL.current,
                    o = l.getSelection(),
                    d = o
                      ? null === (t = l.getModel()) || void 0 === t
                        ? void 0
                        : t.getValueInRange(o)
                      : void 0,
                    c = e
                      ? null !==
                          (i =
                            d ||
                            (null === (n = eL.current) || void 0 === n
                              ? void 0
                              : n.getValue())) && void 0 !== i
                        ? i
                        : null === (a = e.snippet.content) || void 0 === a
                          ? void 0
                          : a.sql
                      : d ||
                        (null === (s = eL.current) || void 0 === s
                          ? void 0
                          : s.getValue()),
                    u = (0, I._)(c),
                    m =
                      null == eL
                        ? void 0
                        : null === (r = eL.current) || void 0 === r
                          ? void 0
                          : r.getModel();
                  eL.current &&
                    m &&
                    (eL.current.executeEdits('apply-prettify-edit', [
                      { text: u, range: m.getFullModelRange() },
                    ]),
                    el.setSql(eG, u));
                }
              }, [eG, eb, es, el]),
              ta = (0, r.useCallback)(
                async function () {
                  let e =
                    arguments.length > 0 &&
                    void 0 !== arguments[0] &&
                    arguments[0];
                  if (eb) return;
                  let t = (0, Z.pB)().snippets[eG];
                  if (null !== eL.current && !te && void 0 !== es) {
                    var n, a, s, r, i, l;
                    let o = eL.current,
                      d = o.getSelection(),
                      c = d
                        ? null === (n = o.getModel()) || void 0 === n
                          ? void 0
                          : n.getValueInRange(d)
                        : void 0,
                      u = t
                        ? null !==
                            (l =
                              c ||
                              (null === (a = eL.current) || void 0 === a
                                ? void 0
                                : a.getValue())) && void 0 !== l
                          ? l
                          : null === (s = t.snippet.content) || void 0 === s
                            ? void 0
                            : s.sql
                        : c ||
                          (null === (r = eL.current) || void 0 === r
                            ? void 0
                            : r.getValue()),
                      m = !1,
                      h = (0, ea.mw)(u);
                    !e && h && (eq(!0), eZ(!0), (m = !0));
                    let x = (0, ea.tA)(u);
                    if ((!e && x && (eq(!0), eF(!0), (m = !0)), m)) return;
                    (eJ ||
                      (null == t ? void 0 : t.snippet.name) !== et.$C ||
                      tt(eG, u),
                      eI.length > 0 &&
                        (null == o || o.deltaDecorations(eI, []), eT([])));
                    let f = eo(),
                      g =
                        null == e$
                          ? void 0
                          : null ===
                                (i = e$.find(
                                  e => e.identifier === ed.selectedDatabaseId
                                )) || void 0 === i
                            ? void 0
                            : i.connectionString;
                    if (D.Qy && !g)
                      return p.Am.error(
                        'Unable to run query: Connection string is missing'
                      );
                    let { appendAutoLimit: y } = (0, ea.c6)(u, eV),
                      v = (0, ea.se)(u, eV);
                    e6({
                      projectRef: es.ref,
                      connectionString: g,
                      sql: (0, U.Jh)(v, { projectRef: es.ref, role: f }),
                      autoLimit: y ? eV : void 0,
                      isRoleImpersonationEnabled: (0, P.Gm)(f),
                      contextualInvalidation: !0,
                      handleError: e => {
                        throw e;
                      },
                    });
                  }
                },
                [eb, eG, te, es, eJ, e6, eo, tt, ed.selectedDatabaseId, e$, eV]
              ),
              ts = (0, r.useCallback)(
                async (e, t) => {
                  if (!f) return console.error('Project ref is required');
                  if (!J) return console.error('Profile is required');
                  if (!es) return console.error('Project is required');
                  try {
                    let n = (0, ea.wI)({
                      id: (0, T.k$)(),
                      name: t,
                      sql: e,
                      owner_id: J.id,
                      project_id: es.id,
                    });
                    (el.addSnippet({ projectRef: f, snippet: n }),
                      el.addNeedsSaving(n.id),
                      x.push('/project/'.concat(f, '/sql/').concat(n.id)));
                  } catch (e) {
                    p.Am.error(
                      'Failed to create new query: '.concat(e.message)
                    );
                  }
                },
                [
                  null == J ? void 0 : J.id,
                  null == es ? void 0 : es.id,
                  f,
                  x,
                  el,
                ]
              ),
              tr = (0, r.useCallback)(async () => {
                var e, t, n;
                try {
                  let a = el.snippets[eG],
                    s =
                      null === (e = el.results[eG]) || void 0 === e
                        ? void 0
                        : e[0];
                  ei.setAiAssistantPanel({
                    open: !0,
                    sqlSnippets: [
                      (null !==
                        (n =
                          null === (t = a.snippet.content) || void 0 === t
                            ? void 0
                            : t.sql) && void 0 !== n
                        ? n
                        : ''
                      )
                        .replace(et.eg, '')
                        .trim(),
                    ],
                    initialInput:
                      'Help me to debug the attached sql snippet which gives the following error: \n\n'.concat(
                        s.error.message
                      ),
                  });
                } catch (e) {
                  e &&
                    'object' == typeof e &&
                    'message' in e &&
                    'string' == typeof e.message &&
                    p.Am.error(
                      'Sorry, the assistant failed to debug your query! Please try again with a different one.'
                    );
                }
              }, [e4, eG, el.results, el.snippets]),
              ti = (0, r.useCallback)(async () => {
                try {
                  var e;
                  if ((ev(!0), !eh || !eL.current || !eR.current)) return;
                  let t = eL.current.getModel(),
                    n = eR.current.getModel();
                  if (!t || !n) return;
                  let a = n.modified.getValue();
                  if (ef === en.U.NewSnippet) {
                    let { title: e } = await e3({ sql: a });
                    await ts(a, e);
                  } else
                    (eL.current.executeEdits('apply-ai-edit', [
                      { text: a, range: t.getFullModelRange() },
                    ]),
                      eg && el.renameSnippet({ id: eG, name: eg }));
                  (e7({
                    action: y.b.ASSISTANT_SQL_DIFF_HANDLER_EVALUATED,
                    properties: { handlerAccepted: !0 },
                    groups: {
                      project: null != f ? f : 'Unknown',
                      organization:
                        null !== (e = null == X ? void 0 : X.slug) &&
                        void 0 !== e
                          ? e
                          : 'Unknown',
                    },
                  }),
                    ep(en.U.Modification),
                    eE(),
                    eN());
                } finally {
                  ev(!1);
                }
              }, [eh, ef, ts, e3, x, eG, eg, el]),
              tl = (0, r.useCallback)(() => {
                var e;
                (e7({
                  action: y.b.ASSISTANT_SQL_DIFF_HANDLER_EVALUATED,
                  properties: { handlerAccepted: !1 },
                  groups: {
                    project: null != f ? f : 'Unknown',
                    organization:
                      null !== (e = null == X ? void 0 : X.slug) && void 0 !== e
                        ? e
                        : 'Unknown',
                  },
                }),
                  eE(),
                  eN());
              }, [eN, eE, e7]),
              {
                complete: to,
                completion: td,
                isLoading: tc,
              } = (0, o.GO)({
                api: ''.concat(D.GW, '/api/ai/sql/complete'),
                body: {
                  projectRef: null == es ? void 0 : es.ref,
                  connectionString: null == es ? void 0 : es.connectionString,
                  includeSchemaMetadata: em,
                },
                onResponse: e => {
                  if (!e.ok) throw Error('Failed to generate completion');
                },
                onError: e => {
                  p.Am.error('Failed to generate SQL: '.concat(e.message));
                },
              }),
              tu = async (e, t) => {
                try {
                  var n;
                  eS(e => ({
                    ...e,
                    selection: t.selection,
                    beforeSelection: t.beforeSelection,
                    afterSelection: t.afterSelection,
                  }));
                  let a = await (0, N.oT)();
                  await to(e, {
                    headers: {
                      Authorization:
                        null !== (n = a.get('Authorization')) && void 0 !== n
                          ? n
                          : '',
                    },
                    body: {
                      completionMetadata: {
                        textBeforeCursor: t.beforeSelection,
                        textAfterCursor: t.afterSelection,
                        language: 'pgsql',
                        prompt: e,
                        selection: t.selection,
                      },
                    },
                  });
                } catch (e) {
                  eS(e => ({ ...e, isLoading: !1 }));
                }
              };
            return (
              (0, r.useEffect)(() => {
                eG && (eN(), eS(e => ({ ...e, isOpen: !1 })));
              }, [eN, eG]),
              (0, r.useEffect)(() => {
                let e = e => {
                  if (eb || ew.isOpen)
                    switch (e.key) {
                      case 'Enter':
                        ('macos' === i ? e.metaKey : e.ctrlKey) &&
                          eb &&
                          (ti(), eE());
                        return;
                      case 'Escape':
                        var t;
                        (eb && tl(),
                          eE(),
                          null === (t = eL.current) ||
                            void 0 === t ||
                            t.focus());
                        return;
                    }
                };
                return (
                  window.addEventListener('keydown', e),
                  () => window.removeEventListener('keydown', e)
                );
              }, [i, eb, ew.isOpen, ti, tl, eE]),
              (0, r.useEffect)(() => {
                if (eb) {
                  let e = eR.current,
                    t = null == e ? void 0 : e.getModel();
                  if (t && t.original && t.modified) {
                    (t.original.setValue(ej.original),
                      t.modified.setValue(ej.modified));
                    let n = e.getModifiedEditor(),
                      a = ew.startLineNumber;
                    n.revealLineInCenter(a);
                  }
                }
              }, [ef, eh]),
              (0, r.useEffect)(() => {
                if (e0) {
                  let e = e$.find(e => e.identifier === f);
                  ed.setSelectedDatabaseId(null == e ? void 0 : e.identifier);
                }
              }, [e0, e$, f]),
              (0, r.useEffect)(() => {
                if (void 0 !== el.diffContent) {
                  var e, t, n, a, s;
                  let { diffType: r, sql: i } = el.diffContent,
                    l =
                      null === (e = eL.current) || void 0 === e
                        ? void 0
                        : e.getModel();
                  l &&
                    (0 ===
                    (null !==
                      (n =
                        null === (t = eL.current) || void 0 === t
                          ? void 0
                          : t.getValue()) && void 0 !== n
                      ? n
                      : ''
                    ).length
                      ? null === (a = eL.current) ||
                        void 0 === a ||
                        a.executeEdits('apply-ai-message', [
                          { text: ''.concat(i), range: l.getFullModelRange() },
                        ])
                      : (ex({
                          original:
                            (null === (s = eL.current) || void 0 === s
                              ? void 0
                              : s.getValue()) || '',
                          modified: i,
                        }),
                        ep(r)));
                }
              }, [el.diffContent]),
              (0, r.useEffect)(() => {
                if (!td) return;
                let e = ew.beforeSelection + ew.selection + ew.afterSelection,
                  t = ew.beforeSelection + td + ew.afterSelection;
                tc &&
                  (ex({ original: e, modified: (0, I._)(t) }),
                  ep(en.U.Modification),
                  eS(e => ({ ...e, isLoading: !1 })));
              }, [td, ew.beforeSelection, ew.selection, ew.afterSelection, tc]),
              (0, r.useEffect)(() => {
                if (eb) {
                  if (eR.current && ez) return (eQ(!0), () => eQ(!1));
                } else (eU(!1), eQ(!1));
              }, [eb, ez]),
              (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsx)(ee, {
                    visible: eM,
                    hasDestructiveOperations: eP,
                    hasUpdateWithoutWhere: eK,
                    onCancel: () => {
                      (eq(!1),
                        eZ(!1),
                        eF(!1),
                        setTimeout(() => {
                          var e;
                          return null === (e = eL.current) || void 0 === e
                            ? void 0
                            : e.focus();
                        }, 100));
                    },
                    onConfirm: () => {
                      (eq(!1), ta(!0));
                    },
                    'data-sentry-element': 'RunQueryWarningModal',
                    'data-sentry-source-file': 'SQLEditor.tsx',
                  }),
                  (0, a.jsx)(K.pO, {
                    className: 'flex h-full',
                    direction: 'horizontal',
                    autoSaveId: D.dA.SQL_EDITOR_AI_PANEL_SPLIT_SIZE,
                    'data-sentry-element': 'ResizablePanelGroup',
                    'data-sentry-source-file': 'SQLEditor.tsx',
                    children: (0, a.jsx)(K.ee, {
                      minSize: 30,
                      'data-sentry-element': 'ResizablePanel',
                      'data-sentry-source-file': 'SQLEditor.tsx',
                      children: (0, a.jsxs)(K.pO, {
                        className: 'relative',
                        direction: 'vertical',
                        autoSaveId: D.dA.SQL_EDITOR_SPLIT_SIZE,
                        'data-sentry-element': 'ResizablePanelGroup',
                        'data-sentry-source-file': 'SQLEditor.tsx',
                        children: [
                          (0, a.jsx)(K.ee, {
                            maxSize: 70,
                            'data-sentry-element': 'ResizablePanel',
                            'data-sentry-source-file': 'SQLEditor.tsx',
                            children: (0, a.jsx)('div', {
                              className:
                                'flex-grow overflow-y-auto border-b h-full',
                              children: eX
                                ? (0, a.jsx)('div', {
                                    className:
                                      'flex h-full w-full items-center justify-center',
                                    children: (0, a.jsx)(u.Z, {
                                      className: 'animate-spin text-brand',
                                    }),
                                  })
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      eb &&
                                        (0, a.jsxs)('div', {
                                          className: 'w-full h-full',
                                          children: [
                                            (0, a.jsx)(e9, {
                                              theme: 'supabase',
                                              language: 'pgsql',
                                              original: ej.original,
                                              modified: ej.modified,
                                              onMount: e => {
                                                ((eR.current = e), eU(!0));
                                              },
                                              options: {
                                                fontSize: 13,
                                                renderSideBySide: !1,
                                                minimap: { enabled: !1 },
                                                wordWrap: 'on',
                                                lineNumbers: 'on',
                                                folding: !1,
                                                padding: { top: 4 },
                                                lineNumbersMinChars: 3,
                                              },
                                            }),
                                            eO &&
                                              (0, a.jsx)(Y, {
                                                editor: eR.current,
                                                id: 'ask-ai-diff',
                                                heightInLines: 3,
                                                afterLineNumber: 0,
                                                beforeLineNumber: Math.max(
                                                  0,
                                                  ew.startLineNumber - 1
                                                ),
                                                children: (0, a.jsx)(W, {
                                                  onSubmit: e => {
                                                    tu(e, {
                                                      beforeSelection:
                                                        ew.beforeSelection,
                                                      selection:
                                                        ew.selection ||
                                                        ej.modified,
                                                      afterSelection:
                                                        ew.afterSelection,
                                                    });
                                                  },
                                                  value: e_,
                                                  onChange: eC,
                                                  onAccept: ti,
                                                  onReject: tl,
                                                  isDiffVisible: !0,
                                                  isLoading: tc,
                                                }),
                                              }),
                                          ],
                                        }),
                                      (0, a.jsxs)(
                                        'div',
                                        {
                                          className: 'w-full h-full relative',
                                          children: [
                                            (0, a.jsx)(e5, {
                                              autoFocus: !0,
                                              id: eG,
                                              className: (0, F.cn)(
                                                eb && 'hidden'
                                              ),
                                              editorRef: eL,
                                              monacoRef: ek,
                                              executeQuery: ta,
                                              onHasSelection: eD,
                                              onPrompt: e => {
                                                let {
                                                  selection: t,
                                                  beforeSelection: n,
                                                  afterSelection: a,
                                                  startLineNumber: s,
                                                  endLineNumber: r,
                                                } = e;
                                                eS(e => ({
                                                  ...e,
                                                  isOpen: !0,
                                                  selection: t,
                                                  beforeSelection: n,
                                                  afterSelection: a,
                                                  startLineNumber: s,
                                                  endLineNumber: r,
                                                }));
                                              },
                                            }),
                                            eL.current &&
                                              ew.isOpen &&
                                              !eb &&
                                              (0, a.jsx)(Y, {
                                                editor: eL.current,
                                                id: 'ask-ai',
                                                afterLineNumber:
                                                  ew.endLineNumber,
                                                beforeLineNumber: Math.max(
                                                  0,
                                                  ew.startLineNumber - 1
                                                ),
                                                heightInLines: 2,
                                                children: (0, a.jsx)(W, {
                                                  value: e_,
                                                  onChange: eC,
                                                  onSubmit: e => {
                                                    tu(e, {
                                                      beforeSelection:
                                                        ew.beforeSelection,
                                                      selection: ew.selection,
                                                      afterSelection:
                                                        ew.afterSelection,
                                                    });
                                                  },
                                                  isDiffVisible: !1,
                                                  isLoading: tc,
                                                }),
                                              }),
                                            (0, a.jsx)(d.M, {
                                              children:
                                                !ew.isOpen &&
                                                !(null === (t = eL.current) ||
                                                void 0 === t
                                                  ? void 0
                                                  : t.getValue()) &&
                                                (0, a.jsxs)(c.E.p, {
                                                  initial: { y: 5, opacity: 0 },
                                                  animate: { y: 0, opacity: 1 },
                                                  exit: { y: 5, opacity: 0 },
                                                  className:
                                                    'text-foreground-lighter absolute bottom-4 left-4 z-10 font-mono text-xs flex items-center gap-1',
                                                  children: [
                                                    'Hit ',
                                                    'macos' === i
                                                      ? (0, a.jsx)(m.Z, {
                                                          size: 12,
                                                        })
                                                      : 'CTRL+',
                                                    'K to edit with the Assistant',
                                                  ],
                                                }),
                                            }),
                                          ],
                                        },
                                        eG
                                      ),
                                    ],
                                  }),
                            }),
                          }),
                          (0, a.jsx)(K.Dp, {
                            withHandle: !0,
                            'data-sentry-element': 'ResizableHandle',
                            'data-sentry-source-file': 'SQLEditor.tsx',
                          }),
                          (0, a.jsx)(K.ee, {
                            maxSize: 70,
                            'data-sentry-element': 'ResizablePanel',
                            'data-sentry-source-file': 'SQLEditor.tsx',
                            children: eX
                              ? (0, a.jsx)('div', {
                                  className:
                                    'flex h-full w-full items-center justify-center',
                                  children: (0, a.jsx)(u.Z, {
                                    className: 'animate-spin text-brand',
                                  }),
                                })
                              : (0, a.jsx)(e8, {
                                  id: eG,
                                  isExecuting: te,
                                  isDisabled: eb,
                                  hasSelection: eA,
                                  prettifyQuery: tn,
                                  executeQuery: ta,
                                  onDebug: tr,
                                }),
                          }),
                          (0, a.jsx)(K.ee, {
                            maxSize: 10,
                            minSize: 10,
                            className: 'max-h-9',
                            'data-sentry-element': 'ResizablePanel',
                            'data-sentry-source-file': 'SQLEditor.tsx',
                            children:
                              (null == eW ? void 0 : eW.rows) !== void 0 &&
                              !te &&
                              (0, a.jsxs)(v.x, {
                                className:
                                  'flex items-center justify-between gap-2',
                                children: [
                                  (0, a.jsxs)(O.u, {
                                    children: [
                                      (0, a.jsx)(O.aJ, {
                                        children: (0, a.jsxs)('p', {
                                          className: 'text-xs',
                                          children: [
                                            (0, a.jsxs)('span', {
                                              className: 'text-foreground',
                                              children: [
                                                eW.rows.length,
                                                ' row',
                                                eW.rows.length > 1 ? 's' : '',
                                              ],
                                            }),
                                            (0, a.jsx)('span', {
                                              className:
                                                'text-foreground-lighter ml-1',
                                              children:
                                                void 0 !== eW.autoLimit &&
                                                ' (Limited to only '.concat(
                                                  eW.autoLimit,
                                                  ' rows)'
                                                ),
                                            }),
                                          ],
                                        }),
                                      }),
                                      (0, a.jsx)(O._v, {
                                        className: 'max-w-xs',
                                        children: (0, a.jsxs)('p', {
                                          className: 'flex flex-col gap-y-1',
                                          children: [
                                            (0, a.jsx)('span', {
                                              children:
                                                'Results are automatically limited to preserve browser performance, in particular if your query returns an exceptionally large number of rows.',
                                            }),
                                            (0, a.jsx)('span', {
                                              className:
                                                'text-foreground-light',
                                              children:
                                                'You may change or remove this limit from the dropdown on the right',
                                            }),
                                          ],
                                        }),
                                      }),
                                    ],
                                  }),
                                  void 0 !== eW.autoLimit &&
                                    (0, a.jsxs)(Q.h_, {
                                      children: [
                                        (0, a.jsx)(Q.$F, {
                                          asChild: !0,
                                          children: (0, a.jsxs)(B.z, {
                                            type: 'default',
                                            iconRight: (0, a.jsx)(h.Z, {
                                              size: 14,
                                            }),
                                            children: [
                                              'Limit results to:',
                                              ' ',
                                              null ===
                                                (n = et.Tu.find(
                                                  e => e.value === el.limit
                                                )) || void 0 === n
                                                ? void 0
                                                : n.label,
                                            ],
                                          }),
                                        }),
                                        (0, a.jsx)(Q.AW, {
                                          className: 'w-40',
                                          align: 'end',
                                          children: (0, a.jsx)(Q._x, {
                                            value: el.limit.toString(),
                                            onValueChange: e =>
                                              el.setLimit(Number(e)),
                                            children: et.Tu.map(e =>
                                              (0, a.jsx)(
                                                Q.qB,
                                                {
                                                  value: e.value.toString(),
                                                  children: e.label,
                                                },
                                                e.label
                                              )
                                            ),
                                          }),
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                          }),
                        ],
                      }),
                    }),
                  }),
                ],
              })
            );
          };
        var e6 = n(92405),
          te = n(71484);
        let tt = () => {
          let e = (0, s.useRouter)(),
            { id: t, ref: n, content: l, skip: o } = (0, i.U)(),
            d = (0, M.WZ)(),
            c = (0, Z.B0)(),
            u = (0, Z.Fy)(n),
            { data: m } = (0, te.N)(
              { projectRef: n, id: t },
              {
                retry: !1,
                enabled: !!('new' !== t && 'function' == typeof c.addSnippet),
              }
            );
          return (
            (0, r.useEffect)(() => {
              n && m && c.setSnippet(n, m);
            }, [n, m]),
            (0, r.useEffect)(() => {
              'new' === t &&
                'true' !== o &&
                void 0 !== d.dashboardHistory.sql &&
                void 0 === l &&
                void 0 !== u.find(e => e.id === d.dashboardHistory.sql) &&
                e.push(
                  '/project/'.concat(n, '/sql/').concat(d.dashboardHistory.sql)
                );
            }, [t, u, l]),
            (0, a.jsx)('div', {
              className: 'flex-1 overflow-auto',
              'data-sentry-component': 'SqlEditor',
              'data-sentry-source-file': '[id].tsx',
              children: (0, a.jsx)(e7, {
                'data-sentry-element': 'SQLEditor',
                'data-sentry-source-file': '[id].tsx',
              }),
            })
          );
        };
        tt.getLayout = e => (0, a.jsx)(e6.Z, { title: 'SQL', children: e });
        var tn = tt;
      },
      62210: function (e, t, n) {
        'use strict';
        n.d(t, {
          r: function () {
            return c;
          },
        });
        var a = n(97458),
          s = n(56384),
          r = n(31706),
          i = n(52983),
          l = n(65092);
        let o = (0, r.j)(
            'peer inline-flex shrink-0 cursor-pointer items-center rounded-full border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-brand data-[state=checked]:hover:bg-brand-600/90 data-[state=unchecked]:bg-control data-[state=unchecked]:hover:bg-border',
            {
              variants: {
                size: {
                  small: 'h-[16px] w-[28px]',
                  medium: 'h-[20px] w-[34px]',
                  large: 'h-[24px] w-[44px]',
                },
              },
              defaultVariants: { size: 'medium' },
            }
          ),
          d = (0, r.j)(
            'pointer-events-none block rounded-full bg-foreground-lighter data-[state=checked]:bg-white shadow-lg ring-0 transition-transform',
            {
              variants: {
                size: {
                  small:
                    'h-[12px] w-[12px] data-[state=checked]:translate-x-[13px] data-[state=unchecked]:translate-x-[1px]',
                  medium:
                    'h-[16px] w-[16px] data-[state=checked]:translate-x-[15px] data-[state=unchecked]:translate-x-[1px]',
                  large:
                    'h-[18px] w-[18px] data-[state=checked]:translate-x-[22px] data-[state=unchecked]:translate-x-[3px]',
                },
              },
              defaultVariants: { size: 'medium' },
            }
          ),
          c = i.forwardRef((e, t) => {
            let { className: n, size: r, ...i } = e;
            return (0, a.jsx)(s.fC, {
              className: (0, l.cn)(o({ size: r }), n),
              ...i,
              ref: t,
              children: (0, a.jsx)(s.bU, {
                className: (0, l.cn)(d({ size: r })),
              }),
            });
          });
        c.displayName = s.fC.displayName;
      },
    },
    function (e) {
      (e.O(
        0,
        [
          6665, 7623, 588, 783, 1018, 1706, 1864, 8703, 2397, 3954, 9621, 9911,
          659, 7612, 4637, 9344, 7726, 6739, 3302, 3898, 8985, 5538, 5518, 3382,
          8061, 793, 3594, 3861, 6120, 7094, 4334, 876, 9903, 9086, 3443, 6273,
          2405, 9774, 2888, 179,
        ],
        function () {
          return e((e.s = 93906));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
