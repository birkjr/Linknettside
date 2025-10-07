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
      (e._sentryDebugIds[t] = '7e35f4d8-f9cf-4c0d-a1ff-294af5eeb476'),
      (e._sentryDebugIdIdentifier =
        'sentry-dbid-7e35f4d8-f9cf-4c0d-a1ff-294af5eeb476'));
  } catch (e) {}
})();
('use strict');
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [6179],
  {
    48807: function (e, t, s) {
      s.d(t, {
        Z: function () {
          return ej;
        },
      });
      var a = s(97458),
        n = s(198),
        l = s(12436),
        r = s(85466),
        o = s.n(r),
        i = s(98601),
        d = s(29790),
        c = s(57304),
        u = s(97224),
        x = s(50963),
        m = s(16362),
        f = s(49571),
        v = s.n(f),
        p = s(52983),
        h = s(44914),
        g = s(34549),
        j = s(359),
        y = s(60277),
        b = s(90817),
        w = s(45536),
        N = s(81514),
        S = s(70717),
        R = s(63730),
        _ = s(65092),
        D = s(14500),
        T = s(90839),
        L = s(89429),
        k = s(58397),
        C = s(54354);
      let E = e =>
        (0, a.jsxs)(k.VK, {
          'data-sentry-element': 'RowLayout',
          'data-sentry-component': 'defaultRenderCell',
          'data-sentry-source-file': 'DefaultPreviewColumnRenderer.tsx',
          children: [
            (0, a.jsx)(C.c, {
              utcTimestamp: e.row.timestamp,
              'data-sentry-element': 'TimestampInfo',
              'data-sentry-source-file': 'DefaultPreviewColumnRenderer.tsx',
            }),
            (0, a.jsx)(k.VG, {
              className: 'w-full',
              value: e.row.event_message,
              'data-sentry-element': 'TextFormatter',
              'data-sentry-source-file': 'DefaultPreviewColumnRenderer.tsx',
            }),
          ],
        });
      var P = [
        {
          name: 'default-preview-first-column',
          key: 'default-preview-first-column',
          renderCell: E,
        },
      ];
      let I = [
          {
            name: 'auth-first-column',
            key: 'auth-first-column',
            renderCell: e => {
              var t;
              return e.row.level
                ? (0, a.jsxs)(k.VK, {
                    children: [
                      (0, a.jsx)(C.c, { utcTimestamp: e.row.timestamp }),
                      e.row.level && (0, a.jsx)(k.TK, { value: e.row.level }),
                      (0, a.jsx)(k.VG, {
                        className: 'w-full',
                        value: ''
                          .concat(e.row.path ? e.row.path + ' | ' : '')
                          .concat(
                            (null === (t = e.row.msg) || void 0 === t
                              ? void 0
                              : t.trim()) || e.row.event_message
                          ),
                      }),
                    ],
                  })
                : E(e);
            },
          },
        ],
        M = [
          {
            name: 'database-api-first-column',
            key: 'database-api-first-column',
            renderCell: e =>
              e.row.status_code || e.row.method || e.row.path
                ? (0, a.jsxs)(k.VK, {
                    children: [
                      (0, a.jsx)(C.c, { utcTimestamp: e.row.timestamp }),
                      (0, a.jsx)(k.XA, { row: e, value: e.row.status_code }),
                      (0, a.jsx)(k.VG, {
                        className: 'w-20',
                        value: e.row.method,
                      }),
                      (0, a.jsx)(k.VG, {
                        className: 'w-full',
                        value: e.row.path,
                      }),
                    ],
                  })
                : E(e),
          },
        ],
        A = [
          {
            name: 'database-postgres-first-column',
            key: 'database-postgres-first-column',
            renderCell: e =>
              e.row.error_severity
                ? (0, a.jsxs)(k.VK, {
                    children: [
                      (0, a.jsx)(C.c, { utcTimestamp: e.row.timestamp }),
                      (0, a.jsx)(k.TK, { value: e.row.error_severity }),
                      (0, a.jsx)(k.VG, {
                        className: 'w-full',
                        value: e.row.event_message,
                      }),
                    ],
                  })
                : E(e),
          },
        ],
        z = [
          {
            name: 'functions-edge-first-column',
            key: 'functions-edge-first-column',
            renderCell: e =>
              e.row.status_code || e.row.method
                ? (0, a.jsxs)(k.VK, {
                    children: [
                      (0, a.jsx)(C.c, { utcTimestamp: e.row.timestamp }),
                      (0, a.jsx)(k.XA, { row: e, value: e.row.status_code }),
                      (0, a.jsx)(k.VG, { value: e.row.method }),
                      (0, a.jsx)(k.VG, { value: e.row.id }),
                    ],
                  })
                : E(e),
          },
        ],
        F = [
          {
            name: 'functions-logs-first-column',
            key: 'functions-logs-first-column',
            renderCell: e =>
              e.row.event_type || e.row.level
                ? (0, a.jsxs)(k.VK, {
                    children: [
                      (0, a.jsx)(C.c, { utcTimestamp: e.row.timestamp }),
                      'uncaughtException' === e.row.event_type
                        ? (0, a.jsx)(k.TK, {
                            value: e.row.event_type,
                            uppercase: !1,
                          })
                        : (0, a.jsx)(k.TK, { value: e.row.level }),
                      (0, a.jsx)(k.VG, {
                        className: 'w-full',
                        value: e.row.event_message,
                      }),
                    ],
                  })
                : E(e),
          },
        ];
      var Z = s(98686),
        O = s(857),
        W = s(92240),
        V = s(49935),
        Y = s(89831),
        B = e => {
          var t, s, n, l, r, o, i, d, c, u, x;
          let { log: m } = e;
          return (0, a.jsxs)('div', {
            className: ''.concat(Y.W.log_selection_x_padding, ' space-y-6'),
            'data-sentry-component': 'AuthSelectionRenderer',
            'data-sentry-source-file': 'AuthSelectionRenderer.tsx',
            children: [
              (0, a.jsxs)('div', {
                className: 'flex flex-col gap-3',
                children: [
                  (0, a.jsx)('h3', {
                    className: 'text-foreground-lighter text-sm',
                    children: 'Event Message',
                  }),
                  (0, a.jsx)('div', {
                    className:
                      'text-xs text-wrap font-mono text-foreground whitespace-pre-wrap overflow-x-auto',
                    children:
                      (null === (t = m.metadata) || void 0 === t
                        ? void 0
                        : t.msg) || m.event_message,
                  }),
                ],
              }),
              (0, a.jsx)(k.tS, {
                value: m.timestamp,
                'data-sentry-element': 'SelectionDetailedTimestampRow',
                'data-sentry-source-file': 'AuthSelectionRenderer.tsx',
              }),
              (null === (s = m.metadata) || void 0 === s ? void 0 : s.status) &&
                (0, a.jsx)(k.Yj, {
                  label: 'Status',
                  value: String(
                    null === (n = m.metadata) || void 0 === n
                      ? void 0
                      : n.status
                  ),
                  valueRender: (0, a.jsx)(k.XA, {
                    value:
                      null === (l = m.metadata) || void 0 === l
                        ? void 0
                        : l.status,
                  }),
                }),
              (null === (r = m.metadata) || void 0 === r ? void 0 : r.level) &&
                (0, a.jsx)(k.Yj, {
                  label: 'Severity',
                  value:
                    null === (o = m.metadata) || void 0 === o
                      ? void 0
                      : o.level,
                  valueRender: (0, a.jsx)(k.TK, {
                    value:
                      null === (i = m.metadata) || void 0 === i
                        ? void 0
                        : i.level,
                  }),
                }),
              (null === (d = m.metadata) || void 0 === d ? void 0 : d.path) &&
                (0, a.jsx)(k.Yj, {
                  label: 'Request Path',
                  value:
                    null === (c = m.metadata) || void 0 === c ? void 0 : c.path,
                }),
              (null === (u = m.metadata) || void 0 === u ? void 0 : u.error) &&
                (0, a.jsx)(k.Yj, {
                  label: 'Error Message',
                  value:
                    null === (x = m.metadata) || void 0 === x
                      ? void 0
                      : x.error,
                }),
              (0, a.jsxs)('div', {
                className: 'flex flex-col gap-3',
                children: [
                  (0, a.jsx)('h3', {
                    className: 'text-foreground-lighter text-sm',
                    children: 'Metadata',
                  }),
                  (0, a.jsx)('pre', {
                    className:
                      ' className={`text-foreground text-sm col-span-8 overflow-x-auto text-xs font-mono`}',
                    dangerouslySetInnerHTML: { __html: (0, k.wv)(m.metadata) },
                  }),
                ],
              }),
            ],
          });
        },
        H = () =>
          (0, a.jsx)('div', {
            className:
              'h-px w-full bg-panel-border-interior-light [[data-theme*=dark]_&]:bg-panel-border-interior-dark',
            'data-sentry-component': 'LogsDivider',
            'data-sentry-source-file': 'Logs.Divider.tsx',
          }),
        J = e => {
          var t, s, n, l, r, o, i, d, c, u, x, m, f;
          let { log: v } = e,
            p =
              null == v
                ? void 0
                : null === (s = v.metadata[0]) || void 0 === s
                  ? void 0
                  : null === (t = s.request) || void 0 === t
                    ? void 0
                    : t[0],
            h =
              null == v
                ? void 0
                : null === (l = v.metadata[0]) || void 0 === l
                  ? void 0
                  : null === (n = l.response) || void 0 === n
                    ? void 0
                    : n[0],
            g = null == p ? void 0 : p.method,
            j = null == h ? void 0 : h.status_code,
            y =
              null == p
                ? void 0
                : null === (o = p.headers) || void 0 === o
                  ? void 0
                  : null === (r = o[0]) || void 0 === r
                    ? void 0
                    : r.cf_connecting_ip,
            b =
              null == p
                ? void 0
                : null === (d = p.headers) || void 0 === d
                  ? void 0
                  : null === (i = d[0]) || void 0 === i
                    ? void 0
                    : i.cf_ipcountry,
            w =
              null == p
                ? void 0
                : null === (u = p.headers) || void 0 === u
                  ? void 0
                  : null === (c = u[0]) || void 0 === c
                    ? void 0
                    : c.x_client_info,
            N =
              null == p
                ? void 0
                : null === (m = p.headers) || void 0 === m
                  ? void 0
                  : null === (x = m[0]) || void 0 === x
                    ? void 0
                    : x.referer,
            S =
              null == v
                ? void 0
                : null === (f = v.metadata[0]) || void 0 === f
                  ? void 0
                  : f.load_balancer_redirect_identifier;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding, ' space-y-2'),
                children: [
                  (0, a.jsx)(k.Yj, {
                    label: 'Status',
                    value: j,
                    valueRender: (0, a.jsx)(k.XA, { value: j }),
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file': 'DatabaseApiSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Method',
                    value: g,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file': 'DatabaseApiSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.tS, {
                    value: v.timestamp,
                    'data-sentry-element': 'SelectionDetailedTimestampRow',
                    'data-sentry-source-file': 'DatabaseApiSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'IP Address',
                    value: y,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file': 'DatabaseApiSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Origin Country',
                    value: b,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file': 'DatabaseApiSelectionRender.tsx',
                  }),
                  w && (0, a.jsx)(k.Yj, { label: 'Client', value: w }),
                  N && (0, a.jsx)(k.Yj, { label: 'Referer', value: N }),
                  S &&
                    (0, a.jsx)(k.Yj, {
                      label: 'Redirect Identifier',
                      value: S,
                    }),
                ],
              }),
              (0, a.jsx)(H, {
                'data-sentry-element': 'LogsDivider',
                'data-sentry-source-file': 'DatabaseApiSelectionRender.tsx',
              }),
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding),
                children: [
                  (0, a.jsx)('h3', {
                    className:
                      'text-foreground-light mb-4 font-mono text-sm uppercase',
                    children: 'Request Metadata',
                  }),
                  (0, a.jsx)('pre', {
                    className: 'text-sm syntax-highlight overflow-x-auto mb-4',
                    children: (0, a.jsx)('div', {
                      className: 'text-wrap',
                      dangerouslySetInnerHTML: {
                        __html: p ? (0, k.wv)(v.metadata[0].request[0]) : '',
                      },
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(H, {
                'data-sentry-element': 'LogsDivider',
                'data-sentry-source-file': 'DatabaseApiSelectionRender.tsx',
              }),
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding),
                children: [
                  (0, a.jsx)('h3', {
                    className:
                      'text-foreground-light mb-4 font-mono text-sm uppercase',
                    children: 'Response Metadata',
                  }),
                  (0, a.jsx)('pre', {
                    className: 'text-sm syntax-highlight overflow-x-auto mb-4',
                    children: (0, a.jsx)('div', {
                      dangerouslySetInnerHTML: {
                        __html: h ? (0, k.wv)(v.metadata[0].response[0]) : '',
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        K = s(10611),
        G = e => {
          var t, s, n, l, r, o, i, d;
          let { log: c } = e,
            u =
              null == c
                ? void 0
                : null === (s = c.metadata[0]) || void 0 === s
                  ? void 0
                  : null === (t = s.parsed[0]) || void 0 === t
                    ? void 0
                    : t.user_name,
            x =
              null == c
                ? void 0
                : null === (l = c.metadata[0]) || void 0 === l
                  ? void 0
                  : null === (n = l.parsed[0]) || void 0 === n
                    ? void 0
                    : n.session_id,
            m =
              null == c
                ? void 0
                : null === (o = c.metadata[0]) || void 0 === o
                  ? void 0
                  : null === (r = o.parsed[0]) || void 0 === r
                    ? void 0
                    : r.hint,
            f =
              null == c
                ? void 0
                : null === (d = c.metadata[0]) || void 0 === d
                  ? void 0
                  : null === (i = d.parsed[0]) || void 0 === i
                    ? void 0
                    : i.error_severity;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)('div', {
                className: Y.W.log_selection_x_padding,
                children: [
                  (0, a.jsx)('span', {
                    className: 'col-span-4 text-sm text-foreground-lighter',
                    children: 'Event message',
                  }),
                  (0, a.jsx)('div', {
                    className:
                      'text-wrap mt-2 overflow-x-auto whitespace-pre-wrap font-mono  text-xs text-foreground',
                    children: c.event_message,
                  }),
                ],
              }),
              (0, a.jsx)(H, {
                'data-sentry-element': 'LogsDivider',
                'data-sentry-source-file':
                  'DatabasePostgresSelectionRender.tsx',
              }),
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding, ' space-y-2'),
                children: [
                  (0, a.jsx)(k.Yj, {
                    label: 'Severity',
                    value: f,
                    valueRender: (0, a.jsx)(k.TK, { value: f }),
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'DatabasePostgresSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.tS, {
                    value: c.timestamp,
                    'data-sentry-element': 'SelectionDetailedTimestampRow',
                    'data-sentry-source-file':
                      'DatabasePostgresSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Postgres Username',
                    value: u,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'DatabasePostgresSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Session ID',
                    value: x,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'DatabasePostgresSelectionRender.tsx',
                  }),
                ],
              }),
              m &&
                (0, a.jsx)('div', {
                  className: 'mt-4 '.concat(Y.W.log_selection_x_padding),
                  children: (0, a.jsx)(K.b, {
                    variant: 'warning',
                    withIcon: !0,
                    title: m,
                  }),
                }),
              (0, a.jsx)(H, {
                'data-sentry-element': 'LogsDivider',
                'data-sentry-source-file':
                  'DatabasePostgresSelectionRender.tsx',
              }),
              (0, a.jsxs)('div', {
                className: Y.W.log_selection_x_padding,
                children: [
                  (0, a.jsx)('h3', {
                    className: 'mb-4 text-lg text-foreground',
                    children: 'Metadata',
                  }),
                  (0, a.jsx)('pre', {
                    className: 'syntax-highlight overflow-x-auto text-sm',
                    children: (0, a.jsx)('div', {
                      className: 'text-wrap',
                      dangerouslySetInnerHTML: {
                        __html: c.metadata ? (0, k.wv)(c.metadata[0]) : '',
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        q = s(11221),
        X = s(70114);
      let U = () =>
          (0, a.jsx)(q.Z, {
            className: 'bg-border my-1',
            'data-sentry-element': 'Separator',
            'data-sentry-component': 'LogRowSeparator',
            'data-sentry-source-file': 'DefaultPreviewSelectionRenderer.tsx',
          }),
        Q = e => {
          let { keyName: t, value: s } = e,
            n = 'timestamp' === t || 'created_at' === t || 'updated_at' === t,
            l = 'object' == typeof s && null !== s,
            r = 'log-viewer-expanded-'.concat(t),
            [o, i] = (0, p.useState)(() => {
              try {
                var e;
                return JSON.parse(
                  null !== (e = localStorage.getItem(r)) && void 0 !== e
                    ? e
                    : 'false'
                );
              } catch (e) {
                return !1;
              }
            }),
            [d, c] = (0, p.useState)(!1);
          return ((0, p.useEffect)(() => {
            localStorage.setItem(r, JSON.stringify(o));
          }, [o, r]),
          l)
            ? (0, a.jsxs)(a.Fragment, {
                children: [
                  (0, a.jsxs)('div', {
                    className: 'flex flex-col gap-1',
                    children: [
                      (0, a.jsx)('h3', {
                        className: 'text-foreground-lighter text-sm pl-3 py-2',
                        children: t,
                      }),
                      (0, a.jsxs)('div', {
                        children: [
                          (0, a.jsx)(V.d, {
                            hideLineNumbers: !0,
                            className: (0, _.cn)(
                              '!bg-surface-300 w-full pt-1 max-w-full border-none text-xs prose-sm transition-all',
                              { 'max-h-[80px]': !o, 'max-h-[400px]': o }
                            ),
                            value: JSON.stringify(s, null, 2),
                            language: 'json',
                          }),
                          (0, a.jsx)(T.z, {
                            className: 'mt-1 w-full',
                            size: 'tiny',
                            type: 'outline',
                            onClick: () => i(!o),
                            children: o ? 'Collapse' : 'Expand',
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)(U, {}),
                ],
              })
            : (0, a.jsxs)(D.h_, {
                'data-sentry-element': 'DropdownMenu',
                'data-sentry-component': 'PropertyRow',
                'data-sentry-source-file':
                  'DefaultPreviewSelectionRenderer.tsx',
                children: [
                  (0, a.jsx)(D.$F, {
                    className: 'group w-full',
                    'data-sentry-element': 'DropdownMenuTrigger',
                    'data-sentry-source-file':
                      'DefaultPreviewSelectionRenderer.tsx',
                    children: (0, a.jsx)('div', {
                      className: 'rounded-md w-full overflow-hidden',
                      children: (0, a.jsxs)('div', {
                        className: (0, _.cn)('flex py-2 w-full', {
                          'flex-col gap-1.5': o,
                          'items-center group-hover:bg-surface-300 gap-4': !o,
                        }),
                        children: [
                          (0, a.jsx)('h3', {
                            className: (0, _.cn)(
                              'pl-3 text-foreground-lighter text-sm text-left'
                            ),
                            children: t,
                          }),
                          (0, a.jsx)('div', {
                            className: (0, _.cn)(
                              'text-sm flex-1 font-mono text-foreground pr-3',
                              {
                                'max-w-full text-left rounded-md p-2 bg-surface-300 text-xs w-full':
                                  o,
                                'truncate text-right': !o,
                                'text-brand-600': d,
                              }
                            ),
                            children: o
                              ? (0, a.jsx)(V.d, {
                                  value: JSON.stringify(s, null, 2),
                                })
                              : n
                                ? (0, a.jsx)(C.c, {
                                    className: 'text-sm',
                                    utcTimestamp: s,
                                  })
                                : (0, a.jsx)('div', {
                                    className: 'text-sm truncate',
                                    children: JSON.stringify(s),
                                  }),
                          }),
                        ],
                      }),
                    }),
                  }),
                  (0, a.jsxs)(D.AW, {
                    align: 'start',
                    'data-sentry-element': 'DropdownMenuContent',
                    'data-sentry-source-file':
                      'DefaultPreviewSelectionRenderer.tsx',
                    children: [
                      (0, a.jsxs)(D.Xi, {
                        onClick: () => {
                          ((0, X.v)(String(s), () => {
                            (c(!0), g.Am.success('Copied to clipboard'));
                          }),
                            setTimeout(() => {
                              c(!1);
                            }, 1e3));
                        },
                        'data-sentry-element': 'DropdownMenuItem',
                        'data-sentry-source-file':
                          'DefaultPreviewSelectionRenderer.tsx',
                        children: ['Copy ', t],
                      }),
                      !l &&
                        (0, a.jsxs)(D.Xi, {
                          onClick: () => {
                            i(!o);
                          },
                          children: [o ? 'Collapse' : 'Expand', ' value'],
                        }),
                    ],
                  }),
                  (0, a.jsx)(U, {
                    'data-sentry-element': 'LogRowSeparator',
                    'data-sentry-source-file':
                      'DefaultPreviewSelectionRenderer.tsx',
                  }),
                ],
              });
        };
      var $ = e => {
        let { log: t } = e,
          { timestamp: s, event_message: n, metadata: l, id: r, ...o } = t;
        return (0, a.jsxs)('div', {
          className: 'p-2 flex flex-col',
          'data-sentry-component': 'DefaultPreviewSelectionRenderer',
          'data-sentry-source-file': 'DefaultPreviewSelectionRenderer.tsx',
          children: [
            (null == t ? void 0 : t.id) &&
              (0, a.jsx)(Q, { keyName: 'id', value: t.id }, 'id'),
            (null == t ? void 0 : t.timestamp) &&
              (0, a.jsx)(
                Q,
                { keyName: 'timestamp', value: t.timestamp },
                'timestamp'
              ),
            (null == t ? void 0 : t.event_message) &&
              (0, a.jsx)(
                Q,
                { keyName: 'event_message', value: t.event_message },
                'event_message'
              ),
            (null == t ? void 0 : t.metadata) &&
              (0, a.jsx)(
                Q,
                { keyName: 'metadata', value: t.metadata },
                'metadata'
              ),
            Object.entries(o).map(e => {
              let [t, s] = e;
              return (0, a.jsx)(Q, { keyName: t, value: s }, t);
            }),
          ],
        });
      };
      function ee(e) {
        return Object.fromEntries(
          Object.entries(e)
            .filter(e => {
              let [t] = e;
              return !['host', 'url'].includes(t);
            })
            .map(e => {
              let [t, s] = e;
              return 'headers' === t
                ? [
                    t,
                    s.map(e =>
                      Object.fromEntries(
                        Object.entries(e).filter(e => {
                          let [t] = e;
                          return !t.startsWith('_');
                        })
                      )
                    ),
                  ]
                : [t, s];
            })
        );
      }
      var et = e => {
          var t, s, n;
          let { log: l } = e,
            r = null === (t = l.metadata) || void 0 === t ? void 0 : t[0],
            o =
              null == r
                ? void 0
                : null === (s = r.request) || void 0 === s
                  ? void 0
                  : s[0],
            i =
              null == r
                ? void 0
                : null === (n = r.response) || void 0 === n
                  ? void 0
                  : n[0],
            d = null == o ? void 0 : o.method,
            c = null == i ? void 0 : i.status_code,
            u =
              (null == o ? void 0 : o.url) !== void 0
                ? new URL(null == o ? void 0 : o.url)
                : void 0,
            x = r.execution_time_ms,
            m = r.deployment_id;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding, ' space-y-2'),
                children: [
                  (0, a.jsx)(k.Yj, {
                    label: 'Status',
                    value: c,
                    valueRender: (0, a.jsx)(k.XA, { value: c }),
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionInvocationSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Method',
                    value: d,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionInvocationSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.tS, {
                    value: l.timestamp,
                    'data-sentry-element': 'SelectionDetailedTimestampRow',
                    'data-sentry-source-file':
                      'FunctionInvocationSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Execution Time',
                    value: ''.concat(x, 'ms'),
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionInvocationSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Execution ID',
                    value: r.execution_id,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionInvocationSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Deployment ID',
                    value: m,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionInvocationSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Log ID',
                    value: l.id,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionInvocationSelectionRender.tsx',
                  }),
                  void 0 !== u &&
                    (0, a.jsx)(k.Yj, {
                      label: 'Request Path',
                      value: u.pathname + u.search,
                    }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding),
                children: [
                  (0, a.jsx)('h3', {
                    className:
                      'text-foreground-light mb-4 font-mono text-sm uppercase',
                    children: 'Request Metadata',
                  }),
                  (0, a.jsx)('pre', {
                    className: 'text-sm syntax-highlight overflow-x-auto mb-4',
                    children: (0, a.jsx)('div', {
                      className: 'text-wrap',
                      dangerouslySetInnerHTML: {
                        __html: o ? (0, k.wv)(ee(o)) : '',
                      },
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding),
                children: [
                  (0, a.jsx)('h3', {
                    className:
                      'text-foreground-light mb-4 font-mono text-sm uppercase',
                    children: 'Response Metadata',
                  }),
                  (0, a.jsx)('pre', {
                    className: 'text-sm syntax-highlight overflow-x-auto mb-4',
                    children: (0, a.jsx)('div', {
                      dangerouslySetInnerHTML: {
                        __html: i ? (0, k.wv)(ee(i)) : '',
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        es = e => {
          let { log: t } = e,
            s = t.metadata[0];
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding),
                children: [
                  (0, a.jsx)('span', {
                    className: 'text-foreground-lighter text-sm col-span-4',
                    children: 'Event message',
                  }),
                  (0, a.jsx)('div', {
                    className:
                      'text-xs text-wrap font-mono text-foreground mt-2 whitespace-pre-wrap overflow-x-auto',
                    children: t.event_message,
                  }),
                ],
              }),
              (0, a.jsx)('div', {
                className:
                  'h-px w-full bg-panel-border-interior-light [[data-theme*=dark]_&]:bg-panel-border-interior-dark',
              }),
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding, ' space-y-2'),
                children: [
                  (0, a.jsx)(k.Yj, {
                    label: 'Severity',
                    value: s.level,
                    valueRender: (0, a.jsx)(k.TK, { value: s.level }),
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionLogsSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Deployment version',
                    value: s.version,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionLogsSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.tS, {
                    value: t.timestamp,
                    'data-sentry-element': 'SelectionDetailedTimestampRow',
                    'data-sentry-source-file':
                      'FunctionLogsSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Execution ID',
                    value: s.execution_id,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionLogsSelectionRender.tsx',
                  }),
                  (0, a.jsx)(k.Yj, {
                    label: 'Deployment ID',
                    value: s.deployment_id,
                    'data-sentry-element': 'SelectionDetailedRow',
                    'data-sentry-source-file':
                      'FunctionLogsSelectionRender.tsx',
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: ''.concat(Y.W.log_selection_x_padding),
                children: [
                  (0, a.jsx)('h3', {
                    className: 'text-lg text-foreground mb-4',
                    children: 'Metadata',
                  }),
                  (0, a.jsx)('pre', {
                    className: 'text-sm syntax-highlight overflow-x-auto',
                    children: (0, a.jsx)('div', {
                      className: 'text-wrap',
                      dangerouslySetInnerHTML: {
                        __html: s ? (0, k.wv)(s) : '',
                      },
                    }),
                  }),
                ],
              }),
            ],
          });
        },
        ea = s(89129);
      let en = e => {
          let { label: t, value: s, code: n } = e;
          return (0, a.jsxs)('div', {
            className: 'grid grid-cols-12',
            'data-sentry-component': 'DetailedJsonRow',
            'data-sentry-source-file': 'WarehouseSelectionRenderer.tsx',
            children: [
              (0, a.jsx)('span', {
                className: 'text-foreground-lighter text-sm col-span-3',
                children: t,
              }),
              (0, a.jsx)('span', {
                className: (0, _.cn)(
                  'text-foreground text-sm col-span-9 overflow-x-auto',
                  n && 'text-xs font-mono'
                ),
                children: (0, a.jsx)('pre', {
                  dangerouslySetInnerHTML: { __html: (0, k.wv)(s) },
                }),
              }),
            ],
          });
        },
        el = e => {
          let { log: t } = e;
          return (0, a.jsx)('div', {
            className: 'overflow-hidden overflow-x-auto space-y-6',
            'data-sentry-component': 'WarehouseSelectionRenderer',
            'data-sentry-source-file': 'WarehouseSelectionRenderer.tsx',
            children: Object.entries(t).map((e, t) => {
              let [s, n] = e;
              return (0, a.jsx)(
                'div',
                {
                  className: ''.concat(Y.W.log_selection_x_padding),
                  children:
                    n && 'object' == typeof n
                      ? (0, a.jsx)(en, { label: s, value: n })
                      : (0, a.jsx)(k.Yj, {
                          label: s,
                          value: null === n ? 'NULL ' : String(n),
                        }),
                },
                ''.concat(s, '-').concat(t)
              );
            }),
          });
        };
      var er = s(21786),
        eo = e => {
          let { log: t, onClose: s, queryType: n, isLoading: l, error: r } = e,
            o = (0, er.P)('logsDetailV2');
          return (0, a.jsx)('div', {
            className:
              'relative flex h-full flex-grow flex-col overflow-y-scroll bg-surface-100 border-t',
            'data-sentry-component': 'LogSelection',
            'data-sentry-source-file': 'LogSelection.tsx',
            children: (0, a.jsx)('div', {
              className: 'relative flex-grow flex flex-col h-full',
              children: (0, a.jsxs)(W.mQ, {
                defaultValue: 'details',
                className: 'flex flex-col h-full',
                'data-sentry-element': 'Tabs_Shadcn_',
                'data-sentry-source-file': 'LogSelection.tsx',
                children: [
                  (0, a.jsxs)(W.dr, {
                    className: 'px-2 pt-2',
                    'data-sentry-element': 'TabsList_Shadcn_',
                    'data-sentry-source-file': 'LogSelection.tsx',
                    children: [
                      (0, a.jsx)(W.SP, {
                        className: 'px-3',
                        value: 'details',
                        'data-sentry-element': 'TabsTrigger_Shadcn_',
                        'data-sentry-source-file': 'LogSelection.tsx',
                        children: 'Details',
                      }),
                      (0, a.jsx)(W.SP, {
                        disabled: !t,
                        className: 'px-3',
                        value: 'raw',
                        'data-sentry-element': 'TabsTrigger_Shadcn_',
                        'data-sentry-source-file': 'LogSelection.tsx',
                        children: 'Raw',
                      }),
                      (0, a.jsx)(T.z, {
                        type: 'text',
                        className:
                          'ml-auto absolute top-2 right-2 cursor-pointer transition hover:text-foreground h-6 w-6 px-0 py-0 flex items-center justify-center',
                        onClick: s,
                        'data-sentry-element': 'Button',
                        'data-sentry-source-file': 'LogSelection.tsx',
                        children: (0, a.jsx)(Z.Z, {
                          size: 14,
                          strokeWidth: 2,
                          className: 'text-foreground-lighter',
                          'data-sentry-element': 'X',
                          'data-sentry-source-file': 'LogSelection.tsx',
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)('div', {
                    className: 'flex-1 h-full',
                    children: l
                      ? (0, a.jsx)('div', {
                          className: 'p-4',
                          children: (0, a.jsx)(ea.A, {}),
                        })
                      : (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)(W.nU, {
                              className: 'space-y-6 h-full',
                              value: 'details',
                              children: (0, a.jsx)(() => {
                                if (r) return (0, a.jsx)(ed, { error: r });
                                if (!t) return (0, a.jsx)(ei, {});
                                if (o) return (0, a.jsx)($, { log: t });
                                switch (n) {
                                  case 'warehouse':
                                    return (0, a.jsx)(el, { log: t });
                                  case 'api':
                                    return (0, a.jsx)(J, { log: t });
                                  case 'database':
                                  case 'pg_cron':
                                    return (0, a.jsx)(G, { log: t });
                                  case 'fn_edge':
                                    return (0, a.jsx)(et, { log: t });
                                  case 'functions':
                                    return (0, a.jsx)(es, { log: t });
                                  case 'auth':
                                    return (0, a.jsx)(B, { log: t });
                                  default:
                                    return (0, a.jsx)($, { log: t });
                                }
                              }, {}),
                            }),
                            (0, a.jsx)(W.nU, {
                              value: 'raw',
                              children: (0, a.jsx)(V.d, {
                                hideLineNumbers: !0,
                                language: 'json',
                                className:
                                  'prose w-full pt-0 max-w-full border-none',
                                children: JSON.stringify(t, null, 2),
                              }),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
            }),
          });
        };
      function ei(e) {
        let {
          title: t = 'Select an Event',
          message: s = 'Select an Event to view the complete JSON payload',
        } = e;
        return (0, a.jsx)('div', {
          className: (0, _.cn)(
            'flex h-full w-full flex-col items-center justify-center gap-2 overflow-y-scroll text-center transition-all px-4'
          ),
          'data-sentry-component': 'LogDetailEmptyState',
          'data-sentry-source-file': 'LogSelection.tsx',
          children: (0, a.jsxs)('div', {
            className: (0, _.cn)(
              'flex w-full max-w-sm flex-col items-center justify-center gap-6 text-center transition-all delay-300 duration-500'
            ),
            children: [
              (0, a.jsxs)('div', {
                className:
                  'relative flex h-4 w-32 items-center rounded border border-control px-2',
                children: [
                  (0, a.jsx)('div', {
                    className: 'h-0.5 w-2/3 rounded-full bg-surface-300',
                  }),
                  (0, a.jsx)('div', {
                    className: 'absolute right-1 -bottom-4',
                    children: (0, a.jsx)(O.Z, {
                      size: '24',
                      strokeWidth: 1,
                      'data-sentry-element': 'MousePointerClick',
                      'data-sentry-source-file': 'LogSelection.tsx',
                    }),
                  }),
                ],
              }),
              (0, a.jsxs)('div', {
                className: 'flex flex-col gap-1',
                children: [
                  (0, a.jsx)('h3', {
                    className: 'text-sm text-foreground',
                    children: t,
                  }),
                  (0, a.jsx)('p', {
                    className: 'text-xs text-foreground-lighter',
                    children: s,
                  }),
                ],
              }),
            ],
          }),
        });
      }
      function ed(e) {
        let { error: t } = e;
        return (0, a.jsx)('pre', {
          'data-sentry-component': 'LogErrorState',
          'data-sentry-source-file': 'LogSelection.tsx',
          children: JSON.stringify(t, null, 2),
        });
      }
      var ec = s(90876);
      let eu = e => {
        let { error: t } = e;
        return (0, a.jsx)('div', {
          className: 'w-full prose min-w-full text-foreground text-sm',
          'data-sentry-component': 'DefaultErrorRenderer',
          'data-sentry-source-file': 'DefaultErrorRenderer.tsx',
          children: (0, a.jsx)(V.d, {
            title: 'Error fetching logs',
            language: 'json',
            hideLineNumbers: !0,
            value: 'string' == typeof t ? t : JSON.stringify(t, null, 2),
            className: 'w-full font-mono',
            'data-sentry-element': 'CodeBlock',
            'data-sentry-source-file': 'DefaultErrorRenderer.tsx',
          }),
        });
      };
      var ex = s(93761),
        em = s(25843);
      let ef = (0, p.createContext)({
        chevronAlign: 'left',
        justified: !0,
        type: 'default',
      });
      function ev(e) {
        let {
            children: t,
            className: s,
            onChange: n,
            openBehaviour: l = 'multiple',
            type: r = 'default',
            defaultValue: o,
            justified: i = !1,
            chevronAlign: d = 'left',
          } = e,
          c = [(0, em.Z)('accordion').variants[r].base];
        return (
          s && c.push(s),
          (0, a.jsx)(a.Fragment, {
            children: (0, a.jsx)(ex.fC, {
              type: l,
              onValueChange: function (e) {
                (n && n(e), e == typeof String && e.split(' '));
              },
              defaultValue: o,
              className: c.join(' '),
              'data-sentry-element': 'unknown',
              'data-sentry-source-file': 'Accordion.tsx',
              children: (0, a.jsx)(ef.Provider, {
                value: {
                  chevronAlign: d,
                  justified: i,
                  type: r,
                  defaultValue: o,
                },
                'data-sentry-element': 'unknown',
                'data-sentry-source-file': 'Accordion.tsx',
                children: (0, a.jsx)('div', { children: t }),
              }),
            }),
          })
        );
      }
      ev.Item = function (e) {
        let { children: t, className: s, header: n, id: l, disabled: r } = e,
          o = (0, em.Z)('accordion'),
          [d, c] = (0, p.useState)(!1),
          { type: u, justified: x, chevronAlign: m } = (0, p.useContext)(ef),
          f = [o.variants[u].trigger];
        (x && f.push(o.justified), s && f.push(s));
        let v = [o.chevron.base, o.chevron.align[m]];
        return (
          d && !r && v.unshift('!rotate-180'),
          (0, a.jsxs)(ex.ck, {
            value: l,
            className: o.variants[u].container,
            disabled: r,
            onClick: () => {
              c(!d);
            },
            'data-sentry-element': 'unknown',
            'data-sentry-component': 'Item',
            'data-sentry-source-file': 'Accordion.tsx',
            children: [
              (0, a.jsxs)(ex.xz, {
                className: f.join(' '),
                'data-sentry-element': 'unknown',
                'data-sentry-source-file': 'Accordion.tsx',
                children: [
                  n,
                  !r &&
                    (0, a.jsx)(i.Z, {
                      'aria-hidden': !0,
                      className: v.join(' '),
                      strokeWidth: 2,
                    }),
                ],
              }),
              (0, a.jsx)(ex.VY, {
                className: o.variants[u].content,
                'data-sentry-element': 'unknown',
                'data-sentry-source-file': 'Accordion.tsx',
                children: (0, a.jsx)('div', {
                  className: o.variants[u].panel,
                  children: t,
                }),
              }),
            ],
          })
        );
      };
      var ep = s(51571),
        eh = e => {
          let { error: t, isCustomQuery: s } = e;
          return (0, a.jsxs)('div', {
            className: 'flex flex-col gap-2 text-foreground-light',
            'data-sentry-component': 'ResourcesExceededErrorRenderer',
            'data-sentry-source-file': 'ResourcesExceededErrorRenderer.tsx',
            children: [
              (0, a.jsxs)('div', {
                className: 'flex flex-col gap-1 text-sm',
                children: [
                  (0, a.jsx)('p', {
                    children:
                      'This query requires too much memory to be executed.',
                  }),
                  (0, a.jsx)('p', {
                    children: s
                      ? 'Avoid selecting entire objects and instead select specific keys using dot notation.'
                      : 'Avoid querying across a large datetime range.',
                  }),
                  !s &&
                    (0, a.jsx)('p', {
                      children:
                        'Please contact support if this error persists.',
                    }),
                ],
              }),
              (0, a.jsx)(ev, {
                className: 'text-sm',
                justified: !1,
                openBehaviour: 'multiple',
                type: 'default',
                chevronAlign: 'left',
                size: 'small',
                iconPosition: 'left',
                'data-sentry-element': 'Accordion',
                'data-sentry-source-file': 'ResourcesExceededErrorRenderer.tsx',
                children: (0, a.jsx)(ev.Item, {
                  id: '1',
                  header: 'Full error message',
                  'data-sentry-element': 'unknown',
                  'data-sentry-source-file':
                    'ResourcesExceededErrorRenderer.tsx',
                  children: (0, a.jsx)(ep.Z.TextArea, {
                    size: 'tiny',
                    value: JSON.stringify(t, null, 2),
                    borderless: !0,
                    className: 'mt-4 w-full font-mono',
                    copy: !0,
                    rows: 5,
                    'data-sentry-element': 'unknown',
                    'data-sentry-source-file':
                      'ResourcesExceededErrorRenderer.tsx',
                  }),
                }),
              }),
            ],
          });
        },
        eg = s(94452),
        ej = e => {
          let {
              data: t = [],
              queryType: s,
              onHistogramToggle: r,
              isHistogramShowing: f,
              isLoading: k,
              isSaving: C,
              error: E,
              projectRef: Z,
              onRun: O,
              onSave: W,
              hasEditorValue: V,
              className: Y,
              collectionName: B,
              EmptyState: H,
              showHeader: J = !0,
              showHistogramToggle: K = !0,
              selectedLog: G,
              isSelectedLogLoading: q,
              selectedLogError: X,
              onSelectedLogChange: U,
            } = e,
            { profile: Q } = (0, N.Un)(),
            { show: $ } = (0, S.av)(),
            ee = (0, p.useRef)(null),
            [et, es] = (0, p.useState)(),
            [ea, en] = (0, p.useState)(!1),
            [el, er] = (0, p.useState)(null),
            ei = (0, b.Xo)(n.KA.CREATE, 'user_content', {
              resource: {
                type: 'log_sql',
                owner_id: null == Q ? void 0 : Q.id,
              },
              subject: { id: null == Q ? void 0 : Q.id },
            }),
            ed = t[0],
            ex = Object.keys(
              (function () {
                if (!ed) return {};
                let { timestamp: e, ...t } = ed;
                return e ? { timestamp: e, ...t } : ed;
              })() || {}
            ),
            em = ex.includes('id'),
            ef = ex.includes('timestamp'),
            ev = 'logs-explorer-context-menu',
            ep = ex.map((e, t) => ({
              key: 'logs-column-'.concat(t),
              name: e,
              resizable: !0,
              renderCell: t => {
                let { row: s } = t;
                return (0, a.jsx)('span', {
                  onContextMenu: e => $(e, { id: ev }),
                  children: eR(null == s ? void 0 : s[e]),
                });
              },
              renderHeaderCell: t =>
                (0, a.jsx)('div', {
                  className: 'flex items-center',
                  children: e,
                }),
              minWidth: 128,
            })),
            ej = ep;
          if (s)
            switch (s) {
              case 'warehouse':
                ej = ep;
                break;
              case 'api':
                ej = M;
                break;
              case 'database':
              case 'pg_cron':
                ej = A;
                break;
              case 'fn_edge':
                ej = z;
                break;
              case 'functions':
                ej = F;
                break;
              case 'auth':
                ej = I;
                break;
              default:
                ej = ed && (0, ec.Oy)(ed) ? P : ep;
            }
          let ey = (0, p.useMemo)(() => JSON.stringify(t), [t]),
            [eb, ew] = (0, p.useMemo)(() => {
              let e = [...new Set(t)];
              if (!em) return [e, {}];
              let s = e.reduce((e, t) => ((e[t.id] = t), e), {});
              return [e, s];
            }, [t, em]),
            eN = (0, p.useMemo)(
              () =>
                em && ef
                  ? Object.values(ew).sort((e, t) => t.timestamp - e.timestamp)
                  : eb,
              [eb, em, ef, ew]
            ),
            eS = (0, p.useCallback)(
              (e, t) =>
                (0, a.jsx)(
                  h.X2,
                  { ...t, isRowSelected: !1, selectedCellIdx: void 0 },
                  e
                ),
              []
            ),
            eR = e =>
              e && 'object' == typeof e
                ? JSON.stringify(e)
                : null === e
                  ? 'NULL'
                  : String(e);
          return ((0, p.useEffect)(() => {
            ((G || q) && en(!0), q || G || er(null));
          }, [G, q]),
          t)
            ? (0, a.jsxs)('section', {
                className: 'h-full flex w-full flex-col flex-1',
                'data-sentry-component': 'LogTable',
                'data-sentry-source-file': 'LogTable.tsx',
                children: [
                  !s &&
                    (0, a.jsx)(
                      () =>
                        (0, a.jsxs)('div', {
                          className: (0, _.cn)(
                            'flex w-full items-center justify-between border-t bg-surface-100 px-5 py-2',
                            Y,
                            { hidden: !J }
                          ),
                          'data-sentry-component': 'LogsExplorerTableHeader',
                          'data-sentry-source-file': 'LogTable.tsx',
                          children: [
                            (0, a.jsx)('div', {
                              className: 'flex items-center gap-2',
                              children: (0, a.jsxs)(D.h_, {
                                'data-sentry-element': 'DropdownMenu',
                                'data-sentry-source-file': 'LogTable.tsx',
                                children: [
                                  (0, a.jsx)(D.$F, {
                                    asChild: !0,
                                    'data-sentry-element':
                                      'DropdownMenuTrigger',
                                    'data-sentry-source-file': 'LogTable.tsx',
                                    children: (0, a.jsxs)(T.z, {
                                      type: 'text',
                                      iconRight: (0, a.jsx)(i.Z, { size: 14 }),
                                      'data-sentry-element': 'Button',
                                      'data-sentry-source-file': 'LogTable.tsx',
                                      children: [
                                        'Results ',
                                        t && t.length
                                          ? '('.concat(t.length, ')')
                                          : '',
                                      ],
                                    }),
                                  }),
                                  (0, a.jsxs)(D.AW, {
                                    align: 'start',
                                    'data-sentry-element':
                                      'DropdownMenuContent',
                                    'data-sentry-source-file': 'LogTable.tsx',
                                    children: [
                                      (0, a.jsxs)(D.Xi, {
                                        onClick: () => {
                                          var e;
                                          null === (e = ee.current) ||
                                            void 0 === e ||
                                            e.click();
                                        },
                                        className: 'space-x-2',
                                        'data-sentry-element':
                                          'DropdownMenuItem',
                                        'data-sentry-source-file':
                                          'LogTable.tsx',
                                        children: [
                                          (0, a.jsx)(d.Z, {
                                            size: 14,
                                            'data-sentry-element': 'Download',
                                            'data-sentry-source-file':
                                              'LogTable.tsx',
                                          }),
                                          (0, a.jsx)('div', {
                                            children: 'Download CSV',
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)(D.Xi, {
                                        onClick: () => {
                                          let e = v().unparse(t);
                                          (0, w.vQ)(e, () => {
                                            g.Am.success(
                                              'Results copied to clipboard'
                                            );
                                          });
                                        },
                                        className: 'space-x-2',
                                        'data-sentry-element':
                                          'DropdownMenuItem',
                                        'data-sentry-source-file':
                                          'LogTable.tsx',
                                        children: [
                                          (0, a.jsx)(c.Z, {
                                            size: 14,
                                            'data-sentry-element': 'Clipboard',
                                            'data-sentry-source-file':
                                              'LogTable.tsx',
                                          }),
                                          (0, a.jsx)('div', {
                                            children: 'Copy as CSV',
                                          }),
                                        ],
                                      }),
                                      (0, a.jsxs)(D.Xi, {
                                        onClick: () => {
                                          (0, w.vQ)(ey, () => {
                                            g.Am.success(
                                              'Results copied to clipboard'
                                            );
                                          });
                                        },
                                        className: 'space-x-2',
                                        'data-sentry-element':
                                          'DropdownMenuItem',
                                        'data-sentry-source-file':
                                          'LogTable.tsx',
                                        children: [
                                          (0, a.jsx)(c.Z, {
                                            size: 14,
                                            'data-sentry-element': 'Clipboard',
                                            'data-sentry-source-file':
                                              'LogTable.tsx',
                                          }),
                                          (0, a.jsx)('div', {
                                            children: 'Copy as JSON',
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            (0, a.jsx)('div', {
                              className: 'hidden',
                              children: (0, a.jsx)(y.Z, {
                                buttonType: 'text',
                                data: t,
                                'data-sentry-element': 'CSVButton',
                                'data-sentry-source-file': 'LogTable.tsx',
                                children: (0, a.jsx)('div', {
                                  ref: ee,
                                  children: 'Download CSV',
                                }),
                              }),
                            }),
                            K &&
                              (0, a.jsx)('div', {
                                className: 'flex items-center gap-2',
                                children: (0, a.jsx)(T.z, {
                                  type: 'default',
                                  icon: f
                                    ? (0, a.jsx)(u.Z, {})
                                    : (0, a.jsx)(x.Z, {}),
                                  onClick: r,
                                  children: 'Histogram',
                                }),
                              }),
                            (0, a.jsxs)('div', {
                              className: 'space-x-2',
                              children: [
                                l.Qy &&
                                  (0, a.jsx)(j.u, {
                                    type: 'default',
                                    onClick: W,
                                    loading: C,
                                    disabled: !ei || !V,
                                    tooltip: {
                                      content: {
                                        side: 'bottom',
                                        text: ei
                                          ? void 0
                                          : 'You need additional permissions to save your query',
                                      },
                                    },
                                    children: 'Save query',
                                  }),
                                (0, a.jsx)(T.z, {
                                  title: 'run-logs-query',
                                  type: V ? 'primary' : 'alternative',
                                  disabled: !V,
                                  onClick: O,
                                  iconRight: (0, a.jsx)(m.Z, { size: 12 }),
                                  loading: k,
                                  'data-sentry-element': 'Button',
                                  'data-sentry-source-file': 'LogTable.tsx',
                                  children: 'Run',
                                }),
                              ],
                            }),
                          ],
                        }),
                      {}
                    ),
                  (0, a.jsxs)(L.pO, {
                    direction: 'horizontal',
                    'data-sentry-element': 'ResizablePanelGroup',
                    'data-sentry-source-file': 'LogTable.tsx',
                    children: [
                      (0, a.jsxs)(L.ee, {
                        defaultSize: G ? 60 : 100,
                        'data-sentry-element': 'ResizablePanel',
                        'data-sentry-source-file': 'LogTable.tsx',
                        children: [
                          (0, a.jsx)(h.ZP, {
                            role: 'table',
                            style: { height: '100%' },
                            className: (0, _.cn)(
                              'flex-1 flex-grow h-full border-0',
                              {
                                'data-grid--simple-logs': s,
                                'data-grid--logs-explorer': !s,
                              }
                            ),
                            rowHeight: 40,
                            headerRowHeight: s ? 0 : 28,
                            onSelectedCellChange: e => {
                              es(e);
                            },
                            onCellClick: e => {
                              var t;
                              (er((t = e.row)), null == U || U(t));
                            },
                            columns: ej,
                            rowClass: e =>
                              (0, _.cn)(
                                'font-mono tracking-tight !bg-studio hover:!bg-surface-100 cursor-pointer',
                                {
                                  '!bg-surface-200 rdg-row--focused': o()(
                                    e,
                                    el
                                  ),
                                }
                              ),
                            rows: eN,
                            rowKeyGetter: e => (em ? e.id : JSON.stringify(e)),
                            renderers: {
                              renderRow: eS,
                              noRowsFallback: k
                                ? null
                                : (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      0 === eN.length &&
                                        !E &&
                                        (0, a.jsx)(
                                          () => H || (0, a.jsx)(eg.i, {}),
                                          {}
                                        ),
                                      E &&
                                        (0, a.jsx)(() => {
                                          var e;
                                          if (!E) return null;
                                          let t = {
                                            isCustomQuery: !s,
                                            error: E,
                                          };
                                          return 'object' == typeof E &&
                                            (null === (e = E.error) ||
                                            void 0 === e
                                              ? void 0
                                              : e.errors.find(
                                                  e =>
                                                    'resourcesExceeded' ===
                                                    e.reason
                                                ))
                                            ? (0, a.jsx)(eh, { ...t })
                                            : (0, a.jsx)('div', {
                                                className:
                                                  'text-foreground flex gap-2 font-mono px-6',
                                                'data-sentry-component':
                                                  'RenderErrorAlert',
                                                'data-sentry-source-file':
                                                  'LogTable.tsx',
                                                children: (0, a.jsx)(eu, {
                                                  ...t,
                                                  'data-sentry-element':
                                                    'DefaultErrorRenderer',
                                                  'data-sentry-source-file':
                                                    'LogTable.tsx',
                                                }),
                                              });
                                        }, {}),
                                    ],
                                  }),
                            },
                            'data-sentry-element': 'DataGrid',
                            'data-sentry-source-file': 'LogTable.tsx',
                          }),
                          (0, R.createPortal)(
                            (0, a.jsx)(S.v2, {
                              id: ev,
                              animation: !1,
                              children: (0, a.jsxs)(S.ck, {
                                onClick: () => {
                                  if (et) {
                                    var e;
                                    let { row: t, column: s } = et,
                                      a = eR(
                                        null !==
                                          (e =
                                            null == t ? void 0 : t[s.name]) &&
                                          void 0 !== e
                                          ? e
                                          : ''
                                      );
                                    (0, w.vQ)(a);
                                  }
                                },
                                children: [
                                  (0, a.jsx)(c.Z, { size: 14 }),
                                  (0, a.jsx)('span', {
                                    className: 'ml-2 text-xs',
                                    children: 'Copy cell content',
                                  }),
                                ],
                              }),
                            }),
                            document.body
                          ),
                        ],
                      }),
                      (0, a.jsx)(L.Dp, {
                        withHandle: !0,
                        'data-sentry-element': 'ResizableHandle',
                        'data-sentry-source-file': 'LogTable.tsx',
                      }),
                      ea &&
                        (0, a.jsx)(L.ee, {
                          minSize: 40,
                          defaultSize: 50,
                          children: (0, a.jsx)(eo, {
                            isLoading: q || !1,
                            projectRef: Z,
                            onClose: () => {
                              (null == U || U(null), en(!1));
                            },
                            log: G,
                            error: X,
                            queryType: s,
                            collectionName: B,
                          }),
                        }),
                    ],
                  }),
                ],
              })
            : null;
        };
    },
    2216: function (e, t, s) {
      var a = s(97458),
        n = s(85817),
        l = s(28977),
        r = s.n(l),
        o = s(52983),
        i = s(14500),
        d = s(90839),
        c = s(10611),
        u = s(89831),
        x = s(39130);
      t.Z = e => {
        let { to: t, from: s, onChange: l, helpers: m } = e,
          f = (0, u.PJ)(m),
          [v, p] = (0, o.useState)(t || s ? '' : f.text),
          h = m.find(e => t === e.calcTo() && s === e.calcFrom());
        return (
          (0, o.useEffect)(() => {
            h && v !== h.text ? p(h.text) : !h && (t || s) && p('');
          }, [h, t, s]),
          (0, a.jsxs)('div', {
            className: 'flex items-center',
            'data-sentry-component': 'DatePickers',
            'data-sentry-source-file': 'Logs.DatePickers.tsx',
            children: [
              (0, a.jsxs)(i.h_, {
                'data-sentry-element': 'DropdownMenu',
                'data-sentry-source-file': 'Logs.DatePickers.tsx',
                children: [
                  (0, a.jsx)(i.$F, {
                    asChild: !0,
                    'data-sentry-element': 'DropdownMenuTrigger',
                    'data-sentry-source-file': 'Logs.DatePickers.tsx',
                    children: (0, a.jsx)(d.z, {
                      type: v ? 'secondary' : 'default',
                      icon: (0, a.jsx)(x.Z, { size: 12 }),
                      className: 'rounded-r-none',
                      'data-sentry-element': 'Button',
                      'data-sentry-source-file': 'Logs.DatePickers.tsx',
                      children: (0, a.jsx)('span', {
                        children: (null == h ? void 0 : h.text) || f.text,
                      }),
                    }),
                  }),
                  (0, a.jsx)(i.AW, {
                    side: 'bottom',
                    align: 'start',
                    'data-sentry-element': 'DropdownMenuContent',
                    'data-sentry-source-file': 'Logs.DatePickers.tsx',
                    children: (0, a.jsx)(i._x, {
                      onValueChange: e => {
                        let t = m.find(t => t.text === e);
                        l && t && l({ to: t.calcTo(), from: t.calcFrom() });
                      },
                      value: (null == h ? void 0 : h.text) || '',
                      'data-sentry-element': 'DropdownMenuRadioGroup',
                      'data-sentry-source-file': 'Logs.DatePickers.tsx',
                      children: m.map(e =>
                        (0, a.jsx)(
                          i.qB,
                          {
                            value: e.text,
                            disabled: e.disabled,
                            children: (0, a.jsx)('span', {
                              className: [
                                e.disabled
                                  ? 'text-foreground-light cursor-not-allowed'
                                  : '',
                              ].join(' '),
                              children: e.text,
                            }),
                          },
                          e.text
                        )
                      ),
                    }),
                  }),
                ],
              }),
              (0, a.jsx)(n.M, {
                triggerButtonClassName: 'rounded-l-none',
                triggerButtonType: h ? 'default' : 'secondary',
                triggerButtonTitle: 'Custom',
                onChange: e => {
                  (p(''), l && l(e));
                },
                to: v ? void 0 : t,
                from: v ? void 0 : s,
                renderFooter: e => {
                  let { to: t, from: s } = e;
                  if (t && s && Math.abs(r()(s).diff(r()(t), 'day')) > u.$K)
                    return (0, a.jsx)(c.b, {
                      title: '',
                      variant: 'warning',
                      className: 'mx-3 pl-2 pr-2 pt-1 pb-2',
                      children:
                        'Large ranges may result in memory errors for big projects.',
                    });
                },
                'data-sentry-element': 'DatePicker',
                'data-sentry-source-file': 'Logs.DatePickers.tsx',
              }),
            ],
          })
        );
      };
    },
    58397: function (e, t, s) {
      s.d(t, {
        TK: function () {
          return m;
        },
        VG: function () {
          return u;
        },
        VK: function () {
          return i;
        },
        XA: function () {
          return x;
        },
        Yj: function () {
          return c;
        },
        tS: function () {
          return d;
        },
        wv: function () {
          return f;
        },
      });
      var a = s(97458),
        n = s(66318);
      s(52983);
      var l = s(90876),
        r = s(44735),
        o = s(90953);
      s(28977);
      let i = e => {
          let { children: t } = e;
          return (0, a.jsx)('div', {
            className: 'flex h-full w-full items-center gap-4',
            'data-sentry-component': 'RowLayout',
            'data-sentry-source-file': 'LogsFormatters.tsx',
            children: t,
          });
        },
        d = e => {
          let { value: t } = e;
          return (0, a.jsx)(c, {
            label: 'Timestamp',
            value: (0, l.Sj)(t) ? (0, l.tI)(t) : String(t),
            'data-sentry-element': 'SelectionDetailedRow',
            'data-sentry-component': 'SelectionDetailedTimestampRow',
            'data-sentry-source-file': 'LogsFormatters.tsx',
          });
        },
        c = e => {
          let { label: t, value: s, valueRender: l } = e;
          return (0, a.jsxs)('div', {
            className: 'group flex items-center gap-2 flex-wrap',
            'data-sentry-component': 'SelectionDetailedRow',
            'data-sentry-source-file': 'LogsFormatters.tsx',
            children: [
              (0, a.jsx)('span', {
                className:
                  'text-foreground-lighter text-sm col-span-3 whitespace-pre-wrap',
                children: t,
              }),
              (0, a.jsx)('span', {
                title: s,
                className:
                  'truncate font-mono text-foreground text-sm whitespace-pre-wrap break-all',
                children: null != l ? l : s,
              }),
              (0, a.jsx)(n.Z, {
                iconOnly: !0,
                text: s,
                className: 'group-hover:opacity-100 opacity-0 p-0 h-6 w-6',
                type: 'text',
                title: 'Copy to clipboard',
                'data-sentry-element': 'CopyButton',
                'data-sentry-source-file': 'LogsFormatters.tsx',
              }),
            ],
          });
        },
        u = e => {
          let { value: t, className: s } = e;
          return (0, a.jsx)('span', {
            className: 'font-mono text-xs truncate ' + s,
            'data-sentry-component': 'TextFormatter',
            'data-sentry-source-file': 'LogsFormatters.tsx',
            children: t,
          });
        },
        x = e => {
          let { value: t } = e;
          if (!t)
            return (0, a.jsx)('div', {
              children: (0, a.jsx)('label', {
                className: 'text-xs text-border-stronger',
                children: 'No data',
              }),
            });
          switch (t.toString().split('')[0]) {
            case '1':
            case '2':
              return (0, a.jsx)('div', {
                className: 'flex h-full items-center',
                children: (0, a.jsx)('div', {
                  className:
                    'relative flex h-6 items-center justify-center rounded border bg-surface-200 px-2 py-1 text-center',
                  children: (0, a.jsx)('label', {
                    className:
                      'block font-mono text-sm text-foreground-lighter',
                    children: t,
                  }),
                }),
              });
            case '5':
              return (0, a.jsx)('div', {
                className: 'flex h-full items-center',
                children: (0, a.jsx)('div', {
                  className:
                    'relative flex h-6 items-center justify-center rounded bg-red-400 px-2 py-1 text-center  ',
                  children: (0, a.jsx)('label', {
                    className: 'block font-mono text-sm text-red-1100',
                    children: t,
                  }),
                }),
              });
            case '4':
            case '3':
              return (0, a.jsx)('div', {
                className: 'flex h-full items-center',
                children: (0, a.jsx)('div', {
                  className:
                    'relative flex h-6 items-center justify-center rounded bg-amber-400 px-2 py-1 text-center  ',
                  children: (0, a.jsx)('label', {
                    className: 'block font-mono text-sm text-amber-1100',
                    children: t,
                  }),
                }),
              });
            default:
              return (0, a.jsx)('div', {
                className: 'flex h-full items-center',
                children: (0, a.jsx)('div', {
                  className:
                    'relative flex h-6 items-center justify-center rounded bg-surface-100 px-2 py-1 text-center  ',
                  children: (0, a.jsx)('label', {
                    className:
                      'block font-mono text-sm text-foreground-lighter',
                    children: t,
                  }),
                }),
              });
          }
        },
        m = e => {
          let { value: t, uppercase: s = !0 } = e;
          if (!t)
            return (0, a.jsx)('div', {
              children: (0, a.jsx)('label', {
                className: 'text-xs text-border-stronger',
                children: 'No data',
              }),
            });
          let n = t.toUpperCase(),
            l = s ? n : t,
            i = e => {
              let { className: t, children: s } = e;
              return (0, a.jsx)('div', {
                className: 'w-24 flex items-center h-full '.concat(t),
                'data-sentry-component': 'Layout',
                'data-sentry-source-file': 'LogsFormatters.tsx',
                children: s,
              });
            };
          switch (n) {
            case 'UNCAUGHTEXCEPTION':
            case 'PANIC':
            case 'FATAL':
            case 'ERROR':
              return (0, a.jsxs)(i, {
                className: 'gap-1',
                children: [
                  (0, a.jsx)('div', {
                    className: ' p-0.5 rounded !text-red-900',
                    children: (0, a.jsx)(r.Z, { size: 14, strokeWidth: 2 }),
                  }),
                  (0, a.jsx)('span', {
                    className: '!text-red-900 !block titlecase',
                    children: l,
                  }),
                ],
              });
            case 'INFO':
            case 'DEBUG':
              return (0, a.jsxs)(i, {
                className: 'gap-1',
                children: [
                  (0, a.jsx)('div', {
                    className: ' p-0.5 rounded !text-blue-900',
                    children: (0, a.jsx)(r.Z, { size: 14, strokeWidth: 2 }),
                  }),
                  (0, a.jsx)('span', {
                    className: '!text-blue-900 !block titlecase',
                    children: l,
                  }),
                ],
              });
            case 'LOG':
              return (0, a.jsxs)(i, {
                className: 'gap-1',
                children: [
                  (0, a.jsx)('div', {
                    className: ' p-0.5 rounded !text-blue-900',
                    children: (0, a.jsx)(o.Z, { size: 14, strokeWidth: 2 }),
                  }),
                  (0, a.jsx)('span', {
                    className: '!text-blue-900 !block titlecase',
                    children: l,
                  }),
                ],
              });
            case 'WARNING':
              return (0, a.jsxs)(i, {
                className: 'gap-1',
                children: [
                  (0, a.jsx)('div', {
                    className: ' p-0.5 rounded !text-amber-900',
                    children: (0, a.jsx)(r.Z, { size: 14, strokeWidth: 2 }),
                  }),
                  (0, a.jsx)('span', {
                    className: '!text-amber-900 !block titlecase',
                    children: l,
                  }),
                ],
              });
            default:
              return (0, a.jsx)(i, {
                children: (0, a.jsx)('div', {
                  className:
                    'relative rounded px-2 py-1 text-center h-6 flex justify-center items-center bg-surface-100',
                  children: (0, a.jsx)('label', {
                    className:
                      'block font-mono text-sm text-foreground-lighter',
                    children: l,
                  }),
                }),
              });
          }
        };
      function f(e) {
        let t = JSON.stringify(e, null, 2);
        return (t = t
          .replace(/&/g, '&amp;')
          .replace(/</g, '&lt;')
          .replace(/>/g, '&gt;'))
          .replace(
            /("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?)/g,
            function (e) {
              var t = 'number text-tomato-900';
              return (
                /^"/.test(e)
                  ? (t = /:$/.test(e)
                      ? 'key text-foreground'
                      : 'string text-brand-600')
                  : /true|false/.test(e)
                    ? (t = 'boolean text-blue-900')
                    : /null/.test(e) && (t = 'null text-amber-1100'),
                '<span class="' + t + '">' + e + '</span>'
              );
            }
          )
          .split('\n')
          .map(e => '<span class="line text-xs">'.concat(e, '</span>'))
          .join('\n');
      }
    },
    94452: function (e, t, s) {
      s.d(t, {
        i: function () {
          return r;
        },
      });
      var a = s(97458),
        n = s(77270);
      let l = () =>
        (0, a.jsx)('div', {
          className:
            'relative flex h-4 w-32 items-center rounded border border-dashed border-stronger px-2',
          'data-sentry-component': 'EmptyStateRow',
          'data-sentry-source-file': 'LogsTableEmptyState.tsx',
        });
      function r(e) {
        let {
          title: t = 'No results found',
          description: s = 'Try another search or adjust the filters',
        } = e;
        return (0, a.jsxs)('div', {
          className:
            'flex scale-100 flex-col items-center justify-center gap-6 text-center opacity-100 h-full',
          'data-sentry-component': 'LogsTableEmptyState',
          'data-sentry-source-file': 'LogsTableEmptyState.tsx',
          children: [
            (0, a.jsxs)('div', {
              className: 'flex flex-col gap-1 relative',
              children: [
                (0, a.jsx)(l, {
                  'data-sentry-element': 'EmptyStateRow',
                  'data-sentry-source-file': 'LogsTableEmptyState.tsx',
                }),
                (0, a.jsx)(l, {
                  'data-sentry-element': 'EmptyStateRow',
                  'data-sentry-source-file': 'LogsTableEmptyState.tsx',
                }),
                (0, a.jsx)(l, {
                  'data-sentry-element': 'EmptyStateRow',
                  'data-sentry-source-file': 'LogsTableEmptyState.tsx',
                }),
                (0, a.jsx)(n.Z, {
                  size: 30,
                  className:
                    'absolute right-3 -bottom-2 text-foreground-lighter',
                  'data-sentry-element': 'Search',
                  'data-sentry-source-file': 'LogsTableEmptyState.tsx',
                }),
              ],
            }),
            (0, a.jsxs)('div', {
              className: 'flex flex-col gap-1 px-5',
              children: [
                (0, a.jsx)('h3', {
                  className: 'text-lg text-foreground',
                  children: t,
                }),
                (0, a.jsx)('p', {
                  className: 'text-sm max-w-xs text-foreground-lighter',
                  children: s,
                }),
              ],
            }),
          ],
        });
      }
    },
    60277: function (e, t, s) {
      var a = s(97458),
        n = s(29790),
        l = s(52983),
        r = s(84012),
        o = s(40577),
        i = s(90839);
      t.Z = e => {
        let {
            onClick: t,
            buttonType: s = 'default',
            icon: d,
            children: c,
            disabled: u,
            data: x,
            title: m,
          } = e,
          f = (0, l.useRef)(null),
          v = () => {
            var e;
            null === (e = f.current) || void 0 === e || e.link.click();
          },
          p = (0, l.useMemo)(() => {
            let e = null == x ? void 0 : x[0];
            if (!e || !x) return;
            let t = Object.keys(e);
            return x.map(e =>
              t.reduce(
                (t, s) => (
                  'object' == typeof e[s]
                    ? (t[s] = JSON.stringify(e[s]))
                    : (t[s] = String(e[s])),
                  t
                ),
                {}
              )
            );
          }, [JSON.stringify(x)]);
        return (0, a.jsxs)(a.Fragment, {
          children: [
            (0, a.jsx)(r.CSVLink, {
              ref: f,
              className: 'hidden',
              data: p || [],
              filename: 'supabase_logs.csv',
              title: m,
              'data-sentry-element': 'CSVLink',
              'data-sentry-source-file': 'CSVButton.tsx',
            }),
            (0, a.jsxs)(o.u, {
              'data-sentry-element': 'Tooltip',
              'data-sentry-source-file': 'CSVButton.tsx',
              children: [
                (0, a.jsx)(o.aJ, {
                  asChild: !0,
                  'data-sentry-element': 'TooltipTrigger',
                  'data-sentry-source-file': 'CSVButton.tsx',
                  children: (0, a.jsx)(i.z, {
                    type: s,
                    icon: d || (0, a.jsx)(n.Z, {}),
                    disabled: u,
                    className: 'px-1.5',
                    onClick: e => {
                      (t && t(e), v());
                    },
                    'data-sentry-element': 'Button',
                    'data-sentry-source-file': 'CSVButton.tsx',
                    children: c,
                  }),
                }),
                (0, a.jsx)(o._v, {
                  side: 'bottom',
                  className: 'text-xs',
                  'data-sentry-element': 'TooltipContent',
                  'data-sentry-source-file': 'CSVButton.tsx',
                  children: 'Download logs as CSV',
                }),
              ],
            }),
          ],
        });
      };
    },
    66318: function (e, t, s) {
      var a = s(97458),
        n = s(62507),
        l = s(57304),
        r = s(52983),
        o = s(45536),
        i = s(90839),
        d = s(65092);
      t.Z = e => {
        var t;
        let {
            text: s,
            iconOnly: c = !1,
            children: u,
            onClick: x,
            copyLabel: m = 'Copy',
            copiedLabel: f = 'Copied',
            ...v
          } = e,
          [p, h] = (0, r.useState)(!1);
        return (
          (0, r.useEffect)(() => {
            if (!p) return;
            let e = setTimeout(() => h(!1), 2e3);
            return () => clearTimeout(e);
          }, [p]),
          (0, a.jsx)(i.z, {
            onClick: async e => {
              (h(!0), await (0, o.vQ)(s), null == x || x(e));
            },
            ...v,
            className: (0, d.cn)({ 'px-1': c }, v.className),
            icon: p
              ? (0, a.jsx)(n.Z, { strokeWidth: 2, className: 'text-brand' })
              : null !== (t = v.icon) && void 0 !== t
                ? t
                : (0, a.jsx)(l.Z, {}),
            'data-sentry-element': 'Button',
            'data-sentry-component': 'CopyButton',
            'data-sentry-source-file': 'CopyButton.tsx',
            children:
              !c &&
              (0, a.jsx)(a.Fragment, { children: null != u ? u : p ? f : m }),
          })
        );
      };
    },
    9596: function (e, t, s) {
      var a = s(97458);
      t.Z = e => {
        let { children: t, active: s, className: n } = e;
        return (0, a.jsx)('div', {
          className: [
            n,
            'flex h-full flex-grow transition-opacity ',
            s ? 'opacity-30' : 'opacity-100',
          ].join(' '),
          'data-sentry-component': 'LoadingOpacity',
          'data-sentry-source-file': 'LoadingOpacity.tsx',
          children: t,
        });
      };
    },
    54354: function (e, t, s) {
      s.d(t, {
        c: function () {
          return j;
        },
        w: function () {
          return p;
        },
      });
      var a = s(97458),
        n = s(52983),
        l = s(40577),
        r = s(65092),
        o = s(28977),
        i = s.n(o),
        d = s(60192),
        c = s.n(d),
        u = s(13516),
        x = s.n(u),
        m = s(57304);
      (i().extend(c()), i().extend(x()));
      let f = e =>
          i()
            .unix(Number(e) / 1e3 / 1e3)
            .toISOString(),
        v = e => {
          let t = 16 === String(e).length;
          return !Number.isNaN(Number(e)) && t;
        },
        p = e => {
          let { utcTimestamp: t, format: s } = e,
            a = v(t) ? f(t) : t;
          return i().utc(a).local().format(s);
        },
        h = e => {
          let { utcTimestamp: t, format: s } = e,
            a = v(t) ? f(t) : t;
          return i().utc(a).format(s);
        },
        g = e => {
          let { utcTimestamp: t } = e,
            s = v(t) ? f(t) : t;
          return i().utc(s).fromNow();
        },
        j = e => {
          let {
              utcTimestamp: t,
              className: s,
              displayAs: o = 'local',
              format: i = 'DD MMM  HH:mm:ss',
              labelFormat: d = 'DD MMM HH:mm:ss',
            } = e,
            c = p({ utcTimestamp: t, format: i }),
            u = h({ utcTimestamp: t, format: i }),
            x = g({ utcTimestamp: t }),
            [f, v] = (0, n.useState)('start'),
            j = (0, n.useRef)(null),
            y = Intl.DateTimeFormat().resolvedOptions().timeZone;
          (0, n.useEffect)(() => {
            let e = () => {
              if (j.current) {
                let e = j.current.getBoundingClientRect(),
                  t = window.innerHeight;
                v(e.top < t / 2 ? 'start' : 'end');
              }
            };
            return (
              e(),
              window.addEventListener('scroll', e),
              window.addEventListener('resize', e),
              () => {
                (window.removeEventListener('scroll', e),
                  window.removeEventListener('resize', e));
              }
            );
          }, []);
          let b = e => {
            let { label: t, value: s } = e,
              [l, o] = (0, n.useState)(!1);
            return (0, a.jsxs)('span', {
              onPointerDown: e => {
                e.stopPropagation();
              },
              onMouseDown: e => {
                e.stopPropagation();
              },
              onClick: e => {
                (e.stopPropagation(),
                  e.preventDefault(),
                  navigator.clipboard.writeText(s),
                  o(!0),
                  setTimeout(() => {
                    o(!1);
                  }, 1e3));
              },
              className: (0, r.cn)(
                'relative cursor-default grid grid-cols-2 gap-2 hover:bg-surface-100 px-2 py-1 group',
                { 'bg-surface-100': l }
              ),
              'data-sentry-component': 'TooltipRow',
              'data-sentry-source-file': 'index.tsx',
              children: [
                (0, a.jsxs)('span', {
                  className: 'text-right truncate',
                  children: [t, ':'],
                }),
                (0, a.jsxs)('div', {
                  className: 'relative',
                  children: [
                    l &&
                      (0, a.jsx)('span', {
                        className:
                          'absolute inset-0 flex items-center text-brand-600 bg-surface-100',
                        children: 'Copied!',
                      }),
                    (0, a.jsxs)('span', {
                      className: 'flex items-center gap-x-2',
                      children: [
                        s,
                        (0, a.jsx)(m.Z, {
                          size: 12,
                          className:
                            'opacity-0 group-hover:opacity-100 transition',
                          'data-sentry-element': 'Clipboard',
                          'data-sentry-source-file': 'index.tsx',
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            });
          };
          return (0, a.jsxs)(l.u, {
            'data-sentry-element': 'Tooltip',
            'data-sentry-component': 'TimestampInfo',
            'data-sentry-source-file': 'index.tsx',
            children: [
              (0, a.jsx)(l.aJ, {
                asChild: !0,
                ref: j,
                className: 'text-xs '.concat(
                  s,
                  ' border-b border-transparent hover:border-dashed hover:border-foreground-light'
                ),
                'data-sentry-element': 'TooltipTrigger',
                'data-sentry-source-file': 'index.tsx',
                children: (0, a.jsx)('span', {
                  children:
                    'local' === o
                      ? p({ utcTimestamp: t, format: d })
                      : h({ utcTimestamp: t, format: d }),
                }),
              }),
              (0, a.jsxs)(l._v, {
                align: f,
                side: 'right',
                className: 'font-mono p-0 py-1',
                'data-sentry-element': 'TooltipContent',
                'data-sentry-source-file': 'index.tsx',
                children: [
                  (0, a.jsx)(b, {
                    label: 'UTC',
                    value: u,
                    'data-sentry-element': 'TooltipRow',
                    'data-sentry-source-file': 'index.tsx',
                  }),
                  (0, a.jsx)(b, {
                    label: ''.concat(y),
                    value: c,
                    'data-sentry-element': 'TooltipRow',
                    'data-sentry-source-file': 'index.tsx',
                  }),
                  (0, a.jsx)(b, {
                    label: 'Relative',
                    value: x,
                    'data-sentry-element': 'TooltipRow',
                    'data-sentry-source-file': 'index.tsx',
                  }),
                  (0, a.jsx)(b, {
                    label: 'Timestamp',
                    value: String(t),
                    'data-sentry-element': 'TooltipRow',
                    'data-sentry-source-file': 'index.tsx',
                  }),
                ],
              }),
            ],
          });
        };
    },
    10611: function (e, t, s) {
      s.d(t, {
        b: function () {
          return x;
        },
      });
      var a = s(97458),
        n = s(52983),
        l = s(25843),
        r = s(41111),
        o = s(97146),
        i = s(71770),
        d = s(90953),
        c = s(98686);
      let u = {
        danger: (0, a.jsx)(r.Z, { strokeWidth: 1.5, size: 18 }),
        success: (0, a.jsx)(o.Z, { strokeWidth: 1.5, size: 18 }),
        warning: (0, a.jsx)(i.Z, { strokeWidth: 1.5, size: 18 }),
        info: (0, a.jsx)(d.Z, { strokeWidth: 1.5, size: 18 }),
        neutral: (0, a.jsx)(a.Fragment, {}),
      };
      function x(e) {
        let {
            variant: t = 'neutral',
            className: s,
            title: r,
            withIcon: o,
            closable: i,
            children: d,
            icon: x,
            actions: m,
          } = e,
          f = (0, l.Z)('alert'),
          [v, p] = (0, n.useState)(!0),
          h = [f.base];
        (h.push(f.variant[t].base), s && h.push(s));
        let g = [f.description, f.variant[t].description],
          j = [f.close];
        return (0, a.jsx)(a.Fragment, {
          children:
            v &&
            (0, a.jsxs)('div', {
              className: h.join(' '),
              children: [
                o
                  ? (0, a.jsx)('div', {
                      className: f.variant[t].icon,
                      children: o && u[t],
                    })
                  : null,
                x && x,
                (0, a.jsxs)('div', {
                  className: 'flex flex-1 items-center justify-between',
                  children: [
                    (0, a.jsxs)('div', {
                      children: [
                        (0, a.jsx)('h3', {
                          className: [f.variant[t].header, f.header].join(' '),
                          children: r,
                        }),
                        (0, a.jsx)('div', {
                          className: g.join(' '),
                          children: d,
                        }),
                      ],
                    }),
                    m,
                  ],
                }),
                i &&
                  (0, a.jsx)('button', {
                    'aria-label': 'Close alert',
                    onClick: () => p(!1),
                    className: j.join(' '),
                    children: (0, a.jsx)(c.Z, { strokeWidth: 2, size: 16 }),
                  }),
              ],
            }),
        });
      }
    },
  },
]);
