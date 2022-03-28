/* eslint-disable */
import * as Long from "long";
import * as _m0 from "protobufjs/minimal";

export const protobufPackage = "";

export enum EventType {
  Keyboard = 0,
  MouseClick = 1,
  MouseScroll = 2,
  MouseMove = 3,
  MouseDoubleClick = 4,
  Clipboard = 5,
  DeviceChange = 6,
  Custom = 100,
  UNRECOGNIZED = -1,
}

export function eventTypeFromJSON(object: any): EventType {
  switch (object) {
    case 0:
    case "Keyboard":
      return EventType.Keyboard;
    case 1:
    case "MouseClick":
      return EventType.MouseClick;
    case 2:
    case "MouseScroll":
      return EventType.MouseScroll;
    case 3:
    case "MouseMove":
      return EventType.MouseMove;
    case 4:
    case "MouseDoubleClick":
      return EventType.MouseDoubleClick;
    case 5:
    case "Clipboard":
      return EventType.Clipboard;
    case 6:
    case "DeviceChange":
      return EventType.DeviceChange;
    case 100:
    case "Custom":
      return EventType.Custom;
    case -1:
    case "UNRECOGNIZED":
    default:
      return EventType.UNRECOGNIZED;
  }
}

export function eventTypeToJSON(object: EventType): string {
  switch (object) {
    case EventType.Keyboard:
      return "Keyboard";
    case EventType.MouseClick:
      return "MouseClick";
    case EventType.MouseScroll:
      return "MouseScroll";
    case EventType.MouseMove:
      return "MouseMove";
    case EventType.MouseDoubleClick:
      return "MouseDoubleClick";
    case EventType.Clipboard:
      return "Clipboard";
    case EventType.DeviceChange:
      return "DeviceChange";
    case EventType.Custom:
      return "Custom";
    default:
      return "UNKNOWN";
  }
}

export interface KeyboardData {
  /** true: press, false: release */
  press: boolean;
  code: number;
}

export interface MouseClickData {
  /** true: press, false: release */
  press: boolean;
  code: number;
}

export interface MouseDoubleClickData {
  code: number;
}

export interface MouseMoveData {
  offsetx: number;
  offsety: number;
}

export interface MouseScrollData {
  offsetx: number;
  offsety: number;
}

export interface ClipboardData {
  text: string;
}

export interface DeviceChangeData {
  index: number;
}

export interface Message {
  event: EventType;
  keyboard: KeyboardData | undefined;
  mouseclick: MouseClickData | undefined;
  mousedoubleclick: MouseDoubleClickData | undefined;
  mousemove: MouseMoveData | undefined;
  mousescroll: MouseScrollData | undefined;
  clipboard: ClipboardData | undefined;
  devicechange: DeviceChangeData | undefined;
}

function createBaseKeyboardData(): KeyboardData {
  return { press: false, code: 0 };
}

