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
      (e._sentryDebugIds[t] = 'cd8453de-f7ec-417f-a529-5aa86c651551'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-cd8453de-f7ec-417f-a529-5aa86c651551'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5589],
    {
      89953: function (e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/auth/rate-limits',
          function () {
            return s(1616);
          },
        ]);
      },
      67628: function (e, t, s) {
        'use strict';
        s.d(t, {
          Q: function () {
            return l;
          },
        });
        var n = s(97458),
          r = s(94059),
          a = s(73565),
          i = s(55228),
          l = e => {
            let { page: t, menu: s } = e;
            return (0, n.jsx)('div', {
              className: 'flex flex-col space-y-8 overflow-y-auto',
              'data-sentry-component': 'ProductMenu',
              'data-sentry-source-file': 'ProductMenu.tsx',
              children: (0, n.jsx)(r.ZP, {
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
                              (0, n.jsx)(r.ZP.Group, {
                                title: e.title
                                  ? (0, n.jsxs)('div', {
                                      className:
                                        'flex flex-col space-y-2 uppercase font-mono',
                                      children: [
                                        (0, n.jsx)('span', {
                                          children: e.title,
                                        }),
                                        e.isPreview &&
                                          (0, n.jsx)(a.C, {
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
      94724: function (e, t, s) {
        'use strict';
        s.d(t, {
          _: function () {
            return c;
          },
        });
        var n = s(36457),
          r = s(64618),
          a = s(34549),
          i = s(6464),
          l = s(26600);
        async function o(e) {
          let { projectRef: t, config: s } = e,
            { data: n, error: r } = await (0, i.r$)(
              '/platform/auth/{ref}/config',
              { params: { path: { ref: t } }, body: { ...s } }
            );
          return (r && (0, i.S3)(r), n);
        }
        let c = function () {
          let {
              onSuccess: e,
              onError: t,
              ...s
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            i = (0, n.NL)();
          return (0, r.D)(e => o(e), {
            async onSuccess(t, s, n) {
              let { projectRef: r } = s;
              (await i.invalidateQueries(l.o.authConfig(r)),
                await (null == e ? void 0 : e(t, s, n)));
            },
            async onError(e, s, n) {
              void 0 === t
                ? a.Am.error(
                    'Failed to update auth configuration: '.concat(e.message)
                  )
                : t(e, s, n);
            },
            ...s,
          });
        };
      },
      7539: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return y;
          },
        });
        var n = s(97458),
          r = s(12436),
          a = s(32691),
          i = s(99163),
          l = s(67628),
          o = s(72909),
          c = s(58326),
          d = s(83145),
          u = s.n(d),
          m = s(10947),
          x = s(90839),
          h = s(74334),
          f = s(37756);
        let p = e => [
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
                ...(f.Qy
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
          j = () => {
            let { ref: e = 'default' } = (0, r.UO)(),
              t = (0, i.ar)();
            (0, o.kM)({ projectRef: e });
            let s = (0, a.useRouter)().pathname.split('/')[4];
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(l.Q, {
                  page: s,
                  menu: p(e),
                  'data-sentry-element': 'ProductMenu',
                  'data-sentry-source-file': 'AuthLayout.tsx',
                }),
                t &&
                  (0, n.jsx)('div', {
                    className: 'px-3',
                    children: (0, n.jsxs)(m.bZ, {
                      children: [
                        (0, n.jsx)(m.Cd, {
                          className: 'text-sm',
                          children: 'Column Privileges has been shifted',
                        }),
                        (0, n.jsxs)(m.X, {
                          className: 'text-xs',
                          children: [
                            (0, n.jsx)('p', {
                              className: 'mb-2',
                              children:
                                'It can now be found in the menu under the database section.',
                            }),
                            (0, n.jsx)(x.z, {
                              asChild: !0,
                              type: 'default',
                              size: 'tiny',
                              children: (0, n.jsx)(u(), {
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
        var y = (0, c.Q)(e => {
          let { title: t, children: s } = e;
          return (0, n.jsx)(h.Z, {
            title: t || 'Authentication',
            product: 'Authentication',
            productMenu: (0, n.jsx)(j, {}),
            isBlocking: !1,
            'data-sentry-element': 'ProjectLayout',
            'data-sentry-component': 'AuthLayout',
            'data-sentry-source-file': 'AuthLayout.tsx',
            children: s,
          });
        });
      },
      59461: function (e, t, s) {
        'use strict';
        s.d(t, {
          i: function () {
            return a;
          },
        });
        var n = s(97458),
          r = s(90839);
        let a = e => {
          let {
              form: t,
              hasChanges: s,
              handleReset: a,
              helper: i,
              disabled: l = !1,
              isSubmitting: o,
              submitText: c = 'Save',
            } = e,
            d = o || l || (!s && void 0 !== s);
          return (0, n.jsxs)('div', {
            className: [
              'flex w-full items-center gap-2',
              i ? 'justify-between' : 'justify-end',
            ].join(' '),
            'data-sentry-component': 'FormActions',
            'data-sentry-source-file': 'FormActions.tsx',
            children: [
              i &&
                (0, n.jsx)('span', {
                  className: 'text-sm text-foreground-lighter',
                  children: i,
                }),
              (0, n.jsxs)('div', {
                className: 'flex items-center gap-2',
                children: [
                  (0, n.jsx)(r.z, {
                    disabled: d,
                    type: 'default',
                    htmlType: 'reset',
                    onClick: () => a(),
                    'data-sentry-element': 'Button',
                    'data-sentry-source-file': 'FormActions.tsx',
                    children: 'Cancel',
                  }),
                  (0, n.jsx)(r.z, {
                    form: t,
                    type: 'primary',
                    htmlType: 'submit',
                    disabled: d,
                    loading: o,
                    'data-sentry-element': 'Button',
                    'data-sentry-source-file': 'FormActions.tsx',
                    children: c,
                  }),
                ],
              }),
            ],
          });
        };
      },
      24083: function (e, t, s) {
        'use strict';
        s.d(t, {
          p: function () {
            return i;
          },
        });
        var n = s(97458),
          r = s(65092),
          a = s(67096);
        let i = e => {
          let {
            title: t,
            description: s,
            docsUrl: i,
            actions: l,
            className: o,
          } = e;
          return (0, n.jsxs)('div', {
            className: (0, r.cn)(
              'w-full mb-6 flex flex-col sm:flex-row md:items-center justify-between gap-4 '.concat(
                o
              )
            ),
            'data-sentry-component': 'FormHeader',
            'data-sentry-source-file': 'FormHeader.tsx',
            children: [
              (0, n.jsxs)('div', {
                className: 'space-y-1',
                children: [
                  (0, n.jsx)('h3', {
                    className: 'text-foreground text-xl prose',
                    children: t,
                  }),
                  s &&
                    (0, n.jsx)('div', {
                      className: 'prose text-sm max-w-full',
                      children: s,
                    }),
                ],
              }),
              (0, n.jsxs)('div', {
                className: 'flex flex-col sm:flex-row md:items-center gap-x-2',
                children: [void 0 !== i && (0, n.jsx)(a.G, { href: i }), l],
              }),
            ],
          });
        };
      },
      87696: function (e, t, s) {
        'use strict';
        s.d(t, {
          DO: function () {
            return c;
          },
          Tq: function () {
            return l;
          },
          by: function () {
            return i;
          },
          iL: function () {
            return o;
          },
          m9: function () {
            return d;
          },
        });
        var n = s(97458),
          r = s(52983),
          a = s(65092);
        let i = e => {
            let { children: t, header: s, footer: r } = e;
            return (0, n.jsxs)(l, {
              'data-sentry-element': 'FormPanelContainer',
              'data-sentry-component': 'FormPanel',
              'data-sentry-source-file': 'FormPanel.tsx',
              children: [
                s && (0, n.jsx)(o, { children: s }),
                (0, n.jsx)(c, {
                  className: 'divide-y',
                  'data-sentry-element': 'FormPanelContent',
                  'data-sentry-source-file': 'FormPanel.tsx',
                  children: t,
                }),
                r && (0, n.jsx)(d, { children: r }),
              ],
            });
          },
          l = (0, r.forwardRef)((e, t) => {
            let { children: s, ...r } = e;
            return (0, n.jsx)('div', {
              ref: t,
              ...r,
              className: (0, a.cn)(
                'bg-surface-100 border overflow-hidden rounded-md shadow max-w-full',
                r.className
              ),
              children: s,
            });
          });
        l.displayName = l.displayName;
        let o = (0, r.forwardRef)((e, t) => {
          let { children: s, ...r } = e;
          return (0, n.jsx)('div', {
            ref: t,
            ...r,
            className: (0, a.cn)(
              'border-default border-b px-8 py-4',
              r.className
            ),
            children: s,
          });
        });
        o.displayName = o.displayName;
        let c = (0, r.forwardRef)((e, t) => {
          let { children: s, ...r } = e;
          return (0, n.jsx)('div', {
            ref: t,
            ...r,
            className: (0, a.cn)(
              'divide-border flex flex-col gap-0',
              r.className
            ),
            children: s,
          });
        });
        c.displayName = c.displayName;
        let d = (0, r.forwardRef)((e, t) => {
          let { children: s, ...r } = e;
          return (0, n.jsx)('div', {
            ref: t,
            ...r,
            className: (0, a.cn)('border-t', r.className),
            children: s,
          });
        });
        d.displayName = d.displayName;
      },
      46993: function (e, t, s) {
        'use strict';
        s.d(t, {
          B4: function () {
            return o;
          },
          S0: function () {
            return i;
          },
          hj: function () {
            return a;
          },
        });
        var n = s(97458),
          r = s(52983);
        let a = e => {
            let {
              children: t,
              id: s,
              header: r,
              disabled: a,
              className: i,
            } = e;
            return (0, n.jsxs)('div', {
              id: s,
              className: [
                'grid grid-cols-12 gap-6 px-4 md:px-8 py-4 md:py-8',
                ''.concat(a ? ' opacity-30' : ' opacity-100'),
                ''.concat(i),
              ].join(' '),
              'data-sentry-component': 'FormSection',
              'data-sentry-source-file': 'FormSection.tsx',
              children: [r, t],
            });
          },
          i = e => {
            let { children: t, className: s = '', description: r } = e;
            return void 0 !== r
              ? (0, n.jsxs)('div', {
                  className:
                    'flex flex-col space-y-2 col-span-12 lg:col-span-5 '.concat(
                      s
                    ),
                  children: [
                    (0, n.jsx)('label', {
                      className: 'text-foreground text-sm',
                      children: t,
                    }),
                    r,
                  ],
                })
              : (0, n.jsx)('label', {
                  className:
                    'text-foreground col-span-12 text-sm lg:col-span-5 '.concat(
                      s
                    ),
                  children: t,
                });
          },
          l = () =>
            (0, n.jsxs)('div', {
              className: 'flex w-full flex-col gap-2',
              'data-sentry-component': 'Shimmer',
              'data-sentry-source-file': 'FormSection.tsx',
              children: [
                (0, n.jsx)('div', {
                  className: 'shimmering-loader h-2 w-1/3 rounded',
                }),
                (0, n.jsx)('div', {
                  className: 'flex flex-col justify-between space-y-2',
                  children: (0, n.jsx)('div', {
                    className: 'shimmering-loader h-[34px] w-2/3 rounded',
                  }),
                }),
              ],
            }),
          o = e => {
            let {
              children: t,
              loading: s = !0,
              fullWidth: a,
              className: i,
            } = e;
            return (0, n.jsx)('div', {
              className:
                '\n        relative col-span-12 flex flex-col gap-6 lg:col-span-7\n        '
                  .concat(a && '!col-span-12', '\n        ')
                  .concat(i, '\n      '),
              'data-sentry-component': 'FormSectionContent',
              'data-sentry-source-file': 'FormSection.tsx',
              children: s ? r.Children.map(t, () => (0, n.jsx)(l, {})) : t,
            });
          };
      },
      99026: function (e, t, s) {
        'use strict';
        s.d(t, {
          l: function () {
            return a;
          },
        });
        var n = s(97458),
          r = s(65092);
        function a(e) {
          return (0, n.jsxs)('div', {
            className: (0, r.cn)(
              'mx-auto max-w-full xl:max-w-4xl px-4 md:px-5 pt-12 pb-20',
              e.className
            ),
            'data-sentry-component': 'FormsContainer',
            'data-sentry-source-file': 'FormsContainer.tsx',
            children: [
              e.header &&
                (0, n.jsx)('h1', {
                  className: 'text-foreground mb-8 text-3xl',
                  children: e.header,
                }),
              (0, n.jsx)('div', {
                className: 'space-y-12 md:space-y-20',
                children: e.children,
              }),
            ],
          });
        }
      },
      61767: function (e, t, s) {
        'use strict';
        var n = s(97458),
          r = s(44735);
        t.Z = e => {
          let { resourceText: t, isFullPage: s = !1 } = e,
            a = () =>
              (0, n.jsx)('div', {
                className:
                  'block w-full rounded border border-opacity-20 py-4 px-6 border-overlay bg-surface-200',
                'data-sentry-component': 'NoPermissionMessage',
                'data-sentry-source-file': 'NoPermission.tsx',
                children: (0, n.jsxs)('div', {
                  className: 'flex space-x-3',
                  children: [
                    (0, n.jsx)('div', {
                      className: 'mt-1',
                      children: (0, n.jsx)(r.Z, {
                        size: 20,
                        'data-sentry-element': 'AlertCircle',
                        'data-sentry-source-file': 'NoPermission.tsx',
                      }),
                    }),
                    (0, n.jsx)('div', {
                      className: 'flex w-full items-center justify-between',
                      children: (0, n.jsxs)('div', {
                        className: 'space-y-1',
                        children: [
                          (0, n.jsxs)('p', {
                            className: 'text-sm',
                            children: [
                              'You need additional permissions to ',
                              t,
                            ],
                          }),
                          (0, n.jsx)('div', {
                            children: (0, n.jsx)('p', {
                              className: 'text-sm text-foreground-light',
                              children:
                                'Contact your organization owner or administrator for assistance.',
                            }),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              });
          return s
            ? (0, n.jsx)('div', {
                className: 'flex h-full items-center justify-center',
                children: (0, n.jsx)('div', {
                  className: 'w-[550px]',
                  children: (0, n.jsx)(a, {}),
                }),
              })
            : (0, n.jsx)(a, {});
        };
      },
      55228: function (e, t, s) {
        'use strict';
        var n = s(97458),
          r = s(83145),
          a = s.n(r),
          i = s(94059),
          l = s(73565),
          o = s(90839);
        t.Z = e => {
          let {
              name: t = '',
              isActive: s,
              isExternal: r,
              icon: c,
              rightIcon: d,
              url: u = '',
              target: m = '_self',
              onClick: x,
              textClassName: h = '',
              hoverText: f = '',
              label: p,
            } = e,
            j = (0, n.jsx)(i.ZP.Item, {
              icon: c,
              rounded: !0,
              active: s,
              onClick: x,
              children: (0, n.jsxs)('div', {
                className: 'flex w-full items-center justify-between gap-1',
                children: [
                  (0, n.jsxs)('div', {
                    title: f || ('string' == typeof t ? t : ''),
                    className: 'flex items-center gap-2 truncate w-full ' + h,
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
            ? r
              ? (0, n.jsx)(o.z, {
                  asChild: !0,
                  block: !0,
                  className: '!justify-start',
                  type: 'text',
                  size: 'small',
                  icon: c,
                  children: (0, n.jsx)(a(), {
                    href: u,
                    target: '_blank',
                    rel: 'noreferrer',
                    children: t,
                  }),
                })
              : (0, n.jsx)(a(), {
                  href: u,
                  className: 'block',
                  target: m,
                  children: j,
                })
            : j;
        };
      },
      1616: function (e, t, s) {
        'use strict';
        (s.r(t),
          s.d(t, {
            default: function () {
              return P;
            },
          }));
        var n = s(97458),
          r = s(198),
          a = s(78751),
          i = s(83145),
          l = s.n(i),
          o = s(52983),
          c = s(86848),
          d = s(34549),
          u = s(5394),
          m = s(12436),
          x = s(5529),
          h = s(59461),
          f = s(24083),
          p = s(87696),
          j = s(46993),
          y = s(63621),
          N = s(72909),
          g = s(94724),
          b = s(90817),
          v = s(49142),
          _ = s(56740),
          T = s(10947),
          E = s(7756),
          I = s(90839),
          M = s(93433),
          R = () => {
            let e = 'auth-rate-limits-form',
              { ref: t } = (0, m.UO)(),
              s = (0, b.Xo)(r.KA.UPDATE, 'custom_config_gotrue'),
              {
                data: i,
                error: R,
                isLoading: S,
                isError: A,
                isSuccess: w,
              } = (0, N.$E)({ projectRef: t }),
              { mutate: L, isLoading: P } = (0, g._)({
                onSuccess: () => {
                  d.Am.success('Rate limits successfully updated');
                },
                onError: e => {
                  d.Am.error(
                    'Failed to update rate limits: '.concat(e.message)
                  );
                },
              }),
              C =
                (null == i ? void 0 : i.EXTERNAL_EMAIL_ENABLED) && (0, M.n)(i),
              k = null == i ? void 0 : i.EXTERNAL_PHONE_ENABLED,
              F = null == i ? void 0 : i.EXTERNAL_ANONYMOUS_USERS_ENABLED,
              O = u.Ry({
                RATE_LIMIT_TOKEN_REFRESH: u.oQ
                  .number()
                  .min(0, 'Must be not be lower than 0')
                  .max(32767, 'Must not be more than 32,767 an 5 minutes'),
                RATE_LIMIT_VERIFY: u.oQ
                  .number()
                  .min(0, 'Must be not be lower than 0')
                  .max(32767, 'Must not be more than 32,767 an 5 minutes'),
                RATE_LIMIT_EMAIL_SENT: u.oQ
                  .number()
                  .min(0, 'Must be not be lower than 0')
                  .max(32767, 'Must not be more than 32,767 an hour'),
                RATE_LIMIT_SMS_SENT: u.oQ
                  .number()
                  .min(0, 'Must be not be lower than 0')
                  .max(32767, 'Must not be more than 32,767 an hour'),
                RATE_LIMIT_ANONYMOUS_USERS: u.oQ
                  .number()
                  .min(0, 'Must be not be lower than 0')
                  .max(32767, 'Must not be more than 32,767 an hour'),
                RATE_LIMIT_OTP: u.oQ
                  .number()
                  .min(0, 'Must be not be lower than 0')
                  .max(32767, 'Must not be more than 32,767 an hour'),
              }),
              Z = (0, c.cI)({
                resolver: (0, a.F)(O),
                defaultValues: {
                  RATE_LIMIT_TOKEN_REFRESH: 0,
                  RATE_LIMIT_VERIFY: 0,
                  RATE_LIMIT_EMAIL_SENT: 0,
                  RATE_LIMIT_SMS_SENT: 0,
                  RATE_LIMIT_OTP: 0,
                },
              });
            return (
              (0, o.useEffect)(() => {
                w &&
                  Z.reset({
                    RATE_LIMIT_TOKEN_REFRESH: i.RATE_LIMIT_TOKEN_REFRESH,
                    RATE_LIMIT_VERIFY: i.RATE_LIMIT_VERIFY,
                    RATE_LIMIT_EMAIL_SENT: i.RATE_LIMIT_EMAIL_SENT,
                    RATE_LIMIT_SMS_SENT: i.RATE_LIMIT_SMS_SENT,
                    RATE_LIMIT_ANONYMOUS_USERS: i.RATE_LIMIT_ANONYMOUS_USERS,
                    RATE_LIMIT_OTP: i.RATE_LIMIT_OTP,
                  });
              }, [w]),
              (0, n.jsxs)('div', {
                'data-sentry-component': 'RateLimits',
                'data-sentry-source-file': 'RateLimits.tsx',
                children: [
                  (0, n.jsx)(f.p, {
                    title: 'Rate Limits',
                    description:
                      'Safeguard against bursts of incoming traffic to prevent abuse and maximize stability',
                    docsUrl:
                      'https://supabase.com/docs/guides/platform/going-into-prod#rate-limiting-resource-allocation--abuse-prevention',
                    'data-sentry-element': 'FormHeader',
                    'data-sentry-source-file': 'RateLimits.tsx',
                  }),
                  A &&
                    (0, n.jsx)(x.Z, {
                      subject: 'Failed to retrieve auth config rate limits',
                      error: R,
                    }),
                  S && (0, n.jsx)(y.A, {}),
                  w &&
                    (0, n.jsx)(v.l0, {
                      ...Z,
                      children: (0, n.jsx)('form', {
                        id: e,
                        className: 'space-y-4',
                        onSubmit: Z.handleSubmit(e => {
                          if (!t)
                            return console.error('Project ref is required');
                          let s = {};
                          ([
                            'RATE_LIMIT_TOKEN_REFRESH',
                            'RATE_LIMIT_VERIFY',
                            'RATE_LIMIT_EMAIL_SENT',
                            'RATE_LIMIT_SMS_SENT',
                            'RATE_LIMIT_ANONYMOUS_USERS',
                            'RATE_LIMIT_OTP',
                          ].forEach(t => {
                            e[t] !== (null == i ? void 0 : i[t]) &&
                              (s[t] = e[t]);
                          }),
                            L(
                              { projectRef: t, config: s },
                              { onSuccess: () => Z.reset(e) }
                            ));
                        }),
                        children: (0, n.jsxs)(p.by, {
                          footer: (0, n.jsx)('div', {
                            className: 'flex py-4 px-8',
                            children: (0, n.jsx)(h.i, {
                              form: e,
                              isSubmitting: P,
                              hasChanges: Z.formState.isDirty,
                              handleReset: () => Z.reset(),
                              disabled: !s,
                              helper: s
                                ? void 0
                                : 'You need additional permissions to update authentication settings',
                            }),
                          }),
                          children: [
                            (0, n.jsx)(j.hj, {
                              id: 'email-sent',
                              header: (0, n.jsx)(j.S0, {
                                description: (0, n.jsx)('p', {
                                  className: 'text-foreground-light text-sm',
                                  children:
                                    'Number of emails that can be sent per hour from your project',
                                }),
                                children: 'Rate limit for sending emails',
                              }),
                              children: (0, n.jsx)(j.B4, {
                                loading: !1,
                                children: (0, n.jsx)(v.Wi, {
                                  control: Z.control,
                                  name: 'RATE_LIMIT_EMAIL_SENT',
                                  render: e => {
                                    let { field: r } = e;
                                    return (0, n.jsxs)(v.xJ, {
                                      className: 'flex flex-col gap-y-2',
                                      children: [
                                        (0, n.jsx)(v.NI, {
                                          children: (0, n.jsx)(_.I, {
                                            disabled: !s || !C,
                                            type: 'number',
                                            ...r,
                                          }),
                                        }),
                                        i.EXTERNAL_EMAIL_ENABLED
                                          ? (0, M.n)(i)
                                            ? null
                                            : (0, n.jsxs)(T.bZ, {
                                                children: [
                                                  (0, n.jsx)(E.aN, {}),
                                                  (0, n.jsx)(T.Cd, {
                                                    children:
                                                      'Custom SMTP provider is required to update this configuration',
                                                  }),
                                                  (0, n.jsxs)(T.X, {
                                                    className:
                                                      'flex flex-col gap-y-3',
                                                    children: [
                                                      (0, n.jsx)('p', {
                                                        className:
                                                          '!leading-tight',
                                                        children:
                                                          'The built-in email service has a fixed rate limit. You will need to set up your own custom SMTP provider to update your email rate limit',
                                                      }),
                                                      (0, n.jsx)(I.z, {
                                                        asChild: !0,
                                                        type: 'default',
                                                        className: 'w-min',
                                                        children: (0, n.jsx)(
                                                          l(),
                                                          {
                                                            href: '/project/'.concat(
                                                              t,
                                                              '/settings/auth'
                                                            ),
                                                            children:
                                                              'View SMTP settings',
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  }),
                                                ],
                                              })
                                          : (0, n.jsxs)(T.bZ, {
                                              children: [
                                                (0, n.jsx)(E.aN, {}),
                                                (0, n.jsx)(T.Cd, {
                                                  children:
                                                    'Email-based logins are not enabled for your project',
                                                }),
                                                (0, n.jsxs)(T.X, {
                                                  className:
                                                    'flex flex-col gap-y-3',
                                                  children: [
                                                    (0, n.jsx)('p', {
                                                      className:
                                                        '!leading-tight',
                                                      children:
                                                        'Enable email-based logins to update this rate limit',
                                                    }),
                                                    (0, n.jsx)(I.z, {
                                                      asChild: !0,
                                                      type: 'default',
                                                      className: 'w-min',
                                                      children: (0, n.jsx)(
                                                        l(),
                                                        {
                                                          href: '/project/'.concat(
                                                            t,
                                                            '/auth/providers'
                                                          ),
                                                          children:
                                                            'View auth providers',
                                                        }
                                                      ),
                                                    }),
                                                  ],
                                                }),
                                              ],
                                            }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            }),
                            (0, n.jsx)(j.hj, {
                              id: 'sms-sent',
                              header: (0, n.jsx)(j.S0, {
                                description: (0, n.jsx)('p', {
                                  className: 'text-foreground-light text-sm',
                                  children:
                                    'Number of SMS messages that can be sent per hour from your project',
                                }),
                                children: 'Rate limit for sending SMS messages',
                              }),
                              children: (0, n.jsx)(j.B4, {
                                loading: !1,
                                children: (0, n.jsx)(v.Wi, {
                                  control: Z.control,
                                  name: 'RATE_LIMIT_SMS_SENT',
                                  render: e => {
                                    let { field: r } = e;
                                    return (0, n.jsxs)(v.xJ, {
                                      className: 'flex flex-col gap-y-2',
                                      children: [
                                        (0, n.jsx)(v.NI, {
                                          children: (0, n.jsx)(_.I, {
                                            disabled: !s || !k,
                                            type: 'number',
                                            ...r,
                                          }),
                                        }),
                                        !k &&
                                          (0, n.jsxs)(T.bZ, {
                                            children: [
                                              (0, n.jsx)(E.aN, {}),
                                              (0, n.jsx)(T.Cd, {
                                                children:
                                                  'Phone-based logins are not enabled for your project',
                                              }),
                                              (0, n.jsxs)(T.X, {
                                                className:
                                                  'flex flex-col gap-y-3',
                                                children: [
                                                  (0, n.jsx)('p', {
                                                    className: '!leading-tight',
                                                    children:
                                                      'Enable phone-based logins to update this rate limit',
                                                  }),
                                                  (0, n.jsx)(I.z, {
                                                    asChild: !0,
                                                    type: 'default',
                                                    className: 'w-min',
                                                    children: (0, n.jsx)(l(), {
                                                      href: '/project/'.concat(
                                                        t,
                                                        '/auth/providers'
                                                      ),
                                                      children:
                                                        'View auth providers',
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            }),
                            (0, n.jsx)(j.hj, {
                              id: 'token-refresh',
                              header: (0, n.jsx)(j.S0, {
                                description: (0, n.jsx)('p', {
                                  className: 'text-foreground-light text-sm',
                                  children:
                                    'Number of sessions that can be refreshed in a 5 minute interval per IP address.',
                                }),
                                children: 'Rate limit for token refreshes',
                              }),
                              children: (0, n.jsx)(j.B4, {
                                loading: !1,
                                children: (0, n.jsx)(v.Wi, {
                                  control: Z.control,
                                  name: 'RATE_LIMIT_TOKEN_REFRESH',
                                  render: e => {
                                    let { field: t } = e;
                                    return (0, n.jsxs)(v.xJ, {
                                      children: [
                                        (0, n.jsx)(v.NI, {
                                          children: (0, n.jsx)(_.I, {
                                            type: 'number',
                                            ...t,
                                            disabled: !s,
                                          }),
                                        }),
                                        t.value > 0 &&
                                          (0, n.jsx)(n.Fragment, {
                                            children: (0, n.jsxs)('p', {
                                              className:
                                                'text-foreground-lighter text-sm',
                                              children: [
                                                'This is equivalent to ',
                                                12 * t.value,
                                                ' requests per hour',
                                              ],
                                            }),
                                          }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            }),
                            (0, n.jsx)(j.hj, {
                              id: 'verify',
                              header: (0, n.jsx)(j.S0, {
                                description: (0, n.jsx)('p', {
                                  className: 'text-foreground-light text-sm',
                                  children:
                                    'Number of OTP/Magic link verifications that can be made in a 5 minute interval per IP address.',
                                }),
                                children: 'Rate limit for token verifications',
                              }),
                              children: (0, n.jsx)(j.B4, {
                                loading: !1,
                                children: (0, n.jsx)(v.Wi, {
                                  control: Z.control,
                                  name: 'RATE_LIMIT_VERIFY',
                                  render: e => {
                                    let { field: t } = e;
                                    return (0, n.jsxs)(v.xJ, {
                                      children: [
                                        (0, n.jsx)(v.NI, {
                                          children: (0, n.jsx)(_.I, {
                                            type: 'number',
                                            ...t,
                                            disabled: !s,
                                          }),
                                        }),
                                        t.value > 0 &&
                                          (0, n.jsxs)('p', {
                                            className:
                                              'text-foreground-lighter text-sm',
                                            children: [
                                              'This is equivalent to ',
                                              12 * t.value,
                                              ' requests per hour',
                                            ],
                                          }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            }),
                            (0, n.jsx)(j.hj, {
                              id: 'anonymous-users',
                              header: (0, n.jsx)(j.S0, {
                                description: (0, n.jsx)('p', {
                                  className: 'text-foreground-light text-sm',
                                  children:
                                    'Number of anonymous sign-ins that can be made per hour per IP address.',
                                }),
                                children: 'Rate limit for anonymous users',
                              }),
                              children: (0, n.jsx)(j.B4, {
                                loading: !1,
                                children: (0, n.jsx)(v.Wi, {
                                  control: Z.control,
                                  name: 'RATE_LIMIT_ANONYMOUS_USERS',
                                  render: e => {
                                    let { field: r } = e;
                                    return (0, n.jsxs)(v.xJ, {
                                      className: 'flex flex-col gap-y-2',
                                      children: [
                                        (0, n.jsx)(v.NI, {
                                          children: (0, n.jsx)(_.I, {
                                            disabled: !s || !F,
                                            type: 'number',
                                            ...r,
                                          }),
                                        }),
                                        !F &&
                                          (0, n.jsxs)(T.bZ, {
                                            children: [
                                              (0, n.jsx)(E.aN, {}),
                                              (0, n.jsx)(T.Cd, {
                                                children:
                                                  'Anonymous logins are not enabled for your project',
                                              }),
                                              (0, n.jsxs)(T.X, {
                                                className:
                                                  'flex flex-col gap-y-3',
                                                children: [
                                                  (0, n.jsx)('p', {
                                                    className: '!leading-tight',
                                                    children:
                                                      'Enable anonymous logins to update this rate limit',
                                                  }),
                                                  (0, n.jsx)(I.z, {
                                                    asChild: !0,
                                                    type: 'default',
                                                    className: 'w-min',
                                                    children: (0, n.jsx)(l(), {
                                                      href: '/project/'.concat(
                                                        t,
                                                        '/settings/auth'
                                                      ),
                                                      children:
                                                        'View auth settings',
                                                    }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            }),
                            (0, n.jsx)(j.hj, {
                              id: 'otp',
                              header: (0, n.jsx)(j.S0, {
                                description: (0, n.jsx)('p', {
                                  className: 'text-foreground-light text-sm',
                                  children:
                                    'Number of sign up and sign-in requests that can be made in a 5 minute interval per IP address (excludes anonymous users).',
                                }),
                                children:
                                  'Rate limit for sign ups and sign ins',
                              }),
                              children: (0, n.jsx)(j.B4, {
                                loading: !1,
                                children: (0, n.jsx)(v.Wi, {
                                  control: Z.control,
                                  name: 'RATE_LIMIT_OTP',
                                  render: e => {
                                    let { field: t } = e;
                                    return (0, n.jsxs)(v.xJ, {
                                      children: [
                                        (0, n.jsx)(v.NI, {
                                          children: (0, n.jsx)(_.I, {
                                            type: 'number',
                                            ...t,
                                            disabled: !s,
                                          }),
                                        }),
                                        t.value > 0 &&
                                          (0, n.jsxs)(v.pf, {
                                            className:
                                              'text-foreground-lighter',
                                            children: [
                                              'This is equivalent to ',
                                              12 * t.value,
                                              ' requests per hour',
                                            ],
                                          }),
                                      ],
                                    });
                                  },
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                ],
              })
            );
          },
          S = s(7539),
          A = s(99026),
          w = s(61767);
        let L = () => {
          let e = (0, b.Xo)(r.KA.READ, 'custom_config_gotrue');
          return (0, b.N4)() && !e
            ? (0, n.jsx)(w.Z, {
                isFullPage: !0,
                resourceText: "access your project's auth rate limit settings",
              })
            : (0, n.jsx)(A.l, { children: (0, n.jsx)(R, {}) });
        };
        L.getLayout = e => (0, n.jsx)(S.Z, { children: e });
        var P = L;
      },
      94059: function (e, t, s) {
        'use strict';
        s.d(t, {
          ZP: function () {
            return m;
          },
        });
        var n = s(97458),
          r = s(52983),
          a = s(25843),
          i = s(65092);
        function l(e) {
          let { children: t, className: s, tag: r = 'div', style: a } = e;
          return (0, n.jsx)(''.concat(r), {
            style: a,
            'data-sentry-element': 'CustomTag',
            'data-sentry-component': 'Typography',
            'data-sentry-source-file': 'Typography.tsx',
            children: t,
          });
        }
        ((l.Title = function (e) {
          let { className: t, level: s = 1, children: r, style: a } = e;
          return (0, n.jsx)('h'.concat(s), {
            style: a,
            'data-sentry-element': 'CustomTag',
            'data-sentry-component': 'Title',
            'data-sentry-source-file': 'Title.tsx',
            children: r,
          });
        }),
          (l.Text = function (e) {
            let {
              className: t,
              children: s,
              style: r,
              type: a,
              disabled: i,
              mark: l,
              code: o,
              keyboard: c,
              underline: d,
              strikethrough: u,
              strong: m,
              small: x,
            } = e;
            return o
              ? (0, n.jsx)('code', { style: r, children: s })
              : l
                ? (0, n.jsx)('mark', { style: r, children: s })
                : c
                  ? (0, n.jsx)('kbd', { style: r, children: s })
                  : m
                    ? (0, n.jsx)('strong', { style: r, children: s })
                    : (0, n.jsx)('span', {
                        style: r,
                        'data-sentry-component': 'Text',
                        'data-sentry-source-file': 'Text.tsx',
                        children: s,
                      });
          }),
          (l.Link = function (e) {
            let {
              children: t,
              target: s = '_blank',
              href: r,
              className: a,
              onClick: i,
              style: l,
            } = e;
            return (0, n.jsx)('a', {
              onClick: i,
              href: r,
              target: s,
              rel: 'noopener noreferrer',
              style: l,
              'data-sentry-component': 'Link',
              'data-sentry-source-file': 'Link.tsx',
              children: t,
            });
          }));
        let o = (0, r.createContext)({ type: 'text' }),
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
            let e = (0, r.useContext)(o);
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
            ulClassName: r,
            style: a,
            type: i = 'text',
          } = e;
          return (0, n.jsx)('nav', {
            role: 'menu',
            'aria-label': 'Sidebar',
            'aria-orientation': 'vertical',
            'aria-labelledby': 'options-menu',
            className: s,
            style: a,
            'data-sentry-component': 'Menu',
            'data-sentry-source-file': 'Menu.tsx',
            children: (0, n.jsx)(c, {
              type: i,
              'data-sentry-element': 'MenuContextProvider',
              'data-sentry-source-file': 'Menu.tsx',
              children: (0, n.jsx)('ul', { className: r, children: t }),
            }),
          });
        }
        ((u.Item = function (e) {
          let {
              children: t,
              icon: s,
              active: r,
              rounded: l,
              onClick: o,
              doNotCloseOverlay: c = !1,
              showActiveBar: u = !1,
              style: m,
            } = e,
            x = (0, a.Z)('menu'),
            { type: h } = d(),
            f = [x.item.base];
          (f.push(x.item.variants[h].base),
            r
              ? f.push(x.item.variants[h].active)
              : f.push(x.item.variants[h].normal));
          let p = [x.item.content.base];
          r ? p.push(x.item.content.active) : p.push(x.item.content.normal);
          let j = [x.item.icon.base];
          return (
            r ? j.push(x.item.icon.active) : j.push(x.item.icon.normal),
            (0, n.jsxs)('li', {
              role: 'menuitem',
              className: (0, i.cn)('outline-none', f),
              style: m,
              onClick: o,
              'aria-current': r ? 'page' : void 0,
              'data-sentry-component': 'Item',
              'data-sentry-source-file': 'Menu.tsx',
              children: [
                s &&
                  (0, n.jsx)('div', {
                    className: ''.concat(j.join(' '), ' min-w-fit'),
                    children: s,
                  }),
                (0, n.jsx)('span', { className: p.join(' '), children: t }),
              ],
            })
          );
        }),
          (u.Group = function (e) {
            let { children: t, icon: s, title: r } = e,
              i = (0, a.Z)('menu'),
              { type: l } = d();
            return (0, n.jsxs)('div', {
              className: [i.group.base, i.group.variants[l]].join(' '),
              'data-sentry-component': 'Group',
              'data-sentry-source-file': 'Menu.tsx',
              children: [
                s &&
                  (0, n.jsx)('span', { className: i.group.icon, children: s }),
                (0, n.jsx)('span', { className: i.group.content, children: r }),
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
          6665, 7623, 588, 783, 1018, 1706, 1864, 8703, 2397, 3954, 9621, 9911,
          659, 7612, 4637, 9344, 7726, 6739, 3302, 3898, 793, 3594, 3861, 6120,
          7094, 4334, 9774, 2888, 179,
        ],
        function () {
          return e((e.s = 89953));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
