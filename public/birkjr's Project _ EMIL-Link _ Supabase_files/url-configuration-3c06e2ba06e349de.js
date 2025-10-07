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
      (e._sentryDebugIds[t] = '4fa15eae-1699-41aa-9aa6-23bbb9b6f54e'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-4fa15eae-1699-41aa-9aa6-23bbb9b6f54e'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5117],
    {
      3974: function (e, t, s) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/auth/url-configuration',
          function () {
            return s(14529);
          },
        ]);
      },
      66164: function (e, t, s) {
        'use strict';
        s.d(t, {
          y: function () {
            return c;
          },
        });
        let n =
            /^((ftp|http|https):\/\/)?(www.)?(?!.*(ftp|http|https|www.))[a-zA-Z0-9_*-]+(\.[a-zA-Z0-9_*-]+)+((\/)[\w#]+)*(\/\w+\?[a-zA-Z0-9_]+=\w+(&[a-zA-Z0-9_]+=\w+)*)+(?:\.[a-z]+)*(?::\d+)?(?![^<]*(?:<\/\w+>|\/?>))(.*)?\/?(.)*?$/gm,
          r =
            /^[a-z0-9-]+([.][a-z0-9]+)*:\/(\/[-a-z0-9._~!$&'()*+,;=:@%]+)+(?:\.[a-z]+)*(?::\d+)?(?![^<]*(?:<\/\w+>|\/?>))(.*)?\/?(.)*?$/i,
          a =
            /^(?:^|\s)((https?:\/\/)?(?:localhost|[\w-]+(?:\.[\w-]+)+)(:\d+)?(\/\S*)?)/i,
          l = /chrome-extension:\/\/([a-zA-Z]*)/gm,
          i = /^([a-zA-Z][a-zA-Z0-9+.-]*):(?:\/{1,3})?([a-zA-Z0-9_.-]*)$/,
          o = /^[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;
        function c() {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : { excludeSimpleDomains: !0 },
            { excludeSimpleDomains: t } = e,
            s = t ? '(?!'.concat(o.source, ')') : '';
          return RegExp(
            ''
              .concat(s, '((')
              .concat(n.source, ')|(')
              .concat(a.source, ')|(')
              .concat(r.source, ')|(')
              .concat(l.source, ')|(')
              .concat(i.source, '))'),
            'i'
          );
        }
      },
      67628: function (e, t, s) {
        'use strict';
        s.d(t, {
          Q: function () {
            return i;
          },
        });
        var n = s(97458),
          r = s(94059),
          a = s(73565),
          l = s(55228),
          i = e => {
            let { page: t, menu: s } = e;
            return (0, n.jsx)('div', {
              className: 'flex flex-col space-y-8 overflow-y-auto',
              'data-sentry-component': 'ProductMenu',
              'data-sentry-source-file': 'ProductMenu.tsx',
              children: (0, n.jsx)(r.ZP, {
                type: 'pills',
                'data-sentry-element': 'Menu',
                'data-sentry-source-file': 'ProductMenu.tsx',
                children: s.map((e, i) =>
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
                                    l.Z,
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
                        i !== s.length - 1 &&
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
          l = s(6464),
          i = s(26600);
        async function o(e) {
          let { projectRef: t, config: s } = e,
            { data: n, error: r } = await (0, l.r$)(
              '/platform/auth/{ref}/config',
              { params: { path: { ref: t } }, body: { ...s } }
            );
          return (r && (0, l.S3)(r), n);
        }
        let c = function () {
          let {
              onSuccess: e,
              onError: t,
              ...s
            } = arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : {},
            l = (0, n.NL)();
          return (0, r.D)(e => o(e), {
            async onSuccess(t, s, n) {
              let { projectRef: r } = s;
              (await l.invalidateQueries(i.o.authConfig(r)),
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
      20736: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return n;
          },
        });
        let n = (0, s(98266).Z)('Globe', [
          ['circle', { cx: '12', cy: '12', r: '10', key: '1mglay' }],
          [
            'path',
            {
              d: 'M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20',
              key: '13o1zl',
            },
          ],
          ['path', { d: 'M2 12h20', key: '9i4pu4' }],
        ]);
      },
      7539: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return j;
          },
        });
        var n = s(97458),
          r = s(12436),
          a = s(32691),
          l = s(99163),
          i = s(67628),
          o = s(72909),
          c = s(58326),
          d = s(83145),
          u = s.n(d),
          m = s(10947),
          x = s(90839),
          f = s(74334),
          h = s(37756);
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
                ...(h.Qy
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
            let { ref: e = 'default' } = (0, r.UO)(),
              t = (0, l.ar)();
            (0, o.kM)({ projectRef: e });
            let s = (0, a.useRouter)().pathname.split('/')[4];
            return (0, n.jsxs)(n.Fragment, {
              children: [
                (0, n.jsx)(i.Q, {
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
        var j = (0, c.Q)(e => {
          let { title: t, children: s } = e;
          return (0, n.jsx)(f.Z, {
            title: t || 'Authentication',
            product: 'Authentication',
            productMenu: (0, n.jsx)(y, {}),
            isBlocking: !1,
            'data-sentry-element': 'ProjectLayout',
            'data-sentry-component': 'AuthLayout',
            'data-sentry-source-file': 'AuthLayout.tsx',
            children: s,
          });
        });
      },
      35452: function (e, t, s) {
        'use strict';
        var n = s(97458),
          r = s(4839),
          a = s(359),
          l = s(90839);
        t.Z = e => {
          let {
              title: t = '',
              size: s = 'medium',
              children: i,
              ctaButtonLabel: o = '',
              infoButtonLabel: c = '',
              infoButtonUrl: d = '',
              onClickCta: u = () => {},
              loading: m = !1,
              disabled: x = !1,
              disabledMessage: f = '',
            } = e,
            h = (o && u) || (d && c);
          return (0, n.jsx)('div', {
            className: 'flex h-full w-full items-center justify-center',
            'data-sentry-component': 'ProductEmptyState',
            'data-sentry-source-file': 'ProductEmptyState.tsx',
            children: (0, n.jsx)('div', {
              className:
                'flex space-x-4 rounded border bg-surface-100 p-6 shadow-md',
              children: (0, n.jsx)('div', {
                className: 'flex flex-col',
                children: (0, n.jsxs)('div', {
                  className: ''.concat(
                    'medium' === s ? 'w-80' : 'w-[400px]',
                    ' space-y-4'
                  ),
                  children: [
                    (0, n.jsx)('h5', {
                      className: 'text-foreground',
                      children: t,
                    }),
                    (0, n.jsx)('div', {
                      className:
                        'flex flex-col space-y-2 text-foreground-light',
                      children: i,
                    }),
                    h &&
                      (0, n.jsxs)('div', {
                        className: 'flex items-center space-x-2',
                        children: [
                          o &&
                            u &&
                            (0, n.jsx)(a.u, {
                              type: 'primary',
                              onClick: u,
                              loading: m,
                              disabled: m || x,
                              tooltip: {
                                content: {
                                  side: 'bottom',
                                  text: x && f.length > 0 ? f : void 0,
                                },
                              },
                              children: o,
                            }),
                          d && c
                            ? (0, n.jsx)(l.z, {
                                type: 'default',
                                icon: (0, n.jsx)(r.Z, { strokeWidth: 1.5 }),
                                children: (0, n.jsx)('a', {
                                  target: '_blank',
                                  rel: 'noreferrer',
                                  href: d,
                                  children: c,
                                }),
                              })
                            : null,
                        ],
                      }),
                  ],
                }),
              }),
            }),
          });
        };
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
              helper: l,
              disabled: i = !1,
              isSubmitting: o,
              submitText: c = 'Save',
            } = e,
            d = o || i || (!s && void 0 !== s);
          return (0, n.jsxs)('div', {
            className: [
              'flex w-full items-center gap-2',
              l ? 'justify-between' : 'justify-end',
            ].join(' '),
            'data-sentry-component': 'FormActions',
            'data-sentry-source-file': 'FormActions.tsx',
            children: [
              l &&
                (0, n.jsx)('span', {
                  className: 'text-sm text-foreground-lighter',
                  children: l,
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
            return l;
          },
        });
        var n = s(97458),
          r = s(65092),
          a = s(67096);
        let l = e => {
          let {
            title: t,
            description: s,
            docsUrl: l,
            actions: i,
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
                children: [void 0 !== l && (0, n.jsx)(a.G, { href: l }), i],
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
            return i;
          },
          by: function () {
            return l;
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
        let l = e => {
            let { children: t, header: s, footer: r } = e;
            return (0, n.jsxs)(i, {
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
          i = (0, r.forwardRef)((e, t) => {
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
        i.displayName = i.displayName;
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
            return l;
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
              className: l,
            } = e;
            return (0, n.jsxs)('div', {
              id: s,
              className: [
                'grid grid-cols-12 gap-6 px-4 md:px-8 py-4 md:py-8',
                ''.concat(a ? ' opacity-30' : ' opacity-100'),
                ''.concat(l),
              ].join(' '),
              'data-sentry-component': 'FormSection',
              'data-sentry-source-file': 'FormSection.tsx',
              children: [r, t],
            });
          },
          l = e => {
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
          i = () =>
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
              className: l,
            } = e;
            return (0, n.jsx)('div', {
              className:
                '\n        relative col-span-12 flex flex-col gap-6 lg:col-span-7\n        '
                  .concat(a && '!col-span-12', '\n        ')
                  .concat(l, '\n      '),
              'data-sentry-component': 'FormSectionContent',
              'data-sentry-source-file': 'FormSection.tsx',
              children: s ? r.Children.map(t, () => (0, n.jsx)(i, {})) : t,
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
          l = s(94059),
          i = s(73565),
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
              textClassName: f = '',
              hoverText: h = '',
              label: p,
            } = e,
            y = (0, n.jsx)(l.ZP.Item, {
              icon: c,
              rounded: !0,
              active: s,
              onClick: x,
              children: (0, n.jsxs)('div', {
                className: 'flex w-full items-center justify-between gap-1',
                children: [
                  (0, n.jsxs)('div', {
                    title: h || ('string' == typeof t ? t : ''),
                    className: 'flex items-center gap-2 truncate w-full ' + f,
                    children: [
                      (0, n.jsxs)('span', {
                        className: 'truncate',
                        children: [t, ' '],
                      }),
                      void 0 !== p &&
                        (0, n.jsx)(i.C, {
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
                  children: y,
                })
            : y;
        };
      },
      756: function (e, t, s) {
        'use strict';
        s.d(t, {
          p: function () {
            return r;
          },
        });
        var n = s(97458);
        let r = () =>
          (0, n.jsxs)('div', {
            className:
              'flex w-full flex-row items-center justify-between gap-2',
            'data-sentry-component': 'HorizontalShimmerWithIcon',
            'data-sentry-source-file': 'Shimmers.tsx',
            children: [
              (0, n.jsxs)('div', {
                className: 'flex flex-row items-center gap-3',
                children: [
                  (0, n.jsx)('div', {
                    className: 'shimmering-loader h-6 w-6 rounded-full',
                  }),
                  (0, n.jsx)('div', {
                    className: 'shimmering-loader h-2 w-32 rounded',
                  }),
                ],
              }),
              (0, n.jsx)('div', {
                className: 'shimmering-loader h-6 w-20 rounded',
              }),
            ],
          });
      },
      11494: function (e, t, s) {
        'use strict';
        var n = s(97458),
          r = s(32691),
          a = s(35452);
        t.Z = e => {
          let { message: t } = e,
            s = (0, r.useRouter)(),
            { ref: l } = s.query;
          return (0, n.jsx)(a.Z, {
            title: 'No public tables found',
            ctaButtonLabel: 'Create a new table',
            onClickCta: () => {
              s.push('/project/'.concat(l, '/editor'));
            },
            'data-sentry-element': 'ProductEmptyState',
            'data-sentry-component': 'NoTableState',
            'data-sentry-source-file': 'NoTableState.tsx',
            children: (0, n.jsx)('p', {
              className: 'text-sm text-foreground-light',
              children: t,
            }),
          });
        };
      },
      14529: function (e, t, s) {
        'use strict';
        (s.r(t),
          s.d(t, {
            default: function () {
              return Y;
            },
          }));
        var n = s(97458),
          r = s(198),
          a = s(52983),
          l = s(34549),
          i = s(12436),
          o = s(67096),
          c = s(24083),
          d = s(756),
          u = s(72909),
          m = s(94724),
          x = s(10947),
          f = s(7756),
          h = s(42155),
          p = s(64890),
          y = s(65092),
          j = s(90839),
          v = s(78751),
          g = s(74304),
          N = s(36950),
          b = s(86848),
          w = s(5394),
          R = s(49142),
          L = s(36210),
          U = s(85682),
          C = s(78366),
          S = s(36155),
          k = s(66164);
        let A = e => {
          let { visible: t, allowList: s, onClose: r } = e,
            { ref: o } = (0, i.UO)(),
            { mutate: c, isLoading: d } = (0, m._)(),
            u = w.Ry({
              urls: w
                .Ry({
                  value: w
                    .Z_()
                    .min(1, 'Please provide a value')
                    .regex((0, k.y)(), 'Please provide a valid URL')
                    .refine(e => !s.includes(e), {
                      message: 'URL already exists in the allow list',
                    }),
                })
                .array()
                .default([]),
            }),
            x = { urls: [{ value: '' }] },
            f = (0, b.cI)({ resolver: (0, v.F)(u), defaultValues: x }),
            {
              fields: A,
              append: _,
              remove: Z,
            } = (0, b.Dq)({ name: 'urls', control: f.control });
          return (
            (0, a.useEffect)(() => {
              t && f.reset(x);
            }, [t]),
            (0, n.jsx)(h.Z, {
              hideFooter: !0,
              size: 'medium',
              className: '!max-w-[440px]',
              visible: t,
              onCancel: () => {
                (f.reset(x), r());
              },
              header: 'Add new redirect URLs',
              description:
                'This will add a URL to a list of allowed URLs that can interact with your Authentication services for this project.',
              'data-sentry-element': 'Modal',
              'data-sentry-component': 'AddNewURLModal',
              'data-sentry-source-file': 'AddNewURLModal.tsx',
              children: (0, n.jsx)(R.l0, {
                ...f,
                'data-sentry-element': 'Form_Shadcn_',
                'data-sentry-source-file': 'AddNewURLModal.tsx',
                children: (0, n.jsxs)('form', {
                  onSubmit: f.handleSubmit(e => {
                    let t = [...new Set(e.urls.map(e => e.value))],
                      n = s
                        .concat(t.map(e => e.replace(/,\s*$/, '')))
                        .toString();
                    if (n.length > 2048)
                      return l.Am.error(
                        'Too many redirect URLs, please remove some or try to use wildcards'
                      );
                    c(
                      { projectRef: o, config: { URI_ALLOW_LIST: n } },
                      {
                        onError: e => {
                          l.Am.error(
                            'Failed to add URL(s): '.concat(
                              null == e ? void 0 : e.message
                            )
                          );
                        },
                        onSuccess: () => {
                          (l.Am.success(
                            'Successfully added '
                              .concat(A.length, ' URL')
                              .concat(A.length > 1 ? 's' : '')
                          ),
                            f.reset(x),
                            r());
                        },
                      }
                    );
                  }),
                  children: [
                    (0, n.jsxs)(h.Z.Content, {
                      className: 'flex flex-col gap-y-2 px-0',
                      'data-sentry-element': 'unknown',
                      'data-sentry-source-file': 'AddNewURLModal.tsx',
                      children: [
                        (0, n.jsx)(S._, {
                          className: 'px-5',
                          'data-sentry-element': 'Label',
                          'data-sentry-source-file': 'AddNewURLModal.tsx',
                          children: 'URL',
                        }),
                        (0, n.jsx)(p.x, {
                          className: (0, y.cn)(A.length > 4 ? 'h-[220px]' : ''),
                          'data-sentry-element': 'ScrollArea',
                          'data-sentry-source-file': 'AddNewURLModal.tsx',
                          children: (0, n.jsx)('div', {
                            className: 'px-5 py-1 flex flex-col gap-y-2',
                            children: A.map((e, t) =>
                              (0, n.jsx)(
                                R.Wi,
                                {
                                  control: f.control,
                                  name: 'urls.'.concat(t, '.value'),
                                  render: e => {
                                    let { field: s } = e;
                                    return (0, n.jsx)(C.E, {
                                      className: '[&>div>div]:mt-0',
                                      children: (0, n.jsx)(R.NI, {
                                        children: (0, n.jsxs)('div', {
                                          className:
                                            'flex items-center gap-x-2 [&>div]:w-full',
                                          children: [
                                            (0, n.jsx)(U.I, {
                                              placeholder:
                                                'https://mydomain.com',
                                              ...s,
                                            }),
                                            (0, n.jsx)(j.z, {
                                              type: 'default',
                                              size: 'small',
                                              icon: (0, n.jsx)(g.Z, {}),
                                              className: 'px-2',
                                              disabled: 1 === A.length,
                                              onClick: () => Z(t),
                                            }),
                                          ],
                                        }),
                                      }),
                                    });
                                  },
                                },
                                e.id
                              )
                            ),
                          }),
                        }),
                        (0, n.jsx)('div', {
                          className: 'px-5',
                          children: (0, n.jsx)(j.z, {
                            type: 'default',
                            className: 'w-min',
                            icon: (0, n.jsx)(N.Z, { strokeWidth: 1.5 }),
                            onClick: () => _({ value: '' }),
                            'data-sentry-element': 'Button',
                            'data-sentry-source-file': 'AddNewURLModal.tsx',
                            children: 'Add URL',
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsx)(L.P3, {
                      'data-sentry-element': 'DialogSectionSeparator',
                      'data-sentry-source-file': 'AddNewURLModal.tsx',
                    }),
                    (0, n.jsx)(h.Z.Content, {
                      'data-sentry-element': 'unknown',
                      'data-sentry-source-file': 'AddNewURLModal.tsx',
                      children: (0, n.jsx)(j.z, {
                        block: !0,
                        htmlType: 'submit',
                        size: 'small',
                        disabled: d,
                        loading: d,
                        'data-sentry-element': 'Button',
                        'data-sentry-source-file': 'AddNewURLModal.tsx',
                        children: 'Save URLs',
                      }),
                    }),
                  ],
                }),
              }),
            })
          );
        };
        var _ = s(20736),
          Z = s(359);
        let z = e => {
          let { title: t, description: s } = e;
          return (0, n.jsxs)('div', {
            className:
              'flex flex-col items-center justify-center gap-6 text-center',
            'data-sentry-component': 'EmptyListState',
            'data-sentry-source-file': 'EmptyListState.tsx',
            children: [
              (0, n.jsxs)('div', {
                className: 'flex flex-col gap-1',
                children: [
                  (0, n.jsx)('div', {
                    className:
                      'relative flex h-4 w-32 items-center justify-center rounded border border-dashed px-2',
                  }),
                  (0, n.jsx)('div', {
                    className:
                      'relative flex h-4 w-32 items-center justify-center rounded border border-dashed px-2',
                  }),
                ],
              }),
              (0, n.jsxs)('div', {
                className: 'flex flex-col gap-1 px-5',
                children: [
                  (0, n.jsx)('h3', {
                    className: 'text-foreground text-sm',
                    children: t,
                  }),
                  (0, n.jsx)('p', {
                    className: 'text-foreground-lighter text-sm',
                    children: s,
                  }),
                ],
              }),
            ],
          });
        };
        s(11494);
        var F = s(90817),
          T = s(61893);
        let M = e => {
            let {
              children: t,
              isSelected: s = !1,
              className: r,
              onClick: a,
            } = e;
            return (0, n.jsx)('div', {
              className: (0, y.cn)(
                'bg-surface-100 hover:bg-surface-200 border-default text-foreground flex items-center',
                'transition justify-between gap-2 border px-6 py-4 text-sm',
                'first:rounded-tr first:rounded-tl last:rounded-br last:rounded-bl',
                s ? '!bg-surface-300' : '',
                a ? 'cursor-pointer' : '',
                r
              ),
              onClick: e => {
                a && a(e);
              },
              'data-sentry-component': 'ValueContainer',
              'data-sentry-source-file': 'ValueContainer.tsx',
              children: t,
            });
          },
          P = e => {
            let {
                allowList: t,
                selectedUrls: s,
                onSelectUrl: a,
                onSelectAddURL: l,
                onSelectRemoveURLs: i,
                onSelectClearSelection: o,
              } = e,
              c = (0, F.Xo)(r.KA.UPDATE, 'custom_config_gotrue'),
              d = (e, n) => {
                if (e.shiftKey) {
                  let e = t.indexOf(n),
                    r = t.indexOf(s[s.length - 1]),
                    l = e > r ? t.slice(r + 1, e + 1) : t.slice(e, r);
                  if (l.filter(e => !s.includes(e)).length > 0)
                    a([...s, ...(e > r ? l : l.reverse())]);
                  else {
                    let e = l.concat([s[s.length - 1]]);
                    a(s.filter(t => !e.includes(t)));
                  }
                } else a(s.includes(n) ? s.filter(e => e !== n) : [...s, n]);
              };
            return (0, n.jsxs)('div', {
              className: '-space-y-px',
              'data-sentry-component': 'RedirectUrlList',
              'data-sentry-source-file': 'RedirectUrlList.tsx',
              children: [
                (0, n.jsx)(M, {
                  className: 'py-3 flex items-center justify-end',
                  'data-sentry-element': 'ValueContainer',
                  'data-sentry-source-file': 'RedirectUrlList.tsx',
                  children:
                    s.length > 0
                      ? (0, n.jsxs)('div', {
                          className: 'flex items-center gap-x-2',
                          children: [
                            (0, n.jsx)(j.z, {
                              type: 'default',
                              onClick: () => o(),
                              children: 'Clear selection',
                            }),
                            (0, n.jsxs)(Z.u, {
                              type: 'default',
                              disabled: !c,
                              tooltip: {
                                content: {
                                  side: 'bottom',
                                  text: c
                                    ? void 0
                                    : 'You need additional permissions to remove redirect URLs',
                                },
                              },
                              icon: (0, n.jsx)(g.Z, {}),
                              onClick: () => (s.length > 0 ? i() : null),
                              children: ['Remove (', s.length, ')'],
                            }),
                          ],
                        })
                      : (0, n.jsx)(Z.u, {
                          disabled: !c,
                          onClick: () => l(),
                          tooltip: {
                            content: {
                              side: 'bottom',
                              text: c
                                ? void 0
                                : 'You need additional permissions to update redirect URLs',
                            },
                          },
                          children: 'Add URL',
                        }),
                }),
                t.length > 0
                  ? (0, n.jsx)(n.Fragment, {
                      children: t.map(e => {
                        let t = s.includes(e);
                        return (0, n.jsx)(
                          M,
                          {
                            isSelected: t,
                            onClick: t => d(t, e),
                            children: (0, n.jsxs)('div', {
                              className:
                                'flex items-center gap-4 font-mono group w-full',
                              children: [
                                (0, n.jsx)('div', {
                                  className:
                                    'w-5 h-5 flex items-center justify-center',
                                  children: (0, n.jsx)(T.X, {
                                    checked: t,
                                    onChange: t => d(t, e),
                                  }),
                                }),
                                (0, n.jsx)(_.Z, {
                                  strokeWidth: 2,
                                  size: 14,
                                  className: 'text-foreground-lighter',
                                }),
                                (0, n.jsx)('span', {
                                  className: 'text-sm flex-grow',
                                  children: e,
                                }),
                              ],
                            }),
                          },
                          e
                        );
                      }),
                    })
                  : (0, n.jsx)('div', {
                      className:
                        'flex items-center border-overlay bg-studio text-foreground justify-center gap-2 rounded border px-6 py-8 text-sm',
                      children: (0, n.jsx)(z, {
                        title: 'No Redirect URLs',
                        description:
                          'Auth providers may need a URL to redirect back to',
                      }),
                    }),
                t.length > 0 &&
                  (0, n.jsx)(M, {
                    className: 'py-3 flex items-center justify-between',
                    children: (0, n.jsxs)('p', {
                      className: 'pl-9 text-foreground-muted text-sm',
                      children: ['Total URLs: ', t.length],
                    }),
                  }),
              ],
            });
          },
          E = () => {
            let { ref: e } = (0, i.UO)(),
              {
                data: t,
                error: s,
                isLoading: r,
                isError: v,
                isSuccess: g,
              } = (0, u.$E)({ projectRef: e }),
              { mutate: N, isLoading: b } = (0, m._)(),
              w = (0, a.useMemo)(
                () =>
                  (null == t ? void 0 : t.URI_ALLOW_LIST)
                    ? t.URI_ALLOW_LIST.split(/\s*[,]+\s*/).filter(e => e)
                    : [],
                [null == t ? void 0 : t.URI_ALLOW_LIST]
              ),
              [R, L] = (0, a.useState)(!1),
              [U, C] = (0, a.useState)(!1),
              [S, k] = (0, a.useState)([]),
              _ = async t => {
                if (!t || 0 === t.length) return;
                let s = w.filter(e => !S.includes(e)).join(',');
                if (s.length > 2048)
                  return l.Am.error(
                    'Too many redirect URLs, please remove some or try to use wildcards'
                  );
                N(
                  { projectRef: e, config: { URI_ALLOW_LIST: s } },
                  {
                    onError: e => {
                      l.Am.error(
                        'Failed to remove URL(s): '.concat(
                          null == e ? void 0 : e.message
                        )
                      );
                    },
                    onSuccess: () => {
                      (k([]),
                        C(!1),
                        l.Am.success('Successfully removed URL(s)'));
                    },
                  }
                );
              };
            return (0, n.jsxs)('div', {
              'data-sentry-component': 'RedirectUrls',
              'data-sentry-source-file': 'RedirectUrls.tsx',
              children: [
                (0, n.jsxs)('div', {
                  className: 'flex items-center justify-between mb-6',
                  children: [
                    (0, n.jsx)(c.p, {
                      className: 'mb-0',
                      title: 'Redirect URLs',
                      description:
                        'URLs that auth providers are permitted to redirect to post authentication. Wildcards are allowed, for example, https://*.domain.com',
                      'data-sentry-element': 'FormHeader',
                      'data-sentry-source-file': 'RedirectUrls.tsx',
                    }),
                    (0, n.jsx)(o.G, {
                      href: 'https://supabase.com/docs/guides/auth/concepts/redirect-urls',
                      'data-sentry-element': 'DocsButton',
                      'data-sentry-source-file': 'RedirectUrls.tsx',
                    }),
                  ],
                }),
                r &&
                  (0, n.jsxs)(n.Fragment, {
                    children: [
                      (0, n.jsx)(M, { children: (0, n.jsx)(d.p, {}) }),
                      (0, n.jsx)(M, { children: (0, n.jsx)(d.p, {}) }),
                    ],
                  }),
                v &&
                  (0, n.jsxs)(x.bZ, {
                    variant: 'destructive',
                    children: [
                      (0, n.jsx)(f.aN, {}),
                      (0, n.jsx)(x.Cd, {
                        children: 'Failed to retrieve auth configuration',
                      }),
                      (0, n.jsx)(x.X, { children: s.message }),
                    ],
                  }),
                g &&
                  (0, n.jsx)(P, {
                    allowList: w,
                    selectedUrls: S,
                    onSelectUrl: k,
                    onSelectAddURL: () => L(!0),
                    onSelectClearSelection: () => k([]),
                    onSelectRemoveURLs: () => C(!0),
                  }),
                (0, n.jsx)(A, {
                  visible: R,
                  allowList: w,
                  onClose: () => L(!1),
                  'data-sentry-element': 'AddNewURLModal',
                  'data-sentry-source-file': 'RedirectUrls.tsx',
                }),
                (0, n.jsxs)(h.Z, {
                  hideFooter: !0,
                  size: 'large',
                  visible: U,
                  header: 'Remove URLs',
                  onCancel: () => {
                    (k([]), C(!1));
                  },
                  'data-sentry-element': 'Modal',
                  'data-sentry-source-file': 'RedirectUrls.tsx',
                  children: [
                    (0, n.jsxs)(h.Z.Content, {
                      className: 'flex flex-col gap-y-2',
                      'data-sentry-element': 'unknown',
                      'data-sentry-source-file': 'RedirectUrls.tsx',
                      children: [
                        (0, n.jsxs)('p', {
                          className: 'mb-2 text-sm text-foreground-light',
                          children: [
                            'Are you sure you want to remove the following ',
                            S.length,
                            ' URL',
                            S.length > 1 ? 's' : '',
                            '?',
                          ],
                        }),
                        (0, n.jsx)(p.x, {
                          className: (0, y.cn)(S.length > 4 ? 'h-[250px]' : ''),
                          'data-sentry-element': 'ScrollArea',
                          'data-sentry-source-file': 'RedirectUrls.tsx',
                          children: (0, n.jsx)('div', {
                            className: 'flex flex-col -space-y-1',
                            children: S.map(e =>
                              (0, n.jsx)(
                                M,
                                {
                                  className: 'px-4 py-3 hover:bg-surface-100',
                                  children: e,
                                },
                                e
                              )
                            ),
                          }),
                        }),
                        (0, n.jsx)('p', {
                          className: 'text-foreground-light text-sm',
                          children:
                            'These URLs will no longer work with your authentication configuration.',
                        }),
                      ],
                    }),
                    (0, n.jsx)(h.Z.Separator, {
                      'data-sentry-element': 'unknown',
                      'data-sentry-source-file': 'RedirectUrls.tsx',
                    }),
                    (0, n.jsxs)(h.Z.Content, {
                      className: 'flex items-center gap-x-2',
                      'data-sentry-element': 'unknown',
                      'data-sentry-source-file': 'RedirectUrls.tsx',
                      children: [
                        (0, n.jsx)(j.z, {
                          block: !0,
                          type: 'default',
                          size: 'medium',
                          onClick: () => {
                            (k([]), C(!1));
                          },
                          'data-sentry-element': 'Button',
                          'data-sentry-source-file': 'RedirectUrls.tsx',
                          children: 'Cancel',
                        }),
                        (0, n.jsx)(j.z, {
                          block: !0,
                          size: 'medium',
                          type: 'warning',
                          loading: b,
                          onClick: () => _(S),
                          'data-sentry-element': 'Button',
                          'data-sentry-source-file': 'RedirectUrls.tsx',
                          children: b ? 'Removing...' : 'Remove URL',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
        var I = s(18648),
          O = s(59461),
          V = s(87696),
          B = s(46993),
          D = s(19540),
          W = s(51571),
          X = s(44735);
        let $ = (0, I.object)({
          SITE_URL: (0, I.string)().required('Must have a Site URL'),
        });
        var G = () => {
            let { ref: e } = (0, i.UO)(),
              {
                data: t,
                error: s,
                isLoading: o,
                isError: d,
                isSuccess: f,
              } = (0, u.$E)({ projectRef: e }),
              { mutate: h, isLoading: p } = (0, m._)(),
              y = 'auth-config-general-form',
              j = (0, F.Xo)(r.KA.UPDATE, 'custom_config_gotrue'),
              v = { SITE_URL: null == t ? void 0 : t.SITE_URL };
            return d
              ? (0, n.jsxs)(x.bZ, {
                  variant: 'destructive',
                  children: [
                    (0, n.jsx)(X.Z, { strokeWidth: 2 }),
                    (0, n.jsx)(x.Cd, {
                      children: 'Failed to retrieve auth configuration',
                    }),
                    (0, n.jsx)(x.X, { children: s.message }),
                  ],
                })
              : (0, n.jsx)(D.Z, {
                  id: y,
                  initialValues: v,
                  onSubmit: (t, s) => {
                    let { resetForm: n } = s;
                    h(
                      { projectRef: e, config: { ...t } },
                      {
                        onError: () => {
                          l.Am.error('Failed to update settings');
                        },
                        onSuccess: () => {
                          (l.Am.success('Successfully updated settings'),
                            n({ values: t, initialValues: t }));
                        },
                      }
                    );
                  },
                  validationSchema: $,
                  'data-sentry-element': 'Form',
                  'data-sentry-component': 'SiteUrl',
                  'data-sentry-source-file': 'SiteUrl.tsx',
                  children: e => {
                    let {
                        handleReset: t,
                        resetForm: s,
                        values: r,
                        initialValues: l,
                      } = e,
                      i = JSON.stringify(r) !== JSON.stringify(l);
                    return (
                      (0, a.useEffect)(() => {
                        f && s({ values: v, initialValues: v });
                      }, [f]),
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)(c.p, {
                            title: 'Site URL',
                            description:
                              "Configure the default redirect URL used when a redirect URL is not specified or doesn't match one from the allow list. This value is also exposed as a template variable in the email templates section. Wildcards cannot be used here.",
                          }),
                          (0, n.jsx)(V.by, {
                            disabled: !0,
                            footer: (0, n.jsx)('div', {
                              className: 'flex py-4 px-8',
                              children: (0, n.jsx)(O.i, {
                                form: y,
                                isSubmitting: p,
                                hasChanges: i,
                                handleReset: t,
                                disabled: !j,
                                helper: j
                                  ? void 0
                                  : 'You need additional permissions to update authentication settings',
                              }),
                            }),
                            children: (0, n.jsx)(B.hj, {
                              children: (0, n.jsx)(B.B4, {
                                loading: o,
                                children: (0, n.jsx)(W.Z, {
                                  id: 'SITE_URL',
                                  size: 'small',
                                  label: 'Site URL',
                                  disabled: !j,
                                }),
                              }),
                            }),
                          }),
                        ],
                      })
                    );
                  },
                });
          },
          H = s(7539),
          Q = s(99026),
          q = s(61767);
        let K = () => {
          let e = (0, F.Xo)(r.KA.READ, 'custom_config_gotrue');
          return (0, F.N4)() && !e
            ? (0, n.jsx)(q.Z, {
                isFullPage: !0,
                resourceText: "access your project's email settings",
              })
            : (0, n.jsxs)(Q.l, {
                children: [(0, n.jsx)(G, {}), (0, n.jsx)(E, {})],
              });
        };
        K.getLayout = e => (0, n.jsx)(H.Z, { children: e });
        var Y = K;
      },
      85682: function (e, t, s) {
        'use strict';
        s.d(t, {
          I: function () {
            return u;
          },
        });
        var n = s(97458),
          r = s(58596),
          a = s(52983),
          l = s(65092),
          i = s(56740),
          o = s(90839),
          c = s(25843);
        function d(e) {
          let { icon: t, className: s } = e;
          return (0, n.jsx)('div', {
            className: (0, l.cn)(
              'absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-foreground-light',
              s
            ),
            'data-sentry-component': 'InputIconContainer',
            'data-sentry-source-file': 'InputIconContainer.tsx',
            children: t,
          });
        }
        let u = (0, a.forwardRef)((e, t) => {
          let {
              copy: s,
              icon: u,
              reveal: m = !1,
              actions: x,
              onCopy: f,
              iconContainerClassName: h,
              containerClassName: p,
              ...y
            } = e,
            [j, v] = (0, a.useState)('Copy'),
            [g, N] = (0, a.useState)(!0),
            b = (0, c.Z)('input'),
            w = [];
          return (
            u && w.push(b.with_icon),
            (0, n.jsxs)('div', {
              className: (0, l.cn)('relative', p),
              children: [
                (0, n.jsx)(i.I, {
                  ref: t,
                  ...y,
                  onCopy: f,
                  value: m && g ? '**** **** **** ****' : y.value,
                  className: (0, l.cn)(...w, y.className),
                }),
                u && (0, n.jsx)(d, { icon: u, className: h }),
                s || x
                  ? (0, n.jsxs)('div', {
                      className: b.actions_container,
                      children: [
                        s && !(m && g)
                          ? (0, n.jsx)(o.z, {
                              size: 'tiny',
                              type: 'default',
                              icon: (0, n.jsx)(r.Z, {
                                size: 16,
                                className: 'text-foreground-muted',
                              }),
                              onClick: () => {
                                var e, t;
                                return (
                                  (e = y.value),
                                  void (
                                    null ===
                                      (t = navigator.clipboard.writeText(e)) ||
                                    void 0 === t ||
                                    t.then(
                                      function () {
                                        (v('Copied'),
                                          setTimeout(function () {
                                            v('Copy');
                                          }, 3e3),
                                          null == f || f());
                                      },
                                      function () {
                                        v('Failed to copy');
                                      }
                                    )
                                  )
                                );
                              },
                              children: j,
                            })
                          : null,
                        m && g
                          ? (0, n.jsx)(o.z, {
                              size: 'tiny',
                              type: 'default',
                              onClick: function () {
                                N(!1);
                              },
                              children: 'Reveal',
                            })
                          : null,
                        x && x,
                      ],
                    })
                  : null,
              ],
            })
          );
        });
      },
      19540: function (e, t, s) {
        'use strict';
        s.d(t, {
          Z: function () {
            return o;
          },
        });
        var n = s(97458),
          r = s(52983),
          a = s(68985),
          l = s(11499);
        function i(e, t) {
          if (!t.error) return (delete e[t.key], e);
          if (t) return { ...e, [t.key]: t.error };
          throw Error();
        }
        function o(e) {
          let { validate: t, ...s } = e,
            [o, c] = (0, r.useReducer)(i, null),
            d = (0, a.TA)({
              validateOnBlur: !0,
              ...s,
              validationSchema: s.validationSchema,
              initialValues: s.initialValues,
              onSubmit: s.onSubmit,
              validate:
                t ||
                function () {
                  return o;
                },
            });
          return (0, n.jsx)('form', {
            id: s.id,
            name: s.name,
            onSubmit: d.handleSubmit,
            className: s.className,
            style: s.style,
            method: 'POST',
            'data-sentry-component': 'Form',
            'data-sentry-source-file': 'Form.tsx',
            children: (0, n.jsx)(l.o, {
              values: d.values,
              errors: d.errors,
              formContextOnChange: d.handleChange,
              handleBlur: d.handleBlur,
              touched: d.touched,
              fieldLevelValidation: function (e, t) {
                c({ key: e, error: t });
              },
              'data-sentry-element': 'FormContextProvider',
              'data-sentry-source-file': 'Form.tsx',
              children: s.children({
                errors: d.errors,
                touched: d.touched,
                isSubmitting: d.isSubmitting,
                isValidating: d.isValidating,
                submitCount: d.submitCount,
                initialValues: d.initialValues,
                values: d.values,
                handleReset: d.handleReset,
                resetForm: d.resetForm,
                setFieldValue: d.setFieldValue,
              }),
            }),
          });
        }
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
          l = s(65092);
        function i(e) {
          let { children: t, className: s, tag: r = 'div', style: a } = e;
          return (0, n.jsx)(''.concat(r), {
            style: a,
            'data-sentry-element': 'CustomTag',
            'data-sentry-component': 'Typography',
            'data-sentry-source-file': 'Typography.tsx',
            children: t,
          });
        }
        ((i.Title = function (e) {
          let { className: t, level: s = 1, children: r, style: a } = e;
          return (0, n.jsx)('h'.concat(s), {
            style: a,
            'data-sentry-element': 'CustomTag',
            'data-sentry-component': 'Title',
            'data-sentry-source-file': 'Title.tsx',
            children: r,
          });
        }),
          (i.Text = function (e) {
            let {
              className: t,
              children: s,
              style: r,
              type: a,
              disabled: l,
              mark: i,
              code: o,
              keyboard: c,
              underline: d,
              strikethrough: u,
              strong: m,
              small: x,
            } = e;
            return o
              ? (0, n.jsx)('code', { style: r, children: s })
              : i
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
          (i.Link = function (e) {
            let {
              children: t,
              target: s = '_blank',
              href: r,
              className: a,
              onClick: l,
              style: i,
            } = e;
            return (0, n.jsx)('a', {
              onClick: l,
              href: r,
              target: s,
              rel: 'noopener noreferrer',
              style: i,
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
            type: l = 'text',
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
              type: l,
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
              rounded: i,
              onClick: o,
              doNotCloseOverlay: c = !1,
              showActiveBar: u = !1,
              style: m,
            } = e,
            x = (0, a.Z)('menu'),
            { type: f } = d(),
            h = [x.item.base];
          (h.push(x.item.variants[f].base),
            r
              ? h.push(x.item.variants[f].active)
              : h.push(x.item.variants[f].normal));
          let p = [x.item.content.base];
          r ? p.push(x.item.content.active) : p.push(x.item.content.normal);
          let y = [x.item.icon.base];
          return (
            r ? y.push(x.item.icon.active) : y.push(x.item.icon.normal),
            (0, n.jsxs)('li', {
              role: 'menuitem',
              className: (0, l.cn)('outline-none', h),
              style: m,
              onClick: o,
              'aria-current': r ? 'page' : void 0,
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
            let { children: t, icon: s, title: r } = e,
              l = (0, a.Z)('menu'),
              { type: i } = d();
            return (0, n.jsxs)('div', {
              className: [l.group.base, l.group.variants[i]].join(' '),
              'data-sentry-component': 'Group',
              'data-sentry-source-file': 'Menu.tsx',
              children: [
                s &&
                  (0, n.jsx)('span', { className: l.group.icon, children: s }),
                (0, n.jsx)('span', { className: l.group.content, children: r }),
                t,
              ],
            });
          }),
          (u.Misc = function (e) {
            let { children: t } = e;
            return (0, n.jsx)('div', {
              'data-sentry-component': 'Misc',
              'data-sentry-source-file': 'Menu.tsx',
              children: (0, n.jsx)(i.Text, {
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
          659, 7612, 4637, 9344, 7726, 6739, 3302, 3898, 8985, 5518, 793, 3594,
          3861, 6120, 7094, 4334, 9774, 2888, 179,
        ],
        function () {
          return e((e.s = 3974));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
