function ArrowDraw(_0xf288x2, _0xf288x3, _0xf288x4, _0xf288x5, _0xf288x6, _0xf288x7, _0xf288x8, _0xf288x9, _0xf288xa) {
    if (_0xf288x3 == 'up') {
        rasp = 1
    };
    if (_0xf288x3 == 'down') {
        rasp = -1
    };
    if (_0xf288xa == 'str') {
        fun = 1
    };
    if (_0xf288xa == 'fill') {
        fun = 2
    };
    _0xf288x2.beginPath();
    _0xf288x2.strokeStyle = _0xf288x8;
    _0xf288x2.fillStyle = _0xf288x8;
    _0xf288x2.lineWidth = _0xf288x9;
    var _0xf288xb, _0xf288xc;
    _0xf288x4 += _0xf288x6 / 2;
    _0xf288x2.moveTo(_0xf288x4, _0xf288x5);
    _0xf288xb = _0xf288x6 / 2;
    _0xf288xc = rasp * _0xf288x7 / 2;
    _0xf288x2.lineTo(_0xf288x4 + _0xf288xb, _0xf288x5 + _0xf288xc);
    _0xf288xb = _0xf288x6 / 5;
    _0xf288xc = rasp * _0xf288x7 / 2;
    _0xf288x2.lineTo(_0xf288x4 + _0xf288xb, _0xf288x5 + _0xf288xc);
    _0xf288xb = _0xf288x6 / 5;
    _0xf288xc = rasp * _0xf288x7;
    _0xf288x2.lineTo(_0xf288x4 + _0xf288xb, _0xf288x5 + _0xf288xc);
    _0xf288xb = -_0xf288x6 / 5;
    _0xf288xc = rasp * _0xf288x7;
    _0xf288x2.lineTo(_0xf288x4 + _0xf288xb, _0xf288x5 + _0xf288xc);
    _0xf288xb = -_0xf288x6 / 5;
    _0xf288xc = rasp * _0xf288x7 / 2;
    _0xf288x2.lineTo(_0xf288x4 + _0xf288xb, _0xf288x5 + _0xf288xc);
    _0xf288xb = -_0xf288x6 / 2;
    _0xf288xc = rasp * _0xf288x7 / 2;
    _0xf288x2.lineTo(_0xf288x4 + _0xf288xb, _0xf288x5 + _0xf288xc);
    _0xf288x2.closePath();
    _0xf288x2.stroke();
    if (fun == 2) {
        _0xf288x2.fill()
    }
}

function OpenMenu() {
    $('#open_menu').click(function () {
        if (document.getElementById('open_menu').checked) {
            document.getElementById('Menu').style.display = 'block';
            sessionStorage.setItem('open_menu', 'true');
            stsrelki_move();
            return 1
        } else {
            document.getElementById('Menu').style.display = 'none';
            sessionStorage.setItem('open_menu', 'false');
            stsrelki_move();
            return 0
        }
    });
    if (sessionStorage.getItem('open_menu') == 'true') {
        document.getElementById('open_menu').setAttribute('checked', 'checked');
        document.getElementById('Menu').style.display = 'block';
        return 1
    } else {
        document.getElementById('Menu').style.display = 'none';
        return 0
    }
}

function stsrelki_move() {
    document.getElementById('strelki_check').onclick = function () {
        if (document.getElementById('strelki_check').checked) {
            if (sessionStorage.getItem('open_menu') == 'true') {
                sessionStorage.setItem('strelki_check', 'true');
                return 1
            }
        } else {
            document.getElementById('Strelki_On').style.display = 'none';
            sessionStorage.setItem('strelki_check', 'false');
            return 0
        }
    };
    if (sessionStorage.getItem('open_menu') == 'true') {
        if (sessionStorage.getItem('strelki_check') == 'true') {
            document.getElementById('strelki_check').setAttribute('checked', 'checked');
            return 1
        } else {
            return 0
        };
        menu_op = sessionStorage.getItem('menu_op')
    } else {
        if (sessionStorage.getItem('strelki_check') == 'true') {
            document.getElementById('strelki_check').setAttribute('checked', 'checked');
            return 1
        } else {
            return 0
        };
        menu_op = sessionStorage.getItem('menu_op')
    }
}

function check_1(_0xf288x11) {
    document.getElementById(_0xf288x11).onclick = function () {
        if (document.getElementById(_0xf288x11).checked) {
            sessionStorage.setItem(_0xf288x11, 'true');
            return 1
        } else {
            sessionStorage.setItem(_0xf288x11, 'false');
            return 0
        }
    };
    if (sessionStorage.getItem(_0xf288x11) == 'true') {
        document.getElementById(_0xf288x11).setAttribute('checked', 'checked');
        return 1
    } else {
        return 0
    }
}

function font_size_s(_0xf288x11) {
    document.getElementById(_0xf288x11).onclick = function () {
        var _0xf288x13 = document.getElementById('font');
        var _0xf288x14 = _0xf288x13.options[_0xf288x13.selectedIndex].value;
        switch (_0xf288x14) {
        case '0':
            id0 = 'vremya_size';
            if (sessionStorage.getItem('vremya_size') >= 1) {
                vremya_size = sessionStorage.getItem('vremya_size');
                document.getElementById('font_size').setAttribute('value', vremya_size)
            } else {
                vremya_size = 14;
                document.getElementById('font_size').setAttribute('value', vremya_size)
            };
            break;
        case '1':
            id0 = 'max_size';
            if (sessionStorage.getItem('max_size') >= 1) {
                max_size = sessionStorage.getItem('max_size');
                document.getElementById('font_size').setAttribute('value', max_size)
            } else {
                max_size = 14;
                document.getElementById('font_size').setAttribute('value', max_size)
            };
            break;
        case '2':
            id0 = 'gis_size';
            if (sessionStorage.getItem('gis_size') >= 1) {
                gis_size = sessionStorage.getItem('gis_size');
                document.getElementById('font_size').setAttribute('value', gis_size)
            } else {
                gis_size = 14;
                document.getElementById('font_size').setAttribute('value', gis_size)
            };
            break;
        case '3':
            id0 = 'ur_gist';
            if (sessionStorage.getItem('ur_gist') >= 1) {
                ur_gist = sessionStorage.getItem('ur_gist');
                document.getElementById('font_size').setAttribute('value', ur_gist)
            } else {
                ur_gist = 14;
                document.getElementById('font_size').setAttribute('value', ur_gist)
            };
            break;
        case '4':
            id0 = 'ur_str_size';
            if (sessionStorage.getItem('ur_str_size') >= 1) {
                ur_str_size = sessionStorage.getItem('ur_str_size');
                document.getElementById('font_size').setAttribute('value', ur_str_size)
            } else {
                ur_str_size = 14;
                document.getElementById('font_size').setAttribute('value', ur_str_size)
            };
            break;
        case '5':
            id0 = 'str_min_size';
            if (sessionStorage.getItem('str_min_size') >= 1) {
                str_min_size = sessionStorage.getItem('str_min_size');
                document.getElementById('font_size').setAttribute('value', str_min_size)
            } else {
                str_min_size = 14;
                document.getElementById('font_size').setAttribute('value', str_min_size)
            };
            break
        };
        font_size = document.getElementById('font_size').value;
        sessionStorage.setItem(id0, font_size);
        document.getElementById(_0xf288x11).setAttribute('value', font_size)
    };
    if (sessionStorage.getItem('vremya_size') >= 1) {
        vremya_size = sessionStorage.getItem('vremya_size')
    } else {
        vremya_size = 14
    };
    if (sessionStorage.getItem('max_size') >= 1) {
        max_size = sessionStorage.getItem('max_size')
    } else {
        max_size = 14
    };
    if (sessionStorage.getItem('gis_size') >= 1) {
        gis_size = sessionStorage.getItem('gis_size')
    } else {
        gis_size = 14
    };
    if (sessionStorage.getItem('ur_gist') >= 1) {
        ur_gist = sessionStorage.getItem('ur_gist')
    } else {
        ur_gist = 14
    };
    if (sessionStorage.getItem('ur_str_size') >= 1) {
        ur_str_size = sessionStorage.getItem('ur_str_size')
    } else {
        ur_str_size = 14
    };
    if (sessionStorage.getItem('str_min_size') >= 1) {
        str_min_size = sessionStorage.getItem('str_min_size')
    } else {
        str_min_size = 14
    }
}

