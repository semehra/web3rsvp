/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "./common";

export interface Web3RSVPInterface extends utils.Interface {
  functions: {
    "confirmAllAttendees(bytes32)": FunctionFragment;
    "confirmAttendee(bytes32,address)": FunctionFragment;
    "createNewEvent(uint256,uint256,uint256,string)": FunctionFragment;
    "createNewRSVP(bytes32)": FunctionFragment;
    "idToEvent(bytes32)": FunctionFragment;
    "withdrawUnclaimedDeposits(bytes32)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "confirmAllAttendees"
      | "confirmAttendee"
      | "createNewEvent"
      | "createNewRSVP"
      | "idToEvent"
      | "withdrawUnclaimedDeposits"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "confirmAllAttendees",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "confirmAttendee",
    values: [PromiseOrValue<BytesLike>, PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "createNewEvent",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "createNewRSVP",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "idToEvent",
    values: [PromiseOrValue<BytesLike>]
  ): string;
  encodeFunctionData(
    functionFragment: "withdrawUnclaimedDeposits",
    values: [PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(
    functionFragment: "confirmAllAttendees",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "confirmAttendee",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNewEvent",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "createNewRSVP",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "idToEvent", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "withdrawUnclaimedDeposits",
    data: BytesLike
  ): Result;

  events: {
    "ConfirmedAttendee(bytes32,address)": EventFragment;
    "DepositsPaidOut(bytes32)": EventFragment;
    "NewEventCreated(bytes32,address,uint256,uint256,uint256,string)": EventFragment;
    "NewRSVP(bytes32,address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ConfirmedAttendee"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "DepositsPaidOut"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewEventCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewRSVP"): EventFragment;
}

export interface ConfirmedAttendeeEventObject {
  eventID: string;
  attendeeAddress: string;
}
export type ConfirmedAttendeeEvent = TypedEvent<
  [string, string],
  ConfirmedAttendeeEventObject
>;

export type ConfirmedAttendeeEventFilter =
  TypedEventFilter<ConfirmedAttendeeEvent>;

export interface DepositsPaidOutEventObject {
  eventID: string;
}
export type DepositsPaidOutEvent = TypedEvent<
  [string],
  DepositsPaidOutEventObject
>;

export type DepositsPaidOutEventFilter = TypedEventFilter<DepositsPaidOutEvent>;

export interface NewEventCreatedEventObject {
  eventID: string;
  creatorAddress: string;
  eventTimestamp: BigNumber;
  maxCapacity: BigNumber;
  deposit: BigNumber;
  eventDataCID: string;
}
export type NewEventCreatedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber, BigNumber, string],
  NewEventCreatedEventObject
>;

export type NewEventCreatedEventFilter = TypedEventFilter<NewEventCreatedEvent>;

export interface NewRSVPEventObject {
  eventID: string;
  attendeeAddress: string;
}
export type NewRSVPEvent = TypedEvent<[string, string], NewRSVPEventObject>;

export type NewRSVPEventFilter = TypedEventFilter<NewRSVPEvent>;

export interface Web3RSVP extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: Web3RSVPInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    confirmAllAttendees(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    confirmAttendee(
      eventId: PromiseOrValue<BytesLike>,
      attendee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createNewEvent(
      eventTimestamp: PromiseOrValue<BigNumberish>,
      deposit: PromiseOrValue<BigNumberish>,
      maxCapacity: PromiseOrValue<BigNumberish>,
      eventDataCID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    createNewRSVP(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    idToEvent(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
        eventId: string;
        eventDataCID: string;
        eventOwner: string;
        eventTimestamp: BigNumber;
        deposit: BigNumber;
        maxCapacity: BigNumber;
        paidOut: boolean;
      }
    >;

    withdrawUnclaimedDeposits(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  confirmAllAttendees(
    eventId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  confirmAttendee(
    eventId: PromiseOrValue<BytesLike>,
    attendee: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createNewEvent(
    eventTimestamp: PromiseOrValue<BigNumberish>,
    deposit: PromiseOrValue<BigNumberish>,
    maxCapacity: PromiseOrValue<BigNumberish>,
    eventDataCID: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  createNewRSVP(
    eventId: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  idToEvent(
    arg0: PromiseOrValue<BytesLike>,
    overrides?: CallOverrides
  ): Promise<
    [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
      eventId: string;
      eventDataCID: string;
      eventOwner: string;
      eventTimestamp: BigNumber;
      deposit: BigNumber;
      maxCapacity: BigNumber;
      paidOut: boolean;
    }
  >;

  withdrawUnclaimedDeposits(
    eventId: PromiseOrValue<BytesLike>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    confirmAllAttendees(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    confirmAttendee(
      eventId: PromiseOrValue<BytesLike>,
      attendee: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createNewEvent(
      eventTimestamp: PromiseOrValue<BigNumberish>,
      deposit: PromiseOrValue<BigNumberish>,
      maxCapacity: PromiseOrValue<BigNumberish>,
      eventDataCID: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    createNewRSVP(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;

    idToEvent(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<
      [string, string, string, BigNumber, BigNumber, BigNumber, boolean] & {
        eventId: string;
        eventDataCID: string;
        eventOwner: string;
        eventTimestamp: BigNumber;
        deposit: BigNumber;
        maxCapacity: BigNumber;
        paidOut: boolean;
      }
    >;

    withdrawUnclaimedDeposits(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "ConfirmedAttendee(bytes32,address)"(
      eventID?: null,
      attendeeAddress?: null
    ): ConfirmedAttendeeEventFilter;
    ConfirmedAttendee(
      eventID?: null,
      attendeeAddress?: null
    ): ConfirmedAttendeeEventFilter;

    "DepositsPaidOut(bytes32)"(eventID?: null): DepositsPaidOutEventFilter;
    DepositsPaidOut(eventID?: null): DepositsPaidOutEventFilter;

    "NewEventCreated(bytes32,address,uint256,uint256,uint256,string)"(
      eventID?: null,
      creatorAddress?: null,
      eventTimestamp?: null,
      maxCapacity?: null,
      deposit?: null,
      eventDataCID?: null
    ): NewEventCreatedEventFilter;
    NewEventCreated(
      eventID?: null,
      creatorAddress?: null,
      eventTimestamp?: null,
      maxCapacity?: null,
      deposit?: null,
      eventDataCID?: null
    ): NewEventCreatedEventFilter;

    "NewRSVP(bytes32,address)"(
      eventID?: null,
      attendeeAddress?: null
    ): NewRSVPEventFilter;
    NewRSVP(eventID?: null, attendeeAddress?: null): NewRSVPEventFilter;
  };

  estimateGas: {
    confirmAllAttendees(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    confirmAttendee(
      eventId: PromiseOrValue<BytesLike>,
      attendee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createNewEvent(
      eventTimestamp: PromiseOrValue<BigNumberish>,
      deposit: PromiseOrValue<BigNumberish>,
      maxCapacity: PromiseOrValue<BigNumberish>,
      eventDataCID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    createNewRSVP(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    idToEvent(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    withdrawUnclaimedDeposits(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    confirmAllAttendees(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    confirmAttendee(
      eventId: PromiseOrValue<BytesLike>,
      attendee: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createNewEvent(
      eventTimestamp: PromiseOrValue<BigNumberish>,
      deposit: PromiseOrValue<BigNumberish>,
      maxCapacity: PromiseOrValue<BigNumberish>,
      eventDataCID: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    createNewRSVP(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    idToEvent(
      arg0: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    withdrawUnclaimedDeposits(
      eventId: PromiseOrValue<BytesLike>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
