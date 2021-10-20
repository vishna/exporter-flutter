/**
 * 
 * @param {string} text 
 * @param {string} indentationString 
 * 
 * @returns {string}
 */
function createDocumentationComment(text, indentationString) {
    return text.trim().split("\n").map((line) => `${indentationString}/// ${line}`).join("\n")
}

/**
 * 
 * @param {{name: string, isRoot: boolean, path: Array<string>}} tokenGroup 
 * 
 * @returns {Array<string>}
 */
function createFullTokenGroupPath(tokenGroup) {
    if (tokenGroup.isRoot) {
        return []
    } else {
        return tokenGroup.path.concat(tokenGroup.name)
    }
}

/**
 * 
 * @param {Array<any>} lhs
 * @param {Array<any>} rhs
 * 
 * @returns {Array<any>}
 */
function arrayConcat(lhs, rhs) {
    return lhs.concat(rhs)
}

/**
 * 
 * @param {Array<string>} array 
 * @param {string} separator 
 */
function arrayJoin(array, separator) {
    return array.join(separator)
}

/**
 * 
 * Creates an empty array
 * 
 * @returns {Array<any>}
 */
function arrayCreate() {
    return []
}

/**
 * 
 * Pushes an item to an array
 * 
 * @param {Array<any>} arr
 * @param {any} obj
 * 
 * @returns {Array<any>}
 */
function arrayPush(arr, obj) {
    arr.push(obj)
    return arr
}

/**
 * @param {string} separator
 * 
 * @returns {boolean}
 */
function isNumeric(str) {
    if (typeof str != "string") return false // we only process strings!  
    return !isNaN(str) && // use type coercion to parse the _entirety_ of the string (`parseFloat` alone does not do this)...
        !isNaN(parseFloat(str)) // ...and ensure strings of whitespace fail
}

/**
 * 
 * @param obj result of ds.currentDesignSystemVersion()
 * @returns {string}
 */
function dsPrefix(obj) {
    const array = obj.customTokenProperties
    const prefix = array.find(element => element.codeName === "dsPrefix");
    if (prefix == null) {
        return "App";
    } else {
        return prefix.defaultValue;
    }
}

/**
 * 
 * @param obj
 * @returns {string}
 */
function formatAsDouble(obj) {
    return parseFloat(obj).toFixed(2);
}

function flutterTextHeight(lineHeight, fontSize) {
    return formatAsDouble(lineHeight / fontSize);
}

function logStuff(obj) {
    console.log(JSON.stringify(obj));
    return ""
}

Pulsar.registerFunction("createDocumentationComment", createDocumentationComment)
Pulsar.registerFunction("createFullTokenGroupPath", createFullTokenGroupPath)
Pulsar.registerFunction("arrayConcat", arrayConcat)
Pulsar.registerFunction("arrayJoin", arrayJoin)
Pulsar.registerFunction("arrayCreate", arrayCreate)
Pulsar.registerFunction("arrayPush", arrayPush)
Pulsar.registerFunction("isNumeric", isNumeric)
Pulsar.registerFunction("dsPrefix", dsPrefix)
Pulsar.registerFunction("formatAsDouble", formatAsDouble)
Pulsar.registerFunction("logStuff", logStuff)
Pulsar.registerFunction("flutterTextHeight", flutterTextHeight)