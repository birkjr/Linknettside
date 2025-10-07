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
      (e._sentryDebugIds[t] = '874d1e7d-fffd-4003-8370-a79a95af325f'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-874d1e7d-fffd-4003-8370-a79a95af325f'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8847],
    {
      20943: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/auth/templates',
          function () {
            return n(31443);
          },
        ]);
      },
      7539: function (e, t, n) {
        'use strict';
        n.d(t, {
          Z: function () {
            return j;
          },
        });
        var s = n(97458),
          a = n(12436),
          r = n(32691),
          i = n(99163),
          o = n(67628),
          c = n(72909),
          u = n(58326),
          l = n(83145),
          d = n.n(l),
          m = n(10947),
          f = n(90839),
          h = n(74334),
          p = n(37756);
        let x = e => [
            {
              title: 'Manage',
              items: [
                {
                  name: 'Users',
                  key: 'users',
                  url: '/project/'.concat(e, '/auth/users'),
                  items: [],
                },
              ],
            },
            {
              title: 'Configuration',
              items: [
                {
                  name: 'Policies',
                  key: 'policies',
                  url: '/project/'.concat(e, '/auth/policies'),
                  items: [],
                },
                ...(p.Qy
                  ? [
                      {
                        name: 'Providers',
                        key: 'providers',
                        url: '/project/'.concat(e, '/auth/providers'),
                        items: [],
                      },
                      {
                        name: 'Rate Limits',
                        key: 'rate-limits',
                        url: '/project/'.concat(e, '/auth/rate-limits'),
                        items: [],
                      },
                      {
                        name: 'Email Templates',
                        key: 'templates',
                        url: '/project/'.concat(e, '/auth/templates'),
                        items: [],
                      },
                      {
                        name: 'URL Configuration',
                        key: 'url-configuration',
                        url: '/project/'.concat(e, '/auth/url-configuration'),
                        items: [],
                      },
                      {
                        name: 'Hooks',
                        key: 'hooks',
                        url: '/project/'.concat(e, '/auth/hooks'),
                        items: [],
                        label: 'BETA',
                      },
                    ]
                  : []),
              ],
            },
          ],
          y = () => {
            let { ref: e = 'default' } = (0, a.UO)(),
              t = (0, i.ar)();
            (0, c.kM)({ projectRef: e });
            let n = (0, r.useRouter)().pathname.split('/')[4];
            return (0, s.jsxs)(s.Fragment, {
              children: [
                (0, s.jsx)(o.Q, {
                  page: n,
                  menu: x(e),
                  'data-sentry-element': 'ProductMenu',
                  'data-sentry-source-file': 'AuthLayout.tsx',
                }),
                t &&
                  (0, s.jsx)('div', {
                    className: 'px-3',
                    children: (0, s.jsxs)(m.bZ, {
                      children: [
                        (0, s.jsx)(m.Cd, {
                          className: 'text-sm',
                          children: 'Column Privileges has been shifted',
                        }),
                        (0, s.jsxs)(m.X, {
                          className: 'text-xs',
                          children: [
                            (0, s.jsx)('p', {
                              className: 'mb-2',
                              children:
                                'It can now be found in the menu under the database section.',
                            }),
                            (0, s.jsx)(f.z, {
                              asChild: !0,
                              type: 'default',
                              size: 'tiny',
                              children: (0, s.jsx)(d(), {
                                href: '/project/'.concat(
                                  e,
                                  '/database/column-privileges'
                                ),
                                children: 'Head over to Database',
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
              ],
            });
          };
        var j = (0, u.Q)(e => {
          let { title: t, children: n } = e;
          return (0, s.jsx)(h.Z, {
            title: t || 'Authentication',
            product: 'Authentication',
            productMenu: (0, s.jsx)(y, {}),
            isBlocking: !1,
            'data-sentry-element': 'ProjectLayout',
            'data-sentry-component': 'AuthLayout',
            'data-sentry-source-file': 'AuthLayout.tsx',
            children: n,
          });
        });
      },
      99026: function (e, t, n) {
        'use strict';
        n.d(t, {
          l: function () {
            return r;
          },
        });
        var s = n(97458),
          a = n(65092);
        function r(e) {
          return (0, s.jsxs)('div', {
            className: (0, a.cn)(
              'mx-auto max-w-full xl:max-w-4xl px-4 md:px-5 pt-12 pb-20',
              e.className
            ),
            'data-sentry-component': 'FormsContainer',
            'data-sentry-source-file': 'FormsContainer.tsx',
            children: [
              e.header &&
                (0, s.jsx)('h1', {
                  className: 'text-foreground mb-8 text-3xl',
                  children: e.header,
                }),
              (0, s.jsx)('div', {
                className: 'space-y-12 md:space-y-20',
                children: e.children,
              }),
            ],
          });
        }
      },
      31443: function (e, t, n) {
        'use strict';
        n.r(t);
        var s = n(97458),
          a = n(198),
          r = n(52682),
          i = n(7539),
          o = n(99026),
          c = n(61767),
          u = n(90817);
        let l = () => {
          let e = (0, u.Xo)(a.KA.READ, 'custom_config_gotrue');
          return (0, u.N4)() && !e
            ? (0, s.jsx)(c.Z, {
                isFullPage: !0,
                resourceText: "access your project's email settings",
              })
            : (0, s.jsx)(o.l, { children: (0, s.jsx)(r.uW, {}) });
        };
        ((l.getLayout = e => (0, s.jsx)(i.Z, { children: e })),
          (t.default = l));
      },
    },
    function (e) {
      (e.O(
        0,
        [
          6665, 7623, 588, 783, 1018, 1706, 1864, 8703, 2397, 3954, 9621, 9911,
          659, 7612, 4637, 9344, 7726, 6739, 3302, 3898, 8985, 5518, 793, 3594,
          3861, 6120, 7094, 4334, 9086, 9874, 9774, 2888, 179,
        ],
        function () {
          return e((e.s = 20943));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