function blok_shema_0(_0xf288x11) {
    document.getElementById(_0xf288x11).onclick = function () {
        if (document.getElementById(_0xf288x11).checked) {
            sessionStorage.setItem(_0xf288x11, 'true');
            if (invert == 1) {
                document.body.style.backgroundImage = "url('img/blok_shema_mod.png')"
            } else {
                document.body.style.backgroundImage = "url('img/blok_shema_classic.png')"
            };
            return 1
        } else {
            sessionStorage.setItem(_0xf288x11, 'false');
            document.body.style.backgroundImage = 'none';
            return 0
        }
    };
    if (sessionStorage.getItem(_0xf288x11) == 'true') {
        document.getElementById(_0xf288x11).setAttribute('checked', 'checked');
        if (invert == 1) {
            document.body.style.backgroundImage = "url('img/blok_shema_mod.png')"
        } else {
            document.body.style.backgroundImage = "url('img/blok_shema_classic.png')"
        };
        return 1
    } else {
        document.body.style.backgroundImage = 'none';
        return 0
    }
}

function Menu() {
    menuopen = OpenMenu();
    color = check_1('color');
    invert = check_1('invert');
    timer = check_1('timer');
    max_obj = check_1('max_obj');
    max_obj_color = check_1('max_obj_color');
    Strelki_On = stsrelki_move();
    strelki_procent = check_1('strelki_procent');
    font_size = font_size_s('font_size');
    blok_shema = blok_shema_0('blok_shema');
    odinak = check_1('odinak');
    document.getElementById('background').onclick = function () {
        var _0xf288x17 = document.getElementById('background');
        var _0xf288x18 = _0xf288x17.options[_0xf288x17.selectedIndex].value;
        switch (_0xf288x18) {
        case '0':
            document.body.style.backgroundColor = '#21252c';
            break;
        case '1':
            document.body.style.backgroundColor = '#000000';
            break;
        case '2':
            document.body.style.backgroundColor = '#00008b';
            break;
        case '3':
            document.body.style.backgroundColor = '#808080';
            break;
        case '4':
            document.body.style.backgroundColor = '#686c5e';
            break;
        case '5':
            document.body.style.backgroundColor = '#964b00';
            break;
        case '6':
            document.body.style.backgroundColor = '#ffd700';
            break;
        case '7':
            document.body.style.backgroundColor = '#6DB3F2';
            break;
        case '8':
            document.body.style.backgroundColor = 'transparent';
            break
        };
        sessionStorage.setItem('background', _0xf288x18)
    };
    if (sessionStorage.getItem('background') > '0') {
        var _0xf288x19 = document.querySelector('#background');
        var _0xf288x1a = sessionStorage.getItem('background');
        switch (_0xf288x1a) {
        case '0':
            document.body.style.backgroundColor = '#21252c';
            break;
        case '1':
            document.body.style.backgroundColor = '#000000';
            break;
        case '2':
            document.body.style.backgroundColor = '#00008b';
            break;
        case '3':
            document.body.style.backgroundColor = '#808080';
            break;
        case '4':
            document.body.style.backgroundColor = '#686c5e';
            break;
        case '5':
            document.body.style.backgroundColor = '#964b00';
            break;
        case '6':
            document.body.style.backgroundColor = '#ffd700';
            break;
        case '7':
            document.body.style.backgroundImage = '#6DB3F2';
            break;
        case '8':
            document.body.style.backgroundColor = 'transparent';
            break
        };
        document.getElementById('background').setAttribute('background', _0xf288x1a);
        _0xf288x19.value = _0xf288x1a
    };
    document.getElementById('obrez').onclick = function () {
        obrez = document.getElementById('obrez').value;
        document.getElementById('obrez').setAttribute('value', obrez);
        sessionStorage.setItem('obrez', obrez)
    };
    if (sessionStorage.getItem('obrez') >= 0) {
        document.getElementById('obrez').value = sessionStorage.getItem('obrez');
        obrez = sessionStorage.getItem('obrez')
    } else {
        obrez = 0;
        sessionStorage.setItem('obrez', obrez)
    }
}

