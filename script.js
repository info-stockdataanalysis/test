const _0x58ca98 = _0xed9e;
(function(_0x4c7bac, _0x201b90) {
    const _0x3a1779 = _0xed9e
      , _0x52b8a4 = _0x4c7bac();
    while (!![]) {
        try {
            const _0x9c0ea = -parseInt(_0x3a1779(0xbd)) / 0x1 * (parseInt(_0x3a1779(0x9b)) / 0x2) + -parseInt(_0x3a1779(0x8f)) / 0x3 + -parseInt(_0x3a1779(0x8d)) / 0x4 + -parseInt(_0x3a1779(0x87)) / 0x5 + -parseInt(_0x3a1779(0xa6)) / 0x6 + parseInt(_0x3a1779(0x88)) / 0x7 + parseInt(_0x3a1779(0x95)) / 0x8;
            if (_0x9c0ea === _0x201b90)
                break;
            else
                _0x52b8a4['push'](_0x52b8a4['shift']());
        } catch (_0x16a21c) {
            _0x52b8a4['push'](_0x52b8a4['shift']());
        }
    }
}(_0x5281, 0xebe32));
const API = _0x58ca98(0xb7);
function _0xed9e(_0x39ac3e, _0xb0e75e) {
    _0x39ac3e = _0x39ac3e - 0x86;
    const _0x5281d8 = _0x5281();
    let _0xed9e6e = _0x5281d8[_0x39ac3e];
    return _0xed9e6e;
}
function _0x5281() {
    const _0x1df40f = ['2-digit', '8728752nnaRcL', 'toString', '<tr>', 'logout', 'Session\x20expired', 'toLocaleTimeString', '<th>', 'location', 'error', 'href', '<table\x20border=\x271\x27\x20style=\x27width:100%;\x20text-align:center\x27>', 'token', 'email', 'substr', '</table>', 'stringify', 'index.html', 'https://script.google.com/macros/s/AKfycbzL7AXYEby0ONxKjVg92hiPFNqxLrph89idCuMXMSadcELzvrQO1JhbUrunjap1xVim/exec', 'setItem', 'addEventListener', 'device_id', 'dev_', 'random', '2347KmbzLu', 'msg', 'success', '3444090zujZtY', '4127970iXOaRq', 'innerHTML', 'Logged\x20in\x20on\x20another\x20device', '</td>', 'finally', '3807724DEZvab', '</th>', '4926876sAHufw', 'password', 'getElementById', 'then', 'POST', 'dashboard.html', '53287920GJAViC', 'Session\x20expired.\x20Please\x20login\x20again.', 'json', 'data', 'forEach', 'clear', '1318LJGhPv', 'value', 'pathname', 'getItem', 'en-IN', 'keys', 'includes', '</tr>', 'Asia/Kolkata', 'Unauthorized'];
    _0x5281 = function() {
        return _0x1df40f;
    }
    ;
    return _0x5281();
}
function getDeviceId() {
    const _0x4b2d06 = _0x58ca98;
    let _0x39501a = localStorage['getItem'](_0x4b2d06(0xba));
    return !_0x39501a && (_0x39501a = _0x4b2d06(0xbb) + Math[_0x4b2d06(0xbc)]()[_0x4b2d06(0xa7)](0x24)[_0x4b2d06(0xb3)](0x2, 0x9),
    localStorage['setItem'](_0x4b2d06(0xba), _0x39501a)),
    _0x39501a;
}
function login() {
    const _0x43fc3e = _0x58ca98
      , _0x558240 = document['getElementById'](_0x43fc3e(0xb2))[_0x43fc3e(0x9c)]
      , _0x5857cf = document['getElementById'](_0x43fc3e(0x90))[_0x43fc3e(0x9c)]
      , _0x25fda9 = getDeviceId();
    fetch(API, {
        'method': _0x43fc3e(0x93),
        'body': JSON['stringify']({
            'email': _0x558240,
            'password': _0x5857cf,
            'device_id': _0x25fda9
        })
    })[_0x43fc3e(0x92)](_0x442d40 => _0x442d40['json']())[_0x43fc3e(0x92)](_0xb68da9 => {
        const _0x2c481c = _0x43fc3e;
        _0xb68da9[_0x2c481c(0x86)] ? (localStorage['setItem'](_0x2c481c(0xb1), _0xb68da9[_0x2c481c(0xb1)]),
        localStorage[_0x2c481c(0xb8)](_0x2c481c(0xb2), _0x558240),
        alert('Login\x20success'),
        window[_0x2c481c(0xad)]['href'] = _0x2c481c(0x94)) : alert(_0xb68da9[_0x2c481c(0xbe)]);
    }
    );
}
document[_0x58ca98(0xb9)]('DOMContentLoaded', () => {
    const _0x47923a = _0x58ca98;
    if (window['location'][_0x47923a(0x9d)][_0x47923a(0xa1)](_0x47923a(0x94))) {
        const _0x5583f5 = localStorage[_0x47923a(0x9e)](_0x47923a(0xb1));
        if (!_0x5583f5) {
            window['location'][_0x47923a(0xaf)] = _0x47923a(0xb6);
            return;
        }
        loadData(),
        setInterval(loadData, 0x2710);
    }
}
);
function loadData() {
    const _0x2522a0 = _0x58ca98
      , _0x284801 = localStorage['getItem'](_0x2522a0(0xb1));
    fetch(API + '?token=' + _0x284801 + '&device_id=' + getDeviceId())[_0x2522a0(0x92)](_0x1bde3b => _0x1bde3b[_0x2522a0(0x97)]())[_0x2522a0(0x92)](_0xce20c3 => {
        const _0x278a18 = _0x2522a0;
        if (_0xce20c3[_0x278a18(0xae)]) {
            if (_0xce20c3[_0x278a18(0xae)] === _0x278a18(0xaa) || _0xce20c3[_0x278a18(0xae)] === _0x278a18(0xa4)) {
                alert(_0x278a18(0x96)),
                logout();
                return;
            }
            if (_0xce20c3[_0x278a18(0xae)] === _0x278a18(0x8a)) {
                alert(_0xce20c3['error']),
                logout();
                return;
            }
            alert(_0xce20c3[_0x278a18(0xae)]);
            return;
        }
        renderTable(_0xce20c3);
    }
    );
}
function formatToIST(_0x20d027) {
    const _0x33c485 = _0x58ca98
      , _0x57306a = new Date(_0x20d027);
    return _0x57306a[_0x33c485(0xab)](_0x33c485(0x9f), {
        'timeZone': _0x33c485(0xa3),
        'hour': '2-digit',
        'minute': _0x33c485(0xa5),
        'second': '2-digit',
        'hour12': ![]
    });
}
function renderTable(_0x25c53e) {
    const _0x4edf37 = _0x58ca98;
    let _0x31a167 = _0x4edf37(0xb0);
    const _0x5bb869 = Object[_0x4edf37(0xa0)](_0x25c53e[0x0]);
    _0x31a167 += '<tr>',
    _0x5bb869[_0x4edf37(0x99)](_0x331c5d => _0x31a167 += _0x4edf37(0xac) + _0x331c5d + _0x4edf37(0x8e)),
    _0x31a167 += _0x4edf37(0xa2),
    _0x25c53e[_0x4edf37(0x99)](_0x355d35 => {
        const _0x54bb88 = _0x4edf37;
        _0x31a167 += _0x54bb88(0xa8),
        _0x5bb869['forEach'](_0x396a9a => {
            const _0x2dfa03 = _0x54bb88;
            let _0x3d1219 = _0x355d35[_0x396a9a];
            _0x396a9a === 'Time' && (_0x3d1219 = formatToIST(_0x3d1219)),
            _0x31a167 += '<td>' + _0x3d1219 + _0x2dfa03(0x8b);
        }
        ),
        _0x31a167 += _0x54bb88(0xa2);
    }
    ),
    _0x31a167 += _0x4edf37(0xb4),
    document[_0x4edf37(0x91)](_0x4edf37(0x98))[_0x4edf37(0x89)] = _0x31a167;
}
function logout() {
    const _0x328926 = _0x58ca98
      , _0x388ff1 = localStorage[_0x328926(0x9e)](_0x328926(0xb2));
    fetch(API, {
        'method': _0x328926(0x93),
        'body': JSON[_0x328926(0xb5)]({
            'action': _0x328926(0xa9),
            'email': _0x388ff1
        })
    })[_0x328926(0x8c)]( () => {
        const _0x4881c3 = _0x328926;
        localStorage[_0x4881c3(0x9a)](),
        window[_0x4881c3(0xad)][_0x4881c3(0xaf)] = _0x4881c3(0xb6);
    }
    );
}
