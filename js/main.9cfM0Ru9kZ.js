(window.webpackJsonp = window.webpackJsonp || [])
.push([[0], {
    109: function (e, t) {
        e.exports = {
            debug: !1
        }
    }
    , 176: function (e, t) {
        function a(e) {
            if (!e.text.includes('"')) return e;
            for (var t = [], a = e.text, o = 0, n = '"' === a[0]; o < a.length - 1;) {
                var i = a.indexOf('"', o + 1); - 1 === i && (i = a.length), n && i++;
                var s;
                if (o = o - 1 >= 0 ? o : 0, s = a.substr(o, i - o), o = i, s) {
                    var r = {};
                    e.style && (e.style.fontStyle = "italic", r = e.style), r.fontStyle = "italic", t.push({
                        text: s
                        , style: n ? r : null
                    }), n = !n
                }
            }
            return {
                italicizedBlocks: t
            }
        }

        function o(e) {
            for (var t = 0; t < e.length; t++) e[t].text && (e[t] = a(e[t]));
            return e
        }
        e.exports = {
            convertContent: o
            , convertStories: function (e) {
                return e.map(function (e) {
                    return e.content = o(e.content), e
                })
            }
            , convertTextBlock: a
        }
    }
    , 184: function (e, t, a) {
        e.exports = a(525)
    }
    , 192: function (e, t, a) {}
    , 214: function (e, t, a) {}
    , 216: function (e, t, a) {}
    , 233: function (e, t, a) {}
    , 391: function (e, t, a) {}
    , 393: function (e, t, a) {}
    , 395: function (e, t, a) {}
    , 397: function (e, t, a) {}
    , 515: function (e, t, a) {}
    , 517: function (e, t, a) {}
    , 520: function (e, t) {
        Array.prototype.includes || Object.defineProperty(Array.prototype, "includes", {
            value: function (e, t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var a = Object(this)
                    , o = a.length >>> 0;
                if (0 === o) return !1;
                var n, i, s = 0 | t
                    , r = Math.max(s >= 0 ? s : o - Math.abs(s), 0);
                for (; r < o;) {
                    if ((n = a[r]) === (i = e) || "number" === typeof n && "number" === typeof i && isNaN(n) && isNaN(i)) return !0;
                    r++
                }
                return !1
            }
        })
    }
    , 521: function (e, t, a) {}
    , 525: function (e, t, a) {
        "use strict";
        a.r(t);
        var o = a(0)
            , n = a.n(o)
            , i = a(8)
            , s = a.n(i)
            , r = a(3)
            , l = a(4)
            , h = a(6)
            , d = a(5)
            , c = a(7)
            , m = a(43)
            , u = a(526)
            , g = a(53)
            , p = (a(192), a(44))
            , w = a.n(p)
            , f = function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(n))))
                        .state = {
                            storyId: -1
                            , isModalOpen: !1
                            , homeWidth: void 0
                            , hoverState: -1
                        }, a.handleResize = function () {
                            a.setState({
                                homeWidth: window.innerWidth - a.props.sideBarWidth
                            })
                        }, a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "componentDidMount"
                    , value: function () {
                        window.addEventListener("resize", this.handleResize), this.handleResize()
                    }
                }, {
                    key: "componentWillUnmount"
                    , value: function () {
                        window.removeEventListener("resize", this.handleResize)
                    }
                }, {
                    key: "render"
                    , value: function () {
                        var e = this
                            , t = this.props.isMobile ? 95 : 100
                            , a = n.a.createElement("section", {
                                id: "home--map"
                                , onMouseEnter: function () {
                                    return e.setState({
                                        hoverState: 1
                                    })
                                }
                                , onMouseLeave: function () {
                                    return e.setState({
                                        hoverState: -1
                                    })
                                }
                                , style: this.props.isMobile ? 2 === this.state.hoverState ? {
                                    height: "".concat(.3 * t, "vh")
                                } : 1 === this.state.hoverState ? {
                                    height: "".concat(.6 * t, "vh")
                                } : {
                                    height: "".concat(.4 * t, "vh")
                                } : 1 === this.state.hoverState ? {
                                    height: "".concat(.7 * t, "vh")
                                } : 2 === this.state.hoverState ? {
                                    height: "".concat(.4 * t, "vh")
                                } : {
                                    height: "".concat(.6 * t, "vh")
                                }
                            }, n.a.createElement("div", {
                                className: "section-content"
                            }, n.a.createElement("div", {
                                className: "section-center"
                            }, n.a.createElement("div", {
                                className: "section-text"
                            }, n.a.createElement("h1", null, "Исследовать мир Battlerite"), n.a.createElement("p", null, "Узнайте, откуда ваш любимый чемпион!")), n.a.createElement("div", null, n.a.createElement("div", {
                                className: "fancyButton"
                                , style: 2 === this.state.hoverState ? {
                                    height: "0px"
                                    , opacity: "0"
                                } : {
                                    height: "2.5em"
                                    , opacity: "1"
                                }
                                , onClick: this.props.isMobile ? null : function () {
                                    return e.props.history.push("/lore/map/")
                                }
                            }, this.props.isMobile ? "Недоступно на телефоне" : "Открыть карту")))))
                            , o = n.a.createElement("section", {
                                id: "home--stories"
                                , onMouseEnter: function () {
                                    return e.setState({
                                        hoverState: 2
                                    })
                                }
                                , onMouseLeave: function () {
                                    return e.setState({
                                        hoverState: -1
                                    })
                                }
                                , style: this.props.isMobile ? 1 === this.state.hoverState ? {
                                    height: "".concat(.4 * t, "vh")
                                } : 2 === this.state.hoverState ? {
                                    height: "".concat(.7 * t, "vh")
                                } : {
                                    height: "".concat(.6 * t, "vh")
                                } : 2 === this.state.hoverState ? {
                                    height: "".concat(.6 * t, "vh")
                                } : 1 === this.state.hoverState ? {
                                    height: "".concat(.3 * t, "vh")
                                } : {
                                    height: "".concat(.4 * t, "vh")
                                }
                            }, n.a.createElement("div", {
                                className: "transparent-overlay"
                                , style: this.props.isMobile ? 1 === this.state.hoverState ? {
                                    height: "".concat(.4 * t, "vh")
                                } : 2 === this.state.hoverState ? {
                                    height: "".concat(.7 * t, "vh")
                                } : {
                                    height: "".concat(.6 * t, "vh")
                                } : 2 === this.state.hoverState ? {
                                    height: "".concat(.6 * t, "vh")
                                } : 1 === this.state.hoverState ? {
                                    height: "".concat(.3 * t, "vh")
                                } : {
                                    height: "".concat(.4 * t, "vh")
                                }
                            }, n.a.createElement("div", {
                                className: "section-content"
                            }, n.a.createElement("div", {
                                className: "section-center"
                            }, n.a.createElement("div", {
                                className: "section-text"
                            }, n.a.createElement("h1", null, "Читать истории..."), n.a.createElement("p", null, "Новая глава каждую неделю!")), n.a.createElement("div", null, n.a.createElement("div", {
                                className: "fancyButton"
                                , style: 1 === this.state.hoverState ? {
                                    height: "0px"
                                    , opacity: "0"
                                } : {
                                    height: "2.5em"
                                    , opacity: "1"
                                }
                                , onClick: function () {
                                    return e.props.history.push("/lore/stories/")
                                }
                            }, "Читать"))))));
                        return n.a.createElement(w.a, {
                            transitionName: "updateFade"
                            , transitionEnterTimeout: 300
                            , transitionLeave: !1
                            , transitionAppear: !0
                            , transitionAppearTimeout: 300
                        }, n.a.createElement("div", {
                            id: "home"
                            , style: {
                                width: this.props.isMobile ? "100vw" : this.state.homeWidth
                                , height: "".concat(t, "vh")
                            }
                        }, this.props.isMobile ? o : null, a, this.props.isMobile ? null : o))
                    }
                }]), t
            }(o.Component)
            , y = a(52)
            , b = a(171)
            , v = a.n(b)
            , k = {
                hover: new Audio("https://battlerite-ru.github.io/lore/sounds/UI_Hover_v3_3.wav")
                , click: new Audio("https://battlerite-ru.github.io/lore/sounds/UI_Hover_v3_1.wav")
                , open: new Audio("https://battlerite-ru.github.io/lore/sounds/UI_HoverBRCard.wav")
                , close: new Audio("https://battlerite-ru.github.io/lore/sounds/UI_HoverBRCardReversed.wav")
                , pearl1: new Audio("https://battlerite-ru.github.io/lore/sounds/dont.wav")
                , pearl2: new Audio("https://battlerite-ru.github.io/lore/sounds/worry.wav")
                , pearl3: new Audio("https://battlerite-ru.github.io/lore/sounds/im.wav")
                , pearl4: new Audio("https://battlerite-ru.github.io/lore/sounds/here.wav")
                , pearl5: new Audio("https://battlerite-ru.github.io/lore/sounds/now.wav")
            };
        Object.keys(k)
            .forEach(function (e) {
                return k[e].volume = .1
            });
        var x = function (e) {
                k[e].load(), k[e].play()
            }
            , A = a(172)
            , S = a.n(A)
            , I = (a(212), a(214), 54)
            , T = 79
            , M = function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(n))))
                        .state = {
                            photoIndex: 0
                            , displayArtwork: !1
                        }, a.toggleArtwork = function () {
                            return a.setState({
                                displayArtwork: !a.state.displayArtwork
                            })
                        }, a.soundFuncs = {
                            hover: function () {
                                a.props.showSmallModal || a.props.isMuted || x("hover")
                            }
                            , click: function () {
                                a.props.toggleModal("smallModal") && (a.props.isMuted || x("click"))
                            }
                            , open: function (e) {
                                return function () {
                                    e && (a.props.isMuted || x("open"), a.props.openStory(e)())
                                }
                            }
                        }, a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        var e = this
                            , t = this.state
                            , a = t.photoIndex
                            , o = t.displayArtwork
                            , i = null
                            , s = null;
                        this.props.location && (s = this.props.location.artwork, i = n.a.createElement(E, {
                            displayArtwork: o
                            , soundFuncs: this.soundFuncs
                            , toggleArtwork: this.toggleArtwork
                            , champions: this.props.champions
                            , location: this.props.location
                            , showSmallModal: this.props.showSmallModal
                            , x: this.props.x
                            , y: this.props.y
                            , pinUrl: "https://battlerite-ru.github.io/lore/images/br_map_pin.png"
                        })), this.props.arena && (s = this.props.arena.artwork, i = n.a.createElement(E, {
                            displayArtwork: o
                            , soundFuncs: this.soundFuncs
                            , toggleArtwork: this.toggleArtwork
                            , location: this.props.arena
                            , showSmallModal: this.props.showSmallModal
                            , x: this.props.x
                            , y: this.props.y
                            , pinUrl: "https://battlerite-ru.github.io/lore/images/arena_pin_small.png"
                        })), this.props.championContent && (i = n.a.createElement(j, {
                            displayArtwork: o
                            , soundFuncs: this.soundFuncs
                            , championContent: this.props.championContent
                            , showSmallModal: this.props.showSmallModal
                            , x: this.props.x
                            , y: this.props.y
                        }));
                        var r = s && o ? n.a.createElement(S.a, {
                            mainSrc: s[a]
                            , nextSrc: s[(a + 1) % s.length]
                            , prevSrc: s[(a + s.length - 1) % s.length]
                            , onCloseRequest: this.toggleArtwork
                            , onMovePrevRequest: function () {
                                return e.setState({
                                    photoIndex: (a + s.length - 1) % s.length
                                })
                            }
                            , onMoveNextRequest: function () {
                                return e.setState({
                                    photoIndex: (a + 1) % s.length
                                })
                            }
                        }) : null;
                        return n.a.createElement("div", null, i, r)
                    }
                }]), t
            }(o.Component)
            , E = function (e) {
                var t = e.champions ? e.champions.length > 0 : null
                    , a = e.x
                    , o = e.y
                    , i = e.showSmallModal
                    , s = e.soundFuncs
                    , r = e.champions
                    , l = e.toggleArtwork
                    , h = e.location
                    , d = e.pinUrl;
                return n.a.createElement("div", {
                    className: "mapInteractable"
                }, n.a.createElement("img", {
                    src: d
                    , draggable: "false"
                    , alt: "pin"
                    , style: {
                        position: "relative"
                        , left: "".concat(a - I / 2 + 1, "px")
                        , top: "".concat(o - T + 5 - (e.showSmallModal ? -1 : 0), "px")
                    }
                    , onClick: s.click
                    , onMouseOver: s.hover
                }), n.a.createElement("div", {
                    className: "smallModal"
                    , style: i ? {
                        position: "relative"
                        , left: "".concat(a - (t ? 380 : 273) / 2 + 1, "px")
                        , top: "".concat(o - (228 + T + 50), "px")
                        , width: "".concat(t ? 380 : 273, "px")
                        , height: "".concat(228, "px")
                        , backgroundImage: t ? 'url("https://battlerite-ru.github.io/lore/images/Location.png")' : 'url("https://battlerite-ru.github.io/lore/images/smolBox.png")'
                    } : {
                        position: "absolute"
                        , overflow: "hidden"
                        , clip: "rect(0 0 0 0)"
                        , height: " 1px; width: 1px"
                        , margin: "-1px"
                        , padding: 0
                        , border: 0
                    }
                }, n.a.createElement("div", {
                    className: "smallModalContent"
                }, n.a.createElement("h4", null, h.name), n.a.createElement("div", null, n.a.createElement("p", {
                    style: {
                        height: h.artwork ? "130px" : "145px"
                    }
                }, h.text), h.artwork ? n.a.createElement("u", {
                    className: "fancyButton"
                    , onClick: l
                }, "Галерея (", h.artwork.length, ")") : null)), t ? n.a.createElement("div", {
                    className: "smallModalChampions"
                }, n.a.createElement("h4", null, "Чемпионы"), r.map(function (e, t) {
                    return n.a.createElement("img", {
                        src: "https://battlerite-ru.github.io/lore/images/portraits/".concat(e.name, ".png")
                        , alt: e.name
                        , draggable: !1
                        , key: t
                        , onClick: s.open(e.storyId)
                        , className: e.storyId ? "" : "grey"
                    })
                })) : null))
            }
            , j = function (e) {
                var t = e.x
                    , a = e.y
                    , o = e.showSmallModal
                    , i = e.championContent
                    , s = e.soundFuncs;
                return n.a.createElement("div", {
                    className: "mapInteractable championPin"
                }, n.a.createElement("div", {
                    className: "championPinContainer"
                    , style: {
                        height: 72
                        , width: 126
                        , backgroundColor: "white"
                        , position: "relative"
                        , left: "".concat(t - 60, "px")
                        , top: "".concat(a - 30 - (o ? -1 : 0) - 7, "px")
                    }
                    , onClick: s.click
                }, n.a.createElement("img", {
                    src: "https://battlerite-ru.github.io/lore/images/portraits/".concat(i.name, ".png")
                    , draggable: "false"
                    , alt: "pin"
                    , style: {
                        position: "relative"
                        , top: "6px"
                        , left: "8px"
                        , height: 60
                    }
                    , onMouseOver: s.hover
                })), n.a.createElement("div", {
                    className: "smallChampionModal"
                    , style: o ? {
                        left: "".concat(t - 163.5 + 6, "px")
                        , top: "".concat(a - 108 - 90, "px")
                        , width: "".concat(327, "px")
                        , height: "".concat(108, "px")
                    } : {
                        position: "absolute"
                        , overflow: "hidden"
                        , clip: "rect(0 0 0 0)"
                        , height: " 1px; width: 1px"
                        , margin: "-1px"
                        , padding: 0
                        , border: 0
                    }
                }, n.a.createElement("img", {
                    src: i.image
                    , style: {
                        width: "".concat(323, "px")
                        , height: "".concat(104, "px")
                        , position: "absolute"
                        , top: "2px"
                        , left: "2px"
                    }
                    , draggable: !1
                    , alt: "pinPreviewImage"
                }), n.a.createElement("div", {
                    className: "smallChampionModalContent"
                    , style: i.pinStyle
                }, n.a.createElement("h3", null, i.title), 999 !== i.storyId ? n.a.createElement("p", {
                    onClick: s.open(i.storyId)
                }, "Читать") : null)))
            }
            , _ = function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(h.a)(this, Object(d.a)(t)
                        .apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        return n.a.createElement("div", {
                            className: "debugContainer"
                            , style: this.props.active ? {} : {
                                position: "absolute"
                                , overflow: "hidden"
                                , clip: "rect(0 0 0 0)"
                                , height: " 1px; width: 1px"
                                , margin: "-1px"
                                , padding: 0
                                , border: 0
                            }
                        }, n.a.createElement("div", {
                            className: "grid"
                            , onMouseMove: this.props.updateMousePosition()
                        }))
                    }
                }]), t
            }(o.Component)
            , O = function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(h.a)(this, Object(d.a)(t)
                        .apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        var e = this.props.coords
                            , t = e.actualX
                            , a = e.actualY
                            , o = e.mouseX
                            , i = e.mouseY;
                        return n.a.createElement("div", {
                            className: "mousePositionFollower"
                            , style: {
                                top: a + 50
                                , left: t - 50
                                , display: this.props.active ? "" : "none"
                            }
                        }, n.a.createElement("p", null, "X: ", o, " Y: ", i))
                    }
                }]), t
            }(o.Component)
            , B = a(109)
            , W = (a(216), function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(n))))
                        .dragLimit = 10, a.state = {
                            mapBoundaries: {}
                            , mapHeight: void 0
                            , mapWidth: void 0
                            , mapImageWidth: 4401
                            , mapImageHeight: 3372
                            , coords: {
                                mouseX: 0
                                , mouseY: 0
                                , actualX: 0
                                , actualY: 0
                            }
                            , controlledPosition: {
                                x: -1e3
                                , y: -1200
                            }
                            , showPearl: !1
                            , pearlStatus: [{
                                letter: "p"
                                , pressed: !1
                                , sound: "pearl1"
                            }, {
                                letter: "e"
                                , pressed: !1
                                , sound: "pearl2"
                            }, {
                                letter: "a"
                                , pressed: !1
                                , sound: "pearl3"
                            }, {
                                letter: "r"
                                , pressed: !1
                                , sound: "pearl4"
                            }, {
                                letter: "l"
                                , pressed: !1
                                , sound: "pearl5"
                            }]
                            , justPressedKey: !1
                        }, a.keyInputs = function (e) {
                            for (var t = e.key, o = Object(y.a)(a.state.pearlStatus), n = 0; n < o.length; n++)
                                if (!o[n].pressed) {
                                    if (o[n].letter !== t) {
                                        a.resetPearl();
                                        break
                                    }
                                    if (o[n].letter === t && !o[n].pressed) {
                                        if (a.state.justPressedKey) break;
                                        o[n].pressed = !0, a.props.isMuted || x(o[n].sound), n === o.length - 1 && a.setState({
                                            showPearl: !0
                                        }), a.setState({
                                            pearlStatus: o
                                            , justPressedKey: !0
                                        }, function () {
                                            return setTimeout(function () {
                                                return a.setState({
                                                    justPressedKey: !1
                                                })
                                            }, 100)
                                        });
                                        break
                                    }
                                }
                        }, a.onControlledDrag = function (e, t) {
                            var o = t.x
                                , n = t.y;
                            a.setState({
                                controlledPosition: {
                                    x: o
                                    , y: n
                                }
                            })
                        }, a.onDragStart = function () {
                            a.setState({
                                oldPosition: a.state.controlledPosition
                            })
                        }, a.onDragStop = function () {
                            a.state.controlledPosition.x > a.state.oldPosition.x + a.dragLimit || a.state.controlledPosition.y > a.state.oldPosition.y + a.dragLimit || a.state.controlledPosition.x < a.state.oldPosition.x - a.dragLimit || a.state.controlledPosition.y < a.state.oldPosition.y - a.dragLimit || a.toggleModal(-1)("smallModal")
                        }, a.updateMousePosition = function (e) {
                            return function (t) {
                                var o = t.target.getBoundingClientRect()
                                    , n = t.clientX - o.left
                                    , i = t.clientY - o.top
                                    , s = t.pageX
                                    , r = t.pageY;
                                clearTimeout(e), e = setTimeout(function () {
                                    a.setState({
                                        coords: {
                                            mouseX: Math.ceil(n)
                                            , mouseY: Math.ceil(i)
                                            , actualX: s
                                            , actualY: r
                                        }
                                    })
                                }, 10)
                            }
                        }, a.toggleModal = function (e) {
                            return function (t) {
                                var o = Object(y.a)(a.props.pins)
                                    .map(function (a, o) {
                                        return a[t] = e === o && !a[t], a
                                    });
                                return a.props.updatePins(o), !0
                            }
                        }, a.handleResize = function () {
                            a.setState({
                                mapHeight: window.innerHeight
                                , mapWidth: window.innerWidth - a.props.sideBarWidth
                                , mapBoundaries: {
                                    top: window.innerHeight - a.state.mapImageHeight
                                    , left: window.innerWidth - a.state.mapImageWidth - a.props.sideBarWidth
                                }
                            })
                        }, a.changeControlledPosition = function (e, t) {
                            var o = a.state.controlledPosition
                                , n = o.x
                                , i = o.y;
                            return i += t, (n += e) > 0 ? {
                                x: 0
                                , y: a.state.controlledPosition.y
                            } : n < a.state.mapBoundaries.left ? {
                                x: a.state.mapBoundaries.left
                                , y: a.state.controlledPosition.y
                            } : i > 0 ? {
                                x: a.state.controlledPosition.x
                                , y: 0
                            } : i < a.state.mapBoundaries.top ? {
                                x: a.state.controlledPosition.x
                                , y: a.state.mapBoundaries.top
                            } : {
                                x: n
                                , y: i
                            }
                        }, a.championContent = function (e) {
                            var t = a.props.stories.find(function (t) {
                                return t.champion === e.champion
                            });
                            return {
                                name: e.champion
                                , title: t && t.content.length > 0 ? t.content.find(function (e) {
                                        return e.title
                                    })
                                    .title : null
                                , image: t ? t.pinPreviewImage : null
                                , storyId: t ? t._id : null
                                , pinStyle: e.pinStyle
                            }
                        }, a.championsContent = function (e) {
                            return e.champions.map(function (e) {
                                var t = a.props.stories.find(function (t) {
                                    return t.champion === e
                                });
                                return t && 0 === t.content.length && (t = !1), {
                                    name: e
                                    , storyId: t ? t._id : null
                                }
                            })
                        }, a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "resetPearl"
                    , value: function () {
                        this.setState({
                            pearlStatus: [{
                                letter: "p"
                                , pressed: !1
                                , sound: "pearl1"
                            }, {
                                letter: "e"
                                , pressed: !1
                                , sound: "pearl2"
                            }, {
                                letter: "a"
                                , pressed: !1
                                , sound: "pearl3"
                            }, {
                                letter: "r"
                                , pressed: !1
                                , sound: "pearl4"
                            }, {
                                letter: "l"
                                , pressed: !1
                                , sound: "pearl5"
                            }]
                        })
                    }
                }, {
                    key: "componentDidMount"
                    , value: function () {
                        this.handleResize(), window.addEventListener("resize", this.handleResize), window.addEventListener("keydown", this.keyInputs)
                    }
                }, {
                    key: "componentWillUnmount"
                    , value: function () {
                        window.removeEventListener("resize", this.handleResize), window.removeEventListener("keydown", this.keyInputs)
                    }
                }, {
                    key: "render"
                    , value: function () {
                        var e = this
                            , t = this.state.controlledPosition
                            , a = {
                                minWidth: this.state.mapWidth
                                , minHeight: this.state.mapHeight
                                , width: this.state.mapImageWidth
                                , height: this.state.mapImageHeight
                            };
                        return n.a.createElement("div", {
                            className: "map-app "
                        }, n.a.createElement("div", {
                            className: "content"
                        }, n.a.createElement("div", {
                            className: "mapContainer"
                            , style: {
                                width: this.state.mapWidth
                                , height: this.state.mapHeight
                            }
                        }, n.a.createElement(v.a, {
                            position: t
                            , onStart: this.onDragStart
                            , onStop: this.onDragStop
                            , onDrag: this.onControlledDrag
                            , handle: ".handle"
                            , grid: [1, 1]
                            , cancel: ".mapInteractable"
                            , bounds: {
                                top: this.state.mapBoundaries.top
                                , left: this.state.mapBoundaries.left
                                , bottom: 0
                                , right: 0
                            }
                        }, n.a.createElement("div", {
                            className: "handle map"
                            , style: a
                        }, this.state.showPearl ? n.a.createElement("div", {
                            className: "pearl-overlay"
                        }) : null, this.props.pins.map(function (t, a) {
                            var o = t.champion ? e.championContent(t) : null
                                , i = t.champions ? e.championsContent(t) : null;
                            return n.a.createElement(M, {
                                sounds: e.props.sounds
                                , x: t.x
                                , y: t.y
                                , key: a
                                , location: t.location
                                , arena: t.arena
                                , championContent: o
                                , champions: i
                                , showSmallModal: t.smallModal
                                , toggleModal: i || t.arena || o.storyId ? e.toggleModal(a) : function () {
                                    return null
                                }
                                , openStory: e.props.loadStory
                                , isMuted: e.props.isMuted
                            })
                        }), n.a.createElement(_, {
                            active: B.debug
                            , updateMousePosition: this.updateMousePosition
                        })))), n.a.createElement(O, {
                            active: B.debug
                            , coords: this.state.coords
                        })))
                    }
                }]), t
            }(o.Component))
            , z = a(173)
            , H = (a(233), a(174))
            , N = a(175)
            , C = a.n(N)
            , F = (a(389), function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(n))))
                        .lineHeightOptions = [{
                            value: 1
                            , label: 1
                        }, {
                            value: 1.5
                            , label: 1.5
                        }, {
                            value: 2
                            , label: 2
                        }, {
                            value: 2.5
                            , label: 2.5
                        }, {
                            value: 3
                            , label: 3
                        }], a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        var e = this;
                        return n.a.createElement("div", {
                            className: "settingsModal"
                        }, n.a.createElement("div", {
                            className: "settings-content"
                        }, n.a.createElement("div", {
                            className: "settings"
                        }, n.a.createElement("div", {
                            className: "settings-top"
                        }, n.a.createElement("div", {
                            className: "flex-column"
                            , style: {
                                width: "130px"
                            }
                        }, n.a.createElement("label", null, "Высота линии"), n.a.createElement(C.a, {
                            options: this.lineHeightOptions
                            , onChange: function (t) {
                                var a = e.props.settings;
                                a.lineHeight = t, e.props.updateSettings(a)
                            }
                            , value: this.lineHeightOptions[1]
                            , placeholder: "Выберите..."
                        })), n.a.createElement("div", {
                            className: "undo-svg"
                        }, n.a.createElement("svg", {
                            onClick: this.props.resetSettings
                            , xmlns: "http://www.w3.org/2000/svg"
                            , width: "36"
                            , height: "36"
                            , viewBox: "0 0 24 24"
                        }, n.a.createElement("path", {
                            d: "M0 0h24v24H0z"
                            , fill: "none"
                        }), n.a.createElement("path", {
                            fill: "white"
                            , d: "M12 5V1L7 6l5 5V7c3.31 0 6 2.69 6 6s-2.69 6-6 6-6-2.69-6-6H4c0 4.42 3.58 8 8 8s8-3.58 8-8-3.58-8-8-8z"
                        })))), n.a.createElement("div", {
                            className: "flex-column"
                        }, n.a.createElement("label", null, "Цвет фона"), n.a.createElement(H.CompactPicker, {
                            color: this.props.settings.rgb
                            , onChangeComplete: function (t) {
                                var a = t.rgb
                                    , o = e.props.settings;
                                o.rgb = a, e.props.updateSettings(o)
                            }
                        })))))
                    }
                }]), t
            }(o.Component));
        window.dataLayer = window.dataLayer || [];
        var L = function () {
                window.dataLayer.push(arguments)
            }
            , R = (a(391), function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(i))))
                        .blockUtil = {
                            image: function (e) {
                                return n.a.createElement("img", {
                                    className: "story-image"
                                    , style: e.style
                                    , src: e.image
                                    , alt: "".concat(a.props.story.champion, "-story")
                                    , draggable: !1
                                })
                            }
                            , text: function (e) {
                                return n.a.createElement("div", {
                                    className: "story-text"
                                    , style: e.style
                                }, e.text)
                            }
                            , title: function (e) {
                                return n.a.createElement("div", null, n.a.createElement("h1", {
                                    className: "story-title"
                                    , style: e.style
                                }, e.title), n.a.createElement("h2", {
                                    className: "authored-by"
                                }, "За авторством Кристофера Харроу"))
                            }
                            , box: function (e) {
                                return n.a.createElement("div", {
                                    className: "box"
                                    , style: e.style
                                }, e.components.map(function (e, t) {
                                    return n.a.createElement("div", {
                                        key: t
                                    }, a.generateBlock(e))
                                }))
                            }
                            , italics: function (e) {
                                return n.a.createElement("div", {
                                    className: "italics-box"
                                }, e.italicizedBlocks.map(function (e, t) {
                                    return n.a.createElement("span", {
                                        style: e.style
                                        , key: t
                                    }, e.text)
                                }))
                            }
                            , linebreak: function (e) {
                                return n.a.createElement("div", {
                                    className: "line-break"
                                }, n.a.createElement("hr", null))
                            }
                        }, a.generateBlock = function (e) {
                            return e.text ? a.blockUtil.text(e) : e.title ? a.blockUtil.title(e) : e.image ? a.blockUtil.image(e) : e.components ? a.blockUtil.box(e) : e.italicizedBlocks ? a.blockUtil.italics(e) : e.linebreak ? a.blockUtil.linebreak(e) : void 0
                        }, a.handleScrollStart = function () {
                            return L("event", "story_scroll")
                        }, a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        var e = this;
                        if (!this.props.story) return null;
                        var t = this.props.settings.rgb
                            , a = t.r
                            , o = t.g
                            , i = t.b
                            , s = this.props.story.content.map(function (t, a) {
                                return n.a.createElement("div", {
                                    className: "block"
                                    , key: a
                                    , style: {
                                        lineHeight: e.props.settings.lineHeight.value
                                    }
                                }, e.generateBlock(t))
                            });
                        return n.a.createElement("div", {
                            className: "story"
                            , style: {
                                background: "linear-gradient( to bottom, rgb(39, 41, 47) 0%, rgb(".concat(a, ",")
                                    .concat(o, ", ")
                                    .concat(i, ") 100%) ")
                            }
                        }, n.a.createElement("div", {
                            className: "story-header"
                        }, n.a.createElement("svg", {
                            onClick: this.props.toggleSettings
                            , xmlns: "http://www.w3.org/2000/svg"
                            , width: "36"
                            , height: "36"
                            , viewBox: "0 0 24 24"
                            , className: "settingsSvg"
                        }, n.a.createElement("path", {
                            d: "M15.95 10.78c.03-.25.05-.51.05-.78s-.02-.53-.06-.78l1.69-1.32c.15-.12.19-.34.1-.51l-1.6-2.77c-.1-.18-.31-.24-.49-.18l-1.99.8c-.42-.32-.86-.58-1.35-.78L12 2.34c-.03-.2-.2-.34-.4-.34H8.4c-.2 0-.36.14-.39.34l-.3 2.12c-.49.2-.94.47-1.35.78l-1.99-.8c-.18-.07-.39 0-.49.18l-1.6 2.77c-.1.18-.06.39.1.51l1.69 1.32c-.04.25-.07.52-.07.78s.02.53.06.78L2.37 12.1c-.15.12-.19.34-.1.51l1.6 2.77c.1.18.31.24.49.18l1.99-.8c.42.32.86.58 1.35.78l.3 2.12c.04.2.2.34.4.34h3.2c.2 0 .37-.14.39-.34l.3-2.12c.49-.2.94-.47 1.35-.78l1.99.8c.18.07.39 0 .49-.18l1.6-2.77c.1-.18.06-.39-.1-.51l-1.67-1.32zM10 13c-1.65 0-3-1.35-3-3s1.35-3 3-3 3 1.35 3 3-1.35 3-3 3z"
                            , fill: "white"
                        }), n.a.createElement("path", {
                            d: "M0 0h20v20H0V0z"
                            , fill: "none"
                        })), this.props.closeModal ? n.a.createElement("svg", {
                            onClick: this.props.closeModal
                            , xmlns: "http://www.w3.org/2000/svg"
                            , width: "36"
                            , height: "36"
                            , viewBox: "0 0 24 24"
                        }, n.a.createElement("path", {
                            d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                            , fill: "white"
                        }), n.a.createElement("path", {
                            d: "M0 0h24v24H0z"
                            , fill: "none"
                        })) : null), n.a.createElement(z.Scrollbars, {
                            onScrollStart: this.handleScrollStart
                        }, n.a.createElement("div", {
                            className: "blocks"
                        }, s, " "), n.a.createElement("img", {
                            className: "story_footer"
                            , src: "https://battlerite-ru.github.io/lore/images/br_story_footer.png"
                            , alt: "fancy_footer"
                            , draggable: !1
                        })), this.props.displaySettings ? n.a.createElement(F, {
                            settings: this.props.settings
                            , toggleSettingsModal: this.props.toggleSettings
                            , updateSettings: this.props.updateSettings
                            , resetSettings: this.props.resetSettings
                        }) : null)
                    }
                }]), t
            }(o.Component))
            , P = [{
                name: "Анианские степи"
                , text: "Анианскими Степями называют засушливые земли, просторные пастбища и пологую холмистую местность к югу от Толина. Это дом для различных народностей, как кочевых, так и оседлых. Степи – прибежище знаменитой банды отъявленных разбойников, известных под именем Кабаны, что бродят по равнинам и нападают на ничего не подозревающие караваны. Их одновременно и презирают за грабежи и хулиганство, и воспевают как романтичных душ, свободных от чьей-либо власти."
            }, {
                name: "Дахарин"
                , text: "Дахарин, или более официально, «Великая Речная Долина Дахарина». Эти земли  окружены холмами и горной цепью, а на её востоке находится залив Длинного Рога и свободный город Толин. Земля эта состоит из сотен независимых княжеств и графств, коих объединяет общая культура и религия, известная как «Симфония». Монастырь Резонанса – великий источник могущества Симфонии, что расположен в самом сердце Речной Долины, через своих Паладинов и Стражей несёт в мир слово гармонии и порядка."
            }, {
                name: "Империя Га'Таманг"
                , text: "На северо-западе расположена великая империя. В давно минувшие века, задолго до Глубокой Ночи, она была самой могущественной империей в мире, и поныне является силой, с которой стоит считаться. Народ Га’Таманга, может, и отстаёт в плане технологий от остальных цивилизаций, но с лихвой возмещает этот недостаток другими достоинствами. Сила, храбрость, честь и искусность в бою – вот идеалы, которым следует здешний народ. Во главе их войск находится Авангард, избранное сословие воинов Империи. Они следуют строгому боевому уставу, их всегда можно увидеть в первых рядах в каждой битве, будь она против варваров-налётчиков из Диких Земель или их извечных врагов из Отагура."
            }, {
                name: "Болото Злобы"
                , text: "Место, куда немногие осмеливаются направиться, и откуда возвращаются единицы. Дремучая топь на южном побережье Га’Таманга на бумаге является частью Империи, но власть императора ничего здесь не значит. Это обитель всех видов смертельных опасностей, от блуждающих во мраке хищников до плотоядных растений и дикарей-людоедов, а в древних гробницах и руинах обитают ещё более зловещие ужасы."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/Swamp_of_Malevolence_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Swamp_of_Malevolence_02.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Swamp_of_Malevolence_03.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Swamp_of_Malevolence_04.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Swamp_of_Malevolence_05.jpg"]
            }, {
                name: "Королевство Куна"
                , text: "Могущественное Королевство Куны лежит далеко на востоке, за Восточной пустыней и Лесом Теней. Это плодородная земля заливных лугов, зелёных холмов и густых лесов. Из-за своей удалённости, Куна до недавних пор почти не контактировала с западными землями. Но воздвижение арены Сада Дракона и открытие Восточного Пути сделало две части мира ближе друг к другу. Куной правит Король-Дракон с советниками из ближних и дальних земель."
            }, {
                name: "Отагур"
                , text: "Горная область к северу от Га'Таманга – обитель жестокой и зловещей цивилизации, что воздаёт почести тёмным богам при помощи магии крови и жертвоприношений. Отдалённая, труднодоступная земля с её подземными городами, высеченными в горной породе, служат неприступной крепостью правящим Жрецам Крови, что замышляют заговоры для расширения своего влияния."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/Othagur_02.jpg"]
            }, {
                name: "Восточная пустыня"
                , text: "Восточная пустыня лежит на громадном плоскогорье к югу от Дахарина. За исключением плодородного южного побережья, это безжизненная пустыня с лабиринтами из остроконечных скал. Она кишит чудовищами, что могут проглотить человека целиком, песчаными бурями, что могут стесать до мяса кожу несчастного скитальца, если его, конечно, прежде не прикончит невыносимая жара и перехватывающий дыхание ветер. Однако не смотря на это, пустыня служит пристанищем для некоторых варварских племён, а в немногих более гостеприимных местах даже расположились города и цивилизация."
            }, {
                name: "Толин"
                , text: "Отстроенный из руин древней империи Расшип, Свободный Город Толин веками был торговым портом для всего мира. Расположенный на берегу залива Длинного Рога, Толин - это бурлящий котёл торговли, преступности и изобретательства. Это родной дом Академии Толина, где собираются великие алхимики и учёные со всего мира для познания тайн вселенной."
            }, {
                name: "Дикие северные пустоши"
                , text: "К востоку от Га’Таманга лежат просторные, ненаселённые дикие земли из горных хребтов, бескрайних лесов, вечномёрзлых почв, руин древних городов и канувших в небытие цивилизаций. Раньше Северная Земля была домом для могущественных королевств и славных городов. Ныне здесь живут лишь разбросанные варварские племена и дикари."
            }, {
                name: "Тролоб"
                , text: "Тролоб – это пустынное королевство далеко на юге, за жестоким морем, что зовётся Бездной. Это развитая цивилизация, как в плане магических технологий, так и в плане общественного устройства. Долгое время оставался неизвестным народам с северного континента. Хоть в наши дни путешествие через жуткое, полное опасностей море и возможно, многое о Тролобе сокрыто туманом тайны."
            }, {
                name: "Гора Серебряный хребет"
                , text: "На самом западном краю полуострова за Анианскими Степями возвышаются покрытые снегом вершины горы Серебряный Хребет, сверкая, будто серебро на солнце. В этом месте обитают могущественные силы, где размывается граница с миром духов, и законы природы уже не так неумолимы. На склонах горы обитает миролюбивый народ Диом в гармонии с духами и зверями. Сверкающую своими вершинами гору опоясывает у подножия лес Серебряной Глуби. О нём ходит множество легенд, и говорится в них как о чудесных волшебных созданиях, так и о непостижимых ужасах."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/Silverridge_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Silverridge_02.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Silverridge_03.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Silverridge_04.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Silverridge_05.jpg"]
            }, {
                name: "Монастырь Резонанса"
                , text: "Многие сотни церквей и аббатств разбросаны по всему Дахарину, они сами по себе довольно впечатляющи, но ни одно из них и близко не сравнится с величественным Монастырём Резонанса. Именно отсюда исходит могущество религии Симфонии, отсюда вершат свои деяния её жрецы и паладины и другие менее публичные её последователи."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/Monastery_of_Resonance_01.jpg"]
            }, {
                name: "Дур Кутур"
                , text: "Подземная столица Отагура соткана из бесконечных тоннелей, проделанных в горе, будто в гнезде термитов. Тёмные секреты, таящиеся под покровом глубоких расщелин, известны только лишь местному правящему совету, известному как Братство Желчи."
            }, {
                name: "Ледяной север"
                , text: "По ту сторону гор На'Гол лежит земля вечной зимы, льда и снега. Там не растёт зелень, и бродят лишь немногочисленные звери, но можно повстречать существ из других миров, блуждающих по безмолвным пустошам под танцующими огнями северных сияний."
            }, {
                name: "Горы На'Гол"
                , text: "Громадный северный горный хребет На’Гол протянулся от земель Га’Таманг на западе и далеко за восточные пределы известного мира. Горы служат домом загадочному народу Тиоко, что живут в подземельях глубоко в толще гор."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/NaGol_Mountains_01.jpg"]
            }, {
                name: "Фаран Гол"
                , text: "Фаран Гол был городом в самой западной точке гор На'Гол. Был знаменит своей Академией Штормов, где волшебники обучались управлению силами Шторма и Грома. Был уничтожен до основания в ходе огромной катастрофы, приведшей к Глубокой Ночи, и ныне лишь руины служат свидетелями его былого величия."
            }, {
                name: "Древние земли"
                , text: "Далеко на востоке лежат забытые руины храмов и святилищ древних героев и богов. Они старше любой нынешней цивилизации, и их истинное предназначение давным-давно было утеряно в тумане истории."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/Ancient_Grounds_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Ancient_Grounds_02.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Ancient_Grounds_03.jpg", "https://battlerite-ru.github.io/lore/images/artwork/Ancient_Grounds_04.jpg"]
            }, {
                name: "Внешние королевства"
                , text: "Неисследованные Внешние Королевства лежат за Древними Землями. Очень немногие знают об этих местах, но слухов и легенд о них предостаточно."
            }, {
                name: "Локум"
                , text: "Защищённые от жутких штормов бездны Архипелагом Энарос, за ним протекают спокойные воды Лазурного моря. Под голубой гладью его поверхности лежит город Локум, где поклоняются богам океанов."
            }, {
                name: "Араста-Тор"
                , text: "Столица Империи Га’Таманг – настоящая крепость, что охраняется элитным войском Авангарда. Она окружена плотным оборонительным частоколом и естественным рвом, созданным течением реки Финремер."
            }, {
                name: "Тур-Карборун"
                , text: "Кажущаяся невозможной архитектура столицы Тролоба – живой памятник достижениям Тролобской цивилизации. Построенные в древние времена с использованием магических технологий, его башни взмываются до небес, соединяясь узенькими мостиками с неподвластными силе притяжения парящими островами."
            }]
            , D = [{
                name: "Чернокаменная арена"
                , text: "Высеченная в горах в самом пекле горнила Отагура. В древние времена была местом жертвоприношений, но сейчас служит ареной. Энергия былого наследия делает это место весьма подходящим для сражений. Находится под контролем Братства Ночи."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/Blackstone_Arena.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_02.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_03.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_04.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_06.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_08.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_09.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_10.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_11.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_13.jpg", "https://battlerite-ru.github.io/lore/images/artwork/BlackstoneArena_14.jpg"]
            }, {
                name: "Храм Ормана"
                , text: "Арена, расположенная в диких лесах Серебрянной Глуби. Она построена в саду заброшенного храма, и находится под защитой Дриад. Ранее затерянная в лесу, сегодня она блистает зрелищем сражений на арене и служит оазисом для путешественников."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/Orman_Temple_Arena.jpg", "https://battlerite-ru.github.io/lore/images/artwork/OrmanTemple_day_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/OrmanTemple_day_02.jpg", "https://battlerite-ru.github.io/lore/images/artwork/OrmanTemple_day_03.jpg", "https://battlerite-ru.github.io/lore/images/artwork/OrmanTemple_day_04.jpg", "https://battlerite-ru.github.io/lore/images/artwork/OrmanTemple_day_05.jpg", "https://battlerite-ru.github.io/lore/images/artwork/OrmanTemple_day_06.jpg", "https://battlerite-ru.github.io/lore/images/artwork/OrmanTemple_day_08.jpg", "https://battlerite-ru.github.io/lore/images/artwork/OrmanTemple_day_09.jpg"]
            }, {
                name: "Сад Дракона"
                , text: "Расположен в центре Столицы. Построен нынешним правящим Королём-Драконом в честь двух своих сыновей, и статуи двух принцев украшают здешнюю арену. Это прекрасная и необычайная арена призвана отражать силу и богатство Куны."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/DragonGarden_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/DragonGarden_05.jpg", "https://battlerite-ru.github.io/lore/images/artwork/DragonGarden_07.jpg", "https://battlerite-ru.github.io/lore/images/artwork/DragonGarden_08.jpg"]
            }, {
                name: "Небесное кольцо"
                , text: "Небесное Кольцо построено на парящем острове на северном побережье Тролоба, неподалёку от столицы. Эта роскошная арена сделана из дорогостоящих материалов. Она окружена сотнями воздушных кораблей, служащих трибунами для толп зрителей. Великолепие этой арены доступно только Королевской Семье, самым состоятельным гражданам и особым гостям. Состязаться на Небесном Кольце – привилегия, а одержать здесь победу – великая честь."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_07.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_08.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_09.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_10.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_11.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_12.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_13.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_15.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_18.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_19.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_20.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_21.jpg", "https://battlerite-ru.github.io/lore/images/artwork/SkyArena_day_23.jpg"]
            }, {
                name: "Гора Араз"
                , text: "Построена на краю Мыса Каал, на слегка более цивилизованном южном побережье. Эта четырёхсотлетняя арена стала жестокой сценой для тысяч павших воинов и местом славы для величайших чемпионов. Ныне это самая большая арена Восточной пустыни, и она привлекает как торговцев, так и зрителей со всего региона."
                , artwork: ["https://battlerite-ru.github.io/lore/images/artwork/Mount_Araz_Arena_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_01.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_02.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_03.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_04.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_05.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_06.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_08.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_09.jpg", "https://battlerite-ru.github.io/lore/images/artwork/MountAraz_day_10.jpg"]
            }]
            , G = [{
                x: 1880
                , y: 1732
                , location: "Анианские степи"
                , champions: ["taya"]
            }, {
                x: 2559
                , y: 1476
                , location: "Дахарин"
                , champions: ["ulric"]
            }, {
                x: 1678
                , y: 1047
                , location: "Империя Га'Таманг"
                , champions: ["ruh_kaan", "croak", "bakko"]
            }, {
                x: 1670
                , y: 1308
                , location: "Болото Злобы"
                , champions: ["ruh_kaan"]
            }, {
                x: 3572
                , y: 1829
                , location: "Королевство Куна"
                , champions: ["raigon", "shifu"]
            }, {
                x: 1195
                , y: 677
                , location: "Отагур"
                , champions: ["pestilus"]
            }, {
                x: 2500
                , y: 1778
                , location: "Восточная пустыня"
                , champions: ["rook", "jade"]
            }, {
                x: 1836
                , y: 1424
                , location: "Толин"
                , champions: ["ezmo", "lucie", "zander"]
            }, {
                x: 2505
                , y: 944
                , location: "Дикие северные пустоши"
                , champions: ["ashka", "jumong", "freya"]
            }, {
                x: 1160
                , y: 1542
                , location: "Гора Серебряный хребет"
                , champions: ["poloma", "thorn", "blossom"]
            }, {
                x: 1762
                , y: 2786
                , location: "Тролоб"
                , champions: ["varesh"]
            }, {
                x: 1834
                , y: 2476
                , location: "Тур-Карборун"
                , champions: []
            }, {
                x: 1888
                , y: 1144
                , location: "Араста-Тор"
                , champions: []
            }, {
                x: 2592
                , y: 2208
                , location: "Локум"
                , champions: ["pearl"]
            }, {
                x: 3750
                , y: 700
                , location: "Внешние королевства"
                , champions: ["iva"]
            }, {
                x: 2923
                , y: 1020
                , location: "Древние земли"
                , champions: []
            }, {
                x: 1850
                , y: 618
                , location: "Фаран Гол"
                , champions: []
            }, {
                x: 2412
                , y: 645
                , location: "Горы На'Гол"
                , champions: ["ashka"]
            }, {
                x: 2227
                , y: 365
                , location: "Ледяной север"
                , champions: ["alysia"]
            }, {
                x: 1191
                , y: 521
                , location: "Дур Кутур"
                , champions: []
            }, {
                x: 2415
                , y: 1400
                , location: "Монастырь Резонанса"
                , champions: ["ulric"]
            }, {
                x: 1280
                , y: 565
                , arena: "Чернокаменная арена"
            }, {
                x: 1340
                , y: 1555
                , arena: "Храм Ормана"
            }, {
                x: 2175
                , y: 1960
                , arena: "Гора Араз"
            }, {
                x: 3637
                , y: 1580
                , arena: "Сад Дракона"
            }, {
                x: 1754
                , y: 2333
                , arena: "Небесное кольцо"
            }, {
                x: 1500
                , y: 1300
                , champion: "ruh_kaan"
                , pinStyle: {
                    color: "white"
                }
            }, {
                x: 3532
                , y: 1649
                , champion: "raigon"
                , pinStyle: {
                    color: "white"
                }
            }, {
                x: 1900
                , y: 1500
                , champion: "ezmo"
                , pinStyle: {
                    color: "white"
                }
            }, {
                x: 2012
                , y: 755
                , champion: "freya"
                , pinStyle: {
                    color: "white"
                }
            }, {
                x: 2532
                , y: 655
                , champion: "ashka"
                , pinStyle: {
                    color: "white"
                }
            }, {
                x: 3532
                , y: 1949
                , champion: "new_phone_who_dis"
                , pinStyle: {
                    color: "white"
                }
            }, {
                x: 1063
                , y: 1662
                , champion: "blossom"
                , pinStyle: {
                    color: "white"
                }
            }, {
				x: 1730,
				y: 1380,
				champion: "croak",
				pinStyle: {
					color: "white"
				}
			}, {
				x: 1840,
				y: 970,
				champion: "bakko",
				pinStyle: {
					color: "white"
				}
			}, {
				x: 1100,
				y: 650,
				champion: "pestilus",
				pinStyle: {
					color:"white"
				}
			}].map(function (e) {
                return e.location = P.find(function (t) {
                    return t.name === e.location
                }) || null, e.arena = D.find(function (t) {
                    return t.name === e.arena
                }) || null, e
            })
            , Y = [{
                title: "Три Испытания"
            }, {
                text: "В диких землях под разрушенным городом Фаран Гол, что на высочайшей вершине самой высокой горы, средь бушующих ураганов и танца молний, с незапамятных времён обитает Громовое Племя."
            }, {
                text: "Чтобы стать вождём Громового Племени, претендент должен выдержать Испытания Трёх Чудищ. В этот день молодая дева, в своих юных годах, принимает вызов."
            }, {
                text: "Её имя – Фрея. Это сказание о ней."
            }, {
                text: "Фрея закрыла глаза. Горький дурман обжигал её ноздри и заполнял лёгкие. Пещера, в которой она находилась, была темна и холодна. Девушка знала, что этот день наступит. День Испытаний. Она была первой в очереди на правление Громовым Племенем."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/freya/pretty_windy.jpg"
            }, {
                text: "Когда её Отец ушёл из этого мира две луны назад, Фрея понимала, что за этим последуют её испытания. Она любила его всем сердцем, но у неё не было времени для скорби. Мысли занимало только грядущее. Фрея была прирождённой воительницей, ей не было равных ни в бою на мечах и щитах, ни на молотах или копьях. Но поговаривали, что в испытаниях многие были повержены ещё до того, как могли обнажить оружие."
            }, {
                text: "Дурман проделал свою работу, и сон накрыл Фрею, будто лёгкое дуновение ветерка. Она перенеслась из мира сущего туда, где кружились сны и кошмары."
            }, {
                text: "Фрея открыла глаза и обнаружила себя на обширном сыром болоте. Она взглянула наверх и увидела кроваво-красное небо и чёрную, как обсидиан, луну. Ужасающие пульсирующие деревья из плоти извивались, как черви. С деревьев свисали мёртвые лесные обитатели: кролики, мыши, барсуки, опоссумы и им подобные. С каждым шагом Фреи почва присасывалась к её сапогам, будто пытаясь удержать её и поглотить."
            }, {
                text: "Фрея прокладывала себе путь сквозь эту кошмарную топь, как вдруг огромное нечто показалось вдали. Два громадных жёлтых шара сидели в широкой плоской голове. Фрея сразу признала в этом существе змеиную богиню – Акронис. Фрея крепко сжала свой меч и осторожно приблизилась к огромному духу-змее."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/freya/Freya02.jpg"
            }, {
                text: 'Акронис говорила голосом, который был чем-то между хриплым шипением и нежным шёпотом матери ребёнку. Каким-то непостижимым образом он наполнял всё пространство болота. «Огневласая Фрея, ты, как и твои предки до тебя, пришла в мою обитель в поисках обряда Правления. Моё испытание не в силе или воинском ремесле, а в смекалке. Если ты решишь мою загадку, то пройдёшь через мой мир в обители моих братьев. Но если не преуспеешь, я стяну плоть с твоих костей и буду переваривать тебя заживо тысячу лет. Ты принимаешь мои условия?»'
            }, {
                text: 'Фрея укрепила своё сердце и охладила разум. Для этого она была здесь. Она не могла позволить страху овладеть ею. Фрея утвердительно кивнула: «Принимаю, о, Богиня Змей и Червей. В чём твоя загадка?». Глаза Акронис сверкнули от восторга, и её тонкие губы искривились в неком подобии улыбки. «Очень хорошо. Вот твоя загадка», – прошипела она.'
            }, {
                text: "«В оковах плоти ей плевать - король или дурак. \nПролившись, возвещает горе или битвы мрак. \nКипящая страстями в вас, гнев зовёт и ярость. \nСорвав оковы, не даёт видеть смертным старость. \nБежит - её уж не догнать, \nВладельцу скоро погибать»"
                , style: {
                    fontStyle: "italic"
                }
            }, {
                text: 'Акронис уставилась на Фрею, как камень. «Каков твой ответ, бренное создание?»\n\n    '
            }, {
                text: "Фрея крепко задумалась. Её сердце громко билось в груди. Она чувствовала, как кровь бьётся в её запястьях. Фрея закрыла глаза, и ответ пришёл к ней."
            }, {
                text: '«Кровь. Ответ – кровь. Кровь течёт в жилах короля и дурака. Когда кровь пролита, это горе или битва. Кипящая кровь наполняет гневом и яростью, а когда она бежит, за ней следует смерть»'
            }, {
                text: 'Акронис медленно продвинулась ближе, её огромная голова была в каких-то сантиметрах от лица Фреи. Девушка ощущала гнилой смрад тысячи съеденных жертв. Словно живой, он полз и обвивал её. «Ты умная девочка, Фрея. Похоже, ты не просто воительница. Сладкая, сладкая кровь – наш ответ». – Акронис уползла прочь, освободив от витков своего чудовищно длинного тела проход, что был скрыт за нею.'
            }, {
                text: "По ту сторону прохода был портал, ведущий к зелёной земле туманов и дождей. Фрея прошла сквозь него, оказавшись в совершенно другом мире. Это место полностью отличалось от предыдущего. Она была на краю разрушенной деревни, посреди затянутого туманом леса. Шёл ливень. Туман струился по земле. Кости мёртвых лежали на пути."
            }, {
                text: "Фрея заметила, что некоторые из мертвецов были облачены в знакомые доспехи, но большинство носили другие странные одежды и оружие, неизвестные ей. Фрея переступала через них на своём пути к разрушенной деревне. На центральной площади, ворон невероятных размеров клевал останки павшего великана."
            }, {
                text: "Фрея тут же узнала призрачного духа-ворона. То был Нимогогг, Владыка Мёртвых. Она приблизилась к нему, и огромная птица немедленно прекратила клевать труп, повернула к Фрее голову и закаркала."
            }, {
                text: '«Похоже, Сестра упустила очень сытный обед. С загадкой пришлось повозиться? Мне не очень-то нравятся загадки. Я в них плох». – Сказал Нимогогг писклявым мрачно-насмешливым тоном.'
            }, {
                text: "Фрея молчала. Нимогогг был известен её народу как обманщик. И хоть он и был неважным воином, его слова часто накладывали на непосвящённых оковы ужасных договоров и односторонних сделок, заканчивавшихся смертью... или того хуже. Молчание, посчитала Фрея, было сейчас наилучшим выбором."
            }, {
                text: 'Нимогогг на мгновение уставился на неё своими большими зияющими пустотой глазами и продолжал. «Что ж, полагаю, приступим?» – пробурчал Вороний Бог и повернул голову в сторону туманного холма за ним.'
            }, {
                text: '«На том холме стоят четыре трона. На каждом троне – по короне. Каждая корона – это выбор. У каждого выбора есть последствие. Принеси мне одну из корон». – Громко прокаркал Нимогогг, будто смеясь, и продолжил клевать несчастный труп.'
            }, {
                text: "Глубоко вздохнув, Фрея пошла мимо павших воинов к холму вдали. Всё было настолько затянут туманом, что едва ли можно было что-то разобрать на расстоянии вытянутой руки. Сапоги Фреи хрустели о кости, разбросанные в мокрой траве. Крики призраков отражались эхом вокруг неё."
            }, {
                text: "Наконец, Фрея добралась до вершины холма, и туман рассеялся. Четыре трона стояли пред ней. Первый трон был сделан из костей и плесени. Костяная корона восседала на нём."
            }, {
                text: "Второй трон был из железа. На его металле были выкованы руны. Изрезанная рунами железная корона восседала на нём."
            }, {
                text: "Следующий трон был из самого отборного золота. Великолепная золотая корона, усыпанная драгоценными камнями, восседала на нём."
            }, {
                text: "Последний трон был сплетён из пышных живых растений, сверкающих зеленью. Корона из переплетённых шипованных ветвей восседала на нём."
            }, {
                text: 'Внезапный пронзительный голос Нимогогга возник отовсюду: «Каждый трон олицетворяет способ правления. Какой из них выберешь ты? Какой королевой станет Фрея из Громового Племени?».'
            }, {
                text: "Фрея на мгновение призадумалась. Она знала, какой трон звал её. Фрея подняла Железную Корону с рунами и надела её на себя."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/freya/Freya03.jpg"
            }, {
                text: '«Неудивительно, что дочь Кьерна выбирает путь Войны. Очень хорошо. Желаешь битвы – получишь её». Вдруг, туманы закружились вокруг неё, закрывая обзор, и дикое карканье Нимогогга раздалось повсюду. Исполинский Ворон воспарил над ней, взмахи его крыльев вызвали вихрь ветра и тумана вокруг неё. И так же внезапно, как и начался, ветер затих и туман рассеялся.'
            }, {
                text: "Фрея оказалась в тёмной пещере. Порода была из странного зеленовато-чёрного минерала. Сталактиты свисали с потолка, мокрые из-за восходящего пара. Фрея сделала шаг и тут же замёрзла."
            }, {
                text: "Большой тёмный силуэт скользнул в гнетущем мраке. Волосы на шее Фреи встали дыбом, и она отпрыгнула в сторону. Разряд молнии с треском разломил почву на месте, где только что стояла Фрея. Великий дракон вышел из мрака, его глаза и пасть сияли лазурной бурей ярости и энергии. Его голова, увенчанная тремя рогами, и разбросанные по хребту шипы были чёрными, как уголь."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/freya/Freya04.jpg"
            }, {
                text: "Фрея признала в чудище Велтрейка, первого из Призрачных Драконов и их короля, мёртвого уже тысячу лет. Но здесь, в мире снов, он снова жил."
            }, {
                text: "Она знала, в чём заключалось её испытание, но как же ей одолеть такого монстра? У неё не было времени на раздумья, так как ещё один вихрь из молний ринулся в её сторону. Фрея снова уклонилась, обнажила свой меч и щит и рванула на зверя."
            }, {
                text: "Велтрейк с рёвом встал во весь рост, заполнив собою весь проход пещеры. Широченный размах его покрытых кожей крыльев казался бесконечным. Фрея оторопела от этого зрелища. Фшшшш! И снова вихрь энергии вырвался из пасти дракона, Фрея подняла щит, чтобы отразить его. Щит тут же превратился в стекло и разлетелся на тысячу кусочков. Фрея избежала следующий разряд энергии, отскочив за стену из камней."
            }, {
                text: "Она взглянула на свой меч. Реликвия её предков. Когда-то он принадлежал её отцу. Он доказал свою доблесть, прямо здесь, в этой обители. Он прошёл Три Испытания и был признан достойным править Громовым Племенем. Фрея хотела бы, чтобы он был рядом сейчас. Чтобы направлял её, придавал мудрости. Но отец её был мёртв, Фрея была одна. Или же..?"
            }, {
                text: "Время будто остановилось, пока она смотрела на свой меч, и он начал источать мягкий оранжевый свет. Фрея чувствовала, как тепло этого свечения наполняет саму её душу. Из свечения раздался голос, и на глазах её проступили слёзы."
            }, {
                text: '«Фрея, знай же, я с тобою всегда. Ты более чем достойна занять моё место. Верь в себя и в наследие, что я оставил. Ты – бушующая буря, так покажи дракону, на что способное твоё пылающее сердце». И с этими словами свет меча угас, а Фрея, воодушевлённая словами её отца, ринулась из своего укрытия и атаковала дракона с боевым кличем на устах. Дракон попытался с размаху достать её, но она была слишком быстра. Она вонзила меч в живот Велтрейка. Дракон взревел, меч ослепительно разгорелся оранжевым...и всё погрузилось в полный мрак.'
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/freya/Freya5.jpg"
            }, {
                text: "Фрея очнулась в холодной, тёмной, сырой пещере. Она встала и оглянулась вокруг. Её окружили соплеменники, их глаза выражали спокойствие и почтение, они улыбались. Они молчали согласно обычаю. Старейшина деревни прошёл вперёд, поклонился и водрузил Железную Корону, странно похожую на ту из обители Нимогогга, на её голову. Старейшина затем поставил у её ног исписанный рунами и орнаментами сундук."
            }, {
                text: "Фрея открыла сундук и нашла в нём чудесное оружие. Золотые молоты-близнецы, превосходно выкованные и украшенные рунами её племени. Фрея прошла Три Испытания, и так началось её правление. Она улыбнулась, ибо знала, что отец гордился бы ею."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/freya/Freya06.jpg"
            }]
            , q = [{
                title: "Одинокая тень"
            }, {
				text: '"Ещё до того, как мерзкое сияние Солнца впервые озарило Вердию. До того, как жалкое зверьё и человеческие выродки впервые засуетились на поверхности земли. До того, как искра жизни Отродья Амарги меркнула в этом скверном месте... не было ничего, кроме Лона Тьмы. В ней, в этой кромешной пустоте, ропот Арк’дун сворачивался и извивался в чёрных глубинах. Мы были рождены в сокрытых разрывах мира, незримых для Богов. И пока всё обречено однажды состариться, иссохнуть и сгнить, мы, Арк’дун, будем здесь... ждать, расти и шептать... во Тьме"'
			}, {
                text: "Первая Заповедь Арк’дун"
                , style: {
                    fontStyle: "italic"
                    , fontWeight: "bold"
                    , textAlign: "center"
                }
            }, {
                text: "- Войд-Аугур Нас’Горун"
                , style: {
                    fontStyle: "italic"
                    , fontWeight: "bold"
                    , marginTop: "-40px"
                    , textAlign: "center"
                }
            }, {
                text: "Они сказали, что мне мне будут поклоняться. Меня будут обожествлять."
            }, {
                text: "Они сказали, что мой народ вечно будет восславлять имя Рух Каана. Я должен был стать Стражем Склепа, почитаемым хранителем Гробницы Нас’Горуна."
            }, {
                text: "Но они не сказали, что я стану пленником брошенного пустого мавзолея."
            }, {
                text: "Я дрейфовал в бесконечном бессонном море пустоты. Время омывало меня как безмолвные волны, вздымающиеся и падающие, как проходящие десятилетия. Я оставался неподвижным, застывшим, онемевшим."
            }, {
                text: "Я был на страже с особой целью, охраняя сущности моих братьев и сестёр. Черные урны, искусно выполненные и инкрустированные серебром, заставляли стены. Каждая неповторимая форма отражала неповторимость души Арк’дунианца, чей прах наполнял сосуд. Мы, народ Арк’дун, покидаем наши смертные тела, когда те увядают и умирают, но наши души неиссякаемы. Они зовутся Верум, и они бессмертны."
            }, {
                text: "Верно, гробницы Арк’Дун похожи на усыпальницы других рас Вердии, но наши служат иным целям."
            }, {
                text: "Когда много лет назад Боги вышли на бой, пали и погрузили мир в долгую Глубокую Ночь, наш великий Оракул Нас’Горун предвидел катаклизм. В своей бесконечной мудрости он приказал запечатать наш Верум в гробницах, тихих и безопасных, до тех пор, пока не придёт время народу Арк’дун вернуться."
            }, {
                text: "Творец Тьмы Агруул, первый Отец и лидер нашего клана – носитель Косы Злобы. Войд-Аугур Нас’Горун, великий философ и говорящий с Пустотой. Ваджонго Ночемолот, Созидатель, Кузнец оружия и артефактов Арк’Дунианцев. Все они, основатели легенды нашего народа, сбросили Мантии Вместилища. Я остался в вечном одиночестве."
            }, {
                text: "Здесь я балансирую на грани разума и безумия. Тень среди теней."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/ruhkaan/BookOfLoreRuhKaan.jpg"
            }, {
                text: "Потом, неожиданно и необъяснимо, произошло самое любопытное. Что-то, что не случалось столетиями. Кто-то вошёл в мою гробницу."
            }, {
                text: "Сначала я решил, что это лишь игра света. Живые существа неохотно вступают во владения Арк’Дун. Никогда они не проникали в наши усыпальницы, тем более в самую грандиозную и мрачную из всех. Однако это случилось. Какой-то бедный глупец вошел в мой склеп."
            }, {
                text: "Хотя чужому взору моя гробница показалась бы неосвещенной, ничто не было сокрыто от моего взгляда. Арк’Дун были едины с тьмой и тенями. Существо, крадучись, ничтожно пряталось в своём укрытии."
            }, {
                text: "Это был человек, это я мог ясно видеть. Я не встречал представителей других видов столетиями, но что-то в нём выглядело знакомо. Возможно, дело было в его одежде – я видел что-то подобное раньше. Он принадлежал к весьма известному ордену. Болотные убийцы. Ах да, тогда я вспомнил."
            }, {
                text: "На нём была накидка Ранидов."
                , style: {
                    textAlign: "center"
                }
            }, {
                text: "Я наблюдал, как он нервозно делает шаг за шагом. Бесшумно, да, но я ощущал страх в каждом движении. Затем я почувствовал, что... пробуждаюсь. Оцепенение перестало сдерживать моё тело. Я чувствовал будто невидимые оковы песком осыпаются с меня. Жизнь возвращалась. Цель существования возвращалась."
            }, {
                text: "Ранид приблизился к урне величайшего из нас, урне Войд-Аугура. Он схватил сосуд, завернул в накидку и направился к выходу. Я пытался дотянуться до него, чтобы остановить, но ещё не вернул контроль над своей физической формой. Жизнь продолжала наполнять мои члены. Жизнь... и что-то ещё. Что-то, чего я не помнил. Нечто, чего я не мог не замечать. Жестокая, почти безумная боль."
            }, {
                text: "Голод."
                , style: {
                    fontStyle: "italic"
                    , fontWeight: "800"
                    , textAlign: "center"
                }
            }, {
                text: "Страж Склепа никогда не может покинуть свою гробницу, но бедный дурак-Ранид взял часть склепа с собой и, куда бы он ни направился, я мог следовать за ним. Освободившись от объятий своего саркофага, я улыбнулся. Теперь у меня есть цель. Я больше не пленник. Нужно догнать вора. Вернуть украденное. Вырвать душу из его тела. Услышать, как хрустят и ломаются его кости в моей хватке."
            }, {
                text: "Но сейчас... с новоприобретенной жизнью появляются новые потребности. Нужно питаться, чтобы жить."
            }, {
                text: "Я был очень, очень голоден."
                , style: {
                    fontStyle: "italic"
                    , fontWeight: "bold"
                    , textAlign: "center"
                }
            }]
            , V = [{
                title: "Музыка стали"
            }, {
                text: "Каждое утро с самого раннего детства я просыпался под ритмичную музыку стали, звучащей ярко и чисто, подобно восходу солнца над горами Лонг Хоу. Я наблюдал из окна своей опочивальни за Отцом и Мастером Шифу, тренирующимися во дворе. Мастер Шифу, с его золотым копьём, размывающимся в движении, как колибри в полёте. И Отец, владеющий могучим великим мечом, что я однажды назову своим, со свирепостью, содрогающей воздух с каждым взмахом."
            }, {
                text: 'Но это было давно. Ныне, Отец был бледной тенью того человека, что научил меня всему, что я знаю. «Ставь честь и справедливость превыше всего», - бывало, скажет мне он. «Укроти бурю в своей душе, и обретёшь мастерство клинка», - взревёт он, и в его голосе ощутишь мощь самих Богов.'
            }, {
                text: "Не вспомню момент, когда Отец окончательно поддался этому коварному червю, Пестилусу, внедренцу из Отагура, провозгласившему мир между нашими землями. Я лишь знаю, что в один ужасный день Отец... перестал быть Отцом. Когда-то он был Королём Драконом, несравненным воином, которого любил и боялся каждый в королевстве. Гора раскатистого смеха, с ненасытностью в бою, сравнимой лишь с его аппетитом на пиру. Но я всегда буду помнить ту скользнувшую по лицу Пестилуса улыбку, когда Отец изгнал меня из моего единственного дома, глядя на меня глазами, затуманенными порчей. Эта ухмылка ранит глубже тысячи клинков."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/raigon/Raigon01.jpg"
            }, {
                text: "Ночная буря будто преследовала меня, вихрь из дождя и холода. Того холода, что крадётся сквозь щели доспехов и пробирает до костей. Я опережал своих преследователей больше чем на полдня. Я был уверен, что Пестилус послал Ангарота Разбойника выследить и избавиться от меня навеки. Ангарот был известен своей жестокостью, он не отпускал жертв легко."
            }, {
                text: "Густой лес был накрыт плотным туманом. Множество странных звуков лесных тварей гуляло в ночном воздухе. Я держался за рукоять меча просто на случай, если одна из них решит, что я сойду за ужин. Кстати, об ужине – больше половины дня я не ел. Так что, увиденные мной тёплое позолоченное сияние свечи и валящий из трубы дым неподалёку были хорошим знаком."
            }, {
                text: 'Причудливый крестьянский домик был совсем не похож на величаво украшенный Дворец, но в простом деревянном жилище есть свой уют. На мой стук за дверью ответила женщина: «Мы тут простые крестьяне, ничего у нас не забрать, кроме свиней! Да и те без боя не сдадутся, гордые животные». Голос её был твёрд, но не без тени страха.'
            }, {
                text: '«Извините... госпожа, я лишь хотел укрыться от дождя и холода», - отвечал я. Через мгновение дверь со скрипом отворилась. Женщина была в годах, около пятидесяти лет. «Ты должен простить меня, ходят слухи об Отагурских бандитах, шатающихся по окрестностям, осторожность не помешает. Ну, ты и не выглядишь, как те с нездоровыми глазами и чёрными языками. Входи-входи. С такой погодкой и простудиться проще простого», - говорила она, расторопно приглашая меня внутрь. Я улыбнулся ей. «Спасибо, госпожа. Надеюсь, я не сильно стесню вас», – сказал я, рассматривая скромное жилище. Пол был устлан шкурами животных, а на стенах красовались головы медведей и оленей.'
            }, {
                text: 'Охотник, её муж, сидел у камина в кресле-качалке, неподвижно уставившись на языки пламени и не замечая меня. Женщина объяснила: «О, не обращай внимания на старого Хэмуна. Он изменился с тех пор, как сын покинул нас... Ты, наверное, проголодался, а у нас похлёбка почти готова. Кстати, меня зовут Мелга». Я оставил меч у стены и присел.'
            }, {
                text: 'Женщина бросила взгляд на мой меч. «Ты, стало быть, воин? Наш сын тоже... был воином. Он пал в битве», – сообщила она и поставила чашку с похлёбкой передо мной. «Мои соболезнования вам. И спасибо, я умираю от голода» – сказал я, налетая на еду.'
            }, {
                text: 'Внезапно раздался громкий стук в дверь. Она подошла к двери и сказала: «Кого это черти принесли в такой час? Добрые люди честно заслужили отдых ночью». Мрачный угрожающий голос прорычал в ответ: «Мы знаем, что малютка Принц здесь с вами. Его лошадь снаружи. Выведите его, или не только его голова покатится к свиньям». Снаружи раздался смех. Без сомнений, это были Ангарот и его люди. Я взял свой меч и обратился к Мелге: «Я разберусь. Оставайтесь внутри и не выходите ни при каких обстоятельствах».'
            }, {
                text: "Выйдя наружу, я встретил дюжину Отагурских верзил, бледных, высоких и мускулистых, покрытых угольно-чёрным шипованными доспехами. Ангарот был самым рослым среди них, в тёмном изодранном плаще и рогатом шлеме. Его глаза и зубчатый клинок светились отвратительно зеленеющей аурой, порождённой тлетворной чёрной магией Кровавых Жрецов Отагура. С пятью-шестью из них я мог бы справиться, но двенадцать было слишком много даже для воина моих навыков. Я был готов погибнуть в бою, если бы пришлось. Дождь перешёл в ливень."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/raigon/Raigon02.jpg"
            }, {
                text: '«На твоём месте я бы вернулся к Пестилусу и сказал, что не смог меня отыскать. Определённо, лучше так, чем не вернуться совсем» - крикнул я, обнажая меч. Отагурские воины взорвались смехом. По взмаху руки Ангарота они тут же стихли. Затем он направил на меня меч, рассеивая мрак ночи его зелёным свечением. «Ты действительно веришь, что можешь побить меня и одиннадцать жесточайших разбойников Отагура? Один? Ты, должно быть, и вправду дьявольски храбр и безумен. Но это неважно, когда мы с тобой закончим, то, что от тебя осталось, пойдёт на корм свиньям, а ферма сгорит дотла». – Ангарот снова подал знак, и Отагурский отряд пронзил ночной воздух боевым кличем, рванув на меня.'
            }, {
                text: "Первый воин сделал выпад копьём. Я парировал, развернулся и полоснул вверх, убив его. Следующий прыгнул на меня, раскручивая клинок над головой. Я сделал кувырок над ним и с силой опустил меч на двух воинов, разрубив их плоть вместе со щитами и бронёй, мгновенно отправил их к праотцам. Трое других воинов оказались умнее и не стали идти на меня по одному, напав вместе, рыча и размахивая длинными тёмными клинками. Я отражал удары, контратаковал, рубил, опять блокировал, парировал атаки. Снова и снова они давили вперёд. Им почти удалось одолеть меня, как вдруг нечто незримое врезалось в воинов, повалив их одним движением."
            }, {
                text: 'Мелькнула молния, озарив человека в капюшоне и плаще, стоявшего на месте павших Отагурцев. Я не смог разглядеть его лицо, но признал его оружие. Его золотое копьё горделиво блестело в ночи. Человек снял свой капюшон, и моё сердце забилось от увиденного. Это был Мастер Шифу. Он кивнул мне, его глаза, борода и волосы были цвета стали. Ангарот завопил: «Убейте старого дурака, я разберусь с малышом Принцем». Копьё Мастера Шифу ожило, как пробудившийся зверь. Оно пронеслось смертельной дугой, уложив трёх воинов сразу.'
            }, {
                text: 'Ангарот рванул ко мне, в его глазах я видел кровавую смерть. Я уклонился от его удара и повернулся, сместив свой вес для удара с разворота, но он отразил его, крепко удерживая стойку. Ангарот был силён, дьявольски силён. Его лицо было рядом с моим. Его светящиеся зелёные глаза пронзали мои. Его дыхание несло смертью и гнилым мясом. «Пестилус был прав», – бросил он мне – «ты – слабак, как и твой отец. С падением Куны настанет рассвет Отагура!».'
            }, {
                text: "Я снова перенёс свой вес, используя инерцию Ангарота, чтобы толкнуть его, ударил по ноге и лишил его равновесия, развернулся и со всей силы, что у меня была, рубанул его. Голова Ангарарота взметнулась в воздух, приземлившись у свинарника неподалёку."
            }, {
                text: 'Я повернулся и увидел, как Шифу наносил удар последнему воину. Он вынул копьё из мёртвого Отагурского тела. «Похоже, охотники превратились в добычу», – угрюмо промолвил Шифу. «Как вы меня нашли, Мастер Шифу? Откуда вы появились?», – сказал я, подойдя к нему.'
            }, {
                text: '«Я направлялся домой в Куну, чтобы увидеть твоего Отца, и представь моё удивление наткнуться на Отагурский отряд так далеко от их проклятой земли. Я последовал за ними, и вот – мы здесь». Я положил руку на его плечо. «Что ж, вы подоспели как раз вовремя. Не думаю, что продержался бы один», – сказал я. «Но я не уверен, что вас радушно примут во Дворце. Пестилус затуманил разум Отца. Обернул его против меня. Он... я... был изгнан. Нужно найти способ спасти Короля и освободить Куну».'
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/raigon/raigon_shifu.jpg"
            }, {
                text: 'Шифу посмотрел на меня, на его глаза пала тень раздумий. «Райгон, я думаю, что знаю способ вернуть твой дом. Путешествуя по разным землям в своё отсутствие, я нашёл пристанище и работу в боях на Аренах с великими воинами со всей Вердии. Если мы хотим вернуть твой дом, нам понадобится их помощь, ты можешь завоевать расположение этих воителей. Пойдём со мной. Ты – прирождённый воин, Райгон. Покажи свою отвагу на Аренах, и мы вырвем Куну из гнилых лап Пестилуса».'
            }, {
                text: "Я попрощался с Мелгой, поблагодарил её и мужа. Взобравшись на Небесного Смотрителя, я последовал за Мастером Шифу. Казалось, наши пути должны были пересечься. Моя судьба вела меня на Арены. Шифу был прав, я был прирождённым воином. Мой путь по возвращению дома начинался с моих первых воспоминаний о нём, с ритмичной музыки стали."
            }]
            , U = [{
                title: "Араду и Чёрт"
            }, {
                text: '«Сегодня важный день, Старина Араду», – сказал себе чернокнижник с растрёпанной шевелюрой, пафосно надевая на плечи свою экстравагантную, хоть и дёшево пошитую, фиолетовую накидку. «Понадобилось пятьдесят три года и некоторые перемены, но наконец-то мир магов познает мой неумолимый гений», – воскликнул он, стряхнув остатки сегодняшнего завтрака со своей редкой бородёнки.'
            }, {
                text: '«Как же ты хорош, чертяка! Эти Чернокнижники Зеридиона будут поражены!», – сказал Араду, подмигивая своему отражению. Чернокнижники Зеридиона были не-таким-уж-тайным обществом теневых магов, что каждую неделю собирались пообсуждать последние подлые злодейские веяния в городе Толин, повыделываться своими новейшими демоническими призывами, и, конечно, посмаковать линейку сыров отборных, но сильно переоценённых.'
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/ezmo/boi_goin_out_tonight.jpg"
            }, {
                text: "Применение чёрной магии и демонических знаний было запрещено в Толине, однако Чернокнижникам удавалось увиливать от законов и охотников на магов, изменяя места еженедельных встреч и скрывая их магией иллюзий."
            }, {
                text: "Главой клуба, Великим Чародеем, был таинственный колдун по имени Дор'Хазан. Ходили слухи, что он родом из древнего Фаран Гола, и когда-то был директором Школы Штормов, ещё до того, как Глубокая Ночь повергла мир в хаос. Конечно, это было довольно бездоказательно, так как Глубокая Ночь была несколько веков назад, и все архивы школы были уничтожены в той катастрофе."
            }, {
                text: "Магической специальностью Дор'Хазана была демонология, и он управлял, пожалуй, самым могучим демоном в известном мире – Мал’Контентусом. Мал’Контентус был семи футов ростом и одет в огромную чёрную накидку, с расправленными покрытыми кожей крыльями за спиной и угольно-чёрными рогами на гигантской голове. Глаза его были окутаны изумрудным огнём, и вообще, он был довольно внушителен и впечатляющ."
            }, {
                text: "Мал’Контентуса очень возмущало находиться в рабстве у такого низкого создания – человека – и он выплёскивал это негодование уже на своего слугу, смышлёного прохвоста Эзмо. Мы вернёмся к Эзмо позже."
            }, {
                text: "Считалось, что почти невозможно отследить место еженедельных встреч Зеридионских Чернокнижников, ведь они его меняли. Но ещё труднее было присоединиться к их компании, одетой в чёрно-пурпурное. Однако с помощью невероятного везения Араду смог обманами, подкупами и шантажом заполучить единственную аудиенцию в клубе избранных. Этим вечером тест будет проведён в пыльном подвале Академии Алхимии."
            }, {
                text: "Араду ещё раз проверил своё отражение, пока доставал свою ярко-зелёную чародейскую шляпу. Зелёный ужасно сочетался с фиолетовой накидкой, ведь чувство стиля Араду было почти таким же плохим, как и его магические способности. Он осторожно надел шляпу, чтобы она не легла на заработанную им ранее шишку на голове."
            }, {
                text: "Нужно понимать одну ключевую вещь про Араду. Видите ли, его некомпетентность в магии была непомерна. Если бы некомпетентность была отдельной магической дисциплиной, Араду был бы её Архимагом."
            }, {
                text: 'Но надо отдать Араду должное – он никогда не переставал пытаться, не смотря на... убогость результатов. Например, этим утром он исполнил заклинание, чтобы достать нижнее бельё с верхнего выдвижного ящика шкафа. Заклинание звучало так: «Подштанники, повелеваю! Вон из ящика – ко мне в руки!». Араду поймал подштанники лицом, а ящик вырубил его на добрые пару часов. Оттуда и шишка у него на голове. Ну, по крайней мере, он выспался.'
            }, {
                text: "Весело вприпрыжку он вышел из дома и, благодаря случайному расшатанному кирпичу тротуара, почти обеспечил дороге романтический поцелуй. Араду был довольно неуклюж, с координацией глаз и рук новорождённого страуса. Он всегда был таким и ничего не предпринимал, считая это воздаянием за его гениальность. Кхем-кхем. После стремительной прогулки по смертельно опасному для него тротуару Араду, наконец, прибыл в Академию."
            }, {
                text: 'Он вошёл внутрь танцуя, как будто он купил это место, с восхищением рассматривая громадные своды потолка и кристальные люстры под ним. Колледж был необычайно тих даже для вечернего часа. «Хм, это и вправду необычно», – размышлял Араду, пока шёл через главный зал к двери в подвал.'
            }, {
                text: 'Араду проковылял вниз по пыльным скрипучим ступенькам и обнаружил себя в волнующем присутствии... никого. Съеденные молью диваны, давно заброшенные книги и алхимические приборы единственные ожидали его в подвале с обоями из паутины. Он оторопел на мгновение, но тут до него дошло. «ЭТО и есть тест. Разумеется, они бы не стали проводить встречу так открыто. Где-то тут должна быть спрятана штуковина, отпирающая секретную дверь. Умно-умно, надо сказать», – подметил Араду.'
            }, {
                text: "Араду прочесал комнату в поисках чего-нибудь, что лежало бы не на положенном месте. Ничего ему не показалось необычным. Затем, внезапная вспышка озарения (точнее, разочарования) – и Араду начал переворачивать диваны и раскидывать книги с приборами, пытаясь отыскать какой-нибудь рычаг или кнопку, что могли бы вести в секретную комнату. Перепробовав всё, он, задыхаясь, рухнул на пол."
            }, {
                text: 'Между оглушительно тяжёлыми вздохами Араду услышал странный шум за дальней стеной комнаты. Он подполз поближе, приставил ухо к стене, закрыл глаза и сосредоточился на звуках. Он мог расслышать шёпот нескольких человек, но слова было не разобрать. «Должно быть, они все обсуждают МЕНЯ». – подумал Араду – «Без сомнения, высоко оценивают мою захватывающую демонстрацию целеустремлённости и везения».'
            }, {
                text: "Конечно, кто бы на их месте не жаждал встретиться с Араду Невоспетым, повелителем... ну, ничего, пока что. Но он работал над этим. Не позволяйте мечтам оставаться мечтами, детишки! Воплощайте их в жизнь!"
            }, {
                text: "И тут, великолепная идея пришла к Араду. Так как Чернокнижники Зеридиона за стеной, очевидно, следили за ним с помощью колдовства, он решил продемонстрировать свои магические способности. Магия сама по себе трудно давалась людям, но он был уверен, что впечатлит своих зрителей магией двух школ. Трансмутация и транслокация. Совмещение заклинаний призрачной формы и перемещения."
            }, {
                text: "Задумка была в придании себе бестелесной формы, затем использовании заклинания перемещения, чтобы пролететь сквозь стену и не столкнуться ни с чем на той стороне. Араду слышал о людях, что пытались проникать сквозь стены без призрачной формы. В итоге они навеки становились частью дедушкиных настенных часов. Араду был слишком умён, чтобы совершить подобную ошибку."
            }, {
                text: 'Суть этих заклинаний – в сосредоточении магической энергии на веществе кристалла. Здесь работает явление изменения плотности кристалла при его формировании, но опустим детали. Араду вынул из кармана два бледно-голубых кристальных шарика, каждый размером с большое яйцо. Он закрыл глаза и вызвал энергию заклинанием: «Призрак, как кристаллы, бледный, пронеси меня сквозь стены».'
            }, {
                text: 'Шёпот за стеной утих с колдовством Араду. Тусклая, словно лунный свет, дымка возникла вокруг кристаллов. Она спиралью окутала его ноги и ступни. Возникло облако в форме вращающегося диска и постепенно превратилось в небольшое торнадо. Оно кружилось всё быстрее, поднимая Араду вверх. «Оно работает, и вправду, работает! Мои магические способности безграничны!», – воодушевлённо воскликнул Араду.'
            }, {
                text: "Араду уже был поднят вверх на три фута, когда торнадо обернуло всё его тело, как будто сотни призрачных нитей связали вокруг него гигантский носок. Внезапным рывком вперёд Араду был проброшен прямо сквозь стену в потайную комнату за ней. Он оказался в том, что, похоже, было тайными личными комнатами Великого Чародея Дор’Хазана."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/ezmo/boi_got_dem_anime_eyes.jpg"
            }, {
                text: "Стены были уставлены бесчисленными полками с пыльными книгами. Комната была слабо освещена старой люстрой из костей того, что однажды было драконом, с серебряными свечами, горящими жутким зелёным пламенем. Дорогие алхимические и чародейские принадлежности лежали по углам."
            }, {
                text: "Удивительные и древние магические артефакты стояли на пьедесталах у стен. Кроваво-красный меч с изогнутым лезвием колебался подобно ряби на пруду. Он шептал, как предположил Араду, голосами забранных им душ. Громадный алебастровый шлем в форме черепа с медленно струящимся чёрным дымом из глазниц. Блестящая алая волшебная палочка, усыпанная драгоценными камнями, один из которых менял цвет её кончика каждое мгновение."
            }, {
                text: "Но среди чудес этой комнаты его больше всех захватила ритуальная пентаграмма в центре комнаты. Араду сам не особо был призывателем демонов, и вообще, даже демонов раньше не видывал. Но он знал достаточно, чтобы опознать демонический круг, наткнувшись на него."
            }, {
                text: "Внезапно самая невероятная идея озарила его. Что если он призовёт и будет управлять демоном для соперничества с тем, что у Дор’Хазана в рабстве? Тогда-то и преклонятся Чародеи Зеридиона пред его силой и гением и пустят его в свой тайный клуб. Хотя, с демоном, что потягается с Мал’Контентусом, он и сам возглавит клуб. Великий Чародей Араду, Высший Чернокнижник, Повелитель Демонов. О, ему нравилось, как это звучит."
            }, {
                text: 'Араду засуетился над демоническим кругом и, к своему везению, нашёл пыльный том рядом на деревянной подставке. Он был открыт на странице «Призыв Великих Хтонических Сил», и Араду потёр руки, словно маленький вредный хулиган. У него нашлись все ингредиенты, за исключением самого важного – «крови Главного Волшебника».'
            }, {
                text: 'К сожалению, тут-то и начала удача покидать Араду. Он был, разумеется, убеждён, что он и есть тот самый «Главный Волшебник», и в полной уверенности порезал свою ладонь. Он накапал своей крови в чашу из оникса и поставил её в центр круга.'
            }, {
                text: 'Затем, он начал читать заклинание: «Услышь меня, создание из чёрного потустороннего мира, внимай голосу своего хозяина. Аз есмь Араду, призываю из бездны тебя, заключённого в алебастровые оковы!». Линии круга начали светиться зелёным. Комната затряслась. Медленно нарастал грохот и заструился спиралью чёрно-фиолетовый дым по центру круга. Ритуал работал!'
            }, {
                text: "Гул начал стихать, зелёное свечение угасло, дым рассеялся и показался силуэт... чертёнка? Чертёнок был одет в странную фиолетовую накидку, а на том месте, где должно быть лицо, не было ничего, кроме огромного заполненного огнём рта, усеянного острыми зубами. У него была серая кожа и когти на руках. Но оно было едва ли с метр ростом! Как вы уже, возможно, догадались, это был никто иной, как Эзмо Проказник. Да, едва ли это был Великий Демон, которого Араду желал призвать."
            }, {
                text: '«Какого дьявола!», – вскрикнул Араду – «Так не пойдёт, совсем не пойдёт! Должно быть, в ритуал закралась ошибка». Эзмо потянулся и зевнул: «Нет ошибки. Получил то, за что платил, дружок». Араду рухнул на пол в разочаровании. Он не мог совершить ритуал снова – закончились ингредиенты. Но он подумал, может, хотя бы присмотреться к тому, что он призвал. Возможно, оно принесёт какую-то пользу. Араду заговорил своим самым официозным и повелевающим голосом.'
            }, {
                text: '«Кхм, Я – Араду Невоспетый. Кто ты, демон, что ты можешь? Как твоё имя? Отвечай же!», – приказал Араду.'
            }, {
                text: "Есть множество всяких правил, которые должен знать смельчак, безрассудно рискнувший призвать демона. Но важность их всех меркнет пред одним: Никогда, НИ ЗА ЧТО, не говорите демону ваше имя. У имён есть власть, знать чьё-то имя означает иметь над этим кем-то власть. Это была первая большая ошибка."
            }, {
                text: "Ещё одно правило, которого Араду не знал: закованный демон должен отвечать правдиво на все заданные вопросы, пока он в круге. Однако, он не обязан говорить правду, если его прямо не спросили. Хитрый демон может использовать эту лазейку с умом. А Эзмо был одним из самых хитрых."
            }, {
                text: '«Что ж, я, как видишь, чёрт. Меня зовут Эзмо. Что я делаю? Ну, это довольно общий вопрос, не так ли? Правильным вопросом было бы: “Что Эзмо может сделать для тебя?”», – Эзмо улыбнулся своей широченной улыбкой во всё лицо, как говорится, «до ушей».'
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/ezmo/nostrils_or_eyes_who_knows.jpg"
            }, {
                text: 'Араду на секунду задумался и затем совершил ещё одну критическую ошибку. Он не задал вопроса: «Ну, ты довольно мал и не очень-то пугаешь. Не уверен, что ты вообще можешь быть полезен». Рот Эзмо изобразил озлобленность: «Тогда знай, что мой хозяин сейчас – сам Великий Демон Мал’Контентус, и, раз уж ты в комнате у Великого Чародея Дор’Хазана, уверен, ты знаешь, что Мал’Контентус служит Дор’Хазану». Араду нетерпеливо кивнул: «Да-да, я знаю всё это. Ближе к делу, чертёнок!».'
            }, {
                text: '«Ну, у нас, демонов, есть поговорка: “Почеши мне крылья, и я почешу твои”. Сделай что-то для меня, Араду, и я сделаю что-то для тебя». Араду присмотрелся к Эзмо и не увидел никаких крыльев. А также, Араду, похоже, уже позабыл, что Эзмо был ЕГО узником и должен был слушаться его приказов. Эзмо поднял свои когтистые лапки, закованные в большие исписанные рунами оковы.'
            }, {
                text: '«Я не могу ничего особенного, пока я в этих оковах. Но видишь ту книгу позади тебя?». Араду обернулся и увидел большущий причудливо оформленный том позади, ранее им не замеченный. У книги на обложке, покрытой золотыми демоническими рунами, был гигантский глаз с тремя золотыми диадемами над ним.'
            }, {
                text: '«Этот том – Затерянный Гримуар. Говорят, в нём есть самые мощные заклинания, известные человеку... или демону. Если ты хочешь настоящей силы, то ты получишь её там, а я смогу снять эти оковы», – сказал Эзмо как будто между делом. Глаза Араду засветились. «Вот только... лишь я знаю, как его открыть. Если ты дашь его мне, я открою его для тебя, и тайны Гримуара со всей его мощью станут твоими».'
            }, {
                text: 'Эзмо снова улыбнулся во всё лицо. Араду прищурился. «Почему ты просто не скажешь мне, как его открыть, и я сделаю это сам», – заявил он с подозрением, гордясь своей проницательностью. «Ну, потому что я должен коснуться её, чтобы открыть», – возразил Эзмо, будто это было чем-то само собой разумеющимся. «Оу, – промямлил Араду смущённо, – тогда ладно». Араду достал книгу и совершил свою последнюю ошибку. Он отдал Гримуар в руки Эзмо.'
            }, {
                text: '«Благодарю, Араду. Было приятно иметь с тобой дело», – усмехнулся Эзмо. Затем он заговорил на тёмном демоническом наречии, и, как только слова слетели с его уст, одновременно произошло несколько вещей:'
            }, {
                text: "Открытая книга воспарила над рукой Эзмо, Араду затрясся от того, что был поднят в воздух невидимой силой; скрепляющая оковы Эзмо цепь разлетелась на куски, а демонический круг испарился. Последним, что увидел Араду, пока его тело засасывало внутрь книги, было приглашение в Клуб Чернокнижников Зеридиона, вылетевшее из его внутреннего кармана и упавшее на пол. Он перепутал дату."
            }, {
                text: "Аудиенция была назначена на завтра."
                , style: {
                    textAlign: "center"
                }
            }]
            , K = [{
                title: "Живой Кров"
            }, {
                text: "Глубоко в самом сердце гор На’Гол, за их холодным гранитом, ниже бездонных шахт Анродора, живёт первородное негаснущее пламя."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/ashka/Ashka01.jpg"
            }, {
                text: "Этот вечный огонь существовал со времён сотворения, говорят, у него есть разум, воля и своё предназначение. Народ Тиоко сделал сердце горы своим домом и поклонялся тому пламени с незапамятных времён. Они дали имя бессмертному огню – Живой Кров."
            }, {
                text: "Отделённый от остального мира, народ Тиоко живёт традициями и обычаями. По достижении зрелости, соплеменнику даруется особая маска, созданная Древним Поджигателем, первым из укротителей огня. Нет двух одинаковых масок, все они уникальны. С этого момента она никогда не снимается, лицо юного Тиоко предаётся забвению, и узнают его лишь по маске."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/ashka/Ashka03.jpg"
            }, {
                text: "Ношение народом Тиоко таких масок – воздаяние почестей Живому Крову и способ воссоздать его образ. Никто из живущих не видел Тиоко без маски и, возможно, никогда не увидит."
            }, {
                text: "История пойдёт о молодом Тиоко с верой и преданностью не в пример другим. О мальчике по имени Ашка. Видите ли, Ашка отличался от остальных – он был нем с рождения. С момента своего появления на свет он не издал ни единого звука. Он лишь смотрел вверх на свой пещерный мирок широко открытыми золотыми глазами неописуемой красоты."
            }, {
                text: 'Золотые глаза очень редки среди Тиоко, говорят, что это благословение самого Живого Крова. Они называют их «Взор Крова». Пошла молва об избранном, и соплеменники стали почитать Ашку.'
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/ashka/Ashka02.jpg"
            }, {
                text: "Всё шло хорошо до дня наступления совершеннолетия, когда юный Ашка должен был унаследовать способности поджигателя от Живого Крова и присоединиться к друзьям и семье в благоустройстве горы. Но произошло нечто другое."
            }, {
                text: "Когда Ашка предстал перед Живым Кровом и получил свою маску, Кров не проснулся. Он спал, лишь тлеющие угли указывали на жизнь. Соплеменники Ашки смотрели на это в недоумении. Живой Кров не наполнил Ашку Огнём Горы. Однажды благословлённый Кровом, теперь Ашка был проклят им."
            }, {
                text: "По безжалостной традиции Тиоко, Ашка был изгнан с горы. Выставлен вон по одному из бесчисленных проходов, ведущих в холодный внешний мир, вдаль от тепла и уюта Сердца."
            }, {
                text: "Ашка был немым, но не глупым. Он понимал, что произошло. Он понял, что был проклят. Изгнан всеми, кого он знал и любил. Он обратил свой взор наверх, к просторному, скучному голубому потолку над ним. Каменистый грунт был покрыт непонятным, зелёным, игольчатым мхом. Вдали странно выглядящие сталагмиты вырастали из земли, коричневые, с поверхностью будто морщины на коже, усыпанные зелёнью на вершине. Ашка был потерян и одинок в этом чужом мире. Он мог лишь идти вперёд и наблюдать."
            }, {
                text: "Вскоре Ашка оказался в руинах странного города. Должно быть, однажды это было значительным, восхитительным местом, думалось молодому Тиоко. Улицы были уставлены металлическими статуями высоких, стройных людей без масок."
            }, {
                text: "Их руки были простёрты к горе. Лёгкий ветерок гулял по городу, и лохмотья старых красных флагов трепетали, как птицы. Таинственные вопли отовсюду отражались эхом, и это пробирало Ашку до костей. Вокруг него витали призраки и духи, стоял вой из леденящих душу криков. Ашка предположил, что это место было проклято, как и он сам."
            }, {
                text: "Ашка сбавил шаг, ослабленный усталостью. Тиоко не употребляли пищу, как обычные люди, их питало тепло Живого Крова. Ашка был уверен, что без него он скоро умрёт. Он вошёл в давно заброшенный дом, он был достаточно тёмным и маленьким, что напоминало Ашке его дом, из которого он был изгнан. Он свернулся в углу калачиком и стал ждать прихода смерти."
            }, {
                text: "Но Ашка не умер. Вместо этого он уснул."
            }, {
                text: 'Ашка стоял пред Живым Кровом, пылающим всем величием своего огня. Ашка впервые в жизни почувствовал странное першение в горле и изверг из себя крик: «Почему?! Почему ты проклял Ашку?!». Кров улыбнулся молодому Тиоко, его лицо было диким и по-первобытному свирепым. Ашка осознал, что за образ отражают маски его соплеменников. Кров говорил, его голос ревел, как преисподняя, но был усладой для ушей Ашки.'
            }, {
                text: '«Дитя Тиоко, я знаю твою боль. Но укрепи своё сердце. Боль твоя сейчас спасёт твоих людей от вечных мучений. Твоё изгнание было задумано мною, ибо роль твоя в нити событий сего мира не может быть исполнена в тепле моей Горы. Возмужай, юный Тиоко. Я с тобою. В груди твоей – Сердце Горы»'
                , style: {
                    fontStyle: "italic"
                }
            }, {
                text: "Кров разразился громогласным ужасающим хохотом, и языки его пламени застлали взор Ашки."
            }, {
                text: "Ашка проснулся в холоде и одиночестве. Он взглянул на свои руки. Его пальцы зудели. Странное тепло поднималось от них. Он щёлкнул пальцами, и зажёгся язычок пламени."
            }, {
                text: "Ашка улыбнулся, и скрытые за маской слезы проступили на его прекрасных золотых глазах. Он изрёк своё первое слово, зачарованный видом оранжевого света на его ладони."
            }, {
                text: '"Огонь"'
                , style: {
                    marginLeft: "46%"
                    , color: "red"
                }
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/ashka/cute_boi.jpg"
            }]
            , X = [{
                title: "Покидая дом - история Блоссом"
            }, {
                text: "Мой дом – край бесконечных чудес и безграничной красоты, волшебное место под названием Лес Серебряной Глуби."
            }, {
                text: "Я жила там всю свою жизнь. Будучи юной фавной, я целыми днями скакала там да сям и от души резвилась. Часто по ночам я прыгала под сенью ветвей Амриласа и наблюдала за порханьем луносветных бабочек под музыку и пение моих сестёр и лесных друзей."
            }, {
                text: "Амрилас был древним деревом, единственным в своём роде и, по словам Матери, жившим уже тысячи лет. Он был необычным деревом, и таковым его делала не только столь продолжительная жизнь."
            }, {
                text: "Вокруг Амриласа была аура, которую можно было ощутить самим своим естеством. Все знали, что если поспишь одну ночь подле Амриласа, с восходом великого Золотого Небоцвета любые твои недуги будут исцелены. Дары Амриласа не заканчивались на его целебной силе, но мы вернёмся к этому позже."
            }, {
                text: "Одним прекрасным вечером, когда свет Золотого Небоцвета уже угасал, меня испугал исполненный страданий крик, шедший из глубины леса. Крик был похож на птичий, но я не могла его разобрать, хоть и знала звуки всех птиц, обитавших в моём лесу. Я взяла свой верный посох и побежала так быстро, как позволяли мои копытца. Подобно Амриласу, исцеление было одним из моих даров, и я обязана была помочь тому бедному созданию по возможности."
            }, {
                text: "Я скользнула вниз по мокрым глинистым холмам и проскочила через бурлящие ручьи, осторожно ступая по бродовым камням. Я шла всё ближе на зов, судя по нарастанию его звука. Ловко перескочив через ствол упавшего дерева, я оказалась, наконец, около напуганного малыша."
            }, {
                text: 'Это и вправду была птица, но таких я доселе не видывала. Она попалась в ловушку Маргаритки-Костоломки. Хитрое плотоядное растение, Маргаритка-Костоломка обездвиживает своими парализующими шипами ничего не подозревающих зверушек и кормится ими, пока они медленно уходят под землю. Мать всегда говорила мне: «Насколько чудесной может быть жизнь в нашем Лесу, настолько же Лес может быть беспощадным».'
            }, {
                text: "Бедняга познал этот урок на себе, точнее сказать, на своём крыле. Ветвь Маргаритки стремительно вонзилась в его маленькое крыло и повредила его. Это был ещё птенец, скорее всего, заблудившийся и сделавший привал на эту ночь. Он уставился на меня широко открытыми глазами и поднял свои мохнатые землянично-красные брови. К счастью, я знала, что нужно делать."
            }, {
                text: "Я достала несколько желудей и листьев из своей сумки со снадобьями, данной мне милым Амриласом. Аккуратно я выпутала птичку из ветвей Маргаритки и положила на мягкую траву. Я растолкла жёлуди и листья в кашицу и мягко покрыла смесью его раненое крыло. Влага из листьев среагировала с желудями и затвердела, защищая рану от внешних инфекций."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/blossom/Blossom01.jpg"
            }, {
                text: "Я прижала странную зелёную птицу поближе к груди, чтобы нелёгкая дорога назад не прошла для раненой в сильной тряске. Она не противилась и не издала ни единого писка и, к тому же, скоро уснула."
            }, {
                text: "Домой, назад к Амриласу, я вернулась уже к ночи. Спящий птенец был у меня в руках, когда я улеглась под сенью широких ветвей дерева, а на следующее утро он уже беззаботно порхал вокруг. Его крыло было полностью исцелено. Когда он заметил, что я проснулась, он радостно защебетал, приземлился мне прямиком на макушку и уселся там будто в родном гнезде. Там он и остался."
            }, {
                text: "Так я и повстречала своего пожизненного приятеля, Максвелла. С тех пор мы неразлучны. Мои сёстры хихикали над моей престранной зелёной шляпкой, которую я никогда не снимала. А я и не возражала. То был, конечно же, мой Максвелл на своей любимой жёрдочке."
            }, {
                linebreak: !0
            }, {
                text: "Так как же существа вроде меня и несмышлёной зелёной птички пришли к сражениям на аренах вдали от дома?"
            }, {
                text: "Что ж... не так давно меня разбудили звуки неразберихи. Я вскочила, чтобы разузнать, в чём причина. И она оказалась весьма печальной. Моя сестра Роузбад и её отряд вернулись из дозора и выглядели растерянными. Под звон Колокола Призыва народ метался туда-сюда между жилищами. Созывался Совет!"
            }, {
                text: "Вожди и повелители лесных обитателей собрались под ветвями Амриласа. Моя мать, Королева, была во главе круга Повелителей. Подле неё была я и мои сёстры. Окайрнон Рогатый, Повелитель Сов, держал речь. Его басовитый голос звучал глубоко и чисто."
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/blossom/Blossom02.jpg"
            }, {
                text: '«Нам стало известно, что наш любимый лес Серебряной Глуби в смертельной опасности! От наших совиных глаз ничего не ускользнёт: неустанно мы наблюдаем, от заката до рассвета и вновь до заката, за нашей священной землёй. И дозорные нашего вечного бдения узрели невероятнейшее!»'
            }, {
                text: "Все лесные Повелители разом затаили дыхание. Владыка Окайрнон громко прокашлялся и продолжал."
            }, {
                text: '«Даже я признаю... мы так сглупили, не приняв предупреждения Таинственного Змеедрева всерьёз. Вселяющий Ужас вернулся! Древесная Хворь реальна, и уже проделала путь до Серебряной Глуби. Я лицезрел этот ужас своими глазами, он точно такой, каким его описывал Змеедрев. Чёрные корни, вьющиеся из-под земли, переплетённые, словно стая паразитов. У всякой живой сущности, будь то животное или растение, что прикоснётся к этим проклятым корням, будет высосана и навсегда иссякнет жизненная сила! Зараза растёт с каждым световым днём. Разрушение подступается к нам!»'
            }, {
                text: 'Великий Совух преклонил и потряс голову в страхе. Остальные владыки посрывались с мест пламенными криками отчаяния и печали. Агниус Повелитель Барсуков одним ударом своих могучих кулаков сотряс землю вокруг. «К Порядку! Соблюдайте Порядок!», - прокричал он.'
            }, {
                text: 'Валика, Змеиная Мать, прошипела в согласии: «Конешшшно нашшша Королева усссмирит этот хаоссс». Моя мать, Королева, с царским достоинством кивнула собравшимся и встала во весь рост. Все умолкли, пока она говорила. Её голос был освежающим, словно осень, и сильным, как дуб.'
            }, {
                text: '«Владыки, известия весьма пугающие, и всё выглядит очень мрачно. Если мы не найдём способ остановить этого Торна и излечить проклятие на наших землях, сам лес Серебряной Глуби исчезнет с лица земли, и вспоминать о нём будут только в сказках и былинах».'
            }, {
                text: "Лесные обитатели содрогнулись от сказанного."
            }, {
                text: '«Мы должны найти способ остановить заразу, иначе она поглотит не только наш дом, лес, но и все прекрасные жизни на этой Планете. Но мы не ведаем, как остановить эту плеть. Посему мы должны отправить одного из нас в мир за лесом. Там должен быть кто-то, кто помнит старинные песни дриад, кто знает, как излечить нашу землю и одолеть проклятого Торна! Кто из нас достаточно смел, чтобы оставить лес, пойти по городам людей в поисках лекарства от этой Хвори?»'
            }, {
                text: "Я окинула взглядом своих сестёр и великих Владык Леса. Они переговаривались меж собою, но никто не вызывался добровольцем. Могла ли я их винить? Никто из нас не покидал Серебряной Глуби раньше. Это был наш дом. Наше убежище. Что могло ожидать нас по ту сторону его границ?"
            }, {
                text: "Я была в ужасе от возможности, что всё, что я когда-либо знала и любила, может быть уничтожено тварью из наших доселе былин. Я не могла позволить забрать это у меня. Видеть, как Амрилас иссыхает и корчится, превращаясь в хворост? Не позволю!"
            }, {
                text: 'Я вскочила на валун поблизости и заявила: «Я пойду. Мы слышали сказания об Аренах, о том, как величайшие воины, колдуны и целители со всего мира собираются там. Если и есть способ побороть хворь, что вторгается в наш дом, то где, если не там, узнать его. Я буду с усердием упражняться и обрету всю мудрость тамошних Чемпионов. Обещаю вам, мои друзья, я вернусь со знанием о том, как победить этого Торна и отвадить чуму. Клянусь Луной и Землёю и Золотым Небоцветом!»'
            }, {
                image: "https://battlerite-ru.github.io/lore/images/stories/blossom/Blossom03.jpg"
            }, {
                text: 'Мать, Королева Серебряной Глуби, взглянула на меня, и слёзы засияли в её глазах. Она улыбнулась мне и кивнула с пониманием. «Моя милая Блоссом. Я знала, что добровольцем станешь ты. Ты особенная, моя малютка, и сердце твоё полно отваги. Иди же, и знай, что в тебе живёт любовь Серебряной Глуби».'
            }, {
                text: "И так я собрала вещи и отправилась вместе с Максвеллом в путешествие по спасению моего дома. И пусть испытания впереди будут тяжелы и беспощадны, я не дрогну. Я - Блоссом, дочь Королевы Серебряной Глуби, и ничто не встанет на моём пути, я спасу мой дом."
            }], croakLore = [
				{
					title: "Превращённый"
				}, {
					text: 'Хижина Ведьмы была совершенно непримечательной. Гниющая трава по колено, кишащая всеми видами насекомых-кровососов, росла вокруг мрачной лачуги. Отсыревшая соломенная крыша была неуклюже покрыта глиной. Дом источал легко различимую смесь запахов серы, горелой древесины и пачули, напоминая вонь мёртвой крысы. Кости животных, связанные верёвкой в пучки, свисали из покрытых паутиной окон и постукивали на ветру, как колокольчики.'
				}, {
					text: 'Как я и сказал – непримечательное жилище.'
				}, {
					text: 'Задача была самой обыкновенной, и для профессионала вроде меня должна была быть не сложнее ловли пиявок на болоте. Но среди Ранидов-Убийц ходит поговорка: «Очередное убийство лёгкое, если оно не последнее». Этот раз был далеко не моим последним... скажем лишь, что сложилось всё не очень гладко.'
				}, {
					text: 'Войти, убить Ведьму, украсть клинок, получить оплату. Простое дельце. И я люблю простоту. Только в этот раз вышло не всё так просто. Совсем не просто. На обычном задании я бы скрылся в тени и выжидал, пока ведьма не выйдет из лачуги, чтобы набрать хвороста, повозиться в саду (ведьмы любят садоводство, кстати), или отправятся околдовывать какую-нибудь несчастную деву, ну или что там ведьмы обычно творят. Но вот эта старая карга просто не выходила из дому.'
				}, {
					text: 'Я следил за этим местом два дня, и она всё это время сидела там, не проявляя никакого желания выйти из проклятой хижины. Так что, мне надо было изменить план... а я ненавижу менять планы. Так, обычно, и наступает провал. О, и провал наступил чудовищный.'
				}, {
					text: 'Я выжидал, пока не услышал храп старухи (звучавшей, будто медведь, больной астмой), и медленно, очень медленно, открыл входную дверь. Она слегка скрипнула, но ведьмин храп не прекратился. Хороший знак. Я проник внутрь и достал свой клинок. Стандартные будни Ранида, ничего особенного. Мой взгляд, брошенный наверх, встретился с двумя золотыми сверкающими глазами. Это была большая, облезлая, чёрная кошка. Клише, я знаю. И кошек ненавижу.'
				}, {
					text: 'Кошка наклонила ко мне голову с любопытством, а я в ответ показал ей язык, красноречиво демонстрируя ненависть ко всем этим мерзким комкам шерсти. Я тут же пожалел о своём жесте, потому что кошка сразу испустила самый дьявольский вой, что я когда-либо слышал. Какой-то сверхъестественный ведьмин будильник.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/croak/boi_got_nice_shadow.jpg'
				}, {
					text: 'Ведьма подпрыгнула, должен заметить, с удивительной ловкостью для старого мешка с костями. В руке её была палочка. Её уставшие жёлтые глаза опустились на клинок в моей руке и, видимо, догадались, что я намеревался сделать. Она зашипела на меня и едва слышно пробормотала какое-то заклинание.'
				}, {
					text: 'Разряд жёлтой молнии исторгся из её палочки и ударил туда, где я секунду назад стоял. Я с улыбкой посмотрел на это с потолка (простой трюк Ранидов для управления весом). «Слышь, старая, зачем усложнять? Хочешь умереть уставшей? Всё пройдёт быстро и тихо». – бросил я.'
				}, {
					text: 'Я рванул вниз, чтобы резко перерезать ей горло, но она уклонилась с нечеловеческой быстротой. «Хочешь в догонялки поиграть что ли?», - сказал я, и с помощью тайной техники Ранидов растворился в тени, исчезнув из её поля зрения. Ведьма заорала: «Проклятая чёрная магия Ранидов! Позорище для нормального чародейства!». Она побежала к двери. Она была быстра, но не быстрее старины Кревлоса. Я резко вышел из тени и утопил клинок по рукоять в её спине. Я провернул лезвие, и оно заскрежетало об её позвоночник.'
				}, {
					text: '«Тише-тише, несчастное создание, всё кончено. Спокойно же, уходи в темноту».'
				}, {
					text: 'Ведьма рухнула на пол и испустила один из тех типичных драматических стонов. Достаточно услышать такой один, чтобы запомнить навсегда. Теперь, когда ведьма не стояла на моём пути, нужно было отыскать заказанный кинжал. Я глазами обыскал комнату. Он лежал на скатерти над камином. Так себе припрятан.'
				}, {
					text: 'Он был скромно оформлен: эбонитовая рукоять, волнистое ржавое лезвие и бледный зелёный камень в эфесе. Ядовар Резакор будет доволен, а я получу свою монету. Я схватил клинок и перешагнул через труп ведьмы.'
				}, {
					text: 'Вдруг ведьма вскочила и схватила меня за руку. Её глаза сверкали злобным зелёным огнём. Жгучая боль пронеслась через мою руку и грудь. «Будь ты проклят! Проклятие Маггорота теперь на тебе!» - взвыла ведьма.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/croak/gross.jpg'
				}, {
					text: 'Я выхватил руку и вонзил меч в её сердце. Она мгновенно превратилась в пепел, накрыв меня грязно-серым облаком. Я прокашлялся, забрал эбонитовый кинжал и пустился оттуда наутёк. Моя рука была будто вся в огне, я видел, как чёрно-зелёные вены вздувались на месте, за которое ведьма схватила меня. Это... не означало ничего хорошего.'
				}, {
					text: 'Когда я прибыл к Резакору, гниль уже распространилась почти на всю мою правую руку, покрыв её гнилой чёрно-зелёной чешуёй. Она была твёрдой и воняла кипящей смертью.'
				}, {
					text: 'Ядовар медитировал, сидя на пне посреди небольшого болота. Когда я приблизился к нему, он позволил себе насмешку: «Плохи твои дела, да, Кревлос? Я за милю почуял тебя и твой Маггорот. Старуха Мрезда, должно быть, недурно сопротивлялась, мм? Ей всегда помогала её чрезмерная прыткость». Я едва сдержал желание раскромсать его на месте, но хоть мы, Раниды, и скользкие типы, клиентов мы не убиваем. Вредит бизнесу. И... можно сказать, он был моим старым другом. А у меня таких немного. Ну... если честно... Резакор был моим единственным другом.'
				}, {
					text: 'Я бросил Резу кинжал, он поймал его, не открывая глаз, и спрятал под одежду. Выпендривается. Рез мог бы быть красивым парнишкой. Так и было, если не считать мутаций от ядоварения и колдовства, что сделало его глаза болотно-жёлтыми, а кожу – цветом гнилой горошины. С головы его свисали длинные, сальные отростки цвета сажи, больше напоминавшие траву или ветви, нежели волосы.'
				}, {
					text: 'По своему обыкновению, он ухмыльнулся мне с видом всезнайки: «Давай взглянем, что там с тобой стряслось, не стесняйся». Я вздохнул и показал ему свою руку.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/croak/take_a_bath.jpg'
				}, {
					text: '«Насколько всё плохо, Рез?» - спросил я. Он нахмурился и цокнул зубами: «Ну, короче, этой рукой ты, похоже, больше пользоваться не будешь. Снимай накидку, посмотрим, насколько далеко зараза разрослась».'
				}, {
					text: '«Погоди, чего? И всё? Ничего нельзя сделать? Руку не спасти?» - вскричал я с плохо скрываемой паникой в голосе. Кому же нужен Ранид-убийца без руки для меча.'
				}, {
					text: 'Я снял накидку, и Рез осмотрел меня. Зараза распространилась за плечо и уже подбиралась к груди.'
				}, {
					text: '«Выше голову, болотный братец. Если не вылечишь проклятие как можно быстрее, оно дойдёт до других твоих конечностей затемно, и к рассвету ты будешь дыркой от бублика из шелухи». Я посмотрел на Реза с недоумением, и закричал, мой голос дрожал больше положенного: «И как же, пропади оно в Арк’Дуне, ты предлагаешь мне излечиться от проклятия? Я жизнь люблю и хотел бы жить дальше, пусть и с одной рукой на теле».'
				}, {
					text: 'Рез цокнул зубом снова, и, должен сказать, лишь огромных усилий воли стоило сдержаться и не выбить его ему. «Забавно, что ты упомянул Арк’Дун. Туда-то ты и направишься» - усмехнулся он. Рез достал какую-то мелкую лягушонку из потайного кармана своей грязной накидки, закинул себе в рот и энергично зажевал.'
				}, {
					text: '«Нет, не будет этого. Куда угодно, кроме Арк’Дуна. Мы оба знаем, что эта земля запретна для Ранидов. И, что более важно... у меня от неё мурашки. Есть у меня другой выбор?» - спросил я.'
				}, {
					text: 'Рез покачал головой и закинул себе в рот ещё одну зелёную лягушку. Он в совершенстве овладел искусством раздражать меня своим жеванием. «Нет у тебя выбора. Проклятие Маггорота - не простое заклинание или дешёвый приворот. Это глубокая, тёмная магия, Кревлос. Магия далеко за пределами возможностей ядовара. Чтобы противостоять проклятию, нужна магия глубже и гораздо темней. Тебе нужна сила Воид-Аугура из Арк’Дуна». Я скрестил руки в полном отрицании... ну, одну рабочую руку. «Нет, не пойдёт так. Я отказываюсь. И ты никак не сможешь заставить меня передумать».'
				}, {
					linebreak: 1
				}, {
					text: "К счастью, путь в Арк’Дун длился меньше нескольких лиг. Я чувствовал, как Маггорот сползает по груди вниз к бёдрам и до колен. Стемнеет через несколько часов. Нужно было прийти, сделать дело и валить. Как на обычном задании. Только в этот раз я был на запретной территории одного из самых ужасающих мест во всей Вердии. Уже в пятый раз, с тех пор, как я покинул Резакора, я прокручивал в голове его слова."
				}, {
					text: '«Ты должен проникнуть в гробницу Арк’Дуна. Внутри ты найдёшь стены, уставленные большими урнами. Эти урны содержат души живших ранее Арк’Дунцев. Тебе нужна особая урна. Все урны чёрные, посеребрённые изнутри, но нужная тебе обёрнута шёлком из амарантина. В этой урне находится душа Воид-Аугура, величайшего колдуна своей эпохи. Но будь осторожен, Кревлос,  гробницу охраняет Хранитель Склепа. И поверь, тут не справиться даже Раниду-убийце твоего уровня мастерства. Хватай урну и уноси оттуда ноги так незаметно и быстро, как это возможно».'
				}, {
					text: 'Иногда Резакор невероятно бесил, но я доверял ему, он знал своё дело. Нельзя было пропускать его слова мимо ушей.'
				}, {
					text: 'Земля Арк’Дуна была бесплодна, холодна и пустынна, земля руин и всего мёртвого. Хоть она и находилась в самом сердце болота, казалось, жизнь и вода высохли здесь. Деревья были давно увядшими и скрюченными. Земля была сухой, как песок, и чёрной как обсидиан. Ветер выл, будто где-то далеко истязали зверя.'
				}, {
					text: 'Легенда гласит, что Арк’Дун был великой Империей несколько веков назад, в древние времена до Глубокой Ночи. Живая земля, полная могущественного колдовства и магии пустоты. Неизвестная хворь поразила их и прокляла их земли, оставив после себя в руинах лишь напоминание о былом процветании страны.'
				}, {
					text: 'Время было на исходе, а мне нужно было украсть какую-то душу. Сама гробница больше походила на мавзолей - довлеющий, монолитный силуэт на фоне холодного серого неба. Я приблизился ко входу в ожидании, что какая-нибудь чертовщина сейчас вылезет с криками из темноты, но встретила меня лишь тишина. Вот что делало это место таким жутким. Здесь не было звуков ночи: ни уханья сов, ни трескотни сверчков. Только это адское завывание ветра.'
				}, {
					text: 'Холодная гранитная дверь в гробницу была приоткрыта. Я надавил на неё и был встречен дуновением затхлого, едва тёплого воздуха. Уверен, никто не дышал этим воздухом минимум полвека. Освещения не было, но я исполнил простенькое заклинание Ранидов, позволявшее видеть во тьме.'
				}, {
					text: 'Стены были уставлены саркофагами, выглядевшими, будто вертикально поставленные распахнутые гробы. Внутри каждого саркофага лежали пустые мантии, а выше стояли чёрные посеребрённые урны. Должно быть, об этом и говорил Резакор.'
				}, {
					text: 'Я тихонько крался в поисках амарантиновой урны. Тут она и была, в центре комнаты, поставленная на украшенном чёрным орнаментом пьедестале в форме непостижимого чудища со щупальцами. Рядом с ним был ещё один саркофаг, но он отличался от остальных. Пустой мантии внутри не было, а лежало какое-то странное существо. Оно казалось замороженным или не подававшим признаков жизни.'
				}, {
					text: 'Любопытство овладело мною, и я медленно подкрался, чтобы рассмотреть его поближе. Создание было завёрнуто в бинты, одето в накидку, на месте головы был череп животного. Над этой головой было выточено одно слово на чёрном сланце гроба, но оно было на Арк’Дунском, а я им не владел.'
				}, {
					text: 'Могу поклясться, я увидел, как фигура шелохнулась. Я не стал ждать, когда она поздоровается со мной, схватил урну и рванул оттуда со всех ног. На выходе я услышал громыхающий звук, и ужасающий голос взвыл позади меня: «Вор! Вор, верни моё!»'
				}, {
					text: 'Когда я, наконец, перестал бежать, я понятия не имел, где находился. Сердце у меня в груди колотилось, будто ужаленный хорёк. Лёгкие горели, будто я надышался кислотой. Я был далеко от Арк’Дуна, как минимум в нескольких милях, но со мной всё ещё было забавное ощущение, что меня преследуют. Наконец, я взглянул на свой трофей. Маленькая урна, обёрнутая в амарантиновые шелка. Я осознал, что чёртов дурак Резакор не сказал мне, что с ней делать после кражи.'
				}, {
					text: 'Я разорвал шелка и увидел золотой сосуд. Он был относительно чист, если не считать маленького пятна грязи сбоку. Я протёр урну о свою одежду, и урна начала светиться пурпурной энергией и жечь руки так сильно, что пришлось её бросить. Чёрно-пурпурная дымка вырвалась из маленькой дырочки в крышке, и меня поприветствовали большие фиолетовые глаза привидения.'
				}, {
					text: 'Призрачное облако сказало: «Настал ли тёмный рассвет? Возник ли Арк’Дун в конце времён?»'
				}, {
					text: 'Фиолетовые глаза в течение мгновения осмотрели меня, и до духа дошло.'
				}, {
					text: '«Что во имя Агруула тут происходит?! Что за.. Как ты призвал меня, человек? Ты украл мою урну, да? Какая же нужда привела болотную крысу к Воид-Аугуру из Арк’Дуна?». Слова застряли комом в моём горле на мгновение, но затем я выпалил. Я ощущал себя совершенно не в своей тарелке. Но я не мог дать ему почуять страх в моём голосе. «Я захватил тебя, Воид-Аугур. Я, Кревлос из Ранидов, убийца людей и других тварей, нуждаюсь... эм, требую твоей помощи. Я, видишь ли...»'
				}, {
					text: 'Я приподнял свою накидку и показал Маггорота, уже распространившегося по всей моей груди и животу до бёдер.'
				}, {
					text: 'Привидение оглушительно засмеялось над моей ситуацией. «Что ж, похоже, я у тебя в подчинении, Кревлос из Ранидов, так как моя душа в твоих руках. Но, думаю, ты не понимаешь, что натворил. Он никогда не перестанет преследовать тебя. Рух Каан последует за тобой на край Вердии, пока ты не вернёшь мою урну в гробницу. Он не остановится, не ослабнет, пока не вытянет душу их твоего тела и поглотит каждый кусочек твоей сущности».'
				}, {
					text: 'Я проигнорировал быстро подступавший ком к горлу: «Маггорот. Ты можешь его вылечить или нет, фантом?»'
				}, {
					text: 'Огромные глаза Воид-Аугура изучили моё тело. «Тебе осталось недолго, человек. Тело, в котором ты сейчас, проклято, этого не изменить и не отменить. Но... Я могу дать тебе новое тело, чистое, лишённое проклятий. Этого ты хочешь? Это нельзя будет обернуть вспять. Выбирай быстро». Я кивнул в полной неуверенности, какая странная судьба была мне уготована.'
				}, {
					text: 'Привидение Воид-Аугура затрепетало и произнесло: «Очень хорошо». Внезапно призрак превратился в чёрно-пурпурный газ, окружил меня и проник ко мне в лёгкие через рот. Я кашлял и отчаянно хватал воздух, чувствуя, будто тону во тьме. Я упал на колени. Глаза застлала пелена.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/croak/tfw_smoke_out_ears.jpg'
				}, {
					text: 'Прежде, чем потерять сознание, я издал звук, который никогда не забуду. Он забурлил в животе и вырвался через рот, сотрясая воздух в ночи...'
				}, {
					text: '«КРОААК!!!»',
					style: {
						textAlign: 'center',
						fontStyle: 'italic'
					}
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/croak/CROAAAAAAAKING_IN_MY_SKIIIIIIIIIIIIIN.jpg'
				}
			], pestilusLore = [
				{
					title: "Возвышение Отагура"
				}, {
					text: 'Его Превосходительству Пестилусу, Посланнику Расала, Разносчику Желчи и Крови.'
				}, {
					text: 'Как Вы и предвосхищали, Лорд Пестилус, всё пошло по Вашему плану, хвала Расалу.'
				}, {
					text: 'Сразу после Вашего отъезда в аспидово королевство Куны, эту жалкую обитель правителей-самозванцев, мы совершили восхитительное открытие.  Одной благословенной ночью, когда кровь в опухолях и гематомах бесновалась особенно сильно, любопытнейшее существо выбросило из океана на чёрный берег Отагура.'
				}, {
					text: 'Бездыханное тело было облеплено кровососущими ракушками-паразитами и водорослями – скорченная тень того, кем он был. Бог, чьему могуществу, хитрости и беспощадности Мы из Отагура когда-то поклонялись… обнаружен на берегу почти утопленником, выплюнутый наружу морем, когда-то давно ему подвластным.'
				}, {
					text: 'И Тирмок Бледный, а ныне, Тирмок Утонувший, Бог Моря и Бездны – раб Отагура.'
				}, {
					text: 'Как Вы и предвидели, Лорд Пестилус. Но это ещё не все вести.'
				}, {
					text: 'Кровавому Жрецу Фаминиусу пришла в голову самая блестящая из идей. Что если бы мы обнаружили способ вытянуть остатки силы из павшего бога? Он мог бы стать живым источником энергии. И, как Ваше Превосходительство знает, тайны всего в мире сокрыты в крови ожидают нас.'
				}, {
					text: 'Фаминиус подключил Тирмока к одной из своих славных Кровавых Машин, и подтвердил свои предположения. Кровь Утонувшего Бога оказалась самой силой. И мы перелили эту кровь нашим величайшим воинам.'
				}, {
					text: 'Ангорат Разбойник первым вкусил крови Тирмока. И до того будучи весьма могучим воином, Ангорат с божественной кровью обратился в гиганта средь людей, дикого, тёмного демона битвы. Он жаждет Ваших приказов.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/pestilus/how_to_make_a_boi.jpg'
				}, {
					text: 'Но вскоре Отагур совершил величайшее достижение, коим Ваше Превосходительство возгордится куда более. Фаминиус предположил, что если божественная кровь может усиливать обычных людей, то можно попытаться усиливать ею и самих богов.'
				}, {
					text: 'И мы забрались в глубокую тёмную нору Расала, Бога Насекомых и Пресмыкающихся, и опоили его кровью Тирмока.'
				}, {
					text: 'О, Ваше Превосходительство Лорд Пестилус! Он стал чем-то сверхчудовищным! Такого Вы ни предсказать, ни представить не могли! Расал более не просто какой-то владыка насекомых, он - властелин самой Бездны. Пока загнивает Куна, благодаря Вашей твёрдой хватке, Отагур на пути к пику своего тёмного могущества.'
				}, {
					text: 'С падением Куны воспрянет Отагур.'
				}, {
					text: 'Теперь это лишь вопрос времени.'
				}, {
					text: 'В Крови и Желчи,'
				}, {
					text: 'Кровавый Жрец Хаккан.'
				}
			], bakkoLore = [
				{
					title: "История солдата"
				}, {
					text: '«Дедушка Бакко! Дедушка Бакко! Ты правда хочешь уйти из города?» - выпытывали мои внучата, пока я подкидывал свеженаколотые дрова в камин.'
				}, {
					text: '«А, так вы уже слышали об этом? Да, я собираюсь принять участие в турнире, куда славные воины со всего мира съезжаются за почётом и славой победителей!», - сказал я, усевшись спиной к огню. Нахлынувшие воспоминания вызвали улыбку на моём лице. «Посреди битвы моё сердце пылало, как этот огонь», - сказал я внукам.'
				}, {
					text: '«Ух ты, деда, ты правда был воином?» - спросила Джиллдри, и Исан тут же завизжал, - «Да, дедуль, расскажи нам историю!».'
				}, {
					text: '«Ну, раз мои внучата хотят историю, вот им история», - сказал я, почёсывая подбородок и улыбаясь. «Я рассказывал вам о Каменном Перевале?», - малыши глядели на меня широко раскрытыми глазами и покачали головами.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/bakko/bakko_and_fam.jpg'
				}, {
					text: '«Давным-давно, когда ваша мама была ещё ребёнком, примерно вдвое старше тебя, Джиллдри, я и правда был воином, но не просто одним из солдат. Я был их командиром, и гордился каждым из тех бравых ребят…».'
				}, {
					linebreak: 1
				}, {
					text: "Наша база находилась на подступах к Горам На'Гол, прямо на юго-восточной границе Ледяного Севера. Нашей задачей было охранять Каменный Перевал от Ледяных Гигантов севера. Ледяная Королева жаждала новых земель и хотела распространить свою ледяную власть на Империю Га'Таманг. Наша задача была как раз в том, чтобы предотвратить это."
				}, {
					text: 'День великой битвы поначалу был обычным днём, разве что только ветер был слегка прохладнее. Мы с солдатами только что проснулись и завтракали перед ежедневной боевой подготовкой. И прямо посреди наших посиделок за завтраком - из яичницы с колбасой под тёплые истории о наших семьях, любимых и близких - низкий звук отдалённого грохота пронёсся по нашей базе.'
				}, {
					text: 'Грохот всё усиливался, и я решил разведать обстановку. Всё ещё с куском колбасы во рту, я забрался на смотровую вышку и осмотрел границу. Сотни гигантов мчались на нас с гор. Я взял подзорную трубу, чтобы рассмотреть их получше, пока дожёвывал колбасу. Я понял, что понадобятся все доступные силы, так как увидел саму Ледяную Королеву, парящую над своей армией верхом на снежной метели.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/bakko/nice.jpg'
				}, {
					text: 'Я побежал обратно со всех ног и закричал своим людям: «Завтрак окончен, назревает бой. Ледяные Гиганты идут!». Все в спешке проглотили остатки еды и рванули к складам с оружием. Мои топор и щит были уже наготове.'
				}, {
					text: "В одно мгновение Ледяные Гиганты атаковали нас со своим воющим боевым кличем. Но мы были Авангардом, защитниками Га'Таманга, и не позволяли диким чудищам нас пугать. Мы ответили своим могучим боевым кличем, врываясь во врага."
				}, {
					text: 'Гиганты были громадными, полными ярости, глаза их сверкали огнём цвета голубого льда. В высоту и вширь они были как два взрослых мужа. Покрыты они были плотной белой шерстью для защиты от холода гор, а их кожа была твёрдой, как кольчуга. Они были действительно серьёзным противником. Мы с товарищами хоть и не были столь же сильны поодиночке, но восполняли этот недостаток храбростью и дисциплиной, стратегией и числом.'
				}, {
					text: 'Мы выстроили барьеры, чтобы враг просачивался лишь небольшими группами внутрь, не больше пары гигантов за раз. На вышках были наши лучники с огненными стрелами. Первые несколько гигантов быстро пали от них, утыканные стрелами, будто подушечки для игл.'
				}, {
					text: 'Гиганты в этот раз оказались смекалистей обычного, и концентрировали усилия на заграждениях и лучниках. Они швыряли валуны размером с корову со скоростью пушечного ядра! Гиганты считались медлительной, неповоротливой расой, и сейчас они действовали стратегически, а не просто крушили всё подряд. Очень странно…'
				}, {
					text: '«Покинуть стены», - крикнул я, понимая, что деревянные постройки долго не выдержат такую осаду. Минуты не прошло с того момента, когда я отдал этот приказ, как заграждения были снесены до основания.'
				}, {
					text: 'И тут началась настоящая битва. Гиганты атаковали все и сразу. Требовалось, по меньшей мере, трое воинов, чтобы прикончить одного из них - нелёгкая задача, одним словом. Один гигант взмахнул своей огромной палицей над моей головой, я отразил удар щитом и повалил его одним движением топора.'
				}, {
					text: 'Прямо возле меня приземлился гигант среди гигантов, его прыжок сотряс землю вокруг. То не был обычный Ледяной Гигант. Он был в два или три раза крупнее всех остальных, в руках зверюга держал по двустороннему топору, мерцающему магическим инеем. Я слышал об этом гиганте-берсерке. Его звали Гормунг Крушитель.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/bakko/bakko_and_goliath.jpg'
				}, {
					text: 'Мой выпад остановила стена из замороженного воздуха, внезапно возникшая передо мной. Мой топор был бесполезен против этого ледяного барьера. Я обернулся и увидел саму Ледяную Королеву, парящую верхом на снежном вихре и совершающую рукой магический жест. Я отскочил от едва не попавшего по мне топора Гормунга. Один точный удал, и я разлетелся бы на окровавленные куски.'
				}, {
					text: 'Я понимал, что нужно оттянуть Гормунга от Ледяной Королевы, чтобы иметь шансы на победу. Следуя интуиции, я развернулся и побежал от гигантского берсерка с криками. Боковым зрением я заметил, что Гормунг на секунду был в замешательстве, но затем рванул на меня, как я и хотел. Чудище просто не могло не побежать за испуганной жертвой.'
				}, {
					text: 'Гормунг метнул в меня один из своих топоров со скоростью молнии. Я прижался к земле, топор приземлился недалеко от меня, оставив земле зияющую трещину. И тут в голове у меня зародилась идея. Приблизившись, Гормунг замахнулся своим вторым топором мне в голову. Я пригнулся, сделал кувырок и с разворота всадил ему в колено топор с такой силой, на которую вообще был способен.'
				}, {
					text: 'Гормунг адски взвыл, раненная и ослабленная нога не выдержала его колоссального веса. Крик его агонии вскоре был прерван – он упал мордой прямо на свой топор, торчащий из земли и расколовший ему череп надвое.'
				}, {
					text: 'Я взял себе секунду передышки и осмотрел поле битвы, опершись на щит. Мои люди дрались храбро, но волна Ледяных Гигантов теснила их назад. Ворвавшись в первые ряды, я был встречен тремя гигантами сразу. Я сделал рывок вперёд, блокируя удар одного из гигантов, и взмахом топора вверх нанёс ему смертельную рану. Затем я прыгнул к двум другим. Увернувшись от сокрушительного размашистого удара одного из них, я проколол его рогами, приделанными к кромке моего щита, и тут же метнул топор в горло второго.'
				}, {
					text: 'Как только я выкорчевал свой топор из шеи гиганта, я оказался лицом к лицу с Ледяной Королевой. Она не выглядела довольной, скажу я вам!'
				}, {
					text: 'Кожа её была бледной, полупрозрачно-голубой. Выглядела она, как человек, но конечности её были длинные и тонкие. Она была облачена в тёмное одеяние с воротником из чёрного меха. Её большие, нечеловеческие глаза сверкали, как ледяные звёзды, странно похожие на глаза гигантов. Неземные формы её тела и лица были нежны и прекрасны.'
				}, {
					text: 'Она что-то говорила шёпотом на языке, которого я никогда раньше не слышал. Из её губ струились светящиеся руны - какой-то вид заговора или заклинания. Руны превратились в острые лезвия изо льда и полетели в меня. Я закрылся щитом, но он полностью промёрз.'
				}, {
					text: 'Вдруг Ледяная Королева подняла руки высоко над головой и начала произносить какое-то древнее заклинание. Я сжал свой топор и осмотрелся в ожидании нового снежного колдовства. Воздух начал замерзать. Гигантская стена льда возникла из ниоткуда вокруг меня.'
				}, {
					text: 'Стена встала подобно лабиринту, скрывая за собой королеву. Я посмотрел вверх в попытке найти её там, щит и топор я держал наготове. Внезапно ледяные снаряды выстрелили из стены. Я пригнулся и отразил, было, их щитом, но некоторые ледяные шипы порезали мне ноги и руки. Конечно, это были всего лишь царапины, но теперь я был внимательнее. Любая ошибка против Королевы могла стать последней.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/bakko/bakko4.jpg'
				}, {
					text: 'Я напирал, уклоняясь от внезапных ловушек из сосулек и отражая шальные снаряды острых ледышек. Повернув за очередной угол, я оказался в тупике. Нужно было выбираться из этого лабиринта, но как? Она хотела измотать меня, сломить дух.'
				}, {
					text: 'Но я не позволил этому произойти. Может, мой топор и не был самым острым, но Предки даровали мне необычайную мощь и силу. Я разогнался в направлении стены изо всех своих сил. Я испустил такой пугающий боевой клич, что, уверен, он содрогнул своим эхом весь Каменный Перевал, смешавшись с грохотом разлетевшейся на куски стены.'
				}, {
					text: 'Вырвавшись, наконец, из стен ледяного лабиринта, я осмотрел поле боя. Гиганты медленно, но верно продавливали моих ребят. Нужно было действовать быстро.'
				}, {
					text: 'Мне в голову пришла одна идея. Её исполнение зависело от удачи, но нужно было срочно действовать. Я начал подкрадываться к королеве. Я понимал, что она в курсе моего местоположения, но притворялась, что не знает. Она заманивала меня. Вот и отлично, всё по плану. Одним прыжком я взмыл в воздух за ней. Она быстро обернулась ко мне с ухмылкой, означавшей проблемы для меня. Но она не совсем представляла, с кем имеет дело, ведь у меня для неё тоже были проблемы наготове.'
				}, {
					text: 'В последний момент моего приближения она направила на меня руки и выпустила огромное ледяное копьё. Я направил щит в её сторону. И то был не обычный щит из кусков дерева, а щит Авангарда, благословлённый боевой магией наших древних Предков. Как только копьё коснулось его, щит засиял и с яркой вспышкой отразил снаряд назад к королеве.'
				}, {
					text: 'Выражение её лица было бесценно. Она беспомощно попыталась закрыться голыми руками, но копьё изо льда пронзило её, превратив её тело в ледышку. У неё даже не было времени крикнуть. С ударом моего топора она разлетелась на тысячи кусочков льда.'
				}, {
					image: 'https://battlerite-ru.github.io/lore/images/stories/bakko/u_did_it.jpg'
				}, {
					text: 'Со смертью Королевы произошло неожиданное. Все оставшиеся гиганты перестали биться. Голубой огонь в их глазах угас, и зрачки приобрели мирный карий цвет, а лица их изобразили полнейшее замешательство. Гиганты простояли ошарашенными пару мгновений, побросали своё оружие и ушли туда, откуда пришли, желая лишь возвратиться домой.'
				}, {
					text: 'Похоже, Королева управляла ими против их воли всё это время. Хотел бы я разобраться с ней раньше, чтобы никто из моих людей и гигантов не сложил тогда свою жизнь. Ледяная Королева была мертва, и не было нужды в кровопролитии. Мы собрали наших павших товарищей и провели похоронную церемонию с последующим традиционным пиром после битвы.'
				}, {
					linebreak: 1
				}, {
					text: '«Вот и вся история про Битву на Каменном Перевале, внучата», - сказал я им, доедая ножку индейки. Ребятишки сидели в обнимку, у них горели глаза, и сияла улыбка до ушей от восхищения. «Это был лучший рассказ, Дедааа!», - закричали они хором.'
				}, {
					text: '«О, это был больше чем рассказ, это была часть моей жизни и след в истории. Я скучаю по этому чувству свершений, взрыву адреналина, соперничества с достойными противником. Я скучаю по испытанию собственных сил, и потому должен биться на Аренах. Битва – это часть меня. То, что выковало меня таким, какой я есть сейчас. Понимаете теперь, почему я должен уехать?», - сказал я, улыбаясь. Они оба кивнули. «Понимаем, Дедушка Бакко, отправляйся туда и надери им задницы и возвращайся с призом!», - заявила малютка Джиллдри.'
				}, {
					text: 'Я заключил их в долгие и крепкие объятия. Нужно было отправляться на Арены, где битвы и слава уже вовсю меня заждались.'
				}, {
					text: 'Давненько я не бился, кулаки так и чешутся.'
				}
			]
            , Q = a(176)
            , J = [{
                content: q
                , champion: "ruh_kaan"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/ruhkaan/ruhPreview.jpg"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/ruhkaan/BookOfLoreRuhKaan.jpg"
                , date: "2018-10-24"
                , status: "released"
                , _id: 1
            }, {
                content: V
                , champion: "raigon"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/raigon/raigon-preview.jpg"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/raigon/raigon_ft_boi.png"
                , date: "2018-10-31"
                , status: "released"
                , _id: 2
            }, {
                content: U
                , champion: "ezmo"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/ezmo/ezmo_preview.png"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/ezmo/boi_goin_out_tonight.jpg"
                , date: "2018-11-7"
                , status: "released"
                , _id: 3
            }, {
                content: Y
                , champion: "freya"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/freya/speak_to_me_harry.png"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/freya/pretty_windy.jpg"
                , date: "2018-11-14"
                , status: "released"
                , _id: 4
            }, {
                content: K
                , champion: "ashka"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/ashka/preview.png"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/ashka/imagine_waking_up_to_this_boi.jpg"
                , date: "2018-11-21"
                , status: "released"
                , _id: 5
            }, {
                content: X
                , champion: "blossom"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/blossom/preview.png"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/blossom/Blossom02.jpg"
                , date: "2018-11-28"
                , status: "released"
                , _id: 6
            }, {
                content: []
                , champion: "new_phone_who_dis"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/unknown/decode-me.png"
                , status: "hidden"
                , _id: 999
            }, {
                content: croakLore
                , champion: "croak"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/croak/preview.png"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/croak/take_a_bath.jpg"
                , date: "2018-12-5"
                , status: "released"
                , _id: 7
            }, {
                content: bakkoLore
                , champion: "bakko"
                , pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/bakko/preview.png"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/bakko/bakko4.jpg"
                , date: "2018-12-12"
                , status: "released"
                , _id: 8
            }, {
                content: pestilusLore
                , champion: "pestilus"
				, pinPreviewImage: "https://battlerite-ru.github.io/lore/images/stories/pestilus/preview.png"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/pestilus/how_to_make_a_boi.jpg"
                , date: "2018-12-19"
                , status: "featured"
                , _id: 9
            }, {
                content: []
                , champion: "jumong"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/jumong/strong_independant_boi.jpg"
                , date: "2018-12-26"
                , status: "preview"
                , _id: 10
            }, {
                content: []
                , champion: "???"
                , cardImage: "https://battlerite-ru.github.io/lore/images/stories/unknown/THESE_WOUNNNNDS_THEYY_WILLL_NOT_HEAAAALLLLLLLLLL.jpg"
                , date: "2019-01-02"
                , status: "preview"
                , _id: 11
            }]
            , Z = Object(Q.convertStories)(J)
            , $ = a(51)
            , ee = a.n($);

        function te(e, t, a) {
            return function (e, t, a) {
                return e >= t && e <= a
            }(e, t - a, t + a)
        }
        a(393);
        var ae = function (e) {
                function t() {
                    var e;
                    return Object(r.a)(this, t), (e = Object(h.a)(this, Object(d.a)(t)
                            .call(this)))
                        .updateData = function (t) {
                            return function (a) {
                                e.setState(Object(m.a)({}, t, a))
                            }
                        }, e.loadStory = function (t) {
                            return function () {
                                t && e.setState({
                                    isModalOpen: !0
                                    , storyId: t
                                })
                            }
                        }, e.handleResize = function () {
                            e.setState({
                                mapHeight: window.innerHeight
                                , mapWidth: window.innerWidth - e.props.sideBarWidth
                            })
                        }, e.generateRandomPinLocation = function (t) {
                            var a = Math.round(4401 * Math.random()) + 150
                                , o = Math.round(3372 * Math.random()) + 150;
                            if (a < 1631 && o > 2750 || a > 4201 || o > 3172) return e.generateRandomPinLocation(t);
                            for (var n = 0; n < G.length; n++) {
                                var i = G[n];
                                if (te(a, i.x, 200) && te(o, i.y, 200)) return e.generateRandomPinLocation(t)
                            }
                            return {
                                x: a
                                , y: o
                                , champion: t
                            }
                        }, e.closeModal = function () {
                            e.props.isMuted || x("close"), e.props.displaySettings && e.props.toggleSettings(), e.updateData("isModalOpen")(!1)
                        }, e.state = {
                            pins: []
                            , mapHeight: void 0
                            , mapWidth: void 0
                            , storyId: 0
                            , isModalOpen: !1
                        }, e
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "componentDidMount"
                    , value: function () {
                        this.handleResize(), this.setState({
                            pins: G
                        }), window.addEventListener("resize", this.handleResize)
                    }
                }, {
                    key: "componentWillUnmount"
                    , value: function () {
                        window.removeEventListener("resize", this.handleResize)
                    }
                }, {
                    key: "render"
                    , value: function () {
                        var e = this
                            , t = null;
                        return -1 !== this.state.storyId && (t = Z.find(function (t) {
                            return t._id === e.state.storyId
                        })), n.a.createElement("div", null, n.a.createElement(w.a, {
                            transitionName: "updateFade"
                            , transitionEnterTimeout: 300
                            , transitionLeave: !1
                            , transitionAppear: !0
                            , transitionAppearTimeout: 300
                        }, n.a.createElement(W, {
                            pins: this.state.pins
                            , stories: Z
                            , updatePins: this.updateData("pins")
                            , loadStory: this.loadStory
                            , key: 1
                            , sounds: this.audioElements
                            , isMuted: this.props.isMuted
                            , sideBarWidth: this.props.sideBarWidth
                        })), n.a.createElement(ee.a, {
                            closeTimeoutMS: 150
                            , isOpen: this.state.isModalOpen
                            , onRequestClose: this.closeModal
                            , style: {
                                content: {
                                    top: "-3px"
                                    , left: this.state.mapWidth / 2 + this.props.sideBarWidth
                                    , right: "auto"
                                    , bottom: "auto"
                                    , marginRight: "-50%"
                                    , transform: "translate(-50%, 0%)"
                                    , width: "70%"
                                    , height: "100%"
                                    , padding: "0px"
                                    , color: "rgb(231, 230, 230)"
                                    , filter: "progid:DXImageTransform.Microsoft.gradient(startColorstr='#969392', endColorstr='#8a8685', GradientType=1)"
                                    , border: "#d3fdfd double 3px"
                                    , overflow: "none"
                                }
                                , overlay: {
                                    backgroundColor: "#001319cb"
                                }
                            }
                            , ariaHideApp: !1
                        }, n.a.createElement(R, {
                            story: t
                            , closeModal: this.closeModal
                            , settings: this.props.settings
                            , toggleSettings: this.props.toggleSettings
                            , displaySettings: this.props.displaySettings
                            , updateSettings: this.props.updateSettings
                            , resetSettings: this.props.resetSettings
                        })))
                    }
                }]), t
            }(o.Component)
            , oe = a(110)
            , ne = a.n(oe)
            , ie = (a(395), function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(h.a)(this, Object(d.a)(t)
                        .apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        var e = this
                            , t = "storyCard--" + this.props.index;
                        return n.a.createElement("div", {
                            id: t
                            , onClick: function () {
                                e.props.isReleased && (e.props.isMuted || x("open"), e.props.loadStory(e.props._id)())
                            }
                            , className: this.props.isReleased ? "storyCard storyCardContainer" : "storyCard storyCardContainer grey"
                            , style: this.props.style
                        }, n.a.createElement("div", null, n.a.createElement("div", {
                            className: "readNowMiddleHover"
                        }, this.props.isReleased ? "Читать" : "Скоро..."), n.a.createElement("img", {
                            className: "storyCard--image"
                            , alt: this.props.title
                            , src: this.props.cardImage
                            , draggable: !1
                        })), n.a.createElement("div", {
                            className: "storyCard--text"
                        }, n.a.createElement("div", {
                                className: "storyCard--type"
                            }, this.props.champion.toUpperCase()
                            .replace("_", " ")), n.a.createElement("div", {
                            className: "storyCard--title"
                        }, this.props.title)))
                    }
                }]), t
            }(o.Component))
            , se = (a(397), function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(n))))
                        .state = {
                            storyId: -1
                            , isModalOpen: !1
                            , chaptersWidth: void 0
                        }, a.updateData = function (e) {
                            return function (t) {
                                a.setState(Object(m.a)({}, e, t))
                            }
                        }, a.handleResize = function (e) {
                            a.props.isMobile && !e || a.setState({
                                chaptersWidth: window.innerWidth - a.props.sideBarWidth
                                , chaptersHeight: window.innerHeight - a.props.sideBarHeight
                            })
                        }, a.loadStory = function (e) {
                            return function () {
                                L("event", "open_story"), e && a.setState({
                                    isModalOpen: !0
                                    , storyId: e
                                })
                            }
                        }, a.closeModal = function () {
                            a.props.isMuted || x("close"), a.props.displaySettings && a.props.toggleSettings(), a.updateData("isModalOpen")(!1)
                        }, a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "componentDidMount"
                    , value: function () {
                        this.handleResize(!0), window.addEventListener("resize", this.handleResize)
                    }
                }, {
                    key: "componentWillUnmount"
                    , value: function () {
                        window.removeEventListener("resize", this.handleResize)
                    }
                }, {
                    key: "renderCards"
                    , value: function () {
                        var e = this;
                        return Object(y.a)(Z)
                            .sort(function (e, t) {
                                return new Date(e.date) > new Date(t.date) ? 1 : -1
                            })
                            .filter(function (e) {
                                return "hidden" !== e.status
                            })
                            .map(function (t, a) {
                                var o = "released" === t.status || "featured" === t.status
                                    , i = {};
                                return a === Z.length - 1 && (i.marginBottom = "0px"), n.a.createElement(ie, {
                                    index: a
                                    , key: a
                                    , _id: t._id
                                    , title: o ? t.content.find(function (e) {
                                            return e.title
                                        })
                                        .title : "Скоро..."
                                    , cardImage: t.cardImage
                                    , loadStory: e.loadStory
                                    , isMuted: e.props.isMuted
                                    , champion: t.champion
                                    , style: i
                                    , isReleased: o
                                    , status: t.status
                                    , date: t.date
                                })
                            })
                    }
                }, {
                    key: "render"
                    , value: function () {
                        var e = this
                            , t = null
                            , a = this.renderCards(); - 1 !== this.state.storyId && (t = Z.find(function (t) {
                            return t._id === e.state.storyId
                        }));
                        var o = a.filter(function (e) {
                                return "featured" === e.props.status
                            })
                            , i = a.filter(function (e) {
                                return "preview" === e.props.status
                            })
                            .sort(function (e) {
                                return e.props.date
                            })
                            , s = a.filter(function (e) {
                                return "released" === e.props.status
                            })
                            .map(function (e, t) {
                                return n.a.createElement(ne.a, {
                                    item: !0
                                    , xs: 12
                                    , md: 6
                                    , lg: 3
                                    , key: t
                                }, e)
                            });
                        return n.a.createElement(w.a, {
                            transitionName: "updateFade"
                            , transitionEnterTimeout: 300
                            , transitionLeave: !1
                            , transitionAppear: !0
                            , transitionAppearTimeout: 300
                        }, n.a.createElement("div", {
                            id: "stories"
                            , style: {
                                width: this.props.isMobile ? "100vw" : this.state.chaptersWidth
                                , height: this.props.isMobile ? "95vh" : "100vh"
                            }
                        }, n.a.createElement("div", {
                            id: "stories--content"
                        }, n.a.createElement("div", {
                            id: "stories--landing"
                        }, n.a.createElement("div", {
                            id: "stories--landing--big"
                        }, o[0]), n.a.createElement("div", {
                            id: "stories--landing--small"
                        }, i)), n.a.createElement("div", {
                            id: "stories--cards"
                        }, n.a.createElement(ne.a, {
                            container: !0
                            , spacing: 24
                        }, s))), n.a.createElement(ee.a, {
                            isOpen: this.state.isModalOpen
                            , onRequestClose: this.closeModal
                            , style: {
                                content: {
                                    top: this.props.isMobile ? this.props.sideBarHeight : "-3px"
                                    , left: this.props.isMobile ? "50%" : this.state.chaptersWidth / 2 + this.props.sideBarWidth
                                    , right: "auto"
                                    , bottom: "auto"
                                    , marginRight: "-50%"
                                    , transform: "translate(-50%, 0%)"
                                    , width: this.props.isMobile ? "80%" : "70%"
                                    , height: this.props.isMobile ? this.state.chaptersHeight - 8 : "100vh"
                                    , padding: "0px"
                                    , color: "rgb(231, 230, 230)"
                                    , filter: "progid:DXImageTransform.Microsoft.gradient( startColorstr='#969392', endColorstr='#8a8685', GradientType=1) "
                                    , border: "#d3fdfd double 3px"
                                    , overflow: "none"
                                }
                                , overlay: {
                                    backgroundColor: "#001319cb"
                                }
                            }
                            , ariaHideApp: !1
                        }, n.a.createElement(R, {
                            story: t
                            , closeModal: this.closeModal
                            , settings: this.props.settings
                            , toggleSettings: this.props.toggleSettings
                            , updateSettings: this.props.updateSettings
                            , displaySettings: this.props.displaySettings
                            , resetSettings: this.props.resetSettings
                        }))))
                    }
                }]), t
            }(o.Component))
            , re = a(181)
            , le = (a(511), a(513), a(515), function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, i = new Array(o), s = 0; s < o; s++) i[s] = arguments[s];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(i))))
                        .state = {}, a.itemFunc = function (e, t) {
                            var o = a.props.isMobile ? a.props.height - 15 : a.props.width - 20;
                            return e.paths.includes(window.location.pathname) && (a.props.isMobile && e.onMobile || !a.props.isMobile) ? n.a.createElement("div", {
                                className: "sidebar-item"
                                , key: t
                                , style: {
                                    width: o
                                }
                            }, n.a.createElement(re.a, {
                                placement: a.props.isMobile ? "bottom" : "right"
                                , trigger: ["hover"]
                                , overlay: n.a.createElement("span", null, e.tooltip)
                            }, n.a.createElement("img", {
                                src: e.image
                                , alt: e.alt
                                , draggable: "false"
                                , onClick: e.action
                                , style: {
                                    width: o
                                }
                            }))) : null
                        }, a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        var e = this
                            , t = [{
                                type: "top"
                                , alt: "battlerite-website"
                                , action: function () {
									window.open("http://lore.battlerite.com/", '_blank');
                                }
                                , image: "https://battlerite-ru.github.io/lore/images/home_en.png"
                                , tooltip: "Официальный сайт [EN]"
                                , paths: ["/lore/", "/lore/map/", "/lore/stories/"]
                                , onMobile: 1
                            }, {
                                type: "top"
                                , alt: "battlerite-website"
                                , action: function () {
                                    e.props.history.push("/lore/")
                                }
                                , image: "https://battlerite-ru.github.io/lore/images/home.png"
                                , tooltip: "Домашняя страница"
                                , paths: ["/lore/", "/lore/map/", "/lore/stories/"]
                                , onMobile: !0
                            }, {
                                type: "top"
                                , alt: "map-link"
                                , action: function () {
                                    e.props.history.push("/lore/map/")
                                }
                                , image: "https://battlerite-ru.github.io/lore/images/map.png"
                                , tooltip: "Карта мира"
                                , paths: ["/lore/", "/lore/map/", "/lore/stories/"]
                                , onMobile: !1
                            }, {
                                type: "top"
                                , alt: "stories-link"
                                , action: function () {
                                    e.props.history.push("/lore/stories/")
                                }
                                , image: "https://battlerite-ru.github.io/lore/images/stories.png"
                                , tooltip: "Истории"
                                , paths: ["/lore/", "/lore/map/", "/lore/stories/"]
                                , onMobile: !0
                            }, {
                                type: "bottom"
                                , alt: "sound-controls"
                                , action: this.props.toggleSounds
                                , image: this.props.isMuted ? "https://battlerite-ru.github.io/lore/images/sound_muted.png" : "https://battlerite-ru.github.io/lore/images/sound_unmuted.png"
                                , tooltip: this.props.isMuted ? "Включить звук" : "Приглушить"
                                , paths: ["/lore/map/", "/lore/stories/"]
                                , onMobile: !0
                            }]
                            , a = t.filter(function (e) {
                                return "top" === e.type
                            })
                            .map(this.itemFunc)
                            , o = t.filter(function (e) {
                                return "bottom" === e.type
                            })
                            .map(this.itemFunc);
                        return n.a.createElement("div", {
                            className: "sidebar"
                        }, n.a.createElement("div", {
                            className: "sidebar-items"
                            , style: this.props.isMobile ? {
                                height: this.props.height
                            } : {
                                width: this.props.width
                            }
                        }, n.a.createElement("div", {
                            className: "topItems"
                        }, a), n.a.createElement("div", {
                            className: "bottomItems"
                        }, o)))
                    }
                }]), t
            }(o.Component))
            , he = (a(517), function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(h.a)(this, Object(d.a)(t)
                        .apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        return n.a.createElement("div", {
                            className: "pityContainer"
                        }, n.a.createElement("div", {
                            className: "transparentOverlay"
                        }, n.a.createElement("div", {
                            className: "pity-overlay"
                        }, n.a.createElement("div", {
                            className: "pity-content"
						}, n.a.createElement("div", null, n.a.createElement("h1", null, "Извините!"), n.a.createElement("h2", null, "Ваш браузер не поддерживается.")), n.a.createElement("div", null, n.a.createElement("h3", null, "На данный момент поддерживаются: "), this.props.supportedBrowsers.map(function (e, t) {
                            return n.a.createElement("div", {
                                key: t
                            }, e)
                        })), n.a.createElement("div", {
                            className: "fancyButton"
                            , onClick: this.props.ignoreWarning
                        }, "Продолжить в любом случае...")))))
                    }
                }]), t
            }(o.Component))
            , de = function (e) {
                function t() {
                    return Object(r.a)(this, t), Object(h.a)(this, Object(d.a)(t)
                        .apply(this, arguments))
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "componentDidMount"
                    , value: function () {}
                }, {
                    key: "render"
                    , value: function () {
                        return ("/lore/map/" !== this.props.history.location.pathname && "/lore/stories/" !== this.props.history.location.pathname && "/lore/" !== this.props.history.location.pathname || this.props.isMobile && "/lore/map/" === this.props.history.location.pathname) && this.props.history.push("/lore/"), n.a.createElement("div", null)
                    }
                }]), t
            }(o.Component)
            , ce = n.a.createContext()
            , me = function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(n))))
                        .state = {
                            isMuted: !1
                            , displaySettings: !1
                            , sideBarWidth: 60
                            , sideBarHeight: 50
                            , isMobile: !1
                            , settings: {
                                rgb: {
                                    r: 6
                                    , g: 27
                                    , b: 35
                                }
                                , lineHeight: {
                                    value: 1.5
                                    , label: 1.5
                                }
                            }
                        }, a.updateData = function (e) {
                            return function (t) {
                                a.setState(Object(m.a)({}, e, t))
                            }
                        }, a.handleResize = function () {
                            var e = g.isMobile && !g.isTablet || window.innerWidth <= 500;
                            a.setState({
                                isMobile: e
                            })
                        }, a.resetSettings = function () {
                            a.setState({
                                settings: {
                                    rgb: {
                                        r: 6
                                        , g: 27
                                        , b: 35
                                    }
                                    , lineHeight: {
                                        value: 1.5
                                        , label: 1.5
                                    }
                                }
                            })
                        }, a.componentDidMount = function () {
                            window.addEventListener("resize", a.handleResize), a.handleResize()
                        }, a.componentWillUnmount = function () {
                            window.removeEventListener("resize", a.handleResize)
                        }, a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        var e = this;
                        return n.a.createElement(ce.Provider, {
                            value: {
                                isMuted: this.state.isMuted
                                , displaySettings: this.state.displaySettings
                                , sideBarWidth: this.state.sideBarWidth
                                , sideBarHeight: this.state.sideBarHeight
                                , isMobile: this.state.isMobile
                                , toggleSounds: function () {
                                    e.updateData("isMuted")(!e.state.isMuted)
                                }
                                , toggleSettingsModal: function () {
                                    e.updateData("displaySettings")(!e.state.displaySettings)
                                }
                                , updateSettings: this.updateData("settings")
                                , resetSettings: this.resetSettings
                                , settings: this.state.settings
                            }
                        }, this.props.children)
                    }
                }]), t
            }(o.Component)
            , ue = function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(n))))
                        .supportedBrowsers = ["Chrome", "Firefox", "Opera", "Safari", "Mobile Safari", "Samsung Browser", "Facebook", "Vivaldi"], a.state = {
                            ignoreWarning: !1
                        }, a.ignoreWarning = function () {
                            return a.setState({
                                ignoreWarning: !0
                            })
                        }, a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "componentDidMount"
                    , value: function () {
                        L("js", new Date), L("config", "UA-73755675-26")
                    }
                }, {
                    key: "render"
                    , value: function () {
                        var e = this;
                        return this.supportedBrowsers.includes(g.browserName) || this.state.ignoreWarning ? n.a.createElement("div", {
                            className: "App"
                        }, n.a.createElement(me, null, n.a.createElement(ce.Consumer, null, function (t) {
                            return n.a.createElement("div", null, n.a.createElement(le, {
                                history: e.props.history
                                , toggleSounds: t.toggleSounds
                                , isMuted: t.isMuted
                                , isMobile: t.isMobile
                                , width: t.sideBarWidth
                                , height: t.sideBarHeight
                                , settings: t.settings
                                , toggleSettingsModal: t.toggleSettingsModal
                            }))
                        }), n.a.createElement(u.a, {
                            path: "/lore/"
                            , exact: !0
                            , component: function () {
                                return n.a.createElement(ce.Consumer, null, function (t) {
                                    return n.a.createElement(f, {
                                        history: e.props.history
                                        , sideBarWidth: t.sideBarWidth
                                        , sideBarHeight: t.sideBarHeight
                                        , isMuted: t.isMuted
                                        , isMobile: t.isMobile
                                    })
                                })
                            }
                        }), n.a.createElement(u.a, {
                            path: "/lore/map/"
                            , exact: !0
                            , component: function () {
                                return n.a.createElement(ce.Consumer, null, function (t) {
                                    return t.isMobile ? n.a.createElement(de, {
                                        history: e.props.history
                                    }) : n.a.createElement(ae, {
                                        sideBarWidth: t.sideBarWidth
                                        , sideBarHeight: t.sideBarHeight
                                        , isMuted: t.isMuted
                                        , isMobile: t.isMobile
                                        , settings: t.settings
                                        , toggleSettings: t.toggleSettingsModal
                                        , updateSettings: t.updateSettings
                                        , displaySettings: t.displaySettings
                                        , resetSettings: t.resetSettings
                                    })
                                })
                            }
                        }), n.a.createElement(u.a, {
                            path: "/lore/stories/"
                            , exact: !0
                            , component: function () {
                                return n.a.createElement(ce.Consumer, null, function (e) {
                                    return n.a.createElement(se, {
                                        sideBarWidth: e.sideBarWidth
                                        , sideBarHeight: e.sideBarHeight
                                        , isMuted: e.isMuted
                                        , isMobile: e.isMobile
                                        , settings: e.settings
                                        , toggleSettings: e.toggleSettingsModal
                                        , updateSettings: e.updateSettings
                                        , displaySettings: e.displaySettings
                                        , resetSettings: e.resetSettings
                                    })
                                })
                            }
                        }), n.a.createElement(u.a, {
                            component: function () {
                                return n.a.createElement(ce.Consumer, null, function (t) {
                                    return n.a.createElement(de, {
                                        isMobile: t.isMobile
                                        , history: e.props.history
                                    })
                                })
                            }
                        }))) : n.a.createElement("div", null, n.a.createElement(he, {
                            supportedBrowsers: this.supportedBrowsers
                            , browserName: g.browserName
                            , ignoreWarning: this.ignoreWarning
                        }))
                    }
                }]), t
            }(o.Component)
            , ge = a(182)
            , pe = a(527)
            , we = function (e) {
                function t() {
                    var e, a;
                    Object(r.a)(this, t);
                    for (var o = arguments.length, n = new Array(o), i = 0; i < o; i++) n[i] = arguments[i];
                    return (a = Object(h.a)(this, (e = Object(d.a)(t))
                            .call.apply(e, [this].concat(n))))
                        .history = Object(ge.a)(), a
                }
                return Object(c.a)(t, e), Object(l.a)(t, [{
                    key: "render"
                    , value: function () {
                        return n.a.createElement(pe.a, {
                            history: this.history
                        }, n.a.createElement(ue, {
                            history: this.history
                        }))
                    }
                }]), t
            }(o.Component);
        a(520), a(521);
        s.a.render(n.a.createElement(we, null), document.getElementById("root"))
    }
}, [[184, 2, 1]]]);
//