var Sign = function () {
    var _0xf288x1f = 0;
    var _0xf288x20 = this,
        _0xf288x21, _0xf288x22 = false,
        _0xf288x23 = 0,
        _0xf288x24 = 0,
        _0xf288x25 = window.location.hostname,
        _0xf288x26 = [x = 0, y = 0],
        _0xf288x27 = 'Binomo',
        _0xf288x28 = 0,
        _0xf288x29 = 0;
    var _0xf288x2a = document.getElementById('valx');
    var _0xf288x2b = _0xf288x2a.getContext('2d');
    var _0xf288x2c = [];
    $(_0xf288x2a).attr('width', window.innerWidth);
    $(_0xf288x2a).attr('height', window.innerHeight);
    $(window).bind('resize orientationchange', function () {
        $(_0xf288x2a).attr('width', window.innerWidth);
        $(_0xf288x2a).attr('height', window.innerHeight)
    });
    $(_0xf288x2a).mousemove(function (_0xf288x2d) {
        _0xf288x26.x = _0xf288x2d.pageX;
        _0xf288x26.y = _0xf288x2d.pageY;
        var _0xf288x2e = (($(_0xf288x2a).width() / 100) * 15) / 100;
        var _0xf288x7 = $(_0xf288x2a).height() - (($(_0xf288x2a).height() / 100) * 200);
        if (_0xf288x26.x < (_0xf288x2e * 100) && _0xf288x26.y < _0xf288x7) {
            requestAnimationFrame(_0xf288x20.indi)
        };
        if (_0xf288x26.y > _0xf288x7) {
            requestAnimationFrame(_0xf288x20.indi)
        }
    });
    this.lincen = function (_0xf288x2f) {
        if (_0xf288x2f.hp < _0xf288x26.y && _0xf288x26.y < (_0xf288x2f.hp + _0xf288x2f.hh) && _0xf288x26.x < _0xf288x2f.ww) {
            return true
        };
        if (_0xf288x2f.hp < _0xf288x26.y && _0xf288x26.y < (_0xf288x2f.hp + _0xf288x2f.hh) && _0xf288x26.x > _0xf288x2f.wp && _0xf288x26.x < (_0xf288x2f.wp + _0xf288x2f.ww)) {
            return true
        };
        return false
    };
    this.risv = function (_0xf288x30, _0xf288x31) {
        var _0xf288x32 = _0xf288x30.length;
        var _0xf288x7 = ($(_0xf288x2a).height() - (($(_0xf288x2a).height() / 100) * 20)) / _0xf288x32,
            _0xf288x6, _0xf288x33 = _0xf288x31 / 100,
            _0xf288x2e = (($(_0xf288x2a).width() / 100) * 15) / 100;
        if (window.location.hostname.length !== _0xf288x25.length) {
            return
        };
        var _0xf288x34 = [];
        max_ob_left = 0;
        vertikal_gis_pos = [];
        cena_gist = 0;
        for (var _0xf288x35 = 0; _0xf288x35 < _0xf288x32; _0xf288x35++) {
            if (_0xf288x30[_0xf288x35][1] > 6) {
                if (_0xf288x30[_0xf288x35][1] == _0xf288x31) {
                    _0xf288x2b.beginPath();
                    _0xf288x2b.strokeStyle = 'grey';
                    _0xf288x2b.moveTo(0, (_0xf288x7 * _0xf288x35 + _0xf288x7 / 2));
                    _0xf288x2b.lineTo(($(_0xf288x2a).width() / 80) * 50, (_0xf288x7 * _0xf288x35 + _0xf288x7 / 2));
                    _0xf288x2b.stroke();
                    _0xf288x2b.fillStyle = 'rgba(0, 33, 56, 0.61)';
                    _0xf288x2b.fillRect((($(_0xf288x2a).width() / 100) * 25) - (_0xf288x30[_0xf288x35][0].length * 8), (_0xf288x7 * _0xf288x35 + (_0xf288x7 / 2)) - 25, String(_0xf288x30[_0xf288x35][0]).length * 10, 20);
                    _0xf288x2b.fillStyle = 'rgba(86, 176, 104, 1)';
                    if (_0xf288x30[_0xf288x35][0] <= _0xf288x20.data.data[0].close) {
                        _0xf288x2b.fillStyle = 'rgba(210, 59, 59, 1)'
                    };
                    _0xf288x2b.fillRect((($(_0xf288x2a).width() / 100) * 20) - (_0xf288x30[_0xf288x35][0].length * 8), (_0xf288x7 * _0xf288x35 + (_0xf288x7 / 2)) - 25, String(_0xf288x30[_0xf288x35][1]).length * 10, 20);
                    _0xf288x2b.fillStyle = '#fff';
                    _0xf288x2b.font = ur_gist + 'px Verdana';
                    _0xf288x2b.fillText(_0xf288x30[_0xf288x35][0], (($(_0xf288x2a).width() / 100) * 25) - (_0xf288x30[_0xf288x35][0].length * 8), (_0xf288x7 * _0xf288x35) + _0xf288x7 / 2 - 10);
                    _0xf288x2b.fillText(_0xf288x31, (($(_0xf288x2a).width() / 100) * 20) - (_0xf288x30[_0xf288x35][0].length * 8), (_0xf288x7 * _0xf288x35) + _0xf288x7 / 2 - 10)
                }
            };
            _0xf288x6 = _0xf288x30[_0xf288x35][1];
            if (invert == 1) {
                _0xf288x2b.fillStyle = '#d75c48';
                if (_0xf288x30[_0xf288x35][0] <= _0xf288x20.data.data[0].close) {
                    _0xf288x2b.fillStyle = '#53a15f'
                };
                if (color == 1) {
                    if (_0xf288x30[_0xf288x35][1] >= 5 && _0xf288x30[_0xf288x35][1] < 8) {
                        _0xf288x2b.fillStyle = '#bf3e2a'
                    } else {
                        if (_0xf288x30[_0xf288x35][1] >= 8 && _0xf288x30[_0xf288x35][1] < 10) {
                            _0xf288x2b.fillStyle = '#963121'
                        } else {
                            if (_0xf288x30[_0xf288x35][1] >= 10) {
                                _0xf288x2b.fillStyle = '#6e2418'
                            }
                        }
                    };
                    if (_0xf288x30[_0xf288x35][0] <= _0xf288x20.data.data[0].close) {
                        if (_0xf288x30[_0xf288x35][1] >= 5 && _0xf288x30[_0xf288x35][1] < 8) {
                            _0xf288x2b.fillStyle = '#42804b'
                        } else {
                            if (_0xf288x30[_0xf288x35][1] >= 8 && _0xf288x30[_0xf288x35][1] < 10) {
                                _0xf288x2b.fillStyle = '#315e38'
                            } else {
                                if (_0xf288x30[_0xf288x35][1] >= 10) {
                                    _0xf288x2b.fillStyle = '#203d24'
                                }
                            }
                        }
                    }
                }
            } else {
                _0xf288x2b.fillStyle = '#53a15f';
                if (_0xf288x30[_0xf288x35][0] <= _0xf288x20.data.data[0].close) {
                    _0xf288x2b.fillStyle = '#d75c48'
                };
                if (color == 1) {
                    if (_0xf288x30[_0xf288x35][1] >= 5 && _0xf288x30[_0xf288x35][1] < 8) {
                        _0xf288x2b.fillStyle = '#42804b'
                    } else {
                        if (_0xf288x30[_0xf288x35][1] >= 8 && _0xf288x30[_0xf288x35][1] < 10) {
                            _0xf288x2b.fillStyle = '#315e38'
                        } else {
                            if (_0xf288x30[_0xf288x35][1] >= 10) {
                                _0xf288x2b.fillStyle = '#203d24'
                            }
                        }
                    };
                    if (_0xf288x30[_0xf288x35][0] <= _0xf288x20.data.data[0].close) {
                        if (_0xf288x30[_0xf288x35][1] >= 5 && _0xf288x30[_0xf288x35][1] < 8) {
                            _0xf288x2b.fillStyle = '#bf3e2a'
                        } else {
                            if (_0xf288x30[_0xf288x35][1] >= 8 && _0xf288x30[_0xf288x35][1] < 10) {
                                _0xf288x2b.fillStyle = '#963121'
                            } else {
                                if (_0xf288x30[_0xf288x35][1] >= 10) {
                                    _0xf288x2b.fillStyle = '#6e2418'
                                }
                            }
                        }
                    }
                }
            };
            _0xf288x2b.fillRect(0, _0xf288x7 * _0xf288x35, (_0xf288x6 / _0xf288x33) * _0xf288x2e, _0xf288x7 - (_0xf288x7 / 100));
            if (_0xf288x30[_0xf288x35][0] == _0xf288x20.data.data[0].close) {
                cena_gist = (_0xf288x7 * _0xf288x35);
                _0xf288x2b.beginPath();
                _0xf288x2b.strokeStyle = '#49bde8';
                _0xf288x2b.moveTo(0, _0xf288x7 * _0xf288x35);
                _0xf288x2b.lineTo(($(_0xf288x2a).width() / 100) * 30, _0xf288x7 * _0xf288x35);
                _0xf288x2b.stroke();
                _0xf288x2b.fillStyle = '#49bde8';
                _0xf288x2b.font = gis_size + 'px Verdana';
                vertikal = ($(_0xf288x2a).height() / 2 - 100);
                vertik = Math.round(_0xf288x7 * _0xf288x35);
                if (vertik > vertikal) {
                    temp = (-15);
                    temp_2 = (-45)
                } else {
                    temp = 14;
                    temp_2 = 60
                };
                tim = new Date();
                hour = tim.getHours();
                if (timer == 1) {
                    if (_0xf288x27 == 'Binomo') {
                        plus = 1
                    } else {
                        plus = 0
                    };
                    minut = plus + tim.getMinutes();
                    sec = 60 - glob_sec + plus
                } else {
                    plus = 0;
                    minut = tim.getMinutes();
                    sec = glob_sec - plus
                };
                if (minut > 59) {
                    minut = 0;
                    hour = hour + plus
                };
                if (hour < 10) {
                    hour = '0' + hour
                };
                if (minut < 10) {
                    minut = '0' + minut
                };
                if (sec < 10) {
                    sec = ':' + '0' + sec
                } else {
                    if (sec < 0) {
                        sec = 0
                    }
                };
                if (timer == 1) {
                    if (sec <= '45' && sec > '35') {
                        _0xf288x2b.fillStyle = '#ffff00'
                    };
                    if (sec <= '35' && sec > '30') {
                        _0xf288x2b.fillStyle = '#ff0000'
                    }
                } else {
                    if (sec >= '15' && sec < '25') {
                        _0xf288x2b.fillStyle = '#ffff00'
                    };
                    if (sec >= '25' && sec < '30') {
                        _0xf288x2b.fillStyle = '#ff0000'
                    }
                };
                _0xf288x2b.fillText(_0xf288x30[_0xf288x35][0], (($(_0xf288x2a).width() / 100) * 20) - (_0xf288x30[_0xf288x35][0].length * 8), (_0xf288x7 * _0xf288x35) + temp)
            };
            _0xf288x34.hp = _0xf288x7 * _0xf288x35;
            _0xf288x34.hh = _0xf288x7 - (_0xf288x7 / 100);
            _0xf288x34.ww = _0xf288x2e * 100;
            if (_0xf288x20.lincen(_0xf288x34) || (_0xf288x1f == _0xf288x30[_0xf288x35][0])) {
                _0xf288x2b.fillStyle = 'rgba(0, 33, 56, 0.61)';
                _0xf288x2b.fillRect((($(_0xf288x2a).width() / 100) * 15.2), (_0xf288x7 * _0xf288x35 + (_0xf288x7 / 2)), String(_0xf288x30[_0xf288x35][0]).length * 10, 20);
                _0xf288x2b.fillStyle = 'rgba(86, 176, 104, 1)';
                if (_0xf288x30[_0xf288x35][0] <= _0xf288x20.data.data[0].close) {
                    _0xf288x2b.fillStyle = 'rgba(210, 59, 59, 1)'
                };
                _0xf288x2b.fillRect((($(_0xf288x2a).width() / 100) * 15.2), (_0xf288x7 * _0xf288x35 + (_0xf288x7 / 2)) - 20, String(_0xf288x30[_0xf288x35][1]).length * 20, 20);
                _0xf288x2b.beginPath();
                _0xf288x2b.strokeStyle = '#fff';
                _0xf288x2b.moveTo(0, _0xf288x7 * _0xf288x35 + (_0xf288x7 / 2));
                _0xf288x2b.lineTo(($(_0xf288x2a).width() / 100) * 15.2, _0xf288x7 * _0xf288x35 + (_0xf288x7 / 2));
                _0xf288x2b.stroke();
                _0xf288x2b.fillStyle = '#fff';
                _0xf288x2b.font = gis_size + 'px Verdana';
                if (odinak > 0) {
                    _0xf288x1f = _0xf288x30[_0xf288x35][0]
                };
                _0xf288x2b.fillText(_0xf288x30[_0xf288x35][0], (($(_0xf288x2a).width() / 100) * 15.5), (_0xf288x7 * _0xf288x35 + (_0xf288x7 / 2)) + 14);
                _0xf288x2b.fillText(_0xf288x30[_0xf288x35][1], (($(_0xf288x2a).width() / 100) * 15.5), (_0xf288x7 * _0xf288x35 + (_0xf288x7 / 2)) - 5)
            }
        }
    };
    this.risg = function (_0xf288x30) {
        fon_svecha = [];
        X_price = [], Y_price = [];
        if (window.location.hostname.length !== _0xf288x25.length) {
            return
        };
        var _0xf288x36 = $('#period').val(),
            _0xf288x37 = 0;
        for (var _0xf288x35 = 0; _0xf288x35 < _0xf288x36; _0xf288x35++) {
            if (!_0xf288x30[_0xf288x35].tick) {
                break
            };
            if (_0xf288x30[_0xf288x35].tick.length > _0xf288x37) {
                _0xf288x37 = _0xf288x30[_0xf288x35].tick.length
            }
        };
        var _0xf288x33 = _0xf288x37 / 100,
            _0xf288x6 = ($(_0xf288x2a).width() - 120) / _0xf288x36,
            _0xf288x7 = (($(_0xf288x2a).height() / 100) * 20) / 100;
        var _0xf288x38 = 0,
            _0xf288x39, _0xf288x3a, _0xf288x3b, _0xf288x3c, _0xf288x3d;
        open_sv = [];
        for (var _0xf288x35 = 0; _0xf288x35 < _0xf288x36; _0xf288x35++) {
            if (!_0xf288x30[_0xf288x35].tick) {
                break
            };
            if (_0xf288x30[_0xf288x35].tick) {
                _0xf288x38 = _0xf288x30[_0xf288x35].tick.length
            };
            open_sv[_0xf288x35] = _0xf288x30[_0xf288x35].open;
            if (_0xf288x30[_0xf288x35].close < _0xf288x30[_0xf288x35].open) {
                _0xf288x2b.fillStyle = '#d75c48';
                fon_svecha[_0xf288x35] = 'red'
            } else {
                if (_0xf288x30[_0xf288x35].close > _0xf288x30[_0xf288x35].open) {
                    _0xf288x2b.fillStyle = '#53a15f';
                    fon_svecha[_0xf288x35] = 'green'
                } else {
                    if (_0xf288x30[_0xf288x35].close = _0xf288x30[_0xf288x35].open) {
                        _0xf288x2b.fillStyle = '#808080';
                        fon_svecha[_0xf288x35] = 'grey'
                    }
                }
            };
            _0xf288x2b.fillRect(_0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35), $(_0xf288x2a).height(), _0xf288x6 - (_0xf288x6 / 100), 0 - (_0xf288x7 * (_0xf288x38 / _0xf288x33)));
            _0xf288x2b.fillStyle = '#fff';
            _0xf288x2b.font = vremya_size + 'px Verdana';
            _0xf288x39 = new Date(_0xf288x30[_0xf288x35].time * 1000);
            _0xf288x3d = new Date();
            _0xf288x3a = _0xf288x39.getHours();
            if (_0xf288x27 == 'Binomo') {
                plus = 1;
                sec_0 = 59
            } else {
                plus = 0;
                sec_0 = 60
            };
            if (timer == 1) {
                _0xf288x3b = (_0xf288x39.getMinutes() + plus);
                if (_0xf288x35 < 1) {
                    _0xf288x3c = sec_0 - glob_sec + plus;
                    if (_0xf288x3c < -1) {
                        _0xf288x3c = 59
                    };
                    if (_0xf288x3c < -2) {
                        _0xf288x3c = 58
                    };
                    if (_0xf288x3c < 10) {
                        _0xf288x3c = '0' + _0xf288x3c
                    }
                } else {
                    _0xf288x3c = '';
                    _0xf288x2b.font = vremya_size + 'px Verdana'
                };
                if (_0xf288x3b < 10) {
                    _0xf288x3b = '0' + _0xf288x3b
                };
                if (_0xf288x3b > 59) {
                    _0xf288x3b = '00';
                    _0xf288x3a = (parseInt(_0xf288x3a) + 1)
                };
                if (_0xf288x3a < 10) {
                    _0xf288x3a = '0' + plus
                };
                if (_0xf288x3c > 59) {
                    _0xf288x3c = '00'
                };
                if (_0xf288x3c <= '45' && _0xf288x3c > '35') {
                    _0xf288x2b.fillStyle = '#ffff00'
                };
                if (_0xf288x3c <= '35' && _0xf288x3c > '30') {
                    _0xf288x2b.fillStyle = '#ff0000'
                }
            } else {
                _0xf288x3b = (_0xf288x39.getMinutes() + plus);
                if (_0xf288x35 < 1) {
                    _0xf288x3c = glob_sec - plus;
                    if (_0xf288x3c < 10) {
                        _0xf288x3c = '0' + _0xf288x3c
                    }
                } else {
                    _0xf288x3c = '';
                    _0xf288x2b.font = vremya_size + 'px Verdana'
                };
                if (_0xf288x3b < 10) {
                    _0xf288x3b = '0' + _0xf288x3b
                };
                if (_0xf288x3b > 59) {
                    _0xf288x3b = '00';
                    _0xf288x3a = (parseInt(_0xf288x3a) + plus)
                };
                if (_0xf288x3a < 10) {
                    _0xf288x3a = '0' + _0xf288x3a
                };
                if (_0xf288x3c > 59) {
                    _0xf288x3c = '00'
                };
                if (_0xf288x3c >= '15' && _0xf288x3c < '25') {
                    _0xf288x2b.fillStyle = '#ffff00'
                };
                if (_0xf288x3c >= '25' && _0xf288x3c < '30') {
                    _0xf288x2b.fillStyle = '#ff0000'
                }
            };
            if (_0xf288x35 < 1) {
                _0xf288x3c = ':' + _0xf288x3c;
                if (timer == 1) {} else {
                    _0xf288x3b = _0xf288x3b - 1
                }
            };
            _0xf288x2b.fillText(_0xf288x3a + ':' + _0xf288x3b + _0xf288x3c, _0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35), $(_0xf288x2a).height() - (_0xf288x7 * (_0xf288x38 / _0xf288x33)) - 10);
            X_price[_0xf288x35] = _0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35);
            Y_price[_0xf288x35] = $(_0xf288x2a).height() - (_0xf288x7 * (_0xf288x38 / _0xf288x33));
            _0xf288x38 = 0
        }
    };
    this.rish = function (_0xf288x3e) {
        var _0xf288x3f;
        var _0xf288x40 = $('#period').val() * 1 + 1;
        var _0xf288x41 = ($(_0xf288x2a).width()) / (_0xf288x40 + 1.5);
        var _0xf288x42 = 300;
        var _0xf288x43 = ($(_0xf288x2a).height() - _0xf288x42) / 2;
        cena_sv = [];
        cena_stolbik = 0, rash_up = 0;
        var _0xf288x44, _0xf288x45 = [],
            _0xf288x46 = 0,
            _0xf288x47, _0xf288x48;
        if (window.location.hostname.length !== _0xf288x25.length) {
            return
        };
        var _0xf288x36 = $('#period').val(),
            _0xf288x49 = 0,
            _0xf288x4a = 0,
            _0xf288x37, _0xf288x4b = 0,
            _0xf288x33, _0xf288x32, _0xf288x4c = 0,
            _0xf288x30 = [],
            _0xf288x4d = [],
            _0xf288x4e = [],
            _0xf288x4f, _0xf288x50, _0xf288x51 = [],
            _0xf288x34 = [];
        var _0xf288x38 = 0;
        for (var _0xf288x35 = 0; _0xf288x35 < _0xf288x36; _0xf288x35++) {
            if (!_0xf288x3e[_0xf288x35].tick) {
                break
            };
            if (_0xf288x3e[_0xf288x35].tick) {
                _0xf288x38 = _0xf288x3e[_0xf288x35].tick.length
            };
            _0xf288x4d = [], _0xf288x32 = _0xf288x3e[_0xf288x35].tick.length;
            if (_0xf288x32 > _0xf288x4b) {
                _0xf288x4b = _0xf288x32
            };
            for (var _0xf288x52 = 0; _0xf288x52 < _0xf288x32; _0xf288x52++) {
                if (!_0xf288x4d[_0xf288x3e[_0xf288x35].tick[_0xf288x52].close]) {
                    _0xf288x4d[_0xf288x3e[_0xf288x35].tick[_0xf288x52].close] = 1
                } else {
                    _0xf288x4d[_0xf288x3e[_0xf288x35].tick[_0xf288x52].close]++
                }
            };
            var _0xf288x4e = [];
            for (var _0xf288x53 in _0xf288x4d) {
                _0xf288x4e.push([_0xf288x53, _0xf288x4d[_0xf288x53]])
            };
            var _0xf288x4f = _0xf288x4e.length,
                _0xf288x50, _0xf288x30 = [];
            for (var _0xf288x54 = 0; _0xf288x54 < _0xf288x4f; _0xf288x54++) {
                if (Number(_0xf288x4e[_0xf288x54][0]) > 0) {
                    _0xf288x50 = _0xf288x54;
                    _0xf288x4c = _0xf288x4e[_0xf288x54][0];
                    for (var _0xf288x55 = 0; _0xf288x55 < _0xf288x4f; _0xf288x55++) {
                        if (Number(_0xf288x4e[_0xf288x55][0]) > _0xf288x4c) {
                            _0xf288x4c = _0xf288x4e[_0xf288x55][0];
                            _0xf288x50 = _0xf288x55;
                            if (_0xf288x54 > 0) {
                                _0xf288x54--
                            }
                        }
                    };
                    _0xf288x30.push([_0xf288x4c, _0xf288x4e[_0xf288x50][1]]);
                    _0xf288x4e[_0xf288x50][0] = 0
                }
            };
            _0xf288x51.push(_0xf288x30)
        };
        var _0xf288x56 = _0xf288x51.length,
            _0xf288x57;
        var _0xf288x33 = _0xf288x4b / 100;
        var _0xf288x6 = ($(_0xf288x2a).width() - 120) / _0xf288x36;
        var _0xf288x58 = (($(_0xf288x2a).height() / 100) * 20) / 100,
            _0xf288x7 = 0,
            _0xf288x59 = 0,
            _0xf288x5a = 0;
        var _0xf288x37;
        candleLow = 0;
        candleHigh = 0;
        for (var _0xf288x35 = 0; _0xf288x35 < _0xf288x56; _0xf288x35++) {
            _0xf288x57 = _0xf288x51[_0xf288x35].length;
            _0xf288x7 = ((_0xf288x3e[_0xf288x35].tick.length / _0xf288x33) * _0xf288x58) / _0xf288x57;
            _0xf288x5a = _0xf288x3e[_0xf288x35].tick[0].close;
            _0xf288x37 = 0;
            open[_0xf288x35] = open_sv[_0xf288x35];
            candleHigh = _0xf288x51[_0xf288x35][0][0];
            candleLow = _0xf288x51[_0xf288x35][_0xf288x57 - 1][0];
            for (var _0xf288x32 = 0; _0xf288x32 < _0xf288x57; _0xf288x32++) {
                if (_0xf288x51[_0xf288x35][_0xf288x32][1] > _0xf288x37) {
                    _0xf288x37 = _0xf288x51[_0xf288x35][_0xf288x32][1]
                }
            };
            _0xf288x44 = 0;
            _0xf288x45 = 0;
            for (var _0xf288x32 = 0; _0xf288x32 < _0xf288x57; _0xf288x32++) {
                if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= _0xf288x44) {
                    _0xf288x44 = _0xf288x51[_0xf288x35][_0xf288x32][1];
                    _0xf288x46 = _0xf288x57;
                    max_p_find = _0xf288x32;
                    _0xf288x45 = _0xf288x51[_0xf288x35][_0xf288x32][0];
                    if (_0xf288x45 < _0xf288x5a) {
                        color_text = '#008f1d'
                    };
                    if (_0xf288x45 > _0xf288x5a) {
                        color_text = '#d75c48'
                    };
                    if (_0xf288x51[_0xf288x35][_0xf288x32][0] == _0xf288x5a) {
                        color_text = '#ffffff'
                    }
                };
                if (invert == 1) {
                    _0xf288x2b.fillStyle = '#930000';
                    if (_0xf288x51[_0xf288x35][_0xf288x32][0] <= _0xf288x5a) {
                        _0xf288x2b.fillStyle = '#005811'
                    };
                    if (color == 1) {
                        if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= 6) {
                            _0xf288x2b.fillStyle = '#2e0000'
                        };
                        if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= 4 && _0xf288x51[_0xf288x35][_0xf288x32][1] < 6) {
                            _0xf288x2b.fillStyle = '#610000'
                        };
                        if (_0xf288x51[_0xf288x35][_0xf288x32][0] <= _0xf288x5a) {
                            if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= 6) {
                                _0xf288x2b.fillStyle = '#002908'
                            };
                            if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= 4 && _0xf288x51[_0xf288x35][_0xf288x32][1] < 6) {
                                _0xf288x2b.fillStyle = '#005c12'
                            }
                        }
                    }
                } else {
                    _0xf288x2b.fillStyle = '#005811';
                    if (_0xf288x51[_0xf288x35][_0xf288x32][0] <= _0xf288x5a) {
                        _0xf288x2b.fillStyle = '#930000'
                    };
                    if (color == 1) {
                        if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= 6) {
                            _0xf288x2b.fillStyle = '#002908'
                        };
                        if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= 4 && _0xf288x51[_0xf288x35][_0xf288x32][1] < 6) {
                            _0xf288x2b.fillStyle = '#0a4500'
                        };
                        if (_0xf288x51[_0xf288x35][_0xf288x32][0] <= _0xf288x5a) {
                            if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= 6) {
                                _0xf288x2b.fillStyle = '#2e0000'
                            };
                            if (_0xf288x51[_0xf288x35][_0xf288x32][1] >= 4 && _0xf288x51[_0xf288x35][_0xf288x32][1] < 6) {
                                _0xf288x2b.fillStyle = '#610000'
                            }
                        }
                    }
                };
                _0xf288x59 = (_0xf288x6 / 100) * (_0xf288x51[_0xf288x35][_0xf288x32][1] / (_0xf288x37 / 100));
                _0xf288x2b.fillRect(_0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35), $(_0xf288x2a).height() - (_0xf288x7 * (_0xf288x57 - _0xf288x32)), _0xf288x59 - ((_0xf288x59 / 100) * 10), _0xf288x7 - (_0xf288x7 / 100));
                _0xf288x34.hp = $(_0xf288x2a).height() - (_0xf288x7 * (_0xf288x57 - _0xf288x32));
                _0xf288x34.hh = _0xf288x7;
                _0xf288x34.wp = _0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35);
                _0xf288x34.ww = (_0xf288x6 / 100) * (_0xf288x37 / (_0xf288x37 / 100));
                if (_0xf288x20.lincen(_0xf288x34) || (_0xf288x1f == _0xf288x51[_0xf288x35][_0xf288x32][0])) {
                    var _0xf288x5b = _0xf288x51[_0xf288x35][_0xf288x32][0];
                    _0xf288x2b.fillStyle = 'rgba(0, 33, 56, 0.61)';
                    _0xf288x2b.fillRect((_0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35)) + _0xf288x34.ww - 1, _0xf288x34.hp + (_0xf288x34.hh / 2) - 20, _0xf288x5b.length * 10, 20);
                    _0xf288x2b.fillStyle = 'rgba(86, 176, 104, 1)';
                    if (_0xf288x51[_0xf288x35][_0xf288x32][0] <= _0xf288x5a) {
                        _0xf288x2b.fillStyle = 'rgba(210, 59, 59, 1)'
                    };
                    _0xf288x2b.fillRect((_0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35)) + _0xf288x34.ww - 1, _0xf288x34.hp + (_0xf288x34.hh / 2) - 40, String(_0xf288x51[_0xf288x35][_0xf288x32][1]).length * 15, 20);
                    _0xf288x2b.beginPath();
                    _0xf288x2b.strokeStyle = '#fff';
                    _0xf288x2b.moveTo(_0xf288x34.wp, _0xf288x34.hp + (_0xf288x7 / 2));
                    _0xf288x2b.lineTo(_0xf288x34.wp + _0xf288x34.ww, _0xf288x34.hp + (_0xf288x7 / 2));
                    _0xf288x2b.stroke();
                    _0xf288x2b.fillStyle = '#fff';
                    _0xf288x2b.font = '14px Verdana';
                    if (odinak > 0) {
                        _0xf288x1f = _0xf288x5b
                    };
                    _0xf288x2b.fillText(_0xf288x5b, (_0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35)) + _0xf288x34.ww, _0xf288x34.hp + (_0xf288x34.hh / 2) - 5);
                    _0xf288x2b.fillText(_0xf288x51[_0xf288x35][_0xf288x32][1], (_0xf288x6 * ((_0xf288x36 - 1) - _0xf288x35)) + _0xf288x34.ww, _0xf288x34.hp + (_0xf288x34.hh / 2) - 25)
                }
            };
            x = X_price[_0xf288x35];
            y = Y_price[_0xf288x35];
            if (max_obj == 1) {
                if (max_obj_color == 1) {
                    _0xf288x2b.fillStyle = color_text
                } else {
                    _0xf288x2b.fillStyle = '#ffffff'
                };
                _0xf288x45 = _0xf288x45.slice(obrez, 12);
                _0xf288x2b.font = max_size + 'px Verdana';
                _0xf288x2b.fillText(_0xf288x45, x, y - (vremya_size * 2.2));
                _0xf288x2b.fillText(_0xf288x44, x + (_0xf288x34.ww / 3), y - (parseFloat(vremya_size) + parseFloat(max_size) * 2.3))
            };
            if (strelki_procent == 1) {
                _0xf288x2b.fillStyle = color_text;
                var _0xf288x5c = '⬈',
                    _0xf288x5d = '⬊',
                    _0xf288x5e = '⬍';
                procent_rassh = (max_p_find * 100 / _0xf288x46);
                procent_rassh = parseFloat(procent_rassh.toFixed());
                _0xf288x2b.font = str_min_size + 'px Verdana';
                if (fon_svecha[_0xf288x35] == 'red') {
                    if (procent_rassh < 50) {
                        _0xf288x47 = 'down'
                    } else {
                        if (procent_rassh > 50) {
                            _0xf288x47 = 'down'
                        } else {
                            if (procent_rassh = 50) {
                                _0xf288x47 = '0'
                            }
                        }
                    };
                    procent_rassh = 100 - procent_rassh
                };
                if (fon_svecha[_0xf288x35] == 'green') {
                    if (procent_rassh < 50) {
                        _0xf288x47 = 'up'
                    } else {
                        if (procent_rassh > 50) {
                            _0xf288x47 = 'up'
                        } else {
                            if (procent_rassh = 50) {
                                _0xf288x47 = '0'
                            }
                        }
                    }
                };
                if (fon_svecha[_0xf288x35] == 'grey') {
                    if (procent_rassh < 50) {
                        _0xf288x47 = '0'
                    } else {
                        if (procent_rassh > 50) {
                            _0xf288x47 = '0'
                        } else {
                            if (procent_rassh = 50) {
                                _0xf288x47 = '0'
                            }
                        }
                    }
                };
                if (_0xf288x47 == 'up') {
                    _0xf288x2b.fillText(_0xf288x5c + procent_rassh, x + (_0xf288x34.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));
                    rash_up = procent_rassh;
                    rash_down = 100 - procent_rassh
                } else {
                    if (_0xf288x47 == 'down') {
                        _0xf288x2b.fillText(_0xf288x5d + procent_rassh, x + (_0xf288x34.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));
                        rash_up = 100 - procent_rassh;
                        rash_down = procent_rassh
                    } else {
                        if (_0xf288x47 == '0') {
                            _0xf288x2b.fillText(_0xf288x5e + procent_rassh, x + (_0xf288x34.ww / 4), y - (parseFloat(max_size) + parseFloat(vremya_size) + parseFloat(max_size) * 2.4));
                            rash_up = procent_rassh;
                            rash_down = procent_rassh
                        }
                    }
                };
                po_up = 2;
                po_down = 1
            };
            if (Strelki_On == 1) {
                if (_0xf288x35 == 1) {
                    var _0xf288x5f = ($(_0xf288x2a).width() / 2);
                    var _0xf288x60 = ($(_0xf288x2a).height() / 10);
                    var _0xf288x61 = _0xf288x5f,
                        _0xf288x62 = _0xf288x60;
                    arrow_down_x = _0xf288x5f, arrow_down_y = _0xf288x60 + 130;
                    _0xf288x2b.font = ur_str_size + 'px Verdana';
                    if (color_text == '#d75c48') {
                        ArrowDraw(_0xf288x2b, 'up', _0xf288x61, _0xf288x62, 50, 50, 'green', 1, 'str');
                        ArrowDraw(_0xf288x2b, 'down', arrow_down_x, arrow_down_y, 50, 50, 'red', 1, 'fill');
                        _0xf288x2b.fillText(_0xf288x5a, _0xf288x61 + 10, arrow_down_y / 1.6);
                        if (strelki_procent == 1) {
                            _0xf288x2b.fillStyle = '#fff';
                            _0xf288x2b.fillText(rash_down + '%', _0xf288x61 + 20, arrow_down_y / po_up * 1.5);
                            _0xf288x2b.fillText(rash_up + '%', _0xf288x61 + 20, arrow_down_y / po_up)
                        }
                    } else {
                        if (color_text == '#008f1d') {
                            ArrowDraw(_0xf288x2b, 'up', _0xf288x61, _0xf288x62, 50, 50, 'green', 1, 'fill');
                            ArrowDraw(_0xf288x2b, 'down', arrow_down_x, arrow_down_y, 50, 50, 'red', 1, 'str');
                            _0xf288x2b.fillText(_0xf288x5a, _0xf288x61 + 10, arrow_down_y / 1.6);
                            if (strelki_procent == 1) {
                                _0xf288x2b.fillStyle = '#fff';
                                _0xf288x2b.fillText(rash_down + '%', _0xf288x61 + 20, arrow_down_y / po_up * 1.5);
                                _0xf288x2b.fillText(rash_up + '%', _0xf288x61 + 20, arrow_down_y / po_up)
                            }
                        } else {
                            if (color_text == '#ffffff') {
                                ArrowDraw(_0xf288x2b, 'up', _0xf288x61, _0xf288x62, 50, 50, 'green', 1, 'str');
                                ArrowDraw(_0xf288x2b, 'down', arrow_down_x, arrow_down_y, 50, 50, 'red', 1, 'str');
                                _0xf288x2b.fillText((_0xf288x5a + ' закр. на макс. объёме'), _0xf288x61 + 30, arrow_down_y / 1.6);
                                if (strelki_procent == 1) {
                                    _0xf288x2b.fillStyle = '#fff';
                                    _0xf288x2b.fillText(rash_down + '%', _0xf288x61 + 20, arrow_down_y / po_up * 1.5);
                                    _0xf288x2b.fillText(rash_up + '%', _0xf288x61 + 20, arrow_down_y / po_up)
                                }
                            }
                        }
                    }
                    //function postCrossDomainMessage(msg) {
                      // var win = document.getElementById('vasyk').contentWindow;
                      //window.postMessage(msg, "https://dv097.github.io/vmd0/");
                    //}
                    //var postMsg = {"SigUp" : rash_up};//{"my" : ("SigUP : " + rash_up + " - SigDN : " + rash_down + " - SigCol : " + ("#d75c48" == color_text ? "Red" : "#008f1d" == color_text ? "Green" : "White"))}
                    //postCrossDomainMessage(postMsg);
                    // console.log("SigUP : " + rash_up + " - SigDN : " + rash_down + " - SigCol : " + ("#d75c48" == color_text ? "Red" : "#008f1d" == color_text ? "Green" : "White"))
                    sessionStorage.setItem("SigUP", rash_up), sessionStorage.setItem("SigDN", rash_down), sessionStorage.setItem("SigCol", ("#d75c48" == color_text ? "Red" : "#008f1d" == color_text ? "Green" : "White"))
                }
            }
        };
        if ($('.preload').is(':visible')) {
            $('.preload').hide('fade')
        }
    };
    this.soc = function (_0xf288x63 = 'EURUSD', _0xf288x36 = 60) {
        if (window.location.hostname.length !== _0xf288x25.length) {
            return
        };
        $('.preload').show('fade');
        if ($('#' + $('#pair').attr('val').replace(/[/]/g, '_')).attr('data') !== _0xf288x27 || !_0xf288x21) {
            _0xf288x27 = $('#' + $('#pair').attr('val').replace(/[/]/g, '_')).attr('data');
            console.log('typ:' + _0xf288x27);
            console.log('typ2:', $('#' + $('#pair').attr('val').replace(/[/]/g, '_')));
            if (_0xf288x21) {
                _0xf288x21.close()
            };
            if (_0xf288x27 == 'Binomo') {
                console.log('Binomo');
                _0xf288x21 = new WebSocket('wss://as.binomo-web.com/')
            };
            _0xf288x21.onopen = function () {
                if (_0xf288x27 == 'Binomo') {
                    _0xf288x21.send('subscribe:' + _0xf288x63)
                }
            };
            _0xf288x21.onclose = function () {
                console.log('Connection closed...');
                _0xf288x20.soc($('#pair').attr('val'), $('#size').val())
            };
            _0xf288x21.onmessage = function (_0xf288x64) {
                _0xf288x20.predobrdata(_0xf288x64.data)
            }
        } else {
           if (_0xf288x27 == 'Binomo') {
                console.log('Binomo22');
                if (sub_bin === 'undefined') {
                    if (_0xf288x21.readyState === WebSocket.OPEN) {
                        _0xf288x21.close();
                        _0xf288x21 = new WebSocket('wss://as.binomo-web.com/')
                    };
                    _0xf288x21.onopen = function () {
                        _0xf288x21.send('subscribe:' + _0xf288x63)
                    }
                } else {
                    _0xf288x21.send('unsubscribe:' + _0xf288x20.data.pair);
                    console.log('unsubscribe:' + _0xf288x20.data.pair);
                    _0xf288x21.send('subscribe:' + _0xf288x63);
                    console.log('subscribe:' + _0xf288x63)
                }
            };
            _0xf288x29 = 0
        }
    };
    this.predobrdata = function (_0xf288x3e) {
        Menu();
        var _0xf288x3e = JSON.parse(_0xf288x3e);
        uuid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 12)).toUpperCase();
        if (_0xf288x27 == 'Binomo') {
            sub_uid = 'undefined';
            var _0xf288x65 = {},
                _0xf288x39;
            if (_0xf288x28 == 0 && _0xf288x3e.data[0].action) {
                if (_0xf288x3e.data[0].action == 'subscribe') {
                    sub_bin = 123
                }
            };
            if (_0xf288x28 == 0 && _0xf288x3e.data[0].assets) {
                _0xf288x28 = _0xf288x3e.data[0].assets[0].rate
            };
            if (_0xf288x3e.data[0].assets) {
                if (_0xf288x28 == _0xf288x3e.data[0].assets[0].rate) {
                    _0xf288x29++
                }
            };
            if (_0xf288x3e.errors[0]) {
                _0xf288x65 = {
                    "servertime": 1234567890
                }
            } else {
                if (_0xf288x3e.data[0].assets) {
                    _0xf288x3e = _0xf288x3e.data[0].assets[0];
                    if (_0xf288x3e.ric == 'Z-CRY/IDX') {
                        tess = _0xf288x3e.rate.toString();
                        tess_0 = tess.length;
                        if (tess_0 > 12) {
                            _0xf288x3e.rate = tess.slice(0, 12)
                        }
                    } else {
                        if (_0xf288x3e.ric == 'XBT/USD') {
                            _0xf288x3e.rate = Math.round(_0xf288x3e.rate * 10) / 10
                        } else {
                            _0xf288x3e.rate = Math.round(_0xf288x3e.rate * 100000) / 100000
                        }
                    };
                    _0xf288x39 = String(Date.parse(_0xf288x3e.created_at));
                    tim_00 = (Date.parse(_0xf288x3e.created_at));
                    test_time = new Date(tim_00);
                    glob_sec = test_time.getSeconds();
                    glob_min = test_time.getMinutes();
                    glob_hour = test_time.getHours();
                    _0xf288x39 = Number(_0xf288x39.substring(0, _0xf288x39.length - 3));
                    if (_0xf288x22 == true) {
                        _0xf288x65.pair = _0xf288x3e.ric;
                        _0xf288x65.time = +_0xf288x39;
                        _0xf288x65.open = +_0xf288x3e.rate;
                        _0xf288x65.low = +_0xf288x3e.rate;
                        _0xf288x65.high = +_0xf288x3e.rate;
                        _0xf288x65.close = +_0xf288x3e.rate
                    } else {
                        if (_0xf288x22 == false) {
                            _0xf288x65.barsize = +$('#size').val();
                            _0xf288x65.data = [];
                            _0xf288x65.pair = _0xf288x3e.ric;
                            var _0xf288x66 = {};
                            _0xf288x66.pair = _0xf288x3e.ric;
                            _0xf288x66.time = _0xf288x39 - (_0xf288x39 % $('#size').val());
                            _0xf288x66.open = +_0xf288x3e.rate;
                            _0xf288x66.low = +_0xf288x3e.rate;
                            _0xf288x66.high = +_0xf288x3e.rate;
                            _0xf288x66.close = +_0xf288x3e.rate;
                            for (var _0xf288x35 = 0; _0xf288x35 < 72; _0xf288x35++) {
                                _0xf288x65.data.push(_0xf288x66);
                                _0xf288x66.time = _0xf288x39 - $('#size').val()
                            }
                        }
                    }
                }
            };
            _0xf288x20.obr(_0xf288x65)
        }
    };
    this.indi = function () {
        if (!_0xf288x20.data) {
            return
        };
        if (window.location.hostname.length !== _0xf288x25.length) {
            return
        };
        var _0xf288x3e = _0xf288x20.data.data;
        if (!_0xf288x3e[0].tick) {
            return
        };
        var _0xf288x36 = $('#period').val(),
            _0xf288x4d = [],
            _0xf288x67 = 0,
            _0xf288x4e = [];
        for (var _0xf288x35 = 0; _0xf288x35 < _0xf288x36; _0xf288x35++) {
            if (!_0xf288x3e[_0xf288x35].tick) {
                break
            };
            for (var _0xf288x32 = 0; _0xf288x32 < _0xf288x3e[_0xf288x35].tick.length; _0xf288x32++) {
                if (!_0xf288x4d[_0xf288x3e[_0xf288x35].tick[_0xf288x32].close]) {
                    _0xf288x4d[_0xf288x3e[_0xf288x35].tick[_0xf288x32].close] = 1
                } else {
                    _0xf288x4d[_0xf288x3e[_0xf288x35].tick[_0xf288x32].close]++
                }
            }
        };
        for (var _0xf288x53 in _0xf288x4d) {
            if (_0xf288x4d[_0xf288x53] > _0xf288x67) {
                _0xf288x67 = _0xf288x4d[_0xf288x53]
            };
            _0xf288x4e.push([_0xf288x53, _0xf288x4d[_0xf288x53]])
        };
        var _0xf288x52 = _0xf288x4e.length,
            _0xf288x50, _0xf288x30 = [];
        for (var _0xf288x35 = 0; _0xf288x35 < _0xf288x52; _0xf288x35++) {
            if (Number(_0xf288x4e[_0xf288x35][0]) > 0) {
                _0xf288x50 = _0xf288x35;
                ky = _0xf288x4e[_0xf288x35][0];
                for (var _0xf288x32 = 0; _0xf288x32 < _0xf288x52; _0xf288x32++) {
                    if (Number(_0xf288x4e[_0xf288x32][0]) > ky) {
                        ky = _0xf288x4e[_0xf288x32][0];
                        _0xf288x50 = _0xf288x32;
                        if (_0xf288x35 > 0) {
                            _0xf288x35--
                        }
                    }
                };
                _0xf288x30.push([ky, _0xf288x4e[_0xf288x50][1]]);
                _0xf288x4e[_0xf288x50][0] = 0
            }
        };
        _0xf288x2b.clearRect(0, 0, $(_0xf288x2a).width(), $(_0xf288x2a).height());
        _0xf288x20.risv(_0xf288x30, _0xf288x67);
        _0xf288x20.risg(_0xf288x3e);
        _0xf288x20.rish(_0xf288x3e)
    };
    if (window.location.hostname.length !== _0xf288x25.length) {
        return
    };
    this.obr = function (_0xf288x3e) {
        _0xf288x1f = 0;
        if ($('.preload').is(':visible')) {};
        if (_0xf288x3e.servertime) {
            _0xf288x24++
        };
        if (_0xf288x3e.time) {
            _0xf288x24 = 0;
            var _0xf288x2f = _0xf288x3e.time % _0xf288x20.data.barsize;
            if (_0xf288x2f == 0 || Math.floor(_0xf288x3e.time / _0xf288x20.data.barsize) > Math.floor(_0xf288x20.data.data[0].time / _0xf288x20.data.barsize)) {
                if (_0xf288x3e.time > _0xf288x23) {
                    _0xf288x23 = _0xf288x3e.time + 10;
                    _0xf288x20.data.data.unshift(_0xf288x3e);
                    sessionStorage.setItem('data', JSON.stringify(_0xf288x20.data))
                }
            } else {
                if (_0xf288x3e.close) {
                    _0xf288x24 = 0;
                    if (_0xf288x20.data.data[0].high < _0xf288x3e.high) {
                        _0xf288x20.data.data[0].high = _0xf288x3e.high
                    };
                    if (_0xf288x20.data.data[0].low > _0xf288x3e.low) {
                        _0xf288x20.data.data[0].low = _0xf288x3e.low
                    };
                    if (_0xf288x20.data.data[0].close != _0xf288x3e.close) {
                        _0xf288x20.data.data[0].close = _0xf288x3e.close;
                        if (!_0xf288x20.data.data[0].tick) {
                            _0xf288x20.data.data[0].tick = [];
                            _0xf288x20.data.data[0].tick.push(_0xf288x3e)
                        } else {
                            _0xf288x20.data.data[0].tick.unshift(_0xf288x3e)
                        }
                    }
                }
            };
            requestAnimationFrame(_0xf288x20.indi)
        } else {
            if (_0xf288x3e.data) {
                if (!_0xf288x22) {
                    var _0xf288x68 = JSON.parse(sessionStorage.getItem('data'));
                    if (_0xf288x68) {
                        if (_0xf288x68.pair == _0xf288x3e.pair && _0xf288x68.barsize == _0xf288x3e.barsize) {
                            _0xf288x20.data = _0xf288x68
                        } else {
                            _0xf288x20.data = _0xf288x3e
                        }
                    } else {
                        _0xf288x20.data = _0xf288x3e
                    };
                    _0xf288x22 = true
                }
            }
        };
        if (_0xf288x24 > 2 || _0xf288x29 > 20) {
            var _0xf288x7 = $(_0xf288x2a).height(),
                _0xf288x6 = $(_0xf288x2a).width();
            _0xf288x2b.clearRect(0, 0, _0xf288x6, _0xf288x7);
            _0xf288x2b.strokeStyle = '#fff';
            _0xf288x2b.font = ((_0xf288x6 / 100) * 4) + 'px Verdana';
            var _0xf288x69 = 'Котировки ' + $('#pair').text() + ' недоступны';
            _0xf288x2b.strokeText(_0xf288x69, (_0xf288x6 / _0xf288x69.length) * 4, _0xf288x7 / 2);
            _0xf288x28 = 0;
            _0xf288x29 = 0;
            if ($('.preload').is(':visible')) {
                $('.preload').hide('fade')
            }
        }
    };
    this.pairchange = function () {
        _0xf288x22 = false;
        var _0xf288x6a = 0;
        if (_0xf288x2c.aff) {
            _0xf288x6a = _0xf288x2c.aff
        };
        var _0xf288x65 = {
            aff: _0xf288x6a,
            pair: $('#pair').attr('val'),
            period: $('#period').val(),
            size: $('#size').val(),
            date: _0xf288x2c.date
        };
        _0xf288x24 = 0;
        sessionStorage.setItem('dsav', JSON.stringify(_0xf288x65));
        _0xf288x20.soc($('#pair').attr('val'), $('#size').val())
    };
    $('#size').change(function () {
        _0xf288x20.pairchange()
    });
    $('#pair').click(function () {
        if (!$('.divscrol').is(':visible')) {
            $('.divscrol').show('blind')
        } else {
            $('.divscrol').hide('blind')
        }
    });
    $('#valx').click(function () {
        if ($('.divscrol').is(':visible')) {
            $('.divscrol').hide('blind')
        }
    });
    $('.sels').click(function () {
        if ($(this).attr('val') !== $('#pair').attr('val')) {
            $('#pair').attr('val', $(this).attr('val'));
            $('#pair').html($(this).html());
            _0xf288x20.pairchange()
        };
        $('.divscrol').hide('blind')
    });
    $('#period').change(function () {
        if ($(this).val() < 2) {
            $(this).val(2)
        };
        if ($(this).val() > 72) {
            $(this).val(72)
        };
        var _0xf288x6a = 0;
        if (_0xf288x2c.aff) {
            _0xf288x6a = _0xf288x2c.aff
        };
        var _0xf288x65 = {
            aff: _0xf288x6a,
            pair: $('#pair').attr('val'),
            period: $('#period').val(),
            size: $('#size').val(),
            date: _0xf288x2c.date
        };
        sessionStorage.setItem('dsav', JSON.stringify(_0xf288x65))
    });
    _0xf288x2c = JSON.parse(sessionStorage.getItem('dsav'));
    var _0xf288x6b = new Date();
    _0xf288x6b = _0xf288x6b.getTime();
    if (_0xf288x2c) {
        if (_0xf288x2c.pair) {
            $('#pair').attr('val', _0xf288x2c.pair);
            $('#pair').html($('#' + _0xf288x2c.pair.replace(/[/]/g, '_')).html())
        };
        if (_0xf288x2c.period) {
            $('#period').val(_0xf288x2c.period)
        };
        if (_0xf288x2c.size) {
            $('#size>option:eq(2)').removeAttr('selected');
            $('#' + _0xf288x2c.size).attr('selected', 'selected')
        }
    } else {
        var _0xf288x65 = {
            aff: 'null',
            pair: $('#pair').val(),
            period: $('#period').val(),
            size: $('#size').val(),
            date: _0xf288x6b
        };
        sessionStorage.setItem('dsav', JSON.stringify(_0xf288x65));
        _0xf288x2c = _0xf288x65
    };
