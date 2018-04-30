function zfill(num, len) {return (Array(len).join("0") + num).slice(-len);};

export const e = (s) => {
//function e(s) {

    var se = "";
    for(var i=0;i<s.length;i++)
    {
        var sc = zfill(s.charCodeAt(i), 4);
        se += sc;
    }
    return se;
};
export const d = (se) => {
//function d(se) {

    var s = "";
    var a = se.split(/(.{4})/g);
    for(var i=0;i<a.length;i++)
    {
        var ic = a[i];
        if(!ic.length || ic.length != 4)continue;
        var c = parseInt(ic);
        var sc = String.fromCharCode(c);
        s += sc;
    }
    return s;
};
