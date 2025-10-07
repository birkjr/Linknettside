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
      (e._sentryDebugIds[t] = '071cd455-ea1a-4116-bde4-3fd7e55fb432'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-071cd455-ea1a-4116-bde4-3fd7e55fb432'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9820],
    {
      19110: function (e, t, r) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/sql/quickstarts',
          function () {
            return r(24997);
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
            i = (0, n.useRouter)(),
            o = (0, s.useMemo)(
              () =>
                Object.fromEntries(
                  Object.entries(i.query).map(e => {
                    let [t, r] = e;
                    return l.has(t)
                      ? Array.isArray(r)
                        ? [t, r]
                        : [t, [r]]
                      : [t, r];
                  })
                ),
              [l, i.query]
            ),
            a = (0, s.useCallback)(
              t => {
                let r = 'function' == typeof t ? t(o) : t,
                  n = Object.fromEntries(
                    Object.entries({ ...o, ...r }).filter(e => {
                      let [, t] = e;
                      return !!t;
                    })
                  );
                (e ? i.replace : i.push)(
                  { pathname: i.pathname, query: n },
                  void 0,
                  { shallow: !0, scroll: !1 }
                );
              },
              [i, o, e]
            );
          return [o, a];
        }
      },
      19276: function (e, t, r) {
        'use strict';
        var n = r(97458),
          s = r(62234),
          l = r(52983);
        t.Z = e => {
          let { title: t, description: r, sql: i, onClick: o } = e,
            [a, c] = (0, l.useState)(!1);
          return (0, n.jsx)(s.Z, {
            title: t,
            loading: a,
            onClick: () => void (c(!0), o(i, t)),
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
          i = r(83145),
          o = r.n(i),
          a = r(52983),
          c = r(65092);
        t.Z = e => {
          let t,
            {
              title: r,
              description: i,
              children: d,
              footer: u,
              url: f = '',
              linkHref: m = '',
              imgUrl: p,
              imgAlt: h,
              icon: x,
              className: g,
              loading: y = !1,
              fixedHeight: j = !0,
              hideChevron: v = !1,
              titleClass: b = '',
              containerElement: w,
              ...N
            } = e,
            k = f || m || N.onClick,
            _ = {},
            C =
              w && a.isValidElement(w)
                ? e => (0, a.cloneElement)(w, { ...e })
                : void 0;
          N.onClick
            ? ((t = null != C ? C : 'button'), (_ = N))
            : m
              ? ((t = null != C ? C : o()), (_ = { href: m, ...N }))
              : f
                ? ((t = null != C ? C : 'a'), (_ = { href: f, ...N }))
                : ((t = null != C ? C : 'div'), (_ = N));
          let q = [
            'group relative text-left',
            'bg-surface-100',
            'border border-surface',
            'rounded-md p-5 flex flex-row',
            'transition ease-in-out duration-150',
          ];
          (k &&
            (q = [
              ...q,
              'cursor-pointer',
              'hover:bg-surface-200',
              'hover:border-control',
            ]),
            j && (q = [...q, 'min-h-32 md:min-h-44']));
          let E = e => {
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
                  (0, n.jsx)(E, {
                    children: (0, n.jsx)('img', {
                      className: ' transition-all group-hover:scale-110 ',
                      src: ''.concat(p),
                      alt: ''.concat(h),
                      width: '26',
                    }),
                  }),
                x && (0, n.jsx)(E, { children: x }),
                (0, n.jsxs)('div', {
                  className: 'flex h-full w-full flex-col space-y-2',
                  children: [
                    'string' == typeof r
                      ? (0, n.jsx)('h5', {
                          className: 'text-foreground pr-5 '.concat(b),
                          children: r,
                        })
                      : r,
                    (d || i) &&
                      (0, n.jsxs)('div', {
                        className: 'flex w-full flex-1 flex-col',
                        children: [
                          (0, n.jsx)('p', {
                            className: 'text-sm text-foreground-light',
                            children: i,
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
                k &&
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
            ..._,
            className: (0, c.cn)(q, g),
            'data-sentry-element': 'Container',
            'data-sentry-component': 'CardButton',
            'data-sentry-source-file': 'CardButton.tsx',
            children: S,
          });
        };
      },
      24997: function (e, t, r) {
        'use strict';
        (r.r(t),
          r.d(t, {
            default: function () {
              return k;
            },
          }));
        var n = r(97458),
          s = r(198),
          l = r(50663),
          i = r.n(l),
          o = r(32691),
          a = r(34549),
          c = r(12436),
          d = r(30457),
          u = r(69072),
          f = r(82288),
          m = r(90817),
          p = r(62432),
          h = r(45536),
          x = r(81514),
          g = r(49825),
          y = r(76689),
          j = r(19276),
          v = r(75541),
          b = () => {
            let e = (0, o.useRouter)(),
              { ref: t } = (0, c.UO)(),
              r = (0, v.l)(),
              { profile: l } = (0, x.Un)(),
              b = (0, p.Vm)(),
              [, w] = i()(u.o, { type: 'template' }),
              N = (0, g.B0)(),
              k = (0, m.Xo)(s.KA.CREATE, 'user_content', {
                resource: { type: 'sql', owner_id: null == l ? void 0 : l.id },
                subject: { id: null == l ? void 0 : l.id },
              }),
              { mutate: _ } = (0, f.a)(),
              C = async (r, n) => {
                if (!t) return console.error('Project ref is required');
                if (!b) return console.error('Project is required');
                if (!l) return console.error('Profile is required');
                if (!k)
                  return (0, a.Am)(
                    'Your queries will not be saved as you do not have sufficient permissions'
                  );
                try {
                  let s = (0, y.wI)({
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
              'data-sentry-component': 'SQLQuickstarts',
              'data-sentry-source-file': 'SQLQuickstarts.tsx',
              children: (0, n.jsxs)('div', {
                className: 'mb-8',
                children: [
                  (0, n.jsxs)('div', {
                    className: 'mb-4',
                    children: [
                      (0, n.jsx)('h1', {
                        className: 'text-foreground mb-3 text-xl',
                        children: 'Quickstarts',
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
                      'grid gap-4 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3',
                    children: w.map(e =>
                      (0, n.jsx)(
                        j.Z,
                        {
                          title: e.title,
                          description: e.description,
                          sql: e.sql,
                          onClick: (e, n) => {
                            var s;
                            (C(e, n),
                              _({
                                action: d.b.SQL_EDITOR_QUICKSTART_CLICKED,
                                properties: { quickstartName: n },
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
            'data-sentry-element': 'SQLQuickstarts',
            'data-sentry-component': 'SqlEditorWelcome',
            'data-sentry-source-file': 'quickstarts.tsx',
          });
        N.getLayout = e =>
          (0, n.jsx)(w.Z, { title: 'Quickstarts', children: e });
        var k = N;
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
          return e((e.s = 19110));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
