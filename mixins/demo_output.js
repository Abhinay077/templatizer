(function () {
var root = this, exports = {};

// The jade runtime:
var jade = exports.jade=function(exports){Array.isArray||(Array.isArray=function(arr){return"[object Array]"==Object.prototype.toString.call(arr)}),Object.keys||(Object.keys=function(obj){var arr=[];for(var key in obj)obj.hasOwnProperty(key)&&arr.push(key);return arr}),exports.merge=function merge(a,b){var ac=a["class"],bc=b["class"];if(ac||bc)ac=ac||[],bc=bc||[],Array.isArray(ac)||(ac=[ac]),Array.isArray(bc)||(bc=[bc]),ac=ac.filter(nulls),bc=bc.filter(nulls),a["class"]=ac.concat(bc).join(" ");for(var key in b)key!="class"&&(a[key]=b[key]);return a};function nulls(val){return val!=null}return exports.attrs=function attrs(obj,escaped){var buf=[],terse=obj.terse;delete obj.terse;var keys=Object.keys(obj),len=keys.length;if(len){buf.push("");for(var i=0;i<len;++i){var key=keys[i],val=obj[key];"boolean"==typeof val||null==val?val&&(terse?buf.push(key):buf.push(key+'="'+key+'"')):0==key.indexOf("data")&&"string"!=typeof val?buf.push(key+"='"+JSON.stringify(val)+"'"):"class"==key&&Array.isArray(val)?buf.push(key+'="'+exports.escape(val.join(" "))+'"'):escaped&&escaped[key]?buf.push(key+'="'+exports.escape(val)+'"'):buf.push(key+'="'+val+'"')}}return buf.join(" ")},exports.escape=function escape(html){return String(html).replace(/&(?!(\w+|\#\d+);)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;")},exports.rethrow=function rethrow(err,filename,lineno){if(!filename)throw err;var context=3,str=require("fs").readFileSync(filename,"utf8"),lines=str.split("\n"),start=Math.max(lineno-context,0),end=Math.min(lines.length,lineno+context),context=lines.slice(start,end).map(function(line,i){var curr=i+start+1;return(curr==lineno?"  > ":"    ")+curr+"| "+line}).join("\n");throw err.path=filename,err.message=(filename||"Jade")+":"+lineno+"\n"+context+"\n\n"+err.message,err},exports}({});


// create our folder objects
exports.nested = {};
exports.other = {};
exports.other.deep = {};
exports.other.deep2 = {};

// users.jade compiled template
exports.nested.users = function anonymous(locals) {
    var buf = [];
    var locals_ = locals || {}, users = locals_.users;
    buf.push('<ul class="users">');
    (function() {
        var $$obj = users;
        if ("number" == typeof $$obj.length) {
            for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                var user = $$obj[$index];
                buf.push(this.users.user_li(user));
            }
        } else {
            var $$l = 0;
            for (var $index in $$obj) {
                $$l++;
                var user = $$obj[$index];
                buf.push(this.users.user_li(user));
            }
        }
    }).call(this);
    buf.push("</ul>");
    return buf.join("");
};

// users.jade:user_li_mixin compiled template
exports.nested.users.user_li = function anonymous(user) {
    var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {}, buf = [];
    buf.push("<li" + jade.attrs({
        "data-user-id": user.id
    }, {
        "data-user-id": true
    }) + "><span>Before the li</span>");
    buf.push(this.user_a(user));
    buf.push("</li>");
    return buf.join("");
};

// users.jade:user_a_mixin compiled template
exports.nested.users.user_a = function anonymous(user) {
    var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {}, buf = [];
    buf.push("<a" + jade.attrs({
        href: user.url
    }, {
        href: true
    }) + ">Nested " + jade.escape((jade.interp = user.name) == null ? "" : jade.interp) + "</a>");
    return buf.join("");
};

// test.jade compiled template
exports.other.deep.test = function anonymous(locals) {
    var buf = [];
    buf.push('<div class="test"></div>');
    return buf.join("");
};

// test.jade compiled template
exports.other.deep2.test = function anonymous(locals) {
    var buf = [];
    buf.push('<div class="test2"></div>');
    return buf.join("");
};

// users.jade compiled template
exports.users = function anonymous(locals) {
    var buf = [];
    var locals_ = locals || {}, users = locals_.users;
    buf.push('<ul class="users">');
    (function() {
        var $$obj = users;
        if ("number" == typeof $$obj.length) {
            for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
                var user = $$obj[$index];
                buf.push(this.users.user_li(user));
            }
        } else {
            var $$l = 0;
            for (var $index in $$obj) {
                $$l++;
                var user = $$obj[$index];
                buf.push(this.users.user_li(user));
            }
        }
    }).call(this);
    buf.push("</ul>");
    return buf.join("");
};

// users.jade:user_li_mixin compiled template
exports.users.user_li = function anonymous(user) {
    var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {}, buf = [];
    buf.push("<li" + jade.attrs({
        "data-user-id": user.id
    }, {
        "data-user-id": true
    }) + ">");
    buf.push(this.user_a(user));
    buf.push("</li>");
    return buf.join("");
};

// users.jade:user_a_mixin compiled template
exports.users.user_a = function anonymous(user) {
    var block = this.block, attributes = this.attributes || {}, escaped = this.escaped || {}, buf = [];
    buf.push("<a" + jade.attrs({
        href: user.url
    }, {
        href: true
    }) + ">" + jade.escape((jade.interp = user.name) == null ? "" : jade.interp) + "</a>");
    return buf.join("");
};


// attach to window or export with commonJS
if (typeof module !== "undefined" && typeof module.exports !== "undefined") {
    module.exports = exports;
} else if (typeof define === "function" && define.amd) {
    define(exports);
} else {
    root.templatizer = exports;
}

})();