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
      (e._sentryDebugIds[t] = '79d6cda8-0f55-4da7-af22-720b39b3320e'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-79d6cda8-0f55-4da7-af22-720b39b3320e'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5969],
    {
      43745: function (e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/sql/templates',
          function () {
            return r(16261);
          },
        ]);
      },
      53114: function (e, t, r) {
        'use strict';
        r.d(t, {
          x: function () {
            return l;
          },
        });
        var n = r(32691),
          s = r(52983);
        function l() {
          let { replace: e = !0, arrayKeys: t = [] } =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {},
            r = JSON.stringify(t),
            l = (0, s.useMemo)(() => new Set(t), [r]),
            o = (0, n.useRouter)(),
            i = (0, s.useMemo)(
              () =>
                Object.fromEntries(
                  Object.entries(o.query).map(e => {
                    let [t, r] = e;
                    return l.has(t)
                      ? Array.isArray(r)
                        ? [t, r]
                        : [t, [r]]
                      : [t, r];
                  })
                ),
              [l, o.query]
            ),
            a = (0, s.useCallback)(
              t => {
                let r = 'function' == typeof t ? t(i) : t,
                  n = Object.fromEntries(
                    Object.entries({ ...i, ...r }).filter(e => {
                      let [, t] = e;
                      return !!t;
                    })
                  );
                (e ? o.replace : o.push)(
                  { pathname: o.pathname, query: n },
                  void 0,
                  { shallow: !0, scroll: !1 }
                );
              },
              [o, i, e]
            );
          return [i, a];
        }
      },
      19276: function (e, t, r) {
        'use strict';
        var n = r(97458),
          s = r(62234),
          l = r(52983);
        t.Z = e => {
          let { title: t, description: r, sql: o, onClick: i } = e,
            [a, c] = (0, l.useState)(!1);
          return (0, n.jsx)(s.Z, {
            title: t,
            loading: a,
            onClick: () => void (c(!0), i(o, t)),
            description: r,
            className: 'xl:h-48 p-6',
            'data-sentry-element': 'CardButton',
            'data-sentry-component': 'SQLCard',
            'data-sentry-source-file': 'SQLCard.tsx',
          });
        };
      },
      62234: function (e, t, r) {
        'use strict';
        var n = r(97458),
          s = r(5295),
          l = r(91587),
          o = r(83145),
          i = r.n(o),
          a = r(52983),
          c = r(65092);
        t.Z = e => {
          let t,
            {
              title: r,
              description: o,
              children: d,
              footer: u,
              url: f = '',
              linkHref: m = '',
              imgUrl: p,
              imgAlt: x,
              icon: h,
              className: g,
              loading: y = !1,
              fixedHeight: j = !0,
              hideChevron: v = !1,
              titleClass: b = '',
              containerElement: w,
              ...N
            } = e,
            _ = f || m || N.onClick,
            C = {},
            k =
              w && a.isValidElement(w)
                ? e => (0, a.cloneElement)(w, { ...e })
                : void 0;
          N.onClick
            ? ((t = null != k ? k : 'button'), (C = N))
            : m
              ? ((t = null != k ? k : i()), (C = { href: m, ...N }))
              : f
                ? ((t = null != k ? k : 'a'), (C = { href: f, ...N }))
                : ((t = null != k ? k : 'div'), (C = N));
          let E = [
            'group relative text-left',
            'bg-surface-100',
            'border border-surface',
            'rounded-md p-5 flex flex-row',
            'transition ease-in-out duration-150',
          ];
          (_ &&
            (E = [
              ...E,
              'cursor-pointer',
              'hover:bg-surface-200',
              'hover:border-control',
            ]),
            j && (E = [...E, 'min-h-32 md:min-h-44']));
          let q = e => {
              let { children: t } = e;
              return (0, n.jsx)('div', {
                className: 'mr-4 flex flex-col',
                'data-sentry-component': 'ImageContainer',
                'data-sentry-source-file': 'CardButton.tsx',
                children: t,
              });
            },
            S = (0, n.jsxs)(n.Fragment, {
              children: [
                p &&
                  (0, n.jsx)(q, {
                    children: (0, n.jsx)('img', {
                      className: ' transition-all group-hover:scale-110 ',
                      src: ''.concat(p),
                      alt: ''.concat(x),
                      width: '26',
                    }),
                  }),
                h && (0, n.jsx)(q, { children: h }),
                (0, n.jsxs)('div', {
                  className: 'flex h-full w-full flex-col space-y-2',
                  children: [
                    'string' == typeof r
                      ? (0, n.jsx)('h5', {
                          className: 'text-foreground pr-5 '.concat(b),
                          children: r,
                        })
                      : r,
                    (d || o) &&
                      (0, n.jsxs)('div', {
                        className: 'flex w-full flex-1 flex-col',
                        children: [
                          (0, n.jsx)('p', {
                            className: 'text-sm text-foreground-light',
                            children: o,
                          }),
                          (0, n.jsx)('div', {
                            className: 'w-full',
                            children: d && d,
                          }),
                        ],
                      }),
                    u &&
                      (0, n.jsx)('div', {
                        className: 'w-full !mt-auto',
                        children: u,
                      }),
                  ],
                }),
                _ &&
                  (0, n.jsx)('div', {
                    className:
                      ' absolute right-4 top-4 text-foreground-lighter transition-all duration-200 group-hover:right-3 group-hover:text-foreground ',
                    children: y
                      ? (0, n.jsx)(s.Z, { className: 'animate-spin' })
                      : v
                        ? (0, n.jsx)(n.Fragment, {})
                        : (0, n.jsx)(l.Z, {}),
                  }),
              ],
            });
          return (0, n.jsx)(t, {
            ...C,
            className: (0, c.cn)(E, g),
            'data-sentry-element': 'Container',
            'data-sentry-component': 'CardButton',
            'data-sentry-source-file': 'CardButton.tsx',
            children: S,
          });
        };
      },
      16261: function (e, t, r) {
        'use strict';
        (r.r(t),
          r.d(t, {
            default: function () {
              return _;
            },
          }));
        var n = r(97458),
          s = r(198),
          l = r(50663),
          o = r.n(l),
          i = r(32691),
          a = r(34549),
          c = r(12436),
          d = r(30457),
          u = r(69072),
          f = r(88971),
          m = r(82288),
          p = r(90817),
          x = r(75541),
          h = r(45536),
          g = r(81514),
          y = r(49825),
          j = r(76689),
          v = r(19276),
          b = () => {
            let e = (0, i.useRouter)(),
              { ref: t } = (0, c.UO)(),
              r = (0, x.l)(),
              { profile: l } = (0, g.Un)(),
              { project: b } = (0, f.d2)(),
              [w] = o()(u.o, { type: 'template' }),
              N = (0, y.B0)(),
              _ = (0, p.Xo)(s.KA.CREATE, 'user_content', {
                resource: { type: 'sql', owner_id: null == l ? void 0 : l.id },
                subject: { id: null == l ? void 0 : l.id },
              }),
              { mutate: C } = (0, m.a)(),
              k = async (r, n) => {
                if (!t) return console.error('Project ref is required');
                if (!b) return console.error('Project is required');
                if (!l) return console.error('Profile is required');
                if (!_)
                  return (0, a.Am)(
                    'Your queries will not be saved as you do not have sufficient permissions'
                  );
                try {
                  let s = (0, j.wI)({
                    id: (0, h.k$)(),
                    name: n,
                    sql: r,
                    owner_id: null == l ? void 0 : l.id,
                    project_id: null == b ? void 0 : b.id,
                  });
                  (N.addSnippet({ projectRef: t, snippet: s }),
                    N.addNeedsSaving(s.id),
                    e.push('/project/'.concat(t, '/sql/').concat(s.id)));
                } catch (e) {
                  a.Am.error('Failed to create new query: '.concat(e.message));
                }
              };
            return (0, n.jsx)('div', {
              className: 'block h-full space-y-8 overflow-y-auto p-4 md:p-6',
              'data-sentry-component': 'SQLTemplates',
              'data-sentry-source-file': 'SQLTemplates.tsx',
              children: (0, n.jsxs)('div', {
                children: [
                  (0, n.jsxs)('div', {
                    className: 'mb-4',
                    children: [
                      (0, n.jsx)('h1', {
                        className: 'text-foreground mb-3 text-xl',
                        children: 'Scripts',
                      }),
                      (0, n.jsx)('p', {
                        className: 'text-foreground-light text-sm',
                        children: 'Quick scripts to run on your database.',
                      }),
                      (0, n.jsxs)('p', {
                        className: 'text-foreground-light text-sm',
                        children: [
                          'Click on any script to fill the query box, modify the script, then click',
                          (0, n.jsx)('span', {
                            className: 'text-code',
                            children: 'Run',
                          }),
                          '.',
                        ],
                      }),
                    ],
                  }),
                  (0, n.jsx)('div', {
                    className:
                      'grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 ',
                    children: w.map(e =>
                      (0, n.jsx)(
                        v.Z,
                        {
                          title: e.title,
                          description: e.description,
                          sql: e.sql,
                          onClick: (e, n) => {
                            var s;
                            (k(e, n),
                              C({
                                action: d.b.SQL_EDITOR_TEMPLATE_CLICKED,
                                properties: { templateName: n },
                                groups: {
                                  project: null != t ? t : 'Unknown',
                                  organization:
                                    null !==
                                      (s = null == r ? void 0 : r.slug) &&
                                    void 0 !== s
                                      ? s
                                      : 'Unknown',
                                },
                              }));
                          },
                        },
                        e.title
                      )
                    ),
                  }),
                ],
              }),
            });
          },
          w = r(92405);
        let N = () =>
          (0, n.jsx)(b, {
            'data-sentry-element': 'SQLTemplates',
            'data-sentry-component': 'SqlEditorWelcome',
            'data-sentry-source-file': 'templates.tsx',
          });
        N.getLayout = e => (0, n.jsx)(w.Z, { title: 'SQL', children: e });
        var _ = N;
      },
    },
    function (e) {
      (e.O(
        0,
        [
          6665, 7623, 588, 783, 1018, 1706, 1864, 8703, 2397, 3954, 9621, 9911,
          659, 7612, 4637, 9344, 7726, 6739, 3302, 3898, 8985, 3382, 9855, 793,
          3594, 3861, 6120, 7094, 4334, 2405, 9774, 2888, 179,
        ],
        function () {
          return e((e.s = 43745));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