export const KeyboardData = {
  encode(
    message: KeyboardData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.press === true) {
      writer.uint32(8).bool(message.press);
    }
    if (message.code !== 0) {
      writer.uint32(16).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): KeyboardData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseKeyboardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.press = reader.bool();
          break;
        case 2:
          message.code = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): KeyboardData {
    return {
      press: isSet(object.press) ? Boolean(object.press) : false,
      code: isSet(object.code) ? Number(object.code) : 0,
    };
  },

  toJSON(message: KeyboardData): unknown {
    const obj: any = {};
    message.press !== undefined && (obj.press = message.press);
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<KeyboardData>, I>>(
    object: I
  ): KeyboardData {
    const message = createBaseKeyboardData();
    message.press = object.press ?? false;
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseMouseClickData(): MouseClickData {
  return { press: false, code: 0 };
}

export const MouseClickData = {
  encode(
    message: MouseClickData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.press === true) {
      writer.uint32(8).bool(message.press);
    }
    if (message.code !== 0) {
      writer.uint32(16).int32(message.code);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MouseClickData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMouseClickData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.press = reader.bool();
          break;
        case 2:
          message.code = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MouseClickData {
    return {
      press: isSet(object.press) ? Boolean(object.press) : false,
      code: isSet(object.code) ? Number(object.code) : 0,
    };
  },

  toJSON(message: MouseClickData): unknown {
    const obj: any = {};
    message.press !== undefined && (obj.press = message.press);
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MouseClickData>, I>>(
    object: I
  ): MouseClickData {
    const message = createBaseMouseClickData();
    message.press = object.press ?? false;
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseMouseDoubleClickData(): MouseDoubleClickData {
  return { code: 0 };
}

export const MouseDoubleClickData = {
  encode(
    message: MouseDoubleClickData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.code !== 0) {
      writer.uint32(8).int32(message.code);
    }
    return writer;
  },

  decode(
    input: _m0.Reader | Uint8Array,
    length?: number
  ): MouseDoubleClickData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMouseDoubleClickData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.code = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MouseDoubleClickData {
    return {
      code: isSet(object.code) ? Number(object.code) : 0,
    };
  },

  toJSON(message: MouseDoubleClickData): unknown {
    const obj: any = {};
    message.code !== undefined && (obj.code = Math.round(message.code));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MouseDoubleClickData>, I>>(
    object: I
  ): MouseDoubleClickData {
    const message = createBaseMouseDoubleClickData();
    message.code = object.code ?? 0;
    return message;
  },
};

function createBaseMouseMoveData(): MouseMoveData {
  return { offsetx: 0, offsety: 0 };
}

export const MouseMoveData = {
  encode(
    message: MouseMoveData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.offsetx !== 0) {
      writer.uint32(13).float(message.offsetx);
    }
    if (message.offsety !== 0) {
      writer.uint32(21).float(message.offsety);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MouseMoveData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMouseMoveData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offsetx = reader.float();
          break;
        case 2:
          message.offsety = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MouseMoveData {
    return {
      offsetx: isSet(object.offsetx) ? Number(object.offsetx) : 0,
      offsety: isSet(object.offsety) ? Number(object.offsety) : 0,
    };
  },

  toJSON(message: MouseMoveData): unknown {
    const obj: any = {};
    message.offsetx !== undefined && (obj.offsetx = message.offsetx);
    message.offsety !== undefined && (obj.offsety = message.offsety);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MouseMoveData>, I>>(
    object: I
  ): MouseMoveData {
    const message = createBaseMouseMoveData();
    message.offsetx = object.offsetx ?? 0;
    message.offsety = object.offsety ?? 0;
    return message;
  },
};

function createBaseMouseScrollData(): MouseScrollData {
  return { offsetx: 0, offsety: 0 };
}

export const MouseScrollData = {
  encode(
    message: MouseScrollData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.offsetx !== 0) {
      writer.uint32(13).float(message.offsetx);
    }
    if (message.offsety !== 0) {
      writer.uint32(21).float(message.offsety);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): MouseScrollData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMouseScrollData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.offsetx = reader.float();
          break;
        case 2:
          message.offsety = reader.float();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MouseScrollData {
    return {
      offsetx: isSet(object.offsetx) ? Number(object.offsetx) : 0,
      offsety: isSet(object.offsety) ? Number(object.offsety) : 0,
    };
  },

  toJSON(message: MouseScrollData): unknown {
    const obj: any = {};
    message.offsetx !== undefined && (obj.offsetx = message.offsetx);
    message.offsety !== undefined && (obj.offsety = message.offsety);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<MouseScrollData>, I>>(
    object: I
  ): MouseScrollData {
    const message = createBaseMouseScrollData();
    message.offsetx = object.offsetx ?? 0;
    message.offsety = object.offsety ?? 0;
    return message;
  },
};

function createBaseClipboardData(): ClipboardData {
  return { text: "" };
}

export const ClipboardData = {
  encode(
    message: ClipboardData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.text !== "") {
      writer.uint32(10).string(message.text);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): ClipboardData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseClipboardData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.text = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ClipboardData {
    return {
      text: isSet(object.text) ? String(object.text) : "",
    };
  },

  toJSON(message: ClipboardData): unknown {
    const obj: any = {};
    message.text !== undefined && (obj.text = message.text);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<ClipboardData>, I>>(
    object: I
  ): ClipboardData {
    const message = createBaseClipboardData();
    message.text = object.text ?? "";
    return message;
  },
};

function createBaseDeviceChangeData(): DeviceChangeData {
  return { index: 0 };
}

export const DeviceChangeData = {
  encode(
    message: DeviceChangeData,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.index !== 0) {
      writer.uint32(8).int32(message.index);
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): DeviceChangeData {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseDeviceChangeData();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.index = reader.int32();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): DeviceChangeData {
    return {
      index: isSet(object.index) ? Number(object.index) : 0,
    };
  },

  toJSON(message: DeviceChangeData): unknown {
    const obj: any = {};
    message.index !== undefined && (obj.index = Math.round(message.index));
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<DeviceChangeData>, I>>(
    object: I
  ): DeviceChangeData {
    const message = createBaseDeviceChangeData();
    message.index = object.index ?? 0;
    return message;
  },
};

function createBaseMessage(): Message {
  return {
    event: 0,
    keyboard: undefined,
    mouseclick: undefined,
    mousedoubleclick: undefined,
    mousemove: undefined,
    mousescroll: undefined,
    clipboard: undefined,
    devicechange: undefined,
  };
}

export const Message = {
  encode(
    message: Message,
    writer: _m0.Writer = _m0.Writer.create()
  ): _m0.Writer {
    if (message.event !== 0) {
      writer.uint32(8).int32(message.event);
    }
    if (message.keyboard !== undefined) {
      KeyboardData.encode(message.keyboard, writer.uint32(18).fork()).ldelim();
    }
    if (message.mouseclick !== undefined) {
      MouseClickData.encode(
        message.mouseclick,
        writer.uint32(26).fork()
      ).ldelim();
    }
    if (message.mousedoubleclick !== undefined) {
      MouseDoubleClickData.encode(
        message.mousedoubleclick,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.mousemove !== undefined) {
      MouseMoveData.encode(
        message.mousemove,
        writer.uint32(42).fork()
      ).ldelim();
    }
    if (message.mousescroll !== undefined) {
      MouseScrollData.encode(
        message.mousescroll,
        writer.uint32(50).fork()
      ).ldelim();
    }
    if (message.clipboard !== undefined) {
      ClipboardData.encode(
        message.clipboard,
        writer.uint32(58).fork()
      ).ldelim();
    }
    if (message.devicechange !== undefined) {
      DeviceChangeData.encode(
        message.devicechange,
        writer.uint32(66).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: _m0.Reader | Uint8Array, length?: number): Message {
    const reader = input instanceof _m0.Reader ? input : new _m0.Reader(input);
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = createBaseMessage();
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.event = reader.int32() as any;
          break;
        case 2:
          message.keyboard = KeyboardData.decode(reader, reader.uint32());
          break;
        case 3:
          message.mouseclick = MouseClickData.decode(reader, reader.uint32());
          break;
        case 4:
          message.mousedoubleclick = MouseDoubleClickData.decode(
            reader,
            reader.uint32()
          );
          break;
        case 5:
          message.mousemove = MouseMoveData.decode(reader, reader.uint32());
          break;
        case 6:
          message.mousescroll = MouseScrollData.decode(reader, reader.uint32());
          break;
        case 7:
          message.clipboard = ClipboardData.decode(reader, reader.uint32());
          break;
        case 8:
          message.devicechange = DeviceChangeData.decode(
            reader,
            reader.uint32()
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Message {
    return {
      event: isSet(object.event) ? eventTypeFromJSON(object.event) : 0,
      keyboard: isSet(object.keyboard)
        ? KeyboardData.fromJSON(object.keyboard)
        : undefined,
      mouseclick: isSet(object.mouseclick)
        ? MouseClickData.fromJSON(object.mouseclick)
        : undefined,
      mousedoubleclick: isSet(object.mousedoubleclick)
        ? MouseDoubleClickData.fromJSON(object.mousedoubleclick)
        : undefined,
      mousemove: isSet(object.mousemove)
        ? MouseMoveData.fromJSON(object.mousemove)
        : undefined,
      mousescroll: isSet(object.mousescroll)
        ? MouseScrollData.fromJSON(object.mousescroll)
        : undefined,
      clipboard: isSet(object.clipboard)
        ? ClipboardData.fromJSON(object.clipboard)
        : undefined,
      devicechange: isSet(object.devicechange)
        ? DeviceChangeData.fromJSON(object.devicechange)
        : undefined,
    };
  },

  toJSON(message: Message): unknown {
    const obj: any = {};
    message.event !== undefined && (obj.event = eventTypeToJSON(message.event));
    message.keyboard !== undefined &&
      (obj.keyboard = message.keyboard
        ? KeyboardData.toJSON(message.keyboard)
        : undefined);
    message.mouseclick !== undefined &&
      (obj.mouseclick = message.mouseclick
        ? MouseClickData.toJSON(message.mouseclick)
        : undefined);
    message.mousedoubleclick !== undefined &&
      (obj.mousedoubleclick = message.mousedoubleclick
        ? MouseDoubleClickData.toJSON(message.mousedoubleclick)
        : undefined);
    message.mousemove !== undefined &&
      (obj.mousemove = message.mousemove
        ? MouseMoveData.toJSON(message.mousemove)
        : undefined);
    message.mousescroll !== undefined &&
      (obj.mousescroll = message.mousescroll
        ? MouseScrollData.toJSON(message.mousescroll)
        : undefined);
    message.clipboard !== undefined &&
      (obj.clipboard = message.clipboard
        ? ClipboardData.toJSON(message.clipboard)
        : undefined);
    message.devicechange !== undefined &&
      (obj.devicechange = message.devicechange
        ? DeviceChangeData.toJSON(message.devicechange)
        : undefined);
    return obj;
  },

  fromPartial<I extends Exact<DeepPartial<Message>, I>>(object: I): Message {
    const message = createBaseMessage();
    message.event = object.event ?? 0;
    message.keyboard =
      object.keyboard !== undefined && object.keyboard !== null
        ? KeyboardData.fromPartial(object.keyboard)
        : undefined;
    message.mouseclick =
      object.mouseclick !== undefined && object.mouseclick !== null
        ? MouseClickData.fromPartial(object.mouseclick)
        : undefined;
    message.mousedoubleclick =
      object.mousedoubleclick !== undefined && object.mousedoubleclick !== null
        ? MouseDoubleClickData.fromPartial(object.mousedoubleclick)
        : undefined;
    message.mousemove =
      object.mousemove !== undefined && object.mousemove !== null
        ? MouseMoveData.fromPartial(object.mousemove)
        : undefined;
    message.mousescroll =
      object.mousescroll !== undefined && object.mousescroll !== null
        ? MouseScrollData.fromPartial(object.mousescroll)
        : undefined;
    message.clipboard =
      object.clipboard !== undefined && object.clipboard !== null
        ? ClipboardData.fromPartial(object.clipboard)
        : undefined;
    message.devicechange =
      object.devicechange !== undefined && object.devicechange !== null
        ? DeviceChangeData.fromPartial(object.devicechange)
        : undefined;
    return message;
  },
};

type Builtin =
  | Date
  | Function
  | Uint8Array
  | string
  | number
  | boolean
  | undefined;

export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

type KeysOfUnion<T> = T extends T ? keyof T : never;
export type Exact<P, I extends P> = P extends Builtin
  ? P
  : P & { [K in keyof P]: Exact<P[K], I[K]> } & Record<
        Exclude<keyof I, KeysOfUnion<P>>,
        never
      >;

// If you get a compile-error about 'Constructor<Long> and ... have no overlap',
// add '--ts_proto_opt=esModuleInterop=true' as a flag when calling 'protoc'.
if (_m0.util.Long !== Long) {
  _m0.util.Long = Long as any;
  _m0.configure();
}

function isSet(value: any): boolean {
  return value !== null && value !== undefined;
}
