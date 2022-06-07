/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
(function(global, factory) { /* global define, require, module */

    /* AMD */ if (typeof define === 'function' && define.amd)
        define(["protobufjs/minimal.js"], factory);

    /* CommonJS */ else if (typeof require === 'function' && typeof module === 'object' && module && module.exports)
        module.exports = factory(require("protobufjs/minimal.js"));

})(this, function($protobuf) {
    "use strict";

    // Common aliases
    var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;
    
    // Exported root namespace
    var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});
    
    $root.messaging = (function() {
    
        /**
         * Namespace messaging.
         * @exports messaging
         * @namespace
         */
        var messaging = {};
    
        messaging.xnet = (function() {
    
            /**
             * Namespace xnet.
             * @memberof messaging
             * @namespace
             */
            var xnet = {};
    
            xnet.v1 = (function() {
    
                /**
                 * Namespace v1.
                 * @memberof messaging.xnet
                 * @namespace
                 */
                var v1 = {};
    
                v1.MixedHashTree = (function() {
    
                    /**
                     * Properties of a MixedHashTree.
                     * @memberof messaging.xnet.v1
                     * @interface IMixedHashTree
                     * @property {google.protobuf.IEmpty|null} [empty] MixedHashTree empty
                     * @property {messaging.xnet.v1.MixedHashTree.IFork|null} [fork] MixedHashTree fork
                     * @property {messaging.xnet.v1.MixedHashTree.ILabeled|null} [labeled] MixedHashTree labeled
                     * @property {Uint8Array|null} [leafData] MixedHashTree leafData
                     * @property {Uint8Array|null} [prunedDigest] MixedHashTree prunedDigest
                     */
    
                    /**
                     * Constructs a new MixedHashTree.
                     * @memberof messaging.xnet.v1
                     * @classdesc Represents a MixedHashTree.
                     * @implements IMixedHashTree
                     * @constructor
                     * @param {messaging.xnet.v1.IMixedHashTree=} [properties] Properties to set
                     */
                    function MixedHashTree(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * MixedHashTree empty.
                     * @member {google.protobuf.IEmpty|null|undefined} empty
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @instance
                     */
                    MixedHashTree.prototype.empty = null;
    
                    /**
                     * MixedHashTree fork.
                     * @member {messaging.xnet.v1.MixedHashTree.IFork|null|undefined} fork
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @instance
                     */
                    MixedHashTree.prototype.fork = null;
    
                    /**
                     * MixedHashTree labeled.
                     * @member {messaging.xnet.v1.MixedHashTree.ILabeled|null|undefined} labeled
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @instance
                     */
                    MixedHashTree.prototype.labeled = null;
    
                    /**
                     * MixedHashTree leafData.
                     * @member {Uint8Array|null|undefined} leafData
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @instance
                     */
                    MixedHashTree.prototype.leafData = null;
    
                    /**
                     * MixedHashTree prunedDigest.
                     * @member {Uint8Array|null|undefined} prunedDigest
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @instance
                     */
                    MixedHashTree.prototype.prunedDigest = null;
    
                    // OneOf field names bound to virtual getters and setters
                    var $oneOfFields;
    
                    /**
                     * MixedHashTree treeEnum.
                     * @member {"empty"|"fork"|"labeled"|"leafData"|"prunedDigest"|undefined} treeEnum
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @instance
                     */
                    Object.defineProperty(MixedHashTree.prototype, "treeEnum", {
                        get: $util.oneOfGetter($oneOfFields = ["empty", "fork", "labeled", "leafData", "prunedDigest"]),
                        set: $util.oneOfSetter($oneOfFields)
                    });
    
                    /**
                     * Creates a new MixedHashTree instance using the specified properties.
                     * @function create
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @static
                     * @param {messaging.xnet.v1.IMixedHashTree=} [properties] Properties to set
                     * @returns {messaging.xnet.v1.MixedHashTree} MixedHashTree instance
                     */
                    MixedHashTree.create = function create(properties) {
                        return new MixedHashTree(properties);
                    };
    
                    /**
                     * Encodes the specified MixedHashTree message. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.verify|verify} messages.
                     * @function encode
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @static
                     * @param {messaging.xnet.v1.IMixedHashTree} message MixedHashTree message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MixedHashTree.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.empty != null && Object.hasOwnProperty.call(message, "empty"))
                            $root.google.protobuf.Empty.encode(message.empty, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.fork != null && Object.hasOwnProperty.call(message, "fork"))
                            $root.messaging.xnet.v1.MixedHashTree.Fork.encode(message.fork, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.labeled != null && Object.hasOwnProperty.call(message, "labeled"))
                            $root.messaging.xnet.v1.MixedHashTree.Labeled.encode(message.labeled, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        if (message.leafData != null && Object.hasOwnProperty.call(message, "leafData"))
                            writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.leafData);
                        if (message.prunedDigest != null && Object.hasOwnProperty.call(message, "prunedDigest"))
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.prunedDigest);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified MixedHashTree message, length delimited. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @static
                     * @param {messaging.xnet.v1.IMixedHashTree} message MixedHashTree message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    MixedHashTree.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a MixedHashTree message from the specified reader or buffer.
                     * @function decode
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {messaging.xnet.v1.MixedHashTree} MixedHashTree
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MixedHashTree.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messaging.xnet.v1.MixedHashTree();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.empty = $root.google.protobuf.Empty.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.fork = $root.messaging.xnet.v1.MixedHashTree.Fork.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.labeled = $root.messaging.xnet.v1.MixedHashTree.Labeled.decode(reader, reader.uint32());
                                break;
                            case 4:
                                message.leafData = reader.bytes();
                                break;
                            case 5:
                                message.prunedDigest = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a MixedHashTree message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {messaging.xnet.v1.MixedHashTree} MixedHashTree
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    MixedHashTree.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a MixedHashTree message.
                     * @function verify
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    MixedHashTree.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        var properties = {};
                        if (message.empty != null && message.hasOwnProperty("empty")) {
                            properties.treeEnum = 1;
                            {
                                var error = $root.google.protobuf.Empty.verify(message.empty);
                                if (error)
                                    return "empty." + error;
                            }
                        }
                        if (message.fork != null && message.hasOwnProperty("fork")) {
                            if (properties.treeEnum === 1)
                                return "treeEnum: multiple values";
                            properties.treeEnum = 1;
                            {
                                var error = $root.messaging.xnet.v1.MixedHashTree.Fork.verify(message.fork);
                                if (error)
                                    return "fork." + error;
                            }
                        }
                        if (message.labeled != null && message.hasOwnProperty("labeled")) {
                            if (properties.treeEnum === 1)
                                return "treeEnum: multiple values";
                            properties.treeEnum = 1;
                            {
                                var error = $root.messaging.xnet.v1.MixedHashTree.Labeled.verify(message.labeled);
                                if (error)
                                    return "labeled." + error;
                            }
                        }
                        if (message.leafData != null && message.hasOwnProperty("leafData")) {
                            if (properties.treeEnum === 1)
                                return "treeEnum: multiple values";
                            properties.treeEnum = 1;
                            if (!(message.leafData && typeof message.leafData.length === "number" || $util.isString(message.leafData)))
                                return "leafData: buffer expected";
                        }
                        if (message.prunedDigest != null && message.hasOwnProperty("prunedDigest")) {
                            if (properties.treeEnum === 1)
                                return "treeEnum: multiple values";
                            properties.treeEnum = 1;
                            if (!(message.prunedDigest && typeof message.prunedDigest.length === "number" || $util.isString(message.prunedDigest)))
                                return "prunedDigest: buffer expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a MixedHashTree message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {messaging.xnet.v1.MixedHashTree} MixedHashTree
                     */
                    MixedHashTree.fromObject = function fromObject(object) {
                        if (object instanceof $root.messaging.xnet.v1.MixedHashTree)
                            return object;
                        var message = new $root.messaging.xnet.v1.MixedHashTree();
                        if (object.empty != null) {
                            if (typeof object.empty !== "object")
                                throw TypeError(".messaging.xnet.v1.MixedHashTree.empty: object expected");
                            message.empty = $root.google.protobuf.Empty.fromObject(object.empty);
                        }
                        if (object.fork != null) {
                            if (typeof object.fork !== "object")
                                throw TypeError(".messaging.xnet.v1.MixedHashTree.fork: object expected");
                            message.fork = $root.messaging.xnet.v1.MixedHashTree.Fork.fromObject(object.fork);
                        }
                        if (object.labeled != null) {
                            if (typeof object.labeled !== "object")
                                throw TypeError(".messaging.xnet.v1.MixedHashTree.labeled: object expected");
                            message.labeled = $root.messaging.xnet.v1.MixedHashTree.Labeled.fromObject(object.labeled);
                        }
                        if (object.leafData != null)
                            if (typeof object.leafData === "string")
                                $util.base64.decode(object.leafData, message.leafData = $util.newBuffer($util.base64.length(object.leafData)), 0);
                            else if (object.leafData.length)
                                message.leafData = object.leafData;
                        if (object.prunedDigest != null)
                            if (typeof object.prunedDigest === "string")
                                $util.base64.decode(object.prunedDigest, message.prunedDigest = $util.newBuffer($util.base64.length(object.prunedDigest)), 0);
                            else if (object.prunedDigest.length)
                                message.prunedDigest = object.prunedDigest;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a MixedHashTree message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @static
                     * @param {messaging.xnet.v1.MixedHashTree} message MixedHashTree
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    MixedHashTree.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (message.empty != null && message.hasOwnProperty("empty")) {
                            object.empty = $root.google.protobuf.Empty.toObject(message.empty, options);
                            if (options.oneofs)
                                object.treeEnum = "empty";
                        }
                        if (message.fork != null && message.hasOwnProperty("fork")) {
                            object.fork = $root.messaging.xnet.v1.MixedHashTree.Fork.toObject(message.fork, options);
                            if (options.oneofs)
                                object.treeEnum = "fork";
                        }
                        if (message.labeled != null && message.hasOwnProperty("labeled")) {
                            object.labeled = $root.messaging.xnet.v1.MixedHashTree.Labeled.toObject(message.labeled, options);
                            if (options.oneofs)
                                object.treeEnum = "labeled";
                        }
                        if (message.leafData != null && message.hasOwnProperty("leafData")) {
                            object.leafData = options.bytes === String ? $util.base64.encode(message.leafData, 0, message.leafData.length) : options.bytes === Array ? Array.prototype.slice.call(message.leafData) : message.leafData;
                            if (options.oneofs)
                                object.treeEnum = "leafData";
                        }
                        if (message.prunedDigest != null && message.hasOwnProperty("prunedDigest")) {
                            object.prunedDigest = options.bytes === String ? $util.base64.encode(message.prunedDigest, 0, message.prunedDigest.length) : options.bytes === Array ? Array.prototype.slice.call(message.prunedDigest) : message.prunedDigest;
                            if (options.oneofs)
                                object.treeEnum = "prunedDigest";
                        }
                        return object;
                    };
    
                    /**
                     * Converts this MixedHashTree to JSON.
                     * @function toJSON
                     * @memberof messaging.xnet.v1.MixedHashTree
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    MixedHashTree.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    MixedHashTree.Fork = (function() {
    
                        /**
                         * Properties of a Fork.
                         * @memberof messaging.xnet.v1.MixedHashTree
                         * @interface IFork
                         * @property {messaging.xnet.v1.IMixedHashTree|null} [leftTree] Fork leftTree
                         * @property {messaging.xnet.v1.IMixedHashTree|null} [rightTree] Fork rightTree
                         */
    
                        /**
                         * Constructs a new Fork.
                         * @memberof messaging.xnet.v1.MixedHashTree
                         * @classdesc Represents a Fork.
                         * @implements IFork
                         * @constructor
                         * @param {messaging.xnet.v1.MixedHashTree.IFork=} [properties] Properties to set
                         */
                        function Fork(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Fork leftTree.
                         * @member {messaging.xnet.v1.IMixedHashTree|null|undefined} leftTree
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @instance
                         */
                        Fork.prototype.leftTree = null;
    
                        /**
                         * Fork rightTree.
                         * @member {messaging.xnet.v1.IMixedHashTree|null|undefined} rightTree
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @instance
                         */
                        Fork.prototype.rightTree = null;
    
                        /**
                         * Creates a new Fork instance using the specified properties.
                         * @function create
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @static
                         * @param {messaging.xnet.v1.MixedHashTree.IFork=} [properties] Properties to set
                         * @returns {messaging.xnet.v1.MixedHashTree.Fork} Fork instance
                         */
                        Fork.create = function create(properties) {
                            return new Fork(properties);
                        };
    
                        /**
                         * Encodes the specified Fork message. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.Fork.verify|verify} messages.
                         * @function encode
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @static
                         * @param {messaging.xnet.v1.MixedHashTree.IFork} message Fork message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Fork.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.leftTree != null && Object.hasOwnProperty.call(message, "leftTree"))
                                $root.messaging.xnet.v1.MixedHashTree.encode(message.leftTree, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                            if (message.rightTree != null && Object.hasOwnProperty.call(message, "rightTree"))
                                $root.messaging.xnet.v1.MixedHashTree.encode(message.rightTree, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Fork message, length delimited. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.Fork.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @static
                         * @param {messaging.xnet.v1.MixedHashTree.IFork} message Fork message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Fork.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Fork message from the specified reader or buffer.
                         * @function decode
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {messaging.xnet.v1.MixedHashTree.Fork} Fork
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Fork.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messaging.xnet.v1.MixedHashTree.Fork();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.leftTree = $root.messaging.xnet.v1.MixedHashTree.decode(reader, reader.uint32());
                                    break;
                                case 2:
                                    message.rightTree = $root.messaging.xnet.v1.MixedHashTree.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a Fork message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {messaging.xnet.v1.MixedHashTree.Fork} Fork
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Fork.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Fork message.
                         * @function verify
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Fork.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.leftTree != null && message.hasOwnProperty("leftTree")) {
                                var error = $root.messaging.xnet.v1.MixedHashTree.verify(message.leftTree);
                                if (error)
                                    return "leftTree." + error;
                            }
                            if (message.rightTree != null && message.hasOwnProperty("rightTree")) {
                                var error = $root.messaging.xnet.v1.MixedHashTree.verify(message.rightTree);
                                if (error)
                                    return "rightTree." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a Fork message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {messaging.xnet.v1.MixedHashTree.Fork} Fork
                         */
                        Fork.fromObject = function fromObject(object) {
                            if (object instanceof $root.messaging.xnet.v1.MixedHashTree.Fork)
                                return object;
                            var message = new $root.messaging.xnet.v1.MixedHashTree.Fork();
                            if (object.leftTree != null) {
                                if (typeof object.leftTree !== "object")
                                    throw TypeError(".messaging.xnet.v1.MixedHashTree.Fork.leftTree: object expected");
                                message.leftTree = $root.messaging.xnet.v1.MixedHashTree.fromObject(object.leftTree);
                            }
                            if (object.rightTree != null) {
                                if (typeof object.rightTree !== "object")
                                    throw TypeError(".messaging.xnet.v1.MixedHashTree.Fork.rightTree: object expected");
                                message.rightTree = $root.messaging.xnet.v1.MixedHashTree.fromObject(object.rightTree);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Fork message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @static
                         * @param {messaging.xnet.v1.MixedHashTree.Fork} message Fork
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Fork.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                object.leftTree = null;
                                object.rightTree = null;
                            }
                            if (message.leftTree != null && message.hasOwnProperty("leftTree"))
                                object.leftTree = $root.messaging.xnet.v1.MixedHashTree.toObject(message.leftTree, options);
                            if (message.rightTree != null && message.hasOwnProperty("rightTree"))
                                object.rightTree = $root.messaging.xnet.v1.MixedHashTree.toObject(message.rightTree, options);
                            return object;
                        };
    
                        /**
                         * Converts this Fork to JSON.
                         * @function toJSON
                         * @memberof messaging.xnet.v1.MixedHashTree.Fork
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Fork.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return Fork;
                    })();
    
                    MixedHashTree.Labeled = (function() {
    
                        /**
                         * Properties of a Labeled.
                         * @memberof messaging.xnet.v1.MixedHashTree
                         * @interface ILabeled
                         * @property {Uint8Array|null} [label] Labeled label
                         * @property {messaging.xnet.v1.IMixedHashTree|null} [subtree] Labeled subtree
                         */
    
                        /**
                         * Constructs a new Labeled.
                         * @memberof messaging.xnet.v1.MixedHashTree
                         * @classdesc Represents a Labeled.
                         * @implements ILabeled
                         * @constructor
                         * @param {messaging.xnet.v1.MixedHashTree.ILabeled=} [properties] Properties to set
                         */
                        function Labeled(properties) {
                            if (properties)
                                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                    if (properties[keys[i]] != null)
                                        this[keys[i]] = properties[keys[i]];
                        }
    
                        /**
                         * Labeled label.
                         * @member {Uint8Array} label
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @instance
                         */
                        Labeled.prototype.label = $util.newBuffer([]);
    
                        /**
                         * Labeled subtree.
                         * @member {messaging.xnet.v1.IMixedHashTree|null|undefined} subtree
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @instance
                         */
                        Labeled.prototype.subtree = null;
    
                        /**
                         * Creates a new Labeled instance using the specified properties.
                         * @function create
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @static
                         * @param {messaging.xnet.v1.MixedHashTree.ILabeled=} [properties] Properties to set
                         * @returns {messaging.xnet.v1.MixedHashTree.Labeled} Labeled instance
                         */
                        Labeled.create = function create(properties) {
                            return new Labeled(properties);
                        };
    
                        /**
                         * Encodes the specified Labeled message. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.Labeled.verify|verify} messages.
                         * @function encode
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @static
                         * @param {messaging.xnet.v1.MixedHashTree.ILabeled} message Labeled message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Labeled.encode = function encode(message, writer) {
                            if (!writer)
                                writer = $Writer.create();
                            if (message.label != null && Object.hasOwnProperty.call(message, "label"))
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.label);
                            if (message.subtree != null && Object.hasOwnProperty.call(message, "subtree"))
                                $root.messaging.xnet.v1.MixedHashTree.encode(message.subtree, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                            return writer;
                        };
    
                        /**
                         * Encodes the specified Labeled message, length delimited. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.Labeled.verify|verify} messages.
                         * @function encodeDelimited
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @static
                         * @param {messaging.xnet.v1.MixedHashTree.ILabeled} message Labeled message or plain object to encode
                         * @param {$protobuf.Writer} [writer] Writer to encode to
                         * @returns {$protobuf.Writer} Writer
                         */
                        Labeled.encodeDelimited = function encodeDelimited(message, writer) {
                            return this.encode(message, writer).ldelim();
                        };
    
                        /**
                         * Decodes a Labeled message from the specified reader or buffer.
                         * @function decode
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @param {number} [length] Message length if known beforehand
                         * @returns {messaging.xnet.v1.MixedHashTree.Labeled} Labeled
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Labeled.decode = function decode(reader, length) {
                            if (!(reader instanceof $Reader))
                                reader = $Reader.create(reader);
                            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messaging.xnet.v1.MixedHashTree.Labeled();
                            while (reader.pos < end) {
                                var tag = reader.uint32();
                                switch (tag >>> 3) {
                                case 1:
                                    message.label = reader.bytes();
                                    break;
                                case 2:
                                    message.subtree = $root.messaging.xnet.v1.MixedHashTree.decode(reader, reader.uint32());
                                    break;
                                default:
                                    reader.skipType(tag & 7);
                                    break;
                                }
                            }
                            return message;
                        };
    
                        /**
                         * Decodes a Labeled message from the specified reader or buffer, length delimited.
                         * @function decodeDelimited
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @static
                         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                         * @returns {messaging.xnet.v1.MixedHashTree.Labeled} Labeled
                         * @throws {Error} If the payload is not a reader or valid buffer
                         * @throws {$protobuf.util.ProtocolError} If required fields are missing
                         */
                        Labeled.decodeDelimited = function decodeDelimited(reader) {
                            if (!(reader instanceof $Reader))
                                reader = new $Reader(reader);
                            return this.decode(reader, reader.uint32());
                        };
    
                        /**
                         * Verifies a Labeled message.
                         * @function verify
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @static
                         * @param {Object.<string,*>} message Plain object to verify
                         * @returns {string|null} `null` if valid, otherwise the reason why it is not
                         */
                        Labeled.verify = function verify(message) {
                            if (typeof message !== "object" || message === null)
                                return "object expected";
                            if (message.label != null && message.hasOwnProperty("label"))
                                if (!(message.label && typeof message.label.length === "number" || $util.isString(message.label)))
                                    return "label: buffer expected";
                            if (message.subtree != null && message.hasOwnProperty("subtree")) {
                                var error = $root.messaging.xnet.v1.MixedHashTree.verify(message.subtree);
                                if (error)
                                    return "subtree." + error;
                            }
                            return null;
                        };
    
                        /**
                         * Creates a Labeled message from a plain object. Also converts values to their respective internal types.
                         * @function fromObject
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @static
                         * @param {Object.<string,*>} object Plain object
                         * @returns {messaging.xnet.v1.MixedHashTree.Labeled} Labeled
                         */
                        Labeled.fromObject = function fromObject(object) {
                            if (object instanceof $root.messaging.xnet.v1.MixedHashTree.Labeled)
                                return object;
                            var message = new $root.messaging.xnet.v1.MixedHashTree.Labeled();
                            if (object.label != null)
                                if (typeof object.label === "string")
                                    $util.base64.decode(object.label, message.label = $util.newBuffer($util.base64.length(object.label)), 0);
                                else if (object.label.length)
                                    message.label = object.label;
                            if (object.subtree != null) {
                                if (typeof object.subtree !== "object")
                                    throw TypeError(".messaging.xnet.v1.MixedHashTree.Labeled.subtree: object expected");
                                message.subtree = $root.messaging.xnet.v1.MixedHashTree.fromObject(object.subtree);
                            }
                            return message;
                        };
    
                        /**
                         * Creates a plain object from a Labeled message. Also converts values to other types if specified.
                         * @function toObject
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @static
                         * @param {messaging.xnet.v1.MixedHashTree.Labeled} message Labeled
                         * @param {$protobuf.IConversionOptions} [options] Conversion options
                         * @returns {Object.<string,*>} Plain object
                         */
                        Labeled.toObject = function toObject(message, options) {
                            if (!options)
                                options = {};
                            var object = {};
                            if (options.defaults) {
                                if (options.bytes === String)
                                    object.label = "";
                                else {
                                    object.label = [];
                                    if (options.bytes !== Array)
                                        object.label = $util.newBuffer(object.label);
                                }
                                object.subtree = null;
                            }
                            if (message.label != null && message.hasOwnProperty("label"))
                                object.label = options.bytes === String ? $util.base64.encode(message.label, 0, message.label.length) : options.bytes === Array ? Array.prototype.slice.call(message.label) : message.label;
                            if (message.subtree != null && message.hasOwnProperty("subtree"))
                                object.subtree = $root.messaging.xnet.v1.MixedHashTree.toObject(message.subtree, options);
                            return object;
                        };
    
                        /**
                         * Converts this Labeled to JSON.
                         * @function toJSON
                         * @memberof messaging.xnet.v1.MixedHashTree.Labeled
                         * @instance
                         * @returns {Object.<string,*>} JSON object
                         */
                        Labeled.prototype.toJSON = function toJSON() {
                            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                        };
    
                        return Labeled;
                    })();
    
                    return MixedHashTree;
                })();
    
                return v1;
            })();
    
            return xnet;
        })();
    
        return messaging;
    })();
    
    $root.registry = (function() {
    
        /**
         * Namespace registry.
         * @exports registry
         * @namespace
         */
        var registry = {};
    
        registry.node = (function() {
    
            /**
             * Namespace node.
             * @memberof registry
             * @namespace
             */
            var node = {};
    
            node.v1 = (function() {
    
                /**
                 * Namespace v1.
                 * @memberof registry.node
                 * @namespace
                 */
                var v1 = {};
    
                v1.ConnectionEndpoint = (function() {
    
                    /**
                     * Properties of a ConnectionEndpoint.
                     * @memberof registry.node.v1
                     * @interface IConnectionEndpoint
                     * @property {string|null} [ipAddr] ConnectionEndpoint ipAddr
                     * @property {number|null} [port] ConnectionEndpoint port
                     * @property {registry.node.v1.ConnectionEndpoint.Protocol|null} [protocol] ConnectionEndpoint protocol
                     */
    
                    /**
                     * Constructs a new ConnectionEndpoint.
                     * @memberof registry.node.v1
                     * @classdesc Represents a ConnectionEndpoint.
                     * @implements IConnectionEndpoint
                     * @constructor
                     * @param {registry.node.v1.IConnectionEndpoint=} [properties] Properties to set
                     */
                    function ConnectionEndpoint(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * ConnectionEndpoint ipAddr.
                     * @member {string} ipAddr
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @instance
                     */
                    ConnectionEndpoint.prototype.ipAddr = "";
    
                    /**
                     * ConnectionEndpoint port.
                     * @member {number} port
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @instance
                     */
                    ConnectionEndpoint.prototype.port = 0;
    
                    /**
                     * ConnectionEndpoint protocol.
                     * @member {registry.node.v1.ConnectionEndpoint.Protocol} protocol
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @instance
                     */
                    ConnectionEndpoint.prototype.protocol = 0;
    
                    /**
                     * Creates a new ConnectionEndpoint instance using the specified properties.
                     * @function create
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @static
                     * @param {registry.node.v1.IConnectionEndpoint=} [properties] Properties to set
                     * @returns {registry.node.v1.ConnectionEndpoint} ConnectionEndpoint instance
                     */
                    ConnectionEndpoint.create = function create(properties) {
                        return new ConnectionEndpoint(properties);
                    };
    
                    /**
                     * Encodes the specified ConnectionEndpoint message. Does not implicitly {@link registry.node.v1.ConnectionEndpoint.verify|verify} messages.
                     * @function encode
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @static
                     * @param {registry.node.v1.IConnectionEndpoint} message ConnectionEndpoint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConnectionEndpoint.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ipAddr != null && Object.hasOwnProperty.call(message, "ipAddr"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.ipAddr);
                        if (message.port != null && Object.hasOwnProperty.call(message, "port"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.port);
                        if (message.protocol != null && Object.hasOwnProperty.call(message, "protocol"))
                            writer.uint32(/* id 4, wireType 0 =*/32).int32(message.protocol);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified ConnectionEndpoint message, length delimited. Does not implicitly {@link registry.node.v1.ConnectionEndpoint.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @static
                     * @param {registry.node.v1.IConnectionEndpoint} message ConnectionEndpoint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    ConnectionEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a ConnectionEndpoint message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.node.v1.ConnectionEndpoint} ConnectionEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConnectionEndpoint.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.node.v1.ConnectionEndpoint();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ipAddr = reader.string();
                                break;
                            case 2:
                                message.port = reader.uint32();
                                break;
                            case 4:
                                message.protocol = reader.int32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a ConnectionEndpoint message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.node.v1.ConnectionEndpoint} ConnectionEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    ConnectionEndpoint.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a ConnectionEndpoint message.
                     * @function verify
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    ConnectionEndpoint.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ipAddr != null && message.hasOwnProperty("ipAddr"))
                            if (!$util.isString(message.ipAddr))
                                return "ipAddr: string expected";
                        if (message.port != null && message.hasOwnProperty("port"))
                            if (!$util.isInteger(message.port))
                                return "port: integer expected";
                        if (message.protocol != null && message.hasOwnProperty("protocol"))
                            switch (message.protocol) {
                            default:
                                return "protocol: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                                break;
                            }
                        return null;
                    };
    
                    /**
                     * Creates a ConnectionEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.node.v1.ConnectionEndpoint} ConnectionEndpoint
                     */
                    ConnectionEndpoint.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.node.v1.ConnectionEndpoint)
                            return object;
                        var message = new $root.registry.node.v1.ConnectionEndpoint();
                        if (object.ipAddr != null)
                            message.ipAddr = String(object.ipAddr);
                        if (object.port != null)
                            message.port = object.port >>> 0;
                        switch (object.protocol) {
                        case "PROTOCOL_UNSPECIFIED":
                        case 0:
                            message.protocol = 0;
                            break;
                        case "PROTOCOL_HTTP1":
                        case 1:
                            message.protocol = 1;
                            break;
                        case "PROTOCOL_HTTP1_TLS_1_3":
                        case 2:
                            message.protocol = 2;
                            break;
                        case "PROTOCOL_P2P1_TLS_1_3":
                        case 3:
                            message.protocol = 3;
                            break;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a ConnectionEndpoint message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @static
                     * @param {registry.node.v1.ConnectionEndpoint} message ConnectionEndpoint
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    ConnectionEndpoint.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.ipAddr = "";
                            object.port = 0;
                            object.protocol = options.enums === String ? "PROTOCOL_UNSPECIFIED" : 0;
                        }
                        if (message.ipAddr != null && message.hasOwnProperty("ipAddr"))
                            object.ipAddr = message.ipAddr;
                        if (message.port != null && message.hasOwnProperty("port"))
                            object.port = message.port;
                        if (message.protocol != null && message.hasOwnProperty("protocol"))
                            object.protocol = options.enums === String ? $root.registry.node.v1.ConnectionEndpoint.Protocol[message.protocol] : message.protocol;
                        return object;
                    };
    
                    /**
                     * Converts this ConnectionEndpoint to JSON.
                     * @function toJSON
                     * @memberof registry.node.v1.ConnectionEndpoint
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    ConnectionEndpoint.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Protocol enum.
                     * @name registry.node.v1.ConnectionEndpoint.Protocol
                     * @enum {number}
                     * @property {number} PROTOCOL_UNSPECIFIED=0 PROTOCOL_UNSPECIFIED value
                     * @property {number} PROTOCOL_HTTP1=1 PROTOCOL_HTTP1 value
                     * @property {number} PROTOCOL_HTTP1_TLS_1_3=2 PROTOCOL_HTTP1_TLS_1_3 value
                     * @property {number} PROTOCOL_P2P1_TLS_1_3=3 PROTOCOL_P2P1_TLS_1_3 value
                     */
                    ConnectionEndpoint.Protocol = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "PROTOCOL_UNSPECIFIED"] = 0;
                        values[valuesById[1] = "PROTOCOL_HTTP1"] = 1;
                        values[valuesById[2] = "PROTOCOL_HTTP1_TLS_1_3"] = 2;
                        values[valuesById[3] = "PROTOCOL_P2P1_TLS_1_3"] = 3;
                        return values;
                    })();
    
                    return ConnectionEndpoint;
                })();
    
                v1.FlowEndpoint = (function() {
    
                    /**
                     * Properties of a FlowEndpoint.
                     * @memberof registry.node.v1
                     * @interface IFlowEndpoint
                     * @property {number|null} [flowTag] FlowEndpoint flowTag
                     * @property {registry.node.v1.IConnectionEndpoint|null} [endpoint] FlowEndpoint endpoint
                     */
    
                    /**
                     * Constructs a new FlowEndpoint.
                     * @memberof registry.node.v1
                     * @classdesc Represents a FlowEndpoint.
                     * @implements IFlowEndpoint
                     * @constructor
                     * @param {registry.node.v1.IFlowEndpoint=} [properties] Properties to set
                     */
                    function FlowEndpoint(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * FlowEndpoint flowTag.
                     * @member {number} flowTag
                     * @memberof registry.node.v1.FlowEndpoint
                     * @instance
                     */
                    FlowEndpoint.prototype.flowTag = 0;
    
                    /**
                     * FlowEndpoint endpoint.
                     * @member {registry.node.v1.IConnectionEndpoint|null|undefined} endpoint
                     * @memberof registry.node.v1.FlowEndpoint
                     * @instance
                     */
                    FlowEndpoint.prototype.endpoint = null;
    
                    /**
                     * Creates a new FlowEndpoint instance using the specified properties.
                     * @function create
                     * @memberof registry.node.v1.FlowEndpoint
                     * @static
                     * @param {registry.node.v1.IFlowEndpoint=} [properties] Properties to set
                     * @returns {registry.node.v1.FlowEndpoint} FlowEndpoint instance
                     */
                    FlowEndpoint.create = function create(properties) {
                        return new FlowEndpoint(properties);
                    };
    
                    /**
                     * Encodes the specified FlowEndpoint message. Does not implicitly {@link registry.node.v1.FlowEndpoint.verify|verify} messages.
                     * @function encode
                     * @memberof registry.node.v1.FlowEndpoint
                     * @static
                     * @param {registry.node.v1.IFlowEndpoint} message FlowEndpoint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FlowEndpoint.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.flowTag != null && Object.hasOwnProperty.call(message, "flowTag"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.flowTag);
                        if (message.endpoint != null && Object.hasOwnProperty.call(message, "endpoint"))
                            $root.registry.node.v1.ConnectionEndpoint.encode(message.endpoint, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified FlowEndpoint message, length delimited. Does not implicitly {@link registry.node.v1.FlowEndpoint.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.node.v1.FlowEndpoint
                     * @static
                     * @param {registry.node.v1.IFlowEndpoint} message FlowEndpoint message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    FlowEndpoint.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a FlowEndpoint message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.node.v1.FlowEndpoint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.node.v1.FlowEndpoint} FlowEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FlowEndpoint.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.node.v1.FlowEndpoint();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.flowTag = reader.uint32();
                                break;
                            case 2:
                                message.endpoint = $root.registry.node.v1.ConnectionEndpoint.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a FlowEndpoint message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.node.v1.FlowEndpoint
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.node.v1.FlowEndpoint} FlowEndpoint
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    FlowEndpoint.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a FlowEndpoint message.
                     * @function verify
                     * @memberof registry.node.v1.FlowEndpoint
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    FlowEndpoint.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.flowTag != null && message.hasOwnProperty("flowTag"))
                            if (!$util.isInteger(message.flowTag))
                                return "flowTag: integer expected";
                        if (message.endpoint != null && message.hasOwnProperty("endpoint")) {
                            var error = $root.registry.node.v1.ConnectionEndpoint.verify(message.endpoint);
                            if (error)
                                return "endpoint." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a FlowEndpoint message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.node.v1.FlowEndpoint
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.node.v1.FlowEndpoint} FlowEndpoint
                     */
                    FlowEndpoint.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.node.v1.FlowEndpoint)
                            return object;
                        var message = new $root.registry.node.v1.FlowEndpoint();
                        if (object.flowTag != null)
                            message.flowTag = object.flowTag >>> 0;
                        if (object.endpoint != null) {
                            if (typeof object.endpoint !== "object")
                                throw TypeError(".registry.node.v1.FlowEndpoint.endpoint: object expected");
                            message.endpoint = $root.registry.node.v1.ConnectionEndpoint.fromObject(object.endpoint);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a FlowEndpoint message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.node.v1.FlowEndpoint
                     * @static
                     * @param {registry.node.v1.FlowEndpoint} message FlowEndpoint
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    FlowEndpoint.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.flowTag = 0;
                            object.endpoint = null;
                        }
                        if (message.flowTag != null && message.hasOwnProperty("flowTag"))
                            object.flowTag = message.flowTag;
                        if (message.endpoint != null && message.hasOwnProperty("endpoint"))
                            object.endpoint = $root.registry.node.v1.ConnectionEndpoint.toObject(message.endpoint, options);
                        return object;
                    };
    
                    /**
                     * Converts this FlowEndpoint to JSON.
                     * @function toJSON
                     * @memberof registry.node.v1.FlowEndpoint
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    FlowEndpoint.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return FlowEndpoint;
                })();
    
                v1.NodeRecord = (function() {
    
                    /**
                     * Properties of a NodeRecord.
                     * @memberof registry.node.v1
                     * @interface INodeRecord
                     * @property {registry.node.v1.IConnectionEndpoint|null} [xnet] NodeRecord xnet
                     * @property {registry.node.v1.IConnectionEndpoint|null} [http] NodeRecord http
                     * @property {Array.<registry.node.v1.IFlowEndpoint>|null} [p2pFlowEndpoints] NodeRecord p2pFlowEndpoints
                     * @property {registry.node.v1.IConnectionEndpoint|null} [prometheusMetricsHttp] NodeRecord prometheusMetricsHttp
                     * @property {Array.<registry.node.v1.IConnectionEndpoint>|null} [publicApi] NodeRecord publicApi
                     * @property {Array.<registry.node.v1.IConnectionEndpoint>|null} [privateApi] NodeRecord privateApi
                     * @property {Array.<registry.node.v1.IConnectionEndpoint>|null} [prometheusMetrics] NodeRecord prometheusMetrics
                     * @property {Array.<registry.node.v1.IConnectionEndpoint>|null} [xnetApi] NodeRecord xnetApi
                     * @property {Uint8Array|null} [nodeOperatorId] NodeRecord nodeOperatorId
                     */
    
                    /**
                     * Constructs a new NodeRecord.
                     * @memberof registry.node.v1
                     * @classdesc Represents a NodeRecord.
                     * @implements INodeRecord
                     * @constructor
                     * @param {registry.node.v1.INodeRecord=} [properties] Properties to set
                     */
                    function NodeRecord(properties) {
                        this.p2pFlowEndpoints = [];
                        this.publicApi = [];
                        this.privateApi = [];
                        this.prometheusMetrics = [];
                        this.xnetApi = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NodeRecord xnet.
                     * @member {registry.node.v1.IConnectionEndpoint|null|undefined} xnet
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.xnet = null;
    
                    /**
                     * NodeRecord http.
                     * @member {registry.node.v1.IConnectionEndpoint|null|undefined} http
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.http = null;
    
                    /**
                     * NodeRecord p2pFlowEndpoints.
                     * @member {Array.<registry.node.v1.IFlowEndpoint>} p2pFlowEndpoints
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.p2pFlowEndpoints = $util.emptyArray;
    
                    /**
                     * NodeRecord prometheusMetricsHttp.
                     * @member {registry.node.v1.IConnectionEndpoint|null|undefined} prometheusMetricsHttp
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.prometheusMetricsHttp = null;
    
                    /**
                     * NodeRecord publicApi.
                     * @member {Array.<registry.node.v1.IConnectionEndpoint>} publicApi
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.publicApi = $util.emptyArray;
    
                    /**
                     * NodeRecord privateApi.
                     * @member {Array.<registry.node.v1.IConnectionEndpoint>} privateApi
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.privateApi = $util.emptyArray;
    
                    /**
                     * NodeRecord prometheusMetrics.
                     * @member {Array.<registry.node.v1.IConnectionEndpoint>} prometheusMetrics
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.prometheusMetrics = $util.emptyArray;
    
                    /**
                     * NodeRecord xnetApi.
                     * @member {Array.<registry.node.v1.IConnectionEndpoint>} xnetApi
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.xnetApi = $util.emptyArray;
    
                    /**
                     * NodeRecord nodeOperatorId.
                     * @member {Uint8Array} nodeOperatorId
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     */
                    NodeRecord.prototype.nodeOperatorId = $util.newBuffer([]);
    
                    /**
                     * Creates a new NodeRecord instance using the specified properties.
                     * @function create
                     * @memberof registry.node.v1.NodeRecord
                     * @static
                     * @param {registry.node.v1.INodeRecord=} [properties] Properties to set
                     * @returns {registry.node.v1.NodeRecord} NodeRecord instance
                     */
                    NodeRecord.create = function create(properties) {
                        return new NodeRecord(properties);
                    };
    
                    /**
                     * Encodes the specified NodeRecord message. Does not implicitly {@link registry.node.v1.NodeRecord.verify|verify} messages.
                     * @function encode
                     * @memberof registry.node.v1.NodeRecord
                     * @static
                     * @param {registry.node.v1.INodeRecord} message NodeRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NodeRecord.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.xnet != null && Object.hasOwnProperty.call(message, "xnet"))
                            $root.registry.node.v1.ConnectionEndpoint.encode(message.xnet, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        if (message.http != null && Object.hasOwnProperty.call(message, "http"))
                            $root.registry.node.v1.ConnectionEndpoint.encode(message.http, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        if (message.p2pFlowEndpoints != null && message.p2pFlowEndpoints.length)
                            for (var i = 0; i < message.p2pFlowEndpoints.length; ++i)
                                $root.registry.node.v1.FlowEndpoint.encode(message.p2pFlowEndpoints[i], writer.uint32(/* id 8, wireType 2 =*/66).fork()).ldelim();
                        if (message.prometheusMetricsHttp != null && Object.hasOwnProperty.call(message, "prometheusMetricsHttp"))
                            $root.registry.node.v1.ConnectionEndpoint.encode(message.prometheusMetricsHttp, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        if (message.publicApi != null && message.publicApi.length)
                            for (var i = 0; i < message.publicApi.length; ++i)
                                $root.registry.node.v1.ConnectionEndpoint.encode(message.publicApi[i], writer.uint32(/* id 11, wireType 2 =*/90).fork()).ldelim();
                        if (message.privateApi != null && message.privateApi.length)
                            for (var i = 0; i < message.privateApi.length; ++i)
                                $root.registry.node.v1.ConnectionEndpoint.encode(message.privateApi[i], writer.uint32(/* id 12, wireType 2 =*/98).fork()).ldelim();
                        if (message.prometheusMetrics != null && message.prometheusMetrics.length)
                            for (var i = 0; i < message.prometheusMetrics.length; ++i)
                                $root.registry.node.v1.ConnectionEndpoint.encode(message.prometheusMetrics[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        if (message.xnetApi != null && message.xnetApi.length)
                            for (var i = 0; i < message.xnetApi.length; ++i)
                                $root.registry.node.v1.ConnectionEndpoint.encode(message.xnetApi[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
                        if (message.nodeOperatorId != null && Object.hasOwnProperty.call(message, "nodeOperatorId"))
                            writer.uint32(/* id 15, wireType 2 =*/122).bytes(message.nodeOperatorId);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NodeRecord message, length delimited. Does not implicitly {@link registry.node.v1.NodeRecord.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.node.v1.NodeRecord
                     * @static
                     * @param {registry.node.v1.INodeRecord} message NodeRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NodeRecord.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NodeRecord message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.node.v1.NodeRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.node.v1.NodeRecord} NodeRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NodeRecord.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.node.v1.NodeRecord();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 5:
                                message.xnet = $root.registry.node.v1.ConnectionEndpoint.decode(reader, reader.uint32());
                                break;
                            case 6:
                                message.http = $root.registry.node.v1.ConnectionEndpoint.decode(reader, reader.uint32());
                                break;
                            case 8:
                                if (!(message.p2pFlowEndpoints && message.p2pFlowEndpoints.length))
                                    message.p2pFlowEndpoints = [];
                                message.p2pFlowEndpoints.push($root.registry.node.v1.FlowEndpoint.decode(reader, reader.uint32()));
                                break;
                            case 10:
                                message.prometheusMetricsHttp = $root.registry.node.v1.ConnectionEndpoint.decode(reader, reader.uint32());
                                break;
                            case 11:
                                if (!(message.publicApi && message.publicApi.length))
                                    message.publicApi = [];
                                message.publicApi.push($root.registry.node.v1.ConnectionEndpoint.decode(reader, reader.uint32()));
                                break;
                            case 12:
                                if (!(message.privateApi && message.privateApi.length))
                                    message.privateApi = [];
                                message.privateApi.push($root.registry.node.v1.ConnectionEndpoint.decode(reader, reader.uint32()));
                                break;
                            case 13:
                                if (!(message.prometheusMetrics && message.prometheusMetrics.length))
                                    message.prometheusMetrics = [];
                                message.prometheusMetrics.push($root.registry.node.v1.ConnectionEndpoint.decode(reader, reader.uint32()));
                                break;
                            case 14:
                                if (!(message.xnetApi && message.xnetApi.length))
                                    message.xnetApi = [];
                                message.xnetApi.push($root.registry.node.v1.ConnectionEndpoint.decode(reader, reader.uint32()));
                                break;
                            case 15:
                                message.nodeOperatorId = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a NodeRecord message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.node.v1.NodeRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.node.v1.NodeRecord} NodeRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NodeRecord.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NodeRecord message.
                     * @function verify
                     * @memberof registry.node.v1.NodeRecord
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NodeRecord.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.xnet != null && message.hasOwnProperty("xnet")) {
                            var error = $root.registry.node.v1.ConnectionEndpoint.verify(message.xnet);
                            if (error)
                                return "xnet." + error;
                        }
                        if (message.http != null && message.hasOwnProperty("http")) {
                            var error = $root.registry.node.v1.ConnectionEndpoint.verify(message.http);
                            if (error)
                                return "http." + error;
                        }
                        if (message.p2pFlowEndpoints != null && message.hasOwnProperty("p2pFlowEndpoints")) {
                            if (!Array.isArray(message.p2pFlowEndpoints))
                                return "p2pFlowEndpoints: array expected";
                            for (var i = 0; i < message.p2pFlowEndpoints.length; ++i) {
                                var error = $root.registry.node.v1.FlowEndpoint.verify(message.p2pFlowEndpoints[i]);
                                if (error)
                                    return "p2pFlowEndpoints." + error;
                            }
                        }
                        if (message.prometheusMetricsHttp != null && message.hasOwnProperty("prometheusMetricsHttp")) {
                            var error = $root.registry.node.v1.ConnectionEndpoint.verify(message.prometheusMetricsHttp);
                            if (error)
                                return "prometheusMetricsHttp." + error;
                        }
                        if (message.publicApi != null && message.hasOwnProperty("publicApi")) {
                            if (!Array.isArray(message.publicApi))
                                return "publicApi: array expected";
                            for (var i = 0; i < message.publicApi.length; ++i) {
                                var error = $root.registry.node.v1.ConnectionEndpoint.verify(message.publicApi[i]);
                                if (error)
                                    return "publicApi." + error;
                            }
                        }
                        if (message.privateApi != null && message.hasOwnProperty("privateApi")) {
                            if (!Array.isArray(message.privateApi))
                                return "privateApi: array expected";
                            for (var i = 0; i < message.privateApi.length; ++i) {
                                var error = $root.registry.node.v1.ConnectionEndpoint.verify(message.privateApi[i]);
                                if (error)
                                    return "privateApi." + error;
                            }
                        }
                        if (message.prometheusMetrics != null && message.hasOwnProperty("prometheusMetrics")) {
                            if (!Array.isArray(message.prometheusMetrics))
                                return "prometheusMetrics: array expected";
                            for (var i = 0; i < message.prometheusMetrics.length; ++i) {
                                var error = $root.registry.node.v1.ConnectionEndpoint.verify(message.prometheusMetrics[i]);
                                if (error)
                                    return "prometheusMetrics." + error;
                            }
                        }
                        if (message.xnetApi != null && message.hasOwnProperty("xnetApi")) {
                            if (!Array.isArray(message.xnetApi))
                                return "xnetApi: array expected";
                            for (var i = 0; i < message.xnetApi.length; ++i) {
                                var error = $root.registry.node.v1.ConnectionEndpoint.verify(message.xnetApi[i]);
                                if (error)
                                    return "xnetApi." + error;
                            }
                        }
                        if (message.nodeOperatorId != null && message.hasOwnProperty("nodeOperatorId"))
                            if (!(message.nodeOperatorId && typeof message.nodeOperatorId.length === "number" || $util.isString(message.nodeOperatorId)))
                                return "nodeOperatorId: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates a NodeRecord message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.node.v1.NodeRecord
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.node.v1.NodeRecord} NodeRecord
                     */
                    NodeRecord.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.node.v1.NodeRecord)
                            return object;
                        var message = new $root.registry.node.v1.NodeRecord();
                        if (object.xnet != null) {
                            if (typeof object.xnet !== "object")
                                throw TypeError(".registry.node.v1.NodeRecord.xnet: object expected");
                            message.xnet = $root.registry.node.v1.ConnectionEndpoint.fromObject(object.xnet);
                        }
                        if (object.http != null) {
                            if (typeof object.http !== "object")
                                throw TypeError(".registry.node.v1.NodeRecord.http: object expected");
                            message.http = $root.registry.node.v1.ConnectionEndpoint.fromObject(object.http);
                        }
                        if (object.p2pFlowEndpoints) {
                            if (!Array.isArray(object.p2pFlowEndpoints))
                                throw TypeError(".registry.node.v1.NodeRecord.p2pFlowEndpoints: array expected");
                            message.p2pFlowEndpoints = [];
                            for (var i = 0; i < object.p2pFlowEndpoints.length; ++i) {
                                if (typeof object.p2pFlowEndpoints[i] !== "object")
                                    throw TypeError(".registry.node.v1.NodeRecord.p2pFlowEndpoints: object expected");
                                message.p2pFlowEndpoints[i] = $root.registry.node.v1.FlowEndpoint.fromObject(object.p2pFlowEndpoints[i]);
                            }
                        }
                        if (object.prometheusMetricsHttp != null) {
                            if (typeof object.prometheusMetricsHttp !== "object")
                                throw TypeError(".registry.node.v1.NodeRecord.prometheusMetricsHttp: object expected");
                            message.prometheusMetricsHttp = $root.registry.node.v1.ConnectionEndpoint.fromObject(object.prometheusMetricsHttp);
                        }
                        if (object.publicApi) {
                            if (!Array.isArray(object.publicApi))
                                throw TypeError(".registry.node.v1.NodeRecord.publicApi: array expected");
                            message.publicApi = [];
                            for (var i = 0; i < object.publicApi.length; ++i) {
                                if (typeof object.publicApi[i] !== "object")
                                    throw TypeError(".registry.node.v1.NodeRecord.publicApi: object expected");
                                message.publicApi[i] = $root.registry.node.v1.ConnectionEndpoint.fromObject(object.publicApi[i]);
                            }
                        }
                        if (object.privateApi) {
                            if (!Array.isArray(object.privateApi))
                                throw TypeError(".registry.node.v1.NodeRecord.privateApi: array expected");
                            message.privateApi = [];
                            for (var i = 0; i < object.privateApi.length; ++i) {
                                if (typeof object.privateApi[i] !== "object")
                                    throw TypeError(".registry.node.v1.NodeRecord.privateApi: object expected");
                                message.privateApi[i] = $root.registry.node.v1.ConnectionEndpoint.fromObject(object.privateApi[i]);
                            }
                        }
                        if (object.prometheusMetrics) {
                            if (!Array.isArray(object.prometheusMetrics))
                                throw TypeError(".registry.node.v1.NodeRecord.prometheusMetrics: array expected");
                            message.prometheusMetrics = [];
                            for (var i = 0; i < object.prometheusMetrics.length; ++i) {
                                if (typeof object.prometheusMetrics[i] !== "object")
                                    throw TypeError(".registry.node.v1.NodeRecord.prometheusMetrics: object expected");
                                message.prometheusMetrics[i] = $root.registry.node.v1.ConnectionEndpoint.fromObject(object.prometheusMetrics[i]);
                            }
                        }
                        if (object.xnetApi) {
                            if (!Array.isArray(object.xnetApi))
                                throw TypeError(".registry.node.v1.NodeRecord.xnetApi: array expected");
                            message.xnetApi = [];
                            for (var i = 0; i < object.xnetApi.length; ++i) {
                                if (typeof object.xnetApi[i] !== "object")
                                    throw TypeError(".registry.node.v1.NodeRecord.xnetApi: object expected");
                                message.xnetApi[i] = $root.registry.node.v1.ConnectionEndpoint.fromObject(object.xnetApi[i]);
                            }
                        }
                        if (object.nodeOperatorId != null)
                            if (typeof object.nodeOperatorId === "string")
                                $util.base64.decode(object.nodeOperatorId, message.nodeOperatorId = $util.newBuffer($util.base64.length(object.nodeOperatorId)), 0);
                            else if (object.nodeOperatorId.length)
                                message.nodeOperatorId = object.nodeOperatorId;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NodeRecord message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.node.v1.NodeRecord
                     * @static
                     * @param {registry.node.v1.NodeRecord} message NodeRecord
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NodeRecord.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.p2pFlowEndpoints = [];
                            object.publicApi = [];
                            object.privateApi = [];
                            object.prometheusMetrics = [];
                            object.xnetApi = [];
                        }
                        if (options.defaults) {
                            object.xnet = null;
                            object.http = null;
                            object.prometheusMetricsHttp = null;
                            if (options.bytes === String)
                                object.nodeOperatorId = "";
                            else {
                                object.nodeOperatorId = [];
                                if (options.bytes !== Array)
                                    object.nodeOperatorId = $util.newBuffer(object.nodeOperatorId);
                            }
                        }
                        if (message.xnet != null && message.hasOwnProperty("xnet"))
                            object.xnet = $root.registry.node.v1.ConnectionEndpoint.toObject(message.xnet, options);
                        if (message.http != null && message.hasOwnProperty("http"))
                            object.http = $root.registry.node.v1.ConnectionEndpoint.toObject(message.http, options);
                        if (message.p2pFlowEndpoints && message.p2pFlowEndpoints.length) {
                            object.p2pFlowEndpoints = [];
                            for (var j = 0; j < message.p2pFlowEndpoints.length; ++j)
                                object.p2pFlowEndpoints[j] = $root.registry.node.v1.FlowEndpoint.toObject(message.p2pFlowEndpoints[j], options);
                        }
                        if (message.prometheusMetricsHttp != null && message.hasOwnProperty("prometheusMetricsHttp"))
                            object.prometheusMetricsHttp = $root.registry.node.v1.ConnectionEndpoint.toObject(message.prometheusMetricsHttp, options);
                        if (message.publicApi && message.publicApi.length) {
                            object.publicApi = [];
                            for (var j = 0; j < message.publicApi.length; ++j)
                                object.publicApi[j] = $root.registry.node.v1.ConnectionEndpoint.toObject(message.publicApi[j], options);
                        }
                        if (message.privateApi && message.privateApi.length) {
                            object.privateApi = [];
                            for (var j = 0; j < message.privateApi.length; ++j)
                                object.privateApi[j] = $root.registry.node.v1.ConnectionEndpoint.toObject(message.privateApi[j], options);
                        }
                        if (message.prometheusMetrics && message.prometheusMetrics.length) {
                            object.prometheusMetrics = [];
                            for (var j = 0; j < message.prometheusMetrics.length; ++j)
                                object.prometheusMetrics[j] = $root.registry.node.v1.ConnectionEndpoint.toObject(message.prometheusMetrics[j], options);
                        }
                        if (message.xnetApi && message.xnetApi.length) {
                            object.xnetApi = [];
                            for (var j = 0; j < message.xnetApi.length; ++j)
                                object.xnetApi[j] = $root.registry.node.v1.ConnectionEndpoint.toObject(message.xnetApi[j], options);
                        }
                        if (message.nodeOperatorId != null && message.hasOwnProperty("nodeOperatorId"))
                            object.nodeOperatorId = options.bytes === String ? $util.base64.encode(message.nodeOperatorId, 0, message.nodeOperatorId.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeOperatorId) : message.nodeOperatorId;
                        return object;
                    };
    
                    /**
                     * Converts this NodeRecord to JSON.
                     * @function toJSON
                     * @memberof registry.node.v1.NodeRecord
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NodeRecord.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NodeRecord;
                })();
    
                return v1;
            })();
    
            return node;
        })();
    
        registry.node_operator = (function() {
    
            /**
             * Namespace node_operator.
             * @memberof registry
             * @namespace
             */
            var node_operator = {};
    
            node_operator.v1 = (function() {
    
                /**
                 * Namespace v1.
                 * @memberof registry.node_operator
                 * @namespace
                 */
                var v1 = {};
    
                v1.NodeOperatorRecord = (function() {
    
                    /**
                     * Properties of a NodeOperatorRecord.
                     * @memberof registry.node_operator.v1
                     * @interface INodeOperatorRecord
                     * @property {Uint8Array|null} [nodeOperatorPrincipalId] NodeOperatorRecord nodeOperatorPrincipalId
                     * @property {number|Long|null} [nodeAllowance] NodeOperatorRecord nodeAllowance
                     * @property {Uint8Array|null} [nodeProviderPrincipalId] NodeOperatorRecord nodeProviderPrincipalId
                     * @property {string|null} [dcId] NodeOperatorRecord dcId
                     * @property {Object.<string,number>|null} [rewardableNodes] NodeOperatorRecord rewardableNodes
                     */
    
                    /**
                     * Constructs a new NodeOperatorRecord.
                     * @memberof registry.node_operator.v1
                     * @classdesc Represents a NodeOperatorRecord.
                     * @implements INodeOperatorRecord
                     * @constructor
                     * @param {registry.node_operator.v1.INodeOperatorRecord=} [properties] Properties to set
                     */
                    function NodeOperatorRecord(properties) {
                        this.rewardableNodes = {};
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * NodeOperatorRecord nodeOperatorPrincipalId.
                     * @member {Uint8Array} nodeOperatorPrincipalId
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @instance
                     */
                    NodeOperatorRecord.prototype.nodeOperatorPrincipalId = $util.newBuffer([]);
    
                    /**
                     * NodeOperatorRecord nodeAllowance.
                     * @member {number|Long} nodeAllowance
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @instance
                     */
                    NodeOperatorRecord.prototype.nodeAllowance = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * NodeOperatorRecord nodeProviderPrincipalId.
                     * @member {Uint8Array} nodeProviderPrincipalId
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @instance
                     */
                    NodeOperatorRecord.prototype.nodeProviderPrincipalId = $util.newBuffer([]);
    
                    /**
                     * NodeOperatorRecord dcId.
                     * @member {string} dcId
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @instance
                     */
                    NodeOperatorRecord.prototype.dcId = "";
    
                    /**
                     * NodeOperatorRecord rewardableNodes.
                     * @member {Object.<string,number>} rewardableNodes
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @instance
                     */
                    NodeOperatorRecord.prototype.rewardableNodes = $util.emptyObject;
    
                    /**
                     * Creates a new NodeOperatorRecord instance using the specified properties.
                     * @function create
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @static
                     * @param {registry.node_operator.v1.INodeOperatorRecord=} [properties] Properties to set
                     * @returns {registry.node_operator.v1.NodeOperatorRecord} NodeOperatorRecord instance
                     */
                    NodeOperatorRecord.create = function create(properties) {
                        return new NodeOperatorRecord(properties);
                    };
    
                    /**
                     * Encodes the specified NodeOperatorRecord message. Does not implicitly {@link registry.node_operator.v1.NodeOperatorRecord.verify|verify} messages.
                     * @function encode
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @static
                     * @param {registry.node_operator.v1.INodeOperatorRecord} message NodeOperatorRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NodeOperatorRecord.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nodeOperatorPrincipalId != null && Object.hasOwnProperty.call(message, "nodeOperatorPrincipalId"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nodeOperatorPrincipalId);
                        if (message.nodeAllowance != null && Object.hasOwnProperty.call(message, "nodeAllowance"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.nodeAllowance);
                        if (message.nodeProviderPrincipalId != null && Object.hasOwnProperty.call(message, "nodeProviderPrincipalId"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.nodeProviderPrincipalId);
                        if (message.dcId != null && Object.hasOwnProperty.call(message, "dcId"))
                            writer.uint32(/* id 4, wireType 2 =*/34).string(message.dcId);
                        if (message.rewardableNodes != null && Object.hasOwnProperty.call(message, "rewardableNodes"))
                            for (var keys = Object.keys(message.rewardableNodes), i = 0; i < keys.length; ++i)
                                writer.uint32(/* id 5, wireType 2 =*/42).fork().uint32(/* id 1, wireType 2 =*/10).string(keys[i]).uint32(/* id 2, wireType 0 =*/16).uint32(message.rewardableNodes[keys[i]]).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified NodeOperatorRecord message, length delimited. Does not implicitly {@link registry.node_operator.v1.NodeOperatorRecord.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @static
                     * @param {registry.node_operator.v1.INodeOperatorRecord} message NodeOperatorRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    NodeOperatorRecord.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a NodeOperatorRecord message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.node_operator.v1.NodeOperatorRecord} NodeOperatorRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NodeOperatorRecord.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.node_operator.v1.NodeOperatorRecord(), key, value;
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.nodeOperatorPrincipalId = reader.bytes();
                                break;
                            case 2:
                                message.nodeAllowance = reader.uint64();
                                break;
                            case 3:
                                message.nodeProviderPrincipalId = reader.bytes();
                                break;
                            case 4:
                                message.dcId = reader.string();
                                break;
                            case 5:
                                if (message.rewardableNodes === $util.emptyObject)
                                    message.rewardableNodes = {};
                                var end2 = reader.uint32() + reader.pos;
                                key = "";
                                value = 0;
                                while (reader.pos < end2) {
                                    var tag2 = reader.uint32();
                                    switch (tag2 >>> 3) {
                                    case 1:
                                        key = reader.string();
                                        break;
                                    case 2:
                                        value = reader.uint32();
                                        break;
                                    default:
                                        reader.skipType(tag2 & 7);
                                        break;
                                    }
                                }
                                message.rewardableNodes[key] = value;
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a NodeOperatorRecord message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.node_operator.v1.NodeOperatorRecord} NodeOperatorRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    NodeOperatorRecord.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a NodeOperatorRecord message.
                     * @function verify
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    NodeOperatorRecord.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.nodeOperatorPrincipalId != null && message.hasOwnProperty("nodeOperatorPrincipalId"))
                            if (!(message.nodeOperatorPrincipalId && typeof message.nodeOperatorPrincipalId.length === "number" || $util.isString(message.nodeOperatorPrincipalId)))
                                return "nodeOperatorPrincipalId: buffer expected";
                        if (message.nodeAllowance != null && message.hasOwnProperty("nodeAllowance"))
                            if (!$util.isInteger(message.nodeAllowance) && !(message.nodeAllowance && $util.isInteger(message.nodeAllowance.low) && $util.isInteger(message.nodeAllowance.high)))
                                return "nodeAllowance: integer|Long expected";
                        if (message.nodeProviderPrincipalId != null && message.hasOwnProperty("nodeProviderPrincipalId"))
                            if (!(message.nodeProviderPrincipalId && typeof message.nodeProviderPrincipalId.length === "number" || $util.isString(message.nodeProviderPrincipalId)))
                                return "nodeProviderPrincipalId: buffer expected";
                        if (message.dcId != null && message.hasOwnProperty("dcId"))
                            if (!$util.isString(message.dcId))
                                return "dcId: string expected";
                        if (message.rewardableNodes != null && message.hasOwnProperty("rewardableNodes")) {
                            if (!$util.isObject(message.rewardableNodes))
                                return "rewardableNodes: object expected";
                            var key = Object.keys(message.rewardableNodes);
                            for (var i = 0; i < key.length; ++i)
                                if (!$util.isInteger(message.rewardableNodes[key[i]]))
                                    return "rewardableNodes: integer{k:string} expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a NodeOperatorRecord message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.node_operator.v1.NodeOperatorRecord} NodeOperatorRecord
                     */
                    NodeOperatorRecord.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.node_operator.v1.NodeOperatorRecord)
                            return object;
                        var message = new $root.registry.node_operator.v1.NodeOperatorRecord();
                        if (object.nodeOperatorPrincipalId != null)
                            if (typeof object.nodeOperatorPrincipalId === "string")
                                $util.base64.decode(object.nodeOperatorPrincipalId, message.nodeOperatorPrincipalId = $util.newBuffer($util.base64.length(object.nodeOperatorPrincipalId)), 0);
                            else if (object.nodeOperatorPrincipalId.length)
                                message.nodeOperatorPrincipalId = object.nodeOperatorPrincipalId;
                        if (object.nodeAllowance != null)
                            if ($util.Long)
                                (message.nodeAllowance = $util.Long.fromValue(object.nodeAllowance)).unsigned = true;
                            else if (typeof object.nodeAllowance === "string")
                                message.nodeAllowance = parseInt(object.nodeAllowance, 10);
                            else if (typeof object.nodeAllowance === "number")
                                message.nodeAllowance = object.nodeAllowance;
                            else if (typeof object.nodeAllowance === "object")
                                message.nodeAllowance = new $util.LongBits(object.nodeAllowance.low >>> 0, object.nodeAllowance.high >>> 0).toNumber(true);
                        if (object.nodeProviderPrincipalId != null)
                            if (typeof object.nodeProviderPrincipalId === "string")
                                $util.base64.decode(object.nodeProviderPrincipalId, message.nodeProviderPrincipalId = $util.newBuffer($util.base64.length(object.nodeProviderPrincipalId)), 0);
                            else if (object.nodeProviderPrincipalId.length)
                                message.nodeProviderPrincipalId = object.nodeProviderPrincipalId;
                        if (object.dcId != null)
                            message.dcId = String(object.dcId);
                        if (object.rewardableNodes) {
                            if (typeof object.rewardableNodes !== "object")
                                throw TypeError(".registry.node_operator.v1.NodeOperatorRecord.rewardableNodes: object expected");
                            message.rewardableNodes = {};
                            for (var keys = Object.keys(object.rewardableNodes), i = 0; i < keys.length; ++i)
                                message.rewardableNodes[keys[i]] = object.rewardableNodes[keys[i]] >>> 0;
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a NodeOperatorRecord message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @static
                     * @param {registry.node_operator.v1.NodeOperatorRecord} message NodeOperatorRecord
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    NodeOperatorRecord.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.objects || options.defaults)
                            object.rewardableNodes = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.nodeOperatorPrincipalId = "";
                            else {
                                object.nodeOperatorPrincipalId = [];
                                if (options.bytes !== Array)
                                    object.nodeOperatorPrincipalId = $util.newBuffer(object.nodeOperatorPrincipalId);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.nodeAllowance = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.nodeAllowance = options.longs === String ? "0" : 0;
                            if (options.bytes === String)
                                object.nodeProviderPrincipalId = "";
                            else {
                                object.nodeProviderPrincipalId = [];
                                if (options.bytes !== Array)
                                    object.nodeProviderPrincipalId = $util.newBuffer(object.nodeProviderPrincipalId);
                            }
                            object.dcId = "";
                        }
                        if (message.nodeOperatorPrincipalId != null && message.hasOwnProperty("nodeOperatorPrincipalId"))
                            object.nodeOperatorPrincipalId = options.bytes === String ? $util.base64.encode(message.nodeOperatorPrincipalId, 0, message.nodeOperatorPrincipalId.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeOperatorPrincipalId) : message.nodeOperatorPrincipalId;
                        if (message.nodeAllowance != null && message.hasOwnProperty("nodeAllowance"))
                            if (typeof message.nodeAllowance === "number")
                                object.nodeAllowance = options.longs === String ? String(message.nodeAllowance) : message.nodeAllowance;
                            else
                                object.nodeAllowance = options.longs === String ? $util.Long.prototype.toString.call(message.nodeAllowance) : options.longs === Number ? new $util.LongBits(message.nodeAllowance.low >>> 0, message.nodeAllowance.high >>> 0).toNumber(true) : message.nodeAllowance;
                        if (message.nodeProviderPrincipalId != null && message.hasOwnProperty("nodeProviderPrincipalId"))
                            object.nodeProviderPrincipalId = options.bytes === String ? $util.base64.encode(message.nodeProviderPrincipalId, 0, message.nodeProviderPrincipalId.length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeProviderPrincipalId) : message.nodeProviderPrincipalId;
                        if (message.dcId != null && message.hasOwnProperty("dcId"))
                            object.dcId = message.dcId;
                        var keys2;
                        if (message.rewardableNodes && (keys2 = Object.keys(message.rewardableNodes)).length) {
                            object.rewardableNodes = {};
                            for (var j = 0; j < keys2.length; ++j)
                                object.rewardableNodes[keys2[j]] = message.rewardableNodes[keys2[j]];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this NodeOperatorRecord to JSON.
                     * @function toJSON
                     * @memberof registry.node_operator.v1.NodeOperatorRecord
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    NodeOperatorRecord.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return NodeOperatorRecord;
                })();
    
                v1.RemoveNodeOperatorsPayload = (function() {
    
                    /**
                     * Properties of a RemoveNodeOperatorsPayload.
                     * @memberof registry.node_operator.v1
                     * @interface IRemoveNodeOperatorsPayload
                     * @property {Array.<Uint8Array>|null} [nodeOperatorsToRemove] RemoveNodeOperatorsPayload nodeOperatorsToRemove
                     */
    
                    /**
                     * Constructs a new RemoveNodeOperatorsPayload.
                     * @memberof registry.node_operator.v1
                     * @classdesc The payload of a request to remove Node Operator records from the Registry
                     * @implements IRemoveNodeOperatorsPayload
                     * @constructor
                     * @param {registry.node_operator.v1.IRemoveNodeOperatorsPayload=} [properties] Properties to set
                     */
                    function RemoveNodeOperatorsPayload(properties) {
                        this.nodeOperatorsToRemove = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RemoveNodeOperatorsPayload nodeOperatorsToRemove.
                     * @member {Array.<Uint8Array>} nodeOperatorsToRemove
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @instance
                     */
                    RemoveNodeOperatorsPayload.prototype.nodeOperatorsToRemove = $util.emptyArray;
    
                    /**
                     * Creates a new RemoveNodeOperatorsPayload instance using the specified properties.
                     * @function create
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @static
                     * @param {registry.node_operator.v1.IRemoveNodeOperatorsPayload=} [properties] Properties to set
                     * @returns {registry.node_operator.v1.RemoveNodeOperatorsPayload} RemoveNodeOperatorsPayload instance
                     */
                    RemoveNodeOperatorsPayload.create = function create(properties) {
                        return new RemoveNodeOperatorsPayload(properties);
                    };
    
                    /**
                     * Encodes the specified RemoveNodeOperatorsPayload message. Does not implicitly {@link registry.node_operator.v1.RemoveNodeOperatorsPayload.verify|verify} messages.
                     * @function encode
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @static
                     * @param {registry.node_operator.v1.IRemoveNodeOperatorsPayload} message RemoveNodeOperatorsPayload message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RemoveNodeOperatorsPayload.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.nodeOperatorsToRemove != null && message.nodeOperatorsToRemove.length)
                            for (var i = 0; i < message.nodeOperatorsToRemove.length; ++i)
                                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.nodeOperatorsToRemove[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RemoveNodeOperatorsPayload message, length delimited. Does not implicitly {@link registry.node_operator.v1.RemoveNodeOperatorsPayload.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @static
                     * @param {registry.node_operator.v1.IRemoveNodeOperatorsPayload} message RemoveNodeOperatorsPayload message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RemoveNodeOperatorsPayload.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RemoveNodeOperatorsPayload message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.node_operator.v1.RemoveNodeOperatorsPayload} RemoveNodeOperatorsPayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RemoveNodeOperatorsPayload.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.node_operator.v1.RemoveNodeOperatorsPayload();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.nodeOperatorsToRemove && message.nodeOperatorsToRemove.length))
                                    message.nodeOperatorsToRemove = [];
                                message.nodeOperatorsToRemove.push(reader.bytes());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RemoveNodeOperatorsPayload message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.node_operator.v1.RemoveNodeOperatorsPayload} RemoveNodeOperatorsPayload
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RemoveNodeOperatorsPayload.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RemoveNodeOperatorsPayload message.
                     * @function verify
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RemoveNodeOperatorsPayload.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.nodeOperatorsToRemove != null && message.hasOwnProperty("nodeOperatorsToRemove")) {
                            if (!Array.isArray(message.nodeOperatorsToRemove))
                                return "nodeOperatorsToRemove: array expected";
                            for (var i = 0; i < message.nodeOperatorsToRemove.length; ++i)
                                if (!(message.nodeOperatorsToRemove[i] && typeof message.nodeOperatorsToRemove[i].length === "number" || $util.isString(message.nodeOperatorsToRemove[i])))
                                    return "nodeOperatorsToRemove: buffer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a RemoveNodeOperatorsPayload message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.node_operator.v1.RemoveNodeOperatorsPayload} RemoveNodeOperatorsPayload
                     */
                    RemoveNodeOperatorsPayload.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.node_operator.v1.RemoveNodeOperatorsPayload)
                            return object;
                        var message = new $root.registry.node_operator.v1.RemoveNodeOperatorsPayload();
                        if (object.nodeOperatorsToRemove) {
                            if (!Array.isArray(object.nodeOperatorsToRemove))
                                throw TypeError(".registry.node_operator.v1.RemoveNodeOperatorsPayload.nodeOperatorsToRemove: array expected");
                            message.nodeOperatorsToRemove = [];
                            for (var i = 0; i < object.nodeOperatorsToRemove.length; ++i)
                                if (typeof object.nodeOperatorsToRemove[i] === "string")
                                    $util.base64.decode(object.nodeOperatorsToRemove[i], message.nodeOperatorsToRemove[i] = $util.newBuffer($util.base64.length(object.nodeOperatorsToRemove[i])), 0);
                                else if (object.nodeOperatorsToRemove[i].length)
                                    message.nodeOperatorsToRemove[i] = object.nodeOperatorsToRemove[i];
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RemoveNodeOperatorsPayload message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @static
                     * @param {registry.node_operator.v1.RemoveNodeOperatorsPayload} message RemoveNodeOperatorsPayload
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RemoveNodeOperatorsPayload.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.nodeOperatorsToRemove = [];
                        if (message.nodeOperatorsToRemove && message.nodeOperatorsToRemove.length) {
                            object.nodeOperatorsToRemove = [];
                            for (var j = 0; j < message.nodeOperatorsToRemove.length; ++j)
                                object.nodeOperatorsToRemove[j] = options.bytes === String ? $util.base64.encode(message.nodeOperatorsToRemove[j], 0, message.nodeOperatorsToRemove[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.nodeOperatorsToRemove[j]) : message.nodeOperatorsToRemove[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this RemoveNodeOperatorsPayload to JSON.
                     * @function toJSON
                     * @memberof registry.node_operator.v1.RemoveNodeOperatorsPayload
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RemoveNodeOperatorsPayload.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RemoveNodeOperatorsPayload;
                })();
    
                return v1;
            })();
    
            return node_operator;
        })();
    
        registry.subnet = (function() {
    
            /**
             * Namespace subnet.
             * @memberof registry
             * @namespace
             */
            var subnet = {};
    
            subnet.v1 = (function() {
    
                /**
                 * Namespace v1.
                 * @memberof registry.subnet
                 * @namespace
                 */
                var v1 = {};
    
                v1.SubnetRecord = (function() {
    
                    /**
                     * Properties of a SubnetRecord.
                     * @memberof registry.subnet.v1
                     * @interface ISubnetRecord
                     * @property {Array.<Uint8Array>|null} [membership] SubnetRecord membership
                     * @property {number|Long|null} [maxIngressBytesPerMessage] SubnetRecord maxIngressBytesPerMessage
                     * @property {number|Long|null} [unitDelayMillis] SubnetRecord unitDelayMillis
                     * @property {number|Long|null} [initialNotaryDelayMillis] SubnetRecord initialNotaryDelayMillis
                     * @property {string|null} [replicaVersionId] SubnetRecord replicaVersionId
                     * @property {number|Long|null} [dkgIntervalLength] SubnetRecord dkgIntervalLength
                     * @property {registry.subnet.v1.IGossipConfig|null} [gossipConfig] SubnetRecord gossipConfig
                     * @property {boolean|null} [startAsNns] SubnetRecord startAsNns
                     * @property {registry.subnet.v1.SubnetType|null} [subnetType] SubnetRecord subnetType
                     * @property {number|Long|null} [dkgDealingsPerBlock] SubnetRecord dkgDealingsPerBlock
                     * @property {boolean|null} [isHalted] SubnetRecord isHalted
                     * @property {number|Long|null} [maxIngressMessagesPerBlock] SubnetRecord maxIngressMessagesPerBlock
                     * @property {number|Long|null} [maxBlockPayloadSize] SubnetRecord maxBlockPayloadSize
                     * @property {number|Long|null} [maxInstructionsPerMessage] SubnetRecord maxInstructionsPerMessage
                     * @property {number|Long|null} [maxInstructionsPerRound] SubnetRecord maxInstructionsPerRound
                     * @property {number|Long|null} [maxInstructionsPerInstallCode] SubnetRecord maxInstructionsPerInstallCode
                     * @property {registry.subnet.v1.ISubnetFeatures|null} [features] SubnetRecord features
                     * @property {number|Long|null} [maxNumberOfCanisters] SubnetRecord maxNumberOfCanisters
                     * @property {Array.<string>|null} [sshReadonlyAccess] SubnetRecord sshReadonlyAccess
                     * @property {Array.<string>|null} [sshBackupAccess] SubnetRecord sshBackupAccess
                     * @property {registry.subnet.v1.IEcdsaConfig|null} [ecdsaConfig] SubnetRecord ecdsaConfig
                     */
    
                    /**
                     * Constructs a new SubnetRecord.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents a SubnetRecord.
                     * @implements ISubnetRecord
                     * @constructor
                     * @param {registry.subnet.v1.ISubnetRecord=} [properties] Properties to set
                     */
                    function SubnetRecord(properties) {
                        this.membership = [];
                        this.sshReadonlyAccess = [];
                        this.sshBackupAccess = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SubnetRecord membership.
                     * @member {Array.<Uint8Array>} membership
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.membership = $util.emptyArray;
    
                    /**
                     * SubnetRecord maxIngressBytesPerMessage.
                     * @member {number|Long} maxIngressBytesPerMessage
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.maxIngressBytesPerMessage = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord unitDelayMillis.
                     * @member {number|Long} unitDelayMillis
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.unitDelayMillis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord initialNotaryDelayMillis.
                     * @member {number|Long} initialNotaryDelayMillis
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.initialNotaryDelayMillis = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord replicaVersionId.
                     * @member {string} replicaVersionId
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.replicaVersionId = "";
    
                    /**
                     * SubnetRecord dkgIntervalLength.
                     * @member {number|Long} dkgIntervalLength
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.dkgIntervalLength = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord gossipConfig.
                     * @member {registry.subnet.v1.IGossipConfig|null|undefined} gossipConfig
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.gossipConfig = null;
    
                    /**
                     * SubnetRecord startAsNns.
                     * @member {boolean} startAsNns
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.startAsNns = false;
    
                    /**
                     * SubnetRecord subnetType.
                     * @member {registry.subnet.v1.SubnetType} subnetType
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.subnetType = 0;
    
                    /**
                     * SubnetRecord dkgDealingsPerBlock.
                     * @member {number|Long} dkgDealingsPerBlock
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.dkgDealingsPerBlock = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord isHalted.
                     * @member {boolean} isHalted
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.isHalted = false;
    
                    /**
                     * SubnetRecord maxIngressMessagesPerBlock.
                     * @member {number|Long} maxIngressMessagesPerBlock
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.maxIngressMessagesPerBlock = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord maxBlockPayloadSize.
                     * @member {number|Long} maxBlockPayloadSize
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.maxBlockPayloadSize = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord maxInstructionsPerMessage.
                     * @member {number|Long} maxInstructionsPerMessage
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.maxInstructionsPerMessage = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord maxInstructionsPerRound.
                     * @member {number|Long} maxInstructionsPerRound
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.maxInstructionsPerRound = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord maxInstructionsPerInstallCode.
                     * @member {number|Long} maxInstructionsPerInstallCode
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.maxInstructionsPerInstallCode = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord features.
                     * @member {registry.subnet.v1.ISubnetFeatures|null|undefined} features
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.features = null;
    
                    /**
                     * SubnetRecord maxNumberOfCanisters.
                     * @member {number|Long} maxNumberOfCanisters
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.maxNumberOfCanisters = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * SubnetRecord sshReadonlyAccess.
                     * @member {Array.<string>} sshReadonlyAccess
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.sshReadonlyAccess = $util.emptyArray;
    
                    /**
                     * SubnetRecord sshBackupAccess.
                     * @member {Array.<string>} sshBackupAccess
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.sshBackupAccess = $util.emptyArray;
    
                    /**
                     * SubnetRecord ecdsaConfig.
                     * @member {registry.subnet.v1.IEcdsaConfig|null|undefined} ecdsaConfig
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     */
                    SubnetRecord.prototype.ecdsaConfig = null;
    
                    /**
                     * Creates a new SubnetRecord instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @static
                     * @param {registry.subnet.v1.ISubnetRecord=} [properties] Properties to set
                     * @returns {registry.subnet.v1.SubnetRecord} SubnetRecord instance
                     */
                    SubnetRecord.create = function create(properties) {
                        return new SubnetRecord(properties);
                    };
    
                    /**
                     * Encodes the specified SubnetRecord message. Does not implicitly {@link registry.subnet.v1.SubnetRecord.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @static
                     * @param {registry.subnet.v1.ISubnetRecord} message SubnetRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubnetRecord.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.membership != null && message.membership.length)
                            for (var i = 0; i < message.membership.length; ++i)
                                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.membership[i]);
                        if (message.maxIngressBytesPerMessage != null && Object.hasOwnProperty.call(message, "maxIngressBytesPerMessage"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.maxIngressBytesPerMessage);
                        if (message.unitDelayMillis != null && Object.hasOwnProperty.call(message, "unitDelayMillis"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.unitDelayMillis);
                        if (message.initialNotaryDelayMillis != null && Object.hasOwnProperty.call(message, "initialNotaryDelayMillis"))
                            writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.initialNotaryDelayMillis);
                        if (message.replicaVersionId != null && Object.hasOwnProperty.call(message, "replicaVersionId"))
                            writer.uint32(/* id 9, wireType 2 =*/74).string(message.replicaVersionId);
                        if (message.dkgIntervalLength != null && Object.hasOwnProperty.call(message, "dkgIntervalLength"))
                            writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.dkgIntervalLength);
                        if (message.gossipConfig != null && Object.hasOwnProperty.call(message, "gossipConfig"))
                            $root.registry.subnet.v1.GossipConfig.encode(message.gossipConfig, writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
                        if (message.startAsNns != null && Object.hasOwnProperty.call(message, "startAsNns"))
                            writer.uint32(/* id 14, wireType 0 =*/112).bool(message.startAsNns);
                        if (message.subnetType != null && Object.hasOwnProperty.call(message, "subnetType"))
                            writer.uint32(/* id 15, wireType 0 =*/120).int32(message.subnetType);
                        if (message.dkgDealingsPerBlock != null && Object.hasOwnProperty.call(message, "dkgDealingsPerBlock"))
                            writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.dkgDealingsPerBlock);
                        if (message.isHalted != null && Object.hasOwnProperty.call(message, "isHalted"))
                            writer.uint32(/* id 17, wireType 0 =*/136).bool(message.isHalted);
                        if (message.maxIngressMessagesPerBlock != null && Object.hasOwnProperty.call(message, "maxIngressMessagesPerBlock"))
                            writer.uint32(/* id 18, wireType 0 =*/144).uint64(message.maxIngressMessagesPerBlock);
                        if (message.maxBlockPayloadSize != null && Object.hasOwnProperty.call(message, "maxBlockPayloadSize"))
                            writer.uint32(/* id 19, wireType 0 =*/152).uint64(message.maxBlockPayloadSize);
                        if (message.maxInstructionsPerMessage != null && Object.hasOwnProperty.call(message, "maxInstructionsPerMessage"))
                            writer.uint32(/* id 20, wireType 0 =*/160).uint64(message.maxInstructionsPerMessage);
                        if (message.maxInstructionsPerRound != null && Object.hasOwnProperty.call(message, "maxInstructionsPerRound"))
                            writer.uint32(/* id 21, wireType 0 =*/168).uint64(message.maxInstructionsPerRound);
                        if (message.maxInstructionsPerInstallCode != null && Object.hasOwnProperty.call(message, "maxInstructionsPerInstallCode"))
                            writer.uint32(/* id 22, wireType 0 =*/176).uint64(message.maxInstructionsPerInstallCode);
                        if (message.features != null && Object.hasOwnProperty.call(message, "features"))
                            $root.registry.subnet.v1.SubnetFeatures.encode(message.features, writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
                        if (message.maxNumberOfCanisters != null && Object.hasOwnProperty.call(message, "maxNumberOfCanisters"))
                            writer.uint32(/* id 24, wireType 0 =*/192).uint64(message.maxNumberOfCanisters);
                        if (message.sshReadonlyAccess != null && message.sshReadonlyAccess.length)
                            for (var i = 0; i < message.sshReadonlyAccess.length; ++i)
                                writer.uint32(/* id 25, wireType 2 =*/202).string(message.sshReadonlyAccess[i]);
                        if (message.sshBackupAccess != null && message.sshBackupAccess.length)
                            for (var i = 0; i < message.sshBackupAccess.length; ++i)
                                writer.uint32(/* id 26, wireType 2 =*/210).string(message.sshBackupAccess[i]);
                        if (message.ecdsaConfig != null && Object.hasOwnProperty.call(message, "ecdsaConfig"))
                            $root.registry.subnet.v1.EcdsaConfig.encode(message.ecdsaConfig, writer.uint32(/* id 27, wireType 2 =*/218).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SubnetRecord message, length delimited. Does not implicitly {@link registry.subnet.v1.SubnetRecord.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @static
                     * @param {registry.subnet.v1.ISubnetRecord} message SubnetRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubnetRecord.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubnetRecord message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.SubnetRecord} SubnetRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubnetRecord.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.SubnetRecord();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 3:
                                if (!(message.membership && message.membership.length))
                                    message.membership = [];
                                message.membership.push(reader.bytes());
                                break;
                            case 5:
                                message.maxIngressBytesPerMessage = reader.uint64();
                                break;
                            case 7:
                                message.unitDelayMillis = reader.uint64();
                                break;
                            case 8:
                                message.initialNotaryDelayMillis = reader.uint64();
                                break;
                            case 9:
                                message.replicaVersionId = reader.string();
                                break;
                            case 10:
                                message.dkgIntervalLength = reader.uint64();
                                break;
                            case 13:
                                message.gossipConfig = $root.registry.subnet.v1.GossipConfig.decode(reader, reader.uint32());
                                break;
                            case 14:
                                message.startAsNns = reader.bool();
                                break;
                            case 15:
                                message.subnetType = reader.int32();
                                break;
                            case 16:
                                message.dkgDealingsPerBlock = reader.uint64();
                                break;
                            case 17:
                                message.isHalted = reader.bool();
                                break;
                            case 18:
                                message.maxIngressMessagesPerBlock = reader.uint64();
                                break;
                            case 19:
                                message.maxBlockPayloadSize = reader.uint64();
                                break;
                            case 20:
                                message.maxInstructionsPerMessage = reader.uint64();
                                break;
                            case 21:
                                message.maxInstructionsPerRound = reader.uint64();
                                break;
                            case 22:
                                message.maxInstructionsPerInstallCode = reader.uint64();
                                break;
                            case 23:
                                message.features = $root.registry.subnet.v1.SubnetFeatures.decode(reader, reader.uint32());
                                break;
                            case 24:
                                message.maxNumberOfCanisters = reader.uint64();
                                break;
                            case 25:
                                if (!(message.sshReadonlyAccess && message.sshReadonlyAccess.length))
                                    message.sshReadonlyAccess = [];
                                message.sshReadonlyAccess.push(reader.string());
                                break;
                            case 26:
                                if (!(message.sshBackupAccess && message.sshBackupAccess.length))
                                    message.sshBackupAccess = [];
                                message.sshBackupAccess.push(reader.string());
                                break;
                            case 27:
                                message.ecdsaConfig = $root.registry.subnet.v1.EcdsaConfig.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a SubnetRecord message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.SubnetRecord} SubnetRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubnetRecord.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SubnetRecord message.
                     * @function verify
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubnetRecord.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.membership != null && message.hasOwnProperty("membership")) {
                            if (!Array.isArray(message.membership))
                                return "membership: array expected";
                            for (var i = 0; i < message.membership.length; ++i)
                                if (!(message.membership[i] && typeof message.membership[i].length === "number" || $util.isString(message.membership[i])))
                                    return "membership: buffer[] expected";
                        }
                        if (message.maxIngressBytesPerMessage != null && message.hasOwnProperty("maxIngressBytesPerMessage"))
                            if (!$util.isInteger(message.maxIngressBytesPerMessage) && !(message.maxIngressBytesPerMessage && $util.isInteger(message.maxIngressBytesPerMessage.low) && $util.isInteger(message.maxIngressBytesPerMessage.high)))
                                return "maxIngressBytesPerMessage: integer|Long expected";
                        if (message.unitDelayMillis != null && message.hasOwnProperty("unitDelayMillis"))
                            if (!$util.isInteger(message.unitDelayMillis) && !(message.unitDelayMillis && $util.isInteger(message.unitDelayMillis.low) && $util.isInteger(message.unitDelayMillis.high)))
                                return "unitDelayMillis: integer|Long expected";
                        if (message.initialNotaryDelayMillis != null && message.hasOwnProperty("initialNotaryDelayMillis"))
                            if (!$util.isInteger(message.initialNotaryDelayMillis) && !(message.initialNotaryDelayMillis && $util.isInteger(message.initialNotaryDelayMillis.low) && $util.isInteger(message.initialNotaryDelayMillis.high)))
                                return "initialNotaryDelayMillis: integer|Long expected";
                        if (message.replicaVersionId != null && message.hasOwnProperty("replicaVersionId"))
                            if (!$util.isString(message.replicaVersionId))
                                return "replicaVersionId: string expected";
                        if (message.dkgIntervalLength != null && message.hasOwnProperty("dkgIntervalLength"))
                            if (!$util.isInteger(message.dkgIntervalLength) && !(message.dkgIntervalLength && $util.isInteger(message.dkgIntervalLength.low) && $util.isInteger(message.dkgIntervalLength.high)))
                                return "dkgIntervalLength: integer|Long expected";
                        if (message.gossipConfig != null && message.hasOwnProperty("gossipConfig")) {
                            var error = $root.registry.subnet.v1.GossipConfig.verify(message.gossipConfig);
                            if (error)
                                return "gossipConfig." + error;
                        }
                        if (message.startAsNns != null && message.hasOwnProperty("startAsNns"))
                            if (typeof message.startAsNns !== "boolean")
                                return "startAsNns: boolean expected";
                        if (message.subnetType != null && message.hasOwnProperty("subnetType"))
                            switch (message.subnetType) {
                            default:
                                return "subnetType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 4:
                                break;
                            }
                        if (message.dkgDealingsPerBlock != null && message.hasOwnProperty("dkgDealingsPerBlock"))
                            if (!$util.isInteger(message.dkgDealingsPerBlock) && !(message.dkgDealingsPerBlock && $util.isInteger(message.dkgDealingsPerBlock.low) && $util.isInteger(message.dkgDealingsPerBlock.high)))
                                return "dkgDealingsPerBlock: integer|Long expected";
                        if (message.isHalted != null && message.hasOwnProperty("isHalted"))
                            if (typeof message.isHalted !== "boolean")
                                return "isHalted: boolean expected";
                        if (message.maxIngressMessagesPerBlock != null && message.hasOwnProperty("maxIngressMessagesPerBlock"))
                            if (!$util.isInteger(message.maxIngressMessagesPerBlock) && !(message.maxIngressMessagesPerBlock && $util.isInteger(message.maxIngressMessagesPerBlock.low) && $util.isInteger(message.maxIngressMessagesPerBlock.high)))
                                return "maxIngressMessagesPerBlock: integer|Long expected";
                        if (message.maxBlockPayloadSize != null && message.hasOwnProperty("maxBlockPayloadSize"))
                            if (!$util.isInteger(message.maxBlockPayloadSize) && !(message.maxBlockPayloadSize && $util.isInteger(message.maxBlockPayloadSize.low) && $util.isInteger(message.maxBlockPayloadSize.high)))
                                return "maxBlockPayloadSize: integer|Long expected";
                        if (message.maxInstructionsPerMessage != null && message.hasOwnProperty("maxInstructionsPerMessage"))
                            if (!$util.isInteger(message.maxInstructionsPerMessage) && !(message.maxInstructionsPerMessage && $util.isInteger(message.maxInstructionsPerMessage.low) && $util.isInteger(message.maxInstructionsPerMessage.high)))
                                return "maxInstructionsPerMessage: integer|Long expected";
                        if (message.maxInstructionsPerRound != null && message.hasOwnProperty("maxInstructionsPerRound"))
                            if (!$util.isInteger(message.maxInstructionsPerRound) && !(message.maxInstructionsPerRound && $util.isInteger(message.maxInstructionsPerRound.low) && $util.isInteger(message.maxInstructionsPerRound.high)))
                                return "maxInstructionsPerRound: integer|Long expected";
                        if (message.maxInstructionsPerInstallCode != null && message.hasOwnProperty("maxInstructionsPerInstallCode"))
                            if (!$util.isInteger(message.maxInstructionsPerInstallCode) && !(message.maxInstructionsPerInstallCode && $util.isInteger(message.maxInstructionsPerInstallCode.low) && $util.isInteger(message.maxInstructionsPerInstallCode.high)))
                                return "maxInstructionsPerInstallCode: integer|Long expected";
                        if (message.features != null && message.hasOwnProperty("features")) {
                            var error = $root.registry.subnet.v1.SubnetFeatures.verify(message.features);
                            if (error)
                                return "features." + error;
                        }
                        if (message.maxNumberOfCanisters != null && message.hasOwnProperty("maxNumberOfCanisters"))
                            if (!$util.isInteger(message.maxNumberOfCanisters) && !(message.maxNumberOfCanisters && $util.isInteger(message.maxNumberOfCanisters.low) && $util.isInteger(message.maxNumberOfCanisters.high)))
                                return "maxNumberOfCanisters: integer|Long expected";
                        if (message.sshReadonlyAccess != null && message.hasOwnProperty("sshReadonlyAccess")) {
                            if (!Array.isArray(message.sshReadonlyAccess))
                                return "sshReadonlyAccess: array expected";
                            for (var i = 0; i < message.sshReadonlyAccess.length; ++i)
                                if (!$util.isString(message.sshReadonlyAccess[i]))
                                    return "sshReadonlyAccess: string[] expected";
                        }
                        if (message.sshBackupAccess != null && message.hasOwnProperty("sshBackupAccess")) {
                            if (!Array.isArray(message.sshBackupAccess))
                                return "sshBackupAccess: array expected";
                            for (var i = 0; i < message.sshBackupAccess.length; ++i)
                                if (!$util.isString(message.sshBackupAccess[i]))
                                    return "sshBackupAccess: string[] expected";
                        }
                        if (message.ecdsaConfig != null && message.hasOwnProperty("ecdsaConfig")) {
                            var error = $root.registry.subnet.v1.EcdsaConfig.verify(message.ecdsaConfig);
                            if (error)
                                return "ecdsaConfig." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a SubnetRecord message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.SubnetRecord} SubnetRecord
                     */
                    SubnetRecord.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.SubnetRecord)
                            return object;
                        var message = new $root.registry.subnet.v1.SubnetRecord();
                        if (object.membership) {
                            if (!Array.isArray(object.membership))
                                throw TypeError(".registry.subnet.v1.SubnetRecord.membership: array expected");
                            message.membership = [];
                            for (var i = 0; i < object.membership.length; ++i)
                                if (typeof object.membership[i] === "string")
                                    $util.base64.decode(object.membership[i], message.membership[i] = $util.newBuffer($util.base64.length(object.membership[i])), 0);
                                else if (object.membership[i].length)
                                    message.membership[i] = object.membership[i];
                        }
                        if (object.maxIngressBytesPerMessage != null)
                            if ($util.Long)
                                (message.maxIngressBytesPerMessage = $util.Long.fromValue(object.maxIngressBytesPerMessage)).unsigned = true;
                            else if (typeof object.maxIngressBytesPerMessage === "string")
                                message.maxIngressBytesPerMessage = parseInt(object.maxIngressBytesPerMessage, 10);
                            else if (typeof object.maxIngressBytesPerMessage === "number")
                                message.maxIngressBytesPerMessage = object.maxIngressBytesPerMessage;
                            else if (typeof object.maxIngressBytesPerMessage === "object")
                                message.maxIngressBytesPerMessage = new $util.LongBits(object.maxIngressBytesPerMessage.low >>> 0, object.maxIngressBytesPerMessage.high >>> 0).toNumber(true);
                        if (object.unitDelayMillis != null)
                            if ($util.Long)
                                (message.unitDelayMillis = $util.Long.fromValue(object.unitDelayMillis)).unsigned = true;
                            else if (typeof object.unitDelayMillis === "string")
                                message.unitDelayMillis = parseInt(object.unitDelayMillis, 10);
                            else if (typeof object.unitDelayMillis === "number")
                                message.unitDelayMillis = object.unitDelayMillis;
                            else if (typeof object.unitDelayMillis === "object")
                                message.unitDelayMillis = new $util.LongBits(object.unitDelayMillis.low >>> 0, object.unitDelayMillis.high >>> 0).toNumber(true);
                        if (object.initialNotaryDelayMillis != null)
                            if ($util.Long)
                                (message.initialNotaryDelayMillis = $util.Long.fromValue(object.initialNotaryDelayMillis)).unsigned = true;
                            else if (typeof object.initialNotaryDelayMillis === "string")
                                message.initialNotaryDelayMillis = parseInt(object.initialNotaryDelayMillis, 10);
                            else if (typeof object.initialNotaryDelayMillis === "number")
                                message.initialNotaryDelayMillis = object.initialNotaryDelayMillis;
                            else if (typeof object.initialNotaryDelayMillis === "object")
                                message.initialNotaryDelayMillis = new $util.LongBits(object.initialNotaryDelayMillis.low >>> 0, object.initialNotaryDelayMillis.high >>> 0).toNumber(true);
                        if (object.replicaVersionId != null)
                            message.replicaVersionId = String(object.replicaVersionId);
                        if (object.dkgIntervalLength != null)
                            if ($util.Long)
                                (message.dkgIntervalLength = $util.Long.fromValue(object.dkgIntervalLength)).unsigned = true;
                            else if (typeof object.dkgIntervalLength === "string")
                                message.dkgIntervalLength = parseInt(object.dkgIntervalLength, 10);
                            else if (typeof object.dkgIntervalLength === "number")
                                message.dkgIntervalLength = object.dkgIntervalLength;
                            else if (typeof object.dkgIntervalLength === "object")
                                message.dkgIntervalLength = new $util.LongBits(object.dkgIntervalLength.low >>> 0, object.dkgIntervalLength.high >>> 0).toNumber(true);
                        if (object.gossipConfig != null) {
                            if (typeof object.gossipConfig !== "object")
                                throw TypeError(".registry.subnet.v1.SubnetRecord.gossipConfig: object expected");
                            message.gossipConfig = $root.registry.subnet.v1.GossipConfig.fromObject(object.gossipConfig);
                        }
                        if (object.startAsNns != null)
                            message.startAsNns = Boolean(object.startAsNns);
                        switch (object.subnetType) {
                        case "SUBNET_TYPE_UNSPECIFIED":
                        case 0:
                            message.subnetType = 0;
                            break;
                        case "SUBNET_TYPE_APPLICATION":
                        case 1:
                            message.subnetType = 1;
                            break;
                        case "SUBNET_TYPE_SYSTEM":
                        case 2:
                            message.subnetType = 2;
                            break;
                        case "SUBNET_TYPE_VERIFIED_APPLICATION":
                        case 4:
                            message.subnetType = 4;
                            break;
                        }
                        if (object.dkgDealingsPerBlock != null)
                            if ($util.Long)
                                (message.dkgDealingsPerBlock = $util.Long.fromValue(object.dkgDealingsPerBlock)).unsigned = true;
                            else if (typeof object.dkgDealingsPerBlock === "string")
                                message.dkgDealingsPerBlock = parseInt(object.dkgDealingsPerBlock, 10);
                            else if (typeof object.dkgDealingsPerBlock === "number")
                                message.dkgDealingsPerBlock = object.dkgDealingsPerBlock;
                            else if (typeof object.dkgDealingsPerBlock === "object")
                                message.dkgDealingsPerBlock = new $util.LongBits(object.dkgDealingsPerBlock.low >>> 0, object.dkgDealingsPerBlock.high >>> 0).toNumber(true);
                        if (object.isHalted != null)
                            message.isHalted = Boolean(object.isHalted);
                        if (object.maxIngressMessagesPerBlock != null)
                            if ($util.Long)
                                (message.maxIngressMessagesPerBlock = $util.Long.fromValue(object.maxIngressMessagesPerBlock)).unsigned = true;
                            else if (typeof object.maxIngressMessagesPerBlock === "string")
                                message.maxIngressMessagesPerBlock = parseInt(object.maxIngressMessagesPerBlock, 10);
                            else if (typeof object.maxIngressMessagesPerBlock === "number")
                                message.maxIngressMessagesPerBlock = object.maxIngressMessagesPerBlock;
                            else if (typeof object.maxIngressMessagesPerBlock === "object")
                                message.maxIngressMessagesPerBlock = new $util.LongBits(object.maxIngressMessagesPerBlock.low >>> 0, object.maxIngressMessagesPerBlock.high >>> 0).toNumber(true);
                        if (object.maxBlockPayloadSize != null)
                            if ($util.Long)
                                (message.maxBlockPayloadSize = $util.Long.fromValue(object.maxBlockPayloadSize)).unsigned = true;
                            else if (typeof object.maxBlockPayloadSize === "string")
                                message.maxBlockPayloadSize = parseInt(object.maxBlockPayloadSize, 10);
                            else if (typeof object.maxBlockPayloadSize === "number")
                                message.maxBlockPayloadSize = object.maxBlockPayloadSize;
                            else if (typeof object.maxBlockPayloadSize === "object")
                                message.maxBlockPayloadSize = new $util.LongBits(object.maxBlockPayloadSize.low >>> 0, object.maxBlockPayloadSize.high >>> 0).toNumber(true);
                        if (object.maxInstructionsPerMessage != null)
                            if ($util.Long)
                                (message.maxInstructionsPerMessage = $util.Long.fromValue(object.maxInstructionsPerMessage)).unsigned = true;
                            else if (typeof object.maxInstructionsPerMessage === "string")
                                message.maxInstructionsPerMessage = parseInt(object.maxInstructionsPerMessage, 10);
                            else if (typeof object.maxInstructionsPerMessage === "number")
                                message.maxInstructionsPerMessage = object.maxInstructionsPerMessage;
                            else if (typeof object.maxInstructionsPerMessage === "object")
                                message.maxInstructionsPerMessage = new $util.LongBits(object.maxInstructionsPerMessage.low >>> 0, object.maxInstructionsPerMessage.high >>> 0).toNumber(true);
                        if (object.maxInstructionsPerRound != null)
                            if ($util.Long)
                                (message.maxInstructionsPerRound = $util.Long.fromValue(object.maxInstructionsPerRound)).unsigned = true;
                            else if (typeof object.maxInstructionsPerRound === "string")
                                message.maxInstructionsPerRound = parseInt(object.maxInstructionsPerRound, 10);
                            else if (typeof object.maxInstructionsPerRound === "number")
                                message.maxInstructionsPerRound = object.maxInstructionsPerRound;
                            else if (typeof object.maxInstructionsPerRound === "object")
                                message.maxInstructionsPerRound = new $util.LongBits(object.maxInstructionsPerRound.low >>> 0, object.maxInstructionsPerRound.high >>> 0).toNumber(true);
                        if (object.maxInstructionsPerInstallCode != null)
                            if ($util.Long)
                                (message.maxInstructionsPerInstallCode = $util.Long.fromValue(object.maxInstructionsPerInstallCode)).unsigned = true;
                            else if (typeof object.maxInstructionsPerInstallCode === "string")
                                message.maxInstructionsPerInstallCode = parseInt(object.maxInstructionsPerInstallCode, 10);
                            else if (typeof object.maxInstructionsPerInstallCode === "number")
                                message.maxInstructionsPerInstallCode = object.maxInstructionsPerInstallCode;
                            else if (typeof object.maxInstructionsPerInstallCode === "object")
                                message.maxInstructionsPerInstallCode = new $util.LongBits(object.maxInstructionsPerInstallCode.low >>> 0, object.maxInstructionsPerInstallCode.high >>> 0).toNumber(true);
                        if (object.features != null) {
                            if (typeof object.features !== "object")
                                throw TypeError(".registry.subnet.v1.SubnetRecord.features: object expected");
                            message.features = $root.registry.subnet.v1.SubnetFeatures.fromObject(object.features);
                        }
                        if (object.maxNumberOfCanisters != null)
                            if ($util.Long)
                                (message.maxNumberOfCanisters = $util.Long.fromValue(object.maxNumberOfCanisters)).unsigned = true;
                            else if (typeof object.maxNumberOfCanisters === "string")
                                message.maxNumberOfCanisters = parseInt(object.maxNumberOfCanisters, 10);
                            else if (typeof object.maxNumberOfCanisters === "number")
                                message.maxNumberOfCanisters = object.maxNumberOfCanisters;
                            else if (typeof object.maxNumberOfCanisters === "object")
                                message.maxNumberOfCanisters = new $util.LongBits(object.maxNumberOfCanisters.low >>> 0, object.maxNumberOfCanisters.high >>> 0).toNumber(true);
                        if (object.sshReadonlyAccess) {
                            if (!Array.isArray(object.sshReadonlyAccess))
                                throw TypeError(".registry.subnet.v1.SubnetRecord.sshReadonlyAccess: array expected");
                            message.sshReadonlyAccess = [];
                            for (var i = 0; i < object.sshReadonlyAccess.length; ++i)
                                message.sshReadonlyAccess[i] = String(object.sshReadonlyAccess[i]);
                        }
                        if (object.sshBackupAccess) {
                            if (!Array.isArray(object.sshBackupAccess))
                                throw TypeError(".registry.subnet.v1.SubnetRecord.sshBackupAccess: array expected");
                            message.sshBackupAccess = [];
                            for (var i = 0; i < object.sshBackupAccess.length; ++i)
                                message.sshBackupAccess[i] = String(object.sshBackupAccess[i]);
                        }
                        if (object.ecdsaConfig != null) {
                            if (typeof object.ecdsaConfig !== "object")
                                throw TypeError(".registry.subnet.v1.SubnetRecord.ecdsaConfig: object expected");
                            message.ecdsaConfig = $root.registry.subnet.v1.EcdsaConfig.fromObject(object.ecdsaConfig);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubnetRecord message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @static
                     * @param {registry.subnet.v1.SubnetRecord} message SubnetRecord
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubnetRecord.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.membership = [];
                            object.sshReadonlyAccess = [];
                            object.sshBackupAccess = [];
                        }
                        if (options.defaults) {
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.maxIngressBytesPerMessage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.maxIngressBytesPerMessage = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.unitDelayMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.unitDelayMillis = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.initialNotaryDelayMillis = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.initialNotaryDelayMillis = options.longs === String ? "0" : 0;
                            object.replicaVersionId = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.dkgIntervalLength = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.dkgIntervalLength = options.longs === String ? "0" : 0;
                            object.gossipConfig = null;
                            object.startAsNns = false;
                            object.subnetType = options.enums === String ? "SUBNET_TYPE_UNSPECIFIED" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.dkgDealingsPerBlock = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.dkgDealingsPerBlock = options.longs === String ? "0" : 0;
                            object.isHalted = false;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.maxIngressMessagesPerBlock = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.maxIngressMessagesPerBlock = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.maxBlockPayloadSize = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.maxBlockPayloadSize = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.maxInstructionsPerMessage = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.maxInstructionsPerMessage = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.maxInstructionsPerRound = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.maxInstructionsPerRound = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.maxInstructionsPerInstallCode = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.maxInstructionsPerInstallCode = options.longs === String ? "0" : 0;
                            object.features = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.maxNumberOfCanisters = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.maxNumberOfCanisters = options.longs === String ? "0" : 0;
                            object.ecdsaConfig = null;
                        }
                        if (message.membership && message.membership.length) {
                            object.membership = [];
                            for (var j = 0; j < message.membership.length; ++j)
                                object.membership[j] = options.bytes === String ? $util.base64.encode(message.membership[j], 0, message.membership[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.membership[j]) : message.membership[j];
                        }
                        if (message.maxIngressBytesPerMessage != null && message.hasOwnProperty("maxIngressBytesPerMessage"))
                            if (typeof message.maxIngressBytesPerMessage === "number")
                                object.maxIngressBytesPerMessage = options.longs === String ? String(message.maxIngressBytesPerMessage) : message.maxIngressBytesPerMessage;
                            else
                                object.maxIngressBytesPerMessage = options.longs === String ? $util.Long.prototype.toString.call(message.maxIngressBytesPerMessage) : options.longs === Number ? new $util.LongBits(message.maxIngressBytesPerMessage.low >>> 0, message.maxIngressBytesPerMessage.high >>> 0).toNumber(true) : message.maxIngressBytesPerMessage;
                        if (message.unitDelayMillis != null && message.hasOwnProperty("unitDelayMillis"))
                            if (typeof message.unitDelayMillis === "number")
                                object.unitDelayMillis = options.longs === String ? String(message.unitDelayMillis) : message.unitDelayMillis;
                            else
                                object.unitDelayMillis = options.longs === String ? $util.Long.prototype.toString.call(message.unitDelayMillis) : options.longs === Number ? new $util.LongBits(message.unitDelayMillis.low >>> 0, message.unitDelayMillis.high >>> 0).toNumber(true) : message.unitDelayMillis;
                        if (message.initialNotaryDelayMillis != null && message.hasOwnProperty("initialNotaryDelayMillis"))
                            if (typeof message.initialNotaryDelayMillis === "number")
                                object.initialNotaryDelayMillis = options.longs === String ? String(message.initialNotaryDelayMillis) : message.initialNotaryDelayMillis;
                            else
                                object.initialNotaryDelayMillis = options.longs === String ? $util.Long.prototype.toString.call(message.initialNotaryDelayMillis) : options.longs === Number ? new $util.LongBits(message.initialNotaryDelayMillis.low >>> 0, message.initialNotaryDelayMillis.high >>> 0).toNumber(true) : message.initialNotaryDelayMillis;
                        if (message.replicaVersionId != null && message.hasOwnProperty("replicaVersionId"))
                            object.replicaVersionId = message.replicaVersionId;
                        if (message.dkgIntervalLength != null && message.hasOwnProperty("dkgIntervalLength"))
                            if (typeof message.dkgIntervalLength === "number")
                                object.dkgIntervalLength = options.longs === String ? String(message.dkgIntervalLength) : message.dkgIntervalLength;
                            else
                                object.dkgIntervalLength = options.longs === String ? $util.Long.prototype.toString.call(message.dkgIntervalLength) : options.longs === Number ? new $util.LongBits(message.dkgIntervalLength.low >>> 0, message.dkgIntervalLength.high >>> 0).toNumber(true) : message.dkgIntervalLength;
                        if (message.gossipConfig != null && message.hasOwnProperty("gossipConfig"))
                            object.gossipConfig = $root.registry.subnet.v1.GossipConfig.toObject(message.gossipConfig, options);
                        if (message.startAsNns != null && message.hasOwnProperty("startAsNns"))
                            object.startAsNns = message.startAsNns;
                        if (message.subnetType != null && message.hasOwnProperty("subnetType"))
                            object.subnetType = options.enums === String ? $root.registry.subnet.v1.SubnetType[message.subnetType] : message.subnetType;
                        if (message.dkgDealingsPerBlock != null && message.hasOwnProperty("dkgDealingsPerBlock"))
                            if (typeof message.dkgDealingsPerBlock === "number")
                                object.dkgDealingsPerBlock = options.longs === String ? String(message.dkgDealingsPerBlock) : message.dkgDealingsPerBlock;
                            else
                                object.dkgDealingsPerBlock = options.longs === String ? $util.Long.prototype.toString.call(message.dkgDealingsPerBlock) : options.longs === Number ? new $util.LongBits(message.dkgDealingsPerBlock.low >>> 0, message.dkgDealingsPerBlock.high >>> 0).toNumber(true) : message.dkgDealingsPerBlock;
                        if (message.isHalted != null && message.hasOwnProperty("isHalted"))
                            object.isHalted = message.isHalted;
                        if (message.maxIngressMessagesPerBlock != null && message.hasOwnProperty("maxIngressMessagesPerBlock"))
                            if (typeof message.maxIngressMessagesPerBlock === "number")
                                object.maxIngressMessagesPerBlock = options.longs === String ? String(message.maxIngressMessagesPerBlock) : message.maxIngressMessagesPerBlock;
                            else
                                object.maxIngressMessagesPerBlock = options.longs === String ? $util.Long.prototype.toString.call(message.maxIngressMessagesPerBlock) : options.longs === Number ? new $util.LongBits(message.maxIngressMessagesPerBlock.low >>> 0, message.maxIngressMessagesPerBlock.high >>> 0).toNumber(true) : message.maxIngressMessagesPerBlock;
                        if (message.maxBlockPayloadSize != null && message.hasOwnProperty("maxBlockPayloadSize"))
                            if (typeof message.maxBlockPayloadSize === "number")
                                object.maxBlockPayloadSize = options.longs === String ? String(message.maxBlockPayloadSize) : message.maxBlockPayloadSize;
                            else
                                object.maxBlockPayloadSize = options.longs === String ? $util.Long.prototype.toString.call(message.maxBlockPayloadSize) : options.longs === Number ? new $util.LongBits(message.maxBlockPayloadSize.low >>> 0, message.maxBlockPayloadSize.high >>> 0).toNumber(true) : message.maxBlockPayloadSize;
                        if (message.maxInstructionsPerMessage != null && message.hasOwnProperty("maxInstructionsPerMessage"))
                            if (typeof message.maxInstructionsPerMessage === "number")
                                object.maxInstructionsPerMessage = options.longs === String ? String(message.maxInstructionsPerMessage) : message.maxInstructionsPerMessage;
                            else
                                object.maxInstructionsPerMessage = options.longs === String ? $util.Long.prototype.toString.call(message.maxInstructionsPerMessage) : options.longs === Number ? new $util.LongBits(message.maxInstructionsPerMessage.low >>> 0, message.maxInstructionsPerMessage.high >>> 0).toNumber(true) : message.maxInstructionsPerMessage;
                        if (message.maxInstructionsPerRound != null && message.hasOwnProperty("maxInstructionsPerRound"))
                            if (typeof message.maxInstructionsPerRound === "number")
                                object.maxInstructionsPerRound = options.longs === String ? String(message.maxInstructionsPerRound) : message.maxInstructionsPerRound;
                            else
                                object.maxInstructionsPerRound = options.longs === String ? $util.Long.prototype.toString.call(message.maxInstructionsPerRound) : options.longs === Number ? new $util.LongBits(message.maxInstructionsPerRound.low >>> 0, message.maxInstructionsPerRound.high >>> 0).toNumber(true) : message.maxInstructionsPerRound;
                        if (message.maxInstructionsPerInstallCode != null && message.hasOwnProperty("maxInstructionsPerInstallCode"))
                            if (typeof message.maxInstructionsPerInstallCode === "number")
                                object.maxInstructionsPerInstallCode = options.longs === String ? String(message.maxInstructionsPerInstallCode) : message.maxInstructionsPerInstallCode;
                            else
                                object.maxInstructionsPerInstallCode = options.longs === String ? $util.Long.prototype.toString.call(message.maxInstructionsPerInstallCode) : options.longs === Number ? new $util.LongBits(message.maxInstructionsPerInstallCode.low >>> 0, message.maxInstructionsPerInstallCode.high >>> 0).toNumber(true) : message.maxInstructionsPerInstallCode;
                        if (message.features != null && message.hasOwnProperty("features"))
                            object.features = $root.registry.subnet.v1.SubnetFeatures.toObject(message.features, options);
                        if (message.maxNumberOfCanisters != null && message.hasOwnProperty("maxNumberOfCanisters"))
                            if (typeof message.maxNumberOfCanisters === "number")
                                object.maxNumberOfCanisters = options.longs === String ? String(message.maxNumberOfCanisters) : message.maxNumberOfCanisters;
                            else
                                object.maxNumberOfCanisters = options.longs === String ? $util.Long.prototype.toString.call(message.maxNumberOfCanisters) : options.longs === Number ? new $util.LongBits(message.maxNumberOfCanisters.low >>> 0, message.maxNumberOfCanisters.high >>> 0).toNumber(true) : message.maxNumberOfCanisters;
                        if (message.sshReadonlyAccess && message.sshReadonlyAccess.length) {
                            object.sshReadonlyAccess = [];
                            for (var j = 0; j < message.sshReadonlyAccess.length; ++j)
                                object.sshReadonlyAccess[j] = message.sshReadonlyAccess[j];
                        }
                        if (message.sshBackupAccess && message.sshBackupAccess.length) {
                            object.sshBackupAccess = [];
                            for (var j = 0; j < message.sshBackupAccess.length; ++j)
                                object.sshBackupAccess[j] = message.sshBackupAccess[j];
                        }
                        if (message.ecdsaConfig != null && message.hasOwnProperty("ecdsaConfig"))
                            object.ecdsaConfig = $root.registry.subnet.v1.EcdsaConfig.toObject(message.ecdsaConfig, options);
                        return object;
                    };
    
                    /**
                     * Converts this SubnetRecord to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.SubnetRecord
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubnetRecord.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return SubnetRecord;
                })();
    
                v1.CatchUpPackageContents = (function() {
    
                    /**
                     * Properties of a CatchUpPackageContents.
                     * @memberof registry.subnet.v1
                     * @interface ICatchUpPackageContents
                     * @property {registry.subnet.v1.IInitialNiDkgTranscriptRecord|null} [initialNiDkgTranscriptLowThreshold] CatchUpPackageContents initialNiDkgTranscriptLowThreshold
                     * @property {registry.subnet.v1.IInitialNiDkgTranscriptRecord|null} [initialNiDkgTranscriptHighThreshold] CatchUpPackageContents initialNiDkgTranscriptHighThreshold
                     * @property {number|Long|null} [height] CatchUpPackageContents height
                     * @property {number|Long|null} [time] CatchUpPackageContents time
                     * @property {Uint8Array|null} [stateHash] CatchUpPackageContents stateHash
                     * @property {registry.subnet.v1.IRegistryStoreUri|null} [registryStoreUri] CatchUpPackageContents registryStoreUri
                     */
    
                    /**
                     * Constructs a new CatchUpPackageContents.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents a CatchUpPackageContents.
                     * @implements ICatchUpPackageContents
                     * @constructor
                     * @param {registry.subnet.v1.ICatchUpPackageContents=} [properties] Properties to set
                     */
                    function CatchUpPackageContents(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CatchUpPackageContents initialNiDkgTranscriptLowThreshold.
                     * @member {registry.subnet.v1.IInitialNiDkgTranscriptRecord|null|undefined} initialNiDkgTranscriptLowThreshold
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @instance
                     */
                    CatchUpPackageContents.prototype.initialNiDkgTranscriptLowThreshold = null;
    
                    /**
                     * CatchUpPackageContents initialNiDkgTranscriptHighThreshold.
                     * @member {registry.subnet.v1.IInitialNiDkgTranscriptRecord|null|undefined} initialNiDkgTranscriptHighThreshold
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @instance
                     */
                    CatchUpPackageContents.prototype.initialNiDkgTranscriptHighThreshold = null;
    
                    /**
                     * CatchUpPackageContents height.
                     * @member {number|Long} height
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @instance
                     */
                    CatchUpPackageContents.prototype.height = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * CatchUpPackageContents time.
                     * @member {number|Long} time
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @instance
                     */
                    CatchUpPackageContents.prototype.time = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * CatchUpPackageContents stateHash.
                     * @member {Uint8Array} stateHash
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @instance
                     */
                    CatchUpPackageContents.prototype.stateHash = $util.newBuffer([]);
    
                    /**
                     * CatchUpPackageContents registryStoreUri.
                     * @member {registry.subnet.v1.IRegistryStoreUri|null|undefined} registryStoreUri
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @instance
                     */
                    CatchUpPackageContents.prototype.registryStoreUri = null;
    
                    /**
                     * Creates a new CatchUpPackageContents instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @static
                     * @param {registry.subnet.v1.ICatchUpPackageContents=} [properties] Properties to set
                     * @returns {registry.subnet.v1.CatchUpPackageContents} CatchUpPackageContents instance
                     */
                    CatchUpPackageContents.create = function create(properties) {
                        return new CatchUpPackageContents(properties);
                    };
    
                    /**
                     * Encodes the specified CatchUpPackageContents message. Does not implicitly {@link registry.subnet.v1.CatchUpPackageContents.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @static
                     * @param {registry.subnet.v1.ICatchUpPackageContents} message CatchUpPackageContents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CatchUpPackageContents.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.initialNiDkgTranscriptLowThreshold != null && Object.hasOwnProperty.call(message, "initialNiDkgTranscriptLowThreshold"))
                            $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.encode(message.initialNiDkgTranscriptLowThreshold, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.initialNiDkgTranscriptHighThreshold != null && Object.hasOwnProperty.call(message, "initialNiDkgTranscriptHighThreshold"))
                            $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.encode(message.initialNiDkgTranscriptHighThreshold, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        if (message.height != null && Object.hasOwnProperty.call(message, "height"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.height);
                        if (message.time != null && Object.hasOwnProperty.call(message, "time"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.time);
                        if (message.stateHash != null && Object.hasOwnProperty.call(message, "stateHash"))
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.stateHash);
                        if (message.registryStoreUri != null && Object.hasOwnProperty.call(message, "registryStoreUri"))
                            $root.registry.subnet.v1.RegistryStoreUri.encode(message.registryStoreUri, writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CatchUpPackageContents message, length delimited. Does not implicitly {@link registry.subnet.v1.CatchUpPackageContents.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @static
                     * @param {registry.subnet.v1.ICatchUpPackageContents} message CatchUpPackageContents message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CatchUpPackageContents.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CatchUpPackageContents message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.CatchUpPackageContents} CatchUpPackageContents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CatchUpPackageContents.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.CatchUpPackageContents();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.initialNiDkgTranscriptLowThreshold = $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.initialNiDkgTranscriptHighThreshold = $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.decode(reader, reader.uint32());
                                break;
                            case 3:
                                message.height = reader.uint64();
                                break;
                            case 4:
                                message.time = reader.uint64();
                                break;
                            case 5:
                                message.stateHash = reader.bytes();
                                break;
                            case 6:
                                message.registryStoreUri = $root.registry.subnet.v1.RegistryStoreUri.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CatchUpPackageContents message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.CatchUpPackageContents} CatchUpPackageContents
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CatchUpPackageContents.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CatchUpPackageContents message.
                     * @function verify
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CatchUpPackageContents.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.initialNiDkgTranscriptLowThreshold != null && message.hasOwnProperty("initialNiDkgTranscriptLowThreshold")) {
                            var error = $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.verify(message.initialNiDkgTranscriptLowThreshold);
                            if (error)
                                return "initialNiDkgTranscriptLowThreshold." + error;
                        }
                        if (message.initialNiDkgTranscriptHighThreshold != null && message.hasOwnProperty("initialNiDkgTranscriptHighThreshold")) {
                            var error = $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.verify(message.initialNiDkgTranscriptHighThreshold);
                            if (error)
                                return "initialNiDkgTranscriptHighThreshold." + error;
                        }
                        if (message.height != null && message.hasOwnProperty("height"))
                            if (!$util.isInteger(message.height) && !(message.height && $util.isInteger(message.height.low) && $util.isInteger(message.height.high)))
                                return "height: integer|Long expected";
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (!$util.isInteger(message.time) && !(message.time && $util.isInteger(message.time.low) && $util.isInteger(message.time.high)))
                                return "time: integer|Long expected";
                        if (message.stateHash != null && message.hasOwnProperty("stateHash"))
                            if (!(message.stateHash && typeof message.stateHash.length === "number" || $util.isString(message.stateHash)))
                                return "stateHash: buffer expected";
                        if (message.registryStoreUri != null && message.hasOwnProperty("registryStoreUri")) {
                            var error = $root.registry.subnet.v1.RegistryStoreUri.verify(message.registryStoreUri);
                            if (error)
                                return "registryStoreUri." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a CatchUpPackageContents message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.CatchUpPackageContents} CatchUpPackageContents
                     */
                    CatchUpPackageContents.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.CatchUpPackageContents)
                            return object;
                        var message = new $root.registry.subnet.v1.CatchUpPackageContents();
                        if (object.initialNiDkgTranscriptLowThreshold != null) {
                            if (typeof object.initialNiDkgTranscriptLowThreshold !== "object")
                                throw TypeError(".registry.subnet.v1.CatchUpPackageContents.initialNiDkgTranscriptLowThreshold: object expected");
                            message.initialNiDkgTranscriptLowThreshold = $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.fromObject(object.initialNiDkgTranscriptLowThreshold);
                        }
                        if (object.initialNiDkgTranscriptHighThreshold != null) {
                            if (typeof object.initialNiDkgTranscriptHighThreshold !== "object")
                                throw TypeError(".registry.subnet.v1.CatchUpPackageContents.initialNiDkgTranscriptHighThreshold: object expected");
                            message.initialNiDkgTranscriptHighThreshold = $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.fromObject(object.initialNiDkgTranscriptHighThreshold);
                        }
                        if (object.height != null)
                            if ($util.Long)
                                (message.height = $util.Long.fromValue(object.height)).unsigned = true;
                            else if (typeof object.height === "string")
                                message.height = parseInt(object.height, 10);
                            else if (typeof object.height === "number")
                                message.height = object.height;
                            else if (typeof object.height === "object")
                                message.height = new $util.LongBits(object.height.low >>> 0, object.height.high >>> 0).toNumber(true);
                        if (object.time != null)
                            if ($util.Long)
                                (message.time = $util.Long.fromValue(object.time)).unsigned = true;
                            else if (typeof object.time === "string")
                                message.time = parseInt(object.time, 10);
                            else if (typeof object.time === "number")
                                message.time = object.time;
                            else if (typeof object.time === "object")
                                message.time = new $util.LongBits(object.time.low >>> 0, object.time.high >>> 0).toNumber(true);
                        if (object.stateHash != null)
                            if (typeof object.stateHash === "string")
                                $util.base64.decode(object.stateHash, message.stateHash = $util.newBuffer($util.base64.length(object.stateHash)), 0);
                            else if (object.stateHash.length)
                                message.stateHash = object.stateHash;
                        if (object.registryStoreUri != null) {
                            if (typeof object.registryStoreUri !== "object")
                                throw TypeError(".registry.subnet.v1.CatchUpPackageContents.registryStoreUri: object expected");
                            message.registryStoreUri = $root.registry.subnet.v1.RegistryStoreUri.fromObject(object.registryStoreUri);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CatchUpPackageContents message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @static
                     * @param {registry.subnet.v1.CatchUpPackageContents} message CatchUpPackageContents
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CatchUpPackageContents.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.initialNiDkgTranscriptLowThreshold = null;
                            object.initialNiDkgTranscriptHighThreshold = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.height = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.height = options.longs === String ? "0" : 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.time = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.time = options.longs === String ? "0" : 0;
                            if (options.bytes === String)
                                object.stateHash = "";
                            else {
                                object.stateHash = [];
                                if (options.bytes !== Array)
                                    object.stateHash = $util.newBuffer(object.stateHash);
                            }
                            object.registryStoreUri = null;
                        }
                        if (message.initialNiDkgTranscriptLowThreshold != null && message.hasOwnProperty("initialNiDkgTranscriptLowThreshold"))
                            object.initialNiDkgTranscriptLowThreshold = $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.toObject(message.initialNiDkgTranscriptLowThreshold, options);
                        if (message.initialNiDkgTranscriptHighThreshold != null && message.hasOwnProperty("initialNiDkgTranscriptHighThreshold"))
                            object.initialNiDkgTranscriptHighThreshold = $root.registry.subnet.v1.InitialNiDkgTranscriptRecord.toObject(message.initialNiDkgTranscriptHighThreshold, options);
                        if (message.height != null && message.hasOwnProperty("height"))
                            if (typeof message.height === "number")
                                object.height = options.longs === String ? String(message.height) : message.height;
                            else
                                object.height = options.longs === String ? $util.Long.prototype.toString.call(message.height) : options.longs === Number ? new $util.LongBits(message.height.low >>> 0, message.height.high >>> 0).toNumber(true) : message.height;
                        if (message.time != null && message.hasOwnProperty("time"))
                            if (typeof message.time === "number")
                                object.time = options.longs === String ? String(message.time) : message.time;
                            else
                                object.time = options.longs === String ? $util.Long.prototype.toString.call(message.time) : options.longs === Number ? new $util.LongBits(message.time.low >>> 0, message.time.high >>> 0).toNumber(true) : message.time;
                        if (message.stateHash != null && message.hasOwnProperty("stateHash"))
                            object.stateHash = options.bytes === String ? $util.base64.encode(message.stateHash, 0, message.stateHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.stateHash) : message.stateHash;
                        if (message.registryStoreUri != null && message.hasOwnProperty("registryStoreUri"))
                            object.registryStoreUri = $root.registry.subnet.v1.RegistryStoreUri.toObject(message.registryStoreUri, options);
                        return object;
                    };
    
                    /**
                     * Converts this CatchUpPackageContents to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.CatchUpPackageContents
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CatchUpPackageContents.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return CatchUpPackageContents;
                })();
    
                v1.RegistryStoreUri = (function() {
    
                    /**
                     * Properties of a RegistryStoreUri.
                     * @memberof registry.subnet.v1
                     * @interface IRegistryStoreUri
                     * @property {string|null} [uri] must be provided as gzipped tar archive
                     * @property {string|null} [hash] provided URI
                     * @property {number|Long|null} [registryVersion] The registry version that should be used for the catch up package contents
                     */
    
                    /**
                     * Constructs a new RegistryStoreUri.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents a RegistryStoreUri.
                     * @implements IRegistryStoreUri
                     * @constructor
                     * @param {registry.subnet.v1.IRegistryStoreUri=} [properties] Properties to set
                     */
                    function RegistryStoreUri(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * must be provided as gzipped tar archive
                     * @member {string} uri
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @instance
                     */
                    RegistryStoreUri.prototype.uri = "";
    
                    /**
                     * provided URI
                     * @member {string} hash
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @instance
                     */
                    RegistryStoreUri.prototype.hash = "";
    
                    /**
                     * The registry version that should be used for the catch up package contents
                     * @member {number|Long} registryVersion
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @instance
                     */
                    RegistryStoreUri.prototype.registryVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * Creates a new RegistryStoreUri instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @static
                     * @param {registry.subnet.v1.IRegistryStoreUri=} [properties] Properties to set
                     * @returns {registry.subnet.v1.RegistryStoreUri} RegistryStoreUri instance
                     */
                    RegistryStoreUri.create = function create(properties) {
                        return new RegistryStoreUri(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryStoreUri message. Does not implicitly {@link registry.subnet.v1.RegistryStoreUri.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @static
                     * @param {registry.subnet.v1.IRegistryStoreUri} message RegistryStoreUri message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryStoreUri.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.uri != null && Object.hasOwnProperty.call(message, "uri"))
                            writer.uint32(/* id 1, wireType 2 =*/10).string(message.uri);
                        if (message.hash != null && Object.hasOwnProperty.call(message, "hash"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.hash);
                        if (message.registryVersion != null && Object.hasOwnProperty.call(message, "registryVersion"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.registryVersion);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryStoreUri message, length delimited. Does not implicitly {@link registry.subnet.v1.RegistryStoreUri.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @static
                     * @param {registry.subnet.v1.IRegistryStoreUri} message RegistryStoreUri message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryStoreUri.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryStoreUri message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.RegistryStoreUri} RegistryStoreUri
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryStoreUri.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.RegistryStoreUri();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.uri = reader.string();
                                break;
                            case 2:
                                message.hash = reader.string();
                                break;
                            case 3:
                                message.registryVersion = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryStoreUri message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.RegistryStoreUri} RegistryStoreUri
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryStoreUri.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryStoreUri message.
                     * @function verify
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryStoreUri.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.uri != null && message.hasOwnProperty("uri"))
                            if (!$util.isString(message.uri))
                                return "uri: string expected";
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            if (!$util.isString(message.hash))
                                return "hash: string expected";
                        if (message.registryVersion != null && message.hasOwnProperty("registryVersion"))
                            if (!$util.isInteger(message.registryVersion) && !(message.registryVersion && $util.isInteger(message.registryVersion.low) && $util.isInteger(message.registryVersion.high)))
                                return "registryVersion: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryStoreUri message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.RegistryStoreUri} RegistryStoreUri
                     */
                    RegistryStoreUri.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.RegistryStoreUri)
                            return object;
                        var message = new $root.registry.subnet.v1.RegistryStoreUri();
                        if (object.uri != null)
                            message.uri = String(object.uri);
                        if (object.hash != null)
                            message.hash = String(object.hash);
                        if (object.registryVersion != null)
                            if ($util.Long)
                                (message.registryVersion = $util.Long.fromValue(object.registryVersion)).unsigned = true;
                            else if (typeof object.registryVersion === "string")
                                message.registryVersion = parseInt(object.registryVersion, 10);
                            else if (typeof object.registryVersion === "number")
                                message.registryVersion = object.registryVersion;
                            else if (typeof object.registryVersion === "object")
                                message.registryVersion = new $util.LongBits(object.registryVersion.low >>> 0, object.registryVersion.high >>> 0).toNumber(true);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryStoreUri message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @static
                     * @param {registry.subnet.v1.RegistryStoreUri} message RegistryStoreUri
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryStoreUri.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.uri = "";
                            object.hash = "";
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.registryVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.registryVersion = options.longs === String ? "0" : 0;
                        }
                        if (message.uri != null && message.hasOwnProperty("uri"))
                            object.uri = message.uri;
                        if (message.hash != null && message.hasOwnProperty("hash"))
                            object.hash = message.hash;
                        if (message.registryVersion != null && message.hasOwnProperty("registryVersion"))
                            if (typeof message.registryVersion === "number")
                                object.registryVersion = options.longs === String ? String(message.registryVersion) : message.registryVersion;
                            else
                                object.registryVersion = options.longs === String ? $util.Long.prototype.toString.call(message.registryVersion) : options.longs === Number ? new $util.LongBits(message.registryVersion.low >>> 0, message.registryVersion.high >>> 0).toNumber(true) : message.registryVersion;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryStoreUri to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.RegistryStoreUri
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryStoreUri.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryStoreUri;
                })();
    
                v1.SubnetListRecord = (function() {
    
                    /**
                     * Properties of a SubnetListRecord.
                     * @memberof registry.subnet.v1
                     * @interface ISubnetListRecord
                     * @property {Array.<Uint8Array>|null} [subnets] SubnetListRecord subnets
                     */
    
                    /**
                     * Constructs a new SubnetListRecord.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents a SubnetListRecord.
                     * @implements ISubnetListRecord
                     * @constructor
                     * @param {registry.subnet.v1.ISubnetListRecord=} [properties] Properties to set
                     */
                    function SubnetListRecord(properties) {
                        this.subnets = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SubnetListRecord subnets.
                     * @member {Array.<Uint8Array>} subnets
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @instance
                     */
                    SubnetListRecord.prototype.subnets = $util.emptyArray;
    
                    /**
                     * Creates a new SubnetListRecord instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @static
                     * @param {registry.subnet.v1.ISubnetListRecord=} [properties] Properties to set
                     * @returns {registry.subnet.v1.SubnetListRecord} SubnetListRecord instance
                     */
                    SubnetListRecord.create = function create(properties) {
                        return new SubnetListRecord(properties);
                    };
    
                    /**
                     * Encodes the specified SubnetListRecord message. Does not implicitly {@link registry.subnet.v1.SubnetListRecord.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @static
                     * @param {registry.subnet.v1.ISubnetListRecord} message SubnetListRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubnetListRecord.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.subnets != null && message.subnets.length)
                            for (var i = 0; i < message.subnets.length; ++i)
                                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.subnets[i]);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SubnetListRecord message, length delimited. Does not implicitly {@link registry.subnet.v1.SubnetListRecord.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @static
                     * @param {registry.subnet.v1.ISubnetListRecord} message SubnetListRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubnetListRecord.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubnetListRecord message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.SubnetListRecord} SubnetListRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubnetListRecord.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.SubnetListRecord();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 2:
                                if (!(message.subnets && message.subnets.length))
                                    message.subnets = [];
                                message.subnets.push(reader.bytes());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a SubnetListRecord message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.SubnetListRecord} SubnetListRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubnetListRecord.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SubnetListRecord message.
                     * @function verify
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubnetListRecord.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.subnets != null && message.hasOwnProperty("subnets")) {
                            if (!Array.isArray(message.subnets))
                                return "subnets: array expected";
                            for (var i = 0; i < message.subnets.length; ++i)
                                if (!(message.subnets[i] && typeof message.subnets[i].length === "number" || $util.isString(message.subnets[i])))
                                    return "subnets: buffer[] expected";
                        }
                        return null;
                    };
    
                    /**
                     * Creates a SubnetListRecord message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.SubnetListRecord} SubnetListRecord
                     */
                    SubnetListRecord.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.SubnetListRecord)
                            return object;
                        var message = new $root.registry.subnet.v1.SubnetListRecord();
                        if (object.subnets) {
                            if (!Array.isArray(object.subnets))
                                throw TypeError(".registry.subnet.v1.SubnetListRecord.subnets: array expected");
                            message.subnets = [];
                            for (var i = 0; i < object.subnets.length; ++i)
                                if (typeof object.subnets[i] === "string")
                                    $util.base64.decode(object.subnets[i], message.subnets[i] = $util.newBuffer($util.base64.length(object.subnets[i])), 0);
                                else if (object.subnets[i].length)
                                    message.subnets[i] = object.subnets[i];
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubnetListRecord message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @static
                     * @param {registry.subnet.v1.SubnetListRecord} message SubnetListRecord
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubnetListRecord.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.subnets = [];
                        if (message.subnets && message.subnets.length) {
                            object.subnets = [];
                            for (var j = 0; j < message.subnets.length; ++j)
                                object.subnets[j] = options.bytes === String ? $util.base64.encode(message.subnets[j], 0, message.subnets[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.subnets[j]) : message.subnets[j];
                        }
                        return object;
                    };
    
                    /**
                     * Converts this SubnetListRecord to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.SubnetListRecord
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubnetListRecord.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return SubnetListRecord;
                })();
    
                v1.InitialNiDkgTranscriptRecord = (function() {
    
                    /**
                     * Properties of an InitialNiDkgTranscriptRecord.
                     * @memberof registry.subnet.v1
                     * @interface IInitialNiDkgTranscriptRecord
                     * @property {types.v1.INiDkgId|null} [id] InitialNiDkgTranscriptRecord id
                     * @property {number|null} [threshold] InitialNiDkgTranscriptRecord threshold
                     * @property {Array.<Uint8Array>|null} [committee] InitialNiDkgTranscriptRecord committee
                     * @property {number|Long|null} [registryVersion] InitialNiDkgTranscriptRecord registryVersion
                     * @property {Uint8Array|null} [internalCspTranscript] InitialNiDkgTranscriptRecord internalCspTranscript
                     */
    
                    /**
                     * Constructs a new InitialNiDkgTranscriptRecord.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents an InitialNiDkgTranscriptRecord.
                     * @implements IInitialNiDkgTranscriptRecord
                     * @constructor
                     * @param {registry.subnet.v1.IInitialNiDkgTranscriptRecord=} [properties] Properties to set
                     */
                    function InitialNiDkgTranscriptRecord(properties) {
                        this.committee = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * InitialNiDkgTranscriptRecord id.
                     * @member {types.v1.INiDkgId|null|undefined} id
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @instance
                     */
                    InitialNiDkgTranscriptRecord.prototype.id = null;
    
                    /**
                     * InitialNiDkgTranscriptRecord threshold.
                     * @member {number} threshold
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @instance
                     */
                    InitialNiDkgTranscriptRecord.prototype.threshold = 0;
    
                    /**
                     * InitialNiDkgTranscriptRecord committee.
                     * @member {Array.<Uint8Array>} committee
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @instance
                     */
                    InitialNiDkgTranscriptRecord.prototype.committee = $util.emptyArray;
    
                    /**
                     * InitialNiDkgTranscriptRecord registryVersion.
                     * @member {number|Long} registryVersion
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @instance
                     */
                    InitialNiDkgTranscriptRecord.prototype.registryVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * InitialNiDkgTranscriptRecord internalCspTranscript.
                     * @member {Uint8Array} internalCspTranscript
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @instance
                     */
                    InitialNiDkgTranscriptRecord.prototype.internalCspTranscript = $util.newBuffer([]);
    
                    /**
                     * Creates a new InitialNiDkgTranscriptRecord instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @static
                     * @param {registry.subnet.v1.IInitialNiDkgTranscriptRecord=} [properties] Properties to set
                     * @returns {registry.subnet.v1.InitialNiDkgTranscriptRecord} InitialNiDkgTranscriptRecord instance
                     */
                    InitialNiDkgTranscriptRecord.create = function create(properties) {
                        return new InitialNiDkgTranscriptRecord(properties);
                    };
    
                    /**
                     * Encodes the specified InitialNiDkgTranscriptRecord message. Does not implicitly {@link registry.subnet.v1.InitialNiDkgTranscriptRecord.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @static
                     * @param {registry.subnet.v1.IInitialNiDkgTranscriptRecord} message InitialNiDkgTranscriptRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InitialNiDkgTranscriptRecord.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.id != null && Object.hasOwnProperty.call(message, "id"))
                            $root.types.v1.NiDkgId.encode(message.id, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.threshold != null && Object.hasOwnProperty.call(message, "threshold"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.threshold);
                        if (message.committee != null && message.committee.length)
                            for (var i = 0; i < message.committee.length; ++i)
                                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.committee[i]);
                        if (message.registryVersion != null && Object.hasOwnProperty.call(message, "registryVersion"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.registryVersion);
                        if (message.internalCspTranscript != null && Object.hasOwnProperty.call(message, "internalCspTranscript"))
                            writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.internalCspTranscript);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified InitialNiDkgTranscriptRecord message, length delimited. Does not implicitly {@link registry.subnet.v1.InitialNiDkgTranscriptRecord.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @static
                     * @param {registry.subnet.v1.IInitialNiDkgTranscriptRecord} message InitialNiDkgTranscriptRecord message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    InitialNiDkgTranscriptRecord.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an InitialNiDkgTranscriptRecord message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.InitialNiDkgTranscriptRecord} InitialNiDkgTranscriptRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InitialNiDkgTranscriptRecord.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.InitialNiDkgTranscriptRecord();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.id = $root.types.v1.NiDkgId.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.threshold = reader.uint32();
                                break;
                            case 3:
                                if (!(message.committee && message.committee.length))
                                    message.committee = [];
                                message.committee.push(reader.bytes());
                                break;
                            case 4:
                                message.registryVersion = reader.uint64();
                                break;
                            case 5:
                                message.internalCspTranscript = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an InitialNiDkgTranscriptRecord message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.InitialNiDkgTranscriptRecord} InitialNiDkgTranscriptRecord
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    InitialNiDkgTranscriptRecord.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an InitialNiDkgTranscriptRecord message.
                     * @function verify
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    InitialNiDkgTranscriptRecord.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.id != null && message.hasOwnProperty("id")) {
                            var error = $root.types.v1.NiDkgId.verify(message.id);
                            if (error)
                                return "id." + error;
                        }
                        if (message.threshold != null && message.hasOwnProperty("threshold"))
                            if (!$util.isInteger(message.threshold))
                                return "threshold: integer expected";
                        if (message.committee != null && message.hasOwnProperty("committee")) {
                            if (!Array.isArray(message.committee))
                                return "committee: array expected";
                            for (var i = 0; i < message.committee.length; ++i)
                                if (!(message.committee[i] && typeof message.committee[i].length === "number" || $util.isString(message.committee[i])))
                                    return "committee: buffer[] expected";
                        }
                        if (message.registryVersion != null && message.hasOwnProperty("registryVersion"))
                            if (!$util.isInteger(message.registryVersion) && !(message.registryVersion && $util.isInteger(message.registryVersion.low) && $util.isInteger(message.registryVersion.high)))
                                return "registryVersion: integer|Long expected";
                        if (message.internalCspTranscript != null && message.hasOwnProperty("internalCspTranscript"))
                            if (!(message.internalCspTranscript && typeof message.internalCspTranscript.length === "number" || $util.isString(message.internalCspTranscript)))
                                return "internalCspTranscript: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates an InitialNiDkgTranscriptRecord message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.InitialNiDkgTranscriptRecord} InitialNiDkgTranscriptRecord
                     */
                    InitialNiDkgTranscriptRecord.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.InitialNiDkgTranscriptRecord)
                            return object;
                        var message = new $root.registry.subnet.v1.InitialNiDkgTranscriptRecord();
                        if (object.id != null) {
                            if (typeof object.id !== "object")
                                throw TypeError(".registry.subnet.v1.InitialNiDkgTranscriptRecord.id: object expected");
                            message.id = $root.types.v1.NiDkgId.fromObject(object.id);
                        }
                        if (object.threshold != null)
                            message.threshold = object.threshold >>> 0;
                        if (object.committee) {
                            if (!Array.isArray(object.committee))
                                throw TypeError(".registry.subnet.v1.InitialNiDkgTranscriptRecord.committee: array expected");
                            message.committee = [];
                            for (var i = 0; i < object.committee.length; ++i)
                                if (typeof object.committee[i] === "string")
                                    $util.base64.decode(object.committee[i], message.committee[i] = $util.newBuffer($util.base64.length(object.committee[i])), 0);
                                else if (object.committee[i].length)
                                    message.committee[i] = object.committee[i];
                        }
                        if (object.registryVersion != null)
                            if ($util.Long)
                                (message.registryVersion = $util.Long.fromValue(object.registryVersion)).unsigned = true;
                            else if (typeof object.registryVersion === "string")
                                message.registryVersion = parseInt(object.registryVersion, 10);
                            else if (typeof object.registryVersion === "number")
                                message.registryVersion = object.registryVersion;
                            else if (typeof object.registryVersion === "object")
                                message.registryVersion = new $util.LongBits(object.registryVersion.low >>> 0, object.registryVersion.high >>> 0).toNumber(true);
                        if (object.internalCspTranscript != null)
                            if (typeof object.internalCspTranscript === "string")
                                $util.base64.decode(object.internalCspTranscript, message.internalCspTranscript = $util.newBuffer($util.base64.length(object.internalCspTranscript)), 0);
                            else if (object.internalCspTranscript.length)
                                message.internalCspTranscript = object.internalCspTranscript;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an InitialNiDkgTranscriptRecord message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @static
                     * @param {registry.subnet.v1.InitialNiDkgTranscriptRecord} message InitialNiDkgTranscriptRecord
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    InitialNiDkgTranscriptRecord.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.committee = [];
                        if (options.defaults) {
                            object.id = null;
                            object.threshold = 0;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.registryVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.registryVersion = options.longs === String ? "0" : 0;
                            if (options.bytes === String)
                                object.internalCspTranscript = "";
                            else {
                                object.internalCspTranscript = [];
                                if (options.bytes !== Array)
                                    object.internalCspTranscript = $util.newBuffer(object.internalCspTranscript);
                            }
                        }
                        if (message.id != null && message.hasOwnProperty("id"))
                            object.id = $root.types.v1.NiDkgId.toObject(message.id, options);
                        if (message.threshold != null && message.hasOwnProperty("threshold"))
                            object.threshold = message.threshold;
                        if (message.committee && message.committee.length) {
                            object.committee = [];
                            for (var j = 0; j < message.committee.length; ++j)
                                object.committee[j] = options.bytes === String ? $util.base64.encode(message.committee[j], 0, message.committee[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.committee[j]) : message.committee[j];
                        }
                        if (message.registryVersion != null && message.hasOwnProperty("registryVersion"))
                            if (typeof message.registryVersion === "number")
                                object.registryVersion = options.longs === String ? String(message.registryVersion) : message.registryVersion;
                            else
                                object.registryVersion = options.longs === String ? $util.Long.prototype.toString.call(message.registryVersion) : options.longs === Number ? new $util.LongBits(message.registryVersion.low >>> 0, message.registryVersion.high >>> 0).toNumber(true) : message.registryVersion;
                        if (message.internalCspTranscript != null && message.hasOwnProperty("internalCspTranscript"))
                            object.internalCspTranscript = options.bytes === String ? $util.base64.encode(message.internalCspTranscript, 0, message.internalCspTranscript.length) : options.bytes === Array ? Array.prototype.slice.call(message.internalCspTranscript) : message.internalCspTranscript;
                        return object;
                    };
    
                    /**
                     * Converts this InitialNiDkgTranscriptRecord to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.InitialNiDkgTranscriptRecord
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    InitialNiDkgTranscriptRecord.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return InitialNiDkgTranscriptRecord;
                })();
    
                v1.GossipConfig = (function() {
    
                    /**
                     * Properties of a GossipConfig.
                     * @memberof registry.subnet.v1
                     * @interface IGossipConfig
                     * @property {number|null} [maxArtifactStreamsPerPeer] GossipConfig maxArtifactStreamsPerPeer
                     * @property {number|null} [maxChunkWaitMs] GossipConfig maxChunkWaitMs
                     * @property {number|null} [maxDuplicity] GossipConfig maxDuplicity
                     * @property {number|null} [maxChunkSize] GossipConfig maxChunkSize
                     * @property {number|null} [receiveCheckCacheSize] GossipConfig receiveCheckCacheSize
                     * @property {number|null} [pfnEvaluationPeriodMs] GossipConfig pfnEvaluationPeriodMs
                     * @property {number|null} [registryPollPeriodMs] GossipConfig registryPollPeriodMs
                     * @property {number|null} [retransmissionRequestMs] GossipConfig retransmissionRequestMs
                     * @property {registry.subnet.v1.IGossipAdvertConfig|null} [advertConfig] GossipConfig advertConfig
                     */
    
                    /**
                     * Constructs a new GossipConfig.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents a GossipConfig.
                     * @implements IGossipConfig
                     * @constructor
                     * @param {registry.subnet.v1.IGossipConfig=} [properties] Properties to set
                     */
                    function GossipConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GossipConfig maxArtifactStreamsPerPeer.
                     * @member {number} maxArtifactStreamsPerPeer
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.maxArtifactStreamsPerPeer = 0;
    
                    /**
                     * GossipConfig maxChunkWaitMs.
                     * @member {number} maxChunkWaitMs
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.maxChunkWaitMs = 0;
    
                    /**
                     * GossipConfig maxDuplicity.
                     * @member {number} maxDuplicity
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.maxDuplicity = 0;
    
                    /**
                     * GossipConfig maxChunkSize.
                     * @member {number} maxChunkSize
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.maxChunkSize = 0;
    
                    /**
                     * GossipConfig receiveCheckCacheSize.
                     * @member {number} receiveCheckCacheSize
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.receiveCheckCacheSize = 0;
    
                    /**
                     * GossipConfig pfnEvaluationPeriodMs.
                     * @member {number} pfnEvaluationPeriodMs
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.pfnEvaluationPeriodMs = 0;
    
                    /**
                     * GossipConfig registryPollPeriodMs.
                     * @member {number} registryPollPeriodMs
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.registryPollPeriodMs = 0;
    
                    /**
                     * GossipConfig retransmissionRequestMs.
                     * @member {number} retransmissionRequestMs
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.retransmissionRequestMs = 0;
    
                    /**
                     * GossipConfig advertConfig.
                     * @member {registry.subnet.v1.IGossipAdvertConfig|null|undefined} advertConfig
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     */
                    GossipConfig.prototype.advertConfig = null;
    
                    /**
                     * Creates a new GossipConfig instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.GossipConfig
                     * @static
                     * @param {registry.subnet.v1.IGossipConfig=} [properties] Properties to set
                     * @returns {registry.subnet.v1.GossipConfig} GossipConfig instance
                     */
                    GossipConfig.create = function create(properties) {
                        return new GossipConfig(properties);
                    };
    
                    /**
                     * Encodes the specified GossipConfig message. Does not implicitly {@link registry.subnet.v1.GossipConfig.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.GossipConfig
                     * @static
                     * @param {registry.subnet.v1.IGossipConfig} message GossipConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GossipConfig.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.maxArtifactStreamsPerPeer != null && Object.hasOwnProperty.call(message, "maxArtifactStreamsPerPeer"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.maxArtifactStreamsPerPeer);
                        if (message.maxChunkWaitMs != null && Object.hasOwnProperty.call(message, "maxChunkWaitMs"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.maxChunkWaitMs);
                        if (message.maxDuplicity != null && Object.hasOwnProperty.call(message, "maxDuplicity"))
                            writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.maxDuplicity);
                        if (message.maxChunkSize != null && Object.hasOwnProperty.call(message, "maxChunkSize"))
                            writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.maxChunkSize);
                        if (message.receiveCheckCacheSize != null && Object.hasOwnProperty.call(message, "receiveCheckCacheSize"))
                            writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.receiveCheckCacheSize);
                        if (message.pfnEvaluationPeriodMs != null && Object.hasOwnProperty.call(message, "pfnEvaluationPeriodMs"))
                            writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.pfnEvaluationPeriodMs);
                        if (message.registryPollPeriodMs != null && Object.hasOwnProperty.call(message, "registryPollPeriodMs"))
                            writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.registryPollPeriodMs);
                        if (message.retransmissionRequestMs != null && Object.hasOwnProperty.call(message, "retransmissionRequestMs"))
                            writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.retransmissionRequestMs);
                        if (message.advertConfig != null && Object.hasOwnProperty.call(message, "advertConfig"))
                            $root.registry.subnet.v1.GossipAdvertConfig.encode(message.advertConfig, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GossipConfig message, length delimited. Does not implicitly {@link registry.subnet.v1.GossipConfig.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.GossipConfig
                     * @static
                     * @param {registry.subnet.v1.IGossipConfig} message GossipConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GossipConfig.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GossipConfig message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.GossipConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.GossipConfig} GossipConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GossipConfig.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.GossipConfig();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.maxArtifactStreamsPerPeer = reader.uint32();
                                break;
                            case 2:
                                message.maxChunkWaitMs = reader.uint32();
                                break;
                            case 3:
                                message.maxDuplicity = reader.uint32();
                                break;
                            case 4:
                                message.maxChunkSize = reader.uint32();
                                break;
                            case 5:
                                message.receiveCheckCacheSize = reader.uint32();
                                break;
                            case 6:
                                message.pfnEvaluationPeriodMs = reader.uint32();
                                break;
                            case 7:
                                message.registryPollPeriodMs = reader.uint32();
                                break;
                            case 8:
                                message.retransmissionRequestMs = reader.uint32();
                                break;
                            case 10:
                                message.advertConfig = $root.registry.subnet.v1.GossipAdvertConfig.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GossipConfig message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.GossipConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.GossipConfig} GossipConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GossipConfig.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GossipConfig message.
                     * @function verify
                     * @memberof registry.subnet.v1.GossipConfig
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GossipConfig.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.maxArtifactStreamsPerPeer != null && message.hasOwnProperty("maxArtifactStreamsPerPeer"))
                            if (!$util.isInteger(message.maxArtifactStreamsPerPeer))
                                return "maxArtifactStreamsPerPeer: integer expected";
                        if (message.maxChunkWaitMs != null && message.hasOwnProperty("maxChunkWaitMs"))
                            if (!$util.isInteger(message.maxChunkWaitMs))
                                return "maxChunkWaitMs: integer expected";
                        if (message.maxDuplicity != null && message.hasOwnProperty("maxDuplicity"))
                            if (!$util.isInteger(message.maxDuplicity))
                                return "maxDuplicity: integer expected";
                        if (message.maxChunkSize != null && message.hasOwnProperty("maxChunkSize"))
                            if (!$util.isInteger(message.maxChunkSize))
                                return "maxChunkSize: integer expected";
                        if (message.receiveCheckCacheSize != null && message.hasOwnProperty("receiveCheckCacheSize"))
                            if (!$util.isInteger(message.receiveCheckCacheSize))
                                return "receiveCheckCacheSize: integer expected";
                        if (message.pfnEvaluationPeriodMs != null && message.hasOwnProperty("pfnEvaluationPeriodMs"))
                            if (!$util.isInteger(message.pfnEvaluationPeriodMs))
                                return "pfnEvaluationPeriodMs: integer expected";
                        if (message.registryPollPeriodMs != null && message.hasOwnProperty("registryPollPeriodMs"))
                            if (!$util.isInteger(message.registryPollPeriodMs))
                                return "registryPollPeriodMs: integer expected";
                        if (message.retransmissionRequestMs != null && message.hasOwnProperty("retransmissionRequestMs"))
                            if (!$util.isInteger(message.retransmissionRequestMs))
                                return "retransmissionRequestMs: integer expected";
                        if (message.advertConfig != null && message.hasOwnProperty("advertConfig")) {
                            var error = $root.registry.subnet.v1.GossipAdvertConfig.verify(message.advertConfig);
                            if (error)
                                return "advertConfig." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates a GossipConfig message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.GossipConfig
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.GossipConfig} GossipConfig
                     */
                    GossipConfig.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.GossipConfig)
                            return object;
                        var message = new $root.registry.subnet.v1.GossipConfig();
                        if (object.maxArtifactStreamsPerPeer != null)
                            message.maxArtifactStreamsPerPeer = object.maxArtifactStreamsPerPeer >>> 0;
                        if (object.maxChunkWaitMs != null)
                            message.maxChunkWaitMs = object.maxChunkWaitMs >>> 0;
                        if (object.maxDuplicity != null)
                            message.maxDuplicity = object.maxDuplicity >>> 0;
                        if (object.maxChunkSize != null)
                            message.maxChunkSize = object.maxChunkSize >>> 0;
                        if (object.receiveCheckCacheSize != null)
                            message.receiveCheckCacheSize = object.receiveCheckCacheSize >>> 0;
                        if (object.pfnEvaluationPeriodMs != null)
                            message.pfnEvaluationPeriodMs = object.pfnEvaluationPeriodMs >>> 0;
                        if (object.registryPollPeriodMs != null)
                            message.registryPollPeriodMs = object.registryPollPeriodMs >>> 0;
                        if (object.retransmissionRequestMs != null)
                            message.retransmissionRequestMs = object.retransmissionRequestMs >>> 0;
                        if (object.advertConfig != null) {
                            if (typeof object.advertConfig !== "object")
                                throw TypeError(".registry.subnet.v1.GossipConfig.advertConfig: object expected");
                            message.advertConfig = $root.registry.subnet.v1.GossipAdvertConfig.fromObject(object.advertConfig);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GossipConfig message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.GossipConfig
                     * @static
                     * @param {registry.subnet.v1.GossipConfig} message GossipConfig
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GossipConfig.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.maxArtifactStreamsPerPeer = 0;
                            object.maxChunkWaitMs = 0;
                            object.maxDuplicity = 0;
                            object.maxChunkSize = 0;
                            object.receiveCheckCacheSize = 0;
                            object.pfnEvaluationPeriodMs = 0;
                            object.registryPollPeriodMs = 0;
                            object.retransmissionRequestMs = 0;
                            object.advertConfig = null;
                        }
                        if (message.maxArtifactStreamsPerPeer != null && message.hasOwnProperty("maxArtifactStreamsPerPeer"))
                            object.maxArtifactStreamsPerPeer = message.maxArtifactStreamsPerPeer;
                        if (message.maxChunkWaitMs != null && message.hasOwnProperty("maxChunkWaitMs"))
                            object.maxChunkWaitMs = message.maxChunkWaitMs;
                        if (message.maxDuplicity != null && message.hasOwnProperty("maxDuplicity"))
                            object.maxDuplicity = message.maxDuplicity;
                        if (message.maxChunkSize != null && message.hasOwnProperty("maxChunkSize"))
                            object.maxChunkSize = message.maxChunkSize;
                        if (message.receiveCheckCacheSize != null && message.hasOwnProperty("receiveCheckCacheSize"))
                            object.receiveCheckCacheSize = message.receiveCheckCacheSize;
                        if (message.pfnEvaluationPeriodMs != null && message.hasOwnProperty("pfnEvaluationPeriodMs"))
                            object.pfnEvaluationPeriodMs = message.pfnEvaluationPeriodMs;
                        if (message.registryPollPeriodMs != null && message.hasOwnProperty("registryPollPeriodMs"))
                            object.registryPollPeriodMs = message.registryPollPeriodMs;
                        if (message.retransmissionRequestMs != null && message.hasOwnProperty("retransmissionRequestMs"))
                            object.retransmissionRequestMs = message.retransmissionRequestMs;
                        if (message.advertConfig != null && message.hasOwnProperty("advertConfig"))
                            object.advertConfig = $root.registry.subnet.v1.GossipAdvertConfig.toObject(message.advertConfig, options);
                        return object;
                    };
    
                    /**
                     * Converts this GossipConfig to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.GossipConfig
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GossipConfig.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GossipConfig;
                })();
    
                v1.GossipAdvertConfig = (function() {
    
                    /**
                     * Properties of a GossipAdvertConfig.
                     * @memberof registry.subnet.v1
                     * @interface IGossipAdvertConfig
                     * @property {number|null} [bestEffortPercentage] GossipAdvertConfig bestEffortPercentage
                     */
    
                    /**
                     * Constructs a new GossipAdvertConfig.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents a GossipAdvertConfig.
                     * @implements IGossipAdvertConfig
                     * @constructor
                     * @param {registry.subnet.v1.IGossipAdvertConfig=} [properties] Properties to set
                     */
                    function GossipAdvertConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * GossipAdvertConfig bestEffortPercentage.
                     * @member {number} bestEffortPercentage
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @instance
                     */
                    GossipAdvertConfig.prototype.bestEffortPercentage = 0;
    
                    /**
                     * Creates a new GossipAdvertConfig instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @static
                     * @param {registry.subnet.v1.IGossipAdvertConfig=} [properties] Properties to set
                     * @returns {registry.subnet.v1.GossipAdvertConfig} GossipAdvertConfig instance
                     */
                    GossipAdvertConfig.create = function create(properties) {
                        return new GossipAdvertConfig(properties);
                    };
    
                    /**
                     * Encodes the specified GossipAdvertConfig message. Does not implicitly {@link registry.subnet.v1.GossipAdvertConfig.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @static
                     * @param {registry.subnet.v1.IGossipAdvertConfig} message GossipAdvertConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GossipAdvertConfig.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.bestEffortPercentage != null && Object.hasOwnProperty.call(message, "bestEffortPercentage"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.bestEffortPercentage);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified GossipAdvertConfig message, length delimited. Does not implicitly {@link registry.subnet.v1.GossipAdvertConfig.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @static
                     * @param {registry.subnet.v1.IGossipAdvertConfig} message GossipAdvertConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    GossipAdvertConfig.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a GossipAdvertConfig message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.GossipAdvertConfig} GossipAdvertConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GossipAdvertConfig.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.GossipAdvertConfig();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.bestEffortPercentage = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a GossipAdvertConfig message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.GossipAdvertConfig} GossipAdvertConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    GossipAdvertConfig.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a GossipAdvertConfig message.
                     * @function verify
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    GossipAdvertConfig.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.bestEffortPercentage != null && message.hasOwnProperty("bestEffortPercentage"))
                            if (!$util.isInteger(message.bestEffortPercentage))
                                return "bestEffortPercentage: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates a GossipAdvertConfig message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.GossipAdvertConfig} GossipAdvertConfig
                     */
                    GossipAdvertConfig.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.GossipAdvertConfig)
                            return object;
                        var message = new $root.registry.subnet.v1.GossipAdvertConfig();
                        if (object.bestEffortPercentage != null)
                            message.bestEffortPercentage = object.bestEffortPercentage >>> 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a GossipAdvertConfig message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @static
                     * @param {registry.subnet.v1.GossipAdvertConfig} message GossipAdvertConfig
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    GossipAdvertConfig.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.bestEffortPercentage = 0;
                        if (message.bestEffortPercentage != null && message.hasOwnProperty("bestEffortPercentage"))
                            object.bestEffortPercentage = message.bestEffortPercentage;
                        return object;
                    };
    
                    /**
                     * Converts this GossipAdvertConfig to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.GossipAdvertConfig
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    GossipAdvertConfig.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return GossipAdvertConfig;
                })();
    
                /**
                 * SubnetType enum.
                 * @name registry.subnet.v1.SubnetType
                 * @enum {number}
                 * @property {number} SUBNET_TYPE_UNSPECIFIED=0 SUBNET_TYPE_UNSPECIFIED value
                 * @property {number} SUBNET_TYPE_APPLICATION=1 SUBNET_TYPE_APPLICATION value
                 * @property {number} SUBNET_TYPE_SYSTEM=2 SUBNET_TYPE_SYSTEM value
                 * @property {number} SUBNET_TYPE_VERIFIED_APPLICATION=4 SUBNET_TYPE_VERIFIED_APPLICATION value
                 */
                v1.SubnetType = (function() {
                    var valuesById = {}, values = Object.create(valuesById);
                    values[valuesById[0] = "SUBNET_TYPE_UNSPECIFIED"] = 0;
                    values[valuesById[1] = "SUBNET_TYPE_APPLICATION"] = 1;
                    values[valuesById[2] = "SUBNET_TYPE_SYSTEM"] = 2;
                    values[valuesById[4] = "SUBNET_TYPE_VERIFIED_APPLICATION"] = 4;
                    return values;
                })();
    
                v1.SubnetFeatures = (function() {
    
                    /**
                     * Properties of a SubnetFeatures.
                     * @memberof registry.subnet.v1
                     * @interface ISubnetFeatures
                     * @property {boolean|null} [ecdsaSignatures] SubnetFeatures ecdsaSignatures
                     * @property {boolean|null} [canisterSandboxing] SubnetFeatures canisterSandboxing
                     * @property {boolean|null} [httpRequests] SubnetFeatures httpRequests
                     */
    
                    /**
                     * Constructs a new SubnetFeatures.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents a SubnetFeatures.
                     * @implements ISubnetFeatures
                     * @constructor
                     * @param {registry.subnet.v1.ISubnetFeatures=} [properties] Properties to set
                     */
                    function SubnetFeatures(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * SubnetFeatures ecdsaSignatures.
                     * @member {boolean} ecdsaSignatures
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @instance
                     */
                    SubnetFeatures.prototype.ecdsaSignatures = false;
    
                    /**
                     * SubnetFeatures canisterSandboxing.
                     * @member {boolean} canisterSandboxing
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @instance
                     */
                    SubnetFeatures.prototype.canisterSandboxing = false;
    
                    /**
                     * SubnetFeatures httpRequests.
                     * @member {boolean} httpRequests
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @instance
                     */
                    SubnetFeatures.prototype.httpRequests = false;
    
                    /**
                     * Creates a new SubnetFeatures instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @static
                     * @param {registry.subnet.v1.ISubnetFeatures=} [properties] Properties to set
                     * @returns {registry.subnet.v1.SubnetFeatures} SubnetFeatures instance
                     */
                    SubnetFeatures.create = function create(properties) {
                        return new SubnetFeatures(properties);
                    };
    
                    /**
                     * Encodes the specified SubnetFeatures message. Does not implicitly {@link registry.subnet.v1.SubnetFeatures.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @static
                     * @param {registry.subnet.v1.ISubnetFeatures} message SubnetFeatures message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubnetFeatures.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.ecdsaSignatures != null && Object.hasOwnProperty.call(message, "ecdsaSignatures"))
                            writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ecdsaSignatures);
                        if (message.canisterSandboxing != null && Object.hasOwnProperty.call(message, "canisterSandboxing"))
                            writer.uint32(/* id 2, wireType 0 =*/16).bool(message.canisterSandboxing);
                        if (message.httpRequests != null && Object.hasOwnProperty.call(message, "httpRequests"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.httpRequests);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified SubnetFeatures message, length delimited. Does not implicitly {@link registry.subnet.v1.SubnetFeatures.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @static
                     * @param {registry.subnet.v1.ISubnetFeatures} message SubnetFeatures message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    SubnetFeatures.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a SubnetFeatures message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.SubnetFeatures} SubnetFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubnetFeatures.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.SubnetFeatures();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.ecdsaSignatures = reader.bool();
                                break;
                            case 2:
                                message.canisterSandboxing = reader.bool();
                                break;
                            case 3:
                                message.httpRequests = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a SubnetFeatures message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.SubnetFeatures} SubnetFeatures
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    SubnetFeatures.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a SubnetFeatures message.
                     * @function verify
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    SubnetFeatures.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.ecdsaSignatures != null && message.hasOwnProperty("ecdsaSignatures"))
                            if (typeof message.ecdsaSignatures !== "boolean")
                                return "ecdsaSignatures: boolean expected";
                        if (message.canisterSandboxing != null && message.hasOwnProperty("canisterSandboxing"))
                            if (typeof message.canisterSandboxing !== "boolean")
                                return "canisterSandboxing: boolean expected";
                        if (message.httpRequests != null && message.hasOwnProperty("httpRequests"))
                            if (typeof message.httpRequests !== "boolean")
                                return "httpRequests: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a SubnetFeatures message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.SubnetFeatures} SubnetFeatures
                     */
                    SubnetFeatures.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.SubnetFeatures)
                            return object;
                        var message = new $root.registry.subnet.v1.SubnetFeatures();
                        if (object.ecdsaSignatures != null)
                            message.ecdsaSignatures = Boolean(object.ecdsaSignatures);
                        if (object.canisterSandboxing != null)
                            message.canisterSandboxing = Boolean(object.canisterSandboxing);
                        if (object.httpRequests != null)
                            message.httpRequests = Boolean(object.httpRequests);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a SubnetFeatures message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @static
                     * @param {registry.subnet.v1.SubnetFeatures} message SubnetFeatures
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    SubnetFeatures.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.ecdsaSignatures = false;
                            object.canisterSandboxing = false;
                            object.httpRequests = false;
                        }
                        if (message.ecdsaSignatures != null && message.hasOwnProperty("ecdsaSignatures"))
                            object.ecdsaSignatures = message.ecdsaSignatures;
                        if (message.canisterSandboxing != null && message.hasOwnProperty("canisterSandboxing"))
                            object.canisterSandboxing = message.canisterSandboxing;
                        if (message.httpRequests != null && message.hasOwnProperty("httpRequests"))
                            object.httpRequests = message.httpRequests;
                        return object;
                    };
    
                    /**
                     * Converts this SubnetFeatures to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.SubnetFeatures
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    SubnetFeatures.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return SubnetFeatures;
                })();
    
                v1.EcdsaConfig = (function() {
    
                    /**
                     * Properties of an EcdsaConfig.
                     * @memberof registry.subnet.v1
                     * @interface IEcdsaConfig
                     * @property {number|null} [quadruplesToCreateInAdvance] EcdsaConfig quadruplesToCreateInAdvance
                     */
    
                    /**
                     * Constructs a new EcdsaConfig.
                     * @memberof registry.subnet.v1
                     * @classdesc Represents an EcdsaConfig.
                     * @implements IEcdsaConfig
                     * @constructor
                     * @param {registry.subnet.v1.IEcdsaConfig=} [properties] Properties to set
                     */
                    function EcdsaConfig(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * EcdsaConfig quadruplesToCreateInAdvance.
                     * @member {number} quadruplesToCreateInAdvance
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @instance
                     */
                    EcdsaConfig.prototype.quadruplesToCreateInAdvance = 0;
    
                    /**
                     * Creates a new EcdsaConfig instance using the specified properties.
                     * @function create
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @static
                     * @param {registry.subnet.v1.IEcdsaConfig=} [properties] Properties to set
                     * @returns {registry.subnet.v1.EcdsaConfig} EcdsaConfig instance
                     */
                    EcdsaConfig.create = function create(properties) {
                        return new EcdsaConfig(properties);
                    };
    
                    /**
                     * Encodes the specified EcdsaConfig message. Does not implicitly {@link registry.subnet.v1.EcdsaConfig.verify|verify} messages.
                     * @function encode
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @static
                     * @param {registry.subnet.v1.IEcdsaConfig} message EcdsaConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EcdsaConfig.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.quadruplesToCreateInAdvance != null && Object.hasOwnProperty.call(message, "quadruplesToCreateInAdvance"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.quadruplesToCreateInAdvance);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified EcdsaConfig message, length delimited. Does not implicitly {@link registry.subnet.v1.EcdsaConfig.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @static
                     * @param {registry.subnet.v1.IEcdsaConfig} message EcdsaConfig message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    EcdsaConfig.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an EcdsaConfig message from the specified reader or buffer.
                     * @function decode
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {registry.subnet.v1.EcdsaConfig} EcdsaConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EcdsaConfig.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.registry.subnet.v1.EcdsaConfig();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.quadruplesToCreateInAdvance = reader.uint32();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an EcdsaConfig message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {registry.subnet.v1.EcdsaConfig} EcdsaConfig
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    EcdsaConfig.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an EcdsaConfig message.
                     * @function verify
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    EcdsaConfig.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.quadruplesToCreateInAdvance != null && message.hasOwnProperty("quadruplesToCreateInAdvance"))
                            if (!$util.isInteger(message.quadruplesToCreateInAdvance))
                                return "quadruplesToCreateInAdvance: integer expected";
                        return null;
                    };
    
                    /**
                     * Creates an EcdsaConfig message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {registry.subnet.v1.EcdsaConfig} EcdsaConfig
                     */
                    EcdsaConfig.fromObject = function fromObject(object) {
                        if (object instanceof $root.registry.subnet.v1.EcdsaConfig)
                            return object;
                        var message = new $root.registry.subnet.v1.EcdsaConfig();
                        if (object.quadruplesToCreateInAdvance != null)
                            message.quadruplesToCreateInAdvance = object.quadruplesToCreateInAdvance >>> 0;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an EcdsaConfig message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @static
                     * @param {registry.subnet.v1.EcdsaConfig} message EcdsaConfig
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    EcdsaConfig.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            object.quadruplesToCreateInAdvance = 0;
                        if (message.quadruplesToCreateInAdvance != null && message.hasOwnProperty("quadruplesToCreateInAdvance"))
                            object.quadruplesToCreateInAdvance = message.quadruplesToCreateInAdvance;
                        return object;
                    };
    
                    /**
                     * Converts this EcdsaConfig to JSON.
                     * @function toJSON
                     * @memberof registry.subnet.v1.EcdsaConfig
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    EcdsaConfig.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return EcdsaConfig;
                })();
    
                return v1;
            })();
    
            return subnet;
        })();
    
        return registry;
    })();
    
    $root.routing_table = (function() {
    
        /**
         * Namespace routing_table.
         * @exports routing_table
         * @namespace
         */
        var routing_table = {};
    
        routing_table.v1 = (function() {
    
            /**
             * Namespace v1.
             * @memberof routing_table
             * @namespace
             */
            var v1 = {};
    
            v1.CanisterIdRange = (function() {
    
                /**
                 * Properties of a CanisterIdRange.
                 * @memberof routing_table.v1
                 * @interface ICanisterIdRange
                 * @property {types.v1.ICanisterId|null} [startCanisterId] CanisterIdRange startCanisterId
                 * @property {types.v1.ICanisterId|null} [endCanisterId] CanisterIdRange endCanisterId
                 */
    
                /**
                 * Constructs a new CanisterIdRange.
                 * @memberof routing_table.v1
                 * @classdesc Represents a CanisterIdRange.
                 * @implements ICanisterIdRange
                 * @constructor
                 * @param {routing_table.v1.ICanisterIdRange=} [properties] Properties to set
                 */
                function CanisterIdRange(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CanisterIdRange startCanisterId.
                 * @member {types.v1.ICanisterId|null|undefined} startCanisterId
                 * @memberof routing_table.v1.CanisterIdRange
                 * @instance
                 */
                CanisterIdRange.prototype.startCanisterId = null;
    
                /**
                 * CanisterIdRange endCanisterId.
                 * @member {types.v1.ICanisterId|null|undefined} endCanisterId
                 * @memberof routing_table.v1.CanisterIdRange
                 * @instance
                 */
                CanisterIdRange.prototype.endCanisterId = null;
    
                /**
                 * Creates a new CanisterIdRange instance using the specified properties.
                 * @function create
                 * @memberof routing_table.v1.CanisterIdRange
                 * @static
                 * @param {routing_table.v1.ICanisterIdRange=} [properties] Properties to set
                 * @returns {routing_table.v1.CanisterIdRange} CanisterIdRange instance
                 */
                CanisterIdRange.create = function create(properties) {
                    return new CanisterIdRange(properties);
                };
    
                /**
                 * Encodes the specified CanisterIdRange message. Does not implicitly {@link routing_table.v1.CanisterIdRange.verify|verify} messages.
                 * @function encode
                 * @memberof routing_table.v1.CanisterIdRange
                 * @static
                 * @param {routing_table.v1.ICanisterIdRange} message CanisterIdRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CanisterIdRange.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.startCanisterId != null && Object.hasOwnProperty.call(message, "startCanisterId"))
                        $root.types.v1.CanisterId.encode(message.startCanisterId, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                    if (message.endCanisterId != null && Object.hasOwnProperty.call(message, "endCanisterId"))
                        $root.types.v1.CanisterId.encode(message.endCanisterId, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified CanisterIdRange message, length delimited. Does not implicitly {@link routing_table.v1.CanisterIdRange.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof routing_table.v1.CanisterIdRange
                 * @static
                 * @param {routing_table.v1.ICanisterIdRange} message CanisterIdRange message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CanisterIdRange.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CanisterIdRange message from the specified reader or buffer.
                 * @function decode
                 * @memberof routing_table.v1.CanisterIdRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {routing_table.v1.CanisterIdRange} CanisterIdRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CanisterIdRange.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.routing_table.v1.CanisterIdRange();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 3:
                            message.startCanisterId = $root.types.v1.CanisterId.decode(reader, reader.uint32());
                            break;
                        case 4:
                            message.endCanisterId = $root.types.v1.CanisterId.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CanisterIdRange message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof routing_table.v1.CanisterIdRange
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {routing_table.v1.CanisterIdRange} CanisterIdRange
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CanisterIdRange.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CanisterIdRange message.
                 * @function verify
                 * @memberof routing_table.v1.CanisterIdRange
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CanisterIdRange.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.startCanisterId != null && message.hasOwnProperty("startCanisterId")) {
                        var error = $root.types.v1.CanisterId.verify(message.startCanisterId);
                        if (error)
                            return "startCanisterId." + error;
                    }
                    if (message.endCanisterId != null && message.hasOwnProperty("endCanisterId")) {
                        var error = $root.types.v1.CanisterId.verify(message.endCanisterId);
                        if (error)
                            return "endCanisterId." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a CanisterIdRange message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof routing_table.v1.CanisterIdRange
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {routing_table.v1.CanisterIdRange} CanisterIdRange
                 */
                CanisterIdRange.fromObject = function fromObject(object) {
                    if (object instanceof $root.routing_table.v1.CanisterIdRange)
                        return object;
                    var message = new $root.routing_table.v1.CanisterIdRange();
                    if (object.startCanisterId != null) {
                        if (typeof object.startCanisterId !== "object")
                            throw TypeError(".routing_table.v1.CanisterIdRange.startCanisterId: object expected");
                        message.startCanisterId = $root.types.v1.CanisterId.fromObject(object.startCanisterId);
                    }
                    if (object.endCanisterId != null) {
                        if (typeof object.endCanisterId !== "object")
                            throw TypeError(".routing_table.v1.CanisterIdRange.endCanisterId: object expected");
                        message.endCanisterId = $root.types.v1.CanisterId.fromObject(object.endCanisterId);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a CanisterIdRange message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof routing_table.v1.CanisterIdRange
                 * @static
                 * @param {routing_table.v1.CanisterIdRange} message CanisterIdRange
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CanisterIdRange.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        object.startCanisterId = null;
                        object.endCanisterId = null;
                    }
                    if (message.startCanisterId != null && message.hasOwnProperty("startCanisterId"))
                        object.startCanisterId = $root.types.v1.CanisterId.toObject(message.startCanisterId, options);
                    if (message.endCanisterId != null && message.hasOwnProperty("endCanisterId"))
                        object.endCanisterId = $root.types.v1.CanisterId.toObject(message.endCanisterId, options);
                    return object;
                };
    
                /**
                 * Converts this CanisterIdRange to JSON.
                 * @function toJSON
                 * @memberof routing_table.v1.CanisterIdRange
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CanisterIdRange.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return CanisterIdRange;
            })();
    
            v1.CanisterIdRanges = (function() {
    
                /**
                 * Properties of a CanisterIdRanges.
                 * @memberof routing_table.v1
                 * @interface ICanisterIdRanges
                 * @property {Array.<routing_table.v1.ICanisterIdRange>|null} [ranges] CanisterIdRanges ranges
                 */
    
                /**
                 * Constructs a new CanisterIdRanges.
                 * @memberof routing_table.v1
                 * @classdesc Represents a CanisterIdRanges.
                 * @implements ICanisterIdRanges
                 * @constructor
                 * @param {routing_table.v1.ICanisterIdRanges=} [properties] Properties to set
                 */
                function CanisterIdRanges(properties) {
                    this.ranges = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CanisterIdRanges ranges.
                 * @member {Array.<routing_table.v1.ICanisterIdRange>} ranges
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @instance
                 */
                CanisterIdRanges.prototype.ranges = $util.emptyArray;
    
                /**
                 * Creates a new CanisterIdRanges instance using the specified properties.
                 * @function create
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @static
                 * @param {routing_table.v1.ICanisterIdRanges=} [properties] Properties to set
                 * @returns {routing_table.v1.CanisterIdRanges} CanisterIdRanges instance
                 */
                CanisterIdRanges.create = function create(properties) {
                    return new CanisterIdRanges(properties);
                };
    
                /**
                 * Encodes the specified CanisterIdRanges message. Does not implicitly {@link routing_table.v1.CanisterIdRanges.verify|verify} messages.
                 * @function encode
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @static
                 * @param {routing_table.v1.ICanisterIdRanges} message CanisterIdRanges message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CanisterIdRanges.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.ranges != null && message.ranges.length)
                        for (var i = 0; i < message.ranges.length; ++i)
                            $root.routing_table.v1.CanisterIdRange.encode(message.ranges[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified CanisterIdRanges message, length delimited. Does not implicitly {@link routing_table.v1.CanisterIdRanges.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @static
                 * @param {routing_table.v1.ICanisterIdRanges} message CanisterIdRanges message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CanisterIdRanges.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CanisterIdRanges message from the specified reader or buffer.
                 * @function decode
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {routing_table.v1.CanisterIdRanges} CanisterIdRanges
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CanisterIdRanges.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.routing_table.v1.CanisterIdRanges();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.ranges && message.ranges.length))
                                message.ranges = [];
                            message.ranges.push($root.routing_table.v1.CanisterIdRange.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CanisterIdRanges message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {routing_table.v1.CanisterIdRanges} CanisterIdRanges
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CanisterIdRanges.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CanisterIdRanges message.
                 * @function verify
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CanisterIdRanges.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.ranges != null && message.hasOwnProperty("ranges")) {
                        if (!Array.isArray(message.ranges))
                            return "ranges: array expected";
                        for (var i = 0; i < message.ranges.length; ++i) {
                            var error = $root.routing_table.v1.CanisterIdRange.verify(message.ranges[i]);
                            if (error)
                                return "ranges." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a CanisterIdRanges message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {routing_table.v1.CanisterIdRanges} CanisterIdRanges
                 */
                CanisterIdRanges.fromObject = function fromObject(object) {
                    if (object instanceof $root.routing_table.v1.CanisterIdRanges)
                        return object;
                    var message = new $root.routing_table.v1.CanisterIdRanges();
                    if (object.ranges) {
                        if (!Array.isArray(object.ranges))
                            throw TypeError(".routing_table.v1.CanisterIdRanges.ranges: array expected");
                        message.ranges = [];
                        for (var i = 0; i < object.ranges.length; ++i) {
                            if (typeof object.ranges[i] !== "object")
                                throw TypeError(".routing_table.v1.CanisterIdRanges.ranges: object expected");
                            message.ranges[i] = $root.routing_table.v1.CanisterIdRange.fromObject(object.ranges[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a CanisterIdRanges message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @static
                 * @param {routing_table.v1.CanisterIdRanges} message CanisterIdRanges
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CanisterIdRanges.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.ranges = [];
                    if (message.ranges && message.ranges.length) {
                        object.ranges = [];
                        for (var j = 0; j < message.ranges.length; ++j)
                            object.ranges[j] = $root.routing_table.v1.CanisterIdRange.toObject(message.ranges[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this CanisterIdRanges to JSON.
                 * @function toJSON
                 * @memberof routing_table.v1.CanisterIdRanges
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CanisterIdRanges.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return CanisterIdRanges;
            })();
    
            v1.RoutingTable = (function() {
    
                /**
                 * Properties of a RoutingTable.
                 * @memberof routing_table.v1
                 * @interface IRoutingTable
                 * @property {Array.<routing_table.v1.RoutingTable.IEntry>|null} [entries] RoutingTable entries
                 */
    
                /**
                 * Constructs a new RoutingTable.
                 * @memberof routing_table.v1
                 * @classdesc Represents a RoutingTable.
                 * @implements IRoutingTable
                 * @constructor
                 * @param {routing_table.v1.IRoutingTable=} [properties] Properties to set
                 */
                function RoutingTable(properties) {
                    this.entries = [];
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * RoutingTable entries.
                 * @member {Array.<routing_table.v1.RoutingTable.IEntry>} entries
                 * @memberof routing_table.v1.RoutingTable
                 * @instance
                 */
                RoutingTable.prototype.entries = $util.emptyArray;
    
                /**
                 * Creates a new RoutingTable instance using the specified properties.
                 * @function create
                 * @memberof routing_table.v1.RoutingTable
                 * @static
                 * @param {routing_table.v1.IRoutingTable=} [properties] Properties to set
                 * @returns {routing_table.v1.RoutingTable} RoutingTable instance
                 */
                RoutingTable.create = function create(properties) {
                    return new RoutingTable(properties);
                };
    
                /**
                 * Encodes the specified RoutingTable message. Does not implicitly {@link routing_table.v1.RoutingTable.verify|verify} messages.
                 * @function encode
                 * @memberof routing_table.v1.RoutingTable
                 * @static
                 * @param {routing_table.v1.IRoutingTable} message RoutingTable message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoutingTable.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.entries != null && message.entries.length)
                        for (var i = 0; i < message.entries.length; ++i)
                            $root.routing_table.v1.RoutingTable.Entry.encode(message.entries[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified RoutingTable message, length delimited. Does not implicitly {@link routing_table.v1.RoutingTable.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof routing_table.v1.RoutingTable
                 * @static
                 * @param {routing_table.v1.IRoutingTable} message RoutingTable message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                RoutingTable.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a RoutingTable message from the specified reader or buffer.
                 * @function decode
                 * @memberof routing_table.v1.RoutingTable
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {routing_table.v1.RoutingTable} RoutingTable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoutingTable.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.routing_table.v1.RoutingTable();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            if (!(message.entries && message.entries.length))
                                message.entries = [];
                            message.entries.push($root.routing_table.v1.RoutingTable.Entry.decode(reader, reader.uint32()));
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a RoutingTable message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof routing_table.v1.RoutingTable
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {routing_table.v1.RoutingTable} RoutingTable
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                RoutingTable.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a RoutingTable message.
                 * @function verify
                 * @memberof routing_table.v1.RoutingTable
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                RoutingTable.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.entries != null && message.hasOwnProperty("entries")) {
                        if (!Array.isArray(message.entries))
                            return "entries: array expected";
                        for (var i = 0; i < message.entries.length; ++i) {
                            var error = $root.routing_table.v1.RoutingTable.Entry.verify(message.entries[i]);
                            if (error)
                                return "entries." + error;
                        }
                    }
                    return null;
                };
    
                /**
                 * Creates a RoutingTable message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof routing_table.v1.RoutingTable
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {routing_table.v1.RoutingTable} RoutingTable
                 */
                RoutingTable.fromObject = function fromObject(object) {
                    if (object instanceof $root.routing_table.v1.RoutingTable)
                        return object;
                    var message = new $root.routing_table.v1.RoutingTable();
                    if (object.entries) {
                        if (!Array.isArray(object.entries))
                            throw TypeError(".routing_table.v1.RoutingTable.entries: array expected");
                        message.entries = [];
                        for (var i = 0; i < object.entries.length; ++i) {
                            if (typeof object.entries[i] !== "object")
                                throw TypeError(".routing_table.v1.RoutingTable.entries: object expected");
                            message.entries[i] = $root.routing_table.v1.RoutingTable.Entry.fromObject(object.entries[i]);
                        }
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a RoutingTable message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof routing_table.v1.RoutingTable
                 * @static
                 * @param {routing_table.v1.RoutingTable} message RoutingTable
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                RoutingTable.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.arrays || options.defaults)
                        object.entries = [];
                    if (message.entries && message.entries.length) {
                        object.entries = [];
                        for (var j = 0; j < message.entries.length; ++j)
                            object.entries[j] = $root.routing_table.v1.RoutingTable.Entry.toObject(message.entries[j], options);
                    }
                    return object;
                };
    
                /**
                 * Converts this RoutingTable to JSON.
                 * @function toJSON
                 * @memberof routing_table.v1.RoutingTable
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                RoutingTable.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                RoutingTable.Entry = (function() {
    
                    /**
                     * Properties of an Entry.
                     * @memberof routing_table.v1.RoutingTable
                     * @interface IEntry
                     * @property {routing_table.v1.ICanisterIdRange|null} [range] Entry range
                     * @property {types.v1.ISubnetId|null} [subnetId] Entry subnetId
                     */
    
                    /**
                     * Constructs a new Entry.
                     * @memberof routing_table.v1.RoutingTable
                     * @classdesc Represents an Entry.
                     * @implements IEntry
                     * @constructor
                     * @param {routing_table.v1.RoutingTable.IEntry=} [properties] Properties to set
                     */
                    function Entry(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Entry range.
                     * @member {routing_table.v1.ICanisterIdRange|null|undefined} range
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @instance
                     */
                    Entry.prototype.range = null;
    
                    /**
                     * Entry subnetId.
                     * @member {types.v1.ISubnetId|null|undefined} subnetId
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @instance
                     */
                    Entry.prototype.subnetId = null;
    
                    /**
                     * Creates a new Entry instance using the specified properties.
                     * @function create
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @static
                     * @param {routing_table.v1.RoutingTable.IEntry=} [properties] Properties to set
                     * @returns {routing_table.v1.RoutingTable.Entry} Entry instance
                     */
                    Entry.create = function create(properties) {
                        return new Entry(properties);
                    };
    
                    /**
                     * Encodes the specified Entry message. Does not implicitly {@link routing_table.v1.RoutingTable.Entry.verify|verify} messages.
                     * @function encode
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @static
                     * @param {routing_table.v1.RoutingTable.IEntry} message Entry message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Entry.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.range != null && Object.hasOwnProperty.call(message, "range"))
                            $root.routing_table.v1.CanisterIdRange.encode(message.range, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.subnetId != null && Object.hasOwnProperty.call(message, "subnetId"))
                            $root.types.v1.SubnetId.encode(message.subnetId, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Entry message, length delimited. Does not implicitly {@link routing_table.v1.RoutingTable.Entry.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @static
                     * @param {routing_table.v1.RoutingTable.IEntry} message Entry message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Entry.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes an Entry message from the specified reader or buffer.
                     * @function decode
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {routing_table.v1.RoutingTable.Entry} Entry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Entry.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.routing_table.v1.RoutingTable.Entry();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.range = $root.routing_table.v1.CanisterIdRange.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.subnetId = $root.types.v1.SubnetId.decode(reader, reader.uint32());
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes an Entry message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {routing_table.v1.RoutingTable.Entry} Entry
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Entry.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies an Entry message.
                     * @function verify
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Entry.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.range != null && message.hasOwnProperty("range")) {
                            var error = $root.routing_table.v1.CanisterIdRange.verify(message.range);
                            if (error)
                                return "range." + error;
                        }
                        if (message.subnetId != null && message.hasOwnProperty("subnetId")) {
                            var error = $root.types.v1.SubnetId.verify(message.subnetId);
                            if (error)
                                return "subnetId." + error;
                        }
                        return null;
                    };
    
                    /**
                     * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {routing_table.v1.RoutingTable.Entry} Entry
                     */
                    Entry.fromObject = function fromObject(object) {
                        if (object instanceof $root.routing_table.v1.RoutingTable.Entry)
                            return object;
                        var message = new $root.routing_table.v1.RoutingTable.Entry();
                        if (object.range != null) {
                            if (typeof object.range !== "object")
                                throw TypeError(".routing_table.v1.RoutingTable.Entry.range: object expected");
                            message.range = $root.routing_table.v1.CanisterIdRange.fromObject(object.range);
                        }
                        if (object.subnetId != null) {
                            if (typeof object.subnetId !== "object")
                                throw TypeError(".routing_table.v1.RoutingTable.Entry.subnetId: object expected");
                            message.subnetId = $root.types.v1.SubnetId.fromObject(object.subnetId);
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from an Entry message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @static
                     * @param {routing_table.v1.RoutingTable.Entry} message Entry
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Entry.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.range = null;
                            object.subnetId = null;
                        }
                        if (message.range != null && message.hasOwnProperty("range"))
                            object.range = $root.routing_table.v1.CanisterIdRange.toObject(message.range, options);
                        if (message.subnetId != null && message.hasOwnProperty("subnetId"))
                            object.subnetId = $root.types.v1.SubnetId.toObject(message.subnetId, options);
                        return object;
                    };
    
                    /**
                     * Converts this Entry to JSON.
                     * @function toJSON
                     * @memberof routing_table.v1.RoutingTable.Entry
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Entry.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Entry;
                })();
    
                return RoutingTable;
            })();
    
            return v1;
        })();
    
        return routing_table;
    })();
    
    $root.types = (function() {
    
        /**
         * Namespace types.
         * @exports types
         * @namespace
         */
        var types = {};
    
        types.v1 = (function() {
    
            /**
             * Namespace v1.
             * @memberof types
             * @namespace
             */
            var v1 = {};
    
            v1.PrincipalId = (function() {
    
                /**
                 * Properties of a PrincipalId.
                 * @memberof types.v1
                 * @interface IPrincipalId
                 * @property {Uint8Array|null} [raw] PrincipalId raw
                 */
    
                /**
                 * Constructs a new PrincipalId.
                 * @memberof types.v1
                 * @classdesc Represents a PrincipalId.
                 * @implements IPrincipalId
                 * @constructor
                 * @param {types.v1.IPrincipalId=} [properties] Properties to set
                 */
                function PrincipalId(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * PrincipalId raw.
                 * @member {Uint8Array} raw
                 * @memberof types.v1.PrincipalId
                 * @instance
                 */
                PrincipalId.prototype.raw = $util.newBuffer([]);
    
                /**
                 * Creates a new PrincipalId instance using the specified properties.
                 * @function create
                 * @memberof types.v1.PrincipalId
                 * @static
                 * @param {types.v1.IPrincipalId=} [properties] Properties to set
                 * @returns {types.v1.PrincipalId} PrincipalId instance
                 */
                PrincipalId.create = function create(properties) {
                    return new PrincipalId(properties);
                };
    
                /**
                 * Encodes the specified PrincipalId message. Does not implicitly {@link types.v1.PrincipalId.verify|verify} messages.
                 * @function encode
                 * @memberof types.v1.PrincipalId
                 * @static
                 * @param {types.v1.IPrincipalId} message PrincipalId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PrincipalId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.raw != null && Object.hasOwnProperty.call(message, "raw"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.raw);
                    return writer;
                };
    
                /**
                 * Encodes the specified PrincipalId message, length delimited. Does not implicitly {@link types.v1.PrincipalId.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof types.v1.PrincipalId
                 * @static
                 * @param {types.v1.IPrincipalId} message PrincipalId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                PrincipalId.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a PrincipalId message from the specified reader or buffer.
                 * @function decode
                 * @memberof types.v1.PrincipalId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {types.v1.PrincipalId} PrincipalId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PrincipalId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.v1.PrincipalId();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.raw = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a PrincipalId message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof types.v1.PrincipalId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {types.v1.PrincipalId} PrincipalId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                PrincipalId.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a PrincipalId message.
                 * @function verify
                 * @memberof types.v1.PrincipalId
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                PrincipalId.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.raw != null && message.hasOwnProperty("raw"))
                        if (!(message.raw && typeof message.raw.length === "number" || $util.isString(message.raw)))
                            return "raw: buffer expected";
                    return null;
                };
    
                /**
                 * Creates a PrincipalId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof types.v1.PrincipalId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {types.v1.PrincipalId} PrincipalId
                 */
                PrincipalId.fromObject = function fromObject(object) {
                    if (object instanceof $root.types.v1.PrincipalId)
                        return object;
                    var message = new $root.types.v1.PrincipalId();
                    if (object.raw != null)
                        if (typeof object.raw === "string")
                            $util.base64.decode(object.raw, message.raw = $util.newBuffer($util.base64.length(object.raw)), 0);
                        else if (object.raw.length)
                            message.raw = object.raw;
                    return message;
                };
    
                /**
                 * Creates a plain object from a PrincipalId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof types.v1.PrincipalId
                 * @static
                 * @param {types.v1.PrincipalId} message PrincipalId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                PrincipalId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.raw = "";
                        else {
                            object.raw = [];
                            if (options.bytes !== Array)
                                object.raw = $util.newBuffer(object.raw);
                        }
                    if (message.raw != null && message.hasOwnProperty("raw"))
                        object.raw = options.bytes === String ? $util.base64.encode(message.raw, 0, message.raw.length) : options.bytes === Array ? Array.prototype.slice.call(message.raw) : message.raw;
                    return object;
                };
    
                /**
                 * Converts this PrincipalId to JSON.
                 * @function toJSON
                 * @memberof types.v1.PrincipalId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                PrincipalId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return PrincipalId;
            })();
    
            v1.CanisterId = (function() {
    
                /**
                 * Properties of a CanisterId.
                 * @memberof types.v1
                 * @interface ICanisterId
                 * @property {types.v1.IPrincipalId|null} [principalId] CanisterId principalId
                 */
    
                /**
                 * Constructs a new CanisterId.
                 * @memberof types.v1
                 * @classdesc Represents a CanisterId.
                 * @implements ICanisterId
                 * @constructor
                 * @param {types.v1.ICanisterId=} [properties] Properties to set
                 */
                function CanisterId(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * CanisterId principalId.
                 * @member {types.v1.IPrincipalId|null|undefined} principalId
                 * @memberof types.v1.CanisterId
                 * @instance
                 */
                CanisterId.prototype.principalId = null;
    
                /**
                 * Creates a new CanisterId instance using the specified properties.
                 * @function create
                 * @memberof types.v1.CanisterId
                 * @static
                 * @param {types.v1.ICanisterId=} [properties] Properties to set
                 * @returns {types.v1.CanisterId} CanisterId instance
                 */
                CanisterId.create = function create(properties) {
                    return new CanisterId(properties);
                };
    
                /**
                 * Encodes the specified CanisterId message. Does not implicitly {@link types.v1.CanisterId.verify|verify} messages.
                 * @function encode
                 * @memberof types.v1.CanisterId
                 * @static
                 * @param {types.v1.ICanisterId} message CanisterId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CanisterId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.principalId != null && Object.hasOwnProperty.call(message, "principalId"))
                        $root.types.v1.PrincipalId.encode(message.principalId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified CanisterId message, length delimited. Does not implicitly {@link types.v1.CanisterId.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof types.v1.CanisterId
                 * @static
                 * @param {types.v1.ICanisterId} message CanisterId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                CanisterId.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a CanisterId message from the specified reader or buffer.
                 * @function decode
                 * @memberof types.v1.CanisterId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {types.v1.CanisterId} CanisterId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CanisterId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.v1.CanisterId();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.principalId = $root.types.v1.PrincipalId.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a CanisterId message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof types.v1.CanisterId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {types.v1.CanisterId} CanisterId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                CanisterId.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a CanisterId message.
                 * @function verify
                 * @memberof types.v1.CanisterId
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                CanisterId.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.principalId != null && message.hasOwnProperty("principalId")) {
                        var error = $root.types.v1.PrincipalId.verify(message.principalId);
                        if (error)
                            return "principalId." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a CanisterId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof types.v1.CanisterId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {types.v1.CanisterId} CanisterId
                 */
                CanisterId.fromObject = function fromObject(object) {
                    if (object instanceof $root.types.v1.CanisterId)
                        return object;
                    var message = new $root.types.v1.CanisterId();
                    if (object.principalId != null) {
                        if (typeof object.principalId !== "object")
                            throw TypeError(".types.v1.CanisterId.principalId: object expected");
                        message.principalId = $root.types.v1.PrincipalId.fromObject(object.principalId);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a CanisterId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof types.v1.CanisterId
                 * @static
                 * @param {types.v1.CanisterId} message CanisterId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                CanisterId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.principalId = null;
                    if (message.principalId != null && message.hasOwnProperty("principalId"))
                        object.principalId = $root.types.v1.PrincipalId.toObject(message.principalId, options);
                    return object;
                };
    
                /**
                 * Converts this CanisterId to JSON.
                 * @function toJSON
                 * @memberof types.v1.CanisterId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                CanisterId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return CanisterId;
            })();
    
            v1.SubnetId = (function() {
    
                /**
                 * Properties of a SubnetId.
                 * @memberof types.v1
                 * @interface ISubnetId
                 * @property {types.v1.IPrincipalId|null} [principalId] SubnetId principalId
                 */
    
                /**
                 * Constructs a new SubnetId.
                 * @memberof types.v1
                 * @classdesc Represents a SubnetId.
                 * @implements ISubnetId
                 * @constructor
                 * @param {types.v1.ISubnetId=} [properties] Properties to set
                 */
                function SubnetId(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * SubnetId principalId.
                 * @member {types.v1.IPrincipalId|null|undefined} principalId
                 * @memberof types.v1.SubnetId
                 * @instance
                 */
                SubnetId.prototype.principalId = null;
    
                /**
                 * Creates a new SubnetId instance using the specified properties.
                 * @function create
                 * @memberof types.v1.SubnetId
                 * @static
                 * @param {types.v1.ISubnetId=} [properties] Properties to set
                 * @returns {types.v1.SubnetId} SubnetId instance
                 */
                SubnetId.create = function create(properties) {
                    return new SubnetId(properties);
                };
    
                /**
                 * Encodes the specified SubnetId message. Does not implicitly {@link types.v1.SubnetId.verify|verify} messages.
                 * @function encode
                 * @memberof types.v1.SubnetId
                 * @static
                 * @param {types.v1.ISubnetId} message SubnetId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SubnetId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.principalId != null && Object.hasOwnProperty.call(message, "principalId"))
                        $root.types.v1.PrincipalId.encode(message.principalId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified SubnetId message, length delimited. Does not implicitly {@link types.v1.SubnetId.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof types.v1.SubnetId
                 * @static
                 * @param {types.v1.ISubnetId} message SubnetId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                SubnetId.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a SubnetId message from the specified reader or buffer.
                 * @function decode
                 * @memberof types.v1.SubnetId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {types.v1.SubnetId} SubnetId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SubnetId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.v1.SubnetId();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.principalId = $root.types.v1.PrincipalId.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a SubnetId message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof types.v1.SubnetId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {types.v1.SubnetId} SubnetId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                SubnetId.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a SubnetId message.
                 * @function verify
                 * @memberof types.v1.SubnetId
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                SubnetId.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.principalId != null && message.hasOwnProperty("principalId")) {
                        var error = $root.types.v1.PrincipalId.verify(message.principalId);
                        if (error)
                            return "principalId." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a SubnetId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof types.v1.SubnetId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {types.v1.SubnetId} SubnetId
                 */
                SubnetId.fromObject = function fromObject(object) {
                    if (object instanceof $root.types.v1.SubnetId)
                        return object;
                    var message = new $root.types.v1.SubnetId();
                    if (object.principalId != null) {
                        if (typeof object.principalId !== "object")
                            throw TypeError(".types.v1.SubnetId.principalId: object expected");
                        message.principalId = $root.types.v1.PrincipalId.fromObject(object.principalId);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a SubnetId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof types.v1.SubnetId
                 * @static
                 * @param {types.v1.SubnetId} message SubnetId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                SubnetId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.principalId = null;
                    if (message.principalId != null && message.hasOwnProperty("principalId"))
                        object.principalId = $root.types.v1.PrincipalId.toObject(message.principalId, options);
                    return object;
                };
    
                /**
                 * Converts this SubnetId to JSON.
                 * @function toJSON
                 * @memberof types.v1.SubnetId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                SubnetId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return SubnetId;
            })();
    
            v1.UserId = (function() {
    
                /**
                 * Properties of a UserId.
                 * @memberof types.v1
                 * @interface IUserId
                 * @property {types.v1.IPrincipalId|null} [principalId] UserId principalId
                 */
    
                /**
                 * Constructs a new UserId.
                 * @memberof types.v1
                 * @classdesc Represents a UserId.
                 * @implements IUserId
                 * @constructor
                 * @param {types.v1.IUserId=} [properties] Properties to set
                 */
                function UserId(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UserId principalId.
                 * @member {types.v1.IPrincipalId|null|undefined} principalId
                 * @memberof types.v1.UserId
                 * @instance
                 */
                UserId.prototype.principalId = null;
    
                /**
                 * Creates a new UserId instance using the specified properties.
                 * @function create
                 * @memberof types.v1.UserId
                 * @static
                 * @param {types.v1.IUserId=} [properties] Properties to set
                 * @returns {types.v1.UserId} UserId instance
                 */
                UserId.create = function create(properties) {
                    return new UserId(properties);
                };
    
                /**
                 * Encodes the specified UserId message. Does not implicitly {@link types.v1.UserId.verify|verify} messages.
                 * @function encode
                 * @memberof types.v1.UserId
                 * @static
                 * @param {types.v1.IUserId} message UserId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.principalId != null && Object.hasOwnProperty.call(message, "principalId"))
                        $root.types.v1.PrincipalId.encode(message.principalId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified UserId message, length delimited. Does not implicitly {@link types.v1.UserId.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof types.v1.UserId
                 * @static
                 * @param {types.v1.IUserId} message UserId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UserId.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UserId message from the specified reader or buffer.
                 * @function decode
                 * @memberof types.v1.UserId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {types.v1.UserId} UserId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.v1.UserId();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.principalId = $root.types.v1.PrincipalId.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a UserId message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof types.v1.UserId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {types.v1.UserId} UserId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UserId.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UserId message.
                 * @function verify
                 * @memberof types.v1.UserId
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UserId.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.principalId != null && message.hasOwnProperty("principalId")) {
                        var error = $root.types.v1.PrincipalId.verify(message.principalId);
                        if (error)
                            return "principalId." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a UserId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof types.v1.UserId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {types.v1.UserId} UserId
                 */
                UserId.fromObject = function fromObject(object) {
                    if (object instanceof $root.types.v1.UserId)
                        return object;
                    var message = new $root.types.v1.UserId();
                    if (object.principalId != null) {
                        if (typeof object.principalId !== "object")
                            throw TypeError(".types.v1.UserId.principalId: object expected");
                        message.principalId = $root.types.v1.PrincipalId.fromObject(object.principalId);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a UserId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof types.v1.UserId
                 * @static
                 * @param {types.v1.UserId} message UserId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UserId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.principalId = null;
                    if (message.principalId != null && message.hasOwnProperty("principalId"))
                        object.principalId = $root.types.v1.PrincipalId.toObject(message.principalId, options);
                    return object;
                };
    
                /**
                 * Converts this UserId to JSON.
                 * @function toJSON
                 * @memberof types.v1.UserId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UserId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UserId;
            })();
    
            v1.NodeId = (function() {
    
                /**
                 * Properties of a NodeId.
                 * @memberof types.v1
                 * @interface INodeId
                 * @property {types.v1.IPrincipalId|null} [principalId] NodeId principalId
                 */
    
                /**
                 * Constructs a new NodeId.
                 * @memberof types.v1
                 * @classdesc Represents a NodeId.
                 * @implements INodeId
                 * @constructor
                 * @param {types.v1.INodeId=} [properties] Properties to set
                 */
                function NodeId(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * NodeId principalId.
                 * @member {types.v1.IPrincipalId|null|undefined} principalId
                 * @memberof types.v1.NodeId
                 * @instance
                 */
                NodeId.prototype.principalId = null;
    
                /**
                 * Creates a new NodeId instance using the specified properties.
                 * @function create
                 * @memberof types.v1.NodeId
                 * @static
                 * @param {types.v1.INodeId=} [properties] Properties to set
                 * @returns {types.v1.NodeId} NodeId instance
                 */
                NodeId.create = function create(properties) {
                    return new NodeId(properties);
                };
    
                /**
                 * Encodes the specified NodeId message. Does not implicitly {@link types.v1.NodeId.verify|verify} messages.
                 * @function encode
                 * @memberof types.v1.NodeId
                 * @static
                 * @param {types.v1.INodeId} message NodeId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NodeId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.principalId != null && Object.hasOwnProperty.call(message, "principalId"))
                        $root.types.v1.PrincipalId.encode(message.principalId, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified NodeId message, length delimited. Does not implicitly {@link types.v1.NodeId.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof types.v1.NodeId
                 * @static
                 * @param {types.v1.INodeId} message NodeId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NodeId.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a NodeId message from the specified reader or buffer.
                 * @function decode
                 * @memberof types.v1.NodeId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {types.v1.NodeId} NodeId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NodeId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.v1.NodeId();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.principalId = $root.types.v1.PrincipalId.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a NodeId message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof types.v1.NodeId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {types.v1.NodeId} NodeId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NodeId.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a NodeId message.
                 * @function verify
                 * @memberof types.v1.NodeId
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NodeId.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.principalId != null && message.hasOwnProperty("principalId")) {
                        var error = $root.types.v1.PrincipalId.verify(message.principalId);
                        if (error)
                            return "principalId." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a NodeId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof types.v1.NodeId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {types.v1.NodeId} NodeId
                 */
                NodeId.fromObject = function fromObject(object) {
                    if (object instanceof $root.types.v1.NodeId)
                        return object;
                    var message = new $root.types.v1.NodeId();
                    if (object.principalId != null) {
                        if (typeof object.principalId !== "object")
                            throw TypeError(".types.v1.NodeId.principalId: object expected");
                        message.principalId = $root.types.v1.PrincipalId.fromObject(object.principalId);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a NodeId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof types.v1.NodeId
                 * @static
                 * @param {types.v1.NodeId} message NodeId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NodeId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.principalId = null;
                    if (message.principalId != null && message.hasOwnProperty("principalId"))
                        object.principalId = $root.types.v1.PrincipalId.toObject(message.principalId, options);
                    return object;
                };
    
                /**
                 * Converts this NodeId to JSON.
                 * @function toJSON
                 * @memberof types.v1.NodeId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NodeId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return NodeId;
            })();
    
            v1.NiDkgId = (function() {
    
                /**
                 * Properties of a NiDkgId.
                 * @memberof types.v1
                 * @interface INiDkgId
                 * @property {number|Long|null} [startBlockHeight] NiDkgId startBlockHeight
                 * @property {Uint8Array|null} [dealerSubnet] NiDkgId dealerSubnet
                 * @property {types.v1.NiDkgTag|null} [dkgTag] NiDkgId dkgTag
                 * @property {google.protobuf.IBytesValue|null} [remoteTargetId] NiDkgId remoteTargetId
                 */
    
                /**
                 * Constructs a new NiDkgId.
                 * @memberof types.v1
                 * @classdesc Represents a NiDkgId.
                 * @implements INiDkgId
                 * @constructor
                 * @param {types.v1.INiDkgId=} [properties] Properties to set
                 */
                function NiDkgId(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * NiDkgId startBlockHeight.
                 * @member {number|Long} startBlockHeight
                 * @memberof types.v1.NiDkgId
                 * @instance
                 */
                NiDkgId.prototype.startBlockHeight = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * NiDkgId dealerSubnet.
                 * @member {Uint8Array} dealerSubnet
                 * @memberof types.v1.NiDkgId
                 * @instance
                 */
                NiDkgId.prototype.dealerSubnet = $util.newBuffer([]);
    
                /**
                 * NiDkgId dkgTag.
                 * @member {types.v1.NiDkgTag} dkgTag
                 * @memberof types.v1.NiDkgId
                 * @instance
                 */
                NiDkgId.prototype.dkgTag = 0;
    
                /**
                 * NiDkgId remoteTargetId.
                 * @member {google.protobuf.IBytesValue|null|undefined} remoteTargetId
                 * @memberof types.v1.NiDkgId
                 * @instance
                 */
                NiDkgId.prototype.remoteTargetId = null;
    
                /**
                 * Creates a new NiDkgId instance using the specified properties.
                 * @function create
                 * @memberof types.v1.NiDkgId
                 * @static
                 * @param {types.v1.INiDkgId=} [properties] Properties to set
                 * @returns {types.v1.NiDkgId} NiDkgId instance
                 */
                NiDkgId.create = function create(properties) {
                    return new NiDkgId(properties);
                };
    
                /**
                 * Encodes the specified NiDkgId message. Does not implicitly {@link types.v1.NiDkgId.verify|verify} messages.
                 * @function encode
                 * @memberof types.v1.NiDkgId
                 * @static
                 * @param {types.v1.INiDkgId} message NiDkgId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiDkgId.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.startBlockHeight != null && Object.hasOwnProperty.call(message, "startBlockHeight"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.startBlockHeight);
                    if (message.dealerSubnet != null && Object.hasOwnProperty.call(message, "dealerSubnet"))
                        writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.dealerSubnet);
                    if (message.dkgTag != null && Object.hasOwnProperty.call(message, "dkgTag"))
                        writer.uint32(/* id 4, wireType 0 =*/32).int32(message.dkgTag);
                    if (message.remoteTargetId != null && Object.hasOwnProperty.call(message, "remoteTargetId"))
                        $root.google.protobuf.BytesValue.encode(message.remoteTargetId, writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                    return writer;
                };
    
                /**
                 * Encodes the specified NiDkgId message, length delimited. Does not implicitly {@link types.v1.NiDkgId.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof types.v1.NiDkgId
                 * @static
                 * @param {types.v1.INiDkgId} message NiDkgId message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NiDkgId.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a NiDkgId message from the specified reader or buffer.
                 * @function decode
                 * @memberof types.v1.NiDkgId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {types.v1.NiDkgId} NiDkgId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiDkgId.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.v1.NiDkgId();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.startBlockHeight = reader.uint64();
                            break;
                        case 2:
                            message.dealerSubnet = reader.bytes();
                            break;
                        case 4:
                            message.dkgTag = reader.int32();
                            break;
                        case 5:
                            message.remoteTargetId = $root.google.protobuf.BytesValue.decode(reader, reader.uint32());
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a NiDkgId message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof types.v1.NiDkgId
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {types.v1.NiDkgId} NiDkgId
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NiDkgId.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a NiDkgId message.
                 * @function verify
                 * @memberof types.v1.NiDkgId
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NiDkgId.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.startBlockHeight != null && message.hasOwnProperty("startBlockHeight"))
                        if (!$util.isInteger(message.startBlockHeight) && !(message.startBlockHeight && $util.isInteger(message.startBlockHeight.low) && $util.isInteger(message.startBlockHeight.high)))
                            return "startBlockHeight: integer|Long expected";
                    if (message.dealerSubnet != null && message.hasOwnProperty("dealerSubnet"))
                        if (!(message.dealerSubnet && typeof message.dealerSubnet.length === "number" || $util.isString(message.dealerSubnet)))
                            return "dealerSubnet: buffer expected";
                    if (message.dkgTag != null && message.hasOwnProperty("dkgTag"))
                        switch (message.dkgTag) {
                        default:
                            return "dkgTag: enum value expected";
                        case 0:
                        case 1:
                        case 2:
                            break;
                        }
                    if (message.remoteTargetId != null && message.hasOwnProperty("remoteTargetId")) {
                        var error = $root.google.protobuf.BytesValue.verify(message.remoteTargetId);
                        if (error)
                            return "remoteTargetId." + error;
                    }
                    return null;
                };
    
                /**
                 * Creates a NiDkgId message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof types.v1.NiDkgId
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {types.v1.NiDkgId} NiDkgId
                 */
                NiDkgId.fromObject = function fromObject(object) {
                    if (object instanceof $root.types.v1.NiDkgId)
                        return object;
                    var message = new $root.types.v1.NiDkgId();
                    if (object.startBlockHeight != null)
                        if ($util.Long)
                            (message.startBlockHeight = $util.Long.fromValue(object.startBlockHeight)).unsigned = true;
                        else if (typeof object.startBlockHeight === "string")
                            message.startBlockHeight = parseInt(object.startBlockHeight, 10);
                        else if (typeof object.startBlockHeight === "number")
                            message.startBlockHeight = object.startBlockHeight;
                        else if (typeof object.startBlockHeight === "object")
                            message.startBlockHeight = new $util.LongBits(object.startBlockHeight.low >>> 0, object.startBlockHeight.high >>> 0).toNumber(true);
                    if (object.dealerSubnet != null)
                        if (typeof object.dealerSubnet === "string")
                            $util.base64.decode(object.dealerSubnet, message.dealerSubnet = $util.newBuffer($util.base64.length(object.dealerSubnet)), 0);
                        else if (object.dealerSubnet.length)
                            message.dealerSubnet = object.dealerSubnet;
                    switch (object.dkgTag) {
                    case "NI_DKG_TAG_UNSPECIFIED":
                    case 0:
                        message.dkgTag = 0;
                        break;
                    case "NI_DKG_TAG_LOW_THRESHOLD":
                    case 1:
                        message.dkgTag = 1;
                        break;
                    case "NI_DKG_TAG_HIGH_THRESHOLD":
                    case 2:
                        message.dkgTag = 2;
                        break;
                    }
                    if (object.remoteTargetId != null) {
                        if (typeof object.remoteTargetId !== "object")
                            throw TypeError(".types.v1.NiDkgId.remoteTargetId: object expected");
                        message.remoteTargetId = $root.google.protobuf.BytesValue.fromObject(object.remoteTargetId);
                    }
                    return message;
                };
    
                /**
                 * Creates a plain object from a NiDkgId message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof types.v1.NiDkgId
                 * @static
                 * @param {types.v1.NiDkgId} message NiDkgId
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NiDkgId.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.startBlockHeight = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.startBlockHeight = options.longs === String ? "0" : 0;
                        if (options.bytes === String)
                            object.dealerSubnet = "";
                        else {
                            object.dealerSubnet = [];
                            if (options.bytes !== Array)
                                object.dealerSubnet = $util.newBuffer(object.dealerSubnet);
                        }
                        object.dkgTag = options.enums === String ? "NI_DKG_TAG_UNSPECIFIED" : 0;
                        object.remoteTargetId = null;
                    }
                    if (message.startBlockHeight != null && message.hasOwnProperty("startBlockHeight"))
                        if (typeof message.startBlockHeight === "number")
                            object.startBlockHeight = options.longs === String ? String(message.startBlockHeight) : message.startBlockHeight;
                        else
                            object.startBlockHeight = options.longs === String ? $util.Long.prototype.toString.call(message.startBlockHeight) : options.longs === Number ? new $util.LongBits(message.startBlockHeight.low >>> 0, message.startBlockHeight.high >>> 0).toNumber(true) : message.startBlockHeight;
                    if (message.dealerSubnet != null && message.hasOwnProperty("dealerSubnet"))
                        object.dealerSubnet = options.bytes === String ? $util.base64.encode(message.dealerSubnet, 0, message.dealerSubnet.length) : options.bytes === Array ? Array.prototype.slice.call(message.dealerSubnet) : message.dealerSubnet;
                    if (message.dkgTag != null && message.hasOwnProperty("dkgTag"))
                        object.dkgTag = options.enums === String ? $root.types.v1.NiDkgTag[message.dkgTag] : message.dkgTag;
                    if (message.remoteTargetId != null && message.hasOwnProperty("remoteTargetId"))
                        object.remoteTargetId = $root.google.protobuf.BytesValue.toObject(message.remoteTargetId, options);
                    return object;
                };
    
                /**
                 * Converts this NiDkgId to JSON.
                 * @function toJSON
                 * @memberof types.v1.NiDkgId
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NiDkgId.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return NiDkgId;
            })();
    
            /**
             * NiDkgTag enum.
             * @name types.v1.NiDkgTag
             * @enum {number}
             * @property {number} NI_DKG_TAG_UNSPECIFIED=0 NI_DKG_TAG_UNSPECIFIED value
             * @property {number} NI_DKG_TAG_LOW_THRESHOLD=1 NI_DKG_TAG_LOW_THRESHOLD value
             * @property {number} NI_DKG_TAG_HIGH_THRESHOLD=2 NI_DKG_TAG_HIGH_THRESHOLD value
             */
            v1.NiDkgTag = (function() {
                var valuesById = {}, values = Object.create(valuesById);
                values[valuesById[0] = "NI_DKG_TAG_UNSPECIFIED"] = 0;
                values[valuesById[1] = "NI_DKG_TAG_LOW_THRESHOLD"] = 1;
                values[valuesById[2] = "NI_DKG_TAG_HIGH_THRESHOLD"] = 2;
                return values;
            })();
    
            v1.NominalCycles = (function() {
    
                /**
                 * Properties of a NominalCycles.
                 * @memberof types.v1
                 * @interface INominalCycles
                 * @property {number|Long|null} [high] NominalCycles high
                 * @property {number|Long|null} [low] NominalCycles low
                 */
    
                /**
                 * Constructs a new NominalCycles.
                 * @memberof types.v1
                 * @classdesc Represents a NominalCycles.
                 * @implements INominalCycles
                 * @constructor
                 * @param {types.v1.INominalCycles=} [properties] Properties to set
                 */
                function NominalCycles(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * NominalCycles high.
                 * @member {number|Long} high
                 * @memberof types.v1.NominalCycles
                 * @instance
                 */
                NominalCycles.prototype.high = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * NominalCycles low.
                 * @member {number|Long} low
                 * @memberof types.v1.NominalCycles
                 * @instance
                 */
                NominalCycles.prototype.low = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Creates a new NominalCycles instance using the specified properties.
                 * @function create
                 * @memberof types.v1.NominalCycles
                 * @static
                 * @param {types.v1.INominalCycles=} [properties] Properties to set
                 * @returns {types.v1.NominalCycles} NominalCycles instance
                 */
                NominalCycles.create = function create(properties) {
                    return new NominalCycles(properties);
                };
    
                /**
                 * Encodes the specified NominalCycles message. Does not implicitly {@link types.v1.NominalCycles.verify|verify} messages.
                 * @function encode
                 * @memberof types.v1.NominalCycles
                 * @static
                 * @param {types.v1.INominalCycles} message NominalCycles message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NominalCycles.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.high != null && Object.hasOwnProperty.call(message, "high"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.high);
                    if (message.low != null && Object.hasOwnProperty.call(message, "low"))
                        writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.low);
                    return writer;
                };
    
                /**
                 * Encodes the specified NominalCycles message, length delimited. Does not implicitly {@link types.v1.NominalCycles.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof types.v1.NominalCycles
                 * @static
                 * @param {types.v1.INominalCycles} message NominalCycles message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                NominalCycles.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a NominalCycles message from the specified reader or buffer.
                 * @function decode
                 * @memberof types.v1.NominalCycles
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {types.v1.NominalCycles} NominalCycles
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NominalCycles.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.types.v1.NominalCycles();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.high = reader.uint64();
                            break;
                        case 2:
                            message.low = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a NominalCycles message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof types.v1.NominalCycles
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {types.v1.NominalCycles} NominalCycles
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                NominalCycles.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a NominalCycles message.
                 * @function verify
                 * @memberof types.v1.NominalCycles
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                NominalCycles.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.high != null && message.hasOwnProperty("high"))
                        if (!$util.isInteger(message.high) && !(message.high && $util.isInteger(message.high.low) && $util.isInteger(message.high.high)))
                            return "high: integer|Long expected";
                    if (message.low != null && message.hasOwnProperty("low"))
                        if (!$util.isInteger(message.low) && !(message.low && $util.isInteger(message.low.low) && $util.isInteger(message.low.high)))
                            return "low: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a NominalCycles message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof types.v1.NominalCycles
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {types.v1.NominalCycles} NominalCycles
                 */
                NominalCycles.fromObject = function fromObject(object) {
                    if (object instanceof $root.types.v1.NominalCycles)
                        return object;
                    var message = new $root.types.v1.NominalCycles();
                    if (object.high != null)
                        if ($util.Long)
                            (message.high = $util.Long.fromValue(object.high)).unsigned = true;
                        else if (typeof object.high === "string")
                            message.high = parseInt(object.high, 10);
                        else if (typeof object.high === "number")
                            message.high = object.high;
                        else if (typeof object.high === "object")
                            message.high = new $util.LongBits(object.high.low >>> 0, object.high.high >>> 0).toNumber(true);
                    if (object.low != null)
                        if ($util.Long)
                            (message.low = $util.Long.fromValue(object.low)).unsigned = true;
                        else if (typeof object.low === "string")
                            message.low = parseInt(object.low, 10);
                        else if (typeof object.low === "number")
                            message.low = object.low;
                        else if (typeof object.low === "object")
                            message.low = new $util.LongBits(object.low.low >>> 0, object.low.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a NominalCycles message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof types.v1.NominalCycles
                 * @static
                 * @param {types.v1.NominalCycles} message NominalCycles
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                NominalCycles.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults) {
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.high = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.high = options.longs === String ? "0" : 0;
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.low = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.low = options.longs === String ? "0" : 0;
                    }
                    if (message.high != null && message.hasOwnProperty("high"))
                        if (typeof message.high === "number")
                            object.high = options.longs === String ? String(message.high) : message.high;
                        else
                            object.high = options.longs === String ? $util.Long.prototype.toString.call(message.high) : options.longs === Number ? new $util.LongBits(message.high.low >>> 0, message.high.high >>> 0).toNumber(true) : message.high;
                    if (message.low != null && message.hasOwnProperty("low"))
                        if (typeof message.low === "number")
                            object.low = options.longs === String ? String(message.low) : message.low;
                        else
                            object.low = options.longs === String ? $util.Long.prototype.toString.call(message.low) : options.longs === Number ? new $util.LongBits(message.low.low >>> 0, message.low.high >>> 0).toNumber(true) : message.low;
                    return object;
                };
    
                /**
                 * Converts this NominalCycles to JSON.
                 * @function toJSON
                 * @memberof types.v1.NominalCycles
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                NominalCycles.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return NominalCycles;
            })();
    
            return v1;
        })();
    
        return types;
    })();
    
    $root.google = (function() {
    
        /**
         * Namespace google.
         * @exports google
         * @namespace
         */
        var google = {};
    
        google.protobuf = (function() {
    
            /**
             * Namespace protobuf.
             * @memberof google
             * @namespace
             */
            var protobuf = {};
    
            protobuf.Empty = (function() {
    
                /**
                 * Properties of an Empty.
                 * @memberof google.protobuf
                 * @interface IEmpty
                 */
    
                /**
                 * Constructs a new Empty.
                 * @memberof google.protobuf
                 * @classdesc Represents an Empty.
                 * @implements IEmpty
                 * @constructor
                 * @param {google.protobuf.IEmpty=} [properties] Properties to set
                 */
                function Empty(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Creates a new Empty instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty=} [properties] Properties to set
                 * @returns {google.protobuf.Empty} Empty instance
                 */
                Empty.create = function create(properties) {
                    return new Empty(properties);
                };
    
                /**
                 * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    return writer;
                };
    
                /**
                 * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.IEmpty} message Empty message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Empty.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Empty message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Empty();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Empty message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Empty} Empty
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Empty.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Empty message.
                 * @function verify
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Empty.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    return null;
                };
    
                /**
                 * Creates an Empty message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Empty} Empty
                 */
                Empty.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Empty)
                        return object;
                    return new $root.google.protobuf.Empty();
                };
    
                /**
                 * Creates a plain object from an Empty message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Empty
                 * @static
                 * @param {google.protobuf.Empty} message Empty
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Empty.toObject = function toObject() {
                    return {};
                };
    
                /**
                 * Converts this Empty to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Empty
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Empty.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Empty;
            })();
    
            protobuf.DoubleValue = (function() {
    
                /**
                 * Properties of a DoubleValue.
                 * @memberof google.protobuf
                 * @interface IDoubleValue
                 * @property {number|null} [value] DoubleValue value
                 */
    
                /**
                 * Constructs a new DoubleValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a DoubleValue.
                 * @implements IDoubleValue
                 * @constructor
                 * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
                 */
                function DoubleValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * DoubleValue value.
                 * @member {number} value
                 * @memberof google.protobuf.DoubleValue
                 * @instance
                 */
                DoubleValue.prototype.value = 0;
    
                /**
                 * Creates a new DoubleValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.IDoubleValue=} [properties] Properties to set
                 * @returns {google.protobuf.DoubleValue} DoubleValue instance
                 */
                DoubleValue.create = function create(properties) {
                    return new DoubleValue(properties);
                };
    
                /**
                 * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoubleValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 1 =*/9).double(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.IDoubleValue} message DoubleValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                DoubleValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a DoubleValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoubleValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.DoubleValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.double();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                DoubleValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a DoubleValue message.
                 * @function verify
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                DoubleValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "number")
                            return "value: number expected";
                    return null;
                };
    
                /**
                 * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.DoubleValue} DoubleValue
                 */
                DoubleValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.DoubleValue)
                        return object;
                    var message = new $root.google.protobuf.DoubleValue();
                    if (object.value != null)
                        message.value = Number(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.DoubleValue
                 * @static
                 * @param {google.protobuf.DoubleValue} message DoubleValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                DoubleValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this DoubleValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.DoubleValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                DoubleValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return DoubleValue;
            })();
    
            protobuf.FloatValue = (function() {
    
                /**
                 * Properties of a FloatValue.
                 * @memberof google.protobuf
                 * @interface IFloatValue
                 * @property {number|null} [value] FloatValue value
                 */
    
                /**
                 * Constructs a new FloatValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a FloatValue.
                 * @implements IFloatValue
                 * @constructor
                 * @param {google.protobuf.IFloatValue=} [properties] Properties to set
                 */
                function FloatValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * FloatValue value.
                 * @member {number} value
                 * @memberof google.protobuf.FloatValue
                 * @instance
                 */
                FloatValue.prototype.value = 0;
    
                /**
                 * Creates a new FloatValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.IFloatValue=} [properties] Properties to set
                 * @returns {google.protobuf.FloatValue} FloatValue instance
                 */
                FloatValue.create = function create(properties) {
                    return new FloatValue(properties);
                };
    
                /**
                 * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FloatValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 5 =*/13).float(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.IFloatValue} message FloatValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                FloatValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a FloatValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.FloatValue} FloatValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FloatValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.FloatValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.float();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a FloatValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.FloatValue} FloatValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                FloatValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a FloatValue message.
                 * @function verify
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                FloatValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "number")
                            return "value: number expected";
                    return null;
                };
    
                /**
                 * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.FloatValue} FloatValue
                 */
                FloatValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.FloatValue)
                        return object;
                    var message = new $root.google.protobuf.FloatValue();
                    if (object.value != null)
                        message.value = Number(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.FloatValue
                 * @static
                 * @param {google.protobuf.FloatValue} message FloatValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                FloatValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.json && !isFinite(message.value) ? String(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this FloatValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.FloatValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                FloatValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return FloatValue;
            })();
    
            protobuf.Int64Value = (function() {
    
                /**
                 * Properties of an Int64Value.
                 * @memberof google.protobuf
                 * @interface IInt64Value
                 * @property {number|Long|null} [value] Int64Value value
                 */
    
                /**
                 * Constructs a new Int64Value.
                 * @memberof google.protobuf
                 * @classdesc Represents an Int64Value.
                 * @implements IInt64Value
                 * @constructor
                 * @param {google.protobuf.IInt64Value=} [properties] Properties to set
                 */
                function Int64Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Int64Value value.
                 * @member {number|Long} value
                 * @memberof google.protobuf.Int64Value
                 * @instance
                 */
                Int64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,false) : 0;
    
                /**
                 * Creates a new Int64Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.IInt64Value=} [properties] Properties to set
                 * @returns {google.protobuf.Int64Value} Int64Value instance
                 */
                Int64Value.create = function create(properties) {
                    return new Int64Value(properties);
                };
    
                /**
                 * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int64Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int64(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.IInt64Value} message Int64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int64Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Int64Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Int64Value} Int64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int64Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int64Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.int64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Int64Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Int64Value} Int64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int64Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Int64Value message.
                 * @function verify
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Int64Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                            return "value: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Int64Value} Int64Value
                 */
                Int64Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Int64Value)
                        return object;
                    var message = new $root.google.protobuf.Int64Value();
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = false;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber();
                    return message;
                };
    
                /**
                 * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Int64Value
                 * @static
                 * @param {google.protobuf.Int64Value} message Int64Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Int64Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, false);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber() : message.value;
                    return object;
                };
    
                /**
                 * Converts this Int64Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Int64Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Int64Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Int64Value;
            })();
    
            protobuf.UInt64Value = (function() {
    
                /**
                 * Properties of a UInt64Value.
                 * @memberof google.protobuf
                 * @interface IUInt64Value
                 * @property {number|Long|null} [value] UInt64Value value
                 */
    
                /**
                 * Constructs a new UInt64Value.
                 * @memberof google.protobuf
                 * @classdesc Represents a UInt64Value.
                 * @implements IUInt64Value
                 * @constructor
                 * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
                 */
                function UInt64Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UInt64Value value.
                 * @member {number|Long} value
                 * @memberof google.protobuf.UInt64Value
                 * @instance
                 */
                UInt64Value.prototype.value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                /**
                 * Creates a new UInt64Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.IUInt64Value=} [properties] Properties to set
                 * @returns {google.protobuf.UInt64Value} UInt64Value instance
                 */
                UInt64Value.create = function create(properties) {
                    return new UInt64Value(properties);
                };
    
                /**
                 * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt64Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.IUInt64Value} message UInt64Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt64Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UInt64Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt64Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt64Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.uint64();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt64Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UInt64Value message.
                 * @function verify
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UInt64Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value) && !(message.value && $util.isInteger(message.value.low) && $util.isInteger(message.value.high)))
                            return "value: integer|Long expected";
                    return null;
                };
    
                /**
                 * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UInt64Value} UInt64Value
                 */
                UInt64Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UInt64Value)
                        return object;
                    var message = new $root.google.protobuf.UInt64Value();
                    if (object.value != null)
                        if ($util.Long)
                            (message.value = $util.Long.fromValue(object.value)).unsigned = true;
                        else if (typeof object.value === "string")
                            message.value = parseInt(object.value, 10);
                        else if (typeof object.value === "number")
                            message.value = object.value;
                        else if (typeof object.value === "object")
                            message.value = new $util.LongBits(object.value.low >>> 0, object.value.high >>> 0).toNumber(true);
                    return message;
                };
    
                /**
                 * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UInt64Value
                 * @static
                 * @param {google.protobuf.UInt64Value} message UInt64Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UInt64Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if ($util.Long) {
                            var long = new $util.Long(0, 0, true);
                            object.value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                        } else
                            object.value = options.longs === String ? "0" : 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value === "number")
                            object.value = options.longs === String ? String(message.value) : message.value;
                        else
                            object.value = options.longs === String ? $util.Long.prototype.toString.call(message.value) : options.longs === Number ? new $util.LongBits(message.value.low >>> 0, message.value.high >>> 0).toNumber(true) : message.value;
                    return object;
                };
    
                /**
                 * Converts this UInt64Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UInt64Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UInt64Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UInt64Value;
            })();
    
            protobuf.Int32Value = (function() {
    
                /**
                 * Properties of an Int32Value.
                 * @memberof google.protobuf
                 * @interface IInt32Value
                 * @property {number|null} [value] Int32Value value
                 */
    
                /**
                 * Constructs a new Int32Value.
                 * @memberof google.protobuf
                 * @classdesc Represents an Int32Value.
                 * @implements IInt32Value
                 * @constructor
                 * @param {google.protobuf.IInt32Value=} [properties] Properties to set
                 */
                function Int32Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * Int32Value value.
                 * @member {number} value
                 * @memberof google.protobuf.Int32Value
                 * @instance
                 */
                Int32Value.prototype.value = 0;
    
                /**
                 * Creates a new Int32Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.IInt32Value=} [properties] Properties to set
                 * @returns {google.protobuf.Int32Value} Int32Value instance
                 */
                Int32Value.create = function create(properties) {
                    return new Int32Value(properties);
                };
    
                /**
                 * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int32Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).int32(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.IInt32Value} message Int32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                Int32Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes an Int32Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.Int32Value} Int32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int32Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.Int32Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.int32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes an Int32Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.Int32Value} Int32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                Int32Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies an Int32Value message.
                 * @function verify
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                Int32Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };
    
                /**
                 * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.Int32Value} Int32Value
                 */
                Int32Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.Int32Value)
                        return object;
                    var message = new $root.google.protobuf.Int32Value();
                    if (object.value != null)
                        message.value = object.value | 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.Int32Value
                 * @static
                 * @param {google.protobuf.Int32Value} message Int32Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                Int32Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this Int32Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.Int32Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                Int32Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return Int32Value;
            })();
    
            protobuf.UInt32Value = (function() {
    
                /**
                 * Properties of a UInt32Value.
                 * @memberof google.protobuf
                 * @interface IUInt32Value
                 * @property {number|null} [value] UInt32Value value
                 */
    
                /**
                 * Constructs a new UInt32Value.
                 * @memberof google.protobuf
                 * @classdesc Represents a UInt32Value.
                 * @implements IUInt32Value
                 * @constructor
                 * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
                 */
                function UInt32Value(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * UInt32Value value.
                 * @member {number} value
                 * @memberof google.protobuf.UInt32Value
                 * @instance
                 */
                UInt32Value.prototype.value = 0;
    
                /**
                 * Creates a new UInt32Value instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.IUInt32Value=} [properties] Properties to set
                 * @returns {google.protobuf.UInt32Value} UInt32Value instance
                 */
                UInt32Value.create = function create(properties) {
                    return new UInt32Value(properties);
                };
    
                /**
                 * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt32Value.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.IUInt32Value} message UInt32Value message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                UInt32Value.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a UInt32Value message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt32Value.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.UInt32Value();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.uint32();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                UInt32Value.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a UInt32Value message.
                 * @function verify
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                UInt32Value.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isInteger(message.value))
                            return "value: integer expected";
                    return null;
                };
    
                /**
                 * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.UInt32Value} UInt32Value
                 */
                UInt32Value.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.UInt32Value)
                        return object;
                    var message = new $root.google.protobuf.UInt32Value();
                    if (object.value != null)
                        message.value = object.value >>> 0;
                    return message;
                };
    
                /**
                 * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.UInt32Value
                 * @static
                 * @param {google.protobuf.UInt32Value} message UInt32Value
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                UInt32Value.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = 0;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this UInt32Value to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.UInt32Value
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                UInt32Value.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return UInt32Value;
            })();
    
            protobuf.BoolValue = (function() {
    
                /**
                 * Properties of a BoolValue.
                 * @memberof google.protobuf
                 * @interface IBoolValue
                 * @property {boolean|null} [value] BoolValue value
                 */
    
                /**
                 * Constructs a new BoolValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a BoolValue.
                 * @implements IBoolValue
                 * @constructor
                 * @param {google.protobuf.IBoolValue=} [properties] Properties to set
                 */
                function BoolValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BoolValue value.
                 * @member {boolean} value
                 * @memberof google.protobuf.BoolValue
                 * @instance
                 */
                BoolValue.prototype.value = false;
    
                /**
                 * Creates a new BoolValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.IBoolValue=} [properties] Properties to set
                 * @returns {google.protobuf.BoolValue} BoolValue instance
                 */
                BoolValue.create = function create(properties) {
                    return new BoolValue(properties);
                };
    
                /**
                 * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BoolValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 0 =*/8).bool(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.IBoolValue} message BoolValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BoolValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BoolValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.BoolValue} BoolValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BoolValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BoolValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.bool();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a BoolValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.BoolValue} BoolValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BoolValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BoolValue message.
                 * @function verify
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BoolValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (typeof message.value !== "boolean")
                            return "value: boolean expected";
                    return null;
                };
    
                /**
                 * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.BoolValue} BoolValue
                 */
                BoolValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.BoolValue)
                        return object;
                    var message = new $root.google.protobuf.BoolValue();
                    if (object.value != null)
                        message.value = Boolean(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.BoolValue
                 * @static
                 * @param {google.protobuf.BoolValue} message BoolValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BoolValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = false;
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this BoolValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.BoolValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BoolValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return BoolValue;
            })();
    
            protobuf.StringValue = (function() {
    
                /**
                 * Properties of a StringValue.
                 * @memberof google.protobuf
                 * @interface IStringValue
                 * @property {string|null} [value] StringValue value
                 */
    
                /**
                 * Constructs a new StringValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a StringValue.
                 * @implements IStringValue
                 * @constructor
                 * @param {google.protobuf.IStringValue=} [properties] Properties to set
                 */
                function StringValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * StringValue value.
                 * @member {string} value
                 * @memberof google.protobuf.StringValue
                 * @instance
                 */
                StringValue.prototype.value = "";
    
                /**
                 * Creates a new StringValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.IStringValue=} [properties] Properties to set
                 * @returns {google.protobuf.StringValue} StringValue instance
                 */
                StringValue.create = function create(properties) {
                    return new StringValue(properties);
                };
    
                /**
                 * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StringValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 2 =*/10).string(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.IStringValue} message StringValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                StringValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a StringValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.StringValue} StringValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StringValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.StringValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.string();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a StringValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.StringValue} StringValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                StringValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a StringValue message.
                 * @function verify
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                StringValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!$util.isString(message.value))
                            return "value: string expected";
                    return null;
                };
    
                /**
                 * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.StringValue} StringValue
                 */
                StringValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.StringValue)
                        return object;
                    var message = new $root.google.protobuf.StringValue();
                    if (object.value != null)
                        message.value = String(object.value);
                    return message;
                };
    
                /**
                 * Creates a plain object from a StringValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.StringValue
                 * @static
                 * @param {google.protobuf.StringValue} message StringValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                StringValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        object.value = "";
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = message.value;
                    return object;
                };
    
                /**
                 * Converts this StringValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.StringValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                StringValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return StringValue;
            })();
    
            protobuf.BytesValue = (function() {
    
                /**
                 * Properties of a BytesValue.
                 * @memberof google.protobuf
                 * @interface IBytesValue
                 * @property {Uint8Array|null} [value] BytesValue value
                 */
    
                /**
                 * Constructs a new BytesValue.
                 * @memberof google.protobuf
                 * @classdesc Represents a BytesValue.
                 * @implements IBytesValue
                 * @constructor
                 * @param {google.protobuf.IBytesValue=} [properties] Properties to set
                 */
                function BytesValue(properties) {
                    if (properties)
                        for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                            if (properties[keys[i]] != null)
                                this[keys[i]] = properties[keys[i]];
                }
    
                /**
                 * BytesValue value.
                 * @member {Uint8Array} value
                 * @memberof google.protobuf.BytesValue
                 * @instance
                 */
                BytesValue.prototype.value = $util.newBuffer([]);
    
                /**
                 * Creates a new BytesValue instance using the specified properties.
                 * @function create
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.IBytesValue=} [properties] Properties to set
                 * @returns {google.protobuf.BytesValue} BytesValue instance
                 */
                BytesValue.create = function create(properties) {
                    return new BytesValue(properties);
                };
    
                /**
                 * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
                 * @function encode
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BytesValue.encode = function encode(message, writer) {
                    if (!writer)
                        writer = $Writer.create();
                    if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                        writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                    return writer;
                };
    
                /**
                 * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
                 * @function encodeDelimited
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.IBytesValue} message BytesValue message or plain object to encode
                 * @param {$protobuf.Writer} [writer] Writer to encode to
                 * @returns {$protobuf.Writer} Writer
                 */
                BytesValue.encodeDelimited = function encodeDelimited(message, writer) {
                    return this.encode(message, writer).ldelim();
                };
    
                /**
                 * Decodes a BytesValue message from the specified reader or buffer.
                 * @function decode
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @param {number} [length] Message length if known beforehand
                 * @returns {google.protobuf.BytesValue} BytesValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BytesValue.decode = function decode(reader, length) {
                    if (!(reader instanceof $Reader))
                        reader = $Reader.create(reader);
                    var end = length === undefined ? reader.len : reader.pos + length, message = new $root.google.protobuf.BytesValue();
                    while (reader.pos < end) {
                        var tag = reader.uint32();
                        switch (tag >>> 3) {
                        case 1:
                            message.value = reader.bytes();
                            break;
                        default:
                            reader.skipType(tag & 7);
                            break;
                        }
                    }
                    return message;
                };
    
                /**
                 * Decodes a BytesValue message from the specified reader or buffer, length delimited.
                 * @function decodeDelimited
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                 * @returns {google.protobuf.BytesValue} BytesValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                BytesValue.decodeDelimited = function decodeDelimited(reader) {
                    if (!(reader instanceof $Reader))
                        reader = new $Reader(reader);
                    return this.decode(reader, reader.uint32());
                };
    
                /**
                 * Verifies a BytesValue message.
                 * @function verify
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {Object.<string,*>} message Plain object to verify
                 * @returns {string|null} `null` if valid, otherwise the reason why it is not
                 */
                BytesValue.verify = function verify(message) {
                    if (typeof message !== "object" || message === null)
                        return "object expected";
                    if (message.value != null && message.hasOwnProperty("value"))
                        if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                            return "value: buffer expected";
                    return null;
                };
    
                /**
                 * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
                 * @function fromObject
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {Object.<string,*>} object Plain object
                 * @returns {google.protobuf.BytesValue} BytesValue
                 */
                BytesValue.fromObject = function fromObject(object) {
                    if (object instanceof $root.google.protobuf.BytesValue)
                        return object;
                    var message = new $root.google.protobuf.BytesValue();
                    if (object.value != null)
                        if (typeof object.value === "string")
                            $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                        else if (object.value.length)
                            message.value = object.value;
                    return message;
                };
    
                /**
                 * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
                 * @function toObject
                 * @memberof google.protobuf.BytesValue
                 * @static
                 * @param {google.protobuf.BytesValue} message BytesValue
                 * @param {$protobuf.IConversionOptions} [options] Conversion options
                 * @returns {Object.<string,*>} Plain object
                 */
                BytesValue.toObject = function toObject(message, options) {
                    if (!options)
                        options = {};
                    var object = {};
                    if (options.defaults)
                        if (options.bytes === String)
                            object.value = "";
                        else {
                            object.value = [];
                            if (options.bytes !== Array)
                                object.value = $util.newBuffer(object.value);
                        }
                    if (message.value != null && message.hasOwnProperty("value"))
                        object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                    return object;
                };
    
                /**
                 * Converts this BytesValue to JSON.
                 * @function toJSON
                 * @memberof google.protobuf.BytesValue
                 * @instance
                 * @returns {Object.<string,*>} JSON object
                 */
                BytesValue.prototype.toJSON = function toJSON() {
                    return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                };
    
                return BytesValue;
            })();
    
            return protobuf;
        })();
    
        return google;
    })();
    
    $root.ic_registry_transport = (function() {
    
        /**
         * Namespace ic_registry_transport.
         * @exports ic_registry_transport
         * @namespace
         */
        var ic_registry_transport = {};
    
        ic_registry_transport.pb = (function() {
    
            /**
             * Namespace pb.
             * @memberof ic_registry_transport
             * @namespace
             */
            var pb = {};
    
            pb.v1 = (function() {
    
                /**
                 * Namespace v1.
                 * @memberof ic_registry_transport.pb
                 * @namespace
                 */
                var v1 = {};
    
                v1.RegistryError = (function() {
    
                    /**
                     * Properties of a RegistryError.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryError
                     * @property {ic_registry_transport.pb.v1.RegistryError.Code|null} [code] RegistryError code
                     * @property {string|null} [reason] RegistryError reason
                     * @property {Uint8Array|null} [key] RegistryError key
                     */
    
                    /**
                     * Constructs a new RegistryError.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryError.
                     * @implements IRegistryError
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryError=} [properties] Properties to set
                     */
                    function RegistryError(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryError code.
                     * @member {ic_registry_transport.pb.v1.RegistryError.Code} code
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @instance
                     */
                    RegistryError.prototype.code = 0;
    
                    /**
                     * RegistryError reason.
                     * @member {string} reason
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @instance
                     */
                    RegistryError.prototype.reason = "";
    
                    /**
                     * RegistryError key.
                     * @member {Uint8Array} key
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @instance
                     */
                    RegistryError.prototype.key = $util.newBuffer([]);
    
                    /**
                     * Creates a new RegistryError instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryError=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryError} RegistryError instance
                     */
                    RegistryError.create = function create(properties) {
                        return new RegistryError(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryError message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryError.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryError} message RegistryError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryError.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.code != null && Object.hasOwnProperty.call(message, "code"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.code);
                        if (message.reason != null && Object.hasOwnProperty.call(message, "reason"))
                            writer.uint32(/* id 2, wireType 2 =*/18).string(message.reason);
                        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.key);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryError message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryError.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryError} message RegistryError message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryError.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryError message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryError} RegistryError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryError.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryError();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.code = reader.int32();
                                break;
                            case 2:
                                message.reason = reader.string();
                                break;
                            case 3:
                                message.key = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryError message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryError} RegistryError
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryError.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryError message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryError.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.code != null && message.hasOwnProperty("code"))
                            switch (message.code) {
                            default:
                                return "code: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 3:
                            case 4:
                            case 999:
                                break;
                            }
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            if (!$util.isString(message.reason))
                                return "reason: string expected";
                        if (message.key != null && message.hasOwnProperty("key"))
                            if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                                return "key: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryError message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryError} RegistryError
                     */
                    RegistryError.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryError)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryError();
                        switch (object.code) {
                        case "MALFORMED_MESSAGE":
                        case 0:
                            message.code = 0;
                            break;
                        case "KEY_NOT_PRESENT":
                        case 1:
                            message.code = 1;
                            break;
                        case "KEY_ALREADY_PRESENT":
                        case 2:
                            message.code = 2;
                            break;
                        case "VERSION_NOT_LATEST":
                        case 3:
                            message.code = 3;
                            break;
                        case "VERSION_BEYOND_LATEST":
                        case 4:
                            message.code = 4;
                            break;
                        case "INTERNAL_ERROR":
                        case 999:
                            message.code = 999;
                            break;
                        }
                        if (object.reason != null)
                            message.reason = String(object.reason);
                        if (object.key != null)
                            if (typeof object.key === "string")
                                $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                            else if (object.key.length)
                                message.key = object.key;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryError message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryError} message RegistryError
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryError.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.code = options.enums === String ? "MALFORMED_MESSAGE" : 0;
                            object.reason = "";
                            if (options.bytes === String)
                                object.key = "";
                            else {
                                object.key = [];
                                if (options.bytes !== Array)
                                    object.key = $util.newBuffer(object.key);
                            }
                        }
                        if (message.code != null && message.hasOwnProperty("code"))
                            object.code = options.enums === String ? $root.ic_registry_transport.pb.v1.RegistryError.Code[message.code] : message.code;
                        if (message.reason != null && message.hasOwnProperty("reason"))
                            object.reason = message.reason;
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryError to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryError
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryError.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Code enum.
                     * @name ic_registry_transport.pb.v1.RegistryError.Code
                     * @enum {number}
                     * @property {number} MALFORMED_MESSAGE=0 MALFORMED_MESSAGE value
                     * @property {number} KEY_NOT_PRESENT=1 KEY_NOT_PRESENT value
                     * @property {number} KEY_ALREADY_PRESENT=2 KEY_ALREADY_PRESENT value
                     * @property {number} VERSION_NOT_LATEST=3 VERSION_NOT_LATEST value
                     * @property {number} VERSION_BEYOND_LATEST=4 VERSION_BEYOND_LATEST value
                     * @property {number} INTERNAL_ERROR=999 INTERNAL_ERROR value
                     */
                    RegistryError.Code = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "MALFORMED_MESSAGE"] = 0;
                        values[valuesById[1] = "KEY_NOT_PRESENT"] = 1;
                        values[valuesById[2] = "KEY_ALREADY_PRESENT"] = 2;
                        values[valuesById[3] = "VERSION_NOT_LATEST"] = 3;
                        values[valuesById[4] = "VERSION_BEYOND_LATEST"] = 4;
                        values[valuesById[999] = "INTERNAL_ERROR"] = 999;
                        return values;
                    })();
    
                    return RegistryError;
                })();
    
                v1.RegistryValue = (function() {
    
                    /**
                     * Properties of a RegistryValue.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryValue
                     * @property {Uint8Array|null} [value] RegistryValue value
                     * @property {number|Long|null} [version] RegistryValue version
                     * @property {boolean|null} [deletionMarker] RegistryValue deletionMarker
                     */
    
                    /**
                     * Constructs a new RegistryValue.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryValue.
                     * @implements IRegistryValue
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryValue=} [properties] Properties to set
                     */
                    function RegistryValue(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryValue value.
                     * @member {Uint8Array} value
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @instance
                     */
                    RegistryValue.prototype.value = $util.newBuffer([]);
    
                    /**
                     * RegistryValue version.
                     * @member {number|Long} version
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @instance
                     */
                    RegistryValue.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * RegistryValue deletionMarker.
                     * @member {boolean} deletionMarker
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @instance
                     */
                    RegistryValue.prototype.deletionMarker = false;
    
                    /**
                     * Creates a new RegistryValue instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryValue=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryValue} RegistryValue instance
                     */
                    RegistryValue.create = function create(properties) {
                        return new RegistryValue(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryValue message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryValue.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryValue} message RegistryValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryValue.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.value);
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.version);
                        if (message.deletionMarker != null && Object.hasOwnProperty.call(message, "deletionMarker"))
                            writer.uint32(/* id 3, wireType 0 =*/24).bool(message.deletionMarker);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryValue message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryValue.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryValue} message RegistryValue message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryValue.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryValue message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryValue} RegistryValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryValue.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryValue();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.value = reader.bytes();
                                break;
                            case 2:
                                message.version = reader.uint64();
                                break;
                            case 3:
                                message.deletionMarker = reader.bool();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryValue message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryValue} RegistryValue
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryValue.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryValue message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryValue.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                                return "value: buffer expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        if (message.deletionMarker != null && message.hasOwnProperty("deletionMarker"))
                            if (typeof message.deletionMarker !== "boolean")
                                return "deletionMarker: boolean expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryValue message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryValue} RegistryValue
                     */
                    RegistryValue.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryValue)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryValue();
                        if (object.value != null)
                            if (typeof object.value === "string")
                                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                            else if (object.value.length)
                                message.value = object.value;
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
                        if (object.deletionMarker != null)
                            message.deletionMarker = Boolean(object.deletionMarker);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryValue message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryValue} message RegistryValue
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryValue.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.value = "";
                            else {
                                object.value = [];
                                if (options.bytes !== Array)
                                    object.value = $util.newBuffer(object.value);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                            object.deletionMarker = false;
                        }
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                        if (message.deletionMarker != null && message.hasOwnProperty("deletionMarker"))
                            object.deletionMarker = message.deletionMarker;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryValue to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryValue
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryValue.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryValue;
                })();
    
                v1.RegistryDelta = (function() {
    
                    /**
                     * Properties of a RegistryDelta.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryDelta
                     * @property {Uint8Array|null} [key] RegistryDelta key
                     * @property {Array.<ic_registry_transport.pb.v1.IRegistryValue>|null} [values] RegistryDelta values
                     */
    
                    /**
                     * Constructs a new RegistryDelta.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryDelta.
                     * @implements IRegistryDelta
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryDelta=} [properties] Properties to set
                     */
                    function RegistryDelta(properties) {
                        this.values = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryDelta key.
                     * @member {Uint8Array} key
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @instance
                     */
                    RegistryDelta.prototype.key = $util.newBuffer([]);
    
                    /**
                     * RegistryDelta values.
                     * @member {Array.<ic_registry_transport.pb.v1.IRegistryValue>} values
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @instance
                     */
                    RegistryDelta.prototype.values = $util.emptyArray;
    
                    /**
                     * Creates a new RegistryDelta instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryDelta=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryDelta} RegistryDelta instance
                     */
                    RegistryDelta.create = function create(properties) {
                        return new RegistryDelta(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryDelta message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryDelta.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryDelta} message RegistryDelta message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryDelta.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
                        if (message.values != null && message.values.length)
                            for (var i = 0; i < message.values.length; ++i)
                                $root.ic_registry_transport.pb.v1.RegistryValue.encode(message.values[i], writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryDelta message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryDelta.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryDelta} message RegistryDelta message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryDelta.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryDelta message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryDelta} RegistryDelta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryDelta.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryDelta();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.key = reader.bytes();
                                break;
                            case 2:
                                if (!(message.values && message.values.length))
                                    message.values = [];
                                message.values.push($root.ic_registry_transport.pb.v1.RegistryValue.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryDelta message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryDelta} RegistryDelta
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryDelta.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryDelta message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryDelta.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.key != null && message.hasOwnProperty("key"))
                            if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                                return "key: buffer expected";
                        if (message.values != null && message.hasOwnProperty("values")) {
                            if (!Array.isArray(message.values))
                                return "values: array expected";
                            for (var i = 0; i < message.values.length; ++i) {
                                var error = $root.ic_registry_transport.pb.v1.RegistryValue.verify(message.values[i]);
                                if (error)
                                    return "values." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a RegistryDelta message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryDelta} RegistryDelta
                     */
                    RegistryDelta.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryDelta)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryDelta();
                        if (object.key != null)
                            if (typeof object.key === "string")
                                $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                            else if (object.key.length)
                                message.key = object.key;
                        if (object.values) {
                            if (!Array.isArray(object.values))
                                throw TypeError(".ic_registry_transport.pb.v1.RegistryDelta.values: array expected");
                            message.values = [];
                            for (var i = 0; i < object.values.length; ++i) {
                                if (typeof object.values[i] !== "object")
                                    throw TypeError(".ic_registry_transport.pb.v1.RegistryDelta.values: object expected");
                                message.values[i] = $root.ic_registry_transport.pb.v1.RegistryValue.fromObject(object.values[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryDelta message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryDelta} message RegistryDelta
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryDelta.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.values = [];
                        if (options.defaults)
                            if (options.bytes === String)
                                object.key = "";
                            else {
                                object.key = [];
                                if (options.bytes !== Array)
                                    object.key = $util.newBuffer(object.key);
                            }
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                        if (message.values && message.values.length) {
                            object.values = [];
                            for (var j = 0; j < message.values.length; ++j)
                                object.values[j] = $root.ic_registry_transport.pb.v1.RegistryValue.toObject(message.values[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this RegistryDelta to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryDelta
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryDelta.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryDelta;
                })();
    
                v1.RegistryGetChangesSinceRequest = (function() {
    
                    /**
                     * Properties of a RegistryGetChangesSinceRequest.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryGetChangesSinceRequest
                     * @property {number|Long|null} [version] RegistryGetChangesSinceRequest version
                     */
    
                    /**
                     * Constructs a new RegistryGetChangesSinceRequest.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryGetChangesSinceRequest.
                     * @implements IRegistryGetChangesSinceRequest
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryGetChangesSinceRequest=} [properties] Properties to set
                     */
                    function RegistryGetChangesSinceRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryGetChangesSinceRequest version.
                     * @member {number|Long} version
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @instance
                     */
                    RegistryGetChangesSinceRequest.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * Creates a new RegistryGetChangesSinceRequest instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetChangesSinceRequest=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest} RegistryGetChangesSinceRequest instance
                     */
                    RegistryGetChangesSinceRequest.create = function create(properties) {
                        return new RegistryGetChangesSinceRequest(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryGetChangesSinceRequest message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetChangesSinceRequest} message RegistryGetChangesSinceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetChangesSinceRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryGetChangesSinceRequest message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetChangesSinceRequest} message RegistryGetChangesSinceRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetChangesSinceRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryGetChangesSinceRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest} RegistryGetChangesSinceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetChangesSinceRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.version = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryGetChangesSinceRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest} RegistryGetChangesSinceRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetChangesSinceRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryGetChangesSinceRequest message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryGetChangesSinceRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryGetChangesSinceRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest} RegistryGetChangesSinceRequest
                     */
                    RegistryGetChangesSinceRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest();
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryGetChangesSinceRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest} message RegistryGetChangesSinceRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryGetChangesSinceRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryGetChangesSinceRequest to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryGetChangesSinceRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryGetChangesSinceRequest;
                })();
    
                v1.RegistryGetChangesSinceResponse = (function() {
    
                    /**
                     * Properties of a RegistryGetChangesSinceResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryGetChangesSinceResponse
                     * @property {ic_registry_transport.pb.v1.IRegistryError|null} [error] RegistryGetChangesSinceResponse error
                     * @property {number|Long|null} [version] RegistryGetChangesSinceResponse version
                     * @property {Array.<ic_registry_transport.pb.v1.IRegistryDelta>|null} [deltas] RegistryGetChangesSinceResponse deltas
                     */
    
                    /**
                     * Constructs a new RegistryGetChangesSinceResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryGetChangesSinceResponse.
                     * @implements IRegistryGetChangesSinceResponse
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryGetChangesSinceResponse=} [properties] Properties to set
                     */
                    function RegistryGetChangesSinceResponse(properties) {
                        this.deltas = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryGetChangesSinceResponse error.
                     * @member {ic_registry_transport.pb.v1.IRegistryError|null|undefined} error
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @instance
                     */
                    RegistryGetChangesSinceResponse.prototype.error = null;
    
                    /**
                     * RegistryGetChangesSinceResponse version.
                     * @member {number|Long} version
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @instance
                     */
                    RegistryGetChangesSinceResponse.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * RegistryGetChangesSinceResponse deltas.
                     * @member {Array.<ic_registry_transport.pb.v1.IRegistryDelta>} deltas
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @instance
                     */
                    RegistryGetChangesSinceResponse.prototype.deltas = $util.emptyArray;
    
                    /**
                     * Creates a new RegistryGetChangesSinceResponse instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetChangesSinceResponse=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse} RegistryGetChangesSinceResponse instance
                     */
                    RegistryGetChangesSinceResponse.create = function create(properties) {
                        return new RegistryGetChangesSinceResponse(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryGetChangesSinceResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetChangesSinceResponse} message RegistryGetChangesSinceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetChangesSinceResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                            $root.ic_registry_transport.pb.v1.RegistryError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.version);
                        if (message.deltas != null && message.deltas.length)
                            for (var i = 0; i < message.deltas.length; ++i)
                                $root.ic_registry_transport.pb.v1.RegistryDelta.encode(message.deltas[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryGetChangesSinceResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetChangesSinceResponse} message RegistryGetChangesSinceResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetChangesSinceResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryGetChangesSinceResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse} RegistryGetChangesSinceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetChangesSinceResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.ic_registry_transport.pb.v1.RegistryError.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.version = reader.uint64();
                                break;
                            case 3:
                                if (!(message.deltas && message.deltas.length))
                                    message.deltas = [];
                                message.deltas.push($root.ic_registry_transport.pb.v1.RegistryDelta.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryGetChangesSinceResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse} RegistryGetChangesSinceResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetChangesSinceResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryGetChangesSinceResponse message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryGetChangesSinceResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.ic_registry_transport.pb.v1.RegistryError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        if (message.deltas != null && message.hasOwnProperty("deltas")) {
                            if (!Array.isArray(message.deltas))
                                return "deltas: array expected";
                            for (var i = 0; i < message.deltas.length; ++i) {
                                var error = $root.ic_registry_transport.pb.v1.RegistryDelta.verify(message.deltas[i]);
                                if (error)
                                    return "deltas." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a RegistryGetChangesSinceResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse} RegistryGetChangesSinceResponse
                     */
                    RegistryGetChangesSinceResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse.error: object expected");
                            message.error = $root.ic_registry_transport.pb.v1.RegistryError.fromObject(object.error);
                        }
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
                        if (object.deltas) {
                            if (!Array.isArray(object.deltas))
                                throw TypeError(".ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse.deltas: array expected");
                            message.deltas = [];
                            for (var i = 0; i < object.deltas.length; ++i) {
                                if (typeof object.deltas[i] !== "object")
                                    throw TypeError(".ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse.deltas: object expected");
                                message.deltas[i] = $root.ic_registry_transport.pb.v1.RegistryDelta.fromObject(object.deltas[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryGetChangesSinceResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse} message RegistryGetChangesSinceResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryGetChangesSinceResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.deltas = [];
                        if (options.defaults) {
                            object.error = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                        }
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.ic_registry_transport.pb.v1.RegistryError.toObject(message.error, options);
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                        if (message.deltas && message.deltas.length) {
                            object.deltas = [];
                            for (var j = 0; j < message.deltas.length; ++j)
                                object.deltas[j] = $root.ic_registry_transport.pb.v1.RegistryDelta.toObject(message.deltas[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this RegistryGetChangesSinceResponse to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryGetChangesSinceResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryGetChangesSinceResponse;
                })();
    
                v1.RegistryGetValueRequest = (function() {
    
                    /**
                     * Properties of a RegistryGetValueRequest.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryGetValueRequest
                     * @property {google.protobuf.IUInt64Value|null} [version] RegistryGetValueRequest version
                     * @property {Uint8Array|null} [key] RegistryGetValueRequest key
                     */
    
                    /**
                     * Constructs a new RegistryGetValueRequest.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryGetValueRequest.
                     * @implements IRegistryGetValueRequest
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryGetValueRequest=} [properties] Properties to set
                     */
                    function RegistryGetValueRequest(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryGetValueRequest version.
                     * @member {google.protobuf.IUInt64Value|null|undefined} version
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @instance
                     */
                    RegistryGetValueRequest.prototype.version = null;
    
                    /**
                     * RegistryGetValueRequest key.
                     * @member {Uint8Array} key
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @instance
                     */
                    RegistryGetValueRequest.prototype.key = $util.newBuffer([]);
    
                    /**
                     * Creates a new RegistryGetValueRequest instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetValueRequest=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryGetValueRequest} RegistryGetValueRequest instance
                     */
                    RegistryGetValueRequest.create = function create(properties) {
                        return new RegistryGetValueRequest(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryGetValueRequest message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetValueRequest.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetValueRequest} message RegistryGetValueRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetValueRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            $root.google.protobuf.UInt64Value.encode(message.version, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryGetValueRequest message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetValueRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetValueRequest} message RegistryGetValueRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetValueRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryGetValueRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryGetValueRequest} RegistryGetValueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetValueRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryGetValueRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.version = $root.google.protobuf.UInt64Value.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.key = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryGetValueRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryGetValueRequest} RegistryGetValueRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetValueRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryGetValueRequest message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryGetValueRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version")) {
                            var error = $root.google.protobuf.UInt64Value.verify(message.version);
                            if (error)
                                return "version." + error;
                        }
                        if (message.key != null && message.hasOwnProperty("key"))
                            if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                                return "key: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryGetValueRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryGetValueRequest} RegistryGetValueRequest
                     */
                    RegistryGetValueRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryGetValueRequest)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryGetValueRequest();
                        if (object.version != null) {
                            if (typeof object.version !== "object")
                                throw TypeError(".ic_registry_transport.pb.v1.RegistryGetValueRequest.version: object expected");
                            message.version = $root.google.protobuf.UInt64Value.fromObject(object.version);
                        }
                        if (object.key != null)
                            if (typeof object.key === "string")
                                $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                            else if (object.key.length)
                                message.key = object.key;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryGetValueRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryGetValueRequest} message RegistryGetValueRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryGetValueRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.version = null;
                            if (options.bytes === String)
                                object.key = "";
                            else {
                                object.key = [];
                                if (options.bytes !== Array)
                                    object.key = $util.newBuffer(object.key);
                            }
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            object.version = $root.google.protobuf.UInt64Value.toObject(message.version, options);
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryGetValueRequest to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryGetValueRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryGetValueRequest;
                })();
    
                v1.RegistryGetValueResponse = (function() {
    
                    /**
                     * Properties of a RegistryGetValueResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryGetValueResponse
                     * @property {ic_registry_transport.pb.v1.IRegistryError|null} [error] RegistryGetValueResponse error
                     * @property {number|Long|null} [version] RegistryGetValueResponse version
                     * @property {Uint8Array|null} [value] RegistryGetValueResponse value
                     */
    
                    /**
                     * Constructs a new RegistryGetValueResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryGetValueResponse.
                     * @implements IRegistryGetValueResponse
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryGetValueResponse=} [properties] Properties to set
                     */
                    function RegistryGetValueResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryGetValueResponse error.
                     * @member {ic_registry_transport.pb.v1.IRegistryError|null|undefined} error
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @instance
                     */
                    RegistryGetValueResponse.prototype.error = null;
    
                    /**
                     * RegistryGetValueResponse version.
                     * @member {number|Long} version
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @instance
                     */
                    RegistryGetValueResponse.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * RegistryGetValueResponse value.
                     * @member {Uint8Array} value
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @instance
                     */
                    RegistryGetValueResponse.prototype.value = $util.newBuffer([]);
    
                    /**
                     * Creates a new RegistryGetValueResponse instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetValueResponse=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryGetValueResponse} RegistryGetValueResponse instance
                     */
                    RegistryGetValueResponse.create = function create(properties) {
                        return new RegistryGetValueResponse(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryGetValueResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetValueResponse.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetValueResponse} message RegistryGetValueResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetValueResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.error != null && Object.hasOwnProperty.call(message, "error"))
                            $root.ic_registry_transport.pb.v1.RegistryError.encode(message.error, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.version);
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.value);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryGetValueResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetValueResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetValueResponse} message RegistryGetValueResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetValueResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryGetValueResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryGetValueResponse} RegistryGetValueResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetValueResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryGetValueResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.error = $root.ic_registry_transport.pb.v1.RegistryError.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.version = reader.uint64();
                                break;
                            case 3:
                                message.value = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryGetValueResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryGetValueResponse} RegistryGetValueResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetValueResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryGetValueResponse message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryGetValueResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.error != null && message.hasOwnProperty("error")) {
                            var error = $root.ic_registry_transport.pb.v1.RegistryError.verify(message.error);
                            if (error)
                                return "error." + error;
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                                return "value: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryGetValueResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryGetValueResponse} RegistryGetValueResponse
                     */
                    RegistryGetValueResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryGetValueResponse)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryGetValueResponse();
                        if (object.error != null) {
                            if (typeof object.error !== "object")
                                throw TypeError(".ic_registry_transport.pb.v1.RegistryGetValueResponse.error: object expected");
                            message.error = $root.ic_registry_transport.pb.v1.RegistryError.fromObject(object.error);
                        }
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
                        if (object.value != null)
                            if (typeof object.value === "string")
                                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                            else if (object.value.length)
                                message.value = object.value;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryGetValueResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryGetValueResponse} message RegistryGetValueResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryGetValueResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.error = null;
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                            if (options.bytes === String)
                                object.value = "";
                            else {
                                object.value = [];
                                if (options.bytes !== Array)
                                    object.value = $util.newBuffer(object.value);
                            }
                        }
                        if (message.error != null && message.hasOwnProperty("error"))
                            object.error = $root.ic_registry_transport.pb.v1.RegistryError.toObject(message.error, options);
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryGetValueResponse to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryGetValueResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryGetValueResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryGetValueResponse;
                })();
    
                v1.RegistryGetLatestVersionResponse = (function() {
    
                    /**
                     * Properties of a RegistryGetLatestVersionResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryGetLatestVersionResponse
                     * @property {number|Long|null} [version] RegistryGetLatestVersionResponse version
                     */
    
                    /**
                     * Constructs a new RegistryGetLatestVersionResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryGetLatestVersionResponse.
                     * @implements IRegistryGetLatestVersionResponse
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryGetLatestVersionResponse=} [properties] Properties to set
                     */
                    function RegistryGetLatestVersionResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryGetLatestVersionResponse version.
                     * @member {number|Long} version
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @instance
                     */
                    RegistryGetLatestVersionResponse.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * Creates a new RegistryGetLatestVersionResponse instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetLatestVersionResponse=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse} RegistryGetLatestVersionResponse instance
                     */
                    RegistryGetLatestVersionResponse.create = function create(properties) {
                        return new RegistryGetLatestVersionResponse(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryGetLatestVersionResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetLatestVersionResponse} message RegistryGetLatestVersionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetLatestVersionResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.version);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryGetLatestVersionResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryGetLatestVersionResponse} message RegistryGetLatestVersionResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryGetLatestVersionResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryGetLatestVersionResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse} RegistryGetLatestVersionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetLatestVersionResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.version = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryGetLatestVersionResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse} RegistryGetLatestVersionResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryGetLatestVersionResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryGetLatestVersionResponse message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryGetLatestVersionResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryGetLatestVersionResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse} RegistryGetLatestVersionResponse
                     */
                    RegistryGetLatestVersionResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse();
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryGetLatestVersionResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse} message RegistryGetLatestVersionResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryGetLatestVersionResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryGetLatestVersionResponse to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryGetLatestVersionResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryGetLatestVersionResponse;
                })();
    
                v1.RegistryMutation = (function() {
    
                    /**
                     * Properties of a RegistryMutation.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryMutation
                     * @property {ic_registry_transport.pb.v1.RegistryMutation.Type|null} [mutationType] RegistryMutation mutationType
                     * @property {Uint8Array|null} [key] RegistryMutation key
                     * @property {Uint8Array|null} [value] RegistryMutation value
                     */
    
                    /**
                     * Constructs a new RegistryMutation.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryMutation.
                     * @implements IRegistryMutation
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryMutation=} [properties] Properties to set
                     */
                    function RegistryMutation(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryMutation mutationType.
                     * @member {ic_registry_transport.pb.v1.RegistryMutation.Type} mutationType
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @instance
                     */
                    RegistryMutation.prototype.mutationType = 0;
    
                    /**
                     * RegistryMutation key.
                     * @member {Uint8Array} key
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @instance
                     */
                    RegistryMutation.prototype.key = $util.newBuffer([]);
    
                    /**
                     * RegistryMutation value.
                     * @member {Uint8Array} value
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @instance
                     */
                    RegistryMutation.prototype.value = $util.newBuffer([]);
    
                    /**
                     * Creates a new RegistryMutation instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryMutation=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryMutation} RegistryMutation instance
                     */
                    RegistryMutation.create = function create(properties) {
                        return new RegistryMutation(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryMutation message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryMutation.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryMutation} message RegistryMutation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryMutation.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.mutationType != null && Object.hasOwnProperty.call(message, "mutationType"))
                            writer.uint32(/* id 1, wireType 0 =*/8).int32(message.mutationType);
                        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.key);
                        if (message.value != null && Object.hasOwnProperty.call(message, "value"))
                            writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.value);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryMutation message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryMutation.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryMutation} message RegistryMutation message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryMutation.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryMutation message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryMutation} RegistryMutation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryMutation.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryMutation();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.mutationType = reader.int32();
                                break;
                            case 2:
                                message.key = reader.bytes();
                                break;
                            case 3:
                                message.value = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryMutation message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryMutation} RegistryMutation
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryMutation.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryMutation message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryMutation.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.mutationType != null && message.hasOwnProperty("mutationType"))
                            switch (message.mutationType) {
                            default:
                                return "mutationType: enum value expected";
                            case 0:
                            case 1:
                            case 2:
                            case 4:
                                break;
                            }
                        if (message.key != null && message.hasOwnProperty("key"))
                            if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                                return "key: buffer expected";
                        if (message.value != null && message.hasOwnProperty("value"))
                            if (!(message.value && typeof message.value.length === "number" || $util.isString(message.value)))
                                return "value: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryMutation message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryMutation} RegistryMutation
                     */
                    RegistryMutation.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryMutation)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryMutation();
                        switch (object.mutationType) {
                        case "INSERT":
                        case 0:
                            message.mutationType = 0;
                            break;
                        case "UPDATE":
                        case 1:
                            message.mutationType = 1;
                            break;
                        case "DELETE":
                        case 2:
                            message.mutationType = 2;
                            break;
                        case "UPSERT":
                        case 4:
                            message.mutationType = 4;
                            break;
                        }
                        if (object.key != null)
                            if (typeof object.key === "string")
                                $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                            else if (object.key.length)
                                message.key = object.key;
                        if (object.value != null)
                            if (typeof object.value === "string")
                                $util.base64.decode(object.value, message.value = $util.newBuffer($util.base64.length(object.value)), 0);
                            else if (object.value.length)
                                message.value = object.value;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryMutation message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryMutation} message RegistryMutation
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryMutation.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.mutationType = options.enums === String ? "INSERT" : 0;
                            if (options.bytes === String)
                                object.key = "";
                            else {
                                object.key = [];
                                if (options.bytes !== Array)
                                    object.key = $util.newBuffer(object.key);
                            }
                            if (options.bytes === String)
                                object.value = "";
                            else {
                                object.value = [];
                                if (options.bytes !== Array)
                                    object.value = $util.newBuffer(object.value);
                            }
                        }
                        if (message.mutationType != null && message.hasOwnProperty("mutationType"))
                            object.mutationType = options.enums === String ? $root.ic_registry_transport.pb.v1.RegistryMutation.Type[message.mutationType] : message.mutationType;
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                        if (message.value != null && message.hasOwnProperty("value"))
                            object.value = options.bytes === String ? $util.base64.encode(message.value, 0, message.value.length) : options.bytes === Array ? Array.prototype.slice.call(message.value) : message.value;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryMutation to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryMutation
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryMutation.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    /**
                     * Type enum.
                     * @name ic_registry_transport.pb.v1.RegistryMutation.Type
                     * @enum {number}
                     * @property {number} INSERT=0 INSERT value
                     * @property {number} UPDATE=1 UPDATE value
                     * @property {number} DELETE=2 DELETE value
                     * @property {number} UPSERT=4 UPSERT value
                     */
                    RegistryMutation.Type = (function() {
                        var valuesById = {}, values = Object.create(valuesById);
                        values[valuesById[0] = "INSERT"] = 0;
                        values[valuesById[1] = "UPDATE"] = 1;
                        values[valuesById[2] = "DELETE"] = 2;
                        values[valuesById[4] = "UPSERT"] = 4;
                        return values;
                    })();
    
                    return RegistryMutation;
                })();
    
                v1.Precondition = (function() {
    
                    /**
                     * Properties of a Precondition.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IPrecondition
                     * @property {Uint8Array|null} [key] Precondition key
                     * @property {number|Long|null} [expectedVersion] Precondition expectedVersion
                     */
    
                    /**
                     * Constructs a new Precondition.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a Precondition.
                     * @implements IPrecondition
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IPrecondition=} [properties] Properties to set
                     */
                    function Precondition(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * Precondition key.
                     * @member {Uint8Array} key
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @instance
                     */
                    Precondition.prototype.key = $util.newBuffer([]);
    
                    /**
                     * Precondition expectedVersion.
                     * @member {number|Long} expectedVersion
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @instance
                     */
                    Precondition.prototype.expectedVersion = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * Creates a new Precondition instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @static
                     * @param {ic_registry_transport.pb.v1.IPrecondition=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.Precondition} Precondition instance
                     */
                    Precondition.create = function create(properties) {
                        return new Precondition(properties);
                    };
    
                    /**
                     * Encodes the specified Precondition message. Does not implicitly {@link ic_registry_transport.pb.v1.Precondition.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @static
                     * @param {ic_registry_transport.pb.v1.IPrecondition} message Precondition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Precondition.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.key != null && Object.hasOwnProperty.call(message, "key"))
                            writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.key);
                        if (message.expectedVersion != null && Object.hasOwnProperty.call(message, "expectedVersion"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.expectedVersion);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified Precondition message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.Precondition.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @static
                     * @param {ic_registry_transport.pb.v1.IPrecondition} message Precondition message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    Precondition.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a Precondition message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.Precondition} Precondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Precondition.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.Precondition();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.key = reader.bytes();
                                break;
                            case 2:
                                message.expectedVersion = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a Precondition message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.Precondition} Precondition
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    Precondition.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a Precondition message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    Precondition.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.key != null && message.hasOwnProperty("key"))
                            if (!(message.key && typeof message.key.length === "number" || $util.isString(message.key)))
                                return "key: buffer expected";
                        if (message.expectedVersion != null && message.hasOwnProperty("expectedVersion"))
                            if (!$util.isInteger(message.expectedVersion) && !(message.expectedVersion && $util.isInteger(message.expectedVersion.low) && $util.isInteger(message.expectedVersion.high)))
                                return "expectedVersion: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a Precondition message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.Precondition} Precondition
                     */
                    Precondition.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.Precondition)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.Precondition();
                        if (object.key != null)
                            if (typeof object.key === "string")
                                $util.base64.decode(object.key, message.key = $util.newBuffer($util.base64.length(object.key)), 0);
                            else if (object.key.length)
                                message.key = object.key;
                        if (object.expectedVersion != null)
                            if ($util.Long)
                                (message.expectedVersion = $util.Long.fromValue(object.expectedVersion)).unsigned = true;
                            else if (typeof object.expectedVersion === "string")
                                message.expectedVersion = parseInt(object.expectedVersion, 10);
                            else if (typeof object.expectedVersion === "number")
                                message.expectedVersion = object.expectedVersion;
                            else if (typeof object.expectedVersion === "object")
                                message.expectedVersion = new $util.LongBits(object.expectedVersion.low >>> 0, object.expectedVersion.high >>> 0).toNumber(true);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a Precondition message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @static
                     * @param {ic_registry_transport.pb.v1.Precondition} message Precondition
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    Precondition.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            if (options.bytes === String)
                                object.key = "";
                            else {
                                object.key = [];
                                if (options.bytes !== Array)
                                    object.key = $util.newBuffer(object.key);
                            }
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.expectedVersion = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.expectedVersion = options.longs === String ? "0" : 0;
                        }
                        if (message.key != null && message.hasOwnProperty("key"))
                            object.key = options.bytes === String ? $util.base64.encode(message.key, 0, message.key.length) : options.bytes === Array ? Array.prototype.slice.call(message.key) : message.key;
                        if (message.expectedVersion != null && message.hasOwnProperty("expectedVersion"))
                            if (typeof message.expectedVersion === "number")
                                object.expectedVersion = options.longs === String ? String(message.expectedVersion) : message.expectedVersion;
                            else
                                object.expectedVersion = options.longs === String ? $util.Long.prototype.toString.call(message.expectedVersion) : options.longs === Number ? new $util.LongBits(message.expectedVersion.low >>> 0, message.expectedVersion.high >>> 0).toNumber(true) : message.expectedVersion;
                        return object;
                    };
    
                    /**
                     * Converts this Precondition to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.Precondition
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    Precondition.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return Precondition;
                })();
    
                v1.RegistryAtomicMutateRequest = (function() {
    
                    /**
                     * Properties of a RegistryAtomicMutateRequest.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryAtomicMutateRequest
                     * @property {Array.<ic_registry_transport.pb.v1.IRegistryMutation>|null} [mutations] RegistryAtomicMutateRequest mutations
                     * @property {Array.<ic_registry_transport.pb.v1.IPrecondition>|null} [preconditions] RegistryAtomicMutateRequest preconditions
                     */
    
                    /**
                     * Constructs a new RegistryAtomicMutateRequest.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryAtomicMutateRequest.
                     * @implements IRegistryAtomicMutateRequest
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryAtomicMutateRequest=} [properties] Properties to set
                     */
                    function RegistryAtomicMutateRequest(properties) {
                        this.mutations = [];
                        this.preconditions = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryAtomicMutateRequest mutations.
                     * @member {Array.<ic_registry_transport.pb.v1.IRegistryMutation>} mutations
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @instance
                     */
                    RegistryAtomicMutateRequest.prototype.mutations = $util.emptyArray;
    
                    /**
                     * RegistryAtomicMutateRequest preconditions.
                     * @member {Array.<ic_registry_transport.pb.v1.IPrecondition>} preconditions
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @instance
                     */
                    RegistryAtomicMutateRequest.prototype.preconditions = $util.emptyArray;
    
                    /**
                     * Creates a new RegistryAtomicMutateRequest instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryAtomicMutateRequest=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryAtomicMutateRequest} RegistryAtomicMutateRequest instance
                     */
                    RegistryAtomicMutateRequest.create = function create(properties) {
                        return new RegistryAtomicMutateRequest(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryAtomicMutateRequest message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryAtomicMutateRequest.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryAtomicMutateRequest} message RegistryAtomicMutateRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryAtomicMutateRequest.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.mutations != null && message.mutations.length)
                            for (var i = 0; i < message.mutations.length; ++i)
                                $root.ic_registry_transport.pb.v1.RegistryMutation.encode(message.mutations[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.preconditions != null && message.preconditions.length)
                            for (var i = 0; i < message.preconditions.length; ++i)
                                $root.ic_registry_transport.pb.v1.Precondition.encode(message.preconditions[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryAtomicMutateRequest message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryAtomicMutateRequest.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryAtomicMutateRequest} message RegistryAtomicMutateRequest message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryAtomicMutateRequest.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryAtomicMutateRequest message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryAtomicMutateRequest} RegistryAtomicMutateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryAtomicMutateRequest.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryAtomicMutateRequest();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.mutations && message.mutations.length))
                                    message.mutations = [];
                                message.mutations.push($root.ic_registry_transport.pb.v1.RegistryMutation.decode(reader, reader.uint32()));
                                break;
                            case 5:
                                if (!(message.preconditions && message.preconditions.length))
                                    message.preconditions = [];
                                message.preconditions.push($root.ic_registry_transport.pb.v1.Precondition.decode(reader, reader.uint32()));
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryAtomicMutateRequest message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryAtomicMutateRequest} RegistryAtomicMutateRequest
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryAtomicMutateRequest.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryAtomicMutateRequest message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryAtomicMutateRequest.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.mutations != null && message.hasOwnProperty("mutations")) {
                            if (!Array.isArray(message.mutations))
                                return "mutations: array expected";
                            for (var i = 0; i < message.mutations.length; ++i) {
                                var error = $root.ic_registry_transport.pb.v1.RegistryMutation.verify(message.mutations[i]);
                                if (error)
                                    return "mutations." + error;
                            }
                        }
                        if (message.preconditions != null && message.hasOwnProperty("preconditions")) {
                            if (!Array.isArray(message.preconditions))
                                return "preconditions: array expected";
                            for (var i = 0; i < message.preconditions.length; ++i) {
                                var error = $root.ic_registry_transport.pb.v1.Precondition.verify(message.preconditions[i]);
                                if (error)
                                    return "preconditions." + error;
                            }
                        }
                        return null;
                    };
    
                    /**
                     * Creates a RegistryAtomicMutateRequest message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryAtomicMutateRequest} RegistryAtomicMutateRequest
                     */
                    RegistryAtomicMutateRequest.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryAtomicMutateRequest)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryAtomicMutateRequest();
                        if (object.mutations) {
                            if (!Array.isArray(object.mutations))
                                throw TypeError(".ic_registry_transport.pb.v1.RegistryAtomicMutateRequest.mutations: array expected");
                            message.mutations = [];
                            for (var i = 0; i < object.mutations.length; ++i) {
                                if (typeof object.mutations[i] !== "object")
                                    throw TypeError(".ic_registry_transport.pb.v1.RegistryAtomicMutateRequest.mutations: object expected");
                                message.mutations[i] = $root.ic_registry_transport.pb.v1.RegistryMutation.fromObject(object.mutations[i]);
                            }
                        }
                        if (object.preconditions) {
                            if (!Array.isArray(object.preconditions))
                                throw TypeError(".ic_registry_transport.pb.v1.RegistryAtomicMutateRequest.preconditions: array expected");
                            message.preconditions = [];
                            for (var i = 0; i < object.preconditions.length; ++i) {
                                if (typeof object.preconditions[i] !== "object")
                                    throw TypeError(".ic_registry_transport.pb.v1.RegistryAtomicMutateRequest.preconditions: object expected");
                                message.preconditions[i] = $root.ic_registry_transport.pb.v1.Precondition.fromObject(object.preconditions[i]);
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryAtomicMutateRequest message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryAtomicMutateRequest} message RegistryAtomicMutateRequest
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryAtomicMutateRequest.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults) {
                            object.mutations = [];
                            object.preconditions = [];
                        }
                        if (message.mutations && message.mutations.length) {
                            object.mutations = [];
                            for (var j = 0; j < message.mutations.length; ++j)
                                object.mutations[j] = $root.ic_registry_transport.pb.v1.RegistryMutation.toObject(message.mutations[j], options);
                        }
                        if (message.preconditions && message.preconditions.length) {
                            object.preconditions = [];
                            for (var j = 0; j < message.preconditions.length; ++j)
                                object.preconditions[j] = $root.ic_registry_transport.pb.v1.Precondition.toObject(message.preconditions[j], options);
                        }
                        return object;
                    };
    
                    /**
                     * Converts this RegistryAtomicMutateRequest to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateRequest
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryAtomicMutateRequest.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryAtomicMutateRequest;
                })();
    
                v1.RegistryAtomicMutateResponse = (function() {
    
                    /**
                     * Properties of a RegistryAtomicMutateResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface IRegistryAtomicMutateResponse
                     * @property {Array.<ic_registry_transport.pb.v1.IRegistryError>|null} [errors] RegistryAtomicMutateResponse errors
                     * @property {number|Long|null} [version] RegistryAtomicMutateResponse version
                     */
    
                    /**
                     * Constructs a new RegistryAtomicMutateResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a RegistryAtomicMutateResponse.
                     * @implements IRegistryAtomicMutateResponse
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.IRegistryAtomicMutateResponse=} [properties] Properties to set
                     */
                    function RegistryAtomicMutateResponse(properties) {
                        this.errors = [];
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * RegistryAtomicMutateResponse errors.
                     * @member {Array.<ic_registry_transport.pb.v1.IRegistryError>} errors
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @instance
                     */
                    RegistryAtomicMutateResponse.prototype.errors = $util.emptyArray;
    
                    /**
                     * RegistryAtomicMutateResponse version.
                     * @member {number|Long} version
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @instance
                     */
                    RegistryAtomicMutateResponse.prototype.version = $util.Long ? $util.Long.fromBits(0,0,true) : 0;
    
                    /**
                     * Creates a new RegistryAtomicMutateResponse instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryAtomicMutateResponse=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.RegistryAtomicMutateResponse} RegistryAtomicMutateResponse instance
                     */
                    RegistryAtomicMutateResponse.create = function create(properties) {
                        return new RegistryAtomicMutateResponse(properties);
                    };
    
                    /**
                     * Encodes the specified RegistryAtomicMutateResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryAtomicMutateResponse.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryAtomicMutateResponse} message RegistryAtomicMutateResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryAtomicMutateResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.errors != null && message.errors.length)
                            for (var i = 0; i < message.errors.length; ++i)
                                $root.ic_registry_transport.pb.v1.RegistryError.encode(message.errors[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.version != null && Object.hasOwnProperty.call(message, "version"))
                            writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.version);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified RegistryAtomicMutateResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryAtomicMutateResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.IRegistryAtomicMutateResponse} message RegistryAtomicMutateResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    RegistryAtomicMutateResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a RegistryAtomicMutateResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.RegistryAtomicMutateResponse} RegistryAtomicMutateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryAtomicMutateResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.RegistryAtomicMutateResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                if (!(message.errors && message.errors.length))
                                    message.errors = [];
                                message.errors.push($root.ic_registry_transport.pb.v1.RegistryError.decode(reader, reader.uint32()));
                                break;
                            case 2:
                                message.version = reader.uint64();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a RegistryAtomicMutateResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.RegistryAtomicMutateResponse} RegistryAtomicMutateResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    RegistryAtomicMutateResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a RegistryAtomicMutateResponse message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    RegistryAtomicMutateResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.errors != null && message.hasOwnProperty("errors")) {
                            if (!Array.isArray(message.errors))
                                return "errors: array expected";
                            for (var i = 0; i < message.errors.length; ++i) {
                                var error = $root.ic_registry_transport.pb.v1.RegistryError.verify(message.errors[i]);
                                if (error)
                                    return "errors." + error;
                            }
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (!$util.isInteger(message.version) && !(message.version && $util.isInteger(message.version.low) && $util.isInteger(message.version.high)))
                                return "version: integer|Long expected";
                        return null;
                    };
    
                    /**
                     * Creates a RegistryAtomicMutateResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.RegistryAtomicMutateResponse} RegistryAtomicMutateResponse
                     */
                    RegistryAtomicMutateResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.RegistryAtomicMutateResponse)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.RegistryAtomicMutateResponse();
                        if (object.errors) {
                            if (!Array.isArray(object.errors))
                                throw TypeError(".ic_registry_transport.pb.v1.RegistryAtomicMutateResponse.errors: array expected");
                            message.errors = [];
                            for (var i = 0; i < object.errors.length; ++i) {
                                if (typeof object.errors[i] !== "object")
                                    throw TypeError(".ic_registry_transport.pb.v1.RegistryAtomicMutateResponse.errors: object expected");
                                message.errors[i] = $root.ic_registry_transport.pb.v1.RegistryError.fromObject(object.errors[i]);
                            }
                        }
                        if (object.version != null)
                            if ($util.Long)
                                (message.version = $util.Long.fromValue(object.version)).unsigned = true;
                            else if (typeof object.version === "string")
                                message.version = parseInt(object.version, 10);
                            else if (typeof object.version === "number")
                                message.version = object.version;
                            else if (typeof object.version === "object")
                                message.version = new $util.LongBits(object.version.low >>> 0, object.version.high >>> 0).toNumber(true);
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a RegistryAtomicMutateResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.RegistryAtomicMutateResponse} message RegistryAtomicMutateResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    RegistryAtomicMutateResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.arrays || options.defaults)
                            object.errors = [];
                        if (options.defaults)
                            if ($util.Long) {
                                var long = new $util.Long(0, 0, true);
                                object.version = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                            } else
                                object.version = options.longs === String ? "0" : 0;
                        if (message.errors && message.errors.length) {
                            object.errors = [];
                            for (var j = 0; j < message.errors.length; ++j)
                                object.errors[j] = $root.ic_registry_transport.pb.v1.RegistryError.toObject(message.errors[j], options);
                        }
                        if (message.version != null && message.hasOwnProperty("version"))
                            if (typeof message.version === "number")
                                object.version = options.longs === String ? String(message.version) : message.version;
                            else
                                object.version = options.longs === String ? $util.Long.prototype.toString.call(message.version) : options.longs === Number ? new $util.LongBits(message.version.low >>> 0, message.version.high >>> 0).toNumber(true) : message.version;
                        return object;
                    };
    
                    /**
                     * Converts this RegistryAtomicMutateResponse to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.RegistryAtomicMutateResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    RegistryAtomicMutateResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return RegistryAtomicMutateResponse;
                })();
    
                v1.CertifiedResponse = (function() {
    
                    /**
                     * Properties of a CertifiedResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @interface ICertifiedResponse
                     * @property {messaging.xnet.v1.IMixedHashTree|null} [hashTree] CertifiedResponse hashTree
                     * @property {Uint8Array|null} [certificate] CertifiedResponse certificate
                     */
    
                    /**
                     * Constructs a new CertifiedResponse.
                     * @memberof ic_registry_transport.pb.v1
                     * @classdesc Represents a CertifiedResponse.
                     * @implements ICertifiedResponse
                     * @constructor
                     * @param {ic_registry_transport.pb.v1.ICertifiedResponse=} [properties] Properties to set
                     */
                    function CertifiedResponse(properties) {
                        if (properties)
                            for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                                if (properties[keys[i]] != null)
                                    this[keys[i]] = properties[keys[i]];
                    }
    
                    /**
                     * CertifiedResponse hashTree.
                     * @member {messaging.xnet.v1.IMixedHashTree|null|undefined} hashTree
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @instance
                     */
                    CertifiedResponse.prototype.hashTree = null;
    
                    /**
                     * CertifiedResponse certificate.
                     * @member {Uint8Array} certificate
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @instance
                     */
                    CertifiedResponse.prototype.certificate = $util.newBuffer([]);
    
                    /**
                     * Creates a new CertifiedResponse instance using the specified properties.
                     * @function create
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.ICertifiedResponse=} [properties] Properties to set
                     * @returns {ic_registry_transport.pb.v1.CertifiedResponse} CertifiedResponse instance
                     */
                    CertifiedResponse.create = function create(properties) {
                        return new CertifiedResponse(properties);
                    };
    
                    /**
                     * Encodes the specified CertifiedResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.CertifiedResponse.verify|verify} messages.
                     * @function encode
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.ICertifiedResponse} message CertifiedResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CertifiedResponse.encode = function encode(message, writer) {
                        if (!writer)
                            writer = $Writer.create();
                        if (message.hashTree != null && Object.hasOwnProperty.call(message, "hashTree"))
                            $root.messaging.xnet.v1.MixedHashTree.encode(message.hashTree, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
                        if (message.certificate != null && Object.hasOwnProperty.call(message, "certificate"))
                            writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.certificate);
                        return writer;
                    };
    
                    /**
                     * Encodes the specified CertifiedResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.CertifiedResponse.verify|verify} messages.
                     * @function encodeDelimited
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.ICertifiedResponse} message CertifiedResponse message or plain object to encode
                     * @param {$protobuf.Writer} [writer] Writer to encode to
                     * @returns {$protobuf.Writer} Writer
                     */
                    CertifiedResponse.encodeDelimited = function encodeDelimited(message, writer) {
                        return this.encode(message, writer).ldelim();
                    };
    
                    /**
                     * Decodes a CertifiedResponse message from the specified reader or buffer.
                     * @function decode
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @param {number} [length] Message length if known beforehand
                     * @returns {ic_registry_transport.pb.v1.CertifiedResponse} CertifiedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CertifiedResponse.decode = function decode(reader, length) {
                        if (!(reader instanceof $Reader))
                            reader = $Reader.create(reader);
                        var end = length === undefined ? reader.len : reader.pos + length, message = new $root.ic_registry_transport.pb.v1.CertifiedResponse();
                        while (reader.pos < end) {
                            var tag = reader.uint32();
                            switch (tag >>> 3) {
                            case 1:
                                message.hashTree = $root.messaging.xnet.v1.MixedHashTree.decode(reader, reader.uint32());
                                break;
                            case 2:
                                message.certificate = reader.bytes();
                                break;
                            default:
                                reader.skipType(tag & 7);
                                break;
                            }
                        }
                        return message;
                    };
    
                    /**
                     * Decodes a CertifiedResponse message from the specified reader or buffer, length delimited.
                     * @function decodeDelimited
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @static
                     * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
                     * @returns {ic_registry_transport.pb.v1.CertifiedResponse} CertifiedResponse
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    CertifiedResponse.decodeDelimited = function decodeDelimited(reader) {
                        if (!(reader instanceof $Reader))
                            reader = new $Reader(reader);
                        return this.decode(reader, reader.uint32());
                    };
    
                    /**
                     * Verifies a CertifiedResponse message.
                     * @function verify
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @static
                     * @param {Object.<string,*>} message Plain object to verify
                     * @returns {string|null} `null` if valid, otherwise the reason why it is not
                     */
                    CertifiedResponse.verify = function verify(message) {
                        if (typeof message !== "object" || message === null)
                            return "object expected";
                        if (message.hashTree != null && message.hasOwnProperty("hashTree")) {
                            var error = $root.messaging.xnet.v1.MixedHashTree.verify(message.hashTree);
                            if (error)
                                return "hashTree." + error;
                        }
                        if (message.certificate != null && message.hasOwnProperty("certificate"))
                            if (!(message.certificate && typeof message.certificate.length === "number" || $util.isString(message.certificate)))
                                return "certificate: buffer expected";
                        return null;
                    };
    
                    /**
                     * Creates a CertifiedResponse message from a plain object. Also converts values to their respective internal types.
                     * @function fromObject
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @static
                     * @param {Object.<string,*>} object Plain object
                     * @returns {ic_registry_transport.pb.v1.CertifiedResponse} CertifiedResponse
                     */
                    CertifiedResponse.fromObject = function fromObject(object) {
                        if (object instanceof $root.ic_registry_transport.pb.v1.CertifiedResponse)
                            return object;
                        var message = new $root.ic_registry_transport.pb.v1.CertifiedResponse();
                        if (object.hashTree != null) {
                            if (typeof object.hashTree !== "object")
                                throw TypeError(".ic_registry_transport.pb.v1.CertifiedResponse.hashTree: object expected");
                            message.hashTree = $root.messaging.xnet.v1.MixedHashTree.fromObject(object.hashTree);
                        }
                        if (object.certificate != null)
                            if (typeof object.certificate === "string")
                                $util.base64.decode(object.certificate, message.certificate = $util.newBuffer($util.base64.length(object.certificate)), 0);
                            else if (object.certificate.length)
                                message.certificate = object.certificate;
                        return message;
                    };
    
                    /**
                     * Creates a plain object from a CertifiedResponse message. Also converts values to other types if specified.
                     * @function toObject
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @static
                     * @param {ic_registry_transport.pb.v1.CertifiedResponse} message CertifiedResponse
                     * @param {$protobuf.IConversionOptions} [options] Conversion options
                     * @returns {Object.<string,*>} Plain object
                     */
                    CertifiedResponse.toObject = function toObject(message, options) {
                        if (!options)
                            options = {};
                        var object = {};
                        if (options.defaults) {
                            object.hashTree = null;
                            if (options.bytes === String)
                                object.certificate = "";
                            else {
                                object.certificate = [];
                                if (options.bytes !== Array)
                                    object.certificate = $util.newBuffer(object.certificate);
                            }
                        }
                        if (message.hashTree != null && message.hasOwnProperty("hashTree"))
                            object.hashTree = $root.messaging.xnet.v1.MixedHashTree.toObject(message.hashTree, options);
                        if (message.certificate != null && message.hasOwnProperty("certificate"))
                            object.certificate = options.bytes === String ? $util.base64.encode(message.certificate, 0, message.certificate.length) : options.bytes === Array ? Array.prototype.slice.call(message.certificate) : message.certificate;
                        return object;
                    };
    
                    /**
                     * Converts this CertifiedResponse to JSON.
                     * @function toJSON
                     * @memberof ic_registry_transport.pb.v1.CertifiedResponse
                     * @instance
                     * @returns {Object.<string,*>} JSON object
                     */
                    CertifiedResponse.prototype.toJSON = function toJSON() {
                        return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
                    };
    
                    return CertifiedResponse;
                })();
    
                return v1;
            })();
    
            return pb;
        })();
    
        return ic_registry_transport;
    })();

    return $root;
});