/*    var _0xf288x6c = document.createElement('a');
    _0xf288x6c.setAttribute('href', 'https://t.me/VA_MOD');
    var _0xf288x6d = document.createElement('LABEL');
    var _0xf288x6e = document.createElement('img');
    _0xf288x6e.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/80px-Telegram_logo.svg.png');
    _0xf288x6e.style.position = 'absolute';
    _0xf288x6e.style.bottom = '90px';
    _0xf288x6e.style.right = '25px';
    _0xf288x6e.style.height = '30px';
    _0xf288x6e.style.width = '30px';
    _0xf288x6c.appendChild(_0xf288x6e);
    _0xf288x6d.textContent = ' Ver 7.1.1 ';
    _0xf288x6d.style.right = '15px';
    _0xf288x6d.style.bottom = '5px';
    _0xf288x6d.style.position = 'absolute';
    _0xf288x6c.appendChild(_0xf288x6d);
    _0xf288x6e.setAttribute('title', 'Группа для обсуждения и загрузки последней версии');
    document.body.appendChild(_0xf288x6c);
    var _0xf288x6f = document.createElement('a');
    _0xf288x6f.setAttribute('href', 'qiwi.com/n/MRDIV');
    var _0xf288x70 = document.createElement('img');
    _0xf288x70.setAttribute('src', 'https://static.qiwi.com/img/qiwi_com/header/qiwi-wallet-logo.svg');
    _0xf288x70.style.position = 'absolute';
    _0xf288x70.style.bottom = '40px';
    _0xf288x70.style.right = '5px';
    _0xf288x70.style.width = '70px';
    _0xf288x70.style.height = '32px';
    _0xf288x6f.appendChild(_0xf288x70);
    _0xf288x70.setAttribute('title', 'Окажи помощь в развитии проекта');
    document.body.appendChild(_0xf288x6f);*/
    _0xf288x20.soc($('#pair').attr('val'), $('#size').val())
};
window.onload = Sign()
