(this["webpackJsonpspotify-start-over"] =
  this["webpackJsonpspotify-start-over"] || []).push([
  [0],
  {
    107: function (e, t, c) {
      "use strict";
      c.r(t);
      var a = c(0),
        n = c.n(a),
        r = c(31),
        s = c.n(r),
        i = (c(48), c(108)),
        o = c(5);
      function u() {
        return Object(o.jsx)(i.a, {
          className: "d-flex justify-content-center align-items-center",
          style: { minHeight: "100vh" },
          children: Object(o.jsx)("a", {
            className: "btn btn-success btn-lg",
            href: "https://accounts.spotify.com/authorize?client_id=88e9ad173305490ba60849a2ecf9d0d8&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state",
            children: "Login With Spotify",
          }),
        });
      }
      var l = c(7),
        f = c(8),
        d = c.n(f);
      var h = c(109),
        j = c(32),
        b = c.n(j);
      function O(e) {
        var t = e.track,
          c = e.chooseTrack;
        return Object(o.jsxs)("div", {
          className: "d-flex m-2 align-items-center",
          style: { cursor: "pointer" },
          onClick: function () {
            c(t);
          },
          children: [
            Object(o.jsx)("img", {
              src: t.albumUrl,
              alt: "",
              style: { height: "64px", width: "64px" },
            }),
            Object(o.jsxs)("div", {
              className: "ml-3",
              children: [
                Object(o.jsx)("div", { children: t.title }),
                Object(o.jsx)("div", {
                  className: "text-muted",
                  children: t.artist,
                }),
              ],
            }),
          ],
        });
      }
      var m = c(41);
      function p(e) {
        var t = e.accessToken,
          c = e.trackUri,
          n = Object(a.useState)(!1),
          r = Object(l.a)(n, 2),
          s = r[0],
          i = r[1];
        return (
          Object(a.useEffect)(
            function () {
              return i(!0);
            },
            [c]
          ),
          t
            ? Object(o.jsx)(m.a, {
                token: t,
                showSaveIcon: !0,
                callback: function (e) {
                  e.isPlaying || i(!1);
                },
                play: s,
                uris: c ? [c] : [],
              })
            : null
        );
      }
      var v = new b.a({ clientId: "88e9ad173305490ba60849a2ecf9d0d8" });
      function x(e) {
        var t = (function (e) {
            var t = Object(a.useState)(),
              c = Object(l.a)(t, 2),
              n = c[0],
              r = c[1],
              s = Object(a.useState)(),
              i = Object(l.a)(s, 2),
              o = i[0],
              u = i[1],
              f = Object(a.useState)(),
              h = Object(l.a)(f, 2),
              j = h[0],
              b = h[1];
            return (
              Object(a.useEffect)(
                function () {
                  d.a
                    .post("http://localhost:3000/login", { code: e })
                    .then(function (e) {
                      r(e.data.accessToken),
                        u(e.data.refreshToken),
                        b(e.data.expiresIn),
                        window.history.pushState({}, null, "/");
                    })
                    .catch(function () {
                      window.location = "/";
                    });
                },
                [e]
              ),
              Object(a.useEffect)(
                function () {
                  if (o && j) {
                    var e = setInterval(function () {
                      d.a
                        .post("http://localhost:3000/refresh", {
                          refreshToken: o,
                        })
                        .then(function (e) {
                          r(e.data.accessToken), b(e.data.expiresIn);
                        })
                        .catch(function () {
                          window.location = "/";
                        });
                    }, 1e3 * (j - 60));
                    return function () {
                      return clearInterval(e);
                    };
                  }
                },
                [o, j]
              ),
              n
            );
          })(e.code),
          c = Object(a.useState)(""),
          n = Object(l.a)(c, 2),
          r = n[0],
          s = n[1],
          u = Object(a.useState)([]),
          f = Object(l.a)(u, 2),
          j = f[0],
          b = f[1],
          m = Object(a.useState)(),
          x = Object(l.a)(m, 2),
          y = x[0],
          g = x[1],
          k = Object(a.useState)(""),
          w = Object(l.a)(k, 2),
          S = w[0],
          T = w[1];
        function N(e) {
          g(e), s(""), T("");
        }
        return (
          Object(a.useEffect)(
            function () {
              y &&
                d.a
                  .get("http://localhost:3000/lyrics", {
                    params: { track: y.title, artist: y.artist },
                  })
                  .then(function (e) {
                    T(e.data.lyrics);
                  });
            },
            [y]
          ),
          Object(a.useEffect)(
            function () {
              t && v.setAccessToken(t);
            },
            [t]
          ),
          Object(a.useEffect)(
            function () {
              if (!r) return b([]);
              if (t) {
                var e = !1;
                return (
                  v.searchTracks(r).then(function (t) {
                    e ||
                      b(
                        t.body.tracks.items.map(function (e) {
                          var t = e.album.images.reduce(function (e, t) {
                            return t.height < e.height ? t : e;
                          }, e.album.images[0]);
                          return {
                            artist: e.artists[0].name,
                            title: e.name,
                            uri: e.uri,
                            albumUrl: t.url,
                          };
                        })
                      );
                  }),
                  function () {
                    return (e = !0);
                  }
                );
              }
            },
            [r, t]
          ),
          Object(o.jsxs)(i.a, {
            className: "d-flex flex-column py-2",
            style: { height: "100vh" },
            children: [
              Object(o.jsx)(h.a.Control, {
                type: "search",
                placeholder: "Search Songs/Artists",
                value: r,
                onChange: function (e) {
                  return s(e.target.value);
                },
              }),
              Object(o.jsxs)("div", {
                className: "flex-grow-1 my-2",
                style: { overflowY: "auto" },
                children: [
                  j.map(function (e) {
                    return Object(o.jsx)(
                      O,
                      { track: e, chooseTrack: N },
                      e.uri
                    );
                  }),
                  0 === j.length &&
                    Object(o.jsx)("div", {
                      className: "text-center",
                      style: { whiteSpace: "pre" },
                      children: S,
                    }),
                ],
              }),
              Object(o.jsx)("div", {
                children: Object(o.jsx)(p, {
                  accessToken: t,
                  trackUri: null === y || void 0 === y ? void 0 : y.uri,
                }),
              }),
            ],
          })
        );
      }
      var y = new URLSearchParams(window.location.search).get("code");
      var g = function () {
        return y ? Object(o.jsx)(x, { code: y }) : Object(o.jsx)(u, {});
      };
      s.a.render(
        Object(o.jsx)(n.a.StrictMode, { children: Object(o.jsx)(g, {}) }),
        document.getElementById("root")
      );
    },
    86: function (e, t) {},
  },
  [[107, 1, 2]],
]);
//# sourceMappingURL=main.48759942.chunk.js.map
