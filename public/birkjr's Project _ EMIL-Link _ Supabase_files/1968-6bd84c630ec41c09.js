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
      (e._sentryDebugIds[t] = '7639ac2a-1389-42f5-8789-f020d97446a3'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-7639ac2a-1389-42f5-8789-f020d97446a3'));
  } catch (e) {}
})();
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [1968],
  {
    6258: function (e, t, n) {
      n.d(t, {
        Bv: function () {
          return s;
        },
        IC: function () {
          return r;
        },
        NM: function () {
          return a;
        },
      });
      let a = [
          'anon',
          'service_role',
          'authenticated',
          'authenticator',
          'dashboard_user',
          'supabase_admin',
          'supabase_auth_admin',
          'supabase_functions_admin',
          'supabase_read_only_user',
          'supabase_realtime_admin',
          'supabase_replication_admin',
          'supabase_storage_admin',
          'pgbouncer',
          'pgsodium_keyholder',
          'pgsodium_keyiduser',
          'pgsodium_keymaker',
          'pgtle_admin',
        ],
        s = [
          'postgres',
          'pgbouncer',
          'supabase_admin',
          'supabase_auth_admin',
          'supabase_storage_admin',
          'dashboard_user',
          'authenticator',
          'pg_database_owner',
          'pg_read_all_data',
          'pg_write_all_data',
        ],
        r = {
          canLogin: {
            disabled: !1,
            description: 'User can login',
            grant_by_dashboard: !0,
          },
          canCreateRole: {
            disabled: !1,
            description: 'User can create roles',
            grant_by_dashboard: !0,
          },
          canCreateDb: {
            disabled: !1,
            description: 'User can create databases',
            grant_by_dashboard: !0,
          },
          canBypassRls: {
            disabled: !1,
            description: 'User bypasses every row level security policy',
            grant_by_dashboard: !0,
          },
          isSuperuser: {
            disabled: !0,
            description: 'User is a Superuser',
            grant_by_dashboard: !1,
          },
          isReplicationRole: {
            disabled: !1,
            description:
              'User can initiate streaming replication and put the system in and out of backup mode',
            grant_by_dashboard: !0,
          },
        };
    },
    55214: function (e, t, n) {
      n.d(t, {
        fA: function () {
          return c;
        },
        x4: function () {
          return d;
        },
      });
      var a = n(49437),
        s = n(28894),
        r = n(25878),
        i = n(56819);
      let l = a.Z.roles.list();
      async function o(e, t) {
        let { projectRef: n, connectionString: a } = e,
          { result: s } = await (0, r.R)(
            {
              projectRef: n,
              connectionString: a,
              sql: l.sql,
              queryKey: ['database-roles'],
            },
            t
          );
        return s;
      }
      let d = function (e) {
        let { projectRef: t, connectionString: n } = e,
          { enabled: a = !0, ...r } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return (0, s.a)(
          i.E.databaseRoles(t),
          e => {
            let { signal: a } = e;
            return o({ projectRef: t, connectionString: n }, a);
          },
          { enabled: a && void 0 !== t, ...r }
        );
      };
      function c(e, t) {
        return e.invalidateQueries(i.E.databaseRoles(t));
      }
    },
    99006: function (e, t, n) {
      var a = n(97458),
        s = n(85229),
        r = n(71607),
        i = n.n(r),
        l = n(52983),
        o = n(88971),
        d = n(37462);
      t.Z = e => {
        let {
            queryId: t,
            language: n = 'pgsql',
            defaultValue: r = '',
            readOnly: c = !1,
            contextmenu: u = !0,
            onInputChange: p = i(),
          } = e,
          m = (0, s.useMonaco)(),
          { project: f } = (0, o.d2)(),
          h = (0, l.useRef)();
        return (
          (0, l.useEffect)(() => {
            if (m) {
              let e = m.languages.registerDocumentFormattingEditProvider(
                'pgsql',
                {
                  async provideDocumentFormattingEdits(e) {
                    let t = e.getValue(),
                      n = (0, d._)(t);
                    return [{ range: e.getFullModelRange(), text: n }];
                  },
                }
              );
              return () => {
                e.dispose();
              };
            }
          }, [m]),
          (0, l.useEffect)(() => {
            if (h.current) {
              var e;
              null === (e = h.current) ||
                void 0 === e ||
                e.changeViewZones(e => {
                  e.addZone({
                    afterLineNumber: 0,
                    heightInPx: 4,
                    domNode: document.createElement('div'),
                  });
                });
            }
          }, [t]),
          (0, a.jsx)(s.default, {
            className: 'monaco-editor',
            theme: 'supabase',
            defaultLanguage: n,
            defaultValue: r,
            path: t,
            loading: (0, a.jsx)(
              () =>
                (0, a.jsx)('h4', {
                  className: 'text-lg',
                  'data-sentry-component': 'Loading',
                  'data-sentry-source-file': 'SqlEditor.tsx',
                  children: 'Loading',
                }),
              {}
            ),
            options: {
              readOnly: c,
              tabSize: 2,
              fontSize: 13,
              minimap: { enabled: !1 },
              wordWrap: 'on',
              fixedOverflowWidgets: !0,
              contextmenu: u,
            },
            onMount: (e, t) => {
              ((h.current = e),
                e.changeViewZones(e => {
                  e.addZone({
                    afterLineNumber: 0,
                    heightInPx: 4,
                    domNode: document.createElement('div'),
                  });
                }));
            },
            onChange: p,
            'data-sentry-element': 'Editor',
            'data-sentry-component': 'SqlEditor',
            'data-sentry-source-file': 'SqlEditor.tsx',
          })
        );
      };
    },
    35336: function (e, t, n) {
      var a = n(97458),
        s = n(198),
        r = n(83145),
        i = n.n(r),
        l = n(69951),
        o = n(90817),
        d = n(75541),
        c = n(62432),
        u = n(21786),
        p = n(65092),
        m = n(90839),
        f = n(359);
      t.Z = e => {
        var t, n, r;
        let {
            icon: h,
            primaryText: x,
            secondaryText: b,
            addon: v,
            buttonText: y,
            disabled: g = !1,
          } = e,
          j = (0, c.Vm)(),
          _ = (0, d.l)(),
          { data: k } = (0, l.Gl)({ orgSlug: null == _ ? void 0 : _.slug }),
          N =
            null == k
              ? void 0
              : null === (t = k.plan) || void 0 === t
                ? void 0
                : t.id,
          w = (0, o.Xo)(s.KA.BILLING_WRITE, 'stripe.subscriptions'),
          C = (0, u.P)('disableProjectCreationAndUpdate');
        return (0, a.jsx)('div', {
          className: (0, p.cn)(
            'block w-full rounded border border-opacity-20 py-4 px-6',
            'border-overlay bg-surface-200'
          ),
          'data-sentry-component': 'UpgradeToPro',
          'data-sentry-source-file': 'UpgradeToPro.tsx',
          children: (0, a.jsxs)('div', {
            className: 'flex gap-x-3',
            children: [
              h && (0, a.jsx)('div', { className: 'mt-1', children: h }),
              (0, a.jsxs)('div', {
                className:
                  'flex flex-col md:flex-row w-full md:items-center justify-between gap-4 md:gap-x-8 xl:gap-x-32',
                children: [
                  (0, a.jsxs)('div', {
                    className: 'space-y-1',
                    children: [
                      (0, a.jsx)('p', { className: 'text-sm', children: x }),
                      (0, a.jsx)('div', {
                        children: (0, a.jsx)('p', {
                          className: 'text-sm text-foreground-light',
                          children: b,
                        }),
                      }),
                    ],
                  }),
                  !w || C
                    ? (0, a.jsx)(f.u, {
                        disabled: !0,
                        type: 'primary',
                        tooltip: {
                          content: {
                            side: 'bottom',
                            text: C
                              ? 'Subscription changes are currently disabled, our engineers are working on a fix'
                              : w
                                ? void 0
                                : 'You need additional permissions to amend subscriptions',
                          },
                        },
                        children: 'Reset database password',
                      })
                    : (0, a.jsx)(m.z, {
                        asChild: !0,
                        type: 'primary',
                        disabled: !w || C || g,
                        children: (0, a.jsx)(i(), {
                          href:
                            'free' === N
                              ? '/org/'.concat(
                                  null !== (n = null == _ ? void 0 : _.slug) &&
                                    void 0 !== n
                                    ? n
                                    : '_',
                                  '/billing?panel=subscriptionPlan'
                                )
                              : '/project/'
                                  .concat(
                                    null !== (r = null == j ? void 0 : j.ref) &&
                                      void 0 !== r
                                      ? r
                                      : '_',
                                    '/settings/addons?panel='
                                  )
                                  .concat(v),
                          children:
                            y ||
                            ('free' === N ? 'Upgrade to Pro' : 'Enable add on'),
                        }),
                      }),
                ],
              }),
            ],
          }),
        });
      };
    },
    10046: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(97458),
        s = n(52983),
        r = n(68249),
        i = n(25843),
        l = n(11499);
      let o = (0, s.createContext)({ parentCallback: e => {}, parentSize: '' });
      function d(e) {
        let {
            className: t,
            id: n = '',
            name: s = '',
            label: r,
            afterLabel: d,
            beforeLabel: c,
            description: u,
            checked: p,
            value: m,
            onChange: f,
            onBlur: h,
            size: x = 'medium',
            disabled: b = !1,
            ...v
          } = e,
          { formContextOnChange: y, values: g, handleBlur: j } = (0, l.G)(),
          _ = (0, i.Z)('checkbox');
        return (0, a.jsx)(o.Consumer, {
          'data-sentry-element': 'unknown',
          'data-sentry-component': 'Checkbox',
          'data-sentry-source-file': 'Checkbox.tsx',
          children: e => {
            let { parentCallback: i, parentSize: l } = e,
              o =
                n ||
                s ||
                (r
                  ? r
                      .toLowerCase()
                      .replace(/^[^A-Z0-9]+/gi, '')
                      .replace(/ /g, '-')
                  : void 0);
            x = l || x;
            let k = s || o,
              N = null != p ? p : void 0,
              w = [_.container];
            return (
              t && w.push(t),
              g && void 0 === p && (N = g[n || s]),
              (0, a.jsxs)('div', {
                className: w.join(' '),
                children: [
                  (0, a.jsx)('input', {
                    id: o,
                    name: k,
                    type: 'checkbox',
                    className: [_.base, _.size[x]].join(' '),
                    onChange: function (e) {
                      (i && i(e), f && f(e), y && y(e));
                    },
                    onBlur: function (e) {
                      (j &&
                        setTimeout(() => {
                          j(e);
                        }, 100),
                        h && h(e));
                    },
                    checked: N,
                    value: m || o,
                    disabled: b,
                    ...v,
                  }),
                  (0, a.jsxs)('label', {
                    className: [_.label.base, _.label[x]].join(' '),
                    htmlFor: o,
                    children: [
                      (0, a.jsxs)('span', {
                        children: [
                          c &&
                            (0, a.jsx)('span', {
                              className: [
                                _.label_before.base,
                                _.label_before[x],
                              ].join(' '),
                              children: c,
                            }),
                          r,
                          d &&
                            (0, a.jsx)('span', {
                              className: [
                                _.label_after.base,
                                _.label_after[x],
                              ].join(' '),
                              children: d,
                            }),
                        ],
                      }),
                      u &&
                        (0, a.jsx)('p', {
                          className: [
                            _.description.base,
                            _.description[x],
                          ].join(' '),
                          children: u,
                        }),
                    ],
                  }),
                ],
              })
            );
          },
        });
      }
      d.Group = function (e) {
        let {
            id: t,
            layout: n = 'vertical',
            error: s,
            descriptionText: l,
            label: c,
            afterLabel: u,
            beforeLabel: p,
            labelOptional: m,
            children: f,
            className: h,
            options: x,
            onChange: b,
            size: v = 'medium',
          } = e,
          y = (0, i.Z)('checkbox');
        return (0, a.jsx)(r.l, {
          label: c,
          afterLabel: u,
          beforeLabel: p,
          labelOptional: m,
          layout: n,
          id: t,
          error: s,
          descriptionText: l,
          className: h,
          size: v,
          'data-sentry-element': 'FormLayout',
          'data-sentry-component': 'Group',
          'data-sentry-source-file': 'Checkbox.tsx',
          children: (0, a.jsx)(o.Provider, {
            value: {
              parentCallback: e => {
                b && b(e);
              },
              parentSize: v,
            },
            'data-sentry-element': 'unknown',
            'data-sentry-source-file': 'Checkbox.tsx',
            children: (0, a.jsx)('div', {
              className: y.group,
              children: x
                ? x.map(e =>
                    (0, a.jsx)(
                      d,
                      {
                        id: e.id,
                        value: e.value,
                        label: e.label,
                        beforeLabel: e.beforeLabel,
                        afterLabel: e.afterLabel,
                        checked: e.checked,
                        name: e.name,
                        description: e.description,
                        defaultChecked: e.defaultChecked,
                      },
                      e.id
                    )
                  )
                : f,
            }),
          }),
        });
      };
      var c = d;
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
    85818: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return b;
        },
      });
      var a = n(97458),
        s = n(44809),
        r = n(62923),
        i = n.n(r),
        l = n(52983),
        o = n(68249),
        d = n(51487),
        c = n(16720),
        u = n(25843),
        p = n(65092),
        m = n(11499);
      let f = (0, l.createContext)({ onChange: e => {}, selected: void 0 });
      var h = n(62507);
      function x(e) {
        let {
            children: t,
            className: n,
            buttonClassName: r,
            descriptionText: h,
            error: x,
            icon: b,
            id: v = '',
            name: y = '',
            label: g,
            labelOptional: j,
            layout: _,
            value: k,
            onChange: N,
            onFocus: w,
            onBlur: C,
            style: L,
            size: S = 'medium',
            defaultValue: z,
            validation: E,
            disabled: R,
            optionsWidth: Z,
          } = e,
          [M, P] = (0, l.useState)(void 0),
          [T, F] = (0, l.useState)({}),
          V = (0, u.Z)('listbox'),
          I = (0, l.useRef)(null),
          {
            formContextOnChange: B,
            values: O,
            errors: G,
            handleBlur: U,
            touched: q,
            fieldLevelValidation: D,
          } = (0, m.G)();
        (O && !k && ((k = O[v || y]), (z = O[v || y])),
          x || (G && !x && (x = G[v || y]), (x = q && q[v || y] ? x : void 0)),
          (0, l.useEffect)(() => {
            void 0 !== k && P(k);
          }, [k]),
          (0, l.useEffect)(() => {
            function e() {
              var e;
              document.documentElement.style.setProperty(
                '--width-listbox',
                ''.concat(
                  Z ||
                    (null === (e = I.current) || void 0 === e
                      ? void 0
                      : e.offsetWidth),
                  'px'
                )
              );
            }
            return (
              window.addEventListener('resize', e),
              e(),
              () => window.removeEventListener('resize', e)
            );
          }, []),
          (0, l.useEffect)(() => {
            var e;
            let n = i()(t);
            function a(e) {
              return n.find(t => t.props.value === e);
            }
            if (k) {
              P(k);
              let e = a(k);
              F((null == e ? void 0 : e.props) ? e.props : void 0);
              return;
            }
            if (M) {
              let e = a(M);
              F((null == e ? void 0 : e.props) ? e.props : void 0);
              return;
            }
            if (z) {
              P(z);
              let e = a(M);
              F((null == e ? void 0 : e.props) ? e.props : void 0);
              return;
            }
            F(null === (e = n[0]) || void 0 === e ? void 0 : e.props);
          }, [M]));
        let A = [V.container, V.base, r],
          W = [V.addOnBefore];
        return (
          x && A.push(V.variants.error),
          x || A.push(V.variants.standard),
          b && W.push(V.with_icon),
          S && A.push(V.size[S]),
          R && A.push(V.disabled),
          (0, a.jsx)(o.l, {
            label: g,
            labelOptional: j,
            layout: _,
            id: v,
            error: x,
            descriptionText: h,
            className: n,
            style: L,
            size: S,
            'data-sentry-element': 'FormLayout',
            'data-sentry-component': 'Listbox',
            'data-sentry-source-file': 'Listbox2.tsx',
            children: (0, a.jsxs)(s.fC, {
              'data-sentry-element': 'unknown',
              'data-sentry-source-file': 'Listbox2.tsx',
              children: [
                (0, a.jsx)(s.xz, {
                  asChild: !0,
                  disabled: R,
                  'data-sentry-element': 'unknown',
                  'data-sentry-source-file': 'Listbox2.tsx',
                  children: (0, a.jsxs)('button', {
                    'data-size': S,
                    ref: I,
                    className: (0, p.cn)(A),
                    onBlur: function (e) {
                      (U && U(e), C && C(e));
                    },
                    onFocus: w,
                    name: y,
                    id: v,
                    children: [
                      (0, a.jsxs)('span', {
                        className: (0, p.cn)(W),
                        children: [
                          b && (0, a.jsx)(c.Z, { size: S, icon: b }),
                          (null == T ? void 0 : T.addOnBefore) &&
                            (0, a.jsx)(T.addOnBefore, {}),
                          (0, a.jsx)('span', {
                            className: V.label,
                            children: null == T ? void 0 : T.label,
                          }),
                        ],
                      }),
                      (0, a.jsx)('span', {
                        className: V.chevron_container,
                        children: (0, a.jsx)('svg', {
                          className: V.chevron,
                          xmlns: 'http://www.w3.org/2000/svg',
                          viewBox: '0 0 20 20',
                          fill: 'currentColor',
                          'aria-hidden': 'true',
                          'data-sentry-element': 'svg',
                          'data-sentry-source-file': 'Listbox2.tsx',
                          children: (0, a.jsx)('path', {
                            fillRule: 'evenodd',
                            d: 'M10 3a1 1 0 01.707.293l3 3a1 1 0 01-1.414 1.414L10 5.414 7.707 7.707a1 1 0 01-1.414-1.414l3-3A1 1 0 0110 3zm-3.707 9.293a1 1 0 011.414 0L10 14.586l2.293-2.293a1 1 0 011.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z',
                            clipRule: 'evenodd',
                            'data-sentry-element': 'path',
                            'data-sentry-source-file': 'Listbox2.tsx',
                          }),
                        }),
                      }),
                      x &&
                        (0, a.jsx)('div', {
                          className: V.actions_container,
                          children: x && (0, a.jsx)(d.Z, { size: S }),
                        }),
                    ],
                  }),
                }),
                (0, a.jsx)(s.VY, {
                  sideOffset: 6,
                  loop: !0,
                  side: 'bottom',
                  align: 'center',
                  className: V.options_container,
                  'data-sentry-element': 'unknown',
                  'data-sentry-source-file': 'Listbox2.tsx',
                  children: (0, a.jsx)('div', {
                    children: (0, a.jsx)(f.Provider, {
                      value: {
                        onChange: function (e) {
                          (N && N(e), P(e));
                          let t = {};
                          ((t.target = {
                            type: 'select',
                            name: y,
                            id: v,
                            value: e,
                            checked: void 0,
                          }),
                            B && B(t),
                            E && D(v, E(e)));
                        },
                        selected: M,
                      },
                      'data-sentry-element': 'unknown',
                      'data-sentry-source-file': 'Listbox2.tsx',
                      children: t,
                    }),
                  }),
                }),
              ],
            }),
          })
        );
      }
      x.Option = function (e) {
        let {
            id: t,
            value: n,
            label: r,
            disabled: i = !1,
            children: l,
            className: o = '',
            addOnBefore: d,
          } = e,
          c = (0, u.Z)('listbox');
        return (0, a.jsx)(f.Consumer, {
          'data-sentry-element': 'unknown',
          'data-sentry-component': 'SelectOption',
          'data-sentry-source-file': 'Listbox2.tsx',
          children: e => {
            let { onChange: r, selected: u } = e,
              m = u === n;
            return (0, a.jsxs)(
              s.ck,
              {
                className: (0, p.cn)(
                  c.option,
                  m ? c.option_active : ' ',
                  i ? c.option_disabled : ' ',
                  o
                ),
                onSelect: () => (i ? {} : r(n)),
                children: [
                  (0, a.jsxs)('div', {
                    className: c.option_inner,
                    children: [
                      d && d({ active: m, selected: u }),
                      (0, a.jsx)('span', {
                        children:
                          'function' == typeof l
                            ? l({ active: m, selected: u })
                            : l,
                      }),
                    ],
                  }),
                  m
                    ? (0, a.jsx)('span', {
                        className: (0, p.cn)(
                          c.option_check,
                          m ? c.option_check_active : ''
                        ),
                        children: (0, a.jsx)(h.Z, {
                          className: c.option_check_icon,
                          'aria-hidden': 'true',
                        }),
                      })
                    : null,
                ],
              },
              t
            );
          },
        });
      };
      var b = x;
    },
    94059: function (e, t, n) {
      n.d(t, {
        ZP: function () {
          return p;
        },
      });
      var a = n(97458),
        s = n(52983),
        r = n(25843),
        i = n(65092);
      function l(e) {
        let { children: t, className: n, tag: s = 'div', style: r } = e;
        return (0, a.jsx)(''.concat(s), {
          style: r,
          'data-sentry-element': 'CustomTag',
          'data-sentry-component': 'Typography',
          'data-sentry-source-file': 'Typography.tsx',
          children: t,
        });
      }
      ((l.Title = function (e) {
        let { className: t, level: n = 1, children: s, style: r } = e;
        return (0, a.jsx)('h'.concat(n), {
          style: r,
          'data-sentry-element': 'CustomTag',
          'data-sentry-component': 'Title',
          'data-sentry-source-file': 'Title.tsx',
          children: s,
        });
      }),
        (l.Text = function (e) {
          let {
            className: t,
            children: n,
            style: s,
            type: r,
            disabled: i,
            mark: l,
            code: o,
            keyboard: d,
            underline: c,
            strikethrough: u,
            strong: p,
            small: m,
          } = e;
          return o
            ? (0, a.jsx)('code', { style: s, children: n })
            : l
              ? (0, a.jsx)('mark', { style: s, children: n })
              : d
                ? (0, a.jsx)('kbd', { style: s, children: n })
                : p
                  ? (0, a.jsx)('strong', { style: s, children: n })
                  : (0, a.jsx)('span', {
                      style: s,
                      'data-sentry-component': 'Text',
                      'data-sentry-source-file': 'Text.tsx',
                      children: n,
                    });
        }),
        (l.Link = function (e) {
          let {
            children: t,
            target: n = '_blank',
            href: s,
            className: r,
            onClick: i,
            style: l,
          } = e;
          return (0, a.jsx)('a', {
            onClick: i,
            href: s,
            target: n,
            rel: 'noopener noreferrer',
            style: l,
            'data-sentry-component': 'Link',
            'data-sentry-source-file': 'Link.tsx',
            children: t,
          });
        }));
      let o = (0, s.createContext)({ type: 'text' }),
        d = e => {
          let { type: t } = e;
          return (0, a.jsx)(o.Provider, {
            value: { type: t },
            'data-sentry-element': 'unknown',
            'data-sentry-component': 'MenuContextProvider',
            'data-sentry-source-file': 'MenuContext.tsx',
            children: e.children,
          });
        },
        c = () => {
          let e = (0, s.useContext)(o);
          if (void 0 === e)
            throw Error(
              'MenuContext must be used within a MenuContextProvider.'
            );
          return e;
        };
      function u(e) {
        let {
          children: t,
          className: n,
          ulClassName: s,
          style: r,
          type: i = 'text',
        } = e;
        return (0, a.jsx)('nav', {
          role: 'menu',
          'aria-label': 'Sidebar',
          'aria-orientation': 'vertical',
          'aria-labelledby': 'options-menu',
          className: n,
          style: r,
          'data-sentry-component': 'Menu',
          'data-sentry-source-file': 'Menu.tsx',
          children: (0, a.jsx)(d, {
            type: i,
            'data-sentry-element': 'MenuContextProvider',
            'data-sentry-source-file': 'Menu.tsx',
            children: (0, a.jsx)('ul', { className: s, children: t }),
          }),
        });
      }
      ((u.Item = function (e) {
        let {
            children: t,
            icon: n,
            active: s,
            rounded: l,
            onClick: o,
            doNotCloseOverlay: d = !1,
            showActiveBar: u = !1,
            style: p,
          } = e,
          m = (0, r.Z)('menu'),
          { type: f } = c(),
          h = [m.item.base];
        (h.push(m.item.variants[f].base),
          s
            ? h.push(m.item.variants[f].active)
            : h.push(m.item.variants[f].normal));
        let x = [m.item.content.base];
        s ? x.push(m.item.content.active) : x.push(m.item.content.normal);
        let b = [m.item.icon.base];
        return (
          s ? b.push(m.item.icon.active) : b.push(m.item.icon.normal),
          (0, a.jsxs)('li', {
            role: 'menuitem',
            className: (0, i.cn)('outline-none', h),
            style: p,
            onClick: o,
            'aria-current': s ? 'page' : void 0,
            'data-sentry-component': 'Item',
            'data-sentry-source-file': 'Menu.tsx',
            children: [
              n &&
                (0, a.jsx)('div', {
                  className: ''.concat(b.join(' '), ' min-w-fit'),
                  children: n,
                }),
              (0, a.jsx)('span', { className: x.join(' '), children: t }),
            ],
          })
        );
      }),
        (u.Group = function (e) {
          let { children: t, icon: n, title: s } = e,
            i = (0, r.Z)('menu'),
            { type: l } = c();
          return (0, a.jsxs)('div', {
            className: [i.group.base, i.group.variants[l]].join(' '),
            'data-sentry-component': 'Group',
            'data-sentry-source-file': 'Menu.tsx',
            children: [
              n && (0, a.jsx)('span', { className: i.group.icon, children: n }),
              (0, a.jsx)('span', { className: i.group.content, children: s }),
              t,
            ],
          });
        }),
        (u.Misc = function (e) {
          let { children: t } = e;
          return (0, a.jsx)('div', {
            'data-sentry-component': 'Misc',
            'data-sentry-source-file': 'Menu.tsx',
            children: (0, a.jsx)(l.Text, {
              'data-sentry-element': 'unknown',
              'data-sentry-source-file': 'Menu.tsx',
              children: (0, a.jsx)('span', { children: t }),
            }),
          });
        }));
      var p = u;
    },
    39563: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return c;
        },
      });
      var a = n(97458),
        s = n(52983),
        r = n(68249),
        i = n(25843),
        l = n(11499);
      let o = (0, s.createContext)({
        parentCallback: e => {},
        type: '',
        name: '',
        activeId: '',
        parentSize: '',
      });
      function d(e) {
        let {
            id: t = (
              '00000' + ((46656 * Math.random()) | 0).toString(36)
            ).slice(-3) +
              ('00000' + ((46656 * Math.random()) | 0).toString(36)).slice(-3),
            disabled: n,
            value: s,
            label: r,
            afterLabel: d,
            beforeLabel: c,
            description: u,
            name: p,
            checked: m,
            className: f,
            onChange: h,
            onBlur: x,
            hidden: b = !1,
            size: v = 'medium',
            align: y = 'vertical',
            optionalLabel: g,
            addOnBefore: j,
            children: _,
          } = e,
          k = (0, i.Z)('radio'),
          { handleBlur: N } = (0, l.G)();
        function w(e) {
          (N && N(e), x && x(e));
        }
        return (0, a.jsx)(o.Consumer, {
          'data-sentry-element': 'unknown',
          'data-sentry-component': 'Radio',
          'data-sentry-source-file': 'Radio.tsx',
          children: e => {
            let {
              parentCallback: i,
              type: l,
              name: o,
              activeId: x,
              parentSize: N,
            } = e;
            v = N || v;
            let C = x === t || !!m || (!1 !== m && void 0),
              L = [
                f,
                k.variants[l].container.base,
                'list' === l && !b && k.variants[l].container.size[v],
              ];
            return (
              L.push(k.variants[l].base),
              L.push(k.variants[l].size[v]),
              C ? L.push(k.variants[l].active) : L.push(k.variants[l].inactive),
              n && L.push(k.disabled),
              'list' !== l && (b = !0),
              (0, a.jsxs)('label', {
                htmlFor: t,
                className: L.join(' '),
                children: [
                  (0, a.jsx)('input', {
                    id: t,
                    name: o || p,
                    type: 'radio',
                    className: [
                      k.base,
                      k.size[v],
                      b && k.hidden,
                      k.variants[l].radio_offset,
                      '',
                    ].join(' '),
                    checked: C,
                    disabled: n,
                    value: s || t,
                    onChange: e => {
                      (i && i(e), h && h(e));
                    },
                    onBlur: w,
                  }),
                  j,
                  _ ||
                    (0, a.jsxs)(a.Fragment, {
                      children: [
                        (0, a.jsxs)('div', {
                          className: [
                            k.label.base,
                            k.label[v],
                            k.variants[l].container.align[y],
                          ].join(' '),
                          children: [
                            c &&
                              (0, a.jsx)('div', {
                                className: [
                                  k.label_before.base,
                                  k.label_before[v],
                                ].join(' '),
                                children: c,
                              }),
                            (0, a.jsx)('div', { children: r }),
                            d &&
                              (0, a.jsx)('div', {
                                className: [
                                  k.label_after.base,
                                  k.label_after[v],
                                ].join(' '),
                                children: d,
                              }),
                            u &&
                              (0, a.jsx)('div', {
                                className: [
                                  k.description.base,
                                  k.description[v],
                                ].join(' '),
                                children: u,
                              }),
                          ],
                        }),
                        g &&
                          (0, a.jsx)('div', {
                            className: [
                              k.optionalLabel.base,
                              k.optionalLabel[v],
                            ].join(' '),
                            children: g,
                          }),
                      ],
                    }),
                ],
              })
            );
          },
        });
      }
      d.Group = function (e) {
        let {
            id: t,
            layout: n,
            error: c,
            descriptionText: u,
            label: p,
            afterLabel: m,
            beforeLabel: f,
            labelOptional: h,
            children: x,
            className: b,
            type: v = 'list',
            options: y,
            value: g,
            name: j,
            onChange: _,
            size: k = 'medium',
            validation: N,
            groupClassName: w,
            labelsLayout: C = 'vertical',
          } = e,
          [L, S] = (0, s.useState)(''),
          z = (0, i.Z)('radio'),
          {
            formContextOnChange: E,
            values: R,
            errors: Z,
            touched: M,
            fieldLevelValidation: P,
          } = (0, l.G)();
        return (
          R && !g && (g = R[t || j]),
          c || (Z && !c && (c = Z[t || j]), (c = M && M[t || j] ? c : void 0)),
          (0, s.useEffect)(() => {
            N && P(t, N(g));
          }, []),
          (0, s.useEffect)(() => {
            S(g);
          }, [g]),
          (0, a.jsx)('fieldset', {
            name: j,
            className: b,
            'data-sentry-component': 'RadioGroup',
            'data-sentry-source-file': 'Radio.tsx',
            children: (0, a.jsx)(r.l, {
              nonBoxInput: !0,
              label: p,
              afterLabel: m,
              beforeLabel: f,
              labelOptional: h,
              layout: n,
              id: t,
              error: c,
              descriptionText: u,
              size: k,
              labelLayout: C,
              'data-sentry-element': 'FormLayout',
              'data-sentry-source-file': 'Radio.tsx',
              children: (0, a.jsx)('div', {
                className: w || z.variants[v].group,
                children: (0, a.jsx)(o.Provider, {
                  value: {
                    parentCallback: function (e) {
                      (_ && _(e),
                        E && E(e),
                        N && P(t, N(e.target.value)),
                        S(e.target.id));
                    },
                    type: v,
                    name: j,
                    activeId: L,
                    parentSize: k,
                  },
                  'data-sentry-element': 'unknown',
                  'data-sentry-source-file': 'Radio.tsx',
                  children: y
                    ? y.map(e =>
                        (0, a.jsx)(d, {
                          id: e.id,
                          label: e.label,
                          beforeLabel: e.beforeLabel,
                          afterLabel: e.afterLabel,
                          value: e.value,
                          description: e.description,
                        })
                      )
                    : x,
                }),
              }),
            }),
          })
        );
      };
      var c = d;
    },
    62210: function (e, t, n) {
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
]);
