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
      (e._sentryDebugIds[t] = '3065a038-2e06-4a75-9c73-132bca38cf1c'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-3065a038-2e06-4a75-9c73-132bca38cf1c'));
  } catch (e) {}
})(),
  (self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2580],
    {
      72443: function (e, t, n) {
        (window.__NEXT_P = window.__NEXT_P || []).push([
          '/project/[ref]/editor/[id]',
          function () {
            return n(60698);
          },
        ]);
      },
      60698: function (e, t, n) {
        'use strict';
        n.r(t);
        var a = n(97458),
          r = n(98809),
          i = n(32691),
          s = n(89030),
          d = n(14918),
          l = n(50936),
          o = n(88971),
          c = n(29872),
          u = n(39113);
        let f = () => {
          let e = (0, i.useRouter)(),
            { resolvedTheme: t } = (0, r.F)(),
            { id: n, ref: c } = (0, s.UO)(),
            f = n ? Number(n) : void 0,
            { project: h } = (0, o.d2)(),
            { data: b, isLoading: p } = (0, u.iB)({
              projectRef: null == h ? void 0 : h.ref,
              connectionString: null == h ? void 0 : h.connectionString,
              id: f,
            });
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)(d.mM, {
                isLoadingSelectedTable: p,
                selectedTable: b,
                theme: (null == t ? void 0 : t.includes('dark'))
                  ? 'dark'
                  : 'light',
                'data-sentry-element': 'TableGridEditor',
                'data-sentry-source-file': '[id].tsx',
              }),
              (0, a.jsx)(l.Z, {
                selectedTable: b,
                onAfterDeleteTable: t => {
                  t.length > 0
                    ? e.push('/project/'.concat(c, '/editor/').concat(t[0].id))
                    : e.push('/project/'.concat(c, '/editor'));
                },
                'data-sentry-element': 'DeleteConfirmationDialogs',
                'data-sentry-source-file': '[id].tsx',
              }),
            ],
          });
        };
        ((f.getLayout = e =>
          (0, a.jsx)(o.C, { children: (0, a.jsx)(c.Z, { children: e }) })),
          (t.default = f));
      },
      19540: function (e, t, n) {
        'use strict';
        n.d(t, {
          Z: function () {
            return l;
          },
        });
        var a = n(97458),
          r = n(52983),
          i = n(68985),
          s = n(11499);
        function d(e, t) {
          if (!t.error) return (delete e[t.key], e);
          if (t) return { ...e, [t.key]: t.error };
          throw Error();
        }
        function l(e) {
          let { validate: t, ...n } = e,
            [l, o] = (0, r.useReducer)(d, null),
            c = (0, i.TA)({
              validateOnBlur: !0,
              ...n,
              validationSchema: n.validationSchema,
              initialValues: n.initialValues,
              onSubmit: n.onSubmit,
              validate:
                t ||
                function () {
                  return l;
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
            children: (0, a.jsx)(s.o, {
              values: c.values,
              errors: c.errors,
              formContextOnChange: c.handleChange,
              handleBlur: c.handleBlur,
              touched: c.touched,
              fieldLevelValidation: function (e, t) {
                o({ key: e, error: t });
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
      62210: function (e, t, n) {
        'use strict';
        n.d(t, {
          r: function () {
            return c;
          },
        });
        var a = n(97458),
          r = n(56384),
          i = n(31706),
          s = n(52983),
          d = n(65092);
        let l = (0, i.j)(
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
          o = (0, i.j)(
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
          c = s.forwardRef((e, t) => {
            let { className: n, size: i, ...s } = e;
            return (0, a.jsx)(r.fC, {
              className: (0, d.cn)(l({ size: i }), n),
              ...s,
              ref: t,
              children: (0, a.jsx)(r.bU, {
                className: (0, d.cn)(o({ size: i })),
              }),
            });
          });
        c.displayName = r.fC.displayName;
      },
      56384: function (e, t, n) {
        'use strict';
        n.d(t, {
          bU: function () {
            return y;
          },
          fC: function () {
            return w;
          },
        });
        var a = n(83573),
          r = n(52983),
          i = n(12527),
          s = n(61031),
          d = n(95831),
          l = n(29650),
          o = n(87178),
          c = n(56807),
          u = n(36986);
        let f = 'Switch',
          [h, b] = (0, d.b)(f),
          [p, m] = h(f),
          g = (0, r.forwardRef)((e, t) => {
            let {
                __scopeSwitch: n,
                name: d,
                checked: o,
                defaultChecked: c,
                required: f,
                disabled: h,
                value: b = 'on',
                onCheckedChange: m,
                ...g
              } = e,
              [x, w] = (0, r.useState)(null),
              y = (0, s.e)(t, e => w(e)),
              C = (0, r.useRef)(!1),
              _ = !x || !!x.closest('form'),
              [E = !1, S] = (0, l.T)({ prop: o, defaultProp: c, onChange: m });
            return (0, r.createElement)(
              p,
              { scope: n, checked: E, disabled: h },
              (0, r.createElement)(
                u.WV.button,
                (0, a.Z)(
                  {
                    type: 'button',
                    role: 'switch',
                    'aria-checked': E,
                    'aria-required': f,
                    'data-state': v(E),
                    'data-disabled': h ? '' : void 0,
                    disabled: h,
                    value: b,
                  },
                  g,
                  {
                    ref: y,
                    onClick: (0, i.M)(e.onClick, e => {
                      (S(e => !e),
                        _ &&
                          ((C.current = e.isPropagationStopped()),
                          C.current || e.stopPropagation()));
                    }),
                  }
                )
              ),
              _ &&
                (0, r.createElement)(k, {
                  control: x,
                  bubbles: !C.current,
                  name: d,
                  value: b,
                  checked: E,
                  required: f,
                  disabled: h,
                  style: { transform: 'translateX(-100%)' },
                })
            );
          }),
          x = (0, r.forwardRef)((e, t) => {
            let { __scopeSwitch: n, ...i } = e,
              s = m('SwitchThumb', n);
            return (0, r.createElement)(
              u.WV.span,
              (0, a.Z)(
                {
                  'data-state': v(s.checked),
                  'data-disabled': s.disabled ? '' : void 0,
                },
                i,
                { ref: t }
              )
            );
          }),
          k = e => {
            let { control: t, checked: n, bubbles: i = !0, ...s } = e,
              d = (0, r.useRef)(null),
              l = (0, o.D)(n),
              u = (0, c.t)(t);
            return (
              (0, r.useEffect)(() => {
                let e = d.current,
                  t = Object.getOwnPropertyDescriptor(
                    window.HTMLInputElement.prototype,
                    'checked'
                  ).set;
                if (l !== n && t) {
                  let a = new Event('click', { bubbles: i });
                  (t.call(e, n), e.dispatchEvent(a));
                }
              }, [l, n, i]),
              (0, r.createElement)(
                'input',
                (0, a.Z)(
                  { type: 'checkbox', 'aria-hidden': !0, defaultChecked: n },
                  s,
                  {
                    tabIndex: -1,
                    ref: d,
                    style: {
                      ...e.style,
                      ...u,
                      position: 'absolute',
                      pointerEvents: 'none',
                      opacity: 0,
                      margin: 0,
                    },
                  }
                )
              )
            );
          };
        function v(e) {
          return e ? 'checked' : 'unchecked';
        }
        let w = g,
          y = x;
      },
    },
    function (e) {
      (e.O(
        0,
        [
          6665, 7186, 7623, 588, 783, 1018, 1706, 1864, 8703, 2397, 3954, 9621,
          9911, 659, 7612, 4637, 9344, 7726, 6739, 3302, 3898, 8985, 717, 5538,
          5518, 8827, 6492, 5770, 793, 3594, 3861, 6120, 7094, 4334, 876, 9903,
          8028, 9086, 3443, 6273, 3461, 4648, 9996, 9774, 2888, 179,
        ],
        function () {
          return e((e.s = 72443));
        }
      ),
        (_N_E = e.O()));
    },
  ]));
