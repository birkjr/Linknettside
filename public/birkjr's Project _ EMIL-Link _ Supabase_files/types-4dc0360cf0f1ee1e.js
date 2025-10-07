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
      (e._sentryDebugIds[t] = 'a3c0df71-868e-40b2-befc-b3ee67823afa'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-a3c0df71-868e-40b2-befc-b3ee67823afa'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5910],
    {
      25828: function (e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/database/types',
          function () {
            return s(37627);
          },
        ]);
      },
      24083: function (e, t, s) {
        'use strict';
        s.d(t, {
          p: function () {
            return d;
          },
        });
        var a = s(97458),
          n = s(65092),
          r = s(67096);
        let d = e => {
          let {
            title: t,
            description: s,
            docsUrl: d,
            actions: c,
            className: l,
          } = e;
          return (0, a.jsxs)('div', {
            className: (0, n.cn)(
              'w-full mb-6 flex flex-col sm:flex-row md:items-center justify-between gap-4 '.concat(
                l
              )
            ),
            'data-sentry-component': 'FormHeader',
            'data-sentry-source-file': 'FormHeader.tsx',
            children: [
              (0, a.jsxs)('div', {
                className: 'space-y-1',
                children: [
                  (0, a.jsx)('h3', {
                    className: 'text-foreground text-xl prose',
                    children: t,
                  }),
                  s &&
                    (0, a.jsx)('div', {
                      className: 'prose text-sm max-w-full',
                      children: s,
                    }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'flex flex-col sm:flex-row md:items-center gap-x-2',
                children: [void 0 !== d && (0, a.jsx)(r.G, { href: d }), c],
              }),
            ],
          });
        };
      },
      37627: function (e, t, s) {
        'use strict';
        s.r(t);
        var a = s(97458),
          n = s(44146),
          r = s(32500),
          d = s(78066),
          c = s(24083);
        let l = () =>
          (0, a.jsx)(d._S, {
            'data-sentry-element': 'ScaffoldContainer',
            'data-sentry-component': 'DatabaseEnumeratedTypes',
            'data-sentry-source-file': 'types.tsx',
            children: (0, a.jsxs)(d.jX, {
              'data-sentry-element': 'ScaffoldSection',
              'data-sentry-source-file': 'types.tsx',
              children: [
                (0, a.jsx)(d.Lc, {
                  className: '!col-span-12',
                  'data-sentry-element': 'ScaffoldSectionContent',
                  'data-sentry-source-file': 'types.tsx',
                  children: (0, a.jsx)(c.p, {
                    className: '!mb-0',
                    title: 'Database Enumerated Types',
                    description:
                      'Custom data types that you can use in your database tables or functions.',
                    'data-sentry-element': 'FormHeader',
                    'data-sentry-source-file': 'types.tsx',
                  }),
                }),
                (0, a.jsx)('div', {
                  className: 'col-span-12 mt-3',
                  children: (0, a.jsx)(n.Ms, {
                    'data-sentry-element': 'EnumeratedTypes',
                    'data-sentry-source-file': 'types.tsx',
                  }),
                }),
              ],
            }),
          });
        ((l.getLayout = e =>
          (0, a.jsx)(r.Z, { title: 'Database', children: e })),
          (t.default = l));
      },
    },
    function (e) {
      (e.O(
        0,
        [
          6665, 3659, 7186, 7623, 588, 783, 1018, 1706, 1864, 8703, 2397, 3954,
          9621, 9911, 659, 7612, 4637, 9344, 7726, 6739, 3302, 3898, 8985, 717,
          5538, 2478, 8827, 6492, 793, 3594, 3861, 6120, 7094, 4334, 9903, 1968,
          8028, 2241, 9774, 2888, 179,
        ],
        function () {
          return e((e.s = 25828));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
