
  namespace proto {
      // DO NOT EDIT! This is a generated file. Edit the JSDoc in src/*.js instead and run 'npm run types'.

/** Namespace messaging. */
export namespace messaging {

    /** Namespace xnet. */
    namespace xnet {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a MixedHashTree. */
            interface IMixedHashTree {

                /** MixedHashTree empty */
                empty?: (google.protobuf.IEmpty|null);

                /** MixedHashTree fork */
                fork?: (messaging.xnet.v1.MixedHashTree.IFork|null);

                /** MixedHashTree labeled */
                labeled?: (messaging.xnet.v1.MixedHashTree.ILabeled|null);

                /** MixedHashTree leafData */
                leafData?: (Uint8Array|null);

                /** MixedHashTree prunedDigest */
                prunedDigest?: (Uint8Array|null);
            }

            /** Represents a MixedHashTree. */
            class MixedHashTree implements IMixedHashTree {

                /**
                 * Constructs a new MixedHashTree.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: messaging.xnet.v1.IMixedHashTree);

                /** MixedHashTree empty. */
                public empty?: (google.protobuf.IEmpty|null);

                /** MixedHashTree fork. */
                public fork?: (messaging.xnet.v1.MixedHashTree.IFork|null);

                /** MixedHashTree labeled. */
                public labeled?: (messaging.xnet.v1.MixedHashTree.ILabeled|null);

                /** MixedHashTree leafData. */
                public leafData?: (Uint8Array|null);

                /** MixedHashTree prunedDigest. */
                public prunedDigest?: (Uint8Array|null);

                /** MixedHashTree treeEnum. */
                public treeEnum?: ("empty"|"fork"|"labeled"|"leafData"|"prunedDigest");

                /**
                 * Creates a new MixedHashTree instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns MixedHashTree instance
                 */
                public static create(properties?: messaging.xnet.v1.IMixedHashTree): messaging.xnet.v1.MixedHashTree;

                /**
                 * Encodes the specified MixedHashTree message. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.verify|verify} messages.
                 * @param message MixedHashTree message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: messaging.xnet.v1.IMixedHashTree, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified MixedHashTree message, length delimited. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.verify|verify} messages.
                 * @param message MixedHashTree message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: messaging.xnet.v1.IMixedHashTree, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a MixedHashTree message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns MixedHashTree
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messaging.xnet.v1.MixedHashTree;

                /**
                 * Decodes a MixedHashTree message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns MixedHashTree
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messaging.xnet.v1.MixedHashTree;

                /**
                 * Verifies a MixedHashTree message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a MixedHashTree message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns MixedHashTree
                 */
                public static fromObject(object: { [k: string]: any }): messaging.xnet.v1.MixedHashTree;

                /**
                 * Creates a plain object from a MixedHashTree message. Also converts values to other types if specified.
                 * @param message MixedHashTree
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: messaging.xnet.v1.MixedHashTree, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this MixedHashTree to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace MixedHashTree {

                /** Properties of a Fork. */
                interface IFork {

                    /** Fork leftTree */
                    leftTree?: (messaging.xnet.v1.IMixedHashTree|null);

                    /** Fork rightTree */
                    rightTree?: (messaging.xnet.v1.IMixedHashTree|null);
                }

                /** Represents a Fork. */
                class Fork implements IFork {

                    /**
                     * Constructs a new Fork.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: messaging.xnet.v1.MixedHashTree.IFork);

                    /** Fork leftTree. */
                    public leftTree?: (messaging.xnet.v1.IMixedHashTree|null);

                    /** Fork rightTree. */
                    public rightTree?: (messaging.xnet.v1.IMixedHashTree|null);

                    /**
                     * Creates a new Fork instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Fork instance
                     */
                    public static create(properties?: messaging.xnet.v1.MixedHashTree.IFork): messaging.xnet.v1.MixedHashTree.Fork;

                    /**
                     * Encodes the specified Fork message. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.Fork.verify|verify} messages.
                     * @param message Fork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: messaging.xnet.v1.MixedHashTree.IFork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Fork message, length delimited. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.Fork.verify|verify} messages.
                     * @param message Fork message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: messaging.xnet.v1.MixedHashTree.IFork, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Fork message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Fork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messaging.xnet.v1.MixedHashTree.Fork;

                    /**
                     * Decodes a Fork message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Fork
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messaging.xnet.v1.MixedHashTree.Fork;

                    /**
                     * Verifies a Fork message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Fork message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Fork
                     */
                    public static fromObject(object: { [k: string]: any }): messaging.xnet.v1.MixedHashTree.Fork;

                    /**
                     * Creates a plain object from a Fork message. Also converts values to other types if specified.
                     * @param message Fork
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: messaging.xnet.v1.MixedHashTree.Fork, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Fork to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }

                /** Properties of a Labeled. */
                interface ILabeled {

                    /** Labeled label */
                    label?: (Uint8Array|null);

                    /** Labeled subtree */
                    subtree?: (messaging.xnet.v1.IMixedHashTree|null);
                }

                /** Represents a Labeled. */
                class Labeled implements ILabeled {

                    /**
                     * Constructs a new Labeled.
                     * @param [properties] Properties to set
                     */
                    constructor(properties?: messaging.xnet.v1.MixedHashTree.ILabeled);

                    /** Labeled label. */
                    public label: Uint8Array;

                    /** Labeled subtree. */
                    public subtree?: (messaging.xnet.v1.IMixedHashTree|null);

                    /**
                     * Creates a new Labeled instance using the specified properties.
                     * @param [properties] Properties to set
                     * @returns Labeled instance
                     */
                    public static create(properties?: messaging.xnet.v1.MixedHashTree.ILabeled): messaging.xnet.v1.MixedHashTree.Labeled;

                    /**
                     * Encodes the specified Labeled message. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.Labeled.verify|verify} messages.
                     * @param message Labeled message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encode(message: messaging.xnet.v1.MixedHashTree.ILabeled, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Encodes the specified Labeled message, length delimited. Does not implicitly {@link messaging.xnet.v1.MixedHashTree.Labeled.verify|verify} messages.
                     * @param message Labeled message or plain object to encode
                     * @param [writer] Writer to encode to
                     * @returns Writer
                     */
                    public static encodeDelimited(message: messaging.xnet.v1.MixedHashTree.ILabeled, writer?: $protobuf.Writer): $protobuf.Writer;

                    /**
                     * Decodes a Labeled message from the specified reader or buffer.
                     * @param reader Reader or buffer to decode from
                     * @param [length] Message length if known beforehand
                     * @returns Labeled
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messaging.xnet.v1.MixedHashTree.Labeled;

                    /**
                     * Decodes a Labeled message from the specified reader or buffer, length delimited.
                     * @param reader Reader or buffer to decode from
                     * @returns Labeled
                     * @throws {Error} If the payload is not a reader or valid buffer
                     * @throws {$protobuf.util.ProtocolError} If required fields are missing
                     */
                    public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messaging.xnet.v1.MixedHashTree.Labeled;

                    /**
                     * Verifies a Labeled message.
                     * @param message Plain object to verify
                     * @returns `null` if valid, otherwise the reason why it is not
                     */
                    public static verify(message: { [k: string]: any }): (string|null);

                    /**
                     * Creates a Labeled message from a plain object. Also converts values to their respective internal types.
                     * @param object Plain object
                     * @returns Labeled
                     */
                    public static fromObject(object: { [k: string]: any }): messaging.xnet.v1.MixedHashTree.Labeled;

                    /**
                     * Creates a plain object from a Labeled message. Also converts values to other types if specified.
                     * @param message Labeled
                     * @param [options] Conversion options
                     * @returns Plain object
                     */
                    public static toObject(message: messaging.xnet.v1.MixedHashTree.Labeled, options?: $protobuf.IConversionOptions): { [k: string]: any };

                    /**
                     * Converts this Labeled to JSON.
                     * @returns JSON object
                     */
                    public toJSON(): { [k: string]: any };
                }
            }
        }
    }
}

/** Namespace registry. */
export namespace registry {

    /** Namespace node. */
    namespace node {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a ConnectionEndpoint. */
            interface IConnectionEndpoint {

                /** ConnectionEndpoint ipAddr */
                ipAddr?: (string|null);

                /** ConnectionEndpoint port */
                port?: (number|null);

                /** ConnectionEndpoint protocol */
                protocol?: (registry.node.v1.ConnectionEndpoint.Protocol|null);
            }

            /** Represents a ConnectionEndpoint. */
            class ConnectionEndpoint implements IConnectionEndpoint {

                /**
                 * Constructs a new ConnectionEndpoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.node.v1.IConnectionEndpoint);

                /** ConnectionEndpoint ipAddr. */
                public ipAddr: string;

                /** ConnectionEndpoint port. */
                public port: number;

                /** ConnectionEndpoint protocol. */
                public protocol: registry.node.v1.ConnectionEndpoint.Protocol;

                /**
                 * Creates a new ConnectionEndpoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns ConnectionEndpoint instance
                 */
                public static create(properties?: registry.node.v1.IConnectionEndpoint): registry.node.v1.ConnectionEndpoint;

                /**
                 * Encodes the specified ConnectionEndpoint message. Does not implicitly {@link registry.node.v1.ConnectionEndpoint.verify|verify} messages.
                 * @param message ConnectionEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.node.v1.IConnectionEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified ConnectionEndpoint message, length delimited. Does not implicitly {@link registry.node.v1.ConnectionEndpoint.verify|verify} messages.
                 * @param message ConnectionEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.node.v1.IConnectionEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a ConnectionEndpoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns ConnectionEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.node.v1.ConnectionEndpoint;

                /**
                 * Decodes a ConnectionEndpoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns ConnectionEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.node.v1.ConnectionEndpoint;

                /**
                 * Verifies a ConnectionEndpoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a ConnectionEndpoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns ConnectionEndpoint
                 */
                public static fromObject(object: { [k: string]: any }): registry.node.v1.ConnectionEndpoint;

                /**
                 * Creates a plain object from a ConnectionEndpoint message. Also converts values to other types if specified.
                 * @param message ConnectionEndpoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.node.v1.ConnectionEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this ConnectionEndpoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace ConnectionEndpoint {

                /** Protocol enum. */
                enum Protocol {
                    PROTOCOL_UNSPECIFIED = 0,
                    PROTOCOL_HTTP1 = 1,
                    PROTOCOL_HTTP1_TLS_1_3 = 2,
                    PROTOCOL_P2P1_TLS_1_3 = 3
                }
            }

            /** Properties of a FlowEndpoint. */
            interface IFlowEndpoint {

                /** FlowEndpoint flowTag */
                flowTag?: (number|null);

                /** FlowEndpoint endpoint */
                endpoint?: (registry.node.v1.IConnectionEndpoint|null);
            }

            /** Represents a FlowEndpoint. */
            class FlowEndpoint implements IFlowEndpoint {

                /**
                 * Constructs a new FlowEndpoint.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.node.v1.IFlowEndpoint);

                /** FlowEndpoint flowTag. */
                public flowTag: number;

                /** FlowEndpoint endpoint. */
                public endpoint?: (registry.node.v1.IConnectionEndpoint|null);

                /**
                 * Creates a new FlowEndpoint instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns FlowEndpoint instance
                 */
                public static create(properties?: registry.node.v1.IFlowEndpoint): registry.node.v1.FlowEndpoint;

                /**
                 * Encodes the specified FlowEndpoint message. Does not implicitly {@link registry.node.v1.FlowEndpoint.verify|verify} messages.
                 * @param message FlowEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.node.v1.IFlowEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified FlowEndpoint message, length delimited. Does not implicitly {@link registry.node.v1.FlowEndpoint.verify|verify} messages.
                 * @param message FlowEndpoint message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.node.v1.IFlowEndpoint, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a FlowEndpoint message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns FlowEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.node.v1.FlowEndpoint;

                /**
                 * Decodes a FlowEndpoint message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns FlowEndpoint
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.node.v1.FlowEndpoint;

                /**
                 * Verifies a FlowEndpoint message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a FlowEndpoint message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns FlowEndpoint
                 */
                public static fromObject(object: { [k: string]: any }): registry.node.v1.FlowEndpoint;

                /**
                 * Creates a plain object from a FlowEndpoint message. Also converts values to other types if specified.
                 * @param message FlowEndpoint
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.node.v1.FlowEndpoint, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this FlowEndpoint to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a NodeRecord. */
            interface INodeRecord {

                /** NodeRecord xnet */
                xnet?: (registry.node.v1.IConnectionEndpoint|null);

                /** NodeRecord http */
                http?: (registry.node.v1.IConnectionEndpoint|null);

                /** NodeRecord p2pFlowEndpoints */
                p2pFlowEndpoints?: (registry.node.v1.IFlowEndpoint[]|null);

                /** NodeRecord prometheusMetricsHttp */
                prometheusMetricsHttp?: (registry.node.v1.IConnectionEndpoint|null);

                /** NodeRecord publicApi */
                publicApi?: (registry.node.v1.IConnectionEndpoint[]|null);

                /** NodeRecord privateApi */
                privateApi?: (registry.node.v1.IConnectionEndpoint[]|null);

                /** NodeRecord prometheusMetrics */
                prometheusMetrics?: (registry.node.v1.IConnectionEndpoint[]|null);

                /** NodeRecord xnetApi */
                xnetApi?: (registry.node.v1.IConnectionEndpoint[]|null);

                /** NodeRecord nodeOperatorId */
                nodeOperatorId?: (Uint8Array|null);
            }

            /** Represents a NodeRecord. */
            class NodeRecord implements INodeRecord {

                /**
                 * Constructs a new NodeRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.node.v1.INodeRecord);

                /** NodeRecord xnet. */
                public xnet?: (registry.node.v1.IConnectionEndpoint|null);

                /** NodeRecord http. */
                public http?: (registry.node.v1.IConnectionEndpoint|null);

                /** NodeRecord p2pFlowEndpoints. */
                public p2pFlowEndpoints: registry.node.v1.IFlowEndpoint[];

                /** NodeRecord prometheusMetricsHttp. */
                public prometheusMetricsHttp?: (registry.node.v1.IConnectionEndpoint|null);

                /** NodeRecord publicApi. */
                public publicApi: registry.node.v1.IConnectionEndpoint[];

                /** NodeRecord privateApi. */
                public privateApi: registry.node.v1.IConnectionEndpoint[];

                /** NodeRecord prometheusMetrics. */
                public prometheusMetrics: registry.node.v1.IConnectionEndpoint[];

                /** NodeRecord xnetApi. */
                public xnetApi: registry.node.v1.IConnectionEndpoint[];

                /** NodeRecord nodeOperatorId. */
                public nodeOperatorId: Uint8Array;

                /**
                 * Creates a new NodeRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NodeRecord instance
                 */
                public static create(properties?: registry.node.v1.INodeRecord): registry.node.v1.NodeRecord;

                /**
                 * Encodes the specified NodeRecord message. Does not implicitly {@link registry.node.v1.NodeRecord.verify|verify} messages.
                 * @param message NodeRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.node.v1.INodeRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NodeRecord message, length delimited. Does not implicitly {@link registry.node.v1.NodeRecord.verify|verify} messages.
                 * @param message NodeRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.node.v1.INodeRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NodeRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NodeRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.node.v1.NodeRecord;

                /**
                 * Decodes a NodeRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NodeRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.node.v1.NodeRecord;

                /**
                 * Verifies a NodeRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NodeRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NodeRecord
                 */
                public static fromObject(object: { [k: string]: any }): registry.node.v1.NodeRecord;

                /**
                 * Creates a plain object from a NodeRecord message. Also converts values to other types if specified.
                 * @param message NodeRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.node.v1.NodeRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NodeRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace node_operator. */
    namespace node_operator {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a NodeOperatorRecord. */
            interface INodeOperatorRecord {

                /** NodeOperatorRecord nodeOperatorPrincipalId */
                nodeOperatorPrincipalId?: (Uint8Array|null);

                /** NodeOperatorRecord nodeAllowance */
                nodeAllowance?: (number|Long|null);

                /** NodeOperatorRecord nodeProviderPrincipalId */
                nodeProviderPrincipalId?: (Uint8Array|null);

                /** NodeOperatorRecord dcId */
                dcId?: (string|null);

                /** NodeOperatorRecord rewardableNodes */
                rewardableNodes?: ({ [k: string]: number }|null);
            }

            /** Represents a NodeOperatorRecord. */
            class NodeOperatorRecord implements INodeOperatorRecord {

                /**
                 * Constructs a new NodeOperatorRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.node_operator.v1.INodeOperatorRecord);

                /** NodeOperatorRecord nodeOperatorPrincipalId. */
                public nodeOperatorPrincipalId: Uint8Array;

                /** NodeOperatorRecord nodeAllowance. */
                public nodeAllowance: (number|Long);

                /** NodeOperatorRecord nodeProviderPrincipalId. */
                public nodeProviderPrincipalId: Uint8Array;

                /** NodeOperatorRecord dcId. */
                public dcId: string;

                /** NodeOperatorRecord rewardableNodes. */
                public rewardableNodes: { [k: string]: number };

                /**
                 * Creates a new NodeOperatorRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns NodeOperatorRecord instance
                 */
                public static create(properties?: registry.node_operator.v1.INodeOperatorRecord): registry.node_operator.v1.NodeOperatorRecord;

                /**
                 * Encodes the specified NodeOperatorRecord message. Does not implicitly {@link registry.node_operator.v1.NodeOperatorRecord.verify|verify} messages.
                 * @param message NodeOperatorRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.node_operator.v1.INodeOperatorRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified NodeOperatorRecord message, length delimited. Does not implicitly {@link registry.node_operator.v1.NodeOperatorRecord.verify|verify} messages.
                 * @param message NodeOperatorRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.node_operator.v1.INodeOperatorRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a NodeOperatorRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns NodeOperatorRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.node_operator.v1.NodeOperatorRecord;

                /**
                 * Decodes a NodeOperatorRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns NodeOperatorRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.node_operator.v1.NodeOperatorRecord;

                /**
                 * Verifies a NodeOperatorRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a NodeOperatorRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns NodeOperatorRecord
                 */
                public static fromObject(object: { [k: string]: any }): registry.node_operator.v1.NodeOperatorRecord;

                /**
                 * Creates a plain object from a NodeOperatorRecord message. Also converts values to other types if specified.
                 * @param message NodeOperatorRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.node_operator.v1.NodeOperatorRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this NodeOperatorRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RemoveNodeOperatorsPayload. */
            interface IRemoveNodeOperatorsPayload {

                /** RemoveNodeOperatorsPayload nodeOperatorsToRemove */
                nodeOperatorsToRemove?: (Uint8Array[]|null);
            }

            /** The payload of a request to remove Node Operator records from the Registry */
            class RemoveNodeOperatorsPayload implements IRemoveNodeOperatorsPayload {

                /**
                 * Constructs a new RemoveNodeOperatorsPayload.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.node_operator.v1.IRemoveNodeOperatorsPayload);

                /** RemoveNodeOperatorsPayload nodeOperatorsToRemove. */
                public nodeOperatorsToRemove: Uint8Array[];

                /**
                 * Creates a new RemoveNodeOperatorsPayload instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RemoveNodeOperatorsPayload instance
                 */
                public static create(properties?: registry.node_operator.v1.IRemoveNodeOperatorsPayload): registry.node_operator.v1.RemoveNodeOperatorsPayload;

                /**
                 * Encodes the specified RemoveNodeOperatorsPayload message. Does not implicitly {@link registry.node_operator.v1.RemoveNodeOperatorsPayload.verify|verify} messages.
                 * @param message RemoveNodeOperatorsPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.node_operator.v1.IRemoveNodeOperatorsPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RemoveNodeOperatorsPayload message, length delimited. Does not implicitly {@link registry.node_operator.v1.RemoveNodeOperatorsPayload.verify|verify} messages.
                 * @param message RemoveNodeOperatorsPayload message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.node_operator.v1.IRemoveNodeOperatorsPayload, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RemoveNodeOperatorsPayload message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RemoveNodeOperatorsPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.node_operator.v1.RemoveNodeOperatorsPayload;

                /**
                 * Decodes a RemoveNodeOperatorsPayload message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RemoveNodeOperatorsPayload
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.node_operator.v1.RemoveNodeOperatorsPayload;

                /**
                 * Verifies a RemoveNodeOperatorsPayload message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RemoveNodeOperatorsPayload message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RemoveNodeOperatorsPayload
                 */
                public static fromObject(object: { [k: string]: any }): registry.node_operator.v1.RemoveNodeOperatorsPayload;

                /**
                 * Creates a plain object from a RemoveNodeOperatorsPayload message. Also converts values to other types if specified.
                 * @param message RemoveNodeOperatorsPayload
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.node_operator.v1.RemoveNodeOperatorsPayload, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RemoveNodeOperatorsPayload to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }

    /** Namespace subnet. */
    namespace subnet {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a SubnetRecord. */
            interface ISubnetRecord {

                /** SubnetRecord membership */
                membership?: (Uint8Array[]|null);

                /** SubnetRecord maxIngressBytesPerMessage */
                maxIngressBytesPerMessage?: (number|Long|null);

                /** SubnetRecord unitDelayMillis */
                unitDelayMillis?: (number|Long|null);

                /** SubnetRecord initialNotaryDelayMillis */
                initialNotaryDelayMillis?: (number|Long|null);

                /** SubnetRecord replicaVersionId */
                replicaVersionId?: (string|null);

                /** SubnetRecord dkgIntervalLength */
                dkgIntervalLength?: (number|Long|null);

                /** SubnetRecord gossipConfig */
                gossipConfig?: (registry.subnet.v1.IGossipConfig|null);

                /** SubnetRecord startAsNns */
                startAsNns?: (boolean|null);

                /** SubnetRecord subnetType */
                subnetType?: (registry.subnet.v1.SubnetType|null);

                /** SubnetRecord dkgDealingsPerBlock */
                dkgDealingsPerBlock?: (number|Long|null);

                /** SubnetRecord isHalted */
                isHalted?: (boolean|null);

                /** SubnetRecord maxIngressMessagesPerBlock */
                maxIngressMessagesPerBlock?: (number|Long|null);

                /** SubnetRecord maxBlockPayloadSize */
                maxBlockPayloadSize?: (number|Long|null);

                /** SubnetRecord maxInstructionsPerMessage */
                maxInstructionsPerMessage?: (number|Long|null);

                /** SubnetRecord maxInstructionsPerRound */
                maxInstructionsPerRound?: (number|Long|null);

                /** SubnetRecord maxInstructionsPerInstallCode */
                maxInstructionsPerInstallCode?: (number|Long|null);

                /** SubnetRecord features */
                features?: (registry.subnet.v1.ISubnetFeatures|null);

                /** SubnetRecord maxNumberOfCanisters */
                maxNumberOfCanisters?: (number|Long|null);

                /** SubnetRecord sshReadonlyAccess */
                sshReadonlyAccess?: (string[]|null);

                /** SubnetRecord sshBackupAccess */
                sshBackupAccess?: (string[]|null);

                /** SubnetRecord ecdsaConfig */
                ecdsaConfig?: (registry.subnet.v1.IEcdsaConfig|null);
            }

            /** Represents a SubnetRecord. */
            class SubnetRecord implements ISubnetRecord {

                /**
                 * Constructs a new SubnetRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.ISubnetRecord);

                /** SubnetRecord membership. */
                public membership: Uint8Array[];

                /** SubnetRecord maxIngressBytesPerMessage. */
                public maxIngressBytesPerMessage: (number|Long);

                /** SubnetRecord unitDelayMillis. */
                public unitDelayMillis: (number|Long);

                /** SubnetRecord initialNotaryDelayMillis. */
                public initialNotaryDelayMillis: (number|Long);

                /** SubnetRecord replicaVersionId. */
                public replicaVersionId: string;

                /** SubnetRecord dkgIntervalLength. */
                public dkgIntervalLength: (number|Long);

                /** SubnetRecord gossipConfig. */
                public gossipConfig?: (registry.subnet.v1.IGossipConfig|null);

                /** SubnetRecord startAsNns. */
                public startAsNns: boolean;

                /** SubnetRecord subnetType. */
                public subnetType: registry.subnet.v1.SubnetType;

                /** SubnetRecord dkgDealingsPerBlock. */
                public dkgDealingsPerBlock: (number|Long);

                /** SubnetRecord isHalted. */
                public isHalted: boolean;

                /** SubnetRecord maxIngressMessagesPerBlock. */
                public maxIngressMessagesPerBlock: (number|Long);

                /** SubnetRecord maxBlockPayloadSize. */
                public maxBlockPayloadSize: (number|Long);

                /** SubnetRecord maxInstructionsPerMessage. */
                public maxInstructionsPerMessage: (number|Long);

                /** SubnetRecord maxInstructionsPerRound. */
                public maxInstructionsPerRound: (number|Long);

                /** SubnetRecord maxInstructionsPerInstallCode. */
                public maxInstructionsPerInstallCode: (number|Long);

                /** SubnetRecord features. */
                public features?: (registry.subnet.v1.ISubnetFeatures|null);

                /** SubnetRecord maxNumberOfCanisters. */
                public maxNumberOfCanisters: (number|Long);

                /** SubnetRecord sshReadonlyAccess. */
                public sshReadonlyAccess: string[];

                /** SubnetRecord sshBackupAccess. */
                public sshBackupAccess: string[];

                /** SubnetRecord ecdsaConfig. */
                public ecdsaConfig?: (registry.subnet.v1.IEcdsaConfig|null);

                /**
                 * Creates a new SubnetRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubnetRecord instance
                 */
                public static create(properties?: registry.subnet.v1.ISubnetRecord): registry.subnet.v1.SubnetRecord;

                /**
                 * Encodes the specified SubnetRecord message. Does not implicitly {@link registry.subnet.v1.SubnetRecord.verify|verify} messages.
                 * @param message SubnetRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.ISubnetRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubnetRecord message, length delimited. Does not implicitly {@link registry.subnet.v1.SubnetRecord.verify|verify} messages.
                 * @param message SubnetRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.ISubnetRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubnetRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SubnetRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.SubnetRecord;

                /**
                 * Decodes a SubnetRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SubnetRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.SubnetRecord;

                /**
                 * Verifies a SubnetRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubnetRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubnetRecord
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.SubnetRecord;

                /**
                 * Creates a plain object from a SubnetRecord message. Also converts values to other types if specified.
                 * @param message SubnetRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.SubnetRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubnetRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CatchUpPackageContents. */
            interface ICatchUpPackageContents {

                /** CatchUpPackageContents initialNiDkgTranscriptLowThreshold */
                initialNiDkgTranscriptLowThreshold?: (registry.subnet.v1.IInitialNiDkgTranscriptRecord|null);

                /** CatchUpPackageContents initialNiDkgTranscriptHighThreshold */
                initialNiDkgTranscriptHighThreshold?: (registry.subnet.v1.IInitialNiDkgTranscriptRecord|null);

                /** CatchUpPackageContents height */
                height?: (number|Long|null);

                /** CatchUpPackageContents time */
                time?: (number|Long|null);

                /** CatchUpPackageContents stateHash */
                stateHash?: (Uint8Array|null);

                /** CatchUpPackageContents registryStoreUri */
                registryStoreUri?: (registry.subnet.v1.IRegistryStoreUri|null);
            }

            /** Represents a CatchUpPackageContents. */
            class CatchUpPackageContents implements ICatchUpPackageContents {

                /**
                 * Constructs a new CatchUpPackageContents.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.ICatchUpPackageContents);

                /** CatchUpPackageContents initialNiDkgTranscriptLowThreshold. */
                public initialNiDkgTranscriptLowThreshold?: (registry.subnet.v1.IInitialNiDkgTranscriptRecord|null);

                /** CatchUpPackageContents initialNiDkgTranscriptHighThreshold. */
                public initialNiDkgTranscriptHighThreshold?: (registry.subnet.v1.IInitialNiDkgTranscriptRecord|null);

                /** CatchUpPackageContents height. */
                public height: (number|Long);

                /** CatchUpPackageContents time. */
                public time: (number|Long);

                /** CatchUpPackageContents stateHash. */
                public stateHash: Uint8Array;

                /** CatchUpPackageContents registryStoreUri. */
                public registryStoreUri?: (registry.subnet.v1.IRegistryStoreUri|null);

                /**
                 * Creates a new CatchUpPackageContents instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CatchUpPackageContents instance
                 */
                public static create(properties?: registry.subnet.v1.ICatchUpPackageContents): registry.subnet.v1.CatchUpPackageContents;

                /**
                 * Encodes the specified CatchUpPackageContents message. Does not implicitly {@link registry.subnet.v1.CatchUpPackageContents.verify|verify} messages.
                 * @param message CatchUpPackageContents message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.ICatchUpPackageContents, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CatchUpPackageContents message, length delimited. Does not implicitly {@link registry.subnet.v1.CatchUpPackageContents.verify|verify} messages.
                 * @param message CatchUpPackageContents message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.ICatchUpPackageContents, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CatchUpPackageContents message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CatchUpPackageContents
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.CatchUpPackageContents;

                /**
                 * Decodes a CatchUpPackageContents message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CatchUpPackageContents
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.CatchUpPackageContents;

                /**
                 * Verifies a CatchUpPackageContents message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CatchUpPackageContents message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CatchUpPackageContents
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.CatchUpPackageContents;

                /**
                 * Creates a plain object from a CatchUpPackageContents message. Also converts values to other types if specified.
                 * @param message CatchUpPackageContents
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.CatchUpPackageContents, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CatchUpPackageContents to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryStoreUri. */
            interface IRegistryStoreUri {

                /** must be provided as gzipped tar archive */
                uri?: (string|null);

                /** provided URI */
                hash?: (string|null);

                /** The registry version that should be used for the catch up package contents */
                registryVersion?: (number|Long|null);
            }

            /** Represents a RegistryStoreUri. */
            class RegistryStoreUri implements IRegistryStoreUri {

                /**
                 * Constructs a new RegistryStoreUri.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.IRegistryStoreUri);

                /** must be provided as gzipped tar archive */
                public uri: string;

                /** provided URI */
                public hash: string;

                /** The registry version that should be used for the catch up package contents */
                public registryVersion: (number|Long);

                /**
                 * Creates a new RegistryStoreUri instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryStoreUri instance
                 */
                public static create(properties?: registry.subnet.v1.IRegistryStoreUri): registry.subnet.v1.RegistryStoreUri;

                /**
                 * Encodes the specified RegistryStoreUri message. Does not implicitly {@link registry.subnet.v1.RegistryStoreUri.verify|verify} messages.
                 * @param message RegistryStoreUri message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.IRegistryStoreUri, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryStoreUri message, length delimited. Does not implicitly {@link registry.subnet.v1.RegistryStoreUri.verify|verify} messages.
                 * @param message RegistryStoreUri message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.IRegistryStoreUri, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryStoreUri message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryStoreUri
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.RegistryStoreUri;

                /**
                 * Decodes a RegistryStoreUri message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryStoreUri
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.RegistryStoreUri;

                /**
                 * Verifies a RegistryStoreUri message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryStoreUri message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryStoreUri
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.RegistryStoreUri;

                /**
                 * Creates a plain object from a RegistryStoreUri message. Also converts values to other types if specified.
                 * @param message RegistryStoreUri
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.RegistryStoreUri, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryStoreUri to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a SubnetListRecord. */
            interface ISubnetListRecord {

                /** SubnetListRecord subnets */
                subnets?: (Uint8Array[]|null);
            }

            /** Represents a SubnetListRecord. */
            class SubnetListRecord implements ISubnetListRecord {

                /**
                 * Constructs a new SubnetListRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.ISubnetListRecord);

                /** SubnetListRecord subnets. */
                public subnets: Uint8Array[];

                /**
                 * Creates a new SubnetListRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubnetListRecord instance
                 */
                public static create(properties?: registry.subnet.v1.ISubnetListRecord): registry.subnet.v1.SubnetListRecord;

                /**
                 * Encodes the specified SubnetListRecord message. Does not implicitly {@link registry.subnet.v1.SubnetListRecord.verify|verify} messages.
                 * @param message SubnetListRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.ISubnetListRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubnetListRecord message, length delimited. Does not implicitly {@link registry.subnet.v1.SubnetListRecord.verify|verify} messages.
                 * @param message SubnetListRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.ISubnetListRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubnetListRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SubnetListRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.SubnetListRecord;

                /**
                 * Decodes a SubnetListRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SubnetListRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.SubnetListRecord;

                /**
                 * Verifies a SubnetListRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubnetListRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubnetListRecord
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.SubnetListRecord;

                /**
                 * Creates a plain object from a SubnetListRecord message. Also converts values to other types if specified.
                 * @param message SubnetListRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.SubnetListRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubnetListRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an InitialNiDkgTranscriptRecord. */
            interface IInitialNiDkgTranscriptRecord {

                /** InitialNiDkgTranscriptRecord id */
                id?: (types.v1.INiDkgId|null);

                /** InitialNiDkgTranscriptRecord threshold */
                threshold?: (number|null);

                /** InitialNiDkgTranscriptRecord committee */
                committee?: (Uint8Array[]|null);

                /** InitialNiDkgTranscriptRecord registryVersion */
                registryVersion?: (number|Long|null);

                /** InitialNiDkgTranscriptRecord internalCspTranscript */
                internalCspTranscript?: (Uint8Array|null);
            }

            /** Represents an InitialNiDkgTranscriptRecord. */
            class InitialNiDkgTranscriptRecord implements IInitialNiDkgTranscriptRecord {

                /**
                 * Constructs a new InitialNiDkgTranscriptRecord.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.IInitialNiDkgTranscriptRecord);

                /** InitialNiDkgTranscriptRecord id. */
                public id?: (types.v1.INiDkgId|null);

                /** InitialNiDkgTranscriptRecord threshold. */
                public threshold: number;

                /** InitialNiDkgTranscriptRecord committee. */
                public committee: Uint8Array[];

                /** InitialNiDkgTranscriptRecord registryVersion. */
                public registryVersion: (number|Long);

                /** InitialNiDkgTranscriptRecord internalCspTranscript. */
                public internalCspTranscript: Uint8Array;

                /**
                 * Creates a new InitialNiDkgTranscriptRecord instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns InitialNiDkgTranscriptRecord instance
                 */
                public static create(properties?: registry.subnet.v1.IInitialNiDkgTranscriptRecord): registry.subnet.v1.InitialNiDkgTranscriptRecord;

                /**
                 * Encodes the specified InitialNiDkgTranscriptRecord message. Does not implicitly {@link registry.subnet.v1.InitialNiDkgTranscriptRecord.verify|verify} messages.
                 * @param message InitialNiDkgTranscriptRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.IInitialNiDkgTranscriptRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified InitialNiDkgTranscriptRecord message, length delimited. Does not implicitly {@link registry.subnet.v1.InitialNiDkgTranscriptRecord.verify|verify} messages.
                 * @param message InitialNiDkgTranscriptRecord message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.IInitialNiDkgTranscriptRecord, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an InitialNiDkgTranscriptRecord message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns InitialNiDkgTranscriptRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.InitialNiDkgTranscriptRecord;

                /**
                 * Decodes an InitialNiDkgTranscriptRecord message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns InitialNiDkgTranscriptRecord
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.InitialNiDkgTranscriptRecord;

                /**
                 * Verifies an InitialNiDkgTranscriptRecord message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an InitialNiDkgTranscriptRecord message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns InitialNiDkgTranscriptRecord
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.InitialNiDkgTranscriptRecord;

                /**
                 * Creates a plain object from an InitialNiDkgTranscriptRecord message. Also converts values to other types if specified.
                 * @param message InitialNiDkgTranscriptRecord
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.InitialNiDkgTranscriptRecord, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this InitialNiDkgTranscriptRecord to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GossipConfig. */
            interface IGossipConfig {

                /** GossipConfig maxArtifactStreamsPerPeer */
                maxArtifactStreamsPerPeer?: (number|null);

                /** GossipConfig maxChunkWaitMs */
                maxChunkWaitMs?: (number|null);

                /** GossipConfig maxDuplicity */
                maxDuplicity?: (number|null);

                /** GossipConfig maxChunkSize */
                maxChunkSize?: (number|null);

                /** GossipConfig receiveCheckCacheSize */
                receiveCheckCacheSize?: (number|null);

                /** GossipConfig pfnEvaluationPeriodMs */
                pfnEvaluationPeriodMs?: (number|null);

                /** GossipConfig registryPollPeriodMs */
                registryPollPeriodMs?: (number|null);

                /** GossipConfig retransmissionRequestMs */
                retransmissionRequestMs?: (number|null);

                /** GossipConfig advertConfig */
                advertConfig?: (registry.subnet.v1.IGossipAdvertConfig|null);
            }

            /** Represents a GossipConfig. */
            class GossipConfig implements IGossipConfig {

                /**
                 * Constructs a new GossipConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.IGossipConfig);

                /** GossipConfig maxArtifactStreamsPerPeer. */
                public maxArtifactStreamsPerPeer: number;

                /** GossipConfig maxChunkWaitMs. */
                public maxChunkWaitMs: number;

                /** GossipConfig maxDuplicity. */
                public maxDuplicity: number;

                /** GossipConfig maxChunkSize. */
                public maxChunkSize: number;

                /** GossipConfig receiveCheckCacheSize. */
                public receiveCheckCacheSize: number;

                /** GossipConfig pfnEvaluationPeriodMs. */
                public pfnEvaluationPeriodMs: number;

                /** GossipConfig registryPollPeriodMs. */
                public registryPollPeriodMs: number;

                /** GossipConfig retransmissionRequestMs. */
                public retransmissionRequestMs: number;

                /** GossipConfig advertConfig. */
                public advertConfig?: (registry.subnet.v1.IGossipAdvertConfig|null);

                /**
                 * Creates a new GossipConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GossipConfig instance
                 */
                public static create(properties?: registry.subnet.v1.IGossipConfig): registry.subnet.v1.GossipConfig;

                /**
                 * Encodes the specified GossipConfig message. Does not implicitly {@link registry.subnet.v1.GossipConfig.verify|verify} messages.
                 * @param message GossipConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.IGossipConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GossipConfig message, length delimited. Does not implicitly {@link registry.subnet.v1.GossipConfig.verify|verify} messages.
                 * @param message GossipConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.IGossipConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GossipConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GossipConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.GossipConfig;

                /**
                 * Decodes a GossipConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GossipConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.GossipConfig;

                /**
                 * Verifies a GossipConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GossipConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GossipConfig
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.GossipConfig;

                /**
                 * Creates a plain object from a GossipConfig message. Also converts values to other types if specified.
                 * @param message GossipConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.GossipConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GossipConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a GossipAdvertConfig. */
            interface IGossipAdvertConfig {

                /** GossipAdvertConfig bestEffortPercentage */
                bestEffortPercentage?: (number|null);
            }

            /** Represents a GossipAdvertConfig. */
            class GossipAdvertConfig implements IGossipAdvertConfig {

                /**
                 * Constructs a new GossipAdvertConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.IGossipAdvertConfig);

                /** GossipAdvertConfig bestEffortPercentage. */
                public bestEffortPercentage: number;

                /**
                 * Creates a new GossipAdvertConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns GossipAdvertConfig instance
                 */
                public static create(properties?: registry.subnet.v1.IGossipAdvertConfig): registry.subnet.v1.GossipAdvertConfig;

                /**
                 * Encodes the specified GossipAdvertConfig message. Does not implicitly {@link registry.subnet.v1.GossipAdvertConfig.verify|verify} messages.
                 * @param message GossipAdvertConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.IGossipAdvertConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified GossipAdvertConfig message, length delimited. Does not implicitly {@link registry.subnet.v1.GossipAdvertConfig.verify|verify} messages.
                 * @param message GossipAdvertConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.IGossipAdvertConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a GossipAdvertConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns GossipAdvertConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.GossipAdvertConfig;

                /**
                 * Decodes a GossipAdvertConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns GossipAdvertConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.GossipAdvertConfig;

                /**
                 * Verifies a GossipAdvertConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a GossipAdvertConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns GossipAdvertConfig
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.GossipAdvertConfig;

                /**
                 * Creates a plain object from a GossipAdvertConfig message. Also converts values to other types if specified.
                 * @param message GossipAdvertConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.GossipAdvertConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this GossipAdvertConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** SubnetType enum. */
            enum SubnetType {
                SUBNET_TYPE_UNSPECIFIED = 0,
                SUBNET_TYPE_APPLICATION = 1,
                SUBNET_TYPE_SYSTEM = 2,
                SUBNET_TYPE_VERIFIED_APPLICATION = 4
            }

            /** Properties of a SubnetFeatures. */
            interface ISubnetFeatures {

                /** SubnetFeatures ecdsaSignatures */
                ecdsaSignatures?: (boolean|null);

                /** SubnetFeatures canisterSandboxing */
                canisterSandboxing?: (boolean|null);

                /** SubnetFeatures httpRequests */
                httpRequests?: (boolean|null);
            }

            /** Represents a SubnetFeatures. */
            class SubnetFeatures implements ISubnetFeatures {

                /**
                 * Constructs a new SubnetFeatures.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.ISubnetFeatures);

                /** SubnetFeatures ecdsaSignatures. */
                public ecdsaSignatures: boolean;

                /** SubnetFeatures canisterSandboxing. */
                public canisterSandboxing: boolean;

                /** SubnetFeatures httpRequests. */
                public httpRequests: boolean;

                /**
                 * Creates a new SubnetFeatures instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns SubnetFeatures instance
                 */
                public static create(properties?: registry.subnet.v1.ISubnetFeatures): registry.subnet.v1.SubnetFeatures;

                /**
                 * Encodes the specified SubnetFeatures message. Does not implicitly {@link registry.subnet.v1.SubnetFeatures.verify|verify} messages.
                 * @param message SubnetFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.ISubnetFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified SubnetFeatures message, length delimited. Does not implicitly {@link registry.subnet.v1.SubnetFeatures.verify|verify} messages.
                 * @param message SubnetFeatures message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.ISubnetFeatures, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a SubnetFeatures message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns SubnetFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.SubnetFeatures;

                /**
                 * Decodes a SubnetFeatures message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns SubnetFeatures
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.SubnetFeatures;

                /**
                 * Verifies a SubnetFeatures message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a SubnetFeatures message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns SubnetFeatures
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.SubnetFeatures;

                /**
                 * Creates a plain object from a SubnetFeatures message. Also converts values to other types if specified.
                 * @param message SubnetFeatures
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.SubnetFeatures, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this SubnetFeatures to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of an EcdsaConfig. */
            interface IEcdsaConfig {

                /** EcdsaConfig quadruplesToCreateInAdvance */
                quadruplesToCreateInAdvance?: (number|null);
            }

            /** Represents an EcdsaConfig. */
            class EcdsaConfig implements IEcdsaConfig {

                /**
                 * Constructs a new EcdsaConfig.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: registry.subnet.v1.IEcdsaConfig);

                /** EcdsaConfig quadruplesToCreateInAdvance. */
                public quadruplesToCreateInAdvance: number;

                /**
                 * Creates a new EcdsaConfig instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns EcdsaConfig instance
                 */
                public static create(properties?: registry.subnet.v1.IEcdsaConfig): registry.subnet.v1.EcdsaConfig;

                /**
                 * Encodes the specified EcdsaConfig message. Does not implicitly {@link registry.subnet.v1.EcdsaConfig.verify|verify} messages.
                 * @param message EcdsaConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: registry.subnet.v1.IEcdsaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified EcdsaConfig message, length delimited. Does not implicitly {@link registry.subnet.v1.EcdsaConfig.verify|verify} messages.
                 * @param message EcdsaConfig message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: registry.subnet.v1.IEcdsaConfig, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an EcdsaConfig message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns EcdsaConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): registry.subnet.v1.EcdsaConfig;

                /**
                 * Decodes an EcdsaConfig message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns EcdsaConfig
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): registry.subnet.v1.EcdsaConfig;

                /**
                 * Verifies an EcdsaConfig message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an EcdsaConfig message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns EcdsaConfig
                 */
                public static fromObject(object: { [k: string]: any }): registry.subnet.v1.EcdsaConfig;

                /**
                 * Creates a plain object from an EcdsaConfig message. Also converts values to other types if specified.
                 * @param message EcdsaConfig
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: registry.subnet.v1.EcdsaConfig, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this EcdsaConfig to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace routing_table. */
export namespace routing_table {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a CanisterIdRange. */
        interface ICanisterIdRange {

            /** CanisterIdRange startCanisterId */
            startCanisterId?: (types.v1.ICanisterId|null);

            /** CanisterIdRange endCanisterId */
            endCanisterId?: (types.v1.ICanisterId|null);
        }

        /** Represents a CanisterIdRange. */
        class CanisterIdRange implements ICanisterIdRange {

            /**
             * Constructs a new CanisterIdRange.
             * @param [properties] Properties to set
             */
            constructor(properties?: routing_table.v1.ICanisterIdRange);

            /** CanisterIdRange startCanisterId. */
            public startCanisterId?: (types.v1.ICanisterId|null);

            /** CanisterIdRange endCanisterId. */
            public endCanisterId?: (types.v1.ICanisterId|null);

            /**
             * Creates a new CanisterIdRange instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CanisterIdRange instance
             */
            public static create(properties?: routing_table.v1.ICanisterIdRange): routing_table.v1.CanisterIdRange;

            /**
             * Encodes the specified CanisterIdRange message. Does not implicitly {@link routing_table.v1.CanisterIdRange.verify|verify} messages.
             * @param message CanisterIdRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: routing_table.v1.ICanisterIdRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CanisterIdRange message, length delimited. Does not implicitly {@link routing_table.v1.CanisterIdRange.verify|verify} messages.
             * @param message CanisterIdRange message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: routing_table.v1.ICanisterIdRange, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CanisterIdRange message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CanisterIdRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing_table.v1.CanisterIdRange;

            /**
             * Decodes a CanisterIdRange message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CanisterIdRange
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing_table.v1.CanisterIdRange;

            /**
             * Verifies a CanisterIdRange message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CanisterIdRange message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CanisterIdRange
             */
            public static fromObject(object: { [k: string]: any }): routing_table.v1.CanisterIdRange;

            /**
             * Creates a plain object from a CanisterIdRange message. Also converts values to other types if specified.
             * @param message CanisterIdRange
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: routing_table.v1.CanisterIdRange, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CanisterIdRange to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CanisterIdRanges. */
        interface ICanisterIdRanges {

            /** CanisterIdRanges ranges */
            ranges?: (routing_table.v1.ICanisterIdRange[]|null);
        }

        /** Represents a CanisterIdRanges. */
        class CanisterIdRanges implements ICanisterIdRanges {

            /**
             * Constructs a new CanisterIdRanges.
             * @param [properties] Properties to set
             */
            constructor(properties?: routing_table.v1.ICanisterIdRanges);

            /** CanisterIdRanges ranges. */
            public ranges: routing_table.v1.ICanisterIdRange[];

            /**
             * Creates a new CanisterIdRanges instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CanisterIdRanges instance
             */
            public static create(properties?: routing_table.v1.ICanisterIdRanges): routing_table.v1.CanisterIdRanges;

            /**
             * Encodes the specified CanisterIdRanges message. Does not implicitly {@link routing_table.v1.CanisterIdRanges.verify|verify} messages.
             * @param message CanisterIdRanges message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: routing_table.v1.ICanisterIdRanges, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CanisterIdRanges message, length delimited. Does not implicitly {@link routing_table.v1.CanisterIdRanges.verify|verify} messages.
             * @param message CanisterIdRanges message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: routing_table.v1.ICanisterIdRanges, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CanisterIdRanges message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CanisterIdRanges
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing_table.v1.CanisterIdRanges;

            /**
             * Decodes a CanisterIdRanges message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CanisterIdRanges
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing_table.v1.CanisterIdRanges;

            /**
             * Verifies a CanisterIdRanges message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CanisterIdRanges message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CanisterIdRanges
             */
            public static fromObject(object: { [k: string]: any }): routing_table.v1.CanisterIdRanges;

            /**
             * Creates a plain object from a CanisterIdRanges message. Also converts values to other types if specified.
             * @param message CanisterIdRanges
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: routing_table.v1.CanisterIdRanges, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CanisterIdRanges to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a RoutingTable. */
        interface IRoutingTable {

            /** RoutingTable entries */
            entries?: (routing_table.v1.RoutingTable.IEntry[]|null);
        }

        /** Represents a RoutingTable. */
        class RoutingTable implements IRoutingTable {

            /**
             * Constructs a new RoutingTable.
             * @param [properties] Properties to set
             */
            constructor(properties?: routing_table.v1.IRoutingTable);

            /** RoutingTable entries. */
            public entries: routing_table.v1.RoutingTable.IEntry[];

            /**
             * Creates a new RoutingTable instance using the specified properties.
             * @param [properties] Properties to set
             * @returns RoutingTable instance
             */
            public static create(properties?: routing_table.v1.IRoutingTable): routing_table.v1.RoutingTable;

            /**
             * Encodes the specified RoutingTable message. Does not implicitly {@link routing_table.v1.RoutingTable.verify|verify} messages.
             * @param message RoutingTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: routing_table.v1.IRoutingTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified RoutingTable message, length delimited. Does not implicitly {@link routing_table.v1.RoutingTable.verify|verify} messages.
             * @param message RoutingTable message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: routing_table.v1.IRoutingTable, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a RoutingTable message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns RoutingTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing_table.v1.RoutingTable;

            /**
             * Decodes a RoutingTable message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns RoutingTable
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing_table.v1.RoutingTable;

            /**
             * Verifies a RoutingTable message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a RoutingTable message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns RoutingTable
             */
            public static fromObject(object: { [k: string]: any }): routing_table.v1.RoutingTable;

            /**
             * Creates a plain object from a RoutingTable message. Also converts values to other types if specified.
             * @param message RoutingTable
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: routing_table.v1.RoutingTable, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this RoutingTable to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        namespace RoutingTable {

            /** Properties of an Entry. */
            interface IEntry {

                /** Entry range */
                range?: (routing_table.v1.ICanisterIdRange|null);

                /** Entry subnetId */
                subnetId?: (types.v1.ISubnetId|null);
            }

            /** Represents an Entry. */
            class Entry implements IEntry {

                /**
                 * Constructs a new Entry.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: routing_table.v1.RoutingTable.IEntry);

                /** Entry range. */
                public range?: (routing_table.v1.ICanisterIdRange|null);

                /** Entry subnetId. */
                public subnetId?: (types.v1.ISubnetId|null);

                /**
                 * Creates a new Entry instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Entry instance
                 */
                public static create(properties?: routing_table.v1.RoutingTable.IEntry): routing_table.v1.RoutingTable.Entry;

                /**
                 * Encodes the specified Entry message. Does not implicitly {@link routing_table.v1.RoutingTable.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: routing_table.v1.RoutingTable.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Entry message, length delimited. Does not implicitly {@link routing_table.v1.RoutingTable.Entry.verify|verify} messages.
                 * @param message Entry message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: routing_table.v1.RoutingTable.IEntry, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes an Entry message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): routing_table.v1.RoutingTable.Entry;

                /**
                 * Decodes an Entry message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Entry
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): routing_table.v1.RoutingTable.Entry;

                /**
                 * Verifies an Entry message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates an Entry message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Entry
                 */
                public static fromObject(object: { [k: string]: any }): routing_table.v1.RoutingTable.Entry;

                /**
                 * Creates a plain object from an Entry message. Also converts values to other types if specified.
                 * @param message Entry
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: routing_table.v1.RoutingTable.Entry, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Entry to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

/** Namespace types. */
export namespace types {

    /** Namespace v1. */
    namespace v1 {

        /** Properties of a PrincipalId. */
        interface IPrincipalId {

            /** PrincipalId raw */
            raw?: (Uint8Array|null);
        }

        /** Represents a PrincipalId. */
        class PrincipalId implements IPrincipalId {

            /**
             * Constructs a new PrincipalId.
             * @param [properties] Properties to set
             */
            constructor(properties?: types.v1.IPrincipalId);

            /** PrincipalId raw. */
            public raw: Uint8Array;

            /**
             * Creates a new PrincipalId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns PrincipalId instance
             */
            public static create(properties?: types.v1.IPrincipalId): types.v1.PrincipalId;

            /**
             * Encodes the specified PrincipalId message. Does not implicitly {@link types.v1.PrincipalId.verify|verify} messages.
             * @param message PrincipalId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: types.v1.IPrincipalId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified PrincipalId message, length delimited. Does not implicitly {@link types.v1.PrincipalId.verify|verify} messages.
             * @param message PrincipalId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: types.v1.IPrincipalId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a PrincipalId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns PrincipalId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.v1.PrincipalId;

            /**
             * Decodes a PrincipalId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns PrincipalId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.v1.PrincipalId;

            /**
             * Verifies a PrincipalId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a PrincipalId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns PrincipalId
             */
            public static fromObject(object: { [k: string]: any }): types.v1.PrincipalId;

            /**
             * Creates a plain object from a PrincipalId message. Also converts values to other types if specified.
             * @param message PrincipalId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: types.v1.PrincipalId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this PrincipalId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a CanisterId. */
        interface ICanisterId {

            /** CanisterId principalId */
            principalId?: (types.v1.IPrincipalId|null);
        }

        /** Represents a CanisterId. */
        class CanisterId implements ICanisterId {

            /**
             * Constructs a new CanisterId.
             * @param [properties] Properties to set
             */
            constructor(properties?: types.v1.ICanisterId);

            /** CanisterId principalId. */
            public principalId?: (types.v1.IPrincipalId|null);

            /**
             * Creates a new CanisterId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns CanisterId instance
             */
            public static create(properties?: types.v1.ICanisterId): types.v1.CanisterId;

            /**
             * Encodes the specified CanisterId message. Does not implicitly {@link types.v1.CanisterId.verify|verify} messages.
             * @param message CanisterId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: types.v1.ICanisterId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified CanisterId message, length delimited. Does not implicitly {@link types.v1.CanisterId.verify|verify} messages.
             * @param message CanisterId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: types.v1.ICanisterId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CanisterId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns CanisterId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.v1.CanisterId;

            /**
             * Decodes a CanisterId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns CanisterId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.v1.CanisterId;

            /**
             * Verifies a CanisterId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a CanisterId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns CanisterId
             */
            public static fromObject(object: { [k: string]: any }): types.v1.CanisterId;

            /**
             * Creates a plain object from a CanisterId message. Also converts values to other types if specified.
             * @param message CanisterId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: types.v1.CanisterId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this CanisterId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a SubnetId. */
        interface ISubnetId {

            /** SubnetId principalId */
            principalId?: (types.v1.IPrincipalId|null);
        }

        /** Represents a SubnetId. */
        class SubnetId implements ISubnetId {

            /**
             * Constructs a new SubnetId.
             * @param [properties] Properties to set
             */
            constructor(properties?: types.v1.ISubnetId);

            /** SubnetId principalId. */
            public principalId?: (types.v1.IPrincipalId|null);

            /**
             * Creates a new SubnetId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns SubnetId instance
             */
            public static create(properties?: types.v1.ISubnetId): types.v1.SubnetId;

            /**
             * Encodes the specified SubnetId message. Does not implicitly {@link types.v1.SubnetId.verify|verify} messages.
             * @param message SubnetId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: types.v1.ISubnetId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified SubnetId message, length delimited. Does not implicitly {@link types.v1.SubnetId.verify|verify} messages.
             * @param message SubnetId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: types.v1.ISubnetId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SubnetId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns SubnetId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.v1.SubnetId;

            /**
             * Decodes a SubnetId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns SubnetId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.v1.SubnetId;

            /**
             * Verifies a SubnetId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a SubnetId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns SubnetId
             */
            public static fromObject(object: { [k: string]: any }): types.v1.SubnetId;

            /**
             * Creates a plain object from a SubnetId message. Also converts values to other types if specified.
             * @param message SubnetId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: types.v1.SubnetId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this SubnetId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UserId. */
        interface IUserId {

            /** UserId principalId */
            principalId?: (types.v1.IPrincipalId|null);
        }

        /** Represents a UserId. */
        class UserId implements IUserId {

            /**
             * Constructs a new UserId.
             * @param [properties] Properties to set
             */
            constructor(properties?: types.v1.IUserId);

            /** UserId principalId. */
            public principalId?: (types.v1.IPrincipalId|null);

            /**
             * Creates a new UserId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UserId instance
             */
            public static create(properties?: types.v1.IUserId): types.v1.UserId;

            /**
             * Encodes the specified UserId message. Does not implicitly {@link types.v1.UserId.verify|verify} messages.
             * @param message UserId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: types.v1.IUserId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UserId message, length delimited. Does not implicitly {@link types.v1.UserId.verify|verify} messages.
             * @param message UserId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: types.v1.IUserId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UserId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UserId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.v1.UserId;

            /**
             * Decodes a UserId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UserId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.v1.UserId;

            /**
             * Verifies a UserId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UserId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UserId
             */
            public static fromObject(object: { [k: string]: any }): types.v1.UserId;

            /**
             * Creates a plain object from a UserId message. Also converts values to other types if specified.
             * @param message UserId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: types.v1.UserId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UserId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NodeId. */
        interface INodeId {

            /** NodeId principalId */
            principalId?: (types.v1.IPrincipalId|null);
        }

        /** Represents a NodeId. */
        class NodeId implements INodeId {

            /**
             * Constructs a new NodeId.
             * @param [properties] Properties to set
             */
            constructor(properties?: types.v1.INodeId);

            /** NodeId principalId. */
            public principalId?: (types.v1.IPrincipalId|null);

            /**
             * Creates a new NodeId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NodeId instance
             */
            public static create(properties?: types.v1.INodeId): types.v1.NodeId;

            /**
             * Encodes the specified NodeId message. Does not implicitly {@link types.v1.NodeId.verify|verify} messages.
             * @param message NodeId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: types.v1.INodeId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NodeId message, length delimited. Does not implicitly {@link types.v1.NodeId.verify|verify} messages.
             * @param message NodeId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: types.v1.INodeId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NodeId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NodeId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.v1.NodeId;

            /**
             * Decodes a NodeId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NodeId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.v1.NodeId;

            /**
             * Verifies a NodeId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NodeId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NodeId
             */
            public static fromObject(object: { [k: string]: any }): types.v1.NodeId;

            /**
             * Creates a plain object from a NodeId message. Also converts values to other types if specified.
             * @param message NodeId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: types.v1.NodeId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NodeId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a NiDkgId. */
        interface INiDkgId {

            /** NiDkgId startBlockHeight */
            startBlockHeight?: (number|Long|null);

            /** NiDkgId dealerSubnet */
            dealerSubnet?: (Uint8Array|null);

            /** NiDkgId dkgTag */
            dkgTag?: (types.v1.NiDkgTag|null);

            /** NiDkgId remoteTargetId */
            remoteTargetId?: (google.protobuf.IBytesValue|null);
        }

        /** Represents a NiDkgId. */
        class NiDkgId implements INiDkgId {

            /**
             * Constructs a new NiDkgId.
             * @param [properties] Properties to set
             */
            constructor(properties?: types.v1.INiDkgId);

            /** NiDkgId startBlockHeight. */
            public startBlockHeight: (number|Long);

            /** NiDkgId dealerSubnet. */
            public dealerSubnet: Uint8Array;

            /** NiDkgId dkgTag. */
            public dkgTag: types.v1.NiDkgTag;

            /** NiDkgId remoteTargetId. */
            public remoteTargetId?: (google.protobuf.IBytesValue|null);

            /**
             * Creates a new NiDkgId instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NiDkgId instance
             */
            public static create(properties?: types.v1.INiDkgId): types.v1.NiDkgId;

            /**
             * Encodes the specified NiDkgId message. Does not implicitly {@link types.v1.NiDkgId.verify|verify} messages.
             * @param message NiDkgId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: types.v1.INiDkgId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NiDkgId message, length delimited. Does not implicitly {@link types.v1.NiDkgId.verify|verify} messages.
             * @param message NiDkgId message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: types.v1.INiDkgId, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NiDkgId message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NiDkgId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.v1.NiDkgId;

            /**
             * Decodes a NiDkgId message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NiDkgId
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.v1.NiDkgId;

            /**
             * Verifies a NiDkgId message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NiDkgId message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NiDkgId
             */
            public static fromObject(object: { [k: string]: any }): types.v1.NiDkgId;

            /**
             * Creates a plain object from a NiDkgId message. Also converts values to other types if specified.
             * @param message NiDkgId
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: types.v1.NiDkgId, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NiDkgId to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** NiDkgTag enum. */
        enum NiDkgTag {
            NI_DKG_TAG_UNSPECIFIED = 0,
            NI_DKG_TAG_LOW_THRESHOLD = 1,
            NI_DKG_TAG_HIGH_THRESHOLD = 2
        }

        /** Properties of a NominalCycles. */
        interface INominalCycles {

            /** NominalCycles high */
            high?: (number|Long|null);

            /** NominalCycles low */
            low?: (number|Long|null);
        }

        /** Represents a NominalCycles. */
        class NominalCycles implements INominalCycles {

            /**
             * Constructs a new NominalCycles.
             * @param [properties] Properties to set
             */
            constructor(properties?: types.v1.INominalCycles);

            /** NominalCycles high. */
            public high: (number|Long);

            /** NominalCycles low. */
            public low: (number|Long);

            /**
             * Creates a new NominalCycles instance using the specified properties.
             * @param [properties] Properties to set
             * @returns NominalCycles instance
             */
            public static create(properties?: types.v1.INominalCycles): types.v1.NominalCycles;

            /**
             * Encodes the specified NominalCycles message. Does not implicitly {@link types.v1.NominalCycles.verify|verify} messages.
             * @param message NominalCycles message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: types.v1.INominalCycles, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified NominalCycles message, length delimited. Does not implicitly {@link types.v1.NominalCycles.verify|verify} messages.
             * @param message NominalCycles message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: types.v1.INominalCycles, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NominalCycles message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns NominalCycles
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): types.v1.NominalCycles;

            /**
             * Decodes a NominalCycles message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns NominalCycles
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): types.v1.NominalCycles;

            /**
             * Verifies a NominalCycles message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a NominalCycles message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns NominalCycles
             */
            public static fromObject(object: { [k: string]: any }): types.v1.NominalCycles;

            /**
             * Creates a plain object from a NominalCycles message. Also converts values to other types if specified.
             * @param message NominalCycles
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: types.v1.NominalCycles, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this NominalCycles to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace google. */
export namespace google {

    /** Namespace protobuf. */
    namespace protobuf {

        /** Properties of an Empty. */
        interface IEmpty {
        }

        /** Represents an Empty. */
        class Empty implements IEmpty {

            /**
             * Constructs a new Empty.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IEmpty);

            /**
             * Creates a new Empty instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Empty instance
             */
            public static create(properties?: google.protobuf.IEmpty): google.protobuf.Empty;

            /**
             * Encodes the specified Empty message. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Empty message, length delimited. Does not implicitly {@link google.protobuf.Empty.verify|verify} messages.
             * @param message Empty message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IEmpty, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Empty message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Empty;

            /**
             * Decodes an Empty message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Empty
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Empty;

            /**
             * Verifies an Empty message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Empty message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Empty
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Empty;

            /**
             * Creates a plain object from an Empty message. Also converts values to other types if specified.
             * @param message Empty
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Empty, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Empty to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a DoubleValue. */
        interface IDoubleValue {

            /** DoubleValue value */
            value?: (number|null);
        }

        /** Represents a DoubleValue. */
        class DoubleValue implements IDoubleValue {

            /**
             * Constructs a new DoubleValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IDoubleValue);

            /** DoubleValue value. */
            public value: number;

            /**
             * Creates a new DoubleValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns DoubleValue instance
             */
            public static create(properties?: google.protobuf.IDoubleValue): google.protobuf.DoubleValue;

            /**
             * Encodes the specified DoubleValue message. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified DoubleValue message, length delimited. Does not implicitly {@link google.protobuf.DoubleValue.verify|verify} messages.
             * @param message DoubleValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IDoubleValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.DoubleValue;

            /**
             * Decodes a DoubleValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns DoubleValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.DoubleValue;

            /**
             * Verifies a DoubleValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a DoubleValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns DoubleValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.DoubleValue;

            /**
             * Creates a plain object from a DoubleValue message. Also converts values to other types if specified.
             * @param message DoubleValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.DoubleValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this DoubleValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a FloatValue. */
        interface IFloatValue {

            /** FloatValue value */
            value?: (number|null);
        }

        /** Represents a FloatValue. */
        class FloatValue implements IFloatValue {

            /**
             * Constructs a new FloatValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IFloatValue);

            /** FloatValue value. */
            public value: number;

            /**
             * Creates a new FloatValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns FloatValue instance
             */
            public static create(properties?: google.protobuf.IFloatValue): google.protobuf.FloatValue;

            /**
             * Encodes the specified FloatValue message. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified FloatValue message, length delimited. Does not implicitly {@link google.protobuf.FloatValue.verify|verify} messages.
             * @param message FloatValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IFloatValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FloatValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.FloatValue;

            /**
             * Decodes a FloatValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns FloatValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.FloatValue;

            /**
             * Verifies a FloatValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a FloatValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns FloatValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.FloatValue;

            /**
             * Creates a plain object from a FloatValue message. Also converts values to other types if specified.
             * @param message FloatValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.FloatValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this FloatValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int64Value. */
        interface IInt64Value {

            /** Int64Value value */
            value?: (number|Long|null);
        }

        /** Represents an Int64Value. */
        class Int64Value implements IInt64Value {

            /**
             * Constructs a new Int64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt64Value);

            /** Int64Value value. */
            public value: (number|Long);

            /**
             * Creates a new Int64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int64Value instance
             */
            public static create(properties?: google.protobuf.IInt64Value): google.protobuf.Int64Value;

            /**
             * Encodes the specified Int64Value message. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int64Value message, length delimited. Does not implicitly {@link google.protobuf.Int64Value.verify|verify} messages.
             * @param message Int64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int64Value;

            /**
             * Decodes an Int64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int64Value;

            /**
             * Verifies an Int64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int64Value;

            /**
             * Creates a plain object from an Int64Value message. Also converts values to other types if specified.
             * @param message Int64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt64Value. */
        interface IUInt64Value {

            /** UInt64Value value */
            value?: (number|Long|null);
        }

        /** Represents a UInt64Value. */
        class UInt64Value implements IUInt64Value {

            /**
             * Constructs a new UInt64Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt64Value);

            /** UInt64Value value. */
            public value: (number|Long);

            /**
             * Creates a new UInt64Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt64Value instance
             */
            public static create(properties?: google.protobuf.IUInt64Value): google.protobuf.UInt64Value;

            /**
             * Encodes the specified UInt64Value message. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt64Value message, length delimited. Does not implicitly {@link google.protobuf.UInt64Value.verify|verify} messages.
             * @param message UInt64Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt64Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt64Value;

            /**
             * Decodes a UInt64Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt64Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt64Value;

            /**
             * Verifies a UInt64Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt64Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt64Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt64Value;

            /**
             * Creates a plain object from a UInt64Value message. Also converts values to other types if specified.
             * @param message UInt64Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt64Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt64Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of an Int32Value. */
        interface IInt32Value {

            /** Int32Value value */
            value?: (number|null);
        }

        /** Represents an Int32Value. */
        class Int32Value implements IInt32Value {

            /**
             * Constructs a new Int32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IInt32Value);

            /** Int32Value value. */
            public value: number;

            /**
             * Creates a new Int32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns Int32Value instance
             */
            public static create(properties?: google.protobuf.IInt32Value): google.protobuf.Int32Value;

            /**
             * Encodes the specified Int32Value message. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified Int32Value message, length delimited. Does not implicitly {@link google.protobuf.Int32Value.verify|verify} messages.
             * @param message Int32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Int32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.Int32Value;

            /**
             * Decodes an Int32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns Int32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.Int32Value;

            /**
             * Verifies an Int32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates an Int32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns Int32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.Int32Value;

            /**
             * Creates a plain object from an Int32Value message. Also converts values to other types if specified.
             * @param message Int32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.Int32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this Int32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a UInt32Value. */
        interface IUInt32Value {

            /** UInt32Value value */
            value?: (number|null);
        }

        /** Represents a UInt32Value. */
        class UInt32Value implements IUInt32Value {

            /**
             * Constructs a new UInt32Value.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IUInt32Value);

            /** UInt32Value value. */
            public value: number;

            /**
             * Creates a new UInt32Value instance using the specified properties.
             * @param [properties] Properties to set
             * @returns UInt32Value instance
             */
            public static create(properties?: google.protobuf.IUInt32Value): google.protobuf.UInt32Value;

            /**
             * Encodes the specified UInt32Value message. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified UInt32Value message, length delimited. Does not implicitly {@link google.protobuf.UInt32Value.verify|verify} messages.
             * @param message UInt32Value message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IUInt32Value, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.UInt32Value;

            /**
             * Decodes a UInt32Value message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns UInt32Value
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.UInt32Value;

            /**
             * Verifies a UInt32Value message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a UInt32Value message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns UInt32Value
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.UInt32Value;

            /**
             * Creates a plain object from a UInt32Value message. Also converts values to other types if specified.
             * @param message UInt32Value
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.UInt32Value, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this UInt32Value to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BoolValue. */
        interface IBoolValue {

            /** BoolValue value */
            value?: (boolean|null);
        }

        /** Represents a BoolValue. */
        class BoolValue implements IBoolValue {

            /**
             * Constructs a new BoolValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBoolValue);

            /** BoolValue value. */
            public value: boolean;

            /**
             * Creates a new BoolValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BoolValue instance
             */
            public static create(properties?: google.protobuf.IBoolValue): google.protobuf.BoolValue;

            /**
             * Encodes the specified BoolValue message. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BoolValue message, length delimited. Does not implicitly {@link google.protobuf.BoolValue.verify|verify} messages.
             * @param message BoolValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBoolValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BoolValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BoolValue;

            /**
             * Decodes a BoolValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BoolValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BoolValue;

            /**
             * Verifies a BoolValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BoolValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BoolValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BoolValue;

            /**
             * Creates a plain object from a BoolValue message. Also converts values to other types if specified.
             * @param message BoolValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BoolValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BoolValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a StringValue. */
        interface IStringValue {

            /** StringValue value */
            value?: (string|null);
        }

        /** Represents a StringValue. */
        class StringValue implements IStringValue {

            /**
             * Constructs a new StringValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IStringValue);

            /** StringValue value. */
            public value: string;

            /**
             * Creates a new StringValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns StringValue instance
             */
            public static create(properties?: google.protobuf.IStringValue): google.protobuf.StringValue;

            /**
             * Encodes the specified StringValue message. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified StringValue message, length delimited. Does not implicitly {@link google.protobuf.StringValue.verify|verify} messages.
             * @param message StringValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IStringValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StringValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.StringValue;

            /**
             * Decodes a StringValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns StringValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.StringValue;

            /**
             * Verifies a StringValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a StringValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns StringValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.StringValue;

            /**
             * Creates a plain object from a StringValue message. Also converts values to other types if specified.
             * @param message StringValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.StringValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this StringValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }

        /** Properties of a BytesValue. */
        interface IBytesValue {

            /** BytesValue value */
            value?: (Uint8Array|null);
        }

        /** Represents a BytesValue. */
        class BytesValue implements IBytesValue {

            /**
             * Constructs a new BytesValue.
             * @param [properties] Properties to set
             */
            constructor(properties?: google.protobuf.IBytesValue);

            /** BytesValue value. */
            public value: Uint8Array;

            /**
             * Creates a new BytesValue instance using the specified properties.
             * @param [properties] Properties to set
             * @returns BytesValue instance
             */
            public static create(properties?: google.protobuf.IBytesValue): google.protobuf.BytesValue;

            /**
             * Encodes the specified BytesValue message. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encode(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Encodes the specified BytesValue message, length delimited. Does not implicitly {@link google.protobuf.BytesValue.verify|verify} messages.
             * @param message BytesValue message or plain object to encode
             * @param [writer] Writer to encode to
             * @returns Writer
             */
            public static encodeDelimited(message: google.protobuf.IBytesValue, writer?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BytesValue message from the specified reader or buffer.
             * @param reader Reader or buffer to decode from
             * @param [length] Message length if known beforehand
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): google.protobuf.BytesValue;

            /**
             * Decodes a BytesValue message from the specified reader or buffer, length delimited.
             * @param reader Reader or buffer to decode from
             * @returns BytesValue
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): google.protobuf.BytesValue;

            /**
             * Verifies a BytesValue message.
             * @param message Plain object to verify
             * @returns `null` if valid, otherwise the reason why it is not
             */
            public static verify(message: { [k: string]: any }): (string|null);

            /**
             * Creates a BytesValue message from a plain object. Also converts values to their respective internal types.
             * @param object Plain object
             * @returns BytesValue
             */
            public static fromObject(object: { [k: string]: any }): google.protobuf.BytesValue;

            /**
             * Creates a plain object from a BytesValue message. Also converts values to other types if specified.
             * @param message BytesValue
             * @param [options] Conversion options
             * @returns Plain object
             */
            public static toObject(message: google.protobuf.BytesValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

            /**
             * Converts this BytesValue to JSON.
             * @returns JSON object
             */
            public toJSON(): { [k: string]: any };
        }
    }
}

/** Namespace ic_registry_transport. */
export namespace ic_registry_transport {

    /** Namespace pb. */
    namespace pb {

        /** Namespace v1. */
        namespace v1 {

            /** Properties of a RegistryError. */
            interface IRegistryError {

                /** RegistryError code */
                code?: (ic_registry_transport.pb.v1.RegistryError.Code|null);

                /** RegistryError reason */
                reason?: (string|null);

                /** RegistryError key */
                key?: (Uint8Array|null);
            }

            /** Represents a RegistryError. */
            class RegistryError implements IRegistryError {

                /**
                 * Constructs a new RegistryError.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryError);

                /** RegistryError code. */
                public code: ic_registry_transport.pb.v1.RegistryError.Code;

                /** RegistryError reason. */
                public reason: string;

                /** RegistryError key. */
                public key: Uint8Array;

                /**
                 * Creates a new RegistryError instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryError instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryError): ic_registry_transport.pb.v1.RegistryError;

                /**
                 * Encodes the specified RegistryError message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryError.verify|verify} messages.
                 * @param message RegistryError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryError message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryError.verify|verify} messages.
                 * @param message RegistryError message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryError, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryError message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryError;

                /**
                 * Decodes a RegistryError message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryError
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryError;

                /**
                 * Verifies a RegistryError message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryError message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryError
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryError;

                /**
                 * Creates a plain object from a RegistryError message. Also converts values to other types if specified.
                 * @param message RegistryError
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryError, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryError to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace RegistryError {

                /** Code enum. */
                enum Code {
                    MALFORMED_MESSAGE = 0,
                    KEY_NOT_PRESENT = 1,
                    KEY_ALREADY_PRESENT = 2,
                    VERSION_NOT_LATEST = 3,
                    VERSION_BEYOND_LATEST = 4,
                    INTERNAL_ERROR = 999
                }
            }

            /** Properties of a RegistryValue. */
            interface IRegistryValue {

                /** RegistryValue value */
                value?: (Uint8Array|null);

                /** RegistryValue version */
                version?: (number|Long|null);

                /** RegistryValue deletionMarker */
                deletionMarker?: (boolean|null);
            }

            /** Represents a RegistryValue. */
            class RegistryValue implements IRegistryValue {

                /**
                 * Constructs a new RegistryValue.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryValue);

                /** RegistryValue value. */
                public value: Uint8Array;

                /** RegistryValue version. */
                public version: (number|Long);

                /** RegistryValue deletionMarker. */
                public deletionMarker: boolean;

                /**
                 * Creates a new RegistryValue instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryValue instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryValue): ic_registry_transport.pb.v1.RegistryValue;

                /**
                 * Encodes the specified RegistryValue message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryValue.verify|verify} messages.
                 * @param message RegistryValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryValue message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryValue.verify|verify} messages.
                 * @param message RegistryValue message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryValue, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryValue message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryValue;

                /**
                 * Decodes a RegistryValue message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryValue
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryValue;

                /**
                 * Verifies a RegistryValue message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryValue message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryValue
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryValue;

                /**
                 * Creates a plain object from a RegistryValue message. Also converts values to other types if specified.
                 * @param message RegistryValue
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryValue, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryValue to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryDelta. */
            interface IRegistryDelta {

                /** RegistryDelta key */
                key?: (Uint8Array|null);

                /** RegistryDelta values */
                values?: (ic_registry_transport.pb.v1.IRegistryValue[]|null);
            }

            /** Represents a RegistryDelta. */
            class RegistryDelta implements IRegistryDelta {

                /**
                 * Constructs a new RegistryDelta.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryDelta);

                /** RegistryDelta key. */
                public key: Uint8Array;

                /** RegistryDelta values. */
                public values: ic_registry_transport.pb.v1.IRegistryValue[];

                /**
                 * Creates a new RegistryDelta instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryDelta instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryDelta): ic_registry_transport.pb.v1.RegistryDelta;

                /**
                 * Encodes the specified RegistryDelta message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryDelta.verify|verify} messages.
                 * @param message RegistryDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryDelta message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryDelta.verify|verify} messages.
                 * @param message RegistryDelta message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryDelta, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryDelta message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryDelta;

                /**
                 * Decodes a RegistryDelta message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryDelta
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryDelta;

                /**
                 * Verifies a RegistryDelta message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryDelta message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryDelta
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryDelta;

                /**
                 * Creates a plain object from a RegistryDelta message. Also converts values to other types if specified.
                 * @param message RegistryDelta
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryDelta, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryDelta to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryGetChangesSinceRequest. */
            interface IRegistryGetChangesSinceRequest {

                /** RegistryGetChangesSinceRequest version */
                version?: (number|Long|null);
            }

            /** Represents a RegistryGetChangesSinceRequest. */
            class RegistryGetChangesSinceRequest implements IRegistryGetChangesSinceRequest {

                /**
                 * Constructs a new RegistryGetChangesSinceRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryGetChangesSinceRequest);

                /** RegistryGetChangesSinceRequest version. */
                public version: (number|Long);

                /**
                 * Creates a new RegistryGetChangesSinceRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryGetChangesSinceRequest instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryGetChangesSinceRequest): ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest;

                /**
                 * Encodes the specified RegistryGetChangesSinceRequest message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest.verify|verify} messages.
                 * @param message RegistryGetChangesSinceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryGetChangesSinceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryGetChangesSinceRequest message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest.verify|verify} messages.
                 * @param message RegistryGetChangesSinceRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryGetChangesSinceRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryGetChangesSinceRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryGetChangesSinceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest;

                /**
                 * Decodes a RegistryGetChangesSinceRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryGetChangesSinceRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest;

                /**
                 * Verifies a RegistryGetChangesSinceRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryGetChangesSinceRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryGetChangesSinceRequest
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest;

                /**
                 * Creates a plain object from a RegistryGetChangesSinceRequest message. Also converts values to other types if specified.
                 * @param message RegistryGetChangesSinceRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryGetChangesSinceRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryGetChangesSinceRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryGetChangesSinceResponse. */
            interface IRegistryGetChangesSinceResponse {

                /** RegistryGetChangesSinceResponse error */
                error?: (ic_registry_transport.pb.v1.IRegistryError|null);

                /** RegistryGetChangesSinceResponse version */
                version?: (number|Long|null);

                /** RegistryGetChangesSinceResponse deltas */
                deltas?: (ic_registry_transport.pb.v1.IRegistryDelta[]|null);
            }

            /** Represents a RegistryGetChangesSinceResponse. */
            class RegistryGetChangesSinceResponse implements IRegistryGetChangesSinceResponse {

                /**
                 * Constructs a new RegistryGetChangesSinceResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryGetChangesSinceResponse);

                /** RegistryGetChangesSinceResponse error. */
                public error?: (ic_registry_transport.pb.v1.IRegistryError|null);

                /** RegistryGetChangesSinceResponse version. */
                public version: (number|Long);

                /** RegistryGetChangesSinceResponse deltas. */
                public deltas: ic_registry_transport.pb.v1.IRegistryDelta[];

                /**
                 * Creates a new RegistryGetChangesSinceResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryGetChangesSinceResponse instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryGetChangesSinceResponse): ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse;

                /**
                 * Encodes the specified RegistryGetChangesSinceResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse.verify|verify} messages.
                 * @param message RegistryGetChangesSinceResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryGetChangesSinceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryGetChangesSinceResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse.verify|verify} messages.
                 * @param message RegistryGetChangesSinceResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryGetChangesSinceResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryGetChangesSinceResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryGetChangesSinceResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse;

                /**
                 * Decodes a RegistryGetChangesSinceResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryGetChangesSinceResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse;

                /**
                 * Verifies a RegistryGetChangesSinceResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryGetChangesSinceResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryGetChangesSinceResponse
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse;

                /**
                 * Creates a plain object from a RegistryGetChangesSinceResponse message. Also converts values to other types if specified.
                 * @param message RegistryGetChangesSinceResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryGetChangesSinceResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryGetChangesSinceResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryGetValueRequest. */
            interface IRegistryGetValueRequest {

                /** RegistryGetValueRequest version */
                version?: (google.protobuf.IUInt64Value|null);

                /** RegistryGetValueRequest key */
                key?: (Uint8Array|null);
            }

            /** Represents a RegistryGetValueRequest. */
            class RegistryGetValueRequest implements IRegistryGetValueRequest {

                /**
                 * Constructs a new RegistryGetValueRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryGetValueRequest);

                /** RegistryGetValueRequest version. */
                public version?: (google.protobuf.IUInt64Value|null);

                /** RegistryGetValueRequest key. */
                public key: Uint8Array;

                /**
                 * Creates a new RegistryGetValueRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryGetValueRequest instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryGetValueRequest): ic_registry_transport.pb.v1.RegistryGetValueRequest;

                /**
                 * Encodes the specified RegistryGetValueRequest message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetValueRequest.verify|verify} messages.
                 * @param message RegistryGetValueRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryGetValueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryGetValueRequest message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetValueRequest.verify|verify} messages.
                 * @param message RegistryGetValueRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryGetValueRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryGetValueRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryGetValueRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryGetValueRequest;

                /**
                 * Decodes a RegistryGetValueRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryGetValueRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryGetValueRequest;

                /**
                 * Verifies a RegistryGetValueRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryGetValueRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryGetValueRequest
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryGetValueRequest;

                /**
                 * Creates a plain object from a RegistryGetValueRequest message. Also converts values to other types if specified.
                 * @param message RegistryGetValueRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryGetValueRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryGetValueRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryGetValueResponse. */
            interface IRegistryGetValueResponse {

                /** RegistryGetValueResponse error */
                error?: (ic_registry_transport.pb.v1.IRegistryError|null);

                /** RegistryGetValueResponse version */
                version?: (number|Long|null);

                /** RegistryGetValueResponse value */
                value?: (Uint8Array|null);
            }

            /** Represents a RegistryGetValueResponse. */
            class RegistryGetValueResponse implements IRegistryGetValueResponse {

                /**
                 * Constructs a new RegistryGetValueResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryGetValueResponse);

                /** RegistryGetValueResponse error. */
                public error?: (ic_registry_transport.pb.v1.IRegistryError|null);

                /** RegistryGetValueResponse version. */
                public version: (number|Long);

                /** RegistryGetValueResponse value. */
                public value: Uint8Array;

                /**
                 * Creates a new RegistryGetValueResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryGetValueResponse instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryGetValueResponse): ic_registry_transport.pb.v1.RegistryGetValueResponse;

                /**
                 * Encodes the specified RegistryGetValueResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetValueResponse.verify|verify} messages.
                 * @param message RegistryGetValueResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryGetValueResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryGetValueResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetValueResponse.verify|verify} messages.
                 * @param message RegistryGetValueResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryGetValueResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryGetValueResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryGetValueResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryGetValueResponse;

                /**
                 * Decodes a RegistryGetValueResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryGetValueResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryGetValueResponse;

                /**
                 * Verifies a RegistryGetValueResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryGetValueResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryGetValueResponse
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryGetValueResponse;

                /**
                 * Creates a plain object from a RegistryGetValueResponse message. Also converts values to other types if specified.
                 * @param message RegistryGetValueResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryGetValueResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryGetValueResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryGetLatestVersionResponse. */
            interface IRegistryGetLatestVersionResponse {

                /** RegistryGetLatestVersionResponse version */
                version?: (number|Long|null);
            }

            /** Represents a RegistryGetLatestVersionResponse. */
            class RegistryGetLatestVersionResponse implements IRegistryGetLatestVersionResponse {

                /**
                 * Constructs a new RegistryGetLatestVersionResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryGetLatestVersionResponse);

                /** RegistryGetLatestVersionResponse version. */
                public version: (number|Long);

                /**
                 * Creates a new RegistryGetLatestVersionResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryGetLatestVersionResponse instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryGetLatestVersionResponse): ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse;

                /**
                 * Encodes the specified RegistryGetLatestVersionResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse.verify|verify} messages.
                 * @param message RegistryGetLatestVersionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryGetLatestVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryGetLatestVersionResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse.verify|verify} messages.
                 * @param message RegistryGetLatestVersionResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryGetLatestVersionResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryGetLatestVersionResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryGetLatestVersionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse;

                /**
                 * Decodes a RegistryGetLatestVersionResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryGetLatestVersionResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse;

                /**
                 * Verifies a RegistryGetLatestVersionResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryGetLatestVersionResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryGetLatestVersionResponse
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse;

                /**
                 * Creates a plain object from a RegistryGetLatestVersionResponse message. Also converts values to other types if specified.
                 * @param message RegistryGetLatestVersionResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryGetLatestVersionResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryGetLatestVersionResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryMutation. */
            interface IRegistryMutation {

                /** RegistryMutation mutationType */
                mutationType?: (ic_registry_transport.pb.v1.RegistryMutation.Type|null);

                /** RegistryMutation key */
                key?: (Uint8Array|null);

                /** RegistryMutation value */
                value?: (Uint8Array|null);
            }

            /** Represents a RegistryMutation. */
            class RegistryMutation implements IRegistryMutation {

                /**
                 * Constructs a new RegistryMutation.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryMutation);

                /** RegistryMutation mutationType. */
                public mutationType: ic_registry_transport.pb.v1.RegistryMutation.Type;

                /** RegistryMutation key. */
                public key: Uint8Array;

                /** RegistryMutation value. */
                public value: Uint8Array;

                /**
                 * Creates a new RegistryMutation instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryMutation instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryMutation): ic_registry_transport.pb.v1.RegistryMutation;

                /**
                 * Encodes the specified RegistryMutation message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryMutation.verify|verify} messages.
                 * @param message RegistryMutation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryMutation message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryMutation.verify|verify} messages.
                 * @param message RegistryMutation message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryMutation, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryMutation message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryMutation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryMutation;

                /**
                 * Decodes a RegistryMutation message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryMutation
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryMutation;

                /**
                 * Verifies a RegistryMutation message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryMutation message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryMutation
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryMutation;

                /**
                 * Creates a plain object from a RegistryMutation message. Also converts values to other types if specified.
                 * @param message RegistryMutation
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryMutation, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryMutation to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            namespace RegistryMutation {

                /** Type enum. */
                enum Type {
                    INSERT = 0,
                    UPDATE = 1,
                    DELETE = 2,
                    UPSERT = 4
                }
            }

            /** Properties of a Precondition. */
            interface IPrecondition {

                /** Precondition key */
                key?: (Uint8Array|null);

                /** Precondition expectedVersion */
                expectedVersion?: (number|Long|null);
            }

            /** Represents a Precondition. */
            class Precondition implements IPrecondition {

                /**
                 * Constructs a new Precondition.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IPrecondition);

                /** Precondition key. */
                public key: Uint8Array;

                /** Precondition expectedVersion. */
                public expectedVersion: (number|Long);

                /**
                 * Creates a new Precondition instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns Precondition instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IPrecondition): ic_registry_transport.pb.v1.Precondition;

                /**
                 * Encodes the specified Precondition message. Does not implicitly {@link ic_registry_transport.pb.v1.Precondition.verify|verify} messages.
                 * @param message Precondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified Precondition message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.Precondition.verify|verify} messages.
                 * @param message Precondition message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IPrecondition, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a Precondition message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns Precondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.Precondition;

                /**
                 * Decodes a Precondition message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns Precondition
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.Precondition;

                /**
                 * Verifies a Precondition message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a Precondition message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns Precondition
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.Precondition;

                /**
                 * Creates a plain object from a Precondition message. Also converts values to other types if specified.
                 * @param message Precondition
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.Precondition, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this Precondition to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryAtomicMutateRequest. */
            interface IRegistryAtomicMutateRequest {

                /** RegistryAtomicMutateRequest mutations */
                mutations?: (ic_registry_transport.pb.v1.IRegistryMutation[]|null);

                /** RegistryAtomicMutateRequest preconditions */
                preconditions?: (ic_registry_transport.pb.v1.IPrecondition[]|null);
            }

            /** Represents a RegistryAtomicMutateRequest. */
            class RegistryAtomicMutateRequest implements IRegistryAtomicMutateRequest {

                /**
                 * Constructs a new RegistryAtomicMutateRequest.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryAtomicMutateRequest);

                /** RegistryAtomicMutateRequest mutations. */
                public mutations: ic_registry_transport.pb.v1.IRegistryMutation[];

                /** RegistryAtomicMutateRequest preconditions. */
                public preconditions: ic_registry_transport.pb.v1.IPrecondition[];

                /**
                 * Creates a new RegistryAtomicMutateRequest instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryAtomicMutateRequest instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryAtomicMutateRequest): ic_registry_transport.pb.v1.RegistryAtomicMutateRequest;

                /**
                 * Encodes the specified RegistryAtomicMutateRequest message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryAtomicMutateRequest.verify|verify} messages.
                 * @param message RegistryAtomicMutateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryAtomicMutateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryAtomicMutateRequest message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryAtomicMutateRequest.verify|verify} messages.
                 * @param message RegistryAtomicMutateRequest message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryAtomicMutateRequest, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryAtomicMutateRequest message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryAtomicMutateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryAtomicMutateRequest;

                /**
                 * Decodes a RegistryAtomicMutateRequest message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryAtomicMutateRequest
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryAtomicMutateRequest;

                /**
                 * Verifies a RegistryAtomicMutateRequest message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryAtomicMutateRequest message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryAtomicMutateRequest
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryAtomicMutateRequest;

                /**
                 * Creates a plain object from a RegistryAtomicMutateRequest message. Also converts values to other types if specified.
                 * @param message RegistryAtomicMutateRequest
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryAtomicMutateRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryAtomicMutateRequest to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a RegistryAtomicMutateResponse. */
            interface IRegistryAtomicMutateResponse {

                /** RegistryAtomicMutateResponse errors */
                errors?: (ic_registry_transport.pb.v1.IRegistryError[]|null);

                /** RegistryAtomicMutateResponse version */
                version?: (number|Long|null);
            }

            /** Represents a RegistryAtomicMutateResponse. */
            class RegistryAtomicMutateResponse implements IRegistryAtomicMutateResponse {

                /**
                 * Constructs a new RegistryAtomicMutateResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.IRegistryAtomicMutateResponse);

                /** RegistryAtomicMutateResponse errors. */
                public errors: ic_registry_transport.pb.v1.IRegistryError[];

                /** RegistryAtomicMutateResponse version. */
                public version: (number|Long);

                /**
                 * Creates a new RegistryAtomicMutateResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns RegistryAtomicMutateResponse instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.IRegistryAtomicMutateResponse): ic_registry_transport.pb.v1.RegistryAtomicMutateResponse;

                /**
                 * Encodes the specified RegistryAtomicMutateResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryAtomicMutateResponse.verify|verify} messages.
                 * @param message RegistryAtomicMutateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.IRegistryAtomicMutateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified RegistryAtomicMutateResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.RegistryAtomicMutateResponse.verify|verify} messages.
                 * @param message RegistryAtomicMutateResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.IRegistryAtomicMutateResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a RegistryAtomicMutateResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns RegistryAtomicMutateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.RegistryAtomicMutateResponse;

                /**
                 * Decodes a RegistryAtomicMutateResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns RegistryAtomicMutateResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.RegistryAtomicMutateResponse;

                /**
                 * Verifies a RegistryAtomicMutateResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a RegistryAtomicMutateResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns RegistryAtomicMutateResponse
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.RegistryAtomicMutateResponse;

                /**
                 * Creates a plain object from a RegistryAtomicMutateResponse message. Also converts values to other types if specified.
                 * @param message RegistryAtomicMutateResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.RegistryAtomicMutateResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this RegistryAtomicMutateResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }

            /** Properties of a CertifiedResponse. */
            interface ICertifiedResponse {

                /** CertifiedResponse hashTree */
                hashTree?: (messaging.xnet.v1.IMixedHashTree|null);

                /** CertifiedResponse certificate */
                certificate?: (Uint8Array|null);
            }

            /** Represents a CertifiedResponse. */
            class CertifiedResponse implements ICertifiedResponse {

                /**
                 * Constructs a new CertifiedResponse.
                 * @param [properties] Properties to set
                 */
                constructor(properties?: ic_registry_transport.pb.v1.ICertifiedResponse);

                /** CertifiedResponse hashTree. */
                public hashTree?: (messaging.xnet.v1.IMixedHashTree|null);

                /** CertifiedResponse certificate. */
                public certificate: Uint8Array;

                /**
                 * Creates a new CertifiedResponse instance using the specified properties.
                 * @param [properties] Properties to set
                 * @returns CertifiedResponse instance
                 */
                public static create(properties?: ic_registry_transport.pb.v1.ICertifiedResponse): ic_registry_transport.pb.v1.CertifiedResponse;

                /**
                 * Encodes the specified CertifiedResponse message. Does not implicitly {@link ic_registry_transport.pb.v1.CertifiedResponse.verify|verify} messages.
                 * @param message CertifiedResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encode(message: ic_registry_transport.pb.v1.ICertifiedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Encodes the specified CertifiedResponse message, length delimited. Does not implicitly {@link ic_registry_transport.pb.v1.CertifiedResponse.verify|verify} messages.
                 * @param message CertifiedResponse message or plain object to encode
                 * @param [writer] Writer to encode to
                 * @returns Writer
                 */
                public static encodeDelimited(message: ic_registry_transport.pb.v1.ICertifiedResponse, writer?: $protobuf.Writer): $protobuf.Writer;

                /**
                 * Decodes a CertifiedResponse message from the specified reader or buffer.
                 * @param reader Reader or buffer to decode from
                 * @param [length] Message length if known beforehand
                 * @returns CertifiedResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): ic_registry_transport.pb.v1.CertifiedResponse;

                /**
                 * Decodes a CertifiedResponse message from the specified reader or buffer, length delimited.
                 * @param reader Reader or buffer to decode from
                 * @returns CertifiedResponse
                 * @throws {Error} If the payload is not a reader or valid buffer
                 * @throws {$protobuf.util.ProtocolError} If required fields are missing
                 */
                public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): ic_registry_transport.pb.v1.CertifiedResponse;

                /**
                 * Verifies a CertifiedResponse message.
                 * @param message Plain object to verify
                 * @returns `null` if valid, otherwise the reason why it is not
                 */
                public static verify(message: { [k: string]: any }): (string|null);

                /**
                 * Creates a CertifiedResponse message from a plain object. Also converts values to their respective internal types.
                 * @param object Plain object
                 * @returns CertifiedResponse
                 */
                public static fromObject(object: { [k: string]: any }): ic_registry_transport.pb.v1.CertifiedResponse;

                /**
                 * Creates a plain object from a CertifiedResponse message. Also converts values to other types if specified.
                 * @param message CertifiedResponse
                 * @param [options] Conversion options
                 * @returns Plain object
                 */
                public static toObject(message: ic_registry_transport.pb.v1.CertifiedResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

                /**
                 * Converts this CertifiedResponse to JSON.
                 * @returns JSON object
                 */
                public toJSON(): { [k: string]: any };
            }
        }
    }
}

  }
  export default proto;
  