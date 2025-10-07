!(function () {
  try {
    var e =
        'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : 'undefined' != typeof self
              ? self
              : {},
      n = new e.Error().stack;
    n &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[n] = 'cbaee3c3-0857-481c-80f8-f770ecaa3750'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-cbaee3c3-0857-481c-80f8-f770ecaa3750'));
  } catch (e) {}
})();
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [4648],
  {
    14918: function (e, n, t) {
      t.d(n, {
        l5: function () {
          return et.Z;
        },
        mM: function () {
          return ey;
        },
      });
      var i = t(97458),
        a = t(198),
        o = t(36457),
        l = t(26969),
        r = t.n(l),
        s = t(86474),
        c = t.n(s),
        d = t(32691),
        u = t(34549),
        m = t(12436),
        h = t(62095),
        f = t(27850),
        p = t(88971),
        g = t(67096),
        x = t(89199),
        v = t(79790),
        b = t(91209),
        y = t(90817),
        j = t(72048),
        w = t(53114),
        S = t(96444),
        D = t(56844),
        N = t(24561),
        C = t(96226),
        R = t(74828),
        A = t(11024),
        E = t(61379),
        _ = t(37722),
        k = t(83145),
        L = t.n(k),
        z = t(52983),
        Z = t(98495),
        T = t(99359),
        I = t(26233),
        F = t(359),
        q = t(92259),
        W = t(52417),
        O = t(1575),
        U = t(44353),
        Q = t(41135),
        M = t(71147),
        G = t(40577),
        P = t(90839),
        V = t(65092),
        K = t(42026),
        J = t(32472),
        H = t(32002),
        X = t(96273),
        Y = e => {
          var n;
          let { table: t } = e,
            { ref: o } = (0, m.UO)(),
            { project: l } = (0, p.d2)(),
            { data: r = [] } = (0, U.U)({
              projectRef: null == l ? void 0 : l.ref,
            }),
            s = (0, x.N3)(t),
            c = (0, x.GV)(t),
            d = (0, x.Du)(t),
            h = (0, x.z_)(t),
            f = (0, M.N)('realtime:all'),
            g = S.s.includes(t.schema),
            { mutate: v } = (0, Q.V)({
              onError: e => {
                u.Am.error('Failed to toggle RLS: '.concat(e.message));
              },
              onSettled: () => {
                ep();
              },
            }),
            [b, j] = (0, z.useState)(!1),
            [w, D] = (0, z.useState)(!1),
            [N, C] = (0, z.useState)(!1),
            { selectedRows: k } = (0, Z.Qq)(),
            Y = 0 === k.size,
            B = null == l ? void 0 : l.ref,
            { data: $ } = (0, q.r)({
              projectRef: null == l ? void 0 : l.ref,
              connectionString: null == l ? void 0 : l.connectionString,
            }),
            ee = (null != $ ? $ : []).filter(
              e => e.schema === t.schema && e.table === t.name
            ),
            { data: en } = (0, W.z)({
              projectRef: null == l ? void 0 : l.ref,
              connectionString: null == l ? void 0 : l.connectionString,
            }),
            et = (null != en ? en : []).find(
              e => 'supabase_realtime' === e.name
            ),
            ei =
              null !== (n = null == et ? void 0 : et.tables) && void 0 !== n
                ? n
                : [],
            ea = ei.some(e => e.id === (null == t ? void 0 : t.id)),
            { mutate: eo, isLoading: el } = (0, O.u)({
              onSuccess: () => {
                D(!1);
              },
              onError: e => {
                u.Am.error(
                  'Failed to toggle realtime for '
                    .concat(t.name, ': ')
                    .concat(e.message)
                );
              },
            }),
            er = (0, y.Xo)(a.KA.TENANT_SQL_ADMIN_WRITE, 'tables'),
            es = (0, y.Xo)(a.KA.TENANT_SQL_ADMIN_WRITE, 'columns'),
            ec = 'public' === t.schema,
            { hasLint: ed, matchingLint: eu } = (0, T.R)(
              t.name,
              'security_definer_view',
              ['ERROR', 'WARN'],
              r,
              t.schema
            ),
            { hasLint: em, matchingLint: eh } = (0, T.R)(
              t.name,
              'materialized_view_in_api',
              ['ERROR', 'WARN'],
              r,
              t.schema
            ),
            ef = async () => {
              if (!l) return console.error('Project is required');
              if (!et)
                return console.error('Unable to find realtime publication');
              let e = ei.some(e => e.id == t.id)
                ? ei
                    .filter(e => e.id != t.id)
                    .map(e => ''.concat(e.schema, '.').concat(e.name))
                : [''.concat(t.schema, '.').concat(t.name)].concat(
                    ei.map(e => ''.concat(e.schema, '.').concat(e.name))
                  );
              eo({
                projectRef: null == l ? void 0 : l.ref,
                connectionString: null == l ? void 0 : l.connectionString,
                id: et.id,
                tables: e,
              });
            },
            ep = () => {
              C(!1);
            },
            eg = async () => {
              let e = { id: t.id, rls_enabled: !(s && t.rls_enabled) };
              v({
                projectRef: null == l ? void 0 : l.ref,
                connectionString: null == l ? void 0 : l.connectionString,
                id: e.id,
                schema: t.schema,
                payload: e,
              });
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              Y &&
                (0, i.jsxs)('div', {
                  className: 'flex items-center gap-x-2',
                  children: [
                    !er &&
                      !es &&
                      (0, i.jsxs)(G.u, {
                        children: [
                          (0, i.jsx)(G.aJ, {
                            asChild: !0,
                            children: (0, i.jsx)('div', {
                              className:
                                'border border-strong rounded bg-overlay-hover px-3 py-1 text-xs',
                              children: 'Viewing as read-only',
                            }),
                          }),
                          (0, i.jsx)(G._v, {
                            side: 'bottom',
                            children:
                              "You need additional permissions to manage your project's data",
                          }),
                        ],
                      }),
                    s && !g
                      ? t.rls_enabled
                        ? (0, i.jsx)(i.Fragment, {
                            children:
                              ee.length < 1 && !g
                                ? (0, i.jsx)(F.u, {
                                    asChild: !0,
                                    type: 'default',
                                    className: 'group',
                                    icon: (0, i.jsx)(R.Z, {
                                      strokeWidth: 1.5,
                                      className: 'text-foreground-muted',
                                    }),
                                    tooltip: {
                                      content: {
                                        side: 'bottom',
                                        className: 'w-[280px]',
                                        text: 'RLS is enabled for this table, but no policies are set. Select queries may return 0 results.',
                                      },
                                    },
                                    children: (0, i.jsx)(L(), {
                                      passHref: !0,
                                      href: '/project/'
                                        .concat(B, '/auth/policies?search=')
                                        .concat(t.id, '&schema=')
                                        .concat(t.schema),
                                      children: 'Add RLS policy',
                                    }),
                                  })
                                : (0, i.jsx)(P.z, {
                                    asChild: !0,
                                    type:
                                      ee.length < 1 && !g
                                        ? 'warning'
                                        : 'default',
                                    className: 'group',
                                    icon:
                                      g || ee.length > 0
                                        ? (0, i.jsx)('div', {
                                            className: (0, V.cn)(
                                              'flex items-center justify-center rounded-full bg-border-stronger h-[16px]',
                                              ee.length > 9
                                                ? ' px-1'
                                                : 'w-[16px]',
                                              ''
                                            ),
                                            children: (0, i.jsx)('span', {
                                              className:
                                                'text-[11px] text-foreground font-mono text-center',
                                              children: ee.length,
                                            }),
                                          })
                                        : (0, i.jsx)(R.Z, { strokeWidth: 1.5 }),
                                    children: (0, i.jsxs)(L(), {
                                      passHref: !0,
                                      href: '/project/'
                                        .concat(B, '/auth/policies?search=')
                                        .concat(t.id, '&schema=')
                                        .concat(t.schema),
                                      children: [
                                        'Auth ',
                                        ee.length > 1 ? 'policies' : 'policy',
                                      ],
                                    }),
                                  }),
                          })
                        : (0, i.jsxs)(K.J2, {
                            open: b,
                            onOpenChange: () => j(!b),
                            modal: !1,
                            children: [
                              (0, i.jsx)(K.xo, {
                                asChild: !0,
                                children: (0, i.jsx)(P.z, {
                                  type: 'warning',
                                  icon: (0, i.jsx)(A.Z, { strokeWidth: 1.5 }),
                                  children: 'RLS disabled',
                                }),
                              }),
                              (0, i.jsxs)(K.yk, {
                                className: 'min-w-[395px] text-sm',
                                align: 'end',
                                children: [
                                  (0, i.jsxs)('h3', {
                                    className: 'flex items-center gap-2',
                                    children: [
                                      (0, i.jsx)(A.Z, { size: 16 }),
                                      ' Row Level Security (RLS)',
                                    ],
                                  }),
                                  (0, i.jsxs)('div', {
                                    className:
                                      'grid gap-2 mt-4 text-foreground-light text-sm',
                                    children: [
                                      (0, i.jsx)('p', {
                                        children:
                                          'You can restrict and control who can read, write and update data in this table using Row Level Security.',
                                      }),
                                      (0, i.jsx)('p', {
                                        children:
                                          'With RLS enabled, anonymous users will not be able to read/write data in the table.',
                                      }),
                                      !g &&
                                        (0, i.jsx)('div', {
                                          className: 'mt-2',
                                          children: (0, i.jsx)(P.z, {
                                            type: 'default',
                                            onClick: () => C(!N),
                                            children:
                                              'Enable RLS for this table',
                                          }),
                                        }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                      : null,
                    d &&
                      ed &&
                      (0, i.jsxs)(K.J2, {
                        open: b,
                        onOpenChange: () => j(!b),
                        modal: !1,
                        children: [
                          (0, i.jsx)(K.xo, {
                            asChild: !0,
                            children: (0, i.jsx)(P.z, {
                              type: 'warning',
                              icon: (0, i.jsx)(E.Z, { strokeWidth: 1.5 }),
                              children: 'Security Definer view',
                            }),
                          }),
                          (0, i.jsxs)(K.yk, {
                            className: 'min-w-[395px] text-sm',
                            align: 'end',
                            children: [
                              (0, i.jsxs)('h3', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, i.jsx)(E.Z, { size: 16 }),
                                  ' Secure your View',
                                ],
                              }),
                              (0, i.jsxs)('div', {
                                className:
                                  'grid gap-2 mt-4 text-foreground-light text-sm',
                                children: [
                                  (0, i.jsx)('p', {
                                    children:
                                      "This view is defined with the Security Definer property, giving it permissions of the view's creator (Postgres), rather than the permissions of the querying user.",
                                  }),
                                  (0, i.jsx)('p', {
                                    children:
                                      "Since this view is in the public schema, it is accessible via your project's APIs.",
                                  }),
                                  (0, i.jsx)('div', {
                                    className: 'mt-2',
                                    children: (0, i.jsx)(P.z, {
                                      type: 'default',
                                      asChild: !0,
                                      children: (0, i.jsx)(L(), {
                                        target: '_blank',
                                        href: '/project/'
                                          .concat(
                                            o,
                                            '/advisors/security?preset='
                                          )
                                          .concat(
                                            null == eu ? void 0 : eu.level,
                                            '&id='
                                          )
                                          .concat(
                                            null == eu ? void 0 : eu.cache_key
                                          ),
                                        children: 'Learn more',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    h &&
                      em &&
                      (0, i.jsxs)(K.J2, {
                        open: b,
                        onOpenChange: () => j(!b),
                        modal: !1,
                        children: [
                          (0, i.jsx)(K.xo, {
                            asChild: !0,
                            children: (0, i.jsx)(P.z, {
                              type: 'warning',
                              icon: (0, i.jsx)(E.Z, { strokeWidth: 1.5 }),
                              children: 'Security Definer view',
                            }),
                          }),
                          (0, i.jsxs)(K.yk, {
                            className: 'min-w-[395px] text-sm',
                            align: 'end',
                            children: [
                              (0, i.jsxs)('h3', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, i.jsx)(E.Z, { size: 16 }),
                                  ' Secure your View',
                                ],
                              }),
                              (0, i.jsxs)('div', {
                                className:
                                  'grid gap-2 mt-4 text-foreground-light text-sm',
                                children: [
                                  (0, i.jsx)('p', {
                                    children:
                                      "This view is defined with the Security Definer property, giving it permissions of the view's creator (Postgres), rather than the permissions of the querying user.",
                                  }),
                                  (0, i.jsx)('p', {
                                    children:
                                      "Since this view is in the public schema, it is accessible via your project's APIs.",
                                  }),
                                  (0, i.jsx)('div', {
                                    className: 'mt-2',
                                    children: (0, i.jsx)(P.z, {
                                      type: 'default',
                                      asChild: !0,
                                      children: (0, i.jsx)(L(), {
                                        target: '_blank',
                                        href: '/project/'
                                          .concat(
                                            o,
                                            '/advisors/security?preset='
                                          )
                                          .concat(
                                            null == eh ? void 0 : eh.level,
                                            '&id='
                                          )
                                          .concat(
                                            null == eh ? void 0 : eh.cache_key
                                          ),
                                        children: 'Learn more',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    c &&
                      'public' === t.schema &&
                      (0, i.jsxs)(K.J2, {
                        open: b,
                        onOpenChange: () => j(!b),
                        modal: !1,
                        children: [
                          (0, i.jsx)(K.xo, {
                            asChild: !0,
                            children: (0, i.jsx)(P.z, {
                              type: 'warning',
                              icon: (0, i.jsx)(E.Z, { strokeWidth: 1.5 }),
                              children:
                                "Foreign table is accessible via your project's APIs",
                            }),
                          }),
                          (0, i.jsxs)(K.yk, {
                            className: 'min-w-[395px] text-sm',
                            align: 'end',
                            children: [
                              (0, i.jsxs)('h3', {
                                className: 'flex items-center gap-2',
                                children: [
                                  (0, i.jsx)(E.Z, { size: 16 }),
                                  ' Secure Foreign table',
                                ],
                              }),
                              (0, i.jsxs)('div', {
                                className:
                                  'grid gap-2 mt-4 text-foreground-light text-sm',
                                children: [
                                  (0, i.jsx)('p', {
                                    children:
                                      'Foreign tables do not enforce RLS. Move them to a private schema not exposed to Postgrest or disable Postgrest.',
                                  }),
                                  (0, i.jsx)('div', {
                                    className: 'mt-2',
                                    children: (0, i.jsx)(P.z, {
                                      type: 'default',
                                      asChild: !0,
                                      children: (0, i.jsx)(L(), {
                                        target: '_blank',
                                        href: 'https://supabase.com/docs/guides/database/extensions/wrappers/overview#security',
                                        children: 'Learn more',
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                    (0, i.jsx)(X.Q, { serviceRoleLabel: 'postgres' }),
                    s &&
                      f &&
                      (0, i.jsxs)(P.z, {
                        type: 'default',
                        icon: (0, i.jsx)(_.Z, {
                          strokeWidth: 1.5,
                          className: ea
                            ? 'text-brand'
                            : 'text-foreground-muted',
                        }),
                        onClick: () => D(!0),
                        children: ['Realtime ', ea ? 'on' : 'off'],
                      }),
                    ec && (0, i.jsx)(I.Z, { section: ['entities', t.name] }),
                  ],
                }),
              (0, i.jsx)(H.Z, {
                visible: w,
                loading: el,
                title: ''
                  .concat(ea ? 'Disable' : 'Enable', ' realtime for ')
                  .concat(t.name),
                confirmLabel: ''.concat(ea ? 'Disable' : 'Enable', ' realtime'),
                confirmLabelLoading: ''.concat(
                  ea ? 'Disabling' : 'Enabling',
                  ' realtime'
                ),
                onCancel: () => D(!1),
                onConfirm: () => ef(),
                'data-sentry-element': 'ConfirmationModal',
                'data-sentry-source-file': 'GridHeaderActions.tsx',
                children: (0, i.jsxs)('div', {
                  className: 'space-y-2',
                  children: [
                    (0, i.jsxs)('p', {
                      className: 'text-sm',
                      children: [
                        'Once realtime has been ',
                        ea ? 'disabled' : 'enabled',
                        ', the table will',
                        ' ',
                        ea ? 'no longer ' : '',
                        'broadcast any changes to authorized subscribers.',
                      ],
                    }),
                    !ea &&
                      (0, i.jsxs)('p', {
                        className: 'text-sm',
                        children: [
                          'You may also select which events to broadcast to subscribers on the',
                          ' ',
                          (0, i.jsx)(L(), {
                            href: '/project/'.concat(
                              o,
                              '/database/publications'
                            ),
                            className: 'text-brand',
                            children: 'database publications',
                          }),
                          ' ',
                          'settings.',
                        ],
                      }),
                  ],
                }),
              }),
              s &&
                (0, i.jsx)(J.Z, {
                  danger: t.rls_enabled,
                  visible: N,
                  title: 'Confirm to enable Row Level Security',
                  description:
                    'Are you sure you want to enable Row Level Security for this table?',
                  buttonLabel: 'Enable RLS',
                  buttonLoadingLabel: 'Updating',
                  onSelectCancel: ep,
                  onSelectConfirm: eg,
                }),
            ],
          });
        },
        B = t(31472),
        $ = t(13064),
        ee = t(44735),
        en = e => {
          let { id: n } = e;
          return (0, i.jsx)('div', {
            className: 'flex items-center justify-center h-full',
            'data-sentry-component': 'NotFoundState',
            'data-sentry-source-file': 'NotFoundState.tsx',
            children: (0, i.jsx)('div', {
              className: 'w-[400px]',
              children: (0, i.jsx)($.Z, {
                icon: (0, i.jsx)(ee.Z, { strokeWidth: 2 }),
                title: 'Unable to find your table with ID '.concat(n),
                'data-sentry-element': 'InformationBox',
                'data-sentry-source-file': 'NotFoundState.tsx',
              }),
            }),
          });
        },
        et = t(62859),
        ei = t(85229),
        ea = t(98809),
        eo = t(99968),
        el = t(63621),
        er = t(28894),
        es = t(25878),
        ec = t(87882),
        ed = t(7324);
      let eu = e => {
        let { id: n } = e;
        return '\n    '
          .concat(
            ec.k,
            '\n\n    with table_info as (\n      select \n        n.nspname::text as schema,\n        c.relname::text as name\n      from pg_class c\n      join pg_namespace n on n.oid = c.relnamespace\n      where c.oid = '
          )
          .concat(
            n,
            "\n    )\n    select pg_temp.pg_get_tabledef (\n      t.schema,\n      t.name,\n      false,\n      'FKEYS_INTERNAL',\n      'INCLUDE_TRIGGERS'\n    ) as definition\n    from table_info t;\n  "
          )
          .trim();
      };
      async function em(e, n) {
        let { projectRef: t, connectionString: i, id: a } = e;
        if (!a) throw Error('id is required');
        let o = eu({ id: a }),
          { result: l } = await (0, es.R)(
            {
              projectRef: t,
              connectionString: i,
              sql: o,
              queryKey: ['table-definition', a],
            },
            n
          );
        return l[0].definition.trim();
      }
      let eh = function (e) {
          let { projectRef: n, connectionString: t, id: i } = e,
            { enabled: a = !0, ...o } =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : {};
          return (0, er.a)(
            ed.A.tableDefinition(n, i),
            e => {
              let { signal: a } = e;
              return em({ projectRef: n, connectionString: t, id: i }, a);
            },
            { enabled: a && void 0 !== n && void 0 !== i && !isNaN(i), ...o }
          );
        },
        ef = e => {
          let { id: n } = e;
          if (!n) throw Error('id is required');
          return "\n    with table_info as (\n      select \n        n.nspname::text as schema,\n        c.relname::text as name,\n        to_regclass(concat('\"', n.nspname, '\".\"', c.relname, '\"')) as regclass\n      from pg_class c\n      join pg_namespace n on n.oid = c.relnamespace\n      where c.oid = "
            .concat(
              n,
              '\n    )\n    select pg_get_viewdef(t.regclass, true) as definition\n    from table_info t\n  '
            )
            .trim();
        };
      async function ep(e, n) {
        let { projectRef: t, connectionString: i, id: a } = e,
          o = ef({ id: a }),
          { result: l } = await (0, es.R)(
            {
              projectRef: t,
              connectionString: i,
              sql: o,
              queryKey: ['view-definition', a],
            },
            n
          );
        return l[0].definition.trim();
      }
      let eg = function (e) {
        let { projectRef: n, connectionString: t, id: i } = e,
          { enabled: a = !0, ...o } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, er.a)(
          ed.A.viewDefinition(n, i),
          e => {
            let { signal: a } = e;
            return ep({ projectRef: n, connectionString: t, id: i }, a);
          },
          { enabled: a && void 0 !== n && void 0 !== i && !isNaN(i), ...o }
        );
      };
      var ex = t(37462),
        ev = t(45536),
        eb = e => {
          let { entity: n } = e,
            { ref: t } = (0, m.UO)(),
            a = (0, z.useRef)(null),
            o = (0, z.useRef)(null),
            { resolvedTheme: l } = (0, ea.F)(),
            { project: r } = (0, p.d2)(),
            s = eg(
              {
                id: null == n ? void 0 : n.id,
                projectRef: null == r ? void 0 : r.ref,
                connectionString: null == r ? void 0 : r.connectionString,
              },
              { enabled: (0, x.D1)(n) }
            ),
            c = eh(
              {
                id: null == n ? void 0 : n.id,
                projectRef: null == r ? void 0 : r.ref,
                connectionString: null == r ? void 0 : r.connectionString,
              },
              { enabled: (0, x.N3)(n) }
            ),
            { data: d, isLoading: u } = (0, x.D1)(n) ? s : c,
            h = (0, x.Du)(n)
              ? 'create view '.concat(n.schema, '.').concat(n.name, ' as\n')
              : (0, x.z_)(n)
                ? 'create materialized view '
                    .concat(n.schema, '.')
                    .concat(n.name, ' as\n')
                : '',
            f = (0, z.useMemo)(() => (d ? (0, ex._)(h + d) : void 0), [d]),
            g = async (e, n) => {
              ((a.current = e),
                (o.current = n),
                e.changeViewZones(e => {
                  e.addZone({
                    afterLineNumber: 0,
                    heightInPx: 4,
                    domNode: document.createElement('div'),
                  });
                }),
                await (0, ev.Vs)(500),
                null == e || e.focus());
            };
          return u
            ? (0, i.jsxs)('div', {
                className: 'h-full grid',
                children: [
                  (0, i.jsx)('div', {
                    className: 'p-4',
                    children: (0, i.jsx)(el.A, {}),
                  }),
                  (0, i.jsx)('div', {
                    className: 'mt-auto',
                    children: (0, i.jsx)(eo.Z, {}),
                  }),
                ],
              })
            : (0, i.jsxs)(i.Fragment, {
                children: [
                  (0, i.jsxs)('div', {
                    className:
                      'flex-grow overflow-y-auto border-t border-muted relative',
                    children: [
                      (0, i.jsx)(P.z, {
                        asChild: !0,
                        type: 'default',
                        className: 'absolute top-2 right-5 z-10',
                        'data-sentry-element': 'Button',
                        'data-sentry-source-file': 'TableDefinition.tsx',
                        children: (0, i.jsx)(L(), {
                          href: '/project/'
                            .concat(t, '/sql/new?content=')
                            .concat(encodeURIComponent(null != f ? f : '')),
                          'data-sentry-element': 'Link',
                          'data-sentry-source-file': 'TableDefinition.tsx',
                          children: 'Open in SQL Editor',
                        }),
                      }),
                      (0, i.jsx)(ei.default, {
                        className: 'monaco-editor',
                        theme: (null == l ? void 0 : l.includes('dark'))
                          ? 'vs-dark'
                          : 'vs',
                        onMount: g,
                        defaultLanguage: 'pgsql',
                        value: f,
                        path: '',
                        options: {
                          domReadOnly: !0,
                          readOnly: !0,
                          tabSize: 2,
                          fontSize: 13,
                          minimap: { enabled: !1 },
                          wordWrap: 'on',
                          fixedOverflowWidgets: !0,
                        },
                        'data-sentry-element': 'Editor',
                        'data-sentry-source-file': 'TableDefinition.tsx',
                      }),
                    ],
                  }),
                  (0, i.jsx)(eo.Z, {
                    'data-sentry-element': 'Footer',
                    'data-sentry-source-file': 'TableDefinition.tsx',
                  }),
                ],
              });
        },
        ey = e => {
          var n, t;
          let {
              theme: l = 'dark',
              isLoadingSelectedTable: s = !1,
              selectedTable: R,
            } = e,
            A = (0, d.useRouter)(),
            { ref: E, id: _ } = (0, m.UO)(),
            { project: k } = (0, p.d2)(),
            L = (0, C._2)(),
            z = (0, N.z6)(),
            [{ view: Z = 'data' }] = (0, w.x)(),
            T = (0, y.Xo)(a.KA.TENANT_SQL_ADMIN_WRITE, 'tables'),
            I = (0, y.Xo)(a.KA.TENANT_SQL_ADMIN_WRITE, 'columns'),
            F = !T && !I,
            q = (0, o.NL)(),
            { mutate: W } = (0, b.Gz)({
              async onMutate(e) {
                let {
                    projectRef: n,
                    table: t,
                    configuration: i,
                    payload: a,
                  } = e,
                  o = new Set(Object.keys(i.identifiers)),
                  l = v.s.tableRows(n, { table: { id: t.id } });
                await q.cancelQueries(l);
                let r = q.getQueriesData(l);
                return (
                  q.setQueriesData(l, e => {
                    var n;
                    return {
                      rows:
                        null !==
                          (n =
                            null == e
                              ? void 0
                              : e.rows.map(e =>
                                  Object.entries(e)
                                    .filter(e => {
                                      let [n] = e;
                                      return o.has(n);
                                    })
                                    .every(e => {
                                      let [n, t] = e;
                                      return t === i.identifiers[n];
                                    })
                                    ? { ...e, ...a }
                                    : e
                                )) && void 0 !== n
                          ? n
                          : [],
                    };
                  }),
                  { previousRowsQueries: r }
                );
              },
              onError(e, n, t) {
                let { previousRowsQueries: i } = t;
                (i.forEach(e => {
                  let [n, t] = e;
                  (t && q.setQueriesData(n, t), q.invalidateQueries(n));
                }),
                  K(e));
              },
            }),
            O = (0, j.Z)(
              null !== (n = null == R ? void 0 : R.columns) && void 0 !== n
                ? n
                : D.Z6
            );
          if (s) return (0, i.jsx)(B.h, {});
          if (c()(R)) return (0, i.jsx)(en, { id: Number(_) });
          let U = (0, x.Du)(R) || (0, x.z_)(R),
            Q = (0, x.N3)(R),
            M = S.s.includes(
              null !== (t = null == R ? void 0 : R.schema) && void 0 !== t
                ? t
                : ''
            ),
            G = Q && !M,
            P = (0, f.NK)(R),
            V = ''.concat(R.schema, '_').concat(R.name),
            K = e => {
              var n, t;
              u.Am.error(
                null !==
                  (t =
                    null !== (n = null == e ? void 0 : e.details) &&
                    void 0 !== n
                      ? n
                      : null == e
                        ? void 0
                        : e.message) && void 0 !== t
                  ? t
                  : e
              );
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(
                h.z,
                {
                  theme: l,
                  gridProps: { height: '100%' },
                  projectRef: E,
                  editable: !F && G,
                  schema: R.schema,
                  table: P,
                  headerActions: (0, i.jsx)(Y, {
                    table: R,
                    canEditViaTableEditor: G,
                  }),
                  onAddColumn: L.onAddColumn,
                  onEditColumn: e => {
                    let n = r()(O.current, { name: e });
                    n
                      ? L.onEditColumn(n)
                      : u.Am.error(
                          'Unable to find column '
                            .concat(e, ' in ')
                            .concat(null == R ? void 0 : R.name)
                        );
                  },
                  onDeleteColumn: e => {
                    var n;
                    let t = r()(
                      null !== (n = O.current) && void 0 !== n ? n : [],
                      { name: e }
                    );
                    t
                      ? L.onDeleteColumn(t)
                      : u.Am.error(
                          'Unable to find column '
                            .concat(e, ' in ')
                            .concat(null == R ? void 0 : R.name)
                        );
                  },
                  onAddRow: L.onAddRow,
                  updateTableRow: (e, n) => {
                    var t;
                    if (!k) return;
                    let a =
                        null === (t = R.columns) || void 0 === t
                          ? void 0
                          : t
                              .filter(e => {
                                var n;
                                return (
                                  (null !==
                                    (n = null == e ? void 0 : e.enums) &&
                                  void 0 !== n
                                    ? n
                                    : []
                                  ).length > 0 &&
                                  'array' === e.data_type.toLowerCase()
                                );
                              })
                              .map(e => e.name),
                      o = {};
                    if (
                      ((0, x.N3)(R) &&
                        R.primary_keys.forEach(n => (o[n.name] = e[n.name])),
                      0 === Object.keys(o).length)
                    )
                      return (0, u.Am)(
                        'Unable to update row as table has no primary keys',
                        {
                          description: (0, i.jsxs)('div', {
                            children: [
                              (0, i.jsx)('p', {
                                className: 'text-sm text-foreground-light',
                                children:
                                  'Add a primary key column to your table first to serve as a unique identifier for each row before updating or deleting the row.',
                              }),
                              (0, i.jsx)('div', {
                                className: 'mt-3',
                                children: (0, i.jsx)(g.G, {
                                  href: 'https://supabase.com/docs/guides/database/tables#primary-keys',
                                }),
                              }),
                            ],
                          }),
                        }
                      );
                    W({
                      projectRef: k.ref,
                      connectionString: k.connectionString,
                      table: R,
                      configuration: { identifiers: o },
                      payload: n,
                      enumArrayColumns: a,
                      impersonatedRole: z(),
                    });
                  },
                  onEditRow: L.onEditRow,
                  onImportData: L.onImportData,
                  onError: K,
                  onExpandJSONEditor: (e, n) => {
                    L.onExpandJSONEditor({
                      column: e,
                      row: n,
                      value: JSON.stringify(n[e]) || '',
                    });
                  },
                  onExpandTextEditor: (e, n) => {
                    L.onExpandTextEditor(e, n);
                  },
                  onEditForeignKeyColumnValue: L.onEditForeignKeyColumnValue,
                  showCustomChildren: (U || Q) && 'definition' === Z,
                  customHeader:
                    (U || Q) && 'definition' === Z
                      ? (0, i.jsxs)('div', {
                          className: 'flex items-center space-x-2',
                          children: [
                            (0, i.jsxs)('p', {
                              children: [
                                'SQL Definition of ',
                                (0, i.jsx)('code', {
                                  className: 'text-sm',
                                  children: R.name,
                                }),
                                ' ',
                              ],
                            }),
                            (0, i.jsx)('p', {
                              className: 'text-foreground-light text-sm',
                              children: '(Read only)',
                            }),
                          ],
                        })
                      : null,
                  'data-sentry-element': 'SupabaseGrid',
                  'data-sentry-source-file': 'TableGridEditor.tsx',
                  children: (U || Q) && (0, i.jsx)(eb, { entity: R }),
                },
                V
              ),
              (0, i.jsx)(et.Z, {
                editable: !F && G,
                selectedTable: (0, x.N3)(R) ? R : void 0,
                onTableCreated: e => {
                  A.push('/project/'.concat(E, '/editor/').concat(e.id));
                },
                'data-sentry-element': 'SidePanelEditor',
                'data-sentry-source-file': 'TableGridEditor.tsx',
              }),
            ],
          });
        };
      t(46908);
    },
    92259: function (e, n, t) {
      t.d(n, {
        r: function () {
          return c;
        },
      });
      var i = t(28894),
        a = t(6464),
        o = t(62432),
        l = t(37756),
        r = t(98775);
      async function s(e, n, t) {
        let { projectRef: i, connectionString: o, schema: l } = e;
        if (!i) throw Error('projectRef is required');
        let r = new Headers(t);
        o && r.set('x-connection-encrypted', o);
        let { data: s, error: c } = await (0, a.U2)(
          '/platform/pg-meta/{ref}/policies',
          {
            params: {
              header: { 'x-connection-encrypted': o },
              path: { ref: i },
              query: { included_schemas: l || '', excluded_schemas: '' },
            },
            headers: r,
            signal: n,
          }
        );
        return (c && (0, a.S3)(c), s);
      }
      let c = function (e) {
        let { projectRef: n, connectionString: t, schema: a } = e,
          { enabled: c = !0, ...d } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          u = (0, o.Vm)(),
          m = (null == u ? void 0 : u.status) === l.S.ACTIVE_HEALTHY;
        return (0, i.a)(
          r.R.list(n, a),
          e => {
            let { signal: i } = e;
            return s({ projectRef: n, connectionString: t, schema: a }, i);
          },
          { enabled: c && void 0 !== n && m, ...d }
        );
      };
    },
    50936: function (e, n, t) {
      t.d(n, {
        Z: function () {
          return F;
        },
      });
      var i = t(97458),
        a = t(4839),
        o = t(83145),
        l = t.n(o),
        r = t(34549),
        s = t(27850),
        c = t(88971),
        d = t(62423),
        u = t(36457),
        m = t(64618),
        h = t(65051),
        f = t(25878),
        p = t(99492),
        g = t(24561),
        x = t(79790),
        v = t(62175);
      async function b(e) {
        let {
            projectRef: n,
            connectionString: t,
            table: i,
            filters: a,
            impersonatedRole: o,
          } = e,
          l = (0, p.Jh)(
            (function (e) {
              var n;
              let { table: t, filters: i } = e,
                a = new h.A()
                  .from(
                    t.name,
                    null !== (n = t.schema) && void 0 !== n ? n : void 0
                  )
                  .delete();
              return (
                i
                  .filter(e => e.value && '' !== e.value)
                  .forEach(e => {
                    let n = (0, v.q)(t, e);
                    a = a.filter(e.column, e.operator, n);
                  }),
                a.toSql()
              );
            })({ table: i, filters: a }),
            { projectRef: n, role: o }
          ),
          { result: r } = await (0, f.R)({
            projectRef: n,
            connectionString: t,
            sql: l,
            isRoleImpersonationEnabled: (0, g.Gm)(o),
          });
        return r;
      }
      let y = function () {
        let {
            onSuccess: e,
            onError: n,
            ...t
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          i = (0, u.NL)();
        return (0, m.D)(e => b(e), {
          async onSuccess(n, t, a) {
            let { projectRef: o, table: l } = t;
            (await i.invalidateQueries(x.s.tableRowsAndCount(o, l.id)),
              await (null == e ? void 0 : e(n, t, a)));
          },
          async onError(e, t, i) {
            void 0 === n
              ? r.Am.error(
                  'Failed to delete all table rows: '.concat(e.message)
                )
              : n(e, t, i);
          },
          ...t,
        });
      };
      var j = t(49996),
        w = t(67096);
      async function S(e) {
        let {
            projectRef: n,
            connectionString: t,
            table: i,
            rows: a,
            impersonatedRole: o,
          } = e,
          l = (0, p.Jh)(
            (function (e) {
              var n;
              let { table: t, rows: i } = e,
                { primaryKeys: a, error: o } = (0, v.h)({ table: t });
              if (o) throw o;
              let l = new h.A()
                .from(
                  t.name,
                  null !== (n = t.schema) && void 0 !== n ? n : void 0
                )
                .delete();
              return (
                null == a ||
                  a.forEach(e => {
                    let n = i.map(n => n[e]);
                    l = l.filter(e, 'in', n);
                  }),
                l.toSql()
              );
            })({ table: i, rows: a }),
            { projectRef: n, role: o }
          ),
          { result: r } = await (0, f.R)({
            projectRef: n,
            connectionString: t,
            sql: l,
            isRoleImpersonationEnabled: (0, g.Gm)(o),
          });
        return r;
      }
      let D = function () {
        let {
            onSuccess: e,
            onError: n,
            ...t
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          a = (0, u.NL)();
        return (0, m.D)(e => S(e), {
          async onSuccess(n, t, i) {
            let { projectRef: o, table: l } = t;
            (await a.invalidateQueries(x.s.tableRowsAndCount(o, l.id)),
              await (null == e ? void 0 : e(n, t, i)));
          },
          async onError(e, t, a) {
            if (void 0 === n) {
              let { table: n, rows: a } = t,
                o = e.message.includes('Please add a primary key column'),
                l = e.message.includes('violates foreign key constraint'),
                s = a.length > 1;
              if (l) {
                let t = n.name,
                  a = e.message.split('on table ')[2].replaceAll('"', ''),
                  o = e.message
                    .split('foreign key constraint')[1]
                    .split('on table')[0]
                    .replaceAll('"', ''),
                  l = s
                    ? 'Unable to delete rows as one of them is currently referenced by a foreign key constraint from the table `'.concat(
                        a,
                        '`.'
                      )
                    : 'Unable to delete row as it is currently referenced by a foreign key constraint from the table `'.concat(
                        a,
                        '`.'
                      ),
                  c = 'Set an on delete behavior on the foreign key relation `'
                    .concat(o, '` in the `')
                    .concat(
                      a,
                      '` table to automatically respond when row(s) are being deleted in the `'
                    )
                    .concat(t, '` table.');
                (0, r.Am)(l, {
                  description: (0, i.jsx)(j.U, {
                    content: c,
                    className: '[&>p]:m-0',
                  }),
                  action: (0, i.jsx)('div', {
                    className: 'w-full flex gap-x-2 !mx-0 mt-3',
                    children: (0, i.jsx)(w.G, {
                      href: 'https://supabase.com/docs/guides/database/postgres/cascade-deletes',
                    }),
                  }),
                });
              } else
                o
                  ? (0, r.Am)(
                      'Unable to delete row(s) as table has no primary keys',
                      {
                        description: (0, i.jsxs)('div', {
                          children: [
                            (0, i.jsx)('p', {
                              className: 'text-sm text-foreground-light',
                              children:
                                'Add a primary key column to your table first to serve as a unique identifier for each row before updating or deleting the row.',
                            }),
                            (0, i.jsx)('div', {
                              className: 'mt-3',
                              children: (0, i.jsx)(w.G, {
                                href: 'https://supabase.com/docs/guides/database/tables#primary-keys',
                              }),
                            }),
                          ],
                        }),
                      }
                    )
                  : r.Am.error(
                      'Failed to delete table row: '.concat(e.message)
                    );
            } else n(e, t, a);
          },
          ...t,
        });
      };
      async function N(e) {
        let { projectRef: n, connectionString: t, table: i } = e,
          a = (function (e) {
            var n;
            let { table: t } = e;
            return new h.A()
              .from(
                t.name,
                null !== (n = t.schema) && void 0 !== n ? n : void 0
              )
              .truncate()
              .toSql();
          })({ table: i }),
          { result: o } = await (0, f.R)({
            projectRef: n,
            connectionString: t,
            sql: a,
          });
        return o;
      }
      let C = function () {
        let {
            onSuccess: e,
            onError: n,
            ...t
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          i = (0, u.NL)();
        return (0, m.D)(e => N(e), {
          async onSuccess(n, t, a) {
            let { projectRef: o, table: l } = t;
            (await i.invalidateQueries(x.s.tableRowsAndCount(o, l.id)),
              await (null == e ? void 0 : e(n, t, a)));
          },
          async onError(e, t, i) {
            void 0 === n
              ? r.Am.error('Failed to truncate table row: '.concat(e.message))
              : n(e, t, i);
          },
          ...t,
        });
      };
      var R = t(73167),
        A = t(79581),
        E = t(17319),
        _ = t(53114),
        k = t(56844),
        L = t(96226),
        z = t(10046),
        Z = t(10947),
        T = t(90839),
        I = t(32002),
        F = e => {
          var n, t, o, u, m, h, f, p, x;
          let { selectedTable: v, onAfterDeleteTable: b = k.ZT } = e,
            { project: j } = (0, c.d2)(),
            w = (0, L._2)(),
            { selectedSchema: S } = (0, E.B)(),
            [{ filter: N }, F] = (0, _.x)({ arrayKeys: ['filter', 'sort'] }),
            q = (0, s.Yb)(N),
            W = (0, A.AF)({
              projectRef: null == j ? void 0 : j.ref,
              connectionString: null == j ? void 0 : j.connectionString,
            }),
            O = e => {
              F(n => {
                var t, i;
                let a =
                    null !== (t = null == n ? void 0 : n.filter) && void 0 !== t
                      ? t
                      : [],
                  o =
                    null !== (i = null == n ? void 0 : n.sort) && void 0 !== i
                      ? i
                      : [];
                return {
                  ...n,
                  filter: a.filter(n => {
                    let [t] = n.split(':');
                    if (t !== e) return n;
                  }),
                  sort: o.filter(n => {
                    let [t] = n.split(':');
                    if (t !== e) return n;
                  }),
                };
              });
            },
            { mutate: U } = (0, d.v)({
              onSuccess: () => {
                var e;
                if (
                  (null === (e = w.confirmationDialog) || void 0 === e
                    ? void 0
                    : e.type) !== 'column'
                )
                  return;
                let n = w.confirmationDialog.column;
                (O(n.name),
                  r.Am.success(
                    'Successfully deleted column "'.concat(n.name, '"')
                  ));
              },
              onError: e => {
                var n;
                if (
                  (null === (n = w.confirmationDialog) || void 0 === n
                    ? void 0
                    : n.type) !== 'column'
                )
                  return;
                let t = w.confirmationDialog.column;
                r.Am.error(
                  'Failed to delete '.concat(t.name, ': ').concat(e.message)
                );
              },
              onSettled: () => {
                w.closeConfirmationDialog();
              },
            }),
            { mutate: Q } = (0, R.H)({
              onSuccess: async () => {
                (b(await W(S)),
                  r.Am.success(
                    'Successfully deleted table "'.concat(
                      null == v ? void 0 : v.name,
                      '"'
                    )
                  ));
              },
              onError: e => {
                r.Am.error(
                  'Failed to delete '
                    .concat(null == v ? void 0 : v.name, ': ')
                    .concat(e.message)
                );
              },
              onSettled: () => {
                w.closeConfirmationDialog();
              },
            }),
            { mutate: M } = D({
              onSuccess: () => {
                var e, n, t;
                ((null === (e = w.confirmationDialog) || void 0 === e
                  ? void 0
                  : e.type) === 'row' &&
                  (null === (n = (t = w.confirmationDialog).callback) ||
                    void 0 === n ||
                    n.call(t)),
                  r.Am.success('Successfully deleted selected row(s)'));
              },
              onSettled: () => {
                w.closeConfirmationDialog();
              },
            }),
            { mutate: G } = y({
              onSuccess: () => {
                var e, n, t;
                ((null === (e = w.confirmationDialog) || void 0 === e
                  ? void 0
                  : e.type) === 'row' &&
                  (null === (n = (t = w.confirmationDialog).callback) ||
                    void 0 === n ||
                    n.call(t)),
                  r.Am.success('Successfully deleted selected rows'));
              },
              onError: e => {
                r.Am.error('Failed to delete rows: '.concat(e.message));
              },
              onSettled: () => {
                w.closeConfirmationDialog();
              },
            }),
            { mutate: P } = C({
              onSuccess: () => {
                var e, n, t;
                ((null === (e = w.confirmationDialog) || void 0 === e
                  ? void 0
                  : e.type) === 'row' &&
                  (null === (n = (t = w.confirmationDialog).callback) ||
                    void 0 === n ||
                    n.call(t)),
                  r.Am.success('Successfully deleted all rows from table'));
              },
              onError: e => {
                r.Am.error('Failed to delete rows: '.concat(e.message));
              },
              onSettled: () => {
                w.closeConfirmationDialog();
              },
            }),
            V =
              (null === (n = w.confirmationDialog) || void 0 === n
                ? void 0
                : n.type) === 'row' && w.confirmationDialog.allRowsSelected,
            K =
              (null === (t = w.confirmationDialog) || void 0 === t
                ? void 0
                : t.type) === 'row'
                ? w.confirmationDialog.allRowsSelected
                  ? null !== (x = w.confirmationDialog.numRows) && void 0 !== x
                    ? x
                    : 0
                  : w.confirmationDialog.rows.length
                : 0,
            J =
              ((null === (o = w.confirmationDialog) || void 0 === o
                ? void 0
                : o.type) === 'column' ||
                (null === (u = w.confirmationDialog) || void 0 === u
                  ? void 0
                  : u.type) === 'table') &&
              w.confirmationDialog.isDeleteWithCascade,
            H = async () => {
              var e;
              if (
                (null === (e = w.confirmationDialog) || void 0 === e
                  ? void 0
                  : e.type) !== 'column' ||
                void 0 === j
              )
                return;
              let n = w.confirmationDialog.column;
              void 0 !== n &&
                U({
                  id: n.id,
                  cascade: J,
                  projectRef: j.ref,
                  connectionString: null == j ? void 0 : j.connectionString,
                  table: v,
                });
            },
            X = async () => {
              var e;
              (null === (e = w.confirmationDialog) || void 0 === e
                ? void 0
                : e.type) === 'table' &&
                void 0 !== v &&
                Q({
                  projectRef: null == j ? void 0 : j.ref,
                  connectionString: null == j ? void 0 : j.connectionString,
                  schema: v.schema,
                  id: v.id,
                  cascade: J,
                });
            },
            Y = (0, g.z6)(),
            B = async () => {
              var e;
              if (!j) return console.error('Project ref is required');
              if (!v) return console.error('Selected table required');
              if (
                (null === (e = w.confirmationDialog) || void 0 === e
                  ? void 0
                  : e.type) !== 'row'
              )
                return;
              let n = w.confirmationDialog.rows;
              if (w.confirmationDialog.allRowsSelected) {
                if (0 === q.length) {
                  if (void 0 !== Y())
                    return (
                      w.closeConfirmationDialog(),
                      r.Am.error(
                        'Table truncation is not supported when impersonating a role'
                      )
                    );
                  P({
                    projectRef: j.ref,
                    connectionString: j.connectionString,
                    table: v,
                  });
                } else
                  G({
                    projectRef: j.ref,
                    connectionString: j.connectionString,
                    table: v,
                    filters: q,
                    impersonatedRole: Y(),
                  });
              } else
                M({
                  projectRef: j.ref,
                  connectionString: j.connectionString,
                  table: v,
                  rows: n,
                  impersonatedRole: Y(),
                });
            };
          return (0, i.jsxs)(i.Fragment, {
            children: [
              (0, i.jsx)(I.Z, {
                variant: 'destructive',
                size: 'small',
                visible:
                  (null === (m = w.confirmationDialog) || void 0 === m
                    ? void 0
                    : m.type) === 'column',
                title: 'Confirm deletion of column "'.concat(
                  (null === (h = w.confirmationDialog) || void 0 === h
                    ? void 0
                    : h.type) === 'column' && w.confirmationDialog.column.name,
                  '"'
                ),
                confirmLabel: 'Delete',
                confirmLabelLoading: 'Deleting',
                onCancel: () => {
                  w.closeConfirmationDialog();
                },
                onConfirm: H,
                'data-sentry-element': 'ConfirmationModal',
                'data-sentry-source-file': 'DeleteConfirmationDialogs.tsx',
                children: (0, i.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, i.jsx)('p', {
                      className: 'text-sm text-foreground-light',
                      children:
                        'Are you sure you want to delete the selected column? This action cannot be undone.',
                    }),
                    (0, i.jsx)(z.Z, {
                      label: 'Drop column with cascade?',
                      description:
                        'Deletes the column and its dependent objects',
                      checked: J,
                      onChange: () => w.toggleConfirmationIsWithCascade(),
                      'data-sentry-element': 'Checkbox',
                      'data-sentry-source-file':
                        'DeleteConfirmationDialogs.tsx',
                    }),
                    J &&
                      (0, i.jsxs)(Z.bZ, {
                        variant: 'warning',
                        title:
                          'Warning: Dropping with cascade may result in unintended consequences',
                        children: [
                          (0, i.jsx)(Z.Cd, {
                            children:
                              'All dependent objects will be removed, as will any objects that depend on them, recursively.',
                          }),
                          (0, i.jsx)(Z.X, {
                            children: (0, i.jsx)(T.z, {
                              asChild: !0,
                              size: 'tiny',
                              type: 'default',
                              icon: (0, i.jsx)(a.Z, {}),
                              children: (0, i.jsx)(l(), {
                                href: 'https://www.postgresql.org/docs/current/ddl-depend.html',
                                target: '_blank',
                                rel: 'noreferrer',
                                children: 'About dependency tracking',
                              }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, i.jsx)(I.Z, {
                variant: 'destructive',
                size: 'small',
                visible:
                  (null === (f = w.confirmationDialog) || void 0 === f
                    ? void 0
                    : f.type) === 'table',
                title: (0, i.jsx)('span', {
                  className: 'break-words',
                  children: 'Confirm deletion of table "'.concat(
                    null == v ? void 0 : v.name,
                    '"'
                  ),
                }),
                confirmLabel: 'Delete',
                confirmLabelLoading: 'Deleting',
                onCancel: () => {
                  w.closeConfirmationDialog();
                },
                onConfirm: X,
                'data-sentry-element': 'ConfirmationModal',
                'data-sentry-source-file': 'DeleteConfirmationDialogs.tsx',
                children: (0, i.jsxs)('div', {
                  className: 'space-y-4',
                  children: [
                    (0, i.jsx)('p', {
                      className: 'text-sm text-foreground-light',
                      children:
                        'Are you sure you want to delete the selected table? This action cannot be undone.',
                    }),
                    (0, i.jsx)(z.Z, {
                      label: 'Drop table with cascade?',
                      description:
                        'Deletes the table and its dependent objects',
                      checked: J,
                      onChange: () => w.toggleConfirmationIsWithCascade(!J),
                      'data-sentry-element': 'Checkbox',
                      'data-sentry-source-file':
                        'DeleteConfirmationDialogs.tsx',
                    }),
                    J &&
                      (0, i.jsxs)(Z.bZ, {
                        variant: 'warning',
                        children: [
                          (0, i.jsx)(Z.Cd, {
                            children:
                              'Warning: Dropping with cascade may result in unintended consequences',
                          }),
                          (0, i.jsx)(Z.X, {
                            children:
                              'All dependent objects will be removed, as will any objects that depend on them, recursively.',
                          }),
                          (0, i.jsx)(Z.X, {
                            className: 'mt-4',
                            children: (0, i.jsx)(T.z, {
                              asChild: !0,
                              size: 'tiny',
                              type: 'default',
                              icon: (0, i.jsx)(a.Z, {}),
                              children: (0, i.jsx)(l(), {
                                href: 'https://www.postgresql.org/docs/current/ddl-depend.html',
                                target: '_blank',
                                rel: 'noreferrer',
                                children: 'About dependency tracking',
                              }),
                            }),
                          }),
                        ],
                      }),
                  ],
                }),
              }),
              (0, i.jsx)(I.Z, {
                variant: 'destructive',
                size: 'small',
                visible:
                  (null === (p = w.confirmationDialog) || void 0 === p
                    ? void 0
                    : p.type) === 'row',
                title: (0, i.jsxs)('p', {
                  className: 'break-words',
                  children: [
                    (0, i.jsx)('span', {
                      children: 'Confirm to delete the selected row',
                    }),
                    (0, i.jsx)('span', { children: K > 1 && 's' }),
                  ],
                }),
                confirmLabel: 'Delete',
                confirmLabelLoading: 'Deleting',
                onCancel: () => w.closeConfirmationDialog(),
                onConfirm: () => B(),
                'data-sentry-element': 'ConfirmationModal',
                'data-sentry-source-file': 'DeleteConfirmationDialogs.tsx',
                children: (0, i.jsx)('div', {
                  className: 'space-y-4',
                  children: (0, i.jsxs)('p', {
                    className: 'text-sm text-foreground-light',
                    children: [
                      (0, i.jsx)('span', {
                        children: 'Are you sure you want to delete ',
                      }),
                      (0, i.jsxs)('span', {
                        children: [V ? 'all' : 'the selected', ' '],
                      }),
                      (0, i.jsx)('span', {
                        children: K > 1 && ''.concat(K, ' '),
                      }),
                      (0, i.jsx)('span', { children: 'row' }),
                      (0, i.jsx)('span', { children: K > 1 && 's' }),
                      (0, i.jsx)('span', {
                        children: '? This action cannot be undone.',
                      }),
                    ],
                  }),
                }),
              }),
            ],
          });
        };
    },
    32472: function (e, n, t) {
      var i = t(97458),
        a = t(52983),
        o = t(42155),
        l = t(19540),
        r = t(90839);
      n.Z = e => {
        let {
          visible: n = !1,
          danger: t = !1,
          title: s = '',
          description: c = '',
          size: d = 'small',
          buttonLabel: u = '',
          buttonLoadingLabel: m = '',
          onSelectCancel: h = () => {},
          onSelectConfirm: f = () => {},
        } = e;
        (0, a.useEffect)(() => {
          n && g(!1);
        }, [n]);
        let [p, g] = (0, a.useState)(!1),
          x = () => {
            (g(!0), f());
          };
        return (0, i.jsx)(o.Z, {
          header: s,
          visible: n,
          title: s,
          description: c,
          size: d,
          hideFooter: !0,
          onCancel: h,
          'data-sentry-element': 'Modal',
          'data-sentry-component': 'ConfirmModal',
          'data-sentry-source-file': 'ConfirmDialog.tsx',
          children: (0, i.jsx)(l.Z, {
            initialValues: {},
            validateOnBlur: !0,
            onSubmit: () => x(),
            validate: () => [],
            'data-sentry-element': 'Form',
            'data-sentry-source-file': 'ConfirmDialog.tsx',
            children: () =>
              (0, i.jsx)(i.Fragment, {
                children: (0, i.jsx)(o.Z.Content, {
                  children: (0, i.jsxs)('div', {
                    className: 'flex items-center gap-2',
                    children: [
                      (0, i.jsx)(r.z, {
                        block: !0,
                        htmlType: 'button',
                        type: 'default',
                        onClick: h,
                        disabled: p,
                        children: 'Cancel',
                      }),
                      (0, i.jsx)(r.z, {
                        htmlType: 'submit',
                        block: !0,
                        type: t ? 'danger' : 'primary',
                        disabled: p,
                        loading: p,
                        children: m && p ? m : u || 'Confirm',
                      }),
                    ],
                  }),
                }),
              }),
          }),
        });
      };
    },
  },
]);
