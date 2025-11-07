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
      t = new e.Error().stack;
    t &&
      ((e._sentryDebugIds = e._sentryDebugIds || {}),
      (e._sentryDebugIds[t] = '07c6de8d-9d57-403c-9f5c-aad3ea662d1d'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-07c6de8d-9d57-403c-9f5c-aad3ea662d1d'));
  } catch (e) {}
})();
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [2405],
  {
    92797: function (e, t, n) {
      n.d(t, {
        g: function () {
          return d;
        },
      });
      var a = n(64618),
        s = n(34549),
        r = n(6464),
        i = n(37756),
        l = n(77025);
      async function o(e) {
        let t,
          { sql: n } = e,
          a = await (0, r.oT)({ 'Content-Type': 'application/json' }),
          s = await fetch(''.concat(i.GW, '/api/ai/sql/title'), {
            headers: a,
            method: 'POST',
            body: JSON.stringify({ sql: n }),
          });
        try {
          t = await s.json();
        } catch (e) {}
        if (!s.ok) throw new l.V(null == t ? void 0 : t.message, s.status);
        return t;
      }
      let d = function () {
        let {
          onSuccess: e,
          onError: t,
          ...n
        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (0, a.D)(e => o(e), {
          async onSuccess(t, n, a) {
            await (null == e ? void 0 : e(t, n, a));
          },
          async onError(e, n, a) {
            void 0 === t
              ? s.Am.error('Failed to generate title: '.concat(e.message))
              : t(e, n, a);
          },
          ...n,
        });
      };
    },
    29456: function (e, t, n) {
      n.d(t, {
        z: function () {
          return d;
        },
      });
      var a = n(36457),
        s = n(64618),
        r = n(34549),
        i = n(6464),
        l = n(84437);
      async function o(e, t) {
        let { projectRef: n, ids: a } = e,
          { data: s, error: r } = await (0, i.IV)(
            '/platform/projects/{ref}/content',
            {
              headers: { Version: '2' },
              params: { path: { ref: n }, query: { ids: a } },
              signal: t,
            }
          );
        return (r && (0, i.S3)(r), s.map(e => e.id));
      }
      let d = function () {
        let {
            onSuccess: e,
            onError: t,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          i = (0, a.NL)();
        return (0, s.D)(e => o(e), {
          async onSuccess(t, n, a) {
            let { projectRef: s } = n;
            (await i.invalidateQueries(l.$.allContentLists(s)),
              await (null == e ? void 0 : e(t, n, a)));
          },
          async onError(e, n, a) {
            void 0 === t
              ? r.Am.error('Failed to delete contents: '.concat(e.message))
              : t(e, n, a);
          },
          ...n,
        });
      };
    },
    71484: function (e, t, n) {
      n.d(t, {
        A: function () {
          return i;
        },
        N: function () {
          return l;
        },
      });
      var a = n(28894),
        s = n(6464),
        r = n(84437);
      async function i(e, t) {
        let { projectRef: n, id: a } = e;
        if (void 0 === n) throw Error('projectRef is required');
        if (void 0 === a) throw Error('Content ID is required');
        let { data: r, error: i } = await (0, s.U2)(
          '/platform/projects/{ref}/content/item/{id}',
          { params: { path: { ref: n, id: a } }, signal: t }
        );
        if (i) throw (0, s.S3)(i);
        return r;
      }
      let l = function (e) {
        let { projectRef: t, id: n } = e,
          { enabled: s = !0, ...l } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, a.a)(
          r.$.resource(t, n),
          e => {
            let { signal: a } = e;
            return i({ projectRef: t, id: n }, a);
          },
          { enabled: s && void 0 !== t && void 0 !== n, ...l }
        );
      };
    },
    62099: function (e, t, n) {
      n.d(t, {
        KJ: function () {
          return i;
        },
        md: function () {
          return o;
        },
      });
      var a = n(90688),
        s = n(6464),
        r = n(84437);
      let i = 100;
      async function l(e, t) {
        let { projectRef: n, cursor: a, sort: r, name: l } = e;
        if (void 0 === n) throw Error('projectRef is required');
        let { data: o, error: d } = await (0, s.U2)(
          '/platform/projects/{ref}/content/folders',
          {
            params: {
              path: { ref: n },
              query: {
                type: 'sql',
                cursor: a,
                limit: i.toString(),
                sort_by: r,
                sort_order: 'name' === r ? 'asc' : 'desc',
                name: l,
                visibility: 'user',
              },
            },
            signal: t,
          }
        );
        return (d && (0, s.S3)(d), { ...o.data, cursor: o.cursor });
      }
      let o = function (e) {
        let { projectRef: t, name: n, sort: s } = e,
          { enabled: i = !0, ...o } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, a.N)(
          r.$.folders(t, { name: n, sort: s }),
          e => {
            let { signal: a, pageParam: r } = e;
            return l({ projectRef: t, cursor: r, name: n, sort: s }, a);
          },
          { enabled: i && void 0 !== t, getNextPageParam: e => e.cursor, ...o }
        );
      };
    },
    81277: function (e, t, n) {
      n.d(t, {
        v: function () {
          return o;
        },
      });
      var a = n(90688),
        s = n(6464),
        r = n(84437),
        i = n(62099);
      async function l(e, t) {
        let {
          projectRef: n,
          cursor: a,
          visibility: r,
          favorite: l,
          name: o,
          sort: d,
        } = e;
        if (void 0 === n)
          throw Error('projectRef is required for getSqlSnippets');
        let { data: c, error: u } = await (0, s.U2)(
          '/platform/projects/{ref}/content',
          {
            params: {
              path: { ref: n },
              query: {
                type: 'sql',
                cursor: a,
                visibility: r,
                favorite: l,
                name: o,
                limit: i.KJ.toString(),
                sort_by: d,
                sort_order: 'name' === d ? 'asc' : 'desc',
              },
            },
            signal: t,
          }
        );
        if (u) throw u;
        return { cursor: c.cursor, contents: c.data };
      }
      let o = function (e) {
        let { projectRef: t, sort: n, name: s, visibility: i, favorite: o } = e,
          { enabled: d = !0, ...c } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, a.N)(
          r.$.sqlSnippets(t, { sort: n, name: s, visibility: i, favorite: o }),
          e => {
            let { signal: a, pageParam: r } = e;
            return l(
              {
                projectRef: t,
                cursor: r,
                sort: n,
                name: s,
                visibility: i,
                favorite: o,
              },
              a
            );
          },
          { enabled: d && void 0 !== t, getNextPageParam: e => e.cursor, ...c }
        );
      };
    },
    92405: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return tf;
        },
      });
      var a = n(97458),
        s = n(52983),
        r = n(28977),
        i = n.n(r),
        l = n(5211),
        o = n(68769),
        d = n(34549),
        c = n(5529),
        u = n(2343),
        p = n(36457),
        m = n(64618),
        f = n(25878),
        x = n(52791);
      async function h(e) {
        let { pid: t, projectRef: n, connectionString: a } = e,
          { result: s } = await (0, f.R)({
            projectRef: n,
            connectionString: a,
            sql: 'select pg_terminate_backend('.concat(t, ')'),
          });
        return s;
      }
      let y = function () {
        let {
            onSuccess: e,
            onError: t,
            ...n
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          a = (0, p.NL)();
        return (0, m.D)(e => h(e), {
          async onSuccess(t, n, s) {
            let { projectRef: r } = n;
            (await a.invalidateQueries(x.M.ongoingQueries(r)),
              await (null == e ? void 0 : e(t, n, s)));
          },
          async onError(e, n, a) {
            void 0 === t
              ? d.Am.error('Failed to abort query: '.concat(e.message))
              : t(e, n, a);
          },
          ...n,
        });
      };
      var v = n(28894);
      let g = () =>
        "\nselect pid, query, query_start from pg_stat_activity where state = 'active' and datname = 'postgres';\n".trim();
      async function j(e, t) {
        let { projectRef: n, connectionString: a } = e,
          s = g().trim(),
          { result: r } = await (0, f.R)(
            {
              projectRef: n,
              connectionString: a,
              sql: s,
              queryKey: ['ongoing-queries'],
            },
            t
          );
        return (null != r ? r : []).filter(e => !e.query.startsWith(s));
      }
      let S = function (e) {
        let { projectRef: t, connectionString: n } = e,
          { enabled: a = !0, ...s } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, v.a)(
          x.M.ongoingQueries(t),
          e => {
            let { signal: a } = e;
            return j({ projectRef: t, connectionString: n }, a);
          },
          { enabled: a && void 0 !== t, ...s }
        );
      };
      var b = n(62432),
        N = n(53114),
        w = n(37756),
        C = n(619),
        L = n(72271),
        M = n(90839),
        q = n(49935),
        Q = n(65092),
        E = n(40577),
        _ = n(32002);
      let P = e => {
        let { visible: t, onClose: n } = e,
          [r, p] = (0, N.x)({ replace: !0 }),
          m = (0, b.Vm)(),
          f = (0, C.TF)(),
          [x, h] = (0, s.useState)(),
          { data: v } = (0, u.bN)({ projectRef: null == m ? void 0 : m.ref }),
          g = (null != v ? v : []).find(
            e => e.identifier === f.selectedDatabaseId
          ),
          {
            data: j,
            error: P,
            isError: D,
            isLoading: k,
            isFetching: Z,
            refetch: I,
          } = S(
            {
              projectRef: null == m ? void 0 : m.ref,
              connectionString: null == g ? void 0 : g.connectionString,
            },
            {
              enabled:
                !w.Qy ||
                (w.Qy && (null == g ? void 0 : g.connectionString) !== void 0),
              staleTime: 5e3,
            }
          ),
          F = null != j ? j : [],
          { mutate: R, isLoading: O } = y({
            onSuccess: () => {
              (d.Am.success('Successfully aborted query (ID: '.concat(x, ')')),
                h(void 0));
            },
          }),
          A = () => {
            (p({ viewOngoingQueries: void 0 }), n());
          };
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(L.yo, {
              open: t,
              onOpenChange: () => A(),
              'data-sentry-element': 'Sheet',
              'data-sentry-source-file': 'OngoingQueriesPanel.tsx',
              children: (0, a.jsxs)(L.ue, {
                size: 'lg',
                'data-sentry-element': 'SheetContent',
                'data-sentry-source-file': 'OngoingQueriesPanel.tsx',
                children: [
                  (0, a.jsxs)(L.Tu, {
                    'data-sentry-element': 'SheetHeader',
                    'data-sentry-source-file': 'OngoingQueriesPanel.tsx',
                    children: [
                      (0, a.jsxs)(L.bC, {
                        className: 'flex items-center gap-x-2',
                        'data-sentry-element': 'SheetTitle',
                        'data-sentry-source-file': 'OngoingQueriesPanel.tsx',
                        children: [
                          'Running queries on',
                          ' ',
                          (null == g ? void 0 : g.identifier) ===
                          (null == m ? void 0 : m.ref)
                            ? 'primary database'
                            : 'read replica',
                          (0, a.jsx)(M.z, {
                            type: 'default',
                            className: 'px-1.5',
                            loading: k || Z,
                            icon: (0, a.jsx)(l.Z, {}),
                            onClick: () => I(),
                            'data-sentry-element': 'Button',
                            'data-sentry-source-file':
                              'OngoingQueriesPanel.tsx',
                          }),
                        ],
                      }),
                      (0, a.jsxs)(L.Ei, {
                        'data-sentry-element': 'SheetDescription',
                        'data-sentry-source-file': 'OngoingQueriesPanel.tsx',
                        children: [
                          'There ',
                          1 === F.length ? 'is' : 'are',
                          ' ',
                          (0, a.jsx)('span', {
                            className: 'text-foreground-light',
                            children: F.length,
                          }),
                          ' quer',
                          1 === F.length ? 'y' : 'ies',
                          ' currently running',
                          ' ',
                          (null == g ? void 0 : g.identifier) !==
                          (null == m ? void 0 : m.ref)
                            ? 'on replica '.concat(
                                null == g ? void 0 : g.identifier
                              )
                            : '',
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsxs)('div', {
                    className: 'max-h-full h-full divide-y overflow-y-auto',
                    children: [
                      D &&
                        (0, a.jsx)('div', {
                          className:
                            'flex items-center justify-center h-full px-16',
                          children: (0, a.jsx)(c.Z, {
                            subject: 'Failed to retrieve ongoing queries',
                            error: P,
                          }),
                        }),
                      0 === F.length &&
                        (0, a.jsxs)('div', {
                          className:
                            'flex flex-col gap-y-2 items-center justify-center h-full text-foreground-light text-sm',
                          children: [
                            (0, a.jsxs)('span', {
                              children: [
                                'No queries are currently running on the',
                                ' ',
                                (null == g ? void 0 : g.identifier) !==
                                (null == m ? void 0 : m.ref)
                                  ? 'read replica '.concat(
                                      null == g ? void 0 : g.identifier
                                    )
                                  : (null != v ? v : []).length > 1
                                    ? 'primary database'
                                    : 'database',
                              ],
                            }),
                            (0, a.jsx)(M.z, {
                              type: 'default',
                              loading: k || Z,
                              icon: (0, a.jsx)(l.Z, {}),
                              onClick: () => I(),
                              children: 'Refresh',
                            }),
                          ],
                        }),
                      F.map(e =>
                        (0, a.jsxs)(
                          L.DN,
                          {
                            className: 'flex justify-between gap-x-4',
                            children: [
                              (0, a.jsxs)('div', {
                                className: 'flex flex-col gap-y-2 w-full',
                                children: [
                                  (0, a.jsx)(q.d, {
                                    hideLineNumbers: !0,
                                    value: e.query,
                                    language: 'sql',
                                    className: (0, Q.cn)(
                                      'max-w-none max-h-52 w-full',
                                      '!bg-transparent !py-3 !px-3.5 prose dark:prose-dark',
                                      '[&>code]:m-0 [&>code>span]:flex [&>code>span]:flex-wrap'
                                    ),
                                  }),
                                  (0, a.jsxs)('div', {
                                    className: 'flex items-center gap-x-2',
                                    children: [
                                      (0, a.jsxs)('p', {
                                        className:
                                          'text-foreground-light text-xs',
                                        children: ['PID: ', e.pid],
                                      }),
                                      (0, a.jsx)('p', {
                                        className:
                                          'text-foreground-light text-xs',
                                        children: '•',
                                      }),
                                      (0, a.jsxs)('p', {
                                        className:
                                          'text-foreground-light text-xs',
                                        children: [
                                          'Started since: ',
                                          i()(e.query_start).format(
                                            'DD MMM YYYY HH:mm (ZZ)'
                                          ),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, a.jsxs)(E.u, {
                                children: [
                                  (0, a.jsx)(E.aJ, {
                                    asChild: !0,
                                    children: (0, a.jsx)(M.z, {
                                      type: 'warning',
                                      className: 'px-1.5',
                                      icon: (0, a.jsx)(o.Z, {}),
                                      onClick: () => h(e.pid),
                                    }),
                                  }),
                                  (0, a.jsx)(E._v, {
                                    side: 'bottom',
                                    children: 'Abort query',
                                  }),
                                ],
                              }),
                            ],
                          },
                          e.pid
                        )
                      ),
                    ],
                  }),
                ],
              }),
            }),
            (0, a.jsx)(_.Z, {
              loading: O,
              variant: 'warning',
              title: 'Confirm to abort this query? (ID: '.concat(x, ')'),
              visible: void 0 !== x,
              onCancel: () => h(void 0),
              onConfirm: () => {
                void 0 !== x &&
                  R({
                    pid: x,
                    projectRef: null == m ? void 0 : m.ref,
                    connectionString: null == g ? void 0 : g.connectionString,
                  });
              },
              'data-sentry-element': 'ConfirmationModal',
              'data-sentry-source-file': 'OngoingQueriesPanel.tsx',
              children: (0, a.jsx)('p', {
                className: 'text-sm',
                children: 'This will force the query to stop running.',
              }),
            }),
          ],
        });
      };
      var D = n(58326),
        k = n(74334),
        Z = n(198),
        I = n(98686),
        F = n(36950),
        R = n(22702),
        O = n(47697),
        A = n(32691),
        z = n(23382),
        T = n(12436),
        V = n(90817),
        B = n(92261),
        U = n(81514),
        K = n(49825),
        $ = n(14500),
        W = n(52114),
        Y = n(34216),
        G = n(97224),
        H = n(61379),
        J = n(50963),
        X = n(97687),
        ee = n.n(X),
        et = n(4839),
        en = n(83145),
        ea = n.n(en),
        es = n(75308),
        er = n(42155),
        ei = n(95526),
        el = n(49996),
        eo = n(76689),
        ed = e => {
          var t;
          let { id: n, ...r } = e,
            i =
              null === (t = (0, K.B0)().snippets[n]) || void 0 === t
                ? void 0
                : t.snippet,
            l = ee()(null == i ? void 0 : i.name),
            [o, d] = (0, s.useState)('CLI'),
            c = [
              {
                id: 'migration',
                label: 'Migration',
                title: 'Download as migration',
                description:
                  'Download the snippet in a new migration named `'.concat(
                    l,
                    '`'
                  ),
                cli: (0, eo.kL)(n, l),
                npm: (0, eo.kL)(n, l, !0),
              },
              {
                id: 'seed',
                label: 'Seed file',
                title: 'Download as seed file',
                description:
                  'If your query consists of sample data, append the snippet to the end of `supabase/seed.sql`',
                cli: (0, eo.YI)(n),
                npm: (0, eo.YI)(n, !0),
              },
              {
                id: 'sql',
                label: 'SQL file',
                title: 'Download as SQL file',
                description:
                  'Download the snippet directly into a new SQL file named `'.concat(
                    l,
                    '.sql`'
                  ),
                cli: (0, eo.y4)(n, l),
                npm: (0, eo.y4)(n, l, !0),
              },
            ];
          return (0, a.jsx)(er.Z, {
            hideFooter: !0,
            showCloseButton: !0,
            size: 'xlarge',
            header: (0, a.jsx)('p', {
              children:
                'Download snippet as local migration file via the Supabase CLI.',
            }),
            ...r,
            'data-sentry-element': 'Modal',
            'data-sentry-component': 'DownloadSnippetModal',
            'data-sentry-source-file': 'DownloadSnippetModal.tsx',
            children: (0, a.jsxs)('div', {
              className:
                'flex flex-col items-start justify-between gap-4 relative pt-2',
              children: [
                (0, a.jsx)(ei.Z, {
                  type: 'underlined',
                  listClassNames: 'pl-5',
                  'data-sentry-element': 'Tabs',
                  'data-sentry-source-file': 'DownloadSnippetModal.tsx',
                  children: c.map(e =>
                    (0, a.jsx)(
                      ei.Z.Panel,
                      {
                        id: e.id,
                        label: e.label,
                        children: (0, a.jsxs)(er.Z.Content, {
                          className: '!py-0',
                          children: [
                            (0, a.jsxs)('div', {
                              className:
                                'flex items-center justify-between mb-3',
                              children: [
                                (0, a.jsxs)('div', {
                                  className: 'flex flex-col gap-y-1',
                                  children: [
                                    (0, a.jsx)('p', {
                                      className: 'text-base',
                                      children: e.title,
                                    }),
                                    (0, a.jsx)(el.U, {
                                      className:
                                        'text-sm text-scale-1000 [&>p>code]:!break-normal',
                                      content: e.description,
                                    }),
                                  ],
                                }),
                                (0, a.jsx)(es.Z, {
                                  width: 50,
                                  options: ['CLI', 'NPM'],
                                  activeOption: o,
                                  borderOverride: 'border-muted',
                                  onClickOption: () =>
                                    'CLI' === o ? d('NPM') : d('CLI'),
                                }),
                              ],
                            }),
                            (0, a.jsx)('pre', {
                              children: (0, a.jsx)(q.d, {
                                language: 'bash',
                                className:
                                  'language-bash prose dark:prose-dark max-w-none',
                                children: 'CLI' === o ? e.cli : e.npm,
                              }),
                            }),
                          ],
                        }),
                      },
                      e.id
                    )
                  ),
                }),
                (0, a.jsxs)(er.Z.Content, {
                  className: 'w-full flex items-center justify-between pt-0',
                  'data-sentry-element': 'unknown',
                  'data-sentry-source-file': 'DownloadSnippetModal.tsx',
                  children: [
                    (0, a.jsx)('p', {
                      className: 'text-xs text-lighter',
                      children: 'Run this command from your project directory',
                    }),
                    (0, a.jsxs)('div', {
                      className: 'flex justify-between items-center gap-x-2',
                      children: [
                        (0, a.jsx)(M.z, {
                          asChild: !0,
                          type: 'default',
                          icon: (0, a.jsx)(et.Z, { strokeWidth: 1.5 }),
                          'data-sentry-element': 'Button',
                          'data-sentry-source-file': 'DownloadSnippetModal.tsx',
                          children: (0, a.jsx)(ea(), {
                            href: 'https://supabase.com/docs/guides/deployment/database-migrations',
                            target: '_blank',
                            rel: 'noreferrer',
                            'data-sentry-element': 'Link',
                            'data-sentry-source-file':
                              'DownloadSnippetModal.tsx',
                            children: 'About migrations',
                          }),
                        }),
                        (0, a.jsx)(M.z, {
                          asChild: !0,
                          type: 'default',
                          icon: (0, a.jsx)(et.Z, { strokeWidth: 1.5 }),
                          'data-sentry-element': 'Button',
                          'data-sentry-source-file': 'DownloadSnippetModal.tsx',
                          children: (0, a.jsx)(ea(), {
                            href: 'https://supabase.com/docs/guides/cli/local-development',
                            target: '_blank',
                            rel: 'noreferrer',
                            'data-sentry-element': 'Link',
                            'data-sentry-source-file':
                              'DownloadSnippetModal.tsx',
                            children: 'About CLI',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          });
        },
        ec = n(78751),
        eu = n(10839),
        ep = n(62507),
        em = n(86848),
        ef = n(5394),
        ex = n(71484),
        eh = n(52521),
        ey = n(85843),
        ev = n(36210),
        eg = n(49142),
        ej = n(36155),
        eS = n(42026),
        eb = n(47482),
        eN = n(64890),
        ew = n(56740);
      let eC = e => {
        var t;
        let { visible: n, snippets: r = [], onClose: i } = e,
          { ref: l } = (0, T.UO)(),
          o = (0, K.B0)(),
          [c, u] = (0, s.useState)(!1),
          [p, m] = (0, s.useState)(),
          { mutateAsync: f, isLoading: x } = (0, ey.P)(),
          { mutateAsync: h, isLoading: y } = (0, eh.R)({
            onError: e => {
              d.Am.error('Failed to move query: '.concat(e.message));
            },
          }),
          v =
            'new-folder' === p
              ? ef
                  .Ry({
                    name: ef
                      .Z_()
                      .min(1, 'Please provide a name for the folder'),
                  })
                  .refine(e => !o.allFolderNames.includes(e.name), {
                    message: 'This folder name already exists',
                    path: ['name'],
                  })
              : ef.Ry({}),
          g = (0, em.cI)({
            mode: 'onSubmit',
            reValidateMode: 'onSubmit',
            resolver: (0, ec.F)(v),
            defaultValues: { name: '' },
          }),
          j = (0, K.Gd)(l),
          S =
            'root' === p
              ? 'Root of the editor'
              : 'new-folder' === p
                ? 'Create a new folder'
                : null === (t = j.find(e => e.id === p)) || void 0 === t
                  ? void 0
                  : t.name,
          b =
            1 === r.length &&
            ((!r[0].folder_id && 'root' === p) || r[0].folder_id === p),
          N =
            1 === r.length &&
            ((!r[0].folder_id && 'root' === p) || r[0].folder_id === p),
          w = async e => {
            if (!l) return console.error('Project ref is required');
            try {
              let t = p;
              if ('new-folder' === p && 'name' in e) {
                let { id: n } = await f({ projectRef: l, name: e.name });
                t = n;
              }
              (await Promise.all(
                r.map(async e => {
                  let n = null == e ? void 0 : e.content;
                  if (void 0 === n) {
                    let { content: t } = await (0, ex.A)({
                      projectRef: l,
                      id: e.id,
                    });
                    'sql' in t && (n = t);
                  }
                  if (void 0 === n)
                    return d.Am.error(
                      'Failed to save snippet: Unable to retrieve snippet contents'
                    );
                  await h({
                    projectRef: l,
                    payload: {
                      id: e.id,
                      type: 'sql',
                      name: e.name,
                      description: e.description,
                      visibility: e.visibility,
                      project_id: e.project_id,
                      owner_id: e.owner_id,
                      folder_id: 'root' === p ? null : t,
                      content: n,
                    },
                  });
                })
              ),
                d.Am.success(
                  'Successfully moved '
                    .concat(
                      1 === r.length
                        ? '"'.concat(r[0].name, '"')
                        : ''.concat(r.length, ' snippets'),
                      ' to '
                    )
                    .concat('root' === p ? 'the root of the editor' : S)
                ),
                r.forEach(e => {
                  o.updateSnippet({
                    id: e.id,
                    snippet: { ...e, folder_id: 'root' === p ? null : p },
                    skipSave: !0,
                  });
                }),
                i());
            } catch (e) {
              d.Am.error('Failed to create new folder: '.concat(e.message));
            }
          };
        return (
          (0, s.useEffect)(() => {
            if (n && void 0 !== r) {
              if (1 === r.length) {
                var e;
                m(null !== (e = r[0].folder_id) && void 0 !== e ? e : 'root');
              } else m('root');
              g.reset({ name: '' });
            }
          }, [n, r]),
          (0, a.jsx)(ev.Vq, {
            open: n,
            onOpenChange: () => i(),
            'data-sentry-element': 'Dialog',
            'data-sentry-component': 'MoveQueryModal',
            'data-sentry-source-file': 'MoveQueryModal.tsx',
            children: (0, a.jsx)(ev.cZ, {
              'data-sentry-element': 'DialogContent',
              'data-sentry-source-file': 'MoveQueryModal.tsx',
              children: (0, a.jsx)(eg.l0, {
                ...g,
                'data-sentry-element': 'Form_Shadcn_',
                'data-sentry-source-file': 'MoveQueryModal.tsx',
                children: (0, a.jsxs)('form', {
                  id: 'move-snippet',
                  onSubmit: g.handleSubmit(w),
                  children: [
                    (0, a.jsxs)(ev.fK, {
                      'data-sentry-element': 'DialogHeader',
                      'data-sentry-source-file': 'MoveQueryModal.tsx',
                      children: [
                        (0, a.jsxs)(ev.$N, {
                          'data-sentry-element': 'DialogTitle',
                          'data-sentry-source-file': 'MoveQueryModal.tsx',
                          children: [
                            'Move ',
                            1 === r.length
                              ? '"'.concat(r[0].name, '"')
                              : ''.concat(r.length),
                            ' ',
                            'snippet',
                            r.length > 1 ? 's' : '',
                            ' to a folder',
                          ],
                        }),
                        (0, a.jsxs)(ev.Be, {
                          'data-sentry-element': 'DialogDescription',
                          'data-sentry-source-file': 'MoveQueryModal.tsx',
                          children: [
                            'Select which folder to move your quer',
                            r.length > 1 ? 'ies' : 'y',
                            ' to',
                          ],
                        }),
                      ],
                    }),
                    (0, a.jsx)(ev.P3, {
                      'data-sentry-element': 'DialogSectionSeparator',
                      'data-sentry-source-file': 'MoveQueryModal.tsx',
                    }),
                    (0, a.jsxs)(ev.VO, {
                      className: 'py-5 flex flex-col gap-y-4',
                      'data-sentry-element': 'DialogSection',
                      'data-sentry-source-file': 'MoveQueryModal.tsx',
                      children: [
                        (0, a.jsxs)('div', {
                          className: 'flex flex-col gap-y-2',
                          children: [
                            (0, a.jsx)(ej._, {
                              className: 'text-foreground-light',
                              'data-sentry-element': 'Label_Shadcn_',
                              'data-sentry-source-file': 'MoveQueryModal.tsx',
                              children: 'Select a folder',
                            }),
                            (0, a.jsxs)(eS.J2, {
                              open: c,
                              onOpenChange: u,
                              modal: !1,
                              'data-sentry-element': 'Popover_Shadcn_',
                              'data-sentry-source-file': 'MoveQueryModal.tsx',
                              children: [
                                (0, a.jsx)(eS.xo, {
                                  asChild: !0,
                                  'data-sentry-element':
                                    'PopoverTrigger_Shadcn_',
                                  'data-sentry-source-file':
                                    'MoveQueryModal.tsx',
                                  children: (0, a.jsx)(M.z, {
                                    block: !0,
                                    size: 'small',
                                    type: 'default',
                                    className: 'pr-2 justify-between',
                                    iconRight: (0, a.jsx)(eu.Z, {
                                      className:
                                        'text-foreground-light rotate-90',
                                      strokeWidth: 2,
                                      size: 12,
                                    }),
                                    'data-sentry-element': 'Button',
                                    'data-sentry-source-file':
                                      'MoveQueryModal.tsx',
                                    children: (0, a.jsxs)('div', {
                                      className: 'flex items-center space-x-2',
                                      children: [S, b && ' (Current)'],
                                    }),
                                  }),
                                }),
                                (0, a.jsx)(eS.yk, {
                                  className: 'p-0',
                                  side: 'bottom',
                                  align: 'start',
                                  sameWidthAsTrigger: !0,
                                  'data-sentry-element':
                                    'PopoverContent_Shadcn_',
                                  'data-sentry-source-file':
                                    'MoveQueryModal.tsx',
                                  children: (0, a.jsxs)(eb.mY, {
                                    'data-sentry-element': 'Command_Shadcn_',
                                    'data-sentry-source-file':
                                      'MoveQueryModal.tsx',
                                    children: [
                                      (0, a.jsx)(eb.sZ, {
                                        placeholder: 'Find folder...',
                                        'data-sentry-element':
                                          'CommandInput_Shadcn_',
                                        'data-sentry-source-file':
                                          'MoveQueryModal.tsx',
                                      }),
                                      (0, a.jsxs)(eb.e8, {
                                        'data-sentry-element':
                                          'CommandList_Shadcn_',
                                        'data-sentry-source-file':
                                          'MoveQueryModal.tsx',
                                        children: [
                                          (0, a.jsx)(eb.rb, {
                                            'data-sentry-element':
                                              'CommandEmpty_Shadcn_',
                                            'data-sentry-source-file':
                                              'MoveQueryModal.tsx',
                                            children: 'No folders found',
                                          }),
                                          (0, a.jsx)(eb.fu, {
                                            'data-sentry-element':
                                              'CommandGroup_Shadcn_',
                                            'data-sentry-source-file':
                                              'MoveQueryModal.tsx',
                                            children: (0, a.jsxs)(eN.x, {
                                              className:
                                                (j || []).length > 6
                                                  ? 'h-[210px]'
                                                  : '',
                                              'data-sentry-element':
                                                'ScrollArea',
                                              'data-sentry-source-file':
                                                'MoveQueryModal.tsx',
                                              children: [
                                                (0, a.jsxs)(
                                                  eb.di,
                                                  {
                                                    value: 'root',
                                                    className:
                                                      'cursor-pointer w-full justify-between',
                                                    onSelect: () => {
                                                      (u(!1), m('root'));
                                                    },
                                                    onClick: () => {
                                                      (u(!1), m('root'));
                                                    },
                                                    'data-sentry-element':
                                                      'CommandItem_Shadcn_',
                                                    'data-sentry-source-file':
                                                      'MoveQueryModal.tsx',
                                                    children: [
                                                      (0, a.jsxs)('span', {
                                                        children: [
                                                          'Root of the editor',
                                                          1 === r.length &&
                                                            null ===
                                                              r[0].folder_id &&
                                                            ' (Current)',
                                                        ],
                                                      }),
                                                      'root' === p &&
                                                        (0, a.jsx)(ep.Z, {
                                                          size: 14,
                                                        }),
                                                    ],
                                                  },
                                                  'root'
                                                ),
                                                null == j
                                                  ? void 0
                                                  : j.map(e =>
                                                      (0, a.jsxs)(
                                                        eb.di,
                                                        {
                                                          value: e.id,
                                                          className:
                                                            'cursor-pointer w-full justify-between',
                                                          onSelect: () => {
                                                            (u(!1), m(e.id));
                                                          },
                                                          onClick: () => {
                                                            (u(!1), m(e.id));
                                                          },
                                                          children: [
                                                            (0, a.jsxs)(
                                                              'span',
                                                              {
                                                                children: [
                                                                  e.name,
                                                                  1 ===
                                                                    r.length &&
                                                                    r[0]
                                                                      .folder_id ===
                                                                      e.id &&
                                                                    ' (Current)',
                                                                ],
                                                              }
                                                            ),
                                                            e.id === p &&
                                                              (0, a.jsx)(ep.Z, {
                                                                size: 14,
                                                              }),
                                                          ],
                                                        },
                                                        e.id
                                                      )
                                                    ),
                                              ],
                                            }),
                                          }),
                                          (0, a.jsx)(eb.zz, {
                                            'data-sentry-element':
                                              'CommandSeparator_Shadcn_',
                                            'data-sentry-source-file':
                                              'MoveQueryModal.tsx',
                                          }),
                                          (0, a.jsx)(eb.fu, {
                                            'data-sentry-element':
                                              'CommandGroup_Shadcn_',
                                            'data-sentry-source-file':
                                              'MoveQueryModal.tsx',
                                            children: (0, a.jsxs)(eb.di, {
                                              className:
                                                'cursor-pointer w-full justify-start gap-x-2',
                                              onSelect: e => {
                                                (u(!1), m('new-folder'));
                                              },
                                              onClick: () => {
                                                (u(!1), m('new-folder'));
                                              },
                                              'data-sentry-element':
                                                'CommandItem_Shadcn_',
                                              'data-sentry-source-file':
                                                'MoveQueryModal.tsx',
                                              children: [
                                                (0, a.jsx)(F.Z, {
                                                  size: 14,
                                                  strokeWidth: 1.5,
                                                  'data-sentry-element': 'Plus',
                                                  'data-sentry-source-file':
                                                    'MoveQueryModal.tsx',
                                                }),
                                                (0, a.jsx)('p', {
                                                  children: 'New folder',
                                                }),
                                              ],
                                            }),
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              ],
                            }),
                          ],
                        }),
                        'new-folder' === p &&
                          (0, a.jsx)('div', {
                            className: 'flex flex-col gap-y-2',
                            children: (0, a.jsx)(eg.Wi, {
                              name: 'name',
                              control: g.control,
                              render: e => {
                                let { field: t } = e;
                                return (0, a.jsxs)(eg.xJ, {
                                  className: 'flex flex-col gap-y-2',
                                  children: [
                                    (0, a.jsx)(eg.lX, {
                                      children:
                                        'Provide a name for your new folder',
                                    }),
                                    (0, a.jsx)(eg.NI, {
                                      children: (0, a.jsx)(ew.I, {
                                        autoFocus: !0,
                                        ...t,
                                        autoComplete: 'off',
                                        disabled: y || x,
                                      }),
                                    }),
                                    (0, a.jsx)(eg.zG, {}),
                                  ],
                                });
                              },
                            }),
                          }),
                      ],
                    }),
                    (0, a.jsxs)(ev.cN, {
                      'data-sentry-element': 'DialogFooter',
                      'data-sentry-source-file': 'MoveQueryModal.tsx',
                      children: [
                        (0, a.jsx)(M.z, {
                          type: 'default',
                          disabled: y || x,
                          onClick: () => i(),
                          'data-sentry-element': 'Button',
                          'data-sentry-source-file': 'MoveQueryModal.tsx',
                          children: 'Cancel',
                        }),
                        (0, a.jsx)(M.z, {
                          type: 'primary',
                          htmlType: 'submit',
                          disabled: N,
                          loading: y || x,
                          'data-sentry-element': 'Button',
                          'data-sentry-source-file': 'MoveQueryModal.tsx',
                          children: 'Move file',
                        }),
                      ],
                    }),
                  ],
                }),
              }),
            }),
          })
        );
      };
      var eL = n(92797),
        eM = n(69951),
        eq = n(75541),
        eQ = n(19540),
        eE = n(51571),
        e_ = n(77060),
        eP = n(45437),
        eD = e => {
          let { snippet: t = {}, visible: n, onCancel: r, onComplete: i } = e,
            { ref: l } = (0, T.UO)(),
            o = (0, eq.l)(),
            c = (0, K.B0)(),
            { data: u } = (0, eM.Gl)({ orgSlug: null == o ? void 0 : o.slug }),
            p = 'sql' === t.type,
            m = (0, eP.$w)(u),
            { id: f, name: x, description: h } = t,
            [y, v] = (0, s.useState)(x),
            [g, j] = (0, s.useState)(h),
            { mutate: S, isLoading: b } = (0, eL.g)({
              onSuccess: e => {
                let { title: t, description: n } = e;
                (v(t), g || j(n));
              },
              onError: e => {
                d.Am.error('Failed to rename query: '.concat(e.message));
              },
            }),
            N = async () => {
              if ('content' in t && p) S({ sql: t.content.sql });
              else
                try {
                  let { content: e } = await (0, ex.A)({
                    projectRef: l,
                    id: t.id,
                  });
                  'sql' in e && S({ sql: e.sql });
                } catch (e) {
                  d.Am.error(
                    'Unable to generate title based on query contents'
                  );
                }
            },
            { mutateAsync: w } = (0, eh.R)(),
            C = async (e, n) => {
              let { setSubmitting: a } = n;
              if (!l) return console.error('Project ref is required');
              if (!f) return console.error('Snippet ID is required');
              a(!0);
              try {
                let e = t;
                ('content' in e ||
                  ((e = await (0, ex.A)({ projectRef: l, id: f })),
                  c.addSnippet({ projectRef: l, snippet: e })),
                  await w({
                    projectRef: l,
                    payload: { ...e, name: y, description: g },
                  }),
                  c.renameSnippet({ id: f, name: y, description: g }),
                  d.Am.success('Successfully renamed snippet!'),
                  i && i());
              } catch (e) {
                (a(!1),
                  d.Am.error('Failed to rename snippet: '.concat(e.message)));
              }
            };
          return (
            (0, s.useEffect)(() => {
              (v(x), j(h));
            }, [t.id]),
            (0, a.jsx)(er.Z, {
              visible: n,
              onCancel: r,
              hideFooter: !0,
              header: 'Rename',
              size: 'small',
              'data-sentry-element': 'Modal',
              'data-sentry-component': 'RenameQueryModal',
              'data-sentry-source-file': 'RenameQueryModal.tsx',
              children: (0, a.jsx)(eQ.Z, {
                onReset: r,
                validateOnBlur: !0,
                initialValues: {
                  name: null != x ? x : '',
                  description: null != h ? h : '',
                },
                validate: () => {
                  let e = {};
                  return (y || (e.name = 'Please enter a query name'), e);
                },
                onSubmit: C,
                'data-sentry-element': 'Form',
                'data-sentry-source-file': 'RenameQueryModal.tsx',
                children: e => {
                  let { isSubmitting: t } = e;
                  return (0, a.jsxs)(a.Fragment, {
                    children: [
                      (0, a.jsxs)(er.Z.Content, {
                        className: 'space-y-4',
                        children: [
                          (0, a.jsx)(eE.Z, {
                            label: 'Name',
                            id: 'name',
                            name: 'name',
                            value: y,
                            onChange: e => v(e.target.value),
                          }),
                          (0, a.jsx)('div', {
                            className: 'flex w-full justify-end mt-2',
                            children:
                              !m &&
                              (0, a.jsx)(M.z, {
                                type: 'default',
                                onClick: () => N(),
                                size: 'tiny',
                                disabled: b,
                                children: (0, a.jsxs)('div', {
                                  className: 'flex items-center gap-1',
                                  children: [
                                    (0, a.jsx)('div', {
                                      className: 'scale-75',
                                      children: (0, a.jsx)(e_.c, {
                                        loading: b,
                                      }),
                                    }),
                                    (0, a.jsx)('span', {
                                      children: 'Rename with Supabase AI',
                                    }),
                                  ],
                                }),
                              }),
                          }),
                          (0, a.jsx)(eE.Z.TextArea, {
                            label: 'Description',
                            id: 'description',
                            placeholder: 'Describe query',
                            size: 'medium',
                            textAreaClassName: 'resize-none',
                            value: g,
                            onChange: e => j(e.target.value),
                          }),
                        ],
                      }),
                      (0, a.jsx)(er.Z.Separator, {}),
                      (0, a.jsxs)(er.Z.Content, {
                        className: 'flex items-center justify-end gap-2',
                        children: [
                          (0, a.jsx)(M.z, {
                            htmlType: 'reset',
                            type: 'default',
                            onClick: r,
                            disabled: t,
                            children: 'Cancel',
                          }),
                          (0, a.jsx)(M.z, {
                            htmlType: 'submit',
                            loading: t,
                            disabled: t,
                            children: 'Rename query',
                          }),
                        ],
                      }),
                    ],
                  });
                },
              }),
            })
          );
        },
        ek = n(44840),
        eZ = n(6464),
        eI = n(84437);
      async function eF(e, t) {
        let { projectRef: n, cumulative: a, type: s, name: r } = e;
        if (void 0 === n) throw Error('projectRef is required');
        let { data: i, error: l } = await (0, eZ.U2)(
          '/platform/projects/{ref}/content/count',
          {
            params: {
              path: { ref: n },
              query: { ...(s && { type: s }), ...(r && { name: r }) },
            },
            ...(a ? {} : { headers: { Version: '2' } }),
            signal: t,
          }
        );
        if (l) throw (0, eZ.S3)(l);
        return i;
      }
      let eR = function (e) {
        let { projectRef: t, cumulative: n, type: a, name: s } = e,
          { enabled: r = !0, ...i } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, v.a)(
          eI.$.count(t, a, { cumulative: n, name: s }),
          e => {
            let { signal: r } = e;
            return eF({ projectRef: t, cumulative: n, type: a, name: s }, r);
          },
          { enabled: r && void 0 !== t, ...i }
        );
      };
      var eO = n(29456);
      async function eA(e, t) {
        let { projectRef: n, ids: a } = e,
          { data: s, error: r } = await (0, eZ.IV)(
            '/platform/projects/{ref}/content/folders',
            { params: { path: { ref: n }, query: { ids: a } }, signal: t }
          );
        if (r) throw (0, eZ.S3)(r);
        return s;
      }
      let ez = function () {
        let {
            onError: e,
            onSuccess: t,
            invalidateQueriesOnSuccess: n = !0,
            ...a
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {},
          s = (0, p.NL)();
        return (0, m.D)(e => eA(e), {
          async onSuccess(e, a, r) {
            let { projectRef: i } = a;
            (n && (await s.invalidateQueries(eI.$.folders(i))),
              await (null == t ? void 0 : t(e, a, r)));
          },
          async onError(t, n, a) {
            void 0 === e
              ? d.Am.error('Failed to delete folder: '.concat(t.message))
              : e(t, n, a);
          },
          ...a,
        });
      };
      var eT = n(62099),
        eV = n(81277),
        eB = n(38872),
        eU = n(3671),
        eK = n(11221),
        e$ = n(54135),
        eW = () =>
          (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)('div', {
                className: 'flex flex-row h-6 px-3 items-center gap-3',
                children: [
                  (0, a.jsx)(e$.O, {
                    className: 'h-4 w-5',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                  (0, a.jsx)(e$.O, {
                    className: 'w-40 h-4',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'flex flex-row h-6 px-3 items-center gap-3',
                children: [
                  (0, a.jsx)(e$.O, {
                    className: 'h-4 w-5',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                  (0, a.jsx)(e$.O, {
                    className: 'w-32 h-4',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className:
                  'flex flex-row h-6 px-3 items-center gap-3 opacity-75',
                children: [
                  (0, a.jsx)(e$.O, {
                    className: 'h-4 w-5',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                  (0, a.jsx)(e$.O, {
                    className: 'w-20 h-4',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className:
                  'flex flex-row h-6 px-3 items-center gap-3 opacity-50',
                children: [
                  (0, a.jsx)(e$.O, {
                    className: 'h-4 w-5',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                  (0, a.jsx)(e$.O, {
                    className: 'w-40 h-4',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className:
                  'flex flex-row h-6 px-3 items-center gap-3 opacity-25',
                children: [
                  (0, a.jsx)(e$.O, {
                    className: 'h-4 w-5',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                  (0, a.jsx)(e$.O, {
                    className: 'w-20 h-4',
                    'data-sentry-element': 'Skeleton',
                    'data-sentry-source-file': 'SQLEditorLoadingSnippets.tsx',
                  }),
                ],
              }),
            ],
          });
      let eY = { id: 0, name: '', parent: null, children: [] },
        eG = e => {
          var t, n;
          if (void 0 === e) return [eY];
          let { folders: a, contents: s } = e,
            r =
              (null == a
                ? void 0
                : a.map(e => {
                    var t;
                    let { id: n, name: a } = e;
                    return {
                      id: n,
                      name: a,
                      parent: 0,
                      isBranch: !0,
                      children:
                        null !==
                          (t =
                            null == s
                              ? void 0
                              : s
                                  .filter(e => e.folder_id === n)
                                  .map(e => e.id)) && void 0 !== t
                          ? t
                          : [],
                      metadata: e,
                    };
                  })) || [],
            i =
              (null == s
                ? void 0
                : s.map(e => {
                    let { id: t, name: n, folder_id: a } = e;
                    return {
                      id: t,
                      name: n,
                      parent: null != a ? a : 0,
                      children: [],
                      metadata: e,
                    };
                  })) || [];
          return [
            {
              id: 0,
              name: '',
              parent: null,
              children: [
                ...(null === (t = a || []) || void 0 === t
                  ? void 0
                  : t.map(e => e.id)),
                ...(null === (n = (s || []).filter(e => !e.folder_id)) ||
                void 0 === n
                  ? void 0
                  : n.map(e => e.id)),
              ],
            },
            ...r,
            ...i,
          ];
        };
      function eH(e) {
        let t = new Set(),
          n = e.filter(e => 0 === e.parent);
        if (n.length > 0) {
          let e = n[n.length - 1];
          ('string' == typeof e.id && t.add(e.id),
            n.forEach(e => {
              if (e.children.length > 0) {
                let n = e.children[e.children.length - 1];
                'string' == typeof n && t.add(n);
              }
            }));
        }
        return t;
      }
      var eJ = n(3977),
        eX = n(74304),
        e0 = n(3374),
        e1 = n(5027),
        e4 = n(11024),
        e2 = n(58596),
        e5 = n(29790),
        e3 = n(34243),
        e6 = n(90688);
      async function e9(e, t) {
        let { projectRef: n, folderId: a, cursor: s, sort: r, name: i } = e;
        if (void 0 === n) throw Error('projectRef is required');
        if (void 0 === a) throw Error('folderId is required');
        let { data: l, error: o } = await (0, eZ.U2)(
          '/platform/projects/{ref}/content/folders/{id}',
          {
            params: {
              path: { ref: n, id: a },
              query: {
                cursor: s,
                limit: eT.KJ.toString(),
                sort_by: r,
                sort_order: 'name' === r ? 'asc' : 'desc',
                name: i,
              },
            },
            signal: t,
          }
        );
        return (o && (0, eZ.S3)(o), { ...l.data, cursor: l.cursor });
      }
      let e7 = function (e) {
        let { projectRef: t, folderId: n, name: a, sort: s } = e,
          { enabled: r = !0, ...i } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, e6.N)(
          eI.$.folderContents(t, n, { name: a, sort: s }),
          e => {
            let { signal: r, pageParam: i } = e;
            return e9(
              { projectRef: t, folderId: n, cursor: i, name: a, sort: s },
              r
            );
          },
          {
            enabled: r && void 0 !== t && void 0 !== n,
            getNextPageParam: e => e.cursor,
            ...i,
          }
        );
      };
      var e8 = n(72048),
        te = n(94669);
      let tt = e => {
          let {
              element: t,
              isBranch: n,
              isExpanded: r,
              level: i,
              status: l,
              isSelected: o,
              isMultiSelected: d,
              getNodeProps: c,
              onSelectCreate: u,
              onSelectDelete: p,
              onSelectRename: m,
              onSelectMove: f,
              onSelectShare: x,
              onSelectUnshare: h,
              onSelectDownload: y,
              onSelectDuplicate: v,
              onEditSave: g,
              onMultiSelect: j,
              isLastItem: S,
              hasNextPage: b,
              fetchNextPage: N,
              isFetchingNextPage: w,
              sort: C,
              name: L,
              onFolderContentsChange: q,
            } = e,
            Q = (0, A.useRouter)(),
            { id: E, ref: _ } = (0, e3.U)(),
            { profile: P } = (0, U.Un)(),
            { className: D, onClick: k } = c(),
            I = (0, K.B0)(),
            R =
              (null == P ? void 0 : P.id) ===
              (null == t ? void 0 : t.metadata.owner_id),
            O = 'project' === t.metadata.visibility,
            z = 'editing' === l,
            B = (0, V.Xo)(Z.KA.CREATE, 'user_content', {
              resource: { type: 'sql', owner_id: null == P ? void 0 : P.id },
              subject: { id: null == P ? void 0 : P.id },
            }),
            $ = 0 === t.parent ? void 0 : t.parent,
            W = n && r,
            {
              data: Y,
              isSuccess: G,
              isLoading: H,
              isFetchingNextPage: J,
              hasNextPage: X,
              fetchNextPage: ee,
              isPreviousData: en,
              isFetching: es,
            } = e7(
              {
                projectRef: _,
                folderId: null != $ ? $ : t.id,
                name: L,
                sort: C,
              },
              { enabled: W, keepPreviousData: !0 }
            );
          (0, s.useEffect)(() => {
            _ &&
              G &&
              Y.pages.forEach(e => {
                var t;
                null === (t = e.contents) ||
                  void 0 === t ||
                  t.forEach(e => {
                    I.addSnippet({ projectRef: _, snippet: e });
                  });
              });
          }, [_, null == Y ? void 0 : Y.pages]);
          let er = (0, e8.Z)(q);
          (0, s.useEffect)(() => {
            if (W) {
              var e;
              null === (e = er.current) ||
                void 0 === e ||
                e.call(er, {
                  isLoading: H || (en && es),
                  snippets:
                    null == Y
                      ? void 0
                      : Y.pages.flatMap(e => {
                          var t;
                          return null !== (t = e.contents) && void 0 !== t
                            ? t
                            : [];
                        }),
                });
            }
          }, [null == Y ? void 0 : Y.pages, es, H, en, W]);
          let ei = void 0 !== $;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)(te.xV, {
                modal: !1,
                'data-sentry-element': 'ContextMenu_Shadcn_',
                'data-sentry-source-file': 'SQLEditorTreeViewItem.tsx',
                children: [
                  (0, a.jsx)(te.W4, {
                    asChild: !0,
                    'data-sentry-element': 'ContextMenuTrigger_Shadcn_',
                    'data-sentry-source-file': 'SQLEditorTreeViewItem.tsx',
                    children: (0, a.jsx)(eU.A7, {
                      level: i,
                      xPadding: 16,
                      name: t.name,
                      className: D,
                      isExpanded: r,
                      isBranch: n,
                      isSelected: o || E === t.id,
                      isEditing: z,
                      isLoading: (W && H) || 'saving' === l,
                      onEditSubmit: e => {
                        void 0 !== g && g(e);
                      },
                      onClick: e => {
                        n
                          ? z || k(e)
                          : e.shiftKey && 'new' !== E
                            ? null == j || j(t.id)
                            : Q.push(
                                '/project/'.concat(_, '/sql/').concat(t.id)
                              );
                      },
                      'data-sentry-element': 'TreeViewItem',
                      'data-sentry-source-file': 'SQLEditorTreeViewItem.tsx',
                    }),
                  }),
                  (0, a.jsx)(te.h_, {
                    onCloseAutoFocus: e => e.stopPropagation(),
                    'data-sentry-element': 'ContextMenuContent_Shadcn_',
                    'data-sentry-source-file': 'SQLEditorTreeViewItem.tsx',
                    children: n
                      ? (0, a.jsxs)(a.Fragment, {
                          children: [
                            void 0 !== u &&
                              (0, a.jsxs)(te.Zo, {
                                className: 'gap-x-2',
                                onSelect: () => u(),
                                onFocusCapture: e => e.stopPropagation(),
                                children: [
                                  (0, a.jsx)(F.Z, { size: 14 }),
                                  'Create new snippet',
                                ],
                              }),
                            void 0 !== m &&
                              R &&
                              (0, a.jsxs)(te.Zo, {
                                className: 'gap-x-2',
                                onSelect: () => m(),
                                onFocusCapture: e => e.stopPropagation(),
                                children: [
                                  (0, a.jsx)(eJ.Z, { size: 14 }),
                                  'Rename folder',
                                ],
                              }),
                            void 0 !== p &&
                              R &&
                              (0, a.jsxs)(a.Fragment, {
                                children: [
                                  (0, a.jsx)(te.uP, {}),
                                  (0, a.jsxs)(te.Zo, {
                                    className: 'gap-x-2',
                                    onSelect: () => p(),
                                    onFocusCapture: e => e.stopPropagation(),
                                    children: [
                                      (0, a.jsx)(eX.Z, { size: 14 }),
                                      'Delete folder',
                                    ],
                                  }),
                                ],
                              }),
                          ],
                        })
                      : d
                        ? (0, a.jsxs)(a.Fragment, {
                            children: [
                              void 0 !== f &&
                                (0, a.jsxs)(te.Zo, {
                                  className: 'gap-x-2',
                                  onSelect: () => f(),
                                  onFocusCapture: e => e.stopPropagation(),
                                  children: [
                                    (0, a.jsx)(e0.Z, { size: 14 }),
                                    'Move selected queries',
                                  ],
                                }),
                              (0, a.jsx)(te.uP, {}),
                              void 0 !== p &&
                                (0, a.jsxs)(te.Zo, {
                                  className: 'gap-x-2',
                                  onSelect: () => p(),
                                  onFocusCapture: e => e.stopPropagation(),
                                  children: [
                                    (0, a.jsx)(eX.Z, { size: 14 }),
                                    'Delete selected queries',
                                  ],
                                }),
                            ],
                          })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)(te.Zo, {
                                asChild: !0,
                                className: 'gap-x-2',
                                onSelect: () => {},
                                onFocusCapture: e => e.stopPropagation(),
                                children: (0, a.jsxs)(ea(), {
                                  href: '/project/'
                                    .concat(_, '/sql/')
                                    .concat(t.id),
                                  target: '_blank',
                                  rel: 'noreferrer',
                                  children: [
                                    (0, a.jsx)(et.Z, { size: 14 }),
                                    'Open in new tab',
                                  ],
                                }),
                              }),
                              (0, a.jsx)(te.uP, {}),
                              void 0 !== m &&
                                R &&
                                (0, a.jsxs)(te.Zo, {
                                  className: 'gap-x-2',
                                  onSelect: () => m(),
                                  onFocusCapture: e => e.stopPropagation(),
                                  children: [
                                    (0, a.jsx)(eJ.Z, { size: 14 }),
                                    'Rename query',
                                  ],
                                }),
                              void 0 !== f &&
                                R &&
                                (0, a.jsxs)(te.Zo, {
                                  className: 'gap-x-2',
                                  onSelect: () => f(),
                                  onFocusCapture: e => e.stopPropagation(),
                                  children: [
                                    (0, a.jsx)(e0.Z, { size: 14 }),
                                    'Move query',
                                  ],
                                }),
                              void 0 !== x &&
                                !O &&
                                B &&
                                (0, a.jsxs)(te.Zo, {
                                  className: 'gap-x-2',
                                  onSelect: () => x(),
                                  onFocusCapture: e => e.stopPropagation(),
                                  children: [
                                    (0, a.jsx)(e1.Z, { size: 14 }),
                                    'Share query with team',
                                  ],
                                }),
                              void 0 !== h &&
                                O &&
                                R &&
                                (0, a.jsxs)(te.Zo, {
                                  className: 'gap-x-2',
                                  onSelect: () => h(),
                                  onFocusCapture: e => e.stopPropagation(),
                                  children: [
                                    (0, a.jsx)(e4.Z, { size: 14 }),
                                    'Unshare query with team',
                                  ],
                                }),
                              void 0 !== v &&
                                B &&
                                (0, a.jsxs)(te.Zo, {
                                  className: 'gap-x-2',
                                  onSelect: () => v(),
                                  onFocusCapture: e => e.stopPropagation(),
                                  children: [
                                    (0, a.jsx)(e2.Z, { size: 14 }),
                                    'Duplicate query',
                                  ],
                                }),
                              void 0 !== y &&
                                T.Qy &&
                                (0, a.jsxs)(te.Zo, {
                                  className: 'gap-x-2',
                                  onSelect: () => y(),
                                  onFocusCapture: e => e.stopPropagation(),
                                  children: [
                                    (0, a.jsx)(e5.Z, { size: 14 }),
                                    'Download as migration file',
                                  ],
                                }),
                              void 0 !== p &&
                                R &&
                                (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)(te.uP, {}),
                                    (0, a.jsxs)(te.Zo, {
                                      className: 'gap-x-2',
                                      onSelect: () => p(),
                                      children: [
                                        (0, a.jsx)(eX.Z, { size: 14 }),
                                        'Delete query',
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                  }),
                ],
              }),
              (ei ? X : b) &&
                'string' == typeof t.id &&
                S &&
                (0, a.jsx)('div', {
                  className: 'px-4 py-1',
                  style: {
                    paddingLeft:
                      !t.isBranch && t.level > 1 ? 48 * (t.level - 1) : void 0,
                  },
                  children: (0, a.jsx)(M.z, {
                    type: 'outline',
                    size: 'tiny',
                    block: !0,
                    loading: ei ? J : w,
                    disabled: ei ? J : w,
                    onClick: function () {
                      ei ? ee() : 'function' == typeof N && N();
                    },
                    children: 'Load More',
                  }),
                }),
            ],
          });
        },
        tn = { shared: !1, favorite: !1, private: !0 },
        ta = e => {
          var t, n, r, i, l, o, c;
          let { sort: u = 'inserted_at' } = e,
            p = (0, A.useRouter)(),
            { profile: m } = (0, U.Un)(),
            f = (0, b.Vm)(),
            { ref: x, id: h } = (0, T.UO)(),
            y = (0, K.B0)(),
            [v, g] = (0, B._)(
              w.dA.SQL_EDITOR_SECTION_STATE(null != x ? x : ''),
              tn
            ),
            { shared: j, favorite: S, private: N } = v,
            [C, L] = (0, s.useState)(!1),
            [M, q] = (0, s.useState)(!1),
            [Q, E] = (0, s.useState)(!1),
            [P, D] = (0, s.useState)([]),
            [k, Z] = (0, s.useState)([]),
            [I, F] = (0, s.useState)(),
            [R, O] = (0, s.useState)(),
            [z, V] = (0, s.useState)(),
            [$, X] = (0, s.useState)(),
            [ee, et] = (0, s.useState)(),
            en =
              null === (t = y.snippets[h]) || void 0 === t ? void 0 : t.snippet,
            {
              data: ea,
              isSuccess: es,
              isLoading: er,
              isPreviousData: ei,
              isFetching: el,
              hasNextPage: ec,
              fetchNextPage: eu,
              isFetchingNextPage: ep,
            } = (0, eT.md)(
              { projectRef: x, sort: u },
              { keepPreviousData: !0 }
            ),
            [em, ef] = (0, s.useState)({}),
            ey = (0, s.useMemo)(() => {
              var e;
              let t =
                  null !==
                    (e =
                      null == ea
                        ? void 0
                        : ea.pages.flatMap(e => {
                            var t;
                            return null !== (t = e.contents) && void 0 !== t
                              ? t
                              : [];
                          })) && void 0 !== e
                    ? e
                    : [],
                n = Object.values(em).reduce(
                  (e, t) => {
                    var n;
                    let a = (
                        null !== (n = t.snippets) && void 0 !== n ? n : []
                      ).filter(t => !e.snippetIds.has(t.id)),
                      s = new Set(a.map(e => e.id));
                    return {
                      snippets: [...e.snippets, ...a],
                      isLoading: e.isLoading || t.isLoading,
                      snippetIds: new Set([...e.snippetIds, ...s]),
                    };
                  },
                  {
                    snippets: t,
                    isLoading: er || (ei && el),
                    snippetIds: new Set(t.map(e => e.id)),
                  }
                );
              return (
                en &&
                  'user' === en.visibility &&
                  !n.snippetIds.has(en.id) &&
                  (n.snippetIds.add(en.id), (n.snippets = [...n.snippets, en])),
                n
              );
            }, [null == ea ? void 0 : ea.pages, em, er, ei, el, en]),
            ev = (0, s.useMemo)(() => {
              var e, t;
              return null !==
                (t =
                  null === (e = ey.snippets) || void 0 === e
                    ? void 0
                    : e
                        .filter(e => 'user' === e.visibility)
                        .sort((e, t) =>
                          'name' === u
                            ? e.name.localeCompare(t.name)
                            : new Date(t.inserted_at).valueOf() -
                              new Date(e.inserted_at).valueOf()
                        )) && void 0 !== t
                ? t
                : [];
            }, [ey.snippets, u]),
            eg = (0, K.Gd)(x),
            { data: ej } = eR({ projectRef: x, type: 'sql' }),
            eS =
              null !== (i = null == ej ? void 0 : ej.private) && void 0 !== i
                ? i
                : 0,
            eb = (0, s.useMemo)(
              () =>
                0 === eg.length && 0 === ev.length
                  ? [eY]
                  : eG({ folders: eg, contents: ev }),
              [eg, ev]
            ),
            eN = (0, s.useMemo)(() => eH(eb), [eb]),
            {
              data: ew,
              isLoading: eL,
              hasNextPage: eM,
              fetchNextPage: eq,
              isFetchingNextPage: eQ,
              isSuccess: eE,
            } = (0, eV.v)(
              { projectRef: x, favorite: !0, sort: u },
              { enabled: S, keepPreviousData: !0 }
            ),
            e_ = (0, s.useMemo)(() => {
              var e, t;
              let n =
                null !==
                  (e =
                    null == ew
                      ? void 0
                      : ew.pages.flatMap(e => {
                          var t;
                          return null !== (t = e.contents) && void 0 !== t
                            ? t
                            : [];
                        })) && void 0 !== e
                  ? e
                  : [];
              return (
                en && en.favorite && !n.find(e => e.id === en.id) && n.push(en),
                null !==
                  (t = n
                    .map(e => ({ ...e, folder_id: void 0 }))
                    .sort((e, t) =>
                      'name' === u
                        ? e.name.localeCompare(t.name)
                        : new Date(t.inserted_at).valueOf() -
                          new Date(e.inserted_at).valueOf()
                    )) && void 0 !== t
                  ? t
                  : []
              );
            }, [null == ew ? void 0 : ew.pages, en, u]),
            eP =
              null !== (l = null == ej ? void 0 : ej.favorites) && void 0 !== l
                ? l
                : 0,
            eZ = (0, s.useMemo)(
              () => (0 === e_.length ? [eY] : eG({ contents: e_ })),
              [e_]
            ),
            eI = (0, s.useMemo)(() => eH(eZ), [eZ]),
            {
              data: eF,
              isLoading: eA,
              hasNextPage: e$,
              fetchNextPage: eJ,
              isFetchingNextPage: eX,
              isSuccess: e0,
            } = (0, eV.v)(
              { projectRef: x, visibility: 'project', sort: u },
              { enabled: j, keepPreviousData: !0 }
            ),
            e1 = (0, s.useMemo)(() => {
              var e, t;
              let n =
                null !==
                  (e =
                    null == eF
                      ? void 0
                      : eF.pages.flatMap(e => {
                          var t;
                          return null !== (t = e.contents) && void 0 !== t
                            ? t
                            : [];
                        })) && void 0 !== e
                  ? e
                  : [];
              return (
                en &&
                  'project' === en.visibility &&
                  !n.find(e => e.id === en.id) &&
                  n.push(en),
                null !==
                  (t = n.sort((e, t) =>
                    'name' === u
                      ? e.name.localeCompare(t.name)
                      : new Date(t.inserted_at).valueOf() -
                        new Date(e.inserted_at).valueOf()
                  )) && void 0 !== t
                  ? t
                  : []
              );
            }, [null == eF ? void 0 : eF.pages, en, u]),
            e4 =
              null !== (o = null == ej ? void 0 : ej.shared) && void 0 !== o
                ? o
                : 0,
            e2 = (0, s.useMemo)(
              () => (0 === e1.length ? [eY] : eG({ contents: e1 })),
              [e1]
            ),
            e5 = (0, s.useMemo)(() => eH(e2), [e2]),
            { mutate: e3, isLoading: e6 } = (0, eh.R)({
              onError: e => {
                d.Am.error('Failed to update query: '.concat(e.message));
              },
            }),
            { mutate: e9, isLoading: e7 } = (0, eO.z)({
              onError: (e, t) => {
                e.message.includes('Contents not found')
                  ? ta(t.ids)
                  : d.Am.error('Failed to delete query: '.concat(e.message));
              },
            }),
            { mutate: e8, isLoading: te } = ez({
              onSuccess: (e, t) => {
                d.Am.success('Successfully deleted folder');
                let { ids: n } = t;
                (y.removeFolder(n[0]), et(void 0));
              },
            }),
            ta = e => {
              (q(!1), Z([]));
              let t = Object.keys(y.snippets).filter(t => !e.includes(t));
              (0 === t.length
                ? p.push('/project/'.concat(x, '/sql/new'))
                : e.includes(h) &&
                  p.push('/project/'.concat(x, '/sql/').concat(t[0])),
                e.length > 0 && e.forEach(e => y.removeSnippet(e)));
            },
            ts = async e => {
              var t;
              let n = 'share' === e ? I : R;
              if (!x) return console.error('Project ref is required');
              if (!n) return console.error('Snippet ID is required');
              let a = y.snippets[n.id],
                s =
                  null == a
                    ? void 0
                    : null === (t = a.snippet) || void 0 === t
                      ? void 0
                      : t.content;
              if (void 0 === s) {
                let { content: e } = await (0, ex.A)({
                  projectRef: x,
                  id: n.id,
                });
                s = e;
              }
              if (void 0 === s)
                return d.Am.error(
                  'Unable to update snippet visibility: Content is missing'
                );
              let r = 'share' === e ? 'project' : 'user';
              e3(
                {
                  projectRef: x,
                  payload: { ...n, visibility: r, folder_id: null, content: s },
                },
                {
                  onSuccess: () => {
                    (F(void 0),
                      O(void 0),
                      g({ ...v, shared: !0 }),
                      y.updateSnippet({
                        id: n.id,
                        snippet: { visibility: r, folder_id: null },
                        skipSave: !0,
                      }),
                      d.Am.success(
                        'share' === e
                          ? 'Snippet is now shared to the project'
                          : 'Snippet is now unshared from the project'
                      ));
                  },
                }
              );
            },
            tr = async e => {
              if (!m) return console.error('Profile is required');
              if (!f) return console.error('Project is required');
              if (!x) return console.error('Project ref is required');
              if (!h) return console.error('Snippet ID is required');
              let t = '';
              if (e.content && e.content.sql) t = e.content.sql;
              else {
                let { content: n } = await (0, ex.A)({
                  projectRef: x,
                  id: e.id,
                });
                'sql' in n && (t = n.sql);
              }
              let n = (0, eo.wI)({
                id: (0, eB.Z)(),
                name: ''.concat(e.name, ' (Duplicate)'),
                sql: t,
                owner_id: null == m ? void 0 : m.id,
                project_id: null == f ? void 0 : f.id,
              });
              (y.addSnippet({ projectRef: x, snippet: n }),
                y.addNeedsSaving(n.id),
                p.push('/project/'.concat(x, '/sql/').concat(n.id)));
            },
            ti = async () => {
              if (!x) return console.error('Project ref is required');
              if (void 0 === ee) return console.error('No folder is selected');
              let e = ev.filter(e => e.folder_id === ee.id);
              if (e.length > 0) {
                let t = e.map(e => e.id);
                e9(
                  { projectRef: x, ids: t },
                  {
                    onSuccess: () => {
                      (t.forEach(e => y.removeSnippet(e)),
                        ta(t),
                        e8({
                          projectRef: x,
                          ids: [null == ee ? void 0 : ee.id],
                        }));
                    },
                  }
                );
              } else e8({ projectRef: x, ids: [null == ee ? void 0 : ee.id] });
            },
            tl = e => {
              let t = ev.map(e => e.id),
                n = t.indexOf(h),
                a = t.indexOf(e),
                s = Math.min(n, a),
                r = Math.max(n, a),
                i = [],
                l = ev[s].folder_id === ev[r].folder_id;
              for (let e = s; e <= r; e++)
                l && ev[e].folder_id === ev[s].folder_id && i.push(ev[e]);
              Z(i);
            };
          return (
            (0, s.useEffect)(() => {
              void 0 !== en &&
                es &&
                ('project' === en.visibility
                  ? g({ ...v, shared: !0 })
                  : 'user' === en.visibility && g({ ...v, private: !0 }),
                en.folder_id &&
                  !P.includes(en.folder_id) &&
                  D([...P, en.folder_id]));
            }, [en, u, es]),
            (0, s.useEffect)(() => {
              Z([]);
            }, [h]),
            (0, s.useEffect)(() => {
              x &&
                ea &&
                ea.pages.forEach(e => {
                  var t, n;
                  (null === (t = e.contents) ||
                    void 0 === t ||
                    t.forEach(e => {
                      y.addSnippet({ projectRef: x, snippet: e });
                    }),
                    null === (n = e.folders) ||
                      void 0 === n ||
                      n.forEach(e =>
                        y.addFolder({ projectRef: x, folder: e })
                      ));
                });
            }, [x, null == ea ? void 0 : ea.pages]),
            (0, s.useEffect)(() => {
              void 0 !== x &&
                eE &&
                ew.pages.forEach(e => {
                  var t;
                  null === (t = e.contents) ||
                    void 0 === t ||
                    t.forEach(e => {
                      y.addSnippet({ projectRef: x, snippet: e });
                    });
                });
            }, [x, null == ea ? void 0 : ea.pages]),
            (0, s.useEffect)(() => {
              void 0 !== x &&
                e0 &&
                eF.pages.forEach(e => {
                  var t;
                  null === (t = e.contents) ||
                    void 0 === t ||
                    t.forEach(e => {
                      y.addSnippet({ projectRef: x, snippet: e });
                    });
                });
            }, [x, null == ea ? void 0 : ea.pages]),
            (0, a.jsxs)(a.Fragment, {
              children: [
                (0, a.jsx)(W.qs, {
                  'data-sentry-element': 'InnerSideMenuSeparator',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                }),
                (0, a.jsxs)(W.GZ, {
                  open: j,
                  onOpenChange: e => {
                    g({ ...(null != v ? v : tn), shared: e });
                  },
                  className: 'px-0',
                  'data-sentry-element': 'InnerSideMenuCollapsible',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                  children: [
                    (0, a.jsx)(W.Qn, {
                      title: 'Shared '.concat(
                        e4 > 0 ? ' ('.concat(e4, ')') : ''
                      ),
                      'data-sentry-element': 'InnerSideMenuCollapsibleTrigger',
                      'data-sentry-source-file': 'SQLEditorNav.tsx',
                    }),
                    (0, a.jsx)(W.rt, {
                      className: 'group-data-[state=open]:pt-2',
                      'data-sentry-element': 'InnerSideMenuCollapsibleContent',
                      'data-sentry-source-file': 'SQLEditorNav.tsx',
                      children: eA
                        ? (0, a.jsx)(eW, {})
                        : 0 === e4
                          ? (0, a.jsx)(W.Cf, {
                              className: 'mx-2 px-3',
                              title: 'No shared queries',
                              description:
                                'Share queries with your team by right-clicking on the query',
                            })
                          : (0, a.jsx)(eU.LQ, {
                              data: e2,
                              'aria-label': 'project-level-snippets',
                              nodeRenderer: e => {
                                let { element: t, ...n } = e;
                                return (0, a.jsx)(tt, {
                                  ...n,
                                  element: t,
                                  onSelectDelete: () => {
                                    (q(!0), Z([t.metadata]));
                                  },
                                  onSelectRename: () => {
                                    (E(!0), V(t.metadata));
                                  },
                                  onSelectDownload: () => {
                                    X(t.metadata);
                                  },
                                  onSelectDuplicate: () => {
                                    tr(t.metadata);
                                  },
                                  onSelectUnshare: () => {
                                    O(t.metadata);
                                  },
                                  isLastItem: e5.has(t.id),
                                  hasNextPage: e$,
                                  fetchNextPage: eJ,
                                  isFetchingNextPage: eX,
                                });
                              },
                            }),
                    }),
                  ],
                }),
                (0, a.jsx)(W.qs, {
                  'data-sentry-element': 'InnerSideMenuSeparator',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                }),
                (0, a.jsxs)(W.GZ, {
                  className: 'px-0',
                  open: S,
                  onOpenChange: e => {
                    g({ ...(null != v ? v : tn), favorite: e });
                  },
                  'data-sentry-element': 'InnerSideMenuCollapsible',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                  children: [
                    (0, a.jsx)(W.Qn, {
                      title: 'Favorites '.concat(
                        eP > 0 ? ' ('.concat(eP, ')') : ''
                      ),
                      'data-sentry-element': 'InnerSideMenuCollapsibleTrigger',
                      'data-sentry-source-file': 'SQLEditorNav.tsx',
                    }),
                    (0, a.jsx)(W.rt, {
                      className: 'group-data-[state=open]:pt-2',
                      'data-sentry-element': 'InnerSideMenuCollapsibleContent',
                      'data-sentry-source-file': 'SQLEditorNav.tsx',
                      children: eL
                        ? (0, a.jsx)(eW, {})
                        : 0 === eP
                          ? (0, a.jsx)(W.Cf, {
                              title: 'No favorite queries',
                              className: 'mx-2 px-3',
                              description: (0, a.jsxs)(a.Fragment, {
                                children: [
                                  'Save a query to favorites for easy accessibility by clicking the',
                                  ' ',
                                  (0, a.jsx)(Y.Z, {
                                    size: 12,
                                    className:
                                      'inline-block relative align-center -top-[1px]',
                                  }),
                                  ' ',
                                  'icon.',
                                ],
                              }),
                            })
                          : (0, a.jsx)(eU.LQ, {
                              data: eZ,
                              'aria-label': 'favorite-snippets',
                              nodeRenderer: e => {
                                let { element: t, ...n } = e;
                                return (0, a.jsx)(tt, {
                                  ...n,
                                  element: t,
                                  onSelectDelete: () => {
                                    (q(!0), Z([t.metadata]));
                                  },
                                  onSelectRename: () => {
                                    (E(!0), V(t.metadata));
                                  },
                                  onSelectDownload: () => {
                                    X(t.metadata);
                                  },
                                  onSelectDuplicate: () => {
                                    tr(t.metadata);
                                  },
                                  onSelectShare: () => F(t.metadata),
                                  onSelectUnshare: () => {
                                    O(t.metadata);
                                  },
                                  isLastItem: eI.has(t.id),
                                  hasNextPage: eM,
                                  fetchNextPage: eq,
                                  isFetchingNextPage: eQ,
                                });
                              },
                            }),
                    }),
                  ],
                }),
                (0, a.jsx)(W.qs, {
                  'data-sentry-element': 'InnerSideMenuSeparator',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                }),
                (0, a.jsxs)(W.GZ, {
                  open: N,
                  onOpenChange: e => {
                    g({ ...(null != v ? v : tn), private: e });
                  },
                  className: 'px-0',
                  'data-sentry-element': 'InnerSideMenuCollapsible',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                  children: [
                    (0, a.jsx)(W.Qn, {
                      title: 'PRIVATE\n            '.concat(
                        eS > 0 ? ' ('.concat(eS, ')') : ''
                      ),
                      'data-sentry-element': 'InnerSideMenuCollapsibleTrigger',
                      'data-sentry-source-file': 'SQLEditorNav.tsx',
                    }),
                    (0, a.jsx)(W.rt, {
                      className: 'group-data-[state=open]:pt-2',
                      'data-sentry-element': 'InnerSideMenuCollapsibleContent',
                      'data-sentry-source-file': 'SQLEditorNav.tsx',
                      children: er
                        ? (0, a.jsx)(eW, {})
                        : 0 === eg.length && 0 === eS
                          ? (0, a.jsx)(W.Cf, {
                              className: 'mx-3 px-4',
                              title: 'No queries created yet',
                              description:
                                'Queries will be automatically saved once you start writing in the editor',
                            })
                          : (0, a.jsx)(eU.LQ, {
                              multiSelect: !0,
                              togglableSelect: !0,
                              clickAction: 'EXCLUSIVE_SELECT',
                              data: eb,
                              selectedIds: k.map(e => e.id),
                              'aria-label': 'private-snippets',
                              onExpand: e => {
                                let t = e.element.id.toString();
                                (e.isExpanded && !P.includes(t) && D([...P, t]),
                                  !e.isExpanded &&
                                    P.includes(t) &&
                                    D(P.filter(e => e !== t)));
                              },
                              expandedIds: P,
                              nodeRenderer: e => {
                                let { element: t, ...n } = e;
                                return (0, a.jsx)(tt, {
                                  ...n,
                                  element: t,
                                  isMultiSelected: k.length > 1,
                                  isLastItem: eN.has(t.id),
                                  status: n.isBranch
                                    ? y.folders[t.id].status
                                    : 'idle',
                                  onMultiSelect: tl,
                                  onSelectCreate: () => {
                                    if (m && f) {
                                      let e = (0, eo.wI)({
                                        id: (0, eB.Z)(),
                                        name: ek.$C,
                                        owner_id: null == m ? void 0 : m.id,
                                        project_id: null == f ? void 0 : f.id,
                                        folder_id: t.id,
                                        sql: '',
                                      });
                                      (y.addSnippet({
                                        projectRef: f.ref,
                                        snippet: e,
                                      }),
                                        p.push(
                                          '/project/'
                                            .concat(x, '/sql/')
                                            .concat(e.id)
                                        ));
                                    }
                                  },
                                  onSelectDelete: () => {
                                    n.isBranch
                                      ? et(t.metadata)
                                      : (q(!0),
                                        0 === k.length && Z([t.metadata]));
                                  },
                                  onSelectRename: () => {
                                    n.isBranch
                                      ? y.editFolder(t.id)
                                      : (E(!0), V(t.metadata));
                                  },
                                  onSelectMove: () => {
                                    (L(!0), 0 === k.length && Z([t.metadata]));
                                  },
                                  onSelectDownload: () => X(t.metadata),
                                  onSelectDuplicate: () => tr(t.metadata),
                                  onSelectShare: () => F(t.metadata),
                                  onEditSave: e => {
                                    0 === e.length && 'new-folder' === t.id
                                      ? y.removeFolder(t.id)
                                      : e.length > 0 &&
                                        y.saveFolder({ id: t.id, name: e });
                                  },
                                  hasNextPage: ec,
                                  fetchNextPage: eu,
                                  isFetchingNextPage: ep,
                                  sort: u,
                                  onFolderContentsChange: e => {
                                    let { isLoading: n, snippets: a } = e;
                                    ef(e => ({
                                      ...e,
                                      [t.id]: { snippets: a, isLoading: n },
                                    }));
                                  },
                                });
                              },
                            }),
                    }),
                  ],
                }),
                (0, a.jsx)(eK.Z, {
                  'data-sentry-element': 'Separator',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                }),
                (0, a.jsx)(eD, {
                  snippet: z,
                  visible: Q,
                  onCancel: () => E(!1),
                  onComplete: () => E(!1),
                  'data-sentry-element': 'RenameQueryModal',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                }),
                (0, a.jsx)(eC, {
                  snippets: k,
                  visible: C,
                  onClose: () => {
                    (L(!1), Z([]));
                  },
                  'data-sentry-element': 'MoveQueryModal',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                }),
                (0, a.jsx)(ed, {
                  id:
                    null !== (c = null == $ ? void 0 : $.id) && void 0 !== c
                      ? c
                      : '',
                  visible: void 0 !== $,
                  onCancel: () => X(void 0),
                  'data-sentry-element': 'DownloadSnippetModal',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                }),
                (0, a.jsx)(_.Z, {
                  size: 'medium',
                  loading: e6,
                  title: 'Confirm to share query: '.concat(
                    null == I ? void 0 : I.name
                  ),
                  confirmLabel: 'Share query',
                  confirmLabelLoading: 'Sharing query',
                  visible: void 0 !== I,
                  onCancel: () => F(void 0),
                  onConfirm: () => ts('share'),
                  alert: {
                    title:
                      'This SQL query will become public to all team members',
                    description:
                      'Anyone with access to the project can view it',
                  },
                  'data-sentry-element': 'ConfirmationModal',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                  children: (0, a.jsxs)('ul', {
                    className: 'text-sm text-foreground-light space-y-5',
                    children: [
                      (0, a.jsxs)('li', {
                        className: 'flex gap-3 items-center',
                        children: [
                          (0, a.jsx)(G.Z, {
                            size: 16,
                            'data-sentry-element': 'Eye',
                            'data-sentry-source-file': 'SQLEditorNav.tsx',
                          }),
                          (0, a.jsx)('span', {
                            children:
                              'Project members will have read-only access to this query.',
                          }),
                        ],
                      }),
                      (0, a.jsxs)('li', {
                        className: 'flex gap-3 items-center',
                        children: [
                          (0, a.jsx)(H.Z, {
                            size: 16,
                            'data-sentry-element': 'Unlock',
                            'data-sentry-source-file': 'SQLEditorNav.tsx',
                          }),
                          (0, a.jsx)('span', {
                            children:
                              'Anyone will be able to duplicate it to their personal snippets.',
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsx)(_.Z, {
                  size: 'medium',
                  title: 'Confirm to unshare query: '.concat(
                    null == R ? void 0 : R.name
                  ),
                  confirmLabel: 'Unshare query',
                  confirmLabelLoading: 'Unsharing query',
                  visible: void 0 !== R,
                  onCancel: () => O(void 0),
                  onConfirm: () => ts('unshare'),
                  alert: {
                    title:
                      'This SQL query will no longer be public to all team members',
                    description: 'Only you will have access to this query',
                  },
                  'data-sentry-element': 'ConfirmationModal',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                  children: (0, a.jsx)('ul', {
                    className: 'text-sm text-foreground-light space-y-5',
                    children: (0, a.jsxs)('li', {
                      className: 'flex gap-3',
                      children: [
                        (0, a.jsx)(J.Z, {
                          'data-sentry-element': 'EyeOffIcon',
                          'data-sentry-source-file': 'SQLEditorNav.tsx',
                        }),
                        (0, a.jsx)('span', {
                          children:
                            'Project members will no longer be able to view this query.',
                        }),
                      ],
                    }),
                  }),
                }),
                (0, a.jsx)(_.Z, {
                  size: 'small',
                  title: 'Confirm to delete '.concat(
                    1 === k.length
                      ? 'query'
                      : ''
                          .concat(k.length.toLocaleString(), ' quer')
                          .concat(k.length > 1 ? 'ies' : 'y')
                  ),
                  confirmLabel: 'Delete '
                    .concat(k.length.toLocaleString(), ' quer')
                    .concat(k.length > 1 ? 'ies' : 'y'),
                  confirmLabelLoading: 'Deleting query',
                  loading: e7,
                  visible: M,
                  variant: 'destructive',
                  onCancel: () => {
                    (q(!1), Z([]));
                  },
                  onConfirm: () => {
                    if (!x) return console.error('Project ref is required');
                    e9(
                      { projectRef: x, ids: k.map(e => e.id) },
                      {
                        onSuccess: e => {
                          (d.Am.success(
                            'Successfully deleted '
                              .concat(k.length.toLocaleString(), ' quer')
                              .concat(k.length > 1 ? 'ies' : 'y')
                          ),
                            ta(e));
                        },
                      }
                    );
                  },
                  alert:
                    (null === (n = k[0]) || void 0 === n
                      ? void 0
                      : n.visibility) === 'project'
                      ? {
                          title: 'This SQL snippet will be lost forever',
                          description:
                            'Deleting this query will remove it for all members of the project team.',
                        }
                      : void 0,
                  'data-sentry-element': 'ConfirmationModal',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                  children: (0, a.jsxs)('p', {
                    className: 'text-sm',
                    children: [
                      'This action cannot be undone.',
                      ' ',
                      1 === k.length
                        ? "Are you sure you want to delete '".concat(
                            null === (r = k[0]) || void 0 === r
                              ? void 0
                              : r.name,
                            "'?"
                          )
                        : 'Are you sure you want to delete the selected '
                            .concat(k.length, ' quer')
                            .concat(k.length > 1 ? 'ies' : 'y', '?'),
                    ],
                  }),
                }),
                (0, a.jsx)(_.Z, {
                  size: 'small',
                  title: 'Confirm to delete folder',
                  confirmLabel: 'Delete folder',
                  confirmLabelLoading: 'Deleting folder',
                  loading: te,
                  visible: void 0 !== ee,
                  variant: 'destructive',
                  onCancel: () => et(void 0),
                  onConfirm: ti,
                  alert: {
                    title: 'This action cannot be undone',
                    description:
                      'All SQL snippets within the folder will be permanently removed, and cannot be recovered.',
                  },
                  'data-sentry-element': 'ConfirmationModal',
                  'data-sentry-source-file': 'SQLEditorNav.tsx',
                  children: (0, a.jsxs)('p', {
                    className: 'text-sm',
                    children: [
                      "Are you sure you want to delete the folder '",
                      null == ee ? void 0 : ee.name,
                      "'?",
                    ],
                  }),
                }),
              ],
            })
          );
        };
      var ts = n(52675),
        tr = n(92844);
      async function ti(e, t) {
        let {
          projectRef: n,
          type: a,
          name: s,
          limit: r = 10,
          sort: i,
          cursor: l,
        } = e;
        if (void 0 === n) throw Error('projectRef is required for getContent');
        let { data: o, error: d } = await (0, eZ.U2)(
          '/platform/projects/{ref}/content',
          {
            params: {
              path: { ref: n },
              query: {
                type: a,
                name: s,
                sort_by: i,
                limit: r.toString(),
                cursor: l,
              },
            },
            signal: t,
          }
        );
        return (d && (0, eZ.S3)(d), { cursor: o.cursor, content: o.data });
      }
      let tl = function (e) {
        let { projectRef: t, type: n, name: a, limit: s, sort: r } = e,
          { enabled: i = !0, ...l } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, e6.N)(
          eI.$.infiniteList(t, { type: n, name: a, limit: s, sort: r }),
          e => {
            let { signal: i, pageParam: l } = e;
            return ti(
              { projectRef: t, type: n, name: a, limit: s, sort: r, cursor: l },
              i
            );
          },
          { enabled: i && void 0 !== t, getNextPageParam: e => e.cursor, ...l }
        );
      };
      var to = n(83965),
        td = n(89129);
      let tc = e => {
          var t;
          let { search: n, onSelectSnippet: r } = e,
            { ref: i } = (0, T.UO)(),
            {
              data: l,
              isLoading: o,
              hasNextPage: d,
              fetchNextPage: c,
              isFetchingNextPage: u,
            } = tl(
              {
                projectRef: i,
                type: 'sql',
                limit: eT.KJ,
                name: 0 === n.length ? void 0 : n,
              },
              { keepPreviousData: !0 }
            ),
            { data: p, isLoading: m } = eR(
              { projectRef: i, cumulative: !0, type: 'sql', name: n },
              { keepPreviousData: !0 }
            ),
            f =
              null !== (t = null == p ? void 0 : p.count) && void 0 !== t
                ? t
                : 0,
            x = (0, s.useMemo)(
              () => (null == l ? void 0 : l.pages.flatMap(e => e.content)),
              [null == l ? void 0 : l.pages]
            );
          return (0, a.jsxs)('div', {
            className: 'flex flex-col flex-grow',
            'data-sentry-component': 'SearchList',
            'data-sentry-source-file': 'SearchList.tsx',
            children: [
              o
                ? (0, a.jsx)('div', {
                    className: 'px-4 py-1 pb-2.5',
                    children: (0, a.jsx)(ts.Z, {
                      className: 'animate-spin',
                      size: 14,
                    }),
                  })
                : p
                  ? (0, a.jsxs)('p', {
                      className: 'px-4 pb-2 text-sm text-foreground-lighter',
                      children: [f, ' result', f > 1 ? 's' : '', ' found'],
                    })
                  : null,
              o
                ? (0, a.jsxs)('div', {
                    className: 'px-4 flex flex-col gap-y-1',
                    children: [
                      (0, a.jsx)(td.Z, { className: 'py-2.5' }),
                      (0, a.jsx)(td.Z, { className: 'py-2.5 w-5/6' }),
                      (0, a.jsx)(td.Z, { className: 'py-2.5 w-3/4' }),
                    ],
                  })
                : (0, a.jsx)(tr.Z, {
                    items: x,
                    ItemComponent: e =>
                      (0, a.jsx)(tu, { snippet: e.item, onSelectSnippet: r }),
                    itemProps: {},
                    getItemSize: () => 28,
                    hasNextPage: d,
                    isLoadingNextPage: u,
                    onLoadNextPage: () => c(),
                  }),
            ],
          });
        },
        tu = e => {
          let { snippet: t, onSelectSnippet: n } = e,
            { ref: s } = (0, T.UO)();
          return (0, a.jsxs)(to.zs, {
            openDelay: 500,
            closeDelay: 100,
            'data-sentry-element': 'HoverCard_Shadcn_',
            'data-sentry-component': 'SearchListItem',
            'data-sentry-source-file': 'SearchList.tsx',
            children: [
              (0, a.jsx)(to.Yi, {
                'data-sentry-element': 'HoverCardTrigger_Shadcn_',
                'data-sentry-source-file': 'SearchList.tsx',
                children: (0, a.jsxs)(ea(), {
                  className:
                    'h-full flex items-center gap-x-3 pl-4 hover:bg-control',
                  href: '/project/'.concat(s, '/sql/').concat(t.id),
                  onClick: () => n(),
                  'data-sentry-element': 'Link',
                  'data-sentry-source-file': 'SearchList.tsx',
                  children: [
                    (0, a.jsx)(eU.KK, {
                      size: 16,
                      strokeWidth: 1.5,
                      className:
                        'w-5 h-5 -ml-0.5 transition-colors fill-foreground-muted group-aria-selected:fill-foreground',
                      'data-sentry-element': 'SQL_ICON',
                      'data-sentry-source-file': 'SearchList.tsx',
                    }),
                    (0, a.jsx)('p', {
                      className: 'text-sm text-foreground-light truncate',
                      children: t.name,
                    }),
                  ],
                }),
              }),
              (0, a.jsx)(to.bZ, {
                side: 'right',
                className: 'p-0 w-[300px]',
                'data-sentry-element': 'HoverCardContent_Shadcn_',
                'data-sentry-source-file': 'SearchList.tsx',
                children: (0, a.jsx)(tp, {
                  id: t.id,
                  'data-sentry-element': 'SearchItemListHover',
                  'data-sentry-source-file': 'SearchList.tsx',
                }),
              }),
            ],
          });
        },
        tp = e => {
          var t, n;
          let { id: s } = e,
            { ref: r } = (0, T.UO)(),
            { data: i, isLoading: l } = (0, ex.N)({ projectRef: r, id: s }),
            o =
              null !==
                (n =
                  null == i
                    ? void 0
                    : null === (t = i.content) || void 0 === t
                      ? void 0
                      : t.sql) && void 0 !== n
                ? n
                : '',
            d = (o.match(RegExp('\n', 'g')) || []).length;
          return (0, a.jsx)('div', {
            'data-sentry-component': 'SearchItemListHover',
            'data-sentry-source-file': 'SearchList.tsx',
            children: l
              ? (0, a.jsx)('div', {
                  className: 'p-2',
                  children: (0, a.jsx)(td.Z, {}),
                })
              : 0 === o.length
                ? (0, a.jsx)('div', {
                    className: 'px-4 py-2',
                    children: (0, a.jsx)('p', {
                      className: 'text-xs text-foreground-lighter',
                      children: 'Snippet is empty',
                    }),
                  })
                : (0, a.jsx)(eN.x, {
                    className: (0, Q.cn)(d > 6 ? 'h-[140px]' : ''),
                    children: (0, a.jsx)(q.d, {
                      hideLineNumbers: !0,
                      language: 'sql',
                      value: o,
                      className: (0, Q.cn)(
                        'border-0 py-0 px-3 max-w-full prose dark:prose-dark text-xs',
                        '[&>code]:m-0 [&>code>span]:flex [&>code>span]:flex-wrap'
                      ),
                    }),
                  }),
          });
        },
        tm = e => {
          let { onViewOngoingQueries: t } = e,
            n = (0, A.useRouter)(),
            { profile: r } = (0, U.Un)(),
            i = (0, b.Vm)(),
            { ref: l } = (0, T.UO)(),
            o = (0, K.B0)(),
            [c, u] = (0, s.useState)(''),
            [p, m] = (0, s.useState)(!1),
            [f, x] = (0, B._)(
              w.dA.SQL_EDITOR_SORT(null != l ? l : ''),
              'inserted_at'
            ),
            h = (0, z.Nr)(c, 500),
            y = (0, V.Xo)(Z.KA.CREATE, 'user_content', {
              resource: { type: 'sql', owner_id: null == r ? void 0 : r.id },
              subject: { id: null == r ? void 0 : r.id },
            }),
            v = () => {
              if (!l) return console.error('Project ref is required');
              (u(''), m(!1), o.addNewFolder({ projectRef: l }));
            },
            g = async () => {
              if (!l) return console.error('Project ref is required');
              if (!i) return console.error('Project is required');
              if (!r) return console.error('Profile is required');
              if (!y)
                return (0, d.Am)(
                  'Your queries will not be saved as you do not have sufficient permissions'
                );
              try {
                (n.push('/project/'.concat(l, '/sql/new?skip=true')),
                  u(''),
                  m(!1));
              } catch (e) {
                d.Am.error('Failed to create new query: '.concat(e.message));
              }
            };
          return (
            (0, s.useEffect)(() => {
              m(h.length > 0);
            }, [h]),
            (0, a.jsxs)('div', {
              className: 'h-full flex flex-col justify-between',
              'data-sentry-component': 'SQLEditorMenu',
              'data-sentry-source-file': 'SQLEditorMenu.tsx',
              children: [
                (0, a.jsxs)('div', {
                  className: 'flex flex-col gap-y-4 flex-grow',
                  children: [
                    (0, a.jsxs)('div', {
                      className:
                        'mt-4 mx-4 flex items-center justify-between gap-x-2',
                      children: [
                        (0, a.jsx)(W.nM, {
                          className: 'w-full p-0 gap-0',
                          'data-sentry-element': 'InnerSideBarFilters',
                          'data-sentry-source-file': 'SQLEditorMenu.tsx',
                          children: (0, a.jsx)(W.nn, {
                            name: 'search-queries',
                            placeholder: 'Search queries...',
                            'aria-labelledby': 'Search queries',
                            value: c,
                            onChange: e => {
                              let t = e.target.value;
                              (u(t), 0 === t.length && m(!1));
                            },
                            onKeyDown: e => {
                              'Escape' === e.code && (u(''), m(!1));
                            },
                            'data-sentry-element':
                              'InnerSideBarFilterSearchInput',
                            'data-sentry-source-file': 'SQLEditorMenu.tsx',
                            children: p
                              ? (0, a.jsxs)(E.u, {
                                  children: [
                                    (0, a.jsx)(E.aJ, {
                                      className:
                                        'absolute right-1 top-[.4rem] md:top-[.3rem] transition-colors text-foreground-light hover:text-foreground',
                                      onClick: () => {
                                        (u(''), m(!1));
                                      },
                                      children: (0, a.jsx)(I.Z, { size: 18 }),
                                    }),
                                    (0, a.jsx)(E._v, {
                                      children: 'Clear search',
                                    }),
                                  ],
                                })
                              : (0, a.jsxs)(W.ZY, {
                                  value: f,
                                  onValueChange: e => x(e),
                                  children: [
                                    (0, a.jsx)(
                                      W.IR,
                                      {
                                        value: 'name',
                                        children: 'Alphabetical',
                                      },
                                      'name'
                                    ),
                                    (0, a.jsx)(
                                      W.IR,
                                      {
                                        value: 'inserted_at',
                                        children: 'Created At',
                                      },
                                      'inserted_at'
                                    ),
                                  ],
                                }),
                          }),
                        }),
                        (0, a.jsxs)($.h_, {
                          'data-sentry-element': 'DropdownMenu',
                          'data-sentry-source-file': 'SQLEditorMenu.tsx',
                          children: [
                            (0, a.jsx)($.$F, {
                              asChild: !0,
                              'data-sentry-element': 'DropdownMenuTrigger',
                              'data-sentry-source-file': 'SQLEditorMenu.tsx',
                              children: (0, a.jsx)(M.z, {
                                type: 'default',
                                icon: (0, a.jsx)(F.Z, {
                                  className: 'text-foreground',
                                }),
                                className: 'w-[26px]',
                                'data-sentry-element': 'Button',
                                'data-sentry-source-file': 'SQLEditorMenu.tsx',
                              }),
                            }),
                            (0, a.jsxs)($.AW, {
                              align: 'end',
                              side: 'bottom',
                              className: 'w-48',
                              'data-sentry-element': 'DropdownMenuContent',
                              'data-sentry-source-file': 'SQLEditorMenu.tsx',
                              children: [
                                (0, a.jsxs)($.Xi, {
                                  className: 'gap-x-2',
                                  onClick: () => g(),
                                  'data-sentry-element': 'DropdownMenuItem',
                                  'data-sentry-source-file':
                                    'SQLEditorMenu.tsx',
                                  children: [
                                    (0, a.jsx)(R.Z, {
                                      size: 14,
                                      'data-sentry-element': 'FilePlus',
                                      'data-sentry-source-file':
                                        'SQLEditorMenu.tsx',
                                    }),
                                    'Create a new snippet',
                                  ],
                                }),
                                (0, a.jsxs)($.Xi, {
                                  className: 'gap-x-2',
                                  onClick: () => v(),
                                  'data-sentry-element': 'DropdownMenuItem',
                                  'data-sentry-source-file':
                                    'SQLEditorMenu.tsx',
                                  children: [
                                    (0, a.jsx)(O.Z, {
                                      size: 14,
                                      'data-sentry-element': 'FolderPlus',
                                      'data-sentry-source-file':
                                        'SQLEditorMenu.tsx',
                                    }),
                                    'Create a new folder',
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    p
                      ? (0, a.jsx)(tc, {
                          search: h,
                          onSelectSnippet: () => {
                            (u(''), m(!1));
                          },
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsxs)('div', {
                              className: 'px-2',
                              children: [
                                (0, a.jsx)(W.DS, {
                                  title: 'Templates',
                                  isActive:
                                    n.asPath ===
                                    '/project/'.concat(l, '/sql/templates'),
                                  href: '/project/'.concat(l, '/sql/templates'),
                                  children: 'Templates',
                                }),
                                (0, a.jsx)(W.DS, {
                                  title: 'Quickstarts',
                                  isActive:
                                    n.asPath ===
                                    '/project/'.concat(l, '/sql/quickstarts'),
                                  href: '/project/'.concat(
                                    l,
                                    '/sql/quickstarts'
                                  ),
                                  children: 'Quickstarts',
                                }),
                              ],
                            }),
                            (0, a.jsx)(ta, { sort: f }),
                          ],
                        }),
                  ],
                }),
                (0, a.jsx)('div', {
                  className: 'p-4 border-t sticky bottom-0 bg-studio',
                  children: (0, a.jsx)(M.z, {
                    block: !0,
                    type: 'default',
                    onClick: t,
                    'data-sentry-element': 'Button',
                    'data-sentry-source-file': 'SQLEditorMenu.tsx',
                    children: 'View running queries',
                  }),
                }),
              ],
            })
          );
        };
      var tf = (0, D.Q)(e => {
        let { title: t, children: n } = e,
          { viewOngoingQueries: r } = (0, T.UO)(),
          [i, l] = (0, s.useState)(!1),
          o = (0, s.useMemo)(
            () =>
              (0, a.jsx)(
                tm,
                { onViewOngoingQueries: () => l(!0) },
                'sql-editor-menu'
              ),
            []
          );
        return (
          (0, s.useEffect)(() => {
            'true' === r && l(!0);
          }, [r]),
          (0, a.jsxs)(k.Z, {
            title: t || 'SQL',
            product: 'SQL Editor',
            productMenu: o,
            isBlocking: !1,
            resizableSidebar: !0,
            'data-sentry-element': 'ProjectLayout',
            'data-sentry-component': 'SQLEditorLayout',
            'data-sentry-source-file': 'SQLEditorLayout.tsx',
            children: [
              n,
              (0, a.jsx)(P, {
                visible: i,
                onClose: () => l(!1),
                'data-sentry-element': 'OngoingQueriesPanel',
                'data-sentry-source-file': 'SQLEditorLayout.tsx',
              }),
            ],
          })
        );
      });
    },
    19540: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return o;
        },
      });
      var a = n(97458),
        s = n(52983),
        r = n(68985),
        i = n(11499);
      function l(e, t) {
        if (!t.error) return (delete e[t.key], e);
        if (t) return { ...e, [t.key]: t.error };
        throw Error();
      }
      function o(e) {
        let { validate: t, ...n } = e,
          [o, d] = (0, s.useReducer)(l, null),
          c = (0, r.TA)({
            validateOnBlur: !0,
            ...n,
            validationSchema: n.validationSchema,
            initialValues: n.initialValues,
            onSubmit: n.onSubmit,
            validate:
              t ||
              function () {
                return o;
              },
          });
        return (0, a.jsx)('form', {
          id: n.id,
          name: n.name,
          onSubmit: c.handleSubmit,
          className: n.className,
          style: n.style,
          method: 'POST',
          'data-sentry-component': 'Form',
          'data-sentry-source-file': 'Form.tsx',
          children: (0, a.jsx)(i.o, {
            values: c.values,
            errors: c.errors,
            formContextOnChange: c.handleChange,
            handleBlur: c.handleBlur,
            touched: c.touched,
            fieldLevelValidation: function (e, t) {
              d({ key: e, error: t });
            },
            'data-sentry-element': 'FormContextProvider',
            'data-sentry-source-file': 'Form.tsx',
            children: n.children({
              errors: c.errors,
              touched: c.touched,
              isSubmitting: c.isSubmitting,
              isValidating: c.isValidating,
              submitCount: c.submitCount,
              initialValues: c.initialValues,
              values: c.values,
              handleReset: c.handleReset,
              resetForm: c.resetForm,
              setFieldValue: c.setFieldValue,
            }),
          }),
        });
      }
    },
    95526: function (e, t, n) {
      var a = n(97458),
        s = n(77317),
        r = n(52983),
        i = n(25843);
      let l = e => {
        var t, n, l;
        let {
            defaultActiveId: o,
            activeId: d,
            type: c = 'pills',
            size: u = 'tiny',
            block: p,
            onChange: m,
            onClick: f,
            scrollable: x,
            wrappable: h,
            addOnBefore: y,
            addOnAfter: v,
            listClassNames: g,
            baseClassNames: j,
            refs: S,
            children: b,
          } = e,
          N = r.Children.toArray(b),
          [w, C] = (0, r.useState)(
            null !== (l = null != d ? d : o) && void 0 !== l
              ? l
              : null == N
                ? void 0
                : null === (n = N[0]) || void 0 === n
                  ? void 0
                  : null === (t = n.props) || void 0 === t
                    ? void 0
                    : t.id
          );
        (0, r.useMemo)(() => {
          d && d !== w && C(d);
        }, [d]);
        let L = (0, i.Z)('tabs');
        function M(e) {
          (null == f || f(e), e !== w && (null == m || m(e), C(e)));
        }
        let q = [L[c].list];
        return (
          x && q.push(L.scrollable),
          h && q.push(L.wrappable),
          g && q.push(g),
          (0, a.jsxs)(s.fC, {
            value: w,
            className: [L.base, j].join(' '),
            ref: null == S ? void 0 : S.base,
            'data-sentry-element': 'unknown',
            'data-sentry-component': 'Tabs',
            'data-sentry-source-file': 'Tabs.tsx',
            children: [
              (0, a.jsxs)(s.aV, {
                className: q.join(' '),
                ref: null == S ? void 0 : S.list,
                'data-sentry-element': 'unknown',
                'data-sentry-source-file': 'Tabs.tsx',
                children: [
                  y,
                  N.map(e => {
                    let t = w === e.props.id,
                      n = [L[c].base, L.size[u]];
                    return (
                      t ? n.push(L[c].active) : n.push(L[c].inactive),
                      p && n.push(L.block),
                      (0, a.jsxs)(
                        s.xz,
                        {
                          onKeyDown: t => {
                            'Enter' === t.key &&
                              (t.preventDefault(), M(e.props.id));
                          },
                          onClick: () => M(e.props.id),
                          value: e.props.id,
                          className: n.join(' '),
                          children: [
                            e.props.icon,
                            (0, a.jsx)('span', { children: e.props.label }),
                            e.props.iconRight,
                          ],
                        },
                        ''.concat(e.props.id, '-tab-button')
                      )
                    );
                  }),
                  v,
                ],
              }),
              N,
            ],
          })
        );
      };
      ((l.Panel = e => {
        let { children: t, id: n, className: r } = e,
          l = (0, i.Z)('tabs');
        return (0, a.jsx)(s.VY, {
          value: n,
          className: [l.content, r].join(' '),
          'data-sentry-element': 'unknown',
          'data-sentry-component': 'Panel',
          'data-sentry-source-file': 'Tabs.tsx',
          children: t,
        });
      }),
        (t.Z = l));
    },
    54135: function (e, t, n) {
      n.d(t, {
        O: function () {
          return r;
        },
      });
      var a = n(97458),
        s = n(65092);
      function r(e) {
        let { className: t, ...n } = e;
        return (0, a.jsx)('div', {
          className: (0, s.cn)('animate-pulse rounded-md bg-muted', t),
          ...n,
          'data-sentry-component': 'Skeleton',
          'data-sentry-source-file': 'skeleton.tsx',
        });
      }
    },
  },
]);
